# Nexus Genesis Full Rail Completion Map

Starting commit: `89e5e78dc808b00753671ecc963e1b15049c2b0b`

## Purpose

This map records the Genesis daily-companion trust chain as an implementation contract, not a roadmap. The rail system now protects the full Standard User chain:

`user presence -> input ownership -> listening or typed intake -> transcript -> acknowledgement -> understanding -> context retrieval -> planning -> capability routing -> consent -> execution or truthful blocking -> outcome verification -> receipt -> memory update -> spoken or visible response -> companion continuity -> recovery`.

## Existing Rails Retained

| Rail | ID | Responsibility |
| --- | --- | --- |
| 1 | `nexus-trust-chain-trace` | Ownership, transcript trace, synchronized state |
| 2 | `nexus-conversation-acknowledgement` | Visible acknowledgement, fallback, companion response |
| 3 | `nexus-audible-response` | Browser speech lifecycle and honest text fallback |
| 4 | `nexus-orb-deterministic-activation` | Orb wake/listen behavior without workflow side effects |
| 5 | `nexus-conversation-first-routing` | Conversation-first handling before workflow launch |
| 6 | `nexus-admin-preview-isolation` | Standard User isolation from admin previews |
| 7 | `nexus-first-response-synchronization` | Transcript, visible response, and speech state synchronization |
| 8 | `nexus-genesis-trust-chain-acceptance` | Original rail acceptance and registration coverage |

## Added Rails

| Rail | ID | Responsibility |
| --- | --- | --- |
| 9 | `nexus-genesis-rail-09-understanding` | Intent integrity, ambiguity handling, no guessed execution |
| 10 | `nexus-genesis-rail-10-context` | Multi-turn context, stale-context rejection, mission separation |
| 11 | `nexus-genesis-rail-11-memory` | Session/persistent/preference memory truth, correction, deletion, closure |
| 12 | `nexus-genesis-rail-12-planning` | Goal decomposition, missing details, revision, cancellation |
| 13 | `nexus-genesis-rail-13-capability-readiness` | Provider readiness, missing env names, local fallback, no fake readiness |
| 14 | `nexus-genesis-rail-14-consent-confirmation` | Exact-action confirmation, expiry, changed-action invalidation |
| 15 | `nexus-genesis-rail-15-execution-integrity` | Exact payload, permission checks, duplicate prevention, no preview execution |
| 16 | `nexus-genesis-rail-16-outcome-receipts` | Provider outcome evidence, receipts, audit trace, no invented receipt |
| 17 | `nexus-genesis-rail-17-privacy-isolation` | User/session/record/provider isolation, redaction, access denial |
| 18 | `nexus-genesis-rail-18-safety-escalation` | Emergency, diagnosis, finance, drone, employment, chemical, shipment safety |
| 19 | `nexus-genesis-rail-19-accessibility` | Keyboard, focus, screen reader, reduced motion, contrast, typed fallback |
| 20 | `nexus-genesis-rail-20-multilingual` | English, Spanish, French, Swahili confirmation and voice fallback integrity |
| 21 | `nexus-genesis-rail-21-concurrency` | Interruptions, stale callbacks, duplicate events, cancellation races |
| 22 | `nexus-genesis-rail-22-recovery` | Offline, timeout, stale cache, malformed response, unavailable device recovery |
| 23 | `nexus-genesis-rail-23-companion-emotional-safety` | Calm companion continuity without dependency or consciousness claims |
| 24 | `nexus-genesis-rail-24-physical-browser-voice-proof` | Separates source wiring, browser events, and human-confirmed audible proof |
| 25 | `nexus-genesis-rail-25-end-to-end-standard-user-acceptance` | Final Standard User acceptance and all-rail registration |

## Runtime Implementation

The runtime contract lives in `public/app.js` as `NEXUS_GENESIS_FULL_RAIL_CONTRACT` and is exposed read-only on `window.NEXUS_GENESIS_FULL_RAIL_CONTRACT` for deterministic browser acceptance. It records the required guardrails for understanding, context, memory, planning, capability readiness, consent, execution, receipts, privacy, safety, accessibility, multilingual behavior, concurrency, degraded recovery, companion emotional safety, physical voice proof, and final Standard User acceptance.

The contract does not authorize live execution. It requires exact confirmation, provider evidence, verified outcome receipts, and truthful blocked states before Nexus may claim any real-world result.

## QA Architecture

All rails use the shared harness in `scripts/lib/nexus-genesis-trust-chain-shared-qa.js`. Wrappers remain declarative and declare:

- rail number
- rail ID
- rail name
- acceptance purpose
- selected assertion groups

The registration assertion verifies unique rail numbers, unique rail IDs, unique aliases, valid assertion groups, wrapper smallness, package aliases, QA-suite registration, and final rail coverage.

## Physical Voice Truth

Rail 24 distinguishes:

1. source wiring verified,
2. browser events verified,
3. actual audible output genuinely heard.

The current Codex in-app browser validation does not prove physical audible output. The rail remains implemented, and physical audible proof remains environmentally blocked until tested in an installed Chrome or Edge session with microphone and speakers/headphones.

## External Blockers

- Real audible output: requires a physical browser/audio environment.
- Live provider execution: remains credential/provider/confirmation gated.
- Regulated health, pharmacy, financial, employment, drone, and emergency actions: remain blocked unless the required provider, consent, confirmation, audit, and jurisdiction controls are configured.
