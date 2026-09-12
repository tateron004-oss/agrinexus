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

const docPath = path.join(root, "docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_WIRING_READINESS_REVIEW.md");
assert(fs.existsSync(docPath), "docs/NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_WIRING_READINESS_REVIEW.md must exist");

for (const parts of [
  ["docs", "NEXUS_LOW_RISK_INERT_RENDERER_PROTOTYPE_PLAN.md"],
  ["docs", "NEXUS_LOW_RISK_INERT_RENDERER_FLAG_GUARD.md"],
  ["docs", "NEXUS_LOW_RISK_INERT_RENDERER_ELIGIBILITY_GUARD.md"],
  ["docs", "NEXUS_LOW_RISK_INERT_RENDERER_FLAG_OFF_REGRESSION_QA.md"],
  ["docs", "NEXUS_LOW_RISK_INERT_RENDERER_PROTOTYPE_IMPLEMENTATION.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_BROWSER_VALIDATION.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_WIRING_PLAN.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_WIRING_STATIC_QA.md"],
  ["public", "nexus-low-risk-inert-renderer.js"],
  ["public", "nexus-low-risk-inert-renderer-flag.js"],
  ["public", "nexus-low-risk-inert-renderer-eligibility.js"],
  ["scripts", "nexus-low-risk-renderer-controlled-runtime-wiring-static-qa.js"]
]) {
  assert(exists(...parts), `${parts.join("/")} must exist`);
}

const doc = read("docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_WIRING_READINESS_REVIEW.md");
const app = read("public", "app.js");
const index = read("public", "index.html");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

for (const section of [
  "## 1. Purpose and Scope",
  "## 2. Current System State",
  "## 3. Review of Phase 12O through 12R Evidence",
  "## 4. Runtime Wiring Readiness Scorecard",
  "## 5. Hard Preconditions Before Any Runtime Wiring",
  "## 6. Minimum Future Wiring Design If Approved Later",
  "## 7. Risks Remaining",
  "## 8. Decision",
  "## 9. Required QA Before Phase 12T",
  "## 10. Non-Goals",
  "## 11. Recommended Next Phase"
]) {
  assert(doc.includes(section), `readiness review doc must include section: ${section}`);
}

for (const term of [
  "Controlled Runtime Wiring Readiness Review",
  "disabled by default",
  "flag disabled means render nothing",
  "eligibility false means render nothing",
  "flag enabled alone is not enough",
  "low risk only",
  "suggestion_only",
  "navigation_only",
  "no visible runtime UI when flag off",
  "no DOM rendering when flag off",
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
  "Phase 12T"
]) {
  assert(doc.includes(term), `readiness review doc must include required safety language: ${term}`);
}

for (const category of [
  "Flag guard maturity",
  "Eligibility guard maturity",
  "Renderer inertness",
  "Runtime load prevention",
  "Standard User flag-off preservation",
  "Browser validation evidence",
  "Static QA coverage",
  "Excluded/high-risk prompt protection",
  "Unsafe API prevention",
  "Planner metadata execution prevention",
  "Review options safety",
  "Provider handoff boundary protection",
  "Permission boundary protection",
  "Transaction boundary protection",
  "Health/emergency boundary protection",
  "Console/browser stability",
  "Documentation completeness",
  "all-safe QA posture"
]) {
  assert(doc.includes(category), `scorecard must include category: ${category}`);
}

assert.match(doc, /Decision:\s+Ready for Phase 12T/i, "decision section must name Phase 12T readiness");
assert.match(doc, /Phase 12T - Controlled Runtime Wiring Flag-Off Harness/i, "recommended next phase must be named");

for (const forbidden of [
  "nexus-low-risk-inert-renderer",
  "renderNexusLowRiskInertPreview",
  "buildNexusLowRiskInertRendererPrototype",
  "import(\"/nexus-low-risk",
  "import('/nexus-low-risk",
  "createElement(\"script\")",
  "createElement('script')"
]) {
  assert(!app.includes(forbidden), `public/app.js must not contain premature renderer wiring: ${forbidden}`);
}

assert(!index.includes("nexus-low-risk-inert-renderer"), "public/index.html must not load low-risk inert renderer");
assert(packageJson.includes("\"qa:nexus-low-risk-renderer-controlled-runtime-wiring-readiness-review\""), "package.json must expose qa:nexus-low-risk-renderer-controlled-runtime-wiring-readiness-review");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-wiring-readiness-review-qa.js"), "nexus-workforce suite must include readiness review QA");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-wiring-static-qa.js"), "nexus-workforce suite must continue to include Phase 12R static guard");

console.log("Nexus low-risk renderer controlled runtime wiring readiness review QA passed");
console.log("- readiness scorecard and Phase 12T decision are documented");
console.log("- Standard User app/index remain unwired to the low-risk renderer");
console.log("- Phase 12R static guard remains included in Nexus Workforce QA");
