# Nexus Sprint N3 - Task Planning Flag Contract Harness

Current base: `941be24558034b3ff25567509c7c10d78c645a22`

Sprint N3 adds deterministic fixture coverage for the Sprint N2 Task Planning feature flag contract. This phase is fixture, harness, documentation, and QA only. It does not import the feature flag module into Standard User runtime, activate a planner engine, generate executable plan steps, chain steps automatically, change typed routing, change voice routing, auto-route prompts, downgrade risks, select providers, stage actions, write storage, write audit events, contact providers, request permissions, navigate externally, or execute actions.

## Purpose

Prove that the default-off Task Planning feature flag contract behaves predictably for:

- default-off input;
- flag-on review-only input;
- unsafe authority attempts;
- flag-on input without explicit visible UI permission.

## Artifacts

- Fixture file: `fixtures/nexus/task-planning-feature-flags.json`
- Harness: `scripts/nexus-sprint-n3-task-planning-flag-contract-harness.js`
- QA: `scripts/nexus-sprint-n3-task-planning-flag-contract-harness-qa.js`

## Fixture Expectations

Every fixture must preserve:

- `planReviewAllowed: false`;
- `stagedPlanPreviewAllowed: false`;
- `plannerRuntimeAllowed: false`;
- `livePlannerReplacementAllowed: false`;
- `executablePlanStepsAllowed: false`;
- `automaticStepChainingAllowed: false`;
- `providerExecutionFromPlansAllowed: false`;
- `rawAdapterCallsAllowed: false`;
- `implicitPermissionAllowed: false`;
- `autonomousHighRiskStepsAllowed: false`;
- `planBasedRouteMutationAllowed: false`;
- `riskTierDowngradeAllowed: false`;
- `providerSelectionFromPlanAllowed: false`;
- `toolSelectionFromPlanAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserPlannerMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

The only field allowed to become true in a local/test-safe fixture is `visibleUiAllowed`, and only when both:

- `enabled: true`;
- `visibleUiAllowed: true`.

That visibility state is still not runtime activation in Sprint N3.

## Harness Boundary

The harness may:

- read local fixture JSON;
- call the Sprint N2 normalization helper;
- compare normalized results to expected deterministic values;
- print deterministic pass/fail output.

The harness must not:

- mutate fixture files;
- access network;
- access DOM;
- write storage;
- touch `db.json`;
- import from `public/app.js`;
- render UI;
- activate a planner engine;
- generate executable plan steps;
- chain steps automatically;
- change typed routing;
- change voice routing;
- auto-route prompts;
- downgrade risks;
- select providers;
- create staged actions;
- bypass policy;
- bypass confirmation;
- bypass permissions;
- authorize providers or payments;
- request permissions;
- create pending real-world actions;
- execute any action.

## Standard User Runtime Boundary

Sprint N3 does not load:

- `public/nexus-task-planning-feature-flag.js`;
- `scripts/nexus-sprint-n3-task-planning-flag-contract-harness.js`;
- `fixtures/nexus/task-planning-feature-flags.json`.

The Standard User build remains unchanged.

## QA Expectations

Sprint N3 QA must verify:

- doc, fixture, harness, and QA files exist;
- fixture set includes exactly four expected cases;
- unsafe attempted authority fields normalize back to no-execution values;
- harness output is deterministic;
- harness avoids runtime, storage, network, DOM, provider, permission, planner, step chaining, routing, risk-tier mutation, and execution APIs;
- runtime files do not load the Sprint N2/N3 artifacts;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint N4 - Task Planning Runtime Absence Regression Guard`

Sprint N4 should add a static guard proving the Task Planning flag contract and harness remain absent from Standard User runtime until a separately approved visible-runtime lane exists.
