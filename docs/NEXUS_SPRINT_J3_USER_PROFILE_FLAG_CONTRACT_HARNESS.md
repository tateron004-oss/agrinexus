# Nexus Sprint J3 - User Profile Flag Contract Harness

Current base: `47360e589e4c9c403301017a76c2f78688af0c8f`

Sprint J3 adds deterministic fixture coverage for the Sprint J2 User Profile feature flag contract. This phase is fixture, harness, documentation, and QA only. It does not import the feature flag module into Standard User runtime, render profile UI, create profiles, edit profiles, share profiles, sync profiles, store sensitive profile data, personalize automatically, elevate roles, authorize providers, authorize payments, request permissions, write audit events, contact providers, navigate externally, or execute actions.

## Purpose

Prove that the default-off User Profile feature flag contract behaves predictably for:

- default-off input;
- flag-on review-only input;
- unsafe authority attempts;
- flag-on input without explicit visible UI permission.

## Artifacts

- Fixture file: `fixtures/nexus/user-profile-feature-flags.json`
- Harness: `scripts/nexus-sprint-j3-user-profile-flag-contract-harness.js`
- QA: `scripts/nexus-sprint-j3-user-profile-flag-contract-harness-qa.js`

## Fixture Expectations

Every fixture must preserve:

- `profileContextAllowed: false`;
- `profileBackendAllowed: false`;
- `accountCreationAllowed: false`;
- `profileMutationAllowed: false`;
- `profileSharingAllowed: false`;
- `profileSyncAllowed: false`;
- `identityProofingAllowed: false`;
- `roleElevationAllowed: false`;
- `providerProfileHandoffAllowed: false`;
- `sensitiveProfileStorageAllowed: false`;
- `automaticPersonalizationAllowed: false`;
- `standardUserProfileMutationAllowed: false`;
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

That visibility state is still not runtime activation in Sprint J3.

## Harness Boundary

The harness may:

- read local fixture JSON;
- call the Sprint J2 normalization helper;
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
- create profiles;
- edit profiles;
- share profiles;
- sync profiles;
- store sensitive profile data;
- personalize automatically;
- elevate roles;
- authorize providers or payments;
- request permissions;
- create pending real-world actions;
- execute any action.

## Standard User Runtime Boundary

Sprint J3 does not load:

- `public/nexus-user-profile-feature-flag.js`;
- `scripts/nexus-sprint-j3-user-profile-flag-contract-harness.js`;
- `fixtures/nexus/user-profile-feature-flags.json`.

The Standard User build remains unchanged.

## QA Expectations

Sprint J3 QA must verify:

- doc, fixture, harness, and QA files exist;
- fixture set includes exactly four expected cases;
- unsafe attempted authority fields normalize back to no-execution values;
- harness output is deterministic;
- harness avoids runtime, storage, network, DOM, provider, permission, profile, account, role, personalization, and execution APIs;
- runtime files do not load the Sprint J2/J3 artifacts;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint J4 - User Profile Runtime Absence Regression Guard`

Sprint J4 should add a static guard proving the User Profile flag contract and harness remain absent from Standard User runtime until a separately approved visible-runtime lane exists.
