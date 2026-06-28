const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  PROTECTED_LOCAL_LANGUAGE_PACK_MODE_FLAG_FIELDS,
  normalizeLocalLanguagePackModeFeatureFlagState
} = require("../public/nexus-local-language-pack-mode-feature-flag.js");
const {
  fixturePath,
  protectedFields,
  loadLocalLanguagePackModeFlagFixtures,
  expandFixtureInput,
  validateLocalLanguagePackModeFlagFixtures
} = require("./nexus-sprint-al3-local-language-pack-mode-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AL3_LOCAL_LANGUAGE_PACK_MODE_FLAG_CONTRACT_HARNESS.md";
const qaName = "nexus-sprint-al3-local-language-pack-mode-flag-contract-harness-qa.js";
const harnessName = "nexus-sprint-al3-local-language-pack-mode-flag-contract-harness.js";
const fixtureName = "local-language-pack-mode-feature-flags.json";

assert(exists("docs", docName), "Sprint AL3 harness doc must exist.");
assert(exists("scripts", harnessName), "Sprint AL3 harness script must exist.");
assert(exists("scripts", qaName), "Sprint AL3 QA script must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint AL3 fixtures must exist.");

const doc = read("docs", docName);
const harness = read("scripts", harnessName);
const fixturesSource = read("fixtures", "nexus", fixtureName);
const al2Doc = read("docs", "NEXUS_SPRINT_AL2_LOCAL_LANGUAGE_PACK_MODE_FEATURE_FLAG_CONTRACT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadLocalLanguagePackModeFlagFixtures();

assert.equal(fixturePath, path.join(root, "fixtures", "nexus", fixtureName));
assert.deepEqual(protectedFields, Array.from(PROTECTED_LOCAL_LANGUAGE_PACK_MODE_FLAG_FIELDS));

assertIncludes(doc, [
  "Sprint AL3",
  "f2303ae1ec905f05cd4b95698ea8fb04148364c1",
  "documentation, fixture, and deterministic QA only",
  "Added Artifacts",
  "Fixture Coverage",
  "unsafeAuthorityAttempt",
  "Runtime Boundary",
  "Relationship To Sprint AL2",
  "Sprint AL4 - Local Language Pack Mode Runtime Absence Regression Guard"
], "AL3 harness doc");

assert(al2Doc.includes("Sprint AL3 - Local Language Pack Mode Flag Contract Harness"), "AL2 must recommend Sprint AL3.");
assert(fixturesSource.includes("local-language-pack-mode-default-off"), "AL3 fixtures must include default-off case.");
assert(fixturesSource.includes("local-language-pack-mode-flag-on-visible-only"), "AL3 fixtures must include visible-only case.");
assert(fixturesSource.includes("local-language-pack-mode-unsafe-authority-attempt"), "AL3 fixtures must include unsafe authority attempt.");
assert(fixturesSource.includes("local-language-pack-mode-flag-on-without-visible-permission"), "AL3 fixtures must include no-visible-permission case.");

const result = validateLocalLanguagePackModeFlagFixtures(fixtures);
assert.equal(result.ok, true, result.failures.join("\n"));
assert.equal(result.count, 4, "AL3 fixtures must remain complete.");

const unsafeFixture = fixtures.find(fixture => fixture.fixtureId === "local-language-pack-mode-unsafe-authority-attempt");
const expandedUnsafe = expandFixtureInput(unsafeFixture.input);
for (const field of protectedFields) {
  assert.equal(expandedUnsafe[field], true, `unsafeAuthorityAttempt must expand ${field}=true before normalization.`);
}

for (const fixture of fixtures) {
  const normalized = normalizeLocalLanguagePackModeFeatureFlagState(expandFixtureInput(fixture.input));
  for (const field of protectedFields) {
    assert.equal(normalized[field], false, `${fixture.fixtureId} must keep ${field}=false.`);
    assert(doc.includes(`${field}: false`), `AL3 doc must document ${field}: false.`);
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
  "installLanguagePack(",
  "routeByLocalLanguage(",
  "syncLanguagePackSources(",
  "translateClinicalContext(",
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
  assert(!harness.includes(term), `AL3 harness must not include runtime API: ${term}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  harnessName,
  fixtureName,
  "loadLocalLanguagePackModeFlagFixtures",
  "validateLocalLanguagePackModeFlagFixtures",
  "expandFixtureInput",
  "nexus-sprint-al3-local-language-pack-mode-flag-contract-harness"
]) {
  assert(!runtime.includes(term), `Runtime must not load AL3 harness artifact: ${term}`);
}

const alias = "qa:nexus-sprint-al3-local-language-pack-mode-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AL3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-al2-local-language-pack-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AL2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-al1-local-language-pack-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AL1 QA.");
assert(qaSuite.includes("scripts/nexus-local-language-pack-mode-readiness-contract-qa.js"), "qa-suite must continue to include Local Language Pack Mode readiness QA.");

console.log("[nexus-sprint-al3-local-language-pack-mode-flag-contract-harness-qa] passed");
