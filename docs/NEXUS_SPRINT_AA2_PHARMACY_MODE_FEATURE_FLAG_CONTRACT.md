# Nexus Sprint AA2 - Pharmacy Mode Feature Flag Contract

Current base: `e6f5ebb406b68553d594dba11a898b3c6e59296e`

Sprint AA2 adds a standalone inert contract module and deterministic QA only. It defines a default-off feature flag boundary for future Pharmacy Mode visibility, but it does not import Pharmacy Mode runtime, render UI, retrieve pharmacy or provider data, connect pharmacies, contact providers or pharmacists, schedule appointments, execute prescriptions or refills, process payments or insurance, share location, activate camera or microphone, dispatch transportation, dispatch emergency help, write storage, write audit events, request permissions, make live provider claims, give medication advice, give dosage advice, diagnose, prescribe, or execute actions.

## Feature Flag Name

`NEXUS_PHARMACY_MODE_VISIBLE_ENABLED`

This name is reserved for future controlled, permissioned Pharmacy Mode visibility work. It is not clinical authority, medical advice authority, medication advice authority, dosage authority, diagnosis authority, prescription authority, refill authority, pharmacy authority, provider contact authority, pharmacist contact authority, scheduling authority, payment authority, insurance authority, transportation authority, emergency authority, location consent, camera consent, microphone consent, user consent, audit approval, provider confirmation, pharmacist confirmation, human review approval, or execution approval.

## Default State

The feature flag defaults to:

- `enabled: false`;
- `visibleUiAllowed: false`;
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

## Contract Module

Sprint AA2 adds:

`public/nexus-pharmacy-mode-feature-flag.js`

The module exports:

- `PHARMACY_MODE_FEATURE_FLAG_NAME`;
- `DEFAULT_PHARMACY_MODE_FEATURE_FLAG_STATE`;
- `PROTECTED_PHARMACY_MODE_FLAG_FIELDS`;
- `normalizePharmacyModeFeatureFlagState`;
- `isPharmacyModeVisibleFeatureEnabled`.

The normalizer may represent a future visible-only test state when both `enabled` and `visibleUiAllowed` are explicitly true. Every protected authority field remains forced to false, and `noExecution` remains true.

## Important Boundary

The feature flag does not authorize:

- Pharmacy Mode runtime activation;
- live health, clinic, provider, pharmacist, pharmacy, prescription, refill, payment, insurance, transportation, emergency, or FHIR connector behavior;
- medical advice;
- medication advice;
- dosage advice;
- diagnosis claims;
- prescription instructions;
- refill execution;
- appointment scheduling;
- provider or pharmacist contact;
- communications execution;
- transportation dispatch;
- emergency dispatch;
- location sharing;
- camera activation;
- microphone activation;
- payment execution;
- insurance processing;
- marketplace transactions;
- identity, account, or profile actions;
- policy, confirmation, or permission bypass;
- backend writes;
- storage writes;
- network calls;
- audit writes;
- execution authority.

## Relationship To Sprint AA1

Sprint AA1 defines the runtime activation readiness gate. Sprint AA2 adds a default-off flag contract that preserves the AA1 gate. A future visible feature must still satisfy source, consent, identity, permission, approval, provider or pharmacist confirmation, human review, audit, fallback, browser validation, and deterministic QA requirements before activation.

## Runtime Absence Requirements

Sprint AA2 must not load or activate:

- `public/nexus-pharmacy-mode-feature-flag.js`;
- `NEXUS_PHARMACY_MODE_VISIBLE_ENABLED`;
- `normalizePharmacyModeFeatureFlagState`;
- `isPharmacyModeVisibleFeatureEnabled`;
- any Pharmacy Mode runtime;
- any live health connector runtime;
- any clinic, telehealth, provider, pharmacist, pharmacy, prescription, refill, payment, insurance, transportation, emergency, or FHIR runtime;
- any provider or pharmacist contact runtime;
- any location, camera, microphone, payment, marketplace, identity, account, or communications execution runtime;
- Sprint AA QA scripts.

These artifacts must remain absent from:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## QA Expectations

Sprint AA2 QA must verify:

- the feature flag contract exists;
- the flag name is reserved and default-off;
- all protected authority fields default to false;
- unsafe authority attempts normalize back to false;
- visible-only test state does not grant execution authority;
- the module does not include DOM, storage, network, provider, permission, navigation, native bridge, workflow, health execution, telehealth execution, pharmacy execution, prescription, refill, location, camera, microphone, payment, insurance, marketplace, or execution APIs;
- Standard User runtime does not load the AA2 module;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AA3 - Pharmacy Mode Flag Contract Harness`

Sprint AA3 should add deterministic fixtures proving default-off, visible-only, and unsafe authority attempts remain no-execution.
