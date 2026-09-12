const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_AGRITRADE_PARTNER_CONNECTOR_CONTRACT_PHASE_35.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-agritrade-partner-connector-contract.js"),
  providerUniverse: path.join(root, "public", "nexus-provider-source-universe.js"),
  serviceCatalog: path.join(root, "public", "nexus-service-mode-catalog.js"),
  actionPlanner: path.join(root, "public", "nexus-platform-action-planner.js"),
  phase24Module: path.join(root, "public", "nexus-source-backed-answer-engine-contract.js"),
  phase34Module: path.join(root, "public", "nexus-market-price-source-connector-contract.js"),
  lowRiskBuilder: path.join(root, "scripts", "nexus-low-risk-suggestion-builder-qa.js"),
  standardSafety: path.join(root, "scripts", "nexus-standard-user-demo-final-safety-qa.js"),
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
    console.error(`[nexus-agritrade-partner-connector-contract-qa] ${message}`);
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
const providerUniverse = require(paths.providerUniverse).getNexusProviderSourceUniverse();
const serviceCatalog = read(paths.serviceCatalog);
const actionPlanner = read(paths.actionPlanner);
const lowRiskBuilder = read(paths.lowRiskBuilder);
const standardSafety = read(paths.standardSafety);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const statuses = [
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
];
const categories = [
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
];
const fields = [
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
];
const noExecutionFlags = [
  "noExecution",
  "partnerBackedReviewAllowed",
  "buyerSellerContactEnabled",
  "marketplaceTransactionEnabled",
  "orderCreationEnabled",
  "paymentEnabled",
  "logisticsDispatchEnabled",
  "providerContactEnabled",
  "farmDataSharingEnabled",
  "locationSharingEnabled",
  "liveActionEnabled",
  "buyerContacted",
  "sellerContacted",
  "messageSent",
  "callPlaced",
  "offerAccepted",
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

assert(roadmap.includes("| Phase 35 | AgriTrade partners |"), "Nexus 100 roadmap must include Phase 35 AgriTrade partners row.");
assert(read(paths.phase24Module).includes("SOURCE_BACKED_ANSWER_ENVELOPE"), "Phase 24 answer envelope contract must remain present.");
assert(read(paths.phase34Module).includes("MARKET_PRICE_SOURCE_CONNECTOR_CONTRACT"), "Phase 34 market price source connector contract must remain present.");
assert(providerUniverse.some(item => item.categoryId === "market.buyer_seller_partners" && item.defaultExecutionEnabled === false), "provider universe must keep buyer/seller marketplace partners disabled by default.");
assert(serviceCatalog.includes("agritrade_marketplace") && serviceCatalog.includes("partner-required"), "service catalog must keep AgriTrade marketplace partner-required.");
assert(actionPlanner.includes("agritade") === false, "action planner must not contain misspelled AgriTrade metadata.");
assert(actionPlanner.includes("agritrade_marketplace") && actionPlanner.includes("marketplace actions require approval"), "action planner must keep AgriTrade high-risk approval wording.");
assert(lowRiskBuilder.includes("marketplace.agritrade"), "low-risk browse-only AgriTrade compatibility must remain present.");
assert(standardSafety.includes("without buy, sell, payment, or account execution"), "standard user safety QA must keep AgriTrade browse/review-only guard.");

statuses.forEach(status => {
  assert(contract.AGRITRADE_PARTNER_STATUSES.includes(status), `contract must include status ${status}`);
  assert(doc.includes(status), `doc must include status ${status}`);
});
categories.forEach(category => {
  assert(contract.AGRITRADE_PARTNER_CATEGORIES.includes(category), `contract must include partner category ${category}`);
  assert(doc.includes(category), `doc must include partner category ${category}`);
});
fields.forEach(field => {
  assert(contract.AGRITRADE_PARTNER_CONNECTOR_FIELDS.includes(field), `contract must list field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.AGRITRADE_PARTNER_CONNECTOR_CONTRACT, field), `AgriTrade partner connector contract must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});
contract.BUYER_SELLER_CONTACT_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_BUYER_SELLER_CONTACT_GATE, field), `buyer/seller contact gate must include ${field}`);
  assert(doc.includes(field), `doc must document buyer/seller contact gate field ${field}`);
});
contract.MARKETPLACE_TRANSACTION_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_MARKETPLACE_TRANSACTION_GATE, field), `marketplace transaction gate must include ${field}`);
  assert(doc.includes(field), `doc must document marketplace transaction gate field ${field}`);
});
contract.AGRITRADE_PARTNER_AUDIT_EVENT_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.AGRITRADE_PARTNER_CONNECTOR_CONTRACT.auditEvent, field), `audit event must include ${field}`);
  assert(doc.includes(field), `doc must document audit field ${field}`);
});

["allowsBuyerContact", "allowsSellerContact", "allowsMessageSending", "allowsCallHandoff"].forEach(field => {
  assert(contract.DEFAULT_BUYER_SELLER_CONTACT_GATE[field] === false, `${field} must default false.`);
});
["allowsOfferAcceptance", "allowsOrderCreation", "allowsPaymentProcessing", "allowsLogisticsDispatch", "allowsExternalMarketplaceNavigation"].forEach(field => {
  assert(contract.DEFAULT_MARKETPLACE_TRANSACTION_GATE[field] === false, `${field} must default false.`);
});
noExecutionFlags.forEach(flag => {
  assert(contract.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely.`);
  assert(contract.AGRITRADE_PARTNER_CONNECTOR_CONTRACT[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `${flag} must match safe default.`);
});

const sample = contract.createAgriTradePartnerConnector({
  connectorId: "sample-agritrade",
  connectorStatus: "active_review_only",
  partnerCategories: ["buyer_directory_partner", "offer_review_partner", "unsafe"],
  buyerSellerContactGate: { allowsBuyerContact: true, allowsMessageSending: true },
  marketplaceTransactionGate: { allowsOrderCreation: true, allowsPaymentProcessing: true, allowsExternalMarketplaceNavigation: true }
});
assert(Object.isFrozen(sample), "created AgriTrade partner connector must be frozen.");
assert(sample.partnerCategories.includes("buyer_directory_partner"), "valid partner category must be preserved.");
assert(!sample.partnerCategories.includes("unsafe"), "invalid partner category must be filtered.");
assert(sample.buyerSellerContactGate.allowsBuyerContact === false, "buyer contact must remain disabled.");
assert(sample.buyerSellerContactGate.allowsMessageSending === false, "message sending must remain disabled.");
assert(sample.marketplaceTransactionGate.allowsOrderCreation === false, "order creation must remain disabled.");
assert(sample.marketplaceTransactionGate.allowsPaymentProcessing === false, "payment processing must remain disabled.");
assert(sample.marketplaceTransactionGate.allowsExternalMarketplaceNavigation === false, "external marketplace navigation must remain disabled.");
noExecutionFlags.forEach(flag => {
  assert(sample[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `created connector must force ${flag} safe default.`);
});

const invalid = contract.createAgriTradePartnerConnector({ connectorStatus: "live_now" });
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
  assert(!moduleSource.includes(forbidden), `AgriTrade partner connector contract must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-agritrade-partner-connector-contract.js",
  "NexusAgriTradePartnerConnectorContract",
  "createAgriTradePartnerConnector",
  "AGRITRADE_PARTNER_CONNECTOR_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(packageData.scripts["qa:nexus-agritrade-partner-connector-contract"] === "node scripts/nexus-agritrade-partner-connector-contract-qa.js", "package.json must expose qa:nexus-agritrade-partner-connector-contract");
assert(qaSuite.includes("scripts/nexus-agritrade-partner-connector-contract-qa.js"), "qa-suite.js must include AgriTrade partner connector contract QA");

console.log("[nexus-agritrade-partner-connector-contract-qa] passed");
