const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  TRANSPORTATION_MODE_FEATURE_FLAG_NAME,
  DEFAULT_TRANSPORTATION_MODE_FEATURE_FLAG_STATE,
  PROTECTED_TRANSPORTATION_MODE_FLAG_FIELDS,
  normalizeTransportationModeFeatureFlagState,
  isTransportationModeVisibleFeatureEnabled
} = require("../public/nexus-transportation-mode-feature-flag.js");

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

const docName = "NEXUS_SPRINT_AC2_TRANSPORTATION_MODE_FEATURE_FLAG_CONTRACT.md";
const moduleName = "nexus-transportation-mode-feature-flag.js";
const qaName = "nexus-sprint-ac2-transportation-mode-feature-flag-contract-qa.js";

assert(exists("docs", docName), "Sprint AC2 feature flag contract doc must exist.");
assert(exists("public", moduleName), "Sprint AC2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint AC2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const ac1Doc = read("docs", "NEXUS_SPRINT_AC1_TRANSPORTATION_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md");
const readinessContract = read("public", "nexus-transportation-mode-readiness-contract.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint AC2",
  "2429e79e42b3f3aa0ad9fc56950d69ccef3e857c",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_TRANSPORTATION_MODE_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Relationship To Sprint AC1",
  "Runtime Absence Requirements",
  "QA Expectations",
  "Sprint AC3 - Transportation Mode Flag Contract Harness"
], "AC2 feature flag doc");

assert(ac1Doc.includes("Sprint AC2 - Transportation Mode Feature Flag Contract"), "AC1 must recommend Sprint AC2.");
assert(readinessContract.includes("transportation-mode.readiness.phase_81"), "AC2 must build on Phase 81 Transportation Mode readiness contract.");
assert(readinessContract.includes("executionAllowed"), "Phase 81 execution default must remain represented.");
assert(readinessContract.includes("liveConnectorEnabled"), "Phase 81 live connector default must remain represented.");
assert(readinessContract.includes("providerExecutionEnabled"), "Phase 81 provider execution default must remain represented.");

assert.equal(TRANSPORTATION_MODE_FEATURE_FLAG_NAME, "NEXUS_TRANSPORTATION_MODE_VISIBLE_ENABLED");
assert.equal(DEFAULT_TRANSPORTATION_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_TRANSPORTATION_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_TRANSPORTATION_MODE_FEATURE_FLAG_STATE.noExecution, true);

for (const field of PROTECTED_TRANSPORTATION_MODE_FLAG_FIELDS) {
  assert.equal(DEFAULT_TRANSPORTATION_MODE_FEATURE_FLAG_STATE[field], false, `default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `AC2 doc must document ${field}: false.`);
}

const defaultState = normalizeTransportationModeFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isTransportationModeVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeTransportationModeFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true
});
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(isTransportationModeVisibleFeatureEnabled(visibleOnly), true);
for (const field of PROTECTED_TRANSPORTATION_MODE_FLAG_FIELDS) {
  assert.equal(visibleOnly[field], false, `visible-only state must keep ${field}=false.`);
}
assert.equal(visibleOnly.noExecution, true);

const unsafeAttemptInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of PROTECTED_TRANSPORTATION_MODE_FLAG_FIELDS) {
  unsafeAttemptInput[field] = true;
}

const unsafeAttempt = normalizeTransportationModeFeatureFlagState(unsafeAttemptInput);
assert.equal(unsafeAttempt.visibleUiAllowed, true);
for (const field of PROTECTED_TRANSPORTATION_MODE_FLAG_FIELDS) {
  assert.equal(unsafeAttempt[field], false, `unsafe attempt must keep ${field}=false.`);
}
assert.equal(unsafeAttempt.noExecution, true);

const runtime = [index, app, server].join("\n");
for (const term of [
  moduleName,
  "NEXUS_TRANSPORTATION_MODE_VISIBLE_ENABLED",
  "NexusTransportationModeFeatureFlagContract",
  "normalizeTransportationModeFeatureFlagState",
  "isTransportationModeVisibleFeatureEnabled",
  "transportationModeFeatureFlag",
  "liveTransportationModeRuntime",
  "executeTransportationBooking(",
  "bookTransportation(",
  "dispatchTransportation(",
  "contactTransportationProvider(",
  "contactDriver(",
  "dispatchEmergency(",
  "sharePatientLocation("
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Transportation Mode feature flag artifact: ${term}`);
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
  "executeTransportationBooking(",
  "bookTransportation(",
  "contactTransportationProvider(",
  "contactDriver(",
  "dispatchTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation("
]) {
  assert(!moduleSource.includes(term), `AC2 feature flag module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-ac2-transportation-mode-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AC2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ac1-transportation-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AC1 QA.");
assert(qaSuite.includes("scripts/nexus-transportation-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 81 QA.");

console.log("[nexus-sprint-ac2-transportation-mode-feature-flag-contract-qa] passed");
