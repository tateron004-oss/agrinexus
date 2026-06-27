# Nexus Sprint H3 - Consent Center Flag Contract Harness

Current base: `5ae1d41c32ea9d0b2cc3eb2a79df257eb8323676`

Sprint H3 adds deterministic fixture coverage for the Sprint H2 Consent Center feature flag contract. This phase is fixture, harness, documentation, and QA only. It does not import the feature flag module into Standard User runtime, render Consent Center UI, persist consent state, revoke consent, write audit events, contact providers, navigate externally, request permissions, or execute actions.

## Purpose

Prove that the default-off Consent Center feature flag contract behaves predictably for:

- default-off input;
- flag-on review-only input;
- unsafe authority attempts;
- flag-on input without explicit visible UI permission.

## Artifacts

- Fixture file: `fixtures/nexus/consent-center-feature-flags.json`
- Harness: `scripts/nexus-sprint-h3-consent-center-flag-contract-harness.js`
- QA: `scripts/nexus-sprint-h3-consent-center-flag-contract-harness-qa.js`

## Fixture Expectations

Every fixture must preserve:

- `consentPersistenceAllowed: false`;
- `consentRevocationAllowed: false`;
- `auditWriteAllowed: false`;
- `providerHandoffAllowed: false`;
- `permissionPromptAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

The only field allowed to become true in a local/test-safe fixture is `visibleUiAllowed`, and only when both:

- `enabled: true`;
- `visibleUiAllowed: true`.

That visibility state is still not runtime activation in Sprint H3.

## Harness Boundary

The harness may:

- read local fixture JSON;
- call the H2 normalization helper;
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
- persist consent records;
- revoke consent;
- write audit events;
- create provider handoff;
- request permissions;
- create pending real-world actions;
- execute any action.

## Standard User Runtime Boundary

Sprint H3 does not load:

- `public/nexus-consent-center-feature-flag.js`;
- `scripts/nexus-sprint-h3-consent-center-flag-contract-harness.js`;
- `fixtures/nexus/consent-center-feature-flags.json`.

The Standard User build remains unchanged.

## QA Expectations

Sprint H3 QA must verify:

- doc, fixture, harness, and QA files exist;
- fixture set includes exactly four expected cases;
- unsafe attempted authority fields normalize back to no-execution values;
- harness output is deterministic;
- harness avoids runtime, storage, network, DOM, provider, permission, and execution APIs;
- runtime files do not load the H2/H3 artifacts;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint H4 - Consent Center Runtime Absence Regression Guard`

Sprint H4 should add a static guard proving the Consent Center flag contract and harness remain absent from Standard User runtime until a separately approved visible-runtime lane exists.
