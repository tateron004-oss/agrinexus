const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_PROVIDER_ONBOARDING_PORTAL_CONTRACT_PHASE_28.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-provider-onboarding-portal-contract.js"),
  existingOnboardingModel: path.join(root, "public", "nexus-provider-onboarding-model.js"),
  phase24Module: path.join(root, "public", "nexus-source-backed-answer-engine-contract.js"),
  phase25Module: path.join(root, "public", "nexus-citation-freshness-confidence-contract.js"),
  phase26Module: path.join(root, "public", "nexus-data-quality-monitoring-contract.js"),
  phase27Module: path.join(root, "public", "nexus-partner-data-intake-contract.js"),
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
    console.error(`[nexus-provider-onboarding-portal-contract-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const doc = read(paths.doc);
const roadmap = read(paths.roadmap);
const moduleSource = read(paths.module);
const existingOnboardingSource = read(paths.existingOnboardingModel);
const contract = require(paths.module);
const existingOnboarding = require(paths.existingOnboardingModel).getNexusProviderOnboardingModel();
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const requiredStatuses = [
  "draft",
  "submitted_not_reviewed",
  "identity_review_required",
  "source_ownership_review_required",
  "connector_review_required",
  "sandbox_testing_required",
  "admin_approval_required",
  "approved_not_live",
  "rejected_or_blocked",
  "inactive"
];

const requiredIdentityStates = [
  "not_started",
  "documents_required",
  "organization_verification_pending",
  "technical_contact_required",
  "compliance_contact_required",
  "verified",
  "rejected"
];

const requiredProposalTypes = [
  "provider_directory",
  "clinic_availability",
  "telehealth_provider",
  "mobile_clinic_operator",
  "pharmacy_provider",
  "prescription_workflow",
  "transportation_provider",
  "workforce_program",
  "agriculture_extension_provider",
  "marketplace_partner",
  "education_content_provider",
  "community_service_provider",
  "payment_provider",
  "medical_records_fhir_provider",
  "emergency_response_partner",
  "communications_provider"
];

const requiredSubmissionFields = [
  "submissionId",
  "providerName",
  "providerType",
  "onboardingStatus",
  "identityReviewState",
  "connectorProposalType",
  "sourceOwner",
  "serviceRegions",
  "serviceCategories",
  "technicalContactRequired",
  "complianceContactRequired",
  "legalAgreementStatus",
  "dataRightsStatus",
  "authenticationRequirements",
  "consentRequirements",
  "permissionRequirements",
  "complianceRequirements",
  "connectorProposal",
  "sandboxTestPlan",
  "adminApprovalGate",
  "goLiveChecklist",
  "auditRequirements",
  "sourceBackedGuidanceAllowed",
  "liveActionEnabled",
  "providerVisibleToUsers",
  "userApprovalRequired",
  "providerConfirmationRequired",
  "noExecution"
];

const noExecutionFlags = [
  "noExecution",
  "sourceBackedGuidanceAllowed",
  "liveActionEnabled",
  "providerVisibleToUsers",
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

assert(roadmap.includes("| Phase 28 | Provider onboarding portal |"), "Nexus 100 roadmap must include Phase 28 provider onboarding portal row.");
[
  "SOURCE_BACKED_ANSWER_ENVELOPE",
  "CITATION_TRUST_LABEL_CONTRACT",
  "DATA_QUALITY_OBSERVATION_CONTRACT",
  "PARTNER_DATA_INTAKE_RECORD_CONTRACT"
].forEach(marker => {
  const joined = [
    read(paths.phase24Module),
    read(paths.phase25Module),
    read(paths.phase26Module),
    read(paths.phase27Module)
  ].join("\n");
  assert(joined.includes(marker), `prior source/data contract must remain present: ${marker}`);
});

requiredStatuses.forEach(status => {
  assert(contract.PROVIDER_ONBOARDING_STATUSES.includes(status), `contract must include onboarding status ${status}`);
  assert(doc.includes(status), `doc must include onboarding status ${status}`);
});

requiredIdentityStates.forEach(state => {
  assert(contract.IDENTITY_REVIEW_STATES.includes(state), `contract must include identity review state ${state}`);
  assert(doc.includes(state), `doc must include identity review state ${state}`);
});

requiredProposalTypes.forEach(type => {
  assert(contract.CONNECTOR_PROPOSAL_TYPES.includes(type), `contract must include connector proposal type ${type}`);
  assert(doc.includes(type), `doc must include connector proposal type ${type}`);
});

requiredSubmissionFields.forEach(field => {
  assert(contract.PROVIDER_ONBOARDING_SUBMISSION_FIELDS.includes(field), `contract must list provider submission field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.PROVIDER_ONBOARDING_SUBMISSION_CONTRACT, field), `provider submission contract must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});

contract.ADMIN_APPROVAL_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_ADMIN_APPROVAL_GATE, field), `default admin approval gate must include ${field}`);
  assert(doc.includes(field), `doc must document admin approval gate field ${field}`);
});

contract.GO_LIVE_CHECKLIST_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_GO_LIVE_CHECKLIST, field), `default go-live checklist must include ${field}`);
  assert(doc.includes(field), `doc must document go-live checklist field ${field}`);
});

assert(contract.DEFAULT_ADMIN_APPROVAL_GATE.allowsProviderVisibility === false, "default admin gate must block provider visibility.");
assert(contract.DEFAULT_ADMIN_APPROVAL_GATE.allowsSourceBackedGuidance === false, "default admin gate must block source-backed guidance.");
assert(contract.DEFAULT_ADMIN_APPROVAL_GATE.allowsLiveAction === false, "default admin gate must block live action.");

contract.GO_LIVE_CHECKLIST_FIELDS.forEach(field => {
  assert(contract.DEFAULT_GO_LIVE_CHECKLIST[field] === false, `default go-live checklist ${field} must be false.`);
});

noExecutionFlags.forEach(flag => {
  assert(contract.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely.`);
  assert(contract.PROVIDER_ONBOARDING_SUBMISSION_CONTRACT[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `provider submission ${flag} must match safe default.`);
});

const sample = contract.createProviderOnboardingSubmission({
  providerName: "Sample Clinic",
  onboardingStatus: "approved_not_live",
  identityReviewState: "verified",
  connectorProposalType: "clinic_availability",
  serviceRegions: ["sample region"],
  adminApprovalGate: { allowsProviderVisibility: true, allowsSourceBackedGuidance: true, allowsLiveAction: true },
  goLiveChecklist: { identityVerified: true, adminApproved: true },
  connectorProposal: { proposedDataFields: ["clinicName"], proposedActions: ["schedule"] }
});
assert(Object.isFrozen(sample), "created provider onboarding submission must be frozen.");
assert(sample.adminApprovalGate.allowsProviderVisibility === false, "created submission must force provider visibility disabled.");
assert(sample.adminApprovalGate.allowsSourceBackedGuidance === false, "created submission must force source-backed guidance disabled.");
assert(sample.adminApprovalGate.allowsLiveAction === false, "created submission must force live action disabled.");
assert(sample.goLiveChecklist.adminApproved === false, "created submission must not allow go-live admin approval override.");
assert(sample.connectorProposal.proposedActions.includes("schedule"), "proposal may describe requested actions without enabling them.");
noExecutionFlags.forEach(flag => {
  assert(sample[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `created submission must force ${flag} safe default.`);
});

const invalid = contract.createProviderOnboardingSubmission({
  onboardingStatus: "live_now",
  identityReviewState: "magic_verified",
  connectorProposalType: "unsafe_connector"
});
assert(invalid.onboardingStatus === "draft", "invalid onboarding status must fall back to draft.");
assert(invalid.identityReviewState === "not_started", "invalid identity state must fall back to not_started.");
assert(invalid.connectorProposalType === "provider_directory", "invalid proposal type must fall back to provider_directory.");

assert(existingOnboardingSource.includes("disabledByDefault: true"), "existing provider onboarding model must preserve disabledByDefault true.");
existingOnboarding.forEach(item => {
  assert(item.disabledByDefault === true, `${item.categoryId} existing onboarding must stay disabled by default.`);
  assert(item.goLiveChecklist.includes("sandbox tested"), `${item.categoryId} must keep sandbox tested go-live checklist.`);
});

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
  assert(!moduleSource.includes(forbidden), `provider onboarding portal contract must not include portal/runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-provider-onboarding-portal-contract.js",
  "NexusProviderOnboardingPortalContract",
  "createProviderOnboardingSubmission",
  "PROVIDER_ONBOARDING_SUBMISSION_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(
  packageData.scripts["qa:nexus-provider-onboarding-portal-contract"] === "node scripts/nexus-provider-onboarding-portal-contract-qa.js",
  "package.json must expose qa:nexus-provider-onboarding-portal-contract"
);
assert(
  qaSuite.includes("scripts/nexus-provider-onboarding-portal-contract-qa.js"),
  "qa-suite.js must include provider onboarding portal contract QA"
);

console.log("[nexus-provider-onboarding-portal-contract-qa] passed");
