const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  PROTECTED_MOBILE_CLINIC_MODE_FLAG_FIELDS,
  normalizeMobileClinicModeFeatureFlagState
} = require("../public/nexus-mobile-clinic-mode-feature-flag.js");
const {
  fixturePath,
  protectedFields,
  loadMobileClinicModeFlagFixtures,
  validateMobileClinicModeFlagFixtures
} = require("./nexus-sprint-ab3-mobile-clinic-mode-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AB3_MOBILE_CLINIC_MODE_FLAG_CONTRACT_HARNESS.md";
const qaName = "nexus-sprint-ab3-mobile-clinic-mode-flag-contract-harness-qa.js";
const harnessName = "nexus-sprint-ab3-mobile-clinic-mode-flag-contract-harness.js";
const fixtureName = "mobile-clinic-mode-feature-flags.json";

assert(exists("docs", docName), "Sprint AB3 harness doc must exist.");
assert(exists("scripts", harnessName), "Sprint AB3 harness script must exist.");
assert(exists("scripts", qaName), "Sprint AB3 QA script must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint AB3 fixtures must exist.");

const doc = read("docs", docName);
const harness = read("scripts", harnessName);
const fixturesSource = read("fixtures", "nexus", fixtureName);
const ab2Doc = read("docs", "NEXUS_SPRINT_AB2_MOBILE_CLINIC_MODE_FEATURE_FLAG_CONTRACT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadMobileClinicModeFlagFixtures();

assert.equal(fixturePath, path.join(root, "fixtures", "nexus", fixtureName));
assert.deepEqual(protectedFields, Array.from(PROTECTED_MOBILE_CLINIC_MODE_FLAG_FIELDS));

assertIncludes(doc, [
  "Sprint AB3",
  "abf3ec285f3ea4b0ca84b65f93f057950aa187c4",
  "fixture, harness, documentation, and QA only",
  "Added Artifacts",
  "Fixture Coverage",
  "Runtime Boundary",
  "Relationship To Sprint AB2",
  "Sprint AB4 - Mobile Clinic Mode Runtime Absence Regression Guard"
], "AB3 harness doc");

assert(ab2Doc.includes("Sprint AB3 - Mobile Clinic Mode Flag Contract Harness"), "AB2 must recommend Sprint AB3.");
assert(fixturesSource.includes("mobile-clinic-mode-default-off"), "AB3 fixtures must include default-off case.");
assert(fixturesSource.includes("mobile-clinic-mode-flag-on-visible-only"), "AB3 fixtures must include visible-only case.");
assert(fixturesSource.includes("mobile-clinic-mode-unsafe-authority-attempt"), "AB3 fixtures must include unsafe authority attempt.");
assert(fixturesSource.includes("mobile-clinic-mode-flag-on-without-visible-permission"), "AB3 fixtures must include no-visible-permission case.");

const result = validateMobileClinicModeFlagFixtures(fixtures);
assert.equal(result.ok, true, result.failures.join("\n"));
assert.equal(result.count, 4, "AB3 fixtures must remain complete.");

for (const fixture of fixtures) {
  const normalized = normalizeMobileClinicModeFeatureFlagState(fixture.input);
  for (const field of protectedFields) {
    assert.equal(normalized[field], false, `${fixture.fixtureId} must keep ${field}=false.`);
    assert(doc.includes(`${field}: false`), `AB3 doc must document ${field}: false.`);
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
  "executeMobileClinicSchedule(",
  "scheduleMobileClinicVisit(",
  "contactMobileClinicProvider(",
  "dispatchMobileClinicTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation("
]) {
  assert(!harness.includes(term), `AB3 harness must not include runtime API: ${term}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  harnessName,
  fixtureName,
  "loadMobileClinicModeFlagFixtures",
  "validateMobileClinicModeFlagFixtures",
  "nexus-sprint-ab3-mobile-clinic-mode-flag-contract-harness"
]) {
  assert(!runtime.includes(term), `Runtime must not load AB3 harness artifact: ${term}`);
}

const alias = "qa:nexus-sprint-ab3-mobile-clinic-mode-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AB3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ab2-mobile-clinic-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AB2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ab1-mobile-clinic-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AB1 QA.");

console.log("[nexus-sprint-ab3-mobile-clinic-mode-flag-contract-harness-qa] passed");
