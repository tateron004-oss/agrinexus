const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  PROVIDER_MODE_FEATURE_FLAG_NAME,
  DEFAULT_PROVIDER_MODE_FEATURE_FLAG_STATE,
  PROTECTED_PROVIDER_MODE_FLAG_FIELDS,
  normalizeProviderModeFeatureFlagState,
  isProviderModeVisibleFeatureEnabled
} = require("../public/nexus-provider-mode-feature-flag.js");

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

const docName = "NEXUS_SPRINT_AH2_PROVIDER_MODE_FEATURE_FLAG_CONTRACT.md";
const qaName = "nexus-sprint-ah2-provider-mode-feature-flag-contract-qa.js";
const moduleName = "nexus-provider-mode-feature-flag.js";

assert(exists("docs", docName), "Sprint AH2 feature flag doc must exist.");
assert(exists("public", moduleName), "Sprint AH2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint AH2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const ah1Doc = read("docs", "NEXUS_SPRINT_AH1_PROVIDER_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md");
const phase86Contract = read("public", "nexus-provider-mode-readiness-contract.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert.equal(PROVIDER_MODE_FEATURE_FLAG_NAME, "NEXUS_PROVIDER_MODE_VISIBLE_ENABLED");
assert.equal(DEFAULT_PROVIDER_MODE_FEATURE_FLAG_STATE.flagName, PROVIDER_MODE_FEATURE_FLAG_NAME);
assert.equal(DEFAULT_PROVIDER_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_PROVIDER_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_PROVIDER_MODE_FEATURE_FLAG_STATE.noExecution, true);
assert(PROTECTED_PROVIDER_MODE_FLAG_FIELDS.length >= 50, "Provider Mode protected field list must stay comprehensive.");

assertIncludes(doc, [
  "Sprint AH2",
  "f6338a678a602d693c0bd4ee1e794b59df4b5234",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_PROVIDER_MODE_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Relationship To Sprint AH1",
  "Runtime Absence Requirements",
  "QA Expectations",
  "Sprint AH3 - Provider Mode Flag Contract Harness"
], "AH2 feature flag doc");

assert(ah1Doc.includes("Sprint AH2 - Provider Mode Feature Flag Contract"), "AH1 must recommend Sprint AH2.");
assertIncludes(phase86Contract, [
  "PROVIDER_MODE_READINESS_CONTRACT",
  "provider-mode.readiness.phase_86",
  "provider actions gated",
  "PROVIDER_MODE_NO_EXECUTION_DEFAULTS"
], "Phase 86 Provider Mode readiness contract");

for (const field of PROTECTED_PROVIDER_MODE_FLAG_FIELDS) {
  assert.equal(DEFAULT_PROVIDER_MODE_FEATURE_FLAG_STATE[field], false, `Default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `AH2 doc must document ${field}: false.`);
}

const defaultState = normalizeProviderModeFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isProviderModeVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeProviderModeFeatureFlagState({ enabled: true, visibleUiAllowed: true });
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(visibleOnly.noExecution, true);
assert.equal(isProviderModeVisibleFeatureEnabled(visibleOnly), true);
for (const field of PROTECTED_PROVIDER_MODE_FLAG_FIELDS) {
  assert.equal(visibleOnly[field], false, `Visible-only state must keep ${field}=false.`);
}

const unsafeInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of PROTECTED_PROVIDER_MODE_FLAG_FIELDS) {
  unsafeInput[field] = true;
}
const normalizedUnsafeAttempt = normalizeProviderModeFeatureFlagState(unsafeInput);
for (const field of PROTECTED_PROVIDER_MODE_FLAG_FIELDS) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);
assert.equal(normalizedUnsafeAttempt.enabled, true);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);

for (const term of [
  "document.",
  "querySelector",
  "addEventListener",
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "indexedDB",
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
  "contactProvider(",
  "scheduleProviderAppointment(",
  "createTelehealthSession(",
  "requestPharmacyRefill(",
  "accessMedicalRecord(",
  "processProviderPayment(",
  "dispatchTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation("
]) {
  assert(!moduleSource.includes(term), `AH2 feature flag module must not include runtime API: ${term}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  moduleName,
  "NEXUS_PROVIDER_MODE_VISIBLE_ENABLED",
  "NexusProviderModeFeatureFlagContract",
  "normalizeProviderModeFeatureFlagState",
  "isProviderModeVisibleFeatureEnabled",
  "providerModeFeatureFlag",
  "liveProviderModeRuntime",
  "liveProviderConnectorRuntime",
  "providerActionRuntime",
  "contactProvider(",
  "scheduleProviderAppointment(",
  "createTelehealthSession(",
  "requestPharmacyRefill(",
  "accessMedicalRecord(",
  "nexus-sprint-ah2-provider-mode-feature-flag-contract"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Provider Mode feature flag artifact: ${term}`);
}

const alias = "qa:nexus-sprint-ah2-provider-mode-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AH2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ah1-provider-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AH1 QA.");
assert(qaSuite.includes("scripts/nexus-provider-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 86 QA.");

console.log("[nexus-sprint-ah2-provider-mode-feature-flag-contract-qa] passed");
