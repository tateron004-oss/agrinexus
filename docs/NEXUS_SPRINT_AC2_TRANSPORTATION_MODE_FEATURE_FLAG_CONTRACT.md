# Nexus Sprint AC2 - Transportation Mode Feature Flag Contract

Current base: `2429e79e42b3f3aa0ad9fc56950d69ccef3e857c`

Sprint AC2 adds a standalone inert contract module and deterministic QA only. It defines a default-off feature flag boundary for future Transportation Mode visibility, but it does not import Transportation Mode runtime, render UI, retrieve transportation/provider/driver data, connect providers, contact providers or drivers, book rides, dispatch transportation, dispatch emergency help, share location, activate camera or microphone, access medical records, process payments, write storage, write audit events, request permissions, make live provider claims, give medical advice, diagnose, prescribe, or execute actions.

## Feature Flag Name

`NEXUS_TRANSPORTATION_MODE_VISIBLE_ENABLED`

This name is reserved for future controlled, permissioned Transportation Mode visibility work. It is not dispatch authority, booking authority, provider authority, driver authority, route authority, location consent, camera consent, microphone consent, user consent, audit approval, provider confirmation, driver confirmation, human review approval, payment authority, identity authority, emergency authority, medical authority, or execution approval.

## Default State

The feature flag defaults to:

- `enabled: false`;
- `visibleUiAllowed: false`;
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

## Contract Module

Sprint AC2 adds:

`public/nexus-transportation-mode-feature-flag.js`

The module exports:

- `TRANSPORTATION_MODE_FEATURE_FLAG_NAME`;
- `DEFAULT_TRANSPORTATION_MODE_FEATURE_FLAG_STATE`;
- `PROTECTED_TRANSPORTATION_MODE_FLAG_FIELDS`;
- `normalizeTransportationModeFeatureFlagState`;
- `isTransportationModeVisibleFeatureEnabled`.

The normalizer may represent a future visible-only test state when both `enabled` and `visibleUiAllowed` are explicitly true. Every protected authority field remains forced to false, and `noExecution` remains true.

## Important Boundary

The feature flag does not authorize:

- Transportation Mode runtime activation;
- live transportation, provider, driver, dispatch, route, location, clinic, telehealth, payment, emergency, or FHIR connector behavior;
- medical advice;
- diagnosis claims;
- prescription instructions;
- appointment scheduling;
- transportation booking;
- transportation dispatch;
- provider or driver contact;
- communications execution;
- location sharing;
- camera activation;
- microphone activation;
- payment execution;
- marketplace transactions;
- identity, account, or profile actions;
- policy, confirmation, or permission bypass;
- backend writes;
- storage writes;
- network calls;
- audit writes;
- execution authority.

## Relationship To Sprint AC1

Sprint AC1 defines the runtime activation readiness gate. Sprint AC2 adds a default-off flag contract that preserves the AC1 gate. A future visible feature must still satisfy source, consent, identity, permission, approval, provider or driver confirmation, human review, audit, fallback, browser validation, and deterministic QA requirements before activation.

## Runtime Absence Requirements

Sprint AC2 must not load or activate:

- `public/nexus-transportation-mode-feature-flag.js`;
- `NEXUS_TRANSPORTATION_MODE_VISIBLE_ENABLED`;
- `normalizeTransportationModeFeatureFlagState`;
- `isTransportationModeVisibleFeatureEnabled`;
- any Transportation Mode runtime;
- any live transportation, provider, driver, dispatch, route, location, clinic, telehealth, payment, emergency, or FHIR runtime;
- any provider or driver contact runtime;
- any location, camera, microphone, payment, marketplace, identity, account, or communications execution runtime;
- Sprint AC QA scripts.

These artifacts must remain absent from:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## QA Expectations

Sprint AC2 QA must verify:

- the feature flag contract exists;
- the flag name is reserved and default-off;
- all protected authority fields default to false;
- unsafe authority attempts normalize back to false;
- visible-only test state does not grant execution authority;
- the module does not include DOM, storage, network, provider, permission, navigation, native bridge, workflow, health execution, telehealth execution, transportation execution, booking, dispatch, emergency, location, camera, microphone, payment, marketplace, or execution APIs;
- Standard User runtime does not load the AC2 module;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AC3 - Transportation Mode Flag Contract Harness`

Sprint AC3 should add deterministic fixtures proving default-off, visible-only, and unsafe authority attempts remain no-execution.
