# Nexus Sprint Y3 - Rural Health Mode Flag Contract Harness

Current base: `0104bb73c3d8494e2243380ad5f5a5524c1ce6ff`

Sprint Y3 adds fixture, harness, documentation, and QA only. It does not load Rural Health Mode into Standard User runtime, render UI, retrieve clinic or provider data, connect telehealth, contact providers, schedule appointments, refill prescriptions, share location, activate camera or microphone, dispatch transportation, dispatch emergency help, process payments, write storage, write audit events, request permissions, make live provider claims, give medical advice, diagnose, prescribe, or execute actions.

## Added Artifacts

- `fixtures/nexus/rural-health-mode-feature-flags.json`
- `scripts/nexus-sprint-y3-rural-health-mode-flag-contract-harness.js`

## Fixture Coverage

The fixture set covers:

- default-off state;
- flag-on visible-only local/test state;
- unsafe authority attempt;
- enabled without visible permission.

Every fixture must preserve:

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

## Runtime Boundary

The harness is a Node QA utility only. It must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

The harness must not include DOM, storage, network, provider handoff, permissions, navigation, native bridge, workflow, health execution, telehealth, pharmacy, prescription, location, camera, microphone, payment, dispatch, or execution APIs.

## Relationship To Sprint Y2

Sprint Y2 defines the default-off Rural Health Mode feature flag contract. Sprint Y3 proves the contract with deterministic fixtures, including unsafe authority attempts that must normalize back to visible-only/no-execution.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint Y4 - Rural Health Mode Runtime Absence Regression Guard`
