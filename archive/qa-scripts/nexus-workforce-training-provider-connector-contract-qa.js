const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_WORKFORCE_TRAINING_PROVIDER_CONNECTOR_CONTRACT_PHASE_41.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-workforce-training-provider-connector-contract.js"),
  workforcePublicSources: path.join(root, "public", "nexus-workforce-public-source-contracts.js"),
  providerUniverse: path.join(root, "public", "nexus-provider-source-universe.js"),
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
    console.error(`[nexus-workforce-training-provider-connector-contract-qa] ${message}`);
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
const workforceSources = require(paths.workforcePublicSources).getWorkforcePublicSourceContracts();
const providerUniverse = require(paths.providerUniverse).getNexusProviderSourceUniverse();
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const statuses = [
  "not_configured",
  "program_partner_verification_required",
  "program_catalog_required",
  "eligibility_source_required",
  "terms_review_required",
  "profile_sharing_review_required",
  "referral_gate_required",
  "application_gate_required",
  "credential_policy_review_required",
  "sandbox_testing_required",
  "approved_not_live",
  "active_source_directory_only",
  "rejected_or_blocked",
  "inactive"
];
const categories = [
  "workforce_training_program",
  "technical_training_program",
  "agriculture_workforce_training",
  "job_readiness_program",
  "career_pathway_program",
  "apprenticeship_program",
  "youth_workforce_program",
  "women_workforce_program",
  "community_workforce_program",
  "language_and_digital_skills_program",
  "eligibility_review_resource",
  "training_referral_boundary"
];
const fields = [
  "connectorId",
  "providerName",
  "sourceOwner",
  "connectorStatus",
  "programCategories",
  "programRegions",
  "supportedLanguages",
  "partnerVerificationStatus",
  "programCatalogStatus",
  "eligibilitySourceStatus",
  "termsReviewStatus",
  "profileSharingReviewStatus",
  "referralGateStatus",
  "applicationGateStatus",
  "credentialPolicyStatus",
  "freshnessModel",
  "regionalScope",
  "languageScope",
  "allowedResponseStates",
  "profileSharingGate",
  "referralReadinessGate",
  "auditRequirements",
  "auditEvent",
  "programContextAllowed",
  "liveAvailabilityAllowed",
  "providerContactEnabled",
  "profileSharingEnabled",
  "referralSubmissionEnabled",
  "applicationSubmissionEnabled",
  "credentialIssuingEnabled",
  "paymentEnabled",
  "liveActionEnabled",
  "noExecution"
];
const noExecutionFlags = [
  "noExecution",
  "programContextAllowed",
  "liveAvailabilityAllowed",
  "providerContactEnabled",
  "profileSharingEnabled",
  "resumeSharingEnabled",
  "credentialSharingEnabled",
  "contactInfoSharingEnabled",
  "referralSubmissionEnabled",
  "applicationSubmissionEnabled",
  "credentialIssuingEnabled",
  "interviewSchedulingEnabled",
  "paymentEnabled",
  "liveActionEnabled",
  "providerContacted",
  "profileShared",
  "resumeShared",
  "credentialShared",
  "contactInfoShared",
  "referralSubmitted",
  "applicationSubmitted",
  "credentialIssued",
  "interviewScheduled",
  "paymentExecuted",
  "externalActionExecuted",
  "callOrMessageSent"
];

assert(roadmap.includes("| Phase 41 | Workforce/training providers |"), "Nexus 100 roadmap must include Phase 41 workforce/training providers row.");
assert(providerUniverse.some(item => item.categoryId === "workforce.training_providers" && item.defaultExecutionEnabled === false), "provider universe must keep workforce.training_providers disabled by default.");
assert(workforceSources.some(item => item.sourceId === "workforce.training.catalog" && item.executionEnabled === false), "public workforce training catalog must remain execution-disabled.");
assert(workforceSources.some(item => item.sourceId === "workforce.agriculture.training" && item.executionEnabled === false), "agriculture workforce training source must remain execution-disabled.");
workforceSources.forEach(item => {
  assert(item.referralSubmissionEnabled === false, `${item.sourceId} must keep referrals disabled.`);
  assert(item.profileSharingEnabled === false, `${item.sourceId} must keep profile sharing disabled.`);
  assert(item.applicationSubmissionEnabled === false, `${item.sourceId} must keep applications disabled.`);
});

statuses.forEach(status => {
  assert(contract.WORKFORCE_TRAINING_PROVIDER_STATUSES.includes(status), `contract must include status ${status}`);
  assert(doc.includes(status), `doc must include status ${status}`);
});
categories.forEach(category => {
  assert(contract.WORKFORCE_TRAINING_PROGRAM_CATEGORIES.includes(category), `contract must include program category ${category}`);
  assert(doc.includes(category), `doc must include program category ${category}`);
});
fields.forEach(field => {
  assert(contract.WORKFORCE_TRAINING_PROVIDER_CONNECTOR_FIELDS.includes(field), `contract must list field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.WORKFORCE_TRAINING_PROVIDER_CONNECTOR_CONTRACT, field), `workforce training provider connector contract must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});
contract.PROFILE_SHARING_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_PROFILE_SHARING_GATE, field), `profile sharing gate must include ${field}`);
  assert(doc.includes(field), `doc must document profile sharing gate field ${field}`);
});
contract.REFERRAL_READINESS_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_REFERRAL_READINESS_GATE, field), `referral readiness gate must include ${field}`);
  assert(doc.includes(field), `doc must document referral readiness gate field ${field}`);
});
contract.WORKFORCE_TRAINING_PROVIDER_AUDIT_EVENT_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.WORKFORCE_TRAINING_PROVIDER_CONNECTOR_CONTRACT.auditEvent, field), `audit event must include ${field}`);
  assert(doc.includes(field), `doc must document audit field ${field}`);
});

[
  "allowsProfileSharing",
  "allowsResumeSharing",
  "allowsCredentialSharing",
  "allowsContactInfoSharing",
  "allowsExternalNavigation"
].forEach(field => {
  assert(contract.DEFAULT_PROFILE_SHARING_GATE[field] === false, `${field} must default false.`);
});
[
  "allowsProgramContext",
  "allowsProviderContact",
  "allowsReferralSubmission",
  "allowsApplicationSubmission",
  "allowsCredentialIssuing",
  "allowsPaymentProcessing",
  "allowsExternalNavigation"
].forEach(field => {
  assert(contract.DEFAULT_REFERRAL_READINESS_GATE[field] === false, `${field} must default false.`);
});
noExecutionFlags.forEach(flag => {
  assert(contract.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely.`);
  assert(contract.WORKFORCE_TRAINING_PROVIDER_CONNECTOR_CONTRACT[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `${flag} must match safe default.`);
});

const sample = contract.createWorkforceTrainingProviderConnector({
  connectorId: "sample-training-provider",
  connectorStatus: "active_source_directory_only",
  programCategories: ["workforce_training_program", "agriculture_workforce_training", "unsafe"],
  profileSharingGate: {
    allowsProfileSharing: true,
    allowsResumeSharing: true,
    allowsCredentialSharing: true,
    allowsContactInfoSharing: true,
    allowsExternalNavigation: true
  },
  referralReadinessGate: {
    allowsProgramContext: true,
    allowsProviderContact: true,
    allowsReferralSubmission: true,
    allowsApplicationSubmission: true,
    allowsCredentialIssuing: true,
    allowsPaymentProcessing: true,
    allowsExternalNavigation: true
  }
});
assert(Object.isFrozen(sample), "created workforce training provider connector must be frozen.");
assert(sample.programCategories.includes("workforce_training_program"), "valid program category must be preserved.");
assert(sample.programCategories.includes("agriculture_workforce_training"), "agriculture workforce training category must be preserved.");
assert(!sample.programCategories.includes("unsafe"), "invalid program category must be filtered.");
assert(sample.profileSharingGate.allowsProfileSharing === false, "profile sharing must remain disabled.");
assert(sample.profileSharingGate.allowsResumeSharing === false, "resume sharing must remain disabled.");
assert(sample.profileSharingGate.allowsCredentialSharing === false, "credential sharing must remain disabled.");
assert(sample.profileSharingGate.allowsContactInfoSharing === false, "contact info sharing must remain disabled.");
assert(sample.profileSharingGate.allowsExternalNavigation === false, "profile sharing external navigation must remain disabled.");
assert(sample.referralReadinessGate.allowsProgramContext === false, "program context must remain disabled for partner connector execution.");
assert(sample.referralReadinessGate.allowsProviderContact === false, "provider contact must remain disabled.");
assert(sample.referralReadinessGate.allowsReferralSubmission === false, "referral submission must remain disabled.");
assert(sample.referralReadinessGate.allowsApplicationSubmission === false, "application submission must remain disabled.");
assert(sample.referralReadinessGate.allowsCredentialIssuing === false, "credential issuing must remain disabled.");
assert(sample.referralReadinessGate.allowsPaymentProcessing === false, "payment processing must remain disabled.");
assert(sample.referralReadinessGate.allowsExternalNavigation === false, "referral external navigation must remain disabled.");
noExecutionFlags.forEach(flag => {
  assert(sample[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `created connector must force ${flag} safe default.`);
});

const invalid = contract.createWorkforceTrainingProviderConnector({ connectorStatus: "live_now" });
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
  "submitApplication",
  "shareProfile",
  "contactProvider",
  "issueCertificate",
  "processPayment",
  "open("
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `workforce training provider connector contract must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-workforce-training-provider-connector-contract.js",
  "NexusWorkforceTrainingProviderConnectorContract",
  "createWorkforceTrainingProviderConnector",
  "WORKFORCE_TRAINING_PROVIDER_CONNECTOR_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(packageData.scripts["qa:nexus-workforce-training-provider-connector-contract"] === "node scripts/nexus-workforce-training-provider-connector-contract-qa.js", "package.json must expose qa:nexus-workforce-training-provider-connector-contract");
assert(qaSuite.includes("scripts/nexus-workforce-training-provider-connector-contract-qa.js"), "qa-suite.js must include workforce training provider connector contract QA");

console.log("[nexus-workforce-training-provider-connector-contract-qa] passed");

