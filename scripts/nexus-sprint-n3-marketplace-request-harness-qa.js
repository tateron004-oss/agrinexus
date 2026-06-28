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

const docName = "NEXUS_SPRINT_N3_FIXTURE_ONLY_MARKETPLACE_REQUEST_HARNESS.md";
const fixtureName = "marketplace-requests.json";
const harnessName = "nexus-sprint-n3-marketplace-request-harness.js";
const qaName = "nexus-sprint-n3-marketplace-request-harness-qa.js";

assert(exists("docs", docName), "N3 doc must exist.");
assert(exists("fixtures", "nexus", fixtureName), "N3 fixtures must exist.");
assert(exists("scripts", harnessName), "N3 harness must exist.");
assert(exists("scripts", qaName), "N3 QA must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", fixtureName);
const harnessSource = read("scripts", harnessName);
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contract = require("../public/nexus-marketplace-request-contract.js");
const harness = require("./nexus-sprint-n3-marketplace-request-harness.js");

[
  "agriculture input marketplace request",
  "produce purchase inquiry",
  "seller product question",
  "marketplace availability review",
  "price quote request, review-only",
  "logistics interest, non-dispatching",
  "blocked payment/checkout marketplace request",
  "ambiguous marketplace request requiring clarification",
  "must not mutate files",
  "not use network",
  "not use DOM",
  "not write `db.json`",
  "not place orders",
  "not start checkout",
  "not move money",
  "not create pending real-world actions"
].forEach(term => assert(doc.includes(term), `N3 doc must include: ${term}`));

const fixtures = JSON.parse(fixtureSource);
assert.equal(fixtures.length, 8, "N3 must keep eight representative fixtures.");
[
  "agriculture-input-marketplace-request",
  "produce-purchase-inquiry",
  "seller-product-question",
  "marketplace-availability-review",
  "price-quote-review-only",
  "logistics-interest-non-dispatching",
  "blocked-payment-checkout-marketplace-request",
  "ambiguous-marketplace-request"
].forEach(fixtureId => assert(fixtures.some(fixture => fixture.fixtureId === fixtureId), `N3 fixture must exist: ${fixtureId}`));

fixtures.forEach(fixture => {
  const validation = contract.validateMarketplaceRequestIntent(fixture);
  assert.equal(validation.ok, true, `${fixture.fixtureId} must validate.`);
  assert.equal(validation.executionAllowed, false, `${fixture.fixtureId} must not execute.`);
  assert.equal(fixture.sellerConfirmationRequired, true, `${fixture.fixtureId} must require seller confirmation.`);
  assert.equal(fixture.userApprovalRequired, true, `${fixture.fixtureId} must require user approval.`);
  assert.equal(fixture.finalExecutionGateRequired, true, `${fixture.fixtureId} must require final execution gate.`);
  assert.equal(fixture.executionAuthority, false, `${fixture.fixtureId} must keep executionAuthority false.`);
  assert(fixture.productIdentityResolutionId && fixture.productDisplayName, `${fixture.fixtureId} must include product identity fields.`);
  assert(fixture.sellerIdentityResolutionId && fixture.sellerDisplayName, `${fixture.fixtureId} must include seller identity fields.`);
  assert(fixture.communicationIntentRequirement, `${fixture.fixtureId} must include communication intent requirement.`);
  assert(fixture.requestedQuantity && fixture.userProvidedBudgetOrPrice, `${fixture.fixtureId} must include quantity/price fields.`);
  contract.BLOCKED_EXECUTION_CHANNELS.forEach(channel => {
    assert(fixture.blockedExecutionChannels.includes(channel), `${fixture.fixtureId} must block ${channel}.`);
  });
});

const results = harness.runMarketplaceRequestFixtures();
assert.equal(results.length, fixtures.length, "N3 harness must return every fixture.");
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
].forEach(term => assert(!harnessSource.includes(term), `N3 harness must not include side-effect API: ${term}`));

const alias = "qa:nexus-sprint-n3-marketplace-request-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include N3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-n2-inert-marketplace-request-contract-qa.js"), "N3 requires N2 QA to remain in qa-suite.");

console.log("[nexus-sprint-n3-marketplace-request-harness-qa] passed");
