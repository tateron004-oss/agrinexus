# Nexus Sprint AF3 - AgriTrade Marketplace Mode Flag Contract Harness

Current base: `fb5cb73cdf97e189f3bdd474dd4a8e47d6e53056`

Sprint AF3 adds documentation, fixture, and deterministic QA only. It does not load AgriTrade Marketplace Mode into Standard User runtime, render UI, retrieve marketplace, buyer, seller, listing, quote, order, inventory, payment, escrow, logistics, identity, communications, transportation, health, emergency, or FHIR data, connect marketplace providers, contact buyers or sellers, publish listings, create orders, accept quotes, buy items, sell produce, arrange shipment, share location, activate camera or microphone, process payments, access medical records, write storage, write audit events, request permissions, make live partner claims, give medical advice, diagnose, prescribe, dispatch transportation, dispatch emergency help, or execute actions.

## Added Artifacts

- `fixtures/nexus/agritrade-marketplace-mode-feature-flags.json`
- `scripts/nexus-sprint-af3-agritrade-marketplace-mode-flag-contract-harness.js`

## Fixture Coverage

The fixture set covers:

- default-off state;
- flag-on visible-only local/test state;
- unsafe authority attempt;
- enabled without visible permission.

Every fixture must preserve:

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

## Runtime Boundary

The harness is a Node QA utility only. It must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

The harness must not include DOM, storage, network, provider handoff, permissions, navigation, native bridge, workflow, health execution, telehealth execution, marketplace transaction, buy, sell, order, quote, listing, buyer contact, seller contact, payment, escrow, shipment, transportation dispatch, emergency, location, camera, microphone, or execution APIs.

## Relationship To Sprint AF2

Sprint AF2 defines the default-off AgriTrade Marketplace Mode feature flag contract. Sprint AF3 proves the contract with deterministic fixtures, including unsafe authority attempts that must normalize back to no-execution.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AF4 - AgriTrade Marketplace Mode Runtime Absence Regression Guard`
