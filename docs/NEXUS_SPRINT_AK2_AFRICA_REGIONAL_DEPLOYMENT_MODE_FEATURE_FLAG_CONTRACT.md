# Nexus Sprint AK2 - Africa Regional Deployment Mode Feature Flag Contract

Current base: `96ea4444d3a180e871e32041821ecdf658902c7c`

Sprint AK2 adds a standalone inert contract module and deterministic QA only. It defines a default-off feature flag boundary for future Africa Regional Deployment Mode visibility, but it does not import Africa Regional Deployment Mode runtime, render regional UI, activate country kits, route by jurisdiction, enable local language runtime, sync regional sources, retrieve provider/clinic/telehealth/pharmacy/location/medical-record data, contact providers, schedule appointments, create telehealth sessions, request prescription refills, access medical records, share location, activate camera or microphone, process payments, execute marketplace transactions, make live data claims, make local provider availability claims, request permissions, make network calls, or execute actions.

## Feature Flag Name

`NEXUS_AFRICA_REGIONAL_DEPLOYMENT_MODE_VISIBLE_ENABLED`

This name is reserved for future controlled, permissioned Africa Regional Deployment Mode visibility work. It is not regional runtime authority, country kit authority, jurisdiction authority, local language authority, partner directory authority, provider authority, clinic authority, telehealth authority, pharmacy authority, scheduling authority, medical record authority, FHIR authority, prescription authority, location authority, camera authority, microphone authority, communications authority, transportation authority, emergency authority, medical authority, marketplace authority, identity authority, user consent, audit approval, partner approval, jurisdiction approval, language review approval, human review approval, or execution approval.

## Default State

The feature flag defaults to:

- `enabled: false`;
- `visibleUiAllowed: false`;
- `africaRegionalDeploymentModeReviewAllowed: false`;
- `regionalGuidancePreviewAllowed: false`;
- `countryKitPreviewAllowed: false`;
- `jurisdictionBoundaryPreviewAllowed: false`;
- `sourceAttributionPreviewAllowed: false`;
- `freshnessConfidencePreviewAllowed: false`;
- `localLanguagePreviewAllowed: false`;
- `partnerDirectoryPreviewAllowed: false`;
- `providerDirectoryPreviewAllowed: false`;
- `clinicDirectoryPreviewAllowed: false`;
- `telehealthBoundaryPreviewAllowed: false`;
- `pharmacyBoundaryPreviewAllowed: false`;
- `agricultureResourcePreviewAllowed: false`;
- `workforceResourcePreviewAllowed: false`;
- `communityServicePreviewAllowed: false`;
- `transportationResourcePreviewAllowed: false`;
- `marketplaceBoundaryPreviewAllowed: false`;
- `healthBoundaryPreviewAllowed: false`;
- `medicalRecordBoundaryPreviewAllowed: false`;
- `locationBoundaryPreviewAllowed: false`;
- `identityBoundaryPreviewAllowed: false`;
- `communicationsBoundaryPreviewAllowed: false`;
- `emergencyBoundaryPreviewAllowed: false`;
- `africaRegionalDeploymentModeRuntimeAllowed: false`;
- `liveAfricaRegionalDeploymentModeRuntimeAllowed: false`;
- `regionalCountryKitRuntimeAllowed: false`;
- `jurisdictionRoutingRuntimeAllowed: false`;
- `localLanguageRuntimeAllowed: false`;
- `regionalSourceConnectorRuntimeAllowed: false`;
- `partnerConnectorRuntimeAllowed: false`;
- `providerConnectorRuntimeAllowed: false`;
- `clinicConnectorRuntimeAllowed: false`;
- `telehealthConnectorRuntimeAllowed: false`;
- `pharmacyConnectorRuntimeAllowed: false`;
- `agricultureConnectorRuntimeAllowed: false`;
- `workforceConnectorRuntimeAllowed: false`;
- `communityServiceConnectorRuntimeAllowed: false`;
- `transportationConnectorRuntimeAllowed: false`;
- `marketplaceConnectorRuntimeAllowed: false`;
- `healthConnectorRuntimeAllowed: false`;
- `medicalRecordConnectorRuntimeAllowed: false`;
- `fhirConnectorRuntimeAllowed: false`;
- `locationConnectorRuntimeAllowed: false`;
- `identityConnectorRuntimeAllowed: false`;
- `communicationsConnectorRuntimeAllowed: false`;
- `emergencyConnectorRuntimeAllowed: false`;
- `countryKitActivationAllowed: false`;
- `jurisdictionRoutingAllowed: false`;
- `regionalPreferenceMutationAllowed: false`;
- `regionalSourceSyncAllowed: false`;
- `partnerVerificationBypassAllowed: false`;
- `jurisdictionBypassAllowed: false`;
- `languageReviewBypassAllowed: false`;
- `providerContactAllowed: false`;
- `clinicContactAllowed: false`;
- `pharmacyContactAllowed: false`;
- `telehealthSessionCreationAllowed: false`;
- `appointmentSchedulingAllowed: false`;
- `prescriptionRefillAllowed: false`;
- `medicalRecordAccessAllowed: false`;
- `fhirAccessAllowed: false`;
- `locationSharingAllowed: false`;
- `cameraActivationAllowed: false`;
- `microphoneActivationAllowed: false`;
- `paymentExecutionAllowed: false`;
- `marketplaceTransactionAllowed: false`;
- `identityAccountProfileActionAllowed: false`;
- `communicationsExecutionAllowed: false`;
- `transportationDispatchAllowed: false`;
- `emergencyDispatchAllowed: false`;
- `medicalAdviceAllowed: false`;
- `diagnosisClaimAllowed: false`;
- `prescriptionInstructionAllowed: false`;
- `unsupportedCountryCoverageClaimAllowed: false`;
- `unsupportedLocalProviderClaimAllowed: false`;
- `unsupportedLiveDataClaimAllowed: false`;
- `completedActionClaimAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `roleBypassAllowed: false`;
- `auditBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserRegionalModeMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

## Contract Module

Sprint AK2 adds:

`public/nexus-africa-regional-deployment-mode-feature-flag.js`

The module exports:

- `AFRICA_REGIONAL_DEPLOYMENT_MODE_FEATURE_FLAG_NAME`;
- `DEFAULT_AFRICA_REGIONAL_DEPLOYMENT_MODE_FEATURE_FLAG_STATE`;
- `PROTECTED_AFRICA_REGIONAL_DEPLOYMENT_MODE_FLAG_FIELDS`;
- `normalizeAfricaRegionalDeploymentModeFeatureFlagState`;
- `isAfricaRegionalDeploymentModeVisibleFeatureEnabled`.

The normalizer may represent a future visible-only test state when both `enabled` and `visibleUiAllowed` are explicitly true. Every protected authority field remains forced to false, and `noExecution` remains true.

## Important Boundary

The feature flag does not authorize:

- Africa Regional Deployment Mode runtime activation;
- regional country kit runtime;
- jurisdiction routing runtime;
- local language runtime;
- regional source connector runtime;
- partner connector runtime;
- provider, clinic, telehealth, pharmacy, scheduling, medical record, FHIR, prescription, location, camera, microphone, communications, transportation, health, marketplace, emergency, or regulated connector behavior;
- unsupported local provider claims;
- unsupported country coverage claims;
- unsupported live data claims;
- completed action claims;
- country kit activation;
- jurisdiction routing;
- regional preference mutation;
- regional source sync;
- partner verification bypass;
- jurisdiction bypass;
- language review bypass;
- provider contact;
- clinic contact;
- pharmacy contact;
- appointment scheduling;
- telehealth session creation;
- prescription refill workflow;
- medical record access;
- FHIR access;
- location sharing;
- camera activation;
- microphone activation;
- payment execution;
- marketplace transaction execution;
- identity, account, or profile actions;
- communications execution;
- transportation dispatch;
- emergency dispatch;
- medical advice;
- diagnosis claims;
- prescription instructions;
- policy, confirmation, permission, role, or audit bypass;
- backend writes;
- storage writes;
- network calls;
- execution authority.

## Relationship To Sprint AK1

Sprint AK1 defines the runtime activation readiness gate. Sprint AK2 adds a default-off flag contract that preserves the AK1 gate. A future visible feature must still satisfy source, jurisdiction, partner, language review, consent, role, permission, approval, freshness, confidence, audit, fallback, browser validation, and deterministic QA requirements before activation.

## Runtime Absence Requirements

Sprint AK2 must not load or activate:

- `public/nexus-africa-regional-deployment-mode-feature-flag.js`;
- `NEXUS_AFRICA_REGIONAL_DEPLOYMENT_MODE_VISIBLE_ENABLED`;
- `NexusAfricaRegionalDeploymentModeFeatureFlagContract`;
- `normalizeAfricaRegionalDeploymentModeFeatureFlagState`;
- `isAfricaRegionalDeploymentModeVisibleFeatureEnabled`;
- any Africa Regional Deployment Mode runtime;
- any regional country kit, jurisdiction routing, local language, regional source sync, partner connector, provider, clinic, telehealth, pharmacy, scheduling, medical record, FHIR, prescription, location, camera, microphone, communications, transportation, health, marketplace, emergency, or regulated runtime;
- Sprint AK QA scripts.

These artifacts must remain absent from:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## QA Expectations

Sprint AK2 QA must verify:

- the feature flag contract exists;
- the flag name is reserved and default-off;
- all protected authority fields default to false;
- unsafe authority attempts normalize back to false;
- visible-only test state does not grant execution authority;
- the module does not include DOM, storage, network, provider, permission, navigation, native bridge, workflow, health execution, telehealth execution, pharmacy execution, medical record access, provider contact, scheduling, location, camera, microphone, payment, transportation, emergency, marketplace, regional routing, country kit activation, local language runtime, source sync, or execution APIs;
- Standard User runtime does not load the AK2 module;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AK3 - Africa Regional Deployment Mode Flag Contract Harness`

Sprint AK3 should add deterministic fixtures proving default-off, visible-only, and unsafe authority attempts remain no-execution.
