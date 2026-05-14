# Scripts

Operational helper scripts for local Soroban workflows and repository checks.

Included commands:

- `build-soroban.sh`: builds contract WASM artifacts into `.soroban/`
- `deploy-testnet.sh`: deploys and initializes the current contracts on Stellar testnet
- `verify-testnet-tx.sh`: fetches a testnet transaction by hash
- `public-repo-check.mjs`: blocks public-unsafe tracked files before push

Public repo hygiene:

- never hardcode funded secrets into these scripts
- keep private keys only in environment variables or secret stores
- treat generated `.soroban/` output as local build artifacts, not source files
