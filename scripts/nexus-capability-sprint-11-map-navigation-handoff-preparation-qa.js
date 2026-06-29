const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");
const jarvisQa = fs.readFileSync(path.join(root, "scripts", "nexus-jarvis-style-standard-user-experience-qa.js"), "utf8");

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

const createBody = extractFunction(app, "createNexusMapNavigationHandoffResult");
const renderBody = extractFunction(app, "renderNexusMapNavigationHandoffResults");
const captionMatcherBody = extractFunction(app, "isNexusMapNavigationHandoffCommand");
const captionCommandBody = extractFunction(app, "handleNexusMapNavigationHandoffCaptionCommand");
const queueTypeBody = extractFunction(app, "nexusControlledActionQueueTypeForPlan");
const localCheckBody = extractFunction(app, "isNexusControlledQueueActionLocallyConfirmable");
const performBody = extractFunction(app, "performNexusConfirmedLocalQueueAction");
const queueRendererBody = extractFunction(app, "renderNexusControlledActionQueueCard");

[
  "let nexusMapNavigationHandoffResults = []",
  "nexus-map-navigation-handoff.v1",
  "ROUTE HANDOFF PREPARATION ONLY",
  "createNexusMapNavigationHandoffResult",
  "renderNexusMapNavigationHandoffResults",
  "function isNexusMapNavigationHandoffCommand",
  "function handleNexusMapNavigationHandoffCaptionCommand",
  "handleNexusMapNavigationHandoffCaptionCommand(command)",
  "Route handoff review is ready. Confirming will only prepare a local map handoff card",
  "data-nexus-map-navigation-handoff-results=\"true\"",
  "data-geolocation-used=\"false\"",
  "data-location-permission-requested=\"false\"",
  "data-external-navigation-launched=\"false\"",
  "data-route-launched=\"false\"",
  "data-provider-contacted=\"false\"",
  "data-dispatch-requested=\"false\"",
  "data-backend-write-occurred=\"false\"",
  "geolocationUsed: false",
  "locationPermissionRequested: false",
  "externalNavigationLaunched: false",
  "routeLaunched: false",
  "providerContacted: false",
  "dispatchRequested: false",
  "executionAuthority: false"
].forEach(term => assert(app.includes(term), `Sprint 11 route handoff preparation must include ${term}`));

assert(queueTypeBody.includes("safeMapNavigationHandoffIntent"), "queue mapper should distinguish explicit route-handoff intent.");
assert(queueTypeBody.indexOf("if (safeMapNavigationHandoffIntent) return \"map_navigation_handoff\"") < queueTypeBody.indexOf("internal_navigation"), "safe route handoff should be handled before generic internal navigation.");
assert(localCheckBody.includes("\"map_navigation_handoff\""), "route handoff should be locally confirmable.");
assert(performBody.includes("createNexusMapNavigationHandoffResult"), "confirmed map_navigation_handoff should create a local route handoff result.");
assert(queueRendererBody.includes("renderNexusMapNavigationHandoffResults"), "controlled queue card should render route handoff results.");
assert(captionCommandBody.includes("buildNexusAutonomousTaskPlan(command, { category: \"map-navigation-handoff\" })"), "caption command should create a map-navigation-handoff task plan.");
assert(captionCommandBody.includes("startNexusAutonomousWorkflowFromTaskPlan(plan, { command })"), "caption command should start the existing controlled workflow/queue path.");
assert(jarvisQa.includes("handleNexusMapNavigationHandoffCaptionCommand"), "Jarvis-style QA should allow the Sprint 11 bridge before handleVoiceCommand.");

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
  assert(!source.includes(term), `Route handoff preparation must not introduce ${term}`);
});

assert(styles.includes(".nexus-map-navigation-handoff-results"), "Route handoff result styles should exist.");
assert(styles.includes("[data-nexus-map-navigation-handoff-result]"), "Route handoff result item styles should exist.");

const sandbox = vm.runInNewContext(`
  let nexusUserConfirmationGateState = null;
  let nexusMapNavigationHandoffResults = [];
  const openedSections = [];
  function canOpenSection(sectionId) { return ["dashboard", "learning", "workforce", "trade", "map"].includes(sectionId); }
  function goSection(sectionId, options = {}) { openedSections.push({ sectionId, options }); }
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
    createNexusMapNavigationHandoffResult,
    renderNexusMapNavigationHandoffResults,
    isNexusMapNavigationHandoffCommand,
    nexusControlledActionQueueTypeForPlan,
    isNexusControlledQueueActionLocallyConfirmable,
    performNexusConfirmedLocalQueueAction,
    getResults: () => nexusMapNavigationHandoffResults,
    getOpenedSections: () => openedSections
  });
`);

const gate = {
  schemaVersion: "nexus-user-confirmation-gate.v1",
  actionType: "map_navigation_handoff",
  description: "Prepare route handoff from farm to clinic for review.",
  requiredData: ["Origin: farm pickup point", "Destination: clinic", "Purpose: transportation-to-care", "Route notes"],
  riskLevel: "high-review-required",
  providerStatus: "map provider handoff not connected",
  safetyReason: "No geolocation, permission prompt, external route launch, provider handoff, or dispatch.",
  locallyConfirmable: true
};
const result = sandbox.createNexusMapNavigationHandoffResult(gate);
assert.equal(result.schemaVersion, "nexus-map-navigation-handoff.v1", "route handoff should use canonical schema.");
assert.equal(result.label, "ROUTE HANDOFF PREPARATION ONLY", "route handoff should be visibly preparation-only.");
assert.equal(result.confirmationRequired, true, "route handoff should require review/confirmation.");
assert.equal(result.internalMapSectionOpened, true, "route handoff may prepare the internal map section.");
assert.equal(result.geolocationUsed, false, "route handoff must not use geolocation.");
assert.equal(result.locationPermissionRequested, false, "route handoff must not request location permission.");
assert.equal(result.externalNavigationLaunched, false, "route handoff must not launch external directions.");
assert.equal(result.routeLaunched, false, "route handoff must not launch route guidance.");
assert.equal(result.providerContacted, false, "route handoff must not contact a provider.");
assert.equal(result.dispatchRequested, false, "route handoff must not dispatch transportation.");
assert.equal(result.backendWriteOccurred, false, "route handoff must not write backend data.");
assert.equal(result.externalActionOccurred, false, "route handoff must not create external action.");
assert.equal(result.executionAuthority, false, "route handoff must not gain execution authority.");
assert(result.routeNotes.length >= 3, "route handoff should include local review notes.");

const openedSections = sandbox.getOpenedSections();
assert.equal(openedSections.length, 1, "route handoff should call goSection once.");
assert.equal(openedSections[0].sectionId, "map", "route handoff should prepare the internal map section.");
assert.equal(openedSections[0].options.instant, true, "route handoff should use instant internal navigation.");
assert.equal(openedSections[0].options.keepAssistant, true, "route handoff should keep assistant visible.");
assert.equal(openedSections[0].options.openDefaultAction, false, "route handoff should not open default map actions.");
assert.equal(openedSections[0].options.scroll, false, "route handoff should not force external-route-like scrolling.");

const rendered = sandbox.renderNexusMapNavigationHandoffResults(sandbox.getResults());
assert(rendered.includes("data-geolocation-used=\"false\""), "rendered route handoff should mark no geolocation.");
assert(rendered.includes("data-location-permission-requested=\"false\""), "rendered route handoff should mark no location permission.");
assert(rendered.includes("data-external-navigation-launched=\"false\""), "rendered route handoff should mark no external navigation.");
assert(rendered.includes("data-provider-contacted=\"false\""), "rendered route handoff should mark no provider contact.");
assert(!/<button|<a\\s|<form|<input|<textarea/i.test(rendered), "route handoff surface must not include execution controls, links, forms, inputs, or textareas.");

assert.equal(sandbox.isNexusMapNavigationHandoffCommand("Nexus, prepare a route handoff to the clinic"), true, "prepare route handoff command should be recognized.");
assert.equal(sandbox.isNexusMapNavigationHandoffCommand("Nexus, plan navigation from farm to market"), true, "plan navigation command should be recognized.");
assert.equal(sandbox.isNexusMapNavigationHandoffCommand("Nexus, start navigation to the clinic"), false, "start navigation command should not be recognized as safe prep.");
assert.equal(sandbox.isNexusMapNavigationHandoffCommand("Nexus, use my location for directions"), false, "location permission command should not be recognized as safe prep.");
assert.equal(
  sandbox.nexusControlledActionQueueTypeForPlan({ category: "map-navigation-handoff", userIntent: "Nexus, prepare route handoff to clinic", goal: "Prepare route handoff" }),
  "map_navigation_handoff",
  "explicit route handoff should map to map_navigation_handoff."
);
assert.equal(
  sandbox.nexusControlledActionQueueTypeForPlan({ category: "map-navigation-handoff", userIntent: "Nexus, start navigation now", goal: "Launch route" }),
  "internal_navigation",
  "unsafe route launch wording should not map to route handoff preparation."
);
assert.equal(sandbox.isNexusControlledQueueActionLocallyConfirmable({ actionType: "map_navigation_handoff" }), true, "route handoff should be locally confirmable.");
const status = sandbox.performNexusConfirmedLocalQueueAction(gate);
assert(status.includes("Local route handoff card created for review"), "confirmed route handoff should create a local card.");
assert(status.includes("did not request location"), "confirmed route handoff should state no location permission happened.");
assert(status.includes("launch directions"), "confirmed route handoff should state no directions launched.");

assert.equal(
  pkg.scripts["qa:nexus-capability-sprint-11-map-navigation-handoff-preparation"],
  "node scripts/nexus-capability-sprint-11-map-navigation-handoff-preparation-qa.js",
  "package alias should expose Sprint 11 QA."
);
assert(
  qaSuite.includes("scripts/nexus-capability-sprint-11-map-navigation-handoff-preparation-qa.js"),
  "qa-suite should include Sprint 11 route handoff QA."
);

console.log("[nexus-capability-sprint-11-map-navigation-handoff-preparation-qa] passed");
