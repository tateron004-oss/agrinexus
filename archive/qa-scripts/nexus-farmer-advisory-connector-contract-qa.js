const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_FARMER_ADVISORY_CONNECTOR_CONTRACT_PHASE_32.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-farmer-advisory-connector-contract.js"),
  agricultureSources: path.join(root, "public", "nexus-agriculture-public-source-contracts.js"),
  providerUniverse: path.join(root, "public", "nexus-provider-source-universe.js"),
  phase24Module: path.join(root, "public", "nexus-source-backed-answer-engine-contract.js"),
  phase30Module: path.join(root, "public", "nexus-multilingual-data-labeling-contract.js"),
  phase31Module: path.join(root, "public", "nexus-agriculture-extension-connector-contract.js"),
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
    console.error(`[nexus-farmer-advisory-connector-contract-qa] ${message}`);
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
  "advisor_credential_review_required",
  "regional_scope_required",
  "language_review_required",
  "sandbox_testing_required",
  "approved_not_live",
  "active_source_only",
  "rejected_or_blocked",
  "inactive"
];
const categories = [
  "farm_planning",
  "crop_care_guidance",
  "soil_fertility_guidance",
  "irrigation_planning",
  "pest_disease_triage",
  "post_harvest_guidance",
  "market_readiness_advice",
  "cooperative_advisory",
  "climate_resilience_planning",
  "training_pathway_advice"
];
const fields = [
  "connectorId",
  "advisoryPartnerName",
  "sourceOwner",
  "connectorStatus",
  "serviceCategories",
  "serviceRegions",
  "supportedCrops",
  "supportedLanguages",
  "advisorCredentialStatus",
  "sourceVerificationStatus",
  "partnerAgreementStatus",
  "freshnessModel",
  "regionalScope",
  "languageScope",
  "allowedResponseStates",
  "advisoryHandoffGate",
  "farmDataConsentGate",
  "auditRequirements",
  "auditEvent",
  "sourceBackedGuidanceAllowed",
  "advisoryHandoffEnabled",
  "farmDataSharingEnabled",
  "locationSharingEnabled",
  "liveActionEnabled",
  "noExecution"
];
const noExecutionFlags = [
  "noExecution",
  "sourceBackedGuidanceAllowed",
  "advisoryHandoffEnabled",
  "providerContactEnabled",
  "farmDataSharingEnabled",
  "locationSharingEnabled",
  "liveActionEnabled",
  "advisorContacted",
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

assert(roadmap.includes("| Phase 32 | Farmer advisory connectors |"), "Nexus 100 roadmap must include Phase 32 farmer advisory connectors row.");
assert(read(paths.phase24Module).includes("SOURCE_BACKED_ANSWER_ENVELOPE"), "Phase 24 answer envelope contract must remain present.");
assert(read(paths.phase30Module).includes("MULTILINGUAL_SOURCE_LABEL_CONTRACT"), "Phase 30 multilingual data label contract must remain present.");
assert(read(paths.phase31Module).includes("AGRICULTURE_EXTENSION_CONNECTOR_CONTRACT"), "Phase 31 extension connector contract must remain present.");
assert(agricultureSources.some(item => item.sourceId === "agriculture.extension.advisory"), "Phase 20 agriculture extension advisory source must remain present.");
assert(providerUniverse.some(item => item.categoryId === "agriculture.farmer_cooperatives" && item.defaultExecutionEnabled === false), "provider universe must keep farmer cooperative/advisory partners disabled by default.");

statuses.forEach(status => {
  assert(contract.ADVISORY_CONNECTOR_STATUSES.includes(status), `contract must include status ${status}`);
  assert(doc.includes(status), `doc must include status ${status}`);
});
categories.forEach(category => {
  assert(contract.ADVISORY_SERVICE_CATEGORIES.includes(category), `contract must include service category ${category}`);
  assert(doc.includes(category), `doc must include service category ${category}`);
});
fields.forEach(field => {
  assert(contract.FARMER_ADVISORY_CONNECTOR_FIELDS.includes(field), `contract must list field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.FARMER_ADVISORY_CONNECTOR_CONTRACT, field), `farmer advisory connector contract must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});
contract.ADVISORY_HANDOFF_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_ADVISORY_HANDOFF_GATE, field), `advisory handoff gate must include ${field}`);
  assert(doc.includes(field), `doc must document advisory handoff gate field ${field}`);
});
contract.FARM_DATA_CONSENT_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_FARM_DATA_CONSENT_GATE, field), `farm data consent gate must include ${field}`);
  assert(doc.includes(field), `doc must document farm data consent gate field ${field}`);
});
contract.ADVISORY_AUDIT_EVENT_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.FARMER_ADVISORY_CONNECTOR_CONTRACT.auditEvent, field), `audit event must include ${field}`);
  assert(doc.includes(field), `doc must document audit field ${field}`);
});

["allowsAdvisorContact", "allowsSessionScheduling", "allowsMessageSending", "allowsCallHandoff"].forEach(field => {
  assert(contract.DEFAULT_ADVISORY_HANDOFF_GATE[field] === false, `${field} must default false.`);
});
["allowsFarmDataSharing", "allowsPreciseLocationSharing", "allowsCropPhotoSharing", "allowsFarmProfileSharing"].forEach(field => {
  assert(contract.DEFAULT_FARM_DATA_CONSENT_GATE[field] === false, `${field} must default false.`);
});
noExecutionFlags.forEach(flag => {
  assert(contract.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely.`);
  assert(contract.FARMER_ADVISORY_CONNECTOR_CONTRACT[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `${flag} must match safe default.`);
});

const sample = contract.createFarmerAdvisoryConnector({
  connectorId: "sample-advisory",
  connectorStatus: "active_source_only",
  serviceCategories: ["farm_planning", "crop_care_guidance", "unsafe"],
  advisoryHandoffGate: { allowsAdvisorContact: true, allowsSessionScheduling: true },
  farmDataConsentGate: { allowsFarmDataSharing: true, allowsPreciseLocationSharing: true, allowsFarmProfileSharing: true }
});
assert(Object.isFrozen(sample), "created farmer advisory connector must be frozen.");
assert(sample.serviceCategories.includes("farm_planning"), "valid service category must be preserved.");
assert(!sample.serviceCategories.includes("unsafe"), "invalid service category must be filtered.");
assert(sample.advisoryHandoffGate.allowsAdvisorContact === false, "advisor contact must remain disabled.");
assert(sample.advisoryHandoffGate.allowsSessionScheduling === false, "session scheduling must remain disabled.");
assert(sample.farmDataConsentGate.allowsFarmDataSharing === false, "farm data sharing must remain disabled.");
assert(sample.farmDataConsentGate.allowsPreciseLocationSharing === false, "precise location sharing must remain disabled.");
assert(sample.farmDataConsentGate.allowsFarmProfileSharing === false, "farm profile sharing must remain disabled.");
noExecutionFlags.forEach(flag => {
  assert(sample[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `created connector must force ${flag} safe default.`);
});

const invalid = contract.createFarmerAdvisoryConnector({ connectorStatus: "live_now" });
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
  assert(!moduleSource.includes(forbidden), `farmer advisory connector contract must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-farmer-advisory-connector-contract.js",
  "NexusFarmerAdvisoryConnectorContract",
  "createFarmerAdvisoryConnector",
  "FARMER_ADVISORY_CONNECTOR_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(packageData.scripts["qa:nexus-farmer-advisory-connector-contract"] === "node scripts/nexus-farmer-advisory-connector-contract-qa.js", "package.json must expose qa:nexus-farmer-advisory-connector-contract");
assert(qaSuite.includes("scripts/nexus-farmer-advisory-connector-contract-qa.js"), "qa-suite.js must include farmer advisory connector contract QA");

console.log("[nexus-farmer-advisory-connector-contract-qa] passed");
