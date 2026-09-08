# Emira Core 🎮✨

> A Telegram-ready hybrid Web3 clicker game prototype powered by **Stellar** & **Soroban**.

[![CI Quality Gate](https://github.com/Sopwit/Emira-Play/actions/workflows/frontend-ci.yml/badge.svg)](https://github.com/Sopwit/Emira-Play/actions)
[![Stellar Testnet](https://img.shields.io/badge/Stellar-Testnet-blue.svg)](https://stellar.expert/explorer/testnet)
[![React 19](https://img.shields.io/badge/React-19-61dafb.svg)](https://react.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🔗 Quick Links

- 🎮 **Live Web App:** [emira-neaf.vercel.app](https://emira-neaf.vercel.app)
- 📱 **Telegram Mini App:** [@emira_game_bot](https://t.me/emira_game_bot?startapp=emira-core)
- 📚 **Technical Documentation:** [`docs/`](docs/README.md)

---

## 💡 What is Emira Core?

Emira Core combines instant, off-chain casual clicker gameplay with durable, on-chain state on **Stellar / Soroban**:
- **High-frequency gameplay** (tapping, energy, combos) is fast and handled off-chain.
- **Retention & social surface** is powered natively by Telegram Mini Apps.
- **Wallet layer** seamlessly connects **Freighter** (desktop) and **WalletConnect** (mobile/Telegram).
- **Durable value** (marketplace listings and reward pools) is settled directly via Soroban smart contracts.

---

## 🚀 Quickstart

```bash
# 1. Install dependencies
npm ci

# 2. Run backend API & frontend client
npm run dev:api   # Port 8080
npm run dev:web   # Port 5173

# 3. Quality gate & contract unit tests
npm run ci
cargo test --workspace
```

---

## 📖 Documentation

All technical specifications, contracts, and deployment records are located in [`docs/`](docs/README.md):

- 🏛️ **[Architecture](docs/architecture/overview.md)** — Data flow, anti-abuse, and hybrid runtime model.
- 📦 **[Smart Contracts](docs/contracts/deploy-testnet.md)** — Soroban testnet deployment, addresses, and testnet hashes.
- 🤖 **[Telegram Mini App](docs/integrations/telegram-mini-app.md)** — Bot setup, HMAC authentication, and mobile flow.
- 🗺️ **[On-Chain Migration Plan](docs/contracts/onchain-migration-plan.md)** — Tokenized NFT inventory and escrow settlement roadmap.
- 📋 **[Submission Proofs](docs/submission/checklist.md)** — Hackathon checklist and [verified transaction hashes](docs/submission/transaction-hash.md).

---

## 📄 License

[MIT](LICENSE)
