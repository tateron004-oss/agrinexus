const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  PROTECTED_STALE_DATA_ALERTS_FLAG_FIELDS,
  normalizeStaleDataAlertsFeatureFlagState
} = require("../public/nexus-stale-data-alerts-feature-flag.js");
const {
  fixturePath,
  protectedFields,
  loadStaleDataAlertsFlagFixtures,
  expandFixtureInput,
  validateStaleDataAlertsFlagFixtures
} = require("./nexus-sprint-ao3-stale-data-alerts-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AO3_STALE_DATA_ALERTS_FLAG_CONTRACT_HARNESS.md";
const qaName = "nexus-sprint-ao3-stale-data-alerts-flag-contract-harness-qa.js";
const harnessName = "nexus-sprint-ao3-stale-data-alerts-flag-contract-harness.js";
const fixtureName = "stale-data-alerts-feature-flags.json";

assert(exists("docs", docName), "Sprint AO3 harness doc must exist.");
assert(exists("scripts", harnessName), "Sprint AO3 harness script must exist.");
assert(exists("scripts", qaName), "Sprint AO3 QA script must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint AO3 fixtures must exist.");

const doc = read("docs", docName);
const harness = read("scripts", harnessName);
const fixturesSource = read("fixtures", "nexus", fixtureName);
const ao2Doc = read("docs", "NEXUS_SPRINT_AO2_STALE_DATA_ALERTS_FEATURE_FLAG_CONTRACT.md");
const runtime = [read("public", "index.html"), read("public", "app.js"), read("server.js")].join("\n");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadStaleDataAlertsFlagFixtures();

assert.equal(fixturePath, path.join(root, "fixtures", "nexus", fixtureName));
assert.deepEqual(protectedFields, Array.from(PROTECTED_STALE_DATA_ALERTS_FLAG_FIELDS));

assertIncludes(doc, [
  "Sprint AO3",
  "e37ae96047b7f1cf4cd13a2eeae02373f3797bf9",
  "documentation, fixture, and deterministic QA only",
  "Added Artifacts",
  "Fixture Coverage",
  "unsafeAuthorityAttempt",
  "Runtime Boundary",
  "Relationship To Sprint AO2",
  "Sprint AO4 - Stale Data Alerts Runtime Absence Regression Guard"
], "AO3 harness doc");

assert(ao2Doc.includes("Sprint AO3 - Stale Data Alerts Flag Contract Harness"), "AO2 must recommend Sprint AO3.");
assert(fixturesSource.includes("stale-data-alerts-default-off"), "AO3 fixtures must include default-off case.");
assert(fixturesSource.includes("stale-data-alerts-flag-on-visible-only"), "AO3 fixtures must include visible-only case.");
assert(fixturesSource.includes("stale-data-alerts-unsafe-authority-attempt"), "AO3 fixtures must include unsafe authority attempt.");
assert(fixturesSource.includes("stale-data-alerts-flag-on-without-visible-permission"), "AO3 fixtures must include no-visible-permission case.");

const result = validateStaleDataAlertsFlagFixtures(fixtures);
assert.equal(result.ok, true, result.failures.join("\n"));
assert.equal(result.count, 4, "AO3 fixtures must remain complete.");

const unsafeFixture = fixtures.find(fixture => fixture.fixtureId === "stale-data-alerts-unsafe-authority-attempt");
const expandedUnsafe = expandFixtureInput(unsafeFixture.input);
for (const field of protectedFields) {
  assert.equal(expandedUnsafe[field], true, `unsafeAuthorityAttempt must expand ${field}=true before normalization.`);
}

for (const fixture of fixtures) {
  const normalized = normalizeStaleDataAlertsFeatureFlagState(expandFixtureInput(fixture.input));
  for (const field of protectedFields) {
    assert.equal(normalized[field], false, `${fixture.fixtureId} must keep ${field}=false.`);
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
  "monitorSourceFreshness(",
  "renderStaleDataAlert(",
  "createStaleDataAlert(",
  "routeStaleWarning(",
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
  assert(!harness.includes(term), `AO3 harness must not include runtime API: ${term}`);
}

for (const term of [
  harnessName,
  fixtureName,
  "loadStaleDataAlertsFlagFixtures",
  "validateStaleDataAlertsFlagFixtures",
  "expandFixtureInput",
  "nexus-sprint-ao3-stale-data-alerts-flag-contract-harness"
]) {
  assert(!runtime.includes(term), `Runtime must not load AO3 harness artifact: ${term}`);
}

const alias = "qa:nexus-sprint-ao3-stale-data-alerts-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AO3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ao2-stale-data-alerts-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AO2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ao1-stale-data-alerts-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AO1 QA.");
assert(qaSuite.includes("scripts/nexus-stale-data-alerts-readiness-contract-qa.js"), "qa-suite must continue to include Stale Data Alerts readiness QA.");

console.log("[nexus-sprint-ao3-stale-data-alerts-flag-contract-harness-qa] passed");
