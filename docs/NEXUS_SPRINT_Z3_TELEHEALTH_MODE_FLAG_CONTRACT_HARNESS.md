# Nexus Sprint Z3 - Telehealth Mode Flag Contract Harness

Current base: `bdf1f9dfdb0efdff18fbe1f14e99a5f9352b8e92`

Sprint Z3 adds fixture, harness, documentation, and QA only. It does not load Telehealth Mode into Standard User runtime, render UI, retrieve clinic or provider data, connect telehealth, contact providers or clinicians, schedule appointments, start telehealth sessions, refill prescriptions, share location, activate camera or microphone, dispatch transportation, dispatch emergency help, process payments, write storage, write audit events, request permissions, make live provider claims, give medical advice, diagnose, prescribe, or execute actions.

## Added Artifacts

- `fixtures/nexus/telehealth-mode-feature-flags.json`
- `scripts/nexus-sprint-z3-telehealth-mode-flag-contract-harness.js`

## Fixture Coverage

The fixture set covers:

- default-off state;
- flag-on visible-only local/test state;
- unsafe authority attempt;
- enabled without visible permission.

Every fixture must preserve:

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

## Runtime Boundary

The harness is a Node QA utility only. It must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

The harness must not include DOM, storage, network, provider handoff, permissions, navigation, native bridge, workflow, health execution, telehealth execution, pharmacy, prescription, scheduling, location, camera, microphone, payment, dispatch, or execution APIs.

## Relationship To Sprint Z2

Sprint Z2 defines the default-off Telehealth Mode feature flag contract. Sprint Z3 proves the contract with deterministic fixtures, including unsafe authority attempts that must normalize back to visible-only/no-execution.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint Z4 - Telehealth Mode Runtime Absence Regression Guard`
