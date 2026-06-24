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

const docPath = path.join(root, "docs", "NEXUS_LOW_RISK_INERT_RENDERER_FLAG_OFF_REGRESSION_QA.md");
assert(fs.existsSync(docPath), "docs/NEXUS_LOW_RISK_INERT_RENDERER_FLAG_OFF_REGRESSION_QA.md must exist");

const doc = read("docs", "NEXUS_LOW_RISK_INERT_RENDERER_FLAG_OFF_REGRESSION_QA.md");
const qaSource = read("scripts", "nexus-low-risk-inert-renderer-flag-off-regression-qa.js");
const flagSource = read("public", "nexus-low-risk-inert-renderer-flag.js");
const eligibilitySource = read("public", "nexus-low-risk-inert-renderer-eligibility.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

const flag = require(path.join(root, "public", "nexus-low-risk-inert-renderer-flag.js"));
const mapper = require(path.join(root, "public", "nexus-action-decision-mapper.js"));
const staged = require(path.join(root, "public", "nexus-staged-action-state.js"));
const renderer = require(path.join(root, "public", "nexus-staged-action-inert-renderer.js"));
const eligibility = require(path.join(root, "public", "nexus-low-risk-inert-renderer-eligibility.js"));

for (const section of [
  "## 1. Purpose and Scope",
  "## 2. Relationship to Phase 12L and 12M",
  "## 3. Flag-Off Regression Principle",
  "## 4. What Must Remain Unchanged",
  "## 5. Static Loading Checks",
  "## 6. Eligibility Default Checks",
  "## 7. Representative Prompt Coverage",
  "## 8. Standard User Behavior Preservation",
  "## 9. Safety Invariants",
  "## 10. Future Flag-On Testing Boundary",
  "## 11. Non-Goals"
]) {
  assert(doc.includes(section), `flag-off regression doc must include section: ${section}`);
}

for (const term of [
  "Low-Risk Inert Renderer Flag-Off Regression QA",
  "flag disabled by default",
  "NEXUS_LOW_RISK_INERT_RENDERER_ENABLED=false",
  "eligibility defaults false",
  "flag disabled makes eligible false",
  "no visible renderer exists",
  "no live module loading",
  "renderNexusLowRiskInertPreview",
  "public/nexus-low-risk-inert-renderer.js",
  "public/app.js",
  "public/index.html",
  "document.createElement",
  "addEventListener",
  "onclick",
  "location.href",
  "window.open",
  "navigator.geolocation",
  "getUserMedia",
  "tel:",
  "whatsapp",
  "telegram",
  "payment",
  "dispatch",
  "emergency dispatch",
  "no visible runtime UI",
  "no DOM rendering",
  "no click handlers",
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
  "Standard User visible behavior remains unchanged",
  "not ready for real execution",
  "Phase 12O"
]) {
  assert(`${doc}\n${qaSource}`.includes(term), `flag-off regression doc/QA must include required term: ${term}`);
}

assert.equal(flag.NEXUS_LOW_RISK_INERT_RENDERER_ENABLED, false, "NEXUS_LOW_RISK_INERT_RENDERER_ENABLED=false must remain default");
assert.equal(flag.isNexusLowRiskInertRendererEnabled(), false, "flag helper returns false by default");

function observePrompt(prompt) {
  const actionDecision = mapper.mapNexusPromptToActionDecision(prompt);
  const stagedActionState = staged.deriveNexusStagedActionState(actionDecision);
  const inertRenderModel = renderer.deriveNexusStagedActionRenderModel(stagedActionState, actionDecision);
  const eligibilityResult = eligibility.getNexusLowRiskInertRendererEligibility(actionDecision, stagedActionState, inertRenderModel);
  return { actionDecision, stagedActionState, inertRenderModel, eligibilityResult };
}

for (const prompt of [
  "Nexus, teach me how irrigation works",
  "Nexus, help me find agriculture training",
  "Nexus, show me farm jobs",
  "Nexus, browse AgriTrade",
  "Nexus, I need help with crop issues"
]) {
  const observed = observePrompt(prompt);
  assert.equal(observed.actionDecision.riskLevel, "low", `${prompt} remains low-risk metadata`);
  assert.equal(observed.stagedActionState.executionAllowed, false, `${prompt} staged state remains non-executing`);
  assert.equal(observed.inertRenderModel.executionAllowed, false, `${prompt} render model remains non-executing`);
  assert.equal(observed.inertRenderModel.domRenderingAllowed, false, `${prompt} render model does not authorize DOM rendering`);
  assert.equal(observed.eligibilityResult.eligible, false, `${prompt} eligibility remains false with flag disabled`);
  assert.equal(observed.eligibilityResult.reason, "flag_disabled", `${prompt} is blocked by disabled flag`);
  assert.equal(observed.eligibilityResult.visibleRenderingAuthorized, false, `${prompt} does not authorize visible rendering`);
}

for (const prompt of [
  "Nexus, call someone",
  "Nexus, send a message",
  "Nexus, find my location",
  "Nexus, use my camera",
  "Nexus, buy this item",
  "Nexus, I have an emergency"
]) {
  const observed = observePrompt(prompt);
  assert.notEqual(observed.actionDecision.riskLevel, "low", `${prompt} must not become low-risk`);
  assert.equal(observed.stagedActionState.executionAllowed, false, `${prompt} staged state remains non-executing`);
  assert.equal(observed.inertRenderModel.executionAllowed, false, `${prompt} render model remains non-executing`);
  assert.equal(observed.eligibilityResult.eligible, false, `${prompt} eligibility remains false with flag disabled`);
  assert.equal(observed.eligibilityResult.visibleRenderingAuthorized, false, `${prompt} does not authorize visible rendering`);
}

assert.equal(
  eligibility.getNexusLowRiskInertRendererEligibility(
    mapper.mapNexusPromptToActionDecision("Nexus, teach me how irrigation works"),
    staged.deriveNexusStagedActionState(mapper.mapNexusPromptToActionDecision("Nexus, teach me how irrigation works")),
    renderer.deriveNexusStagedActionRenderModel(
      staged.deriveNexusStagedActionState(mapper.mapNexusPromptToActionDecision("Nexus, teach me how irrigation works")),
      mapper.mapNexusPromptToActionDecision("Nexus, teach me how irrigation works")
    )
  ).eligible,
  false,
  "eligibility defaults false for otherwise safe low-risk fixture"
);

assert(!exists("public", "nexus-low-risk-inert-renderer.js"), "no visible renderer exists in this phase");
for (const runtimeSource of [app, index]) {
  for (const forbidden of [
    "nexus-low-risk-inert-renderer-flag.js",
    "nexus-low-risk-inert-renderer-eligibility.js",
    "nexus-low-risk-inert-renderer.js",
    "renderNexusLowRiskInertPreview"
  ]) {
    assert(!runtimeSource.includes(forbidden), `Standard User runtime must not load/reference ${forbidden}`);
  }
}

for (const [label, source] of [
  ["flag helper", flagSource],
  ["eligibility helper", eligibilitySource]
]) {
  for (const forbidden of [
    "document.createElement",
    ".addEventListener(",
    "onclick",
    "location.href",
    "window.open",
    "navigator.geolocation",
    "getUserMedia",
    "tel:",
    "whatsapp",
    "telegram",
    "payment",
    "emergency dispatch"
  ]) {
    assert(!source.toLowerCase().includes(forbidden.toLowerCase()), `${label} must not introduce ${forbidden}`);
  }
}

assert(packageJson.includes("\"qa:nexus-low-risk-inert-renderer-flag-off-regression\""), "package.json must expose qa:nexus-low-risk-inert-renderer-flag-off-regression");
assert(suite.includes("scripts/nexus-low-risk-inert-renderer-flag-off-regression-qa.js"), "nexus-workforce suite should include flag-off regression QA");

console.log("Nexus low-risk inert renderer flag-off regression QA passed");
console.log("- flag and eligibility default off/false");
console.log("- representative low-risk and excluded prompt chains authorize no visible rendering while flag is disabled");
console.log("- Standard User runtime does not load low-risk inert renderer flag, eligibility, or renderer modules");

