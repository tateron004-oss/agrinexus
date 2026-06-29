const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const routes = require("../server/nexus-n100-map-route-planning-assistant.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-n100-map-route-planning-assistant.js");
  const doc = read("docs", "NEXUS_N100_15_MAP_ROUTE_PLANNING_ASSISTANT.md");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  assert(exists("server", "nexus-n100-map-route-planning-assistant.js"), "N100-15 map/route module must exist.");
  assert(exists("docs", "NEXUS_N100_15_MAP_ROUTE_PLANNING_ASSISTANT.md"), "N100-15 documentation must exist.");
  assert(exists("scripts", "nexus-n100-15-map-route-planning-assistant-qa.js"), "N100-15 QA must exist.");

  [
    "SUPPORTED_ROUTE_ARTIFACTS",
    "BLOCKED_ROUTE_ACTIONS",
    "createN100MapRouteArtifact",
    "explicitLocationTextOnly",
    "noGeolocationPermissionRequested",
    "noTransportationDispatchAuthorized"
  ].forEach(term => assert(source.includes(term), `N100-15 source must include ${term}.`));

  [
    "explicit user-provided text only",
    "does not request browser geolocation",
    "not loaded by `public/app.js`, `public/index.html`, or `server.js`"
  ].forEach(term => assert(doc.includes(term), `N100-15 documentation must include ${term}.`));

  [
    "nexus-n100-map-route-planning-assistant",
    "createN100MapRouteArtifact",
    "SUPPORTED_ROUTE_ARTIFACTS"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load N100-15 runtime term: ${term}.`);
    assert(!index.includes(term), `public/index.html must not load N100-15 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load N100-15 runtime term: ${term}.`);
  });

  [
    "fetch(",
    "getCurrentPosition(",
    "watchPosition(",
    "navigator.geolocation.getCurrentPosition",
    "window.open",
    "location.href",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "dispatchRide(",
    "bookRide(",
    "providerHandoffAllowed: true",
    "executionAuthority: \"provider\""
  ].forEach(term => assert(!source.includes(term), `N100-15 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(
    pkg.scripts["qa:nexus-n100-15-map-route-planning-assistant"],
    "node scripts/nexus-n100-15-map-route-planning-assistant-qa.js",
    "N100-15 package QA alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-n100-15-map-route-planning-assistant-qa.js"), "N100-15 QA must be wired into local-safe suites.");
}

function assertArtifact(prompt, expectedType) {
  const artifact = routes.createN100MapRouteArtifact({
    prompt,
    originText: "Stockton, CA",
    destinationText: prompt,
    nowIso: "2026-06-28T21:00:00.000Z"
  });
  assert.equal(routes.isSafeN100MapRouteArtifact(artifact), true, `${prompt} must be safe.`);
  assert.equal(artifact.artifactType, expectedType, `${prompt} artifact type mismatch.`);
  assert.equal(artifact.canExecute, false, `${prompt} must not execute.`);
  assert.equal(artifact.executionAuthority, "none", `${prompt} must have no execution authority.`);
  assert.equal(artifact.safetyPosture.noGeolocationPermissionRequested, true, `${prompt} must not request geolocation.`);
  assert.equal(artifact.safetyPosture.noExternalMapsOpened, true, `${prompt} must not open maps.`);
  routes.BLOCKED_ROUTE_ACTIONS.forEach(action => {
    assert(artifact.blockedActions.includes(action), `${prompt} must block ${action}.`);
  });
}

function assertSupportedArtifacts() {
  assertArtifact("Plan a route to the workforce center.", "field_visit_route_notes");
  assertArtifact("Review transportation options for clinic access.", "transportation_options_review");
  assertArtifact("Prepare travel safety notes for tonight.", "travel_safety_notes");
  assertArtifact("Prepare my appointment trip.", "appointment_trip_prep");
  assertArtifact("Create a route planning checklist.", "field_visit_route_notes");
}

function assertBlockedRouteExecution() {
  [
    "Find my location.",
    "Use my location.",
    "Share my location.",
    "Navigate now.",
    "Open maps.",
    "Book a ride.",
    "Dispatch transport.",
    "Call driver."
  ].forEach(prompt => {
    const artifact = routes.createN100MapRouteArtifact({ prompt });
    assert.equal(routes.isSafeN100MapRouteArtifact(artifact), true, `${prompt} blocked artifact must be safe.`);
    assert.equal(artifact.artifactType, "blocked_route_execution", `${prompt} must be blocked.`);
    assert.equal(artifact.status, "blocked_no_route_execution", `${prompt} must not execute.`);
  });
}

function runN100MapRoutePlanningAssistantQa() {
  assertStaticSafety();
  assertSupportedArtifacts();
  assertBlockedRouteExecution();

  console.log(JSON.stringify({
    phase: "N100-15",
    supportedRouteArtifacts: routes.SUPPORTED_ROUTE_ARTIFACTS,
    blockedRouteActions: routes.BLOCKED_ROUTE_ACTIONS,
    standardUserRuntimeActivated: false,
    noGeolocationPermissionRequested: true,
    noDispatchAuthorized: true,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-n100-15-map-route-planning-assistant-qa] passed");
}

if (require.main === module) {
  try {
    runN100MapRoutePlanningAssistantQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runN100MapRoutePlanningAssistantQa
});
