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

const docPath = path.join(root, "docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_STANDARD_USER_READINESS_REVIEW_BEFORE_VISIBLE_ACTIVATION.md");
assert(fs.existsSync(docPath), "Phase 13E readiness review doc must exist");

for (const parts of [
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_VISIBLE_UI_DESIGN_CONTRACT.md"],
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_INERT_DOM_PROTOTYPE_TEST_FIXTURE_ONLY.md"],
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_INERT_DOM_BROWSER_REGRESSION_AND_CONTRACT_ENFORCEMENT.md"],
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_TEST_ONLY_VISUAL_SNAPSHOT_FIXTURE.md"],
  ["test-fixtures", "nexus-controlled-low-risk-renderer-inert-card.snapshot.html"],
  ["scripts", "nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-implementation-qa.js"],
  ["scripts", "nexus-low-risk-renderer-controlled-runtime-flag-on-browser-regression-validation-qa.js"],
  ["scripts", "nexus-controlled-low-risk-renderer-visible-ui-design-contract-qa.js"],
  ["scripts", "nexus-controlled-low-risk-renderer-inert-dom-prototype-test-fixture-only-qa.js"],
  ["scripts", "nexus-controlled-low-risk-renderer-inert-dom-browser-regression-contract-enforcement-qa.js"],
  ["scripts", "nexus-controlled-low-risk-renderer-test-only-visual-snapshot-fixture-qa.js"]
]) {
  assert(exists(...parts), `${parts.join("/")} must exist`);
}

const doc = read("docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_STANDARD_USER_READINESS_REVIEW_BEFORE_VISIBLE_ACTIVATION.md");
const app = read("public", "app.js");
const index = read("public", "index.html");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "## 1. Purpose and Scope",
  "## 2. Relationship to Phases 12Y, 12Z, 13A, 13B, 13C, and 13D",
  "## 3. Current Completed Readiness Assessment",
  "## 4. Current Standard User Safety Posture",
  "## 5. What Remains Intentionally Inactive",
  "## 6. Mandatory Future Gates Before Visible Activation",
  "## 7. Allowed First Visible Phase Behavior",
  "## 8. Prohibited First Visible Phase Behavior",
  "## 9. Go/No-Go Assessment",
  "## 10. Remaining Risks",
  "## 11. Required QA Continuity"
], "Phase 13E doc");

assertIncludes(doc, [
  "not an activation phase",
  "Phase 12Y",
  "Phase 12Z",
  "Phase 13A",
  "Phase 13B",
  "Phase 13C",
  "Phase 13D",
  "metadata/no-op",
  "Standard User build remains unwired",
  "visible UI design contract",
  "injected document fixture",
  "test-only visual snapshot fixture",
  "demo-safety requirements"
], "completed readiness stack");

assertIncludes(doc, [
  "dedicated feature flag for visible standard-user low-risk rendering",
  "default-off posture",
  "explicit allowlist of safe categories",
  "no raw model HTML",
  "text-only DOM insertion",
  "review-only language",
  "no action buttons in the first visible phase",
  "no links/navigation in the first visible phase unless separately gated",
  "no provider handoff",
  "no permissions",
  "no execution",
  "dedicated browser regression QA",
  "dedicated standard-user manual browser validation",
  "push checkpoint before activation"
], "mandatory future gates");

assertIncludes(doc, [
  "Runtime harness readiness",
  "Browser unwired posture",
  "Visible UI design contract",
  "Inert DOM helper safety",
  "Snapshot fixture safety",
  "QA suite integration",
  "Go for next planning step: yes",
  "Go for visible Standard User activation now: no",
  "Phase 13F - Controlled Low-Risk Renderer Default-Off Visible Feature Flag Design"
], "readiness assessment");

assertIncludes(doc, [
  "action buttons",
  "links",
  "click handlers",
  "navigation",
  "provider handoff",
  "permission prompts",
  "network calls",
  "storage writes",
  "confirmation modals",
  "high-risk action behavior"
], "inactive/prohibited behaviors");

assert(!index.includes("nexus-controlled-low-risk-renderer-inert-card.snapshot.html"), "public/index.html must not reference Phase 13D fixture");
assert(!index.includes("data-nexus-renderer-mode"), "public/index.html must not include renderer root/output");
assert(!index.includes("controlled-low-risk-renderer"), "public/index.html must not include controlled renderer root");
assert(!index.match(/<script[^>]+nexus-low-risk/i), "public/index.html must not include low-risk renderer script");
assert(app.includes("function createNexusControlledLowRiskInertCardForTest"), "Phase 13B inert helper must remain present");

const declarationIndex = app.indexOf("function createNexusControlledLowRiskInertCardForTest");
assert(declarationIndex >= 0, "inert helper declaration must be found");
const afterDeclaration = app.slice(declarationIndex + "function createNexusControlledLowRiskInertCardForTest".length);
assert(!afterDeclaration.match(/createNexusControlledLowRiskInertCardForTest\s*\(/), "inert helper must not be invoked during startup/runtime flow");

assert(!app.includes("renderNexusLowRiskInertPreview"), "public/app.js must not invoke active renderer preview");
assert(!app.includes("buildNexusLowRiskInertRendererPrototype"), "public/app.js must not invoke renderer prototype builder");
assert(!app.includes("nexus-controlled-low-risk-renderer-inert-card.snapshot.html"), "public/app.js must not reference Phase 13D fixture");

for (const forbidden of [
  "data-standard-user-low-risk-renderer",
  "data-low-risk-renderer-root",
  "low-risk-renderer-root",
  "nexus-visible-low-risk-renderer"
]) {
  assert(!index.includes(forbidden), `public/index.html must not include renderer root marker: ${forbidden}`);
}

assert(packageJson.includes("\"qa:nexus-controlled-low-risk-renderer-standard-user-readiness-review-before-visible-activation\""), "package.json must expose Phase 13E QA alias");
assert(suite.includes("scripts/nexus-controlled-low-risk-renderer-standard-user-readiness-review-before-visible-activation-qa.js"), "nexus-workforce suite must include Phase 13E readiness guard");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-implementation-qa.js"), "nexus-workforce suite must keep Phase 12Y QA");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-browser-regression-validation-qa.js"), "nexus-workforce suite must keep Phase 12Z QA");
assert(suite.includes("scripts/nexus-controlled-low-risk-renderer-visible-ui-design-contract-qa.js"), "nexus-workforce suite must keep Phase 13A QA");
assert(suite.includes("scripts/nexus-controlled-low-risk-renderer-inert-dom-prototype-test-fixture-only-qa.js"), "nexus-workforce suite must keep Phase 13B QA");
assert(suite.includes("scripts/nexus-controlled-low-risk-renderer-inert-dom-browser-regression-contract-enforcement-qa.js"), "nexus-workforce suite must keep Phase 13C QA");
assert(suite.includes("scripts/nexus-controlled-low-risk-renderer-test-only-visual-snapshot-fixture-qa.js"), "nexus-workforce suite must keep Phase 13D QA");

console.log("Nexus controlled low-risk renderer Standard User readiness review QA passed");
console.log("- readiness review documents completed Phase 12Y through 13D gates and mandatory future gates");
console.log("- Standard User index remains unwired and the inert helper is not invoked during startup");
console.log("- visible activation remains no-go until a default-off feature flag, browser regression QA, and manual validation are complete");
