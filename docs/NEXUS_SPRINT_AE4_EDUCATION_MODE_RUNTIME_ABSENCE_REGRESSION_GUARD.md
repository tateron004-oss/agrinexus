# Nexus Sprint AE4 - Education Mode Runtime Absence Regression Guard

Current base: `b8a16d4cda9147149ae2c658d0fe6944fadd9e7b`

Sprint AE4 adds a deterministic regression guard proving the Education Mode readiness artifacts remain absent from Standard User runtime. This phase is documentation and QA only. It does not add runtime imports, script tags, UI, Education Mode review surfaces, learning pathway previews, course previews, training program previews, certification previews, content provider directory previews, training provider directory previews, enrollment readiness previews, identity boundary previews, payment boundary previews, transportation boundary previews, emergency boundary previews, live education connector runtime, education content provider connector runtime, training provider connector runtime, certification provider connector runtime, enrollment connector runtime, identity connector runtime, payment connector runtime, communications connector runtime, transportation connector runtime, health connector runtime, course enrollment, course registration, credential issuance, certificate issuance, provider contact, training provider contact, certification provider contact, content provider contact, location sharing, camera activation, microphone activation, payment execution, marketplace transactions, communications execution, transportation dispatch, emergency dispatch, medical records/FHIR runtime, medical advice, diagnosis claims, prescription instructions, storage writes, backend writes, provider execution, or action authority.

## Purpose

Prevent accidental drift where Education Mode readiness artifacts become runtime activation.

Sprint AE4 protects:

- AE1 Education Mode runtime activation readiness gate;
- AE2 Education Mode feature flag contract;
- AE3 Education Mode flag contract harness;
- Phase 83 Education Mode readiness contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-education-mode-readiness-contract.js`;
- `public/nexus-education-mode-feature-flag.js`;
- `scripts/nexus-sprint-ae3-education-mode-flag-contract-harness.js`;
- `fixtures/nexus/education-mode-feature-flags.json`;
- Sprint AE QA scripts.

The guard checks exact Education Mode artifact names and helpers. It intentionally does not ban generic health, telehealth, clinic, provider, training, jobs, education, certification, enrollment, learning, support, marketplace, agriculture, or AgriTrade words, because existing Standard User behavior has separate runtime boundaries that must remain supported.

## Blocked Runtime Behavior

Sprint AE artifacts must not introduce:

- active Education Mode runtime;
- live Education Mode runtime;
- education connector runtime;
- education content provider connector runtime;
- training provider connector runtime;
- certification provider connector runtime;
- enrollment connector runtime;
- identity connector runtime;
- payment connector runtime;
- communications connector runtime;
- transportation connector runtime;
- health connector runtime;
- course enrollment;
- course registration;
- credential issuance;
- certificate issuance;
- provider contact;
- training provider contact;
- certification provider contact;
- content provider contact;
- location sharing;
- camera activation;
- microphone activation;
- payment execution;
- marketplace transaction execution;
- communications execution;
- transportation dispatch;
- emergency dispatch;
- medical records/FHIR runtime;
- medical advice;
- diagnosis claims;
- prescription instructions;
- identity, account, or profile mutation;
- source-backed claims without sources;
- stale data claims without freshness labels;
- confidence-free source-backed claims;
- unsupported live data claims;
- provider connection claims;
- training partner connection claims;
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
- training partner handoff;
- native bridge dispatch;
- calls;
- messages;
- WhatsApp, Telegram, SMS, or email sending;
- external navigation;
- real pending action creation;
- execution authority.

## Required Contract Invariants

The guard confirms the AE2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
- `educationModeReviewAllowed: false`;
- `learningPathwayPreviewAllowed: false`;
- `coursePreviewAllowed: false`;
- `trainingProgramPreviewAllowed: false`;
- `certificationPreviewAllowed: false`;
- `contentProviderDirectoryPreviewAllowed: false`;
- `trainingProviderDirectoryPreviewAllowed: false`;
- `enrollmentReadinessPreviewAllowed: false`;
- `identityBoundaryPreviewAllowed: false`;
- `paymentBoundaryPreviewAllowed: false`;
- `transportationBoundaryPreviewAllowed: false`;
- `emergencyBoundaryPreviewAllowed: false`;
- `educationModeRuntimeAllowed: false`;
- `liveEducationModeRuntimeAllowed: false`;
- `educationConnectorRuntimeAllowed: false`;
- `educationContentProviderConnectorRuntimeAllowed: false`;
- `trainingProviderConnectorRuntimeAllowed: false`;
- `certificationProviderConnectorRuntimeAllowed: false`;
- `enrollmentConnectorRuntimeAllowed: false`;
- `identityConnectorRuntimeAllowed: false`;
- `paymentConnectorRuntimeAllowed: false`;
- `communicationsConnectorRuntimeAllowed: false`;
- `transportationConnectorRuntimeAllowed: false`;
- `healthConnectorRuntimeAllowed: false`;
- `courseEnrollmentAllowed: false`;
- `courseRegistrationAllowed: false`;
- `credentialIssuanceAllowed: false`;
- `certificateIssuanceAllowed: false`;
- `providerContactAllowed: false`;
- `trainingProviderContactAllowed: false`;
- `certificationProviderContactAllowed: false`;
- `contentProviderContactAllowed: false`;
- `locationSharingAllowed: false`;
- `cameraActivationAllowed: false`;
- `microphoneActivationAllowed: false`;
- `paymentExecutionAllowed: false`;
- `marketplaceTransactionAllowed: false`;
- `identityAccountProfileActionAllowed: false`;
- `communicationsExecutionAllowed: false`;
- `transportationDispatchAllowed: false`;
- `emergencyDispatchAllowed: false`;
- `medicalRecordsFhirRuntimeAllowed: false`;
- `medicalAdviceAllowed: false`;
- `diagnosisClaimAllowed: false`;
- `prescriptionInstructionAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserEducationModeMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

The guard confirms the AE3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no Education Mode runtime is active;
- no Education Mode review surface appears from Sprint AE artifacts;
- no live education, content provider, training provider, certification provider, enrollment, identity, payment, communications, transportation, health, emergency, or FHIR connector runtime is loaded by Sprint AE artifacts;
- no typed or voice route is changed by Sprint AE artifacts;
- no course enrollment, course registration, credential issuance, certificate issuance, provider contact, training provider contact, certification provider contact, content provider contact, location sharing, camera activation, microphone activation, payment execution, marketplace transaction, communications execution, transportation dispatch, emergency dispatch, medical advice, diagnosis claim, prescription instruction, or account/profile mutation is possible from Sprint AE artifacts;
- no policy, confirmation, or permission bypass is possible from Sprint AE artifacts;
- no audit event is written by Sprint AE artifacts;
- existing health access, telehealth camera handoff, call confirmation, map permission, learning, workforce, agriculture, AgriTrade browsing, and Standard User behavior remains separate from Education Mode runtime authority.

## Browser Validation Implication

Sprint AE4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Education Mode artifacts, renders Education Mode UI, activates live connectors, changes typed routing, changes voice routing, changes provider/training partner/contact/location/camera/microphone/payment/emergency behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk Standard User prompt checks;
- Education Mode boundary checks;
- health/telehealth/learning/provider/training/location/camera/microphone/payment/emergency boundary checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint AE4 QA must verify:

- this regression guard exists;
- AE1, AE2, AE3, and Phase 83 artifacts exist;
- runtime files do not load Education Mode contracts, feature flags, fixtures, or harnesses;
- AE2 default and unsafe-attempt behavior remains no-execution;
- AE3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AE5 - Education Mode Lane Closeout`

Sprint AE5 should close the Education Mode readiness lane, summarize AE1-AE4, and recommend the next safe inert lane without activating runtime behavior.
