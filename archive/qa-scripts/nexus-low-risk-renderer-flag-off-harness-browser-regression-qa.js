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

const docPath = path.join(root, "docs", "NEXUS_LOW_RISK_RENDERER_FLAG_OFF_HARNESS_BROWSER_REGRESSION.md");
assert(fs.existsSync(docPath), "docs/NEXUS_LOW_RISK_RENDERER_FLAG_OFF_HARNESS_BROWSER_REGRESSION.md must exist");

for (const parts of [
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_OFF_HARNESS.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_WIRING_READINESS_REVIEW.md"],
  ["scripts", "nexus-low-risk-renderer-controlled-runtime-flag-off-harness-qa.js"]
]) {
  assert(exists(...parts), `${parts.join("/")} must exist`);
}

const doc = read("docs", "NEXUS_LOW_RISK_RENDERER_FLAG_OFF_HARNESS_BROWSER_REGRESSION.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

for (const section of [
  "## 1. Purpose and Scope",
  "## 2. Build and Browser Environment",
  "## 3. Standard User Launch Result",
  "## 4. Low-Risk Prompt Results",
  "## 5. Excluded/High-Risk Prompt Results",
  "## 6. Review Options Result",
  "## 7. Static Safety Confirmation",
  "## 8. Regression Decision",
  "## 9. Non-Goals",
  "## 10. Recommended Next Phase"
]) {
  assert(doc.includes(section), `Phase 12U doc must include section: ${section}`);
}

for (const term of [
  "Flag-Off Harness Browser Regression Validation",
  "disabled by default",
  "flag disabled means render nothing",
  "eligibility false means render nothing",
  "flag enabled alone is not enough",
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
  "Phase 12V"
]) {
  assert(doc.includes(term), `Phase 12U doc must include required safety language: ${term}`);
}

for (const prompt of [
  "Help me find agriculture training",
  "Teach me how irrigation works",
  "Show me farm jobs",
  "Browse AgriTrade",
  "I need help with crop issues",
  "Call my doctor",
  "Text my farm worker",
  "Share my location",
  "Open my camera",
  "Buy this item on AgriTrade",
  "Contact the seller",
  "I need emergency help",
  "Start a telehealth visit"
]) {
  assert(doc.includes(prompt), `Phase 12U doc must document prompt: ${prompt}`);
}

for (const environmentTerm of [
  "Codex in-app browser",
  "Microsoft Windows 11 Home",
  "node server.js",
  "http://127.0.0.1:4182/",
  "Start as User",
  "88ce27072c7d67e3a6cc1b06b56c6c8de8a40c1a"
]) {
  assert(doc.includes(environmentTerm), `Phase 12U doc must include browser/build environment detail: ${environmentTerm}`);
}

assert.match(doc, /Phase 12T is browser-regression safe with the flag off/i, "Phase 12U doc must include regression decision");
assert(!index.includes("nexus-low-risk-inert-renderer"), "public/index.html must not load the low-risk inert renderer");
assert(!index.match(/<script[^>]+nexus-low-risk/i), "public/index.html must not include a low-risk renderer script tag");
assert(app.includes("function evaluateNexusLowRiskRendererRuntimeHarness"), "public/app.js must still contain the Phase 12T harness");
assert(!app.includes("renderNexusLowRiskInertPreview"), "public/app.js must not invoke the low-risk renderer");
assert(!app.includes("buildNexusLowRiskInertRendererPrototype"), "public/app.js must not invoke the renderer prototype builder");
assert(packageJson.includes("\"qa:nexus-low-risk-renderer-flag-off-harness-browser-regression\""), "package.json must expose qa:nexus-low-risk-renderer-flag-off-harness-browser-regression");
assert(suite.includes("scripts/nexus-low-risk-renderer-flag-off-harness-browser-regression-qa.js"), "nexus-workforce suite must include Phase 12U browser regression QA");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-flag-off-harness-qa.js"), "nexus-workforce suite must keep Phase 12T flag-off harness QA");

console.log("Nexus low-risk renderer flag-off harness browser regression QA passed");
console.log("- Phase 12U browser evidence and prompt cases are documented");
console.log("- index.html remains unwired to the low-risk renderer");
console.log("- Phase 12T harness remains no-op and covered by QA");
