const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  PROTECTED_OBSERVABILITY_MONITORING_FLAG_FIELDS,
  normalizeObservabilityMonitoringFeatureFlagState
} = require("../public/nexus-observability-monitoring-feature-flag.js");
const {
  fixturePath,
  protectedFields,
  loadObservabilityMonitoringFlagFixtures,
  expandFixtureInput,
  validateObservabilityMonitoringFlagFixtures
} = require("./nexus-sprint-am3-observability-monitoring-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AM3_OBSERVABILITY_MONITORING_FLAG_CONTRACT_HARNESS.md";
const qaName = "nexus-sprint-am3-observability-monitoring-flag-contract-harness-qa.js";
const harnessName = "nexus-sprint-am3-observability-monitoring-flag-contract-harness.js";
const fixtureName = "observability-monitoring-feature-flags.json";

assert(exists("docs", docName), "Sprint AM3 harness doc must exist.");
assert(exists("scripts", harnessName), "Sprint AM3 harness script must exist.");
assert(exists("scripts", qaName), "Sprint AM3 QA script must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint AM3 fixtures must exist.");

const doc = read("docs", docName);
const harness = read("scripts", harnessName);
const fixturesSource = read("fixtures", "nexus", fixtureName);
const am2Doc = read("docs", "NEXUS_SPRINT_AM2_OBSERVABILITY_MONITORING_FEATURE_FLAG_CONTRACT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadObservabilityMonitoringFlagFixtures();

assert.equal(fixturePath, path.join(root, "fixtures", "nexus", fixtureName));
assert.deepEqual(protectedFields, Array.from(PROTECTED_OBSERVABILITY_MONITORING_FLAG_FIELDS));

assertIncludes(doc, [
  "Sprint AM3",
  "41150e2b4a21fa301f3f2c0b32340ef5575bd669",
  "documentation, fixture, and deterministic QA only",
  "Added Artifacts",
  "Fixture Coverage",
  "unsafeAuthorityAttempt",
  "Runtime Boundary",
  "Relationship To Sprint AM2",
  "Sprint AM4 - Observability Monitoring Runtime Absence Regression Guard"
], "AM3 harness doc");

assert(am2Doc.includes("Sprint AM3 - Observability Monitoring Flag Contract Harness"), "AM2 must recommend Sprint AM3.");
assert(fixturesSource.includes("observability-monitoring-default-off"), "AM3 fixtures must include default-off case.");
assert(fixturesSource.includes("observability-monitoring-flag-on-visible-only"), "AM3 fixtures must include visible-only case.");
assert(fixturesSource.includes("observability-monitoring-unsafe-authority-attempt"), "AM3 fixtures must include unsafe authority attempt.");
assert(fixturesSource.includes("observability-monitoring-flag-on-without-visible-permission"), "AM3 fixtures must include no-visible-permission case.");

const result = validateObservabilityMonitoringFlagFixtures(fixtures);
assert.equal(result.ok, true, result.failures.join("\n"));
assert.equal(result.count, 4, "AM3 fixtures must remain complete.");

const unsafeFixture = fixtures.find(fixture => fixture.fixtureId === "observability-monitoring-unsafe-authority-attempt");
const expandedUnsafe = expandFixtureInput(unsafeFixture.input);
for (const field of protectedFields) {
  assert.equal(expandedUnsafe[field], true, `unsafeAuthorityAttempt must expand ${field}=true before normalization.`);
}

for (const fixture of fixtures) {
  const normalized = normalizeObservabilityMonitoringFeatureFlagState(expandFixtureInput(fixture.input));
  for (const field of protectedFields) {
    assert.equal(normalized[field], false, `${fixture.fixtureId} must keep ${field}=false.`);
    assert(doc.includes(`${field}: false`), `AM3 doc must document ${field}: false.`);
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
  "collectTelemetry(",
  "renderMonitoringDashboard(",
  "createMonitoringAlert(",
  "pollConnectorHealth(",
  "monitorSourceFreshness(",
  "monitorPartnerHealth(",
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
  assert(!harness.includes(term), `AM3 harness must not include runtime API: ${term}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  harnessName,
  fixtureName,
  "loadObservabilityMonitoringFlagFixtures",
  "validateObservabilityMonitoringFlagFixtures",
  "expandFixtureInput",
  "nexus-sprint-am3-observability-monitoring-flag-contract-harness"
]) {
  assert(!runtime.includes(term), `Runtime must not load AM3 harness artifact: ${term}`);
}

const alias = "qa:nexus-sprint-am3-observability-monitoring-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AM3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-am2-observability-monitoring-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AM2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-am1-observability-monitoring-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AM1 QA.");
assert(qaSuite.includes("scripts/nexus-observability-monitoring-readiness-contract-qa.js"), "qa-suite must continue to include Observability Monitoring readiness QA.");

console.log("[nexus-sprint-am3-observability-monitoring-flag-contract-harness-qa] passed");
