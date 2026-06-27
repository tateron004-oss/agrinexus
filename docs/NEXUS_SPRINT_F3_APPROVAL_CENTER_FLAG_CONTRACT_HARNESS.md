# Nexus Sprint F3 - Approval Center Flag Contract Harness

Current base: `3b1be2fc0185ec61ac6ff3e8af647e5e673260ab`

Sprint F3 adds deterministic fixture coverage for the Sprint F2 Approval Center feature flag contract. This phase is fixture, harness, documentation, and QA only. It does not import the feature flag module into Standard User runtime, render Approval Center UI, persist approval state, write audit events, contact providers, navigate externally, request permissions, or execute actions.

## Purpose

Prove that the default-off Approval Center feature flag contract behaves predictably for:

- default-off input;
- flag-on review-only input;
- unsafe authority attempts;
- flag-on input without explicit visible UI permission.

## Artifacts

- Fixture file: `fixtures/nexus/approval-center-feature-flags.json`
- Harness: `scripts/nexus-sprint-f3-approval-center-flag-contract-harness.js`
- QA: `scripts/nexus-sprint-f3-approval-center-flag-contract-harness-qa.js`

## Fixture Expectations

Every fixture must preserve:

- `approvalPersistenceAllowed: false`;
- `auditWriteAllowed: false`;
- `providerHandoffAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

The only field allowed to become true in a local/test-safe fixture is `visibleUiAllowed`, and only when both:

- `enabled: true`;
- `visibleUiAllowed: true`.

That visibility state is still not runtime activation in Sprint F3.

## Harness Boundary

The harness may:

- read local fixture JSON;
- call the F2 normalization helper;
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
- persist approval records;
- write audit events;
- create provider handoff;
- create pending real-world actions;
- execute any action.

## Standard User Runtime Boundary

Sprint F3 does not load:

- `public/nexus-approval-center-feature-flag.js`;
- `scripts/nexus-sprint-f3-approval-center-flag-contract-harness.js`;
- `fixtures/nexus/approval-center-feature-flags.json`.

The Standard User build remains unchanged.

## QA Expectations

Sprint F3 QA must verify:

- doc, fixture, harness, and QA files exist;
- fixture set includes exactly four expected cases;
- unsafe attempted authority fields normalize back to no-execution values;
- harness output is deterministic;
- harness avoids runtime, storage, network, DOM, provider, permission, and execution APIs;
- runtime files do not load the F2/F3 artifacts;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint F4 - Approval Center Runtime Absence Regression Guard`

Sprint F4 should add a static guard proving the Approval Center flag contract and harness remain absent from Standard User runtime until a separately approved visible-runtime lane exists.
