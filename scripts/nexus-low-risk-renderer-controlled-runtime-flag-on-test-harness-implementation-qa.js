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

function baseFixture(overrides = {}) {
  return {
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
    },
    ...overrides
  };
}

function containsForbiddenPayload(value) {
  const forbiddenKeys = new Set([
    "executableActionPayload",
    "providerPayload",
    "permissionPayload",
    "routeCommand",
    "transactionPayload",
    "contactPayload",
    "callPayload",
    "messagePayload",
    "domNode",
    "clickHandler"
  ]);
  const stack = [value];
  while (stack.length) {
    const current = stack.pop();
    if (!current || typeof current !== "object") continue;
    for (const [key, child] of Object.entries(current)) {
      if (forbiddenKeys.has(key)) return true;
      if (child && typeof child === "object") stack.push(child);
    }
  }
  return false;
}

const docPath = path.join(root, "docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_TEST_HARNESS_IMPLEMENTATION.md");
assert(fs.existsSync(docPath), "docs/NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_TEST_HARNESS_IMPLEMENTATION.md must exist");

for (const parts of [
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_READINESS_REVIEW.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_STATIC_QA.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_TEST_HARNESS_PLAN.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_FLAG_OFF_HARNESS_BROWSER_REGRESSION.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_OFF_HARNESS.md"],
  ["scripts", "nexus-low-risk-renderer-controlled-runtime-flag-on-readiness-review-qa.js"],
  ["scripts", "nexus-low-risk-renderer-controlled-runtime-flag-on-static-qa.js"],
  ["scripts", "nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-plan-qa.js"],
  ["scripts", "nexus-low-risk-renderer-flag-off-harness-browser-regression-qa.js"],
  ["scripts", "nexus-low-risk-renderer-controlled-runtime-flag-off-harness-qa.js"]
]) {
  assert(exists(...parts), `${parts.join("/")} must exist`);
}

const doc = read("docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_TEST_HARNESS_IMPLEMENTATION.md");
const app = read("public", "app.js");
const index = read("public", "index.html");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");
const harness = loadHarness(app);

assertIncludes(doc, [
  "## 1. Purpose and Scope",
  "## 2. Relationship to Phases 12T through 12X",
  "## 3. Harness Location and API",
  "## 4. Default Flag-Off Behavior",
  "## 5. Local/Test-Only Flag-On Behavior",
  "## 6. Safety Boundaries",
  "## 7. Eligible Harness Scope",
  "## 8. Excluded Harness Scope",
  "## 9. QA Coverage",
  "## 10. Non-Goals",
  "## 11. Recommended Next Phase"
], "Phase 12Y doc");

assertIncludes(doc, [
  "Controlled Runtime Flag-On Test Harness Implementation",
  "disabled by default",
  "flag disabled means render nothing",
  "eligibility false means render nothing",
  "flag enabled alone is not enough",
  "local/test-only",
  "metadata/no-op only",
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
  "Phase 12Z"
], "Phase 12Y doc safety language");

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
], "Phase 12Y fixture scope");

assert(app.includes("function evaluateNexusLowRiskRendererRuntimeHarness"), "public/app.js must contain evaluateNexusLowRiskRendererRuntimeHarness");
assert(app.includes("localTestFlagOn"), "harness must use a local/test-only activation field");
assert(app.includes('reason: "flag_disabled"'), "harness must preserve flag_disabled default");
assert(app.includes('reason: "local_test_flag_disabled"'), "harness must reject missing local/test-only flag");

assert.equal(harness({}).reason, "flag_disabled", "default call must be inactive with flag_disabled");
assert.equal(harness({ flagState: { enabled: true } }).reason, "eligibility_false", "flag enabled alone is not enough");
assert.equal(harness(baseFixture({ localTestFlagOn: false })).reason, "local_test_flag_disabled", "local test flag false must be inactive");
assert.equal(harness(baseFixture({ eligibilityState: { eligible: false } })).reason, "eligibility_false", "eligibility false must be inactive");
assert.equal(harness(baseFixture({ actionDecision: { ...baseFixture().actionDecision, riskLevel: "high" } })).reason, "restricted_or_non_low_risk", "high-risk fixtures must be inactive");
assert.equal(harness(baseFixture({ actionDecision: { ...baseFixture().actionDecision, domain: "communications", riskLevel: "low" } })).reason, "unsupported_state", "communications fixtures must be inactive");
assert.equal(harness(baseFixture({ actionDecision: { ...baseFixture().actionDecision, domain: "marketplace", selectedToolId: "marketplace.agritrade", actionId: "nexus.marketplace.transaction" } })).reason, "unsupported_state", "marketplace transaction fixtures must be inactive");
assert.equal(harness(baseFixture({ actionDecision: { ...baseFixture().actionDecision, executionBoundary: "provider_handoff_only" } })).reason, "unsupported_boundary", "provider handoff boundary must be inactive");
assert.equal(harness(baseFixture({ actionDecision: { ...baseFixture().actionDecision, missingInputs: ["phoneNumber"] } })).reason, "unsupported_state", "missing inputs must block harness activation");
assert.equal(harness(baseFixture({ actionDecision: { ...baseFixture().actionDecision, confirmationRequired: true } })).reason, "unsupported_state", "confirmationRequired must block harness activation");
assert.equal(harness(baseFixture({ inertRenderModel: { ...baseFixture().inertRenderModel, domRenderingAllowed: true } })).reason, "unsupported_state", "DOM rendering model must be inactive");

const learningResult = harness(baseFixture());
assert.equal(learningResult.activated, true, "eligible learning fixture must activate metadata-only harness");
assert.equal(learningResult.mode, "local_test_only", "eligible fixture must report local_test_only mode");
assert.equal(learningResult.renderIntent, "metadata_only", "eligible fixture must be metadata_only");
assert.equal(learningResult.executionAllowed, false, "eligible fixture must not allow execution");
assert.equal(learningResult.providerHandoffAllowed, false, "eligible fixture must not allow provider handoff");
assert.equal(learningResult.permissionRequestAllowed, false, "eligible fixture must not allow permission requests");
assert.equal(learningResult.navigationAllowed, false, "eligible fixture must not allow navigation");
assert.equal(learningResult.domRenderingAllowed, false, "eligible fixture must not allow DOM rendering");
assert.equal(learningResult.clickHandlersAllowed, false, "eligible fixture must not allow click handlers");
assert.equal(containsForbiddenPayload(learningResult), false, "eligible output must not include forbidden executable payload fields");

const jobsResult = harness(baseFixture({
  actionDecision: { ...baseFixture().actionDecision, domain: "jobs", actionId: "nexus.jobs.review", selectedToolId: "workforce.job_pathways", executionBoundary: "navigation_only" },
  stagedActionState: { ...baseFixture().stagedActionState, uiState: "review_option", visibleLabel: "Jobs" },
  inertRenderModel: { ...baseFixture().inertRenderModel, renderMode: "inert_review_option", title: "Jobs" }
}));
assert.equal(jobsResult.activated, true, "eligible jobs fixture must activate metadata-only harness");

const marketplaceResult = harness(baseFixture({
  actionDecision: { ...baseFixture().actionDecision, domain: "marketplace", actionId: "nexus.marketplace.review", selectedToolId: "marketplace.agritrade", executionBoundary: "navigation_only" },
  stagedActionState: { ...baseFixture().stagedActionState, uiState: "review_option", visibleLabel: "Marketplace" },
  inertRenderModel: { ...baseFixture().inertRenderModel, renderMode: "inert_review_option", title: "Marketplace" }
}));
assert.equal(marketplaceResult.activated, true, "eligible marketplace review fixture must activate metadata-only harness");

const agricultureResult = harness(baseFixture({
  actionDecision: { ...baseFixture().actionDecision, domain: "agriculture", actionId: "nexus.agriculture.support.review", selectedToolId: "agriculture.help" },
  stagedActionState: { ...baseFixture().stagedActionState, visibleLabel: "Agriculture Help" },
  inertRenderModel: { ...baseFixture().inertRenderModel, title: "Agriculture Help" }
}));
assert.equal(agricultureResult.activated, true, "eligible agriculture support review fixture must activate metadata-only harness");

assert(!index.includes("nexus-low-risk-inert-renderer"), "public/index.html must not load the low-risk inert renderer");
assert(!index.match(/<script[^>]+nexus-low-risk/i), "public/index.html must not include a low-risk renderer script tag");
assert(!app.includes("data-low-risk-renderer"), "public/app.js must not add visible low-risk renderer containers");
assert(!index.includes("data-low-risk-renderer"), "public/index.html must not add visible low-risk renderer containers");
assert(!app.includes("renderNexusLowRiskInertPreview"), "public/app.js must not invoke the low-risk renderer");
assert(!app.includes("buildNexusLowRiskInertRendererPrototype"), "public/app.js must not invoke the renderer prototype builder");
assert(!app.includes("import(\"/nexus-low-risk"), "public/app.js must not dynamically import low-risk renderer modules");
assert(!app.includes("import('/nexus-low-risk"), "public/app.js must not dynamically import low-risk renderer modules");

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
  assert(!harnessSource.toLowerCase().includes(forbidden.toLowerCase()), `harness must not include unsafe API or hook: ${forbidden}`);
}

assert(packageJson.includes("\"qa:nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-implementation\""), "package.json must expose qa:nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-implementation");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-implementation-qa.js"), "nexus-workforce suite must include Phase 12Y implementation QA");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-readiness-review-qa.js"), "nexus-workforce suite must keep Phase 12X readiness review QA");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-static-qa.js"), "nexus-workforce suite must keep Phase 12W static QA");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-plan-qa.js"), "nexus-workforce suite must keep Phase 12V plan QA");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-flag-off-harness-qa.js"), "nexus-workforce suite must keep Phase 12T flag-off harness QA");
assert(suite.includes("scripts/nexus-low-risk-renderer-flag-off-harness-browser-regression-qa.js"), "nexus-workforce suite must keep Phase 12U browser regression QA");

console.log("Nexus low-risk renderer controlled runtime flag-on test harness implementation QA passed");
console.log("- local/test-only eligible fixtures return metadata/no-op output");
console.log("- default, flag-only, eligibility-false, excluded, and high-risk fixtures remain inactive");
console.log("- index.html remains unwired and no renderer UI, DOM rendering, handlers, navigation, provider, permission, or execution path was added");
