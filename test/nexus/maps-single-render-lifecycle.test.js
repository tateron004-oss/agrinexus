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
