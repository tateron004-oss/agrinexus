const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  MOBILE_CLINIC_MODE_FEATURE_FLAG_NAME,
  DEFAULT_MOBILE_CLINIC_MODE_FEATURE_FLAG_STATE,
  PROTECTED_MOBILE_CLINIC_MODE_FLAG_FIELDS,
  normalizeMobileClinicModeFeatureFlagState,
  isMobileClinicModeVisibleFeatureEnabled
} = require("../public/nexus-mobile-clinic-mode-feature-flag.js");

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

const docName = "NEXUS_SPRINT_AB2_MOBILE_CLINIC_MODE_FEATURE_FLAG_CONTRACT.md";
const moduleName = "nexus-mobile-clinic-mode-feature-flag.js";
const qaName = "nexus-sprint-ab2-mobile-clinic-mode-feature-flag-contract-qa.js";

assert(exists("docs", docName), "Sprint AB2 feature flag contract doc must exist.");
assert(exists("public", moduleName), "Sprint AB2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint AB2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const ab1Doc = read("docs", "NEXUS_SPRINT_AB1_MOBILE_CLINIC_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md");
const readinessContract = read("public", "nexus-mobile-clinic-mode-readiness-contract.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint AB2",
  "9052e64f954b953ce38824f45028f8f8992511bf",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_MOBILE_CLINIC_MODE_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Relationship To Sprint AB1",
  "Runtime Absence Requirements",
  "QA Expectations",
  "Sprint AB3 - Mobile Clinic Mode Flag Contract Harness"
], "AB2 feature flag doc");

assert(ab1Doc.includes("Sprint AB2 - Mobile Clinic Mode Feature Flag Contract"), "AB1 must recommend Sprint AB2.");
assert(readinessContract.includes("mobile-clinic-mode.readiness.phase_80"), "AB2 must build on Phase 80 Mobile Clinic Mode readiness contract.");
assert(readinessContract.includes("executionAllowed: false"), "Phase 80 execution default must remain false.");
assert(readinessContract.includes("liveConnectorEnabled: false"), "Phase 80 live connector default must remain false.");
assert(readinessContract.includes("providerExecutionEnabled: false"), "Phase 80 provider execution default must remain false.");

assert.equal(MOBILE_CLINIC_MODE_FEATURE_FLAG_NAME, "NEXUS_MOBILE_CLINIC_MODE_VISIBLE_ENABLED");
assert.equal(DEFAULT_MOBILE_CLINIC_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_MOBILE_CLINIC_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_MOBILE_CLINIC_MODE_FEATURE_FLAG_STATE.noExecution, true);

for (const field of PROTECTED_MOBILE_CLINIC_MODE_FLAG_FIELDS) {
  assert.equal(DEFAULT_MOBILE_CLINIC_MODE_FEATURE_FLAG_STATE[field], false, `default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `AB2 doc must document ${field}: false.`);
}

const defaultState = normalizeMobileClinicModeFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isMobileClinicModeVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeMobileClinicModeFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true
});
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(isMobileClinicModeVisibleFeatureEnabled(visibleOnly), true);
for (const field of PROTECTED_MOBILE_CLINIC_MODE_FLAG_FIELDS) {
  assert.equal(visibleOnly[field], false, `visible-only state must keep ${field}=false.`);
}
assert.equal(visibleOnly.noExecution, true);

const unsafeAttemptInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of PROTECTED_MOBILE_CLINIC_MODE_FLAG_FIELDS) {
  unsafeAttemptInput[field] = true;
}

const unsafeAttempt = normalizeMobileClinicModeFeatureFlagState(unsafeAttemptInput);
assert.equal(unsafeAttempt.visibleUiAllowed, true);
for (const field of PROTECTED_MOBILE_CLINIC_MODE_FLAG_FIELDS) {
  assert.equal(unsafeAttempt[field], false, `unsafe attempt must keep ${field}=false.`);
}
assert.equal(unsafeAttempt.noExecution, true);

const runtime = [index, app, server].join("\n");
for (const term of [
  moduleName,
  "NEXUS_MOBILE_CLINIC_MODE_VISIBLE_ENABLED",
  "NexusMobileClinicModeFeatureFlagContract",
  "normalizeMobileClinicModeFeatureFlagState",
  "isMobileClinicModeVisibleFeatureEnabled",
  "mobileClinicModeFeatureFlag",
  "liveMobileClinicModeRuntime",
  "executeMobileClinicSchedule(",
  "scheduleMobileClinicVisit(",
  "contactMobileClinicProvider(",
  "dispatchMobileClinicTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation("
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Mobile Clinic Mode feature flag artifact: ${term}`);
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
  "executeMobileClinicSchedule(",
  "scheduleMobileClinicVisit(",
  "contactMobileClinicProvider(",
  "dispatchMobileClinicTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation("
]) {
  assert(!moduleSource.includes(term), `AB2 feature flag module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-ab2-mobile-clinic-mode-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AB2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ab1-mobile-clinic-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AB1 QA.");
assert(qaSuite.includes("scripts/nexus-mobile-clinic-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 80 QA.");

console.log("[nexus-sprint-ab2-mobile-clinic-mode-feature-flag-contract-qa] passed");
