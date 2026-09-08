# Emira Technical Documentation

Welcome to the Emira technical documentation. This directory provides in-depth architectural guides, smart contract specifications, integration manuals, and hackathon submission records.

---

## 🌐 Live Deployments & Contracts

| Component | Target / Address | Explorer / Link |
|---|---|---|
| **Web Client** | `https://emira-neaf.vercel.app` | [Open Web App](https://emira-neaf.vercel.app) |
| **Telegram Bot** | `@emira_game_bot` | [Launch Mini App](https://t.me/emira_game_bot?startapp=emira-core) |
| **Backend API** | `https://emira-neaf.vercel.app/_/backend` | [Health Check](https://emira-neaf.vercel.app/_/backend/health) |
| **Marketplace Contract** | `CBRKJVWTTF5DO2ZVIDOP3TSBTPYQXHGQIPA4ANFI7WKG4X65Y3MCCXJI` | [Stellar Expert](https://stellar.expert/explorer/testnet/contract/CBRKJVWTTF5DO2ZVIDOP3TSBTPYQXHGQIPA4ANFI7WKG4X65Y3MCCXJI) |
| **Rewards Contract** | `CCO434MY5ASOQIJALSN2KINXVEQMJKCW3HRMVRZSF2MOXUI7O3V4WTJD` | [Stellar Expert](https://stellar.expert/explorer/testnet/contract/CCO434MY5ASOQIJALSN2KINXVEQMJKCW3HRMVRZSF2MOXUI7O3V4WTJD) |

---

## 📁 Directory Structure

```text
docs/
├── README.md                      # Documentation hub (this file)
├── architecture/
│   └── overview.md                # System design, data flow & anti-cheat mechanics
├── contracts/
│   ├── deploy-testnet.md          # Soroban testnet build, deploy & verification
│   └── onchain-migration-plan.md  # Tokenized NFT & full on-chain transition plan
├── integrations/
│   └── telegram-mini-app.md       # Telegram Mini App HMAC auth & WalletConnect
├── planning/
│   └── roadmap.md                 # Project roadmap & milestones
├── submission/
│   ├── checklist.md               # Hackathon track submission criteria
│   ├── github-rollout.md          # Branch rollout & release notes
│   └── transaction-hash.md        # Recorded Stellar testnet transaction proofs
└── screenshots/                   # Application preview screenshots
    ├── README.md
    ├── leaderboard.png
    ├── market-grid.png
    ├── market-grid-detail.png
    └── profile-preview.png
```

---

## 📚 Documentation Guides

- 🏛️ **[System Architecture](architecture/overview.md)** — Hybrid Web2/Web3 split, client batching, Postgres runtime caching, and anti-abuse mechanics.
- 📦 **[Smart Contracts & Deployment](contracts/deploy-testnet.md)** — How to build, test, and deploy Soroban contracts on Stellar testnet.
- 🗺️ **[On-Chain Migration Plan](contracts/onchain-migration-plan.md)** — Architectural blueprint for tokenized NFT inventory and escrow settlement.
- 🤖 **[Telegram Mini App](integrations/telegram-mini-app.md)** — BotFather setup, HMAC initialization, and mobile wallet integration.
- 🎯 **[Roadmap](planning/roadmap.md)** — 5-phase engineering plan from MVP to mainnet.
- 📋 **[Submission Checklist & Proofs](submission/checklist.md)** — Verification artifacts and [transaction hashes](submission/transaction-hash.md).
