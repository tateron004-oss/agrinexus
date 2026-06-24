const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertIncludes(source, terms, label) {
  for (const term of terms) {
    assert(source.includes(term), `${label} must include: ${term}`);
  }
}

const docName = "NEXUS_CONTROLLED_LOW_RISK_RENDERER_HIDDEN_MOUNT_POINT_BROWSER_REGRESSION_AND_STANDARD_USER_ABSENCE_ENFORCEMENT.md";
const fixtureName = "nexus-controlled-low-risk-renderer-hidden-mount-point.fixture.html";
const scriptName = "nexus-controlled-low-risk-renderer-hidden-mount-point-browser-regression-standard-user-absence-enforcement-qa.js";
const mountId = "nexus-controlled-low-risk-renderer-root";

assert(exists("docs", docName), "Phase 13J browser regression and absence enforcement doc must exist");
assert(exists("test-fixtures", fixtureName), "Phase 13I hidden mount point fixture must exist");

for (const parts of [
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_HIDDEN_STANDARD_USER_MOUNT_POINT_CONTRACT.md"],
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_HIDDEN_MOUNT_POINT_TEST_ONLY_FIXTURE.md"],
  ["scripts", "nexus-controlled-low-risk-renderer-hidden-standard-user-mount-point-contract-qa.js"],
  ["scripts", "nexus-controlled-low-risk-renderer-hidden-mount-point-test-only-fixture-qa.js"],
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_DEFAULT_OFF_VISIBLE_FEATURE_FLAG_DESIGN.md"],
  ["scripts", "nexus-controlled-low-risk-renderer-default-off-visible-feature-flag-design-qa.js"]
]) {
  assert(exists(...parts), `${parts.join("/")} must exist before Phase 13J absence enforcement`);
}

const doc = read("docs", docName);
const fixture = read("test-fixtures", fixtureName);
const app = read("public", "app.js");
const index = read("public", "index.html");
const server = read("server.js");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");
const fixturePath = path.join(root, "test-fixtures", fixtureName);

assert(fixturePath.includes(`${path.sep}test-fixtures${path.sep}`), "Phase 13I fixture must remain under test-fixtures/");
assert(!fixturePath.includes(`${path.sep}public${path.sep}`), "Phase 13I fixture must remain outside public/");

assertIncludes(doc, [
  "# Nexus Controlled Low-Risk Renderer Hidden Mount Point Browser Regression and Standard User Absence Enforcement",
  "## 1. Purpose and Scope",
  "## 2. Relationship to Prior Renderer Phases",
  "## 3. Standard User Absence Definition",
  "## 4. Browser Regression Risk Being Tested",
  "## 5. Fixture Isolation Rules",
  "## 6. Standard User Safety Posture",
  "## 7. What Remains Intentionally Blocked",
  "## 8. Required Future Gates Before Real Mount Addition",
  "## 9. QA Coverage",
  "## 10. Recommended Next Phase"
], "Phase 13J doc sections");

assertIncludes(doc, [
  "not an activation phase",
  "outside the active app path",
  "impossible to reach from normal Standard User startup",
  "does not add the mount point to `public/index.html`",
  "does not wire `public/app.js`",
  "does not alter `server.js`",
  "does not change Standard User behavior",
  "Phase 13K - Controlled Low-Risk Renderer Mount Point Readiness Review Before Runtime Wiring"
], "Phase 13J scope and next phase");

assertIncludes(doc, [
  "`public/index.html` does not contain `nexus-controlled-low-risk-renderer-root`",
  "`public/index.html` does not reference `test-fixtures/nexus-controlled-low-risk-renderer-hidden-mount-point.fixture.html`",
  "`public/index.html` does not load any low-risk renderer script tag",
  "`public/app.js` does not query, create, mount, or render into the future hidden mount point",
  "`public/app.js` does not call `createNexusControlledLowRiskInertCardForTest(...)` from startup",
  "`server.js` does not reference the mount point, expose the fixture, or activate renderer UI"
], "Standard User absence definition");

assertIncludes(doc, [
  "Outside `public/`",
  "Static",
  "Hidden/default-off",
  "Test-only",
  "Not referenced by `public/index.html`",
  "Not referenced by `public/app.js`",
  "Not referenced by `server.js`",
  "data-nexus-renderer-mode=\"hidden\"",
  "data-visible-renderer-enabled=\"false\"",
  "data-execution-allowed=\"false\"",
  "data-provider-handoff=\"false\"",
  "data-permission-request=\"false\"",
  "data-navigation-allowed=\"false\""
], "fixture isolation rules");

assertIncludes(doc, [
  "No actual Standard User renderer root exists",
  "No visible low-risk renderer UI exists",
  "No feature flag is activated",
  "No startup code renders a fixture or card",
  "No hidden/debug-only renderer metadata becomes visible"
], "Standard User safety posture");

assertIncludes(doc, [
  "Visible production renderer cards",
  "Action buttons",
  "Links",
  "Click handlers",
  "Route changes",
  "Provider handoff",
  "Browser permission prompts",
  "Network calls",
  "Storage writes",
  "Confirmation modals",
  "Execution behavior",
  "Call, message, location, camera, payment, purchase, emergency, booking, account mutation, or health mutation behavior"
], "blocked behavior");

assertIncludes(fixture, [
  "<!doctype html>",
  `id="${mountId}"`,
  "hidden",
  "aria-hidden=\"true\"",
  "data-nexus-renderer-mode=\"hidden\"",
  "data-visible-renderer-enabled=\"false\"",
  "data-execution-allowed=\"false\"",
  "data-provider-handoff=\"false\"",
  "data-permission-request=\"false\"",
  "data-navigation-allowed=\"false\""
], "Phase 13I fixture still hidden/default-off");

assert.equal((fixture.match(new RegExp(`id="${mountId}"`, "g")) || []).length, 1, "fixture must still include exactly one proposed hidden mount point");

for (const forbidden of [
  /<script\b/i,
  /\son[a-z]+\s*=/i,
  /<button\b/i,
  /<a\b/i,
  /\shref\s*=/i,
  /<form\b/i,
  /<input\b/i,
  /<textarea\b/i,
  /<select\b/i,
  /<img\b/i,
  /<iframe\b/i,
  /<link\b/i,
  /\bsrc\s*=/i,
  /\bfetch\s*\(/i,
  /\blocalStorage\b/i,
  /\bsessionStorage\b/i,
  /\bwindow\.location\b/i,
  /\bwindow\.open\b/i,
  /\bnavigator\.geolocation\b/i,
  /\bnavigator\.mediaDevices\b/i,
  /\bgetUserMedia\b/i
]) {
  assert(!forbidden.test(fixture), `hidden mount fixture must not contain browser/runtime pattern: ${forbidden}`);
}

for (const forbiddenTerm of [
  "visible card",
  "startup call",
  "feature flag activation",
  "provider handoff affordance",
  "permission prompt",
  "execute now",
  "call now",
  "send message",
  "share location",
  "open camera",
  "make payment",
  "buy now",
  "purchase now",
  "emergency dispatch",
  "book appointment",
  "submit form",
  "mutate health",
  "account mutation"
]) {
  assert(!fixture.toLowerCase().includes(forbiddenTerm), `hidden mount fixture must not include unsafe affordance text: ${forbiddenTerm}`);
}

assert(!index.includes(mountId), `public/index.html must not include actual future mount point ${mountId}`);
assert(!index.includes(fixtureName), "public/index.html must not reference the hidden mount point fixture");
assert(!index.includes("test-fixtures/"), "public/index.html must not reference test-fixtures/");
assert(!index.match(/<script[^>]+nexus-low-risk/i), "public/index.html must not include low-risk renderer script tags");
assert(!index.includes("data-nexus-renderer-mode"), "public/index.html must not include renderer mode markers");
assert(!index.includes("data-visible-renderer-enabled"), "public/index.html must not include hidden renderer feature metadata");

assert(!app.includes(fixtureName), "public/app.js must not reference the hidden mount point fixture");
assert(!app.includes(`getElementById("${mountId}")`), "public/app.js must not query the future mount point by id");
assert(!app.includes(`getElementById('${mountId}')`), "public/app.js must not query the future mount point by id");
assert(!app.includes(`querySelector("#${mountId}")`), "public/app.js must not query the future mount point by selector");
assert(!app.includes(`querySelector('#${mountId}')`), "public/app.js must not query the future mount point by selector");
assert(!app.includes("data-visible-renderer-enabled"), "public/app.js must not query hidden renderer feature metadata");
assert(!app.includes("appendChild(createNexusControlledLowRiskInertCardForTest"), "public/app.js must not append inert test cards into runtime DOM");
assert(!app.includes("renderNexusLowRiskInertPreview"), "public/app.js must not invoke active renderer preview");
assert(!app.includes("buildNexusLowRiskInertRendererPrototype"), "public/app.js must not invoke renderer prototype builder");

assert(!server.includes(fixtureName), "server.js must not reference the hidden mount point fixture");
assert(!server.includes(mountId), "server.js must not reference the proposed hidden mount point id");
assert(!server.includes("enableControlledLowRiskRendererVisibleUi"), "server.js must not expose the future visible renderer flag");

for (const source of [app, index, server]) {
  assert(!source.includes("localStorage.enableControlledLowRiskRendererVisibleUi"), "future flag must not be controlled by localStorage");
  assert(!source.includes("sessionStorage.enableControlledLowRiskRendererVisibleUi"), "future flag must not be controlled by sessionStorage");
  assert(!source.includes("URLSearchParams") || !source.includes("enableControlledLowRiskRendererVisibleUi"), "future flag must not be controlled by query parameters");
}

assert(app.includes("function createNexusControlledLowRiskInertCardForTest"), "Phase 13B inert helper must remain present");
const declarationIndex = app.indexOf("function createNexusControlledLowRiskInertCardForTest");
assert(declarationIndex >= 0, "inert helper declaration must be found");
const afterDeclaration = app.slice(declarationIndex + "function createNexusControlledLowRiskInertCardForTest".length);
assert(!afterDeclaration.match(/createNexusControlledLowRiskInertCardForTest\s*\(/), "inert helper must not be invoked during startup/runtime flow");

assert(packageJson.includes(`"qa:nexus-controlled-low-risk-renderer-hidden-mount-point-browser-regression-standard-user-absence-enforcement": "node scripts/${scriptName}"`), "package.json must expose Phase 13J QA alias");
assert(suite.includes(`scripts/${scriptName}`), "nexus-workforce suite must include Phase 13J absence enforcement guard");

for (const qaScript of [
  "scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-implementation-qa.js",
  "scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-browser-regression-validation-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-visible-ui-design-contract-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-inert-dom-prototype-test-fixture-only-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-inert-dom-browser-regression-contract-enforcement-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-test-only-visual-snapshot-fixture-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-standard-user-readiness-review-before-visible-activation-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-default-off-visible-feature-flag-design-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-hidden-standard-user-mount-point-contract-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-hidden-mount-point-test-only-fixture-qa.js"
]) {
  assert(suite.includes(qaScript), `nexus-workforce suite must keep renderer/pre-activation guard: ${qaScript}`);
}

console.log("Nexus controlled low-risk renderer hidden mount point browser regression and Standard User absence enforcement QA passed");
console.log("- Phase 13I fixture remains test-only, hidden/default-off, and outside public/");
console.log("- Standard User index/app/server remain absent of the fixture, mount point, feature flag activation, and renderer startup wiring");
console.log("- prior Phase 12Y through 13I renderer guards remain included in the Nexus Workforce suite");
