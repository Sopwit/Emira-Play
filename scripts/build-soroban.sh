#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if ! command -v stellar >/dev/null 2>&1; then
  echo "The Stellar CLI is required but was not found in PATH." >&2
  exit 1
fi

mkdir -p .soroban

echo "Building Soroban contracts..."
stellar contract build --package emira_marketplace --out-dir .soroban/emira_marketplace
stellar contract build --package emira_rewards --out-dir .soroban/emira_rewards

echo "Artifacts:"
find .soroban -maxdepth 2 -type f -name "*.wasm" | sort
