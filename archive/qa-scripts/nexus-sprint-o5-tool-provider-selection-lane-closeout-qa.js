const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_TOOL_PROVIDER_SELECTION_FEATURE_FLAG_STATE,
  normalizeToolProviderSelectionFeatureFlagState
} = require("../public/nexus-tool-provider-selection-feature-flag.js");
const {
  protectedFields,
  loadToolProviderSelectionFlagFixtures,
  validateToolProviderSelectionFlagFixtures
} = require("./nexus-sprint-o3-tool-provider-selection-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_O5_TOOL_PROVIDER_SELECTION_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-o5-tool-provider-selection-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint O5 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint O5 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-tool-provider-selection-readiness-contract.js");
const featureFlagModule = read("public", "nexus-tool-provider-selection-feature-flag.js");
const o3Harness = read("scripts", "nexus-sprint-o3-tool-provider-selection-flag-contract-harness.js");
const fixtures = loadToolProviderSelectionFlagFixtures();

assertIncludes(doc, [
  "Sprint O5",
  "5c794670c955838e65b09844ea6cd479b1b273a2",
  "documentation and deterministic QA only",
  "Sprint O Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint P1 - Orchestration Engine Runtime Activation Readiness Gate"
], "O5 closeout doc");

assertIncludes(doc, [
  "Tool Provider Selection runtime activation readiness gate",
  "Tool Provider Selection feature flag contract",
  "Tool Provider Selection flag contract harness",
  "Tool Provider Selection runtime absence regression guard",
  "Tool Provider Selection lane closeout"
], "O5 sprint summary");

assertIncludes(doc, [
  "Tool Provider Selection readiness is not runtime activation",
  "Tool Provider Selection visibility readiness is not provider authority",
  "selectedToolId metadata is not consent, identity, role authorization, provider authorization, provider availability, or execution approval",
  "provider metadata must remain non-authoritative context",
  "provider selection cannot authorize, stage, dispatch, or execute an action by itself",
  "ambiguous prompts must clarify rather than infer high-impact intent from provider metadata",
  "enabled: false",
  "visibleUiAllowed: false",
  "selectionReviewAllowed: false",
  "providerPathPreviewAllowed: false",
  "selectionRuntimeAllowed: false",
  "liveSelectionEngineAllowed: false",
  "rawAdapterCallsAllowed: false",
  "providerCallsFromRawIntentAllowed: false",
  "silentProviderHandoffAllowed: false",
  "automaticConnectorExecutionAllowed: false",
  "providerCredentialUseAllowed: false",
  "paymentProviderSelectionAllowed: false",
  "regulatedProviderExecutionAllowed: false",
  "emergencyProviderDispatchAllowed: false",
  "transportationDispatchProviderExecutionAllowed: false",
  "communicationProviderExecutionAllowed: false",
  "locationCameraProviderActivationAllowed: false",
  "selectedToolIdRouteMutationAllowed: false",
  "selectedToolIdRiskMutationAllowed: false",
  "selectedToolIdProviderHandoffAllowed: false",
  "policyBypassAllowed: false",
  "confirmationBypassAllowed: false",
  "permissionBypassAllowed: false",
  "firstTurnExecutionAllowed: false",
  "laterTurnExecutionAllowed: false",
  "standardUserSelectionMutationAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "auditWriteAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "unsafe authority attempts normalize back to no-execution values",
  "no action has been taken"
], "O5 no-authority and no-execution language");

assertIncludes(doc, [
  "live selection engine",
  "active provider selection adapter",
  "connector picker runtime UI",
  "provider path preview UI",
  "provider review buttons",
  "event handlers",
  "typed route mutation",
  "voice route mutation",
  "automatic route changes from selectedToolId metadata",
  "selectedToolId route mutation",
  "selectedToolId risk mutation",
  "selectedToolId provider handoff",
  "raw adapter calls",
  "provider calls from raw intent",
  "silent provider handoff",
  "automatic connector execution",
  "provider credential use",
  "payment provider selection",
  "regulated provider execution",
  "emergency provider dispatch",
  "transportation dispatch provider execution",
  "communication provider execution",
  "location or camera provider activation",
  "ambiguous prompt execution",
  "policy bypass from provider selection",
  "confirmation bypass from provider selection",
  "permission bypass from provider selection",
  "medical diagnosis from provider selection",
  "pharmacy or prescription execution from provider selection",
  "payment or marketplace transaction execution from provider selection",
  "emergency dispatch from provider selection",
  "contact or message execution from provider selection",
  "location or camera activation from provider selection",
  "identity verification from provider selection",
  "role or permission elevation from provider selection",
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
], "O5 blocked runtime categories");

const requiredDocs = [
  "NEXUS_SPRINT_O1_TOOL_PROVIDER_SELECTION_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "NEXUS_SPRINT_O2_TOOL_PROVIDER_SELECTION_FEATURE_FLAG_CONTRACT.md",
  "NEXUS_SPRINT_O3_TOOL_PROVIDER_SELECTION_FLAG_CONTRACT_HARNESS.md",
  "NEXUS_SPRINT_O4_TOOL_PROVIDER_SELECTION_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "NEXUS_TOOL_PROVIDER_SELECTION_READINESS_CONTRACT_PHASE_67.md",
  "NEXUS_ORCHESTRATION_ENGINE_READINESS_CONTRACT_PHASE_68.md"
];

for (const requiredDoc of requiredDocs) {
  assert(exists("docs", requiredDoc), `Sprint O5 requires prior or next-lane doc: ${requiredDoc}`);
}

const requiredScripts = [
  "nexus-sprint-o1-tool-provider-selection-runtime-activation-readiness-gate-qa.js",
  "nexus-sprint-o2-tool-provider-selection-feature-flag-contract-qa.js",
  "nexus-sprint-o3-tool-provider-selection-flag-contract-harness-qa.js",
  "nexus-sprint-o4-tool-provider-selection-runtime-absence-regression-guard-qa.js"
];

for (const requiredScript of requiredScripts) {
  assert(exists("scripts", requiredScript), `Sprint O5 requires prior Sprint O QA: ${requiredScript}`);
  assert(qaSuite.includes(`scripts/${requiredScript}`), `qa-suite must include prior Sprint O QA: ${requiredScript}`);
}

assert(exists("public", "nexus-tool-provider-selection-readiness-contract.js"), "Sprint O5 requires Phase 67 Tool Provider Selection readiness contract.");
assert(exists("public", "nexus-tool-provider-selection-feature-flag.js"), "Sprint O5 requires O2 feature flag contract.");
assert(exists("fixtures", "nexus", "tool-provider-selection-feature-flags.json"), "Sprint O5 requires O3 feature flag fixture.");
assert(exists("public", "nexus-orchestration-engine-readiness-contract.js"), "Sprint O5 requires Phase 68 Orchestration Engine readiness contract.");

assertIncludes(readinessContract, [
  "TOOL_PROVIDER_SELECTION_READINESS_CONTRACT",
  "tool_provider_selection.readiness.phase_67",
  "TOOL_PROVIDER_SELECTION_NO_EXECUTION_DEFAULTS",
  "createToolProviderSelectionReadinessContract",
  "executionAllowed: false",
  "liveSelectionEngineEnabled: false",
  "rawAdapterCallsEnabled: false",
  "silentProviderHandoffEnabled: false"
], "Phase 67 Tool Provider Selection readiness contract");

assertIncludes(featureFlagModule, [
  "DEFAULT_TOOL_PROVIDER_SELECTION_FEATURE_FLAG_STATE",
  "NEXUS_TOOL_PROVIDER_SELECTION_VISIBLE_ENABLED",
  "normalizeToolProviderSelectionFeatureFlagState",
  "isToolProviderSelectionVisibleFeatureEnabled",
  "executionAuthority",
  "noExecution"
], "O2 Tool Provider Selection feature flag module");

assertIncludes(o3Harness, [
  "loadToolProviderSelectionFlagFixtures",
  "validateToolProviderSelectionFlagFixtures"
], "O3 Tool Provider Selection harness");

assert.equal(DEFAULT_TOOL_PROVIDER_SELECTION_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_TOOL_PROVIDER_SELECTION_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_TOOL_PROVIDER_SELECTION_FEATURE_FLAG_STATE[field], false, `O5 default ${field} must remain false.`);
}
assert.equal(DEFAULT_TOOL_PROVIDER_SELECTION_FEATURE_FLAG_STATE.noExecution, true);

const normalizedUnsafeAttempt = normalizeToolProviderSelectionFeatureFlagState({
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

assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateToolProviderSelectionFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "O3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "O3 fixtures must remain complete.");

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-tool-provider-selection-readiness-contract.js",
  "nexus-tool-provider-selection-feature-flag.js",
  "nexus-sprint-o3-tool-provider-selection-flag-contract-harness",
  "tool-provider-selection-feature-flags.json",
  "NEXUS_TOOL_PROVIDER_SELECTION_VISIBLE_ENABLED",
  "NexusToolProviderSelectionFeatureFlagContract",
  "normalizeToolProviderSelectionFeatureFlagState",
  "isToolProviderSelectionVisibleFeatureEnabled",
  "toolProviderSelectionRuntime",
  "providerSelectionRuntime",
  "providerSelectionAdapter",
  "selectAndExecuteProvider",
  "openProvider(",
  "callAdapter(",
  "nexus-sprint-o5-tool-provider-selection-lane-closeout"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Tool Provider Selection lane artifact: ${term}`);
}

for (const source of [featureFlagModule, o3Harness]) {
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
    "openProvider(",
    "callAdapter(",
    "selectAndExecuteProvider("
  ]) {
    assert(!source.includes(term), `Sprint O contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-o5-tool-provider-selection-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint O5 QA.");

console.log("[nexus-sprint-o5-tool-provider-selection-lane-closeout-qa] passed");
