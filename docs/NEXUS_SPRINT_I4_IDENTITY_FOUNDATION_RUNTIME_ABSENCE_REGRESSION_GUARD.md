# Nexus Sprint I4 - Identity Foundation Runtime Absence Regression Guard

Current base: `a14019b13f0cea00599ee0adf66573c9e1dd5451`

Sprint I4 adds a deterministic regression guard proving the Identity Foundation readiness artifacts remain absent from Standard User runtime. This phase is documentation and QA only. It does not add runtime imports, script tags, UI, identity buttons, identity forms, identity verification, document collection, document sharing, profile mutation, account mutation, login, password reset, role elevation, credential use, provider authorization, payment authorization, emergency contact sharing, network calls, storage writes, backend writes, permission prompts, or execution behavior.

## Purpose

Prevent accidental drift where Identity Foundation readiness artifacts become runtime activation.

Sprint I4 protects:

- I1 Identity Foundation runtime activation readiness gate;
- I2 Identity Foundation feature flag contract;
- I3 Identity Foundation flag contract harness;
- Phase 46 Identity Foundation contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-identity-foundation-contract.js`;
- `public/nexus-identity-foundation-feature-flag.js`;
- `scripts/nexus-sprint-i3-identity-foundation-flag-contract-harness.js`;
- `fixtures/nexus/identity-foundation-feature-flags.json`;
- Sprint I QA scripts.

The guard checks exact Identity Foundation artifact names and helpers. It intentionally does not ban generic words such as `identity`, `account`, `profile`, or `login`, because existing authentication and profile-facing behavior has separate runtime boundaries that must remain supported.

## Blocked Runtime Behavior

Sprint I artifacts must not introduce:

- visible Identity Center UI;
- Identity Center buttons;
- identity forms;
- event handlers;
- confirmation bypasses;
- identity verification;
- identity document collection;
- identity document sharing;
- profile mutation;
- account creation;
- account deletion;
- account login;
- password reset;
- role elevation;
- credential use;
- provider authorization;
- patient authorization;
- payment authorization;
- emergency contact sharing;
- audit writes;
- provider handoff;
- native bridge dispatch;
- calls;
- messages;
- WhatsApp, Telegram, SMS, or email sending;
- payment execution;
- marketplace transactions;
- location sharing;
- camera or microphone activation;
- health, medical, pharmacy, prescription, or FHIR execution;
- appointment scheduling;
- transportation dispatch;
- emergency dispatch;
- external navigation;
- fetch or network calls;
- localStorage or sessionStorage writes;
- backend writes;
- real pending action creation;
- execution authority.

## Required Contract Invariants

The guard confirms the I2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
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

The guard confirms the I3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no Identity Foundation runtime is active;
- no Identity Center visible surface appears;
- no identity state is persisted by Identity Foundation artifacts;
- no identity verification is executed by Identity Foundation artifacts;
- no profile, account, or role state is mutated by Identity Foundation artifacts;
- no audit event is written by Identity Foundation artifacts;
- no provider, payment, regulated, or account action can be executed by Identity Foundation artifacts;
- existing login/authentication gates remain separate from Identity Foundation runtime authority;
- existing confirmation and permission gates remain untouched.

## Browser Validation Implication

Sprint I4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Identity Foundation artifacts, renders Identity Center UI, verifies identity, collects or shares identity documents, mutates profile/account/role state, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk prompt checks;
- high-risk prompt checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint I4 QA must verify:

- this regression guard exists;
- I1, I2, I3, and Phase 46 artifacts exist;
- runtime files do not load Identity Foundation contracts, feature flags, fixtures, or harnesses;
- I2 default and unsafe-attempt behavior remains no-execution;
- I3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint I5 - Identity Foundation Lane Closeout`

Sprint I5 should close the Identity Foundation readiness lane, summarize I1-I4, and recommend the next safe inert lane without activating runtime behavior.
