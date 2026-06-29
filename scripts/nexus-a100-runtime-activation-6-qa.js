const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function sourceBetween(source, start, end) {
  const startIndex = source.indexOf(start);
  assert(startIndex >= 0, `Missing source marker: ${start}`);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert(endIndex > startIndex, `Missing end marker after ${start}`);
  return source.slice(startIndex, endIndex);
}

const app = read("public", "app.js");
const styles = read("public", "styles.css");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

const cardSource = sourceBetween(app, "function a100SafeAutonomyCardHtml", "function renderA100SafeAutonomyCard");
const routeSource = sourceBetween(app, "function a100RoutePlanningPreview", "function rememberA100SafeFollowUpContext");
const intentSource = sourceBetween(app, "function a100SafeAutonomyIntent", "function openA100SafeAutonomyPreview");

assert(cardSource.includes("a100-route-preview"), "Runtime card should render safe route preview details.");
assert(cardSource.includes("data-a100-route-preview=\"review-only\""), "Route preview should be explicitly review-only.");
assert(intentSource.includes("routePreview: capability.id === \"map\" ? a100RoutePlanningPreview() : null"), "Map prompts should attach safe route preview.");

[
  "Add origin manually",
  "Add destination manually",
  "Leaflet map preview can open internally",
  "street layer",
  "satellite imagery",
  "facilities",
  "No geolocation API call",
  "no live tracking",
  "no external maps/navigation launch",
  "no provider routing call",
  "no browser permission prompt"
].forEach(copy => assert(routeSource.includes(copy), `Route preview should preserve safety/readiness copy: ${copy}`));

[
  "help me plan a route",
  "plan a route",
  "route planning",
  "map readiness",
  "is location enabled",
  "show satellite",
  "open map"
].forEach(prompt => assert(intentSource.includes(prompt), `Route/map prompt should be recognized: ${prompt}`));

[
  routeSource,
  intentSource
].forEach((source, index) => {
  assert(!source.includes("localStorage"), `Sprint 6 source ${index} must not persist to localStorage.`);
  assert(!source.includes("sessionStorage"), `Sprint 6 source ${index} must not persist to sessionStorage.`);
  assert(!source.includes("navigator.geolocation"), `Sprint 6 source ${index} must not request geolocation.`);
  assert(!source.includes("getCurrentPosition"), `Sprint 6 source ${index} must not request current position.`);
  assert(!source.includes("watchPosition"), `Sprint 6 source ${index} must not start tracking.`);
  assert(!source.includes("window.open"), `Sprint 6 source ${index} must not open external navigation/providers.`);
  assert(!source.includes("openWorkflowByVoice"), `Sprint 6 source ${index} must not execute workflows.`);
  assert(!source.includes("dispatchProviderWebhook"), `Sprint 6 source ${index} must not dispatch providers.`);
  assert(!source.includes("requestPermission"), `Sprint 6 source ${index} must not prompt browser permission.`);
  assert(!source.includes("mediaDevices"), `Sprint 6 source ${index} must not start camera or microphone.`);
  assert(!source.includes("fetch("), `Sprint 6 source ${index} must not add external/backend calls.`);
});

assert(styles.includes(".a100-route-preview"), "Sprint 6 styles should cover route preview cards.");
assert(pkg.scripts["map:scaling-qa"], "Map scaling QA alias should remain.");
assert(pkg.scripts["map:tile-config-qa"], "Map tile config QA alias should remain.");
assert(pkg.scripts["map:route-preview-qa"], "Map route preview QA alias should remain.");
assert.equal(pkg.scripts["qa:nexus-a100-runtime-activation-6"], "node scripts/nexus-a100-runtime-activation-6-qa.js", "Sprint 6 QA alias should exist.");
assert(qaSuite.includes("scripts/nexus-a100-runtime-activation-6-qa.js"), "Sprint 6 QA should be wired into qa-suite.");

console.log("[nexus-a100-runtime-activation-6-qa] passed");
