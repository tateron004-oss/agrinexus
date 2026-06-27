# Nexus Sprint O4 - Tool Provider Selection Runtime Absence Regression Guard

Current base: `8b1047f41c36cb8ea786be6bdee7196e943d8f4c`

Sprint O4 adds a deterministic regression guard proving the Tool Provider Selection readiness artifacts remain absent from Standard User runtime. This phase is documentation and QA only. It does not add runtime imports, script tags, UI, provider selection engine activation, connector picker UI, provider path preview UI, raw adapter calls, provider calls from raw intent, silent provider handoff, automatic connector execution, provider credential use, selectedToolId route mutation, selectedToolId risk mutation, selectedToolId provider handoff, network calls, storage writes, backend writes, permission prompts, audit writes, provider execution, or execution behavior.

## Purpose

Prevent accidental drift where Tool Provider Selection readiness artifacts become runtime activation.

Sprint O4 protects:

- O1 Tool Provider Selection runtime activation readiness gate;
- O2 Tool Provider Selection feature flag contract;
- O3 Tool Provider Selection flag contract harness;
- Phase 67 Tool Provider Selection readiness contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-tool-provider-selection-readiness-contract.js`;
- `public/nexus-tool-provider-selection-feature-flag.js`;
- `scripts/nexus-sprint-o3-tool-provider-selection-flag-contract-harness.js`;
- `fixtures/nexus/tool-provider-selection-feature-flags.json`;
- Sprint O QA scripts.

The guard checks exact Tool Provider Selection artifact names and helpers. It intentionally does not ban generic words such as `tool`, `provider`, `selection`, `route`, `review`, `language`, or `settings`, because existing assistant, provider-readiness metadata, language, and route behavior has separate runtime boundaries that must remain supported.

## Blocked Runtime Behavior

Sprint O artifacts must not introduce:

- live selection engine;
- active provider selection adapter;
- connector picker runtime UI;
- provider path preview UI;
- provider review buttons;
- event handlers;
- typed route mutation;
- voice route mutation;
- automatic route changes from selectedToolId metadata;
- selectedToolId route mutation;
- selectedToolId risk mutation;
- selectedToolId provider handoff;
- raw adapter calls;
- provider calls from raw intent;
- silent provider handoff;
- automatic connector execution;
- provider credential use;
- payment provider selection;
- regulated provider execution;
- emergency provider dispatch;
- transportation dispatch provider execution;
- communication provider execution;
- location or camera provider activation;
- ambiguous prompt execution;
- policy bypass from provider selection;
- confirmation bypass from provider selection;
- permission bypass from provider selection;
- source-backed answer claims without sources;
- medical diagnosis from provider selection;
- pharmacy or prescription execution from provider selection;
- payment or marketplace transaction execution from provider selection;
- emergency dispatch from provider selection;
- contact or message execution from provider selection;
- location or camera activation from provider selection;
- identity verification from provider selection;
- role or permission elevation from provider selection;
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

The guard confirms the O2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
- `selectionReviewAllowed: false`;
- `providerPathPreviewAllowed: false`;
- `selectionRuntimeAllowed: false`;
- `liveSelectionEngineAllowed: false`;
- `rawAdapterCallsAllowed: false`;
- `providerCallsFromRawIntentAllowed: false`;
- `silentProviderHandoffAllowed: false`;
- `automaticConnectorExecutionAllowed: false`;
- `providerCredentialUseAllowed: false`;
- `paymentProviderSelectionAllowed: false`;
- `regulatedProviderExecutionAllowed: false`;
- `emergencyProviderDispatchAllowed: false`;
- `transportationDispatchProviderExecutionAllowed: false`;
- `communicationProviderExecutionAllowed: false`;
- `locationCameraProviderActivationAllowed: false`;
- `selectedToolIdRouteMutationAllowed: false`;
- `selectedToolIdRiskMutationAllowed: false`;
- `selectedToolIdProviderHandoffAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserSelectionMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

The guard confirms the O3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no Tool Provider Selection runtime is active;
- no connector picker surface appears from Sprint O artifacts;
- no provider path preview surface appears from Sprint O artifacts;
- no provider selection adapter is loaded by Sprint O artifacts;
- no typed or voice route is changed by Sprint O artifacts;
- no provider call from raw intent is performed by Sprint O artifacts;
- no silent provider handoff is performed by Sprint O artifacts;
- no automatic connector execution is performed by Sprint O artifacts;
- no provider credentials are used by Sprint O artifacts;
- no selectedToolId route, risk, or handoff mutation is performed by Sprint O artifacts;
- no payment, regulated, emergency, transportation, communication, location, or camera provider execution is performed by Sprint O artifacts;
- no policy, confirmation, or permission bypass is possible from Sprint O artifacts;
- no audit event is written by Sprint O artifacts;
- existing language, accessibility, login, confirmation, session memory, route, and permission behavior remains separate from Tool Provider Selection runtime authority.

## Browser Validation Implication

Sprint O4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Tool Provider Selection artifacts, renders connector picker UI, activates a provider selection engine, calls provider adapters, changes typed routing, changes voice routing, changes selectedToolId route/risk/handoff behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk prompt checks;
- ambiguous prompt checks;
- high-risk prompt checks;
- provider-selection review/cancel checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint O4 QA must verify:

- this regression guard exists;
- O1, O2, O3, and Phase 67 artifacts exist;
- runtime files do not load Tool Provider Selection contracts, feature flags, fixtures, or harnesses;
- O2 default and unsafe-attempt behavior remains no-execution;
- O3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint O5 - Tool Provider Selection Lane Closeout`

Sprint O5 should close the Tool Provider Selection readiness lane, summarize O1-O4, and recommend the next safe inert lane without activating runtime behavior.
