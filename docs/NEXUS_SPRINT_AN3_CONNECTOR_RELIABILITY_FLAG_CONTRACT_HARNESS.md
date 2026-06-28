# Nexus Sprint AN3 - Connector Reliability Flag Contract Harness

Current base: `cfb1cfa1556196a59f8d98604df2ab1bf7ac4042`

Sprint AN3 adds documentation, fixture, and deterministic QA only. It does not load Connector Reliability into Standard User runtime, render connector reliability UI, poll connectors, retry connectors, apply fallbacks, render connector dashboards, create stale data alerts, monitor source availability, monitor provider availability, monitor partner availability, create admin connector queues, write storage, write audit records, retrieve provider, clinic, telehealth, pharmacy, scheduling, medical record, FHIR, prescription, location, camera, microphone, communications, transportation, health, marketplace, emergency, identity, account, profile, or regulated data, connect providers, contact providers, create telehealth sessions, schedule appointments, request prescription refills, access medical records, share location, activate camera or microphone, process payments, execute marketplace transactions, make unsupported live connector claims, make unsupported provider availability claims, make unsupported connector health claims, give medical advice, diagnose, prescribe, dispatch transportation, dispatch emergency help, or execute actions.

## Added Artifacts

- `fixtures/nexus/connector-reliability-feature-flags.json`
- `scripts/nexus-sprint-an3-connector-reliability-flag-contract-harness.js`

## Fixture Coverage

The fixture set covers:

- default-off state;
- flag-on visible-only local/test state;
- unsafe authority attempt;
- enabled without visible permission.

The unsafe authority fixture uses an explicit `unsafeAuthorityAttempt` marker that the harness expands into every protected Connector Reliability flag field before normalization. This keeps the fixture readable while still proving that all protected authority fields normalize back to false.

Every fixture must preserve:

- `connectorReliabilityReviewAllowed: false`;
- `connectorReadinessPreviewAllowed: false`;
- `connectorHealthPreviewAllowed: false`;
- `connectorStatusPreviewAllowed: false`;
- `connectorAvailabilityPreviewAllowed: false`;
- `providerAvailabilityPreviewAllowed: false`;
- `sourceAvailabilityPreviewAllowed: false`;
- `partnerAvailabilityPreviewAllowed: false`;
- `retryPolicyPreviewAllowed: false`;
- `fallbackPolicyPreviewAllowed: false`;
- `safeFallbackPreviewAllowed: false`;
- `sourceFreshnessPreviewAllowed: false`;
- `confidenceLabelPreviewAllowed: false`;
- `sourceAttributionPreviewAllowed: false`;
- `auditRequirementPreviewAllowed: false`;
- `privacyBoundaryPreviewAllowed: false`;
- `dataMinimizationPreviewAllowed: false`;
- `redactionPreviewAllowed: false`;
- `retentionPolicyPreviewAllowed: false`;
- `rolePermissionPreviewAllowed: false`;
- `staleDataAlertPreviewAllowed: false`;
- `adminConnectorQueuePreviewAllowed: false`;
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
- `connectorReliabilityRuntimeAllowed: false`;
- `liveConnectorReliabilityRuntimeAllowed: false`;
- `connectorPollingRuntimeAllowed: false`;
- `connectorRetryRuntimeAllowed: false`;
- `connectorFallbackRuntimeAllowed: false`;
- `connectorHealthDashboardRuntimeAllowed: false`;
- `sourceAvailabilityRuntimeAllowed: false`;
- `providerAvailabilityRuntimeAllowed: false`;
- `partnerAvailabilityRuntimeAllowed: false`;
- `staleDataAlertRuntimeAllowed: false`;
- `adminConnectorQueueRuntimeAllowed: false`;
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
- `connectorPollingAllowed: false`;
- `retryExecutionAllowed: false`;
- `fallbackExecutionAllowed: false`;
- `sourceSyncAllowed: false`;
- `providerSyncAllowed: false`;
- `partnerHealthMonitoringAllowed: false`;
- `adminConnectorQueueAllowed: false`;
- `connectorDrivenActionAllowed: false`;
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
- `unsupportedLiveConnectorClaimAllowed: false`;
- `unsupportedProviderAvailabilityClaimAllowed: false`;
- `unsupportedConnectorHealthClaimAllowed: false`;
- `unsupportedLiveDataClaimAllowed: false`;
- `completedActionClaimAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `roleBypassAllowed: false`;
- `privacyBypassAllowed: false`;
- `dataMinimizationBypassAllowed: false`;
- `redactionBypassAllowed: false`;
- `auditBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserConnectorMutationAllowed: false`;
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

The harness must not include DOM, storage, network, provider handoff, permissions, navigation, native bridge, workflow, connector polling, connector retry, connector fallback, connector dashboard rendering, stale data alert creation, source availability monitoring, provider availability monitoring, partner availability monitoring, admin connector queue runtime, health execution, telehealth execution, pharmacy execution, medical record access, provider contact, scheduling, location, camera, microphone, payment, transportation dispatch, emergency, marketplace transaction, unsupported live connector claim execution, unsupported provider availability claim execution, unsupported connector health claim execution, or execution APIs.

## Relationship To Sprint AN2

Sprint AN2 defines the default-off Connector Reliability feature flag contract. Sprint AN3 proves the contract with deterministic fixtures, including unsafe authority attempts that must normalize back to no-execution.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AN4 - Connector Reliability Runtime Absence Regression Guard`
