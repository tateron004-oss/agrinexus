# Nexus AgriTrade Partner Connector Contract Phase 35

Phase: 35 - AgriTrade partners
Roadmap row: "Add marketplace partner contracts"
Status: inert buyer/seller marketplace partner connector contract, no auto buy/sell, no payment, no contact

## Purpose

Phase 35 defines how Nexus should model future AgriTrade buyer, seller, cooperative, marketplace, payment-adjacent, and logistics-adjacent partners. These connectors can eventually support partner-backed marketplace listings, buyer/seller preparation, offer review, order staging, payment readiness, and logistics readiness, but they must remain disabled until partner approval, source verification, user approval, buyer/seller confirmation, payment gates, logistics gates, and audit controls are complete.

This phase does not contact buyers or sellers, create orders, accept offers, process payments, dispatch logistics, share farm or seller data, share location, navigate to external marketplaces, or activate a live marketplace adapter.

## Contract Module

The inert contract module is:

- `public/nexus-agritrade-partner-connector-contract.js`

The module defines:

- AgriTrade partner connector statuses;
- AgriTrade partner categories;
- required connector fields;
- buyer/seller contact gate fields;
- marketplace transaction gate fields;
- audit event fields;
- no-execution defaults;
- a local helper for creating a frozen AgriTrade partner connector record.

The module is not loaded by `public/index.html`, `public/app.js`, or `server.js`.

## AgriTrade Partner Statuses

Allowed AgriTrade partner connector statuses:

- `not_configured`;
- `partner_verification_required`;
- `terms_review_required`;
- `marketplace_scope_required`;
- `buyer_seller_confirmation_required`;
- `payment_gate_required`;
- `logistics_gate_required`;
- `sandbox_testing_required`;
- `approved_not_live`;
- `active_review_only`;
- `rejected_or_blocked`;
- `inactive`.

Status rules:

- `not_configured` must not support partner-backed marketplace claims.
- `partner_verification_required` must wait for source and partner identity verification.
- `terms_review_required` must wait for marketplace terms approval.
- `marketplace_scope_required` must wait for commodity, region, and participant-scope review.
- `buyer_seller_confirmation_required` must wait for explicit buyer/seller confirmation models.
- `payment_gate_required` must wait for payment provider and compliance gates.
- `logistics_gate_required` must wait for logistics partner gates.
- `sandbox_testing_required` must remain non-live.
- `approved_not_live` may show readiness but must not contact or transact.
- `active_review_only` may support future browse/review-only context but must not create orders or payments.
- `rejected_or_blocked` and `inactive` must not be used for partner-backed marketplace answers.

## AgriTrade Partner Categories

Allowed AgriTrade partner categories:

- `buyer_directory_partner`;
- `seller_directory_partner`;
- `cooperative_market_partner`;
- `commodity_listing_partner`;
- `quality_evidence_partner`;
- `offer_review_partner`;
- `order_staging_partner`;
- `payment_readiness_partner`;
- `logistics_readiness_partner`;
- `marketplace_safety_partner`.

These categories are descriptive. They must not imply buyer contact, seller contact, a firm offer, accepted order, payment processing, logistics dispatch, or completed marketplace transaction.

## AgriTrade Partner Connector Fields

Each future AgriTrade partner connector record should include:

- `connectorId`;
- `partnerName`;
- `sourceOwner`;
- `connectorStatus`;
- `partnerCategories`;
- `coveredCommodities`;
- `coveredMarkets`;
- `supportedCurrencies`;
- `supportedUnits`;
- `supportedLanguages`;
- `partnerVerificationStatus`;
- `termsReviewStatus`;
- `marketplaceScope`;
- `paymentGateStatus`;
- `logisticsGateStatus`;
- `freshnessModel`;
- `allowedResponseStates`;
- `buyerSellerContactGate`;
- `marketplaceTransactionGate`;
- `auditRequirements`;
- `auditEvent`;
- `partnerBackedReviewAllowed`;
- `buyerSellerContactEnabled`;
- `marketplaceTransactionEnabled`;
- `orderCreationEnabled`;
- `paymentEnabled`;
- `logisticsDispatchEnabled`;
- `liveActionEnabled`;
- `noExecution`.

## Buyer/Seller Contact Gate

Each future buyer/seller contact gate should include:

- `requiresUserApproval`;
- `requiresBuyerSellerConfirmation`;
- `requiresAuditLogging`;
- `requiresContactPurposeDisclosure`;
- `requiresMinimumNecessaryData`;
- `allowsBuyerContact`;
- `allowsSellerContact`;
- `allowsMessageSending`;
- `allowsCallHandoff`.

Defaults must keep every `allows*` field false.

## Marketplace Transaction Gate

Each future marketplace transaction gate should include:

- `requiresUserApproval`;
- `requiresBuyerSellerConfirmation`;
- `requiresAuditLogging`;
- `requiresPaymentGate`;
- `requiresLogisticsGate`;
- `requiresTermsDisclosure`;
- `allowsOfferAcceptance`;
- `allowsOrderCreation`;
- `allowsPaymentProcessing`;
- `allowsLogisticsDispatch`;
- `allowsExternalMarketplaceNavigation`.

Defaults must keep every `allows*` field false.

## Audit Event Fields

Each future AgriTrade partner audit event should include:

- `eventType`;
- `connectorId`;
- `connectorStatus`;
- `partnerCategories`;
- `partnerBackedReviewAllowed`;
- `buyerSellerContactEnabled`;
- `marketplaceTransactionEnabled`;
- `paymentEnabled`;
- `logisticsDispatchEnabled`;
- `noExecution`;
- `createdAt`.

Audit events must not include private farm details, precise location, buyer or seller contact identifiers, payment details, account details, executable order payloads, offer payloads, or logistics dispatch payloads.

## No-Execution Defaults

AgriTrade partner connector records are partner/source context, not transaction authority. They must default to:

- `noExecution: true`;
- `partnerBackedReviewAllowed: false`;
- `buyerSellerContactEnabled: false`;
- `marketplaceTransactionEnabled: false`;
- `orderCreationEnabled: false`;
- `paymentEnabled: false`;
- `logisticsDispatchEnabled: false`;
- `providerContactEnabled: false`;
- `farmDataSharingEnabled: false`;
- `locationSharingEnabled: false`;
- `liveActionEnabled: false`;
- `buyerContacted: false`;
- `sellerContacted: false`;
- `messageSent: false`;
- `callPlaced: false`;
- `offerAccepted: false`;
- `orderCreated: false`;
- `paymentExecuted: false`;
- `logisticsDispatched: false`;
- `userDataShared: false`;
- `externalActionExecuted: false`;
- `medicalRecordAccessed: false`;
- `prescriptionSubmitted: false`;
- `emergencyDispatched: false`;
- `locationShared: false`;
- `callOrMessageSent: false`.

## User-Facing Boundary

Future user-facing copy should say:

- "AgriTrade partner not connected yet";
- "requires verified marketplace partner";
- "requires approval before contacting a buyer or seller";
- "requires payment and logistics gates before transactions";
- "I can prepare AgriTrade review steps, but I cannot buy, sell, contact, pay, or dispatch logistics until the required connector and approvals are active."

Nexus must not say a buyer was contacted, a seller was contacted, an offer was accepted, an order was created, payment was processed, logistics were dispatched, farm details were shared, or location was sent unless later approved execution phases enable that behavior.

## QA Expectations

QA must verify:

- required AgriTrade partner statuses are defined;
- required partner categories are defined;
- required connector fields exist;
- required buyer/seller contact gate fields exist;
- required marketplace transaction gate fields exist;
- audit event fields exist;
- defaults block partner-backed review, buyer/seller contact, marketplace transactions, order creation, payment, logistics dispatch, farm data sharing, location sharing, and live action;
- no-execution and dangerous action flags default safely;
- no provider API, contact path, order path, payment path, storage write, permission prompt, navigation, location use, marketplace action, logistics dispatch, or execution behavior exists;
- Standard User runtime files do not import or load the module;
- AgriTrade compatibility remains present;
- Phase 24 answer envelopes, Phase 34 market price connector, and marketplace browse-only safety guards remain present.

## Future Work

Later phases may add partner-ready AgriTrade connectors after partner verification, terms review, marketplace scope, payment gates, logistics gates, user approval, buyer/seller confirmation, and audit logging are complete. AgriTrade partner connectors must remain separate from automatic buyer/seller contact, order creation, payment, logistics dispatch, external marketplace navigation, location sharing, call, and message behavior.
