const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_MARKET_PRICE_SOURCE_CONNECTOR_CONTRACT_PHASE_34.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-market-price-source-connector-contract.js"),
  publicBaseline: path.join(root, "public", "nexus-public-data-connector-baseline.js"),
  agricultureSources: path.join(root, "public", "nexus-agriculture-public-source-contracts.js"),
  providerUniverse: path.join(root, "public", "nexus-provider-source-universe.js"),
  phase24Module: path.join(root, "public", "nexus-source-backed-answer-engine-contract.js"),
  phase25Module: path.join(root, "public", "nexus-citation-freshness-confidence-contract.js"),
  phase30Module: path.join(root, "public", "nexus-multilingual-data-labeling-contract.js"),
  phase33Module: path.join(root, "public", "nexus-crop-pest-disease-source-connector-contract.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-market-price-source-connector-contract-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const doc = read(paths.doc);
const roadmap = read(paths.roadmap);
const moduleSource = read(paths.module);
const contract = require(paths.module);
const publicBaseline = require(paths.publicBaseline).getPublicDataConnectorBaseline();
const agricultureSources = require(paths.agricultureSources).getAgriculturePublicSourceContracts();
const providerUniverse = require(paths.providerUniverse).getNexusProviderSourceUniverse();
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const statuses = [
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
];
const categories = [
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
];
const fields = [
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
];
const noExecutionFlags = [
  "noExecution",
  "sourceBackedPriceContextAllowed",
  "livePriceQuoteAllowed",
  "buyerSellerContactEnabled",
  "marketplaceTransactionEnabled",
  "paymentEnabled",
  "logisticsDispatchEnabled",
  "providerContactEnabled",
  "farmDataSharingEnabled",
  "locationSharingEnabled",
  "liveActionEnabled",
  "buyerContacted",
  "sellerContacted",
  "orderCreated",
  "paymentExecuted",
  "logisticsDispatched",
  "userDataShared",
  "externalActionExecuted",
  "medicalRecordAccessed",
  "prescriptionSubmitted",
  "emergencyDispatched",
  "locationShared",
  "callOrMessageSent"
];

assert(roadmap.includes("| Phase 34 | Market price sources |"), "Nexus 100 roadmap must include Phase 34 market price sources row.");
assert(read(paths.phase24Module).includes("SOURCE_BACKED_ANSWER_ENVELOPE"), "Phase 24 answer envelope contract must remain present.");
assert(read(paths.phase25Module).includes("CITATION_TRUST_LABEL_CONTRACT"), "Phase 25 citation freshness confidence contract must remain present.");
assert(read(paths.phase30Module).includes("MULTILINGUAL_SOURCE_LABEL_CONTRACT"), "Phase 30 multilingual data label contract must remain present.");
assert(read(paths.phase33Module).includes("CROP_PEST_DISEASE_SOURCE_CONNECTOR_CONTRACT"), "Phase 33 crop pest disease source connector contract must remain present.");
assert(publicBaseline.some(item => item.connectorId === "public.market.prices" && item.executionEnabled === false), "Phase 19 public market prices baseline must remain execution-disabled.");
assert(agricultureSources.some(item => item.sourceId === "agriculture.market.context" && item.marketplaceTransactionEnabled === false), "Phase 20 agriculture market context must remain marketplace-disabled.");
assert(providerUniverse.some(item => item.categoryId === "market.price_sources" && item.defaultExecutionEnabled === false), "provider universe must keep market price sources disabled by default.");

statuses.forEach(status => {
  assert(contract.MARKET_PRICE_SOURCE_STATUSES.includes(status), `contract must include status ${status}`);
  assert(doc.includes(status), `doc must include status ${status}`);
});
categories.forEach(category => {
  assert(contract.MARKET_PRICE_SOURCE_CATEGORIES.includes(category), `contract must include source category ${category}`);
  assert(doc.includes(category), `doc must include source category ${category}`);
});
fields.forEach(field => {
  assert(contract.MARKET_PRICE_SOURCE_CONNECTOR_FIELDS.includes(field), `contract must list field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.MARKET_PRICE_SOURCE_CONNECTOR_CONTRACT, field), `market price source connector contract must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});
contract.PRICE_ATTRIBUTION_BOUNDARY_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_PRICE_ATTRIBUTION_BOUNDARY, field), `price attribution boundary must include ${field}`);
  assert(doc.includes(field), `doc must document price attribution boundary field ${field}`);
});
contract.MARKETPLACE_ACTION_BOUNDARY_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_MARKETPLACE_ACTION_BOUNDARY, field), `marketplace action boundary must include ${field}`);
  assert(doc.includes(field), `doc must document marketplace action boundary field ${field}`);
});
contract.MARKET_PRICE_AUDIT_EVENT_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.MARKET_PRICE_SOURCE_CONNECTOR_CONTRACT.auditEvent, field), `audit event must include ${field}`);
  assert(doc.includes(field), `doc must document audit field ${field}`);
});

["allowsCurrentPriceClaim", "allowsFirmOfferClaim", "allowsGuaranteedPriceClaim"].forEach(field => {
  assert(contract.DEFAULT_PRICE_ATTRIBUTION_BOUNDARY[field] === false, `${field} must default false.`);
});
["allowsBuyerContact", "allowsSellerContact", "allowsOrderCreation", "allowsPaymentProcessing", "allowsLogisticsDispatch"].forEach(field => {
  assert(contract.DEFAULT_MARKETPLACE_ACTION_BOUNDARY[field] === false, `${field} must default false.`);
});
noExecutionFlags.forEach(flag => {
  assert(contract.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely.`);
  assert(contract.MARKET_PRICE_SOURCE_CONNECTOR_CONTRACT[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `${flag} must match safe default.`);
});

const sample = contract.createMarketPriceSourceConnector({
  connectorId: "sample-market-price",
  connectorStatus: "active_source_only",
  sourceCategories: ["commodity_spot_price", "public_market_board", "unsafe"],
  priceAttributionBoundary: { allowsCurrentPriceClaim: true, allowsGuaranteedPriceClaim: true },
  marketplaceActionBoundary: { allowsBuyerContact: true, allowsOrderCreation: true, allowsPaymentProcessing: true }
});
assert(Object.isFrozen(sample), "created market price connector must be frozen.");
assert(sample.sourceCategories.includes("commodity_spot_price"), "valid source category must be preserved.");
assert(!sample.sourceCategories.includes("unsafe"), "invalid source category must be filtered.");
assert(sample.priceAttributionBoundary.allowsCurrentPriceClaim === false, "current price claim must remain disabled.");
assert(sample.priceAttributionBoundary.allowsGuaranteedPriceClaim === false, "guaranteed price claim must remain disabled.");
assert(sample.marketplaceActionBoundary.allowsBuyerContact === false, "buyer contact must remain disabled.");
assert(sample.marketplaceActionBoundary.allowsOrderCreation === false, "order creation must remain disabled.");
assert(sample.marketplaceActionBoundary.allowsPaymentProcessing === false, "payment processing must remain disabled.");
noExecutionFlags.forEach(flag => {
  assert(sample[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `created connector must force ${flag} safe default.`);
});

const invalid = contract.createMarketPriceSourceConnector({ connectorStatus: "live_now" });
assert(invalid.connectorStatus === "not_configured", "invalid connector status must fall back to not_configured.");

[
  "fetch(",
  "XMLHttpRequest",
  "axios",
  "EventSource",
  "WebSocket",
  "localStorage",
  "sessionStorage",
  "navigator.geolocation",
  "navigator.mediaDevices",
  "window.location",
  "document.location",
  "setInterval",
  "execute:",
  "handler:",
  "adapter:",
  "providerHandoff",
  "processPayment",
  "dispatchEmergency",
  "contactProvider",
  "open("
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `market price source connector contract must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-market-price-source-connector-contract.js",
  "NexusMarketPriceSourceConnectorContract",
  "createMarketPriceSourceConnector",
  "MARKET_PRICE_SOURCE_CONNECTOR_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(packageData.scripts["qa:nexus-market-price-source-connector-contract"] === "node scripts/nexus-market-price-source-connector-contract-qa.js", "package.json must expose qa:nexus-market-price-source-connector-contract");
assert(qaSuite.includes("scripts/nexus-market-price-source-connector-contract-qa.js"), "qa-suite.js must include market price source connector contract QA");

console.log("[nexus-market-price-source-connector-contract-qa] passed");
