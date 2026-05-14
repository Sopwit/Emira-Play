# Emira Roadmap

## Phase 1 - Frontend Foundation

- Completed: separate game pages for home, NFT museum, market, profile, and leaderboard.
- Completed: Freighter detection and wallet login.
- Completed: wallet abstraction layer for Freighter and WalletConnect.
- Completed: wallet menu actions for copy address, switch wallet, and local disconnect.
- Completed: Dockerized frontend runtime.
- In progress: frontend CI hardening for lint and production build.

## Phase 2 - Backend Foundation

- Completed: Telegram auth validation.
- Completed: session tokens and wallet-link records.
- Completed: player progress API.
- Completed: server-authoritative tap and energy logic.
- In progress: daily task and streak system.
- Completed: leaderboard read model.
- Completed: market preparation endpoint for Freighter-signed XLM purchases.
- Planned: public promo metrics endpoint for Neaf-Web.

## Phase 3 - Soroban Contracts

- Reward vault contract.
- Season registry contract.
- NFT collection or NFT ownership integration.
- Claim transaction builder.
- Contract event indexing.
- WalletConnect purchase flow for Telegram/mobile.

## Phase 4 - Economy And Anti-Cheat

- Rate limiting and suspicious session detection.
- Snapshot based reward calculation.
- Claimable balance reconciliation.
- Admin tools for seasons and reward pools.

## Phase 5 - Production Readiness

- Planned: error tracking.
- Planned: API observability.
- Completed: contract deployment scripts.
- Planned: database migrations.
- In progress: staging and production deployment workflows.
- In progress: Telegram Mini App packaging and release flow.
