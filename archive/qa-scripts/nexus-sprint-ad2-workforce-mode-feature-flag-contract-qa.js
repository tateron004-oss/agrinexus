const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  WORKFORCE_MODE_FEATURE_FLAG_NAME,
  DEFAULT_WORKFORCE_MODE_FEATURE_FLAG_STATE,
  PROTECTED_WORKFORCE_MODE_FLAG_FIELDS,
  normalizeWorkforceModeFeatureFlagState,
  isWorkforceModeVisibleFeatureEnabled
} = require("../public/nexus-workforce-mode-feature-flag.js");

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

const docName = "NEXUS_SPRINT_AD2_WORKFORCE_MODE_FEATURE_FLAG_CONTRACT.md";
const moduleName = "nexus-workforce-mode-feature-flag.js";
const qaName = "nexus-sprint-ad2-workforce-mode-feature-flag-contract-qa.js";

assert(exists("docs", docName), "Sprint AD2 feature flag contract doc must exist.");
assert(exists("public", moduleName), "Sprint AD2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint AD2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const ad1Doc = read("docs", "NEXUS_SPRINT_AD1_WORKFORCE_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md");
const readinessContract = read("public", "nexus-workforce-mode-readiness-contract.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint AD2",
  "894e33206332e5d947ef065ff86ba65365576c3c",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_WORKFORCE_MODE_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Relationship To Sprint AD1",
  "Runtime Absence Requirements",
  "QA Expectations",
  "Sprint AD3 - Workforce Mode Flag Contract Harness"
], "AD2 feature flag doc");

assert(ad1Doc.includes("Sprint AD2 - Workforce Mode Feature Flag Contract"), "AD1 must recommend Sprint AD2.");
assert(readinessContract.includes("workforce-mode.readiness.phase_82"), "AD2 must build on Phase 82 Workforce Mode readiness contract.");
assert(readinessContract.includes("executionAllowed"), "Phase 82 execution default must remain represented.");
assert(readinessContract.includes("liveConnectorEnabled"), "Phase 82 live connector default must remain represented.");
assert(readinessContract.includes("providerExecutionEnabled"), "Phase 82 provider execution default must remain represented.");

assert.equal(WORKFORCE_MODE_FEATURE_FLAG_NAME, "NEXUS_WORKFORCE_MODE_VISIBLE_ENABLED");
assert.equal(DEFAULT_WORKFORCE_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_WORKFORCE_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_WORKFORCE_MODE_FEATURE_FLAG_STATE.noExecution, true);

for (const field of PROTECTED_WORKFORCE_MODE_FLAG_FIELDS) {
  assert.equal(DEFAULT_WORKFORCE_MODE_FEATURE_FLAG_STATE[field], false, `default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `AD2 doc must document ${field}: false.`);
}

const defaultState = normalizeWorkforceModeFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isWorkforceModeVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeWorkforceModeFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true
});
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(isWorkforceModeVisibleFeatureEnabled(visibleOnly), true);
for (const field of PROTECTED_WORKFORCE_MODE_FLAG_FIELDS) {
  assert.equal(visibleOnly[field], false, `visible-only state must keep ${field}=false.`);
}
assert.equal(visibleOnly.noExecution, true);

const unsafeAttemptInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of PROTECTED_WORKFORCE_MODE_FLAG_FIELDS) {
  unsafeAttemptInput[field] = true;
}

const unsafeAttempt = normalizeWorkforceModeFeatureFlagState(unsafeAttemptInput);
assert.equal(unsafeAttempt.visibleUiAllowed, true);
for (const field of PROTECTED_WORKFORCE_MODE_FLAG_FIELDS) {
  assert.equal(unsafeAttempt[field], false, `unsafe attempt must keep ${field}=false.`);
}
assert.equal(unsafeAttempt.noExecution, true);

const runtime = [index, app, server].join("\n");
for (const term of [
  moduleName,
  "NEXUS_WORKFORCE_MODE_VISIBLE_ENABLED",
  "NexusWorkforceModeFeatureFlagContract",
  "normalizeWorkforceModeFeatureFlagState",
  "isWorkforceModeVisibleFeatureEnabled",
  "workforceModeFeatureFlag",
  "liveWorkforceModeRuntime",
  "liveWorkforceConnectorRuntime",
  "executeWorkforceReferral(",
  "submitJobApplication(",
  "contactWorkforceProvider(",
  "contactEmployer(",
  "issueCertification(",
  "processWorkforcePayment("
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Workforce Mode feature flag artifact: ${term}`);
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
  "executeWorkforceReferral(",
  "submitJobApplication(",
  "contactWorkforceProvider(",
  "contactEmployer(",
  "contactTrainingProvider(",
  "contactCertificationProvider(",
  "issueCertification(",
  "processWorkforcePayment(",
  "dispatchTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation("
]) {
  assert(!moduleSource.includes(term), `AD2 feature flag module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-ad2-workforce-mode-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AD2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ad1-workforce-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AD1 QA.");
assert(qaSuite.includes("scripts/nexus-workforce-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 82 QA.");

console.log("[nexus-sprint-ad2-workforce-mode-feature-flag-contract-qa] passed");
