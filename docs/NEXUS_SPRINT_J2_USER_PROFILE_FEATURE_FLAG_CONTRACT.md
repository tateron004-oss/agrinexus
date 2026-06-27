# Nexus Sprint J2 - User Profile Feature Flag Contract

Current base: `ac39793f45b4401c8d293ad8ee432573ae4b0d32`

Sprint J2 defines a default-off User Profile feature flag contract. This phase adds a standalone inert contract module and deterministic QA only. It does not import the module into Standard User runtime, render profile UI, create profiles, edit profiles, share profiles, sync profiles, store sensitive profile data, personalize automatically, elevate roles, authorize providers, authorize payments, request permissions, write storage, write audit events, or execute actions.

## Purpose

Sprint J2 turns the Sprint J1 runtime activation gate into a concrete default-off flag vocabulary for future work.

The flag exists so a later approved sprint can reason about a visible User Profile readiness surface without confusing:

- feature flag readiness;
- visible UI permission;
- profile context;
- account creation;
- profile mutation;
- profile sharing;
- profile sync;
- identity proofing;
- role elevation;
- provider profile handoff;
- sensitive profile storage;
- automatic personalization;
- permission prompting;
- execution authority.

## Feature Flag Name

`NEXUS_USER_PROFILE_VISIBLE_ENABLED`

## Default State

The default state must be:

- `enabled: false`;
- `visibleUiAllowed: false`;
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

## Contract Module

The inert contract module is:

`public/nexus-user-profile-feature-flag.js`

It may be loaded by deterministic QA, but it must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## Important Boundary

An enabled feature flag is not enough to activate User Profile authority.

Even if a future local/test-safe caller passes `enabled: true`, the contract keeps:

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

This means flag-on visibility can only ever mean review-only UI readiness until a separate approved sprint changes the consent, profile source, edit/delete/export, retention, redaction, audit, storage, personalization, and execution boundaries.

## Prohibited Behavior

Sprint J2 must not add:

- runtime imports;
- script tags;
- event handlers;
- profile center buttons;
- profile forms;
- profile creation;
- profile editing;
- profile mutation;
- profile sharing;
- profile sync;
- sensitive profile storage;
- automatic personalization;
- account creation;
- account deletion;
- account login;
- password reset;
- role elevation;
- identity proofing;
- identity document collection;
- provider profile handoff;
- patient authorization;
- payment authorization;
- permission prompts;
- audit writes;
- backend writes;
- localStorage or sessionStorage writes;
- IndexedDB writes;
- fetch or network calls;
- provider handoff;
- native bridge calls;
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

## Relationship To Sprint J1

Sprint J1 remains the activation gate. Sprint J2 only defines the default-off flag contract. Future visible User Profile work still requires every Sprint J1 precondition, including product owner approval, privacy and compliance review, explicit profile consent, visible profile purpose and fields, sensitive field exclusions, source ownership, access scope, role authorization, permission state display, consent revocation, edit/delete/export controls, retention, redaction, audit event contract, browser validation, rollback planning, and deterministic QA coverage.

## QA Expectations

Sprint J2 QA must verify:

- the flag contract doc exists;
- the feature flag module exists;
- the flag defaults off;
- flag-on test input cannot grant profile context, profile backend, account creation, profile mutation, profile sharing, profile sync, identity proofing, role elevation, provider profile handoff, sensitive profile storage, automatic personalization, Standard User profile mutation, permission prompt, backend write, storage write, network, audit write, or execution authority;
- runtime files do not load the module;
- no unsafe API or execution hook is introduced;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint J3 - User Profile Flag Contract Harness`

Sprint J3 should add deterministic fixtures for flag-off, flag-on-review-only, and unsafe attempted authority states. It should remain local-safe and non-runtime.
