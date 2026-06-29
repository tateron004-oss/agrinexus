const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const marketplace = require("../server/nexus-n100-marketplace-review-assistant.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-n100-marketplace-review-assistant.js");
  const doc = read("docs", "NEXUS_N100_16_MARKETPLACE_REVIEW_ASSISTANT.md");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  assert(exists("server", "nexus-n100-marketplace-review-assistant.js"), "N100-16 marketplace review module must exist.");
  assert(exists("docs", "NEXUS_N100_16_MARKETPLACE_REVIEW_ASSISTANT.md"), "N100-16 documentation must exist.");
  assert(exists("scripts", "nexus-n100-16-marketplace-review-assistant-qa.js"), "N100-16 QA must exist.");

  [
    "SUPPORTED_MARKETPLACE_ARTIFACTS",
    "BLOCKED_MARKETPLACE_ACTIONS",
    "createN100MarketplaceReviewArtifact",
    "noBuyerSellerContactAuthorized",
    "noPaymentAuthorized",
    "noExternalNavigationAuthorized"
  ].forEach(term => assert(source.includes(term), `N100-16 source must include ${term}.`));

  [
    "review-only AgriTrade and marketplace notes",
    "without buying, selling, contacting buyers or sellers, processing payments",
    "not loaded by `public/app.js`, `public/index.html`, or `server.js`"
  ].forEach(term => assert(doc.includes(term), `N100-16 documentation must include ${term}.`));

  [
    "nexus-n100-marketplace-review-assistant",
    "createN100MarketplaceReviewArtifact",
    "SUPPORTED_MARKETPLACE_ARTIFACTS"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load N100-16 runtime term: ${term}.`);
    assert(!index.includes(term), `public/index.html must not load N100-16 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load N100-16 runtime term: ${term}.`);
  });

  [
    "fetch(",
    "paymentIntent:",
    "checkout(",
    "submitOrder(",
    "placeOrder(",
    "buyNow(",
    "sellNow(",
    "contactSeller(",
    "contactBuyer(",
    "sendMessage(",
    "window.open",
    "location.href",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "providerHandoffAllowed: true",
    "executionAuthority: \"provider\""
  ].forEach(term => assert(!source.includes(term), `N100-16 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(
    pkg.scripts["qa:nexus-n100-16-marketplace-review-assistant"],
    "node scripts/nexus-n100-16-marketplace-review-assistant-qa.js",
    "N100-16 package QA alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-n100-16-marketplace-review-assistant-qa.js"), "N100-16 QA must be wired into local-safe suites.");
}

function assertArtifact(prompt, expectedType) {
  const artifact = marketplace.createN100MarketplaceReviewArtifact({
    prompt,
    topic: prompt,
    nowIso: "2026-06-28T22:00:00.000Z"
  });
  assert.equal(marketplace.isSafeN100MarketplaceReviewArtifact(artifact), true, `${prompt} must be safe.`);
  assert.equal(artifact.artifactType, expectedType, `${prompt} artifact type mismatch.`);
  assert.equal(artifact.canExecute, false, `${prompt} must not execute.`);
  assert.equal(artifact.executionAuthority, "none", `${prompt} must have no execution authority.`);
  assert.equal(artifact.safetyPosture.noPurchaseAuthorized, true, `${prompt} must not authorize purchases.`);
  assert.equal(artifact.safetyPosture.noBuyerSellerContactAuthorized, true, `${prompt} must not authorize buyer/seller contact.`);
  marketplace.BLOCKED_MARKETPLACE_ACTIONS.forEach(action => {
    assert(artifact.blockedActions.includes(action), `${prompt} must block ${action}.`);
  });
}

function assertSupportedArtifacts() {
  assertArtifact("Review this marketplace listing.", "marketplace_listing_review");
  assertArtifact("Browse AgriTrade safely.", "agritrade_browse_checklist");
  assertArtifact("Draft seller questions for maize.", "seller_question_draft");
  assertArtifact("Compare market price for tomatoes.", "price_comparison_notes");
  assertArtifact("Prepare transaction safety checklist.", "transaction_safety_checklist");
  assertArtifact("Prepare produce readiness notes for harvest.", "produce_readiness_notes");
}

function assertBlockedMarketplaceExecution() {
  [
    "Buy this item.",
    "Purchase fertilizer now.",
    "Pay the seller.",
    "Place order now.",
    "Sell this crop now.",
    "Accept offer.",
    "Contact seller.",
    "Message buyer.",
    "Arrange delivery.",
    "Create an account."
  ].forEach(prompt => {
    const artifact = marketplace.createN100MarketplaceReviewArtifact({ prompt });
    assert.equal(marketplace.isSafeN100MarketplaceReviewArtifact(artifact), true, `${prompt} blocked artifact must be safe.`);
    assert.equal(artifact.artifactType, "blocked_marketplace_execution", `${prompt} must be blocked.`);
    assert.equal(artifact.status, "blocked_no_marketplace_execution", `${prompt} must not execute.`);
  });
}

function runN100MarketplaceReviewAssistantQa() {
  assertStaticSafety();
  assertSupportedArtifacts();
  assertBlockedMarketplaceExecution();

  console.log(JSON.stringify({
    phase: "N100-16",
    supportedMarketplaceArtifacts: marketplace.SUPPORTED_MARKETPLACE_ARTIFACTS,
    blockedMarketplaceActions: marketplace.BLOCKED_MARKETPLACE_ACTIONS,
    standardUserRuntimeActivated: false,
    noBuyerSellerContactAuthorized: true,
    noPaymentAuthorized: true,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-n100-16-marketplace-review-assistant-qa] passed");
}

if (require.main === module) {
  try {
    runN100MarketplaceReviewAssistantQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runN100MarketplaceReviewAssistantQa
});
