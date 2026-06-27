# Nexus Sprint AB4 - Mobile Clinic Mode Runtime Absence Regression Guard

Current base: `edfd8c974e92c121ccd77c4006c4d97a104fc9a4`

Sprint AB4 adds a deterministic regression guard proving the Mobile Clinic Mode readiness artifacts remain absent from Standard User runtime. This phase is documentation and QA only. It does not add runtime imports, script tags, UI, Mobile Clinic Mode review surfaces, mobile clinic schedule previews, clinic access previews, provider directory previews, transportation readiness previews, location consent boundary previews, emergency boundary previews, live health connector runtime, clinic connector runtime, telehealth connector runtime, mobile clinic connector runtime, mobile clinic schedule connector runtime, provider connector runtime, clinician connector runtime, transportation connector runtime, location connector runtime, appointment scheduling, transportation dispatch, emergency dispatch, medical records/FHIR runtime, medical advice, diagnosis claims, prescription instructions, provider contact, clinician contact, location sharing, camera activation, microphone activation, payment execution, marketplace transactions, communications execution, storage writes, backend writes, provider execution, or action authority.

## Purpose

Prevent accidental drift where Mobile Clinic Mode readiness artifacts become runtime activation.

Sprint AB4 protects:

- AB1 Mobile Clinic Mode runtime activation readiness gate;
- AB2 Mobile Clinic Mode feature flag contract;
- AB3 Mobile Clinic Mode flag contract harness;
- Phase 80 Mobile Clinic Mode readiness contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-mobile-clinic-mode-readiness-contract.js`;
- `public/nexus-mobile-clinic-mode-feature-flag.js`;
- `scripts/nexus-sprint-ab3-mobile-clinic-mode-flag-contract-harness.js`;
- `fixtures/nexus/mobile-clinic-mode-feature-flags.json`;
- Sprint AB QA scripts.

The guard checks exact Mobile Clinic Mode artifact names and helpers. It intentionally does not ban generic health, telehealth, clinic, provider, mobile clinic, transportation, map, workforce, learning, support, marketplace, agriculture, or AgriTrade words, because existing Standard User behavior has separate runtime boundaries that must remain supported.

## Blocked Runtime Behavior

Sprint AB artifacts must not introduce:

- active Mobile Clinic Mode runtime;
- live Mobile Clinic Mode runtime;
- health connector runtime;
- clinic connector runtime;
- telehealth connector runtime;
- mobile clinic connector runtime;
- mobile clinic schedule connector runtime;
- provider connector runtime;
- clinician connector runtime;
- transportation connector runtime;
- location connector runtime;
- appointment scheduling runtime;
- transportation dispatch;
- emergency dispatch;
- medical records/FHIR runtime;
- medical advice;
- diagnosis claims;
- prescription instructions;
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

The guard confirms the AB2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
- `mobileClinicModeReviewAllowed: false`;
- `mobileClinicSchedulePreviewAllowed: false`;
- `clinicAccessPreviewAllowed: false`;
- `providerDirectoryPreviewAllowed: false`;
- `transportationReadinessPreviewAllowed: false`;
- `locationConsentBoundaryPreviewAllowed: false`;
- `emergencyBoundaryPreviewAllowed: false`;
- `mobileClinicModeRuntimeAllowed: false`;
- `liveMobileClinicModeRuntimeAllowed: false`;
- `healthConnectorRuntimeAllowed: false`;
- `clinicConnectorRuntimeAllowed: false`;
- `telehealthConnectorRuntimeAllowed: false`;
- `mobileClinicConnectorRuntimeAllowed: false`;
- `mobileClinicScheduleConnectorRuntimeAllowed: false`;
- `providerConnectorRuntimeAllowed: false`;
- `clinicianConnectorRuntimeAllowed: false`;
- `transportationConnectorRuntimeAllowed: false`;
- `locationConnectorRuntimeAllowed: false`;
- `appointmentSchedulingAllowed: false`;
- `transportationDispatchAllowed: false`;
- `emergencyDispatchAllowed: false`;
- `medicalRecordsFhirRuntimeAllowed: false`;
- `medicalAdviceAllowed: false`;
- `diagnosisClaimAllowed: false`;
- `prescriptionInstructionAllowed: false`;
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
- `standardUserMobileClinicModeMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

The guard confirms the AB3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no Mobile Clinic Mode runtime is active;
- no Mobile Clinic Mode review surface appears from Sprint AB artifacts;
- no live health, clinic, telehealth, mobile clinic, schedule, provider, clinician, transportation, location, emergency, or FHIR connector runtime is loaded by Sprint AB artifacts;
- no typed or voice route is changed by Sprint AB artifacts;
- no medical advice, diagnosis claim, prescription instruction, provider contact, clinician contact, appointment scheduling, transportation dispatch, emergency dispatch, location sharing, camera activation, microphone activation, payment execution, marketplace transaction, communications execution, or account/profile mutation is possible from Sprint AB artifacts;
- no policy, confirmation, or permission bypass is possible from Sprint AB artifacts;
- no audit event is written by Sprint AB artifacts;
- existing health access, telehealth camera handoff, call confirmation, map permission, learning, workforce, agriculture, AgriTrade browsing, and Standard User behavior remains separate from Mobile Clinic Mode runtime authority.

## Browser Validation Implication

Sprint AB4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Mobile Clinic Mode artifacts, renders Mobile Clinic Mode UI, activates live connectors, changes typed routing, changes voice routing, changes provider/contact/location/camera/microphone/payment/emergency behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk Standard User prompt checks;
- Mobile Clinic Mode boundary checks;
- health/telehealth/mobile clinic/provider/location/camera/microphone/emergency boundary checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint AB4 QA must verify:

- this regression guard exists;
- AB1, AB2, AB3, and Phase 80 artifacts exist;
- runtime files do not load Mobile Clinic Mode contracts, feature flags, fixtures, or harnesses;
- AB2 default and unsafe-attempt behavior remains no-execution;
- AB3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AB5 - Mobile Clinic Mode Lane Closeout`

Sprint AB5 should close the Mobile Clinic Mode readiness lane, summarize AB1-AB4, and recommend the next safe inert lane without activating runtime behavior.
