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

const docName = "NEXUS_CONTROLLED_LOW_RISK_RENDERER_DEFAULT_OFF_WIRING_CONTRACT.md";
const scriptName = "nexus-controlled-low-risk-renderer-default-off-wiring-contract-qa.js";
const mountId = "nexus-controlled-low-risk-renderer-root";
const flagName = "enableControlledLowRiskRendererVisibleUi";

assert(exists("docs", docName), "Phase 13N default-off wiring contract doc must exist");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

for (const prior of [
  "NEXUS_CONTROLLED_LOW_RISK_RENDERER_DEFAULT_OFF_VISIBLE_FEATURE_FLAG_DESIGN.md",
  "NEXUS_CONTROLLED_LOW_RISK_RENDERER_VISIBLE_UI_DESIGN_CONTRACT.md",
  "NEXUS_CONTROLLED_LOW_RISK_RENDERER_ACTUAL_HIDDEN_MOUNT_POINT_DEFAULT_EMPTY_IMPLEMENTATION.md",
  "NEXUS_STANDARD_USER_MANUAL_BROWSER_VALIDATION_AFTER_HIDDEN_RENDERER_MOUNT_POINT.md"
]) {
  assert(exists("docs", prior), `${prior} must exist before Phase 13N`);
}

assertIncludes(doc, [
  "# Nexus Controlled Low-Risk Renderer Default-Off Wiring Contract",
  "This is not an activation phase",
  "does not wire `public/app.js`",
  "does not alter `public/index.html`",
  "does not change `server.js`",
  flagName,
  "hidden/default-empty mount point",
  "future visible review-only renderer path"
], "Phase 13N contract scope");

assertIncludes(doc, [
  "Phase 12Y",
  "Phase 12Z",
  "Phase 13A",
  "Phase 13B",
  "Phase 13C",
  "Phase 13F",
  "Phase 13H",
  "Phase 13K",
  "Phase 13L",
  "Phase 13M"
], "prior phase relationship");

assertIncludes(doc, [
  "`enableControlledLowRiskRendererVisibleUi === true`",
  "literal boolean `true`",
  "truthy strings such as `\"true\"`, `\"1\"`, `\"yes\"`, `\"on\"`, and `\"enabled\"` are rejected or ignored",
  "the hidden mount point exists exactly once",
  "the mount point starts hidden/default-empty before rendering",
  "runtime metadata identifies the item as low-risk",
  "`executionAllowed === false`",
  "`providerHandoff === false`",
  "`permissionRequest === false`",
  "`navigationAllowed === false` for the first visible phase",
  "all rendered content is text-only DOM insertion",
  "raw model HTML is rejected",
  "no buttons are created in the first visible phase",
  "no links are created in the first visible phase",
  "no click handlers are attached in the first visible phase",
  "no provider handoff is available",
  "no browser permissions are requested",
  "no network calls are made",
  "no storage writes occur",
  "no confirmation modals open",
  "no action execution occurs"
], "future wiring prerequisites");

assertIncludes(doc, [
  "Learning",
  "Training",
  "Jobs",
  "Marketplace Review",
  "Agriculture Help"
], "low-risk allowlist");

assertIncludes(doc, [
  "provider handoff",
  "calls",
  "messages",
  "payments",
  "marketplace buy/sell/checkout",
  "account or profile changes",
  "identity verification",
  "health mutation",
  "telehealth or video session start",
  "emergency dispatch",
  "camera or media activation",
  "location access",
  "booking or appointment submission",
  "contact lookup or contact disclosure"
], "high-risk and excluded categories");

assertIncludes(doc, [
  "the feature flag is missing",
  "the feature flag is false",
  "the feature flag is null",
  "the feature flag is undefined",
  "the feature flag is malformed",
  "the feature flag is a truthy string",
  "the mount point is missing",
  "more than one mount point exists",
  "the mount point is not hidden/default-empty before rendering",
  "the category is not allowlisted",
  "the category is high-risk or excluded",
  "`executionAllowed` is true",
  "`providerHandoff` is true",
  "`permissionRequest` is true",
  "`navigationAllowed` is true in the first visible phase",
  "raw HTML is present",
  "No-op means no DOM mutation"
], "required no-op conditions");

assertIncludes(doc, [
  "not user-toggleable through query parameters, localStorage, sessionStorage, hidden DOM state, or debug surfaces",
  "The flag is not execution authority",
  "Boolean `true` alone is not enough to render"
], "feature flag safety rules");

assertIncludes(doc, [
  "visible renderer UI",
  "runtime wiring",
  "feature flag activation",
  "renderer startup calls",
  "inert helper startup invocation",
  "active production cards",
  "action buttons",
  "links",
  "forms or inputs",
  "click handlers",
  "route changes",
  "provider handoff",
  "browser permission prompts",
  "network calls",
  "storage writes",
  "confirmation modals",
  "high-risk action behavior",
  "execution"
], "intentionally blocked scope");

assertIncludes(doc, [
  "Phase 13O - Controlled Low-Risk Renderer Wiring Readiness QA Matrix",
  "comprehensive test matrix for all future wiring states before any runtime wiring is implemented"
], "recommended next phase");

assert.equal((index.match(new RegExp(`id="${mountId}"`, "g")) || []).length, 1, "public/index.html must contain exactly one hidden renderer mount point");
const mountMatch = index.match(/<div\s+[^>]*id="nexus-controlled-low-risk-renderer-root"[^>]*>\s*<\/div>/);
assert(mountMatch, "public/index.html hidden mount point must be a single empty div");
const mount = mountMatch[0];
assertIncludes(mount, [
  "hidden",
  "aria-hidden=\"true\"",
  "data-nexus-renderer-mode=\"hidden\"",
  "data-visible-renderer-enabled=\"false\"",
  "data-execution-allowed=\"false\"",
  "data-provider-handoff=\"false\"",
  "data-permission-request=\"false\"",
  "data-navigation-allowed=\"false\""
], "hidden mount point");
assert(!mount.replace(/<div\b[^>]*>/, "").replace(/<\/div>/, "").trim(), "hidden mount point must remain default-empty");

assert(!index.match(/<script[^>]+nexus-low-risk/i), "public/index.html must not add low-risk renderer script tags");
assert(!index.includes("data-nexus-renderer-mode=\"inert\""), "public/index.html must not render inert card output");
assert(!index.includes("controlled-low-risk-renderer-card"), "public/index.html must not include visible renderer cards");
assert(!index.includes("data-standard-user-low-risk-renderer"), "public/index.html must not include active renderer markers");

assert(!app.includes(flagName), "public/app.js must not activate or consume the future visible renderer feature flag in Phase 13N");
assert(!server.includes(flagName), "server.js must not expose the future visible renderer feature flag in Phase 13N");
assert(!app.includes(mountId), "public/app.js must not query the hidden mount point during startup");
assert(!server.includes(mountId), "server.js must not reference the hidden mount point");
assert(app.includes("function createNexusControlledLowRiskInertCardForTest"), "existing inert test helper must remain declared");
const helperDeclaration = app.indexOf("function createNexusControlledLowRiskInertCardForTest");
const afterHelperDeclaration = app.slice(helperDeclaration + "function createNexusControlledLowRiskInertCardForTest".length);
assert(!afterHelperDeclaration.match(/createNexusControlledLowRiskInertCardForTest\s*\(/), "inert helper must not be called from Standard User startup/runtime flow");

for (const source of [index, app, server]) {
  for (const forbidden of [
    "renderNexusLowRiskInertPreview",
    "buildNexusLowRiskInertRendererPrototype",
    "appendChild(createNexusControlledLowRiskInertCardForTest",
    "localStorage.enableControlledLowRiskRendererVisibleUi",
    "sessionStorage.enableControlledLowRiskRendererVisibleUi"
  ]) {
    assert(!source.includes(forbidden), `runtime sources must not introduce forbidden renderer wiring: ${forbidden}`);
  }
}

assert(packageJson.includes(`"qa:nexus-controlled-low-risk-renderer-default-off-wiring-contract": "node scripts/${scriptName}"`), "package.json must expose Phase 13N QA alias");
assert(suite.includes(`scripts/${scriptName}`), "nexus-workforce suite must include Phase 13N QA guard");

for (const priorScript of [
  "scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-implementation-qa.js",
  "scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-browser-regression-validation-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-visible-ui-design-contract-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-inert-dom-prototype-test-fixture-only-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-inert-dom-browser-regression-contract-enforcement-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-test-only-visual-snapshot-fixture-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-standard-user-readiness-review-before-visible-activation-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-default-off-visible-feature-flag-design-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-hidden-standard-user-mount-point-contract-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-hidden-mount-point-test-only-fixture-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-hidden-mount-point-browser-regression-standard-user-absence-enforcement-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-mount-point-readiness-review-before-runtime-wiring-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-actual-hidden-mount-point-default-empty-implementation-qa.js"
]) {
  assert(suite.includes(priorScript), `nexus-workforce suite must keep prior renderer guard ${priorScript}`);
}

console.log("Nexus controlled low-risk renderer default-off wiring contract QA passed.");
