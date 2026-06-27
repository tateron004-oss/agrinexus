# Nexus Sprint X4 - Farmer Mode Runtime Absence Regression Guard

Current base: `9fb8ecf670f689ce5f9331d4ba365451a4a15286`

Sprint X4 adds a deterministic regression guard proving the Farmer Mode readiness artifacts remain absent from Standard User runtime. This phase is documentation and QA only. It does not add runtime imports, script tags, UI, Farmer Mode review surfaces, source-backed farmer guidance previews, farmer profile summaries, crop field support previews, AgriTrade review previews, extension escalation previews, live Farmer Mode runtime, agriculture connector runtime, market source retrieval, unsourced agronomic advice, diagnosis claims, chemical application instructions, marketplace transactions, payment execution, buyer or seller contact, provider or extension contact, transportation dispatch, emergency dispatch, location sharing, camera activation, microphone activation, medical or pharmacy execution, identity/account/profile actions, storage writes, backend writes, provider execution, or action authority.

## Purpose

Prevent accidental drift where Farmer Mode readiness artifacts become runtime activation.

Sprint X4 protects:

- X1 Farmer Mode runtime activation readiness gate;
- X2 Farmer Mode feature flag contract;
- X3 Farmer Mode flag contract harness;
- Phase 76 Farmer Mode readiness contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-farmer-mode-readiness-contract.js`;
- `public/nexus-farmer-mode-feature-flag.js`;
- `scripts/nexus-sprint-x3-farmer-mode-flag-contract-harness.js`;
- `fixtures/nexus/farmer-mode-feature-flags.json`;
- Sprint X QA scripts.

The guard checks exact Farmer Mode artifact names and helpers. It intentionally does not ban generic farmer, agriculture, field, crop, AgriTrade, marketplace, learning, health, support, map, or workforce words, because existing Standard User behavior has separate runtime boundaries that must remain supported.

## Blocked Runtime Behavior

Sprint X artifacts must not introduce:

- active Farmer Mode runtime;
- live Farmer Mode runtime;
- agriculture connector runtime;
- market source retrieval runtime;
- source-backed farmer guidance preview runtime;
- farmer profile summary runtime;
- crop field support runtime;
- AgriTrade review runtime;
- extension escalation runtime;
- unsourced agronomic advice;
- diagnosis claims;
- chemical application instructions;
- marketplace transaction execution;
- payment execution;
- buyer contact;
- seller contact;
- provider or extension contact;
- transportation dispatch;
- emergency dispatch;
- location sharing;
- camera activation;
- microphone activation;
- medical or pharmacy execution;
- identity, account, or profile mutation;
- source-backed claims without sources;
- stale data claims without freshness labels;
- confidence-free source-backed claims;
- unsupported live data claims;
- provider connection claims;
- completed action claims;
- event handlers;
- typed route mutation;
- voice route mutation;
- policy bypass;
- confirmation bypass;
- permission bypass;
- ambiguous prompt execution;
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
- marketplace transaction execution;
- account or profile mutation;
- external navigation;
- real pending action creation;
- execution authority.

## Required Contract Invariants

The guard confirms the X2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
- `farmerModeReviewAllowed: false`;
- `sourceBackedFarmerGuidancePreviewAllowed: false`;
- `farmerProfileSummaryPreviewAllowed: false`;
- `cropFieldSupportPreviewAllowed: false`;
- `agritradeReviewPreviewAllowed: false`;
- `extensionEscalationPreviewAllowed: false`;
- `farmerModeRuntimeAllowed: false`;
- `liveFarmerModeRuntimeAllowed: false`;
- `agricultureConnectorRuntimeAllowed: false`;
- `marketSourceRetrievalRuntimeAllowed: false`;
- `unsourcedAgronomicAdviceAllowed: false`;
- `diagnosisClaimAllowed: false`;
- `chemicalApplicationInstructionAllowed: false`;
- `marketplaceTransactionAllowed: false`;
- `paymentExecutionAllowed: false`;
- `buyerSellerContactAllowed: false`;
- `providerOrExtensionContactAllowed: false`;
- `transportationDispatchAllowed: false`;
- `emergencyDispatchAllowed: false`;
- `locationSharingAllowed: false`;
- `cameraActivationAllowed: false`;
- `microphoneActivationAllowed: false`;
- `medicalPharmacyExecutionAllowed: false`;
- `identityAccountProfileActionAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserFarmerModeMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

The guard confirms the X3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no Farmer Mode runtime is active;
- no Farmer Mode review surface appears from Sprint X artifacts;
- no live agriculture connector runtime is loaded by Sprint X artifacts;
- no market source retrieval runtime is performed by Sprint X artifacts;
- no typed or voice route is changed by Sprint X artifacts;
- no unsourced agronomic advice, diagnosis claim, chemical application instruction, marketplace transaction, payment execution, buyer/seller contact, provider/extension contact, transportation dispatch, emergency dispatch, location sharing, camera activation, microphone activation, medical/pharmacy execution, or account/profile mutation is possible from Sprint X artifacts;
- no policy, confirmation, or permission bypass is possible from Sprint X artifacts;
- no audit event is written by Sprint X artifacts;
- existing agriculture support, AgriTrade browsing, workforce, health access, telehealth camera handoff, call confirmation, map permission, learning, and Standard User behavior remains separate from Farmer Mode runtime authority.

## Browser Validation Implication

Sprint X4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Farmer Mode artifacts, renders Farmer Mode UI, activates a live agriculture connector, changes typed routing, changes voice routing, changes marketplace/payment/contact/location/camera behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk Standard User prompt checks;
- Farmer Mode boundary checks;
- crop/advisory/AgriTrade prompt boundary checks;
- marketplace/payment/contact/location/camera boundary checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint X4 QA must verify:

- this regression guard exists;
- X1, X2, X3, and Phase 76 artifacts exist;
- runtime files do not load Farmer Mode contracts, feature flags, fixtures, or harnesses;
- X2 default and unsafe-attempt behavior remains no-execution;
- X3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint X5 - Farmer Mode Lane Closeout`

Sprint X5 should close the Farmer Mode readiness lane, summarize X1-X4, and recommend the next safe inert lane without activating runtime behavior.
