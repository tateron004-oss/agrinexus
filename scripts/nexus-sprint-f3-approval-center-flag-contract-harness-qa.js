const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  loadApprovalCenterFlagFixtures,
  validateApprovalCenterFlagFixtures
} = require("./nexus-sprint-f3-approval-center-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_F3_APPROVAL_CENTER_FLAG_CONTRACT_HARNESS.md";
const fixtureName = "approval-center-feature-flags.json";
const harnessName = "nexus-sprint-f3-approval-center-flag-contract-harness.js";
const qaName = "nexus-sprint-f3-approval-center-flag-contract-harness-qa.js";

assert(exists("docs", docName), "Sprint F3 harness doc must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint F3 fixture file must exist.");
assert(exists("scripts", harnessName), "Sprint F3 harness must exist.");
assert(exists("scripts", qaName), "Sprint F3 QA script must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", fixtureName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadApprovalCenterFlagFixtures();

assertIncludes(doc, [
  "Sprint F3",
  "3b1be2fc0185ec61ac6ff3e8af647e5e673260ab",
  "fixture, harness, documentation, and QA only",
  "fixtures/nexus/approval-center-feature-flags.json",
  "scripts/nexus-sprint-f3-approval-center-flag-contract-harness.js",
  "approvalPersistenceAllowed: false",
  "auditWriteAllowed: false",
  "providerHandoffAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "Sprint F4 - Approval Center Runtime Absence Regression Guard"
], "F3 harness doc");

assert.equal(fixtures.length, 4, "F3 fixture set must include exactly four flag fixtures.");

[
  "approval-center-default-off",
  "approval-center-flag-on-review-only",
  "approval-center-unsafe-authority-attempt",
  "approval-center-flag-on-without-visible-ui"
].forEach(id => {
  assert(fixtures.some(fixture => fixture.fixtureId === id), `F3 fixture set must include ${id}`);
});

const result = validateApprovalCenterFlagFixtures(fixtures);
assert.equal(result.ok, true, "F3 harness must validate fixtures successfully.");
assert.equal(result.count, 4, "F3 harness must report four fixtures.");

assert(fixtureSource.includes("\"executionAuthority\": true"), "F3 must include an unsafe executionAuthority attempt fixture.");
assert(fixtureSource.includes("\"noExecution\": false"), "F3 must include an unsafe noExecution false attempt fixture.");
assert(fixtureSource.includes("\"approvalPersistenceAllowed\": true"), "F3 must include an unsafe persistence attempt fixture.");

for (const fixture of fixtures) {
  assert(fixture.expected, `${fixture.fixtureId} must include expected values.`);
  assert.equal(fixture.expected.approvalPersistenceAllowed, false, `${fixture.fixtureId} must expect persistence false.`);
  assert.equal(fixture.expected.auditWriteAllowed, false, `${fixture.fixtureId} must expect audit write false.`);
  assert.equal(fixture.expected.providerHandoffAllowed, false, `${fixture.fixtureId} must expect provider handoff false.`);
  assert.equal(fixture.expected.backendWriteAllowed, false, `${fixture.fixtureId} must expect backend write false.`);
  assert.equal(fixture.expected.storageWriteAllowed, false, `${fixture.fixtureId} must expect storage write false.`);
  assert.equal(fixture.expected.networkAllowed, false, `${fixture.fixtureId} must expect network false.`);
  assert.equal(fixture.expected.executionAuthority, false, `${fixture.fixtureId} must expect executionAuthority false.`);
  assert.equal(fixture.expected.noExecution, true, `${fixture.fixtureId} must expect noExecution true.`);
}

for (const term of [
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
  "mediaDevices",
  "window.nativeBridge",
  "nativeBridge."
]) {
  assert(!harnessSource.includes(term), `F3 harness must not include unsafe or mutating API: ${term}`);
}

const combinedRuntime = [index, app, server].join("\n");
for (const term of [
  "nexus-approval-center-feature-flag.js",
  "nexus-sprint-f3-approval-center-flag-contract-harness",
  "approval-center-feature-flags.json"
]) {
  assert(!combinedRuntime.includes(term), `Runtime must not load F2/F3 flag harness artifact: ${term}`);
}

assert(exists("docs", "NEXUS_SPRINT_F2_APPROVAL_CENTER_FEATURE_FLAG_CONTRACT.md"), "F3 requires F2 feature flag contract doc.");
assert(exists("public", "nexus-approval-center-feature-flag.js"), "F3 requires F2 feature flag module.");

const alias = "qa:nexus-sprint-f3-approval-center-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint F3 QA.");

console.log("[nexus-sprint-f3-approval-center-flag-contract-harness-qa] passed");
