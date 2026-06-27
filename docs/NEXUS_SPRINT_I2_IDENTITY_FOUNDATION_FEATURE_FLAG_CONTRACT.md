# Nexus Sprint I2 - Identity Foundation Feature Flag Contract

Current base: `d8b27643fec16870c0b7b4dc8862dfe636970f57`

Sprint I2 defines a default-off Identity Foundation feature flag contract. This phase adds a standalone inert contract module and deterministic QA only. It does not import the module into Standard User runtime, render Identity Center UI, verify identity, collect identity documents, share identity documents, mutate profiles, create accounts, delete accounts, log users in, reset passwords, elevate roles, authorize providers, authorize payments, share emergency contacts, request permissions, write audit events, or execute actions.

## Purpose

Sprint I2 turns the Sprint I1 readiness gate into a concrete default-off flag vocabulary for future work.

The flag exists so a later approved sprint can reason about a visible identity/profile readiness surface without confusing:

- feature flag readiness;
- visible UI permission;
- identity context;
- identity verification;
- identity document collection;
- profile mutation;
- account mutation;
- role authorization;
- credential use;
- provider authorization;
- payment authorization;
- emergency contact sharing;
- permission prompting;
- execution authority.

## Feature Flag Name

`NEXUS_IDENTITY_FOUNDATION_VISIBLE_ENABLED`

## Default State

The default state must be:

- `enabled: false`;
- `visibleUiAllowed: false`;
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

## Contract Module

The inert contract module is:

`public/nexus-identity-foundation-feature-flag.js`

It may be loaded by deterministic QA, but it must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## Important Boundary

An enabled feature flag is not enough to activate identity authority.

Even if a future local/test-safe caller passes `enabled: true`, the contract keeps:

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

This means flag-on visibility can only ever mean review-only UI readiness until a separate approved sprint changes the identity, account, role, provider, permission, audit, storage, and execution boundaries.

## Prohibited Behavior

Sprint I2 must not add:

- runtime imports;
- script tags;
- event handlers;
- Identity Center buttons;
- identity forms;
- identity verification;
- identity document collection;
- identity document sharing;
- profile mutation;
- account creation;
- account deletion;
- account login;
- password reset;
- role elevation;
- provider authorization;
- patient authorization;
- payment authorization;
- emergency contact sharing;
- credential use;
- audit writes;
- backend writes;
- localStorage or sessionStorage writes;
- IndexedDB writes;
- fetch or network calls;
- provider handoff;
- native bridge calls;
- permission prompts;
- calls;
- messages;
- WhatsApp, Telegram, SMS, or email sending;
- payments;
- marketplace transactions;
- location sharing;
- camera or microphone activation;
- health, medical, pharmacy, prescription, or FHIR execution;
- appointment scheduling;
- transportation dispatch;
- emergency dispatch;
- external navigation;
- execution authority.

## Relationship To Sprint I1

Sprint I1 remains the activation gate. Sprint I2 only defines the default-off flag contract. Future visible Identity Foundation work still requires every Sprint I1 precondition, including privacy/compliance review, identity provider policy, credential handling review, identity document handling review, consent policy, audit persistence approval, role authorization policy, browser validation plan, rollback plan, and deterministic QA coverage.

## QA Expectations

Sprint I2 QA must verify:

- the flag contract doc exists;
- the feature flag module exists;
- the flag defaults off;
- flag-on test input cannot grant identity context, identity verification, document sharing, profile mutation, account mutation, role elevation, credential use, provider authorization, payment authorization, emergency contact sharing, permission prompt, backend write, storage write, network, or execution authority;
- runtime files do not load the module;
- no unsafe API or execution hook is introduced;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint I3 - Identity Foundation Flag Contract Harness`

Sprint I3 should add deterministic fixtures for flag-off, flag-on-review-only, and unsafe attempted authority states. It should remain local-safe and non-runtime.
