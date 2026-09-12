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

const docName = "NEXUS_SPRINT_O2_INERT_PAYMENT_INTENT_CONTRACT.md";
const moduleName = "nexus-payment-intent-contract.js";
const qaName = "nexus-sprint-o2-inert-payment-intent-contract-qa.js";

assert(exists("docs", docName), "O2 doc must exist.");
assert(exists("public", moduleName), "O2 contract module must exist.");
assert(exists("scripts", qaName), "O2 QA must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contract = require("../public/nexus-payment-intent-contract.js");

assertIncludes(doc, [
  "Sprint O2",
  "Inert Payment Intent Contract",
  "payment-intent",
  "mobile-money-intent",
  "marketplace-payment-intent",
  "service-fee-intent",
  "transportation-fare-intent",
  "refund-review",
  "blocked-payment-request",
  "marketplace-payment-review",
  "mobile-money-transfer-review",
  "`payeeConfirmationRequired: true`",
  "`userApprovalRequired: true`",
  "`finalExecutionGateRequired: true`",
  "`executionAuthority: false`",
  "wallet-transfer",
  "mobile-money-transfer",
  "checkout",
  "money-movement",
  "credential-storage",
  "payment-api-call",
  "provider-payment-intent",
  "backend-write",
  "pending-action",
  "must not mutate DOM",
  "not loaded by `public/index.html`, `public/app.js`, or `server.js`"
], "O2 doc");

assert.equal(typeof contract.isSafePaymentIntent, "function", "O2 validator must exist.");
assert.equal(typeof contract.validatePaymentIntent, "function", "O2 validation details must exist.");
assert.equal(typeof contract.createPaymentIntent, "function", "O2 creator must exist.");

const valid = contract.createPaymentIntent({
  paymentIntentId: "payment-o2-marketplace-review",
  paymentIntentType: "payment-intent",
  payeeIdentityResolutionId: "payee-visible-agritrade-seller",
  payeeDisplayName: "AgriTrade seller",
  payerDisplayName: "Standard User",
  paymentCategory: "marketplace-payment-review",
  amountDisplay: "review amount only",
  currencyDisplay: "currency not confirmed",
  paymentPurpose: "Review possible payment for marketplace item.",
  paymentMethodPreference: "mobile money preference, not executed",
  providerRequirement: "payment provider must be configured later",
  consentRequirement: "explicit user approval and final gate required",
  dryRunPacket: "dry-run only; no provider call",
  riskTier: "restricted",
  evidenceRequirement: "visible payee, amount, currency, consent, provider requirement, audit-ready state",
  sourcePacketRequirement: "source packet required before any future payment provider action",
  safeUseNotes: "Review-only payment intent packet.",
  limitations: "Does not pay, transfer, checkout, call providers, store credentials, or create pending actions."
});

assert.equal(valid.validation.ok, true, "O2 valid intent must validate.");
assert.equal(contract.isSafePaymentIntent(valid.intent), true, "O2 safe validator must accept valid inert intent.");
assert.equal(valid.validation.executionAllowed, false, "O2 validation must never allow execution.");
assert.equal(valid.intent.payeeConfirmationRequired, true, "O2 must require payee confirmation.");
assert.equal(valid.intent.userApprovalRequired, true, "O2 must require user approval.");
assert.equal(valid.intent.finalExecutionGateRequired, true, "O2 must require final execution gate.");
assert.equal(valid.intent.executionAuthority, false, "O2 must preserve executionAuthority false.");

const invalid = Object.assign({}, valid.intent, { executionAuthority: true });
assert.equal(contract.isSafePaymentIntent(invalid), false, "O2 must reject execution authority.");

contract.BLOCKED_EXECUTION_CHANNELS.forEach(channel => {
  assert(valid.intent.blockedExecutionChannels.includes(channel), `O2 valid intent must block ${channel}.`);
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
].forEach(term => assert(!moduleSource.includes(term), `O2 module must not include runtime side-effect or DOM API: ${term}`));

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(moduleName), `${label} must not load the O2 module.`);
});

const alias = "qa:nexus-sprint-o2-inert-payment-intent-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include O2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-o1-payment-safety-product-boundary-qa.js"), "O2 requires O1 QA to remain in qa-suite.");

console.log("[nexus-sprint-o2-inert-payment-intent-contract-qa] passed");
