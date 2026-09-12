const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  TELEHEALTH_MODE_FEATURE_FLAG_NAME,
  DEFAULT_TELEHEALTH_MODE_FEATURE_FLAG_STATE,
  PROTECTED_TELEHEALTH_MODE_FLAG_FIELDS,
  normalizeTelehealthModeFeatureFlagState,
  isTelehealthModeVisibleFeatureEnabled
} = require("../public/nexus-telehealth-mode-feature-flag.js");

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

const docName = "NEXUS_SPRINT_Z2_TELEHEALTH_MODE_FEATURE_FLAG_CONTRACT.md";
const moduleName = "nexus-telehealth-mode-feature-flag.js";
const qaName = "nexus-sprint-z2-telehealth-mode-feature-flag-contract-qa.js";

assert(exists("docs", docName), "Sprint Z2 feature flag contract doc must exist.");
assert(exists("public", moduleName), "Sprint Z2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint Z2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const z1Doc = read("docs", "NEXUS_SPRINT_Z1_TELEHEALTH_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md");
const readinessContract = read("public", "nexus-telehealth-mode-readiness-contract.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint Z2",
  "6d821a0068a1b21d85204ef5b882b8eaae027ef1",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_TELEHEALTH_MODE_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Relationship To Sprint Z1",
  "Runtime Absence Requirements",
  "QA Expectations",
  "Sprint Z3 - Telehealth Mode Flag Contract Harness"
], "Z2 feature flag doc");

assert(z1Doc.includes("Sprint Z2 - Telehealth Mode Feature Flag Contract"), "Z1 must recommend Sprint Z2.");
assert(readinessContract.includes("telehealth-mode.readiness.phase_78"), "Z2 must build on Phase 78 Telehealth Mode readiness contract.");
assert(readinessContract.includes("executionAllowed: false"), "Phase 78 execution default must remain false.");
assert(readinessContract.includes("liveConnectorEnabled: false"), "Phase 78 live connector default must remain false.");
assert(readinessContract.includes("providerExecutionEnabled: false"), "Phase 78 provider execution default must remain false.");

assert.equal(TELEHEALTH_MODE_FEATURE_FLAG_NAME, "NEXUS_TELEHEALTH_MODE_VISIBLE_ENABLED");
assert.equal(DEFAULT_TELEHEALTH_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_TELEHEALTH_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_TELEHEALTH_MODE_FEATURE_FLAG_STATE.noExecution, true);

for (const field of PROTECTED_TELEHEALTH_MODE_FLAG_FIELDS) {
  assert.equal(DEFAULT_TELEHEALTH_MODE_FEATURE_FLAG_STATE[field], false, `default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `Z2 doc must document ${field}: false.`);
}

const defaultState = normalizeTelehealthModeFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isTelehealthModeVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeTelehealthModeFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true
});
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(isTelehealthModeVisibleFeatureEnabled(visibleOnly), true);
for (const field of PROTECTED_TELEHEALTH_MODE_FLAG_FIELDS) {
  assert.equal(visibleOnly[field], false, `visible-only state must keep ${field}=false.`);
}
assert.equal(visibleOnly.noExecution, true);

const unsafeAttemptInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of PROTECTED_TELEHEALTH_MODE_FLAG_FIELDS) {
  unsafeAttemptInput[field] = true;
}

const unsafeAttempt = normalizeTelehealthModeFeatureFlagState(unsafeAttemptInput);
assert.equal(unsafeAttempt.visibleUiAllowed, true);
for (const field of PROTECTED_TELEHEALTH_MODE_FLAG_FIELDS) {
  assert.equal(unsafeAttempt[field], false, `unsafe attempt must keep ${field}=false.`);
}
assert.equal(unsafeAttempt.noExecution, true);

const runtime = [index, app, server].join("\n");
for (const term of [
  moduleName,
  "NEXUS_TELEHEALTH_MODE_VISIBLE_ENABLED",
  "NexusTelehealthModeFeatureFlagContract",
  "normalizeTelehealthModeFeatureFlagState",
  "isTelehealthModeVisibleFeatureEnabled",
  "telehealthModeFeatureFlag",
  "liveTelehealthModeRuntime",
  "executeTelehealthMode(",
  "executeTelehealthSession(",
  "startTelehealthSession(",
  "executePrescriptionRefill(",
  "contactTelehealthProvider(",
  "contactClinician(",
  "dispatchTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation(",
  "openTelehealthCamera(",
  "openTelehealthMicrophone("
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Telehealth Mode feature flag artifact: ${term}`);
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
  "executeTelehealthMode(",
  "executeTelehealthSession(",
  "startTelehealthSession(",
  "executePrescriptionRefill(",
  "contactTelehealthProvider(",
  "contactClinician(",
  "dispatchTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation(",
  "openTelehealthCamera(",
  "openTelehealthMicrophone("
]) {
  assert(!moduleSource.includes(term), `Z2 feature flag module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-z2-telehealth-mode-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint Z2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-z1-telehealth-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint Z1 QA.");
assert(qaSuite.includes("scripts/nexus-telehealth-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 78 QA.");

console.log("[nexus-sprint-z2-telehealth-mode-feature-flag-contract-qa] passed");
