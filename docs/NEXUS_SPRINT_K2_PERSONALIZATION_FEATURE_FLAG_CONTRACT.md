# Nexus Sprint K2 - Personalization Feature Flag Contract

Current base: `5060ff6f2d3b358e46b3346fd7e8c39ec5969fab`

Sprint K2 defines a default-off Personalization feature flag contract. This phase adds a standalone inert contract module and deterministic QA only. It does not import the module into Standard User runtime, render personalization UI, save preferences, load preferences, sync preferences, infer hidden preferences, personalize automatically, mutate risk tiers, write storage, write audit events, contact providers, request permissions, or execute actions.

## Purpose

Sprint K2 turns the Sprint K1 runtime activation gate into a concrete default-off flag vocabulary for future work.

The flag exists so a later approved sprint can reason about a visible Personalization readiness surface without confusing:

- feature flag readiness;
- visible UI permission;
- preference context;
- preference persistence;
- preference sync;
- automatic personalization;
- hidden personalization;
- profile-derived execution;
- provider handoff;
- risk tier mutation;
- permission prompting;
- storage writes;
- network calls;
- audit writes;
- execution authority.

## Feature Flag Name

`NEXUS_PERSONALIZATION_VISIBLE_ENABLED`

## Default State

The default state must be:

- `enabled: false`;
- `visibleUiAllowed: false`;
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

## Contract Module

The inert contract module is:

`public/nexus-personalization-feature-flag.js`

It may be loaded by deterministic QA, but it must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## Important Boundary

An enabled feature flag is not enough to activate Personalization authority.

Even if a future local/test-safe caller passes `enabled: true`, the contract keeps:

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

This means flag-on visibility can only ever mean review-only UI readiness until a separate approved sprint changes the consent, preference source, edit/delete/reset, retention, redaction, audit, storage, and execution boundaries.

## Prohibited Behavior

Sprint K2 must not add:

- runtime imports;
- script tags;
- event handlers;
- personalization center buttons;
- preference forms;
- preference loading;
- preference saving;
- preference mutation;
- preference sync;
- preference sharing;
- hidden personalization;
- automatic personalization;
- profile-derived execution;
- provider handoff;
- risk tier mutation;
- role elevation;
- permission prompts;
- audit writes;
- backend writes;
- localStorage or sessionStorage writes;
- IndexedDB writes;
- fetch or network calls;
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

## Relationship To Sprint K1

Sprint K1 remains the activation gate. Sprint K2 only defines the default-off flag contract. Future visible Personalization work still requires every Sprint K1 precondition, including product owner approval, privacy and compliance review, explicit personalization consent, visible personalization purpose and fields, preference source ownership, preference scope, user override, edit/delete/reset controls, retention, redaction, audit event contract, browser validation, rollback planning, and deterministic QA coverage.

## QA Expectations

Sprint K2 QA must verify:

- the flag contract doc exists;
- the feature flag module exists;
- the flag defaults off;
- flag-on test input cannot grant preference context, preference engine authority, automatic personalization, hidden personalization, persistence, sync, mutation, profile-derived execution, provider handoff, risk tier mutation, Standard User preference mutation, permission prompt, backend write, storage write, network, audit write, or execution authority;
- runtime files do not load the module;
- no unsafe API or execution hook is introduced;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint K3 - Personalization Flag Contract Harness`

Sprint K3 should add deterministic fixtures for flag-off, flag-on-review-only, and unsafe attempted authority states. It should remain local-safe and non-runtime.
