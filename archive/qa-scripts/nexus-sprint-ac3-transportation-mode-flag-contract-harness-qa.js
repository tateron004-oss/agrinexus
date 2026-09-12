const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  PROTECTED_TRANSPORTATION_MODE_FLAG_FIELDS,
  normalizeTransportationModeFeatureFlagState
} = require("../public/nexus-transportation-mode-feature-flag.js");
const {
  fixturePath,
  protectedFields,
  loadTransportationModeFlagFixtures,
  validateTransportationModeFlagFixtures
} = require("./nexus-sprint-ac3-transportation-mode-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AC3_TRANSPORTATION_MODE_FLAG_CONTRACT_HARNESS.md";
const qaName = "nexus-sprint-ac3-transportation-mode-flag-contract-harness-qa.js";
const harnessName = "nexus-sprint-ac3-transportation-mode-flag-contract-harness.js";
const fixtureName = "transportation-mode-feature-flags.json";

assert(exists("docs", docName), "Sprint AC3 harness doc must exist.");
assert(exists("scripts", harnessName), "Sprint AC3 harness script must exist.");
assert(exists("scripts", qaName), "Sprint AC3 QA script must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint AC3 fixtures must exist.");

const doc = read("docs", docName);
const harness = read("scripts", harnessName);
const fixturesSource = read("fixtures", "nexus", fixtureName);
const ac2Doc = read("docs", "NEXUS_SPRINT_AC2_TRANSPORTATION_MODE_FEATURE_FLAG_CONTRACT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadTransportationModeFlagFixtures();

assert.equal(fixturePath, path.join(root, "fixtures", "nexus", fixtureName));
assert.deepEqual(protectedFields, Array.from(PROTECTED_TRANSPORTATION_MODE_FLAG_FIELDS));

assertIncludes(doc, [
  "Sprint AC3",
  "6d9db6589f4218bd3d259481c94fa2f58b127a77",
  "documentation, fixture, and deterministic QA only",
  "Added Artifacts",
  "Fixture Coverage",
  "Runtime Boundary",
  "Relationship To Sprint AC2",
  "Sprint AC4 - Transportation Mode Runtime Absence Regression Guard"
], "AC3 harness doc");

assert(ac2Doc.includes("Sprint AC3 - Transportation Mode Flag Contract Harness"), "AC2 must recommend Sprint AC3.");
assert(fixturesSource.includes("transportation-mode-default-off"), "AC3 fixtures must include default-off case.");
assert(fixturesSource.includes("transportation-mode-flag-on-visible-only"), "AC3 fixtures must include visible-only case.");
assert(fixturesSource.includes("transportation-mode-unsafe-authority-attempt"), "AC3 fixtures must include unsafe authority attempt.");
assert(fixturesSource.includes("transportation-mode-flag-on-without-visible-permission"), "AC3 fixtures must include no-visible-permission case.");

const result = validateTransportationModeFlagFixtures(fixtures);
assert.equal(result.ok, true, result.failures.join("\n"));
assert.equal(result.count, 4, "AC3 fixtures must remain complete.");

for (const fixture of fixtures) {
  const normalized = normalizeTransportationModeFeatureFlagState(fixture.input);
  for (const field of protectedFields) {
    assert.equal(normalized[field], false, `${fixture.fixtureId} must keep ${field}=false.`);
    assert(doc.includes(`${field}: false`), `AC3 doc must document ${field}: false.`);
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
  "executeTransportationBooking(",
  "bookTransportation(",
  "dispatchTransportation(",
  "contactTransportationProvider(",
  "contactDriver(",
  "dispatchEmergency(",
  "sharePatientLocation("
]) {
  assert(!harness.includes(term), `AC3 harness must not include runtime API: ${term}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  harnessName,
  fixtureName,
  "loadTransportationModeFlagFixtures",
  "validateTransportationModeFlagFixtures",
  "nexus-sprint-ac3-transportation-mode-flag-contract-harness"
]) {
  assert(!runtime.includes(term), `Runtime must not load AC3 harness artifact: ${term}`);
}

const alias = "qa:nexus-sprint-ac3-transportation-mode-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AC3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ac2-transportation-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AC2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ac1-transportation-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AC1 QA.");
assert(qaSuite.includes("scripts/nexus-transportation-mode-readiness-contract-qa.js"), "qa-suite must continue to include Transportation Mode readiness QA.");

console.log("[nexus-sprint-ac3-transportation-mode-flag-contract-harness-qa] passed");
