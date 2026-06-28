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

const docName = "NEXUS_SPRINT_AG4_FIELD_AGENT_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-ag4-field-agent-mode-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint AG4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint AG4 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-field-agent-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-field-agent-mode-feature-flag.js");
const ag3Harness = read("scripts", "nexus-sprint-ag3-field-agent-mode-flag-contract-harness.js");
const fixtures = loadFieldAgentModeFlagFixtures();

assertIncludes(doc, [
  "Sprint AG4",
  "088e51b716d2f7ec6900a49d0a7c152345f6f2a2",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint AG5 - Field Agent Mode Lane Closeout"
], "AG4 absence guard doc");

assertIncludes(doc, [
  "AG1 Field Agent Mode runtime activation readiness gate",
  "AG2 Field Agent Mode feature flag contract",
  "AG3 Field Agent Mode flag contract harness",
  "Phase 85 Field Agent Mode readiness contract"
], "AG4 protected artifacts");

assertIncludes(doc, [
  "public/nexus-field-agent-mode-readiness-contract.js",
  "public/nexus-field-agent-mode-feature-flag.js",
  "scripts/nexus-sprint-ag3-field-agent-mode-flag-contract-harness.js",
  "fixtures/nexus/field-agent-mode-feature-flags.json",
  "Sprint AG QA scripts"
], "AG4 runtime absence artifact list");

assertIncludes(doc, [
  "It intentionally does not ban generic health, telehealth, clinic",
  "provider",
  "training",
  "jobs",
  "education",
  "learning",
  "support",
  "marketplace",
  "agriculture",
  "crop",
  "farmer",
  "trade",
  "AgriTrade",
  "map",
  "field",
  "workforce"
], "AG4 generic wording exception");

assertIncludes(doc, [
  "active Field Agent Mode runtime",
  "live Field Agent Mode runtime",
  "field connector runtime",
  "field source connector runtime",
  "offline capture connector runtime",
  "survey connector runtime",
  "case intake connector runtime",
  "task assignment connector runtime",
  "location connector runtime",
  "camera connector runtime",
  "microphone connector runtime",
  "provider connector runtime",
  "communications connector runtime",
  "transportation connector runtime",
  "health connector runtime",
  "marketplace connector runtime",
  "field dispatch",
  "offline capture submission",
  "case creation",
  "task assignment",
  "provider contact",
  "supervisor contact",
  "program partner contact",
  "location sharing",
  "camera activation",
  "microphone activation",
  "payment execution",
  "marketplace transaction execution",
  "provider connection claims",
  "supervisor connection claims",
  "program partner connection claims",
  "completed action claims",
  "typed route mutation",
  "voice route mutation",
  "policy bypass",
  "confirmation bypass",
  "permission bypass",
  "permission prompts",
  "audit writes",
  "backend writes",
  "localStorage or sessionStorage writes",
  "fetch or network calls",
  "provider handoff",
  "supervisor handoff",
  "program partner handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "AG4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AG1_FIELD_AGENT_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_AG2_FIELD_AGENT_MODE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_AG3_FIELD_AGENT_MODE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_FIELD_AGENT_MODE_READINESS_CONTRACT_PHASE_85.md"],
  ["public", "nexus-field-agent-mode-readiness-contract.js"],
  ["public", "nexus-field-agent-mode-feature-flag.js"],
  ["fixtures", "nexus", "field-agent-mode-feature-flags.json"],
  ["scripts", "nexus-sprint-ag3-field-agent-mode-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `AG4 requires artifact: ${requiredPath.join("/")}`);
}

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
  "nexus-sprint-ag4-field-agent-mode-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Field Agent Mode lane artifact: ${term}`);
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
  assert.equal(DEFAULT_FIELD_AGENT_MODE_FEATURE_FLAG_STATE[field], false, `AG4 default ${field} must remain false.`);
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

for (const source of [featureFlagModule, ag3Harness]) {
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

const alias = "qa:nexus-sprint-ag4-field-agent-mode-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AG4 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ag1-field-agent-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AG1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ag2-field-agent-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AG2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ag3-field-agent-mode-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint AG3 QA.");
assert(qaSuite.includes("scripts/nexus-field-agent-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 85 QA.");

console.log("[nexus-sprint-ag4-field-agent-mode-runtime-absence-regression-guard-qa] passed");
