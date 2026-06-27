# Nexus Sprint L4 - Advanced Intent Understanding Runtime Absence Regression Guard

Current base: `a50d067bd9adbfaaed85cc757fc247f999cd3654`

Sprint L4 adds a deterministic regression guard proving the Advanced Intent Understanding readiness artifacts remain absent from Standard User runtime. This phase is documentation and QA only. It does not add runtime imports, script tags, UI, classifier replacement, classifier adapters, typed route mutation, voice route mutation, automatic routing, hidden risk downgrades, network calls, storage writes, backend writes, permission prompts, audit writes, provider selection, tool selection, planner action creation, or execution behavior.

## Purpose

Prevent accidental drift where Advanced Intent Understanding readiness artifacts become runtime activation.

Sprint L4 protects:

- L1 Advanced Intent Understanding runtime activation readiness gate;
- L2 Advanced Intent Understanding feature flag contract;
- L3 Advanced Intent Understanding flag contract harness;
- Phase 64 Advanced Intent Understanding readiness contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-advanced-intent-understanding-readiness-contract.js`;
- `public/nexus-advanced-intent-understanding-feature-flag.js`;
- `scripts/nexus-sprint-l3-advanced-intent-understanding-flag-contract-harness.js`;
- `fixtures/nexus/advanced-intent-understanding-feature-flags.json`;
- Sprint L QA scripts.

The guard checks exact Advanced Intent Understanding artifact names and helpers. It intentionally does not ban generic words such as `intent`, `route`, `classification`, `language`, or `settings`, because existing assistant, voice, language, and route behavior has separate runtime boundaries that must remain supported.

## Blocked Runtime Behavior

Sprint L artifacts must not introduce:

- live classifier replacement;
- active classifier adapters;
- classifier review buttons;
- event handlers;
- typed route mutation;
- voice route mutation;
- automatic route changes;
- hidden risk downgrades;
- confidence-only risk downgrades;
- ambiguous prompt execution;
- provider selection from raw intent;
- tool selection from raw intent;
- planner action creation from raw intent;
- policy bypass from classifier confidence;
- confirmation bypass from classifier confidence;
- permission bypass from classifier confidence;
- source-backed answer claims without sources;
- medical diagnosis inference;
- pharmacy or prescription inference;
- payment intent execution;
- marketplace transaction inference;
- emergency dispatch inference;
- contact or message execution inference;
- location or camera permission inference;
- identity verification inference;
- role or permission elevation;
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

The guard confirms the L2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
- `classifierContextAllowed: false`;
- `classifierRuntimeAllowed: false`;
- `liveClassifierReplacementAllowed: false`;
- `automaticRouteChangesAllowed: false`;
- `hiddenRiskDowngradeAllowed: false`;
- `confidenceRiskDowngradeAllowed: false`;
- `providerSelectionAllowed: false`;
- `toolSelectionAllowed: false`;
- `plannerActionCreationAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `rawAdapterCallsAllowed: false`;
- `implicitPermissionAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `standardUserClassifierMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

The guard confirms the L3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no Advanced Intent Understanding runtime is active;
- no classifier replacement surface appears from Sprint L artifacts;
- no classifier context is stored by Sprint L artifacts;
- no classifier adapter is loaded by Sprint L artifacts;
- no typed or voice route is changed by Sprint L artifacts;
- no hidden risk downgrade is performed by Sprint L artifacts;
- no provider selection is performed by Sprint L artifacts;
- no policy, confirmation, or permission bypass is possible from Sprint L artifacts;
- no audit event is written by Sprint L artifacts;
- no provider, payment, regulated, marketplace, location, communication, or account action can be executed by Sprint L artifacts;
- existing language, accessibility, login, confirmation, and permission behavior remains separate from Advanced Intent Understanding runtime authority.

## Browser Validation Implication

Sprint L4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Advanced Intent Understanding artifacts, renders classifier review UI, replaces a classifier, changes typed routing, changes voice routing, changes risk tier behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk prompt checks;
- ambiguous prompt checks;
- high-risk prompt checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint L4 QA must verify:

- this regression guard exists;
- L1, L2, L3, and Phase 64 artifacts exist;
- runtime files do not load Advanced Intent Understanding contracts, feature flags, fixtures, or harnesses;
- L2 default and unsafe-attempt behavior remains no-execution;
- L3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint L5 - Advanced Intent Understanding Lane Closeout`

Sprint L5 should close the Advanced Intent Understanding readiness lane, summarize L1-L4, and recommend the next safe inert lane without activating runtime behavior.
