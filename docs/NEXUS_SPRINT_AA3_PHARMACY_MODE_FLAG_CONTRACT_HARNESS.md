# Nexus Sprint AA3 - Pharmacy Mode Flag Contract Harness

Current base: `a60e2a5aa4df5862b7b3b71c63a4a385400d1841`

Sprint AA3 adds fixture, harness, documentation, and QA only. It does not load Pharmacy Mode into Standard User runtime, render UI, retrieve pharmacy or provider data, connect pharmacies, contact providers or pharmacists, schedule appointments, execute prescriptions or refills, process payments or insurance, share location, activate camera or microphone, dispatch transportation, dispatch emergency help, write storage, write audit events, request permissions, make live provider claims, give medical advice, give medication advice, give dosage advice, diagnose, prescribe, or execute actions.

## Added Artifacts

- `fixtures/nexus/pharmacy-mode-feature-flags.json`
- `scripts/nexus-sprint-aa3-pharmacy-mode-flag-contract-harness.js`

## Fixture Coverage

The fixture set covers:

- default-off state;
- flag-on visible-only local/test state;
- unsafe authority attempt;
- enabled without visible permission.

Every fixture must preserve:

- `pharmacyModeReviewAllowed: false`;
- `pharmacySupportPreviewAllowed: false`;
- `prescriptionReadinessPreviewAllowed: false`;
- `refillReadinessPreviewAllowed: false`;
- `pharmacyProviderDirectoryPreviewAllowed: false`;
- `medicationSafetyBoundaryPreviewAllowed: false`;
- `paymentInsuranceBoundaryPreviewAllowed: false`;
- `pharmacyModeRuntimeAllowed: false`;
- `livePharmacyModeRuntimeAllowed: false`;
- `healthConnectorRuntimeAllowed: false`;
- `clinicConnectorRuntimeAllowed: false`;
- `telehealthConnectorRuntimeAllowed: false`;
- `pharmacyConnectorRuntimeAllowed: false`;
- `pharmacyProviderConnectorRuntimeAllowed: false`;
- `prescriptionConnectorRuntimeAllowed: false`;
- `refillConnectorRuntimeAllowed: false`;
- `medicationSafetyConnectorRuntimeAllowed: false`;
- `paymentInsuranceConnectorRuntimeAllowed: false`;
- `prescriptionRefillRuntimeAllowed: false`;
- `appointmentSchedulingAllowed: false`;
- `transportationDispatchAllowed: false`;
- `emergencyDispatchAllowed: false`;
- `medicalRecordsFhirRuntimeAllowed: false`;
- `medicalAdviceAllowed: false`;
- `diagnosisClaimAllowed: false`;
- `prescriptionInstructionAllowed: false`;
- `dosageInstructionAllowed: false`;
- `refillExecutionAllowed: false`;
- `providerContactAllowed: false`;
- `pharmacistContactAllowed: false`;
- `locationSharingAllowed: false`;
- `cameraActivationAllowed: false`;
- `microphoneActivationAllowed: false`;
- `paymentExecutionAllowed: false`;
- `insuranceProcessingAllowed: false`;
- `marketplaceTransactionAllowed: false`;
- `identityAccountProfileActionAllowed: false`;
- `communicationsExecutionAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserPharmacyModeMutationAllowed: false`;
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

The harness must not include DOM, storage, network, provider handoff, permissions, navigation, native bridge, workflow, health execution, telehealth execution, pharmacy execution, prescription, refill, payment, insurance, location, camera, microphone, dispatch, or execution APIs.

## Relationship To Sprint AA2

Sprint AA2 defines the default-off Pharmacy Mode feature flag contract. Sprint AA3 proves the contract with deterministic fixtures, including unsafe authority attempts that must normalize back to visible-only/no-execution.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AA4 - Pharmacy Mode Runtime Absence Regression Guard`
