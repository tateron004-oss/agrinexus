const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_CERTIFICATION_PROVIDER_CONNECTOR_CONTRACT_PHASE_42.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-certification-provider-connector-contract.js"),
  workforcePublicSources: path.join(root, "public", "nexus-workforce-public-source-contracts.js"),
  trainingProviderContract: path.join(root, "public", "nexus-workforce-training-provider-connector-contract.js"),
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
    console.error(`[nexus-certification-provider-connector-contract-qa] ${message}`);
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
const trainingContract = require(paths.trainingProviderContract);
const providerUniverse = require(paths.providerUniverse).getNexusProviderSourceUniverse();
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const statuses = [
  "not_configured",
  "certification_partner_verification_required",
  "credential_catalog_required",
  "eligibility_evidence_required",
  "identity_consent_review_required",
  "terms_review_required",
  "certificate_issue_gate_required",
  "transcript_sharing_review_required",
  "credential_policy_review_required",
  "sandbox_testing_required",
  "approved_not_live",
  "active_source_directory_only",
  "rejected_or_blocked",
  "inactive"
];
const categories = [
  "workforce_certificate",
  "technical_certificate",
  "agriculture_certificate",
  "apprenticeship_credential",
  "micro_credential",
  "digital_badge",
  "skills_transcript",
  "course_completion_certificate",
  "language_or_accessibility_certificate",
  "partner_verified_credential",
  "identity_review_boundary",
  "credential_issue_boundary"
];
const fields = [
  "connectorId",
  "providerName",
  "sourceOwner",
  "connectorStatus",
  "credentialCategories",
  "credentialRegions",
  "supportedLanguages",
  "partnerVerificationStatus",
  "credentialCatalogStatus",
  "eligibilityEvidenceStatus",
  "identityConsentReviewStatus",
  "termsReviewStatus",
  "certificateIssueGateStatus",
  "transcriptSharingReviewStatus",
  "credentialPolicyStatus",
  "freshnessModel",
  "regionalScope",
  "languageScope",
  "allowedResponseStates",
  "identityConsentGate",
  "certificateIssueGate",
  "auditRequirements",
  "auditEvent",
  "credentialContextAllowed",
  "liveAvailabilityAllowed",
  "providerContactEnabled",
  "identityVerificationEnabled",
  "profileSharingEnabled",
  "transcriptSharingEnabled",
  "certificateIssuingEnabled",
  "credentialPublishingEnabled",
  "paymentEnabled",
  "liveActionEnabled",
  "noExecution"
];
const noExecutionFlags = [
  "noExecution",
  "credentialContextAllowed",
  "liveAvailabilityAllowed",
  "providerContactEnabled",
  "identityVerificationEnabled",
  "identityDocumentSharingEnabled",
  "profileSharingEnabled",
  "transcriptSharingEnabled",
  "certificateIssuingEnabled",
  "credentialPublishingEnabled",
  "transcriptSubmissionEnabled",
  "paymentEnabled",
  "liveActionEnabled",
  "providerContacted",
  "identityVerified",
  "identityDocumentShared",
  "profileShared",
  "transcriptShared",
  "certificateIssued",
  "credentialPublished",
  "transcriptSubmitted",
  "paymentExecuted",
  "externalActionExecuted",
  "callOrMessageSent"
];

assert(roadmap.includes("| Phase 42 | Certification providers |"), "Nexus 100 roadmap must include Phase 42 certification providers row.");
assert(providerUniverse.some(item => item.categoryId === "workforce.certification_providers" && item.defaultExecutionEnabled === false), "provider universe must keep workforce.certification_providers disabled by default.");
assert(workforceSources.some(item => item.sourceId === "workforce.apprenticeship.certification" && item.executionEnabled === false), "public apprenticeship/certification source must remain execution-disabled.");
assert(trainingContract.NO_EXECUTION_DEFAULTS.credentialIssuingEnabled === false, "Phase 41 training provider contract must keep credential issuing disabled.");
workforceSources.forEach(item => {
  assert(item.certificateIssuingEnabled === false, `${item.sourceId} must keep certificate issuing disabled.`);
  assert(item.profileSharingEnabled === false, `${item.sourceId} must keep profile sharing disabled.`);
  assert(item.applicationSubmissionEnabled === false, `${item.sourceId} must keep applications disabled.`);
});

statuses.forEach(status => {
  assert(contract.CERTIFICATION_PROVIDER_STATUSES.includes(status), `contract must include status ${status}`);
  assert(doc.includes(status), `doc must include status ${status}`);
});
categories.forEach(category => {
  assert(contract.CREDENTIAL_CATEGORIES.includes(category), `contract must include credential category ${category}`);
  assert(doc.includes(category), `doc must include credential category ${category}`);
});
fields.forEach(field => {
  assert(contract.CERTIFICATION_PROVIDER_CONNECTOR_FIELDS.includes(field), `contract must list field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.CERTIFICATION_PROVIDER_CONNECTOR_CONTRACT, field), `certification provider connector contract must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});
contract.IDENTITY_CONSENT_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_IDENTITY_CONSENT_GATE, field), `identity consent gate must include ${field}`);
  assert(doc.includes(field), `doc must document identity consent gate field ${field}`);
});
contract.CERTIFICATE_ISSUE_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_CERTIFICATE_ISSUE_GATE, field), `certificate issue gate must include ${field}`);
  assert(doc.includes(field), `doc must document certificate issue gate field ${field}`);
});
contract.CERTIFICATION_PROVIDER_AUDIT_EVENT_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.CERTIFICATION_PROVIDER_CONNECTOR_CONTRACT.auditEvent, field), `audit event must include ${field}`);
  assert(doc.includes(field), `doc must document audit field ${field}`);
});

[
  "allowsIdentityVerification",
  "allowsIdentityDocumentSharing",
  "allowsProfileSharing",
  "allowsTranscriptSharing",
  "allowsExternalNavigation"
].forEach(field => {
  assert(contract.DEFAULT_IDENTITY_CONSENT_GATE[field] === false, `${field} must default false.`);
});
[
  "allowsCredentialContext",
  "allowsProviderContact",
  "allowsCertificateIssuing",
  "allowsCredentialPublishing",
  "allowsTranscriptSubmission",
  "allowsPaymentProcessing",
  "allowsExternalNavigation"
].forEach(field => {
  assert(contract.DEFAULT_CERTIFICATE_ISSUE_GATE[field] === false, `${field} must default false.`);
});
noExecutionFlags.forEach(flag => {
  assert(contract.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely.`);
  assert(contract.CERTIFICATION_PROVIDER_CONNECTOR_CONTRACT[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `${flag} must match safe default.`);
});

const sample = contract.createCertificationProviderConnector({
  connectorId: "sample-certification-provider",
  connectorStatus: "active_source_directory_only",
  credentialCategories: ["workforce_certificate", "agriculture_certificate", "unsafe"],
  identityConsentGate: {
    allowsIdentityVerification: true,
    allowsIdentityDocumentSharing: true,
    allowsProfileSharing: true,
    allowsTranscriptSharing: true,
    allowsExternalNavigation: true
  },
  certificateIssueGate: {
    allowsCredentialContext: true,
    allowsProviderContact: true,
    allowsCertificateIssuing: true,
    allowsCredentialPublishing: true,
    allowsTranscriptSubmission: true,
    allowsPaymentProcessing: true,
    allowsExternalNavigation: true
  }
});
assert(Object.isFrozen(sample), "created certification provider connector must be frozen.");
assert(sample.credentialCategories.includes("workforce_certificate"), "valid credential category must be preserved.");
assert(sample.credentialCategories.includes("agriculture_certificate"), "agriculture credential category must be preserved.");
assert(!sample.credentialCategories.includes("unsafe"), "invalid credential category must be filtered.");
assert(sample.identityConsentGate.allowsIdentityVerification === false, "identity verification must remain disabled.");
assert(sample.identityConsentGate.allowsIdentityDocumentSharing === false, "identity document sharing must remain disabled.");
assert(sample.identityConsentGate.allowsProfileSharing === false, "profile sharing must remain disabled.");
assert(sample.identityConsentGate.allowsTranscriptSharing === false, "transcript sharing must remain disabled.");
assert(sample.identityConsentGate.allowsExternalNavigation === false, "identity external navigation must remain disabled.");
assert(sample.certificateIssueGate.allowsCredentialContext === false, "credential context must remain disabled for partner connector execution.");
assert(sample.certificateIssueGate.allowsProviderContact === false, "provider contact must remain disabled.");
assert(sample.certificateIssueGate.allowsCertificateIssuing === false, "certificate issuing must remain disabled.");
assert(sample.certificateIssueGate.allowsCredentialPublishing === false, "credential publishing must remain disabled.");
assert(sample.certificateIssueGate.allowsTranscriptSubmission === false, "transcript submission must remain disabled.");
assert(sample.certificateIssueGate.allowsPaymentProcessing === false, "payment processing must remain disabled.");
assert(sample.certificateIssueGate.allowsExternalNavigation === false, "certificate external navigation must remain disabled.");
noExecutionFlags.forEach(flag => {
  assert(sample[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `created connector must force ${flag} safe default.`);
});

const invalid = contract.createCertificationProviderConnector({ connectorStatus: "live_now" });
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
  "verifyIdentity",
  "shareIdentity",
  "submitTranscript",
  "issueCertificate",
  "publishCredential",
  "contactProvider",
  "processPayment",
  "open("
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `certification provider connector contract must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-certification-provider-connector-contract.js",
  "NexusCertificationProviderConnectorContract",
  "createCertificationProviderConnector",
  "CERTIFICATION_PROVIDER_CONNECTOR_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(packageData.scripts["qa:nexus-certification-provider-connector-contract"] === "node scripts/nexus-certification-provider-connector-contract-qa.js", "package.json must expose qa:nexus-certification-provider-connector-contract");
assert(qaSuite.includes("scripts/nexus-certification-provider-connector-contract-qa.js"), "qa-suite.js must include certification provider connector contract QA");

console.log("[nexus-certification-provider-connector-contract-qa] passed");

