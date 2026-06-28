# Nexus Sprint AK3 - Africa Regional Deployment Mode Flag Contract Harness

Current base: `4e59d548b1a06318705cdd096fbc9a2b88095c30`

Sprint AK3 adds documentation, fixture, and deterministic QA only. It does not load Africa Regional Deployment Mode into Standard User runtime, render regional UI, activate country kits, route by jurisdiction, enable local language runtime, sync regional sources, write storage, write audit records, retrieve provider, clinic, telehealth, pharmacy, scheduling, medical record, FHIR, prescription, location, camera, microphone, communications, transportation, health, marketplace, emergency, identity, account, profile, or regulated data, connect providers, contact providers, create telehealth sessions, schedule appointments, request prescription refills, access medical records, share location, activate camera or microphone, process payments, execute marketplace transactions, make local provider availability claims, make country coverage claims, give medical advice, diagnose, prescribe, dispatch transportation, dispatch emergency help, or execute actions.

## Added Artifacts

- `fixtures/nexus/africa-regional-deployment-mode-feature-flags.json`
- `scripts/nexus-sprint-ak3-africa-regional-deployment-mode-flag-contract-harness.js`

## Fixture Coverage

The fixture set covers:

- default-off state;
- flag-on visible-only local/test state;
- unsafe authority attempt;
- enabled without visible permission.

The unsafe authority fixture uses an explicit `unsafeAuthorityAttempt` marker that the harness expands into every protected Africa Regional Deployment Mode flag field before normalization. This keeps the fixture readable while still proving that all protected authority fields normalize back to false.

Every fixture must preserve:

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

## Runtime Boundary

The harness is a Node QA utility only. It must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

The harness must not include DOM, storage, network, provider handoff, permissions, navigation, native bridge, workflow, regional routing, country kit activation, local language runtime, source sync, health execution, telehealth execution, pharmacy execution, medical record access, provider contact, scheduling, location, camera, microphone, payment, transportation dispatch, emergency, marketplace transaction, country coverage claim execution, local provider claim execution, or execution APIs.

## Relationship To Sprint AK2

Sprint AK2 defines the default-off Africa Regional Deployment Mode feature flag contract. Sprint AK3 proves the contract with deterministic fixtures, including unsafe authority attempts that must normalize back to no-execution.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AK4 - Africa Regional Deployment Mode Runtime Absence Regression Guard`
