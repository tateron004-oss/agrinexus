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

const docName = "NEXUS_SPRINT_N4_PRODUCT_SELLER_RISK_EVIDENCE_MAPPING.md";
const moduleName = "nexus-marketplace-request-risk-evidence-mapping.js";
const qaName = "nexus-sprint-n4-product-seller-risk-evidence-mapping-qa.js";

assert(exists("docs", docName), "N4 doc must exist.");
assert(exists("public", moduleName), "N4 mapping module must exist.");
assert(exists("scripts", qaName), "N4 QA must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const indexHtml = read("public", "index.html");
const appSource = read("public", "app.js");
const serverSource = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = JSON.parse(read("fixtures", "nexus", "marketplace-requests.json"));
const contract = require("../public/nexus-marketplace-request-contract.js");
const mapper = require("../public/nexus-marketplace-request-risk-evidence-mapping.js");

[
  "product identity requirement",
  "seller identity requirement",
  "quantity/price expectation",
  "user approval requirement",
  "seller confirmation requirement",
  "final execution gate requirement",
  "high",
  "restricted",
  "Ambiguous products, sellers, quantity, or price requests require clarification",
  "execution",
  "seller handoff",
  "not place orders",
  "pending real-world actions",
  "public/index.html",
  "public/app.js",
  "server.js"
].forEach(term => assert(doc.includes(term), `N4 doc must include: ${term}`));

[
  "deriveMarketplaceRequestRiskTier",
  "buildMarketplaceRequestEvidenceRequirement",
  "mapMarketplaceRequestRiskEvidence"
].forEach(exportName => assert.equal(typeof mapper[exportName], "function", `N4 module must export ${exportName}.`));

const cases = new Map(fixtures.map(fixture => [fixture.fixtureId, fixture]));
[
  ["agriculture-input-marketplace-request", "medium", false],
  ["marketplace-availability-review", "low", false],
  ["seller-product-question", "high", false],
  ["price-quote-review-only", "high", false],
  ["blocked-payment-checkout-marketplace-request", "restricted", false],
  ["ambiguous-marketplace-request", "high", true]
].forEach(([fixtureId, expectedRiskTier, expectedClarification]) => {
  const result = mapper.mapMarketplaceRequestRiskEvidence(cases.get(fixtureId));
  assert.equal(result.validation.ok, true, `${fixtureId} must validate after mapping.`);
  assert.equal(result.validation.executionAllowed, false, `${fixtureId} must not execute after mapping.`);
  assert.equal(result.request.riskTier, expectedRiskTier, `${fixtureId} must map risk tier.`);
  assert.equal(result.mapping.riskTier, expectedRiskTier, `${fixtureId} mapping must expose risk tier.`);
  assert.equal(result.mapping.clarificationRequired, expectedClarification, `${fixtureId} clarification status must match.`);
  assert(result.mapping.evidenceRequirement.includes("visible user approval required"), `${fixtureId} must require visible user approval.`);
  assert(result.mapping.evidenceRequirement.includes("seller confirmation required"), `${fixtureId} must require seller confirmation.`);
  assert(result.mapping.evidenceRequirement.includes("final execution gate required"), `${fixtureId} must require final gate.`);
  assert(result.mapping.evidenceRequirement.includes("audit-ready state required"), `${fixtureId} must require audit-ready state.`);
  assert.equal(result.request.sellerConfirmationRequired, true, `${fixtureId} must require seller confirmation.`);
  assert.equal(result.request.userApprovalRequired, true, `${fixtureId} must require user approval.`);
  assert.equal(result.request.finalExecutionGateRequired, true, `${fixtureId} must require final execution gate.`);
  assert.equal(result.request.executionAuthority, false, `${fixtureId} must keep executionAuthority false.`);
  assert.equal(result.mapping.executionAllowed, false, `${fixtureId} mapping must not allow execution.`);
  assert.equal(result.mapping.paymentAllowed, false, `${fixtureId} mapping must not allow payment.`);
  assert.equal(result.mapping.checkoutAllowed, false, `${fixtureId} mapping must not allow checkout.`);
  assert.equal(result.mapping.orderPlacementAllowed, false, `${fixtureId} mapping must not allow ordering.`);
  assert.equal(result.mapping.sellerHandoffAllowed, false, `${fixtureId} mapping must not allow seller handoff.`);
  contract.BLOCKED_EXECUTION_CHANNELS.forEach(channel => {
    assert(result.request.blockedExecutionChannels.includes(channel), `${fixtureId} must keep blocked channel ${channel}.`);
  });
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
].forEach(term => assert(!moduleSource.includes(term), `N4 module must not include side-effect API: ${term}`));

[indexHtml, appSource, serverSource].forEach((source, index) => {
  const label = ["index.html", "app.js", "server.js"][index];
  assert(!source.includes(moduleName), `${label} must not load N4 mapper.`);
});

const alias = "qa:nexus-sprint-n4-product-seller-risk-evidence-mapping";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include N4 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-n3-marketplace-request-harness-qa.js"), "N4 requires N3 QA to remain in qa-suite.");

console.log("[nexus-sprint-n4-product-seller-risk-evidence-mapping-qa] passed");
