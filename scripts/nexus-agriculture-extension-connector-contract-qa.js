const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_AGRICULTURE_EXTENSION_CONNECTOR_CONTRACT_PHASE_31.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-agriculture-extension-connector-contract.js"),
  agricultureSources: path.join(root, "public", "nexus-agriculture-public-source-contracts.js"),
  providerUniverse: path.join(root, "public", "nexus-provider-source-universe.js"),
  phase24Module: path.join(root, "public", "nexus-source-backed-answer-engine-contract.js"),
  phase30Module: path.join(root, "public", "nexus-multilingual-data-labeling-contract.js"),
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
    console.error(`[nexus-agriculture-extension-connector-contract-qa] ${message}`);
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
  "partner_agreement_required",
  "regional_scope_required",
  "language_review_required",
  "sandbox_testing_required",
  "approved_not_live",
  "active_source_only",
  "rejected_or_blocked",
  "inactive"
];
const categories = [
  "crop_advisory",
  "field_support",
  "soil_guidance",
  "irrigation_guidance",
  "pest_disease_guidance",
  "post_harvest_support",
  "training_referral",
  "cooperative_navigation",
  "market_readiness_guidance",
  "climate_resilience_guidance"
];
const fields = [
  "connectorId",
  "extensionOfficeName",
  "sourceOwner",
  "connectorStatus",
  "serviceCategories",
  "serviceRegions",
  "supportedCrops",
  "supportedLanguages",
  "sourceVerificationStatus",
  "partnerAgreementStatus",
  "freshnessModel",
  "regionalScope",
  "languageScope",
  "allowedResponseStates",
  "contactApprovalGate",
  "farmDataSharingGate",
  "auditRequirements",
  "auditEvent",
  "sourceBackedGuidanceAllowed",
  "providerContactEnabled",
  "farmDataSharingEnabled",
  "locationSharingEnabled",
  "liveActionEnabled",
  "noExecution"
];
const noExecutionFlags = [
  "noExecution",
  "sourceBackedGuidanceAllowed",
  "providerContactEnabled",
  "farmDataSharingEnabled",
  "locationSharingEnabled",
  "liveActionEnabled",
  "providerContacted",
  "userDataShared",
  "externalActionExecuted",
  "paymentExecuted",
  "marketplaceTransactionExecuted",
  "medicalRecordAccessed",
  "prescriptionSubmitted",
  "emergencyDispatched",
  "locationShared",
  "callOrMessageSent"
];

assert(roadmap.includes("| Phase 31 | Agriculture extension connectors |"), "Nexus 100 roadmap must include Phase 31 agriculture extension connectors row.");
assert(read(paths.phase24Module).includes("SOURCE_BACKED_ANSWER_ENVELOPE"), "Phase 24 answer envelope contract must remain present.");
assert(read(paths.phase30Module).includes("MULTILINGUAL_SOURCE_LABEL_CONTRACT"), "Phase 30 multilingual data label contract must remain present.");
assert(agricultureSources.some(item => item.sourceId === "agriculture.extension.advisory"), "Phase 20 agriculture extension advisory source must remain present.");
assert(providerUniverse.some(item => item.categoryId === "agriculture.extension_offices" && item.defaultExecutionEnabled === false), "provider universe must keep agriculture extension offices disabled by default.");

statuses.forEach(status => {
  assert(contract.EXTENSION_CONNECTOR_STATUSES.includes(status), `contract must include status ${status}`);
  assert(doc.includes(status), `doc must include status ${status}`);
});
categories.forEach(category => {
  assert(contract.EXTENSION_SERVICE_CATEGORIES.includes(category), `contract must include service category ${category}`);
  assert(doc.includes(category), `doc must include service category ${category}`);
});
fields.forEach(field => {
  assert(contract.EXTENSION_CONNECTOR_FIELDS.includes(field), `contract must list field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.AGRICULTURE_EXTENSION_CONNECTOR_CONTRACT, field), `extension connector contract must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});
contract.CONTACT_APPROVAL_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_CONTACT_APPROVAL_GATE, field), `contact approval gate must include ${field}`);
  assert(doc.includes(field), `doc must document contact approval gate field ${field}`);
});
contract.FARM_DATA_SHARING_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_FARM_DATA_SHARING_GATE, field), `farm data sharing gate must include ${field}`);
  assert(doc.includes(field), `doc must document farm data sharing gate field ${field}`);
});
contract.EXTENSION_AUDIT_EVENT_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.AGRICULTURE_EXTENSION_CONNECTOR_CONTRACT.auditEvent, field), `audit event must include ${field}`);
  assert(doc.includes(field), `doc must document audit field ${field}`);
});

["allowsExtensionContact", "allowsVisitScheduling", "allowsMessageSending", "allowsCallHandoff"].forEach(field => {
  assert(contract.DEFAULT_CONTACT_APPROVAL_GATE[field] === false, `${field} must default false.`);
});
["allowsFarmDataSharing", "allowsPreciseLocationSharing", "allowsCropPhotoSharing"].forEach(field => {
  assert(contract.DEFAULT_FARM_DATA_SHARING_GATE[field] === false, `${field} must default false.`);
});
noExecutionFlags.forEach(flag => {
  assert(contract.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely.`);
  assert(contract.AGRICULTURE_EXTENSION_CONNECTOR_CONTRACT[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `${flag} must match safe default.`);
});

const sample = contract.createAgricultureExtensionConnector({
  connectorId: "sample-extension",
  connectorStatus: "active_source_only",
  serviceCategories: ["crop_advisory", "field_support", "unsafe"],
  contactApprovalGate: { allowsExtensionContact: true, allowsVisitScheduling: true },
  farmDataSharingGate: { allowsFarmDataSharing: true, allowsPreciseLocationSharing: true }
});
assert(Object.isFrozen(sample), "created extension connector must be frozen.");
assert(sample.serviceCategories.includes("crop_advisory"), "valid service category must be preserved.");
assert(!sample.serviceCategories.includes("unsafe"), "invalid service category must be filtered.");
assert(sample.contactApprovalGate.allowsExtensionContact === false, "extension contact must remain disabled.");
assert(sample.contactApprovalGate.allowsVisitScheduling === false, "visit scheduling must remain disabled.");
assert(sample.farmDataSharingGate.allowsFarmDataSharing === false, "farm data sharing must remain disabled.");
assert(sample.farmDataSharingGate.allowsPreciseLocationSharing === false, "precise location sharing must remain disabled.");
noExecutionFlags.forEach(flag => {
  assert(sample[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `created connector must force ${flag} safe default.`);
});

const invalid = contract.createAgricultureExtensionConnector({ connectorStatus: "live_now" });
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
  assert(!moduleSource.includes(forbidden), `extension connector contract must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-agriculture-extension-connector-contract.js",
  "NexusAgricultureExtensionConnectorContract",
  "createAgricultureExtensionConnector",
  "AGRICULTURE_EXTENSION_CONNECTOR_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(packageData.scripts["qa:nexus-agriculture-extension-connector-contract"] === "node scripts/nexus-agriculture-extension-connector-contract-qa.js", "package.json must expose qa:nexus-agriculture-extension-connector-contract");
assert(qaSuite.includes("scripts/nexus-agriculture-extension-connector-contract-qa.js"), "qa-suite.js must include agriculture extension connector contract QA");

console.log("[nexus-agriculture-extension-connector-contract-qa] passed");
