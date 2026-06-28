# Nexus Sprint AJ3 - Offline Low-Bandwidth Mode Flag Contract Harness

Current base: `b09668700323ead8650a74aea1e94c56b389a89e`

Sprint AJ3 adds documentation, fixture, and deterministic QA only. It does not load Offline Low-Bandwidth Mode into Standard User runtime, render offline UI, change service worker behavior, mutate caches, sync sources, queue actions, write storage, write audit records, retrieve provider, clinic, telehealth, pharmacy, scheduling, medical record, FHIR, prescription, location, camera, microphone, communications, transportation, health, marketplace, emergency, identity, account, profile, or regulated data, connect providers, contact providers, create telehealth sessions, schedule appointments, request prescription refills, access medical records, share location, activate camera or microphone, process payments, write storage, write cache data, request permissions, make live offline claims, make current cached-data claims, give medical advice, diagnose, prescribe, dispatch transportation, dispatch emergency help, or execute actions.

## Added Artifacts

- `fixtures/nexus/offline-low-bandwidth-mode-feature-flags.json`
- `scripts/nexus-sprint-aj3-offline-low-bandwidth-mode-flag-contract-harness.js`

## Fixture Coverage

The fixture set covers:

- default-off state;
- flag-on visible-only local/test state;
- unsafe authority attempt;
- enabled without visible permission.

The unsafe authority fixture uses an explicit `unsafeAuthorityAttempt` marker that the harness expands into every protected Offline Low-Bandwidth Mode flag field before normalization. This keeps the fixture readable while still proving that all protected authority fields normalize back to false.

Every fixture must preserve:

- `offlineModePreviewAllowed: false`;
- `degradedResponsePreviewAllowed: false`;
- `staleDataPreviewAllowed: false`;
- `sourceFreshnessPreviewAllowed: false`;
- `confidenceLabelPreviewAllowed: false`;
- `cacheBoundaryPreviewAllowed: false`;
- `syncBoundaryPreviewAllowed: false`;
- `fallbackPreviewAllowed: false`;
- `offlineModeRuntimeAllowed: false`;
- `liveOfflineLowBandwidthModeRuntimeAllowed: false`;
- `offlineCacheRuntimeAllowed: false`;
- `localFirstSourceRuntimeAllowed: false`;
- `serviceWorkerCacheMutationAllowed: false`;
- `serviceWorkerRouteMutationAllowed: false`;
- `backgroundSyncAllowed: false`;
- `sourceSyncAllowed: false`;
- `connectorSyncAllowed: false`;
- `offlineQueueAllowed: false`;
- `queuedActionAllowed: false`;
- `staleDataClaimAllowed: false`;
- `currentCachedDataClaimAllowed: false`;
- `providerConnectorRuntimeAllowed: false`;
- `clinicConnectorRuntimeAllowed: false`;
- `telehealthConnectorRuntimeAllowed: false`;
- `pharmacyConnectorRuntimeAllowed: false`;
- `schedulingConnectorRuntimeAllowed: false`;
- `medicalRecordConnectorRuntimeAllowed: false`;
- `fhirConnectorRuntimeAllowed: false`;
- `prescriptionConnectorRuntimeAllowed: false`;
- `locationConnectorRuntimeAllowed: false`;
- `cameraConnectorRuntimeAllowed: false`;
- `microphoneConnectorRuntimeAllowed: false`;
- `communicationsConnectorRuntimeAllowed: false`;
- `transportationConnectorRuntimeAllowed: false`;
- `healthConnectorRuntimeAllowed: false`;
- `marketplaceConnectorRuntimeAllowed: false`;
- `emergencyConnectorRuntimeAllowed: false`;
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
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `roleBypassAllowed: false`;
- `auditBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserOfflineModeMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `cacheWriteAllowed: false`;
- `networkAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

## Runtime Boundary

The harness is a Node QA utility only. It must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

The harness must not include DOM, storage, cache, service worker, background sync, network, provider handoff, permissions, navigation, native bridge, workflow, health execution, telehealth execution, pharmacy execution, medical record access, provider contact, scheduling, location, camera, microphone, payment, transportation dispatch, emergency, marketplace transaction, stale-data claim execution, current cached-data claim execution, or execution APIs.

## Relationship To Sprint AJ2

Sprint AJ2 defines the default-off Offline Low-Bandwidth Mode feature flag contract. Sprint AJ3 proves the contract with deterministic fixtures, including unsafe authority attempts that must normalize back to no-execution.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AJ4 - Offline Low-Bandwidth Mode Runtime Absence Regression Guard`
