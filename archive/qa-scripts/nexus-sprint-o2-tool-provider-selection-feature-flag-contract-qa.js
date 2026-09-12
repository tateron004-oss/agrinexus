const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  TOOL_PROVIDER_SELECTION_FEATURE_FLAG_NAME,
  DEFAULT_TOOL_PROVIDER_SELECTION_FEATURE_FLAG_STATE,
  normalizeToolProviderSelectionFeatureFlagState,
  isToolProviderSelectionVisibleFeatureEnabled
} = require("../public/nexus-tool-provider-selection-feature-flag.js");

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

const docName = "NEXUS_SPRINT_O2_TOOL_PROVIDER_SELECTION_FEATURE_FLAG_CONTRACT.md";
const moduleName = "nexus-tool-provider-selection-feature-flag.js";
const qaName = "nexus-sprint-o2-tool-provider-selection-feature-flag-contract-qa.js";

assert(exists("docs", docName), "Sprint O2 feature flag contract doc must exist.");
assert(exists("public", moduleName), "Sprint O2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint O2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const readinessContract = read("public", "nexus-tool-provider-selection-readiness-contract.js");
const o1Doc = read("docs", "NEXUS_SPRINT_O1_TOOL_PROVIDER_SELECTION_RUNTIME_ACTIVATION_READINESS_GATE.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint O2",
  "24d8797dc62ab32cfcf02d9c7bb11b435f540da0",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_TOOL_PROVIDER_SELECTION_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Prohibited Behavior",
  "Relationship To Sprint O1",
  "QA Expectations",
  "Sprint O3 - Tool Provider Selection Flag Contract Harness"
], "O2 feature flag doc");

assert(readinessContract.includes("tool_provider_selection.readiness.phase_67"), "O2 must build on the Phase 67 Tool/Provider Selection readiness contract.");
assert(readinessContract.includes("liveSelectionEngineEnabled: false"), "Phase 67 live selection engine default must remain false.");
assert(readinessContract.includes("rawAdapterCallsEnabled: false"), "Phase 67 raw adapter calls default must remain false.");
assert(readinessContract.includes("silentProviderHandoffEnabled: false"), "Phase 67 silent provider handoff default must remain false.");
assert(readinessContract.includes("executionAllowed: false"), "Phase 67 execution default must remain false.");
assert(o1Doc.includes("Sprint O2 - Tool Provider Selection Feature Flag Contract"), "O1 must recommend Sprint O2.");

const protectedFields = [
  "selectionReviewAllowed",
  "providerPathPreviewAllowed",
  "selectionRuntimeAllowed",
  "liveSelectionEngineAllowed",
  "rawAdapterCallsAllowed",
  "providerCallsFromRawIntentAllowed",
  "silentProviderHandoffAllowed",
  "automaticConnectorExecutionAllowed",
  "providerCredentialUseAllowed",
  "paymentProviderSelectionAllowed",
  "regulatedProviderExecutionAllowed",
  "emergencyProviderDispatchAllowed",
  "transportationDispatchProviderExecutionAllowed",
  "communicationProviderExecutionAllowed",
  "locationCameraProviderActivationAllowed",
  "selectedToolIdRouteMutationAllowed",
  "selectedToolIdRiskMutationAllowed",
  "selectedToolIdProviderHandoffAllowed",
  "policyBypassAllowed",
  "confirmationBypassAllowed",
  "permissionBypassAllowed",
  "firstTurnExecutionAllowed",
  "laterTurnExecutionAllowed",
  "standardUserSelectionMutationAllowed",
  "backendWriteAllowed",
  "storageWriteAllowed",
  "networkAllowed",
  "auditWriteAllowed",
  "executionAuthority"
];

assert.equal(TOOL_PROVIDER_SELECTION_FEATURE_FLAG_NAME, "NEXUS_TOOL_PROVIDER_SELECTION_VISIBLE_ENABLED");
assert.equal(DEFAULT_TOOL_PROVIDER_SELECTION_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_TOOL_PROVIDER_SELECTION_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_TOOL_PROVIDER_SELECTION_FEATURE_FLAG_STATE.noExecution, true);
for (const field of protectedFields) {
  assert.equal(DEFAULT_TOOL_PROVIDER_SELECTION_FEATURE_FLAG_STATE[field], false, `default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `O2 doc must document ${field}: false.`);
}

const defaultState = normalizeToolProviderSelectionFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isToolProviderSelectionVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeToolProviderSelectionFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true
});
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(isToolProviderSelectionVisibleFeatureEnabled(visibleOnly), true);
for (const field of protectedFields) {
  assert.equal(visibleOnly[field], false, `visible-only state must keep ${field}=false.`);
}
assert.equal(visibleOnly.noExecution, true);

const unsafeAttempt = normalizeToolProviderSelectionFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true,
  selectionReviewAllowed: true,
  providerPathPreviewAllowed: true,
  selectionRuntimeAllowed: true,
  liveSelectionEngineAllowed: true,
  rawAdapterCallsAllowed: true,
  providerCallsFromRawIntentAllowed: true,
  silentProviderHandoffAllowed: true,
  automaticConnectorExecutionAllowed: true,
  providerCredentialUseAllowed: true,
  paymentProviderSelectionAllowed: true,
  regulatedProviderExecutionAllowed: true,
  emergencyProviderDispatchAllowed: true,
  transportationDispatchProviderExecutionAllowed: true,
  communicationProviderExecutionAllowed: true,
  locationCameraProviderActivationAllowed: true,
  selectedToolIdRouteMutationAllowed: true,
  selectedToolIdRiskMutationAllowed: true,
  selectedToolIdProviderHandoffAllowed: true,
  policyBypassAllowed: true,
  confirmationBypassAllowed: true,
  permissionBypassAllowed: true,
  firstTurnExecutionAllowed: true,
  laterTurnExecutionAllowed: true,
  standardUserSelectionMutationAllowed: true,
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
  "NEXUS_TOOL_PROVIDER_SELECTION_VISIBLE_ENABLED",
  "NexusToolProviderSelectionFeatureFlagContract",
  "normalizeToolProviderSelectionFeatureFlagState",
  "isToolProviderSelectionVisibleFeatureEnabled",
  "toolProviderSelectionRuntime",
  "providerSelectionRuntime",
  "providerSelectionAdapter",
  "selectAndExecuteProvider",
  "openProvider(",
  "callAdapter("
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Tool/Provider Selection feature flag artifact: ${term}`);
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
  "openProvider(",
  "callAdapter(",
  "selectAndExecuteProvider("
]) {
  assert(!moduleSource.includes(term), `O2 feature flag module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-o2-tool-provider-selection-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint O2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-o1-tool-provider-selection-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint O1 QA.");

console.log("[nexus-sprint-o2-tool-provider-selection-feature-flag-contract-qa] passed");
