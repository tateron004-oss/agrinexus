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

const docName = "NEXUS_SPRINT_N1_MARKETPLACE_REQUEST_PRODUCT_BOUNDARY.md";
const qaName = "nexus-sprint-n1-marketplace-request-product-boundary-qa.js";
assert(exists("docs", docName), "N1 product boundary doc must exist.");
assert(exists("scripts", qaName), "N1 QA must exist.");

const doc = read("docs", docName);
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

[
  "a5d1774105b030341083754d0dfd2b3402302c52",
  "Sprint M closeout posture",
  "marketplace request and purchase-intent workflows",
  "Request intent",
  "Draft marketplace request",
  "Seller handoff",
  "Checkout",
  "Actual purchase",
  "agriculture input request",
  "produce purchase inquiry",
  "seller/product question",
  "marketplace availability review",
  "price quote request, review-only",
  "logistics interest, non-dispatching",
  "payment-related request, blocked from execution",
  "ambiguous marketplace request requiring clarification",
  "marketplaceRequestId",
  "marketplaceRequestType",
  "productIdentityResolutionId",
  "productDisplayName",
  "sellerIdentityResolutionId",
  "sellerDisplayName",
  "requestedMarketplaceCategory",
  "requestedQuantity",
  "userProvidedBudgetOrPrice",
  "availabilityRequirement",
  "logisticsRequirement",
  "communicationIntentRequirement",
  "requestDraft",
  "sellerConfirmationRequired",
  "userApprovalRequired",
  "finalExecutionGateRequired",
  "executionAuthority",
  "riskTier",
  "evidenceRequirement",
  "sourcePacketRequirement",
  "blockedExecutionChannels",
  "safeUseNotes",
  "limitations",
  "`sellerConfirmationRequired: true`",
  "`userApprovalRequired: true`",
  "`finalExecutionGateRequired: true`",
  "`executionAuthority: false`",
  "no payment",
  "no checkout",
  "no money movement",
  "no order placement",
  "no seller dispatch",
  "no seller handoff",
  "no call/message sending",
  "no backend writes",
  "no real pending actions",
  "Browser validation is required",
  "Sprint N2 Readiness"
].forEach(term => assert(doc.includes(term), `N1 doc must include: ${term}`));

const alias = "qa:nexus-sprint-n1-marketplace-request-product-boundary";
const script = "scripts/nexus-sprint-n1-marketplace-request-product-boundary-qa.js";
assert(pkg.scripts && pkg.scripts[alias] === `node ${script}`, `${alias} package script must exist.`);
assert(qaSuite.includes(script), "qa-suite must include N1 QA.");

console.log("[nexus-sprint-n1-marketplace-request-product-boundary-qa] passed");
