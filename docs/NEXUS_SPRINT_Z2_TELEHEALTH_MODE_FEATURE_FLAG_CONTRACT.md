# Nexus Sprint Z2 - Telehealth Mode Feature Flag Contract

Current base: `6d821a0068a1b21d85204ef5b882b8eaae027ef1`

Sprint Z2 adds a standalone inert contract module and deterministic QA only. It defines a default-off feature flag boundary for future Telehealth Mode visibility, but it does not import Telehealth Mode runtime, render UI, retrieve clinic or provider data, connect telehealth, contact providers or clinicians, schedule appointments, start telehealth sessions, refill prescriptions, share location, activate camera or microphone, dispatch transportation, dispatch emergency help, process payments, write storage, write audit events, request permissions, make live provider claims, give medical advice, diagnose, prescribe, or execute actions.

## Feature Flag Name

`NEXUS_TELEHEALTH_MODE_VISIBLE_ENABLED`

This name is reserved for future controlled, permissioned Telehealth Mode visibility work. It is not clinical authority, medical advice authority, diagnosis authority, prescription authority, pharmacy authority, telehealth session authority, provider contact authority, clinician contact authority, scheduling authority, transportation authority, emergency authority, location consent, camera consent, microphone consent, user consent, audit approval, provider confirmation, human review approval, or execution approval.

## Default State

The feature flag defaults to:

- `enabled: false`;
- `visibleUiAllowed: false`;
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

## Contract Module

Sprint Z2 adds:

`public/nexus-telehealth-mode-feature-flag.js`

The module exports:

- `TELEHEALTH_MODE_FEATURE_FLAG_NAME`;
- `DEFAULT_TELEHEALTH_MODE_FEATURE_FLAG_STATE`;
- `PROTECTED_TELEHEALTH_MODE_FLAG_FIELDS`;
- `normalizeTelehealthModeFeatureFlagState`;
- `isTelehealthModeVisibleFeatureEnabled`.

The normalizer may represent a future visible-only test state when both `enabled` and `visibleUiAllowed` are explicitly true. Every protected authority field remains forced to false, and `noExecution` remains true.

## Important Boundary

The feature flag does not authorize:

- Telehealth Mode runtime activation;
- live health, clinic, provider, clinician, telehealth, pharmacy, prescription, mobile clinic, transportation, emergency, or FHIR connector behavior;
- medical advice;
- diagnosis claims;
- prescription instructions;
- refill execution;
- appointment scheduling;
- telehealth session start;
- provider or clinician contact;
- communications execution;
- transportation dispatch;
- emergency dispatch;
- location sharing;
- camera activation;
- microphone activation;
- payment execution;
- marketplace transactions;
- identity, account, or profile actions;
- policy, confirmation, or permission bypass;
- backend writes;
- storage writes;
- network calls;
- audit writes;
- execution authority.

## Relationship To Sprint Z1

Sprint Z1 defines the runtime activation readiness gate. Sprint Z2 adds a default-off flag contract that preserves the Z1 gate. A future visible feature must still satisfy source, consent, permission, approval, provider confirmation, human review, audit, fallback, browser validation, and deterministic QA requirements before activation.

## Runtime Absence Requirements

Sprint Z2 must not load or activate:

- `public/nexus-telehealth-mode-feature-flag.js`;
- `NEXUS_TELEHEALTH_MODE_VISIBLE_ENABLED`;
- `normalizeTelehealthModeFeatureFlagState`;
- `isTelehealthModeVisibleFeatureEnabled`;
- any Telehealth Mode runtime;
- any live health connector runtime;
- any clinic, telehealth, provider, clinician, pharmacy, prescription, mobile clinic, transportation, emergency, or FHIR runtime;
- any provider or clinician contact runtime;
- any location, camera, microphone, payment, marketplace, identity, account, or communications execution runtime;
- Sprint Z QA scripts.

These artifacts must remain absent from:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## QA Expectations

Sprint Z2 QA must verify:

- the feature flag contract exists;
- the flag name is reserved and default-off;
- all protected authority fields default to false;
- unsafe authority attempts normalize back to false;
- visible-only test state does not grant execution authority;
- the module does not include DOM, storage, network, provider, permission, navigation, native bridge, workflow, health execution, telehealth execution, pharmacy, prescription, location, camera, microphone, payment, marketplace, or execution APIs;
- Standard User runtime does not load the Z2 module;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint Z3 - Telehealth Mode Flag Contract Harness`

Sprint Z3 should add deterministic fixtures proving default-off, visible-only, and unsafe authority attempts remain no-execution.
