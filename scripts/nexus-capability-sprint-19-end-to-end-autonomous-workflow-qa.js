const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function extractFunction(source, name) {
  const start = source.indexOf(`function ${name}`);
  assert(start >= 0, `${name} should exist`);
  const signatureEnd = source.indexOf(")", start);
  const bodyStart = source.indexOf("{", signatureEnd);
  let depth = 0;
  for (let index = bodyStart; index < source.length; index += 1) {
    const char = source[index];
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }
  throw new Error(`${name} body should be extractable`);
}

const app = read("public", "app.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

const functionNames = [
  "sanitizeNexusSessionAuditText",
  "recordNexusSessionActionAuditEvent",
  "createNexusSafeTaskHistoryEntry",
  "buildNexusSafetyReviewDashboardState",
  "renderNexusSafetyReviewDashboard",
  "nexusAutonomousTaskPlanCategory",
  "buildNexusAutonomousTaskPlan",
  "nexusControlledActionQueueTypeForPlan",
  "buildNexusControlledActionQueueItem",
  "buildNexusControlledActionQueueFromTaskPlan",
  "isNexusControlledQueueActionLocallyConfirmable",
  "buildNexusUserConfirmationGateFromQueueAction"
];

const extracted = Object.fromEntries(functionNames.map(name => [name, extractFunction(app, name)]));

[
  "nexus-autonomous-task-planner.v1",
  "nexus-controlled-action-queue-item.v1",
  "nexus-user-confirmation-gate.v1",
  "nexus-session-action-audit.v1",
  "nexus-safe-task-history.v1",
  "nexus-safety-review-dashboard.v1"
].forEach(term => assert(app.includes(term), `Sprint 19 end-to-end chain should include ${term}`));

[
  "executionAuthority: false",
  "canExecute: false",
  "externalExecutionAllowed: false",
  "providerHandoffAuthorized: false",
  "backendWriteAllowed: false",
  "storageMode: \"volatile-ui-only\""
].forEach(term => assert(app.includes(term), `Sprint 19 chain should preserve ${term}`));

[
  "getUserMedia",
  "navigator.geolocation",
  "getCurrentPosition",
  "watchPosition",
  "fetch(",
  "XMLHttpRequest",
  "window.open",
  "location.href",
  "dispatchProviderWebhook",
  "localStorage.setItem",
  "sessionStorage.setItem"
].forEach(term => {
  const chainSource = [
    extracted.recordNexusSessionActionAuditEvent,
    extracted.createNexusSafeTaskHistoryEntry,
    extracted.buildNexusSafetyReviewDashboardState,
    extracted.renderNexusSafetyReviewDashboard,
    extracted.buildNexusAutonomousTaskPlan,
    extracted.buildNexusControlledActionQueueItem,
    extracted.buildNexusControlledActionQueueFromTaskPlan,
    extracted.buildNexusUserConfirmationGateFromQueueAction
  ].join("\n");
  assert(!chainSource.includes(term), `Sprint 19 end-to-end chain must not introduce ${term}`);
});

const sandbox = vm.runInNewContext(`
  const htmlSafe = value => String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
  let nexusControlledActionQueue = [];
  let nexusSessionActionAuditLog = [];
  let nexusSafeTaskHistory = [];
  ${extracted.sanitizeNexusSessionAuditText}
  ${extracted.createNexusSafeTaskHistoryEntry}
  ${extracted.recordNexusSessionActionAuditEvent}
  ${extracted.buildNexusSafetyReviewDashboardState}
  ${extracted.renderNexusSafetyReviewDashboard}
  ${extracted.nexusAutonomousTaskPlanCategory}
  ${extracted.buildNexusAutonomousTaskPlan}
  ${extracted.nexusControlledActionQueueTypeForPlan}
  ${extracted.buildNexusControlledActionQueueItem}
  ${extracted.buildNexusControlledActionQueueFromTaskPlan}
  ${extracted.isNexusControlledQueueActionLocallyConfirmable}
  ${extracted.buildNexusUserConfirmationGateFromQueueAction}
  ({
    buildNexusAutonomousTaskPlan,
    buildNexusControlledActionQueueFromTaskPlan,
    buildNexusUserConfirmationGateFromQueueAction,
    recordNexusSessionActionAuditEvent,
    buildNexusSafetyReviewDashboardState,
    renderNexusSafetyReviewDashboard,
    getAudit: () => nexusSessionActionAuditLog,
    getHistory: () => nexusSafeTaskHistory
  });
`, { Date, Math });

const lowRiskPrompts = [
  ["Nexus, show me farm jobs", "workforce-jobs"],
  ["Help me find agriculture training", "training-learning"],
  ["I need help with crop issues", "agriculture-help"]
];

for (const [prompt, expectedCategory] of lowRiskPrompts) {
  const plan = sandbox.buildNexusAutonomousTaskPlan(prompt, { category: expectedCategory });
  assert.equal(plan.category, expectedCategory, `${prompt} should map to ${expectedCategory}`);
  assert.equal(plan.executionAuthority, false, `${prompt} plan must not grant execution authority`);
  assert.equal(plan.canExecute, false, `${prompt} plan must not execute`);
  assert.equal(plan.noExecutionAuthorized, true, `${prompt} plan must explicitly block execution`);

  const queue = sandbox.buildNexusControlledActionQueueFromTaskPlan(plan, { command: prompt });
  assert(queue.length >= 2, `${prompt} should produce review queue entries`);
  queue.forEach(action => {
    assert.equal(action.executionAuthority, false, `${prompt} queue action must not grant execution`);
    assert.equal(action.canExecute, false, `${prompt} queue action must not execute`);
    assert.equal(action.externalExecutionAllowed, false, `${prompt} queue action must not allow external execution`);
    assert.equal(action.providerHandoffAuthorized, false, `${prompt} queue action must not authorize provider handoff`);
  });

  const gate = sandbox.buildNexusUserConfirmationGateFromQueueAction(queue[1], 1);
  assert.equal(gate.schemaVersion, "nexus-user-confirmation-gate.v1", `${prompt} should produce confirmation gate metadata`);
  assert.equal(gate.executionAuthority, false, `${prompt} gate must not grant execution`);
  assert.equal(gate.externalExecutionAllowed, false, `${prompt} gate must not allow external execution`);
  assert.equal(gate.providerHandoffAuthorized, false, `${prompt} gate must not authorize provider handoff`);

  const audit = sandbox.recordNexusSessionActionAuditEvent("end_to_end_review_observed", {
    command: prompt,
    actionType: gate.actionType,
    riskLevel: gate.riskLevel,
    providerStatus: gate.providerStatus,
    safetyReason: gate.safetyReason,
    resultStatus: "End-to-end autonomous workflow reviewed locally. No action was executed."
  });
  assert.equal(audit.schemaVersion, "nexus-session-action-audit.v1", `${prompt} should write local audit metadata`);
  assert.equal(audit.storageMode, "volatile-ui-only", `${prompt} audit must remain volatile`);
  assert.equal(audit.externalTransmissionAllowed, false, `${prompt} audit must not transmit externally`);
  assert.equal(audit.backendWriteAllowed, false, `${prompt} audit must not write backend data`);
}

const highRiskPlan = sandbox.buildNexusAutonomousTaskPlan("Nexus, call my doctor", { category: "message-call-preparation" });
assert.equal(highRiskPlan.category, "message-call-preparation", "High-risk communication prompt should map to message/call preparation.");
const highRiskQueue = sandbox.buildNexusControlledActionQueueFromTaskPlan(highRiskPlan, { command: "Nexus, call my doctor" });
assert(highRiskQueue.some(action => action.actionType === "blocked_high_risk_action"), "High-risk communication prompt should include a blocked queue action.");
const blockedAction = highRiskQueue.find(action => action.actionType === "blocked_high_risk_action");
const blockedGate = sandbox.buildNexusUserConfirmationGateFromQueueAction(blockedAction, 2);
assert.equal(blockedGate.locallyConfirmable, false, "Blocked high-risk action must not be locally confirmable.");
assert.equal(blockedGate.executionAuthority, false, "Blocked gate must not grant execution authority.");
assert.equal(blockedGate.providerHandoffAuthorized, false, "Blocked gate must not authorize provider handoff.");

const dashboard = sandbox.buildNexusSafetyReviewDashboardState({
  queue: highRiskQueue,
  history: sandbox.getHistory(),
  audit: sandbox.getAudit()
});
assert.equal(dashboard.schemaVersion, "nexus-safety-review-dashboard.v1", "End-to-end dashboard should use canonical schema.");
assert(dashboard.blockedCount >= 1, "End-to-end dashboard should count blocked high-risk steps.");
assert(dashboard.auditCount >= lowRiskPrompts.length, "End-to-end dashboard should include local audit observations.");
assert.equal(dashboard.executionAuthority, false, "End-to-end dashboard must not grant execution authority.");
assert.equal(dashboard.externalExecutionAllowed, false, "End-to-end dashboard must not allow external execution.");
assert.equal(dashboard.providerHandoffAuthorized, false, "End-to-end dashboard must not authorize provider handoff.");
assert.equal(dashboard.permissionRequestAuthorized, false, "End-to-end dashboard must not authorize permissions.");
assert.equal(dashboard.backendWriteAllowed, false, "End-to-end dashboard must not allow backend writes.");

const dashboardHtml = sandbox.renderNexusSafetyReviewDashboard(dashboard);
[
  "data-nexus-safety-review-dashboard=\"true\"",
  "data-execution-authority=\"false\"",
  "data-provider-handoff=\"false\"",
  "data-permission-request=\"false\"",
  "data-backend-write=\"false\"",
  "No provider handoff, call, message, payment, location, camera, medical, pharmacy, emergency, backend write, or external action"
].forEach(term => assert(dashboardHtml.includes(term), `End-to-end dashboard HTML should include ${term}`));

assert.equal(
  pkg.scripts["qa:nexus-capability-sprint-19-end-to-end-autonomous-workflow"],
  "node scripts/nexus-capability-sprint-19-end-to-end-autonomous-workflow-qa.js",
  "package alias should expose Sprint 19 QA."
);
assert(
  qaSuite.includes("scripts/nexus-capability-sprint-19-end-to-end-autonomous-workflow-qa.js"),
  "qa-suite should include Sprint 19 QA."
);

console.log("[nexus-capability-sprint-19-end-to-end-autonomous-workflow-qa] passed");
