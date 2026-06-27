# Nexus Sprint V3 - Marketplace Intelligence Flag Contract Harness

Current base: `b524db53432bb90da8a5d10d4bd4e4d7ab870cfa`

Sprint V3 adds fixture, harness, documentation, and QA only for the Marketplace Intelligence feature flag contract. It does not load the feature flag into Standard User runtime, render UI, change marketplace routes, retrieve sources, buy items, sell items, create orders, execute checkout, process payments, reserve inventory, guarantee prices, guarantee availability, contact buyers or sellers, request permissions, write storage, write audit events, make completed-action claims, or execute actions.

## Artifacts

- `fixtures/nexus/marketplace-intelligence-feature-flags.json`
- `scripts/nexus-sprint-v3-marketplace-intelligence-flag-contract-harness.js`
- `scripts/nexus-sprint-v3-marketplace-intelligence-flag-contract-harness-qa.js`

## Fixture Coverage

The fixture set covers:

- default-off behavior;
- flag-on review-only visibility;
- unsafe authority attempts;
- enabled without visible permission.

Every fixture must preserve:

- `marketplaceReviewAllowed: false`;
- `sourceBackedMarketplaceGuidancePreviewAllowed: false`;
- `listingSummaryPreviewAllowed: false`;
- `priceAvailabilitySummaryPreviewAllowed: false`;
- `counterpartyEscalationPreviewAllowed: false`;
- `marketplaceRuntimeAllowed: false`;
- `liveMarketplaceAdvisorAllowed: false`;
- `sourceRetrievalRuntimeAllowed: false`;
- `buyExecutionAllowed: false`;
- `sellExecutionAllowed: false`;
- `orderCreationAllowed: false`;
- `checkoutExecutionAllowed: false`;
- `paymentExecutionAllowed: false`;
- `marketplaceTransactionAllowed: false`;
- `inventoryReservationAllowed: false`;
- `priceGuaranteeClaimAllowed: false`;
- `availabilityGuaranteeClaimAllowed: false`;
- `buyerSellerContactAllowed: false`;
- `providerConnectionClaimAllowed: false`;
- `completedActionClaimAllowed: false`;
- `shippingTransportationDispatchAllowed: false`;
- `communicationExecutionAllowed: false`;
- `locationSharingAllowed: false`;
- `identityAccountProfileActionAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserMarketplaceBrainMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

## Runtime Boundary

The harness may be executed by deterministic QA only. It must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## Prohibited Behavior

Sprint V3 must not add runtime imports, script tags, event handlers, marketplace source retrieval, live marketplace advisor execution, buy execution, sell execution, order creation, checkout execution, payment execution, marketplace transaction completion, inventory reservation, price guarantees, availability guarantees, buyer or seller contact, provider handoff, shipping or transportation dispatch, location sharing, communications execution, permissions, storage writes, network calls, audit writes, native bridge dispatch, or execution authority.

## QA Expectations

Sprint V3 QA must verify that the fixture set validates successfully, contains an unsafe authority attempt, keeps every protected field false, keeps `noExecution: true`, and remains absent from Standard User runtime.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint V4 - Marketplace Intelligence Runtime Absence Regression Guard`
