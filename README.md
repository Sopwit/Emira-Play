# Emira Core 🎮✨

> A Telegram-ready hybrid Web3 clicker game prototype powered by **Stellar** & **Soroban**.

[![CI Quality Gate](https://github.com/Sopwit/Emira-Play/actions/workflows/frontend-ci.yml/badge.svg)](https://github.com/Sopwit/Emira-Play/actions)
[![Stellar Testnet](https://img.shields.io/badge/Stellar-Testnet-blue.svg)](https://stellar.expert/explorer/testnet)
[![React 19](https://img.shields.io/badge/React-19-61dafb.svg)](https://react.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🌐 Live Services & Demos

| Resource | Link |
|---|---|
| 🎮 **Live Web App** | [emira-neaf.vercel.app](https://emira-neaf.vercel.app) |
| 📱 **Telegram Mini App** | [@emira_game_bot](https://t.me/emira_game_bot?startapp=emira-core) |
| ⚡ **Backend Health** | [emira-neaf.vercel.app/_/backend/health](https://emira-neaf.vercel.app/_/backend/health) |
| 📜 **Marketplace Contract** | [`CBRKJVW...CXJI`](https://stellar.expert/explorer/testnet/contract/CBRKJVWTTF5DO2ZVIDOP3TSBTPYQXHGQIPA4ANFI7WKG4X65Y3MCCXJI) |
| 🏆 **Rewards Contract** | [`CCO434M...WTJD`](https://stellar.expert/explorer/testnet/contract/CCO434MY5ASOQIJALSN2KINXVEQMJKCW3HRMVRZSF2MOXUI7O3V4WTJD) |

---

## 💡 Overview

Most Telegram clicker games are either 100% off-chain (meaning zero real ownership or credible rewards) or 100% on-chain (making gameplay slow, costly, and unplayable).

**Emira Core** solves this using a **Hybrid State Model**:
1. **High-Frequency Gameplay** (tapping, energy, combos) stays fast & off-chain.
2. **Retention Layer** is integrated natively with Telegram Mini Apps & HMAC auth.
3. **Wallet Layer** supports **Freighter** on desktop and **WalletConnect** on mobile/Telegram.
4. **Durable On-Chain State** (marketplace listings & reward accounting) settles on **Soroban**.

```text
[ Telegram Mini App / Web ] 
            │
            ├── (Instant taps & combos) ───────► [ Node.js API / PostgreSQL ]
            │
            └── (WalletConnect / Freighter) ──► [ Stellar / Soroban Contracts ]
                                                  • emira_marketplace
                                                  • emira_rewards
```

---

## ✨ Key Features

- ⚡ **Instant Clicker Mechanics:** Multi-tap combos, energy regen, and dynamic cat upgrades.
- 📱 **Telegram-First:** Native Mini App detection, HMAC-authenticated sessions, and auto guest fallback.
- 🔐 **Dual Wallet Support:** Freighter (Desktop) + WalletConnect (Mobile / Telegram).
- ⛓️ **Soroban Smart Contracts:** Testnet-verified contracts for marketplace settlement and hybrid reward pools.
- 🛡️ **Session & Anti-Abuse Protection:** Batched client tap windows with signed session tokens.
- 🚀 **Zero-Lag Loading:** Lazy-loaded Soroban and WalletConnect SDKs to maximize initial render speed.

---

## 🛠️ Project Structure

```text
Emira-Play/
├── backend/          # Lightweight Node.js runtime & API endpoints
├── contracts/        # Soroban smart contracts (Rust)
│   ├── emira_marketplace/
│   └── emira_rewards/
├── frontend/         # React 19, Vite, Tailwind CSS 4 & Framer Motion
├── docs/             # Categorized architecture, deployment & submission guides
└── scripts/          # Public audit, testnet deploy, and build helpers
```

---

## 🚀 Quickstart

### Prerequisites
- Node.js 20+
- Rust & `wasm32-unknown-unknown` (for Soroban contracts)

### Setup & Development

```bash
# 1. Install dependencies
npm ci

# 2. Run backend API (Port 8080)
npm run dev:api

# 3. In a separate terminal, run web client (Port 5173)
npm run dev:web
```

### Full CI & Verification Gate

Run the repository verification suite before submitting pull requests:

```bash
# Runs: audit check + backend smoke tests + frontend lint & build
npm run ci

# Run Soroban contract unit tests
cargo test --workspace
```

---

## 📜 Smart Contracts & Testnet Proofs

| Contract | Soroban Testnet Address | Explorer |
|---|---|---|
| **Marketplace** | `CBRKJVWTTF5DO2ZVIDOP3TSBTPYQXHGQIPA4ANFI7WKG4X65Y3MCCXJI` | [View Explorer](https://stellar.expert/explorer/testnet/contract/CBRKJVWTTF5DO2ZVIDOP3TSBTPYQXHGQIPA4ANFI7WKG4X65Y3MCCXJI) |
| **Rewards** | `CCO434MY5ASOQIJALSN2KINXVEQMJKCW3HRMVRZSF2MOXUI7O3V4WTJD` | [View Explorer](https://stellar.expert/explorer/testnet/contract/CCO434MY5ASOQIJALSN2KINXVEQMJKCW3HRMVRZSF2MOXUI7O3V4WTJD) |

> 🔗 For complete transaction hashes (deploy, upload, initialize), see [docs/submission/transaction-hash.md](docs/submission/transaction-hash.md).

---

## 📖 In-Depth Documentation

Detailed guides and specifications are organized in the [`docs/`](docs/README.md) directory:

- 🏛️ **[System Architecture](docs/architecture/overview.md)** — Complete data flow, runtime state, and anti-cheat mechanics.
- 📦 **[Soroban Testnet Deployment](docs/contracts/deploy-testnet.md)** — Build and deploy contracts to Stellar testnet.
- 🗺️ **[On-Chain Migration Plan](docs/contracts/onchain-migration-plan.md)** — Strategy for tokenized NFT inventories and decentralized settlement.
- 🤖 **[Telegram Mini App Guide](docs/integrations/telegram-mini-app.md)** — BotFather configuration and HMAC session flows.
- 🎯 **[Project Roadmap](docs/planning/roadmap.md)** — Phased engineering milestones.
- 📋 **[Submission Checklist](docs/submission/checklist.md)** — Hackathon verification artifacts and screenshots.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
