# Nexus Sprint C25 - Source-Backed Agriculture Runtime Activation Risk Register

## Purpose

Sprint C25 records the runtime activation risk register for the source-backed agriculture response card lane before any code-level runtime wiring is attempted.

This sprint remains inert. It does not wire C19/C17/C15/C13/C8 into Standard User runtime, does not add visible UI, does not add feature flags, does not add DOM rendering, does not add event handlers, does not change backend behavior, and does not approve runtime wiring by itself.

## Starting Checkpoint

- Previous pushed sprint: Sprint C24 - Source-Backed Agriculture Runtime Wiring Approval Record Template
- Starting HEAD: `1099bb64bd1d9fe8cbbd7686a97e8740bbff490d`
- Approval record template: `docs/NEXUS_SPRINT_C24_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_APPROVAL_RECORD_TEMPLATE.md`
- Runtime wiring preflight checklist: `docs/NEXUS_SPRINT_C23_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_PREFLIGHT_CHECKLIST.md`
- Runtime absence contract: `docs/NEXUS_SPRINT_C22_SOURCE_BACKED_AGRICULTURE_STANDARD_USER_RUNTIME_ABSENCE_CONTRACT.md`

## Scope Boundary

The risk register only inventories and constrains future activation risks. It is not an activation approval, implementation plan, feature flag, loader, renderer, router, source connector, provider connector, or runtime patch.

Any future runtime wiring must still satisfy:

- C22 runtime absence contract before work starts;
- C23 preflight checklist;
- C24 approval record;
- this C25 risk register;
- deterministic QA;
- Standard User browser validation;
- rollback evidence.

## Runtime Activation Risk Register

| Risk ID | Category | Failure Mode | Severity | Prevention | Detection | Rollback | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C25-R01 | Runtime loading | C19/C17/C15/C13/C8 is accidentally loaded by `public/index.html`, `public/app.js`, or `server.js` before approval. | Critical | Keep protected files test-only until C24 approval is complete. | C22/C23/C24/C25 QA checks protected fragments are absent from runtime files. | Restore edited runtime file and rerun C22, `nexus-workforce`, and `all-safe`. | Technical owner |
| C25-R02 | Fixture exposure | The C19 static fixture becomes a Standard User route or visible app surface. | High | Keep fixture under `test-fixtures/` and never link it from Standard User UI. | Static QA checks fixture references are absent from runtime files. | Remove route/link and rerun browser absence validation. | Technical owner |
| C25-R03 | Eligibility leak | High-risk prompts render the agriculture card or look eligible for low-risk review. | Critical | Require C13 eligibility handoff and explicit excluded prompt families. | Browser validation with high-risk prompts plus C13 QA. | Disable wiring and restore C22 absence. | Safety owner |
| C25-R04 | Source integrity | Stale, missing, or unverified source data is displayed as verified. | Critical | Require source-backed packet checks, citation, freshness, confidence, and limitation copy. | C6/C8/C17 QA plus browser source/freshness review. | Hide card and return text-only fallback until source packet is valid. | QA owner |
| C25-R05 | Evidence omission | Citation, freshness, confidence, or limitation fields are omitted from visible card copy. | High | Use C17 copy model and C19 snapshot contract. | C17/C19 QA and browser evidence template. | Revert visible renderer wiring and update copy model before retry. | Product owner |
| C25-R06 | Local applicability overclaim | The card suggests advice is locally authoritative or guaranteed without local source confirmation. | High | Require limitation copy and avoid diagnosis/prescription/action claims. | Copy QA and browser review for overclaim language. | Remove claim and restore conservative fallback. | Product owner |
| C25-R07 | Debug leakage | Hidden debug metadata, internal IDs, selectedToolId, risk tags, or raw source payloads become visible. | High | Render only approved C17 user-facing fields. | Browser validation and static string checks. | Disable renderer and sanitize visible payload. | QA owner |
| C25-R08 | Provider side effect | Provider handoff, call, message, appointment, payment, marketplace transaction, location, camera, health, pharmacy, emergency, or dispatch side effects are introduced. | Critical | Keep lane agriculture-only, low-risk, review-only, and no-execution. | Static QA scans runtime files; browser validation checks permissions/network/external navigation. | Revert runtime wiring and rerun full safety suite. | Safety owner |
| C25-R09 | Browser console regression | Runtime wiring introduces console warnings or errors in the Standard User path. | Medium | Keep implementation minimal and feature-scoped. | C20/C21 browser validation evidence captures console status. | Roll back wiring and isolate console failure. | Browser validation owner |
| C25-R10 | Network/storage regression | Runtime wiring creates unexpected network requests, localStorage/sessionStorage writes, or runtime mutations. | High | No new fetch/storage behavior in first activation lane unless separately approved. | Browser network/storage review and static QA. | Remove mutation path, restore runtime state, rerun all QA. | Technical owner |
| C25-R11 | Runtime mutation not restored | Temporary DB, local storage, or test fixture state remains after validation. | High | Require runtime mutation restoration owner in C24. | Final `git status --short`, storage review, and validation notes. | Restore state before commit/push. | QA owner |
| C25-R12 | Broad refactor | Runtime wiring changes unrelated app/server/router behavior. | High | Restrict future wiring to the smallest approved surface. | Diff review and targeted QA. | Revert unrelated changes and recommit narrowly. | Technical owner |
| C25-R13 | Rollback gap | Runtime wiring is committed without a tested rollback path. | Critical | Require C24 rollback evidence and C25 rollback owner. | C24 approval record and C25 QA. | Stop implementation until rollback is documented and tested. | Rollback owner |

## Required Mitigations Before Any Runtime Wiring

Before a future implementation sprint may wire source-backed agriculture cards into Standard User runtime, it must provide evidence for:

- C22 runtime absence contract pass before implementation;
- C23 preflight checklist completion;
- C24 approval record marked `go`;
- C25 risk register review with owners assigned;
- C20 browser validation plan;
- C21 browser validation evidence template;
- deterministic source-backed agriculture QA;
- `node scripts/qa-suite.js nexus-workforce`;
- `node scripts/qa-suite.js all-safe`;
- rollback command or commit path.

## Go/No-Go Rules

Runtime wiring is `go` only when:

- C24 approval is complete and explicitly says `go`;
- every C25 critical/high risk has an owner, prevention path, detection path, and rollback path;
- protected fragments remain absent from runtime files before implementation begins;
- product scope remains source-backed agriculture only;
- Standard User remains low-risk, review-only, and no-execution.

Runtime wiring is `no-go` when:

- any live provider, call, message, payment, marketplace transaction, location, camera, health, pharmacy, emergency, dispatch, backend, or storage behavior is required;
- source/citation/freshness/confidence/limitation display cannot be guaranteed;
- browser validation ownership or rollback evidence is missing;
- high-risk prompt exclusion is uncertain.

Runtime wiring is `blocked` when:

- product approval is missing;
- QA owner, browser validation owner, or rollback owner is missing;
- deterministic QA cannot run locally;
- repo state cannot be restored.

## Sprint C25 QA Expectations

The C25 QA guard verifies:

- this risk register exists;
- C24 recommends this sprint;
- the risk register includes runtime loading, fixture exposure, high-risk prompt exclusion, source integrity, evidence display, local applicability, debug leakage, provider side effects, browser console, network/storage, runtime restoration, broad refactor, and rollback risks;
- required mitigations reference C20, C21, C22, C23, C24, deterministic QA, `nexus-workforce`, and `all-safe`;
- protected C19/C17/C15/C13/C8 fragments remain absent from runtime files;
- package alias and safe-suite wiring are present.

## Sprint C26 Recommendation

Sprint C26 should add a source-backed agriculture runtime activation rollback plan template before any runtime wiring is attempted.
