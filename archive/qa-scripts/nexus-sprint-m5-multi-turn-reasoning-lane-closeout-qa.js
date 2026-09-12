const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_MULTI_TURN_REASONING_FEATURE_FLAG_STATE,
  normalizeMultiTurnReasoningFeatureFlagState
} = require("../public/nexus-multi-turn-reasoning-feature-flag.js");
const {
  protectedFields,
  loadMultiTurnReasoningFlagFixtures,
  validateMultiTurnReasoningFlagFixtures
} = require("./nexus-sprint-m3-multi-turn-reasoning-flag-contract-harness.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertIncludes(source, terms, label) {
  const normalizedSource = source.replace(/`/g, "");
  for (const term of terms) {
    assert(normalizedSource.includes(term), `${label} must include: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_M5_MULTI_TURN_REASONING_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-m5-multi-turn-reasoning-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint M5 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint M5 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-multi-turn-reasoning-readiness-contract.js");
const featureFlagModule = read("public", "nexus-multi-turn-reasoning-feature-flag.js");
const m3Harness = read("scripts", "nexus-sprint-m3-multi-turn-reasoning-flag-contract-harness.js");
const fixtures = loadMultiTurnReasoningFlagFixtures();

assertIncludes(doc, [
  "Sprint M5",
  "9b12db3ccfec6efa7bd37c46cbf20e4f55dc8905",
  "documentation and deterministic QA only",
  "Sprint M Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint N1 - Task Planning Runtime Activation Readiness Gate"
], "M5 closeout doc");

assertIncludes(doc, [
  "Multi-Turn Reasoning runtime activation readiness gate",
  "Multi-Turn Reasoning feature flag contract",
  "Multi-Turn Reasoning flag contract harness",
  "Multi-Turn Reasoning runtime absence regression guard",
  "Multi-Turn Reasoning lane closeout"
], "M5 sprint summary");

assertIncludes(doc, [
  "Multi-Turn Reasoning readiness is not runtime activation",
  "Multi-Turn Reasoning visibility readiness is not reasoning authority",
  "prior turns are not proof of consent, identity, role authorization, provider authorization, or execution approval",
  "conversation context must remain non-authoritative context",
  "every high-risk or regulated action must be re-evaluated in the current turn",
  "context alone cannot authorize, stage, dispatch, or execute an action",
  "ambiguous prompts must clarify rather than infer high-impact intent from earlier turns",
  "enabled: false",
  "visibleUiAllowed: false",
  "contextReviewAllowed: false",
  "boundedConversationContextAllowed: false",
  "reasoningRuntimeAllowed: false",
  "liveReasoningEngineAllowed: false",
  "contextContinuationAllowed: false",
  "hiddenTaskContinuationAllowed: false",
  "contextBasedExecutionAllowed: false",
  "memoryDerivedAuthorityAllowed: false",
  "automaticRouteChangesAllowed: false",
  "riskTierDowngradeAllowed: false",
  "providerSelectionFromContextAllowed: false",
  "toolSelectionFromContextAllowed: false",
  "plannerActionCreationFromContextAllowed: false",
  "policyBypassAllowed: false",
  "confirmationBypassAllowed: false",
  "permissionBypassAllowed: false",
  "implicitPermissionAllowed: false",
  "firstTurnExecutionAllowed: false",
  "laterTurnExecutionAllowed: false",
  "standardUserReasoningMutationAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "auditWriteAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "unsafe authority attempts normalize back to no-execution values",
  "no action has been taken"
], "M5 no-authority and no-execution language");

assertIncludes(doc, [
  "live reasoning engine replacement",
  "active context continuation adapters",
  "reasoning review buttons",
  "context review buttons",
  "event handlers",
  "typed route mutation",
  "voice route mutation",
  "automatic route changes from prior turns",
  "hidden task continuation",
  "context-based execution",
  "memory-derived authority",
  "risk downgrades from prior context",
  "ambiguous prompt execution",
  "provider selection from context",
  "tool selection from context",
  "planner action creation from context",
  "policy bypass from prior context",
  "confirmation bypass from prior context",
  "permission bypass from prior context",
  "medical diagnosis from prior turns",
  "pharmacy or prescription continuation from prior turns",
  "payment or marketplace transaction continuation from prior turns",
  "emergency dispatch from prior turns",
  "contact or message execution from prior turns",
  "location or camera permission from prior turns",
  "identity verification from prior turns",
  "role or permission elevation from prior turns",
  "permission prompts",
  "audit writes",
  "backend writes",
  "localStorage or sessionStorage writes",
  "fetch or network calls",
  "provider handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "payment execution",
  "marketplace transactions",
  "location sharing",
  "camera or microphone activation",
  "health, medical, pharmacy, prescription, or FHIR execution",
  "appointment scheduling",
  "transportation dispatch",
  "emergency dispatch",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "M5 blocked runtime categories");

const requiredDocs = [
  "NEXUS_SPRINT_M1_MULTI_TURN_REASONING_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "NEXUS_SPRINT_M2_MULTI_TURN_REASONING_FEATURE_FLAG_CONTRACT.md",
  "NEXUS_SPRINT_M3_MULTI_TURN_REASONING_FLAG_CONTRACT_HARNESS.md",
  "NEXUS_SPRINT_M4_MULTI_TURN_REASONING_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "NEXUS_MULTI_TURN_REASONING_READINESS_CONTRACT_PHASE_65.md",
  "NEXUS_TASK_PLANNING_READINESS_CONTRACT_PHASE_66.md"
];

for (const requiredDoc of requiredDocs) {
  assert(exists("docs", requiredDoc), `Sprint M5 requires prior or next-lane doc: ${requiredDoc}`);
}

const requiredScripts = [
  "nexus-sprint-m1-multi-turn-reasoning-runtime-activation-readiness-gate-qa.js",
  "nexus-sprint-m2-multi-turn-reasoning-feature-flag-contract-qa.js",
  "nexus-sprint-m3-multi-turn-reasoning-flag-contract-harness-qa.js",
  "nexus-sprint-m4-multi-turn-reasoning-runtime-absence-regression-guard-qa.js"
];

for (const requiredScript of requiredScripts) {
  assert(exists("scripts", requiredScript), `Sprint M5 requires prior Sprint M QA: ${requiredScript}`);
  assert(qaSuite.includes(`scripts/${requiredScript}`), `qa-suite must include prior Sprint M QA: ${requiredScript}`);
}

assert(exists("public", "nexus-multi-turn-reasoning-readiness-contract.js"), "Sprint M5 requires Phase 65 Multi-Turn Reasoning readiness contract.");
assert(exists("public", "nexus-multi-turn-reasoning-feature-flag.js"), "Sprint M5 requires M2 feature flag contract.");
assert(exists("fixtures", "nexus", "multi-turn-reasoning-feature-flags.json"), "Sprint M5 requires M3 feature flag fixture.");

assertIncludes(readinessContract, [
  "MULTI_TURN_REASONING_READINESS_CONTRACT",
  "multi_turn_reasoning.readiness.phase_65",
  "MULTI_TURN_REASONING_NO_EXECUTION_DEFAULTS",
  "createMultiTurnReasoningReadinessContract",
  "executionAllowed: false",
  "liveActionEnabled: false"
], "Phase 65 Multi-Turn Reasoning readiness contract");

assertIncludes(featureFlagModule, [
  "DEFAULT_MULTI_TURN_REASONING_FEATURE_FLAG_STATE",
  "NEXUS_MULTI_TURN_REASONING_VISIBLE_ENABLED",
  "normalizeMultiTurnReasoningFeatureFlagState",
  "isMultiTurnReasoningVisibleFeatureEnabled",
  "executionAuthority",
  "noExecution"
], "M2 Multi-Turn Reasoning feature flag module");

assertIncludes(m3Harness, [
  "loadMultiTurnReasoningFlagFixtures",
  "validateMultiTurnReasoningFlagFixtures"
], "M3 Multi-Turn Reasoning harness");

assert.equal(DEFAULT_MULTI_TURN_REASONING_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_MULTI_TURN_REASONING_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_MULTI_TURN_REASONING_FEATURE_FLAG_STATE[field], false, `M5 default ${field} must remain false.`);
}
assert.equal(DEFAULT_MULTI_TURN_REASONING_FEATURE_FLAG_STATE.noExecution, true);

const normalizedUnsafeAttempt = normalizeMultiTurnReasoningFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true,
  contextReviewAllowed: true,
  boundedConversationContextAllowed: true,
  reasoningRuntimeAllowed: true,
  liveReasoningEngineAllowed: true,
  contextContinuationAllowed: true,
  hiddenTaskContinuationAllowed: true,
  contextBasedExecutionAllowed: true,
  memoryDerivedAuthorityAllowed: true,
  automaticRouteChangesAllowed: true,
  riskTierDowngradeAllowed: true,
  providerSelectionFromContextAllowed: true,
  toolSelectionFromContextAllowed: true,
  plannerActionCreationFromContextAllowed: true,
  policyBypassAllowed: true,
  confirmationBypassAllowed: true,
  permissionBypassAllowed: true,
  implicitPermissionAllowed: true,
  firstTurnExecutionAllowed: true,
  laterTurnExecutionAllowed: true,
  standardUserReasoningMutationAllowed: true,
  backendWriteAllowed: true,
  storageWriteAllowed: true,
  networkAllowed: true,
  auditWriteAllowed: true,
  executionAuthority: true,
  noExecution: false
});

assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateMultiTurnReasoningFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "M3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "M3 fixtures must remain complete.");

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-multi-turn-reasoning-readiness-contract.js",
  "nexus-multi-turn-reasoning-feature-flag.js",
  "nexus-sprint-m3-multi-turn-reasoning-flag-contract-harness",
  "multi-turn-reasoning-feature-flags.json",
  "NEXUS_MULTI_TURN_REASONING_VISIBLE_ENABLED",
  "NexusMultiTurnReasoningFeatureFlagContract",
  "normalizeMultiTurnReasoningFeatureFlagState",
  "isMultiTurnReasoningVisibleFeatureEnabled",
  "multiTurnReasoningRuntime",
  "reasoningRuntime",
  "contextContinuationAdapter",
  "continueHiddenTask",
  "executeFromContext",
  "autoRouteFromContext",
  "selectProviderFromContext",
  "grantPermissionFromContext",
  "downgradeRiskFromContext",
  "nexus-sprint-m5-multi-turn-reasoning-lane-closeout"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Multi-Turn Reasoning lane artifact: ${term}`);
}

for (const source of [featureFlagModule, m3Harness]) {
  for (const term of [
    "document.",
    "querySelector",
    "addEventListener",
    "fetch(",
    "XMLHttpRequest",
    "localStorage",
    "sessionStorage",
    "indexedDB",
    "navigator.credentials",
    "navigator.geolocation",
    "mediaDevices",
    "window.location",
    "location.href",
    "sendBeacon",
    "setItem",
    "postMessage",
    "window.nativeBridge",
    "nativeBridge.",
    "ACTION_CALL",
    "getUserMedia",
    "openWorkflow(",
    "goSection(",
    "continueHiddenTask(",
    "executeFromContext(",
    "routeFromContext(",
    "selectProviderFromContext("
  ]) {
    assert(!source.includes(term), `Sprint M contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-m5-multi-turn-reasoning-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint M5 QA.");

console.log("[nexus-sprint-m5-multi-turn-reasoning-lane-closeout-qa] passed");
