# Emira On-Chain Migration Plan

## Goals

- Replace frontend-owned NFT inventory mutations with real Soroban ownership.
- Make market purchases settle against real on-chain ownership transfer.
- Move rewards from bookkeeping-only snapshots to real token distribution.
- Store profile media off-chain and keep only immutable pointers on-chain.
- Keep PostgreSQL as the fast read model for web UX, but treat Soroban as the source of truth for ownership and reward claims.

## Target Contract Set

### 1. `emira_collectibles`

Purpose:
- Mint collectible NFTs.
- Track canonical ownership.
- Store per-token metadata URI.
- Support operator approval for marketplace settlement.

Required interface:
- `init(admin, base_uri)`
- `mint(admin, to, token_id, metadata_uri)`
- `owner_of(token_id)`
- `metadata_uri(token_id)`
- `approve(owner, operator, token_id)`
- `get_approved(token_id)`
- `transfer(owner, to, token_id)`
- `burn(owner, token_id)`

Notes:
- Token IDs should be stable and match the catalog IDs already used in the frontend.
- Metadata URI should point to immutable JSON, ideally IPFS or Arweave.
- The contract should reject duplicate token IDs.

### 2. `emira_marketplace`

Purpose:
- Hold live listings.
- Validate seller ownership against `emira_collectibles`.
- Finalize purchase by transferring payment and ownership in one flow.

Required changes from current contract:
- Add `collectibles_contract` and `quote_token_contract` to config.
- `list` must verify `owner_of(token_id) == seller`.
- `list` should require approval for the marketplace operator.
- Replace `mark_sold` with a buyer-driven `buy` flow.

Required interface:
- `init(admin, settlement_operator, collectibles_contract, quote_token_contract, min_price_stroops)`
- `list(seller, token_id, price_stroops)`
- `update_price(seller, token_id, next_price_stroops)`
- `cancel(actor, token_id)`
- `buy(buyer, token_id)`

Purchase semantics:
- Transfer quote asset from buyer to seller.
- Transfer NFT from seller to buyer.
- Mark listing as sold.
- Emit one settlement event with buyer, seller, token_id, and price.

### 3. `emira_rewards`

Purpose:
- Track game state snapshots for anti-abuse and claim eligibility.
- Distribute a real reward token instead of only accounting totals.

Required changes from current contract:
- Add `reward_token_contract`.
- Replace pool integer bookkeeping with real token balance checks.
- Transfer reward token on successful claim.

Required interface:
- `init(admin, reward_token_contract, treasury, max_claim_per_call)`
- `record_progress(player, taps, owned_nfts)`
- `record_game_state(player, taps, balance_neaf, owned_nfts, tap_upgrade, passive_upgrade, luck_upgrade, cat_pairs)`
- `claim_reward(player, amount)`
- `fund_pool(admin, amount)`
- `set_max_claim(admin, next_limit)`

Claim semantics:
- Player signs the claim.
- Contract validates `amount <= max_claim_per_call`.
- Contract transfers reward token from treasury to player.
- Contract updates `total_claimed_reward` and `claim_count`.

### 4. `emira_profile_registry`

Purpose:
- Keep user profile media pointers on-chain without storing raw image bytes.

Required interface:
- `init(admin)`
- `set_profile(player, avatar_uri, profile_uri, content_hash)`
- `get_profile(player)`

Notes:
- `avatar_uri` points to image storage.
- `profile_uri` points to a JSON metadata document.
- `content_hash` is a tamper-detection hash for the metadata document.
- Raw images should not be stored directly on Soroban.

## Off-Chain Storage Model

### Avatar and metadata

- Upload avatar image to object storage or IPFS.
- Build a profile JSON document:

```json
{
  "name": "Persist Check",
  "avatar": "ipfs://...",
  "background": "ev1",
  "selectedTreeId": "Neaf",
  "updatedAt": "2026-05-05T17:58:04.046Z"
}
```

- Store `profile_uri` plus `content_hash` in `emira_profile_registry`.

### NFT metadata

- Each NFT should expose:

```json
{
  "name": "Coder Kedi",
  "description": "Emira collectible",
  "image": "ipfs://...",
  "attributes": [
    { "trait_type": "Rarity", "value": "Epic" }
  ]
}
```

- Freighter collection views then depend on wallet and indexer support for the collectible contract and metadata format.

## Backend Role After Migration

Postgres remains useful, but as a projection layer:

- Cache leaderboard rows for fast reads.
- Cache profile metadata URIs and resolved JSON.
- Cache listing summaries for the web market.
- Never invent NFT ownership or reward claims off-chain.

Backend should stop being the source of truth for:
- NFT inventory
- Market settlement
- Reward issuance
- Wallet-linked profile ownership

## Frontend Changes Required

### Inventory
- Replace `owned[name]` as canonical state.
- Read wallet-owned token IDs from the collectibles contract or indexer.
- Keep local state only as a view cache.

### Marketplace buy flow
- Remove direct `setOwned(addOwnedCat(...))`.
- Replace with:
  1. call backend for listing summary only
  2. sign `buy` on marketplace contract
  3. wait for settlement confirmation
  4. refetch on-chain ownership

### Rewards
- Keep `record_game_state` as a sync action.
- Make reward claim call the reward contract directly.
- Refetch token balance after claim success.

### Profile avatar
- Upload file to storage first.
- Write `avatar_uri` and `profile_uri` on-chain.
- Refetch resolved profile metadata after confirmation.

## Migration Order

1. Deploy `emira_collectibles`.
2. Mint the current catalog into the collectibles contract.
3. Upgrade `emira_marketplace` to buy/transfer against collectibles ownership.
4. Update frontend market buy flow to refetch chain ownership instead of mutating local inventory.
5. Upgrade `emira_rewards` to distribute a real token contract.
6. Add `emira_profile_registry` and move avatar persistence to URI pointers.
7. Reduce backend state to cached projections only.

## What Was Fixed In This Pass

- Production Postgres persistence was changed away from full-table snapshot rewrites.
- Live guest/profile/leaderboard persistence now works again on production.
- Browser autosave no longer writes countdown state every second.
- Browser tab title now reads `Emira | Neaf`.
