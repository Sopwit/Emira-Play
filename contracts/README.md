# Contracts

This workspace contains the Soroban contracts used by Emira Core.

Included packages:

- `contracts/emira_marketplace`: marketplace listing lifecycle and settlement metadata
- `contracts/emira_rewards`: hybrid reward accounting and player snapshot state

Public repo hygiene:

- keep only source code, `Cargo.toml`, and lockfiles under version control
- do not commit generated WASM binaries, local target output, funded test keys, or CLI wallet exports
- verify contracts with `cargo test --workspace` when crate downloads are available

Current scope note:

- these contracts represent the current hackathon implementation, not the final production economy design described in `docs/onchain-migration-plan.md`
