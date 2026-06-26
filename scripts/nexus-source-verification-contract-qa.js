const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_SOURCE_VERIFICATION_CONTRACT_PHASE_29.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-source-verification-contract.js"),
  phase24Module: path.join(root, "public", "nexus-source-backed-answer-engine-contract.js"),
  phase25Module: path.join(root, "public", "nexus-citation-freshness-confidence-contract.js"),
  phase26Module: path.join(root, "public", "nexus-data-quality-monitoring-contract.js"),
  phase27Module: path.join(root, "public", "nexus-partner-data-intake-contract.js"),
  phase28Module: path.join(root, "public", "nexus-provider-onboarding-portal-contract.js"),
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
    console.error(`[nexus-source-verification-contract-qa] ${message}`);
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
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const requiredVerificationStatuses = [
  "not_started",
  "owner_proof_required",
  "terms_review_required",
  "data_rights_review_required",
  "freshness_rule_required",
  "regional_scope_review_required",
  "language_scope_review_required",
  "verification_in_progress",
  "verified_not_live",
  "rejected_or_blocked",
  "expired_or_needs_reverification"
];

const requiredProofTypes = [
  "official_domain",
  "signed_partner_agreement",
  "public_registry_record",
  "government_publication",
  "organization_document",
  "api_terms_document",
  "data_use_agreement",
  "manual_admin_review",
  "not_provided"
];

const requiredTermsStatuses = [
  "not_reviewed",
  "review_required",
  "allowed_for_public_guidance",
  "allowed_for_partner_guidance",
  "allowed_for_regulated_use_after_consent",
  "restricted",
  "rejected",
  "expired"
];

const requiredReviewFields = [
  "verificationId",
  "sourceId",
  "sourceName",
  "sourceOwner",
  "sourceType",
  "verificationStatus",
  "ownerProofType",
  "ownerProofReference",
  "termsReviewStatus",
  "dataRightsStatus",
  "freshnessRuleStatus",
  "regionalScopeStatus",
  "languageScopeStatus",
  "complianceReviewStatus",
  "reviewedBy",
  "reviewedAt",
  "expiresAt",
  "verificationDecision",
  "auditEvent",
  "sourceBackedGuidanceAllowed",
  "connectorActivationAllowed",
  "liveActionEnabled",
  "noExecution"
];

const noExecutionFlags = [
  "noExecution",
  "sourceBackedGuidanceAllowed",
  "connectorActivationAllowed",
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

assert(roadmap.includes("| Phase 29 | Source verification |"), "Nexus 100 roadmap must include Phase 29 source verification row.");
[
  ["phase24Module", "SOURCE_BACKED_ANSWER_ENVELOPE"],
  ["phase25Module", "CITATION_TRUST_LABEL_CONTRACT"],
  ["phase26Module", "DATA_QUALITY_OBSERVATION_CONTRACT"],
  ["phase27Module", "PARTNER_DATA_INTAKE_RECORD_CONTRACT"],
  ["phase28Module", "PROVIDER_ONBOARDING_SUBMISSION_CONTRACT"]
].forEach(([key, marker]) => {
  assert(read(paths[key]).includes(marker), `prior contract must remain present: ${marker}`);
});

requiredVerificationStatuses.forEach(status => {
  assert(contract.SOURCE_VERIFICATION_STATUSES.includes(status), `contract must include verification status ${status}`);
  assert(doc.includes(status), `doc must include verification status ${status}`);
});

requiredProofTypes.forEach(type => {
  assert(contract.OWNER_PROOF_TYPES.includes(type), `contract must include owner proof type ${type}`);
  assert(doc.includes(type), `doc must include owner proof type ${type}`);
});

requiredTermsStatuses.forEach(status => {
  assert(contract.TERMS_REVIEW_STATUSES.includes(status), `contract must include terms review status ${status}`);
  assert(doc.includes(status), `doc must include terms review status ${status}`);
});

requiredReviewFields.forEach(field => {
  assert(contract.SOURCE_VERIFICATION_REVIEW_FIELDS.includes(field), `contract must list source verification review field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.SOURCE_VERIFICATION_REVIEW_CONTRACT, field), `source verification review contract must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});

contract.VERIFICATION_DECISION_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_VERIFICATION_DECISION, field), `default verification decision must include ${field}`);
  assert(doc.includes(field), `doc must document verification decision field ${field}`);
});

contract.VERIFICATION_AUDIT_EVENT_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.SOURCE_VERIFICATION_REVIEW_CONTRACT.auditEvent, field), `audit event contract must include ${field}`);
  assert(doc.includes(field), `doc must document audit event field ${field}`);
});

assert(contract.DEFAULT_VERIFICATION_DECISION.allowsSourceBackedGuidance === false, "default decision must block source-backed guidance.");
assert(contract.DEFAULT_VERIFICATION_DECISION.allowsConnectorActivation === false, "default decision must block connector activation.");
assert(contract.DEFAULT_VERIFICATION_DECISION.allowsLiveAction === false, "default decision must block live action.");

noExecutionFlags.forEach(flag => {
  assert(contract.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely.`);
  assert(contract.SOURCE_VERIFICATION_REVIEW_CONTRACT[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `verification review ${flag} must match safe default.`);
});

const sample = contract.createSourceVerificationReview({
  verificationId: "sample",
  sourceId: "sample-source",
  verificationStatus: "verified_not_live",
  ownerProofType: "official_domain",
  termsReviewStatus: "allowed_for_public_guidance",
  verificationDecision: {
    decisionStatus: "approved_for_guidance",
    allowedUse: ["general_source_backed_guidance"],
    allowsSourceBackedGuidance: true,
    allowsConnectorActivation: true,
    allowsLiveAction: true
  }
});
assert(Object.isFrozen(sample), "created source verification review must be frozen.");
assert(sample.verificationStatus === "verified_not_live", "valid verification status must be preserved.");
assert(sample.verificationDecision.allowsSourceBackedGuidance === true, "review may represent source-backed guidance approval.");
assert(sample.verificationDecision.allowsConnectorActivation === false, "created review must force connector activation disabled.");
assert(sample.verificationDecision.allowsLiveAction === false, "created review must force live action disabled.");
noExecutionFlags.forEach(flag => {
  assert(sample[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `created review must force ${flag} safe default.`);
});

const invalid = contract.createSourceVerificationReview({
  verificationStatus: "live_verified",
  ownerProofType: "trust_me",
  termsReviewStatus: "free_use_forever"
});
assert(invalid.verificationStatus === "not_started", "invalid verification status must fall back to not_started.");
assert(invalid.ownerProofType === "not_provided", "invalid owner proof type must fall back to not_provided.");
assert(invalid.termsReviewStatus === "not_reviewed", "invalid terms status must fall back to not_reviewed.");

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
  assert(!moduleSource.includes(forbidden), `source verification contract must not include review queue/runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-source-verification-contract.js",
  "NexusSourceVerificationContract",
  "createSourceVerificationReview",
  "SOURCE_VERIFICATION_REVIEW_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(
  packageData.scripts["qa:nexus-source-verification-contract"] === "node scripts/nexus-source-verification-contract-qa.js",
  "package.json must expose qa:nexus-source-verification-contract"
);
assert(
  qaSuite.includes("scripts/nexus-source-verification-contract-qa.js"),
  "qa-suite.js must include source verification contract QA"
);

console.log("[nexus-source-verification-contract-qa] passed");
