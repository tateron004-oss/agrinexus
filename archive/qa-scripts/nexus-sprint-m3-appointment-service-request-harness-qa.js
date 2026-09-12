const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

const docName = "NEXUS_SPRINT_M3_FIXTURE_ONLY_APPOINTMENT_SERVICE_REQUEST_HARNESS.md";
const fixtureName = "appointment-service-requests.json";
const harnessName = "nexus-sprint-m3-appointment-service-request-harness.js";
const qaName = "nexus-sprint-m3-appointment-service-request-harness-qa.js";

assert(exists("docs", docName), "M3 doc must exist.");
assert(exists("fixtures", "nexus", fixtureName), "M3 fixtures must exist.");
assert(exists("scripts", harnessName), "M3 harness must exist.");
assert(exists("scripts", qaName), "M3 QA must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", fixtureName);
const harnessSource = read("scripts", harnessName);
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contract = require("../public/nexus-appointment-service-request-contract.js");
const harness = require("./nexus-sprint-m3-appointment-service-request-harness.js");

[
  "agriculture support appointment request",
  "workforce/training appointment request",
  "provider consultation request",
  "field visit request",
  "logistics coordination request",
  "blocked emergency service request",
  "blocked medical/pharmacy service request",
  "ambiguous provider request requiring clarification",
  "must not mutate files",
  "not use network",
  "not use DOM",
  "not write `db.json`",
  "not create pending real-world actions"
].forEach(term => assert(doc.includes(term), `M3 doc must include: ${term}`));

const fixtures = JSON.parse(fixtureSource);
assert.equal(fixtures.length, 8, "M3 must keep eight representative fixtures.");
[
  "agriculture-support-appointment-request",
  "workforce-training-appointment-request",
  "provider-consultation-request",
  "field-visit-request",
  "logistics-coordination-request",
  "blocked-emergency-service-request",
  "blocked-medical-pharmacy-service-request",
  "ambiguous-provider-request"
].forEach(fixtureId => assert(fixtures.some(fixture => fixture.fixtureId === fixtureId), `M3 fixture must exist: ${fixtureId}`));

fixtures.forEach(fixture => {
  const validation = contract.validateAppointmentServiceRequestIntent(fixture);
  assert.equal(validation.ok, true, `${fixture.fixtureId} must validate.`);
  assert.equal(validation.executionAllowed, false, `${fixture.fixtureId} must not execute.`);
  assert.equal(fixture.providerConfirmationRequired, true, `${fixture.fixtureId} must require provider confirmation.`);
  assert.equal(fixture.userApprovalRequired, true, `${fixture.fixtureId} must require user approval.`);
  assert.equal(fixture.finalExecutionGateRequired, true, `${fixture.fixtureId} must require final execution gate.`);
  assert.equal(fixture.executionAuthority, false, `${fixture.fixtureId} must keep executionAuthority false.`);
  assert(fixture.providerIdentityResolutionId && fixture.providerDisplayName, `${fixture.fixtureId} must include provider identity fields.`);
  assert(fixture.communicationIntentRequirement, `${fixture.fixtureId} must include communication intent requirement.`);
  assert(fixture.requestedTimeWindow && fixture.userProvidedTimePreference, `${fixture.fixtureId} must include timing fields.`);
  contract.BLOCKED_EXECUTION_CHANNELS.forEach(channel => {
    assert(fixture.blockedExecutionChannels.includes(channel), `${fixture.fixtureId} must block ${channel}.`);
  });
});

const results = harness.runAppointmentServiceRequestFixtures();
assert.equal(results.length, fixtures.length, "M3 harness must return every fixture.");
results.forEach(result => {
  assert.equal(result.ok, true, `${result.fixtureId} harness result must validate.`);
  assert.equal(result.executionAllowed, false, `${result.fixtureId} harness result must not execute.`);
});

[
  "writeFile",
  "appendFile",
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "navigator.geolocation",
  "mediaDevices",
  "window.open",
  "location.href",
  "sendBeacon",
  "setItem",
  "addEventListener",
  "createElement",
  "innerHTML",
  "db.json"
].forEach(term => assert(!harnessSource.includes(term), `M3 harness must not include side-effect API: ${term}`));

const alias = "qa:nexus-sprint-m3-appointment-service-request-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include M3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-m2-inert-appointment-service-request-contract-qa.js"), "M3 requires M2 QA to remain in qa-suite.");

console.log("[nexus-sprint-m3-appointment-service-request-harness-qa] passed");
