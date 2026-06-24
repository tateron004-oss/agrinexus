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

function extractFunction(source, name) {
  const start = source.indexOf(`function ${name}`);
  assert(start >= 0, `${name} must exist`);
  const paramsEnd = source.indexOf(")", start);
  assert(paramsEnd > start, `${name} must have function parameters`);
  const braceStart = source.indexOf("{", paramsEnd);
  assert(braceStart > paramsEnd, `${name} must have a function body`);
  let depth = 0;
  for (let index = braceStart; index < source.length; index += 1) {
    const char = source[index];
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }
  throw new Error(`${name} function body could not be isolated`);
}

function loadHarness(appSource) {
  const source = extractFunction(appSource, "evaluateNexusLowRiskRendererRuntimeHarness");
  return Function(`"use strict"; return (${source});`)();
}

function fixture(overrides = {}) {
  const base = {
    flagState: { enabled: true },
    localTestFlagOn: true,
    eligibilityState: { eligible: true },
    actionDecision: {
      riskLevel: "low",
      domain: "learning",
      actionId: "nexus.learning.training.review",
      selectedToolId: "workforce.training",
      executionBoundary: "suggestion_only",
      confirmationRequired: false,
      requiredPermissions: [],
      missingInputs: [],
      userVisibleLabel: "Training",
      summary: "Nexus can review training options."
    },
    stagedActionState: {
      riskLevel: "low",
      uiState: "suggestion_preview",
      visibleLabel: "Training",
      description: "Review training options.",
      executionAllowed: false,
      providerHandoffAllowed: false,
      permissionRequired: false
    },
    inertRenderModel: {
      renderMode: "inert_preview",
      title: "Training",
      body: "Review training options.",
      badge: "Preview only",
      riskLabel: "Low risk",
      safetyCopy: "No action has been taken. Review only.",
      primaryControlLabel: "Review options",
      secondaryControlLabel: "Not now",
      executionAllowed: false,
      providerHandoffAllowed: false,
      permissionRequestAllowed: false,
      domRenderingAllowed: false,
      clickHandlersAllowed: false
    }
  };
  return {
    ...base,
    ...overrides,
    actionDecision: { ...base.actionDecision, ...(overrides.actionDecision || {}) },
    stagedActionState: { ...base.stagedActionState, ...(overrides.stagedActionState || {}) },
    inertRenderModel: { ...base.inertRenderModel, ...(overrides.inertRenderModel || {}) }
  };
}

function assertInactive(result, label) {
  assert.equal(result.activated, false, `${label} must remain inactive`);
  assert.equal(result.rendererInvoked, false, `${label} must not invoke renderer`);
  assert.equal(result.visibleRuntimeUi, false, `${label} must not expose visible UI`);
  assert.equal(result.domRenderingAllowed, false, `${label} must not allow DOM rendering`);
  assert.equal(result.clickHandlersAllowed, false, `${label} must not allow click handlers`);
  assert.equal(result.executionAllowed, false, `${label} must not allow execution`);
  assert.equal(result.providerHandoffAllowed, false, `${label} must not allow provider handoff`);
  assert.equal(result.permissionRequestAllowed, false, `${label} must not request permissions`);
  assert.equal(result.navigationAllowed, false, `${label} must not allow navigation`);
}

function assertMetadataOnly(result, label) {
  assert.equal(result.activated, true, `${label} must activate only in local/test-only mode`);
  assert.equal(result.mode, "local_test_only", `${label} must report local_test_only mode`);
  assert.equal(result.renderIntent, "metadata_only", `${label} must remain metadata-only`);
  assert.equal(result.metadataOnly, true, `${label} must be metadata-only`);
  assert.equal(result.rendererInvoked, false, `${label} must not invoke renderer`);
  assert.equal(result.visibleRuntimeUi, false, `${label} must not expose visible UI`);
  assert.equal(result.domRenderingAllowed, false, `${label} must not allow DOM rendering`);
  assert.equal(result.clickHandlersAllowed, false, `${label} must not allow click handlers`);
  assert.equal(result.executionAllowed, false, `${label} must not allow execution`);
  assert.equal(result.providerHandoffAllowed, false, `${label} must not allow provider handoff`);
  assert.equal(result.permissionRequestAllowed, false, `${label} must not request permissions`);
  assert.equal(result.navigationAllowed, false, `${label} must not allow navigation`);
  assert(result.inertPreview && result.inertPreview.metadataOnly === true, `${label} must return inert metadata`);
}

const docPath = path.join(root, "docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_BROWSER_REGRESSION_VALIDATION.md");
assert(fs.existsSync(docPath), "docs/NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_BROWSER_REGRESSION_VALIDATION.md must exist");

for (const parts of [
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_TEST_HARNESS_IMPLEMENTATION.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_READINESS_REVIEW.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_STATIC_QA.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_TEST_HARNESS_PLAN.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_FLAG_OFF_HARNESS_BROWSER_REGRESSION.md"],
  ["scripts", "nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-implementation-qa.js"]
]) {
  assert(exists(...parts), `${parts.join("/")} must exist`);
}

const doc = read("docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_BROWSER_REGRESSION_VALIDATION.md");
const app = read("public", "app.js");
const index = read("public", "index.html");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");
const harness = loadHarness(app);

assertIncludes(doc, [
  "## 1. Purpose and Scope",
  "## 2. Relationship to Phase 12Y",
  "## 3. Browser and Standard User Risk Tested",
  "## 4. What Validation Proves",
  "## 5. Low-Risk Prompt Categories",
  "## 6. Excluded and High-Risk Prompt Categories",
  "## 7. What Remains Intentionally Blocked",
  "## 8. Why Visible Rendering Is Still Not Enabled",
  "## 9. Browser-Like QA Coverage",
  "## 10. Current Default Flag-Off Posture",
  "## 11. Non-Goals",
  "## 12. Recommended Next Phase"
], "Phase 12Z doc");

assertIncludes(doc, [
  "Phase 12Z",
  "Phase 12Y",
  "standard-user",
  "Standard User",
  "metadata/no-op",
  "disabled by default",
  "flag disabled means render nothing",
  "eligibility false means render nothing",
  "flag enabled alone is not enough",
  "no visible runtime UI when flag off",
  "no DOM rendering when flag off",
  "no renderer invocation when flag off",
  "Standard User visible behavior remains unchanged when flag off",
  "not ready for real execution",
  "Phase 13A - Controlled Low-Risk Renderer Visible UI Design Contract"
], "Phase 12Z doc safety posture");

assertIncludes(doc, [
  "agriculture training",
  "irrigation learning",
  "farm jobs",
  "AgriTrade review/browse",
  "crop issue support",
  "\"Call John\"",
  "\"Message Maria\"",
  "\"Use my location\"",
  "\"Open the camera\"",
  "\"Buy this item\"",
  "\"Pay for this\"",
  "\"Emergency help\"",
  "\"Book an appointment\"",
  "\"Send my information\""
], "Phase 12Z prompt coverage");

assert(!index.includes("nexus-low-risk-inert-renderer"), "public/index.html must not load the low-risk inert renderer");
assert(!index.match(/<script[^>]+nexus-low-risk/i), "public/index.html must not include a low-risk renderer script tag");
assert(!index.includes("data-low-risk-renderer"), "public/index.html must not include renderer containers");
assert(!app.includes("data-low-risk-renderer"), "public/app.js must not include renderer containers");
assert(!app.includes("renderNexusLowRiskInertPreview"), "public/app.js must not invoke renderer preview");
assert(!app.includes("buildNexusLowRiskInertRendererPrototype"), "public/app.js must not invoke renderer prototype builder");
assert(!app.includes("import(\"/nexus-low-risk"), "public/app.js must not dynamically import low-risk renderer modules");
assert(!app.includes("import('/nexus-low-risk"), "public/app.js must not dynamically import low-risk renderer modules");
assert(!/addEventListener\([^)]*low-risk/i.test(app), "public/app.js must not register low-risk renderer click handlers");
assert(!/onclick[\s\S]{0,120}low-risk/i.test(app), "public/app.js must not add low-risk renderer onclick handlers");

const harnessSource = extractFunction(app, "evaluateNexusLowRiskRendererRuntimeHarness");
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
  assert(!harnessSource.toLowerCase().includes(forbidden.toLowerCase()), `harness must not include unsafe browser/action hook: ${forbidden}`);
}

assertInactive(harness({}), "default harness call");
assertInactive(harness({ flagState: { enabled: true } }), "flag enabled alone");
assertInactive(harness(fixture({ localTestFlagOn: false })), "local test flag false");
assertInactive(harness(fixture({ eligibilityState: { eligible: false } })), "eligibility false");

const lowRiskCases = [
  ["agriculture training", fixture()],
  ["irrigation learning", fixture({
    actionDecision: { domain: "learning", actionId: "nexus.learning.guidance.review", selectedToolId: "learning.start", executionBoundary: "suggestion_only", userVisibleLabel: "Learning" },
    stagedActionState: { visibleLabel: "Learning" },
    inertRenderModel: { title: "Learning" }
  })],
  ["farm jobs", fixture({
    actionDecision: { domain: "jobs", actionId: "nexus.jobs.review", selectedToolId: "workforce.job_pathways", executionBoundary: "navigation_only", userVisibleLabel: "Jobs" },
    stagedActionState: { uiState: "review_option", visibleLabel: "Jobs" },
    inertRenderModel: { renderMode: "inert_review_option", title: "Jobs" }
  })],
  ["AgriTrade review/browse", fixture({
    actionDecision: { domain: "marketplace", actionId: "nexus.marketplace.review", selectedToolId: "marketplace.agritrade", executionBoundary: "navigation_only", userVisibleLabel: "Marketplace" },
    stagedActionState: { uiState: "review_option", visibleLabel: "Marketplace" },
    inertRenderModel: { renderMode: "inert_review_option", title: "Marketplace" }
  })],
  ["crop issue support", fixture({
    actionDecision: { domain: "agriculture", actionId: "nexus.agriculture.support.review", selectedToolId: "agriculture.help", executionBoundary: "suggestion_only", userVisibleLabel: "Agriculture Help" },
    stagedActionState: { visibleLabel: "Agriculture Help" },
    inertRenderModel: { title: "Agriculture Help" }
  })]
];

for (const [label, input] of lowRiskCases) {
  assertMetadataOnly(harness(input), label);
}

const excludedCases = [
  ["Call John", fixture({ actionDecision: { domain: "communications", riskLevel: "high", executionBoundary: "provider_handoff_only" } })],
  ["Message Maria", fixture({ actionDecision: { domain: "message", riskLevel: "high", executionBoundary: "provider_handoff_only" } })],
  ["Use my location", fixture({ actionDecision: { domain: "location", riskLevel: "high", executionBoundary: "navigation_only" } })],
  ["Open the camera", fixture({ actionDecision: { domain: "camera", riskLevel: "high", executionBoundary: "suggestion_only" } })],
  ["Buy this item", fixture({ actionDecision: { domain: "marketplace", actionId: "nexus.marketplace.transaction", riskLevel: "high", executionBoundary: "navigation_only" } })],
  ["Pay for this", fixture({ actionDecision: { domain: "marketplace", actionId: "nexus.marketplace.payment", riskLevel: "high", executionBoundary: "navigation_only" } })],
  ["Emergency help", fixture({ actionDecision: { domain: "emergency", riskLevel: "restricted", executionBoundary: "blocked" } })],
  ["Book an appointment", fixture({ actionDecision: { domain: "health", riskLevel: "high", executionBoundary: "confirmation_required" } })],
  ["Send my information", fixture({ actionDecision: { domain: "account", riskLevel: "high", executionBoundary: "confirmation_required" } })]
];

for (const [label, input] of excludedCases) {
  assertInactive(harness(input), label);
}

assert(packageJson.includes("\"qa:nexus-low-risk-renderer-controlled-runtime-flag-on-browser-regression-validation\""), "package.json must expose qa:nexus-low-risk-renderer-controlled-runtime-flag-on-browser-regression-validation");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-browser-regression-validation-qa.js"), "nexus-workforce suite must include Phase 12Z browser regression QA");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-implementation-qa.js"), "nexus-workforce suite must keep Phase 12Y implementation QA");

console.log("Nexus low-risk renderer controlled runtime flag-on browser regression validation QA passed");
console.log("- Standard User HTML remains unwired and no renderer UI surface was introduced");
console.log("- local/test-only low-risk fixtures remain metadata/no-op only");
console.log("- excluded/high-risk prompt fixtures remain inactive/no-op");
