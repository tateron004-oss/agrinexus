# Nexus Sprint H2 - Consent Center Feature Flag Contract

Current base: `379a16ee33976aaf3e380e44e35eb68e44fa1f05`

Sprint H2 defines a default-off Consent Center feature flag contract. This phase adds a standalone inert contract module and deterministic QA only. It does not import the module into Standard User runtime, render Consent Center UI, persist consent state, revoke consent, write audit events, contact providers, call, message, pay, navigate externally, request permissions, or execute actions.

## Purpose

Sprint H2 turns the Sprint H1 readiness gate into a concrete default-off flag vocabulary for future work.

The flag exists so a later approved sprint can reason about a visible Consent Center surface without confusing:

- feature flag readiness;
- visible UI permission;
- consent persistence;
- consent revocation;
- audit writing;
- provider handoff;
- permission prompting;
- execution authority.

## Feature Flag Name

`NEXUS_CONSENT_CENTER_VISIBLE_ENABLED`

## Default State

The default state must be:

- `enabled: false`;
- `visibleUiAllowed: false`;
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

## Contract Module

The inert contract module is:

`public/nexus-consent-center-feature-flag.js`

It may be loaded by deterministic QA, but it must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## Important Boundary

An enabled feature flag is not enough to activate consent authority.

Even if a future local/test-safe caller passes `enabled: true`, the contract keeps:

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

This means flag-on visibility can only ever mean review-only UI readiness until a separate approved sprint changes the persistence, audit, revocation, permission, and execution boundaries.

## Prohibited Behavior

Sprint H2 must not add:

- runtime imports;
- script tags;
- event handlers;
- Consent Center buttons;
- consent persistence;
- consent revocation execution;
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
- account or identity mutation;
- external navigation;
- execution authority.

## Relationship To Sprint H1

Sprint H1 remains the activation gate. Sprint H2 only defines the default-off flag contract. Future visible Consent Center work still requires every Sprint H1 precondition:

- product owner approval;
- privacy and compliance review;
- purpose-specific consent language;
- supported-language review;
- user-visible purpose and scope display;
- explicit user approval path;
- cancellation path;
- revocation path;
- retention policy;
- redaction policy;
- consent store design;
- consent store security review;
- audit persistence design;
- role and identity policy;
- provider policy review;
- high-risk domain restrictions;
- browser validation plan;
- rollback plan;
- deterministic QA coverage.

## QA Expectations

Sprint H2 QA must verify:

- the flag contract doc exists;
- the feature flag module exists;
- the flag defaults off;
- flag-on test input cannot grant consent persistence, consent revocation, audit write, provider handoff, permission prompt, backend write, storage write, network, or execution authority;
- runtime files do not load the module;
- no unsafe API or execution hook is introduced;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint H3 - Consent Center Flag Contract Harness`

Sprint H3 should add deterministic fixtures for flag-off, flag-on-review-only, and unsafe attempted authority states. It should remain local-safe and non-runtime.
