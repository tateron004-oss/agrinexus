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

function assertHiddenMountPointOnly(source) {
  assert.equal((source.match(new RegExp(`id="${mountId}"`, "g")) || []).length, 1, "public/index.html must include exactly one hidden renderer mount point after Phase 13L");
  const match = source.match(/<div\s+[^>]*id="nexus-controlled-low-risk-renderer-root"[^>]*>\s*<\/div>/);
  assert(match, "hidden renderer mount point must be a single empty div");
  const mount = match[0];
  for (const term of [
    "hidden",
    "aria-hidden=\"true\"",
    "data-nexus-renderer-mode=\"hidden\"",
    "data-visible-renderer-enabled=\"false\"",
    "data-execution-allowed=\"false\"",
    "data-provider-handoff=\"false\"",
    "data-permission-request=\"false\"",
    "data-navigation-allowed=\"false\""
  ]) {
    assert(mount.includes(term), `hidden renderer mount point must include ${term}`);
  }
}

const docName = "NEXUS_CONTROLLED_LOW_RISK_RENDERER_HIDDEN_MOUNT_POINT_TEST_ONLY_FIXTURE.md";
const fixtureName = "nexus-controlled-low-risk-renderer-hidden-mount-point.fixture.html";
const scriptName = "nexus-controlled-low-risk-renderer-hidden-mount-point-test-only-fixture-qa.js";
const mountId = "nexus-controlled-low-risk-renderer-root";

assert(exists("docs", docName), "Phase 13I hidden mount point fixture doc must exist");
assert(exists("test-fixtures", fixtureName), "Phase 13I hidden mount point fixture must exist");

for (const parts of [
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_HIDDEN_STANDARD_USER_MOUNT_POINT_CONTRACT.md"],
  ["scripts", "nexus-controlled-low-risk-renderer-hidden-standard-user-mount-point-contract-qa.js"],
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_DEFAULT_OFF_VISIBLE_FEATURE_FLAG_DESIGN.md"],
  ["scripts", "nexus-controlled-low-risk-renderer-default-off-visible-feature-flag-design-qa.js"],
  ["test-fixtures", "nexus-controlled-low-risk-renderer-inert-card.snapshot.html"],
  ["scripts", "nexus-controlled-low-risk-renderer-test-only-visual-snapshot-fixture-qa.js"]
]) {
  assert(exists(...parts), `${parts.join("/")} must exist before Phase 13I fixture QA`);
}

const doc = read("docs", docName);
const fixture = read("test-fixtures", fixtureName);
const app = read("public", "app.js");
const index = read("public", "index.html");
const server = read("server.js");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");
const fixturePath = path.join(root, "test-fixtures", fixtureName);

assert(fixturePath.includes(`${path.sep}test-fixtures${path.sep}`), "Phase 13I fixture must live under test-fixtures/");
assert(!fixturePath.includes(`${path.sep}public${path.sep}`), "Phase 13I fixture must not live under public/");

assertIncludes(doc, [
  "# Nexus Controlled Low-Risk Renderer Hidden Mount Point Test-Only Fixture",
  "## 1. Purpose and Scope",
  "## 2. Relationship to Prior Renderer Phases",
  "## 3. Fixture Location",
  "## 4. Fixture Shape",
  "## 5. Why Standard User Remains Unchanged",
  "## 6. Allowed Fixture Content",
  "## 7. Prohibited Fixture Content",
  "## 8. Required Future Gates Before Real Mount Addition",
  "## 9. Standard User Safety Posture",
  "## 10. QA Coverage",
  "## 11. Recommended Next Phase"
], "Phase 13I doc sections");

assertIncludes(doc, [
  "not an activation phase",
  "test-only hidden mount point fixture",
  "outside the active app path",
  "test-fixtures/nexus-controlled-low-risk-renderer-hidden-mount-point.fixture.html",
  "outside `public/`",
  "must not be referenced by `public/index.html`, `public/app.js`, or `server.js`",
  mountId,
  "No actual mount point exists in Standard User",
  "The fixture is not loaded by Standard User"
], "Phase 13I fixture scope");

assertIncludes(doc, [
  "data-nexus-renderer-mode=\"hidden\"",
  "data-visible-renderer-enabled=\"false\"",
  "data-execution-allowed=\"false\"",
  "data-provider-handoff=\"false\"",
  "data-permission-request=\"false\"",
  "data-navigation-allowed=\"false\"",
  "test-only HTML comment"
], "fixture metadata contract");

assertIncludes(doc, [
  "Scripts",
  "Buttons",
  "Links",
  "Forms",
  "Inputs",
  "Inline event attributes",
  "External assets",
  "Visible cards",
  "Startup calls",
  "Feature flag activation",
  "Provider handoff",
  "Permission requests",
  "Navigation",
  "Network calls",
  "Storage writes",
  "Confirmation modals",
  "Execution affordances",
  "Call, message, location, camera, payment, purchase, emergency, booking, account mutation, or health mutation affordances"
], "prohibited fixture content");

assertIncludes(doc, [
  "enableControlledLowRiskRendererVisibleUi === true",
  "hidden and default-empty",
  "low-risk category allowlist",
  "Execution, provider handoff, permission request, and navigation flags remain false",
  "Text-only DOM insertion",
  "Raw HTML is rejected",
  "No action buttons or links",
  "Browser regression validation",
  "Manual Standard User validation"
], "future gates before real mount");

assertIncludes(fixture, [
  "<!doctype html>",
  "Test-only hidden mount point fixture. Not loaded by Standard User.",
  `id="${mountId}"`,
  "hidden",
  "aria-hidden=\"true\"",
  "data-nexus-renderer-mode=\"hidden\"",
  "data-visible-renderer-enabled=\"false\"",
  "data-execution-allowed=\"false\"",
  "data-provider-handoff=\"false\"",
  "data-permission-request=\"false\"",
  "data-navigation-allowed=\"false\""
], "Phase 13I fixture");

assert.equal((fixture.match(new RegExp(`id="${mountId}"`, "g")) || []).length, 1, "fixture must include exactly one future mount point id");
assert.equal((fixture.match(/data-nexus-renderer-mode="hidden"/g) || []).length, 1, "fixture must include one hidden renderer mode marker");
assert.equal((fixture.match(/data-visible-renderer-enabled="false"/g) || []).length, 1, "fixture must include one visible renderer disabled marker");
assert.equal((fixture.match(/data-execution-allowed="false"/g) || []).length, 1, "fixture must include one execution disabled marker");
assert.equal((fixture.match(/data-provider-handoff="false"/g) || []).length, 1, "fixture must include one provider handoff disabled marker");
assert.equal((fixture.match(/data-permission-request="false"/g) || []).length, 1, "fixture must include one permission request disabled marker");
assert.equal((fixture.match(/data-navigation-allowed="false"/g) || []).length, 1, "fixture must include one navigation disabled marker");

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
  assert(!forbidden.test(fixture), `hidden mount fixture must not contain forbidden pattern: ${forbidden}`);
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

assertHiddenMountPointOnly(index);
assert(!index.includes(fixtureName), "public/index.html must not reference the Phase 13I fixture");
assert(!app.includes(fixtureName), "public/app.js must not reference the Phase 13I fixture");
assert(!server.includes(fixtureName), "server.js must not reference the Phase 13I fixture");
assert(!index.match(/<script[^>]+nexus-low-risk/i), "public/index.html must not include low-risk renderer scripts");
assert(!index.includes("data-nexus-renderer-mode=\"inert\""), "public/index.html must not include rendered inert card output");
assert(!app.includes(`getElementById("${mountId}")`), "public/app.js must not query the future mount point by id");
assert(!app.includes(`getElementById('${mountId}')`), "public/app.js must not query the future mount point by id");
assert(!app.includes(`querySelector("#${mountId}")`), "public/app.js must not query the future mount point by selector");
assert(!app.includes(`querySelector('#${mountId}')`), "public/app.js must not query the future mount point by selector");
assert(!server.includes(mountId), "server.js must not expose or reference the future renderer mount point");
assert(!server.includes("enableControlledLowRiskRendererVisibleUi"), "server.js must not expose the future visible feature flag");

assert(app.includes("function createNexusControlledLowRiskInertCardForTest"), "Phase 13B inert helper must remain present");
const declarationIndex = app.indexOf("function createNexusControlledLowRiskInertCardForTest");
assert(declarationIndex >= 0, "inert helper declaration must be found");
const afterDeclaration = app.slice(declarationIndex + "function createNexusControlledLowRiskInertCardForTest".length);
assert(!afterDeclaration.match(/createNexusControlledLowRiskInertCardForTest\s*\(/), "inert helper must not be invoked during startup/runtime flow");

assert(packageJson.includes(`"qa:nexus-controlled-low-risk-renderer-hidden-mount-point-test-only-fixture": "node scripts/${scriptName}"`), "package.json must expose Phase 13I QA alias");
assert(suite.includes(`scripts/${scriptName}`), "nexus-workforce suite must include Phase 13I hidden mount point fixture guard");

for (const qaScript of [
  "scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-implementation-qa.js",
  "scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-browser-regression-validation-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-visible-ui-design-contract-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-inert-dom-prototype-test-fixture-only-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-inert-dom-browser-regression-contract-enforcement-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-test-only-visual-snapshot-fixture-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-standard-user-readiness-review-before-visible-activation-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-default-off-visible-feature-flag-design-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-hidden-standard-user-mount-point-contract-qa.js"
]) {
  assert(suite.includes(qaScript), `nexus-workforce suite must keep renderer/pre-activation guard: ${qaScript}`);
}

console.log("Nexus controlled low-risk renderer hidden mount point test-only fixture QA passed");
console.log("- Phase 13I fixture exists outside public/ and contains one hidden default-off mount point");
console.log("- fixture contains no scripts, buttons, links, handlers, assets, permissions, navigation, handoff, or execution affordances");
console.log("- Standard User index/app/server remain unwired to the hidden mount point fixture");
