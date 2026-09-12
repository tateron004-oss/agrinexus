const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const app = read("public/app.js");
const css = read("public/styles.css");
const pkg = JSON.parse(read("package.json"));

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function sourceBetween(start, end) {
  const startIndex = app.indexOf(start);
  assert(startIndex >= 0, `Missing source marker: ${start}`);
  const endIndex = app.indexOf(end, startIndex + start.length);
  assert(endIndex > startIndex, `Missing end marker after: ${start}`);
  return app.slice(startIndex, endIndex);
}

function countMatches(value, pattern) {
  return (value.match(pattern) || []).length;
}

const routeModelSource = sourceBetween("function safeRoutePlanningPreviewModel", "function userSafeRoutePlanningPreviewHtml");
const routeHtmlSource = sourceBetween("function userSafeRoutePlanningPreviewHtml", "function userMapPreviewHtml");
const mapPreviewSource = sourceBetween("function userModulePreviewHtml", "function renderUserSimpleActiveSection");
const safeIntentSource = sourceBetween("function safeMapCapabilityIntent", "function openSafeMapCapabilityPreview");
const previewSource = sourceBetween("function openSafeMapCapabilityPreview", "function openFullScaleUserMap");

assert(app.includes("const MAP_ZOOM_CONFIG"), "Phase 1 Leaflet zoom config should remain.");
assert(app.includes("DEFAULT_MAP_TILE_CONFIG"), "Phase 2 public tile defaults should remain.");
assert(app.includes("userMapProviderReadinessHtml()"), "Phase 3 map readiness UI should remain.");
assert(!app.includes("maplibregl") && !app.includes("maplibre-gl"), "Phase 4 must not introduce MapLibre.");

assert(app.includes("function safeRoutePlanningPreviewModel"), "Route planning preview model should exist.");
assert(app.includes("function userSafeRoutePlanningPreviewHtml"), "Route planning preview renderer should exist.");
assert(app.includes('id="userRoutePlanningPreview"'), "Route preview should expose a stable UI target.");
assert(css.includes(".user-route-planning-preview"), "Route preview should have standard-user styling.");
assert(css.includes(".user-route-planning-guardrails"), "Route preview guardrails should be styled.");

["Starting place", "Destination", "Purpose", "Safety concern"].forEach(label => {
  assert(routeModelSource.includes(label), `Route preview should structure field: ${label}`);
});
["Review-only route plan", "connected browser-safe routing/geocoding provider", "explicit location action and browser permission"].forEach(text => {
  assert(routeModelSource.includes(text), `Route preview should document safe planning requirement: ${text}`);
});
["Add Start", "Add Destination", "Review Safety"].forEach(label => {
  assert(routeHtmlSource.includes(label), `Route preview should offer non-executing prompt action: ${label}`);
});

assert(mapPreviewSource.includes('if (sectionId === "map")'), "Standard-user map branch should exist.");
assert(countMatches(mapPreviewSource, /if \(sectionId === "map"\)/g) === 1, "Standard-user map preview should have one active map branch.");
assert(mapPreviewSource.includes("userMapProviderReadinessHtml()"), "Map branch should include provider readiness.");
assert(mapPreviewSource.includes("userSafeRoutePlanningPreviewHtml()"), "Map branch should include route planning preview.");
assert(mapPreviewSource.includes("userMapPreviewHtml()"), "Map branch should keep the existing Leaflet map preview.");

assert(safeIntentSource.includes("safeRoutePlanningPreviewModel(command)"), "Route prompt handling should use the review model.");
assert(safeIntentSource.includes("I will not call navigation"), "Route prompt response should forbid navigation calls.");
assert(safeIntentSource.includes("request live location"), "Route prompt response should forbid automatic live location.");
assert(safeIntentSource.includes("open external maps"), "Route prompt response should forbid external map handoff.");
assert(safeIntentSource.includes("routing provider"), "Route prompt response should mention provider limitation.");
assert(previewSource.includes('intent.action === "route-preview"'), "Route prompts should scroll to the route planning preview.");
assert(previewSource.includes("allowHandoff: false"), "Safe map route preview must not hand off to execution.");

[
  routeModelSource,
  routeHtmlSource,
  safeIntentSource,
  previewSource
].forEach((source, index) => {
  assert(!source.includes("navigator.geolocation"), `Route preview source ${index} must not request geolocation.`);
  assert(!source.includes("watchPosition"), `Route preview source ${index} must not start live tracking.`);
  assert(!source.includes("getCurrentPosition"), `Route preview source ${index} must not request current position.`);
  assert(!source.includes("openWorkflowByVoice"), `Route preview source ${index} must not execute workflows.`);
  assert(!source.includes("/api/map/advanced"), `Route preview source ${index} must not call advanced map providers.`);
  assert(!source.includes("window.open"), `Route preview source ${index} must not open external navigation.`);
});

assert(app.includes("layers.routes = L.layerGroup().addTo(map)"), "Route overlay should remain wired.");
assert(app.includes("layers.markers = L.layerGroup().addTo(map)"), "Marker overlay should remain wired.");
assert(app.includes("layers.facilities = L.layerGroup().addTo(map)"), "Facility overlay should remain wired.");
assert(app.includes("layers.liveRoute = L.layerGroup().addTo(map)"), "Live route overlay should remain wired.");
assert(app.includes("drawShipmentRoute"), "Shipment map preview should remain wired.");
assert(app.includes("drawRuralHealthNetwork"), "Rural health map overlay should remain wired.");

const paidKeyPatterns = [
  /pk\.[A-Za-z0-9._-]{20,}/,
  /AIza[0-9A-Za-z_-]{20,}/,
  /sk\.[A-Za-z0-9._-]{20,}/
];
for (const pattern of paidKeyPatterns) {
  assert(!pattern.test(app), "No paid map API key should be hardcoded in public/app.js.");
}

assert(pkg.scripts["map:route-preview-qa"] === "node scripts/map-route-planning-preview-qa.js", "package script should expose Phase 4 route preview QA.");

console.log("Map route planning preview QA passed");
