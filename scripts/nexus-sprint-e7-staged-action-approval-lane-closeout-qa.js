const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

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

const docName = "NEXUS_SPRINT_E7_STAGED_ACTION_APPROVAL_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-e7-staged-action-approval-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint E7 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint E7 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint E7",
  "387e0e2f39f0e3fb0d38773751b430fb3b88b5cc",
  "documentation and deterministic QA only",
  "E1",
  "E2",
  "E3",
  "E4",
  "E5",
  "E6",
  "E7",
  "Sprint E Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Approval And Audit Readiness",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint F1 - Approval Center Runtime Activation Readiness Gate"
], "E7 closeout doc");

assertIncludes(doc, [
  "approval readiness is not execution readiness",
  "approval record is not an execution record",
  "approval audit event is not an execution event",
  "no action has been taken",
  "no-execution by default",
  "executionAuthority: false",
  "providerHandoffAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "runtimeUiAllowed: false",
  "executionRecorded: false",
  "providerHandoffRecorded: false",
  "backendWriteOccurred: false",
  "storageWriteOccurred: false",
  "networkOccurred: false",
  "runtimeUiOccurred: false",
  "accepted_without_execution",
  "approval.accepted.inert"
], "E7 no-execution language");

assertIncludes(doc, [
  "provider handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "payments, purchases, checkout, or marketplace transactions",
  "location sharing",
  "camera, microphone, image capture, or image diagnosis",
  "health, medical, pharmacy, prescription, or FHIR execution",
  "appointment scheduling",
  "transportation dispatch",
  "emergency dispatch",
  "account creation or identity verification",
  "backend writes",
  "storage writes",
  "network calls",
  "real pending action creation"
], "E7 blocked runtime categories");

const requiredDocs = [
  "NEXUS_SPRINT_E1_STAGED_ACTION_APPROVAL_AUDIT_PRODUCT_BOUNDARY.md",
  "NEXUS_SPRINT_E2_STAGED_ACTION_APPROVAL_RECORD_CONTRACT.md",
  "NEXUS_SPRINT_E3_STAGED_ACTION_APPROVAL_RECORD_HARNESS.md",
  "NEXUS_SPRINT_E4_STAGED_ACTION_APPROVAL_AUDIT_EVENT_CONTRACT.md",
  "NEXUS_SPRINT_E5_STAGED_ACTION_APPROVAL_LIFECYCLE_HARNESS.md",
  "NEXUS_SPRINT_E6_STAGED_ACTION_APPROVAL_NO_EXECUTION_REGRESSION_GUARD.md"
];

for (const requiredDoc of requiredDocs) {
  assert(exists("docs", requiredDoc), `Sprint E7 requires prior Sprint E doc: ${requiredDoc}`);
}

const requiredScripts = [
  "nexus-sprint-e1-staged-action-approval-audit-product-boundary-qa.js",
  "nexus-sprint-e2-staged-action-approval-record-contract-qa.js",
  "nexus-sprint-e3-staged-action-approval-record-harness-qa.js",
  "nexus-sprint-e4-staged-action-approval-audit-event-contract-qa.js",
  "nexus-sprint-e5-staged-action-approval-lifecycle-harness-qa.js",
  "nexus-sprint-e6-staged-action-approval-no-execution-regression-guard-qa.js"
];

for (const requiredScript of requiredScripts) {
  assert(exists("scripts", requiredScript), `Sprint E7 requires prior Sprint E QA: ${requiredScript}`);
  assert(qaSuite.includes(`scripts/${requiredScript}`), `qa-suite must include prior Sprint E QA: ${requiredScript}`);
}

assert(exists("public", "nexus-staged-action-approval-record.js"), "Sprint E7 requires approval record module.");
assert(exists("public", "nexus-staged-action-approval-audit-event.js"), "Sprint E7 requires approval audit event module.");

const recordModule = read("public", "nexus-staged-action-approval-record.js");
const auditModule = read("public", "nexus-staged-action-approval-audit-event.js");

assertIncludes(recordModule, [
  "executionAuthority",
  "providerHandoffAllowed",
  "backendWriteAllowed",
  "storageWriteAllowed",
  "networkAllowed",
  "runtimeUiAllowed"
], "E2 approval record module");

assertIncludes(auditModule, [
  "executionRecorded",
  "providerHandoffRecorded",
  "backendWriteOccurred",
  "storageWriteOccurred",
  "networkOccurred",
  "runtimeUiOccurred"
], "E4 approval audit event module");

for (const runtimeSource of [index, app, server]) {
  assert(!runtimeSource.includes("nexus-staged-action-approval-record.js"), "Sprint E approval record module must not be runtime-loaded.");
  assert(!runtimeSource.includes("nexus-staged-action-approval-audit-event.js"), "Sprint E approval audit event module must not be runtime-loaded.");
  assert(!runtimeSource.includes("nexus-sprint-e7-staged-action-approval-lane-closeout"), "Sprint E7 QA must not be runtime-loaded.");
}

const forbiddenRuntimeAuthority = [
  "executeApprovedStagedAction",
  "dispatchApprovedStagedAction",
  "openApprovedProvider",
  "persistApprovalRecord",
  "persistApprovalAuditEvent",
  "writeApprovalAuditEvent",
  "approvalRuntimeExecutor",
  "approvalExecutionAuthority",
  "approvalProviderHandoff"
];

const combinedRuntime = [index, app, server].join("\n");
for (const term of forbiddenRuntimeAuthority) {
  assert(!combinedRuntime.includes(term), `Runtime must not introduce approval execution authority: ${term}`);
}

const alias = "qa:nexus-sprint-e7-staged-action-approval-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint E7 QA.");

console.log("[nexus-sprint-e7-staged-action-approval-lane-closeout-qa] passed");
