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

const docName = "NEXUS_SPRINT_O4_TOOL_PROVIDER_SELECTION_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-o4-tool-provider-selection-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint O4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint O4 QA script must exist.");

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
  "Sprint O4",
  "8b1047f41c36cb8ea786be6bdee7196e943d8f4c",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint O5 - Tool Provider Selection Lane Closeout"
], "O4 absence guard doc");

assertIncludes(doc, [
  "O1 Tool Provider Selection runtime activation readiness gate",
  "O2 Tool Provider Selection feature flag contract",
  "O3 Tool Provider Selection flag contract harness",
  "Phase 67 Tool Provider Selection readiness contract"
], "O4 protected artifacts");

assertIncludes(doc, [
  "public/nexus-tool-provider-selection-readiness-contract.js",
  "public/nexus-tool-provider-selection-feature-flag.js",
  "scripts/nexus-sprint-o3-tool-provider-selection-flag-contract-harness.js",
  "fixtures/nexus/tool-provider-selection-feature-flags.json",
  "Sprint O QA scripts"
], "O4 runtime absence artifact list");

assertIncludes(doc, [
  "It intentionally does not ban generic words such as",
  "tool",
  "provider",
  "selection",
  "route",
  "review",
  "language",
  "settings"
], "O4 generic wording exception");

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
], "O4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_O1_TOOL_PROVIDER_SELECTION_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_O2_TOOL_PROVIDER_SELECTION_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_O3_TOOL_PROVIDER_SELECTION_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_TOOL_PROVIDER_SELECTION_READINESS_CONTRACT_PHASE_67.md"],
  ["public", "nexus-tool-provider-selection-readiness-contract.js"],
  ["public", "nexus-tool-provider-selection-feature-flag.js"],
  ["fixtures", "nexus", "tool-provider-selection-feature-flags.json"],
  ["scripts", "nexus-sprint-o3-tool-provider-selection-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `O4 requires artifact: ${requiredPath.join("/")}`);
}

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
  "nexus-sprint-o4-tool-provider-selection-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Tool Provider Selection lane artifact: ${term}`);
}

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

assert.equal(DEFAULT_TOOL_PROVIDER_SELECTION_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_TOOL_PROVIDER_SELECTION_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_TOOL_PROVIDER_SELECTION_FEATURE_FLAG_STATE[field], false, `O4 default ${field} must remain false.`);
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

const alias = "qa:nexus-sprint-o4-tool-provider-selection-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint O4 QA.");

console.log("[nexus-sprint-o4-tool-provider-selection-runtime-absence-regression-guard-qa] passed");
