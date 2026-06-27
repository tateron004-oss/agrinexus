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

const docName = "NEXUS_SPRINT_E6_STAGED_ACTION_APPROVAL_NO_EXECUTION_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-e6-staged-action-approval-no-execution-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint E6 no-execution regression guard doc must exist.");
assert(exists("scripts", qaName), "Sprint E6 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint E6",
  "54b98f075fb81af0532ca939b93d2b1ffd3f38c4",
  "documentation and QA only",
  "Prevent future drift",
  "E1 approval/audit product boundary",
  "E2 approval record contract",
  "E3 approval record harness",
  "E4 approval audit event contract",
  "E5 approval lifecycle harness",
  "Protected Runtime Boundaries",
  "Blocked Runtime Behaviors",
  "Required No-Execution Language",
  "Contract Invariants",
  "Sprint E7 - Staged Action Approval Lane Closeout",
  "no-execution by default"
], "E6 regression doc");

const requiredArtifacts = [
  ["docs", "NEXUS_SPRINT_E1_STAGED_ACTION_APPROVAL_AUDIT_PRODUCT_BOUNDARY.md"],
  ["scripts", "nexus-sprint-e1-staged-action-approval-audit-product-boundary-qa.js"],
  ["docs", "NEXUS_SPRINT_E2_STAGED_ACTION_APPROVAL_RECORD_CONTRACT.md"],
  ["public", "nexus-staged-action-approval-record.js"],
  ["scripts", "nexus-sprint-e2-staged-action-approval-record-contract-qa.js"],
  ["docs", "NEXUS_SPRINT_E3_STAGED_ACTION_APPROVAL_RECORD_HARNESS.md"],
  ["scripts", "nexus-sprint-e3-staged-action-approval-record-harness-qa.js"],
  ["docs", "NEXUS_SPRINT_E4_STAGED_ACTION_APPROVAL_AUDIT_EVENT_CONTRACT.md"],
  ["public", "nexus-staged-action-approval-audit-event.js"],
  ["scripts", "nexus-sprint-e4-staged-action-approval-audit-event-contract-qa.js"],
  ["docs", "NEXUS_SPRINT_E5_STAGED_ACTION_APPROVAL_LIFECYCLE_HARNESS.md"],
  ["scripts", "nexus-sprint-e5-staged-action-approval-lifecycle-harness-qa.js"]
];

for (const parts of requiredArtifacts) {
  assert(exists(...parts), `Sprint E6 requires prior artifact: ${parts.join("/")}`);
}

const combinedDocs = [
  read("docs", "NEXUS_SPRINT_E1_STAGED_ACTION_APPROVAL_AUDIT_PRODUCT_BOUNDARY.md"),
  read("docs", "NEXUS_SPRINT_E2_STAGED_ACTION_APPROVAL_RECORD_CONTRACT.md"),
  read("docs", "NEXUS_SPRINT_E3_STAGED_ACTION_APPROVAL_RECORD_HARNESS.md"),
  read("docs", "NEXUS_SPRINT_E4_STAGED_ACTION_APPROVAL_AUDIT_EVENT_CONTRACT.md"),
  read("docs", "NEXUS_SPRINT_E5_STAGED_ACTION_APPROVAL_LIFECYCLE_HARNESS.md"),
  doc
].join("\n");

assertIncludes(combinedDocs, [
  "no-execution by default",
  "no action has been taken",
  "Approval readiness is not execution readiness",
  "An approval record is not an execution record",
  "An approval audit event is not an execution event",
  "accepted_without_execution",
  "approval.accepted.inert",
  "cancellation path",
  "auditRequired"
], "Sprint E no-execution docs");

const recordModule = read("public", "nexus-staged-action-approval-record.js");
const auditModule = read("public", "nexus-staged-action-approval-audit-event.js");

assertIncludes(recordModule, [
  "executionAuthority",
  "providerHandoffAllowed",
  "backendWriteAllowed",
  "storageWriteAllowed",
  "networkAllowed",
  "runtimeUiAllowed",
  "auditRequired",
  "validateStagedActionApprovalRecord",
  "createStagedActionApprovalRecord"
], "E2 approval record module");

assertIncludes(auditModule, [
  "executionRecorded",
  "providerHandoffRecorded",
  "backendWriteOccurred",
  "storageWriteOccurred",
  "networkOccurred",
  "runtimeUiOccurred",
  "auditRequired",
  "validateStagedActionApprovalAuditEvent",
  "createStagedActionApprovalAuditEvent"
], "E4 approval audit event module");

[
  "document.",
  "querySelector",
  "addEventListener",
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "navigator.geolocation",
  "mediaDevices",
  "window.location",
  "location.href",
  "open(",
  "sendBeacon",
  "setItem",
  "postMessage",
  "window.nativeBridge",
  "nativeBridge.",
  "ACTION_CALL",
  "getUserMedia",
  "openWorkflow(",
  "goSection(",
  "confirmPending",
  "outboundCalls.push",
  "messages.push",
  "transactions.push"
].forEach(term => {
  assert(!recordModule.includes(term), `E2 approval record module must not include runtime/execution hook: ${term}`);
  assert(!auditModule.includes(term), `E4 audit event module must not include runtime/execution hook: ${term}`);
});

[
  "nexus-staged-action-approval-record.js",
  "nexus-staged-action-approval-audit-event.js",
  "NexusStagedActionApprovalRecord",
  "NexusStagedActionApprovalAuditEvent",
  "createStagedActionApprovalRecord(",
  "createStagedActionApprovalAuditEvent(",
  "validateStagedActionApprovalRecord(",
  "validateStagedActionApprovalAuditEvent("
].forEach(forbidden => {
  assert(!index.includes(forbidden), `index must not load Sprint E approval lane artifact: ${forbidden}`);
  assert(!app.includes(forbidden), `app must not wire Sprint E approval lane artifact: ${forbidden}`);
  assert(!server.includes(forbidden), `server must not wire Sprint E approval lane artifact: ${forbidden}`);
});

[
  "executeApprovedStagedAction",
  "dispatchApprovedStagedAction",
  "openApprovedProvider",
  "persistApprovalRecord",
  "persistApprovalAuditEvent",
  "writeApprovalAuditEvent",
  "approvalRuntimeExecutor",
  "approvalExecutionAuthority",
  "approvalProviderHandoff"
].forEach(forbidden => {
  assert(!combinedDocs.includes(forbidden), `Sprint E docs must not introduce execution runtime term: ${forbidden}`);
  assert(!recordModule.includes(forbidden), `E2 module must not introduce execution runtime term: ${forbidden}`);
  assert(!auditModule.includes(forbidden), `E4 module must not introduce execution runtime term: ${forbidden}`);
});

[
  "qa:nexus-sprint-e1-staged-action-approval-audit-product-boundary",
  "qa:nexus-sprint-e2-staged-action-approval-record-contract",
  "qa:nexus-sprint-e3-staged-action-approval-record-harness",
  "qa:nexus-sprint-e4-staged-action-approval-audit-event-contract",
  "qa:nexus-sprint-e5-staged-action-approval-lifecycle-harness"
].forEach(alias => {
  assert(pkg.scripts && pkg.scripts[alias], `package script must preserve prior Sprint E alias: ${alias}`);
});

const alias = "qa:nexus-sprint-e6-staged-action-approval-no-execution-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint E6 QA.");

[
  "scripts/nexus-sprint-e1-staged-action-approval-audit-product-boundary-qa.js",
  "scripts/nexus-sprint-e2-staged-action-approval-record-contract-qa.js",
  "scripts/nexus-sprint-e3-staged-action-approval-record-harness-qa.js",
  "scripts/nexus-sprint-e4-staged-action-approval-audit-event-contract-qa.js",
  "scripts/nexus-sprint-e5-staged-action-approval-lifecycle-harness-qa.js"
].forEach(script => {
  assert(qaSuite.includes(script), `qa-suite must preserve prior Sprint E QA: ${script}`);
});

console.log("[nexus-sprint-e6-staged-action-approval-no-execution-regression-guard-qa] passed");
