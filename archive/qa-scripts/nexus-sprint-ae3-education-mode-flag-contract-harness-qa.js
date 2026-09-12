const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  PROTECTED_EDUCATION_MODE_FLAG_FIELDS,
  normalizeEducationModeFeatureFlagState
} = require("../public/nexus-education-mode-feature-flag.js");
const {
  fixturePath,
  protectedFields,
  loadEducationModeFlagFixtures,
  validateEducationModeFlagFixtures
} = require("./nexus-sprint-ae3-education-mode-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AE3_EDUCATION_MODE_FLAG_CONTRACT_HARNESS.md";
const qaName = "nexus-sprint-ae3-education-mode-flag-contract-harness-qa.js";
const harnessName = "nexus-sprint-ae3-education-mode-flag-contract-harness.js";
const fixtureName = "education-mode-feature-flags.json";

assert(exists("docs", docName), "Sprint AE3 harness doc must exist.");
assert(exists("scripts", harnessName), "Sprint AE3 harness script must exist.");
assert(exists("scripts", qaName), "Sprint AE3 QA script must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint AE3 fixtures must exist.");

const doc = read("docs", docName);
const harness = read("scripts", harnessName);
const fixturesSource = read("fixtures", "nexus", fixtureName);
const ae2Doc = read("docs", "NEXUS_SPRINT_AE2_EDUCATION_MODE_FEATURE_FLAG_CONTRACT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadEducationModeFlagFixtures();

assert.equal(fixturePath, path.join(root, "fixtures", "nexus", fixtureName));
assert.deepEqual(protectedFields, Array.from(PROTECTED_EDUCATION_MODE_FLAG_FIELDS));

assertIncludes(doc, [
  "Sprint AE3",
  "04d7a71cb5bcb81289322073dc635c20bda1a219",
  "documentation, fixture, and deterministic QA only",
  "Added Artifacts",
  "Fixture Coverage",
  "Runtime Boundary",
  "Relationship To Sprint AE2",
  "Sprint AE4 - Education Mode Runtime Absence Regression Guard"
], "AE3 harness doc");

assert(ae2Doc.includes("Sprint AE3 - Education Mode Flag Contract Harness"), "AE2 must recommend Sprint AE3.");
assert(fixturesSource.includes("education-mode-default-off"), "AE3 fixtures must include default-off case.");
assert(fixturesSource.includes("education-mode-flag-on-visible-only"), "AE3 fixtures must include visible-only case.");
assert(fixturesSource.includes("education-mode-unsafe-authority-attempt"), "AE3 fixtures must include unsafe authority attempt.");
assert(fixturesSource.includes("education-mode-flag-on-without-visible-permission"), "AE3 fixtures must include no-visible-permission case.");

const result = validateEducationModeFlagFixtures(fixtures);
assert.equal(result.ok, true, result.failures.join("\n"));
assert.equal(result.count, 4, "AE3 fixtures must remain complete.");

for (const fixture of fixtures) {
  const normalized = normalizeEducationModeFeatureFlagState(fixture.input);
  for (const field of protectedFields) {
    assert.equal(normalized[field], false, `${fixture.fixtureId} must keep ${field}=false.`);
    assert(doc.includes(`${field}: false`), `AE3 doc must document ${field}: false.`);
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
  "executeEducationEnrollment(",
  "registerCourse(",
  "enrollInCourse(",
  "contactEducationProvider(",
  "contactTrainingProvider(",
  "contactCertificationProvider(",
  "issueEducationCredential(",
  "processEducationPayment(",
  "dispatchTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation("
]) {
  assert(!harness.includes(term), `AE3 harness must not include runtime API: ${term}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  harnessName,
  fixtureName,
  "loadEducationModeFlagFixtures",
  "validateEducationModeFlagFixtures",
  "nexus-sprint-ae3-education-mode-flag-contract-harness"
]) {
  assert(!runtime.includes(term), `Runtime must not load AE3 harness artifact: ${term}`);
}

const alias = "qa:nexus-sprint-ae3-education-mode-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AE3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ae2-education-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AE2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ae1-education-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AE1 QA.");
assert(qaSuite.includes("scripts/nexus-education-mode-readiness-contract-qa.js"), "qa-suite must continue to include Education Mode readiness QA.");

console.log("[nexus-sprint-ae3-education-mode-flag-contract-harness-qa] passed");
