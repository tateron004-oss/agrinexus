# Nexus Sprint Y2 - Rural Health Mode Feature Flag Contract

Current base: `c9fc32d35653213dcd05bdc2531fb599bb84ff3e`

Sprint Y2 adds a standalone inert contract module and deterministic QA only. It defines a default-off feature flag boundary for future Rural Health Mode visibility, but it does not import Rural Health Mode runtime, render UI, retrieve clinic or provider data, connect telehealth, contact providers, schedule appointments, refill prescriptions, share location, activate camera or microphone, dispatch transportation, dispatch emergency help, process payments, write storage, write audit events, request permissions, make live provider claims, give medical advice, diagnose, prescribe, or execute actions.

## Feature Flag Name

`NEXUS_RURAL_HEALTH_MODE_VISIBLE_ENABLED`

This name is reserved for future controlled, permissioned Rural Health Mode visibility work. It is not clinical authority, medical advice authority, diagnosis authority, prescription authority, pharmacy authority, telehealth authority, provider contact authority, transportation authority, emergency authority, location consent, camera consent, user consent, audit approval, human review approval, or execution approval.

## Default State

The feature flag defaults to:

- `enabled: false`;
- `visibleUiAllowed: false`;
- `ruralHealthModeReviewAllowed: false`;
- `healthAccessGuidancePreviewAllowed: false`;
- `providerDirectoryPreviewAllowed: false`;
- `clinicAccessPreviewAllowed: false`;
- `telehealthReadinessPreviewAllowed: false`;
- `pharmacySupportPreviewAllowed: false`;
- `mobileClinicSchedulePreviewAllowed: false`;
- `transportationToCarePreviewAllowed: false`;
- `ruralHealthModeRuntimeAllowed: false`;
- `liveRuralHealthModeRuntimeAllowed: false`;
- `healthConnectorRuntimeAllowed: false`;
- `clinicConnectorRuntimeAllowed: false`;
- `telehealthConnectorRuntimeAllowed: false`;
- `pharmacyConnectorRuntimeAllowed: false`;
- `prescriptionRefillRuntimeAllowed: false`;
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
- `standardUserRuralHealthModeMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

## Contract Module

Sprint Y2 adds:

`public/nexus-rural-health-mode-feature-flag.js`

The module exports:

- `RURAL_HEALTH_MODE_FEATURE_FLAG_NAME`;
- `DEFAULT_RURAL_HEALTH_MODE_FEATURE_FLAG_STATE`;
- `PROTECTED_RURAL_HEALTH_MODE_FLAG_FIELDS`;
- `normalizeRuralHealthModeFeatureFlagState`;
- `isRuralHealthModeVisibleFeatureEnabled`.

The normalizer may represent a future visible-only test state when both `enabled` and `visibleUiAllowed` are explicitly true. Every protected authority field remains forced to false, and `noExecution` remains true.

## Important Boundary

The feature flag does not authorize:

- Rural Health Mode runtime activation;
- live health, clinic, telehealth, pharmacy, prescription, mobile clinic, transportation, emergency, or FHIR connector behavior;
- medical advice;
- diagnosis claims;
- prescription instructions;
- refill execution;
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

## Relationship To Sprint Y1

Sprint Y1 defines the runtime activation readiness gate. Sprint Y2 adds a default-off flag contract that preserves the Y1 gate. A future visible feature must still satisfy source, consent, permission, approval, human review, audit, fallback, browser validation, and deterministic QA requirements before activation.

## Runtime Absence Requirements

Sprint Y2 must not load or activate:

- `public/nexus-rural-health-mode-feature-flag.js`;
- `NEXUS_RURAL_HEALTH_MODE_VISIBLE_ENABLED`;
- `normalizeRuralHealthModeFeatureFlagState`;
- `isRuralHealthModeVisibleFeatureEnabled`;
- any Rural Health Mode runtime;
- any live health connector runtime;
- any clinic, telehealth, pharmacy, prescription, mobile clinic, transportation, emergency, or FHIR runtime;
- any provider or clinician contact runtime;
- any location, camera, microphone, payment, marketplace, identity, account, or communications execution runtime;
- Sprint Y QA scripts.

These artifacts must remain absent from:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## QA Expectations

Sprint Y2 QA must verify:

- the feature flag contract exists;
- the flag name is reserved and default-off;
- all protected authority fields default to false;
- unsafe authority attempts normalize back to false;
- visible-only test state does not grant execution authority;
- the module does not include DOM, storage, network, provider, permission, navigation, native bridge, workflow, health execution, telehealth, pharmacy, prescription, location, camera, microphone, payment, marketplace, or execution APIs;
- Standard User runtime does not load the Y2 module;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint Y3 - Rural Health Mode Flag Contract Harness`

Sprint Y3 should add deterministic fixtures proving default-off, visible-only, and unsafe authority attempts remain no-execution.
