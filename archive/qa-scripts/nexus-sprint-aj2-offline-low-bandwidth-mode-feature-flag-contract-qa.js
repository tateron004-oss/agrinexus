const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  OFFLINE_LOW_BANDWIDTH_MODE_FEATURE_FLAG_NAME,
  DEFAULT_OFFLINE_LOW_BANDWIDTH_MODE_FEATURE_FLAG_STATE,
  PROTECTED_OFFLINE_LOW_BANDWIDTH_MODE_FLAG_FIELDS,
  normalizeOfflineLowBandwidthModeFeatureFlagState,
  isOfflineLowBandwidthModeVisibleFeatureEnabled
} = require("../public/nexus-offline-low-bandwidth-mode-feature-flag.js");

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

const docName = "NEXUS_SPRINT_AJ2_OFFLINE_LOW_BANDWIDTH_MODE_FEATURE_FLAG_CONTRACT.md";
const qaName = "nexus-sprint-aj2-offline-low-bandwidth-mode-feature-flag-contract-qa.js";
const moduleName = "nexus-offline-low-bandwidth-mode-feature-flag.js";

assert(exists("docs", docName), "Sprint AJ2 feature flag doc must exist.");
assert(exists("public", moduleName), "Sprint AJ2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint AJ2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const aj1Doc = read("docs", "NEXUS_SPRINT_AJ1_OFFLINE_LOW_BANDWIDTH_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md");
const phase88Contract = read("public", "nexus-offline-low-bandwidth-mode-readiness-contract.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert.equal(OFFLINE_LOW_BANDWIDTH_MODE_FEATURE_FLAG_NAME, "NEXUS_OFFLINE_LOW_BANDWIDTH_MODE_VISIBLE_ENABLED");
assert.equal(DEFAULT_OFFLINE_LOW_BANDWIDTH_MODE_FEATURE_FLAG_STATE.flagName, OFFLINE_LOW_BANDWIDTH_MODE_FEATURE_FLAG_NAME);
assert.equal(DEFAULT_OFFLINE_LOW_BANDWIDTH_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_OFFLINE_LOW_BANDWIDTH_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_OFFLINE_LOW_BANDWIDTH_MODE_FEATURE_FLAG_STATE.noExecution, true);
assert(PROTECTED_OFFLINE_LOW_BANDWIDTH_MODE_FLAG_FIELDS.length >= 60, "Offline Low-Bandwidth Mode protected field list must stay comprehensive.");

assertIncludes(doc, [
  "Sprint AJ2",
  "e1e6ddf477eeedff753ee22e82fc1c6c73c47fd1",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_OFFLINE_LOW_BANDWIDTH_MODE_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Relationship To Sprint AJ1",
  "Runtime Absence Requirements",
  "QA Expectations",
  "Sprint AJ3 - Offline Low-Bandwidth Mode Flag Contract Harness"
], "AJ2 feature flag doc");

assert(aj1Doc.includes("Sprint AJ2 - Offline Low-Bandwidth Mode Feature Flag Contract"), "AJ1 must recommend Sprint AJ2.");
assertIncludes(phase88Contract, [
  "OFFLINE_LOW_BANDWIDTH_MODE_READINESS_CONTRACT",
  "offline-low-bandwidth-mode.readiness.phase_88",
  "degraded path works",
  "OFFLINE_LOW_BANDWIDTH_MODE_NO_EXECUTION_DEFAULTS"
], "Phase 88 Offline Low-Bandwidth Mode readiness contract");

for (const field of PROTECTED_OFFLINE_LOW_BANDWIDTH_MODE_FLAG_FIELDS) {
  assert.equal(DEFAULT_OFFLINE_LOW_BANDWIDTH_MODE_FEATURE_FLAG_STATE[field], false, `Default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `AJ2 doc must document ${field}: false.`);
}

const defaultState = normalizeOfflineLowBandwidthModeFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isOfflineLowBandwidthModeVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeOfflineLowBandwidthModeFeatureFlagState({ enabled: true, visibleUiAllowed: true });
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(visibleOnly.noExecution, true);
assert.equal(isOfflineLowBandwidthModeVisibleFeatureEnabled(visibleOnly), true);
for (const field of PROTECTED_OFFLINE_LOW_BANDWIDTH_MODE_FLAG_FIELDS) {
  assert.equal(visibleOnly[field], false, `Visible-only state must keep ${field}=false.`);
}

const unsafeInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of PROTECTED_OFFLINE_LOW_BANDWIDTH_MODE_FLAG_FIELDS) {
  unsafeInput[field] = true;
}
const normalizedUnsafeAttempt = normalizeOfflineLowBandwidthModeFeatureFlagState(unsafeInput);
for (const field of PROTECTED_OFFLINE_LOW_BANDWIDTH_MODE_FLAG_FIELDS) {
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
  "caches.",
  "navigator.serviceWorker",
  "serviceWorker.",
  "SyncManager",
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
  "cacheOfflineResponse(",
  "syncOfflineSources(",
  "queueOfflineAction(",
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
  assert(!moduleSource.includes(term), `AJ2 feature flag module must not include runtime API: ${term}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  moduleName,
  "NEXUS_OFFLINE_LOW_BANDWIDTH_MODE_VISIBLE_ENABLED",
  "NexusOfflineLowBandwidthModeFeatureFlagContract",
  "normalizeOfflineLowBandwidthModeFeatureFlagState",
  "isOfflineLowBandwidthModeVisibleFeatureEnabled",
  "offlineLowBandwidthModeFeatureFlag",
  "liveOfflineLowBandwidthModeRuntime",
  "offlineCacheRuntime",
  "backgroundSyncRuntime",
  "sourceSyncRuntime",
  "connectorSyncRuntime",
  "offlineQueueRuntime",
  "cacheOfflineResponse(",
  "syncOfflineSources(",
  "queueOfflineAction(",
  "nexus-sprint-aj2-offline-low-bandwidth-mode-feature-flag-contract"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Offline Low-Bandwidth Mode feature flag artifact: ${term}`);
}

const alias = "qa:nexus-sprint-aj2-offline-low-bandwidth-mode-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AJ2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-aj1-offline-low-bandwidth-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AJ1 QA.");
assert(qaSuite.includes("scripts/nexus-offline-low-bandwidth-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 88 QA.");

console.log("[nexus-sprint-aj2-offline-low-bandwidth-mode-feature-flag-contract-qa] passed");
