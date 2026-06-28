# Nexus Sprint AD2 - Workforce Mode Feature Flag Contract

Current base: `894e33206332e5d947ef065ff86ba65365576c3c`

Sprint AD2 adds a standalone inert contract module and deterministic QA only. It defines a default-off feature flag boundary for future Workforce Mode visibility, but it does not import Workforce Mode runtime, render UI, retrieve workforce/training/certification/employer/referral data, connect providers, contact providers or employers, submit job applications, issue credentials, create referrals, share location, activate camera or microphone, access medical records, process payments, write storage, write audit events, request permissions, make live provider claims, give medical advice, diagnose, prescribe, dispatch transportation, dispatch emergency help, or execute actions.

## Feature Flag Name

`NEXUS_WORKFORCE_MODE_VISIBLE_ENABLED`

This name is reserved for future controlled, permissioned Workforce Mode visibility work. It is not workforce execution authority, job application authority, referral authority, provider authority, employer authority, credential authority, identity authority, payment authority, transportation authority, emergency authority, medical authority, location consent, camera consent, microphone consent, user consent, audit approval, provider confirmation, employer confirmation, human review approval, or execution approval.

## Default State

The feature flag defaults to:

- `enabled: false`;
- `visibleUiAllowed: false`;
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

## Contract Module

Sprint AD2 adds:

`public/nexus-workforce-mode-feature-flag.js`

The module exports:

- `WORKFORCE_MODE_FEATURE_FLAG_NAME`;
- `DEFAULT_WORKFORCE_MODE_FEATURE_FLAG_STATE`;
- `PROTECTED_WORKFORCE_MODE_FLAG_FIELDS`;
- `normalizeWorkforceModeFeatureFlagState`;
- `isWorkforceModeVisibleFeatureEnabled`.

The normalizer may represent a future visible-only test state when both `enabled` and `visibleUiAllowed` are explicitly true. Every protected authority field remains forced to false, and `noExecution` remains true.

## Important Boundary

The feature flag does not authorize:

- Workforce Mode runtime activation;
- live workforce, training provider, certification provider, employer, referral, application, identity, payment, communications, transportation, health, emergency, or FHIR connector behavior;
- medical advice;
- diagnosis claims;
- prescription instructions;
- job application submission;
- workforce referral creation;
- credential issuance;
- provider, employer, training provider, or certification provider contact;
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

## Relationship To Sprint AD1

Sprint AD1 defines the runtime activation readiness gate. Sprint AD2 adds a default-off flag contract that preserves the AD1 gate. A future visible feature must still satisfy source, consent, identity, permission, approval, provider or employer confirmation, human review, audit, fallback, browser validation, and deterministic QA requirements before activation.

## Runtime Absence Requirements

Sprint AD2 must not load or activate:

- `public/nexus-workforce-mode-feature-flag.js`;
- `NEXUS_WORKFORCE_MODE_VISIBLE_ENABLED`;
- `NexusWorkforceModeFeatureFlagContract`;
- `normalizeWorkforceModeFeatureFlagState`;
- `isWorkforceModeVisibleFeatureEnabled`;
- any Workforce Mode runtime;
- any live workforce, training provider, certification provider, employer, referral, application, identity, payment, communications, transportation, health, emergency, or FHIR runtime;
- any provider, employer, training provider, or certification provider contact runtime;
- any location, camera, microphone, payment, marketplace, identity, account, or communications execution runtime;
- Sprint AD QA scripts.

These artifacts must remain absent from:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## QA Expectations

Sprint AD2 QA must verify:

- the feature flag contract exists;
- the flag name is reserved and default-off;
- all protected authority fields default to false;
- unsafe authority attempts normalize back to false;
- visible-only test state does not grant execution authority;
- the module does not include DOM, storage, network, provider, permission, navigation, native bridge, workflow, health execution, telehealth execution, workforce execution, job application, referral, credential, transportation, emergency, location, camera, microphone, payment, marketplace, or execution APIs;
- Standard User runtime does not load the AD2 module;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AD3 - Workforce Mode Flag Contract Harness`

Sprint AD3 should add deterministic fixtures proving default-off, visible-only, and unsafe authority attempts remain no-execution.
