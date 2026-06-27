const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  RURAL_HEALTH_MODE_FEATURE_FLAG_NAME,
  DEFAULT_RURAL_HEALTH_MODE_FEATURE_FLAG_STATE,
  PROTECTED_RURAL_HEALTH_MODE_FLAG_FIELDS,
  normalizeRuralHealthModeFeatureFlagState,
  isRuralHealthModeVisibleFeatureEnabled
} = require("../public/nexus-rural-health-mode-feature-flag.js");

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

const docName = "NEXUS_SPRINT_Y2_RURAL_HEALTH_MODE_FEATURE_FLAG_CONTRACT.md";
const moduleName = "nexus-rural-health-mode-feature-flag.js";
const qaName = "nexus-sprint-y2-rural-health-mode-feature-flag-contract-qa.js";

assert(exists("docs", docName), "Sprint Y2 feature flag contract doc must exist.");
assert(exists("public", moduleName), "Sprint Y2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint Y2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const y1Doc = read("docs", "NEXUS_SPRINT_Y1_RURAL_HEALTH_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md");
const readinessContract = read("public", "nexus-rural-health-mode-readiness-contract.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint Y2",
  "c9fc32d35653213dcd05bdc2531fb599bb84ff3e",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_RURAL_HEALTH_MODE_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Relationship To Sprint Y1",
  "Runtime Absence Requirements",
  "QA Expectations",
  "Sprint Y3 - Rural Health Mode Flag Contract Harness"
], "Y2 feature flag doc");

assert(y1Doc.includes("Sprint Y2 - Rural Health Mode Feature Flag Contract"), "Y1 must recommend Sprint Y2.");
assert(readinessContract.includes("rural-health-mode.readiness.phase_77"), "Y2 must build on Phase 77 Rural Health Mode readiness contract.");
assert(readinessContract.includes("executionAllowed: false"), "Phase 77 execution default must remain false.");
assert(readinessContract.includes("liveConnectorEnabled: false"), "Phase 77 live connector default must remain false.");
assert(readinessContract.includes("providerExecutionEnabled: false"), "Phase 77 provider execution default must remain false.");

assert.equal(RURAL_HEALTH_MODE_FEATURE_FLAG_NAME, "NEXUS_RURAL_HEALTH_MODE_VISIBLE_ENABLED");
assert.equal(DEFAULT_RURAL_HEALTH_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_RURAL_HEALTH_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_RURAL_HEALTH_MODE_FEATURE_FLAG_STATE.noExecution, true);

for (const field of PROTECTED_RURAL_HEALTH_MODE_FLAG_FIELDS) {
  assert.equal(DEFAULT_RURAL_HEALTH_MODE_FEATURE_FLAG_STATE[field], false, `default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `Y2 doc must document ${field}: false.`);
}

const defaultState = normalizeRuralHealthModeFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isRuralHealthModeVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeRuralHealthModeFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true
});
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(isRuralHealthModeVisibleFeatureEnabled(visibleOnly), true);
for (const field of PROTECTED_RURAL_HEALTH_MODE_FLAG_FIELDS) {
  assert.equal(visibleOnly[field], false, `visible-only state must keep ${field}=false.`);
}
assert.equal(visibleOnly.noExecution, true);

const unsafeAttemptInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of PROTECTED_RURAL_HEALTH_MODE_FLAG_FIELDS) {
  unsafeAttemptInput[field] = true;
}

const unsafeAttempt = normalizeRuralHealthModeFeatureFlagState(unsafeAttemptInput);
assert.equal(unsafeAttempt.visibleUiAllowed, true);
for (const field of PROTECTED_RURAL_HEALTH_MODE_FLAG_FIELDS) {
  assert.equal(unsafeAttempt[field], false, `unsafe attempt must keep ${field}=false.`);
}
assert.equal(unsafeAttempt.noExecution, true);

const runtime = [index, app, server].join("\n");
for (const term of [
  moduleName,
  "NEXUS_RURAL_HEALTH_MODE_VISIBLE_ENABLED",
  "NexusRuralHealthModeFeatureFlagContract",
  "normalizeRuralHealthModeFeatureFlagState",
  "isRuralHealthModeVisibleFeatureEnabled",
  "ruralHealthModeFeatureFlag",
  "liveRuralHealthModeRuntime",
  "executeRuralHealthMode(",
  "executeTelehealth(",
  "executePrescriptionRefill(",
  "contactProvider(",
  "contactClinician(",
  "dispatchTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation(",
  "openHealthCamera("
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Rural Health Mode feature flag artifact: ${term}`);
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
  "executeTelehealth(",
  "executePrescriptionRefill(",
  "contactProvider(",
  "contactClinician(",
  "dispatchTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation(",
  "openHealthCamera("
]) {
  assert(!moduleSource.includes(term), `Y2 feature flag module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-y2-rural-health-mode-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint Y2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-y1-rural-health-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint Y1 QA.");
assert(qaSuite.includes("scripts/nexus-rural-health-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 77 QA.");

console.log("[nexus-sprint-y2-rural-health-mode-feature-flag-contract-qa] passed");
