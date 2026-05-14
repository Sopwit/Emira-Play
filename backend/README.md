# Emira Backend

This backend is the hybrid read/write layer for Emira Core.

## Purpose

- keep fast-changing gameplay state off-chain
- expose leaderboard, profile, and market read models
- prepare Soroban / Stellar transaction payloads for the frontend
- reconcile Freighter-signed XLM actions with local game state
- validate Telegram Mini App sessions and wallet linking
- expose a single config surface for web, promo, and Telegram clients

## Current Scope

- health endpoint
- public app config endpoint
- Telegram auth endpoint
- Telegram webhook endpoint
- session inspection endpoint
- wallet link endpoint
- profile endpoint
- leaderboard endpoint
- market listing endpoint
- tap/progress mutation endpoint
- market purchase preparation endpoint

## Current API

- `GET /health`
- `POST /api/v1/telegram/webhook`
- `GET /api/v1/config`
- `POST /api/v1/auth/telegram`
- `GET /api/v1/auth/session`
- `POST /api/v1/wallet/link`
- `GET /api/v1/wallet/link/:playerId`
- `GET /api/v1/profile/:player`
- `GET /api/v1/leaderboard`
- `GET /api/v1/market/listings`
- `POST /api/v1/progress/tap`
- `POST /api/v1/market/prepare-buy`

## Planned Hybrid Role

- `Neaf-Web`: promo and funnel, reads public backend summaries
- `Emira Core Web`: primary game, Freighter-first wallet surface
- `Telegram Mini App`: retention surface, Telegram auth + WalletConnect
- `Soroban`: durable market and reward state

## Run

```bash
cd backend
cp .env.example .env.development.local
npm run dev
```

Public repo note:

- commit only `backend/.env.example`
- do not commit `.vercel/` project linkage metadata
- keep real `TELEGRAM_BOT_TOKEN`, `TELEGRAM_WEBHOOK_SECRET`, and `SESSION_JWT_SECRET` outside git
- production startup now rejects placeholder secrets and `ALLOW_TELEGRAM_MOCK=true`

Default URL:

```text
http://localhost:8080
```

Production base URL:

```text
https://emira-neaf.vercel.app/_/backend
```

Production health check:

```text
https://emira-neaf.vercel.app/_/backend/health
```
