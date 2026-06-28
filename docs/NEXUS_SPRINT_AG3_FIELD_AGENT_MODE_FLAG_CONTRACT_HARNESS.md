# Nexus Sprint AG3 - Field Agent Mode Flag Contract Harness

Current base: `5f227aedb33a6cf0ea5030ea45c23ac16e95adc6`

Sprint AG3 adds documentation, fixture, and deterministic QA only. It does not load Field Agent Mode into Standard User runtime, render UI, retrieve field, field source, offline capture, survey, case intake, task assignment, location, camera, microphone, provider, supervisor, program partner, communications, transportation, health, marketplace, emergency, or FHIR data, connect providers, contact supervisors or field partners, submit offline capture, dispatch field agents, create cases, assign tasks, share location, activate camera or microphone, process payments, write storage, write audit events, request permissions, make live field claims, give medical advice, diagnose, prescribe, dispatch transportation, dispatch emergency help, or execute actions.

## Added Artifacts

- `fixtures/nexus/field-agent-mode-feature-flags.json`
- `scripts/nexus-sprint-ag3-field-agent-mode-flag-contract-harness.js`

## Fixture Coverage

The fixture set covers:

- default-off state;
- flag-on visible-only local/test state;
- unsafe authority attempt;
- enabled without visible permission.

Every fixture must preserve:

- `fieldAgentModeReviewAllowed: false`;
- `fieldSupportPreviewAllowed: false`;
- `fieldSourcePreviewAllowed: false`;
- `offlineCapturePreviewAllowed: false`;
- `surveyPreviewAllowed: false`;
- `caseIntakePreviewAllowed: false`;
- `taskAssignmentPreviewAllowed: false`;
- `supervisorDirectoryPreviewAllowed: false`;
- `programDirectoryPreviewAllowed: false`;
- `locationBoundaryPreviewAllowed: false`;
- `cameraBoundaryPreviewAllowed: false`;
- `microphoneBoundaryPreviewAllowed: false`;
- `identityBoundaryPreviewAllowed: false`;
- `communicationsBoundaryPreviewAllowed: false`;
- `transportationBoundaryPreviewAllowed: false`;
- `emergencyBoundaryPreviewAllowed: false`;
- `fieldAgentModeRuntimeAllowed: false`;
- `liveFieldAgentModeRuntimeAllowed: false`;
- `fieldConnectorRuntimeAllowed: false`;
- `fieldSourceConnectorRuntimeAllowed: false`;
- `offlineCaptureConnectorRuntimeAllowed: false`;
- `surveyConnectorRuntimeAllowed: false`;
- `caseIntakeConnectorRuntimeAllowed: false`;
- `taskAssignmentConnectorRuntimeAllowed: false`;
- `locationConnectorRuntimeAllowed: false`;
- `cameraConnectorRuntimeAllowed: false`;
- `microphoneConnectorRuntimeAllowed: false`;
- `providerConnectorRuntimeAllowed: false`;
- `communicationsConnectorRuntimeAllowed: false`;
- `transportationConnectorRuntimeAllowed: false`;
- `healthConnectorRuntimeAllowed: false`;
- `marketplaceConnectorRuntimeAllowed: false`;
- `fieldDispatchAllowed: false`;
- `offlineCaptureSubmissionAllowed: false`;
- `caseCreationAllowed: false`;
- `taskAssignmentAllowed: false`;
- `providerContactAllowed: false`;
- `supervisorContactAllowed: false`;
- `programPartnerContactAllowed: false`;
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
- `standardUserFieldAgentModeMutationAllowed: false`;
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

The harness must not include DOM, storage, network, provider handoff, permissions, navigation, native bridge, workflow, health execution, telehealth execution, marketplace transaction, field dispatch, offline capture submission, case creation, task assignment, provider contact, supervisor contact, program partner contact, location, camera, microphone, payment, transportation dispatch, emergency, or execution APIs.

## Relationship To Sprint AG2

Sprint AG2 defines the default-off Field Agent Mode feature flag contract. Sprint AG3 proves the contract with deterministic fixtures, including unsafe authority attempts that must normalize back to no-execution.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AG4 - Field Agent Mode Runtime Absence Regression Guard`
