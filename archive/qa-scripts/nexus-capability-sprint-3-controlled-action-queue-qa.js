const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

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

const typeBody = extractFunction(app, "nexusControlledActionQueueTypeForPlan");
const itemBody = extractFunction(app, "buildNexusControlledActionQueueItem");
const builderBody = extractFunction(app, "buildNexusControlledActionQueueFromTaskPlan");
const syncBody = extractFunction(app, "syncNexusControlledActionQueueFromWorkflow");
const rendererBody = extractFunction(app, "renderNexusControlledActionQueueCard");
const painterBody = extractFunction(app, "paintNexusControlledActionQueue");
const previewPainterBody = extractFunction(app, "paintControlledActionPreview");
const workflowStartBody = extractFunction(app, "startNexusAutonomousWorkflowFromTaskPlan");
const workflowControlBody = extractFunction(app, "handleNexusAutonomousWorkflowControl");
const clearPreviewBody = extractFunction(app, "clearControlledActionPreview");

[
  "let nexusControlledActionQueue = []",
  "nexusControlledActionQueueTypeForPlan",
  "buildNexusControlledActionQueueItem",
  "buildNexusControlledActionQueueFromTaskPlan",
  "syncNexusControlledActionQueueFromWorkflow",
  "renderNexusControlledActionQueueCard",
  "paintNexusControlledActionQueue"
].forEach(term => assert(app.includes(term), `Sprint 3 controlled action queue must include ${term}`));

[
  "internal_navigation",
  "local_explanation",
  "local_preparation",
  "draft_generation",
  "report_generation",
  "simulated_provider_action",
  "provider_ready_action",
  "blocked_high_risk_action"
].forEach(type => assert(`${typeBody}\n${builderBody}\n${rendererBody}`.includes(type), `Queue must represent action type ${type}`));

[
  "actionType",
  "description",
  "requiredData",
  "riskLevel",
  "confirmationRequired",
  "providerStatus",
  "safetyReason",
  "executionAuthority: false",
  "canExecute: false",
  "externalExecutionAllowed: false",
  "providerHandoffAuthorized: false"
].forEach(term => assert(itemBody.includes(term) || rendererBody.includes(term), `Queue item metadata must include ${term}`));

assert(workflowStartBody.includes("syncNexusControlledActionQueueFromWorkflow"), "Workflow start must populate controlled action queue.");
assert(workflowStartBody.includes("paintNexusControlledActionQueue"), "Workflow start must paint controlled action queue.");
assert(workflowControlBody.includes("syncNexusControlledActionQueueFromWorkflow"), "Workflow controls must refresh controlled action queue.");
assert(clearPreviewBody.includes("nexusControlledActionQueue = []"), "Preview clear must clear controlled action queue.");
assert(previewPainterBody.includes("paintNexusControlledActionQueue"), "Preview repaint must also repaint controlled action queue.");

[
  "data-nexus-controlled-action-queue=\"true\"",
  "data-execution-authority=\"false\"",
  "No provider API",
  "phone call",
  "backend write",
  "external action"
].forEach(term => assert(rendererBody.includes(term), `Queue renderer must include safety/render term ${term}`));

[
  "fetch(",
  "XMLHttpRequest",
  "navigator.geolocation",
  "getCurrentPosition",
  "watchPosition",
  "mediaDevices",
  "getUserMedia",
  "window.open",
  "location.href",
  "openWorkflowModal",
  "openWorkflowByVoice",
  "maybeDispatchConfirmedNativeCallHandoff",
  "dispatchProviderWebhook",
  "confirmPendingWorkflow",
  "mutate(",
  "request("
].forEach(term => {
  const queueSource = [typeBody, itemBody, builderBody, syncBody, rendererBody, painterBody].join("\n");
  assert(!queueSource.includes(term), `Controlled action queue must not introduce ${term}`);
});

[
  ".nexus-controlled-action-queue-card",
  ".nexus-controlled-action-queue-label",
  "[data-nexus-controlled-action-queue-item"
].forEach(term => assert(styles.includes(term), `Sprint 3 styling must include ${term}`));

const sandbox = vm.runInNewContext(`
  ${typeBody}
  ${itemBody}
  ${builderBody}
  ({
    nexusControlledActionQueueTypeForPlan,
    buildNexusControlledActionQueueItem,
    buildNexusControlledActionQueueFromTaskPlan
  });
`, {});

const safePlan = {
  goal: "Build a safe training path.",
  category: "workforce.training",
  userIntent: "Help me find agriculture training",
  steps: ["Classify", "Collect", "Review"],
  requiredInformation: ["Topic"],
  missingInformation: ["Preferred language"],
  riskLevel: "low",
  providerRequirement: "none",
  nextSuggestedAction: "Prepare training options",
  blockedHighRiskActions: ["No provider handoff.", "No payments."]
};
const safeQueue = sandbox.buildNexusControlledActionQueueFromTaskPlan(safePlan);
assert(safeQueue.length >= 2, "Safe plan should produce queued review actions.");
assert(safeQueue.every(action => action.executionAuthority === false), "Safe queue actions must not gain execution authority.");
assert(safeQueue.every(action => action.canExecute === false), "Safe queue actions must not be executable.");
assert(safeQueue.some(action => action.actionType === "local_preparation"), "Training plan should queue local preparation.");

const highRiskPlan = {
  goal: "Call a doctor.",
  category: "communications.call",
  userIntent: "Call my doctor",
  missingInformation: ["Recipient", "phone number"],
  riskLevel: "high",
  providerRequirement: "provider required",
  blockedHighRiskActions: ["No calls/messages without confirmation and provider readiness."]
};
const highRiskQueue = sandbox.buildNexusControlledActionQueueFromTaskPlan(highRiskPlan);
assert(highRiskQueue.some(action => action.actionType === "blocked_high_risk_action"), "High-risk call plan should queue a blocked action.");
assert(highRiskQueue.every(action => action.providerHandoffAuthorized === false), "High-risk queue must not authorize provider handoff.");
assert(highRiskQueue.every(action => action.externalExecutionAllowed === false), "High-risk queue must not allow external execution.");

assert.equal(
  pkg.scripts["qa:nexus-capability-sprint-3-controlled-action-queue"],
  "node scripts/nexus-capability-sprint-3-controlled-action-queue-qa.js",
  "package.json must expose Sprint 3 QA alias."
);
assert(
  qaSuite.includes("scripts/nexus-capability-sprint-3-controlled-action-queue-qa.js"),
  "qa-suite.js must include Sprint 3 QA."
);

console.log("[nexus-capability-sprint-3-controlled-action-queue-qa] passed");
