(function nexusAgriTradePartnerConnectorContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusAgriTradePartnerConnectorContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusAgriTradePartnerConnectorContractModule() {
  const AGRITRADE_PARTNER_STATUSES = Object.freeze([
    "not_configured",
    "partner_verification_required",
    "terms_review_required",
    "marketplace_scope_required",
    "buyer_seller_confirmation_required",
    "payment_gate_required",
    "logistics_gate_required",
    "sandbox_testing_required",
    "approved_not_live",
    "active_review_only",
    "rejected_or_blocked",
    "inactive"
  ]);

  const AGRITRADE_PARTNER_CATEGORIES = Object.freeze([
    "buyer_directory_partner",
    "seller_directory_partner",
    "cooperative_market_partner",
    "commodity_listing_partner",
    "quality_evidence_partner",
    "offer_review_partner",
    "order_staging_partner",
    "payment_readiness_partner",
    "logistics_readiness_partner",
    "marketplace_safety_partner"
  ]);

  const NO_EXECUTION_DEFAULTS = Object.freeze({
    noExecution: true,
    partnerBackedReviewAllowed: false,
    buyerSellerContactEnabled: false,
    marketplaceTransactionEnabled: false,
    orderCreationEnabled: false,
    paymentEnabled: false,
    logisticsDispatchEnabled: false,
    providerContactEnabled: false,
    farmDataSharingEnabled: false,
    locationSharingEnabled: false,
    liveActionEnabled: false,
    buyerContacted: false,
    sellerContacted: false,
    messageSent: false,
    callPlaced: false,
    offerAccepted: false,
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

  const AGRITRADE_PARTNER_CONNECTOR_FIELDS = Object.freeze([
    "connectorId",
    "partnerName",
    "sourceOwner",
    "connectorStatus",
    "partnerCategories",
    "coveredCommodities",
    "coveredMarkets",
    "supportedCurrencies",
    "supportedUnits",
    "supportedLanguages",
    "partnerVerificationStatus",
    "termsReviewStatus",
    "marketplaceScope",
    "paymentGateStatus",
    "logisticsGateStatus",
    "freshnessModel",
    "allowedResponseStates",
    "buyerSellerContactGate",
    "marketplaceTransactionGate",
    "auditRequirements",
    "auditEvent",
    "partnerBackedReviewAllowed",
    "buyerSellerContactEnabled",
    "marketplaceTransactionEnabled",
    "orderCreationEnabled",
    "paymentEnabled",
    "logisticsDispatchEnabled",
    "liveActionEnabled",
    "noExecution"
  ]);

  const BUYER_SELLER_CONTACT_GATE_FIELDS = Object.freeze([
    "requiresUserApproval",
    "requiresBuyerSellerConfirmation",
    "requiresAuditLogging",
    "requiresContactPurposeDisclosure",
    "requiresMinimumNecessaryData",
    "allowsBuyerContact",
    "allowsSellerContact",
    "allowsMessageSending",
    "allowsCallHandoff"
  ]);

  const MARKETPLACE_TRANSACTION_GATE_FIELDS = Object.freeze([
    "requiresUserApproval",
    "requiresBuyerSellerConfirmation",
    "requiresAuditLogging",
    "requiresPaymentGate",
    "requiresLogisticsGate",
    "requiresTermsDisclosure",
    "allowsOfferAcceptance",
    "allowsOrderCreation",
    "allowsPaymentProcessing",
    "allowsLogisticsDispatch",
    "allowsExternalMarketplaceNavigation"
  ]);

  const AGRITRADE_PARTNER_AUDIT_EVENT_FIELDS = Object.freeze([
    "eventType",
    "connectorId",
    "connectorStatus",
    "partnerCategories",
    "partnerBackedReviewAllowed",
    "buyerSellerContactEnabled",
    "marketplaceTransactionEnabled",
    "paymentEnabled",
    "logisticsDispatchEnabled",
    "noExecution",
    "createdAt"
  ]);

  const DEFAULT_BUYER_SELLER_CONTACT_GATE = Object.freeze({
    requiresUserApproval: true,
    requiresBuyerSellerConfirmation: true,
    requiresAuditLogging: true,
    requiresContactPurposeDisclosure: true,
    requiresMinimumNecessaryData: true,
    allowsBuyerContact: false,
    allowsSellerContact: false,
    allowsMessageSending: false,
    allowsCallHandoff: false
  });

  const DEFAULT_MARKETPLACE_TRANSACTION_GATE = Object.freeze({
    requiresUserApproval: true,
    requiresBuyerSellerConfirmation: true,
    requiresAuditLogging: true,
    requiresPaymentGate: true,
    requiresLogisticsGate: true,
    requiresTermsDisclosure: true,
    allowsOfferAcceptance: false,
    allowsOrderCreation: false,
    allowsPaymentProcessing: false,
    allowsLogisticsDispatch: false,
    allowsExternalMarketplaceNavigation: false
  });

  const AGRITRADE_PARTNER_CONNECTOR_CONTRACT = Object.freeze({
    connectorId: "market.agritrade_partner.not_configured",
    partnerName: "",
    sourceOwner: "AgriTrade partner verification required",
    connectorStatus: "not_configured",
    partnerCategories: Object.freeze([]),
    coveredCommodities: Object.freeze([]),
    coveredMarkets: Object.freeze([]),
    supportedCurrencies: Object.freeze([]),
    supportedUnits: Object.freeze([]),
    supportedLanguages: Object.freeze(["en"]),
    partnerVerificationStatus: "not_started",
    termsReviewStatus: "not_reviewed",
    marketplaceScope: "not reviewed",
    paymentGateStatus: "not_configured",
    logisticsGateStatus: "not_configured",
    freshnessModel: Object.freeze({
      freshnessField: "partnerLastVerifiedAt",
      staleAfter: "partner-specific",
      displayRequirement: "Show partner status, marketplace scope, and verification freshness before relying on partner-backed AgriTrade context."
    }),
    allowedResponseStates: Object.freeze(["browse_only_review", "general_guidance", "unavailable_source_fallback"]),
    buyerSellerContactGate: DEFAULT_BUYER_SELLER_CONTACT_GATE,
    marketplaceTransactionGate: DEFAULT_MARKETPLACE_TRANSACTION_GATE,
    auditRequirements: Object.freeze(["agritrade-partner-reviewed", "buyer-seller-contact-blocked", "marketplace-transaction-blocked"]),
    auditEvent: Object.freeze({
      eventType: "market.agritrade_partner_connector_created",
      connectorId: "market.agritrade_partner.not_configured",
      connectorStatus: "not_configured",
      partnerCategories: Object.freeze([]),
      partnerBackedReviewAllowed: false,
      buyerSellerContactEnabled: false,
      marketplaceTransactionEnabled: false,
      paymentEnabled: false,
      logisticsDispatchEnabled: false,
      noExecution: true,
      createdAt: null
    }),
    ...NO_EXECUTION_DEFAULTS
  });

  function normalizeConnectorStatus(value) {
    return AGRITRADE_PARTNER_STATUSES.includes(value) ? value : AGRITRADE_PARTNER_CONNECTOR_CONTRACT.connectorStatus;
  }

  function createAgriTradePartnerConnector(overrides = {}) {
    const connectorStatus = normalizeConnectorStatus(overrides.connectorStatus);
    const partnerCategories = Array.isArray(overrides.partnerCategories)
      ? overrides.partnerCategories.filter(category => AGRITRADE_PARTNER_CATEGORIES.includes(category))
      : [];
    return Object.freeze({
      ...AGRITRADE_PARTNER_CONNECTOR_CONTRACT,
      ...overrides,
      connectorStatus,
      partnerCategories: Object.freeze(partnerCategories),
      coveredCommodities: Object.freeze(Array.isArray(overrides.coveredCommodities) ? overrides.coveredCommodities.slice() : []),
      coveredMarkets: Object.freeze(Array.isArray(overrides.coveredMarkets) ? overrides.coveredMarkets.slice() : []),
      supportedCurrencies: Object.freeze(Array.isArray(overrides.supportedCurrencies) ? overrides.supportedCurrencies.slice() : []),
      supportedUnits: Object.freeze(Array.isArray(overrides.supportedUnits) ? overrides.supportedUnits.slice() : []),
      supportedLanguages: Object.freeze(Array.isArray(overrides.supportedLanguages) ? overrides.supportedLanguages.slice() : ["en"]),
      buyerSellerContactGate: Object.freeze({
        ...DEFAULT_BUYER_SELLER_CONTACT_GATE,
        ...(overrides.buyerSellerContactGate || {}),
        allowsBuyerContact: false,
        allowsSellerContact: false,
        allowsMessageSending: false,
        allowsCallHandoff: false
      }),
      marketplaceTransactionGate: Object.freeze({
        ...DEFAULT_MARKETPLACE_TRANSACTION_GATE,
        ...(overrides.marketplaceTransactionGate || {}),
        allowsOfferAcceptance: false,
        allowsOrderCreation: false,
        allowsPaymentProcessing: false,
        allowsLogisticsDispatch: false,
        allowsExternalMarketplaceNavigation: false
      }),
      auditRequirements: Object.freeze(Array.isArray(overrides.auditRequirements) ? overrides.auditRequirements.slice() : AGRITRADE_PARTNER_CONNECTOR_CONTRACT.auditRequirements.slice()),
      auditEvent: Object.freeze({
        ...AGRITRADE_PARTNER_CONNECTOR_CONTRACT.auditEvent,
        ...(overrides.auditEvent || {}),
        connectorId: overrides.connectorId || AGRITRADE_PARTNER_CONNECTOR_CONTRACT.connectorId,
        connectorStatus,
        partnerCategories: Object.freeze(partnerCategories),
        partnerBackedReviewAllowed: false,
        buyerSellerContactEnabled: false,
        marketplaceTransactionEnabled: false,
        paymentEnabled: false,
        logisticsDispatchEnabled: false,
        noExecution: true
      }),
      ...Object.fromEntries(Object.entries(NO_EXECUTION_DEFAULTS).map(([key, value]) => [key, value]))
    });
  }

  return Object.freeze({
    AGRITRADE_PARTNER_STATUSES,
    AGRITRADE_PARTNER_CATEGORIES,
    NO_EXECUTION_DEFAULTS,
    AGRITRADE_PARTNER_CONNECTOR_FIELDS,
    BUYER_SELLER_CONTACT_GATE_FIELDS,
    MARKETPLACE_TRANSACTION_GATE_FIELDS,
    AGRITRADE_PARTNER_AUDIT_EVENT_FIELDS,
    DEFAULT_BUYER_SELLER_CONTACT_GATE,
    DEFAULT_MARKETPLACE_TRANSACTION_GATE,
    AGRITRADE_PARTNER_CONNECTOR_CONTRACT,
    createAgriTradePartnerConnector
  });
});
