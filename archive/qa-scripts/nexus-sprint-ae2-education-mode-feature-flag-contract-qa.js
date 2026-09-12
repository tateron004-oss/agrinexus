const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  EDUCATION_MODE_FEATURE_FLAG_NAME,
  DEFAULT_EDUCATION_MODE_FEATURE_FLAG_STATE,
  PROTECTED_EDUCATION_MODE_FLAG_FIELDS,
  normalizeEducationModeFeatureFlagState,
  isEducationModeVisibleFeatureEnabled
} = require("../public/nexus-education-mode-feature-flag.js");

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

const docName = "NEXUS_SPRINT_AE2_EDUCATION_MODE_FEATURE_FLAG_CONTRACT.md";
const moduleName = "nexus-education-mode-feature-flag.js";
const qaName = "nexus-sprint-ae2-education-mode-feature-flag-contract-qa.js";

assert(exists("docs", docName), "Sprint AE2 feature flag contract doc must exist.");
assert(exists("public", moduleName), "Sprint AE2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint AE2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const ae1Doc = read("docs", "NEXUS_SPRINT_AE1_EDUCATION_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md");
const readinessContract = read("public", "nexus-education-mode-readiness-contract.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint AE2",
  "e616837844ff7ff390d1eb11a8304bd596354184",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_EDUCATION_MODE_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Relationship To Sprint AE1",
  "Runtime Absence Requirements",
  "QA Expectations",
  "Sprint AE3 - Education Mode Flag Contract Harness"
], "AE2 feature flag doc");

assert(ae1Doc.includes("Sprint AE2 - Education Mode Feature Flag Contract"), "AE1 must recommend Sprint AE2.");
assert(readinessContract.includes("education-mode.readiness.phase_83"), "AE2 must build on Phase 83 Education Mode readiness contract.");
assert(readinessContract.includes("executionAllowed"), "Phase 83 execution default must remain represented.");
assert(readinessContract.includes("liveConnectorEnabled"), "Phase 83 live connector default must remain represented.");
assert(readinessContract.includes("providerExecutionEnabled"), "Phase 83 provider execution default must remain represented.");

assert.equal(EDUCATION_MODE_FEATURE_FLAG_NAME, "NEXUS_EDUCATION_MODE_VISIBLE_ENABLED");
assert.equal(DEFAULT_EDUCATION_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_EDUCATION_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_EDUCATION_MODE_FEATURE_FLAG_STATE.noExecution, true);

for (const field of PROTECTED_EDUCATION_MODE_FLAG_FIELDS) {
  assert.equal(DEFAULT_EDUCATION_MODE_FEATURE_FLAG_STATE[field], false, `default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `AE2 doc must document ${field}: false.`);
}

const defaultState = normalizeEducationModeFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isEducationModeVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeEducationModeFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true
});
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(isEducationModeVisibleFeatureEnabled(visibleOnly), true);
for (const field of PROTECTED_EDUCATION_MODE_FLAG_FIELDS) {
  assert.equal(visibleOnly[field], false, `visible-only state must keep ${field}=false.`);
}
assert.equal(visibleOnly.noExecution, true);

const unsafeAttemptInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of PROTECTED_EDUCATION_MODE_FLAG_FIELDS) {
  unsafeAttemptInput[field] = true;
}

const unsafeAttempt = normalizeEducationModeFeatureFlagState(unsafeAttemptInput);
assert.equal(unsafeAttempt.visibleUiAllowed, true);
for (const field of PROTECTED_EDUCATION_MODE_FLAG_FIELDS) {
  assert.equal(unsafeAttempt[field], false, `unsafe attempt must keep ${field}=false.`);
}
assert.equal(unsafeAttempt.noExecution, true);

const runtime = [index, app, server].join("\n");
for (const term of [
  moduleName,
  "NEXUS_EDUCATION_MODE_VISIBLE_ENABLED",
  "NexusEducationModeFeatureFlagContract",
  "normalizeEducationModeFeatureFlagState",
  "isEducationModeVisibleFeatureEnabled",
  "educationModeFeatureFlag",
  "liveEducationModeRuntime",
  "liveEducationConnectorRuntime",
  "executeEducationEnrollment(",
  "registerCourse(",
  "enrollInCourse(",
  "issueEducationCredential(",
  "contactEducationProvider(",
  "contactTrainingProvider(",
  "processEducationPayment("
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Education Mode feature flag artifact: ${term}`);
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
  "executeEducationEnrollment(",
  "registerCourse(",
  "enrollInCourse(",
  "contactEducationProvider(",
  "contactTrainingProvider(",
  "contactCertificationProvider(",
  "issueEducationCredential(",
  "processEducationPayment(",
  "dispatchTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation("
]) {
  assert(!moduleSource.includes(term), `AE2 feature flag module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-ae2-education-mode-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AE2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ae1-education-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AE1 QA.");
assert(qaSuite.includes("scripts/nexus-education-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 83 QA.");

console.log("[nexus-sprint-ae2-education-mode-feature-flag-contract-qa] passed");
