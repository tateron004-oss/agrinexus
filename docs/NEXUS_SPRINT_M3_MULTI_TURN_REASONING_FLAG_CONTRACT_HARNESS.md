# Nexus Sprint M3 - Multi-Turn Reasoning Flag Contract Harness

Current base: `739f0cdb969c528a8775efe43559e471ca931694`

Sprint M3 adds deterministic fixture coverage for the Sprint M2 Multi-Turn Reasoning feature flag contract. This phase is fixture, harness, documentation, and QA only. It does not import the feature flag module into Standard User runtime, activate a reasoning engine, store conversation context, continue hidden tasks, change typed routing, change voice routing, auto-route prompts, downgrade risks, select providers, stage actions, write storage, write audit events, contact providers, request permissions, navigate externally, or execute actions.

## Purpose

Prove that the default-off Multi-Turn Reasoning feature flag contract behaves predictably for:

- default-off input;
- flag-on review-only input;
- unsafe authority attempts;
- flag-on input without explicit visible UI permission.

## Artifacts

- Fixture file: `fixtures/nexus/multi-turn-reasoning-feature-flags.json`
- Harness: `scripts/nexus-sprint-m3-multi-turn-reasoning-flag-contract-harness.js`
- QA: `scripts/nexus-sprint-m3-multi-turn-reasoning-flag-contract-harness-qa.js`

## Fixture Expectations

Every fixture must preserve:

- `contextReviewAllowed: false`;
- `boundedConversationContextAllowed: false`;
- `reasoningRuntimeAllowed: false`;
- `liveReasoningEngineAllowed: false`;
- `contextContinuationAllowed: false`;
- `hiddenTaskContinuationAllowed: false`;
- `contextBasedExecutionAllowed: false`;
- `memoryDerivedAuthorityAllowed: false`;
- `automaticRouteChangesAllowed: false`;
- `riskTierDowngradeAllowed: false`;
- `providerSelectionFromContextAllowed: false`;
- `toolSelectionFromContextAllowed: false`;
- `plannerActionCreationFromContextAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `implicitPermissionAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserReasoningMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

The only field allowed to become true in a local/test-safe fixture is `visibleUiAllowed`, and only when both:

- `enabled: true`;
- `visibleUiAllowed: true`.

That visibility state is still not runtime activation in Sprint M3.

## Harness Boundary

The harness may:

- read local fixture JSON;
- call the Sprint M2 normalization helper;
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
- activate a reasoning engine;
- store conversation context;
- continue hidden tasks;
- change typed routing;
- change voice routing;
- auto-route prompts;
- downgrade risks;
- select providers;
- create planner actions;
- bypass policy;
- bypass confirmation;
- bypass permissions;
- authorize providers or payments;
- request permissions;
- create pending real-world actions;
- execute any action.

## Standard User Runtime Boundary

Sprint M3 does not load:

- `public/nexus-multi-turn-reasoning-feature-flag.js`;
- `scripts/nexus-sprint-m3-multi-turn-reasoning-flag-contract-harness.js`;
- `fixtures/nexus/multi-turn-reasoning-feature-flags.json`.

The Standard User build remains unchanged.

## QA Expectations

Sprint M3 QA must verify:

- doc, fixture, harness, and QA files exist;
- fixture set includes exactly four expected cases;
- unsafe attempted authority fields normalize back to no-execution values;
- harness output is deterministic;
- harness avoids runtime, storage, network, DOM, provider, permission, reasoning, context continuation, routing, risk-tier mutation, and execution APIs;
- runtime files do not load the Sprint M2/M3 artifacts;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint M4 - Multi-Turn Reasoning Runtime Absence Regression Guard`

Sprint M4 should add a static guard proving the Multi-Turn Reasoning flag contract and harness remain absent from Standard User runtime until a separately approved visible-runtime lane exists.
