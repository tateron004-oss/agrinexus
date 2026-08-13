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

test("production browser binds maps completion to command-owned visible route geometry", () => {
  const probe = fs.readFileSync(path.join(root, "scripts/nexus-run-browser-capability-probes.js"), "utf8");
  assert.match(probe, /application === "maps"/);
  assert.match(probe, /data-genesis-workspace-request-id/);
  assert.match(probe, /leaflet-overlay-pane svg path/);
  assert.match(probe, /leaflet-marker-pane \.leaflet-marker-icon/);
  assert.match(probe, /markers\.length >= 2/);
});
