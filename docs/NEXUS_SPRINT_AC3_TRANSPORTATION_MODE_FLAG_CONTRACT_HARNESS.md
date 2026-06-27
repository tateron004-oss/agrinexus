# Nexus Sprint AC3 - Transportation Mode Flag Contract Harness

Current base: `6d9db6589f4218bd3d259481c94fa2f58b127a77`

Sprint AC3 adds documentation, fixture, and deterministic QA only. It does not load Transportation Mode into Standard User runtime, render UI, retrieve transportation, provider, driver, route, location, clinic, telehealth, payment, emergency, or FHIR data, connect transportation providers, contact providers or drivers, book rides, dispatch transportation, dispatch emergency help, schedule appointments, share location, activate camera or microphone, process payments, access medical records, write storage, write audit events, request permissions, make live provider claims, give medical advice, diagnose, prescribe, or execute actions.

## Added Artifacts

- `fixtures/nexus/transportation-mode-feature-flags.json`
- `scripts/nexus-sprint-ac3-transportation-mode-flag-contract-harness.js`

## Fixture Coverage

The fixture set covers:

- default-off state;
- flag-on visible-only local/test state;
- unsafe authority attempt;
- enabled without visible permission.

Every fixture must preserve:

- `transportationModeReviewAllowed: false`;
- `transportationAccessPreviewAllowed: false`;
- `routeReadinessPreviewAllowed: false`;
- `providerDirectoryPreviewAllowed: false`;
- `driverDirectoryPreviewAllowed: false`;
- `locationConsentBoundaryPreviewAllowed: false`;
- `paymentBoundaryPreviewAllowed: false`;
- `emergencyBoundaryPreviewAllowed: false`;
- `transportationModeRuntimeAllowed: false`;
- `liveTransportationModeRuntimeAllowed: false`;
- `transportationConnectorRuntimeAllowed: false`;
- `transportationProviderConnectorRuntimeAllowed: false`;
- `driverConnectorRuntimeAllowed: false`;
- `dispatchConnectorRuntimeAllowed: false`;
- `routeConnectorRuntimeAllowed: false`;
- `locationConnectorRuntimeAllowed: false`;
- `clinicConnectorRuntimeAllowed: false`;
- `telehealthConnectorRuntimeAllowed: false`;
- `paymentConnectorRuntimeAllowed: false`;
- `appointmentSchedulingAllowed: false`;
- `transportationBookingAllowed: false`;
- `transportationDispatchAllowed: false`;
- `emergencyDispatchAllowed: false`;
- `medicalRecordsFhirRuntimeAllowed: false`;
- `medicalAdviceAllowed: false`;
- `diagnosisClaimAllowed: false`;
- `prescriptionInstructionAllowed: false`;
- `providerContactAllowed: false`;
- `driverContactAllowed: false`;
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
- `standardUserTransportationModeMutationAllowed: false`;
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

The harness must not include DOM, storage, network, provider handoff, permissions, navigation, native bridge, workflow, health execution, telehealth execution, transportation execution, booking, dispatch, emergency, location, camera, microphone, payment, marketplace, or execution APIs.

## Relationship To Sprint AC2

Sprint AC2 defines the default-off Transportation Mode feature flag contract. Sprint AC3 proves the contract with deterministic fixtures, including unsafe authority attempts that must normalize back to no-execution.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AC4 - Transportation Mode Runtime Absence Regression Guard`
