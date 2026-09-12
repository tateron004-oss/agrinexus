const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  PROTECTED_WORKFORCE_MODE_FLAG_FIELDS,
  normalizeWorkforceModeFeatureFlagState
} = require("../public/nexus-workforce-mode-feature-flag.js");
const {
  fixturePath,
  protectedFields,
  loadWorkforceModeFlagFixtures,
  validateWorkforceModeFlagFixtures
} = require("./nexus-sprint-ad3-workforce-mode-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AD3_WORKFORCE_MODE_FLAG_CONTRACT_HARNESS.md";
const qaName = "nexus-sprint-ad3-workforce-mode-flag-contract-harness-qa.js";
const harnessName = "nexus-sprint-ad3-workforce-mode-flag-contract-harness.js";
const fixtureName = "workforce-mode-feature-flags.json";

assert(exists("docs", docName), "Sprint AD3 harness doc must exist.");
assert(exists("scripts", harnessName), "Sprint AD3 harness script must exist.");
assert(exists("scripts", qaName), "Sprint AD3 QA script must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint AD3 fixtures must exist.");

const doc = read("docs", docName);
const harness = read("scripts", harnessName);
const fixturesSource = read("fixtures", "nexus", fixtureName);
const ad2Doc = read("docs", "NEXUS_SPRINT_AD2_WORKFORCE_MODE_FEATURE_FLAG_CONTRACT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadWorkforceModeFlagFixtures();

assert.equal(fixturePath, path.join(root, "fixtures", "nexus", fixtureName));
assert.deepEqual(protectedFields, Array.from(PROTECTED_WORKFORCE_MODE_FLAG_FIELDS));

assertIncludes(doc, [
  "Sprint AD3",
  "61e1bba666b06a4edd99072d288021d75d4933c4",
  "documentation, fixture, and deterministic QA only",
  "Added Artifacts",
  "Fixture Coverage",
  "Runtime Boundary",
  "Relationship To Sprint AD2",
  "Sprint AD4 - Workforce Mode Runtime Absence Regression Guard"
], "AD3 harness doc");

assert(ad2Doc.includes("Sprint AD3 - Workforce Mode Flag Contract Harness"), "AD2 must recommend Sprint AD3.");
assert(fixturesSource.includes("workforce-mode-default-off"), "AD3 fixtures must include default-off case.");
assert(fixturesSource.includes("workforce-mode-flag-on-visible-only"), "AD3 fixtures must include visible-only case.");
assert(fixturesSource.includes("workforce-mode-unsafe-authority-attempt"), "AD3 fixtures must include unsafe authority attempt.");
assert(fixturesSource.includes("workforce-mode-flag-on-without-visible-permission"), "AD3 fixtures must include no-visible-permission case.");

const result = validateWorkforceModeFlagFixtures(fixtures);
assert.equal(result.ok, true, result.failures.join("\n"));
assert.equal(result.count, 4, "AD3 fixtures must remain complete.");

for (const fixture of fixtures) {
  const normalized = normalizeWorkforceModeFeatureFlagState(fixture.input);
  for (const field of protectedFields) {
    assert.equal(normalized[field], false, `${fixture.fixtureId} must keep ${field}=false.`);
    assert(doc.includes(`${field}: false`), `AD3 doc must document ${field}: false.`);
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
  "executeWorkforceReferral(",
  "submitJobApplication(",
  "contactWorkforceProvider(",
  "contactEmployer(",
  "contactTrainingProvider(",
  "contactCertificationProvider(",
  "issueCertification(",
  "processWorkforcePayment(",
  "dispatchTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation("
]) {
  assert(!harness.includes(term), `AD3 harness must not include runtime API: ${term}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  harnessName,
  fixtureName,
  "loadWorkforceModeFlagFixtures",
  "validateWorkforceModeFlagFixtures",
  "nexus-sprint-ad3-workforce-mode-flag-contract-harness"
]) {
  assert(!runtime.includes(term), `Runtime must not load AD3 harness artifact: ${term}`);
}

const alias = "qa:nexus-sprint-ad3-workforce-mode-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AD3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ad2-workforce-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AD2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ad1-workforce-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AD1 QA.");
assert(qaSuite.includes("scripts/nexus-workforce-mode-readiness-contract-qa.js"), "qa-suite must continue to include Workforce Mode readiness QA.");

console.log("[nexus-sprint-ad3-workforce-mode-flag-contract-harness-qa] passed");
