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

const docPath = path.join(root, "docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_VISIBLE_UI_DESIGN_CONTRACT.md");
assert(fs.existsSync(docPath), "docs/NEXUS_CONTROLLED_LOW_RISK_RENDERER_VISIBLE_UI_DESIGN_CONTRACT.md must exist");

for (const parts of [
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_TEST_HARNESS_IMPLEMENTATION.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_BROWSER_REGRESSION_VALIDATION.md"],
  ["docs", "NEXUS_LOW_RISK_SUGGESTION_DISPLAY_PLAN.md"],
  ["scripts", "nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-implementation-qa.js"],
  ["scripts", "nexus-low-risk-renderer-controlled-runtime-flag-on-browser-regression-validation-qa.js"]
]) {
  assert(exists(...parts), `${parts.join("/")} must exist`);
}

const doc = read("docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_VISIBLE_UI_DESIGN_CONTRACT.md");
const app = read("public", "app.js");
const index = read("public", "index.html");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "## 1. Purpose and Scope",
  "## 2. Relationship to Phases 12Y and 12Z",
  "## 3. Why Visible Rendering Is Still Not Enabled",
  "## 4. Allowed Future Card Fields",
  "## 5. Prohibited Fields and Actions",
  "## 6. Required Safety Language",
  "## 7. DOM Safety Rules",
  "## 8. Click Handler Restrictions",
  "## 9. Navigation Restrictions",
  "## 10. Provider, Permission, and Action Exclusions",
  "## 11. Required QA Gates Before Visible Implementation",
  "## 12. Non-Goals",
  "## 13. Recommended Next Phase"
], "Phase 13A design contract");

assertIncludes(doc, [
  "Controlled Low-Risk Renderer Visible UI Design Contract",
  "design-contract phase",
  "not a feature activation phase",
  "Learning",
  "Training",
  "Jobs",
  "Marketplace Review",
  "Agriculture Help",
  "`category`",
  "`displayTitle`",
  "`summary`",
  "`riskTier`",
  "`allowedSurface`",
  "`requiresConfirmation`",
  "`executionAllowed`",
  "review-only",
  "No action has been taken.",
  "Any future action must be separate, explicit, confirmed, and gated."
], "Phase 13A allowed card contract");

assertIncludes(doc, [
  "No direct call/message/location/camera/payment/purchase/emergency/health mutation behavior.",
  "No provider handoff.",
  "No permission prompt.",
  "No form submission.",
  "No user-data transmission.",
  "No account changes.",
  "No external navigation unless separately approved by a future gated phase.",
  "No automatic routing.",
  "No hidden execution.",
  "No uncontrolled click handlers.",
  "No DOM insertion from raw or untrusted model text.",
  "no visible runtime UI when flag off",
  "no DOM rendering when flag off",
  "no renderer invocation when flag off",
  "no click handler that executes actions",
  "no provider handoff",
  "no browser permissions",
  "no call execution",
  "no message execution",
  "no camera opening",
  "no location sharing",
  "no transaction",
  "no emergency dispatch claim",
  "planner metadata is not execution authority",
  "selectedToolId must not directly execute",
  "agentAction must not directly execute",
  "missingInputs must block execution",
  "restricted actions must not execute",
  "provider_handoff_only must not mean execution happened",
  "confirmationRequired must be honored"
], "Phase 13A prohibition contract");

assertIncludes(doc, [
  "design contract QA must pass",
  "Phase 12Y harness implementation QA must pass",
  "Phase 12Z browser regression QA must pass",
  "Nexus Workforce suite must pass",
  "all-safe suite must pass",
  "Phase 13B - Controlled Low-Risk Renderer Inert DOM Prototype Behind Test Fixture Only"
], "Phase 13A QA and next phase");

assert(!index.includes("nexus-low-risk-inert-renderer"), "public/index.html must not load the low-risk inert renderer");
assert(!index.match(/<script[^>]+nexus-low-risk/i), "public/index.html must not include a low-risk renderer script tag");
assert(!index.includes("data-low-risk-renderer"), "public/index.html must not include low-risk renderer containers");
assert(!app.includes("data-low-risk-renderer"), "public/app.js must not include low-risk renderer containers");
assert(!app.includes("controlled-low-risk-renderer-card"), "public/app.js must not create visible controlled renderer cards");
assert(!index.includes("controlled-low-risk-renderer-card"), "public/index.html must not create visible controlled renderer cards");
assert(!app.includes("renderNexusLowRiskInertPreview"), "public/app.js must not invoke renderer preview");
assert(!app.includes("buildNexusLowRiskInertRendererPrototype"), "public/app.js must not invoke renderer prototype builder");
assert(!app.includes("import(\"/nexus-low-risk"), "public/app.js must not dynamically import low-risk renderer modules");
assert(!app.includes("import('/nexus-low-risk"), "public/app.js must not dynamically import low-risk renderer modules");
assert(!/addEventListener\([^)]*low-risk/i.test(app), "public/app.js must not register low-risk renderer click handlers");
assert(!/onclick[\s\S]{0,160}low-risk/i.test(app), "public/app.js must not add low-risk renderer onclick handlers");
assert(app.includes("function evaluateNexusLowRiskRendererRuntimeHarness"), "Phase 12Y harness must remain present");
assert(app.includes("localTestFlagOn"), "Phase 12Y harness must remain local/test-only");
assert(app.includes("metadata_only"), "Phase 12Y harness must remain metadata/no-op only");

assert(packageJson.includes("\"qa:nexus-controlled-low-risk-renderer-visible-ui-design-contract\""), "package.json must expose qa:nexus-controlled-low-risk-renderer-visible-ui-design-contract");
assert(suite.includes("scripts/nexus-controlled-low-risk-renderer-visible-ui-design-contract-qa.js"), "nexus-workforce suite must include Phase 13A design contract QA");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-implementation-qa.js"), "nexus-workforce suite must keep Phase 12Y implementation QA");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-browser-regression-validation-qa.js"), "nexus-workforce suite must keep Phase 12Z browser regression QA");

console.log("Nexus controlled low-risk renderer visible UI design contract QA passed");
console.log("- Phase 13A contract defines allowed fields, prohibited actions, and safety copy");
console.log("- Standard User index/app remain unwired to visible low-risk renderer UI");
console.log("- Phase 12Y metadata/no-op harness and Phase 12Z browser-regression posture remain guarded");
