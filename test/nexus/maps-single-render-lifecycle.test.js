const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "../..");
const appSource = fs.readFileSync(path.join(root, "public/app.js"), "utf8");

function functionSource(name, nextName) {
  const start = appSource.indexOf(`function ${name}(`);
  const end = appSource.indexOf(`function ${nextName}(`, start + 1);
  assert.notEqual(start, -1, `${name} must exist`);
  assert.notEqual(end, -1, `${nextName} must follow ${name}`);
  return appSource.slice(start, end);
}

test("full-scale Standard User map relies on goSection for its single section render", () => {
  const openMap = functionSource("openFullScaleUserMap", "openCountryMapFromVoice");

  assert.match(openMap, /goSection\("map",\s*\{/);
  assert.doesNotMatch(openMap, /renderUserSimpleActiveSection\("map"\)/);
  assert.match(openMap, /#map \.user-inline-workflow/);
});

test("goSection owns the active Standard User section render", () => {
  const goSection = functionSource("goSection", "activateSectionFromButton");

  assert.match(goSection, /renderUserSimpleActiveSection\(sectionId\)/);
});

test("map route fit and visible authoritative acknowledgement boundaries remain present", () => {
  assert.match(appSource, /userMap\.fitBounds\(points/);
  assert.match(appSource, /nexusMapOutcomeVerified/);
  assert.match(appSource, /runAuthoritativeGenesisWorkspaceBridge/);
  assert.match(appSource, /acknowledgement\?\.verified === true/);
});

test("complete route endpoints take precedence over single destination targeting", () => {
  const start = appSource.indexOf("function openGenesisRealtimeMapWorkspace(");
  const end = appSource.indexOf("const genesisWorkspaceBridgeRequests", start);
  assert.notEqual(start, -1);
  assert.notEqual(end, -1);
  const openMap = appSource.slice(start, end);

  assert.match(openMap, /hasRouteEndpoints\s*=\s*Boolean/);
  assert.match(openMap, /target\s*=\s*hasRouteEndpoints\s*\?\s*null\s*:\s*genesisRealtimeMapTarget/);
  assert.ok(openMap.indexOf("if (hasRouteEndpoints)") < openMap.indexOf("else if (target)"));
  assert.match(openMap, /L\.polyline\(points/);
  assert.match(openMap, /userMap\.fitBounds\(points/);
});

test("the certified Nairobi to Nakuru route resolves both catalog endpoints", () => {
  const catalog = functionSource("africanCityLocationCatalog", "cityLocationFromCommand");

  assert.match(catalog, /aliases:\s*\["nairobi"\]/);
  assert.match(catalog, /aliases:\s*\["nakuru"\]/);
});

test("production browser binds maps completion to command-owned visible route geometry", () => {
  const probe = fs.readFileSync(path.join(root, "scripts/nexus-run-browser-capability-probes.js"), "utf8");
  assert.match(probe, /application === "maps"/);
  assert.match(probe, /data-genesis-workspace-request-id/);
  assert.match(probe, /leaflet-overlay-pane svg path/);
  assert.match(probe, /leaflet-marker-pane \.leaflet-marker-icon/);
  assert.match(probe, /markers\.length >= 2/);
});

test("production browser preserves same-browser Maps timeout lifecycle evidence", () => {
  const probe = fs.readFileSync(path.join(root, "scripts/nexus-run-browser-capability-probes.js"), "utf8");
  assert.match(probe, /nexus\.maps-sequential-timeout\.v1/);
  assert.match(probe, /nexus-maps-sequential-timeout\.json/);
  assert.match(probe, /nexus-maps-sequential-timeout\.png/);
  assert.match(probe, /workspaceRequestIdPresent/);
  assert.match(probe, /visibleMarkerCount/);
  assert.match(probe, /visibleRoutePathCount/);
  assert.match(probe, /application === "maps".*captureMapsLifecycleDiagnostic/s);
});

test("production browser captures the command-bound Maps payload and dispatcher boundary", () => {
  const probe = fs.readFileSync(path.join(root, "scripts/nexus-run-browser-capability-probes.js"), "utf8");
  assert.match(probe, /nexus\.maps-command-bound-render\.v1/);
  assert.match(probe, /application: text\(outcome\.application\)/);
  assert.match(probe, /workspace: text\(outcome\.workspace\)/);
  assert.match(probe, /operation: text\(outcome\.operation\)/);
  assert.match(probe, /origin: text\(data\.origin\)/);
  assert.match(probe, /destination: text\(data\.destination\)/);
  assert.match(probe, /"dispatcher-before"/);
  assert.match(probe, /"map-launcher-before"/);
  assert.match(probe, /"map-launcher-after"/);
  assert.match(probe, /"dispatcher-after"/);
  assert.match(probe, /commandBoundRender: window\.__NEXUS_MAP_COMMAND_BOUND_RENDER_TRACE__/);
});

test("the passive Maps dispatcher records its protected launcher boundary when the probe trace is active", () => {
  const render = functionSource("renderNexusPassiveWorkspace", "verifyNexusYouTubePlaybackStarted");
  assert.match(render, /__NEXUS_MAP_COMMAND_BOUND_RENDER_TRACE__/);
  assert.match(render, /commandId: String\(outcome\.commandId/);
  assert.match(render, /application: String\(outcome\.application/);
  assert.match(render, /workspace: String\(outcome\.workspace/);
  assert.match(render, /operation: String\(outcome\.operation/);
  assert.match(render, /origin: String\(data\.origin/);
  assert.match(render, /destination: String\(data\.destination/);
  assert.ok(render.indexOf('"dispatcher-before-map-launcher"') < render.indexOf("openGenesisRealtimeMapWorkspace(data, outcome.response)"));
  assert.ok(render.indexOf('"dispatcher-after-map-launcher"') > render.indexOf("openGenesisRealtimeMapWorkspace(data, outcome.response)"));
  assert.match(render, /phase: "dispatcher-receipt"/);
  assert.match(render, /dispatcherResult: dispatcherReceipt/);
});

test("the protected Maps diagnostic traces renderer and adapter entry before the passive dispatcher", () => {
  assert.match(appSource, /function recordNexusMapCommandBoundRenderTrace/);
  assert.match(appSource, /"renderer-before"/);
  assert.match(appSource, /"renderer-after"/);
  assert.match(appSource, /"adapter-before"/);
  assert.match(appSource, /"adapter-after"/);
  assert.match(appSource, /rendererError: String\(error\?\.message \|\| error\)\.slice\(0, 500\)/);
  assert.match(appSource, /adapterError: String\(error\?\.message \|\| error\)\.slice\(0, 500\)/);
  assert.match(appSource, /recordNexusMapCommandBoundRenderTrace\("renderer-before", result\.render, result\.render\.data \|\| \{\}\)/);
});
