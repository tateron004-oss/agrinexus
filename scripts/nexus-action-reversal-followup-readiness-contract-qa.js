const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_ACTION_REVERSAL_FOLLOWUP_READINESS_CONTRACT_PHASE_60.md"),
  contract: path.join(root, "public", "nexus-action-reversal-followup-readiness-contract.js"),
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
    console.error(`[nexus-action-reversal-followup-readiness-contract-qa] ${message}`);
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

assert(doc.includes("Phase: 60"), "doc must identify Phase 60.");
assert(doc.includes("inert readiness contract"), "doc must state this phase is inert.");
assert(doc.includes("No external action has been reversed by Nexus."), "doc must include safe no-reversal copy.");
assert(doc.includes("Result Lifecycle Boundary"), "doc must define result lifecycle boundary.");

[
  "runtime action reversal",
  "live undo or rollback",
  "provider cancellation",
  "message recall",
  "call cancellation",
  "payment refund",
  "marketplace transaction reversal",
  "appointment cancellation",
  "pharmacy refill cancellation",
  "transportation cancellation",
  "emergency dispatch cancellation",
  "location sharing revocation",
  "medical record sharing recall",
  "follow-up scheduling",
  "storage or network side effects",
  "backend behavior changes"
].forEach(boundary => {
  assert(doc.includes(boundary), `doc must document inactive boundary ${boundary}.`);
});

[
  "originalActionId",
  "originalActionType",
  "originalActionResult",
  "originalProvider",
  "visibleCurrentStatus",
  "reversalCapability",
  "reversalWindow",
  "reversalConsequence",
  "userVisibleOutcome",
  "auditEvent",
  "permissionState",
  "providerAvailabilityState",
  "explicitUserApproval",
  "providerConfirmationWhenRequired",
  "cancellationPath",
  "failureFallback",
  "noSilentRollback",
  "noHiddenExternalMutation",
  "noUnsupportedUndoClaim"
].forEach(precondition => {
  assert(contract.ACTION_REVERSAL_FOLLOWUP_REQUIRED_PRECONDITIONS.includes(precondition), `contract must include precondition ${precondition}.`);
  assert(doc.includes(precondition), `doc must include precondition ${precondition}.`);
});

[
  "communications",
  "payments",
  "marketplace_transactions",
  "appointments",
  "pharmacy",
  "transportation_dispatch",
  "emergency_dispatch",
  "location",
  "medical_records",
  "provider_contact",
  "account_identity"
].forEach(domain => {
  assert(contract.ACTION_REVERSAL_FOLLOWUP_RESTRICTED_DOMAINS.includes(domain), `contract must include restricted domain ${domain}.`);
  assert(doc.includes(domain), `doc must include restricted domain ${domain}.`);
});

const defaults = contract.ACTION_REVERSAL_FOLLOWUP_NO_EXECUTION_DEFAULTS;
[
  "resultLifecycleEnabled",
  "cancelActionEnabled",
  "undoActionEnabled",
  "rollbackEnabled",
  "retryEnabled",
  "followUpSchedulingEnabled",
  "providerCancellationEnabled",
  "paymentRefundEnabled",
  "externalStateMutationEnabled",
  "standardUserReversalExecutionAllowed",
  "executionAllowed",
  "liveActionEnabled"
].forEach(field => {
  assert(defaults[field] === false, `${field} must default false.`);
  assert(contract.ACTION_REVERSAL_FOLLOWUP_READINESS_CONTRACT[field] === false, `${field} must be false on the default contract.`);
});

const sample = contract.createActionReversalFollowupReadinessContract({
  actionType: "request_undo",
  undoActionEnabled: true,
  rollbackEnabled: true,
  externalStateMutationEnabled: true,
  executionAllowed: true
});

assert(sample.actionType === "request_undo", "recognized action type may be represented.");
assert(sample.phase === "60", "sample phase must remain 60.");
assert(sample.readinessStatus === "blocked", "sample readiness remains blocked.");
assert(sample.riskTier === "high", "sample risk tier remains high.");
assert(sample.undoActionEnabled === false, "factory must force undo disabled.");
assert(sample.rollbackEnabled === false, "factory must force rollback disabled.");
assert(sample.externalStateMutationEnabled === false, "factory must force external state mutation disabled.");
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
  "undoAction(",
  "cancelProviderAction(",
  "refundPayment(",
  "scheduleFollowup("
].forEach(forbidden => {
  assert(!contractSource.includes(forbidden), `contract module must not include runtime behavior: ${forbidden}`);
});

[
  "nexus-action-reversal-followup-readiness-contract.js",
  "NexusActionReversalFollowupReadinessContract",
  "actionReversalFollowupReadiness",
  "ACTION_REVERSAL_FOLLOWUP_READINESS_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}.`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}.`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}.`);
});

assert(packageData.scripts["qa:nexus-action-reversal-followup-readiness-contract"] === "node scripts/nexus-action-reversal-followup-readiness-contract-qa.js", "package.json must expose qa:nexus-action-reversal-followup-readiness-contract.");
assert(qaSuite.includes("scripts/nexus-action-reversal-followup-readiness-contract-qa.js"), "qa-suite.js must include action reversal/follow-up readiness QA.");

console.log("[nexus-action-reversal-followup-readiness-contract-qa] passed");
