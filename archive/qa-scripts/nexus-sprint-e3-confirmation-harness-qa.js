const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  REQUIRED_BLOCKED_EXECUTION_CHANNELS,
  isSafeApprovalIntentConfirmation
} = require("../public/nexus-confirmation-contract.js");
const {
  loadConfirmationFixtures,
  validateConfirmationFixtures
} = require("./nexus-sprint-e3-confirmation-harness.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertIncludes(source, terms, label) {
  for (const term of terms) {
    assert(source.includes(term), `${label} must include: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_E3_FIXTURE_ONLY_CONFIRMATION_HARNESS.md";
const fixtureName = path.join("fixtures", "nexus", "confirmations.json");
const harnessName = "nexus-sprint-e3-confirmation-harness.js";
const qaName = "nexus-sprint-e3-confirmation-harness-qa.js";

assert(exists("docs", docName), "Sprint E3 harness doc must exist.");
assert(exists("fixtures", "nexus", "confirmations.json"), "Sprint E3 confirmation fixture file must exist.");
assert(exists("scripts", harnessName), "Sprint E3 confirmation harness must exist.");
assert(exists("scripts", qaName), "Sprint E3 QA script must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", "confirmations.json");
const harnessSource = read("scripts", harnessName);
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadConfirmationFixtures();

assertIncludes(doc, [
  "Sprint E3",
  "34df1a38fc31e771e0a588cc7ded95d5d77acfbf",
  "Fixture-Only Confirmation Harness",
  fixtureName.replace(/\\/g, "/"),
  "scripts/nexus-sprint-e3-confirmation-harness.js",
  "approvalIntentOnly: true",
  "requiresFinalExecutionGate: true",
  "executionAuthority: false",
  "does not mutate fixture files",
  "does not access network",
  "does not access DOM",
  "does not touch `db.json`",
  "does not create pending actions",
  "does not execute any confirmation"
], "E3 doc");

assert.equal(fixtures.length, 6, "E3 fixture set must include exactly six confirmations.");

[
  "confirm-agriculture-training-review-intent",
  "confirm-irrigation-learning-review-intent",
  "confirm-farm-jobs-review-intent",
  "confirm-agritrade-browse-review-intent",
  "confirm-blocked-call-attempt",
  "confirm-blocked-payment-attempt"
].forEach(id => {
  assert(fixtures.some(confirmation => confirmation.confirmationId === id), `E3 fixture set must include ${id}`);
});

fixtures.forEach(confirmation => {
  assert.equal(confirmation.approvalIntentOnly, true, `${confirmation.confirmationId} must be approval-intent-only`);
  assert.equal(confirmation.requiresFinalExecutionGate, true, `${confirmation.confirmationId} must require final execution gate`);
  assert.equal(confirmation.executionAuthority, false, `${confirmation.confirmationId} must have no execution authority`);
  assert.equal(isSafeApprovalIntentConfirmation(confirmation), true, `${confirmation.confirmationId} must pass E2 contract validation`);
  REQUIRED_BLOCKED_EXECUTION_CHANNELS.forEach(channel => {
    assert(confirmation.blockedExecutionChannels.includes(channel), `${confirmation.confirmationId} must block ${channel}`);
  });
});

const harnessResult = validateConfirmationFixtures(fixtures);
assert.equal(harnessResult.ok, true, "E3 harness must validate fixtures successfully.");
assert.equal(harnessResult.count, 6, "E3 harness must report six fixtures.");

assert(!fixtureSource.includes("\"executionAuthority\": true"), "E3 fixtures must not grant execution authority.");
assert(!fixtureSource.includes("\"approvalIntentOnly\": false"), "E3 fixtures must not disable approvalIntentOnly.");
assert(!fixtureSource.includes("\"requiresFinalExecutionGate\": false"), "E3 fixtures must not bypass final execution gate.");

[
  "writeFile",
  "appendFile",
  "rmSync",
  "unlinkSync",
  "fetch(",
  "XMLHttpRequest",
  "document.",
  "querySelector",
  "addEventListener",
  "localStorage",
  "sessionStorage",
  "db.json",
  "open(",
  "window.location",
  "navigator.geolocation",
  "mediaDevices"
].forEach(term => {
  assert(!harnessSource.includes(term), `E3 harness must not include unsafe or mutating API: ${term}`);
});

const alias = "qa:nexus-sprint-e3-confirmation-harness";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint E3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-e2-inert-confirmation-contract-qa.js"), "E3 requires E2 QA to remain in qa-suite.");

console.log("[nexus-sprint-e3-confirmation-harness-qa] passed");
