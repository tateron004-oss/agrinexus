const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function extractFunction(source, functionName) {
  const start = source.indexOf(`function ${functionName}`);
  assert(start >= 0, `${functionName} must exist`);
  const parenStart = source.indexOf("(", start);
  assert(parenStart > start, `${functionName} must have parameters`);
  let parenDepth = 0;
  let parenEnd = -1;
  for (let index = parenStart; index < source.length; index += 1) {
    const char = source[index];
    if (char === "(") parenDepth += 1;
    if (char === ")") parenDepth -= 1;
    if (parenDepth === 0) {
      parenEnd = index;
      break;
    }
  }
  assert(parenEnd > parenStart, `${functionName} parameter list was not closed`);
  const braceStart = source.indexOf("{", parenEnd);
  assert(braceStart > parenEnd, `${functionName} must have a function body`);
  let depth = 0;
  for (let index = braceStart; index < source.length; index += 1) {
    const char = source[index];
    if (char === "{") depth += 1;
    if (char === "}") depth -= 1;
    if (depth === 0) return source.slice(start, index + 1);
  }
  throw new Error(`${functionName} body was not closed`);
}

function evaluateHarness(functionSource, context) {
  const sandbox = { context, result: null, Object, String, Array };
  vm.runInNewContext(`${functionSource}; result = evaluateNexusLowRiskRendererRuntimeHarness(context);`, sandbox, {
    timeout: 1000
  });
  return sandbox.result;
}

for (const parts of [
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_OFF_HARNESS.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_WIRING_READINESS_REVIEW.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_WIRING_STATIC_QA.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_WIRING_PLAN.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_BROWSER_VALIDATION.md"],
  ["docs", "NEXUS_LOW_RISK_INERT_RENDERER_PROTOTYPE_IMPLEMENTATION.md"],
  ["public", "nexus-low-risk-inert-renderer.js"],
  ["public", "nexus-low-risk-inert-renderer-flag.js"],
  ["public", "nexus-low-risk-inert-renderer-eligibility.js"],
  ["scripts", "nexus-low-risk-renderer-controlled-runtime-wiring-readiness-review-qa.js"],
  ["scripts", "nexus-low-risk-renderer-controlled-runtime-wiring-static-qa.js"]
]) {
  assert(exists(...parts), `${parts.join("/")} must exist`);
}

const doc = read("docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_OFF_HARNESS.md");
const app = read("public", "app.js");
const index = read("public", "index.html");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

for (const section of [
  "## 1. Purpose and Scope",
  "## 2. Relationship to Phases 12O through 12S",
  "## 3. Harness Location and API",
  "## 4. Flag-Off Behavior",
  "## 5. Eligibility Behavior",
  "## 6. Safety Boundaries",
  "## 7. Runtime Non-Goals",
  "## 8. Standard User Preservation",
  "## 9. QA Coverage",
  "## 10. Future Phase Recommendation"
]) {
  assert(doc.includes(section), `Phase 12T doc must include section: ${section}`);
}

for (const term of [
  "Controlled Runtime Wiring Flag-Off Harness",
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
  "Phase 12U"
]) {
  assert(doc.includes(term), `Phase 12T doc must include required safety language: ${term}`);
}

const harnessSource = extractFunction(app, "evaluateNexusLowRiskRendererRuntimeHarness");

assert(!index.includes("nexus-low-risk-inert-renderer"), "public/index.html must not load the low-risk inert renderer");
assert(!index.match(/<script[^>]+nexus-low-risk/i), "public/index.html must not include a low-risk renderer script tag");
assert(!app.includes("renderNexusLowRiskInertPreview"), "public/app.js must not invoke the low-risk renderer");
assert(!app.includes("buildNexusLowRiskInertRendererPrototype"), "public/app.js must not invoke the renderer prototype builder");
assert(!app.includes("import(\"/nexus-low-risk"), "public/app.js must not dynamically import low-risk renderer modules");
assert(!app.includes("import('/nexus-low-risk"), "public/app.js must not dynamically import low-risk renderer modules");
assert(!app.includes("createElement(\"script\")"), "public/app.js must not inject renderer script tags");
assert(!app.includes("createElement('script')"), "public/app.js must not inject renderer script tags");
assert(!app.includes("data-low-risk-renderer"), "public/app.js must not add visible low-risk renderer containers");
assert(!index.includes("data-low-risk-renderer"), "public/index.html must not add visible low-risk renderer containers");

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
  assert(!harnessSource.toLowerCase().includes(forbidden.toLowerCase()), `runtime harness must not include unsafe API or hook: ${forbidden}`);
}

const flagOff = evaluateHarness(harnessSource, {});
assert.equal(flagOff.activated, false, "flag-off harness must stay inactive");
assert.equal(flagOff.reason, "flag_disabled", "flag-off harness must return flag_disabled");
assert.equal(flagOff.rendererInvoked, false, "flag-off harness must not invoke renderer");
assert.equal(flagOff.visibleRuntimeUi, false, "flag-off harness must not expose visible UI");
assert.equal(flagOff.domRenderingAllowed, false, "flag-off harness must not allow DOM rendering");
assert.equal(flagOff.executionAllowed, false, "flag-off harness must not allow execution");
assert.equal(flagOff.providerHandoffAllowed, false, "flag-off harness must not allow provider handoff");
assert.equal(flagOff.permissionRequestAllowed, false, "flag-off harness must not allow permissions");
assert.equal(flagOff.navigationAllowed, false, "flag-off harness must not allow navigation");

const eligibilityFalse = evaluateHarness(harnessSource, {
  flagState: { enabled: true },
  eligibilityState: { eligible: false },
  actionDecision: { riskLevel: "low", executionBoundary: "suggestion_only" }
});
assert.equal(eligibilityFalse.activated, false, "eligibility false must stay inactive");
assert.equal(eligibilityFalse.reason, "eligibility_false", "eligibility false must return eligibility_false");

const flagEnabledAlone = evaluateHarness(harnessSource, {
  flagState: { enabled: true },
  actionDecision: { riskLevel: "low", executionBoundary: "suggestion_only" }
});
assert.equal(flagEnabledAlone.activated, false, "flag enabled alone must stay inactive");
assert.equal(flagEnabledAlone.reason, "eligibility_false", "flag enabled alone must not be enough");

const highRisk = evaluateHarness(harnessSource, {
  flagState: { enabled: true },
  eligibilityState: { eligible: true },
  actionDecision: { riskLevel: "high", executionBoundary: "suggestion_only" }
});
assert.equal(highRisk.activated, false, "excluded/high-risk fixture must stay inactive");
assert.equal(highRisk.reason, "restricted_or_non_low_risk", "high-risk fixture must be blocked");

const unsupportedBoundary = evaluateHarness(harnessSource, {
  flagState: { enabled: true },
  eligibilityState: { eligible: true },
  actionDecision: { riskLevel: "low", executionBoundary: "provider_handoff_only" }
});
assert.equal(unsupportedBoundary.activated, false, "unsupported boundary must stay inactive");
assert.equal(unsupportedBoundary.reason, "unsupported_boundary", "provider_handoff_only must not be treated as execution");

const configuredButInactive = evaluateHarness(harnessSource, {
  flagState: { enabled: true },
  eligibilityState: { eligible: true },
  actionDecision: { riskLevel: "low", executionBoundary: "navigation_only" }
});
assert.equal(configuredButInactive.activated, false, "eligible low-risk fixture must still remain inactive in Phase 12T");
assert.equal(configuredButInactive.reason, "not_configured", "Phase 12T must not enable visible renderer UI");
assert.equal(configuredButInactive.rendererInvoked, false, "Phase 12T must not invoke renderer even when fixture is otherwise eligible");
assert.equal(configuredButInactive.standardUserBehaviorChange, false, "Phase 12T must not change Standard User behavior");

assert(packageJson.includes("\"qa:nexus-low-risk-renderer-controlled-runtime-flag-off-harness\""), "package.json must expose qa:nexus-low-risk-renderer-controlled-runtime-flag-off-harness");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-flag-off-harness-qa.js"), "nexus-workforce suite must include Phase 12T flag-off harness QA");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-wiring-static-qa.js"), "nexus-workforce suite must keep Phase 12R static guard");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-wiring-readiness-review-qa.js"), "nexus-workforce suite must keep Phase 12S readiness review guard");

console.log("Nexus low-risk renderer controlled runtime flag-off harness QA passed");
console.log("- Phase 12T doc and safety language are present");
console.log("- app-level harness is inactive by default and never invokes the renderer");
console.log("- index.html remains free of renderer script tags and visible containers");
console.log("- flag-off, eligibility-false, flag-only, high-risk, and unsupported-boundary fixtures stay no-op");
