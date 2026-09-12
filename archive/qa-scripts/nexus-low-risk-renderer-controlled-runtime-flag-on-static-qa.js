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

const docPath = path.join(root, "docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_STATIC_QA.md");
assert(fs.existsSync(docPath), "docs/NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_STATIC_QA.md must exist");

for (const parts of [
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_OFF_HARNESS.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_FLAG_OFF_HARNESS_BROWSER_REGRESSION.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_TEST_HARNESS_PLAN.md"],
  ["scripts", "nexus-low-risk-renderer-controlled-runtime-flag-off-harness-qa.js"],
  ["scripts", "nexus-low-risk-renderer-flag-off-harness-browser-regression-qa.js"],
  ["scripts", "nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-plan-qa.js"]
]) {
  assert(exists(...parts), `${parts.join("/")} must exist`);
}

const doc = read("docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_STATIC_QA.md");
const app = read("public", "app.js");
const index = read("public", "index.html");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "## 1. Purpose and Scope",
  "## 2. Current Default Flag-Off Posture",
  "## 3. Relationship to Phases 12T through 12V",
  "## 4. Static Guard Categories",
  "## 5. Local/Test-Only Activation Guard Rules",
  "## 6. Runtime File Guard Rules",
  "## 7. Harness Safety Rules",
  "## 8. Eligible Fixture Scope",
  "## 9. Excluded Fixture Scope",
  "## 10. Unsafe API and Language Guards",
  "## 11. Required Fixture Behavior for Future Implementation",
  "## 12. Acceptance Criteria",
  "## 13. Non-Goals",
  "## 14. Recommended Next Phase"
], "Phase 12W doc");

assertIncludes(doc, [
  "Controlled Runtime Flag-On Harness Static QA",
  "disabled by default",
  "flag disabled means render nothing",
  "eligibility false means render nothing",
  "flag enabled alone is not enough",
  "local/test-only",
  "low risk only",
  "suggestion_only",
  "navigation_only",
  "no visible runtime UI when flag off",
  "no DOM rendering when flag off",
  "no renderer invocation when flag off",
  "no click handlers that execute",
  "no live execution",
  "no provider handoff",
  "no browser permissions",
  "no navigation",
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
  "confirmationRequired must be honored",
  "Standard User visible behavior remains unchanged when flag off",
  "not ready for real execution",
  "Phase 12X"
], "Phase 12W doc safety language");

assertIncludes(doc, [
  "learning",
  "jobs",
  "marketplace browse/review only",
  "agriculture support review only",
  "suggestion_preview",
  "review_option",
  "informational_response",
  "communications/call",
  "health/telehealth",
  "marketplace transaction",
  "seller contact",
  "job application submission",
  "medium risk",
  "high risk",
  "restricted risk"
], "Phase 12W doc fixture scope");

assert.match(doc, /Phase 12X - Controlled Runtime Flag-On Harness Readiness Review/i, "Phase 12W doc must recommend Phase 12X readiness review");
assert.match(doc, /does not implement the flag-on harness/i, "Phase 12W doc must keep implementation out of scope");

assert(!index.includes("nexus-low-risk-inert-renderer"), "public/index.html must not load the low-risk inert renderer");
assert(!index.match(/<script[^>]+nexus-low-risk/i), "public/index.html must not include a low-risk renderer script tag");
assert(!app.includes("data-low-risk-renderer"), "public/app.js must not add visible low-risk renderer containers");
assert(!index.includes("data-low-risk-renderer"), "public/index.html must not add visible low-risk renderer containers");

assert(app.includes("function evaluateNexusLowRiskRendererRuntimeHarness"), "public/app.js must still contain the Phase 12T flag-off harness");
assert(app.includes('reason: "flag_disabled"'), "public/app.js harness must default to flag_disabled when flag is off");
assert(!app.includes("renderNexusLowRiskInertPreview"), "public/app.js must not invoke the low-risk renderer");
assert(!app.includes("buildNexusLowRiskInertRendererPrototype"), "public/app.js must not invoke the renderer prototype builder");
assert(!app.includes("import(\"/nexus-low-risk"), "public/app.js must not dynamically import low-risk renderer modules");
assert(!app.includes("import('/nexus-low-risk"), "public/app.js must not dynamically import low-risk renderer modules");

const harnessStart = app.indexOf("function evaluateNexusLowRiskRendererRuntimeHarness");
const harnessEnd = app.indexOf("\nfunction buildLowRiskAgentActionSuggestion", harnessStart);
assert(harnessStart >= 0 && harnessEnd > harnessStart, "must be able to isolate the Phase 12T harness source");
const harnessSource = app.slice(harnessStart, harnessEnd);
for (const forbidden of [
  "window.open",
  "location.href",
  "navigator.geolocation",
  "getUserMedia",
  "fetch(",
  "XMLHttpRequest",
  "tel:",
  "whatsapp",
  "telegram",
  "payment",
  "dispatch",
  "emergency dispatch",
  "addEventListener",
  "onclick"
]) {
  assert(!harnessSource.toLowerCase().includes(forbidden.toLowerCase()), `Phase 12T harness must not include unsafe API or hook: ${forbidden}`);
}

assert(packageJson.includes("\"qa:nexus-low-risk-renderer-controlled-runtime-flag-on-static\""), "package.json must expose qa:nexus-low-risk-renderer-controlled-runtime-flag-on-static");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-static-qa.js"), "nexus-workforce suite must include Phase 12W static QA");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-plan-qa.js"), "nexus-workforce suite must keep Phase 12V plan QA");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-flag-off-harness-qa.js"), "nexus-workforce suite must keep Phase 12T flag-off harness QA");
assert(suite.includes("scripts/nexus-low-risk-renderer-flag-off-harness-browser-regression-qa.js"), "nexus-workforce suite must keep Phase 12U browser regression QA");

console.log("Nexus low-risk renderer controlled runtime flag-on static QA passed");
console.log("- Phase 12W static guard categories and safety language are documented");
console.log("- index.html remains unwired and no renderer UI container was introduced");
console.log("- Phase 12X is correctly recommended as readiness review before implementation");
