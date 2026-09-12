const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_AUDIT_LOG_RUNTIME_CONTRACT_PHASE_48.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-audit-log-runtime-contract.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  auditArchitectureDoc: path.join(root, "docs", "NEXUS_AGENT_AUDIT_LOGGING_ARCHITECTURE.md"),
  auditArchitectureQa: path.join(root, "scripts", "nexus-audit-log-architecture-qa.js"),
  confirmationQa: path.join(root, "scripts", "nexus-confirmation-ui-contract-qa.js"),
  providerBoundaryQa: path.join(root, "scripts", "nexus-provider-handoff-boundary-qa.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-audit-log-runtime-contract-qa] ${message}`);
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
const auditArchitectureDoc = read(paths.auditArchitectureDoc);
const auditArchitectureQa = read(paths.auditArchitectureQa);
const confirmationQa = read(paths.confirmationQa);
const providerBoundaryQa = read(paths.providerBoundaryQa);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const statuses = [
  "not_configured",
  "audit_backend_required",
  "retention_policy_required",
  "redaction_policy_required",
  "role_projection_required",
  "export_policy_required",
  "consent_policy_required",
  "provider_policy_required",
  "sandbox_testing_required",
  "approved_not_live",
  "rejected_or_blocked",
  "inactive"
];
const categories = [
  "low_risk_preview_event",
  "medium_risk_staging_event",
  "high_risk_confirmation_event",
  "provider_action_boundary_event",
  "payment_boundary_event",
  "health_boundary_event",
  "identity_boundary_event",
  "location_boundary_event",
  "emergency_boundary_event",
  "consent_boundary_event",
  "restricted_audit_boundary"
];
const fields = [
  "auditRuntimeId",
  "auditBackendName",
  "sourceOwner",
  "auditStatus",
  "auditEventCategories",
  "supportedRegions",
  "supportedLanguages",
  "retentionPolicyStatus",
  "redactionPolicyStatus",
  "roleProjectionStatus",
  "exportPolicyStatus",
  "consentPolicyStatus",
  "providerPolicyStatus",
  "freshnessModel",
  "allowedResponseStates",
  "auditBeforeExecutionGate",
  "redactionGate",
  "retentionModel",
  "auditRequirements",
  "auditEventSchema",
  "auditBackendEnabled",
  "auditPersistenceEnabled",
  "runtimeAuditWriteEnabled",
  "auditExportEnabled",
  "liveActionEnabled",
  "noExecution"
];
const noExecutionFlags = [
  "noExecution",
  "auditBackendEnabled",
  "auditPersistenceEnabled",
  "runtimeAuditWriteEnabled",
  "auditExportEnabled",
  "roleProjectionEnabled",
  "providerExecutionEnabled",
  "callExecutionEnabled",
  "messageExecutionEnabled",
  "paymentExecutionEnabled",
  "healthActionEnabled",
  "medicalRecordAccessEnabled",
  "locationSharingEnabled",
  "emergencyDispatchEnabled",
  "accountMutationEnabled",
  "externalNavigationEnabled",
  "liveActionEnabled",
  "auditEventStored",
  "auditEventExported",
  "providerContacted",
  "callPlaced",
  "messageSent",
  "paymentExecuted",
  "healthActionPerformed",
  "medicalRecordAccessed",
  "locationShared",
  "emergencyDispatched",
  "accountMutated",
  "externalActionExecuted"
];

assert(roadmap.includes("| Phase 48 | Audit log runtime | Store auditable events | audit service | future | high | audit backend | audit before execution | audit QA | event retention defined |"), "Nexus 100 roadmap must include the Phase 48 audit log runtime row.");

[
  "Audit logging must not itself trigger execution.",
  "High-risk actions must be auditable before execution.",
  "Cancelled actions are cancelled, not failed and not executed.",
  "Rendering a preview, confirmation, or handoff card must not produce an \"executed\" event."
].forEach(phrase => {
  assert(auditArchitectureDoc.includes(phrase), `audit architecture must preserve principle: ${phrase}`);
});

[
  "auditId",
  "eventType",
  "actionId",
  "intentId",
  "sourceSurface",
  "riskTier",
  "redactedPayload",
  "expiresAt",
  "retentionClass"
].forEach(field => {
  assert(auditArchitectureQa.includes(field), `existing audit architecture QA must preserve schema field ${field}.`);
});

assert(confirmationQa.includes("auditRequired"), "confirmation UI QA must preserve audit-required confirmation boundary.");
assert(providerBoundaryQa.includes("Provider adapters must never be called directly by raw intent parsing"), "provider boundary QA must preserve no raw provider launch boundary.");

statuses.forEach(status => {
  assert(contract.AUDIT_RUNTIME_STATUSES.includes(status), `contract must include status ${status}`);
  assert(doc.includes(status), `doc must document status ${status}`);
});
categories.forEach(category => {
  assert(contract.AUDIT_EVENT_CATEGORIES.includes(category), `contract must include event category ${category}`);
  assert(doc.includes(category), `doc must document event category ${category}`);
});
fields.forEach(field => {
  assert(contract.AUDIT_RUNTIME_FIELDS.includes(field), `contract must list field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.AUDIT_LOG_RUNTIME_CONTRACT, field), `audit runtime contract must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});
contract.AUDIT_BEFORE_EXECUTION_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_AUDIT_BEFORE_EXECUTION_GATE, field), `audit-before-execution gate must include ${field}`);
  assert(doc.includes(field), `doc must document audit-before-execution gate field ${field}`);
});
contract.REDACTION_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_REDACTION_GATE, field), `redaction gate must include ${field}`);
  assert(doc.includes(field), `doc must document redaction gate field ${field}`);
});
contract.AUDIT_EVENT_SCHEMA_FIELDS.forEach(field => {
  assert(contract.AUDIT_LOG_RUNTIME_CONTRACT.auditEventSchema.includes(field), `schema must include ${field}`);
  assert(doc.includes(field), `doc must document schema field ${field}`);
});

[
  "allowsAuditPersistence",
  "allowsAuditExport",
  "allowsProviderExecution",
  "allowsPaymentExecution",
  "allowsEmergencyDispatch",
  "allowsExternalNavigation"
].forEach(field => {
  assert(contract.DEFAULT_AUDIT_BEFORE_EXECUTION_GATE[field] === false, `${field} must default false.`);
});
[
  "allowsRawPhoneStorage",
  "allowsRawHealthStorage",
  "allowsRawPaymentStorage",
  "allowsPreciseLocationStorage",
  "allowsProviderCredentialStorage"
].forEach(field => {
  assert(contract.DEFAULT_REDACTION_GATE[field] === false, `${field} must default false.`);
});
noExecutionFlags.forEach(flag => {
  assert(contract.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely.`);
  assert(contract.AUDIT_LOG_RUNTIME_CONTRACT[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `${flag} must match safe default.`);
});

const sample = contract.createAuditLogRuntimeContract({
  auditRuntimeId: "sample-audit-runtime",
  auditStatus: "approved_not_live",
  auditEventCategories: [
    "low_risk_preview_event",
    "high_risk_confirmation_event",
    "provider_action_boundary_event",
    "unsafe"
  ],
  supportedRegions: ["US"],
  supportedLanguages: ["en", "es"],
  auditBeforeExecutionGate: {
    allowsAuditPersistence: true,
    allowsAuditExport: true,
    allowsProviderExecution: true,
    allowsPaymentExecution: true,
    allowsEmergencyDispatch: true,
    allowsExternalNavigation: true
  },
  redactionGate: {
    allowsRawPhoneStorage: true,
    allowsRawHealthStorage: true,
    allowsRawPaymentStorage: true,
    allowsPreciseLocationStorage: true,
    allowsProviderCredentialStorage: true
  },
  retentionModel: {
    retentionClass: "standard_operational",
    defaultRetentionDays: 30,
    externalStorageEnabled: true,
    exportEnabled: true
  },
  liveActionEnabled: true
});

assert(Object.isFrozen(sample), "created audit runtime contract must be frozen.");
assert(sample.auditStatus === "approved_not_live", "valid audit status must be preserved.");
assert(sample.auditEventCategories.includes("low_risk_preview_event"), "valid low-risk category must be preserved.");
assert(sample.auditEventCategories.includes("high_risk_confirmation_event"), "valid high-risk category must be preserved.");
assert(sample.auditEventCategories.includes("provider_action_boundary_event"), "valid provider boundary category must be preserved.");
assert(!sample.auditEventCategories.includes("unsafe"), "invalid categories must be filtered.");
assert(sample.retentionModel.externalStorageEnabled === false, "external storage must remain disabled.");
assert(sample.retentionModel.exportEnabled === false, "export must remain disabled.");
[
  "allowsAuditPersistence",
  "allowsAuditExport",
  "allowsProviderExecution",
  "allowsPaymentExecution",
  "allowsEmergencyDispatch",
  "allowsExternalNavigation"
].forEach(field => {
  assert(sample.auditBeforeExecutionGate[field] === false, `${field} must remain disabled after override.`);
});
[
  "allowsRawPhoneStorage",
  "allowsRawHealthStorage",
  "allowsRawPaymentStorage",
  "allowsPreciseLocationStorage",
  "allowsProviderCredentialStorage"
].forEach(field => {
  assert(sample.redactionGate[field] === false, `${field} must remain disabled after override.`);
});
noExecutionFlags.forEach(flag => {
  assert(sample[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `created audit runtime contract must force ${flag} safe default.`);
});

const invalid = contract.createAuditLogRuntimeContract({ auditStatus: "live_logging_enabled", auditEventCategories: ["everything"] });
assert(invalid.auditStatus === "not_configured", "invalid audit status must fall back to not_configured.");
assert(invalid.auditEventCategories.length === 0, "invalid event categories must be removed.");

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
  "writeAuditEvent",
  "storeAuditEvent",
  "persistAuditEvent",
  "exportAuditLog",
  "processPayment",
  "dispatchEmergency",
  "open("
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `audit runtime contract must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-audit-log-runtime-contract.js",
  "NexusAuditLogRuntimeContract",
  "createAuditLogRuntimeContract",
  "AUDIT_LOG_RUNTIME_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(packageData.scripts["qa:nexus-audit-log-runtime-contract"] === "node scripts/nexus-audit-log-runtime-contract-qa.js", "package.json must expose qa:nexus-audit-log-runtime-contract");
assert(qaSuite.includes("scripts/nexus-audit-log-runtime-contract-qa.js"), "qa-suite.js must include audit log runtime contract QA");

console.log("[nexus-audit-log-runtime-contract-qa] passed");
