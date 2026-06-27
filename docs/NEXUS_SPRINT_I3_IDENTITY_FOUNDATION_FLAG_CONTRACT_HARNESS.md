# Nexus Sprint I3 - Identity Foundation Flag Contract Harness

Current base: `00c892a81643b197eed81b4036491b34c9e63093`

Sprint I3 adds deterministic fixture coverage for the Sprint I2 Identity Foundation feature flag contract. This phase is fixture, harness, documentation, and QA only. It does not import the feature flag module into Standard User runtime, render Identity Center UI, verify identity, collect identity documents, share identity documents, mutate profiles, create accounts, log users in, reset passwords, elevate roles, authorize providers, authorize payments, share emergency contacts, request permissions, write audit events, contact providers, navigate externally, or execute actions.

## Purpose

Prove that the default-off Identity Foundation feature flag contract behaves predictably for:

- default-off input;
- flag-on review-only input;
- unsafe authority attempts;
- flag-on input without explicit visible UI permission.

## Artifacts

- Fixture file: `fixtures/nexus/identity-foundation-feature-flags.json`
- Harness: `scripts/nexus-sprint-i3-identity-foundation-flag-contract-harness.js`
- QA: `scripts/nexus-sprint-i3-identity-foundation-flag-contract-harness-qa.js`

## Fixture Expectations

Every fixture must preserve:

- `identityContextAllowed: false`;
- `accountContextAllowed: false`;
- `roleContextAllowed: false`;
- `identityVerificationAllowed: false`;
- `identityDocumentCollectionAllowed: false`;
- `identityDocumentSharingAllowed: false`;
- `profileMutationAllowed: false`;
- `accountMutationAllowed: false`;
- `accountLoginAllowed: false`;
- `passwordResetAllowed: false`;
- `roleElevationAllowed: false`;
- `credentialUseAllowed: false`;
- `providerAuthorizationAllowed: false`;
- `patientAuthorizationAllowed: false`;
- `paymentAuthorizationAllowed: false`;
- `emergencyContactSharingAllowed: false`;
- `permissionPromptAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

The only field allowed to become true in a local/test-safe fixture is `visibleUiAllowed`, and only when both:

- `enabled: true`;
- `visibleUiAllowed: true`.

That visibility state is still not runtime activation in Sprint I3.

## Harness Boundary

The harness may:

- read local fixture JSON;
- call the Sprint I2 normalization helper;
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
- verify identity;
- collect identity documents;
- share identity documents;
- mutate profiles or accounts;
- log users in;
- reset passwords;
- elevate roles;
- authorize providers or payments;
- request permissions;
- create pending real-world actions;
- execute any action.

## Standard User Runtime Boundary

Sprint I3 does not load:

- `public/nexus-identity-foundation-feature-flag.js`;
- `scripts/nexus-sprint-i3-identity-foundation-flag-contract-harness.js`;
- `fixtures/nexus/identity-foundation-feature-flags.json`.

The Standard User build remains unchanged.

## QA Expectations

Sprint I3 QA must verify:

- doc, fixture, harness, and QA files exist;
- fixture set includes exactly four expected cases;
- unsafe attempted authority fields normalize back to no-execution values;
- harness output is deterministic;
- harness avoids runtime, storage, network, DOM, provider, permission, identity, account, role, and execution APIs;
- runtime files do not load the Sprint I2/I3 artifacts;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint I4 - Identity Foundation Runtime Absence Regression Guard`

Sprint I4 should add a static guard proving the Identity Foundation flag contract and harness remain absent from Standard User runtime until a separately approved visible-runtime lane exists.
