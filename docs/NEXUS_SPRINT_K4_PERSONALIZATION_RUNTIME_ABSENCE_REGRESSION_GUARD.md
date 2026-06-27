# Nexus Sprint K4 - Personalization Runtime Absence Regression Guard

Current base: `90eb06b8389fc7be831c99789ff1b46439e4f1d5`

Sprint K4 adds a deterministic regression guard proving the Personalization readiness artifacts remain absent from Standard User runtime. This phase is documentation and QA only. It does not add runtime imports, script tags, UI, personalization buttons, preference forms, preference loading, preference saving, preference mutation, preference sync, hidden personalization, automatic personalization, risk tier mutation, network calls, storage writes, backend writes, permission prompts, audit writes, or execution behavior.

## Purpose

Prevent accidental drift where Personalization readiness artifacts become runtime activation.

Sprint K4 protects:

- K1 Personalization runtime activation readiness gate;
- K2 Personalization feature flag contract;
- K3 Personalization flag contract harness;
- Phase 63 Personalization readiness contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-personalization-readiness-contract.js`;
- `public/nexus-personalization-feature-flag.js`;
- `scripts/nexus-sprint-k3-personalization-flag-contract-harness.js`;
- `fixtures/nexus/personalization-feature-flags.json`;
- Sprint K QA scripts.

The guard checks exact Personalization artifact names and helpers. It intentionally does not ban generic words such as `personal`, `language`, `preference`, or `settings`, because existing assistant and language behavior has separate runtime boundaries that must remain supported.

## Blocked Runtime Behavior

Sprint K artifacts must not introduce:

- visible personalization center UI;
- personalization center buttons;
- preference forms;
- event handlers;
- confirmation bypasses;
- preference loading;
- preference saving;
- preference editing;
- preference mutation;
- preference sharing;
- preference sync;
- hidden personalization;
- automatic personalization;
- profile-derived execution;
- provider handoff from preferences;
- risk tier mutation;
- permission prompts;
- audit writes;
- backend writes;
- localStorage or sessionStorage writes;
- IndexedDB writes;
- fetch or network calls;
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
- real pending action creation;
- execution authority.

## Required Contract Invariants

The guard confirms the K2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
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

The guard confirms the K3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no Personalization runtime is active;
- no personalization center visible surface appears from Sprint K artifacts;
- no preference state is persisted by Personalization artifacts;
- no preference data is loaded, saved, edited, shared, synced, or stored by Personalization artifacts;
- no hidden or automatic personalization is executed by Personalization artifacts;
- no risk tier is mutated by Personalization artifacts;
- no audit event is written by Personalization artifacts;
- no provider, payment, regulated, marketplace, location, communication, or account action can be executed by Personalization artifacts;
- existing language, accessibility, login, confirmation, and permission behavior remains separate from Personalization runtime authority.

## Browser Validation Implication

Sprint K4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Personalization artifacts, renders personalization center UI, loads or saves preferences, shares or syncs preference data, personalizes from preference context, writes audit events, changes permission prompts, changes risk tier behavior, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk prompt checks;
- high-risk prompt checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint K4 QA must verify:

- this regression guard exists;
- K1, K2, K3, and Phase 63 artifacts exist;
- runtime files do not load Personalization contracts, feature flags, fixtures, or harnesses;
- K2 default and unsafe-attempt behavior remains no-execution;
- K3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint K5 - Personalization Lane Closeout`

Sprint K5 should close the Personalization readiness lane, summarize K1-K4, and recommend the next safe inert lane without activating runtime behavior.
