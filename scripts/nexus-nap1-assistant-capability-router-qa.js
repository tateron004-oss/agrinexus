const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const router = require("../server/nexus-assistant-capability-router.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function assertDecision(prompt, expected) {
  const decision = router.buildRouterDecision(prompt, expected.context || {});
  assert.equal(router.isSafeCapabilityDecision(decision), true, `${prompt} must produce a safe capability decision.`);
  Object.entries(expected).forEach(([key, value]) => {
    if (key === "context") return;
    assert.equal(decision[key], value, `${prompt} expected ${key}=${value}, got ${decision[key]}`);
  });
  assert.equal(decision.noExecutionAuthorized, true, `${prompt} must not authorize execution.`);
  assert.equal(decision.noLocationPermissionRequested, true, `${prompt} must not request location permission.`);
  assert.equal(decision.noProviderContactAuthorized, true, `${prompt} must not authorize provider contact.`);
  assert.equal(decision.noBackendWritePerformed, true, `${prompt} must not perform backend writes.`);
  return decision;
}

function assertStaticContracts() {
  const source = read("server", "nexus-assistant-capability-router.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  [
    "provider-backed-answer",
    "follow-up-refinement",
    "task-plan",
    "checklist",
    "comparison",
    "draft-preparation",
    "source-review",
    "blocked-unsafe-action",
    "safe-unavailable",
    "requiresUserConfirmation",
    "noExecutionAuthorized",
    "noLocationPermissionRequested",
    "noProviderContactAuthorized",
    "noBackendWritePerformed"
  ].forEach(term => assert(source.includes(term), `NAP1 router must include ${term}`));

  [
    "window.open",
    "location.href",
    "navigator.geolocation",
    "getCurrentPosition",
    "getUserMedia",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "writeFileSync",
    "providerHandoffAllowed: true",
    "executionAuthority: true"
  ].forEach(term => assert(!source.includes(term), `NAP1 router must not introduce unsafe behavior: ${term}`));

  assert.equal(
    pkg.scripts["qa:nexus-nap1-assistant-capability-router"],
    "node scripts/nexus-nap1-assistant-capability-router-qa.js",
    "NAP1 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-nap1-assistant-capability-router-qa.js"), "NAP1 QA must be wired into local-safe suites.");
}

function runNap1AssistantCapabilityRouterQa() {
  assertStaticContracts();

  assertDecision("What is the weather in Stockton?", {
    capabilityId: "provider-backed-answer.weather",
    selectedMode: "provider-backed-answer",
    selectedProvider: "weather",
    answerMode: "source-backed-answer",
    allowed: true,
    riskTier: "low",
    requiresProvider: true,
    requiresUserConfirmation: false
  });

  assertDecision("Find farm jobs near Stockton.", {
    capabilityId: "provider-backed-answer.jobs",
    selectedMode: "provider-backed-answer",
    selectedProvider: "job-search",
    answerMode: "source-backed-answer",
    allowed: true,
    riskTier: "low",
    requiresProvider: true,
    requiresUserConfirmation: false
  });

  assertDecision("Compare these training options.", {
    capabilityId: "comparison",
    selectedMode: "comparison",
    selectedProvider: null,
    answerMode: "comparison-table",
    allowed: true,
    riskTier: "low",
    requiresProvider: false,
    requiresUserConfirmation: false
  });

  assertDecision("Turn this into a checklist.", {
    capabilityId: "checklist",
    selectedMode: "checklist",
    selectedProvider: null,
    answerMode: "checklist",
    allowed: true,
    riskTier: "low",
    requiresProvider: false,
    requiresUserConfirmation: false
  });

  assertDecision("Draft questions I should ask the provider.", {
    capabilityId: "draft-preparation",
    selectedMode: "draft-preparation",
    selectedProvider: null,
    answerMode: "draft",
    allowed: true,
    riskTier: "low",
    requiresProvider: false,
    requiresUserConfirmation: false
  });

  ["Apply to the first job.", "Call the provider.", "Buy fertilizer.", "Dispatch help."].forEach(prompt => {
    const decision = assertDecision(prompt, {
      capabilityId: "blocked-unsafe-action",
      selectedMode: "blocked",
      selectedProvider: null,
      answerMode: "blocked-action-explanation",
      allowed: false,
      riskTier: "high",
      requiresProvider: false,
      requiresUserConfirmation: true
    });
    assert.match(decision.blockedReason, /unsafe|high_risk|future_gate/i, `${prompt} must explain blocked reason.`);
  });

  const followUpDecision = assertDecision("Only entry level.", {
    context: {
      contextId: "test-context",
      lastQuery: "Find farm jobs near Stockton.",
      lastIntent: "job-search",
      lastProvider: "job-search",
      lastResultsSummary: "Farm jobs near Stockton.",
      expiresAt: new Date(Date.now() + 30 * 60 * 1000).toISOString()
    },
    capabilityId: "follow-up-refinement",
    selectedMode: "follow-up-refinement",
    selectedProvider: null,
    answerMode: "refine results",
    allowed: true,
    riskTier: "low",
    requiresProvider: false,
    requiresUserConfirmation: false
  });
  assert(followUpDecision.safeNextSteps.length > 0, "Follow-up decision must include safe next steps.");

  console.log(JSON.stringify({
    providerBackedRouting: true,
    localCapabilityRouting: true,
    followUpRouting: true,
    highRiskBlocking: true,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-nap1-assistant-capability-router-qa] passed");
}

if (require.main === module) {
  try {
    runNap1AssistantCapabilityRouterQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runNap1AssistantCapabilityRouterQa
});
