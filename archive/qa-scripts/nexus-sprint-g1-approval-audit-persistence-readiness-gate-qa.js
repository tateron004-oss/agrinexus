const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const auditContract = require("../public/nexus-audit-log-runtime-contract.js");
const {
  DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE,
  normalizeApprovalCenterFeatureFlagState
} = require("../public/nexus-approval-center-feature-flag.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertIncludes(source, terms, label) {
  for (const term of terms) {
    assert(source.includes(term), `${label} must include: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_G1_APPROVAL_AUDIT_PERSISTENCE_READINESS_GATE.md";
const qaName = "nexus-sprint-g1-approval-audit-persistence-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint G1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint G1 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const auditModule = read("public", "nexus-audit-log-runtime-contract.js");
const approvalFlagModule = read("public", "nexus-approval-center-feature-flag.js");
const approvalContract = read("public", "nexus-approval-center-contract.js");

assertIncludes(doc, [
  "Sprint G1",
  "941a8594ab388f563b01e132f01e3de54410efc8",
  "documentation and deterministic QA only",
  "Required Preconditions Before Audit Persistence",
  "What Remains Blocked",
  "Approval Center Relationship",
  "Audit Runtime Relationship",
  "Redaction And Retention Requirements",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint G2 - Approval Audit Persistence Contract"
], "G1 readiness gate doc");

assertIncludes(doc, [
  "audit backend reviewed and approved",
  "retention policy defined",
  "redaction policy defined",
  "role projection policy defined",
  "consent policy defined",
  "provider policy defined",
  "approval record schema reviewed",
  "approval event schema reviewed",
  "risk tier captured",
  "redacted payload only",
  "expiry or retention class captured",
  "explicit user approval captured for high-risk actions",
  "cancellation path preserved",
  "rollback plan documented"
], "G1 required preconditions");

assertIncludes(doc, [
  "runtimeAuditWriteEnabled: true",
  "auditPersistenceEnabled: true",
  "auditBackendEnabled: true",
  "auditExportEnabled: true",
  "backend writes",
  "localStorage or sessionStorage writes",
  "network calls",
  "provider handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "payment execution",
  "marketplace transactions",
  "location sharing",
  "camera or microphone activation",
  "health, medical, pharmacy, prescription, or FHIR execution",
  "appointment scheduling",
  "transportation dispatch",
  "emergency dispatch",
  "account or identity mutation",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "G1 blocked behavior");

assertIncludes(doc, [
  "phone numbers are redacted",
  "email addresses are redacted",
  "names are minimized",
  "health context is redacted",
  "payment context is redacted",
  "location context is minimized",
  "identity secrets are excluded",
  "provider credentials are excluded",
  "retention class",
  "expiry field",
  "default retention duration",
  "regional compliance constraints"
], "G1 redaction and retention requirements");

for (const prior of [
  ["docs", "NEXUS_AUDIT_LOG_RUNTIME_CONTRACT_PHASE_48.md"],
  ["docs", "NEXUS_APPROVAL_CENTER_CONTRACT_PHASE_49.md"],
  ["docs", "NEXUS_SPRINT_E7_STAGED_ACTION_APPROVAL_LANE_CLOSEOUT.md"],
  ["docs", "NEXUS_SPRINT_F5_APPROVAL_CENTER_LANE_CLOSEOUT.md"],
  ["public", "nexus-audit-log-runtime-contract.js"],
  ["public", "nexus-approval-center-contract.js"],
  ["public", "nexus-approval-center-feature-flag.js"],
  ["scripts", "nexus-audit-log-runtime-contract-qa.js"],
  ["scripts", "nexus-sprint-f5-approval-center-lane-closeout-qa.js"]
]) {
  assert(exists(...prior), `Sprint G1 requires prior artifact: ${prior.join("/")}`);
}

assert.equal(auditContract.AUDIT_LOG_RUNTIME_CONTRACT.auditBackendEnabled, false);
assert.equal(auditContract.AUDIT_LOG_RUNTIME_CONTRACT.auditPersistenceEnabled, false);
assert.equal(auditContract.AUDIT_LOG_RUNTIME_CONTRACT.runtimeAuditWriteEnabled, false);
assert.equal(auditContract.AUDIT_LOG_RUNTIME_CONTRACT.auditExportEnabled, false);
assert.equal(auditContract.AUDIT_LOG_RUNTIME_CONTRACT.liveActionEnabled, false);
assert.equal(auditContract.AUDIT_LOG_RUNTIME_CONTRACT.noExecution, true);
assert.equal(auditContract.DEFAULT_AUDIT_BEFORE_EXECUTION_GATE.allowsAuditPersistence, false);
assert.equal(auditContract.DEFAULT_AUDIT_BEFORE_EXECUTION_GATE.allowsAuditExport, false);
assert.equal(auditContract.DEFAULT_AUDIT_BEFORE_EXECUTION_GATE.allowsProviderExecution, false);
assert.equal(auditContract.DEFAULT_AUDIT_BEFORE_EXECUTION_GATE.allowsPaymentExecution, false);
assert.equal(auditContract.DEFAULT_AUDIT_BEFORE_EXECUTION_GATE.allowsEmergencyDispatch, false);
assert.equal(auditContract.DEFAULT_AUDIT_BEFORE_EXECUTION_GATE.allowsExternalNavigation, false);

const unsafeAudit = auditContract.createAuditLogRuntimeContract({
  auditStatus: "approved_not_live",
  auditBeforeExecutionGate: {
    allowsAuditPersistence: true,
    allowsAuditExport: true,
    allowsProviderExecution: true,
    allowsPaymentExecution: true,
    allowsEmergencyDispatch: true,
    allowsExternalNavigation: true
  },
  retentionModel: {
    externalStorageEnabled: true,
    exportEnabled: true
  },
  auditPersistenceEnabled: true,
  runtimeAuditWriteEnabled: true,
  auditBackendEnabled: true,
  auditExportEnabled: true,
  liveActionEnabled: true
});

assert.equal(unsafeAudit.auditPersistenceEnabled, false);
assert.equal(unsafeAudit.runtimeAuditWriteEnabled, false);
assert.equal(unsafeAudit.auditBackendEnabled, false);
assert.equal(unsafeAudit.auditExportEnabled, false);
assert.equal(unsafeAudit.liveActionEnabled, false);
assert.equal(unsafeAudit.noExecution, true);
assert.equal(unsafeAudit.auditBeforeExecutionGate.allowsAuditPersistence, false);
assert.equal(unsafeAudit.auditBeforeExecutionGate.allowsAuditExport, false);
assert.equal(unsafeAudit.retentionModel.externalStorageEnabled, false);
assert.equal(unsafeAudit.retentionModel.exportEnabled, false);

assert.equal(DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.approvalPersistenceAllowed, false);
assert.equal(DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.auditWriteAllowed, false);
assert.equal(DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.backendWriteAllowed, false);
assert.equal(DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.storageWriteAllowed, false);
assert.equal(DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.networkAllowed, false);
assert.equal(DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.executionAuthority, false);
assert.equal(DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.noExecution, true);

const unsafeApprovalFlag = normalizeApprovalCenterFeatureFlagState({
  approvalPersistenceAllowed: true,
  auditWriteAllowed: true,
  backendWriteAllowed: true,
  storageWriteAllowed: true,
  networkAllowed: true,
  executionAuthority: true,
  noExecution: false
});
assert.equal(unsafeApprovalFlag.approvalPersistenceAllowed, false);
assert.equal(unsafeApprovalFlag.auditWriteAllowed, false);
assert.equal(unsafeApprovalFlag.backendWriteAllowed, false);
assert.equal(unsafeApprovalFlag.storageWriteAllowed, false);
assert.equal(unsafeApprovalFlag.networkAllowed, false);
assert.equal(unsafeApprovalFlag.executionAuthority, false);
assert.equal(unsafeApprovalFlag.noExecution, true);

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-audit-log-runtime-contract.js",
  "nexus-approval-center-contract.js",
  "nexus-approval-center-feature-flag.js",
  "persistApprovalAudit",
  "persistApprovalRecord",
  "writeApprovalAuditEvent",
  "writeAuditEvent",
  "storeAuditEvent",
  "runtimeAuditWriteEnabled",
  "auditPersistenceEnabled",
  "auditBackendEnabled",
  "nexus-sprint-g1-approval-audit-persistence-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate approval audit persistence: ${term}`);
}

for (const source of [auditModule, approvalFlagModule, approvalContract]) {
  for (const term of [
    "fetch(",
    "XMLHttpRequest",
    "localStorage",
    "sessionStorage",
    "indexedDB",
    "navigator.geolocation",
    "mediaDevices",
    "window.location",
    "location.href",
    "sendBeacon",
    "setItem",
    "window.nativeBridge",
    "nativeBridge.",
    "ACTION_CALL",
    "getUserMedia",
    "openWorkflow(",
    "goSection("
  ]) {
    assert(!source.includes(term), `Audit/approval contract artifacts must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-g1-approval-audit-persistence-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint G1 QA.");

console.log("[nexus-sprint-g1-approval-audit-persistence-readiness-gate-qa] passed");
