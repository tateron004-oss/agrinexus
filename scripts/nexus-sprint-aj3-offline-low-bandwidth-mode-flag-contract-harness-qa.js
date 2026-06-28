const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  PROTECTED_OFFLINE_LOW_BANDWIDTH_MODE_FLAG_FIELDS,
  normalizeOfflineLowBandwidthModeFeatureFlagState
} = require("../public/nexus-offline-low-bandwidth-mode-feature-flag.js");
const {
  fixturePath,
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

const docName = "NEXUS_SPRINT_AJ3_OFFLINE_LOW_BANDWIDTH_MODE_FLAG_CONTRACT_HARNESS.md";
const qaName = "nexus-sprint-aj3-offline-low-bandwidth-mode-flag-contract-harness-qa.js";
const harnessName = "nexus-sprint-aj3-offline-low-bandwidth-mode-flag-contract-harness.js";
const fixtureName = "offline-low-bandwidth-mode-feature-flags.json";

assert(exists("docs", docName), "Sprint AJ3 harness doc must exist.");
assert(exists("scripts", harnessName), "Sprint AJ3 harness script must exist.");
assert(exists("scripts", qaName), "Sprint AJ3 QA script must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint AJ3 fixtures must exist.");

const doc = read("docs", docName);
const harness = read("scripts", harnessName);
const fixturesSource = read("fixtures", "nexus", fixtureName);
const aj2Doc = read("docs", "NEXUS_SPRINT_AJ2_OFFLINE_LOW_BANDWIDTH_MODE_FEATURE_FLAG_CONTRACT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadOfflineLowBandwidthModeFlagFixtures();

assert.equal(fixturePath, path.join(root, "fixtures", "nexus", fixtureName));
assert.deepEqual(protectedFields, Array.from(PROTECTED_OFFLINE_LOW_BANDWIDTH_MODE_FLAG_FIELDS));

assertIncludes(doc, [
  "Sprint AJ3",
  "b09668700323ead8650a74aea1e94c56b389a89e",
  "documentation, fixture, and deterministic QA only",
  "Added Artifacts",
  "Fixture Coverage",
  "unsafeAuthorityAttempt",
  "Runtime Boundary",
  "Relationship To Sprint AJ2",
  "Sprint AJ4 - Offline Low-Bandwidth Mode Runtime Absence Regression Guard"
], "AJ3 harness doc");

assert(aj2Doc.includes("Sprint AJ3 - Offline Low-Bandwidth Mode Flag Contract Harness"), "AJ2 must recommend Sprint AJ3.");
assert(fixturesSource.includes("offline-low-bandwidth-mode-default-off"), "AJ3 fixtures must include default-off case.");
assert(fixturesSource.includes("offline-low-bandwidth-mode-flag-on-visible-only"), "AJ3 fixtures must include visible-only case.");
assert(fixturesSource.includes("offline-low-bandwidth-mode-unsafe-authority-attempt"), "AJ3 fixtures must include unsafe authority attempt.");
assert(fixturesSource.includes("offline-low-bandwidth-mode-flag-on-without-visible-permission"), "AJ3 fixtures must include no-visible-permission case.");

const result = validateOfflineLowBandwidthModeFlagFixtures(fixtures);
assert.equal(result.ok, true, result.failures.join("\n"));
assert.equal(result.count, 4, "AJ3 fixtures must remain complete.");

const unsafeFixture = fixtures.find(fixture => fixture.fixtureId === "offline-low-bandwidth-mode-unsafe-authority-attempt");
const expandedUnsafe = expandFixtureInput(unsafeFixture.input);
for (const field of protectedFields) {
  assert.equal(expandedUnsafe[field], true, `unsafeAuthorityAttempt must expand ${field}=true before normalization.`);
}

for (const fixture of fixtures) {
  const normalized = normalizeOfflineLowBandwidthModeFeatureFlagState(expandFixtureInput(fixture.input));
  for (const field of protectedFields) {
    assert.equal(normalized[field], false, `${fixture.fixtureId} must keep ${field}=false.`);
    assert(doc.includes(`${field}: false`), `AJ3 doc must document ${field}: false.`);
  }
  assert.equal(normalized.noExecution, true, `${fixture.fixtureId} must keep noExecution=true.`);
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
  "contactClinic(",
  "contactPharmacy(",
  "scheduleProviderAppointment(",
  "createTelehealthSession(",
  "requestPharmacyRefill(",
  "accessMedicalRecord(",
  "sharePatientLocation(",
  "activateCamera(",
  "activateMicrophone(",
  "processProviderPayment(",
  "executeMarketplacePurchase(",
  "executeMarketplaceSale(",
  "dispatchTransportation(",
  "dispatchEmergency("
]) {
  assert(!harness.includes(term), `AJ3 harness must not include runtime API: ${term}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  harnessName,
  fixtureName,
  "loadOfflineLowBandwidthModeFlagFixtures",
  "validateOfflineLowBandwidthModeFlagFixtures",
  "expandFixtureInput",
  "nexus-sprint-aj3-offline-low-bandwidth-mode-flag-contract-harness"
]) {
  assert(!runtime.includes(term), `Runtime must not load AJ3 harness artifact: ${term}`);
}

const alias = "qa:nexus-sprint-aj3-offline-low-bandwidth-mode-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AJ3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-aj2-offline-low-bandwidth-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AJ2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-aj1-offline-low-bandwidth-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AJ1 QA.");
assert(qaSuite.includes("scripts/nexus-offline-low-bandwidth-mode-readiness-contract-qa.js"), "qa-suite must continue to include Offline Low-Bandwidth Mode readiness QA.");

console.log("[nexus-sprint-aj3-offline-low-bandwidth-mode-flag-contract-harness-qa] passed");
