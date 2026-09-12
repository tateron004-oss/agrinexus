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

function assertIncludes(source, terms, label) {
  terms.forEach(term => assert(source.includes(term), `${label} must include: ${term}`));
}

const docName = "NEXUS_SPRINT_N2_INERT_MARKETPLACE_REQUEST_CONTRACT.md";
const moduleName = "nexus-marketplace-request-contract.js";
const qaName = "nexus-sprint-n2-inert-marketplace-request-contract-qa.js";

assert(exists("docs", docName), "N2 doc must exist.");
assert(exists("public", moduleName), "N2 contract module must exist.");
assert(exists("scripts", qaName), "N2 QA must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contract = require("../public/nexus-marketplace-request-contract.js");

assertIncludes(doc, [
  "Sprint N2",
  "Inert Marketplace Request Contract",
  "marketplace-request",
  "purchase-intent",
  "product-inquiry",
  "seller-question",
  "availability-review",
  "quote-request",
  "logistics-interest",
  "agriculture-input",
  "produce-purchase-inquiry",
  "seller-product-question",
  "marketplace-availability-review",
  "price-quote-review-only",
  "payment-related-blocked",
  "`sellerConfirmationRequired: true`",
  "`userApprovalRequired: true`",
  "`finalExecutionGateRequired: true`",
  "`executionAuthority: false`",
  "payment",
  "checkout",
  "money-movement",
  "order-placement",
  "seller-dispatch",
  "seller-handoff",
  "call",
  "message",
  "location",
  "camera",
  "medical",
  "pharmacy",
  "emergency",
  "backend-write",
  "pending-action",
  "must not mutate DOM",
  "not loaded by `public/index.html`, `public/app.js`, or `server.js`"
], "N2 doc");

assert.equal(typeof contract.isSafeMarketplaceRequestIntent, "function", "N2 validator must exist.");
assert.equal(typeof contract.validateMarketplaceRequestIntent, "function", "N2 validation details must exist.");
assert.equal(typeof contract.createMarketplaceRequestIntent, "function", "N2 creator must exist.");

const valid = contract.createMarketplaceRequestIntent({
  marketplaceRequestId: "marketplace-request-n2-seeds",
  marketplaceRequestType: "marketplace-request",
  productIdentityResolutionId: "product-visible-maize-seed",
  productDisplayName: "Maize seed",
  sellerIdentityResolutionId: "seller-visible-agritrade-listing",
  sellerDisplayName: "AgriTrade marketplace listing",
  requestedMarketplaceCategory: "agriculture-input",
  requestedQuantity: "review available quantities before any request",
  userProvidedBudgetOrPrice: "budget or price is review-only until source-backed",
  availabilityRequirement: "review availability before any seller contact",
  logisticsRequirement: "logistics interest only; no dispatch or delivery booking",
  communicationIntentRequirement: "separate confirmed communication intent required before seller contact",
  requestDraft: "Prepare a review-only request for maize seed options.",
  riskTier: "medium",
  evidenceRequirement: "visible product, seller, quantity, user approval, final execution gate, and audit-ready state",
  sourcePacketRequirement: "source packet required before any future order or handoff",
  safeUseNotes: "Review-only marketplace request packet.",
  limitations: "Does not pay, checkout, order, dispatch, contact sellers, or create pending actions."
});

assert.equal(valid.validation.ok, true, "N2 valid request must validate.");
assert.equal(contract.isSafeMarketplaceRequestIntent(valid.request), true, "N2 safe validator must accept valid inert request.");
assert.equal(valid.validation.executionAllowed, false, "N2 validation must never allow execution.");
assert.equal(valid.request.sellerConfirmationRequired, true, "N2 must require seller confirmation.");
assert.equal(valid.request.userApprovalRequired, true, "N2 must require user approval.");
assert.equal(valid.request.finalExecutionGateRequired, true, "N2 must require final execution gate.");
assert.equal(valid.request.executionAuthority, false, "N2 must preserve executionAuthority false.");

const invalid = Object.assign({}, valid.request, { executionAuthority: true });
assert.equal(contract.isSafeMarketplaceRequestIntent(invalid), false, "N2 must reject execution authority.");

const missingBlockedChannel = Object.assign({}, valid.request, {
  blockedExecutionChannels: valid.request.blockedExecutionChannels.filter(channel => channel !== "payment")
});
assert.equal(contract.isSafeMarketplaceRequestIntent(missingBlockedChannel), false, "N2 must reject missing blocked marketplace channels.");

contract.BLOCKED_EXECUTION_CHANNELS.forEach(channel => {
  assert(valid.request.blockedExecutionChannels.includes(channel), `N2 valid request must block ${channel}.`);
});

[
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
  "writeFile",
  "appendFile",
  "addEventListener",
  "createElement",
  "innerHTML",
  "db.json"
].forEach(term => assert(!moduleSource.includes(term), `N2 module must not include runtime side-effect or DOM API: ${term}`));

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(moduleName), `${label} must not load the N2 module.`);
});

const alias = "qa:nexus-sprint-n2-inert-marketplace-request-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include N2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-n1-marketplace-request-product-boundary-qa.js"), "N2 requires N1 QA to remain in qa-suite.");

console.log("[nexus-sprint-n2-inert-marketplace-request-contract-qa] passed");
