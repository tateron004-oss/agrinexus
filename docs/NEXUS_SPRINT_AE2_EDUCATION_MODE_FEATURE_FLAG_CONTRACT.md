# Nexus Sprint AE2 - Education Mode Feature Flag Contract

Current base: `e616837844ff7ff390d1eb11a8304bd596354184`

Sprint AE2 adds a standalone inert contract module and deterministic QA only. It defines a default-off feature flag boundary for future Education Mode visibility, but it does not import Education Mode runtime, render UI, retrieve education/content/training/certification/enrollment data, connect providers, contact providers or training partners, enroll users in courses, register users for programs, issue certificates, share location, activate camera or microphone, access medical records, process payments, write storage, write audit events, request permissions, make live provider claims, give medical advice, diagnose, prescribe, dispatch transportation, dispatch emergency help, or execute actions.

## Feature Flag Name

`NEXUS_EDUCATION_MODE_VISIBLE_ENABLED`

This name is reserved for future controlled, permissioned Education Mode visibility work. It is not education execution authority, enrollment authority, course registration authority, certification authority, provider authority, training partner authority, content provider authority, identity authority, payment authority, transportation authority, emergency authority, medical authority, location consent, camera consent, microphone consent, user consent, audit approval, provider confirmation, training partner confirmation, human review approval, or execution approval.

## Default State

The feature flag defaults to:

- `enabled: false`;
- `visibleUiAllowed: false`;
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

## Contract Module

Sprint AE2 adds:

`public/nexus-education-mode-feature-flag.js`

The module exports:

- `EDUCATION_MODE_FEATURE_FLAG_NAME`;
- `DEFAULT_EDUCATION_MODE_FEATURE_FLAG_STATE`;
- `PROTECTED_EDUCATION_MODE_FLAG_FIELDS`;
- `normalizeEducationModeFeatureFlagState`;
- `isEducationModeVisibleFeatureEnabled`.

The normalizer may represent a future visible-only test state when both `enabled` and `visibleUiAllowed` are explicitly true. Every protected authority field remains forced to false, and `noExecution` remains true.

## Important Boundary

The feature flag does not authorize:

- Education Mode runtime activation;
- live education, content provider, training provider, certification provider, enrollment, identity, payment, communications, transportation, health, emergency, or FHIR connector behavior;
- medical advice;
- diagnosis claims;
- prescription instructions;
- course enrollment;
- course registration;
- credential issuance;
- certificate issuance;
- provider, training provider, certification provider, or content provider contact;
- communications execution;
- location sharing;
- camera activation;
- microphone activation;
- payment execution;
- marketplace transactions;
- identity, account, or profile actions;
- transportation dispatch;
- emergency dispatch;
- policy, confirmation, or permission bypass;
- backend writes;
- storage writes;
- network calls;
- audit writes;
- execution authority.

## Relationship To Sprint AE1

Sprint AE1 defines the runtime activation readiness gate. Sprint AE2 adds a default-off flag contract that preserves the AE1 gate. A future visible feature must still satisfy source, consent, identity, permission, approval, provider or training partner confirmation, human review, audit, fallback, browser validation, and deterministic QA requirements before activation.

## Runtime Absence Requirements

Sprint AE2 must not load or activate:

- `public/nexus-education-mode-feature-flag.js`;
- `NEXUS_EDUCATION_MODE_VISIBLE_ENABLED`;
- `NexusEducationModeFeatureFlagContract`;
- `normalizeEducationModeFeatureFlagState`;
- `isEducationModeVisibleFeatureEnabled`;
- any Education Mode runtime;
- any live education, content provider, training provider, certification provider, enrollment, identity, payment, communications, transportation, health, emergency, or FHIR runtime;
- any provider, training provider, certification provider, or content provider contact runtime;
- any location, camera, microphone, payment, marketplace, identity, account, or communications execution runtime;
- Sprint AE QA scripts.

These artifacts must remain absent from:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## QA Expectations

Sprint AE2 QA must verify:

- the feature flag contract exists;
- the flag name is reserved and default-off;
- all protected authority fields default to false;
- unsafe authority attempts normalize back to false;
- visible-only test state does not grant execution authority;
- the module does not include DOM, storage, network, provider, permission, navigation, native bridge, workflow, health execution, telehealth execution, education execution, course enrollment, registration, certification, transportation, emergency, location, camera, microphone, payment, marketplace, or execution APIs;
- Standard User runtime does not load the AE2 module;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AE3 - Education Mode Flag Contract Harness`

Sprint AE3 should add deterministic fixtures proving default-off, visible-only, and unsafe authority attempts remain no-execution.
