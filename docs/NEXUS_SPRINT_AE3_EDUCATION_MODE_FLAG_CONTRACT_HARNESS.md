# Nexus Sprint AE3 - Education Mode Flag Contract Harness

Current base: `04d7a71cb5bcb81289322073dc635c20bda1a219`

Sprint AE3 adds documentation, fixture, and deterministic QA only. It does not load Education Mode into Standard User runtime, render UI, retrieve education, content provider, training provider, certification provider, enrollment, identity, payment, communications, transportation, health, emergency, or FHIR data, connect education providers, contact providers or training partners, enroll users in courses, register users for programs, issue certificates, share location, activate camera or microphone, process payments, access medical records, write storage, write audit events, request permissions, make live provider claims, give medical advice, diagnose, prescribe, dispatch transportation, dispatch emergency help, or execute actions.

## Added Artifacts

- `fixtures/nexus/education-mode-feature-flags.json`
- `scripts/nexus-sprint-ae3-education-mode-flag-contract-harness.js`

## Fixture Coverage

The fixture set covers:

- default-off state;
- flag-on visible-only local/test state;
- unsafe authority attempt;
- enabled without visible permission.

Every fixture must preserve:

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

## Runtime Boundary

The harness is a Node QA utility only. It must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

The harness must not include DOM, storage, network, provider handoff, permissions, navigation, native bridge, workflow, health execution, telehealth execution, education execution, course enrollment, registration, certification, transportation dispatch, emergency, location, camera, microphone, payment, marketplace, or execution APIs.

## Relationship To Sprint AE2

Sprint AE2 defines the default-off Education Mode feature flag contract. Sprint AE3 proves the contract with deterministic fixtures, including unsafe authority attempts that must normalize back to no-execution.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AE4 - Education Mode Runtime Absence Regression Guard`
