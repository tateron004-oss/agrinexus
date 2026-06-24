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

const docName = "NEXUS_CONTROLLED_LOW_RISK_RENDERER_DEFAULT_OFF_VISIBLE_FEATURE_FLAG_DESIGN.md";
const scriptName = "nexus-controlled-low-risk-renderer-default-off-visible-feature-flag-design-qa.js";

assert(exists("docs", docName), "Phase 13F default-off visible feature flag design doc must exist");

for (const parts of [
  ["public", "nexus-low-risk-inert-renderer-flag.js"],
  ["public", "nexus-low-risk-inert-renderer-eligibility.js"],
  ["public", "nexus-low-risk-inert-renderer.js"],
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_VISIBLE_UI_DESIGN_CONTRACT.md"],
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_INERT_DOM_PROTOTYPE_TEST_FIXTURE_ONLY.md"],
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_INERT_DOM_BROWSER_REGRESSION_AND_CONTRACT_ENFORCEMENT.md"],
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_TEST_ONLY_VISUAL_SNAPSHOT_FIXTURE.md"],
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_STANDARD_USER_READINESS_REVIEW_BEFORE_VISIBLE_ACTIVATION.md"],
  ["test-fixtures", "nexus-controlled-low-risk-renderer-inert-card.snapshot.html"],
  ["scripts", "nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-implementation-qa.js"],
  ["scripts", "nexus-low-risk-renderer-controlled-runtime-flag-on-browser-regression-validation-qa.js"],
  ["scripts", "nexus-controlled-low-risk-renderer-visible-ui-design-contract-qa.js"],
  ["scripts", "nexus-controlled-low-risk-renderer-inert-dom-prototype-test-fixture-only-qa.js"],
  ["scripts", "nexus-controlled-low-risk-renderer-inert-dom-browser-regression-contract-enforcement-qa.js"],
  ["scripts", "nexus-controlled-low-risk-renderer-test-only-visual-snapshot-fixture-qa.js"],
  ["scripts", "nexus-controlled-low-risk-renderer-standard-user-readiness-review-before-visible-activation-qa.js"]
]) {
  assert(exists(...parts), `${parts.join("/")} must exist before Phase 13F activation design`);
}

const doc = read("docs", docName);
const app = read("public", "app.js");
const index = read("public", "index.html");
const server = read("server.js");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");
const flagModule = read("public", "nexus-low-risk-inert-renderer-flag.js");
const fixturePath = path.join(root, "test-fixtures", "nexus-controlled-low-risk-renderer-inert-card.snapshot.html");

assertIncludes(doc, [
  "# Nexus Controlled Low-Risk Renderer Default-Off Visible Feature Flag Design",
  "## 1. Purpose and Scope",
  "## 2. Relationship to Phases 12Y, 12Z, 13A, 13B, 13C, 13D, and 13E",
  "## 3. Proposed Future Flag",
  "## 4. Why This Flag Does Not Activate Visible UI Yet",
  "## 5. Standard User Safety Posture",
  "## 6. Required Future Visible Activation Gates",
  "## 7. Allowed Future Flag-On Behavior",
  "## 8. Prohibited Behavior",
  "## 9. Config and Runtime Placeholder Decision",
  "## 10. QA Expectations",
  "## 11. Recommended Next Phase"
], "Phase 13F doc sections");

assertIncludes(doc, [
  "This is not a visible activation phase",
  "documentation and QA guardrails only",
  "No runtime feature flag constant is added to `public/app.js`, `public/index.html`, or `server.js`",
  "enableControlledLowRiskRendererVisibleUi",
  "Default value: `false`",
  "Missing value: no-op",
  "Undefined value: no-op",
  "Null value: no-op",
  "Malformed value: no-op",
  "Explicit `false`: no-op",
  "Truthy non-boolean strings such as `\"true\"`, `\"1\"`, `\"yes\"`, `\"on\"`, or `\"enabled\"`: no-op",
  "Only literal boolean `true` may be considered enabled",
  "Even literal boolean `true` must not render anything by itself"
], "default-off flag design");

assertIncludes(doc, [
  "Phase 12Y",
  "Phase 12Z",
  "Phase 13A",
  "Phase 13B",
  "Phase 13C",
  "Phase 13D",
  "Phase 13E",
  "local/test-only controlled runtime flag-on harness",
  "browser-regression validation",
  "visible UI design contract",
  "createNexusControlledLowRiskInertCardForTest",
  "static visual snapshot fixture",
  "visible activation is still no-go"
], "Phase 13F relationship to prior renderer phases");

assertIncludes(doc, [
  "category is explicitly allowlisted",
  "risk tier is low",
  "execution is false",
  "provider handoff is false",
  "permission request is false",
  "navigation is false",
  "click handlers are false",
  "network calls are false",
  "storage writes are false",
  "confirmation modal creation is false",
  "high-risk category is absent",
  "text-only DOM insertion is used",
  "no action buttons are created",
  "no links are created",
  "browser regression QA has passed",
  "Standard User manual browser validation has passed"
], "future activation gates");

assertIncludes(doc, [
  "no query parameter activation",
  "no `localStorage` activation",
  "no `sessionStorage` activation",
  "no user-controlled DOM activation",
  "no raw model HTML",
  "no automatic routing",
  "no external navigation",
  "no provider handoff",
  "no browser permission prompts",
  "no network calls",
  "no storage writes",
  "no confirmation modals",
  "no high-risk or sensitive category rendering"
], "forbidden activation paths");

assertIncludes(doc, [
  "Training",
  "Jobs",
  "Learning",
  "Marketplace Review",
  "Agriculture Help",
  "Field Support",
  "No action has been taken",
  "Phase 13G - Standard-User Manual Browser Validation Checkpoint"
], "allowed future low-risk labels and next phase");

assert(flagModule.includes("const NEXUS_LOW_RISK_INERT_RENDERER_ENABLED = false;"), "existing Phase 12Y local/test flag must remain hard default-off");
assert(flagModule.includes("standardUserBehaviorChange: false"), "existing flag metadata must preserve no Standard User behavior change");
assert(flagModule.includes("renderingAuthority: \"none\""), "existing flag metadata must grant no rendering authority");
assert(flagModule.includes("executionAuthority: \"none\""), "existing flag metadata must grant no execution authority");

assert(!app.includes("enableControlledLowRiskRendererVisibleUi"), "public/app.js must not introduce the future visible flag in Phase 13F");
assert(!server.includes("enableControlledLowRiskRendererVisibleUi"), "server.js must not expose the future visible flag in Phase 13F");
assert(!index.includes("enableControlledLowRiskRendererVisibleUi"), "public/index.html must not expose the future visible flag in Phase 13F");

assert(!index.match(/<script[^>]+nexus-low-risk/i), "public/index.html must not include low-risk renderer script tags");
assert(!index.includes("nexus-controlled-low-risk-renderer-inert-card.snapshot.html"), "public/index.html must not reference the Phase 13D fixture");
assert(!index.includes("data-nexus-renderer-mode"), "public/index.html must not include renderer mode markers");
assert(!index.includes("controlled-low-risk-renderer"), "public/index.html must not include controlled renderer roots");

for (const forbidden of [
  "data-standard-user-low-risk-renderer",
  "data-low-risk-renderer-root",
  "low-risk-renderer-root",
  "nexus-visible-low-risk-renderer",
  "data-controlled-low-risk-renderer-visible-ui",
  "controlled-low-risk-renderer-visible-ui"
]) {
  assert(!index.includes(forbidden), `public/index.html must not include renderer root marker: ${forbidden}`);
}

assert(app.includes("function createNexusControlledLowRiskInertCardForTest"), "Phase 13B inert helper must remain present");
const declarationIndex = app.indexOf("function createNexusControlledLowRiskInertCardForTest");
assert(declarationIndex >= 0, "inert helper declaration must be found");
const afterDeclaration = app.slice(declarationIndex + "function createNexusControlledLowRiskInertCardForTest".length);
assert(!afterDeclaration.match(/createNexusControlledLowRiskInertCardForTest\s*\(/), "inert helper must not be invoked during startup/runtime flow");

assert(!app.includes("renderNexusLowRiskInertPreview"), "public/app.js must not invoke active renderer preview");
assert(!app.includes("buildNexusLowRiskInertRendererPrototype"), "public/app.js must not invoke renderer prototype builder");
assert(!app.includes("nexus-controlled-low-risk-renderer-inert-card.snapshot.html"), "public/app.js must not reference Phase 13D fixture");

for (const source of [app, index, server]) {
  assert(!source.includes("localStorage.enableControlledLowRiskRendererVisibleUi"), "future flag must not be controlled by localStorage");
  assert(!source.includes("sessionStorage.enableControlledLowRiskRendererVisibleUi"), "future flag must not be controlled by sessionStorage");
  assert(!source.includes("URLSearchParams") || !source.includes("enableControlledLowRiskRendererVisibleUi"), "future flag must not be controlled by query parameters");
}

assert(fixturePath.includes(`${path.sep}test-fixtures${path.sep}`), "Phase 13D fixture must remain outside public/");
assert(!fixturePath.includes(`${path.sep}public${path.sep}`), "Phase 13D fixture must not live inside public/");

assert(packageJson.includes(`"qa:nexus-controlled-low-risk-renderer-default-off-visible-feature-flag-design": "node scripts/${scriptName}"`), "package.json must expose Phase 13F QA alias");
assert(suite.includes(`scripts/${scriptName}`), "nexus-workforce suite must include Phase 13F guard");

for (const qaScript of [
  "scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-implementation-qa.js",
  "scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-browser-regression-validation-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-visible-ui-design-contract-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-inert-dom-prototype-test-fixture-only-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-inert-dom-browser-regression-contract-enforcement-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-test-only-visual-snapshot-fixture-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-standard-user-readiness-review-before-visible-activation-qa.js"
]) {
  assert(suite.includes(qaScript), `nexus-workforce suite must keep prior renderer guard: ${qaScript}`);
}

for (const forbiddenRuntime of [
  "window.open(",
  "navigator.geolocation.getCurrentPosition(",
  "navigator.mediaDevices.getUserMedia(",
  "location.href =",
  "fetch(\"/api/video/session\"",
  "fetch('/api/video/session'",
  "ACTION_CALL",
  "executionConfirmed: true"
]) {
  assert(!doc.includes(forbiddenRuntime), `Phase 13F doc must not prescribe runtime execution pattern: ${forbiddenRuntime}`);
}

console.log("Nexus controlled low-risk renderer default-off visible feature flag design QA passed");
console.log("- Phase 13F documents a future boolean-only default-off visible flag without activation");
console.log("- Standard User index/app/server remain unwired to visible renderer activation");
console.log("- prior Phase 12Y through 13E renderer guards remain callable through the Nexus Workforce suite");
