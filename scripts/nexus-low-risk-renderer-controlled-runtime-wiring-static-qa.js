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

function chain(prompt) {
  const actionDecision = mapper.mapNexusPromptToActionDecision(prompt);
  const stagedActionState = staged.deriveNexusStagedActionState(actionDecision);
  const inertRenderModel = inert.deriveNexusStagedActionRenderModel(stagedActionState, actionDecision);
  return { actionDecision, stagedActionState, inertRenderModel };
}

const docs = [
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_WIRING_STATIC_QA.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_WIRING_PLAN.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_BROWSER_VALIDATION.md"],
  ["docs", "NEXUS_LOW_RISK_INERT_RENDERER_PROTOTYPE_IMPLEMENTATION.md"]
];

for (const parts of docs) {
  assert(exists(...parts), `${parts.join("/")} must exist`);
}

for (const parts of [
  ["public", "nexus-low-risk-inert-renderer.js"],
  ["public", "nexus-low-risk-inert-renderer-flag.js"],
  ["public", "nexus-low-risk-inert-renderer-eligibility.js"],
  ["scripts", "nexus-low-risk-inert-renderer-prototype-implementation-qa.js"],
  ["scripts", "nexus-low-risk-renderer-controlled-runtime-wiring-plan-qa.js"]
]) {
  assert(exists(...parts), `${parts.join("/")} must exist`);
}

const doc = read("docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_WIRING_STATIC_QA.md");
const app = read("public", "app.js");
const index = read("public", "index.html");
const rendererSource = read("public", "nexus-low-risk-inert-renderer.js");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

const mapper = require(path.join(root, "public", "nexus-action-decision-mapper.js"));
const staged = require(path.join(root, "public", "nexus-staged-action-state.js"));
const inert = require(path.join(root, "public", "nexus-staged-action-inert-renderer.js"));
const renderer = require(path.join(root, "public", "nexus-low-risk-inert-renderer.js"));

for (const section of [
  "## 1. Purpose and Scope",
  "## 2. Current No-Wiring Posture",
  "## 3. Relationship to Phases 12O through 12Q",
  "## 4. Static Guard Categories",
  "## 5. Runtime Load Prevention Rules",
  "## 6. Unsafe API Rules",
  "## 7. Future Wiring Guard Readiness",
  "## 8. Required QA Behavior",
  "## 9. Acceptance Criteria",
  "## 10. Non-Goals",
  "## 11. Recommended Next Phase"
]) {
  assert(doc.includes(section), `static QA doc must include section: ${section}`);
}

for (const term of [
  "Controlled Runtime Wiring Static QA Scaffold",
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
  "Phase 12S"
]) {
  assert(doc.includes(term), `static QA doc must include required safety language: ${term}`);
}

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
  assert(!rendererSource.toLowerCase().includes(forbidden.toLowerCase()), `renderer must not include unsafe API or hook: ${forbidden}`);
}

assert.equal(typeof renderer.buildNexusLowRiskInertRendererPrototype, "function", "renderer must expose buildNexusLowRiskInertRendererPrototype");
assert.equal(typeof renderer.renderNexusLowRiskInertPreview, "function", "renderer must expose renderNexusLowRiskInertPreview");

const safeContext = { NEXUS_LOW_RISK_INERT_RENDERER_ENABLED: true, localSafe: true };
const flagEnabledOnlyContext = { NEXUS_LOW_RISK_INERT_RENDERER_ENABLED: true };

for (const prompt of [
  "Nexus, help me find agriculture training",
  "Nexus, teach me how irrigation works",
  "Nexus, show me farm jobs",
  "Nexus, browse AgriTrade",
  "Nexus, I need help with crop issues"
]) {
  const parts = chain(prompt);
  const flagOff = renderer.renderNexusLowRiskInertPreview(parts.actionDecision, parts.stagedActionState, parts.inertRenderModel);
  assert.equal(flagOff.active, false, `${prompt} must return nothing with flag disabled`);
  assert.equal(flagOff.card, null, `${prompt} must not include card with flag disabled`);

  const flagOnly = renderer.renderNexusLowRiskInertPreview(parts.actionDecision, parts.stagedActionState, parts.inertRenderModel, flagEnabledOnlyContext);
  assert.equal(flagOnly.active, false, `${prompt} must prove flag enabled alone is not enough`);
  assert.equal(flagOnly.card, null, `${prompt} must not include card when local/test-safe context is absent`);

  const result = renderer.renderNexusLowRiskInertPreview(parts.actionDecision, parts.stagedActionState, parts.inertRenderModel, safeContext);
  assert.equal(result.active, true, `${prompt} may build inert metadata in isolated local/test-safe context`);
  assert.equal(result.metadataOnly, true, `${prompt} must remain metadata-only`);
  assert.equal(result.executionAllowed, false, `${prompt} must not allow execution`);
  assert.equal(result.providerHandoffAllowed, false, `${prompt} must not allow provider handoff`);
  assert.equal(result.permissionRequestAllowed, false, `${prompt} must not allow permissions`);
  assert.equal(result.navigationAllowed, false, `${prompt} must not allow navigation`);
  assert.equal(result.domRenderingAllowed, false, `${prompt} must not allow DOM rendering`);
  assert.equal(result.clickHandlersAllowed, false, `${prompt} must not allow click handlers`);
}

const eligibleParts = chain("Nexus, help me find agriculture training");
const ineligibleState = { ...eligibleParts.stagedActionState, uiState: "confirmation_required" };
const eligibilityFalse = renderer.renderNexusLowRiskInertPreview(eligibleParts.actionDecision, ineligibleState, eligibleParts.inertRenderModel, safeContext);
assert.equal(eligibilityFalse.active, false, "eligibility false must render nothing");
assert.equal(eligibilityFalse.card, null, "eligibility false must not include card data");

for (const prompt of [
  "Nexus, call my doctor",
  "Nexus, text my farm worker",
  "Nexus, share my location",
  "Nexus, open my camera",
  "Nexus, buy this item on AgriTrade",
  "Nexus, contact the seller",
  "Nexus, I need emergency help",
  "Nexus, start a telehealth visit"
]) {
  const parts = chain(prompt);
  const result = renderer.renderNexusLowRiskInertPreview(parts.actionDecision, parts.stagedActionState, parts.inertRenderModel, safeContext);
  assert.equal(result.active, false, `${prompt} must return nothing for excluded/high-risk fixture`);
  assert.equal(result.card, null, `${prompt} must not include card for excluded/high-risk fixture`);
  assert.equal(result.executionAllowed, false, `${prompt} must not allow execution`);
}

assert(packageJson.includes("\"qa:nexus-low-risk-renderer-controlled-runtime-wiring-static\""), "package.json must expose qa:nexus-low-risk-renderer-controlled-runtime-wiring-static");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-wiring-static-qa.js"), "nexus-workforce suite must include controlled runtime wiring static QA");

console.log("Nexus low-risk renderer controlled runtime wiring static QA passed");
console.log("- Standard User runtime remains unwired to low-risk renderer modules");
console.log("- unsafe APIs, click handlers, provider handoff, permissions, navigation, and execution remain absent");
console.log("- flag-off, eligibility-false, flag-only, low-risk, and excluded fixtures are guarded");
