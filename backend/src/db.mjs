import { Pool } from 'pg';

const connectionString =
  process.env.POSTGRES_URL_NON_POOLING
  ?? process.env.POSTGRES_URL
  ?? process.env.DATABASE_URL
  ?? process.env.DATABASE_URL_UNPOOLED
  ?? null;
const isPostgresEnabled = Boolean(connectionString);

function createPoolConfig() {
  if (!connectionString) return null;

  const url = new URL(connectionString);
  const sslmode = url.searchParams.get('sslmode');
  const channelBinding = url.searchParams.get('channel_binding');

  return {
    connectionString,
    // Serverless runtimes should keep a very small client pool.
    max: Number(process.env.PG_POOL_MAX ?? 3),
    idleTimeoutMillis: Number(process.env.PG_IDLE_TIMEOUT_MS ?? 10_000),
    connectionTimeoutMillis: Number(process.env.PG_CONNECTION_TIMEOUT_MS ?? 10_000),
    ssl:
      sslmode === 'require' || url.protocol === 'postgresqls:'
        ? {
            rejectUnauthorized: false,
          }
        : undefined,
    enableChannelBinding: channelBinding === 'require',
  };
}

const pool = isPostgresEnabled
  ? new Pool(createPoolConfig())
  : null;

function isTransientPostgresError(error) {
  const message = error instanceof Error ? error.message : String(error ?? '');
  return [
    'timeout exceeded when trying to connect',
    'Connection terminated unexpectedly',
    'ECONNRESET',
    'ETIMEDOUT',
    'ENOTFOUND',
  ].some((needle) => message.includes(needle));
}

async function withRetry(operation, attempts = 2) {
  let lastError = null;
  for (let index = 0; index < attempts; index += 1) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      if (!isTransientPostgresError(error) || index === attempts - 1) {
        throw error;
      }
    }
  }

  throw lastError;
}

const schemaStatements = [
  `create table if not exists emira_players (
    id text primary key,
    username text not null,
    display_name text not null,
    badge text not null,
    taps integer not null,
    balance_neaf bigint not null,
    owned_count integer not null,
    wallet_address text
  )`,
  `create table if not exists emira_listings (
    token_id integer primary key,
    name text not null,
    rarity text not null,
    owner text not null,
    price_xlm numeric not null,
    settlement text not null,
    network text not null,
    requires_freighter boolean not null
  )`,
  `create table if not exists emira_wallet_links (
    player_id text primary key,
    address text not null,
    provider text not null,
    linked_at text not null
  )`,
  `create table if not exists emira_sessions (
    sid text primary key,
    payload jsonb not null
  )`,
  `create table if not exists emira_player_progress (
    player_id text primary key,
    tap_power integer not null,
    passive_income integer not null,
    combo integer not null,
    balance_neaf bigint not null
  )`,
  `create table if not exists emira_player_state (
    player_id text primary key,
    state jsonb not null,
    updated_at text not null
  )`,
];

let initialized = false;
let schemaPromise = null;

async function ensureSchema() {
  if (!pool || initialized) return;
  if (!schemaPromise) {
    schemaPromise = (async () => {
      await withRetry(async () => {
        for (const statement of schemaStatements) {
          await pool.query(statement);
        }
      }, 3);
      initialized = true;
    })().finally(() => {
      if (!initialized) {
        schemaPromise = null;
      }
    });
  }
  await schemaPromise;
}

export async function loadPostgresState() {
  if (!pool) return null;
  await ensureSchema();

  const [playersResult, listingsResult, walletLinksResult, sessionsResult, progressResult, playerStateResult] = await withRetry(() => Promise.all([
    pool.query('select * from emira_players order by username asc'),
    pool.query('select * from emira_listings order by token_id asc'),
    pool.query('select * from emira_wallet_links order by linked_at asc'),
    pool.query('select * from emira_sessions'),
    pool.query('select * from emira_player_progress'),
    pool.query('select * from emira_player_state'),
  ]), 3);

  return {
    players: playersResult.rows.map((row) => ({
      id: row.id,
      username: row.username,
      displayName: row.display_name,
      badge: row.badge,
      taps: Number(row.taps),
      balanceNeaf: Number(row.balance_neaf),
      ownedCount: Number(row.owned_count),
      walletAddress: row.wallet_address,
    })),
    listings: listingsResult.rows.map((row) => ({
      tokenId: Number(row.token_id),
      name: row.name,
      rarity: row.rarity,
      owner: row.owner,
      priceXlm: Number(row.price_xlm),
      settlement: row.settlement,
      network: row.network,
      requiresFreighter: row.requires_freighter,
    })),
    walletLinks: walletLinksResult.rows.map((row) => ({
      playerId: row.player_id,
      address: row.address,
      provider: row.provider,
      linkedAt: row.linked_at,
    })),
    sessions: sessionsResult.rows.map((row) => row.payload),
    playerProgress: progressResult.rows.map((row) => ({
      playerId: row.player_id,
      tapPower: Number(row.tap_power),
      passiveIncome: Number(row.passive_income),
      combo: Number(row.combo),
      balanceNeaf: Number(row.balance_neaf),
    })),
    playerStates: playerStateResult.rows.map((row) => ({
      playerId: row.player_id,
      state: row.state,
      updatedAt: row.updated_at,
    })),
  };
}

export async function savePostgresState(state) {
  if (!pool) return false;
  await ensureSchema();

  const client = await withRetry(() => pool.connect(), 3);
  try {
    await client.query('begin');
    await client.query('delete from emira_players');
    await client.query('delete from emira_listings');
    await client.query('delete from emira_wallet_links');
    await client.query('delete from emira_sessions');
    await client.query('delete from emira_player_progress');
    await client.query('delete from emira_player_state');

    for (const player of state.players) {
      await client.query(
        `insert into emira_players (id, username, display_name, badge, taps, balance_neaf, owned_count, wallet_address)
         values ($1,$2,$3,$4,$5,$6,$7,$8)`,
        [player.id, player.username, player.displayName, player.badge, player.taps, player.balanceNeaf, player.ownedCount, player.walletAddress],
      );
    }

    for (const listing of state.listings) {
      await client.query(
        `insert into emira_listings (token_id, name, rarity, owner, price_xlm, settlement, network, requires_freighter)
         values ($1,$2,$3,$4,$5,$6,$7,$8)`,
        [listing.tokenId, listing.name, listing.rarity, listing.owner, listing.priceXlm, listing.settlement, listing.network, listing.requiresFreighter],
      );
    }

    for (const walletLink of state.walletLinks) {
      await client.query(
        `insert into emira_wallet_links (player_id, address, provider, linked_at)
         values ($1,$2,$3,$4)`,
        [walletLink.playerId, walletLink.address, walletLink.provider, walletLink.linkedAt],
      );
    }

    for (const session of state.sessions) {
      await client.query(`insert into emira_sessions (sid, payload) values ($1,$2)`, [session.sid, session]);
    }

    for (const progress of state.playerProgress) {
      await client.query(
        `insert into emira_player_progress (player_id, tap_power, passive_income, combo, balance_neaf)
         values ($1,$2,$3,$4,$5)`,
        [progress.playerId, progress.tapPower, progress.passiveIncome, progress.combo, progress.balanceNeaf],
      );
    }

    for (const playerState of state.playerStates ?? []) {
      await client.query(
        `insert into emira_player_state (player_id, state, updated_at)
         values ($1,$2,$3)`,
        [playerState.playerId, playerState.state, playerState.updatedAt],
      );
    }

    await client.query('commit');
    return true;
  } catch (error) {
    await client.query('rollback');
    throw error;
  } finally {
    client.release();
  }
}

export async function savePlayerBundle({ player, progress, state, walletLink, session }) {
  if (!pool || !player) return false;
  await ensureSchema();

  const client = await withRetry(() => pool.connect(), 3);
  try {
    await client.query('begin');
    await client.query(
      `insert into emira_players (id, username, display_name, badge, taps, balance_neaf, owned_count, wallet_address)
       values ($1,$2,$3,$4,$5,$6,$7,$8)
       on conflict (id) do update set
         username = excluded.username,
         display_name = excluded.display_name,
         badge = excluded.badge,
         taps = excluded.taps,
         balance_neaf = excluded.balance_neaf,
         owned_count = excluded.owned_count,
         wallet_address = excluded.wallet_address`,
      [player.id, player.username, player.displayName, player.badge, player.taps, player.balanceNeaf, player.ownedCount, player.walletAddress],
    );

    if (progress) {
      await client.query(
        `insert into emira_player_progress (player_id, tap_power, passive_income, combo, balance_neaf)
         values ($1,$2,$3,$4,$5)
         on conflict (player_id) do update set
           tap_power = excluded.tap_power,
           passive_income = excluded.passive_income,
           combo = excluded.combo,
           balance_neaf = excluded.balance_neaf`,
        [player.id, progress.tapPower, progress.passiveIncome, progress.combo, progress.balanceNeaf],
      );
    }

    if (state) {
      await client.query(
        `insert into emira_player_state (player_id, state, updated_at)
         values ($1,$2,$3)
         on conflict (player_id) do update set
           state = excluded.state,
           updated_at = excluded.updated_at`,
        [player.id, state, state.savedAt ?? new Date().toISOString()],
      );
    }

    if (walletLink) {
      await client.query(
        `insert into emira_wallet_links (player_id, address, provider, linked_at)
         values ($1,$2,$3,$4)
         on conflict (player_id) do update set
           address = excluded.address,
           provider = excluded.provider,
           linked_at = excluded.linked_at`,
        [player.id, walletLink.address, walletLink.provider, walletLink.linkedAt],
      );
    }

    if (session) {
      await client.query(
        `insert into emira_sessions (sid, payload)
         values ($1,$2)
         on conflict (sid) do update set
           payload = excluded.payload`,
        [session.sid, session],
      );
    }

    await client.query('commit');
    return true;
  } catch (error) {
    await client.query('rollback');
    throw error;
  } finally {
    client.release();
  }
}

export async function saveSessionRecord(session) {
  if (!pool || !session?.sid) return false;
  await ensureSchema();
  await withRetry(() => pool.query(
    `insert into emira_sessions (sid, payload)
     values ($1,$2)
     on conflict (sid) do update set
       payload = excluded.payload`,
    [session.sid, session],
  ), 3);
  return true;
}

export async function saveListingRecord(listing) {
  if (!pool || !listing) return false;
  await ensureSchema();
  await withRetry(() => pool.query(
    `insert into emira_listings (token_id, name, rarity, owner, price_xlm, settlement, network, requires_freighter)
     values ($1,$2,$3,$4,$5,$6,$7,$8)
     on conflict (token_id) do update set
       name = excluded.name,
       rarity = excluded.rarity,
       owner = excluded.owner,
       price_xlm = excluded.price_xlm,
       settlement = excluded.settlement,
       network = excluded.network,
       requires_freighter = excluded.requires_freighter`,
    [listing.tokenId, listing.name, listing.rarity, listing.owner, listing.priceXlm, listing.settlement, listing.network, listing.requiresFreighter],
  ), 3);
  return true;
}

export async function deleteListingRecord(tokenId) {
  if (!pool) return false;
  await ensureSchema();
  await withRetry(() => pool.query('delete from emira_listings where token_id = $1', [tokenId]), 3);
  return true;
}

export function postgresEnabled() {
  return isPostgresEnabled;
}
