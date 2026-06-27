# Nexus Sprint Z4 - Telehealth Mode Runtime Absence Regression Guard

Current base: `ea0254daca81b85611ca590325cec80abb340b5d`

Sprint Z4 adds a deterministic regression guard proving the Telehealth Mode readiness artifacts remain absent from Standard User runtime. This phase is documentation and QA only. It does not add runtime imports, script tags, UI, Telehealth Mode review surfaces, telehealth access guidance previews, provider directory previews, clinic access previews, clinician availability previews, pharmacy support previews, mobile clinic schedule previews, transportation-to-care previews, live health connector runtime, clinic connector runtime, telehealth connector runtime, provider connector runtime, clinician connector runtime, pharmacy connector runtime, prescription or refill runtime, appointment scheduling, mobile clinic schedule runtime, transportation dispatch, emergency dispatch, medical records/FHIR runtime, medical advice, diagnosis claims, prescription instructions, provider contact, clinician contact, location sharing, camera activation, microphone activation, payment execution, marketplace transactions, communications execution, storage writes, backend writes, provider execution, or action authority.

## Purpose

Prevent accidental drift where Telehealth Mode readiness artifacts become runtime activation.

Sprint Z4 protects:

- Z1 Telehealth Mode runtime activation readiness gate;
- Z2 Telehealth Mode feature flag contract;
- Z3 Telehealth Mode flag contract harness;
- Phase 78 Telehealth Mode readiness contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-telehealth-mode-readiness-contract.js`;
- `public/nexus-telehealth-mode-feature-flag.js`;
- `scripts/nexus-sprint-z3-telehealth-mode-flag-contract-harness.js`;
- `fixtures/nexus/telehealth-mode-feature-flags.json`;
- Sprint Z QA scripts.

The guard checks exact Telehealth Mode artifact names and helpers. It intentionally does not ban generic health, telehealth, pharmacy, clinic, provider, clinician, mobile clinic, transportation, map, workforce, learning, support, or agriculture words, because existing Standard User behavior has separate runtime boundaries that must remain supported.

## Blocked Runtime Behavior

Sprint Z artifacts must not introduce:

- active Telehealth Mode runtime;
- live Telehealth Mode runtime;
- health connector runtime;
- clinic connector runtime;
- telehealth connector runtime;
- provider connector runtime;
- clinician connector runtime;
- pharmacy connector runtime;
- prescription or refill runtime;
- appointment scheduling runtime;
- mobile clinic schedule runtime;
- transportation dispatch;
- emergency dispatch;
- medical records/FHIR runtime;
- medical advice;
- diagnosis claims;
- prescription instructions;
- refill execution;
- provider contact;
- clinician contact;
- location sharing;
- camera activation;
- microphone activation;
- payment execution;
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

The guard confirms the Z2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
- `telehealthModeReviewAllowed: false`;
- `telehealthAccessGuidancePreviewAllowed: false`;
- `providerDirectoryPreviewAllowed: false`;
- `clinicAccessPreviewAllowed: false`;
- `clinicianAvailabilityPreviewAllowed: false`;
- `pharmacySupportPreviewAllowed: false`;
- `mobileClinicSchedulePreviewAllowed: false`;
- `transportationToCarePreviewAllowed: false`;
- `telehealthModeRuntimeAllowed: false`;
- `liveTelehealthModeRuntimeAllowed: false`;
- `healthConnectorRuntimeAllowed: false`;
- `clinicConnectorRuntimeAllowed: false`;
- `telehealthConnectorRuntimeAllowed: false`;
- `providerConnectorRuntimeAllowed: false`;
- `clinicianConnectorRuntimeAllowed: false`;
- `pharmacyConnectorRuntimeAllowed: false`;
- `prescriptionRefillRuntimeAllowed: false`;
- `appointmentSchedulingAllowed: false`;
- `mobileClinicScheduleRuntimeAllowed: false`;
- `transportationDispatchAllowed: false`;
- `emergencyDispatchAllowed: false`;
- `medicalRecordsFhirRuntimeAllowed: false`;
- `medicalAdviceAllowed: false`;
- `diagnosisClaimAllowed: false`;
- `prescriptionInstructionAllowed: false`;
- `refillExecutionAllowed: false`;
- `providerContactAllowed: false`;
- `clinicianContactAllowed: false`;
- `locationSharingAllowed: false`;
- `cameraActivationAllowed: false`;
- `microphoneActivationAllowed: false`;
- `paymentExecutionAllowed: false`;
- `marketplaceTransactionAllowed: false`;
- `identityAccountProfileActionAllowed: false`;
- `communicationsExecutionAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserTelehealthModeMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

The guard confirms the Z3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no Telehealth Mode runtime is active;
- no Telehealth Mode review surface appears from Sprint Z artifacts;
- no live health, clinic, telehealth, provider, clinician, pharmacy, prescription, mobile clinic, transportation, emergency, or FHIR connector runtime is loaded by Sprint Z artifacts;
- no typed or voice route is changed by Sprint Z artifacts;
- no medical advice, diagnosis claim, prescription instruction, refill execution, provider contact, clinician contact, telehealth session start, appointment scheduling, transportation dispatch, emergency dispatch, location sharing, camera activation, microphone activation, payment execution, marketplace transaction, communications execution, or account/profile mutation is possible from Sprint Z artifacts;
- no policy, confirmation, or permission bypass is possible from Sprint Z artifacts;
- no audit event is written by Sprint Z artifacts;
- existing health access, telehealth camera handoff, call confirmation, map permission, learning, workforce, agriculture, AgriTrade browsing, and Standard User behavior remains separate from Telehealth Mode runtime authority.

## Browser Validation Implication

Sprint Z4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Telehealth Mode artifacts, renders Telehealth Mode UI, activates live connectors, changes typed routing, changes voice routing, changes provider/contact/location/camera/microphone/payment/emergency behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk Standard User prompt checks;
- Telehealth Mode boundary checks;
- health/telehealth/pharmacy/provider/clinician/location/camera/microphone/emergency boundary checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint Z4 QA must verify:

- this regression guard exists;
- Z1, Z2, Z3, and Phase 78 artifacts exist;
- runtime files do not load Telehealth Mode contracts, feature flags, fixtures, or harnesses;
- Z2 default and unsafe-attempt behavior remains no-execution;
- Z3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint Z5 - Telehealth Mode Lane Closeout`

Sprint Z5 should close the Telehealth Mode readiness lane, summarize Z1-Z4, and recommend the next safe inert lane without activating runtime behavior.
