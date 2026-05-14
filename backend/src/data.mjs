import {
  deleteListingRecord,
  loadPostgresState,
  postgresEnabled,
  saveListingRecord,
  savePlayerBundle as savePostgresPlayerBundle,
  savePostgresState,
  saveSessionRecord,
} from './db.mjs';
import { loadRuntimeState, saveRuntimeState } from './store.mjs';

const fallbackState = {
  players: [],
  listings: [],
  walletLinks: [],
  sessions: [],
  playerProgress: [],
  playerStates: [],
};

function hasSeedableRows(value) {
  return Array.isArray(value) && value.length > 0;
}

function isSeededPlayer(player) {
  if (!player || typeof player !== 'object') return false;
  if (['emira_player', 'cloud_paws', 'mint_whisker'].includes(player.id)) return true;
  if (typeof player.walletAddress === 'string' && player.walletAddress.includes('XXXXX')) return true;
  return false;
}

function isSeededListing(listing) {
  if (!listing || typeof listing !== 'object') return false;
  if (['MOTTO45', 'neafguild'].includes(listing.owner)) return true;
  return false;
}

function sanitizeRuntimeState(state) {
  if (!state) return state;
  const players = Array.isArray(state.players) ? state.players.filter((player) => !isSeededPlayer(player)) : [];
  const validPlayerIds = new Set(players.map((player) => player.id));
  const listings = Array.isArray(state.listings) ? state.listings.filter((listing) => !isSeededListing(listing)) : [];
  const walletLinks = Array.isArray(state.walletLinks) ? state.walletLinks.filter((item) => validPlayerIds.has(item.playerId)) : [];
  const sessions = Array.isArray(state.sessions) ? state.sessions.filter((session) => validPlayerIds.has(session.playerId)) : [];
  const playerProgress = Array.isArray(state.playerProgress) ? state.playerProgress.filter((item) => validPlayerIds.has(item.playerId)) : [];
  const playerStates = Array.isArray(state.playerStates) ? state.playerStates.filter((item) => validPlayerIds.has(item.playerId)) : [];
  return {
    ...state,
    players,
    listings,
    walletLinks,
    sessions,
    playerProgress,
    playerStates,
  };
}

function mergeRuntimeState(state) {
  if (!state) return fallbackState;
  const sanitized = sanitizeRuntimeState(state);

  return {
    players: hasSeedableRows(sanitized.players) ? sanitized.players : fallbackState.players,
    listings: hasSeedableRows(sanitized.listings) ? sanitized.listings : fallbackState.listings,
    walletLinks: hasSeedableRows(sanitized.walletLinks) ? sanitized.walletLinks : fallbackState.walletLinks,
    sessions: Array.isArray(sanitized.sessions) ? sanitized.sessions : fallbackState.sessions,
    playerProgress: hasSeedableRows(sanitized.playerProgress) ? sanitized.playerProgress : fallbackState.playerProgress,
    playerStates: hasSeedableRows(sanitized.playerStates) ? sanitized.playerStates : fallbackState.playerStates,
  };
}

const runtimeState = mergeRuntimeState((await loadPostgresState()) ?? loadRuntimeState(fallbackState));

export const players = runtimeState.players;
export const listings = runtimeState.listings;

export function findListingByTokenId(tokenId) {
  return listings.find((item) => item.tokenId === tokenId) ?? null;
}

export function removeListingByTokenId(tokenId) {
  const index = listings.findIndex((item) => item.tokenId === tokenId);
  if (index === -1) return null;
  const [listing] = listings.splice(index, 1);
  return listing;
}

export function upsertListing(nextListing) {
  const existingIndex = listings.findIndex((item) => item.tokenId === nextListing.tokenId);
  if (existingIndex >= 0) {
    listings.splice(existingIndex, 1, nextListing);
  } else {
    listings.push(nextListing);
  }
  return nextListing;
}

export const playerProgress = new Map(
  runtimeState.playerProgress.map((progress) => [
    progress.playerId,
    {
      tapPower: progress.tapPower,
      passiveIncome: progress.passiveIncome,
      combo: progress.combo,
      balanceNeaf: progress.balanceNeaf,
    },
  ]),
);

export const sessionStore = new Map((runtimeState.sessions ?? []).map((session) => [session.sid, session]));
export const walletLinks = new Map((runtimeState.walletLinks ?? []).map((item) => [item.playerId, item]));
export const playerStates = new Map((runtimeState.playerStates ?? []).map((item) => [item.playerId, item.state]));

function replaceArrayContents(target, next) {
  target.splice(0, target.length, ...next);
}

function replaceMapContents(target, entries) {
  target.clear();
  for (const [key, value] of entries) {
    target.set(key, value);
  }
}

export async function refreshRuntimeState() {
  const nextState = postgresEnabled()
    ? await loadPostgresState()
    : loadRuntimeState(fallbackState);

  const merged = mergeRuntimeState(nextState ?? fallbackState);
  replaceArrayContents(players, merged.players);
  replaceArrayContents(listings, merged.listings);
  replaceMapContents(
    playerProgress,
    merged.playerProgress.map((progress) => [
      progress.playerId,
      {
        tapPower: progress.tapPower,
        passiveIncome: progress.passiveIncome,
        combo: progress.combo,
        balanceNeaf: progress.balanceNeaf,
      },
    ]),
  );
  replaceMapContents(sessionStore, (merged.sessions ?? []).map((session) => [session.sid, session]));
  replaceMapContents(walletLinks, (merged.walletLinks ?? []).map((item) => [item.playerId, item]));
  replaceMapContents(playerStates, (merged.playerStates ?? []).map((item) => [item.playerId, item.state]));
}

function slugify(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .toLowerCase();
}

function buildDefaultPlayerState(player) {
  return {
    balance: player.balanceNeaf,
    tapCount: player.taps,
    owned: {},
    upgradeLevels: {
      'tap-boost': 0,
      'hourly-flow': 0,
      'nft-drop-lens': 0,
    },
    selectedTreeId: 'Neaf',
    ownedTreeIds: ['Neaf'],
    ownedProfileBackgroundIds: ['ev1'],
    profileDisplayName: player.displayName,
    selectedProfileCatNames: [],
    selectedProfileBackgroundId: 'ev1',
    timedChests: {
      neaf: 20 * 60,
      cat: 40 * 60,
      elite: 60 * 60,
    },
    savedAt: new Date().toISOString(),
  };
}

export function ensurePlayerState(playerId) {
  const existing = playerStates.get(playerId);
  if (existing) return existing;
  const player = findPlayer(playerId);
  if (!player) return null;
  const next = buildDefaultPlayerState(player);
  playerStates.set(player.id, next);
  return next;
}

export function persistRuntimeState() {
  const snapshot = {
    players,
    listings,
    walletLinks: [...walletLinks.values()],
    sessions: [...sessionStore.values()],
    playerProgress: [...playerProgress.entries()].map(([playerId, progress]) => ({
      playerId,
      ...progress,
    })),
    playerStates: [...playerStates.entries()].map(([playerId, state]) => ({
      playerId,
      state,
      updatedAt: state.savedAt ?? new Date().toISOString(),
    })),
  };

  saveRuntimeState(snapshot);
  if (postgresEnabled()) {
    return savePostgresState(snapshot);
  }
  return Promise.resolve(true);
}

export async function persistPlayerBundle(playerId, options = {}) {
  if (!playerId) return false;
  if (!postgresEnabled()) {
    return persistRuntimeState();
  }

  const player = findPlayer(playerId);
  if (!player) return false;

  return savePostgresPlayerBundle({
    player,
    progress: playerProgress.get(playerId) ?? null,
    state: playerStates.get(playerId) ?? null,
    walletLink: walletLinks.get(playerId) ?? null,
    session: options.sessionId ? (sessionStore.get(options.sessionId) ?? null) : null,
  });
}

export async function persistSession(sessionId) {
  if (!sessionId) return false;
  if (!postgresEnabled()) {
    return persistRuntimeState();
  }

  const session = sessionStore.get(sessionId);
  if (!session) return false;
  return saveSessionRecord(session);
}

export async function persistListing(tokenId) {
  if (!postgresEnabled()) {
    return persistRuntimeState();
  }

  const listing = findListingByTokenId(tokenId);
  if (!listing) return false;
  return saveListingRecord(listing);
}

export async function removePersistedListing(tokenId) {
  if (!postgresEnabled()) {
    return persistRuntimeState();
  }

  return deleteListingRecord(tokenId);
}

export function findPlayer(identifier) {
  if (!identifier) return null;
  return players.find((item) => item.id === identifier || item.username === `@${identifier}` || item.username === identifier) ?? null;
}

export function ensureTelegramPlayer(telegramUser) {
  const username = telegramUser.username ? `@${telegramUser.username}` : `@visitor_${telegramUser.id}`;
  const existing = findPlayer(telegramUser.username) ?? players.find((item) => item.username === username) ?? null;
  if (existing) {
    return existing;
  }

  const displayNameSource = telegramUser.username || `${telegramUser.firstName ?? 'Emira'} ${telegramUser.lastName ?? 'Guest'}`;
  const next = {
    id: slugify(telegramUser.username || telegramUser.id || displayNameSource),
    username,
    displayName: displayNameSource
      .split(/[_\s]+/)
      .filter(Boolean)
      .map((part) => `${part.slice(0, 1).toUpperCase()}${part.slice(1).toLowerCase()}`)
      .join(' '),
    badge: 'Yeni Yolcu',
    taps: 0,
    balanceNeaf: 0,
    ownedCount: 0,
    walletAddress: null,
    telegramId: telegramUser.id,
  };

  players.push(next);
  playerProgress.set(next.id, {
    tapPower: 1,
    passiveIncome: 120,
    combo: 1,
    balanceNeaf: next.balanceNeaf,
  });
  playerStates.set(next.id, buildDefaultPlayerState(next));
  return next;
}

export function ensureWalletPlayer(address, provider = 'freighter') {
  const linked = [...walletLinks.values()].find((item) => item.address === address);
  if (linked) {
    const player = findPlayer(linked.playerId);
    if (player) {
      ensurePlayerState(player.id);
      return player;
    }
  }

  const existing = players.find((item) => item.walletAddress === address) ?? null;
  if (existing) {
    ensurePlayerState(existing.id);
    return existing;
  }

  const suffix = `${address.slice(0, 4)}_${address.slice(-4)}`;
  const next = {
    id: `wallet_${slugify(suffix)}`,
    username: `@${slugify(suffix)}`,
    displayName: `Wallet ${address.slice(0, 4)}...${address.slice(-4)}`,
    badge: provider === 'walletconnect' ? 'Mobil Gezgin' : 'Zincir Yolcusu',
    taps: 0,
    balanceNeaf: 0,
    ownedCount: 0,
    walletAddress: address,
  };

  players.push(next);
  playerProgress.set(next.id, {
    tapPower: 1,
    passiveIncome: 120,
    combo: 1,
    balanceNeaf: next.balanceNeaf,
  });
  playerStates.set(next.id, buildDefaultPlayerState(next));
  walletLinks.set(next.id, {
    playerId: next.id,
    address,
    provider,
    linkedAt: new Date().toISOString(),
  });
  return next;
}

export function ensureGuestPlayer(guestId) {
  const normalizedGuestId = slugify(String(guestId ?? '').trim());
  if (!normalizedGuestId) return null;

  const id = `guest_${normalizedGuestId}`;
  const existing = findPlayer(id) ?? players.find((item) => item.id === id || item.username === `@${id}`) ?? null;
  if (existing) {
    ensurePlayerState(existing.id);
    return existing;
  }

  const next = {
    id,
    username: `@${id}`,
    displayName: `Guest ${normalizedGuestId.slice(0, 6).toUpperCase()}`,
    badge: 'Gezgin',
    taps: 0,
    balanceNeaf: 0,
    ownedCount: 0,
    walletAddress: null,
  };

  players.push(next);
  playerProgress.set(next.id, {
    tapPower: 1,
    passiveIncome: 120,
    combo: 1,
    balanceNeaf: next.balanceNeaf,
  });
  playerStates.set(next.id, buildDefaultPlayerState(next));
  return next;
}
