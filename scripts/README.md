# AgriNexus Scripts Inventory

This directory contains operational helpers, regression checks, provider test harnesses, production readiness gates, and demo/export utilities for AgriNexus. Scripts are currently kept in one flat directory; do not move, delete, or rename them without updating `package.json`, README references, docs, and any script-to-script callers.

## Categories

- Production Critical: startup, deployment, release, production readiness, and health gates.
- Regression Tests: smoke tests, workflow checks, companion checks, auth checks, voice checks, and static audits.
- Provider / Infrastructure: provider engines, webhook checks, live service checks, and environment/provider reports.
- Platform Intelligence / AI: autonomy, reasoning, intelligence, orchestration, and agent behavior QA.
- Utilities: database backup/restore and local environment helpers.
- Documentation / Demo / Investor: screenshot, presentation, video, and investor/demo asset helpers.
- Manual / Review: useful scripts that are not currently exposed through `package.json` and should be reviewed before archiving.

## Inventory

| Script | npm command | Category | Purpose | Safe to delete |
|---|---|---|---|---|
| `adaptive-autonomy-qa.js` | `adaptive:autonomy-qa` | Platform Intelligence / AI | Validates adaptive autonomy behavior through a temp DB server QA. | No |
| `app-behavior-audit.js` | `app:behavior-audit` | Regression Tests | Static audit for app behavior signals in source files. | No |
| `auth-login-api-smoke.js` | `auth:login-api-smoke` | Regression Tests | Exercises login API behavior against a temp DB server. | No |
| `auth-login-gate-qa.js` | `auth:login-gate-qa` | Regression Tests | Verifies frontend/backend login gate safeguards. | No |
| `autonomous-orchestration-qa.js` | `orchestration:intelligence-qa` | Platform Intelligence / AI | Validates autonomous orchestration behavior. | No |
| `capture-investor-screenshots.js` | none | Documentation / Demo / Investor | Captures investor walkthrough screenshots and supporting notes. | Review first |
| `cloud-agent-qa.js` | `app:cloud-agent-qa` | Platform Intelligence / AI | Static QA for cloud agent readiness and wiring. | No |
| `companion-confirmation-gate-smoke.js` | `companion:confirmation-gate-smoke` | Regression Tests | Verifies companion confirmation gating. | No |
| `companion-response-quality-smoke.js` | `companion:response-quality-smoke` | Regression Tests | Verifies companion response quality rules. | No |
| `companion-route-mismatch-smoke.js` | `companion:route-mismatch-smoke` | Regression Tests | Checks companion route mismatch detection. | No |
| `companion-understanding-smoke.js` | `companion:understanding-smoke` | Regression Tests | Core companion understanding smoke test. | No |
| `companion-workflow-offer-smoke.js` | `companion:workflow-offer-smoke` | Regression Tests | Verifies workflow offer behavior. | No |
| `conversation-brain-smoke.js` | `conversation:smoke` | Regression Tests | Core conversation brain smoke test. | No |
| `conversation-core-architecture-qa.js` | `conversation:core-qa` | Regression Tests | Static architecture guard for conversation systems. | No |
| `create-investor-mp4.ps1` | none | Documentation / Demo / Investor | Builds an investor video asset. | Review first |
| `create-screenshot-presentation.ps1` | none | Documentation / Demo / Investor | Builds a screenshot presentation from captured assets. | Review first |
| `create-strong-investor-mp4.ps1` | none | Documentation / Demo / Investor | Builds an alternate investor video asset. | Review first |
| `create-training-mp4.ps1` | none | Documentation / Demo / Investor | Builds a training video asset. | Review first |
| `cross-platform-functions-qa.js` | `cross-platform:qa` | Regression Tests | Static QA for cross-platform workflow functions. | No |
| `db-backup.js` | `db:backup` | Utilities | Creates PostgreSQL/database backup artifacts. | No |
| `db-restore.js` | `db:restore` | Utilities | Restores database backup artifacts. | No |
| `ecosystem-intelligence-qa.js` | `ecosystem:intelligence-qa` | Platform Intelligence / AI | Validates ecosystem intelligence behavior. | No |
| `engine-connection-report.js` | `engines:report` | Provider / Infrastructure | Reports provider engine connection readiness. | No |
| `executive-intelligence-qa.js` | `executive:intelligence-qa` | Platform Intelligence / AI | Validates executive intelligence behavior. | No |
| `fill-production-gaps.js` | `production:gapfill` | Production Critical | Generates/fills production environment gap values. | No |
| `full-production-regression.js` | `production:regression` | Production Critical | Runs the broad production regression suite. | No |
| `generate-render-env.js` | `render:env` | Production Critical | Generates Render environment values. | No |
| `github-ready-check.js` | `github:check` | Production Critical | Checks repository readiness for GitHub upload/release. | No |
| `grandma-mode-user-pass.js` | `grandma:pass` | Regression Tests | Validates simplified user-mode accessibility behavior. | No |
| `infrastructure-live-check.js` | `infra:live-check` | Provider / Infrastructure | Checks live infrastructure/provider availability. | No |
| `jarvis-behavior-qa.js` | `app:jarvis-qa` | Platform Intelligence / AI | Static QA for Jarvis/Nexus behavior wiring. | No |
| `launch-full-system.ps1` | none | Production Critical | Windows helper for launching provider engines and app. | Review first |
| `learning-functionality-qa.js` | `learning:functionality-qa` | Regression Tests | Static QA for learning workflows. | No |
| `learning-translation-smoke.js` | `learning:translation-smoke` | Regression Tests | Checks learning translation behavior. | No |
| `local-env-status.js` | none | Manual / Review | Reports local `.env` status. | Review first |
| `mobile-native-qa.js` | `app:mobile-native-qa` | Regression Tests | Static QA for mobile/native readiness. | No |
| `native-desktop-runtime-qa.js` | `app:native-desktop-qa` | Regression Tests | Static QA for native desktop runtime support. | No |
| `native-mobile-runtime-qa.js` | `app:native-runtime-qa` | Regression Tests | Static QA for native mobile runtime support. | No |
| `native-voice-infrastructure-qa.js` | `app:native-voice-infra-qa` | Regression Tests | Static QA for native voice infrastructure. | No |
| `network-intelligence-qa.js` | `network:intelligence-qa` | Platform Intelligence / AI | Validates network intelligence behavior. | No |
| `nexus-continuous-turn-regression.js` | `conversation:continuous` | Regression Tests | Conversation continuous-turn regression. | No |
| `nexus-conversation-certification.js` | `conversation:certify` | Regression Tests | Conversation certification suite. | No |
| `nexus-general-conversation-stress.js` | `conversation:stress` | Regression Tests | General conversation stress test. | No |
| `nexus-multilingual-general-conversation-regression.js` | `conversation:multilingual` | Regression Tests | Multilingual conversation regression. | No |
| `nexus-open-conversation-regression.js` | `conversation:open` | Regression Tests | Open conversation regression. | No |
| `no-placeholder-audit.js` | `placeholder:audit` | Regression Tests | Static audit for placeholder/demo-only wording. | No |
| `offline-reasoning-brain-qa.js` | `offline:reasoning-qa` | Platform Intelligence / AI | Validates offline reasoning brain behavior. | No |
| `operational-intelligence-qa.js` | `operational:intelligence-qa` | Platform Intelligence / AI | Validates operational intelligence behavior. | No |
| `phone-greeting-qa.js` | `phone:greeting-qa` | Regression Tests | Checks phone greeting behavior. | No |
| `platform-integrity-stress.js` | `platform:integrity-stress` | Regression Tests | Static platform integrity stress guard. | No |
| `platform-intelligence-qa.js` | `platform:intelligence-qa` | Platform Intelligence / AI | Validates platform intelligence behavior. | No |
| `production-clickthrough.js` | `production:clickthrough` | Production Critical | Static production clickthrough/readiness audit. | No |
| `production-complete-check.js` | `production:complete-check`, `production:10-check` | Production Critical | Production readiness and completeness check. | No |
| `production-preflight.js` | `production:preflight` | Production Critical | Production deployment preflight gate. | No |
| `production-smoke.js` | `production:smoke` | Production Critical | Hosted/production-style smoke test. | No |
| `provider-engines-smoke.js` | `provider-engines:smoke` | Provider / Infrastructure | Tests app integration with local provider engines using a temp DB. | No |
| `provider-engines.js` | `provider-engines` | Provider / Infrastructure | Local provider engine server for integration testing. | No |
| `realtime-voice-provider-qa.js` | `voice:realtime-qa` | Provider / Infrastructure | Static QA for realtime voice provider configuration. | No |
| `smoke.js` | `smoke` | Regression Tests | Core full-stack smoke test using a temp DB. | No |
| `stabilization-gate.js` | `stabilization:gate` | Production Critical | Release stabilization gate. | No |
| `start-full-system.js` | `system:start` | Production Critical | Starts provider engines and app with logs. | No |
| `synthetic-rural-conversation-eval.js` | `conversation:rural-eval` | Regression Tests | Synthetic rural conversation evaluation. | No |
| `user-mode-workflow-audit.js` | `user-mode:audit` | Regression Tests | Static audit for user-mode workflows. | No |
| `utility-assistant-smoke.js` | none | Manual / Review | Utility assistant smoke test not yet wired to `package.json`. | Review first |
| `validate-live-env.js` | `production:validate-env` | Production Critical | Validates live environment files. | No |
| `verify-live-release.js` | `release:verify-live` | Production Critical | Verifies live release endpoints/assets. | No |
| `voice-browser-policy-regression.js` | `voice:browser-policy` | Regression Tests | Static browser voice policy regression. | No |
| `voice-response-regression.js` | `voice:response-check` | Regression Tests | Voice response regression used by companion checks. | No |
| `webhook-smoke.js` | `webhook:smoke` | Provider / Infrastructure | Tests webhook provider delivery using a temp DB. | No |
| `women-children-learning-qa.js` | `women-children:qa` | Regression Tests | Static QA for women/children learning workflows. | No |
| `women-family-workflow-qa.js` | `women-family:qa` | Regression Tests | Static QA for women/family workflows. | No |
| `workflow-button-audit.js` | `workflow:audit` | Regression Tests | Critical workflow button/action audit. | No |
| `workforce-live-check.js` | `workforce:live-check` | Provider / Infrastructure | Checks live workforce provider configuration. | No |

## Critical Scripts

Do not delete these without a replacement plan and updated references:

- `full-production-regression.js`
- `production-preflight.js`
- `production-clickthrough.js`
- `production-complete-check.js`
- `production-smoke.js`
- `stabilization-gate.js`
- `github-ready-check.js`
- `generate-render-env.js`
- `validate-live-env.js`
- `verify-live-release.js`
- `provider-engines.js`
- `provider-engines-smoke.js`
- `webhook-smoke.js`
- `smoke.js`
- `conversation-brain-smoke.js`
- `workflow-button-audit.js`
- `db-backup.js`
- `db-restore.js`
- all `companion-*` smoke scripts

## Manual / Demo Scripts

These are not all exposed through `package.json`, but they may still be useful for local demos, exports, or environment review:

- `capture-investor-screenshots.js`
- `create-investor-mp4.ps1`
- `create-screenshot-presentation.ps1`
- `create-strong-investor-mp4.ps1`
- `create-training-mp4.ps1`
- `launch-full-system.ps1`
- `local-env-status.js`
- `utility-assistant-smoke.js`

## Cleanup Notes

- Do not delete scripts without checking this README and searching `package.json`, README, docs, and script-to-script references.
- Do not move scripts until every package reference, documentation reference, and internal spawn/path reference is updated.
- Smoke tests that start the app should use ignored temp DB paths through `AGRINEXUS_DB_PATH`.
- Tests should not mutate tracked root `db.json`; it is the canonical demo seed.
- Provider event logs and temporary DB files should stay ignored/generated.

## Future Cleanup Plan

1. Normalize script line endings in a dedicated Phase C commit.
2. Group scripts by purpose only after line endings are stable.
3. Add a script reference guard that verifies every `package.json` script target exists.
4. Extend the guard so every file in `scripts/` is either referenced by `package.json` or explicitly listed here as manual/demo/review.
5. Consider shared smoke-test helpers for temp DB setup, server startup, login, and cleanup.
