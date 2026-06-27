const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  PHARMACY_MODE_FEATURE_FLAG_NAME,
  DEFAULT_PHARMACY_MODE_FEATURE_FLAG_STATE,
  PROTECTED_PHARMACY_MODE_FLAG_FIELDS,
  normalizePharmacyModeFeatureFlagState,
  isPharmacyModeVisibleFeatureEnabled
} = require("../public/nexus-pharmacy-mode-feature-flag.js");

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

const docName = "NEXUS_SPRINT_AA2_PHARMACY_MODE_FEATURE_FLAG_CONTRACT.md";
const moduleName = "nexus-pharmacy-mode-feature-flag.js";
const qaName = "nexus-sprint-aa2-pharmacy-mode-feature-flag-contract-qa.js";

assert(exists("docs", docName), "Sprint AA2 feature flag contract doc must exist.");
assert(exists("public", moduleName), "Sprint AA2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint AA2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const aa1Doc = read("docs", "NEXUS_SPRINT_AA1_PHARMACY_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md");
const readinessContract = read("public", "nexus-pharmacy-mode-readiness-contract.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint AA2",
  "e6f5ebb406b68553d594dba11a898b3c6e59296e",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_PHARMACY_MODE_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Relationship To Sprint AA1",
  "Runtime Absence Requirements",
  "QA Expectations",
  "Sprint AA3 - Pharmacy Mode Flag Contract Harness"
], "AA2 feature flag doc");

assert(aa1Doc.includes("Sprint AA2 - Pharmacy Mode Feature Flag Contract"), "AA1 must recommend Sprint AA2.");
assert(readinessContract.includes("pharmacy-mode.readiness.phase_79"), "AA2 must build on Phase 79 Pharmacy Mode readiness contract.");
assert(readinessContract.includes("executionAllowed: false"), "Phase 79 execution default must remain false.");
assert(readinessContract.includes("liveConnectorEnabled: false"), "Phase 79 live connector default must remain false.");
assert(readinessContract.includes("providerExecutionEnabled: false"), "Phase 79 provider execution default must remain false.");

assert.equal(PHARMACY_MODE_FEATURE_FLAG_NAME, "NEXUS_PHARMACY_MODE_VISIBLE_ENABLED");
assert.equal(DEFAULT_PHARMACY_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_PHARMACY_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_PHARMACY_MODE_FEATURE_FLAG_STATE.noExecution, true);

for (const field of PROTECTED_PHARMACY_MODE_FLAG_FIELDS) {
  assert.equal(DEFAULT_PHARMACY_MODE_FEATURE_FLAG_STATE[field], false, `default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `AA2 doc must document ${field}: false.`);
}

const defaultState = normalizePharmacyModeFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isPharmacyModeVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizePharmacyModeFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true
});
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(isPharmacyModeVisibleFeatureEnabled(visibleOnly), true);
for (const field of PROTECTED_PHARMACY_MODE_FLAG_FIELDS) {
  assert.equal(visibleOnly[field], false, `visible-only state must keep ${field}=false.`);
}
assert.equal(visibleOnly.noExecution, true);

const unsafeAttemptInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of PROTECTED_PHARMACY_MODE_FLAG_FIELDS) {
  unsafeAttemptInput[field] = true;
}

const unsafeAttempt = normalizePharmacyModeFeatureFlagState(unsafeAttemptInput);
assert.equal(unsafeAttempt.visibleUiAllowed, true);
for (const field of PROTECTED_PHARMACY_MODE_FLAG_FIELDS) {
  assert.equal(unsafeAttempt[field], false, `unsafe attempt must keep ${field}=false.`);
}
assert.equal(unsafeAttempt.noExecution, true);

const runtime = [index, app, server].join("\n");
for (const term of [
  moduleName,
  "NEXUS_PHARMACY_MODE_VISIBLE_ENABLED",
  "NexusPharmacyModeFeatureFlagContract",
  "normalizePharmacyModeFeatureFlagState",
  "isPharmacyModeVisibleFeatureEnabled",
  "pharmacyModeFeatureFlag",
  "livePharmacyModeRuntime",
  "executePrescriptionRefill(",
  "executePharmacyRefill(",
  "contactPharmacyProvider(",
  "contactPharmacist(",
  "processPharmacyPayment(",
  "processInsurance("
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Pharmacy Mode feature flag artifact: ${term}`);
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
  "executePrescriptionRefill(",
  "executePharmacyRefill(",
  "contactPharmacyProvider(",
  "contactPharmacist(",
  "processPharmacyPayment(",
  "processInsurance("
]) {
  assert(!moduleSource.includes(term), `AA2 feature flag module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-aa2-pharmacy-mode-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AA2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-aa1-pharmacy-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AA1 QA.");
assert(qaSuite.includes("scripts/nexus-pharmacy-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 79 QA.");

console.log("[nexus-sprint-aa2-pharmacy-mode-feature-flag-contract-qa] passed");
