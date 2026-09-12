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
  const mountId = "nexus-controlled-low-risk-renderer-root";
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

const docPath = path.join(root, "docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_TEST_ONLY_VISUAL_SNAPSHOT_FIXTURE.md");
const fixturePath = path.join(root, "test-fixtures", "nexus-controlled-low-risk-renderer-inert-card.snapshot.html");
assert(fs.existsSync(docPath), "Phase 13D documentation must exist");
assert(fs.existsSync(fixturePath), "Phase 13D test-only snapshot fixture must exist");

for (const parts of [
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_VISIBLE_UI_DESIGN_CONTRACT.md"],
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_INERT_DOM_PROTOTYPE_TEST_FIXTURE_ONLY.md"],
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_INERT_DOM_BROWSER_REGRESSION_AND_CONTRACT_ENFORCEMENT.md"],
  ["scripts", "nexus-controlled-low-risk-renderer-visible-ui-design-contract-qa.js"],
  ["scripts", "nexus-controlled-low-risk-renderer-inert-dom-prototype-test-fixture-only-qa.js"],
  ["scripts", "nexus-controlled-low-risk-renderer-inert-dom-browser-regression-contract-enforcement-qa.js"]
]) {
  assert(exists(...parts), `${parts.join("/")} must exist`);
}

const doc = read("docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_TEST_ONLY_VISUAL_SNAPSHOT_FIXTURE.md");
const fixture = read("test-fixtures", "nexus-controlled-low-risk-renderer-inert-card.snapshot.html");
const app = read("public", "app.js");
const index = read("public", "index.html");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "## 1. Purpose and Scope",
  "## 2. Relationship to Phases 12Y, 12Z, 13A, 13B, and 13C",
  "## 3. Fixture Location and Loading Restrictions",
  "## 4. What the Snapshot May Show",
  "## 5. What the Snapshot Must Not Include",
  "## 6. Standard User Safety Posture",
  "## 7. QA Coverage",
  "## 8. Required Future Gates",
  "## 9. Non-Goals",
  "## 10. Recommended Next Phase"
], "Phase 13D doc");

assertIncludes(doc, [
  "test-only visual snapshot fixture",
  "not a production UI activation phase",
  "test-fixtures/nexus-controlled-low-risk-renderer-inert-card.snapshot.html",
  "outside `public/`",
  "not referenced by `public/index.html`",
  "data-nexus-renderer-mode=\"inert\"",
  "data-execution-allowed=\"false\"",
  "data-provider-handoff=\"false\"",
  "data-permission-request=\"false\"",
  "Phase 13E - Controlled Low-Risk Renderer Visual Snapshot Browser Review"
], "Phase 13D doc contract");

assertIncludes(fixture, [
  "<!doctype html>",
  "Test-only inert low-risk renderer snapshot",
  "data-nexus-renderer-mode=\"inert\"",
  "data-execution-allowed=\"false\"",
  "data-provider-handoff=\"false\"",
  "data-permission-request=\"false\"",
  "Learning",
  "Training",
  "Jobs",
  "Marketplace Review",
  "Agriculture Help",
  "Review only. No action has been taken. Any future action must be separate, explicit, confirmed, and gated."
], "Phase 13D fixture");

const sectionCount = (fixture.match(/<section\s/g) || []).length;
assert.equal(sectionCount, 5, "snapshot fixture must include exactly five inert review-only cards");
assert.equal((fixture.match(/data-nexus-renderer-mode="inert"/g) || []).length, 5, "each card must declare inert mode");
assert.equal((fixture.match(/data-execution-allowed="false"/g) || []).length, 5, "each card must declare execution disabled");
assert.equal((fixture.match(/data-provider-handoff="false"/g) || []).length, 5, "each card must declare provider handoff disabled");
assert.equal((fixture.match(/data-permission-request="false"/g) || []).length, 5, "each card must declare permission requests disabled");

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
  /\bfetch\s*\(/i,
  /\blocalStorage\b/i,
  /\bsessionStorage\b/i,
  /\bwindow\.location\b/i,
  /\bwindow\.open\b/i
]) {
  assert(!forbidden.test(fixture), `snapshot fixture must not contain forbidden pattern: ${forbidden}`);
}

for (const forbiddenTerm of [
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
  assert(!fixture.toLowerCase().includes(forbiddenTerm), `snapshot fixture must not include unsafe affordance text: ${forbiddenTerm}`);
}

assert(!index.includes("nexus-controlled-low-risk-renderer-inert-card.snapshot.html"), "public/index.html must not reference the Phase 13D fixture");
assert(!app.includes("nexus-controlled-low-risk-renderer-inert-card.snapshot.html"), "public/app.js must not reference the Phase 13D fixture");
assertHiddenMountPointOnly(index);
assert(!index.includes("data-nexus-renderer-mode=\"inert\""), "public/index.html must not include rendered inert card output");
assert(!index.match(/<script[^>]+nexus-low-risk/i), "public/index.html must not include low-risk renderer scripts");
assert(app.includes("function createNexusControlledLowRiskInertCardForTest"), "Phase 13B inert helper must remain present");
assert(!app.includes("renderNexusLowRiskInertPreview"), "public/app.js must not invoke active renderer preview");
assert(!app.includes("buildNexusLowRiskInertRendererPrototype"), "public/app.js must not invoke renderer prototype builder");

assert(packageJson.includes("\"qa:nexus-controlled-low-risk-renderer-test-only-visual-snapshot-fixture\""), "package.json must expose Phase 13D QA alias");
assert(suite.includes("scripts/nexus-controlled-low-risk-renderer-test-only-visual-snapshot-fixture-qa.js"), "nexus-workforce suite must include Phase 13D QA");
assert(suite.includes("scripts/nexus-controlled-low-risk-renderer-inert-dom-browser-regression-contract-enforcement-qa.js"), "nexus-workforce suite must keep Phase 13C QA");
assert(suite.includes("scripts/nexus-controlled-low-risk-renderer-inert-dom-prototype-test-fixture-only-qa.js"), "nexus-workforce suite must keep Phase 13B QA");
assert(suite.includes("scripts/nexus-controlled-low-risk-renderer-visible-ui-design-contract-qa.js"), "nexus-workforce suite must keep Phase 13A QA");

console.log("Nexus controlled low-risk renderer test-only visual snapshot fixture QA passed");
console.log("- snapshot fixture is test-only, static, inert, and outside public runtime loading");
console.log("- fixture contains no scripts, event attributes, buttons, links, forms, provider handoff, permissions, navigation, or execution affordances");
console.log("- Standard User index remains unwired and prior Phase 13A/13B/13C guards remain integrated");
