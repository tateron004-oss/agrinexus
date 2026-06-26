const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_CONSENT_CENTER_CONTRACT_PHASE_47.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-consent-center-contract.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  memoryConsentDoc: path.join(root, "docs", "NEXUS_SESSION_MEMORY_RESET_CONSENT_UX_PLAN.md"),
  memoryConsentQa: path.join(root, "scripts", "nexus-session-memory-reset-consent-qa.js"),
  realDataRegistry: path.join(root, "public", "nexus-real-data-source-registry.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-consent-center-contract-qa] ${message}`);
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
const memoryConsentDoc = read(paths.memoryConsentDoc);
const memoryConsentQa = read(paths.memoryConsentQa);
const realDataRegistry = read(paths.realDataRegistry);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const statuses = [
  "not_configured",
  "notice_required",
  "explicit_consent_required",
  "scoped_consent_required",
  "audit_policy_required",
  "revocation_path_required",
  "retention_policy_required",
  "provider_policy_required",
  "approved_not_live",
  "revoked",
  "expired",
  "rejected_or_blocked",
  "inactive"
];
const categories = [
  "temporary_session_context",
  "profile_personalization",
  "provider_contact",
  "health_access",
  "telehealth_handoff",
  "pharmacy_refill_handoff",
  "medical_records_access",
  "location_sharing",
  "transportation_request",
  "payment_authorization",
  "marketplace_contact",
  "workforce_application",
  "emergency_partner_handoff",
  "restricted_consent_boundary"
];
const fields = [
  "consentRecordId",
  "subjectRef",
  "purposeCategory",
  "consentStatus",
  "scope",
  "sourceSurface",
  "supportedLanguages",
  "noticeStatus",
  "auditPolicyStatus",
  "revocationPathStatus",
  "retentionPolicyStatus",
  "providerPolicyStatus",
  "freshnessModel",
  "allowedResponseStates",
  "scopedConsentGate",
  "revocationGate",
  "auditRequirements",
  "auditEvent",
  "consentStoreEnabled",
  "consentPersistenceEnabled",
  "runtimeConsentAuthorityEnabled",
  "providerContactEnabled",
  "paymentExecutionEnabled",
  "emergencyDispatchEnabled",
  "liveActionEnabled",
  "noExecution"
];
const noExecutionFlags = [
  "noExecution",
  "consentStoreEnabled",
  "consentPersistenceEnabled",
  "consentUiEnabled",
  "runtimeConsentAuthorityEnabled",
  "providerContactEnabled",
  "healthActionEnabled",
  "telehealthActionEnabled",
  "pharmacyActionEnabled",
  "medicalRecordAccessEnabled",
  "locationSharingEnabled",
  "transportationDispatchEnabled",
  "paymentExecutionEnabled",
  "marketplaceTransactionEnabled",
  "workforceSubmissionEnabled",
  "emergencyDispatchEnabled",
  "accountMutationEnabled",
  "externalNavigationEnabled",
  "liveActionEnabled",
  "consentRecorded",
  "consentRevoked",
  "providerContacted",
  "healthActionPerformed",
  "telehealthActionPerformed",
  "pharmacyActionPerformed",
  "medicalRecordAccessed",
  "locationShared",
  "transportationDispatched",
  "paymentExecuted",
  "marketplaceTransactionCompleted",
  "workforceApplicationSubmitted",
  "emergencyDispatched",
  "accountMutated",
  "externalActionExecuted"
];

assert(roadmap.includes("| Phase 47 | Consent center |"), "Nexus 100 roadmap must include Phase 47 consent center row.");
assert(memoryConsentDoc.includes("Consent to remember context is not consent to execute"), "memory consent plan must separate consent from execution.");
assert(memoryConsentQa.includes("consent language stays separate from execution authority"), "memory consent QA must preserve non-authority boundary.");
assert(realDataRegistry.includes("purpose-specific consent") && realDataRegistry.includes("scoped authorization"), "real data registry must preserve purpose-specific/scoped consent language.");

statuses.forEach(status => {
  assert(contract.CONSENT_RECORD_STATUSES.includes(status), `contract must include status ${status}`);
  assert(doc.includes(status), `doc must include status ${status}`);
});
categories.forEach(category => {
  assert(contract.CONSENT_PURPOSE_CATEGORIES.includes(category), `contract must include purpose category ${category}`);
  assert(doc.includes(category), `doc must include purpose category ${category}`);
});
fields.forEach(field => {
  assert(contract.CONSENT_CENTER_FIELDS.includes(field), `contract must list field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.CONSENT_CENTER_CONTRACT, field), `consent center contract must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});
contract.SCOPED_CONSENT_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_SCOPED_CONSENT_GATE, field), `scoped consent gate must include ${field}`);
  assert(doc.includes(field), `doc must document scoped consent gate field ${field}`);
});
contract.REVOCATION_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_REVOCATION_GATE, field), `revocation gate must include ${field}`);
  assert(doc.includes(field), `doc must document revocation gate field ${field}`);
});
contract.CONSENT_AUDIT_EVENT_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.CONSENT_CENTER_CONTRACT.auditEvent, field), `audit event must include ${field}`);
  assert(doc.includes(field), `doc must document audit field ${field}`);
});

[
  "allowsProviderContact",
  "allowsHealthAction",
  "allowsMedicalRecordAccess",
  "allowsLocationSharing",
  "allowsPaymentExecution",
  "allowsEmergencyDispatch",
  "allowsExternalNavigation"
].forEach(field => {
  assert(contract.DEFAULT_SCOPED_CONSENT_GATE[field] === false, `${field} must default false.`);
});
[
  "allowsProviderCancellation",
  "allowsExternalDeletion",
  "allowsAccountMutation",
  "allowsPaymentReversal",
  "allowsEmergencyCancellation"
].forEach(field => {
  assert(contract.DEFAULT_REVOCATION_GATE[field] === false, `${field} must default false.`);
});
noExecutionFlags.forEach(flag => {
  assert(contract.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely.`);
  assert(contract.CONSENT_CENTER_CONTRACT[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `${flag} must match safe default.`);
});

const sample = contract.createConsentCenterRecord({
  consentRecordId: "sample-consent",
  consentStatus: "approved_not_live",
  purposeCategory: "payment_authorization",
  scope: ["payment quote review", "provider review"],
  scopedConsentGate: {
    allowsProviderContact: true,
    allowsHealthAction: true,
    allowsMedicalRecordAccess: true,
    allowsLocationSharing: true,
    allowsPaymentExecution: true,
    allowsEmergencyDispatch: true,
    allowsExternalNavigation: true
  },
  revocationGate: {
    allowsProviderCancellation: true,
    allowsExternalDeletion: true,
    allowsAccountMutation: true,
    allowsPaymentReversal: true,
    allowsEmergencyCancellation: true
  }
});
assert(Object.isFrozen(sample), "created consent record must be frozen.");
assert(sample.purposeCategory === "payment_authorization", "valid purpose category must be preserved.");
assert(sample.scope.includes("payment quote review"), "scope entries must be preserved as inert text.");
assert(sample.scopedConsentGate.allowsProviderContact === false, "provider contact must remain disabled.");
assert(sample.scopedConsentGate.allowsHealthAction === false, "health action must remain disabled.");
assert(sample.scopedConsentGate.allowsMedicalRecordAccess === false, "medical record access must remain disabled.");
assert(sample.scopedConsentGate.allowsLocationSharing === false, "location sharing must remain disabled.");
assert(sample.scopedConsentGate.allowsPaymentExecution === false, "payment execution must remain disabled.");
assert(sample.scopedConsentGate.allowsEmergencyDispatch === false, "emergency dispatch must remain disabled.");
assert(sample.scopedConsentGate.allowsExternalNavigation === false, "external navigation must remain disabled.");
assert(sample.revocationGate.allowsProviderCancellation === false, "provider cancellation must remain disabled.");
assert(sample.revocationGate.allowsExternalDeletion === false, "external deletion must remain disabled.");
assert(sample.revocationGate.allowsAccountMutation === false, "account mutation must remain disabled.");
assert(sample.revocationGate.allowsPaymentReversal === false, "payment reversal must remain disabled.");
assert(sample.revocationGate.allowsEmergencyCancellation === false, "emergency cancellation must remain disabled.");
noExecutionFlags.forEach(flag => {
  assert(sample[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `created consent record must force ${flag} safe default.`);
});

const invalid = contract.createConsentCenterRecord({ consentStatus: "recorded_live", purposeCategory: "everything" });
assert(invalid.consentStatus === "not_configured", "invalid consent status must fall back to not_configured.");
assert(invalid.purposeCategory === "restricted_consent_boundary", "invalid purpose category must fall back to restricted boundary.");

[
  "fetch(",
  "XMLHttpRequest",
  "axios",
  "EventSource",
  "WebSocket",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "navigator.geolocation",
  "navigator.mediaDevices",
  "window.location",
  "document.location",
  "setInterval",
  "execute:",
  "handler:",
  "adapter:",
  "providerHandoff",
  "recordConsent",
  "persistConsent",
  "revokeExternalConsent",
  "contactProvider",
  "processPayment",
  "dispatchEmergency",
  "shareLocation",
  "open("
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `consent center contract must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-consent-center-contract.js",
  "NexusConsentCenterContract",
  "createConsentCenterRecord",
  "CONSENT_CENTER_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(packageData.scripts["qa:nexus-consent-center-contract"] === "node scripts/nexus-consent-center-contract-qa.js", "package.json must expose qa:nexus-consent-center-contract");
assert(qaSuite.includes("scripts/nexus-consent-center-contract-qa.js"), "qa-suite.js must include consent center contract QA");

console.log("[nexus-consent-center-contract-qa] passed");
