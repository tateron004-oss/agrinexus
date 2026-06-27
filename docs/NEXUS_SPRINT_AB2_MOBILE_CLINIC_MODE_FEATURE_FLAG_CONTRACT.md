# Nexus Sprint AB2 - Mobile Clinic Mode Feature Flag Contract

Current base: `9052e64f954b953ce38824f45028f8f8992511bf`

Sprint AB2 adds a standalone inert contract module and deterministic QA only. It defines a default-off feature flag boundary for future Mobile Clinic Mode visibility, but it does not import Mobile Clinic Mode runtime, render UI, retrieve mobile clinic or provider data, connect clinics, contact providers or clinicians, schedule visits, dispatch transportation, dispatch emergency help, share location, activate camera or microphone, access medical records, process payments, write storage, write audit events, request permissions, make live provider claims, give medical advice, diagnose, prescribe, or execute actions.

## Feature Flag Name

`NEXUS_MOBILE_CLINIC_MODE_VISIBLE_ENABLED`

This name is reserved for future controlled, permissioned Mobile Clinic Mode visibility work. It is not clinical authority, medical advice authority, diagnosis authority, prescription authority, clinic authority, mobile clinic schedule authority, provider contact authority, clinician contact authority, appointment authority, transportation authority, emergency authority, location consent, camera consent, microphone consent, user consent, audit approval, provider confirmation, human review approval, payment authority, identity authority, or execution approval.

## Default State

The feature flag defaults to:

- `enabled: false`;
- `visibleUiAllowed: false`;
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

## Contract Module

Sprint AB2 adds:

`public/nexus-mobile-clinic-mode-feature-flag.js`

The module exports:

- `MOBILE_CLINIC_MODE_FEATURE_FLAG_NAME`;
- `DEFAULT_MOBILE_CLINIC_MODE_FEATURE_FLAG_STATE`;
- `PROTECTED_MOBILE_CLINIC_MODE_FLAG_FIELDS`;
- `normalizeMobileClinicModeFeatureFlagState`;
- `isMobileClinicModeVisibleFeatureEnabled`.

The normalizer may represent a future visible-only test state when both `enabled` and `visibleUiAllowed` are explicitly true. Every protected authority field remains forced to false, and `noExecution` remains true.

## Important Boundary

The feature flag does not authorize:

- Mobile Clinic Mode runtime activation;
- live health, clinic, telehealth, mobile clinic, provider, clinician, transportation, location, emergency, payment, pharmacy, prescription, refill, or FHIR connector behavior;
- medical advice;
- diagnosis claims;
- prescription instructions;
- appointment scheduling;
- mobile clinic visit scheduling;
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

## Relationship To Sprint AB1

Sprint AB1 defines the runtime activation readiness gate. Sprint AB2 adds a default-off flag contract that preserves the AB1 gate. A future visible feature must still satisfy source, consent, identity, permission, approval, provider or clinic confirmation, human review, audit, fallback, browser validation, and deterministic QA requirements before activation.

## Runtime Absence Requirements

Sprint AB2 must not load or activate:

- `public/nexus-mobile-clinic-mode-feature-flag.js`;
- `NEXUS_MOBILE_CLINIC_MODE_VISIBLE_ENABLED`;
- `normalizeMobileClinicModeFeatureFlagState`;
- `isMobileClinicModeVisibleFeatureEnabled`;
- any Mobile Clinic Mode runtime;
- any live health connector runtime;
- any clinic, telehealth, provider, clinician, mobile clinic, transportation, location, emergency, payment, pharmacy, prescription, refill, or FHIR runtime;
- any provider or clinician contact runtime;
- any location, camera, microphone, payment, marketplace, identity, account, or communications execution runtime;
- Sprint AB QA scripts.

These artifacts must remain absent from:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## QA Expectations

Sprint AB2 QA must verify:

- the feature flag contract exists;
- the flag name is reserved and default-off;
- all protected authority fields default to false;
- unsafe authority attempts normalize back to false;
- visible-only test state does not grant execution authority;
- the module does not include DOM, storage, network, provider, permission, navigation, native bridge, workflow, health execution, telehealth execution, mobile clinic execution, scheduling, transportation, emergency, location, camera, microphone, payment, marketplace, or execution APIs;
- Standard User runtime does not load the AB2 module;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AB3 - Mobile Clinic Mode Flag Contract Harness`

Sprint AB3 should add deterministic fixtures proving default-off, visible-only, and unsafe authority attempts remain no-execution.
