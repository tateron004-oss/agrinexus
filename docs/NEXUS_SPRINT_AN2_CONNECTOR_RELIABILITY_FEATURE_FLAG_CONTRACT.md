# Nexus Sprint AN2 - Connector Reliability Feature Flag Contract

Current base: `0c2f9f00ae22543cc22feae0938032d69263e3a5`

Sprint AN2 adds a standalone inert contract module and deterministic QA only. It defines a default-off feature flag boundary for any future Connector Reliability visible behavior while preserving the current Standard User runtime.

## Feature Flag Name

`NEXUS_CONNECTOR_RELIABILITY_VISIBLE_ENABLED`

## Default State

- `enabled: false`
- `visibleUiAllowed: false`
- `noExecution: true`

Every protected Connector Reliability authority field defaults to `false`, including connector health review, retry/fallback previews, provider availability previews, connector polling, retry execution, fallback execution, stale data alerts, admin connector queues, provider handoff, regulated workflows, storage writes, backend writes, network calls, and execution authority.

## Contract Module

The inert module is:

`public/nexus-connector-reliability-feature-flag.js`

It exports:

- `CONNECTOR_RELIABILITY_FEATURE_FLAG_NAME`;
- `DEFAULT_CONNECTOR_RELIABILITY_FEATURE_FLAG_STATE`;
- `PROTECTED_CONNECTOR_RELIABILITY_FLAG_FIELDS`;
- `normalizeConnectorReliabilityFeatureFlagState`;
- `isConnectorReliabilityVisibleFeatureEnabled`.

## Important Boundary

This feature flag is not a runtime loader, connector poller, retry engine, fallback engine, connector health dashboard, stale-data alerting system, partner availability monitor, admin connector queue, provider connector, permission grant, consent grant, audit approval, or execution grant.

`visibleUiAllowed: true` may only mean a future reviewed UI surface is allowed to become visible. It must not enable connector polling, retry execution, fallback execution, stale data alerts, partner availability monitoring, admin connector queues, provider handoff, calls, messages, payments, marketplace transactions, location sharing, camera or microphone activation, medical advice, diagnosis, prescription instructions, emergency dispatch, storage writes, backend writes, network calls, or action execution.

## Relationship To Sprint AN1

Sprint AN1 defined the runtime activation readiness gate. Sprint AN2 gives future work a deterministic default-off flag contract without changing Standard User behavior.

## Runtime Absence Requirements

Sprint AN2 must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

No Standard User route, typed command, voice command, workflow modal, health path, telehealth path, map/location path, marketplace path, provider path, native bridge path, or backend route may consume this flag in Sprint AN2.

## Protected No-Execution Fields

The contract protects these fields as `false`:

- `connectorReliabilityReviewAllowed: false`
- `connectorReadinessPreviewAllowed: false`
- `connectorHealthPreviewAllowed: false`
- `connectorStatusPreviewAllowed: false`
- `connectorAvailabilityPreviewAllowed: false`
- `providerAvailabilityPreviewAllowed: false`
- `sourceAvailabilityPreviewAllowed: false`
- `partnerAvailabilityPreviewAllowed: false`
- `retryPolicyPreviewAllowed: false`
- `fallbackPolicyPreviewAllowed: false`
- `safeFallbackPreviewAllowed: false`
- `sourceFreshnessPreviewAllowed: false`
- `confidenceLabelPreviewAllowed: false`
- `sourceAttributionPreviewAllowed: false`
- `auditRequirementPreviewAllowed: false`
- `privacyBoundaryPreviewAllowed: false`
- `dataMinimizationPreviewAllowed: false`
- `redactionPreviewAllowed: false`
- `retentionPolicyPreviewAllowed: false`
- `rolePermissionPreviewAllowed: false`
- `staleDataAlertPreviewAllowed: false`
- `adminConnectorQueuePreviewAllowed: false`
- `providerDirectoryPreviewAllowed: false`
- `clinicDirectoryPreviewAllowed: false`
- `telehealthBoundaryPreviewAllowed: false`
- `pharmacyBoundaryPreviewAllowed: false`
- `agricultureResourcePreviewAllowed: false`
- `workforceResourcePreviewAllowed: false`
- `communityServicePreviewAllowed: false`
- `transportationResourcePreviewAllowed: false`
- `marketplaceBoundaryPreviewAllowed: false`
- `healthBoundaryPreviewAllowed: false`
- `medicalRecordBoundaryPreviewAllowed: false`
- `locationBoundaryPreviewAllowed: false`
- `identityBoundaryPreviewAllowed: false`
- `communicationsBoundaryPreviewAllowed: false`
- `emergencyBoundaryPreviewAllowed: false`
- `connectorReliabilityRuntimeAllowed: false`
- `liveConnectorReliabilityRuntimeAllowed: false`
- `connectorPollingRuntimeAllowed: false`
- `connectorRetryRuntimeAllowed: false`
- `connectorFallbackRuntimeAllowed: false`
- `connectorHealthDashboardRuntimeAllowed: false`
- `sourceAvailabilityRuntimeAllowed: false`
- `providerAvailabilityRuntimeAllowed: false`
- `partnerAvailabilityRuntimeAllowed: false`
- `staleDataAlertRuntimeAllowed: false`
- `adminConnectorQueueRuntimeAllowed: false`
- `providerConnectorRuntimeAllowed: false`
- `clinicConnectorRuntimeAllowed: false`
- `telehealthConnectorRuntimeAllowed: false`
- `pharmacyConnectorRuntimeAllowed: false`
- `agricultureConnectorRuntimeAllowed: false`
- `workforceConnectorRuntimeAllowed: false`
- `communityServiceConnectorRuntimeAllowed: false`
- `transportationConnectorRuntimeAllowed: false`
- `marketplaceConnectorRuntimeAllowed: false`
- `healthConnectorRuntimeAllowed: false`
- `medicalRecordConnectorRuntimeAllowed: false`
- `fhirConnectorRuntimeAllowed: false`
- `locationConnectorRuntimeAllowed: false`
- `identityConnectorRuntimeAllowed: false`
- `communicationsConnectorRuntimeAllowed: false`
- `emergencyConnectorRuntimeAllowed: false`
- `connectorPollingAllowed: false`
- `retryExecutionAllowed: false`
- `fallbackExecutionAllowed: false`
- `sourceSyncAllowed: false`
- `providerSyncAllowed: false`
- `partnerHealthMonitoringAllowed: false`
- `adminConnectorQueueAllowed: false`
- `connectorDrivenActionAllowed: false`
- `providerContactAllowed: false`
- `clinicContactAllowed: false`
- `pharmacyContactAllowed: false`
- `telehealthSessionCreationAllowed: false`
- `appointmentSchedulingAllowed: false`
- `prescriptionRefillAllowed: false`
- `medicalRecordAccessAllowed: false`
- `fhirAccessAllowed: false`
- `locationSharingAllowed: false`
- `cameraActivationAllowed: false`
- `microphoneActivationAllowed: false`
- `paymentExecutionAllowed: false`
- `marketplaceTransactionAllowed: false`
- `identityAccountProfileActionAllowed: false`
- `communicationsExecutionAllowed: false`
- `transportationDispatchAllowed: false`
- `emergencyDispatchAllowed: false`
- `medicalAdviceAllowed: false`
- `diagnosisClaimAllowed: false`
- `prescriptionInstructionAllowed: false`
- `unsupportedLiveConnectorClaimAllowed: false`
- `unsupportedProviderAvailabilityClaimAllowed: false`
- `unsupportedConnectorHealthClaimAllowed: false`
- `unsupportedLiveDataClaimAllowed: false`
- `completedActionClaimAllowed: false`
- `policyBypassAllowed: false`
- `confirmationBypassAllowed: false`
- `permissionBypassAllowed: false`
- `roleBypassAllowed: false`
- `privacyBypassAllowed: false`
- `dataMinimizationBypassAllowed: false`
- `redactionBypassAllowed: false`
- `auditBypassAllowed: false`
- `firstTurnExecutionAllowed: false`
- `laterTurnExecutionAllowed: false`
- `standardUserConnectorMutationAllowed: false`
- `backendWriteAllowed: false`
- `storageWriteAllowed: false`
- `networkAllowed: false`
- `executionAuthority: false`

## QA Expectations

Sprint AN2 QA must verify:

- the feature flag module exists;
- the flag name is canonical;
- defaults are off and no-execution;
- unsafe authority attempts normalize back to protected `false` values;
- no runtime API, storage, network, permission, provider, native bridge, connector polling, retry, fallback, stale-data alert, or workflow execution code is present in the module;
- `public/index.html`, `public/app.js`, and `server.js` do not load the feature flag module;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

`Sprint AN3 - Connector Reliability Flag Contract Harness`
