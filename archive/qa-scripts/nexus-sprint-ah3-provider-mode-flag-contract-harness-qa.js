const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  PROTECTED_PROVIDER_MODE_FLAG_FIELDS,
  normalizeProviderModeFeatureFlagState
} = require("../public/nexus-provider-mode-feature-flag.js");
const {
  fixturePath,
  protectedFields,
  loadProviderModeFlagFixtures,
  validateProviderModeFlagFixtures
} = require("./nexus-sprint-ah3-provider-mode-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AH3_PROVIDER_MODE_FLAG_CONTRACT_HARNESS.md";
const qaName = "nexus-sprint-ah3-provider-mode-flag-contract-harness-qa.js";
const harnessName = "nexus-sprint-ah3-provider-mode-flag-contract-harness.js";
const fixtureName = "provider-mode-feature-flags.json";

assert(exists("docs", docName), "Sprint AH3 harness doc must exist.");
assert(exists("scripts", harnessName), "Sprint AH3 harness script must exist.");
assert(exists("scripts", qaName), "Sprint AH3 QA script must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint AH3 fixtures must exist.");

const doc = read("docs", docName);
const harness = read("scripts", harnessName);
const fixturesSource = read("fixtures", "nexus", fixtureName);
const ah2Doc = read("docs", "NEXUS_SPRINT_AH2_PROVIDER_MODE_FEATURE_FLAG_CONTRACT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadProviderModeFlagFixtures();

assert.equal(fixturePath, path.join(root, "fixtures", "nexus", fixtureName));
assert.deepEqual(protectedFields, Array.from(PROTECTED_PROVIDER_MODE_FLAG_FIELDS));

assertIncludes(doc, [
  "Sprint AH3",
  "d64cc4b1689dedae5a507e5cee89fcca321838e1",
  "documentation, fixture, and deterministic QA only",
  "Added Artifacts",
  "Fixture Coverage",
  "Runtime Boundary",
  "Relationship To Sprint AH2",
  "Sprint AH4 - Provider Mode Runtime Absence Regression Guard"
], "AH3 harness doc");

assert(ah2Doc.includes("Sprint AH3 - Provider Mode Flag Contract Harness"), "AH2 must recommend Sprint AH3.");
assert(fixturesSource.includes("provider-mode-default-off"), "AH3 fixtures must include default-off case.");
assert(fixturesSource.includes("provider-mode-flag-on-visible-only"), "AH3 fixtures must include visible-only case.");
assert(fixturesSource.includes("provider-mode-unsafe-authority-attempt"), "AH3 fixtures must include unsafe authority attempt.");
assert(fixturesSource.includes("provider-mode-flag-on-without-visible-permission"), "AH3 fixtures must include no-visible-permission case.");

const result = validateProviderModeFlagFixtures(fixtures);
assert.equal(result.ok, true, result.failures.join("\n"));
assert.equal(result.count, 4, "AH3 fixtures must remain complete.");

for (const fixture of fixtures) {
  const normalized = normalizeProviderModeFeatureFlagState(fixture.input);
  for (const field of protectedFields) {
    assert.equal(normalized[field], false, `${fixture.fixtureId} must keep ${field}=false.`);
    assert(doc.includes(`${field}: false`), `AH3 doc must document ${field}: false.`);
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
  "contactProvider(",
  "contactClinic(",
  "contactPharmacy(",
  "scheduleProviderAppointment(",
  "createTelehealthSession(",
  "requestPharmacyRefill(",
  "accessMedicalRecord(",
  "createClinicalDocumentation(",
  "sharePatientLocation(",
  "activateCamera(",
  "activateMicrophone(",
  "processProviderPayment(",
  "executeMarketplacePurchase(",
  "executeMarketplaceSale(",
  "dispatchTransportation(",
  "dispatchEmergency("
]) {
  assert(!harness.includes(term), `AH3 harness must not include runtime API: ${term}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  harnessName,
  fixtureName,
  "loadProviderModeFlagFixtures",
  "validateProviderModeFlagFixtures",
  "nexus-sprint-ah3-provider-mode-flag-contract-harness"
]) {
  assert(!runtime.includes(term), `Runtime must not load AH3 harness artifact: ${term}`);
}

const alias = "qa:nexus-sprint-ah3-provider-mode-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AH3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ah2-provider-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AH2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ah1-provider-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AH1 QA.");
assert(qaSuite.includes("scripts/nexus-provider-mode-readiness-contract-qa.js"), "qa-suite must continue to include Provider Mode readiness QA.");

console.log("[nexus-sprint-ah3-provider-mode-flag-contract-harness-qa] passed");
