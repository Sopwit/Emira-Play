# Emira Frontend

React frontend for the Emira clicker game.

## Pages

- `/` - clicker home, Freighter login panel, game stats
- `/museum` - NFT museum and collection widgets
- `/market` - market items and tap upgrades
- `/profile` - player profile and wallet status
- `/leaderboard` - seasonal leaderboard

## Scripts

```bash
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

## Docker

```powershell
cd ..
docker compose up --build -d
```

## Production Deployment

- Public app URL: `https://emira-neaf.vercel.app`
- Backend base URL: `https://emira-neaf.vercel.app/_/backend`
- Telegram launch URL: `https://t.me/emira_game_bot?startapp=emira-core`
- Frontend should keep `VITE_API_BASE_URL=/_/backend` in production.
- Telegram Mini App should use `VITE_TELEGRAM_WEBAPP_URL=https://emira-neaf.vercel.app`.
- Only commit `frontend/.env.example`; real env files should remain local and ignored.
- Never commit `frontend/dist/` or `frontend/node_modules/`; both are local build artifacts.

## Wallet Loading and Freighter

The app checks Freighter on load. WalletConnect and the Soroban SDK are loaded only after the player explicitly starts a wallet action, keeping the initial game route responsive for users who only play off-chain.

If Freighter access was already granted, the app reads the active address and network. If access is missing, the user can connect from the navbar, home page wallet panel, or profile page.

Wallet actions currently implemented:

- connect with Freighter
- show network and shortened address
- copy full address
- request wallet switch/reconnect
- local disconnect from the app state
