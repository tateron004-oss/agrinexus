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

const docName = "NEXUS_SPRINT_F1_APPROVAL_CENTER_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-f1-approval-center-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint F1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint F1 QA script must exist.");

const doc = read("docs", docName);
const phase49Doc = read("docs", "NEXUS_APPROVAL_CENTER_CONTRACT_PHASE_49.md");
const phase49Module = read("public", "nexus-approval-center-contract.js");
const e7Doc = read("docs", "NEXUS_SPRINT_E7_STAGED_ACTION_APPROVAL_LANE_CLOSEOUT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint F1",
  "0cd4d6ca342cb1ed64dfdf674d4adc72902fd76c",
  "documentation and deterministic QA only",
  "Phase 49 Approval Center contract",
  "Sprint D controlled staged-action preview lane",
  "Sprint E staged action approval/audit lane",
  "Approval Center runtime activation is currently **blocked**",
  "Required Activation Preconditions",
  "Runtime Activation Must Remain Separate From Execution",
  "Allowed Future Approval Center Responsibilities",
  "Disallowed Future Shortcuts",
  "Standard User Runtime Boundary",
  "Admin/Full Runtime Boundary",
  "Browser Validation Requirements",
  "Rollback Requirements",
  "Sprint F2 - Approval Center Feature Flag Contract"
], "F1 readiness gate doc");

assertIncludes(doc, [
  "explicit product approval",
  "explicit safety approval",
  "Standard User browser validation plan",
  "Standard User browser validation evidence",
  "rollback plan",
  "feature flag plan with default-off behavior",
  "runtime import boundary review",
  "visible copy review",
  "accessibility review",
  "audit persistence design",
  "audit retention and redaction design",
  "approval record persistence design",
  "pending action source policy",
  "role and identity policy",
  "consent policy",
  "confirmation language policy",
  "vague-confirmation block policy",
  "cancellation policy",
  "provider handoff policy",
  "backend write policy",
  "no-execution regression QA"
], "F1 required activation preconditions");

assertIncludes(doc, [
  "approval readiness is not execution readiness",
  "approval record is not an execution record",
  "approval audit event is not an execution event",
  "no action has been taken",
  "executionAuthority: false",
  "providerHandoffAllowed: false",
  "backendWriteAllowed: false",
  "networkAllowed: false"
], "F1 no-execution separation");

assertIncludes(doc, [
  "silent approval",
  "vague approval such as \"okay\"",
  "auto-execution after approval",
  "hidden provider handoff",
  "silent call or message",
  "payment execution",
  "medical, pharmacy, prescription, or FHIR execution",
  "emergency dispatch",
  "camera, microphone, image capture, or image diagnosis",
  "location sharing",
  "marketplace transaction",
  "account or identity mutation"
], "F1 disallowed shortcuts");

assertIncludes(doc, [
  "no Approval Center UI should appear from Sprint F1",
  "no Approval Center module should be imported by `public/index.html`, `public/app.js`, or `server.js`",
  "no Approval Center state should be persisted",
  "no Approval Center button should appear",
  "no approval audit event should be written"
], "F1 Standard User boundary");

assertIncludes(phase49Doc, [
  "Approval Center Contract",
  "does not add an approval UI",
  "no vague confirmation",
  "execution-disabled"
], "Phase 49 approval center contract doc");

assertIncludes(phase49Module, [
  "APPROVAL_CENTER_CONTRACT",
  "NO_EXECUTION_DEFAULTS",
  "approvalUiEnabled",
  "runtimeApprovalAuthorityEnabled",
  "providerExecutionEnabled",
  "liveActionEnabled",
  "noExecution"
], "Phase 49 approval center contract module");

assertIncludes(e7Doc, [
  "Sprint F1 - Approval Center Runtime Activation Readiness Gate",
  "approval readiness is not execution readiness",
  "no-execution by default"
], "Sprint E7 closeout");

for (const prior of [
  "NEXUS_SPRINT_E1_STAGED_ACTION_APPROVAL_AUDIT_PRODUCT_BOUNDARY.md",
  "NEXUS_SPRINT_E2_STAGED_ACTION_APPROVAL_RECORD_CONTRACT.md",
  "NEXUS_SPRINT_E3_STAGED_ACTION_APPROVAL_RECORD_HARNESS.md",
  "NEXUS_SPRINT_E4_STAGED_ACTION_APPROVAL_AUDIT_EVENT_CONTRACT.md",
  "NEXUS_SPRINT_E5_STAGED_ACTION_APPROVAL_LIFECYCLE_HARNESS.md",
  "NEXUS_SPRINT_E6_STAGED_ACTION_APPROVAL_NO_EXECUTION_REGRESSION_GUARD.md",
  "NEXUS_SPRINT_E7_STAGED_ACTION_APPROVAL_LANE_CLOSEOUT.md"
]) {
  assert(exists("docs", prior), `Sprint F1 requires prior approval-lane doc: ${prior}`);
}

const combinedRuntime = [index, app, server].join("\n");
for (const forbidden of [
  "nexus-approval-center-contract.js",
  "nexus-sprint-f1-approval-center-runtime-activation-readiness-gate",
  "renderApprovalCenter",
  "openApprovalCenter",
  "approvalCenterRuntime",
  "persistApprovalCenter",
  "executeApprovedAction",
  "dispatchApprovedAction",
  "approvalCenterProviderHandoff"
]) {
  assert(!combinedRuntime.includes(forbidden), `Runtime must not load or activate Approval Center behavior: ${forbidden}`);
}

const alias = "qa:nexus-sprint-f1-approval-center-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint F1 QA.");

console.log("[nexus-sprint-f1-approval-center-runtime-activation-readiness-gate-qa] passed");
