(function nexusMarketPriceSourceConnectorContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusMarketPriceSourceConnectorContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusMarketPriceSourceConnectorContractModule() {
  const MARKET_PRICE_SOURCE_STATUSES = Object.freeze([
    "not_configured",
    "source_verification_required",
    "terms_review_required",
    "freshness_rule_required",
    "market_scope_required",
    "currency_review_required",
    "language_review_required",
    "sandbox_testing_required",
    "approved_not_live",
    "active_source_only",
    "rejected_or_blocked",
    "inactive"
  ]);

  const MARKET_PRICE_SOURCE_CATEGORIES = Object.freeze([
    "commodity_spot_price",
    "farmgate_price",
    "wholesale_market_price",
    "retail_market_price",
    "cooperative_price_board",
    "public_market_board",
    "regional_market_trend",
    "quality_grade_context",
    "currency_unit_context",
    "selling_preparation_context"
  ]);

  const NO_EXECUTION_DEFAULTS = Object.freeze({
    noExecution: true,
    sourceBackedPriceContextAllowed: false,
    livePriceQuoteAllowed: false,
    buyerSellerContactEnabled: false,
    marketplaceTransactionEnabled: false,
    paymentEnabled: false,
    logisticsDispatchEnabled: false,
    providerContactEnabled: false,
    farmDataSharingEnabled: false,
    locationSharingEnabled: false,
    liveActionEnabled: false,
    buyerContacted: false,
    sellerContacted: false,
    orderCreated: false,
    paymentExecuted: false,
    logisticsDispatched: false,
    userDataShared: false,
    externalActionExecuted: false,
    medicalRecordAccessed: false,
    prescriptionSubmitted: false,
    emergencyDispatched: false,
    locationShared: false,
    callOrMessageSent: false
  });

  const MARKET_PRICE_SOURCE_CONNECTOR_FIELDS = Object.freeze([
    "connectorId",
    "priceSourceName",
    "sourceOwner",
    "connectorStatus",
    "sourceCategories",
    "coveredMarkets",
    "coveredCommodities",
    "supportedCurrencies",
    "supportedUnits",
    "supportedLanguages",
    "sourceVerificationStatus",
    "termsReviewStatus",
    "freshnessRuleStatus",
    "freshnessModel",
    "marketScope",
    "currencyScope",
    "languageScope",
    "allowedResponseStates",
    "priceAttributionBoundary",
    "marketplaceActionBoundary",
    "auditRequirements",
    "auditEvent",
    "sourceBackedPriceContextAllowed",
    "livePriceQuoteAllowed",
    "buyerSellerContactEnabled",
    "marketplaceTransactionEnabled",
    "paymentEnabled",
    "logisticsDispatchEnabled",
    "liveActionEnabled",
    "noExecution"
  ]);

  const PRICE_ATTRIBUTION_BOUNDARY_FIELDS = Object.freeze([
    "requiresSourceOwnerDisplay",
    "requiresTimestampDisplay",
    "requiresMarketDisplay",
    "requiresCommodityDisplay",
    "requiresCurrencyDisplay",
    "requiresUnitDisplay",
    "requiresStaleSourceWarning",
    "allowsCurrentPriceClaim",
    "allowsFirmOfferClaim",
    "allowsGuaranteedPriceClaim"
  ]);

  const MARKETPLACE_ACTION_BOUNDARY_FIELDS = Object.freeze([
    "requiresUserApproval",
    "requiresBuyerSellerConfirmation",
    "requiresAuditLogging",
    "requiresPaymentGate",
    "requiresLogisticsGate",
    "allowsBuyerContact",
    "allowsSellerContact",
    "allowsOrderCreation",
    "allowsPaymentProcessing",
    "allowsLogisticsDispatch"
  ]);

  const MARKET_PRICE_AUDIT_EVENT_FIELDS = Object.freeze([
    "eventType",
    "connectorId",
    "connectorStatus",
    "sourceCategories",
    "sourceBackedPriceContextAllowed",
    "livePriceQuoteAllowed",
    "buyerSellerContactEnabled",
    "marketplaceTransactionEnabled",
    "paymentEnabled",
    "noExecution",
    "createdAt"
  ]);

  const DEFAULT_PRICE_ATTRIBUTION_BOUNDARY = Object.freeze({
    requiresSourceOwnerDisplay: true,
    requiresTimestampDisplay: true,
    requiresMarketDisplay: true,
    requiresCommodityDisplay: true,
    requiresCurrencyDisplay: true,
    requiresUnitDisplay: true,
    requiresStaleSourceWarning: true,
    allowsCurrentPriceClaim: false,
    allowsFirmOfferClaim: false,
    allowsGuaranteedPriceClaim: false
  });

  const DEFAULT_MARKETPLACE_ACTION_BOUNDARY = Object.freeze({
    requiresUserApproval: true,
    requiresBuyerSellerConfirmation: true,
    requiresAuditLogging: true,
    requiresPaymentGate: true,
    requiresLogisticsGate: true,
    allowsBuyerContact: false,
    allowsSellerContact: false,
    allowsOrderCreation: false,
    allowsPaymentProcessing: false,
    allowsLogisticsDispatch: false
  });

  const MARKET_PRICE_SOURCE_CONNECTOR_CONTRACT = Object.freeze({
    connectorId: "market.price_source.not_configured",
    priceSourceName: "",
    sourceOwner: "market price source verification required",
    connectorStatus: "not_configured",
    sourceCategories: Object.freeze([]),
    coveredMarkets: Object.freeze([]),
    coveredCommodities: Object.freeze([]),
    supportedCurrencies: Object.freeze([]),
    supportedUnits: Object.freeze([]),
    supportedLanguages: Object.freeze(["en"]),
    sourceVerificationStatus: "not_started",
    termsReviewStatus: "not_reviewed",
    freshnessRuleStatus: "not_configured",
    freshnessModel: Object.freeze({
      freshnessField: "marketPriceTimestamp",
      staleAfter: "source-specific",
      displayRequirement: "Show market source, commodity, market, unit, currency, and timestamp before relying on price context."
    }),
    marketScope: "not reviewed",
    currencyScope: "not reviewed",
    languageScope: "not reviewed",
    allowedResponseStates: Object.freeze(["general_guidance", "unavailable_source_fallback"]),
    priceAttributionBoundary: DEFAULT_PRICE_ATTRIBUTION_BOUNDARY,
    marketplaceActionBoundary: DEFAULT_MARKETPLACE_ACTION_BOUNDARY,
    auditRequirements: Object.freeze(["market-price-source-reviewed", "price-timestamp-shown", "marketplace-action-blocked"]),
    auditEvent: Object.freeze({
      eventType: "market.price_source_connector_created",
      connectorId: "market.price_source.not_configured",
      connectorStatus: "not_configured",
      sourceCategories: Object.freeze([]),
      sourceBackedPriceContextAllowed: false,
      livePriceQuoteAllowed: false,
      buyerSellerContactEnabled: false,
      marketplaceTransactionEnabled: false,
      paymentEnabled: false,
      noExecution: true,
      createdAt: null
    }),
    ...NO_EXECUTION_DEFAULTS
  });

  function normalizeConnectorStatus(value) {
    return MARKET_PRICE_SOURCE_STATUSES.includes(value) ? value : MARKET_PRICE_SOURCE_CONNECTOR_CONTRACT.connectorStatus;
  }

  function createMarketPriceSourceConnector(overrides = {}) {
    const connectorStatus = normalizeConnectorStatus(overrides.connectorStatus);
    const sourceCategories = Array.isArray(overrides.sourceCategories)
      ? overrides.sourceCategories.filter(category => MARKET_PRICE_SOURCE_CATEGORIES.includes(category))
      : [];
    return Object.freeze({
      ...MARKET_PRICE_SOURCE_CONNECTOR_CONTRACT,
      ...overrides,
      connectorStatus,
      sourceCategories: Object.freeze(sourceCategories),
      coveredMarkets: Object.freeze(Array.isArray(overrides.coveredMarkets) ? overrides.coveredMarkets.slice() : []),
      coveredCommodities: Object.freeze(Array.isArray(overrides.coveredCommodities) ? overrides.coveredCommodities.slice() : []),
      supportedCurrencies: Object.freeze(Array.isArray(overrides.supportedCurrencies) ? overrides.supportedCurrencies.slice() : []),
      supportedUnits: Object.freeze(Array.isArray(overrides.supportedUnits) ? overrides.supportedUnits.slice() : []),
      supportedLanguages: Object.freeze(Array.isArray(overrides.supportedLanguages) ? overrides.supportedLanguages.slice() : ["en"]),
      priceAttributionBoundary: Object.freeze({
        ...DEFAULT_PRICE_ATTRIBUTION_BOUNDARY,
        ...(overrides.priceAttributionBoundary || {}),
        allowsCurrentPriceClaim: false,
        allowsFirmOfferClaim: false,
        allowsGuaranteedPriceClaim: false
      }),
      marketplaceActionBoundary: Object.freeze({
        ...DEFAULT_MARKETPLACE_ACTION_BOUNDARY,
        ...(overrides.marketplaceActionBoundary || {}),
        allowsBuyerContact: false,
        allowsSellerContact: false,
        allowsOrderCreation: false,
        allowsPaymentProcessing: false,
        allowsLogisticsDispatch: false
      }),
      auditRequirements: Object.freeze(Array.isArray(overrides.auditRequirements) ? overrides.auditRequirements.slice() : MARKET_PRICE_SOURCE_CONNECTOR_CONTRACT.auditRequirements.slice()),
      auditEvent: Object.freeze({
        ...MARKET_PRICE_SOURCE_CONNECTOR_CONTRACT.auditEvent,
        ...(overrides.auditEvent || {}),
        connectorId: overrides.connectorId || MARKET_PRICE_SOURCE_CONNECTOR_CONTRACT.connectorId,
        connectorStatus,
        sourceCategories: Object.freeze(sourceCategories),
        sourceBackedPriceContextAllowed: false,
        livePriceQuoteAllowed: false,
        buyerSellerContactEnabled: false,
        marketplaceTransactionEnabled: false,
        paymentEnabled: false,
        noExecution: true
      }),
      ...Object.fromEntries(Object.entries(NO_EXECUTION_DEFAULTS).map(([key, value]) => [key, value]))
    });
  }

  return Object.freeze({
    MARKET_PRICE_SOURCE_STATUSES,
    MARKET_PRICE_SOURCE_CATEGORIES,
    NO_EXECUTION_DEFAULTS,
    MARKET_PRICE_SOURCE_CONNECTOR_FIELDS,
    PRICE_ATTRIBUTION_BOUNDARY_FIELDS,
    MARKETPLACE_ACTION_BOUNDARY_FIELDS,
    MARKET_PRICE_AUDIT_EVENT_FIELDS,
    DEFAULT_PRICE_ATTRIBUTION_BOUNDARY,
    DEFAULT_MARKETPLACE_ACTION_BOUNDARY,
    MARKET_PRICE_SOURCE_CONNECTOR_CONTRACT,
    createMarketPriceSourceConnector
  });
});
