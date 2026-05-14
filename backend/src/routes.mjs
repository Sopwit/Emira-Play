import { createOpaqueId, createSessionToken, parseTelegramInitData, verifySessionToken, verifyTelegramInitData } from './auth.mjs';
import { buildTelegramCommandResponse, sendTelegramMessage } from './telegramBot.mjs';
import {
  ensureGuestPlayer,
  ensureTelegramPlayer,
  ensurePlayerState,
  ensureWalletPlayer,
  findListingByTokenId,
  findPlayer,
  listings,
  playerProgress,
  players,
  playerStates,
  persistListing,
  persistPlayerBundle,
  refreshRuntimeState,
  removeListingByTokenId,
  removePersistedListing,
  sessionStore,
  upsertListing,
  walletLinks,
} from './data.mjs';

const MAX_BODY_SIZE_BYTES = 1024 * 1024;
const SUPPORTED_WALLET_PROVIDERS = new Set(['freighter', 'walletconnect']);

function json(response, statusCode, payload) {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  response.end(JSON.stringify(payload));
}

function notFound(response) {
  json(response, 404, { error: 'Not found' });
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let data = '';
    request.on('data', (chunk) => {
      data += chunk;
      if (Buffer.byteLength(data, 'utf8') > MAX_BODY_SIZE_BYTES) {
        reject(new Error('Request body too large'));
        request.destroy();
      }
    });
    request.on('end', () => {
      if (!data) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(data));
      } catch (error) {
        reject(error);
      }
    });
    request.on('error', reject);
  });
}

function readRawBody(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let totalSize = 0;
    request.on('data', (chunk) => {
      const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
      totalSize += buffer.length;
      if (totalSize > MAX_BODY_SIZE_BYTES) {
        reject(new Error('Request body too large'));
        request.destroy();
        return;
      }
      chunks.push(buffer);
    });
    request.on('end', () => {
      resolve(Buffer.concat(chunks).toString('utf8'));
    });
    request.on('error', reject);
  });
}

function isFinitePositiveNumber(value) {
  return typeof value === 'number' && Number.isFinite(value) && value > 0;
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function normalizeWalletProvider(value) {
  if (!isNonEmptyString(value)) return null;
  const normalized = value.trim().toLowerCase();
  return SUPPORTED_WALLET_PROVIDERS.has(normalized) ? normalized : null;
}

function totalOwnedFromState(state) {
  const owned = state?.owned;
  if (!owned || typeof owned !== 'object') return 0;
  return Object.values(owned).reduce((sum, count) => sum + Math.max(0, Number(count) || 0), 0);
}

export async function handleRoute(request, response, config) {
  const url = new URL(request.url ?? '/', 'http://localhost');

  if (request.method === 'OPTIONS') {
    response.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    response.end();
    return;
  }

  if (request.method === 'GET' && url.pathname === '/health') {
    json(response, 200, { ok: true, service: 'emira-backend', mode: 'hybrid', storage: config.storageMode });
    return;
  }

  if (request.method === 'GET' && url.pathname === '/api/v1/config') {
    json(response, 200, {
      mode: 'hybrid',
      chain: 'stellar',
      wallets: {
        web: ['freighter', 'walletconnect'],
        telegram: ['walletconnect'],
        mobile: ['walletconnect'],
        planned: ['passkey-smart-wallet'],
      },
      auth: {
        telegram: 'required-for-mini-app',
        walletLink: 'required-for-on-chain-actions',
      },
      settlementAsset: 'XLM',
      gameplayAsset: 'NEAF',
      network: config.stellarNetwork,
      sorobanRpcUrl: config.sorobanRpcUrl,
      horizonUrl: config.horizonUrl,
      marketplaceAddress: config.marketplaceAddress,
      marketContractId: config.marketContractId,
      rewardsContractId: config.rewardsContractId,
      surfaces: {
        promo: 'Neaf-Web',
        app: 'Emira Core Web',
        miniApp: 'Telegram Mini App',
      },
      telegram: {
        enabled: Boolean(config.telegramBotUsername && config.telegramBotToken && config.telegramWebAppUrl),
        botUsername: config.telegramBotUsername,
        webAppUrl: config.telegramWebAppUrl,
        launchUrl: config.telegramLaunchUrl,
        webhookConfigured: Boolean(config.telegramWebhookSecret),
        validationMode: config.telegramBotToken ? 'telegram-hmac' : config.allowTelegramMock ? 'mock-only' : 'disabled',
      },
      walletConnect: {
        projectIdConfigured: Boolean(config.walletConnectProjectId),
      },
      storage: config.storageMode,
    });
    return;
  }

  if (config.storageMode === 'postgres') {
    await refreshRuntimeState();
  }

  if (request.method === 'POST' && url.pathname === '/api/v1/telegram/webhook') {
    if (!config.telegramBotToken) {
      json(response, 503, { error: 'telegram bot token not configured' });
      return;
    }

    const secretHeader = request.headers['x-telegram-bot-api-secret-token'];
    if (config.telegramWebhookSecret && secretHeader !== config.telegramWebhookSecret) {
      json(response, 401, { error: 'invalid telegram webhook secret' });
      return;
    }

    const rawBody = await readRawBody(request);
    const update = rawBody ? JSON.parse(rawBody) : {};
    const message = update?.message;
    const chatId = message?.chat?.id;
    const text = typeof message?.text === 'string' ? message.text : '';

    if (!chatId || !text) {
      json(response, 200, { ok: true, ignored: true });
      return;
    }

    const reply = buildTelegramCommandResponse(text, config);
    if (!reply) {
      json(response, 200, { ok: true, ignored: true });
      return;
    }

    await sendTelegramMessage({
      token: config.telegramBotToken,
      chatId,
      text: reply.text,
      replyMarkup: reply.reply_markup,
    });

    json(response, 200, { ok: true, handled: true });
    return;
  }

  if (request.method === 'POST' && url.pathname === '/api/v1/auth/telegram') {
    const body = await readBody(request).catch(() => null);
    const initData = typeof body?.initData === 'string' ? body.initData : '';
    const telegramUser = verifyTelegramInitData(initData, config.telegramBotToken)
      ?? (config.allowTelegramMock ? parseTelegramInitData(initData) : null)
      ?? (config.allowTelegramMock && body?.telegramUser && typeof body.telegramUser === 'object' ? body.telegramUser : null);
    if (!telegramUser || !telegramUser.id) {
      json(response, 401, {
        error: 'valid telegram initData required',
        hint: config.allowTelegramMock
          ? 'Provide valid Telegram initData or local mock data.'
          : 'Open the app inside the configured Telegram Mini App and ensure TELEGRAM_BOT_TOKEN is set on the backend.',
      });
      return;
    }

    const player = ensureTelegramPlayer(telegramUser);
    const sessionId = createOpaqueId('sess');
    const sessionRecord = {
      sid: sessionId,
      playerId: player.id,
      surface: 'telegram',
      providerPreference: 'walletconnect',
      telegramId: telegramUser.id,
      createdAt: Date.now(),
      exp: Date.now() + 1000 * 60 * 60 * 24 * 3,
    };
    const token = createSessionToken(sessionRecord, config.sessionJwtSecret);
    sessionStore.set(sessionId, sessionRecord);
    await persistPlayerBundle(player.id, { sessionId });

    json(response, 200, {
      ok: true,
      validationMode: telegramUser.validationMode ?? 'scaffold',
      player,
      session: {
        token,
        expiresAt: new Date(sessionRecord.exp).toISOString(),
        surface: sessionRecord.surface,
        preferredWallet: sessionRecord.providerPreference,
      },
    });
    return;
  }

  if (request.method === 'POST' && url.pathname === '/api/v1/auth/guest') {
    const body = await readBody(request).catch(() => null);
    const guestId = typeof body?.guestId === 'string' ? body.guestId : '';
    const player = ensureGuestPlayer(guestId);
    if (!player) {
      json(response, 400, { error: 'guestId required' });
      return;
    }

    const sessionId = createOpaqueId('sess');
    const sessionRecord = {
      sid: sessionId,
      playerId: player.id,
      surface: 'web',
      providerPreference: 'freighter',
      guestId,
      createdAt: Date.now(),
      exp: Date.now() + 1000 * 60 * 60 * 24 * 14,
    };
    const token = createSessionToken(sessionRecord, config.sessionJwtSecret);
    sessionStore.set(sessionId, sessionRecord);
    await persistPlayerBundle(player.id, { sessionId });

    json(response, 200, {
      ok: true,
      player,
      session: {
        token,
        expiresAt: new Date(sessionRecord.exp).toISOString(),
        surface: sessionRecord.surface,
      },
    });
    return;
  }

  if (request.method === 'GET' && url.pathname === '/api/v1/auth/session') {
    const token = url.searchParams.get('token') ?? '';
    const payload = verifySessionToken(token, config.sessionJwtSecret);
    if (!payload) {
      json(response, 401, { error: 'invalid session token' });
      return;
    }

    const storedSession = sessionStore.get(payload.sid);
    const player = storedSession ? findPlayer(storedSession.playerId) : null;
    json(response, 200, {
      ok: Boolean(storedSession && player),
      session: storedSession ?? null,
      player,
    });
    return;
  }

  if (request.method === 'GET' && url.pathname === '/api/v1/leaderboard') {
    const mode = url.searchParams.get('mode') ?? 'taps';
    const sorted = [...players].sort((left, right) => {
      if (mode === 'balance') return right.balanceNeaf - left.balanceNeaf;
      if (mode === 'owned') return right.ownedCount - left.ownedCount;
      return right.taps - left.taps;
    });
    json(response, 200, { mode, items: sorted });
    return;
  }

  if (request.method === 'GET' && url.pathname === '/api/v1/market/listings') {
    json(response, 200, {
      settlement: 'XLM',
      network: 'Stellar',
      wallet: 'Freighter',
      items: listings,
    });
    return;
  }

  if (request.method === 'GET' && url.pathname.startsWith('/api/v1/profile/')) {
    const playerId = url.pathname.split('/').pop();
    const player = findPlayer(playerId);
    if (!player) {
      notFound(response);
      return;
    }

    json(response, 200, {
      player,
      progress: playerProgress.get(player.id) ?? null,
      profileState: ensurePlayerState(player.id),
      walletLink: walletLinks.get(player.id) ?? null,
      chain: {
        network: config.stellarNetwork,
        wallet: player.walletAddress ? 'linked' : 'unlinked',
      },
    });
    return;
  }

  if (request.method === 'GET' && url.pathname.startsWith('/api/v1/wallet/link/')) {
    const playerId = url.pathname.split('/').pop();
    const player = findPlayer(playerId);
    if (!player) {
      notFound(response);
      return;
    }

    json(response, 200, {
      playerId: player.id,
      walletLink: walletLinks.get(player.id) ?? null,
    });
    return;
  }

  if (request.method === 'POST' && url.pathname === '/api/v1/progress/tap') {
    const body = await readBody(request).catch(() => null);
    if (!body || typeof body.playerId !== 'string') {
      json(response, 400, { error: 'playerId required' });
      return;
    }

    const current = playerProgress.get(body.playerId);
    if (!current) {
      notFound(response);
      return;
    }

    const nextCombo = current.combo >= 25 ? 1 : current.combo + 1;
    const gain = current.tapPower * current.combo;
    const next = {
      ...current,
      combo: nextCombo,
      balanceNeaf: current.balanceNeaf + gain,
    };
    playerProgress.set(body.playerId, next);
    const player = findPlayer(body.playerId);
    if (player) {
      player.taps += 1;
      player.balanceNeaf = next.balanceNeaf;
      const profileState = ensurePlayerState(player.id);
      if (profileState) {
        profileState.tapCount = player.taps;
        profileState.balance = next.balanceNeaf;
        profileState.savedAt = new Date().toISOString();
        playerStates.set(player.id, profileState);
      }
    }
    await persistPlayerBundle(body.playerId);
    json(response, 200, { ok: true, progress: next, gain });
    return;
  }

  if (request.method === 'POST' && url.pathname === '/api/v1/wallet/session') {
    const body = await readBody(request).catch(() => null);
    const provider = normalizeWalletProvider(body?.provider);
    if (!body || !isNonEmptyString(body.address) || !provider) {
      json(response, 400, { error: 'address and provider required' });
      return;
    }

    let player = null;
    const sessionToken = typeof body.sessionToken === 'string' ? body.sessionToken : '';
    const payload = sessionToken ? verifySessionToken(sessionToken, config.sessionJwtSecret) : null;
    const existingSession = payload ? sessionStore.get(payload.sid) : null;

    if (existingSession?.playerId) {
      player = findPlayer(existingSession.playerId);
    }

    if (!player) {
      player = ensureWalletPlayer(body.address, provider);
    }

    player.walletAddress = body.address;
    const walletLink = {
      id: createOpaqueId('wlink'),
      playerId: player.id,
      address: body.address,
      provider,
      linkedAt: new Date().toISOString(),
      network: config.stellarNetwork,
    };
    walletLinks.set(player.id, walletLink);
    const profileState = ensurePlayerState(player.id);
    await persistPlayerBundle(player.id);

    json(response, 200, {
      ok: true,
      player,
      walletLink,
      profileState,
    });
    return;
  }

  if (request.method === 'POST' && url.pathname === '/api/v1/profile/state') {
    const body = await readBody(request).catch(() => null);
    if (!body || typeof body.playerId !== 'string' || !body.state || typeof body.state !== 'object') {
      json(response, 400, { error: 'playerId and state required' });
      return;
    }

    const player = findPlayer(body.playerId);
    if (!player) {
      notFound(response);
      return;
    }

    const state = {
      ...body.state,
      savedAt: new Date().toISOString(),
    };
    playerStates.set(player.id, state);

    player.displayName = typeof state.profileDisplayName === 'string' && state.profileDisplayName.trim()
      ? state.profileDisplayName.trim().slice(0, 28)
      : player.displayName;
    player.taps = Math.max(0, Number(state.tapCount) || 0);
    player.balanceNeaf = Math.max(0, Number(state.balance) || 0);
    player.ownedCount = totalOwnedFromState(state);

    const upgrades = state.upgradeLevels && typeof state.upgradeLevels === 'object' ? state.upgradeLevels : {};
    playerProgress.set(player.id, {
      tapPower: 1 + Math.max(0, Number(upgrades['tap-boost']) || 0),
      passiveIncome: 120 + Math.max(0, Number(upgrades['hourly-flow']) || 0) * 8,
      combo: playerProgress.get(player.id)?.combo ?? 1,
      balanceNeaf: player.balanceNeaf,
    });

    await persistPlayerBundle(player.id);
    json(response, 200, { ok: true, player, profileState: state });
    return;
  }

  if (request.method === 'POST' && url.pathname === '/api/v1/market/prepare-buy') {
    const body = await readBody(request).catch(() => null);
    if (!body || !Number.isInteger(body.tokenId) || !isNonEmptyString(body.buyerAddress)) {
      json(response, 400, { error: 'tokenId and buyerAddress required' });
      return;
    }

    const listing = findListingByTokenId(body.tokenId);
    if (!listing) {
      notFound(response);
      return;
    }

    json(response, 200, {
      ok: true,
      mode: 'freighter-sign-required',
      settlement: 'XLM',
      network: config.stellarNetwork,
      buyerAddress: body.buyerAddress,
      destinationAddress: config.marketplaceAddress,
      amountXlm: listing.priceXlm,
      memoText: `EMIRA-${listing.tokenId}`,
      soroban: {
        contractId: config.marketContractId,
        nextAction: 'sign with Freighter then submit to Stellar',
      },
    });
    return;
  }

  if (request.method === 'POST' && url.pathname === '/api/v1/market/prepare-list') {
    const body = await readBody(request).catch(() => null);
    if (
      !body ||
      !Number.isInteger(body.tokenId) ||
      !isNonEmptyString(body.ownerAddress) ||
      !isFinitePositiveNumber(body.priceXlm) ||
      !isNonEmptyString(body.name) ||
      !isNonEmptyString(body.rarity)
    ) {
      json(response, 400, { error: 'tokenId, ownerAddress, priceXlm, name and rarity required' });
      return;
    }

    const listing = upsertListing({
      tokenId: body.tokenId,
      name: body.name,
      rarity: body.rarity,
      owner: body.ownerAddress,
      priceXlm: Number(body.priceXlm),
      settlement: 'XLM',
      network: 'Stellar',
      requiresFreighter: body.provider !== 'walletconnect',
    });
    await persistListing(listing.tokenId);

    json(response, 200, {
      ok: true,
      mode: 'wallet-sign-required',
      settlement: 'XLM',
      listing,
      memoText: `EMIRA-LIST-${listing.tokenId}`,
      soroban: {
        contractId: config.marketContractId,
        nextAction: 'sign listing approval and submit to Stellar',
      },
    });
    return;
  }

  if (request.method === 'POST' && url.pathname === '/api/v1/market/prepare-cancel') {
    const body = await readBody(request).catch(() => null);
    if (!body || !Number.isInteger(body.tokenId)) {
      json(response, 400, { error: 'tokenId required' });
      return;
    }

    const removed = removeListingByTokenId(body.tokenId);
    if (!removed) {
      notFound(response);
      return;
    }
    await removePersistedListing(removed.tokenId);

    json(response, 200, {
      ok: true,
      mode: 'wallet-sign-required',
      settlement: 'XLM',
      removed,
      memoText: `EMIRA-CANCEL-${removed.tokenId}`,
      soroban: {
        contractId: config.marketContractId,
        nextAction: 'sign cancel approval and submit to Stellar',
      },
    });
    return;
  }

  if (request.method === 'POST' && url.pathname === '/api/v1/wallet/link') {
    const body = await readBody(request).catch(() => null);
    const token = body?.sessionToken;
    const address = body?.address;
    const provider = normalizeWalletProvider(body?.provider);

    if (typeof token !== 'string' || !isNonEmptyString(address) || !provider) {
      json(response, 400, { error: 'sessionToken, address and provider required' });
      return;
    }

    const payload = verifySessionToken(token, config.sessionJwtSecret);
    if (!payload) {
      json(response, 401, { error: 'invalid session token' });
      return;
    }

    const session = sessionStore.get(payload.sid);
    if (!session) {
      json(response, 401, { error: 'session expired or missing' });
      return;
    }

    const player = findPlayer(session.playerId);
    if (!player) {
      notFound(response);
      return;
    }

    player.walletAddress = address;
    const walletLink = {
      id: createOpaqueId('wlink'),
      playerId: player.id,
      address,
      provider,
      linkedAt: new Date().toISOString(),
      network: config.stellarNetwork,
    };
    walletLinks.set(player.id, walletLink);
    await persistPlayerBundle(player.id);

    json(response, 200, {
      ok: true,
      player,
      walletLink,
    });
    return;
  }

  notFound(response);
}
