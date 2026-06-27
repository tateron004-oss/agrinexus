const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  protectedFields,
  loadMarketplaceIntelligenceFlagFixtures,
  validateMarketplaceIntelligenceFlagFixtures
} = require("./nexus-sprint-v3-marketplace-intelligence-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_V3_MARKETPLACE_INTELLIGENCE_FLAG_CONTRACT_HARNESS.md";
const fixtureName = "marketplace-intelligence-feature-flags.json";
const harnessName = "nexus-sprint-v3-marketplace-intelligence-flag-contract-harness.js";
const qaName = "nexus-sprint-v3-marketplace-intelligence-flag-contract-harness-qa.js";

assert(exists("docs", docName), "Sprint V3 harness doc must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint V3 fixture file must exist.");
assert(exists("scripts", harnessName), "Sprint V3 harness must exist.");
assert(exists("scripts", qaName), "Sprint V3 QA script must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", fixtureName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadMarketplaceIntelligenceFlagFixtures();

assertIncludes(doc, [
  "Sprint V3",
  "b524db53432bb90da8a5d10d4bd4e4d7ab870cfa",
  "fixture, harness, documentation, and QA only",
  "fixtures/nexus/marketplace-intelligence-feature-flags.json",
  "scripts/nexus-sprint-v3-marketplace-intelligence-flag-contract-harness.js",
  "marketplaceReviewAllowed: false",
  "sourceBackedMarketplaceGuidancePreviewAllowed: false",
  "liveMarketplaceAdvisorAllowed: false",
  "buyExecutionAllowed: false",
  "sellExecutionAllowed: false",
  "orderCreationAllowed: false",
  "checkoutExecutionAllowed: false",
  "paymentExecutionAllowed: false",
  "marketplaceTransactionAllowed: false",
  "inventoryReservationAllowed: false",
  "priceGuaranteeClaimAllowed: false",
  "availabilityGuaranteeClaimAllowed: false",
  "buyerSellerContactAllowed: false",
  "communicationExecutionAllowed: false",
  "locationSharingAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "Sprint V4 - Marketplace Intelligence Runtime Absence Regression Guard"
], "V3 harness doc");

assert.equal(fixtures.length, 4, "V3 fixture set must include exactly four flag fixtures.");
[
  "marketplace-intelligence-default-off",
  "marketplace-intelligence-flag-on-review-only",
  "marketplace-intelligence-unsafe-authority-attempt",
  "marketplace-intelligence-flag-on-without-visible-permission"
].forEach(id => {
  assert(fixtures.some(fixture => fixture.fixtureId === id), `V3 fixture set must include ${id}`);
});

const result = validateMarketplaceIntelligenceFlagFixtures(fixtures);
assert.equal(result.ok, true, "V3 harness must validate fixtures successfully.");
assert.equal(result.count, 4, "V3 harness must report four fixtures.");

for (const term of [
  "\"executionAuthority\": true",
  "\"noExecution\": false",
  "\"marketplaceRuntimeAllowed\": true",
  "\"liveMarketplaceAdvisorAllowed\": true",
  "\"sourceRetrievalRuntimeAllowed\": true",
  "\"buyExecutionAllowed\": true",
  "\"sellExecutionAllowed\": true",
  "\"orderCreationAllowed\": true",
  "\"checkoutExecutionAllowed\": true",
  "\"paymentExecutionAllowed\": true",
  "\"marketplaceTransactionAllowed\": true",
  "\"inventoryReservationAllowed\": true",
  "\"priceGuaranteeClaimAllowed\": true",
  "\"availabilityGuaranteeClaimAllowed\": true",
  "\"buyerSellerContactAllowed\": true",
  "\"providerConnectionClaimAllowed\": true",
  "\"completedActionClaimAllowed\": true",
  "\"shippingTransportationDispatchAllowed\": true",
  "\"communicationExecutionAllowed\": true",
  "\"locationSharingAllowed\": true"
]) {
  assert(fixtureSource.includes(term), `V3 fixture must include unsafe attempt term: ${term}`);
}

for (const fixture of fixtures) {
  assert(fixture.expected, `${fixture.fixtureId} must include expected values.`);
  for (const field of protectedFields) {
    assert.equal(fixture.expected[field], false, `${fixture.fixtureId} must expect ${field} false.`);
  }
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
  "indexedDB",
  "db.json",
  "open(",
  "window.location",
  "location.href",
  "navigator.geolocation",
  "mediaDevices",
  "window.nativeBridge",
  "nativeBridge.",
  "ACTION_CALL",
  "getUserMedia",
  "setItem",
  "postMessage",
  "openWorkflow(",
  "goSection(",
  "executeMarketplacePurchase(",
  "executeMarketplaceSale(",
  "createMarketplaceOrder(",
  "executeMarketplaceCheckout(",
  "processMarketplacePayment(",
  "contactMarketplaceCounterparty("
]) {
  assert(!harnessSource.includes(term), `V3 harness must not include unsafe or mutating API: ${term}`);
}

const combinedRuntime = [index, app, server].join("\n");
for (const term of [
  "nexus-marketplace-intelligence-feature-flag.js",
  "nexus-sprint-v3-marketplace-intelligence-flag-contract-harness",
  "marketplace-intelligence-feature-flags.json",
  "NEXUS_MARKETPLACE_INTELLIGENCE_VISIBLE_ENABLED",
  "NexusMarketplaceIntelligenceFeatureFlagContract",
  "normalizeMarketplaceIntelligenceFeatureFlagState",
  "isMarketplaceIntelligenceVisibleFeatureEnabled",
  "marketplaceIntelligenceRuntime",
  "liveMarketplaceAdvisor",
  "executeMarketplacePurchase(",
  "executeMarketplaceSale(",
  "createMarketplaceOrder(",
  "executeMarketplaceCheckout(",
  "processMarketplacePayment(",
  "contactMarketplaceCounterparty("
]) {
  assert(!combinedRuntime.includes(term), `Runtime must not load V2/V3 flag harness artifact: ${term}`);
}

assert(exists("docs", "NEXUS_SPRINT_V1_MARKETPLACE_INTELLIGENCE_RUNTIME_ACTIVATION_READINESS_GATE.md"), "V3 requires V1 readiness gate doc.");
assert(exists("docs", "NEXUS_SPRINT_V2_MARKETPLACE_INTELLIGENCE_FEATURE_FLAG_CONTRACT.md"), "V3 requires V2 feature flag contract doc.");
assert(exists("public", "nexus-marketplace-intelligence-feature-flag.js"), "V3 requires V2 feature flag module.");

const alias = "qa:nexus-sprint-v3-marketplace-intelligence-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint V3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-v1-marketplace-intelligence-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint V1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-v2-marketplace-intelligence-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint V2 QA.");

console.log("[nexus-sprint-v3-marketplace-intelligence-flag-contract-harness-qa] passed");
