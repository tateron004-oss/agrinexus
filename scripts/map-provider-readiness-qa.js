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

const readinessSource = sourceBetween("function mapProviderReadinessModel", "function userMapProviderReadinessHtml");
const readinessHtmlSource = sourceBetween("function userMapProviderReadinessHtml", "function userMapPreviewHtml");
const safeIntentSource = sourceBetween("function safeMapCapabilityIntent", "function openSafeMapCapabilityPreview");
const previewSource = sourceBetween("function openSafeMapCapabilityPreview", "function openFullScaleUserMap");
const voiceCoreSource = sourceBetween("async function handleVoiceCommandCore", "function bindStatic");

assert(app.includes("const MAP_ZOOM_CONFIG"), "Phase 1 map zoom config should remain.");
assert(app.includes("detectRetina: true"), "Phase 1 retina tile behavior should remain.");
assert(app.includes("maxNativeZoom: MAP_ZOOM_CONFIG.maxNativeZoom"), "Phase 1 native zoom cap should remain.");
assert(app.includes("DEFAULT_MAP_TILE_CONFIG"), "Phase 2 public tile config fallback should remain.");
assert(app.includes("loadPublicMapConfig"), "Phase 2 public tile config loading should remain.");
assert(!app.includes("maplibregl") && !app.includes("maplibre-gl"), "MapLibre/vector migration must not be introduced.");

assert(app.includes("userMapProviderReadinessHtml()"), "Standard user map readiness card should render in the map preview.");
assert(app.includes('id="userMapProviderReadiness"'), "Readiness card should have a stable UI target.");
assert(css.includes(".user-map-provider-readiness"), "Readiness card should have standard-user styling.");
assert(readinessSource.includes("Public map tiles configured"), "Readiness should report production/public tile config.");
assert(readinessSource.includes("Using local/default public tile templates"), "Readiness should report local/default tile templates.");
assert(readinessSource.includes("Routing provider not connected"), "Readiness should report missing routing provider.");
assert(readinessSource.includes("Live location requires explicit permission"), "Readiness should state location requires permission.");
assert(readinessSource.includes("Offline map cache not enabled"), "Readiness should state offline tile cache is not active.");
assert(readinessSource.includes("Vector map engine not enabled"), "Readiness should state vector engine is not enabled.");
assert(readinessHtmlSource.includes("Preview only"), "Readiness UI should label map actions as preview-only.");
assert(readinessHtmlSource.includes("what map features are available"), "Readiness UI should offer map feature guidance.");
assert(readinessHtmlSource.includes("show satellite imagery"), "Readiness UI should offer satellite layer guidance.");
assert(readinessHtmlSource.includes("help me plan a route"), "Readiness UI should offer safe route planning preview.");

["what map features are available", "can you show routes", "is location enabled", "show satellite imagery", "help me plan a route"].forEach(phrase => {
  assert(app.includes(phrase), `Safe map prompt contract should include: ${phrase}`);
});
assert(safeIntentSource.includes("is location enabled") || safeIntentSource.includes("location"), "Safe map intent should recognize location-readiness prompts.");
assert(safeIntentSource.includes("I will not call navigation"), "Route planning response should be preview-only.");
assert(safeIntentSource.includes("will not request browser location automatically"), "Location response should forbid automatic geolocation.");
assert(safeIntentSource.includes("not drone dispatch or external navigation"), "Satellite response should avoid dispatch/navigation implications.");
assert(safeIntentSource.includes("MapLibre/vector migration is a future decision") || readinessSource.includes("MapLibre/vector migration is a future decision"), "Readiness should keep MapLibre as future decision.");

assert(previewSource.includes("goSection(\"map\""), "Safe map prompts should route to the map UI.");
assert(previewSource.includes("renderUserSimpleActiveSection(\"map\")"), "Safe map prompts should render the standard-user map readiness card.");
assert(previewSource.includes("renderMap()") && previewSource.includes("renderUserRealMap()"), "Safe map preview should preserve existing Leaflet maps.");
assert(previewSource.includes("allowHandoff: false"), "Safe map prompt responses should not hand off to execution.");
assert(voiceCoreSource.includes("safeMapCapabilityIntent"), "Voice/typed assistant pipeline should call safe map capability intent.");
assert(
  voiceCoreSource.indexOf("safeMapCapabilityIntent") < voiceCoreSource.indexOf("runStandardUserAssistantRuntimePreview"),
  "Safe map readiness prompts should run before the generic assistant runtime preview."
);

[
  readinessSource,
  readinessHtmlSource,
  safeIntentSource,
  previewSource
].forEach((source, index) => {
  assert(!source.includes("navigator.geolocation"), `Map readiness source ${index} must not request geolocation.`);
  assert(!source.includes("watchPosition"), `Map readiness source ${index} must not start tracking.`);
  assert(!source.includes("getCurrentPosition"), `Map readiness source ${index} must not request current position.`);
  assert(!source.includes("openWorkflowByVoice"), `Map readiness source ${index} must not execute workflows.`);
  assert(!source.includes("/api/map/advanced"), `Map readiness source ${index} must not call advanced map provider execution.`);
  assert(!source.includes("window.open"), `Map readiness source ${index} must not hand off to external navigation.`);
});

assert(app.includes("Operational map"), "Operational/street layer should remain supported.");
assert(app.includes("Satellite imagery"), "Satellite imagery layer should remain supported.");
assert(app.includes("Country names and borders"), "Label layer should remain supported.");
assert(app.includes("OpenStreetMap"), "OpenStreetMap layer should remain supported.");
assert(app.includes("Humanitarian street map"), "HOT layer should remain supported.");
assert(app.includes("layers.routes = L.layerGroup().addTo(map)"), "Route overlay should remain wired.");
assert(app.includes("layers.markers = L.layerGroup().addTo(map)"), "Marker overlay should remain wired.");
assert(app.includes("layers.facilities = L.layerGroup().addTo(map)"), "Facility overlay should remain wired.");
assert(app.includes("layers.liveRoute = L.layerGroup().addTo(map)"), "Live route overlay should remain wired.");
assert(app.includes("drawShipmentRoute"), "Shipment overlay should remain wired.");
assert(app.includes("drawRuralHealthNetwork"), "Rural health map overlay should remain wired.");

const paidKeyPatterns = [
  /pk\.[A-Za-z0-9._-]{20,}/,
  /AIza[0-9A-Za-z_-]{20,}/,
  /sk\.[A-Za-z0-9._-]{20,}/
];
for (const pattern of paidKeyPatterns) {
  assert(!pattern.test(app), "No paid map API key should be hardcoded in public/app.js.");
}

assert(pkg.scripts["map:provider-readiness-qa"] === "node scripts/map-provider-readiness-qa.js", "package script should expose Phase 3 map provider readiness QA.");

console.log("Map provider readiness QA passed");
