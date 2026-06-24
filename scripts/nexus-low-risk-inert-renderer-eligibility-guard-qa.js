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

const docPath = path.join(root, "docs", "NEXUS_LOW_RISK_INERT_RENDERER_ELIGIBILITY_GUARD.md");
const helperPath = path.join(root, "public", "nexus-low-risk-inert-renderer-eligibility.js");
assert(fs.existsSync(docPath), "docs/NEXUS_LOW_RISK_INERT_RENDERER_ELIGIBILITY_GUARD.md must exist");
assert(fs.existsSync(helperPath), "public/nexus-low-risk-inert-renderer-eligibility.js must exist");

const doc = read("docs", "NEXUS_LOW_RISK_INERT_RENDERER_ELIGIBILITY_GUARD.md");
const helperSource = read("public", "nexus-low-risk-inert-renderer-eligibility.js");
const qaSource = read("scripts", "nexus-low-risk-inert-renderer-eligibility-guard-qa.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");
const eligibility = require(helperPath);

for (const section of [
  "## 1. Purpose and Scope",
  "## 2. Relationship to Phase 12L",
  "## 3. Eligibility Function",
  "## 4. Eligibility Requirements",
  "## 5. Allowed Scope",
  "## 6. Excluded Scope",
  "## 7. Failure Reason Model",
  "## 8. Standard User Behavior Preservation",
  "## 9. Future Integration Requirements",
  "## 10. QA Coverage",
  "## 11. Non-Goals"
]) {
  assert(doc.includes(section), `eligibility guard doc must include section: ${section}`);
}

for (const term of [
  "Low-Risk Inert Renderer Eligibility Guard",
  "isNexusLowRiskInertRendererEligible",
  "getNexusLowRiskInertRendererEligibility",
  "eligibility guard",
  "flag enabled is not enough",
  "default eligible false",
  "eligible",
  "reason",
  "allowedDomain",
  "allowedRisk",
  "allowedBoundary",
  "allowedUiState",
  "allowedRenderMode",
  "inertRendererSafe",
  "executionBlocked",
  "providerBlocked",
  "permissionBlocked",
  "highRiskBlocked",
  "visibleRenderingAuthorized",
  "flag_disabled",
  "disallowed_risk",
  "disallowed_domain",
  "disallowed_boundary",
  "disallowed_ui_state",
  "disallowed_render_mode",
  "execution_not_blocked",
  "provider_not_blocked",
  "permission_not_blocked",
  "dom_rendering_not_blocked",
  "click_handlers_not_blocked",
  "low risk only",
  "suggestion_only",
  "navigation_only",
  "learning",
  "jobs",
  "marketplace browse/review only",
  "agriculture support review only",
  "communications/call",
  "message",
  "location",
  "camera",
  "health/telehealth",
  "emergency",
  "marketplace transaction",
  "purchase",
  "provider handoff",
  "browser permission",
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
  "Phase 12N"
]) {
  assert(`${doc}\n${qaSource}\n${helperSource}`.includes(term), `eligibility guard doc/QA/helper must include required term: ${term}`);
}

assert.equal(typeof eligibility.getNexusLowRiskInertRendererEligibility, "function", "helper must expose getNexusLowRiskInertRendererEligibility");
assert.equal(typeof eligibility.isNexusLowRiskInertRendererEligible, "function", "helper must expose isNexusLowRiskInertRendererEligible");

function action(overrides = {}) {
  return {
    actionId: "nexus.learning.guidance.review",
    selectedToolId: "learning.start",
    riskLevel: "low",
    domain: "learning",
    executionBoundary: "suggestion_only",
    missingInputs: [],
    requiredPermissions: [],
    confirmationRequired: false,
    ...overrides
  };
}

function staged(overrides = {}) {
  return {
    uiState: "suggestion_preview",
    riskLevel: "low",
    executionAllowed: false,
    providerHandoffAllowed: false,
    permissionRequired: false,
    ...overrides
  };
}

function render(overrides = {}) {
  return {
    renderMode: "inert_preview",
    executionAllowed: false,
    providerHandoffAllowed: false,
    permissionRequestAllowed: false,
    domRenderingAllowed: false,
    clickHandlersAllowed: false,
    ...overrides
  };
}

const enabledContext = { NEXUS_LOW_RISK_INERT_RENDERER_ENABLED: true, localSafe: true };

assert.equal(eligibility.getNexusLowRiskInertRendererEligibility(action(), staged(), render()).eligible, false, "default eligible false");
assert.equal(eligibility.getNexusLowRiskInertRendererEligibility(action(), staged(), render()).reason, "flag_disabled", "flag disabled returns eligible false");
assert.equal(eligibility.getNexusLowRiskInertRendererEligibility(null, null, null, enabledContext).reason, "missing_action_decision", "flag enabled alone is not enough");

for (const [label, decision, state, model] of [
  ["learning suggestion", action(), staged(), render()],
  ["jobs review", action({ actionId: "nexus.jobs.review", selectedToolId: "workforce.job_pathways", domain: "jobs", executionBoundary: "navigation_only" }), staged({ uiState: "review_option" }), render({ renderMode: "inert_review_option" })],
  ["marketplace review", action({ actionId: "nexus.marketplace.review", selectedToolId: "marketplace.agritrade", domain: "marketplace", executionBoundary: "navigation_only" }), staged({ uiState: "review_option" }), render({ renderMode: "inert_review_option" })],
  ["agriculture support review", action({ actionId: "nexus.agriculture.support.review", selectedToolId: "agriculture.help", domain: "agriculture" }), staged(), render()],
  ["informational response", action({ actionId: "nexus.learning.info.review", selectedToolId: "learning.start", domain: "learning" }), staged({ uiState: "informational_response" }), render({ renderMode: "inert_information" })]
]) {
  const result = eligibility.getNexusLowRiskInertRendererEligibility(decision, state, model, enabledContext);
  assert.equal(result.eligible, true, `${label} can become eligible only with flag context and safe inert fields`);
  assert.equal(result.visibleRenderingAuthorized, false, `${label} eligibility still does not authorize visible rendering`);
  assert.equal(result.executionAuthority, "none", `${label} eligibility grants no execution authority`);
}

for (const [label, decision, state, model, expectedReason] of [
  ["marketplace transaction", action({ actionId: "nexus.marketplace.transaction.blocked", selectedToolId: "marketplace.agritrade", domain: "marketplace", executionBoundary: "blocked", riskLevel: "restricted" }), staged({ riskLevel: "restricted", uiState: "blocked_restricted" }), render({ renderMode: "inert_blocked" }), "excluded_intent"],
  ["communications/call", action({ actionId: "nexus.communications.call.stage", selectedToolId: "communications.phone", domain: "communications", riskLevel: "high", executionBoundary: "confirmation_required" }), staged({ riskLevel: "high", uiState: "confirmation_required" }), render({ renderMode: "inert_confirmation_required" }), "excluded_intent"],
  ["message", action({ actionId: "nexus.communications.message.stage", selectedToolId: "communications.message", domain: "message", riskLevel: "high" }), staged({ riskLevel: "high" }), render(), "excluded_intent"],
  ["location", action({ actionId: "nexus.location.permission.stage", domain: "location", riskLevel: "high", requiredPermissions: ["location"] }), staged({ riskLevel: "high", permissionRequired: true }), render({ permissionRequestAllowed: true }), "excluded_intent"],
  ["camera", action({ actionId: "nexus.camera.permission.stage", domain: "camera", riskLevel: "high", requiredPermissions: ["camera"] }), staged({ riskLevel: "high", permissionRequired: true }), render({ permissionRequestAllowed: true }), "excluded_intent"],
  ["health/emergency", action({ actionId: "nexus.health.emergency.blocked", selectedToolId: "health.telehealth", domain: "health", riskLevel: "restricted", executionBoundary: "blocked" }), staged({ riskLevel: "restricted", uiState: "blocked_restricted" }), render({ renderMode: "inert_blocked" }), "excluded_intent"],
  ["medium", action({ riskLevel: "medium" }), staged({ riskLevel: "medium" }), render(), "disallowed_risk"],
  ["high", action({ riskLevel: "high" }), staged({ riskLevel: "high" }), render(), "disallowed_risk"],
  ["restricted", action({ riskLevel: "restricted", executionBoundary: "blocked" }), staged({ riskLevel: "restricted" }), render(), "disallowed_risk"]
]) {
  const result = eligibility.getNexusLowRiskInertRendererEligibility(decision, state, model, enabledContext);
  assert.equal(result.eligible, false, `${label} fixture must be ineligible`);
  assert.equal(result.reason, expectedReason, `${label} fixture should fail with ${expectedReason}`);
}

for (const [label, model, expectedReason] of [
  ["executionAllowed true", render({ executionAllowed: true }), "execution_not_blocked"],
  ["providerHandoffAllowed true", render({ providerHandoffAllowed: true }), "provider_not_blocked"],
  ["permissionRequestAllowed true", render({ permissionRequestAllowed: true }), "permission_not_blocked"],
  ["domRenderingAllowed true", render({ domRenderingAllowed: true }), "dom_rendering_not_blocked"],
  ["clickHandlersAllowed true", render({ clickHandlersAllowed: true }), "click_handlers_not_blocked"]
]) {
  const result = eligibility.getNexusLowRiskInertRendererEligibility(action(), staged(), model, enabledContext);
  assert.equal(result.eligible, false, `${label} must be ineligible`);
  assert.equal(result.reason, expectedReason, `${label} should fail with ${expectedReason}`);
}

assert(packageJson.includes("\"qa:nexus-low-risk-inert-renderer-eligibility-guard\""), "package.json must expose qa:nexus-low-risk-inert-renderer-eligibility-guard");
assert(suite.includes("scripts/nexus-low-risk-inert-renderer-eligibility-guard-qa.js"), "nexus-workforce suite should include eligibility guard QA");
assert(!exists("public", "nexus-low-risk-inert-renderer.js"), "runtime low-risk inert renderer file must not be added in Phase 12M");
assert(!index.includes("nexus-low-risk-inert-renderer-eligibility.js"), "public/index.html must not load eligibility helper");
assert(!app.includes("nexus-low-risk-inert-renderer-eligibility"), "public/app.js must not load eligibility helper");
assert(!app.includes("renderNexusLowRiskInertPreview"), "public/app.js must not implement low-risk inert renderer");
assert(!app.includes("attachNexusLowRiskInertRenderer"), "public/app.js must not attach low-risk inert renderer");

for (const forbidden of [
  "document.createElement",
  ".addEventListener(",
  "onclick",
  "fetch(",
  "navigator.geolocation",
  "getUserMedia",
  "window.location",
  "location.href",
  "app.js"
]) {
  assert(!helperSource.includes(forbidden), `eligibility helper must not introduce runtime hook/render behavior: ${forbidden}`);
}

console.log("Nexus low-risk inert renderer eligibility guard QA passed");
console.log("- eligibility defaults false and flag enabled alone is not enough");
console.log("- only low-risk safe learning/jobs/marketplace review/agriculture support fixtures can become eligible");
console.log("- high-risk, permissions, provider handoff, DOM, click handler, and execution paths remain blocked");

