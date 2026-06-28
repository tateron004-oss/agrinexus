# Nexus Sprint AD3 - Workforce Mode Flag Contract Harness

Current base: `61e1bba666b06a4edd99072d288021d75d4933c4`

Sprint AD3 adds documentation, fixture, and deterministic QA only. It does not load Workforce Mode into Standard User runtime, render UI, retrieve workforce, training provider, certification provider, employer, referral, application, identity, payment, communications, transportation, health, emergency, or FHIR data, connect workforce providers, contact providers or employers, submit job applications, create referrals, issue credentials, share location, activate camera or microphone, process payments, access medical records, write storage, write audit events, request permissions, make live provider claims, give medical advice, diagnose, prescribe, dispatch transportation, dispatch emergency help, or execute actions.

## Added Artifacts

- `fixtures/nexus/workforce-mode-feature-flags.json`
- `scripts/nexus-sprint-ad3-workforce-mode-flag-contract-harness.js`

## Fixture Coverage

The fixture set covers:

- default-off state;
- flag-on visible-only local/test state;
- unsafe authority attempt;
- enabled without visible permission.

Every fixture must preserve:

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

## Runtime Boundary

The harness is a Node QA utility only. It must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

The harness must not include DOM, storage, network, provider handoff, permissions, navigation, native bridge, workflow, health execution, telehealth execution, workforce execution, job application, referral, credential, transportation dispatch, emergency, location, camera, microphone, payment, marketplace, or execution APIs.

## Relationship To Sprint AD2

Sprint AD2 defines the default-off Workforce Mode feature flag contract. Sprint AD3 proves the contract with deterministic fixtures, including unsafe authority attempts that must normalize back to no-execution.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AD4 - Workforce Mode Runtime Absence Regression Guard`
