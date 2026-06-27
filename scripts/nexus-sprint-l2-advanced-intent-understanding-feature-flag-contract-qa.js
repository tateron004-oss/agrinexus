const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_NAME,
  DEFAULT_ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_STATE,
  normalizeAdvancedIntentUnderstandingFeatureFlagState,
  isAdvancedIntentUnderstandingVisibleFeatureEnabled
} = require("../public/nexus-advanced-intent-understanding-feature-flag.js");

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

const docName = "NEXUS_SPRINT_L2_ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_CONTRACT.md";
const moduleName = "nexus-advanced-intent-understanding-feature-flag.js";
const qaName = "nexus-sprint-l2-advanced-intent-understanding-feature-flag-contract-qa.js";

assert(exists("docs", docName), "Sprint L2 feature flag contract doc must exist.");
assert(exists("public", moduleName), "Sprint L2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint L2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const readinessContract = read("public", "nexus-advanced-intent-understanding-readiness-contract.js");
const l1Doc = read("docs", "NEXUS_SPRINT_L1_ADVANCED_INTENT_UNDERSTANDING_RUNTIME_ACTIVATION_READINESS_GATE.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint L2",
  "743b954811917c1ab0917bf8ed7827ce2c4d6617",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_ADVANCED_INTENT_UNDERSTANDING_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Prohibited Behavior",
  "Relationship To Sprint L1",
  "QA Expectations",
  "Sprint L3 - Advanced Intent Understanding Flag Contract Harness"
], "L2 feature flag doc");

assert(readinessContract.includes("advanced_intent_understanding.readiness.phase_64"), "L2 must build on the Phase 64 Advanced Intent Understanding readiness contract.");
assert(readinessContract.includes("liveClassifierReplacementEnabled: false"), "Phase 64 live classifier replacement default must remain false.");
assert(readinessContract.includes("automaticRouteChangesEnabled: false"), "Phase 64 automatic route changes default must remain false.");
assert(readinessContract.includes("hiddenRiskDowngradeEnabled: false"), "Phase 64 hidden risk downgrade default must remain false.");
assert(readinessContract.includes("providerSelectionEnabled: false"), "Phase 64 provider selection default must remain false.");
assert(readinessContract.includes("rawAdapterCallsEnabled: false"), "Phase 64 raw adapter calls default must remain false.");
assert(readinessContract.includes("executionAllowed: false"), "Phase 64 execution default must remain false.");
assert(l1Doc.includes("Sprint L2 - Advanced Intent Understanding Feature Flag Contract"), "L1 must recommend Sprint L2.");

const protectedFields = [
  "classifierContextAllowed",
  "classifierRuntimeAllowed",
  "liveClassifierReplacementAllowed",
  "automaticRouteChangesAllowed",
  "hiddenRiskDowngradeAllowed",
  "confidenceRiskDowngradeAllowed",
  "providerSelectionAllowed",
  "toolSelectionAllowed",
  "plannerActionCreationAllowed",
  "policyBypassAllowed",
  "confirmationBypassAllowed",
  "permissionBypassAllowed",
  "rawAdapterCallsAllowed",
  "implicitPermissionAllowed",
  "firstTurnExecutionAllowed",
  "standardUserClassifierMutationAllowed",
  "backendWriteAllowed",
  "storageWriteAllowed",
  "networkAllowed",
  "auditWriteAllowed",
  "executionAuthority"
];

assert.equal(ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_NAME, "NEXUS_ADVANCED_INTENT_UNDERSTANDING_VISIBLE_ENABLED");
assert.equal(DEFAULT_ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_STATE.noExecution, true);
for (const field of protectedFields) {
  assert.equal(DEFAULT_ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_STATE[field], false, `default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `L2 doc must document ${field}: false.`);
}

const defaultState = normalizeAdvancedIntentUnderstandingFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isAdvancedIntentUnderstandingVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeAdvancedIntentUnderstandingFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true
});
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(isAdvancedIntentUnderstandingVisibleFeatureEnabled(visibleOnly), true);
for (const field of protectedFields) {
  assert.equal(visibleOnly[field], false, `visible-only state must keep ${field}=false.`);
}
assert.equal(visibleOnly.noExecution, true);

const unsafeAttempt = normalizeAdvancedIntentUnderstandingFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true,
  classifierContextAllowed: true,
  classifierRuntimeAllowed: true,
  liveClassifierReplacementAllowed: true,
  automaticRouteChangesAllowed: true,
  hiddenRiskDowngradeAllowed: true,
  confidenceRiskDowngradeAllowed: true,
  providerSelectionAllowed: true,
  toolSelectionAllowed: true,
  plannerActionCreationAllowed: true,
  policyBypassAllowed: true,
  confirmationBypassAllowed: true,
  permissionBypassAllowed: true,
  rawAdapterCallsAllowed: true,
  implicitPermissionAllowed: true,
  firstTurnExecutionAllowed: true,
  standardUserClassifierMutationAllowed: true,
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
  "NEXUS_ADVANCED_INTENT_UNDERSTANDING_VISIBLE_ENABLED",
  "NexusAdvancedIntentUnderstandingFeatureFlagContract",
  "normalizeAdvancedIntentUnderstandingFeatureFlagState",
  "isAdvancedIntentUnderstandingVisibleFeatureEnabled",
  "replaceClassifier",
  "activateIntentUnderstanding",
  "advancedIntentRuntime",
  "classifierRuntime",
  "autoRouteFromClassifier",
  "downgradeRiskFromClassifier",
  "selectProviderFromIntent",
  "executeIntent",
  "dispatchIntentAction"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Advanced Intent Understanding feature flag artifact: ${term}`);
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
  "replaceClassifier(",
  "routeAutomatically(",
  "selectProvider(",
  "executeIntent("
]) {
  assert(!moduleSource.includes(term), `L2 feature flag module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-l2-advanced-intent-understanding-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint L2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-l1-advanced-intent-understanding-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint L1 QA.");

console.log("[nexus-sprint-l2-advanced-intent-understanding-feature-flag-contract-qa] passed");
