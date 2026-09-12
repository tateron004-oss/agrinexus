const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  PROTECTED_ADMIN_MODE_FLAG_FIELDS,
  normalizeAdminModeFeatureFlagState
} = require("../public/nexus-admin-mode-feature-flag.js");
const {
  fixturePath,
  protectedFields,
  loadAdminModeFlagFixtures,
  expandFixtureInput,
  validateAdminModeFlagFixtures
} = require("./nexus-sprint-ai3-admin-mode-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AI3_ADMIN_MODE_FLAG_CONTRACT_HARNESS.md";
const qaName = "nexus-sprint-ai3-admin-mode-flag-contract-harness-qa.js";
const harnessName = "nexus-sprint-ai3-admin-mode-flag-contract-harness.js";
const fixtureName = "admin-mode-feature-flags.json";

assert(exists("docs", docName), "Sprint AI3 harness doc must exist.");
assert(exists("scripts", harnessName), "Sprint AI3 harness script must exist.");
assert(exists("scripts", qaName), "Sprint AI3 QA script must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint AI3 fixtures must exist.");

const doc = read("docs", docName);
const harness = read("scripts", harnessName);
const fixturesSource = read("fixtures", "nexus", fixtureName);
const ai2Doc = read("docs", "NEXUS_SPRINT_AI2_ADMIN_MODE_FEATURE_FLAG_CONTRACT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadAdminModeFlagFixtures();

assert.equal(fixturePath, path.join(root, "fixtures", "nexus", fixtureName));
assert.deepEqual(protectedFields, Array.from(PROTECTED_ADMIN_MODE_FLAG_FIELDS));

assertIncludes(doc, [
  "Sprint AI3",
  "b3faf4c1269c53c9f156729c2f6fdbf6fcb0d471",
  "documentation, fixture, and deterministic QA only",
  "Added Artifacts",
  "Fixture Coverage",
  "unsafeAuthorityAttempt",
  "Runtime Boundary",
  "Relationship To Sprint AI2",
  "Sprint AI4 - Admin Mode Runtime Absence Regression Guard"
], "AI3 harness doc");

assert(ai2Doc.includes("Sprint AI3 - Admin Mode Flag Contract Harness"), "AI2 must recommend Sprint AI3.");
assert(fixturesSource.includes("admin-mode-default-off"), "AI3 fixtures must include default-off case.");
assert(fixturesSource.includes("admin-mode-flag-on-visible-only"), "AI3 fixtures must include visible-only case.");
assert(fixturesSource.includes("admin-mode-unsafe-authority-attempt"), "AI3 fixtures must include unsafe authority attempt.");
assert(fixturesSource.includes("admin-mode-flag-on-without-visible-permission"), "AI3 fixtures must include no-visible-permission case.");

const result = validateAdminModeFlagFixtures(fixtures);
assert.equal(result.ok, true, result.failures.join("\n"));
assert.equal(result.count, 4, "AI3 fixtures must remain complete.");

const unsafeFixture = fixtures.find(fixture => fixture.fixtureId === "admin-mode-unsafe-authority-attempt");
const expandedUnsafe = expandFixtureInput(unsafeFixture.input);
for (const field of protectedFields) {
  assert.equal(expandedUnsafe[field], true, `unsafeAuthorityAttempt must expand ${field}=true before normalization.`);
}

for (const fixture of fixtures) {
  const normalized = normalizeAdminModeFeatureFlagState(expandFixtureInput(fixture.input));
  for (const field of protectedFields) {
    assert.equal(normalized[field], false, `${fixture.fixtureId} must keep ${field}=false.`);
    assert(doc.includes(`${field}: false`), `AI3 doc must document ${field}: false.`);
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
  "completeAdminReview(",
  "approveAdminReview(",
  "changeUserRole(",
  "writeAdminAudit(",
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
  assert(!harness.includes(term), `AI3 harness must not include runtime API: ${term}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  harnessName,
  fixtureName,
  "loadAdminModeFlagFixtures",
  "validateAdminModeFlagFixtures",
  "expandFixtureInput",
  "nexus-sprint-ai3-admin-mode-flag-contract-harness"
]) {
  assert(!runtime.includes(term), `Runtime must not load AI3 harness artifact: ${term}`);
}

const alias = "qa:nexus-sprint-ai3-admin-mode-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AI3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ai2-admin-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AI2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ai1-admin-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AI1 QA.");
assert(qaSuite.includes("scripts/nexus-admin-mode-readiness-contract-qa.js"), "qa-suite must continue to include Admin Mode readiness QA.");

console.log("[nexus-sprint-ai3-admin-mode-flag-contract-harness-qa] passed");
