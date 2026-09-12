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

const docPath = path.join(root, "docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_READINESS_REVIEW.md");
assert(fs.existsSync(docPath), "docs/NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_READINESS_REVIEW.md must exist");

for (const parts of [
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_STATIC_QA.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_TEST_HARNESS_PLAN.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_FLAG_OFF_HARNESS_BROWSER_REGRESSION.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_OFF_HARNESS.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_WIRING_READINESS_REVIEW.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_WIRING_STATIC_QA.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_WIRING_PLAN.md"],
  ["docs", "NEXUS_LOW_RISK_INERT_RENDERER_PROTOTYPE_IMPLEMENTATION.md"],
  ["scripts", "nexus-low-risk-renderer-controlled-runtime-flag-off-harness-qa.js"],
  ["scripts", "nexus-low-risk-renderer-flag-off-harness-browser-regression-qa.js"],
  ["scripts", "nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-plan-qa.js"],
  ["scripts", "nexus-low-risk-renderer-controlled-runtime-flag-on-static-qa.js"]
]) {
  assert(exists(...parts), `${parts.join("/")} must exist`);
}

const doc = read("docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_READINESS_REVIEW.md");
const app = read("public", "app.js");
const index = read("public", "index.html");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "## 1. Purpose and Scope",
  "## 2. Current Safety Posture",
  "## 3. Relationship to Phases 12T through 12W",
  "## 4. Readiness Scorecard",
  "## 5. Hard Preconditions Before Phase 12Y",
  "## 6. Minimum Acceptable Phase 12Y Implementation Shape",
  "## 7. Phase 12Y Acceptance Criteria",
  "## 8. Remaining Risks",
  "## 9. Decision",
  "## 10. Required QA Before and After Phase 12Y",
  "## 11. Non-Goals",
  "## 12. Recommended Next Phase"
], "Phase 12X doc");

assertIncludes(doc, [
  "Controlled Runtime Flag-On Harness Readiness Review",
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
  "Phase 12Y"
], "Phase 12X doc safety language");

assertIncludes(doc, [
  "Default-off preservation",
  "Local/test-only activation design",
  "Eligibility guard maturity",
  "Renderer inertness",
  "Runtime harness safety",
  "`index.html` script prevention",
  "Visible UI prevention",
  "DOM rendering prevention",
  "Unsafe API prevention",
  "Click-handler prevention",
  "Execution-language prevention",
  "Excluded fixture protection",
  "Planner metadata execution prevention",
  "selectedToolId protection",
  "agentAction protection",
  "Provider handoff boundary",
  "Permission boundary",
  "Transaction boundary",
  "Health/emergency boundary",
  "Review options safety",
  "Browser regression evidence",
  "all-safe QA posture"
], "Phase 12X scorecard");

assert.match(doc, /Decision: \*\*Option A - Ready for Phase 12Y/i, "decision section must choose readiness for Phase 12Y");
assert.match(doc, /ready only for local\/test-only metadata\/no-op harness implementation/i, "decision must narrow readiness to local/test-only metadata/no-op");
assert.match(doc, /not ready for visible runtime UI/i, "decision must reject visible runtime UI readiness");
assert.match(doc, /Phase 12Y - Controlled Runtime Flag-On Test Harness Implementation/i, "recommendation must name Phase 12Y");

assert(!index.includes("nexus-low-risk-inert-renderer"), "public/index.html must not load the low-risk inert renderer");
assert(!index.match(/<script[^>]+nexus-low-risk/i), "public/index.html must not include a low-risk renderer script tag");
assert(!app.includes("data-low-risk-renderer"), "public/app.js must not add visible low-risk renderer containers");
assert(!index.includes("data-low-risk-renderer"), "public/index.html must not add visible low-risk renderer containers");
assert(!app.includes("renderNexusLowRiskInertPreview"), "public/app.js must not invoke the low-risk renderer");
assert(!app.includes("buildNexusLowRiskInertRendererPrototype"), "public/app.js must not invoke the renderer prototype builder");
assert(!app.includes("import(\"/nexus-low-risk"), "public/app.js must not dynamically import low-risk renderer modules");
assert(!app.includes("import('/nexus-low-risk"), "public/app.js must not dynamically import low-risk renderer modules");

assert(app.includes("function evaluateNexusLowRiskRendererRuntimeHarness"), "public/app.js must still contain the Phase 12T flag-off harness");
assert(app.includes('reason: "flag_disabled"'), "public/app.js harness must default to flag_disabled when flag is off");

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

assert(packageJson.includes("\"qa:nexus-low-risk-renderer-controlled-runtime-flag-on-readiness-review\""), "package.json must expose qa:nexus-low-risk-renderer-controlled-runtime-flag-on-readiness-review");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-readiness-review-qa.js"), "nexus-workforce suite must include Phase 12X readiness review QA");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-static-qa.js"), "nexus-workforce suite must keep Phase 12W static QA");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-plan-qa.js"), "nexus-workforce suite must keep Phase 12V plan QA");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-flag-off-harness-qa.js"), "nexus-workforce suite must keep Phase 12T flag-off harness QA");
assert(suite.includes("scripts/nexus-low-risk-renderer-flag-off-harness-browser-regression-qa.js"), "nexus-workforce suite must keep Phase 12U browser regression QA");

console.log("Nexus low-risk renderer controlled runtime flag-on readiness review QA passed");
console.log("- Phase 12X readiness scorecard and decision are documented");
console.log("- index.html remains unwired and no renderer UI container was introduced");
console.log("- Phase 12Y is correctly limited to local/test-only metadata/no-op implementation");
