# Emira Documentation Index

Welcome to the Emira technical documentation. This directory provides in-depth architectural guides, smart contract references, integration specifications, and hackathon submission records.

---

## 📁 Directory Structure

```text
docs/
├── architecture/          # System design, data flow, and runtime mechanics
│   └── overview.md        # Full architecture blueprint & security model
├── contracts/             # Stellar / Soroban smart contract guides
│   ├── deploy-testnet.md  # Testnet build, deployment, and verification guide
│   └── onchain-migration-plan.md # Roadmap for full on-chain inventory & settlement
├── integrations/          # External surface integrations
│   └── telegram-mini-app.md # Telegram Mini App runtime, auth & launch specs
├── planning/              # Project vision and delivery roadmap
│   └── roadmap.md         # Phased development milestones
├── submission/            # Hackathon validation artifacts
│   ├── checklist.md       # Submission readiness checklist
│   ├── github-rollout.md  # Rollout record & branch lifecycle
│   └── transaction-hash.md# Verified Stellar testnet transaction hashes
└── screenshots/           # UI preview assets & application captures
    ├── README.md
    ├── leaderboard.png
    ├── market-grid.png
    ├── market-grid-detail.png
    └── profile-preview.png
```

---

## 📚 Categories & Quick Links

### 1. [Architecture & System Design](architecture/overview.md)
- **[System Overview](architecture/overview.md)**: Deep dive into the hybrid Web2/Web3 split, client-server data flows, anti-cheat mechanisms, and session management.

### 2. [Smart Contracts](contracts/deploy-testnet.md)
- **[Testnet Deployment Guide](contracts/deploy-testnet.md)**: How to compile, deploy, initialize, and test `emira_marketplace` and `emira_rewards` on Soroban testnet.
- **[On-Chain Migration Plan](contracts/onchain-migration-plan.md)**: Comprehensive design for tokenized NFT inventories (`emira_collectibles`), escrow settlement, and token rewards.

### 3. [Integrations](integrations/telegram-mini-app.md)
- **[Telegram Mini App](integrations/telegram-mini-app.md)**: HMAC session verification, BotFather configuration, WebApp UI constraints, and mobile wallet handling via WalletConnect.

### 4. [Planning & Roadmap](planning/roadmap.md)
- **[Roadmap](planning/roadmap.md)**: Phase 1 through Phase 5 milestone tracking from MVP to production readiness.

### 5. [Submission Proofs](submission/checklist.md)
- **[Submission Checklist](submission/checklist.md)**: Verification of all hackathon track criteria.
- **[Verified Transaction Hashes](submission/transaction-hash.md)**: Exact Stellar testnet transaction hashes with contract addresses.
- **[GitHub Rollout Plan](submission/github-rollout.md)**: History of repo foundation and branch stabilization.
