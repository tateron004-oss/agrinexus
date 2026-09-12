const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_PAYMENT_WORKFLOW_READINESS_CONTRACT_PHASE_57.md"),
  contract: path.join(root, "public", "nexus-payment-workflow-readiness-contract.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-payment-workflow-readiness-contract-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const doc = read(paths.doc);
const contractSource = read(paths.contract);
const contract = require(paths.contract);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

assert(doc.includes("Phase: 57"), "doc must identify Phase 57.");
assert(doc.includes("inert readiness contract"), "doc must state this phase is inert.");
assert(doc.includes("No payment has been processed."), "doc must include safe no-payment copy.");
assert(doc.includes("Payment approval must be final, explicit"), "doc must define final approval boundary.");

[
  "live payment processing",
  "payment processor APIs",
  "card or bank credential collection",
  "wallet handoff",
  "marketplace checkout",
  "pharmacy payment",
  "transportation fare payment",
  "refunds",
  "receipt generation",
  "external payment links",
  "Standard User runtime payment execution behavior",
  "storage or network side effects",
  "backend behavior changes"
].forEach(boundary => {
  assert(doc.includes(boundary), `doc must document inactive boundary ${boundary}.`);
});

[
  "resolvedPayer",
  "verifiedPayerIdentity",
  "visiblePayeeDisplay",
  "visibleAmount",
  "visibleCurrency",
  "paymentPurposePreview",
  "processorDisplay",
  "processorAvailabilityState",
  "feeDisclosure",
  "refundOrCancellationPolicy",
  "permissionState",
  "complianceState",
  "auditEvent",
  "explicitFinalUserApproval",
  "receiptRequirement",
  "cancellationPath",
  "noCredentialCollection",
  "noSilentCharge",
  "noHiddenProcessorHandoff"
].forEach(precondition => {
  assert(contract.PAYMENT_WORKFLOW_REQUIRED_PRECONDITIONS.includes(precondition), `contract must include precondition ${precondition}.`);
  assert(doc.includes(precondition), `doc must include precondition ${precondition}.`);
});

[
  "payments",
  "marketplace_transactions",
  "pharmacy",
  "healthcare",
  "transportation_dispatch",
  "account_identity",
  "minors_family_support",
  "regulated_records"
].forEach(domain => {
  assert(contract.PAYMENT_WORKFLOW_RESTRICTED_DOMAINS.includes(domain), `contract must include restricted domain ${domain}.`);
  assert(doc.includes(domain), `doc must include restricted domain ${domain}.`);
});

const defaults = contract.PAYMENT_WORKFLOW_NO_EXECUTION_DEFAULTS;
[
  "paymentProcessingEnabled",
  "paymentProcessorApiEnabled",
  "credentialCollectionEnabled",
  "walletHandoffEnabled",
  "marketplaceCheckoutEnabled",
  "refundEnabled",
  "receiptGenerationEnabled",
  "externalPaymentLinkAllowed",
  "silentChargeAllowed",
  "hiddenProcessorHandoffAllowed",
  "standardUserPaymentExecutionAllowed",
  "executionAllowed",
  "liveActionEnabled"
].forEach(field => {
  assert(defaults[field] === false, `${field} must default false.`);
  assert(contract.PAYMENT_WORKFLOW_READINESS_CONTRACT[field] === false, `${field} must be false on the default contract.`);
});

const sample = contract.createPaymentWorkflowReadinessContract({
  actionType: "process_payment",
  paymentProcessingEnabled: true,
  paymentProcessorApiEnabled: true,
  credentialCollectionEnabled: true,
  executionAllowed: true
});

assert(sample.actionType === "process_payment", "recognized action type may be represented.");
assert(sample.phase === "57", "sample phase must remain 57.");
assert(sample.readinessStatus === "blocked", "sample readiness remains blocked.");
assert(sample.riskTier === "restricted", "sample risk tier remains restricted.");
assert(sample.paymentProcessingEnabled === false, "factory must force payment processing disabled.");
assert(sample.paymentProcessorApiEnabled === false, "factory must force processor API disabled.");
assert(sample.credentialCollectionEnabled === false, "factory must force credential collection disabled.");
assert(sample.executionAllowed === false, "factory must force execution disabled.");

[
  "fetch(",
  "XMLHttpRequest",
  "axios",
  "EventSource",
  "WebSocket",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "window.location",
  "document.location",
  "addEventListener",
  "onclick",
  "setInterval",
  "setTimeout",
  "chargeCard(",
  "processPayment(",
  "openCheckout(",
  "savePayment",
  "refundPayment("
].forEach(forbidden => {
  assert(!contractSource.includes(forbidden), `contract module must not include runtime behavior: ${forbidden}`);
});

[
  "nexus-payment-workflow-readiness-contract.js",
  "NexusPaymentWorkflowReadinessContract",
  "paymentWorkflowReadiness",
  "PAYMENT_WORKFLOW_READINESS_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}.`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}.`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}.`);
});

assert(packageData.scripts["qa:nexus-payment-workflow-readiness-contract"] === "node scripts/nexus-payment-workflow-readiness-contract-qa.js", "package.json must expose qa:nexus-payment-workflow-readiness-contract.");
assert(qaSuite.includes("scripts/nexus-payment-workflow-readiness-contract-qa.js"), "qa-suite.js must include payment workflow readiness QA.");

console.log("[nexus-payment-workflow-readiness-contract-qa] passed");
