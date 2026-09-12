const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_MULTILINGUAL_DATA_LABELING_CONTRACT_PHASE_30.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-multilingual-data-labeling-contract.js"),
  phase24Module: path.join(root, "public", "nexus-source-backed-answer-engine-contract.js"),
  phase25Module: path.join(root, "public", "nexus-citation-freshness-confidence-contract.js"),
  phase26Module: path.join(root, "public", "nexus-data-quality-monitoring-contract.js"),
  phase27Module: path.join(root, "public", "nexus-partner-data-intake-contract.js"),
  phase28Module: path.join(root, "public", "nexus-provider-onboarding-portal-contract.js"),
  phase29Module: path.join(root, "public", "nexus-source-verification-contract.js"),
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
    console.error(`[nexus-multilingual-data-labeling-contract-qa] ${message}`);
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

const requiredLanguageCodes = ["en", "es", "fr", "ar", "pt", "sw"];
const requiredLanguageLabels = ["English", "Spanish", "French", "Arabic", "Portuguese", "Swahili"];
const requiredStatuses = [
  "not_labeled",
  "source_language_known",
  "translation_review_required",
  "machine_translation_draft",
  "human_review_required",
  "human_reviewed_not_live",
  "approved_for_source_backed_guidance",
  "rejected_or_blocked",
  "expired_or_needs_reverification"
];
const requiredSourceTypes = [
  "original_source_language",
  "partner_provided_translation",
  "human_translator_review",
  "community_localization_review",
  "machine_translation_draft",
  "government_publication_translation",
  "clinical_interpreter_review_required",
  "not_provided"
];
const requiredLabelFields = [
  "labelId",
  "sourceId",
  "sourceLanguage",
  "targetLanguage",
  "supportedLanguages",
  "localizationStatus",
  "translationSourceType",
  "translationSourceOwner",
  "translationReviewStatus",
  "reviewedBy",
  "reviewedAt",
  "expiresAt",
  "region",
  "dialectOrLocale",
  "readingLevel",
  "accessibilityNotes",
  "clinicalInterpretationCertified",
  "regulatedUseAllowed",
  "sourceBackedGuidanceAllowed",
  "liveActionEnabled",
  "auditEvent",
  "noExecution"
];
const noExecutionFlags = [
  "noExecution",
  "clinicalInterpretationCertified",
  "regulatedUseAllowed",
  "sourceBackedGuidanceAllowed",
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

assert(roadmap.includes("| Phase 30 | Multilingual data labeling |"), "Nexus 100 roadmap must include Phase 30 multilingual data labeling row.");
[
  ["phase24Module", "SOURCE_BACKED_ANSWER_ENVELOPE"],
  ["phase25Module", "CITATION_TRUST_LABEL_CONTRACT"],
  ["phase26Module", "DATA_QUALITY_OBSERVATION_CONTRACT"],
  ["phase27Module", "PARTNER_DATA_INTAKE_RECORD_CONTRACT"],
  ["phase28Module", "PROVIDER_ONBOARDING_SUBMISSION_CONTRACT"],
  ["phase29Module", "SOURCE_VERIFICATION_REVIEW_CONTRACT"]
].forEach(([key, marker]) => {
  assert(read(paths[key]).includes(marker), `prior contract must remain present: ${marker}`);
});

requiredLanguageCodes.forEach(code => {
  assert(contract.supportedLanguageCodes().includes(code), `contract must include language code ${code}`);
  assert(doc.includes(`\`${code}\``), `doc must include language code ${code}`);
});
requiredLanguageLabels.forEach(label => {
  assert(contract.SUPPORTED_BASELINE_LANGUAGES.some(item => item.label === label), `contract must include language label ${label}`);
  assert(doc.includes(label), `doc must include language label ${label}`);
});

requiredStatuses.forEach(status => {
  assert(contract.LOCALIZATION_LABEL_STATUSES.includes(status), `contract must include localization status ${status}`);
  assert(doc.includes(status), `doc must include localization status ${status}`);
});

requiredSourceTypes.forEach(type => {
  assert(contract.TRANSLATION_SOURCE_TYPES.includes(type), `contract must include translation source type ${type}`);
  assert(doc.includes(type), `doc must include translation source type ${type}`);
});

requiredLabelFields.forEach(field => {
  assert(contract.MULTILINGUAL_SOURCE_LABEL_FIELDS.includes(field), `contract must list multilingual source label field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.MULTILINGUAL_SOURCE_LABEL_CONTRACT, field), `multilingual source label contract must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});

contract.TRANSLATION_REVIEW_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_TRANSLATION_REVIEW, field), `default translation review must include ${field}`);
  assert(doc.includes(field), `doc must document translation review field ${field}`);
});
contract.LOCALIZATION_AUDIT_EVENT_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.MULTILINGUAL_SOURCE_LABEL_CONTRACT.auditEvent, field), `audit event must include ${field}`);
  assert(doc.includes(field), `doc must document audit event field ${field}`);
});

assert(contract.DEFAULT_TRANSLATION_REVIEW.allowsSourceBackedGuidance === false, "default translation review must block source-backed guidance.");
assert(contract.DEFAULT_TRANSLATION_REVIEW.allowsRegulatedUse === false, "default translation review must block regulated use.");
assert(contract.DEFAULT_TRANSLATION_REVIEW.allowsLiveAction === false, "default translation review must block live action.");

noExecutionFlags.forEach(flag => {
  assert(contract.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely.`);
  assert(contract.MULTILINGUAL_SOURCE_LABEL_CONTRACT[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `multilingual label ${flag} must match safe default.`);
});

const sample = contract.createMultilingualSourceLabel({
  labelId: "sample",
  sourceId: "sample-source",
  sourceLanguage: "en",
  targetLanguage: "sw",
  supportedLanguages: ["en", "sw", "xx"],
  localizationStatus: "approved_for_source_backed_guidance",
  translationSourceType: "human_translator_review",
  translationReview: { allowsSourceBackedGuidance: true, allowsRegulatedUse: true, allowsLiveAction: true }
});
assert(Object.isFrozen(sample), "created multilingual source label must be frozen.");
assert(sample.targetLanguage === "sw", "valid target language should be preserved.");
assert(sample.supportedLanguages.includes("sw"), "valid supported language should be preserved.");
assert(!sample.supportedLanguages.includes("xx"), "invalid supported language should be filtered.");
assert(sample.translationReview.allowsSourceBackedGuidance === true, "translation review may represent source-backed guidance readiness.");
assert(sample.translationReview.allowsRegulatedUse === false, "created label must force regulated use disabled.");
assert(sample.translationReview.allowsLiveAction === false, "created label must force live action disabled.");
noExecutionFlags.forEach(flag => {
  assert(sample[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `created label must force ${flag} safe default.`);
});

const invalid = contract.createMultilingualSourceLabel({
  sourceLanguage: "zz",
  targetLanguage: "yy",
  localizationStatus: "live_translated",
  translationSourceType: "magic_ai"
});
assert(invalid.sourceLanguage === "unknown", "invalid source language must fall back to unknown.");
assert(invalid.targetLanguage === "en", "invalid target language must fall back to English.");
assert(invalid.localizationStatus === "not_labeled", "invalid localization status must fall back to not_labeled.");
assert(invalid.translationSourceType === "not_provided", "invalid translation source type must fall back to not_provided.");

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
  "translate(",
  "translationApi",
  "languagePack",
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
  assert(!moduleSource.includes(forbidden), `multilingual data labeling contract must not include translation/runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-multilingual-data-labeling-contract.js",
  "NexusMultilingualDataLabelingContract",
  "createMultilingualSourceLabel",
  "MULTILINGUAL_SOURCE_LABEL_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(
  packageData.scripts["qa:nexus-multilingual-data-labeling-contract"] === "node scripts/nexus-multilingual-data-labeling-contract-qa.js",
  "package.json must expose qa:nexus-multilingual-data-labeling-contract"
);
assert(
  qaSuite.includes("scripts/nexus-multilingual-data-labeling-contract-qa.js"),
  "qa-suite.js must include multilingual data labeling contract QA"
);

console.log("[nexus-multilingual-data-labeling-contract-qa] passed");
