# Nexus Sprint AF2 - AgriTrade Marketplace Mode Feature Flag Contract

Current base: `87a9aabbf804a136e4e4665edaa00d4951e9c6f9`

Sprint AF2 adds a standalone inert contract module and deterministic QA only. It defines a default-off feature flag boundary for future AgriTrade Marketplace Mode visibility, but it does not import AgriTrade Marketplace Mode runtime, render UI, retrieve marketplace/buyer/seller/listing/quote/order/inventory/logistics data, connect providers, contact buyers or sellers, publish listings, create orders, accept quotes, buy items, sell produce, arrange shipment, process payments, write storage, write audit events, request permissions, make live marketplace claims, give medical advice, diagnose, prescribe, dispatch transportation, dispatch emergency help, or execute actions.

## Feature Flag Name

`NEXUS_AGRITRADE_MARKETPLACE_MODE_VISIBLE_ENABLED`

This name is reserved for future controlled, permissioned AgriTrade Marketplace Mode visibility work. It is not marketplace execution authority, buy authority, sell authority, order authority, quote authority, listing authority, buyer authority, seller authority, payment authority, escrow authority, logistics authority, identity authority, transportation authority, emergency authority, medical authority, location consent, camera consent, microphone consent, user consent, audit approval, buyer confirmation, seller confirmation, marketplace partner confirmation, payment partner confirmation, logistics partner confirmation, human review approval, or execution approval.

## Default State

The feature flag defaults to:

- `enabled: false`;
- `visibleUiAllowed: false`;
- `agritradeMarketplaceModeReviewAllowed: false`;
- `marketplaceReviewPreviewAllowed: false`;
- `marketplaceListingPreviewAllowed: false`;
- `marketplacePricePreviewAllowed: false`;
- `marketplaceInventoryPreviewAllowed: false`;
- `buyerDirectoryPreviewAllowed: false`;
- `sellerDirectoryPreviewAllowed: false`;
- `quoteReadinessPreviewAllowed: false`;
- `orderReadinessPreviewAllowed: false`;
- `paymentBoundaryPreviewAllowed: false`;
- `escrowBoundaryPreviewAllowed: false`;
- `logisticsBoundaryPreviewAllowed: false`;
- `identityBoundaryPreviewAllowed: false`;
- `communicationsBoundaryPreviewAllowed: false`;
- `transportationBoundaryPreviewAllowed: false`;
- `emergencyBoundaryPreviewAllowed: false`;
- `agritradeMarketplaceModeRuntimeAllowed: false`;
- `liveAgritradeMarketplaceModeRuntimeAllowed: false`;
- `marketplaceConnectorRuntimeAllowed: false`;
- `buyerConnectorRuntimeAllowed: false`;
- `sellerConnectorRuntimeAllowed: false`;
- `listingConnectorRuntimeAllowed: false`;
- `quoteConnectorRuntimeAllowed: false`;
- `orderConnectorRuntimeAllowed: false`;
- `inventoryConnectorRuntimeAllowed: false`;
- `paymentConnectorRuntimeAllowed: false`;
- `escrowConnectorRuntimeAllowed: false`;
- `logisticsConnectorRuntimeAllowed: false`;
- `identityConnectorRuntimeAllowed: false`;
- `communicationsConnectorRuntimeAllowed: false`;
- `transportationConnectorRuntimeAllowed: false`;
- `healthConnectorRuntimeAllowed: false`;
- `marketplaceTransactionAllowed: false`;
- `buyExecutionAllowed: false`;
- `sellExecutionAllowed: false`;
- `orderCreationAllowed: false`;
- `quoteAcceptanceAllowed: false`;
- `listingPublicationAllowed: false`;
- `buyerContactAllowed: false`;
- `sellerContactAllowed: false`;
- `marketplacePartnerContactAllowed: false`;
- `paymentExecutionAllowed: false`;
- `escrowExecutionAllowed: false`;
- `shipmentDispatchAllowed: false`;
- `locationSharingAllowed: false`;
- `cameraActivationAllowed: false`;
- `microphoneActivationAllowed: false`;
- `identityAccountProfileActionAllowed: false`;
- `communicationsExecutionAllowed: false`;
- `transportationDispatchAllowed: false`;
- `emergencyDispatchAllowed: false`;
- `medicalRecordsFhirRuntimeAllowed: false`;
- `medicalAdviceAllowed: false`;
- `diagnosisClaimAllowed: false`;
- `prescriptionInstructionAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserAgritradeMarketplaceModeMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

## Contract Module

Sprint AF2 adds:

`public/nexus-agritrade-marketplace-mode-feature-flag.js`

The module exports:

- `AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_NAME`;
- `DEFAULT_AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_STATE`;
- `PROTECTED_AGRITRADE_MARKETPLACE_MODE_FLAG_FIELDS`;
- `normalizeAgritradeMarketplaceModeFeatureFlagState`;
- `isAgritradeMarketplaceModeVisibleFeatureEnabled`.

The normalizer may represent a future visible-only test state when both `enabled` and `visibleUiAllowed` are explicitly true. Every protected authority field remains forced to false, and `noExecution` remains true.

## Important Boundary

The feature flag does not authorize:

- AgriTrade Marketplace Mode runtime activation;
- live marketplace, buyer, seller, listing, quote, order, inventory, payment, escrow, logistics, identity, communications, transportation, health, emergency, or FHIR connector behavior;
- medical advice;
- diagnosis claims;
- prescription instructions;
- marketplace transactions;
- buy execution;
- sell execution;
- order creation;
- quote acceptance;
- listing publication;
- buyer, seller, marketplace partner, payment partner, or logistics partner contact;
- communications execution;
- location sharing;
- camera activation;
- microphone activation;
- payment execution;
- escrow execution;
- shipment dispatch;
- identity, account, or profile actions;
- transportation dispatch;
- emergency dispatch;
- policy, confirmation, or permission bypass;
- backend writes;
- storage writes;
- network calls;
- audit writes;
- execution authority.

## Relationship To Sprint AF1

Sprint AF1 defines the runtime activation readiness gate. Sprint AF2 adds a default-off flag contract that preserves the AF1 gate. A future visible feature must still satisfy source, consent, identity, permission, approval, buyer/seller/marketplace partner/payment/logistics confirmation, human review, audit, fallback, browser validation, and deterministic QA requirements before activation.

## Runtime Absence Requirements

Sprint AF2 must not load or activate:

- `public/nexus-agritrade-marketplace-mode-feature-flag.js`;
- `NEXUS_AGRITRADE_MARKETPLACE_MODE_VISIBLE_ENABLED`;
- `NexusAgritradeMarketplaceModeFeatureFlagContract`;
- `normalizeAgritradeMarketplaceModeFeatureFlagState`;
- `isAgritradeMarketplaceModeVisibleFeatureEnabled`;
- any AgriTrade Marketplace Mode runtime;
- any live marketplace, buyer, seller, listing, quote, order, inventory, payment, escrow, logistics, identity, communications, transportation, health, emergency, or FHIR runtime;
- any buyer, seller, marketplace partner, payment partner, or logistics partner contact runtime;
- any location, camera, microphone, payment, marketplace transaction, identity, account, or communications execution runtime;
- Sprint AF QA scripts.

These artifacts must remain absent from:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## QA Expectations

Sprint AF2 QA must verify:

- the feature flag contract exists;
- the flag name is reserved and default-off;
- all protected authority fields default to false;
- unsafe authority attempts normalize back to false;
- visible-only test state does not grant execution authority;
- the module does not include DOM, storage, network, provider, permission, navigation, native bridge, workflow, health execution, telehealth execution, marketplace transaction, buy, sell, order, quote, listing, buyer contact, seller contact, payment, escrow, shipment, transportation, emergency, location, camera, microphone, or execution APIs;
- Standard User runtime does not load the AF2 module;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AF3 - AgriTrade Marketplace Mode Flag Contract Harness`

Sprint AF3 should add deterministic fixtures proving default-off, visible-only, and unsafe authority attempts remain no-execution.
