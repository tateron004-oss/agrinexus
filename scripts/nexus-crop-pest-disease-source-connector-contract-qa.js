const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_CROP_PEST_DISEASE_SOURCE_CONNECTOR_CONTRACT_PHASE_33.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-crop-pest-disease-source-connector-contract.js"),
  agricultureSources: path.join(root, "public", "nexus-agriculture-public-source-contracts.js"),
  providerUniverse: path.join(root, "public", "nexus-provider-source-universe.js"),
  phase24Module: path.join(root, "public", "nexus-source-backed-answer-engine-contract.js"),
  phase30Module: path.join(root, "public", "nexus-multilingual-data-labeling-contract.js"),
  phase31Module: path.join(root, "public", "nexus-agriculture-extension-connector-contract.js"),
  phase32Module: path.join(root, "public", "nexus-farmer-advisory-connector-contract.js"),
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
    console.error(`[nexus-crop-pest-disease-source-connector-contract-qa] ${message}`);
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
  "authority_scope_required",
  "freshness_rule_required",
  "regional_scope_required",
  "language_review_required",
  "sandbox_testing_required",
  "approved_not_live",
  "active_source_only",
  "rejected_or_blocked",
  "inactive"
];
const categories = [
  "pest_alert",
  "disease_advisory",
  "crop_protection_guidance",
  "field_scouting_guidance",
  "symptom_triage_guidance",
  "integrated_pest_management",
  "plant_health_authority_notice",
  "regional_outbreak_notice",
  "safe_treatment_guidance",
  "extension_referral_guidance"
];
const fields = [
  "connectorId",
  "authorityName",
  "sourceOwner",
  "connectorStatus",
  "sourceCategories",
  "coveredRegions",
  "coveredCrops",
  "coveredPests",
  "coveredDiseases",
  "supportedLanguages",
  "authorityScopeStatus",
  "sourceVerificationStatus",
  "freshnessRuleStatus",
  "freshnessModel",
  "regionalScope",
  "languageScope",
  "allowedResponseStates",
  "diagnosisBoundary",
  "cropEvidenceConsentGate",
  "auditRequirements",
  "auditEvent",
  "sourceBackedGuidanceAllowed",
  "diagnosisClaimAllowed",
  "cameraUseEnabled",
  "cropPhotoSharingEnabled",
  "farmDataSharingEnabled",
  "locationSharingEnabled",
  "liveActionEnabled",
  "noExecution"
];
const noExecutionFlags = [
  "noExecution",
  "sourceBackedGuidanceAllowed",
  "diagnosisClaimAllowed",
  "cropDiagnosisEnabled",
  "cameraUseEnabled",
  "cropPhotoSharingEnabled",
  "providerContactEnabled",
  "farmDataSharingEnabled",
  "locationSharingEnabled",
  "liveActionEnabled",
  "authorityContacted",
  "advisorContacted",
  "userDataShared",
  "externalActionExecuted",
  "paymentExecuted",
  "marketplaceTransactionExecuted",
  "logisticsDispatched",
  "droneDispatched",
  "medicalRecordAccessed",
  "prescriptionSubmitted",
  "emergencyDispatched",
  "locationShared",
  "callOrMessageSent"
];

assert(roadmap.includes("| Phase 33 | Crop/pest/disease sources |"), "Nexus 100 roadmap must include Phase 33 crop/pest/disease sources row.");
assert(read(paths.phase24Module).includes("SOURCE_BACKED_ANSWER_ENVELOPE"), "Phase 24 answer envelope contract must remain present.");
assert(read(paths.phase30Module).includes("MULTILINGUAL_SOURCE_LABEL_CONTRACT"), "Phase 30 multilingual data label contract must remain present.");
assert(read(paths.phase31Module).includes("AGRICULTURE_EXTENSION_CONNECTOR_CONTRACT"), "Phase 31 extension connector contract must remain present.");
assert(read(paths.phase32Module).includes("FARMER_ADVISORY_CONNECTOR_CONTRACT"), "Phase 32 farmer advisory connector contract must remain present.");
assert(agricultureSources.some(item => item.sourceId === "agriculture.pest.disease" && item.executionEnabled === false), "Phase 20 agriculture pest/disease source must remain execution-disabled.");
assert(providerUniverse.some(item => item.categoryId === "agriculture.crop_pest_authorities" && item.defaultExecutionEnabled === false), "provider universe must keep crop pest authorities disabled by default.");

statuses.forEach(status => {
  assert(contract.CROP_AUTHORITY_SOURCE_STATUSES.includes(status), `contract must include status ${status}`);
  assert(doc.includes(status), `doc must include status ${status}`);
});
categories.forEach(category => {
  assert(contract.CROP_AUTHORITY_SOURCE_CATEGORIES.includes(category), `contract must include source category ${category}`);
  assert(doc.includes(category), `doc must include source category ${category}`);
});
fields.forEach(field => {
  assert(contract.CROP_PEST_DISEASE_SOURCE_CONNECTOR_FIELDS.includes(field), `contract must list field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.CROP_PEST_DISEASE_SOURCE_CONNECTOR_CONTRACT, field), `crop source connector contract must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});
contract.DIAGNOSIS_BOUNDARY_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_DIAGNOSIS_BOUNDARY, field), `diagnosis boundary must include ${field}`);
  assert(doc.includes(field), `doc must document diagnosis boundary field ${field}`);
});
contract.CROP_EVIDENCE_CONSENT_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_CROP_EVIDENCE_CONSENT_GATE, field), `crop evidence consent gate must include ${field}`);
  assert(doc.includes(field), `doc must document crop evidence consent gate field ${field}`);
});
contract.CROP_AUTHORITY_AUDIT_EVENT_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.CROP_PEST_DISEASE_SOURCE_CONNECTOR_CONTRACT.auditEvent, field), `audit event must include ${field}`);
  assert(doc.includes(field), `doc must document audit field ${field}`);
});

["allowsFinalDiagnosisClaim", "allowsTreatmentPrescription", "allowsAuthorityContact", "allowsAdvisorHandoff"].forEach(field => {
  assert(contract.DEFAULT_DIAGNOSIS_BOUNDARY[field] === false, `${field} must default false.`);
});
["allowsCropPhotoSharing", "allowsPreciseLocationSharing", "allowsFarmDataSharing", "allowsCameraActivation"].forEach(field => {
  assert(contract.DEFAULT_CROP_EVIDENCE_CONSENT_GATE[field] === false, `${field} must default false.`);
});
noExecutionFlags.forEach(flag => {
  assert(contract.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely.`);
  assert(contract.CROP_PEST_DISEASE_SOURCE_CONNECTOR_CONTRACT[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `${flag} must match safe default.`);
});

const sample = contract.createCropPestDiseaseSourceConnector({
  connectorId: "sample-crop-authority",
  connectorStatus: "active_source_only",
  sourceCategories: ["pest_alert", "disease_advisory", "unsafe"],
  diagnosisBoundary: { allowsFinalDiagnosisClaim: true, allowsAuthorityContact: true },
  cropEvidenceConsentGate: { allowsCropPhotoSharing: true, allowsPreciseLocationSharing: true, allowsCameraActivation: true }
});
assert(Object.isFrozen(sample), "created crop pest disease connector must be frozen.");
assert(sample.sourceCategories.includes("pest_alert"), "valid source category must be preserved.");
assert(!sample.sourceCategories.includes("unsafe"), "invalid source category must be filtered.");
assert(sample.diagnosisBoundary.allowsFinalDiagnosisClaim === false, "diagnosis claim must remain disabled.");
assert(sample.diagnosisBoundary.allowsAuthorityContact === false, "authority contact must remain disabled.");
assert(sample.cropEvidenceConsentGate.allowsCropPhotoSharing === false, "crop photo sharing must remain disabled.");
assert(sample.cropEvidenceConsentGate.allowsPreciseLocationSharing === false, "precise location sharing must remain disabled.");
assert(sample.cropEvidenceConsentGate.allowsCameraActivation === false, "camera activation must remain disabled.");
noExecutionFlags.forEach(flag => {
  assert(sample[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `created connector must force ${flag} safe default.`);
});

const invalid = contract.createCropPestDiseaseSourceConnector({ connectorStatus: "live_now" });
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
  assert(!moduleSource.includes(forbidden), `crop pest disease source connector contract must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-crop-pest-disease-source-connector-contract.js",
  "NexusCropPestDiseaseSourceConnectorContract",
  "createCropPestDiseaseSourceConnector",
  "CROP_PEST_DISEASE_SOURCE_CONNECTOR_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(packageData.scripts["qa:nexus-crop-pest-disease-source-connector-contract"] === "node scripts/nexus-crop-pest-disease-source-connector-contract-qa.js", "package.json must expose qa:nexus-crop-pest-disease-source-connector-contract");
assert(qaSuite.includes("scripts/nexus-crop-pest-disease-source-connector-contract-qa.js"), "qa-suite.js must include crop pest disease source connector contract QA");

console.log("[nexus-crop-pest-disease-source-connector-contract-qa] passed");
