const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  PROTECTED_CONNECTOR_RELIABILITY_FLAG_FIELDS,
  normalizeConnectorReliabilityFeatureFlagState
} = require("../public/nexus-connector-reliability-feature-flag.js");
const {
  fixturePath,
  protectedFields,
  loadConnectorReliabilityFlagFixtures,
  expandFixtureInput,
  validateConnectorReliabilityFlagFixtures
} = require("./nexus-sprint-an3-connector-reliability-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AN3_CONNECTOR_RELIABILITY_FLAG_CONTRACT_HARNESS.md";
const qaName = "nexus-sprint-an3-connector-reliability-flag-contract-harness-qa.js";
const harnessName = "nexus-sprint-an3-connector-reliability-flag-contract-harness.js";
const fixtureName = "connector-reliability-feature-flags.json";

assert(exists("docs", docName), "Sprint AN3 harness doc must exist.");
assert(exists("scripts", harnessName), "Sprint AN3 harness script must exist.");
assert(exists("scripts", qaName), "Sprint AN3 QA script must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint AN3 fixtures must exist.");

const doc = read("docs", docName);
const harness = read("scripts", harnessName);
const fixturesSource = read("fixtures", "nexus", fixtureName);
const an2Doc = read("docs", "NEXUS_SPRINT_AN2_CONNECTOR_RELIABILITY_FEATURE_FLAG_CONTRACT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadConnectorReliabilityFlagFixtures();

assert.equal(fixturePath, path.join(root, "fixtures", "nexus", fixtureName));
assert.deepEqual(protectedFields, Array.from(PROTECTED_CONNECTOR_RELIABILITY_FLAG_FIELDS));

assertIncludes(doc, [
  "Sprint AN3",
  "cfb1cfa1556196a59f8d98604df2ab1bf7ac4042",
  "documentation, fixture, and deterministic QA only",
  "Added Artifacts",
  "Fixture Coverage",
  "unsafeAuthorityAttempt",
  "Runtime Boundary",
  "Relationship To Sprint AN2",
  "Sprint AN4 - Connector Reliability Runtime Absence Regression Guard"
], "AN3 harness doc");

assert(an2Doc.includes("Sprint AN3 - Connector Reliability Flag Contract Harness"), "AN2 must recommend Sprint AN3.");
assert(fixturesSource.includes("connector-reliability-default-off"), "AN3 fixtures must include default-off case.");
assert(fixturesSource.includes("connector-reliability-flag-on-visible-only"), "AN3 fixtures must include visible-only case.");
assert(fixturesSource.includes("connector-reliability-unsafe-authority-attempt"), "AN3 fixtures must include unsafe authority attempt.");
assert(fixturesSource.includes("connector-reliability-flag-on-without-visible-permission"), "AN3 fixtures must include no-visible-permission case.");

const result = validateConnectorReliabilityFlagFixtures(fixtures);
assert.equal(result.ok, true, result.failures.join("\n"));
assert.equal(result.count, 4, "AN3 fixtures must remain complete.");

const unsafeFixture = fixtures.find(fixture => fixture.fixtureId === "connector-reliability-unsafe-authority-attempt");
const expandedUnsafe = expandFixtureInput(unsafeFixture.input);
for (const field of protectedFields) {
  assert.equal(expandedUnsafe[field], true, `unsafeAuthorityAttempt must expand ${field}=true before normalization.`);
}

for (const fixture of fixtures) {
  const normalized = normalizeConnectorReliabilityFeatureFlagState(expandFixtureInput(fixture.input));
  for (const field of protectedFields) {
    assert.equal(normalized[field], false, `${fixture.fixtureId} must keep ${field}=false.`);
    assert(doc.includes(`${field}: false`), `AN3 doc must document ${field}: false.`);
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
  "pollConnectorHealth(",
  "retryConnector(",
  "applyConnectorFallback(",
  "renderConnectorDashboard(",
  "createStaleDataAlert(",
  "monitorSourceAvailability(",
  "monitorProviderAvailability(",
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
  assert(!harness.includes(term), `AN3 harness must not include runtime API: ${term}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  harnessName,
  fixtureName,
  "loadConnectorReliabilityFlagFixtures",
  "validateConnectorReliabilityFlagFixtures",
  "expandFixtureInput",
  "nexus-sprint-an3-connector-reliability-flag-contract-harness"
]) {
  assert(!runtime.includes(term), `Runtime must not load AN3 harness artifact: ${term}`);
}

const alias = "qa:nexus-sprint-an3-connector-reliability-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AN3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-an2-connector-reliability-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AN2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-an1-connector-reliability-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AN1 QA.");
assert(qaSuite.includes("scripts/nexus-connector-reliability-readiness-contract-qa.js"), "qa-suite must continue to include Connector Reliability readiness QA.");

console.log("[nexus-sprint-an3-connector-reliability-flag-contract-harness-qa] passed");
