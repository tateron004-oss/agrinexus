const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_OFFLINE_LOW_BANDWIDTH_MODE_FEATURE_FLAG_STATE,
  normalizeOfflineLowBandwidthModeFeatureFlagState
} = require("../public/nexus-offline-low-bandwidth-mode-feature-flag.js");
const {
  protectedFields,
  loadOfflineLowBandwidthModeFlagFixtures,
  expandFixtureInput,
  validateOfflineLowBandwidthModeFlagFixtures
} = require("./nexus-sprint-aj3-offline-low-bandwidth-mode-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AJ5_OFFLINE_LOW_BANDWIDTH_MODE_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-aj5-offline-low-bandwidth-mode-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint AJ5 lane closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint AJ5 QA script must exist.");

const doc = read("docs", docName);
const aj4Doc = read("docs", "NEXUS_SPRINT_AJ4_OFFLINE_LOW_BANDWIDTH_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-offline-low-bandwidth-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-offline-low-bandwidth-mode-feature-flag.js");
const harness = read("scripts", "nexus-sprint-aj3-offline-low-bandwidth-mode-flag-contract-harness.js");
const fixtures = loadOfflineLowBandwidthModeFlagFixtures();

assertIncludes(doc, [
  "Sprint AJ5",
  "d34eb79a992e6b99b2dd466c104849e2b54eb400",
  "documentation and deterministic QA only",
  "Sprint AJ Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint AK1 - Africa Regional Deployment Mode Runtime Activation Readiness Gate"
], "AJ5 closeout doc");

assertIncludes(doc, [
  "AJ1 | Offline Low-Bandwidth Mode runtime activation readiness gate | Complete",
  "AJ2 | Offline Low-Bandwidth Mode feature flag contract | Complete",
  "AJ3 | Offline Low-Bandwidth Mode flag contract harness | Complete",
  "AJ4 | Offline Low-Bandwidth Mode runtime absence regression guard | Complete",
  "AJ5 | Offline Low-Bandwidth Mode lane closeout | Complete"
], "AJ5 completion table");

assertIncludes(aj4Doc, [
  "Sprint AJ5 - Offline Low-Bandwidth Mode Lane Closeout"
], "AJ4 next sprint recommendation");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AJ1_OFFLINE_LOW_BANDWIDTH_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_AJ2_OFFLINE_LOW_BANDWIDTH_MODE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_AJ3_OFFLINE_LOW_BANDWIDTH_MODE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_SPRINT_AJ4_OFFLINE_LOW_BANDWIDTH_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md"],
  ["docs", "NEXUS_OFFLINE_LOW_BANDWIDTH_MODE_READINESS_CONTRACT_PHASE_88.md"],
  ["public", "nexus-offline-low-bandwidth-mode-readiness-contract.js"],
  ["public", "nexus-offline-low-bandwidth-mode-feature-flag.js"],
  ["fixtures", "nexus", "offline-low-bandwidth-mode-feature-flags.json"],
  ["scripts", "nexus-sprint-aj1-offline-low-bandwidth-mode-runtime-activation-readiness-gate-qa.js"],
  ["scripts", "nexus-sprint-aj2-offline-low-bandwidth-mode-feature-flag-contract-qa.js"],
  ["scripts", "nexus-sprint-aj3-offline-low-bandwidth-mode-flag-contract-harness-qa.js"],
  ["scripts", "nexus-sprint-aj4-offline-low-bandwidth-mode-runtime-absence-regression-guard-qa.js"],
  ["scripts", "nexus-offline-low-bandwidth-mode-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `AJ5 requires artifact: ${requiredPath.join("/")}`);
}

assertIncludes(readinessContract, [
  "OFFLINE_LOW_BANDWIDTH_MODE_READINESS_CONTRACT",
  "offline-low-bandwidth-mode.readiness.phase_88",
  "OFFLINE_LOW_BANDWIDTH_MODE_NO_EXECUTION_DEFAULTS",
  "createOfflineLowBandwidthModeReadinessContract",
  "\"executionAllowed\": false",
  "\"liveConnectorEnabled\": false",
  "\"providerExecutionEnabled\": false",
  "\"regulatedActionEnabled\": false",
  "healthcare",
  "pharmacy",
  "medical_records",
  "emergency",
  "regulated_execution"
], "Phase 88 Offline Low-Bandwidth Mode readiness contract");

assert.equal(DEFAULT_OFFLINE_LOW_BANDWIDTH_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_OFFLINE_LOW_BANDWIDTH_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_OFFLINE_LOW_BANDWIDTH_MODE_FEATURE_FLAG_STATE[field], false, `AJ5 default ${field} must remain false.`);
  assert(doc.includes(`${field}: false`), `AJ5 doc must document ${field}: false.`);
}
assert.equal(DEFAULT_OFFLINE_LOW_BANDWIDTH_MODE_FEATURE_FLAG_STATE.noExecution, true);
assert(doc.includes("noExecution: true"), "AJ5 doc must document noExecution: true.");

const unsafeInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of protectedFields) {
  unsafeInput[field] = true;
}
const normalizedUnsafeAttempt = normalizeOfflineLowBandwidthModeFeatureFlagState(unsafeInput);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateOfflineLowBandwidthModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "AJ3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "AJ3 fixtures must remain complete.");

const unsafeFixture = fixtures.find(fixture => fixture.fixtureId === "offline-low-bandwidth-mode-unsafe-authority-attempt");
const expandedUnsafe = expandFixtureInput(unsafeFixture.input);
for (const field of protectedFields) {
  assert.equal(expandedUnsafe[field], true, `unsafeAuthorityAttempt must expand ${field}=true before normalization.`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-offline-low-bandwidth-mode-readiness-contract.js",
  "nexus-offline-low-bandwidth-mode-feature-flag.js",
  "nexus-sprint-aj3-offline-low-bandwidth-mode-flag-contract-harness",
  "offline-low-bandwidth-mode-feature-flags.json",
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
  "nexus-sprint-aj5-offline-low-bandwidth-mode-lane-closeout"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Offline Low-Bandwidth Mode lane artifact: ${term}`);
}

for (const source of [featureFlagModule, harness]) {
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
    assert(!source.includes(term), `Sprint AJ contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-aj5-offline-low-bandwidth-mode-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AJ5 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-aj1-offline-low-bandwidth-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AJ1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-aj2-offline-low-bandwidth-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AJ2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-aj3-offline-low-bandwidth-mode-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint AJ3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-aj4-offline-low-bandwidth-mode-runtime-absence-regression-guard-qa.js"), "qa-suite must continue to include Sprint AJ4 QA.");
assert(qaSuite.includes("scripts/nexus-offline-low-bandwidth-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 88 QA.");

console.log("[nexus-sprint-aj5-offline-low-bandwidth-mode-lane-closeout-qa] passed");
