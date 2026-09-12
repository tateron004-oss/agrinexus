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

const docName = "NEXUS_CONTROLLED_LOW_RISK_RENDERER_HIDDEN_STANDARD_USER_MOUNT_POINT_CONTRACT.md";
const scriptName = "nexus-controlled-low-risk-renderer-hidden-standard-user-mount-point-contract-qa.js";
const mountId = "nexus-controlled-low-risk-renderer-root";

assert(exists("docs", docName), "Phase 13H hidden Standard User mount point contract doc must exist");

for (const parts of [
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_VISIBLE_UI_DESIGN_CONTRACT.md"],
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_INERT_DOM_PROTOTYPE_TEST_FIXTURE_ONLY.md"],
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_INERT_DOM_BROWSER_REGRESSION_AND_CONTRACT_ENFORCEMENT.md"],
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_TEST_ONLY_VISUAL_SNAPSHOT_FIXTURE.md"],
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_STANDARD_USER_READINESS_REVIEW_BEFORE_VISIBLE_ACTIVATION.md"],
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_DEFAULT_OFF_VISIBLE_FEATURE_FLAG_DESIGN.md"],
  ["docs", "NEXUS_STANDARD_USER_MANUAL_BROWSER_VALIDATION_AFTER_RENDERER_PRE_ACTIVATION_STACK.md"],
  ["scripts", "nexus-controlled-low-risk-renderer-visible-ui-design-contract-qa.js"],
  ["scripts", "nexus-controlled-low-risk-renderer-inert-dom-prototype-test-fixture-only-qa.js"],
  ["scripts", "nexus-controlled-low-risk-renderer-inert-dom-browser-regression-contract-enforcement-qa.js"],
  ["scripts", "nexus-controlled-low-risk-renderer-test-only-visual-snapshot-fixture-qa.js"],
  ["scripts", "nexus-controlled-low-risk-renderer-standard-user-readiness-review-before-visible-activation-qa.js"],
  ["scripts", "nexus-controlled-low-risk-renderer-default-off-visible-feature-flag-design-qa.js"]
]) {
  assert(exists(...parts), `${parts.join("/")} must exist before Phase 13H mount point contract`);
}

const doc = read("docs", docName);
const app = read("public", "app.js");
const index = read("public", "index.html");
const server = read("server.js");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "# Nexus Controlled Low-Risk Renderer Hidden Standard User Mount Point Contract",
  "## 1. Purpose and Scope",
  "## 2. Relationship to Prior Renderer Phases",
  "## 3. Current Phase Decision",
  "## 4. Future Mount Point Contract",
  "## 5. Future Required Gates",
  "## 6. DOM Safety Rules",
  "## 7. Explicitly Prohibited Behavior",
  "## 8. Standard User Demo Posture",
  "## 9. QA Expectations",
  "## 10. Recommended Next Phase"
], "Phase 13H doc sections");

assertIncludes(doc, [
  mountId,
  "contract and QA guard phase only",
  "does not add the mount point to `public/index.html`",
  "does not wire the renderer into `public/app.js`",
  "does not activate the default-off visible feature flag",
  "does not change Standard User runtime behavior",
  "actual Standard User DOM mount remains absent until a later explicit implementation phase"
], "Phase 13H no-runtime-change scope");

assertIncludes(doc, [
  "absent by default until a future explicit implementation phase",
  "hidden and default-empty unless all renderer gates pass",
  "must not render anything on page load by itself",
  "must not become toggleable through query parameters",
  "must not become toggleable through `localStorage`",
  "must not become toggleable through `sessionStorage`",
  "must not become toggleable through user-controlled DOM edits",
  "enableControlledLowRiskRendererVisibleUi === true",
  "missing, false, null, malformed, or a truthy string"
], "future mount point contract");

assertIncludes(doc, [
  "category is explicitly allowlisted",
  "low-risk only",
  "Execution is false",
  "Provider handoff is false",
  "Permission request is false",
  "Navigation is false",
  "text-only DOM insertion",
  "Raw HTML is rejected",
  "No action has been taken"
], "future required renderer gates");

assertIncludes(doc, [
  "Action buttons",
  "External links",
  "Navigation links",
  "Click handlers",
  "Network calls",
  "Storage writes",
  "Confirmation modals",
  "Permission prompts",
  "Provider handoff",
  "Native bridge calls",
  "Route changes",
  "Workflow auto-open behavior",
  "Execution, staging, or dispatch behavior",
  "visible review-only rendering state"
], "DOM safety rules");

assertIncludes(doc, [
  "`selectedToolId`",
  "`agentAction`",
  "`plannedActions`",
  "`policyDecision`",
  "`sessionMemory`",
  "must not unlock provider, call, message, payment, location, camera, marketplace transaction, account/profile, health, telehealth, emergency, identity, or native bridge behavior"
], "metadata non-authority contract");

assertIncludes(doc, [
  "No visible controlled low-risk renderer mount point",
  "No hidden/debug-only metadata exposed",
  "No visible preview card generated by the new mount contract",
  "No route, permission, provider, confirmation, or execution changes"
], "Standard User demo posture");

assertHiddenMountPointOnly(index);
assert(!index.includes("data-nexus-controlled-low-risk-renderer-root"), "public/index.html must not include future controlled low-risk renderer data root");
assert(!index.match(/<script[^>]+nexus-low-risk/i), "public/index.html must not include low-risk renderer script tags");
assert(!index.includes("data-nexus-renderer-mode=\"inert\""), "public/index.html must not include rendered inert card output");

assert(!app.includes(`getElementById("${mountId}")`), "public/app.js must not query the future mount point by id");
assert(!app.includes(`getElementById('${mountId}')`), "public/app.js must not query the future mount point by id");
assert(!app.includes(`querySelector("#${mountId}")`), "public/app.js must not query the future mount point by selector");
assert(!app.includes(`querySelector('#${mountId}')`), "public/app.js must not query the future mount point by selector");
assert(!app.includes("data-nexus-controlled-low-risk-renderer-root"), "public/app.js must not query future controlled low-risk renderer data root");
assert(!app.includes("appendChild(createNexusControlledLowRiskInertCardForTest"), "public/app.js must not append inert test cards into runtime DOM");
assert(!app.includes("renderNexusLowRiskInertPreview"), "public/app.js must not invoke active renderer preview");
assert(!app.includes("buildNexusLowRiskInertRendererPrototype"), "public/app.js must not invoke renderer prototype builder");

assert(!server.includes(mountId), "server.js must not expose or reference the future renderer mount point");
assert(!server.includes("enableControlledLowRiskRendererVisibleUi"), "server.js must not expose the future visible feature flag in Phase 13H");

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

assert(packageJson.includes(`"qa:nexus-controlled-low-risk-renderer-hidden-standard-user-mount-point-contract": "node scripts/${scriptName}"`), "package.json must expose Phase 13H QA alias");
assert(suite.includes(`scripts/${scriptName}`), "nexus-workforce suite must include Phase 13H hidden mount point contract guard");

for (const qaScript of [
  "scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-implementation-qa.js",
  "scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-browser-regression-validation-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-visible-ui-design-contract-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-inert-dom-prototype-test-fixture-only-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-inert-dom-browser-regression-contract-enforcement-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-test-only-visual-snapshot-fixture-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-standard-user-readiness-review-before-visible-activation-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-default-off-visible-feature-flag-design-qa.js"
]) {
  assert(suite.includes(qaScript), `nexus-workforce suite must keep prior renderer guard: ${qaScript}`);
}

console.log("Nexus controlled low-risk renderer hidden Standard User mount point contract QA passed");
console.log("- Phase 13H documents the future hidden mount point contract without adding the mount point");
console.log("- Standard User index/app/server remain unwired to renderer mount point activation");
console.log("- prior controlled low-risk renderer guards remain included in the Nexus Workforce suite");
