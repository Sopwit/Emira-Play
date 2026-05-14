#!/usr/bin/env bash
set -euo pipefail

if ! command -v stellar >/dev/null 2>&1; then
  echo "The Stellar CLI is required but was not found in PATH." >&2
  exit 1
fi

if [[ $# -lt 1 ]]; then
  echo "Usage: scripts/verify-testnet-tx.sh <tx-hash>" >&2
  exit 1
fi

: "${STELLAR_RPC_URL:=https://soroban-testnet.stellar.org}"

stellar tx fetch "$1" --rpc-url "$STELLAR_RPC_URL"
