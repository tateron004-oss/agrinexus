# Nexus Sprint C27 - Source-Backed Agriculture Runtime Wiring Dry-Run Patch Plan

## Purpose

Sprint C27 documents the smallest future code touch points for source-backed agriculture runtime wiring without applying runtime changes.

This sprint remains inert. It does not wire C19/C17/C15/C13/C8 into Standard User runtime, does not add visible UI, does not add feature flags, does not add DOM rendering, does not add event handlers, does not change backend behavior, and does not approve runtime wiring by itself.

## Starting Checkpoint

- Previous pushed sprint: Sprint C26 - Source-Backed Agriculture Runtime Activation Rollback Plan Template
- Starting HEAD: `cfa7079671793332507901d9241665d4c9a14ee1`
- Rollback plan template: `docs/NEXUS_SPRINT_C26_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_ROLLBACK_PLAN_TEMPLATE.md`
- Risk register: `docs/NEXUS_SPRINT_C25_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_RISK_REGISTER.md`
- Approval record template: `docs/NEXUS_SPRINT_C24_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_APPROVAL_RECORD_TEMPLATE.md`
- Runtime wiring preflight checklist: `docs/NEXUS_SPRINT_C23_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_PREFLIGHT_CHECKLIST.md`
- Runtime absence contract: `docs/NEXUS_SPRINT_C22_SOURCE_BACKED_AGRICULTURE_STANDARD_USER_RUNTIME_ABSENCE_CONTRACT.md`

## Dry-Run Boundary

This plan is a dry run only. It identifies future edit candidates, validation order, and rollback checkpoints. It is not a patch, loader, import, feature flag, route, source connector, provider connector, renderer activation, or browser-visible change.

Future implementation must not begin unless C24 is marked `go`, C25 risks are owned, C26 rollback is complete, and this C27 plan is reviewed.

## Future Patch Candidate Files

The smallest plausible future wiring should be limited to:

- `public/app.js` for a guarded Standard User render call only if already-approved runtime data is present;
- `public/index.html` only if a hidden/default-empty mount already exists or a separately approved hidden mount is required;
- no `server.js` change unless a later approved sprint explicitly requires an additive source-backed response endpoint.

The following files must remain test-only or contract-only until a future approved runtime sprint:

- `test-fixtures/nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html`
- `public/nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js`
- `public/nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js`
- `public/nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js`
- `public/nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js`

## Future Patch Shape

The future patch, when separately approved, should:

1. Resolve a default-off or explicitly scoped activation decision.
2. Consume only source-backed agriculture packets that already contain source, citation, freshness, confidence, limitation, and low-risk eligibility fields.
3. Verify C13 eligibility before any visible card is considered.
4. Map approved fields through C8 and C17 contracts.
5. Render only review-only, no-execution copy.
6. Avoid provider handoff, call, message, payment, marketplace transaction, location, camera, health, pharmacy, emergency, dispatch, backend, storage, and external navigation behavior.
7. Fall back to existing assistant text if any required field is missing.

## Dry-Run Non-Changes

This sprint intentionally does not:

- import C8, C13, C15, C17, or C19 into Standard User runtime;
- add script tags;
- add dynamic imports;
- add event listeners;
- add click handlers;
- create DOM nodes;
- add route handlers;
- add backend endpoints;
- add fetch calls;
- write localStorage or sessionStorage;
- change command routing;
- change selectedToolId inference;
- change policy, planner, provider, native bridge, health, marketplace, telehealth, music, or map behavior.

## Required Pre-Patch Evidence

Before any future implementation sprint starts, record:

- local HEAD before implementation;
- remote HEAD before implementation;
- C22 runtime absence QA result;
- C23 preflight QA result;
- C24 approval decision;
- C25 risk owner review;
- C26 rollback plan owner sign-off;
- C27 dry-run plan owner sign-off;
- proposed exact file paths;
- proposed exact insertion points;
- expected fallback behavior;
- expected rollback path.

## Required Post-Patch Evidence

Before any future runtime wiring commit is allowed, record:

- `git diff --check`;
- `node --check server.js`;
- `node --check public/app.js`;
- C8/C13/C15/C17/C19 QA results;
- C20 browser validation plan completion;
- C21 browser validation evidence;
- C22 runtime absence or updated activation guard result;
- C23/C24/C25/C26/C27 QA results;
- `node scripts/qa-suite.js nexus-workforce`;
- `node scripts/qa-suite.js all-safe`;
- console warning/error review;
- network request review;
- storage mutation review;
- permission prompt review;
- external navigation review;
- rollback evidence.

## Go/No-Go Decision

Future runtime wiring remains `no-go` if:

- product approval is not explicit;
- source packet shape is uncertain;
- eligibility is uncertain;
- source/citation/freshness/confidence/limitation fields are missing;
- high-risk prompt exclusion is uncertain;
- rollback is not tested;
- browser validation cannot be performed;
- any live provider, call, message, payment, marketplace transaction, location, camera, health, pharmacy, emergency, dispatch, backend, or storage behavior is required.

## Sprint C27 QA Expectations

The C27 QA guard verifies:

- this dry-run patch plan exists;
- C26 recommends this sprint;
- candidate future files, future patch shape, dry-run non-changes, pre-patch evidence, post-patch evidence, and go/no-go sections are present;
- no runtime wiring has been added;
- protected C19/C17/C15/C13/C8 fragments remain absent from `public/index.html`, `public/app.js`, and `server.js`;
- package alias and safe-suite wiring are present.

## Sprint C28 Recommendation

Sprint C28 should add a source-backed agriculture runtime activation decision checklist that consolidates C22 through C27 into a single go/no-go record before implementation.
