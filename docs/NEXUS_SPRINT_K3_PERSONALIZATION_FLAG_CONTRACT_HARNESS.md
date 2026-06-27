# Nexus Sprint K3 - Personalization Flag Contract Harness

Current base: `f906bc254e72e7585a828a9f0114616cfa41de1d`

Sprint K3 adds deterministic fixture coverage for the Sprint K2 Personalization feature flag contract. This phase is fixture, harness, documentation, and QA only. It does not import the feature flag module into Standard User runtime, render personalization UI, save preferences, load preferences, sync preferences, infer hidden preferences, personalize automatically, mutate risk tiers, write storage, write audit events, contact providers, request permissions, navigate externally, or execute actions.

## Purpose

Prove that the default-off Personalization feature flag contract behaves predictably for:

- default-off input;
- flag-on review-only input;
- unsafe authority attempts;
- flag-on input without explicit visible UI permission.

## Artifacts

- Fixture file: `fixtures/nexus/personalization-feature-flags.json`
- Harness: `scripts/nexus-sprint-k3-personalization-flag-contract-harness.js`
- QA: `scripts/nexus-sprint-k3-personalization-flag-contract-harness-qa.js`

## Fixture Expectations

Every fixture must preserve:

- `preferenceContextAllowed: false`;
- `preferenceEngineAllowed: false`;
- `automaticPersonalizationAllowed: false`;
- `hiddenPersonalizationAllowed: false`;
- `preferencePersistenceAllowed: false`;
- `preferenceSyncAllowed: false`;
- `preferenceMutationAllowed: false`;
- `profileDerivedExecutionAllowed: false`;
- `providerHandoffAllowed: false`;
- `riskTierMutationAllowed: false`;
- `standardUserPreferenceMutationAllowed: false`;
- `permissionPromptAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

The only field allowed to become true in a local/test-safe fixture is `visibleUiAllowed`, and only when both:

- `enabled: true`;
- `visibleUiAllowed: true`.

That visibility state is still not runtime activation in Sprint K3.

## Harness Boundary

The harness may:

- read local fixture JSON;
- call the Sprint K2 normalization helper;
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
- load preferences;
- save preferences;
- mutate preferences;
- sync preferences;
- infer hidden preferences;
- personalize automatically;
- mutate risk tiers;
- authorize providers or payments;
- request permissions;
- create pending real-world actions;
- execute any action.

## Standard User Runtime Boundary

Sprint K3 does not load:

- `public/nexus-personalization-feature-flag.js`;
- `scripts/nexus-sprint-k3-personalization-flag-contract-harness.js`;
- `fixtures/nexus/personalization-feature-flags.json`.

The Standard User build remains unchanged.

## QA Expectations

Sprint K3 QA must verify:

- doc, fixture, harness, and QA files exist;
- fixture set includes exactly four expected cases;
- unsafe attempted authority fields normalize back to no-execution values;
- harness output is deterministic;
- harness avoids runtime, storage, network, DOM, provider, permission, preference, profile, personalization, risk-tier mutation, and execution APIs;
- runtime files do not load the Sprint K2/K3 artifacts;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint K4 - Personalization Runtime Absence Regression Guard`

Sprint K4 should add a static guard proving the Personalization flag contract and harness remain absent from Standard User runtime until a separately approved visible-runtime lane exists.
