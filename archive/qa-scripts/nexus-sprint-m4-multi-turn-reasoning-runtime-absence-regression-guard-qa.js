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

const docName = "NEXUS_SPRINT_M4_MULTI_TURN_REASONING_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-m4-multi-turn-reasoning-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint M4 runtime absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint M4 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const featureFlagModule = read("public", "nexus-multi-turn-reasoning-feature-flag.js");
const harnessSource = read("scripts", "nexus-sprint-m3-multi-turn-reasoning-flag-contract-harness.js");
const fixtures = loadMultiTurnReasoningFlagFixtures();

assertIncludes(doc, [
  "Sprint M4",
  "1d89ba9b98229ad1df183d29360d912f4c9a1205",
  "documentation and QA only",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Sprint M5 - Multi-Turn Reasoning Lane Closeout"
], "M4 runtime absence doc");

assertIncludes(doc, [
  "public/nexus-multi-turn-reasoning-readiness-contract.js",
  "public/nexus-multi-turn-reasoning-feature-flag.js",
  "scripts/nexus-sprint-m3-multi-turn-reasoning-flag-contract-harness.js",
  "fixtures/nexus/multi-turn-reasoning-feature-flags.json",
  "It intentionally does not ban generic words such as reasoning, context, route, memory, language, or settings"
], "M4 protected artifact list");

assertIncludes(doc, [
  "live reasoning engine replacement",
  "active context continuation adapters",
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
], "M4 blocked runtime behavior");

for (const prior of [
  ["docs", "NEXUS_SPRINT_M1_MULTI_TURN_REASONING_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_M2_MULTI_TURN_REASONING_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_M3_MULTI_TURN_REASONING_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_MULTI_TURN_REASONING_READINESS_CONTRACT_PHASE_65.md"],
  ["public", "nexus-multi-turn-reasoning-readiness-contract.js"],
  ["public", "nexus-multi-turn-reasoning-feature-flag.js"],
  ["fixtures", "nexus", "multi-turn-reasoning-feature-flags.json"],
  ["scripts", "nexus-sprint-m3-multi-turn-reasoning-flag-contract-harness.js"]
]) {
  assert(exists(...prior), `Sprint M4 requires prior artifact: ${prior.join("/")}`);
}

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
  "downgradeRiskFromContext"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Multi-Turn Reasoning artifact: ${term}`);
}

assert.equal(DEFAULT_MULTI_TURN_REASONING_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_MULTI_TURN_REASONING_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_MULTI_TURN_REASONING_FEATURE_FLAG_STATE[field], false, `M2 default ${field} must remain false.`);
}
assert.equal(DEFAULT_MULTI_TURN_REASONING_FEATURE_FLAG_STATE.noExecution, true);

const unsafeAttempt = normalizeMultiTurnReasoningFeatureFlagState({
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
assert.equal(unsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(unsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(unsafeAttempt.noExecution, true);

const fixtureResult = validateMultiTurnReasoningFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "M3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "M3 fixtures must remain complete.");

for (const source of [featureFlagModule, harnessSource]) {
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
    "open(",
    "sendBeacon",
    "setItem",
    "postMessage",
    "window.nativeBridge",
    "nativeBridge.",
    "ACTION_CALL",
    "getUserMedia",
    "openWorkflow(",
    "goSection(",
    "executeFromContext(",
    "continueHiddenTask(",
    "selectProviderFromContext(",
    "grantPermissionFromContext("
  ]) {
    assert(!source.includes(term), `M2/M3 artifact must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-m4-multi-turn-reasoning-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint M4 QA.");

console.log("[nexus-sprint-m4-multi-turn-reasoning-runtime-absence-regression-guard-qa] passed");
