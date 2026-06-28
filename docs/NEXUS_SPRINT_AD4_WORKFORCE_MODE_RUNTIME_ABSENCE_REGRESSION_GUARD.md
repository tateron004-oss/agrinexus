# Nexus Sprint AD4 - Workforce Mode Runtime Absence Regression Guard

Current base: `d9b620dd883559e4771f9022a420a531efa7c635`

Sprint AD4 adds a deterministic regression guard proving the Workforce Mode readiness artifacts remain absent from Standard User runtime. This phase is documentation and QA only. It does not add runtime imports, script tags, UI, Workforce Mode review surfaces, workforce pathway previews, training program previews, job readiness previews, employer directory previews, training provider directory previews, certification previews, referral readiness previews, identity boundary previews, payment boundary previews, transportation boundary previews, emergency boundary previews, live workforce connector runtime, workforce program connector runtime, training provider connector runtime, certification provider connector runtime, employer connector runtime, referral connector runtime, application connector runtime, identity connector runtime, payment connector runtime, communications connector runtime, transportation connector runtime, health connector runtime, job application submission, workforce referral creation, credential issuance, provider contact, employer contact, training provider contact, certification provider contact, location sharing, camera activation, microphone activation, payment execution, marketplace transactions, communications execution, transportation dispatch, emergency dispatch, medical records/FHIR runtime, medical advice, diagnosis claims, prescription instructions, storage writes, backend writes, provider execution, or action authority.

## Purpose

Prevent accidental drift where Workforce Mode readiness artifacts become runtime activation.

Sprint AD4 protects:

- AD1 Workforce Mode runtime activation readiness gate;
- AD2 Workforce Mode feature flag contract;
- AD3 Workforce Mode flag contract harness;
- Phase 82 Workforce Mode readiness contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-workforce-mode-readiness-contract.js`;
- `public/nexus-workforce-mode-feature-flag.js`;
- `scripts/nexus-sprint-ad3-workforce-mode-flag-contract-harness.js`;
- `fixtures/nexus/workforce-mode-feature-flags.json`;
- Sprint AD QA scripts.

The guard checks exact Workforce Mode artifact names and helpers. It intentionally does not ban generic health, telehealth, clinic, provider, employer, workforce, training, jobs, education, certification, referral, location, map, transportation, learning, support, marketplace, agriculture, or AgriTrade words, because existing Standard User behavior has separate runtime boundaries that must remain supported.

## Blocked Runtime Behavior

Sprint AD artifacts must not introduce:

- active Workforce Mode runtime;
- live Workforce Mode runtime;
- workforce connector runtime;
- workforce program connector runtime;
- training provider connector runtime;
- certification provider connector runtime;
- employer connector runtime;
- referral connector runtime;
- application connector runtime;
- identity connector runtime;
- payment connector runtime;
- communications connector runtime;
- transportation connector runtime;
- health connector runtime;
- job application submission;
- workforce referral creation;
- credential issuance;
- provider contact;
- employer contact;
- training provider contact;
- certification provider contact;
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
- employer connection claims;
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
- employer handoff;
- native bridge dispatch;
- calls;
- messages;
- WhatsApp, Telegram, SMS, or email sending;
- external navigation;
- real pending action creation;
- execution authority.

## Required Contract Invariants

The guard confirms the AD2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
- `workforceModeReviewAllowed: false`;
- `workforcePathwayPreviewAllowed: false`;
- `trainingProgramPreviewAllowed: false`;
- `jobReadinessPreviewAllowed: false`;
- `employerDirectoryPreviewAllowed: false`;
- `trainingProviderDirectoryPreviewAllowed: false`;
- `certificationPreviewAllowed: false`;
- `referralReadinessPreviewAllowed: false`;
- `identityBoundaryPreviewAllowed: false`;
- `paymentBoundaryPreviewAllowed: false`;
- `transportationBoundaryPreviewAllowed: false`;
- `emergencyBoundaryPreviewAllowed: false`;
- `workforceModeRuntimeAllowed: false`;
- `liveWorkforceModeRuntimeAllowed: false`;
- `workforceConnectorRuntimeAllowed: false`;
- `workforceProgramConnectorRuntimeAllowed: false`;
- `trainingProviderConnectorRuntimeAllowed: false`;
- `certificationProviderConnectorRuntimeAllowed: false`;
- `employerConnectorRuntimeAllowed: false`;
- `referralConnectorRuntimeAllowed: false`;
- `applicationConnectorRuntimeAllowed: false`;
- `identityConnectorRuntimeAllowed: false`;
- `paymentConnectorRuntimeAllowed: false`;
- `communicationsConnectorRuntimeAllowed: false`;
- `transportationConnectorRuntimeAllowed: false`;
- `healthConnectorRuntimeAllowed: false`;
- `jobApplicationSubmissionAllowed: false`;
- `workforceReferralAllowed: false`;
- `credentialIssuanceAllowed: false`;
- `providerContactAllowed: false`;
- `employerContactAllowed: false`;
- `trainingProviderContactAllowed: false`;
- `certificationProviderContactAllowed: false`;
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
- `standardUserWorkforceModeMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

The guard confirms the AD3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no Workforce Mode runtime is active;
- no Workforce Mode review surface appears from Sprint AD artifacts;
- no live workforce, training provider, certification provider, employer, referral, application, identity, payment, communications, transportation, health, emergency, or FHIR connector runtime is loaded by Sprint AD artifacts;
- no typed or voice route is changed by Sprint AD artifacts;
- no job application submission, workforce referral creation, credential issuance, provider contact, employer contact, training provider contact, certification provider contact, location sharing, camera activation, microphone activation, payment execution, marketplace transaction, communications execution, transportation dispatch, emergency dispatch, medical advice, diagnosis claim, prescription instruction, or account/profile mutation is possible from Sprint AD artifacts;
- no policy, confirmation, or permission bypass is possible from Sprint AD artifacts;
- no audit event is written by Sprint AD artifacts;
- existing health access, telehealth camera handoff, call confirmation, map permission, learning, workforce, agriculture, AgriTrade browsing, and Standard User behavior remains separate from Workforce Mode runtime authority.

## Browser Validation Implication

Sprint AD4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Workforce Mode artifacts, renders Workforce Mode UI, activates live connectors, changes typed routing, changes voice routing, changes provider/employer/contact/location/camera/microphone/payment/emergency behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk Standard User prompt checks;
- Workforce Mode boundary checks;
- health/telehealth/workforce/provider/employer/location/camera/microphone/payment/emergency boundary checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint AD4 QA must verify:

- this regression guard exists;
- AD1, AD2, AD3, and Phase 82 artifacts exist;
- runtime files do not load Workforce Mode contracts, feature flags, fixtures, or harnesses;
- AD2 default and unsafe-attempt behavior remains no-execution;
- AD3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AD5 - Workforce Mode Lane Closeout`

Sprint AD5 should close the Workforce Mode readiness lane, summarize AD1-AD4, and recommend the next safe inert lane without activating runtime behavior.
