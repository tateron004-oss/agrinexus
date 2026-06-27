# Nexus Sprint AB3 - Mobile Clinic Mode Flag Contract Harness

Current base: `abf3ec285f3ea4b0ca84b65f93f057950aa187c4`

Sprint AB3 adds fixture, harness, documentation, and QA only. It does not load Mobile Clinic Mode into Standard User runtime, render UI, retrieve clinic or provider data, connect mobile clinics, contact providers or clinicians, schedule visits, dispatch transportation, dispatch emergency help, share location, activate camera or microphone, process payments, access medical records, write storage, write audit events, request permissions, make live provider claims, give medical advice, diagnose, prescribe, or execute actions.

## Added Artifacts

- `fixtures/nexus/mobile-clinic-mode-feature-flags.json`
- `scripts/nexus-sprint-ab3-mobile-clinic-mode-flag-contract-harness.js`

## Fixture Coverage

The fixture set covers:

- default-off state;
- flag-on visible-only local/test state;
- unsafe authority attempt;
- enabled without visible permission.

Every fixture must preserve:

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

## Runtime Boundary

The harness is a Node QA utility only. It must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

The harness must not include DOM, storage, network, provider handoff, permissions, navigation, native bridge, workflow, health execution, telehealth execution, mobile clinic execution, scheduling, transportation, emergency, location, camera, microphone, payment, dispatch, or execution APIs.

## Relationship To Sprint AB2

Sprint AB2 defines the default-off Mobile Clinic Mode feature flag contract. Sprint AB3 proves the contract with deterministic fixtures, including unsafe authority attempts that must normalize back to no-execution.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AB4 - Mobile Clinic Mode Runtime Absence Regression Guard`
