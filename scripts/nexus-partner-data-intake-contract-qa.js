const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_PARTNER_DATA_INTAKE_CONTRACT_PHASE_27.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-partner-data-intake-contract.js"),
  phase24Module: path.join(root, "public", "nexus-source-backed-answer-engine-contract.js"),
  phase25Module: path.join(root, "public", "nexus-citation-freshness-confidence-contract.js"),
  phase26Module: path.join(root, "public", "nexus-data-quality-monitoring-contract.js"),
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
    console.error(`[nexus-partner-data-intake-contract-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const doc = read(paths.doc);
const roadmap = read(paths.roadmap);
const moduleSource = read(paths.module);
const phase24Source = read(paths.phase24Module);
const phase25Source = read(paths.phase25Module);
const phase26Source = read(paths.phase26Module);
const contract = require(paths.module);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const requiredStatuses = [
  "draft",
  "received_not_processed",
  "schema_review_required",
  "terms_review_required",
  "source_verification_required",
  "sandbox_only",
  "approved_for_source_backed_guidance",
  "rejected_or_blocked",
  "inactive"
];

const requiredFeedTypes = [
  "provider_directory",
  "clinic_availability",
  "telehealth_availability",
  "mobile_clinic_schedule",
  "pharmacy_directory",
  "prescription_workflow_metadata",
  "transportation_resource",
  "workforce_program",
  "agriculture_resource",
  "community_service_resource",
  "marketplace_partner_catalog",
  "education_content",
  "medical_records_metadata",
  "payment_provider_metadata",
  "emergency_resource_directory"
];

const requiredRecordFields = [
  "intakeId",
  "partnerName",
  "partnerType",
  "feedType",
  "intakeStatus",
  "sourceOwner",
  "sourceType",
  "integrationMethod",
  "schemaVersion",
  "expectedFields",
  "providedFields",
  "missingFields",
  "termsStatus",
  "dataRightsStatus",
  "authenticationRequirements",
  "consentRequirements",
  "permissionRequirements",
  "complianceRequirements",
  "freshnessModel",
  "sandboxReview",
  "approvalGate",
  "auditRequirements",
  "liveActionEnabled",
  "userApprovalRequired",
  "providerConfirmationRequired",
  "noExecution"
];

const noExecutionFlags = [
  "noExecution",
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

assert(roadmap.includes("| Phase 27 | Partner data intake |"), "Nexus 100 roadmap must include Phase 27 partner data intake row.");
assert(phase24Source.includes("SOURCE_BACKED_ANSWER_ENVELOPE"), "Phase 24 source-backed answer envelope contract must remain present.");
assert(phase25Source.includes("CITATION_TRUST_LABEL_CONTRACT"), "Phase 25 citation freshness confidence contract must remain present.");
assert(phase26Source.includes("DATA_QUALITY_OBSERVATION_CONTRACT"), "Phase 26 data quality monitoring contract must remain present.");

requiredStatuses.forEach(status => {
  assert(contract.PARTNER_INTAKE_STATUSES.includes(status), `contract must include intake status ${status}`);
  assert(doc.includes(status), `doc must include intake status ${status}`);
});

requiredFeedTypes.forEach(type => {
  assert(contract.PARTNER_FEED_TYPES.includes(type), `contract must include partner feed type ${type}`);
  assert(doc.includes(type), `doc must include partner feed type ${type}`);
});

requiredRecordFields.forEach(field => {
  assert(contract.PARTNER_INTAKE_RECORD_FIELDS.includes(field), `contract must list intake record field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.PARTNER_DATA_INTAKE_RECORD_CONTRACT, field), `intake record contract must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});

contract.SANDBOX_REVIEW_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_SANDBOX_REVIEW, field), `default sandbox review must include ${field}`);
  assert(doc.includes(field), `doc must document sandbox review field ${field}`);
});

contract.APPROVAL_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_APPROVAL_GATE, field), `default approval gate must include ${field}`);
  assert(doc.includes(field), `doc must document approval gate field ${field}`);
});

assert(contract.DEFAULT_APPROVAL_GATE.allowsSourceBackedGuidance === false, "default approval gate must block source-backed guidance.");
assert(contract.DEFAULT_APPROVAL_GATE.allowsLiveAction === false, "default approval gate must block live action.");

noExecutionFlags.forEach(flag => {
  assert(contract.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely.`);
  assert(contract.PARTNER_DATA_INTAKE_RECORD_CONTRACT[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `intake record ${flag} must match safe default.`);
});

const sample = contract.createPartnerDataIntakeRecord({
  partnerName: "Sample Partner",
  feedType: "clinic_availability",
  intakeStatus: "approved_for_source_backed_guidance",
  expectedFields: ["clinicName", "availabilityUpdatedAt"],
  providedFields: ["clinicName"],
  approvalGate: { allowsSourceBackedGuidance: true, allowsLiveAction: true }
});
assert(Object.isFrozen(sample), "created partner intake record must be frozen.");
assert(sample.missingFields.includes("availabilityUpdatedAt"), "created record must derive missing fields.");
assert(sample.approvalGate.allowsSourceBackedGuidance === true, "source-backed guidance approval may be represented.");
assert(sample.approvalGate.allowsLiveAction === false, "live action must remain disabled even when override attempts to enable it.");
noExecutionFlags.forEach(flag => {
  assert(sample[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `created intake record must force ${flag} safe default.`);
});

const invalid = contract.createPartnerDataIntakeRecord({ feedType: "magic_feed", intakeStatus: "live_now" });
assert(invalid.feedType === "provider_directory", "invalid feed type must fall back to provider_directory.");
assert(invalid.intakeStatus === "draft", "invalid intake status must fall back to draft.");

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
  "FormData",
  "FileReader",
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
  assert(!moduleSource.includes(forbidden), `partner data intake contract must not include upload/runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-partner-data-intake-contract.js",
  "NexusPartnerDataIntakeContract",
  "createPartnerDataIntakeRecord",
  "PARTNER_DATA_INTAKE_RECORD_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(
  packageData.scripts["qa:nexus-partner-data-intake-contract"] === "node scripts/nexus-partner-data-intake-contract-qa.js",
  "package.json must expose qa:nexus-partner-data-intake-contract"
);
assert(
  qaSuite.includes("scripts/nexus-partner-data-intake-contract-qa.js"),
  "qa-suite.js must include partner data intake contract QA"
);

console.log("[nexus-partner-data-intake-contract-qa] passed");
