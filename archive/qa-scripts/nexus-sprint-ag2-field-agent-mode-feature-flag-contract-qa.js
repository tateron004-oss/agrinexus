const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  FIELD_AGENT_MODE_FEATURE_FLAG_NAME,
  DEFAULT_FIELD_AGENT_MODE_FEATURE_FLAG_STATE,
  PROTECTED_FIELD_AGENT_MODE_FLAG_FIELDS,
  normalizeFieldAgentModeFeatureFlagState,
  isFieldAgentModeVisibleFeatureEnabled
} = require("../public/nexus-field-agent-mode-feature-flag.js");

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

const docName = "NEXUS_SPRINT_AG2_FIELD_AGENT_MODE_FEATURE_FLAG_CONTRACT.md";
const moduleName = "nexus-field-agent-mode-feature-flag.js";
const qaName = "nexus-sprint-ag2-field-agent-mode-feature-flag-contract-qa.js";

assert(exists("docs", docName), "Sprint AG2 feature flag contract doc must exist.");
assert(exists("public", moduleName), "Sprint AG2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint AG2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const ag1Doc = read("docs", "NEXUS_SPRINT_AG1_FIELD_AGENT_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md");
const readinessContract = read("public", "nexus-field-agent-mode-readiness-contract.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint AG2",
  "ec1b677be1e527b2928c258c5ada35ccea607f5a",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_FIELD_AGENT_MODE_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Relationship To Sprint AG1",
  "Runtime Absence Requirements",
  "QA Expectations",
  "Sprint AG3 - Field Agent Mode Flag Contract Harness"
], "AG2 feature flag doc");

assert(ag1Doc.includes("Sprint AG2 - Field Agent Mode Feature Flag Contract"), "AG1 must recommend Sprint AG2.");
assert(readinessContract.includes("field-agent-mode.readiness.phase_85"), "AG2 must build on Phase 85 Field Agent Mode readiness contract.");
assert(readinessContract.includes("executionAllowed"), "Phase 85 execution default must remain represented.");
assert(readinessContract.includes("liveConnectorEnabled"), "Phase 85 live connector default must remain represented.");
assert(readinessContract.includes("providerExecutionEnabled"), "Phase 85 provider execution default must remain represented.");

assert.equal(FIELD_AGENT_MODE_FEATURE_FLAG_NAME, "NEXUS_FIELD_AGENT_MODE_VISIBLE_ENABLED");
assert.equal(DEFAULT_FIELD_AGENT_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_FIELD_AGENT_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_FIELD_AGENT_MODE_FEATURE_FLAG_STATE.noExecution, true);

for (const field of PROTECTED_FIELD_AGENT_MODE_FLAG_FIELDS) {
  assert.equal(DEFAULT_FIELD_AGENT_MODE_FEATURE_FLAG_STATE[field], false, `default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `AG2 doc must document ${field}: false.`);
}

const defaultState = normalizeFieldAgentModeFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isFieldAgentModeVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeFieldAgentModeFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true
});
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(isFieldAgentModeVisibleFeatureEnabled(visibleOnly), true);
for (const field of PROTECTED_FIELD_AGENT_MODE_FLAG_FIELDS) {
  assert.equal(visibleOnly[field], false, `visible-only state must keep ${field}=false.`);
}
assert.equal(visibleOnly.noExecution, true);

const unsafeAttemptInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of PROTECTED_FIELD_AGENT_MODE_FLAG_FIELDS) {
  unsafeAttemptInput[field] = true;
}

const unsafeAttempt = normalizeFieldAgentModeFeatureFlagState(unsafeAttemptInput);
assert.equal(unsafeAttempt.visibleUiAllowed, true);
for (const field of PROTECTED_FIELD_AGENT_MODE_FLAG_FIELDS) {
  assert.equal(unsafeAttempt[field], false, `unsafe attempt must keep ${field}=false.`);
}
assert.equal(unsafeAttempt.noExecution, true);

const runtime = [index, app, server].join("\n");
for (const term of [
  moduleName,
  "NEXUS_FIELD_AGENT_MODE_VISIBLE_ENABLED",
  "NexusFieldAgentModeFeatureFlagContract",
  "normalizeFieldAgentModeFeatureFlagState",
  "isFieldAgentModeVisibleFeatureEnabled",
  "fieldAgentModeFeatureFlag",
  "liveFieldAgentModeRuntime",
  "liveFieldConnectorRuntime",
  "offlineCaptureRuntime",
  "submitFieldCapture(",
  "dispatchFieldAgent(",
  "createFieldCase(",
  "assignFieldTask(",
  "shareFieldLocation(",
  "activateFieldCamera(",
  "activateFieldMicrophone(",
  "contactFieldProvider("
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Field Agent Mode feature flag artifact: ${term}`);
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
  "submitFieldCapture(",
  "dispatchFieldAgent(",
  "createFieldCase(",
  "assignFieldTask(",
  "shareFieldLocation(",
  "activateFieldCamera(",
  "activateFieldMicrophone(",
  "contactFieldProvider(",
  "dispatchTransportation(",
  "dispatchEmergency("
]) {
  assert(!moduleSource.includes(term), `AG2 feature flag module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-ag2-field-agent-mode-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AG2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ag1-field-agent-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AG1 QA.");
assert(qaSuite.includes("scripts/nexus-field-agent-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 85 QA.");

console.log("[nexus-sprint-ag2-field-agent-mode-feature-flag-contract-qa] passed");
