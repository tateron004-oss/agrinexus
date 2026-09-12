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

const docName = "NEXUS_SPRINT_O1_PAYMENT_SAFETY_PRODUCT_BOUNDARY.md";
const qaName = "nexus-sprint-o1-payment-safety-product-boundary-qa.js";

assert(exists("docs", docName), "O1 product boundary doc must exist.");
assert(exists("scripts", qaName), "O1 QA script must exist.");

const doc = read("docs", docName);
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

[
  "Sprint O1",
  "Payment Safety Product Boundary",
  "does not move real money",
  "start checkout",
  "store credentials",
  "call payment APIs",
  "Payment intent",
  "Payee",
  "Amount",
  "Mobile money",
  "Checkout",
  "Dry-run",
  "marketplace payment intent",
  "service payment intent",
  "mobile money transfer intent",
  "transportation fare intent",
  "provider fee intent",
  "quote/payment review",
  "refund or reversal request",
  "ambiguous payment request",
  "blocked payment execution request",
  "paymentIntentId",
  "paymentIntentType",
  "payeeIdentityResolutionId",
  "payeeDisplayName",
  "amountDisplay",
  "currencyDisplay",
  "paymentPurpose",
  "paymentMethodPreference",
  "providerRequirement",
  "consentRequirement",
  "dryRunPacket",
  "`payeeConfirmationRequired: true`",
  "`userApprovalRequired: true`",
  "`finalExecutionGateRequired: true`",
  "`executionAuthority: false`",
  "move money",
  "process payments",
  "submit wallet transfers",
  "open payment provider handoff",
  "write backend state",
  "write browser storage",
  "create real pending actions",
  "Standard User build must remain safe",
  "console warnings/errors are zero",
  "Sprint O2 Readiness"
].forEach(term => assert(doc.includes(term), `O1 doc must include: ${term}`));

const alias = "qa:nexus-sprint-o1-payment-safety-product-boundary";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include O1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-n8-marketplace-request-closeout-qa.js"), "O1 requires Sprint N closeout QA to remain in qa-suite.");

console.log("[nexus-sprint-o1-payment-safety-product-boundary-qa] passed");
