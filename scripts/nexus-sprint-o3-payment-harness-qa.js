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

const docName = "NEXUS_SPRINT_O3_FIXTURE_ONLY_PAYMENT_HARNESS.md";
const fixtureName = "payment-intents.json";
const harnessName = "nexus-sprint-o3-payment-harness.js";
const qaName = "nexus-sprint-o3-payment-harness-qa.js";

assert(exists("docs", docName), "O3 doc must exist.");
assert(exists("fixtures", "nexus", fixtureName), "O3 fixtures must exist.");
assert(exists("scripts", harnessName), "O3 harness must exist.");
assert(exists("scripts", qaName), "O3 QA must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", fixtureName);
const harnessSource = read("scripts", harnessName);
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contract = require("../public/nexus-payment-intent-contract.js");
const harness = require("./nexus-sprint-o3-payment-harness.js");

[
  "marketplace payment review",
  "mobile money transfer review",
  "service payment review",
  "transportation fare review",
  "provider fee review",
  "refund or reversal review",
  "blocked payment execution request",
  "ambiguous payment request requiring clarification",
  "must not mutate files",
  "not use network",
  "not use DOM",
  "not write `db.json`",
  "not call payment APIs",
  "not store credentials",
  "not move money",
  "not create pending real-world actions"
].forEach(term => assert(doc.includes(term), `O3 doc must include: ${term}`));

const fixtures = JSON.parse(fixtureSource);
assert.equal(fixtures.length, 8, "O3 must keep eight representative fixtures.");
[
  "marketplace-payment-review",
  "mobile-money-transfer-review",
  "service-payment-review",
  "transportation-fare-review",
  "provider-fee-review",
  "refund-reversal-review",
  "blocked-payment-execution-request",
  "ambiguous-payment-request"
].forEach(fixtureId => assert(fixtures.some(fixture => fixture.fixtureId === fixtureId), `O3 fixture must exist: ${fixtureId}`));

fixtures.forEach(fixture => {
  const validation = contract.validatePaymentIntent(fixture);
  assert.equal(validation.ok, true, `${fixture.fixtureId} must validate.`);
  assert.equal(validation.executionAllowed, false, `${fixture.fixtureId} must not execute.`);
  assert.equal(fixture.payeeConfirmationRequired, true, `${fixture.fixtureId} must require payee confirmation.`);
  assert.equal(fixture.userApprovalRequired, true, `${fixture.fixtureId} must require user approval.`);
  assert.equal(fixture.finalExecutionGateRequired, true, `${fixture.fixtureId} must require final execution gate.`);
  assert.equal(fixture.executionAuthority, false, `${fixture.fixtureId} must keep executionAuthority false.`);
  assert(fixture.payeeIdentityResolutionId && fixture.payeeDisplayName, `${fixture.fixtureId} must include payee identity fields.`);
  assert(fixture.amountDisplay && fixture.currencyDisplay, `${fixture.fixtureId} must include amount/currency fields.`);
  assert(fixture.consentRequirement, `${fixture.fixtureId} must include consent requirement.`);
  assert(fixture.dryRunPacket, `${fixture.fixtureId} must include dry-run packet.`);
  contract.BLOCKED_EXECUTION_CHANNELS.forEach(channel => {
    assert(fixture.blockedExecutionChannels.includes(channel), `${fixture.fixtureId} must block ${channel}.`);
  });
});

const results = harness.runPaymentIntentFixtures();
assert.equal(results.length, fixtures.length, "O3 harness must return every fixture.");
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
].forEach(term => assert(!harnessSource.includes(term), `O3 harness must not include side-effect API: ${term}`));

const alias = "qa:nexus-sprint-o3-payment-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include O3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-o2-inert-payment-intent-contract-qa.js"), "O3 requires O2 QA to remain in qa-suite.");

console.log("[nexus-sprint-o3-payment-harness-qa] passed");
