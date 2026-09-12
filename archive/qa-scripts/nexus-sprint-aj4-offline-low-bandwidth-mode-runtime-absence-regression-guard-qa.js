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

const docName = "NEXUS_SPRINT_AJ4_OFFLINE_LOW_BANDWIDTH_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-aj4-offline-low-bandwidth-mode-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint AJ4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint AJ4 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-offline-low-bandwidth-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-offline-low-bandwidth-mode-feature-flag.js");
const aj3Harness = read("scripts", "nexus-sprint-aj3-offline-low-bandwidth-mode-flag-contract-harness.js");
const fixtures = loadOfflineLowBandwidthModeFlagFixtures();

assertIncludes(doc, [
  "Sprint AJ4",
  "fabc0c3a64c8d89295e3a736063862b0abbd8ae6",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint AJ5 - Offline Low-Bandwidth Mode Lane Closeout"
], "AJ4 absence guard doc");

assertIncludes(doc, [
  "AJ1 Offline Low-Bandwidth Mode runtime activation readiness gate",
  "AJ2 Offline Low-Bandwidth Mode feature flag contract",
  "AJ3 Offline Low-Bandwidth Mode flag contract harness",
  "Phase 88 Offline Low-Bandwidth Mode readiness contract"
], "AJ4 protected artifacts");

assertIncludes(doc, [
  "public/nexus-offline-low-bandwidth-mode-readiness-contract.js",
  "public/nexus-offline-low-bandwidth-mode-feature-flag.js",
  "scripts/nexus-sprint-aj3-offline-low-bandwidth-mode-flag-contract-harness.js",
  "fixtures/nexus/offline-low-bandwidth-mode-feature-flags.json",
  "Sprint AJ QA scripts"
], "AJ4 runtime absence artifact list");

assertIncludes(doc, [
  "It intentionally does not ban generic health, telehealth, clinic",
  "provider",
  "pharmacy",
  "scheduling",
  "medical record",
  "FHIR",
  "prescription",
  "transportation",
  "emergency",
  "training",
  "jobs",
  "education",
  "learning",
  "support",
  "marketplace",
  "agriculture",
  "crop",
  "farmer",
  "trade",
  "AgriTrade",
  "map",
  "field",
  "workforce",
  "offline",
  "low-bandwidth",
  "source",
  "freshness",
  "confidence",
  "cache",
  "sync"
], "AJ4 generic wording exception");

assertIncludes(doc, [
  "active Offline Low-Bandwidth Mode runtime",
  "live Offline Low-Bandwidth Mode runtime",
  "offline cache runtime",
  "local-first source runtime",
  "service worker cache mutation",
  "service worker route mutation",
  "background sync",
  "source sync",
  "connector sync",
  "offline queue runtime",
  "queued action execution",
  "stale data claims without freshness labels",
  "current cached-data claims without verified freshness",
  "provider connector runtime",
  "clinic connector runtime",
  "telehealth connector runtime",
  "pharmacy connector runtime",
  "scheduling connector runtime",
  "medical record connector runtime",
  "FHIR connector runtime",
  "prescription connector runtime",
  "location connector runtime",
  "camera connector runtime",
  "microphone connector runtime",
  "communications connector runtime",
  "transportation connector runtime",
  "health connector runtime",
  "marketplace connector runtime",
  "emergency connector runtime",
  "provider contact",
  "appointment scheduling",
  "telehealth session creation",
  "prescription refill workflow",
  "medical record access",
  "location sharing",
  "camera activation",
  "microphone activation",
  "payment execution",
  "marketplace transaction execution",
  "typed route mutation",
  "voice route mutation",
  "policy bypass",
  "confirmation bypass",
  "permission bypass",
  "permission prompts",
  "backend writes",
  "localStorage or sessionStorage writes",
  "IndexedDB writes",
  "Cache API writes",
  "fetch or network calls",
  "provider handoff",
  "native bridge dispatch",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "AJ4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AJ1_OFFLINE_LOW_BANDWIDTH_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_AJ2_OFFLINE_LOW_BANDWIDTH_MODE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_AJ3_OFFLINE_LOW_BANDWIDTH_MODE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_OFFLINE_LOW_BANDWIDTH_MODE_READINESS_CONTRACT_PHASE_88.md"],
  ["public", "nexus-offline-low-bandwidth-mode-readiness-contract.js"],
  ["public", "nexus-offline-low-bandwidth-mode-feature-flag.js"],
  ["fixtures", "nexus", "offline-low-bandwidth-mode-feature-flags.json"],
  ["scripts", "nexus-sprint-aj3-offline-low-bandwidth-mode-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `AJ4 requires artifact: ${requiredPath.join("/")}`);
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
  "nexus-sprint-aj4-offline-low-bandwidth-mode-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Offline Low-Bandwidth Mode lane artifact: ${term}`);
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
  "communications",
  "healthcare",
  "pharmacy",
  "medical_records",
  "emergency",
  "regulated_execution"
], "Phase 88 Offline Low-Bandwidth Mode readiness contract");

assert.equal(DEFAULT_OFFLINE_LOW_BANDWIDTH_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_OFFLINE_LOW_BANDWIDTH_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_OFFLINE_LOW_BANDWIDTH_MODE_FEATURE_FLAG_STATE[field], false, `AJ4 default ${field} must remain false.`);
}
assert.equal(DEFAULT_OFFLINE_LOW_BANDWIDTH_MODE_FEATURE_FLAG_STATE.noExecution, true);

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
  assert.equal(normalizedUnsafeAttempt[field], false, `AJ4 unsafe attempt must normalize ${field}=false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateOfflineLowBandwidthModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, fixtureResult.failures.join("\n"));
assert.equal(fixtureResult.count, 4, "AJ3 fixtures must remain deterministic.");

const unsafeFixture = fixtures.find(fixture => fixture.fixtureId === "offline-low-bandwidth-mode-unsafe-authority-attempt");
const expandedUnsafe = expandFixtureInput(unsafeFixture.input);
for (const field of protectedFields) {
  assert.equal(expandedUnsafe[field], true, `AJ4 unsafe fixture must expand ${field}=true before normalization.`);
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
  assert(!featureFlagModule.includes(term), `AJ2 feature flag module must not include runtime API: ${term}`);
  assert(!aj3Harness.includes(term), `AJ3 harness must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-aj4-offline-low-bandwidth-mode-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AJ4 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-aj3-offline-low-bandwidth-mode-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint AJ3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-aj2-offline-low-bandwidth-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AJ2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-aj1-offline-low-bandwidth-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AJ1 QA.");
assert(qaSuite.includes("scripts/nexus-offline-low-bandwidth-mode-readiness-contract-qa.js"), "qa-suite must continue to include Offline Low-Bandwidth Mode readiness QA.");

console.log("[nexus-sprint-aj4-offline-low-bandwidth-mode-runtime-absence-regression-guard-qa] passed");
