const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  MULTI_TURN_REASONING_FEATURE_FLAG_NAME,
  DEFAULT_MULTI_TURN_REASONING_FEATURE_FLAG_STATE,
  normalizeMultiTurnReasoningFeatureFlagState,
  isMultiTurnReasoningVisibleFeatureEnabled
} = require("../public/nexus-multi-turn-reasoning-feature-flag.js");

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

const docName = "NEXUS_SPRINT_M2_MULTI_TURN_REASONING_FEATURE_FLAG_CONTRACT.md";
const moduleName = "nexus-multi-turn-reasoning-feature-flag.js";
const qaName = "nexus-sprint-m2-multi-turn-reasoning-feature-flag-contract-qa.js";

assert(exists("docs", docName), "Sprint M2 feature flag contract doc must exist.");
assert(exists("public", moduleName), "Sprint M2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint M2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const readinessContract = read("public", "nexus-multi-turn-reasoning-readiness-contract.js");
const m1Doc = read("docs", "NEXUS_SPRINT_M1_MULTI_TURN_REASONING_RUNTIME_ACTIVATION_READINESS_GATE.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint M2",
  "b68572f597721c3587cd334106bc5c41c0fc90a8",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_MULTI_TURN_REASONING_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Prohibited Behavior",
  "Relationship To Sprint M1",
  "QA Expectations",
  "Sprint M3 - Multi-Turn Reasoning Flag Contract Harness"
], "M2 feature flag doc");

assert(readinessContract.includes("multi_turn_reasoning.readiness.phase_65"), "M2 must build on the Phase 65 Multi-Turn Reasoning readiness contract.");
assert(readinessContract.includes("liveReasoningEngineEnabled: false"), "Phase 65 live reasoning engine default must remain false.");
assert(readinessContract.includes("contextBasedExecutionEnabled: false"), "Phase 65 context-based execution default must remain false.");
assert(readinessContract.includes("memoryDerivedAuthorityEnabled: false"), "Phase 65 memory-derived authority default must remain false.");
assert(readinessContract.includes("hiddenTaskContinuationEnabled: false"), "Phase 65 hidden task continuation default must remain false.");
assert(readinessContract.includes("providerSelectionFromContextEnabled: false"), "Phase 65 provider selection from context default must remain false.");
assert(readinessContract.includes("executionAllowed: false"), "Phase 65 execution default must remain false.");
assert(m1Doc.includes("Sprint M2 - Multi-Turn Reasoning Feature Flag Contract"), "M1 must recommend Sprint M2.");

const protectedFields = [
  "contextReviewAllowed",
  "boundedConversationContextAllowed",
  "reasoningRuntimeAllowed",
  "liveReasoningEngineAllowed",
  "contextContinuationAllowed",
  "hiddenTaskContinuationAllowed",
  "contextBasedExecutionAllowed",
  "memoryDerivedAuthorityAllowed",
  "automaticRouteChangesAllowed",
  "riskTierDowngradeAllowed",
  "providerSelectionFromContextAllowed",
  "toolSelectionFromContextAllowed",
  "plannerActionCreationFromContextAllowed",
  "policyBypassAllowed",
  "confirmationBypassAllowed",
  "permissionBypassAllowed",
  "implicitPermissionAllowed",
  "firstTurnExecutionAllowed",
  "laterTurnExecutionAllowed",
  "standardUserReasoningMutationAllowed",
  "backendWriteAllowed",
  "storageWriteAllowed",
  "networkAllowed",
  "auditWriteAllowed",
  "executionAuthority"
];

assert.equal(MULTI_TURN_REASONING_FEATURE_FLAG_NAME, "NEXUS_MULTI_TURN_REASONING_VISIBLE_ENABLED");
assert.equal(DEFAULT_MULTI_TURN_REASONING_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_MULTI_TURN_REASONING_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_MULTI_TURN_REASONING_FEATURE_FLAG_STATE.noExecution, true);
for (const field of protectedFields) {
  assert.equal(DEFAULT_MULTI_TURN_REASONING_FEATURE_FLAG_STATE[field], false, `default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `M2 doc must document ${field}: false.`);
}

const defaultState = normalizeMultiTurnReasoningFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isMultiTurnReasoningVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeMultiTurnReasoningFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true
});
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(isMultiTurnReasoningVisibleFeatureEnabled(visibleOnly), true);
for (const field of protectedFields) {
  assert.equal(visibleOnly[field], false, `visible-only state must keep ${field}=false.`);
}
assert.equal(visibleOnly.noExecution, true);

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
  assert.equal(unsafeAttempt[field], false, `unsafe attempt must keep ${field}=false.`);
}
assert.equal(unsafeAttempt.noExecution, true);

const runtime = [index, app, server].join("\n");
for (const term of [
  moduleName,
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
  assert(!runtime.includes(term), `Runtime must not load or activate Multi-Turn Reasoning feature flag artifact: ${term}`);
}

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
  assert(!moduleSource.includes(term), `M2 feature flag module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-m2-multi-turn-reasoning-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint M2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-m1-multi-turn-reasoning-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint M1 QA.");

console.log("[nexus-sprint-m2-multi-turn-reasoning-feature-flag-contract-qa] passed");
