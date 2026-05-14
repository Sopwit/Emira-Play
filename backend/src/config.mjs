import { postgresEnabled } from './db.mjs';

const PLACEHOLDER_PREFIXES = ['your-', 'replace-with-', 'example-', 'demo-'];
const PLACEHOLDER_VALUES = new Set([
  '',
  'change-me',
  '123456:telegram-bot-token',
  'your-walletconnect-project-id',
  'your_walletconnect_project_id',
  'your_bot_token',
  'your_random_webhook_secret',
  'your_long_random_secret',
  'your_postgres_url_if_used',
]);

function isPlaceholder(value) {
  if (!value) return true;
  const trimmed = String(value).trim();
  if (!trimmed) return true;
  if (PLACEHOLDER_VALUES.has(trimmed)) return true;
  return PLACEHOLDER_PREFIXES.some((prefix) => trimmed.startsWith(prefix));
}

function requiredInProduction(name, value) {
  if (isPlaceholder(value)) {
    throw new Error(`${name} must be set to a non-placeholder value in production.`);
  }
}

export function createRuntimeConfig() {
  const nodeEnv = process.env.NODE_ENV ?? 'development';
  const isProduction = nodeEnv === 'production';
  const telegramBotUsername = process.env.TELEGRAM_BOT_USERNAME ?? '';
  const telegramWebAppUrl = process.env.TELEGRAM_WEBAPP_URL ?? '';
  const telegramStartapp = process.env.TELEGRAM_STARTAPP ?? 'emira-core';
  const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN ?? '';
  const telegramWebhookSecret = process.env.TELEGRAM_WEBHOOK_SECRET ?? '';
  const sessionJwtSecret = process.env.SESSION_JWT_SECRET ?? '';
  const walletConnectProjectId = process.env.WALLETCONNECT_PROJECT_ID ?? '';
  const allowTelegramMock = process.env.ALLOW_TELEGRAM_MOCK === 'true';

  if (isProduction) {
    requiredInProduction('SESSION_JWT_SECRET', sessionJwtSecret);
    if (allowTelegramMock) {
      throw new Error('ALLOW_TELEGRAM_MOCK must be false in production.');
    }
    if (!isPlaceholder(telegramBotToken)) {
      requiredInProduction('TELEGRAM_WEBHOOK_SECRET', telegramWebhookSecret);
      requiredInProduction('TELEGRAM_BOT_USERNAME', telegramBotUsername);
      requiredInProduction('TELEGRAM_WEBAPP_URL', telegramWebAppUrl);
    }
  }

  return {
    nodeEnv,
    isProduction,
    stellarNetwork: process.env.STELLAR_NETWORK ?? 'testnet',
    sorobanRpcUrl: process.env.SOROBAN_RPC_URL ?? 'https://soroban-testnet.stellar.org',
    horizonUrl: process.env.STELLAR_HORIZON_URL ?? 'https://horizon-testnet.stellar.org',
    marketplaceAddress: process.env.STELLAR_MARKETPLACE_ADDRESS ?? 'GCZGKZXINPUV6PMBHWOGKX4B2LAB4PUUOFSV4KJ765C6ZQXZNRDDF6SB',
    marketContractId: process.env.SOROBAN_MARKET_CONTRACT_ID ?? 'CBRKJVWTTF5DO2ZVIDOP3TSBTPYQXHGQIPA4ANFI7WKG4X65Y3MCCXJI',
    rewardsContractId: process.env.SOROBAN_REWARDS_CONTRACT_ID ?? 'CCO434MY5ASOQIJALSN2KINXVEQMJKCW3HRMVRZSF2MOXUI7O3V4WTJD',
    telegramBotUsername,
    telegramBotToken,
    telegramWebhookSecret,
    telegramWebAppUrl,
    telegramStartapp,
    walletConnectProjectId,
    sessionJwtSecret,
    allowTelegramMock,
    telegramLaunchUrl: telegramBotUsername
      ? `https://t.me/${telegramBotUsername}?startapp=${encodeURIComponent(telegramStartapp)}`
      : null,
    storageMode: postgresEnabled() ? 'postgres' : 'file',
  };
}
