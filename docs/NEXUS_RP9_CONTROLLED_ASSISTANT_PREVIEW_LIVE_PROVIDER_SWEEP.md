# Nexus RP9 Controlled Assistant Preview Live Provider Sweep

RP9 validates the assistant live-source orchestrator across all six read-only provider lanes. It uses deterministic provider-safe prompts and confirms that the orchestrator can select each provider while preserving preview-only, no-execution behavior.

## Sweep Scope

- Runtime status: Standard User remains default-off and unchanged
- Execution status: no execution authorized
- Provider contact status: no provider contact authorized
- Location permission status: no browser geolocation or location permission requested
- Backend write status: no backend writes

## Sweep Prompts

| Provider | Prompt |
| --- | --- |
| `weather` | `What is the weather in Stockton, CA?` |
| `agriculture-context` | `What crop disease updates should farmers know?` |
| `news-security` | `What security issues are affecting farmers right now?` |
| `job-search` | `Find farm jobs in Stockton, CA.` |
| `shipment-tracking` | `Track this shipment AB12345678.` |
| `music-media` | `Spotify playlist.` |

## Expected Behavior

- each prompt is routed through `server/nexus-live-source-orchestrator.js`
- each result contains selected provider metadata
- each result contains audit/trust metadata
- each result contains citations/source metadata when available
- missing provider config remains a safe skipped state
- live-ready provider config remains query-ready unless a separate approved live smoke lane runs
- no prompt creates Standard User visible behavior in this phase

## Blocked Behavior

RP9 must not execute workflows, request browser geolocation, infer or store user location, contact providers, call, message, submit applications, change shipments, stream media, process payments, create accounts, navigate externally, dispatch services, or write backend state.

## RP9 QA Expectations

RP9 QA verifies the orchestrator selects all six providers, every result remains safe live-source orchestration output, missing config is represented safely, high-risk execution prompts remain blocked, no secrets are printed, and no Standard User runtime activation is introduced.
