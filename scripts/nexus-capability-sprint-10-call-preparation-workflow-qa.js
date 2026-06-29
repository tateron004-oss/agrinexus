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

const createBody = extractFunction(app, "createNexusCallPreparationResult");
const renderBody = extractFunction(app, "renderNexusCallPreparationResults");
const captionMatcherBody = extractFunction(app, "isNexusCallPreparationCommand");
const captionCommandBody = extractFunction(app, "handleNexusCallPreparationCaptionCommand");
const queueTypeBody = extractFunction(app, "nexusControlledActionQueueTypeForPlan");
const localCheckBody = extractFunction(app, "isNexusControlledQueueActionLocallyConfirmable");
const performBody = extractFunction(app, "performNexusConfirmedLocalQueueAction");
const queueRendererBody = extractFunction(app, "renderNexusControlledActionQueueCard");

[
  "let nexusCallPreparationResults = []",
  "nexus-call-preparation.v1",
  "CALL PREPARATION ONLY",
  "createNexusCallPreparationResult",
  "renderNexusCallPreparationResults",
  "function isNexusCallPreparationCommand",
  "function handleNexusCallPreparationCaptionCommand",
  "handleNexusCallPreparationCaptionCommand(command)",
  "Call preparation review is ready. Confirming will only create a local call-prep card.",
  "data-nexus-call-preparation-results=\"true\"",
  "data-call-placed=\"false\"",
  "data-phone-permission-requested=\"false\"",
  "data-provider-contacted=\"false\"",
  "data-message-sent=\"false\"",
  "data-external-action-occurred=\"false\"",
  "data-backend-write-occurred=\"false\"",
  "callPlaced: false",
  "phonePermissionRequested: false",
  "providerContacted: false",
  "messageSent: false",
  "executionAuthority: false"
].forEach(term => assert(app.includes(term), `Sprint 10 call preparation must include ${term}`));

assert(queueTypeBody.includes("safeCallPreparationIntent"), "queue mapper should distinguish explicit call-preparation intent.");
assert(queueTypeBody.indexOf("if (safeCallPreparationIntent) return \"call_preparation\"") < queueTypeBody.indexOf("blocked_high_risk_action"), "safe call preparation should be handled before raw call blocking.");
assert(localCheckBody.includes("\"call_preparation\""), "call preparation should be locally confirmable.");
assert(performBody.includes("createNexusCallPreparationResult"), "confirmed call_preparation should create a local call-prep result.");
assert(queueRendererBody.includes("renderNexusCallPreparationResults"), "controlled queue card should render call-prep results.");
assert(captionCommandBody.includes("buildNexusAutonomousTaskPlan(command, { category: \"message-call-preparation\" })"), "caption command should create a message/call preparation task plan.");
assert(captionCommandBody.includes("startNexusAutonomousWorkflowFromTaskPlan(plan, { command })"), "caption command should start the existing controlled workflow/queue path.");

[
  "fetch(",
  "XMLHttpRequest",
  "WebSocket",
  "EventSource",
  "navigator.geolocation",
  "navigator.permissions",
  "getUserMedia",
  "window.open",
  "location.href",
  ".click()",
  "ACTION_CALL",
  "ACTION_DIAL",
  "tel:",
  "sms:",
  "mailto:",
  "wa.me",
  "api.whatsapp",
  "t.me/",
  "telegram.org",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "mutate(",
  "request("
].forEach(term => {
  const source = [createBody, renderBody, captionMatcherBody, captionCommandBody, queueTypeBody, localCheckBody, performBody].join("\n");
  assert(!source.includes(term), `Call preparation must not introduce ${term}`);
});

assert(styles.includes(".nexus-call-preparation-results"), "Call preparation result styles should exist.");
assert(styles.includes("[data-nexus-call-preparation-result]"), "Call preparation result item styles should exist.");

const sandbox = vm.runInNewContext(`
  let nexusUserConfirmationGateState = null;
  let nexusCallPreparationResults = [];
  function sanitizeNexusSessionAuditText(value = "") {
    return String(value || "")
      .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}/gi, "[email]")
      .replace(/\\+?\\d[\\d\\s().-]{6,}\\d/g, "[phone]")
      .replace(/\\s+/g, " ")
      .trim()
      .slice(0, 180);
  }
  function htmlSafe(value = "") { return String(value || "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\\"": "&quot;", "'": "&#39;" }[char])); }
  ${createBody}
  ${renderBody}
  ${captionMatcherBody}
  ${queueTypeBody}
  ${localCheckBody}
  ${performBody}
  ({
    createNexusCallPreparationResult,
    renderNexusCallPreparationResults,
    isNexusCallPreparationCommand,
    nexusControlledActionQueueTypeForPlan,
    isNexusControlledQueueActionLocallyConfirmable,
    performNexusConfirmedLocalQueueAction,
    getResults: () => nexusCallPreparationResults
  });
`);

const gate = {
  schemaVersion: "nexus-user-confirmation-gate.v1",
  actionType: "call_preparation",
  description: "Prepare local call notes for workforce support.",
  requiredData: ["Who to call", "Reason for call", "Notes/talking points"],
  riskLevel: "high-review-required",
  providerStatus: "phone provider not connected",
  safetyReason: "No real call, phone permission, provider handoff, or message sending.",
  locallyConfirmable: true
};
const result = sandbox.createNexusCallPreparationResult(gate);
assert.equal(result.schemaVersion, "nexus-call-preparation.v1", "call prep should use canonical schema.");
assert.equal(result.label, "CALL PREPARATION ONLY", "call prep should be visibly local-only.");
assert.equal(result.confirmationRequired, true, "call prep should still require review/confirmation.");
assert.equal(result.callPlaced, false, "call prep must not place a call.");
assert.equal(result.phonePermissionRequested, false, "call prep must not request phone permission.");
assert.equal(result.providerContacted, false, "call prep must not contact a provider.");
assert.equal(result.messageSent, false, "call prep must not send a message.");
assert.equal(result.externalActionOccurred, false, "call prep must not create external action.");
assert.equal(result.backendWriteOccurred, false, "call prep must not write backend data.");
assert.equal(result.executionAuthority, false, "call prep must not gain execution authority.");
assert(result.talkingPoints.length >= 3, "call prep should include talking points.");

const rendered = sandbox.renderNexusCallPreparationResults(sandbox.getResults());
assert(rendered.includes("data-call-placed=\"false\""), "rendered call prep should mark no call placed.");
assert(rendered.includes("data-phone-permission-requested=\"false\""), "rendered call prep should mark no phone permission.");
assert(rendered.includes("data-provider-contacted=\"false\""), "rendered call prep should mark provider not contacted.");
assert(!/<button|<a\\s|<form|<input|<textarea/i.test(rendered), "call prep surface must not include execution controls, links, forms, inputs, or textareas.");

assert.equal(sandbox.isNexusCallPreparationCommand("Nexus, prepare a call to workforce support"), true, "prepare call command should be recognized.");
assert.equal(sandbox.isNexusCallPreparationCommand("Nexus, plan a phone call with the provider"), true, "plan phone call command should be recognized.");
assert.equal(sandbox.isNexusCallPreparationCommand("Nexus, call the provider"), false, "raw call command should not be recognized as safe prep.");
assert.equal(sandbox.isNexusCallPreparationCommand("Nexus, dial the provider"), false, "dial command should not be recognized as safe prep.");
assert.equal(
  sandbox.nexusControlledActionQueueTypeForPlan({ category: "message-call-preparation", userIntent: "Nexus, prepare a call to workforce support", goal: "Prepare a call" }),
  "call_preparation",
  "explicit call preparation should map to call_preparation."
);
assert.equal(
  sandbox.nexusControlledActionQueueTypeForPlan({ category: "general", userIntent: "Nexus, call the provider", goal: "Call provider" }),
  "blocked_high_risk_action",
  "raw call intent should remain blocked."
);
assert.equal(sandbox.isNexusControlledQueueActionLocallyConfirmable({ actionType: "call_preparation" }), true, "call preparation should be locally confirmable.");
const status = sandbox.performNexusConfirmedLocalQueueAction(gate);
assert(status.includes("Local call preparation card created for review"), "confirmed call prep should create a local card.");
assert(status.includes("did not place a call"), "confirmed call prep should state no call happened.");
assert(status.includes("request phone permission"), "confirmed call prep should state no phone permission happened.");

assert.equal(
  pkg.scripts["qa:nexus-capability-sprint-10-call-preparation-workflow"],
  "node scripts/nexus-capability-sprint-10-call-preparation-workflow-qa.js",
  "package alias should expose Sprint 10 QA."
);
assert(
  qaSuite.includes("scripts/nexus-capability-sprint-10-call-preparation-workflow-qa.js"),
  "qa-suite should include Sprint 10 call preparation workflow QA."
);

console.log("[nexus-capability-sprint-10-call-preparation-workflow-qa] passed");
