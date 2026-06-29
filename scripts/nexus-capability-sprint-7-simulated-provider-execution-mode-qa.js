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

const classifyBody = extractFunction(app, "classifyNexusSimulatedProviderAction");
const createBody = extractFunction(app, "createNexusSimulatedProviderExecutionResult");
const renderBody = extractFunction(app, "renderNexusSimulatedProviderExecutionResults");
const performBody = extractFunction(app, "performNexusConfirmedLocalQueueAction");
const gateControlBody = extractFunction(app, "handleNexusUserConfirmationGateControl");
const queueRendererBody = extractFunction(app, "renderNexusControlledActionQueueCard");

[
  "let nexusSimulatedProviderResults = []",
  "function isNexusSimulationCommand",
  "function handleNexusSimulationCaptionCommand",
  "nexus-simulated-provider-execution.v1",
  "SIMULATED ONLY",
  "message prepared / simulated send",
  "call request prepared",
  "route handoff prepared",
  "marketplace inquiry prepared",
  "physician report prepared",
  "provider unavailable",
  "\"Simulation\": \"simulation.local\"",
  "prepareLocalSimulationResult",
  "simulation-local",
  "isNexusSimulationCommand(command)",
  "handleNexusSimulationCaptionCommand(command)",
  "Simulation review prepared. Confirming will only create a local simulated result. No provider will be contacted.",
  "No real external action occurred",
  "providerContacted: false",
  "messageSent: false",
  "callPlaced: false",
  "routeLaunched: false",
  "paymentProcessed: false",
  "externalActionOccurred: false",
  "executionAuthority: false",
  "action_simulated"
].forEach(term => assert(app.includes(term), `Sprint 7 simulated provider mode must include ${term}`));

[
  "data-nexus-simulated-provider-results=\"true\"",
  "data-external-action-occurred=\"false\"",
  "data-provider-contacted=\"false\"",
  "Simulated provider mode"
].forEach(term => assert(renderBody.includes(term), `Simulated provider renderer must include ${term}`));

[
  "renderNexusSimulatedProviderExecutionResults",
  "${simulatedHtml}",
  "renderNexusSessionActionAuditLog"
].forEach(term => assert(queueRendererBody.includes(term), `Queue card should include simulated provider result surface term ${term}`));

[
  "fetch(",
  "XMLHttpRequest",
  "WebSocket",
  "EventSource",
  "navigator.geolocation",
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
  "indexedDB"
].forEach(term => {
  const source = [classifyBody, createBody, renderBody, performBody, gateControlBody].join("\n");
  assert(!source.includes(term), `Simulated provider mode must not introduce ${term}`);
});

assert(styles.includes(".nexus-simulated-provider-results"), "Simulated provider results styles should exist.");
assert(styles.includes("[data-nexus-simulated-provider-result]"), "Simulated provider result item styles should exist.");

const sandbox = vm.runInNewContext(`
  let nexusUserConfirmationGateState = null;
  let nexusSimulatedProviderResults = [];
  function sanitizeNexusSessionAuditText(value = "") { return String(value || "").replace(/\\s+/g, " ").trim().slice(0, 180); }
  function htmlSafe(value = "") { return String(value || "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\\"": "&quot;", "'": "&#39;" }[char])); }
  function paintNexusControlledActionQueue() {}
  const auditEvents = [];
  function recordNexusSessionActionAuditEvent(eventType, details) { auditEvents.push({ eventType, details }); return { eventType, details }; }
  ${classifyBody}
  ${createBody}
  ${renderBody}
  ${performBody}
  ${gateControlBody}
  ({
    classifyNexusSimulatedProviderAction,
    createNexusSimulatedProviderExecutionResult,
    renderNexusSimulatedProviderExecutionResults,
    performNexusConfirmedLocalQueueAction,
    handleNexusUserConfirmationGateControl,
    setGate: gate => { nexusUserConfirmationGateState = gate; },
    getGate: () => nexusUserConfirmationGateState,
    getResults: () => nexusSimulatedProviderResults,
    getAuditEvents: () => auditEvents
  });
`);

const simulatedGate = {
  schemaVersion: "nexus-user-confirmation-gate.v1",
  actionType: "simulated_provider_action",
  description: "Prepare a marketplace inquiry and simulated provider send.",
  riskLevel: "low-preview-only",
  providerStatus: "simulation-only / provider not connected",
  safetyReason: "Simulation is local-only.",
  locallyConfirmable: true
};

assert.equal(sandbox.classifyNexusSimulatedProviderAction(simulatedGate), "marketplace inquiry prepared", "marketplace simulation should classify correctly.");
const outcome = sandbox.performNexusConfirmedLocalQueueAction(simulatedGate);
assert(outcome.includes("SIMULATED ONLY"), "simulated confirmation should visibly label simulation only.");
assert(outcome.includes("no real external action occurred"), "simulated confirmation must state no external action occurred.");
assert.equal(sandbox.getResults().length, 1, "simulated confirmation should create one local result.");
assert.equal(sandbox.getResults()[0].externalActionOccurred, false, "simulation result must not record external action.");
assert.equal(sandbox.getResults()[0].providerContacted, false, "simulation result must not contact provider.");
assert.equal(sandbox.getResults()[0].messageSent, false, "simulation result must not send message.");
assert.equal(sandbox.getResults()[0].callPlaced, false, "simulation result must not place call.");
assert.equal(sandbox.getResults()[0].executionAuthority, false, "simulation result must not gain execution authority.");

const html = sandbox.renderNexusSimulatedProviderExecutionResults(sandbox.getResults());
assert(html.includes("SIMULATED ONLY"), "rendered simulation result should be labeled simulated only.");
assert(html.includes("data-external-action-occurred=\"false\""), "rendered simulation result should mark no external action.");
assert(!/<button|<a\\s|<form|<input/i.test(html), "simulated result surface must not include interactive controls.");

sandbox.setGate(simulatedGate);
assert.equal(sandbox.handleNexusUserConfirmationGateControl("confirm"), true, "simulated confirm control should be handled.");
assert(sandbox.getGate().status.includes("SIMULATED ONLY"), "gate status should retain simulated-only wording.");
assert(sandbox.getAuditEvents().some(event => event.eventType === "action_simulated"), "simulated confirmation should create action_simulated audit event.");

assert.equal(
  pkg.scripts["qa:nexus-capability-sprint-7-simulated-provider-execution-mode"],
  "node scripts/nexus-capability-sprint-7-simulated-provider-execution-mode-qa.js",
  "package alias should expose Sprint 7 QA."
);
assert(
  qaSuite.includes("scripts/nexus-capability-sprint-7-simulated-provider-execution-mode-qa.js"),
  "qa-suite should include Sprint 7 simulated provider execution QA."
);

console.log("[nexus-capability-sprint-7-simulated-provider-execution-mode-qa] passed");
