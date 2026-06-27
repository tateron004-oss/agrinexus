const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  ORCHESTRATION_ENGINE_FEATURE_FLAG_NAME,
  DEFAULT_ORCHESTRATION_ENGINE_FEATURE_FLAG_STATE,
  normalizeOrchestrationEngineFeatureFlagState,
  isOrchestrationEngineVisibleFeatureEnabled
} = require("../public/nexus-orchestration-engine-feature-flag.js");

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

const docName = "NEXUS_SPRINT_P2_ORCHESTRATION_ENGINE_FEATURE_FLAG_CONTRACT.md";
const moduleName = "nexus-orchestration-engine-feature-flag.js";
const qaName = "nexus-sprint-p2-orchestration-engine-feature-flag-contract-qa.js";

assert(exists("docs", docName), "Sprint P2 feature flag contract doc must exist.");
assert(exists("public", moduleName), "Sprint P2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint P2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const readinessContract = read("public", "nexus-orchestration-engine-readiness-contract.js");
const p1Doc = read("docs", "NEXUS_SPRINT_P1_ORCHESTRATION_ENGINE_RUNTIME_ACTIVATION_READINESS_GATE.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint P2",
  "2d345636ec5548bc40870126a71c0a776b0ef4a3",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_ORCHESTRATION_ENGINE_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Prohibited Behavior",
  "Relationship To Sprint P1",
  "QA Expectations",
  "Sprint P3 - Orchestration Engine Flag Contract Harness"
], "P2 feature flag doc");

assert(readinessContract.includes("orchestration_engine.readiness.phase_68"), "P2 must build on the Phase 68 Orchestration Engine readiness contract.");
assert(readinessContract.includes("liveOrchestrationEngineEnabled: false"), "Phase 68 live orchestration engine default must remain false.");
assert(readinessContract.includes("autonomousHighRiskOrchestrationEnabled: false"), "Phase 68 autonomous high-risk orchestration default must remain false.");
assert(readinessContract.includes("providerAdapterExecutionEnabled: false"), "Phase 68 provider adapter execution default must remain false.");
assert(readinessContract.includes("executionAllowed: false"), "Phase 68 execution default must remain false.");
assert(p1Doc.includes("Sprint P2 - Orchestration Engine Feature Flag Contract"), "P1 must recommend Sprint P2.");

const protectedFields = [
  "orchestrationReviewAllowed",
  "orchestrationTracePreviewAllowed",
  "orchestrationRuntimeAllowed",
  "liveOrchestrationEngineAllowed",
  "executableStepsAllowed",
  "automaticStepChainingAllowed",
  "backgroundExecutionAllowed",
  "providerAdapterExecutionAllowed",
  "rawAdapterCallsAllowed",
  "silentProviderHandoffAllowed",
  "autonomousHighRiskOrchestrationAllowed",
  "orchestrationFromRawIntentAllowed",
  "planBasedOrchestrationExecutionAllowed",
  "selectedToolIdOrchestrationExecutionAllowed",
  "contextBasedOrchestrationExecutionAllowed",
  "policyBypassAllowed",
  "confirmationBypassAllowed",
  "permissionBypassAllowed",
  "firstTurnExecutionAllowed",
  "laterTurnExecutionAllowed",
  "standardUserOrchestrationMutationAllowed",
  "backendWriteAllowed",
  "storageWriteAllowed",
  "networkAllowed",
  "auditWriteAllowed",
  "executionAuthority"
];

assert.equal(ORCHESTRATION_ENGINE_FEATURE_FLAG_NAME, "NEXUS_ORCHESTRATION_ENGINE_VISIBLE_ENABLED");
assert.equal(DEFAULT_ORCHESTRATION_ENGINE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_ORCHESTRATION_ENGINE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_ORCHESTRATION_ENGINE_FEATURE_FLAG_STATE.noExecution, true);
for (const field of protectedFields) {
  assert.equal(DEFAULT_ORCHESTRATION_ENGINE_FEATURE_FLAG_STATE[field], false, `default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `P2 doc must document ${field}: false.`);
}

const defaultState = normalizeOrchestrationEngineFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isOrchestrationEngineVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeOrchestrationEngineFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true
});
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(isOrchestrationEngineVisibleFeatureEnabled(visibleOnly), true);
for (const field of protectedFields) {
  assert.equal(visibleOnly[field], false, `visible-only state must keep ${field}=false.`);
}
assert.equal(visibleOnly.noExecution, true);

const unsafeAttempt = normalizeOrchestrationEngineFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true,
  orchestrationReviewAllowed: true,
  orchestrationTracePreviewAllowed: true,
  orchestrationRuntimeAllowed: true,
  liveOrchestrationEngineAllowed: true,
  executableStepsAllowed: true,
  automaticStepChainingAllowed: true,
  backgroundExecutionAllowed: true,
  providerAdapterExecutionAllowed: true,
  rawAdapterCallsAllowed: true,
  silentProviderHandoffAllowed: true,
  autonomousHighRiskOrchestrationAllowed: true,
  orchestrationFromRawIntentAllowed: true,
  planBasedOrchestrationExecutionAllowed: true,
  selectedToolIdOrchestrationExecutionAllowed: true,
  contextBasedOrchestrationExecutionAllowed: true,
  policyBypassAllowed: true,
  confirmationBypassAllowed: true,
  permissionBypassAllowed: true,
  firstTurnExecutionAllowed: true,
  laterTurnExecutionAllowed: true,
  standardUserOrchestrationMutationAllowed: true,
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
  "NEXUS_ORCHESTRATION_ENGINE_VISIBLE_ENABLED",
  "NexusOrchestrationEngineFeatureFlagContract",
  "normalizeOrchestrationEngineFeatureFlagState",
  "isOrchestrationEngineVisibleFeatureEnabled",
  "orchestrationEngineRuntime",
  "orchestratorRuntime",
  "orchestrationStepRunner",
  "runOrchestration(",
  "executeStep(",
  "chainSteps(",
  "callAdapter(",
  "dispatchEmergency("
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Orchestration Engine feature flag artifact: ${term}`);
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
  "runOrchestration(",
  "executeStep(",
  "chainSteps(",
  "callAdapter(",
  "dispatchEmergency("
]) {
  assert(!moduleSource.includes(term), `P2 feature flag module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-p2-orchestration-engine-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint P2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-p1-orchestration-engine-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint P1 QA.");

console.log("[nexus-sprint-p2-orchestration-engine-feature-flag-contract-qa] passed");
