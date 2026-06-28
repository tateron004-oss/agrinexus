const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_FIELD_AGENT_MODE_FEATURE_FLAG_STATE,
  normalizeFieldAgentModeFeatureFlagState
} = require("../public/nexus-field-agent-mode-feature-flag.js");
const {
  protectedFields,
  loadFieldAgentModeFlagFixtures,
  validateFieldAgentModeFlagFixtures
} = require("./nexus-sprint-ag3-field-agent-mode-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AG5_FIELD_AGENT_MODE_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-ag5-field-agent-mode-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint AG5 lane closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint AG5 QA script must exist.");

const doc = read("docs", docName);
const ag4Doc = read("docs", "NEXUS_SPRINT_AG4_FIELD_AGENT_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-field-agent-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-field-agent-mode-feature-flag.js");
const harness = read("scripts", "nexus-sprint-ag3-field-agent-mode-flag-contract-harness.js");
const fixtures = loadFieldAgentModeFlagFixtures();

assertIncludes(doc, [
  "Sprint AG5",
  "729401bf33d928fdb7cdabe0addfb75e2dafaff4",
  "documentation and deterministic QA only",
  "Sprint AG Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint AH1 - Provider Mode Runtime Activation Readiness Gate"
], "AG5 closeout doc");

assertIncludes(doc, [
  "AG1 | Field Agent Mode runtime activation readiness gate | Complete",
  "AG2 | Field Agent Mode feature flag contract | Complete",
  "AG3 | Field Agent Mode flag contract harness | Complete",
  "AG4 | Field Agent Mode runtime absence regression guard | Complete",
  "AG5 | Field Agent Mode lane closeout | Complete"
], "AG5 completion table");

assertIncludes(ag4Doc, [
  "Sprint AG5 - Field Agent Mode Lane Closeout"
], "AG4 next sprint recommendation");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AG1_FIELD_AGENT_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_AG2_FIELD_AGENT_MODE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_AG3_FIELD_AGENT_MODE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_SPRINT_AG4_FIELD_AGENT_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md"],
  ["docs", "NEXUS_FIELD_AGENT_MODE_READINESS_CONTRACT_PHASE_85.md"],
  ["docs", "NEXUS_PROVIDER_MODE_READINESS_CONTRACT_PHASE_86.md"],
  ["public", "nexus-field-agent-mode-readiness-contract.js"],
  ["public", "nexus-field-agent-mode-feature-flag.js"],
  ["public", "nexus-provider-mode-readiness-contract.js"],
  ["fixtures", "nexus", "field-agent-mode-feature-flags.json"],
  ["scripts", "nexus-sprint-ag1-field-agent-mode-runtime-activation-readiness-gate-qa.js"],
  ["scripts", "nexus-sprint-ag2-field-agent-mode-feature-flag-contract-qa.js"],
  ["scripts", "nexus-sprint-ag3-field-agent-mode-flag-contract-harness-qa.js"],
  ["scripts", "nexus-sprint-ag4-field-agent-mode-runtime-absence-regression-guard-qa.js"],
  ["scripts", "nexus-field-agent-mode-readiness-contract-qa.js"],
  ["scripts", "nexus-provider-mode-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `AG5 requires artifact: ${requiredPath.join("/")}`);
}

assertIncludes(readinessContract, [
  "FIELD_AGENT_MODE_READINESS_CONTRACT",
  "field-agent-mode.readiness.phase_85",
  "FIELD_AGENT_MODE_NO_EXECUTION_DEFAULTS",
  "createFieldAgentModeReadinessContract",
  "\"executionAllowed\": false",
  "\"liveConnectorEnabled\": false",
  "\"providerExecutionEnabled\": false",
  "\"regulatedActionEnabled\": false",
  "communications",
  "location",
  "marketplace_transactions",
  "emergency",
  "regulated_execution"
], "Phase 85 Field Agent Mode readiness contract");

assert.equal(DEFAULT_FIELD_AGENT_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_FIELD_AGENT_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_FIELD_AGENT_MODE_FEATURE_FLAG_STATE[field], false, `AG5 default ${field} must remain false.`);
  assert(doc.includes(`${field}: false`), `AG5 doc must document ${field}: false.`);
}
assert.equal(DEFAULT_FIELD_AGENT_MODE_FEATURE_FLAG_STATE.noExecution, true);

const unsafeInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of protectedFields) {
  unsafeInput[field] = true;
}
const normalizedUnsafeAttempt = normalizeFieldAgentModeFeatureFlagState(unsafeInput);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateFieldAgentModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "AG3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "AG3 fixtures must remain complete.");

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-field-agent-mode-readiness-contract.js",
  "nexus-field-agent-mode-feature-flag.js",
  "nexus-sprint-ag3-field-agent-mode-flag-contract-harness",
  "field-agent-mode-feature-flags.json",
  "NEXUS_FIELD_AGENT_MODE_VISIBLE_ENABLED",
  "NexusFieldAgentModeFeatureFlagContract",
  "normalizeFieldAgentModeFeatureFlagState",
  "isFieldAgentModeVisibleFeatureEnabled",
  "fieldAgentModeFeatureFlag",
  "liveFieldAgentModeRuntime",
  "fieldConnectorRuntime",
  "fieldSourceConnectorRuntime",
  "offlineCaptureConnectorRuntime",
  "surveyConnectorRuntime",
  "caseIntakeConnectorRuntime",
  "taskAssignmentConnectorRuntime",
  "locationConnectorRuntime",
  "cameraConnectorRuntime",
  "microphoneConnectorRuntime",
  "providerConnectorRuntime",
  "dispatchFieldAgent(",
  "submitOfflineCapture(",
  "createFieldCase(",
  "assignFieldTask(",
  "contactFieldProvider(",
  "contactFieldSupervisor(",
  "contactProgramPartner(",
  "shareFieldLocation(",
  "activateFieldCamera(",
  "activateFieldMicrophone(",
  "processFieldPayment(",
  "nexus-sprint-ag5-field-agent-mode-lane-closeout"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Field Agent Mode lane artifact: ${term}`);
}

for (const source of [featureFlagModule, harness]) {
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
    "dispatchFieldAgent(",
    "submitOfflineCapture(",
    "createFieldCase(",
    "assignFieldTask(",
    "contactFieldProvider(",
    "contactFieldSupervisor(",
    "contactProgramPartner(",
    "shareFieldLocation(",
    "activateFieldCamera(",
    "activateFieldMicrophone(",
    "processFieldPayment(",
    "dispatchTransportation(",
    "dispatchEmergency(",
    "sharePatientLocation("
  ]) {
    assert(!source.includes(term), `Sprint AG contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-ag5-field-agent-mode-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AG5 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ag1-field-agent-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AG1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ag2-field-agent-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AG2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ag3-field-agent-mode-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint AG3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ag4-field-agent-mode-runtime-absence-regression-guard-qa.js"), "qa-suite must continue to include Sprint AG4 QA.");
assert(qaSuite.includes("scripts/nexus-field-agent-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 85 QA.");
assert(qaSuite.includes("scripts/nexus-provider-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 86 QA.");

console.log("[nexus-sprint-ag5-field-agent-mode-lane-closeout-qa] passed");
