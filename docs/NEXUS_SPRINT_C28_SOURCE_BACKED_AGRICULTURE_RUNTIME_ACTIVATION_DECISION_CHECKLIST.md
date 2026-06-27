# Nexus Sprint C28 - Source-Backed Agriculture Runtime Activation Decision Checklist

## Purpose

Sprint C28 consolidates the source-backed agriculture runtime activation gates into a single go/no-go decision checklist before any implementation sprint may wire the agriculture response card into Standard User runtime.

This sprint remains inert. It does not wire C19/C17/C15/C13/C8 into Standard User runtime, does not add visible UI, does not add feature flags, does not add DOM rendering, does not add event handlers, does not change backend behavior, and does not approve runtime wiring by itself.

## Starting Checkpoint

- Previous pushed sprint: Sprint C27 - Source-Backed Agriculture Runtime Wiring Dry-Run Patch Plan
- Starting HEAD: `8ebcfcb1a36d9cd8f7416f122415bf36cc8a60c2`
- Dry-run patch plan: `docs/NEXUS_SPRINT_C27_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_DRY_RUN_PATCH_PLAN.md`
- Rollback plan template: `docs/NEXUS_SPRINT_C26_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_ROLLBACK_PLAN_TEMPLATE.md`
- Risk register: `docs/NEXUS_SPRINT_C25_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_RISK_REGISTER.md`
- Approval record template: `docs/NEXUS_SPRINT_C24_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_APPROVAL_RECORD_TEMPLATE.md`
- Runtime wiring preflight checklist: `docs/NEXUS_SPRINT_C23_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_PREFLIGHT_CHECKLIST.md`
- Runtime absence contract: `docs/NEXUS_SPRINT_C22_SOURCE_BACKED_AGRICULTURE_STANDARD_USER_RUNTIME_ABSENCE_CONTRACT.md`

## Decision Checklist Boundary

This checklist is the decision record that must be completed before a future runtime wiring sprint begins. It is not a runtime patch, loader, source connector, renderer activation, feature flag, or product approval by itself.

## Consolidated Gate Checklist

| Gate | Required Evidence | Status |
| --- | --- | --- |
| C22 runtime absence baseline | C22 QA passes before implementation and protected fragments are absent from runtime files. | pending |
| C23 preflight checklist | Runtime wiring preflight checklist is complete and no blocked condition is present. | pending |
| C24 approval record | Product, safety, technical, QA, browser validation, and rollback owners are recorded with a `go` decision. | pending |
| C25 risk register | Critical/high risks have owners, prevention, detection, and rollback paths. | pending |
| C26 rollback plan | Rollback owner, trigger threshold, restoration target, procedure, and evidence template are complete. | pending |
| C27 dry-run patch plan | Exact future file paths, insertion points, fallback behavior, and non-change boundaries are recorded. | pending |
| Source packet readiness | Source, citation, freshness, confidence, limitation, and low-risk agriculture eligibility fields are available. | pending |
| Browser validation ownership | C20 plan and C21 evidence template are assigned to a browser validation owner. | pending |
| QA ownership | Deterministic QA, `nexus-workforce`, and `all-safe` owners are assigned. | pending |
| Runtime restoration | Temporary DB, browser storage, and runtime mutation restoration steps are documented. | pending |

## Required Go Conditions

Runtime wiring may be considered only if all of the following are true:

- C24 approval record is explicitly marked `go`;
- C25 critical/high risks are owned and mitigated;
- C26 rollback plan is complete before implementation;
- C27 dry-run plan identifies the smallest safe touch points;
- source-backed packet fields are complete;
- high-risk prompt exclusion is deterministic;
- Standard User remains low-risk, review-only, and no-execution;
- browser validation can be performed on the normal `node server.js` / `Start as User` path;
- `node scripts/qa-suite.js nexus-workforce` is expected to pass;
- `node scripts/qa-suite.js all-safe` is expected to pass.

## Required No-Go Conditions

Runtime wiring must remain `no-go` if any of these are true:

- any gate status remains pending, blocked, or unknown;
- approval owner, QA owner, browser validation owner, or rollback owner is missing;
- source/citation/freshness/confidence/limitation fields are missing;
- high-risk prompt exclusion is uncertain;
- implementation requires provider handoff, call, message, payment, marketplace transaction, location, camera, health, pharmacy, emergency, dispatch, backend, storage, or external navigation behavior;
- rollback path cannot be executed;
- browser validation cannot be performed;
- repo state cannot be restored.

## Protected Runtime Fragments

These fragments must remain absent from `public/index.html`, `public/app.js`, and `server.js` until a separately approved implementation sprint intentionally changes the runtime:

- `nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html`
- `nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js`
- `nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js`
- `nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js`
- `nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js`

## Decision Record Template

Record:

- Decision ID:
- Decision date:
- Product owner:
- Safety owner:
- Technical owner:
- QA owner:
- Browser validation owner:
- Rollback owner:
- Local HEAD before implementation:
- Remote HEAD before implementation:
- Gate checklist status:
- Final decision: `go` / `no-go` / `blocked`
- Rationale:
- Required follow-up:

## Sprint C28 QA Expectations

The C28 QA guard verifies:

- this activation decision checklist exists;
- C27 recommends this sprint;
- C22 through C27 evidence gates are represented;
- go/no-go conditions are explicit;
- protected C19/C17/C15/C13/C8 fragments remain absent from runtime files;
- no runtime wiring has been added;
- package alias and safe-suite wiring are present.

## Sprint C29 Recommendation

Sprint C29 should add an implementation-free source-backed agriculture runtime wiring issue template that future developers can use to request a scoped activation sprint with all C22-C28 evidence attached.
