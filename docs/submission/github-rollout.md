# GitHub Rollout Plan

This repository is prepared for a staged public GitHub rollout.

## Merge order

Open and merge pull requests in this order to preserve the stacked branch history:

1. `chore-repo-foundation` -> `main`
2. `feat-web-landing` -> `chore-repo-foundation`
3. `feat-frontend-app` -> `feat-web-landing`
4. `feat-backend-api` -> `feat-frontend-app`
5. `feat-contracts-tooling` -> `feat-backend-api`
6. `docs-project-guides` -> `feat-contracts-tooling`

After all stacked PRs are reviewed and merged, `main` will contain the full project state.

## Pull request copy

### 1. `chore-repo-foundation`

Title: `chore: bootstrap public repo foundation`

Body:

```md
## Summary

- add the root repository scaffold for a public GitHub release
- add CI workflows, root build config, and shared TypeScript/Vite setup
- add public-repo hygiene rules for ignored files and audit checks

## Included

- root `package.json` and workspace scripts
- `.gitignore` and `.dockerignore` hardening
- GitHub workflow and PR template setup
- Docker, Nginx, and Vercel root configuration
- `scripts/public-repo-check.mjs`

## Validation

- `npm run audit:public`
- `npm run ci`
```

### 2. `feat-web-landing`

Title: `feat: add landing web client`

Body:

```md
## Summary

- add the root Vite landing client and shared web assets
- add landing sections, content loading, wallet helpers, and market client utilities
- include the public-facing privacy page and static assets

## Included

- root `src/` application
- root `public/` assets
- wallet adapters and API client utilities

## Validation

- `npm run build`
```

### 3. `feat-frontend-app`

Title: `feat: add standalone frontend app workspace`

Body:

```md
## Summary

- add the dedicated `frontend/` workspace for the production web app
- include frontend build config, static assets, and app source
- add native dependency install handling for deterministic local/CI installs

## Included

- `frontend/package.json` and lockfile
- `frontend/src/`, `frontend/public/`, and frontend Docker/Nginx config
- `frontend/scripts/install-native-deps.mjs`

## Validation

- `npm run ci:frontend`
```

### 4. `feat-backend-api`

Title: `feat: add backend api service`

Body:

```md
## Summary

- add the backend service and serverless API entrypoint
- include request validation, auth helpers, and runtime config guards
- ship public-safe backend example configuration and documentation

## Included

- `backend/src/` service implementation
- `api/index.mjs`
- backend package metadata and README

## Validation

- `npm run ci:backend`
```

### 5. `feat-contracts-tooling`

Title: `feat: add soroban contracts and tooling`

Body:

```md
## Summary

- add Soroban smart contracts and Cargo workspace config
- add deployment and verification shell tooling
- add contract-specific repository guidance

## Included

- `contracts/emira_marketplace`
- `contracts/emira_rewards`
- root Cargo files
- deployment scripts under `scripts/`

## Validation

- shell script lint/readability review
- contract test execution still depends on external crate registry access
```

### 6. `docs-project-guides`

Title: `docs: add project guides and release notes`

Body:

```md
## Summary

- add architecture, deployment, roadmap, and submission documentation
- add screenshots and public release guidance for supporting assets
- document the staged GitHub rollout for maintainers

## Included

- `docs/` project guides
- `data/README.md`
- rollout notes for submission and review

## Validation

- docs link and path review
```

## Notes

- `gh auth status` currently reports an invalid token for account `Sopwit`.
- Re-authenticate with `gh auth login -h github.com` before opening PRs with GitHub CLI.
- If you want each PR to target `main` instead of the previous branch, merge each PR first, then retarget the next one after the previous merge completes.
