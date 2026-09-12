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

const resolveBody = extractFunction(app, "resolveNexusInternalNavigationTarget");
const executeBody = extractFunction(app, "executeNexusConfirmedInternalNavigation");
const renderBody = extractFunction(app, "renderNexusInternalNavigationExecutionResults");
const captionCommandBody = extractFunction(app, "handleNexusInternalNavigationCaptionCommand");
const performBody = extractFunction(app, "performNexusConfirmedLocalQueueAction");
const gateControlBody = extractFunction(app, "handleNexusUserConfirmationGateControl");
const queueRendererBody = extractFunction(app, "renderNexusControlledActionQueueCard");

[
  "let nexusInternalNavigationExecutionResults = []",
  "nexus-internal-navigation-execution.v1",
  "LOCAL NAVIGATION ONLY",
  "resolveNexusInternalNavigationTarget",
  "executeNexusConfirmedInternalNavigation",
  "renderNexusInternalNavigationExecutionResults",
  "function isNexusInternalNavigationCommand",
  "function handleNexusInternalNavigationCaptionCommand",
  "handleNexusInternalNavigationCaptionCommand(command)",
  "Internal navigation review prepared. Confirming will only move inside Nexus. No route is launched and no location permission is requested.",
  "data-nexus-internal-navigation-results=\"true\"",
  "data-external-action-occurred=\"false\"",
  "data-location-permission-requested=\"false\"",
  "data-route-launched=\"false\"",
  "locationPermissionRequested: false",
  "routeLaunched: false",
  "providerContacted: false",
  "executionAuthority: false"
].forEach(term => assert(app.includes(term), `Sprint 8 internal navigation execution must include ${term}`));

[
  "goSection(target.sectionId",
  "openDefaultAction: false",
  "scroll: false",
  "externalActionOccurred: false"
].forEach(term => assert(executeBody.includes(term), `Internal navigation executor should include ${term}`));

assert(captionCommandBody.includes("buildNexusAutonomousTaskPlan(command, { category: \"route-planning\" })"), "caption command should create only a route-planning task plan.");
assert(captionCommandBody.includes("startNexusAutonomousWorkflowFromTaskPlan(plan, { command })"), "caption command should start the existing controlled workflow/queue path.");

[
  "renderNexusInternalNavigationExecutionResults",
  "${internalNavigationHtml}",
  "renderNexusSessionActionAuditLog"
].forEach(term => assert(queueRendererBody.includes(term), `Queue card should include internal navigation result surface term ${term}`));

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
  "indexedDB",
  "mutate(",
  "request("
].forEach(term => {
  const source = [resolveBody, executeBody, renderBody, performBody, gateControlBody].join("\n");
  assert(!source.includes(term), `Internal navigation execution must not introduce ${term}`);
});

assert(styles.includes(".nexus-internal-navigation-results"), "Internal navigation results styles should exist.");
assert(styles.includes("[data-nexus-internal-navigation-result]"), "Internal navigation result item styles should exist.");

const sandbox = vm.runInNewContext(`
  let nexusUserConfirmationGateState = null;
  let nexusInternalNavigationExecutionResults = [];
  const openedSections = [];
  function canOpenSection(sectionId) { return ["dashboard", "learning", "workforce", "trade", "map"].includes(sectionId); }
  function goSection(sectionId, options = {}) { openedSections.push({ sectionId, options }); }
  function htmlSafe(value = "") { return String(value || "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\\"": "&quot;", "'": "&#39;" }[char])); }
  function paintNexusControlledActionQueue() {}
  const auditEvents = [];
  function recordNexusSessionActionAuditEvent(eventType, details) { auditEvents.push({ eventType, details }); return { eventType, details }; }
  ${resolveBody}
  ${executeBody}
  ${renderBody}
  ${performBody}
  ${gateControlBody}
  ({
    resolveNexusInternalNavigationTarget,
    executeNexusConfirmedInternalNavigation,
    renderNexusInternalNavigationExecutionResults,
    performNexusConfirmedLocalQueueAction,
    handleNexusUserConfirmationGateControl,
    setGate: gate => { nexusUserConfirmationGateState = gate; },
    getGate: () => nexusUserConfirmationGateState,
    getResults: () => nexusInternalNavigationExecutionResults,
    getOpenedSections: () => openedSections,
    getAuditEvents: () => auditEvents
  });
`);

const navigationGate = {
  schemaVersion: "nexus-user-confirmation-gate.v1",
  actionType: "internal_navigation",
  description: "Prepare next step: open internal map route review.",
  riskLevel: "low-preview-only",
  providerStatus: "not connected / not required",
  safetyReason: "No provider handoff. No calls, messages, payments, marketplace transactions, location sharing, camera, medical, pharmacy, emergency, or backend-write execution.",
  locallyConfirmable: true
};

const resolvedTarget = sandbox.resolveNexusInternalNavigationTarget(navigationGate);
assert.equal(resolvedTarget.sectionId, "map", "map route text should resolve to the internal map section.");
assert.equal(resolvedTarget.label, "Maps / Location Review", "map route text should use the internal map label.");

const result = sandbox.executeNexusConfirmedInternalNavigation(navigationGate);
assert.equal(result.schemaVersion, "nexus-internal-navigation-execution.v1", "navigation result should use canonical schema.");
assert.equal(result.label, "LOCAL NAVIGATION ONLY", "navigation result should be visibly local-only.");
assert.equal(result.targetSection, "map", "navigation should target the internal map section.");
assert.equal(result.externalActionOccurred, false, "navigation must not record external action.");
assert.equal(result.locationPermissionRequested, false, "navigation must not request location permission.");
assert.equal(result.routeLaunched, false, "navigation must not launch route guidance.");
assert.equal(result.providerContacted, false, "navigation must not contact a provider.");
assert.equal(result.executionAuthority, false, "navigation must not gain execution authority.");
const openedSections = sandbox.getOpenedSections();
assert.equal(openedSections.length, 1, "navigation should call goSection once.");
assert.equal(openedSections[0].sectionId, "map", "navigation should call goSection with the internal map section.");
assert.equal(openedSections[0].options.instant, true, "navigation should use instant internal navigation.");
assert.equal(openedSections[0].options.keepAssistant, true, "navigation should keep the assistant surface.");
assert.equal(openedSections[0].options.openDefaultAction, false, "navigation should not open default actions.");
assert.equal(openedSections[0].options.scroll, false, "navigation should not force route-like scrolling.");

const html = sandbox.renderNexusInternalNavigationExecutionResults(sandbox.getResults());
assert(html.includes("LOCAL NAVIGATION ONLY"), "rendered internal navigation result should be labeled local only.");
assert(html.includes("data-external-action-occurred=\"false\""), "rendered internal navigation result should mark no external action.");
assert(html.includes("data-location-permission-requested=\"false\""), "rendered internal navigation result should mark no location permission.");
assert(!/<button|<a\\s|<form|<input/i.test(html), "internal navigation result surface must not include interactive controls.");

sandbox.setGate(navigationGate);
assert.equal(sandbox.handleNexusUserConfirmationGateControl("confirm"), true, "internal navigation confirm control should be handled.");
assert(sandbox.getGate().status.includes("Local navigation completed"), "gate status should include local navigation completion.");
assert(sandbox.getAuditEvents().some(event => event.eventType === "action_confirmed" && event.details.actionType === "internal_navigation"), "internal navigation confirmation should create action_confirmed audit event.");

assert.equal(
  pkg.scripts["qa:nexus-capability-sprint-8-internal-navigation-execution"],
  "node scripts/nexus-capability-sprint-8-internal-navigation-execution-qa.js",
  "package alias should expose Sprint 8 QA."
);
assert(
  qaSuite.includes("scripts/nexus-capability-sprint-8-internal-navigation-execution-qa.js"),
  "qa-suite should include Sprint 8 internal navigation execution QA."
);

console.log("[nexus-capability-sprint-8-internal-navigation-execution-qa] passed");
