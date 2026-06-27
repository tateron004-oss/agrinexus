# Nexus Sprint H4 - Consent Center Runtime Absence Regression Guard

Current base: `eb6bdf12f2f674de8a30a16557a7f81049502541`

Sprint H4 adds a deterministic regression guard proving the Consent Center readiness artifacts remain absent from Standard User runtime. This phase is documentation and QA only. It does not add runtime imports, script tags, UI, consent buttons, persistence, revocation execution, audit writes, provider handoff, network calls, storage writes, backend writes, permission prompts, or execution behavior.

## Purpose

Prevent accidental drift where Consent Center readiness artifacts become runtime activation.

Sprint H4 protects:

- H1 Consent Center runtime activation readiness gate;
- H2 Consent Center feature flag contract;
- H3 Consent Center flag contract harness;
- Phase 47 Consent Center contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-consent-center-contract.js`;
- `public/nexus-consent-center-feature-flag.js`;
- `scripts/nexus-sprint-h3-consent-center-flag-contract-harness.js`;
- `fixtures/nexus/consent-center-feature-flags.json`;
- Sprint H QA scripts.

The guard checks exact Consent Center artifact names and helpers. It intentionally does not ban the generic word `consent`, because existing Health workflows have separate user-facing consent behavior that must remain supported.

## Blocked Runtime Behavior

Sprint H artifacts must not introduce:

- visible Consent Center UI;
- Consent Center buttons;
- consent forms;
- event handlers;
- confirmation bypasses;
- consent persistence;
- consent revocation execution;
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
- account or identity mutation;
- external navigation;
- fetch or network calls;
- localStorage or sessionStorage writes;
- backend writes;
- real pending action creation;
- execution authority.

## Required Contract Invariants

The guard confirms the H2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
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

The guard confirms the H3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no Consent Center runtime is active;
- no Consent Center visible surface appears;
- no consent state is persisted by Consent Center artifacts;
- no consent revocation is executed by Consent Center artifacts;
- no audit event is written by Consent Center artifacts;
- no provider or regulated action can be executed by Consent Center artifacts;
- existing Health consent workflows remain separate from Consent Center runtime authority;
- existing confirmation and permission gates remain untouched.

## Browser Validation Implication

Sprint H4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Consent Center artifacts, renders Consent Center UI, persists consent, revokes consent, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk prompt checks;
- high-risk prompt checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint H4 QA must verify:

- this regression guard exists;
- H1, H2, H3, and Phase 47 artifacts exist;
- runtime files do not load Consent Center contracts, feature flags, fixtures, or harnesses;
- H2 default and unsafe-attempt behavior remains no-execution;
- H3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint H5 - Consent Center Lane Closeout`

Sprint H5 should close the Consent Center readiness lane, summarize H1-H4, and recommend the next safe inert lane without activating runtime behavior.
