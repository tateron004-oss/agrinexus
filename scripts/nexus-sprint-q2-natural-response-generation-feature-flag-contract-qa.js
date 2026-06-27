const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  NATURAL_RESPONSE_GENERATION_FEATURE_FLAG_NAME,
  DEFAULT_NATURAL_RESPONSE_GENERATION_FEATURE_FLAG_STATE,
  normalizeNaturalResponseGenerationFeatureFlagState,
  isNaturalResponseGenerationVisibleFeatureEnabled
} = require("../public/nexus-natural-response-generation-feature-flag.js");

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

const docName = "NEXUS_SPRINT_Q2_NATURAL_RESPONSE_GENERATION_FEATURE_FLAG_CONTRACT.md";
const moduleName = "nexus-natural-response-generation-feature-flag.js";
const qaName = "nexus-sprint-q2-natural-response-generation-feature-flag-contract-qa.js";

assert(exists("docs", docName), "Sprint Q2 feature flag contract doc must exist.");
assert(exists("public", moduleName), "Sprint Q2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint Q2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const readinessContract = read("public", "nexus-natural-response-generation-readiness-contract.js");
const q1Doc = read("docs", "NEXUS_SPRINT_Q1_NATURAL_RESPONSE_GENERATION_RUNTIME_ACTIVATION_READINESS_GATE.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint Q2",
  "b984b9d1835eed03399ddc123a20600103088008",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_NATURAL_RESPONSE_GENERATION_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Prohibited Behavior",
  "Relationship To Sprint Q1",
  "QA Expectations",
  "Sprint Q3 - Natural Response Generation Flag Contract Harness"
], "Q2 feature flag doc");

assert(readinessContract.includes("natural_response_generation.readiness.phase_69"), "Q2 must build on the Phase 69 Natural Response Generation readiness contract.");
assert(readinessContract.includes("liveResponseModelEnabled: false"), "Phase 69 live response model default must remain false.");
assert(readinessContract.includes("unsupportedClaimAllowed: false"), "Phase 69 unsupported claim default must remain false.");
assert(readinessContract.includes("providerConnectionClaimAllowed: false"), "Phase 69 provider connection claim default must remain false.");
assert(readinessContract.includes("completedActionClaimAllowed: false"), "Phase 69 completed action claim default must remain false.");
assert(readinessContract.includes("executionAllowed: false"), "Phase 69 execution default must remain false.");
assert(q1Doc.includes("Sprint Q2 - Natural Response Generation Feature Flag Contract"), "Q1 must recommend Sprint Q2.");

const protectedFields = [
  "responseReviewAllowed",
  "plainLanguagePreviewAllowed",
  "sourceTraceReviewAllowed",
  "responseRuntimeAllowed",
  "liveResponseModelAllowed",
  "unsupportedClaimAllowed",
  "providerConnectionClaimAllowed",
  "completedActionClaimAllowed",
  "diagnosisClaimAllowed",
  "prescriptionClaimAllowed",
  "paymentCompletionClaimAllowed",
  "transactionCompletionClaimAllowed",
  "emergencyDispatchClaimAllowed",
  "locationSharingClaimAllowed",
  "callMessageSentClaimAllowed",
  "sourceRetrievalRuntimeAllowed",
  "policyBypassAllowed",
  "confirmationBypassAllowed",
  "permissionBypassAllowed",
  "firstTurnExecutionAllowed",
  "laterTurnExecutionAllowed",
  "standardUserResponseGeneratorMutationAllowed",
  "backendWriteAllowed",
  "storageWriteAllowed",
  "networkAllowed",
  "auditWriteAllowed",
  "executionAuthority"
];

assert.equal(NATURAL_RESPONSE_GENERATION_FEATURE_FLAG_NAME, "NEXUS_NATURAL_RESPONSE_GENERATION_VISIBLE_ENABLED");
assert.equal(DEFAULT_NATURAL_RESPONSE_GENERATION_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_NATURAL_RESPONSE_GENERATION_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_NATURAL_RESPONSE_GENERATION_FEATURE_FLAG_STATE.noExecution, true);
for (const field of protectedFields) {
  assert.equal(DEFAULT_NATURAL_RESPONSE_GENERATION_FEATURE_FLAG_STATE[field], false, `default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `Q2 doc must document ${field}: false.`);
}

const defaultState = normalizeNaturalResponseGenerationFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isNaturalResponseGenerationVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeNaturalResponseGenerationFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true
});
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(isNaturalResponseGenerationVisibleFeatureEnabled(visibleOnly), true);
for (const field of protectedFields) {
  assert.equal(visibleOnly[field], false, `visible-only state must keep ${field}=false.`);
}
assert.equal(visibleOnly.noExecution, true);

const unsafeAttempt = normalizeNaturalResponseGenerationFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true,
  responseReviewAllowed: true,
  plainLanguagePreviewAllowed: true,
  sourceTraceReviewAllowed: true,
  responseRuntimeAllowed: true,
  liveResponseModelAllowed: true,
  unsupportedClaimAllowed: true,
  providerConnectionClaimAllowed: true,
  completedActionClaimAllowed: true,
  diagnosisClaimAllowed: true,
  prescriptionClaimAllowed: true,
  paymentCompletionClaimAllowed: true,
  transactionCompletionClaimAllowed: true,
  emergencyDispatchClaimAllowed: true,
  locationSharingClaimAllowed: true,
  callMessageSentClaimAllowed: true,
  sourceRetrievalRuntimeAllowed: true,
  policyBypassAllowed: true,
  confirmationBypassAllowed: true,
  permissionBypassAllowed: true,
  firstTurnExecutionAllowed: true,
  laterTurnExecutionAllowed: true,
  standardUserResponseGeneratorMutationAllowed: true,
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
  "NEXUS_NATURAL_RESPONSE_GENERATION_VISIBLE_ENABLED",
  "NexusNaturalResponseGenerationFeatureFlagContract",
  "normalizeNaturalResponseGenerationFeatureFlagState",
  "isNaturalResponseGenerationVisibleFeatureEnabled",
  "naturalResponseGenerationRuntime",
  "liveResponseModel",
  "generateLiveResponse(",
  "replaceAssistantResponse(",
  "retrieveSources(",
  "claimCompletedAction(",
  "connectProvider("
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Natural Response Generation feature flag artifact: ${term}`);
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
  "generateLiveResponse(",
  "replaceAssistantResponse(",
  "retrieveSources(",
  "claimCompletedAction(",
  "connectProvider("
]) {
  assert(!moduleSource.includes(term), `Q2 feature flag module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-q2-natural-response-generation-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint Q2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-q1-natural-response-generation-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint Q1 QA.");

console.log("[nexus-sprint-q2-natural-response-generation-feature-flag-contract-qa] passed");
