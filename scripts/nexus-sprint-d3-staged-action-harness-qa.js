const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  REQUIRED_BLOCKED_EXECUTION_CHANNELS,
  isSafeReviewOnlyStagedAction
} = require("../public/nexus-staged-action-contract.js");
const {
  loadStagedActionFixtures,
  validateStagedActionFixtures
} = require("./nexus-sprint-d3-staged-action-harness.js");

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

const docName = "NEXUS_SPRINT_D3_FIXTURE_ONLY_STAGED_ACTION_HARNESS.md";
const fixtureName = path.join("fixtures", "nexus", "staged-actions.json");
const harnessName = "nexus-sprint-d3-staged-action-harness.js";
const qaName = "nexus-sprint-d3-staged-action-harness-qa.js";

assert(exists("docs", docName), "Sprint D3 harness doc must exist.");
assert(exists("fixtures", "nexus", "staged-actions.json"), "Sprint D3 staged action fixture file must exist.");
assert(exists("scripts", harnessName), "Sprint D3 staged action harness must exist.");
assert(exists("scripts", qaName), "Sprint D3 QA script must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", "staged-actions.json");
const harnessSource = read("scripts", harnessName);
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadStagedActionFixtures();

assertIncludes(doc, [
  "Sprint D3",
  "Fixture-Only Staged Action Harness",
  fixtureName.replace(/\\/g, "/"),
  "scripts/nexus-sprint-d3-staged-action-harness.js",
  "reviewOnly: true",
  "requiresUserApproval: true",
  "executionAuthority: false",
  "does not mutate fixture files",
  "does not access network",
  "does not access DOM",
  "does not touch `db.json`",
  "does not create pending actions",
  "does not execute any staged action"
], "D3 doc");

assert.equal(fixtures.length, 6, "D3 fixture set must include exactly six staged actions.");

[
  "stage-agriculture-training-review",
  "stage-irrigation-learning-review",
  "stage-farm-jobs-review",
  "stage-agritrade-browse-review",
  "stage-blocked-call-request-review",
  "stage-blocked-payment-request-review"
].forEach(id => {
  assert(fixtures.some(action => action.stagedActionId === id), `D3 fixture set must include ${id}`);
});

fixtures.forEach(action => {
  assert.equal(action.reviewOnly, true, `${action.stagedActionId} must be review-only`);
  assert.equal(action.requiresUserApproval, true, `${action.stagedActionId} must require approval`);
  assert.equal(action.executionAuthority, false, `${action.stagedActionId} must have no execution authority`);
  assert.equal(isSafeReviewOnlyStagedAction(action), true, `${action.stagedActionId} must pass D2 contract validation`);
  REQUIRED_BLOCKED_EXECUTION_CHANNELS.forEach(channel => {
    assert(action.blockedExecutionChannels.includes(channel), `${action.stagedActionId} must block ${channel}`);
  });
});

const harnessResult = validateStagedActionFixtures(fixtures);
assert.equal(harnessResult.ok, true, "D3 harness must validate fixtures successfully.");
assert.equal(harnessResult.count, 6, "D3 harness must report six fixtures.");

assert(!fixtureSource.includes("\"executionAuthority\": true"), "D3 fixtures must not grant execution authority.");
assert(!fixtureSource.includes("\"reviewOnly\": false"), "D3 fixtures must not disable reviewOnly.");
assert(!fixtureSource.includes("\"requiresUserApproval\": false"), "D3 fixtures must not bypass user approval.");

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
  assert(!harnessSource.includes(term), `D3 harness must not include unsafe or mutating API: ${term}`);
});

const alias = "qa:nexus-sprint-d3-staged-action-harness";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint D3 QA.");

console.log("[nexus-sprint-d3-staged-action-harness-qa] passed");
