const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  PROTECTED_FIELD_AGENT_MODE_FLAG_FIELDS,
  normalizeFieldAgentModeFeatureFlagState
} = require("../public/nexus-field-agent-mode-feature-flag.js");
const {
  fixturePath,
  protectedFields,
  loadFieldAgentModeFlagFixtures,
  validateFieldAgentModeFlagFixtures
} = require("./nexus-sprint-ag3-field-agent-mode-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AG3_FIELD_AGENT_MODE_FLAG_CONTRACT_HARNESS.md";
const qaName = "nexus-sprint-ag3-field-agent-mode-flag-contract-harness-qa.js";
const harnessName = "nexus-sprint-ag3-field-agent-mode-flag-contract-harness.js";
const fixtureName = "field-agent-mode-feature-flags.json";

assert(exists("docs", docName), "Sprint AG3 harness doc must exist.");
assert(exists("scripts", harnessName), "Sprint AG3 harness script must exist.");
assert(exists("scripts", qaName), "Sprint AG3 QA script must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint AG3 fixtures must exist.");

const doc = read("docs", docName);
const harness = read("scripts", harnessName);
const fixturesSource = read("fixtures", "nexus", fixtureName);
const ag2Doc = read("docs", "NEXUS_SPRINT_AG2_FIELD_AGENT_MODE_FEATURE_FLAG_CONTRACT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadFieldAgentModeFlagFixtures();

assert.equal(fixturePath, path.join(root, "fixtures", "nexus", fixtureName));
assert.deepEqual(protectedFields, Array.from(PROTECTED_FIELD_AGENT_MODE_FLAG_FIELDS));

assertIncludes(doc, [
  "Sprint AG3",
  "5f227aedb33a6cf0ea5030ea45c23ac16e95adc6",
  "documentation, fixture, and deterministic QA only",
  "Added Artifacts",
  "Fixture Coverage",
  "Runtime Boundary",
  "Relationship To Sprint AG2",
  "Sprint AG4 - Field Agent Mode Runtime Absence Regression Guard"
], "AG3 harness doc");

assert(ag2Doc.includes("Sprint AG3 - Field Agent Mode Flag Contract Harness"), "AG2 must recommend Sprint AG3.");
assert(fixturesSource.includes("field-agent-mode-default-off"), "AG3 fixtures must include default-off case.");
assert(fixturesSource.includes("field-agent-mode-flag-on-visible-only"), "AG3 fixtures must include visible-only case.");
assert(fixturesSource.includes("field-agent-mode-unsafe-authority-attempt"), "AG3 fixtures must include unsafe authority attempt.");
assert(fixturesSource.includes("field-agent-mode-flag-on-without-visible-permission"), "AG3 fixtures must include no-visible-permission case.");

const result = validateFieldAgentModeFlagFixtures(fixtures);
assert.equal(result.ok, true, result.failures.join("\n"));
assert.equal(result.count, 4, "AG3 fixtures must remain complete.");

for (const fixture of fixtures) {
  const normalized = normalizeFieldAgentModeFeatureFlagState(fixture.input);
  for (const field of protectedFields) {
    assert.equal(normalized[field], false, `${fixture.fixtureId} must keep ${field}=false.`);
    assert(doc.includes(`${field}: false`), `AG3 doc must document ${field}: false.`);
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
  "dispatchFieldAgent(",
  "submitOfflineCapture(",
  "createFieldCase(",
  "assignFieldTask(",
  "contactFieldProvider(",
  "contactFieldSupervisor(",
  "contactProgramPartner(",
  "shareFieldLocation(",
  "activateFieldCamera(",
  "activateFieldMicrophone(",
  "processFieldPayment(",
  "executeMarketplacePurchase(",
  "executeMarketplaceSale(",
  "dispatchTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation("
]) {
  assert(!harness.includes(term), `AG3 harness must not include runtime API: ${term}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  harnessName,
  fixtureName,
  "loadFieldAgentModeFlagFixtures",
  "validateFieldAgentModeFlagFixtures",
  "nexus-sprint-ag3-field-agent-mode-flag-contract-harness"
]) {
  assert(!runtime.includes(term), `Runtime must not load AG3 harness artifact: ${term}`);
}

const alias = "qa:nexus-sprint-ag3-field-agent-mode-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AG3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ag2-field-agent-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AG2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ag1-field-agent-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AG1 QA.");
assert(qaSuite.includes("scripts/nexus-field-agent-mode-readiness-contract-qa.js"), "qa-suite must continue to include Field Agent Mode readiness QA.");

console.log("[nexus-sprint-ag3-field-agent-mode-flag-contract-harness-qa] passed");
