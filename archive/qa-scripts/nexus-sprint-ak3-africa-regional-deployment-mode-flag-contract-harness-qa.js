const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  PROTECTED_AFRICA_REGIONAL_DEPLOYMENT_MODE_FLAG_FIELDS,
  normalizeAfricaRegionalDeploymentModeFeatureFlagState
} = require("../public/nexus-africa-regional-deployment-mode-feature-flag.js");
const {
  fixturePath,
  protectedFields,
  loadAfricaRegionalDeploymentModeFlagFixtures,
  expandFixtureInput,
  validateAfricaRegionalDeploymentModeFlagFixtures
} = require("./nexus-sprint-ak3-africa-regional-deployment-mode-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AK3_AFRICA_REGIONAL_DEPLOYMENT_MODE_FLAG_CONTRACT_HARNESS.md";
const qaName = "nexus-sprint-ak3-africa-regional-deployment-mode-flag-contract-harness-qa.js";
const harnessName = "nexus-sprint-ak3-africa-regional-deployment-mode-flag-contract-harness.js";
const fixtureName = "africa-regional-deployment-mode-feature-flags.json";

assert(exists("docs", docName), "Sprint AK3 harness doc must exist.");
assert(exists("scripts", harnessName), "Sprint AK3 harness script must exist.");
assert(exists("scripts", qaName), "Sprint AK3 QA script must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint AK3 fixtures must exist.");

const doc = read("docs", docName);
const harness = read("scripts", harnessName);
const fixturesSource = read("fixtures", "nexus", fixtureName);
const ak2Doc = read("docs", "NEXUS_SPRINT_AK2_AFRICA_REGIONAL_DEPLOYMENT_MODE_FEATURE_FLAG_CONTRACT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadAfricaRegionalDeploymentModeFlagFixtures();

assert.equal(fixturePath, path.join(root, "fixtures", "nexus", fixtureName));
assert.deepEqual(protectedFields, Array.from(PROTECTED_AFRICA_REGIONAL_DEPLOYMENT_MODE_FLAG_FIELDS));

assertIncludes(doc, [
  "Sprint AK3",
  "4e59d548b1a06318705cdd096fbc9a2b88095c30",
  "documentation, fixture, and deterministic QA only",
  "Added Artifacts",
  "Fixture Coverage",
  "unsafeAuthorityAttempt",
  "Runtime Boundary",
  "Relationship To Sprint AK2",
  "Sprint AK4 - Africa Regional Deployment Mode Runtime Absence Regression Guard"
], "AK3 harness doc");

assert(ak2Doc.includes("Sprint AK3 - Africa Regional Deployment Mode Flag Contract Harness"), "AK2 must recommend Sprint AK3.");
assert(fixturesSource.includes("africa-regional-deployment-mode-default-off"), "AK3 fixtures must include default-off case.");
assert(fixturesSource.includes("africa-regional-deployment-mode-flag-on-visible-only"), "AK3 fixtures must include visible-only case.");
assert(fixturesSource.includes("africa-regional-deployment-mode-unsafe-authority-attempt"), "AK3 fixtures must include unsafe authority attempt.");
assert(fixturesSource.includes("africa-regional-deployment-mode-flag-on-without-visible-permission"), "AK3 fixtures must include no-visible-permission case.");

const result = validateAfricaRegionalDeploymentModeFlagFixtures(fixtures);
assert.equal(result.ok, true, result.failures.join("\n"));
assert.equal(result.count, 4, "AK3 fixtures must remain complete.");

const unsafeFixture = fixtures.find(fixture => fixture.fixtureId === "africa-regional-deployment-mode-unsafe-authority-attempt");
const expandedUnsafe = expandFixtureInput(unsafeFixture.input);
for (const field of protectedFields) {
  assert.equal(expandedUnsafe[field], true, `unsafeAuthorityAttempt must expand ${field}=true before normalization.`);
}

for (const fixture of fixtures) {
  const normalized = normalizeAfricaRegionalDeploymentModeFeatureFlagState(expandFixtureInput(fixture.input));
  for (const field of protectedFields) {
    assert.equal(normalized[field], false, `${fixture.fixtureId} must keep ${field}=false.`);
    assert(doc.includes(`${field}: false`), `AK3 doc must document ${field}: false.`);
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
  "activateCountryKit(",
  "routeByJurisdiction(",
  "syncRegionalSources(",
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
  assert(!harness.includes(term), `AK3 harness must not include runtime API: ${term}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  harnessName,
  fixtureName,
  "loadAfricaRegionalDeploymentModeFlagFixtures",
  "validateAfricaRegionalDeploymentModeFlagFixtures",
  "expandFixtureInput",
  "nexus-sprint-ak3-africa-regional-deployment-mode-flag-contract-harness"
]) {
  assert(!runtime.includes(term), `Runtime must not load AK3 harness artifact: ${term}`);
}

const alias = "qa:nexus-sprint-ak3-africa-regional-deployment-mode-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AK3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ak2-africa-regional-deployment-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AK2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ak1-africa-regional-deployment-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AK1 QA.");
assert(qaSuite.includes("scripts/nexus-africa-regional-deployment-mode-readiness-contract-qa.js"), "qa-suite must continue to include Africa Regional Deployment Mode readiness QA.");

console.log("[nexus-sprint-ak3-africa-regional-deployment-mode-flag-contract-harness-qa] passed");
