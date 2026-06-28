# Nexus Sprint AL2 - Local Language Pack Mode Feature Flag Contract

Current base: `29cc426ba04da6ebdd42a61aed661d564b24fc1e`

Sprint AL2 adds a standalone inert contract module and deterministic QA only. It defines a default-off feature flag boundary for any future Local Language Pack Mode visible behavior while preserving the current Standard User runtime.

## Feature Flag Name

`NEXUS_LOCAL_LANGUAGE_PACK_MODE_VISIBLE_ENABLED`

## Default State

- `enabled: false`
- `visibleUiAllowed: false`
- `noExecution: true`

Every protected Local Language Pack Mode authority field defaults to `false`, including language pack install, translation runtime, local-language routing, clinical interpretation claims, provider contact, payment execution, location sharing, emergency dispatch, storage writes, backend writes, network calls, and execution authority.

## Contract Module

The inert module is:

`public/nexus-local-language-pack-mode-feature-flag.js`

It exports:

- `LOCAL_LANGUAGE_PACK_MODE_FEATURE_FLAG_NAME`;
- `DEFAULT_LOCAL_LANGUAGE_PACK_MODE_FEATURE_FLAG_STATE`;
- `PROTECTED_LOCAL_LANGUAGE_PACK_MODE_FLAG_FIELDS`;
- `normalizeLocalLanguagePackModeFeatureFlagState`;
- `isLocalLanguagePackModeVisibleFeatureEnabled`.

## Important Boundary

This feature flag is not a runtime loader, language pack installer, translation engine, clinical interpretation layer, provider connector, permission grant, consent grant, audit approval, or execution grant.

`visibleUiAllowed: true` may only mean a future reviewed UI surface is allowed to become visible. It must not enable language pack installation, translation runtime, local-language routing, speech recognition or speech synthesis mutation, provider handoff, calls, messages, payments, marketplace transactions, location sharing, camera or microphone activation, medical advice, diagnosis, prescription instructions, emergency dispatch, storage writes, backend writes, network calls, or action execution.

## Relationship To Sprint AL1

Sprint AL1 defined the readiness gate. Sprint AL2 gives future work a deterministic default-off flag contract without changing Standard User behavior.

## Runtime Absence Requirements

Sprint AL2 must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

No Standard User route, typed command, voice command, workflow modal, health path, telehealth path, map/location path, marketplace path, provider path, native bridge path, or backend route may consume this flag in Sprint AL2.

## Protected No-Execution Fields

The contract protects these fields as `false`:

- `localLanguagePackModeReviewAllowed: false`
- `languagePackPreviewAllowed: false`
- `translationPreviewAllowed: false`
- `localLanguageGuidancePreviewAllowed: false`
- `languageCoveragePreviewAllowed: false`
- `sourceAttributionPreviewAllowed: false`
- `freshnessConfidencePreviewAllowed: false`
- `fallbackPreviewAllowed: false`
- `partnerTranslationPreviewAllowed: false`
- `speechRecognitionLocalePreviewAllowed: false`
- `speechSynthesisVoicePreviewAllowed: false`
- `healthcareTranslationBoundaryPreviewAllowed: false`
- `pharmacyTranslationBoundaryPreviewAllowed: false`
- `emergencyTranslationBoundaryPreviewAllowed: false`
- `providerDirectoryPreviewAllowed: false`
- `clinicDirectoryPreviewAllowed: false`
- `telehealthBoundaryPreviewAllowed: false`
- `agricultureResourcePreviewAllowed: false`
- `workforceResourcePreviewAllowed: false`
- `communityServicePreviewAllowed: false`
- `marketplaceBoundaryPreviewAllowed: false`
- `locationBoundaryPreviewAllowed: false`
- `identityBoundaryPreviewAllowed: false`
- `communicationsBoundaryPreviewAllowed: false`
- `localLanguagePackModeRuntimeAllowed: false`
- `liveLocalLanguagePackModeRuntimeAllowed: false`
- `languagePackInstallRuntimeAllowed: false`
- `translationRuntimeAllowed: false`
- `localLanguageRoutingRuntimeAllowed: false`
- `clinicalInterpretationRuntimeAllowed: false`
- `speechRecognitionLocaleRuntimeAllowed: false`
- `speechSynthesisVoiceRuntimeAllowed: false`
- `partnerTranslationConnectorRuntimeAllowed: false`
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
- `languagePackInstallAllowed: false`
- `languagePreferenceMutationAllowed: false`
- `translationReviewBypassAllowed: false`
- `clinicalInterpretationClaimAllowed: false`
- `medicalInterpretationComplianceClaimAllowed: false`
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
- `unsupportedLanguageCoverageClaimAllowed: false`
- `unsupportedClinicalInterpretationClaimAllowed: false`
- `unsupportedLiveDataClaimAllowed: false`
- `completedActionClaimAllowed: false`
- `policyBypassAllowed: false`
- `confirmationBypassAllowed: false`
- `permissionBypassAllowed: false`
- `roleBypassAllowed: false`
- `auditBypassAllowed: false`
- `firstTurnExecutionAllowed: false`
- `laterTurnExecutionAllowed: false`
- `standardUserLanguagePackModeMutationAllowed: false`
- `backendWriteAllowed: false`
- `storageWriteAllowed: false`
- `networkAllowed: false`
- `executionAuthority: false`

## QA Expectations

Sprint AL2 QA must verify:

- the feature flag module exists;
- the flag name is canonical;
- defaults are off and no-execution;
- unsafe authority attempts normalize back to protected `false` values;
- no runtime API, storage, network, permission, provider, native bridge, or workflow execution code is present in the module;
- `public/index.html`, `public/app.js`, and `server.js` do not load the feature flag module;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

`Sprint AL3 - Local Language Pack Mode Flag Contract Harness`
