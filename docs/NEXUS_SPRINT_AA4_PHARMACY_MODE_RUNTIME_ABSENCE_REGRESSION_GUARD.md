# Nexus Sprint AA4 - Pharmacy Mode Runtime Absence Regression Guard

Current base: `53f3b0120647fa5e92a4b14ff2edc5df6a5f1381`

Sprint AA4 adds a deterministic regression guard proving the Pharmacy Mode readiness artifacts remain absent from Standard User runtime. This phase is documentation and QA only. It does not add runtime imports, script tags, UI, Pharmacy Mode review surfaces, pharmacy support previews, prescription readiness previews, refill readiness previews, pharmacy provider directory previews, medication safety boundary previews, payment or insurance boundary previews, live health connector runtime, clinic connector runtime, telehealth connector runtime, pharmacy connector runtime, pharmacy provider connector runtime, prescription connector runtime, refill connector runtime, medication safety connector runtime, payment or insurance connector runtime, prescription or refill runtime, appointment scheduling, transportation dispatch, emergency dispatch, medical records/FHIR runtime, medical advice, diagnosis claims, prescription instructions, dosage instructions, refill execution, provider contact, pharmacist contact, location sharing, camera activation, microphone activation, payment execution, insurance processing, marketplace transactions, communications execution, storage writes, backend writes, provider execution, or action authority.

## Purpose

Prevent accidental drift where Pharmacy Mode readiness artifacts become runtime activation.

Sprint AA4 protects:

- AA1 Pharmacy Mode runtime activation readiness gate;
- AA2 Pharmacy Mode feature flag contract;
- AA3 Pharmacy Mode flag contract harness;
- Phase 79 Pharmacy Mode readiness contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-pharmacy-mode-readiness-contract.js`;
- `public/nexus-pharmacy-mode-feature-flag.js`;
- `scripts/nexus-sprint-aa3-pharmacy-mode-flag-contract-harness.js`;
- `fixtures/nexus/pharmacy-mode-feature-flags.json`;
- Sprint AA QA scripts.

The guard checks exact Pharmacy Mode artifact names and helpers. It intentionally does not ban generic health, telehealth, pharmacy, clinic, provider, mobile clinic, transportation, map, workforce, learning, support, marketplace, agriculture, or AgriTrade words, because existing Standard User behavior has separate runtime boundaries that must remain supported.

## Blocked Runtime Behavior

Sprint AA artifacts must not introduce:

- active Pharmacy Mode runtime;
- live Pharmacy Mode runtime;
- health connector runtime;
- clinic connector runtime;
- telehealth connector runtime;
- pharmacy connector runtime;
- pharmacy provider connector runtime;
- prescription connector runtime;
- refill connector runtime;
- medication safety connector runtime;
- payment or insurance connector runtime;
- prescription or refill runtime;
- appointment scheduling runtime;
- transportation dispatch;
- emergency dispatch;
- medical records/FHIR runtime;
- medical advice;
- diagnosis claims;
- prescription instructions;
- dosage instructions;
- refill execution;
- provider contact;
- pharmacist contact;
- location sharing;
- camera activation;
- microphone activation;
- payment execution;
- insurance processing;
- marketplace transaction execution;
- communications execution;
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
- external navigation;
- real pending action creation;
- execution authority.

## Required Contract Invariants

The guard confirms the AA2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
- `pharmacyModeReviewAllowed: false`;
- `pharmacySupportPreviewAllowed: false`;
- `prescriptionReadinessPreviewAllowed: false`;
- `refillReadinessPreviewAllowed: false`;
- `pharmacyProviderDirectoryPreviewAllowed: false`;
- `medicationSafetyBoundaryPreviewAllowed: false`;
- `paymentInsuranceBoundaryPreviewAllowed: false`;
- `pharmacyModeRuntimeAllowed: false`;
- `livePharmacyModeRuntimeAllowed: false`;
- `healthConnectorRuntimeAllowed: false`;
- `clinicConnectorRuntimeAllowed: false`;
- `telehealthConnectorRuntimeAllowed: false`;
- `pharmacyConnectorRuntimeAllowed: false`;
- `pharmacyProviderConnectorRuntimeAllowed: false`;
- `prescriptionConnectorRuntimeAllowed: false`;
- `refillConnectorRuntimeAllowed: false`;
- `medicationSafetyConnectorRuntimeAllowed: false`;
- `paymentInsuranceConnectorRuntimeAllowed: false`;
- `prescriptionRefillRuntimeAllowed: false`;
- `appointmentSchedulingAllowed: false`;
- `transportationDispatchAllowed: false`;
- `emergencyDispatchAllowed: false`;
- `medicalRecordsFhirRuntimeAllowed: false`;
- `medicalAdviceAllowed: false`;
- `diagnosisClaimAllowed: false`;
- `prescriptionInstructionAllowed: false`;
- `dosageInstructionAllowed: false`;
- `refillExecutionAllowed: false`;
- `providerContactAllowed: false`;
- `pharmacistContactAllowed: false`;
- `locationSharingAllowed: false`;
- `cameraActivationAllowed: false`;
- `microphoneActivationAllowed: false`;
- `paymentExecutionAllowed: false`;
- `insuranceProcessingAllowed: false`;
- `marketplaceTransactionAllowed: false`;
- `identityAccountProfileActionAllowed: false`;
- `communicationsExecutionAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserPharmacyModeMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

The guard confirms the AA3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no Pharmacy Mode runtime is active;
- no Pharmacy Mode review surface appears from Sprint AA artifacts;
- no live health, clinic, telehealth, pharmacy, prescription, refill, payment, insurance, transportation, emergency, or FHIR connector runtime is loaded by Sprint AA artifacts;
- no typed or voice route is changed by Sprint AA artifacts;
- no medical advice, diagnosis claim, prescription instruction, dosage instruction, refill execution, provider contact, pharmacist contact, appointment scheduling, transportation dispatch, emergency dispatch, location sharing, camera activation, microphone activation, payment execution, insurance processing, marketplace transaction, communications execution, or account/profile mutation is possible from Sprint AA artifacts;
- no policy, confirmation, or permission bypass is possible from Sprint AA artifacts;
- no audit event is written by Sprint AA artifacts;
- existing health access, telehealth camera handoff, call confirmation, map permission, learning, workforce, agriculture, AgriTrade browsing, and Standard User behavior remains separate from Pharmacy Mode runtime authority.

## Browser Validation Implication

Sprint AA4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Pharmacy Mode artifacts, renders Pharmacy Mode UI, activates live connectors, changes typed routing, changes voice routing, changes provider/contact/location/camera/microphone/payment/emergency behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk Standard User prompt checks;
- Pharmacy Mode boundary checks;
- health/telehealth/pharmacy/provider/location/camera/microphone/emergency boundary checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint AA4 QA must verify:

- this regression guard exists;
- AA1, AA2, AA3, and Phase 79 artifacts exist;
- runtime files do not load Pharmacy Mode contracts, feature flags, fixtures, or harnesses;
- AA2 default and unsafe-attempt behavior remains no-execution;
- AA3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AA5 - Pharmacy Mode Lane Closeout`

Sprint AA5 should close the Pharmacy Mode readiness lane, summarize AA1-AA4, and recommend the next safe inert lane without activating runtime behavior.
