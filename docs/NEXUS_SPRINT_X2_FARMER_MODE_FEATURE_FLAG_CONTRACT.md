# Nexus Sprint X2 - Farmer Mode Feature Flag Contract

Current base: `e48d1ce5a1d0fbf781e7b41d5562be1212c1f64b`

Sprint X2 adds a standalone inert contract module and deterministic QA only. It defines a default-off feature flag boundary for future Farmer Mode visibility, but it does not import a Farmer Mode runtime, render UI, retrieve agriculture or market sources, give unsourced agronomic advice, diagnose crops, recommend chemical applications, execute marketplace transactions, process payments, contact buyers, contact sellers, contact providers, dispatch transportation, dispatch emergency help, share location, activate camera or microphone, write storage, write audit events, request permissions, make provider claims, or execute actions.

## Feature Flag Name

`NEXUS_FARMER_MODE_VISIBLE_ENABLED`

This name is reserved for future controlled, permissioned Farmer Mode visibility work. It is not source authority, agronomic advice authority, diagnosis authority, chemical application authority, marketplace authority, payment authority, buyer or seller contact authority, provider authority, location consent, camera consent, user consent, audit approval, human review approval, or execution approval.

## Default State

The feature flag defaults to:

- `enabled: false`;
- `visibleUiAllowed: false`;
- `farmerModeReviewAllowed: false`;
- `sourceBackedFarmerGuidancePreviewAllowed: false`;
- `farmerProfileSummaryPreviewAllowed: false`;
- `cropFieldSupportPreviewAllowed: false`;
- `agritradeReviewPreviewAllowed: false`;
- `extensionEscalationPreviewAllowed: false`;
- `farmerModeRuntimeAllowed: false`;
- `liveFarmerModeRuntimeAllowed: false`;
- `agricultureConnectorRuntimeAllowed: false`;
- `marketSourceRetrievalRuntimeAllowed: false`;
- `unsourcedAgronomicAdviceAllowed: false`;
- `diagnosisClaimAllowed: false`;
- `chemicalApplicationInstructionAllowed: false`;
- `marketplaceTransactionAllowed: false`;
- `paymentExecutionAllowed: false`;
- `buyerSellerContactAllowed: false`;
- `providerOrExtensionContactAllowed: false`;
- `transportationDispatchAllowed: false`;
- `emergencyDispatchAllowed: false`;
- `locationSharingAllowed: false`;
- `cameraActivationAllowed: false`;
- `microphoneActivationAllowed: false`;
- `medicalPharmacyExecutionAllowed: false`;
- `identityAccountProfileActionAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserFarmerModeMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

## Contract Module

Sprint X2 adds:

`public/nexus-farmer-mode-feature-flag.js`

The module exports:

- `FARMER_MODE_FEATURE_FLAG_NAME`;
- `DEFAULT_FARMER_MODE_FEATURE_FLAG_STATE`;
- `PROTECTED_FARMER_MODE_FLAG_FIELDS`;
- `normalizeFarmerModeFeatureFlagState`;
- `isFarmerModeVisibleFeatureEnabled`.

The normalizer may represent a future visible-only test state when both `enabled` and `visibleUiAllowed` are explicitly true. Every protected authority field remains forced to false, and `noExecution` remains true.

## Important Boundary

The feature flag does not authorize:

- Farmer Mode runtime activation;
- live agriculture connector behavior;
- market source retrieval runtime;
- unsourced agronomic advice;
- diagnosis claims;
- chemical application instructions;
- marketplace transactions;
- payment execution;
- buyer or seller contact;
- provider or extension contact;
- transportation dispatch;
- emergency dispatch;
- location sharing;
- camera activation;
- microphone activation;
- medical or pharmacy execution;
- identity, account, or profile actions;
- policy, confirmation, or permission bypass;
- backend writes;
- storage writes;
- network calls;
- audit writes;
- execution authority.

## Relationship To Sprint X1

Sprint X1 defines the runtime activation readiness gate. Sprint X2 adds a default-off flag contract that preserves the X1 gate. A future visible feature must still satisfy source, consent, permission, approval, human review, audit, fallback, browser validation, and deterministic QA requirements before activation.

## Runtime Absence Requirements

Sprint X2 must not load or activate:

- `public/nexus-farmer-mode-feature-flag.js`;
- `NEXUS_FARMER_MODE_VISIBLE_ENABLED`;
- `normalizeFarmerModeFeatureFlagState`;
- `isFarmerModeVisibleFeatureEnabled`;
- any Farmer Mode runtime;
- any live agriculture connector runtime;
- any market source retrieval runtime;
- any marketplace transaction runtime;
- any provider or extension contact runtime;
- any transportation dispatch runtime;
- any location or camera runtime;
- Sprint X QA scripts.

These artifacts must remain absent from:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## QA Expectations

Sprint X2 QA must verify:

- the feature flag contract exists;
- the flag name is reserved and default-off;
- all protected authority fields default to false;
- unsafe authority attempts normalize back to false;
- visible-only test state does not grant execution authority;
- the module does not include DOM, storage, network, provider, permission, navigation, native bridge, workflow, marketplace, payment, location, camera, microphone, or execution APIs;
- Standard User runtime does not load the X2 module;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint X3 - Farmer Mode Flag Contract Harness`

Sprint X3 should add deterministic fixtures proving default-off, visible-only, and unsafe authority attempts remain no-execution.
