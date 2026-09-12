const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_EDUCATION_CONTENT_PROVIDER_CONNECTOR_CONTRACT_PHASE_43.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-education-content-provider-connector-contract.js"),
  publicBaseline: path.join(root, "public", "nexus-public-data-connector-baseline.js"),
  workforcePublicSources: path.join(root, "public", "nexus-workforce-public-source-contracts.js"),
  providerUniverse: path.join(root, "public", "nexus-provider-source-universe.js"),
  sourceRuntimeAudit: path.join(root, "docs", "NEXUS_SOURCE_BACKED_RESPONSE_RUNTIME_CONTRACT_AUDIT.md"),
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
    console.error(`[nexus-education-content-provider-connector-contract-qa] ${message}`);
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
const workforceSources = require(paths.workforcePublicSources).getWorkforcePublicSourceContracts();
const providerUniverse = require(paths.providerUniverse).getNexusProviderSourceUniverse();
const sourceRuntimeAudit = read(paths.sourceRuntimeAudit);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const statuses = [
  "not_configured",
  "education_partner_verification_required",
  "content_catalog_required",
  "content_rights_review_required",
  "attribution_review_required",
  "freshness_rule_required",
  "localization_review_required",
  "accessibility_review_required",
  "sandbox_testing_required",
  "approved_not_live",
  "active_source_directory_only",
  "rejected_or_blocked",
  "inactive"
];
const categories = [
  "learning_content_catalog",
  "workforce_training_content",
  "agriculture_training_content",
  "technical_skills_content",
  "health_access_education_content",
  "digital_literacy_content",
  "language_learning_content",
  "accessibility_learning_content",
  "quiz_question_bank",
  "lesson_outline_source",
  "localized_content_source",
  "content_attribution_boundary"
];
const fields = [
  "connectorId",
  "providerName",
  "sourceOwner",
  "connectorStatus",
  "contentCategories",
  "contentRegions",
  "supportedLanguages",
  "partnerVerificationStatus",
  "contentCatalogStatus",
  "contentRightsReviewStatus",
  "attributionReviewStatus",
  "freshnessRuleStatus",
  "localizationReviewStatus",
  "accessibilityReviewStatus",
  "freshnessModel",
  "regionalScope",
  "languageScope",
  "allowedResponseStates",
  "attributionGate",
  "contentReadinessGate",
  "auditRequirements",
  "auditEvent",
  "contentContextAllowed",
  "sourceBackedContentAllowed",
  "liveContentFetchEnabled",
  "providerContactEnabled",
  "enrollmentEnabled",
  "progressMutationEnabled",
  "certificateActionEnabled",
  "paymentEnabled",
  "liveActionEnabled",
  "noExecution"
];
const noExecutionFlags = [
  "noExecution",
  "contentContextAllowed",
  "sourceBackedContentAllowed",
  "liveContentFetchEnabled",
  "providerContactEnabled",
  "enrollmentEnabled",
  "progressMutationEnabled",
  "certificateActionEnabled",
  "paymentEnabled",
  "liveActionEnabled",
  "contentContextUsed",
  "sourceBackedContentPresented",
  "liveContentFetched",
  "providerContacted",
  "learnerEnrolled",
  "progressMutated",
  "certificateActionTaken",
  "paymentExecuted",
  "externalActionExecuted"
];

assert(roadmap.includes("| Phase 43 | Education providers |"), "Nexus 100 roadmap must include Phase 43 education providers row.");
assert(providerUniverse.some(item => item.categoryId === "education.content_providers" && item.defaultExecutionEnabled === false), "provider universe must keep education.content_providers disabled by default.");
assert(publicBaseline.some(item => item.connectorId === "public.workforce.training" && item.executionEnabled === false), "public workforce training connector must remain execution-disabled.");
assert(workforceSources.some(item => item.sourceId === "workforce.training.catalog" && item.executionEnabled === false), "public training catalog must remain execution-disabled.");
assert(sourceRuntimeAudit.includes("education/training") && sourceRuntimeAudit.includes("source_backed_guidance") && sourceRuntimeAudit.includes("audit source use"), "source-backed response audit must preserve education/training source-backed guidance boundary.");

statuses.forEach(status => {
  assert(contract.EDUCATION_CONTENT_PROVIDER_STATUSES.includes(status), `contract must include status ${status}`);
  assert(doc.includes(status), `doc must include status ${status}`);
});
categories.forEach(category => {
  assert(contract.EDUCATION_CONTENT_CATEGORIES.includes(category), `contract must include content category ${category}`);
  assert(doc.includes(category), `doc must include content category ${category}`);
});
fields.forEach(field => {
  assert(contract.EDUCATION_CONTENT_PROVIDER_CONNECTOR_FIELDS.includes(field), `contract must list field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.EDUCATION_CONTENT_PROVIDER_CONNECTOR_CONTRACT, field), `education content provider connector contract must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});
contract.ATTRIBUTION_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_ATTRIBUTION_GATE, field), `attribution gate must include ${field}`);
  assert(doc.includes(field), `doc must document attribution gate field ${field}`);
});
contract.CONTENT_READINESS_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_CONTENT_READINESS_GATE, field), `content readiness gate must include ${field}`);
  assert(doc.includes(field), `doc must document content readiness gate field ${field}`);
});
contract.EDUCATION_CONTENT_PROVIDER_AUDIT_EVENT_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.EDUCATION_CONTENT_PROVIDER_CONNECTOR_CONTRACT.auditEvent, field), `audit event must include ${field}`);
  assert(doc.includes(field), `doc must document audit field ${field}`);
});

[
  "allowsUnattributedContent",
  "allowsRightsUnreviewedContent",
  "allowsFreshnessHiddenContent",
  "allowsExternalNavigation"
].forEach(field => {
  assert(contract.DEFAULT_ATTRIBUTION_GATE[field] === false, `${field} must default false.`);
});
[
  "allowsContentContext",
  "allowsSourceBackedContent",
  "allowsLiveContentFetch",
  "allowsProviderContact",
  "allowsEnrollment",
  "allowsProgressMutation",
  "allowsCertificateAction",
  "allowsPaymentProcessing",
  "allowsExternalNavigation"
].forEach(field => {
  assert(contract.DEFAULT_CONTENT_READINESS_GATE[field] === false, `${field} must default false.`);
});
noExecutionFlags.forEach(flag => {
  assert(contract.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely.`);
  assert(contract.EDUCATION_CONTENT_PROVIDER_CONNECTOR_CONTRACT[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `${flag} must match safe default.`);
});

const sample = contract.createEducationContentProviderConnector({
  connectorId: "sample-education-content-provider",
  connectorStatus: "active_source_directory_only",
  contentCategories: ["learning_content_catalog", "agriculture_training_content", "unsafe"],
  attributionGate: {
    allowsUnattributedContent: true,
    allowsRightsUnreviewedContent: true,
    allowsFreshnessHiddenContent: true,
    allowsExternalNavigation: true
  },
  contentReadinessGate: {
    allowsContentContext: true,
    allowsSourceBackedContent: true,
    allowsLiveContentFetch: true,
    allowsProviderContact: true,
    allowsEnrollment: true,
    allowsProgressMutation: true,
    allowsCertificateAction: true,
    allowsPaymentProcessing: true,
    allowsExternalNavigation: true
  }
});
assert(Object.isFrozen(sample), "created education content provider connector must be frozen.");
assert(sample.contentCategories.includes("learning_content_catalog"), "valid content category must be preserved.");
assert(sample.contentCategories.includes("agriculture_training_content"), "agriculture training content category must be preserved.");
assert(!sample.contentCategories.includes("unsafe"), "invalid content category must be filtered.");
assert(sample.attributionGate.allowsUnattributedContent === false, "unattributed content must remain disabled.");
assert(sample.attributionGate.allowsRightsUnreviewedContent === false, "rights-unreviewed content must remain disabled.");
assert(sample.attributionGate.allowsFreshnessHiddenContent === false, "freshness-hidden content must remain disabled.");
assert(sample.attributionGate.allowsExternalNavigation === false, "attribution external navigation must remain disabled.");
assert(sample.contentReadinessGate.allowsContentContext === false, "content context must remain disabled for partner connector execution.");
assert(sample.contentReadinessGate.allowsSourceBackedContent === false, "source-backed partner content must remain disabled until reviewed.");
assert(sample.contentReadinessGate.allowsLiveContentFetch === false, "live content fetch must remain disabled.");
assert(sample.contentReadinessGate.allowsProviderContact === false, "provider contact must remain disabled.");
assert(sample.contentReadinessGate.allowsEnrollment === false, "enrollment must remain disabled.");
assert(sample.contentReadinessGate.allowsProgressMutation === false, "progress mutation must remain disabled.");
assert(sample.contentReadinessGate.allowsCertificateAction === false, "certificate action must remain disabled.");
assert(sample.contentReadinessGate.allowsPaymentProcessing === false, "payment processing must remain disabled.");
assert(sample.contentReadinessGate.allowsExternalNavigation === false, "content external navigation must remain disabled.");
noExecutionFlags.forEach(flag => {
  assert(sample[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `created connector must force ${flag} safe default.`);
});

const invalid = contract.createEducationContentProviderConnector({ connectorStatus: "live_now" });
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
  "loadExternalContent",
  "enrollLearner",
  "completeLesson",
  "mutateProgress",
  "issueCertificate",
  "contactProvider",
  "processPayment",
  "open("
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `education content provider connector contract must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-education-content-provider-connector-contract.js",
  "NexusEducationContentProviderConnectorContract",
  "createEducationContentProviderConnector",
  "EDUCATION_CONTENT_PROVIDER_CONNECTOR_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(packageData.scripts["qa:nexus-education-content-provider-connector-contract"] === "node scripts/nexus-education-content-provider-connector-contract-qa.js", "package.json must expose qa:nexus-education-content-provider-connector-contract");
assert(qaSuite.includes("scripts/nexus-education-content-provider-connector-contract-qa.js"), "qa-suite.js must include education content provider connector contract QA");

console.log("[nexus-education-content-provider-connector-contract-qa] passed");

