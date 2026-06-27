# Nexus Sprint L3 - Advanced Intent Understanding Flag Contract Harness

Current base: `7f1f6ec1b5b2551e12d1f62310ec9f52d3683f44`

Sprint L3 adds deterministic fixture coverage for the Sprint L2 Advanced Intent Understanding feature flag contract. This phase is fixture, harness, documentation, and QA only. It does not import the feature flag module into Standard User runtime, replace the classifier, change typed routing, change voice routing, auto-route prompts, downgrade risks, select providers, stage actions, write storage, write audit events, contact providers, request permissions, navigate externally, or execute actions.

## Purpose

Prove that the default-off Advanced Intent Understanding feature flag contract behaves predictably for:

- default-off input;
- flag-on review-only input;
- unsafe authority attempts;
- flag-on input without explicit visible UI permission.

## Artifacts

- Fixture file: `fixtures/nexus/advanced-intent-understanding-feature-flags.json`
- Harness: `scripts/nexus-sprint-l3-advanced-intent-understanding-flag-contract-harness.js`
- QA: `scripts/nexus-sprint-l3-advanced-intent-understanding-flag-contract-harness-qa.js`

## Fixture Expectations

Every fixture must preserve:

- `classifierContextAllowed: false`;
- `classifierRuntimeAllowed: false`;
- `liveClassifierReplacementAllowed: false`;
- `automaticRouteChangesAllowed: false`;
- `hiddenRiskDowngradeAllowed: false`;
- `confidenceRiskDowngradeAllowed: false`;
- `providerSelectionAllowed: false`;
- `toolSelectionAllowed: false`;
- `plannerActionCreationAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `rawAdapterCallsAllowed: false`;
- `implicitPermissionAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `standardUserClassifierMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

The only field allowed to become true in a local/test-safe fixture is `visibleUiAllowed`, and only when both:

- `enabled: true`;
- `visibleUiAllowed: true`.

That visibility state is still not runtime activation in Sprint L3.

## Harness Boundary

The harness may:

- read local fixture JSON;
- call the Sprint L2 normalization helper;
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
- replace the classifier;
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

Sprint L3 does not load:

- `public/nexus-advanced-intent-understanding-feature-flag.js`;
- `scripts/nexus-sprint-l3-advanced-intent-understanding-flag-contract-harness.js`;
- `fixtures/nexus/advanced-intent-understanding-feature-flags.json`.

The Standard User build remains unchanged.

## QA Expectations

Sprint L3 QA must verify:

- doc, fixture, harness, and QA files exist;
- fixture set includes exactly four expected cases;
- unsafe attempted authority fields normalize back to no-execution values;
- harness output is deterministic;
- harness avoids runtime, storage, network, DOM, provider, permission, classifier, routing, risk-tier mutation, and execution APIs;
- runtime files do not load the Sprint L2/L3 artifacts;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint L4 - Advanced Intent Understanding Runtime Absence Regression Guard`

Sprint L4 should add a static guard proving the Advanced Intent Understanding flag contract and harness remain absent from Standard User runtime until a separately approved visible-runtime lane exists.
