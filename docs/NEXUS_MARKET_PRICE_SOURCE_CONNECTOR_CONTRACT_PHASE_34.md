# Nexus Market Price Source Connector Contract Phase 34

Phase: 34 - Market price sources
Roadmap row: "Add price source connectors"
Status: inert market price source connector contract, no live price feed, no marketplace execution

## Purpose

Phase 34 defines how Nexus should model future market price source connectors. Price connectors can eventually support source-backed commodity price context, market freshness labels, regional market comparisons, selling preparation, and trend review, but they must remain disabled until source ownership, terms, freshness, timestamping, attribution, and audit controls are complete.

This phase does not fetch live market prices, quote current prices, contact buyers or sellers, create orders, process payments, dispatch logistics, share farm details, share location, navigate to external marketplaces, or activate a live market adapter.

## Contract Module

The inert contract module is:

- `public/nexus-market-price-source-connector-contract.js`

The module defines:

- market price source statuses;
- market price source categories;
- required connector fields;
- price freshness and attribution fields;
- marketplace action boundary fields;
- audit event fields;
- no-execution defaults;
- a local helper for creating a frozen market price source connector record.

The module is not loaded by `public/index.html`, `public/app.js`, or `server.js`.

## Market Price Source Statuses

Allowed market price source statuses:

- `not_configured`;
- `source_verification_required`;
- `terms_review_required`;
- `freshness_rule_required`;
- `market_scope_required`;
- `currency_review_required`;
- `language_review_required`;
- `sandbox_testing_required`;
- `approved_not_live`;
- `active_source_only`;
- `rejected_or_blocked`;
- `inactive`.

Status rules:

- `not_configured` must not support source-backed price claims.
- `source_verification_required` must wait for Phase 29-style source verification.
- `terms_review_required` must wait for public or partner data terms review.
- `freshness_rule_required` must wait for a configured stale-source rule.
- `market_scope_required` must wait for market and commodity coverage review.
- `currency_review_required` must wait for currency and unit labeling.
- `language_review_required` must wait for localization labels.
- `sandbox_testing_required` must remain non-live.
- `approved_not_live` may show readiness but must not quote current prices.
- `active_source_only` may support future source-backed price context but must not create buyer/seller or payment actions.
- `rejected_or_blocked` and `inactive` must not be used for source-backed answers.

## Market Price Source Categories

Allowed market price source categories:

- `commodity_spot_price`;
- `farmgate_price`;
- `wholesale_market_price`;
- `retail_market_price`;
- `cooperative_price_board`;
- `public_market_board`;
- `regional_market_trend`;
- `quality_grade_context`;
- `currency_unit_context`;
- `selling_preparation_context`.

These categories are descriptive. They must not imply a live quote, firm offer, buyer contact, seller contact, order creation, payment, logistics dispatch, or marketplace transaction.

## Market Price Source Connector Fields

Each future market price source connector record should include:

- `connectorId`;
- `priceSourceName`;
- `sourceOwner`;
- `connectorStatus`;
- `sourceCategories`;
- `coveredMarkets`;
- `coveredCommodities`;
- `supportedCurrencies`;
- `supportedUnits`;
- `supportedLanguages`;
- `sourceVerificationStatus`;
- `termsReviewStatus`;
- `freshnessRuleStatus`;
- `freshnessModel`;
- `marketScope`;
- `currencyScope`;
- `languageScope`;
- `allowedResponseStates`;
- `priceAttributionBoundary`;
- `marketplaceActionBoundary`;
- `auditRequirements`;
- `auditEvent`;
- `sourceBackedPriceContextAllowed`;
- `livePriceQuoteAllowed`;
- `buyerSellerContactEnabled`;
- `marketplaceTransactionEnabled`;
- `paymentEnabled`;
- `logisticsDispatchEnabled`;
- `liveActionEnabled`;
- `noExecution`.

## Price Attribution Boundary

Each future price attribution boundary should include:

- `requiresSourceOwnerDisplay`;
- `requiresTimestampDisplay`;
- `requiresMarketDisplay`;
- `requiresCommodityDisplay`;
- `requiresCurrencyDisplay`;
- `requiresUnitDisplay`;
- `requiresStaleSourceWarning`;
- `allowsCurrentPriceClaim`;
- `allowsFirmOfferClaim`;
- `allowsGuaranteedPriceClaim`.

Defaults must keep every `allows*` field false.

## Marketplace Action Boundary

Each future marketplace action boundary should include:

- `requiresUserApproval`;
- `requiresBuyerSellerConfirmation`;
- `requiresAuditLogging`;
- `requiresPaymentGate`;
- `requiresLogisticsGate`;
- `allowsBuyerContact`;
- `allowsSellerContact`;
- `allowsOrderCreation`;
- `allowsPaymentProcessing`;
- `allowsLogisticsDispatch`.

Defaults must keep every `allows*` field false.

## Audit Event Fields

Each future market price source audit event should include:

- `eventType`;
- `connectorId`;
- `connectorStatus`;
- `sourceCategories`;
- `sourceBackedPriceContextAllowed`;
- `livePriceQuoteAllowed`;
- `buyerSellerContactEnabled`;
- `marketplaceTransactionEnabled`;
- `paymentEnabled`;
- `noExecution`;
- `createdAt`.

Audit events must not include private farm details, precise location, buyer or seller contact identifiers, payment details, account details, executable order payloads, or logistics dispatch payloads.

## No-Execution Defaults

Market price source connector records are source context, not transaction authority. They must default to:

- `noExecution: true`;
- `sourceBackedPriceContextAllowed: false`;
- `livePriceQuoteAllowed: false`;
- `buyerSellerContactEnabled: false`;
- `marketplaceTransactionEnabled: false`;
- `paymentEnabled: false`;
- `logisticsDispatchEnabled: false`;
- `providerContactEnabled: false`;
- `farmDataSharingEnabled: false`;
- `locationSharingEnabled: false`;
- `liveActionEnabled: false`;
- `buyerContacted: false`;
- `sellerContacted: false`;
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

- "market price source not connected yet";
- "requires verified market source and timestamp";
- "requires source freshness before showing current price context";
- "I can prepare market price source requirements and selling questions, but I cannot quote a live price or contact buyers until the required connector and approvals are active."

Nexus must not say a live market price was checked, a price was guaranteed, a buyer or seller was contacted, an order was created, payment was processed, logistics were dispatched, farm details were shared, or location was sent unless later approved execution phases enable that behavior.

## QA Expectations

QA must verify:

- required market price source statuses are defined;
- required source categories are defined;
- required connector fields exist;
- required price attribution boundary fields exist;
- required marketplace action boundary fields exist;
- audit event fields exist;
- defaults block source-backed price context, live price quotes, buyer/seller contact, marketplace transactions, payment, logistics dispatch, farm data sharing, location sharing, and live action;
- no-execution and dangerous action flags default safely;
- no provider API, fetch path, contact path, order path, payment path, storage write, permission prompt, navigation, location use, marketplace action, logistics dispatch, or execution behavior exists;
- Standard User runtime files do not import or load the module;
- Phase 19 public market price baseline, Phase 24 answer envelopes, Phase 25 freshness/citation contract, Phase 30 labels, and Phase 33 crop source contract remain present.

## Future Work

Later phases may add source-ready market price connectors after source verification, terms review, market scope, currency and unit review, freshness rules, localization review, and audit logging are complete. Market price connectors must remain separate from buyer/seller contact, AgriTrade execution, order creation, payment, logistics dispatch, location sharing, call, and message behavior.
