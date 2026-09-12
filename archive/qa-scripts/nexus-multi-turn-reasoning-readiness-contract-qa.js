const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_MULTI_TURN_REASONING_READINESS_CONTRACT_PHASE_65.md"),
  contract: path.join(root, "public", "nexus-multi-turn-reasoning-readiness-contract.js"),
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
    console.error(`[nexus-multi-turn-reasoning-readiness-contract-qa] ${message}`);
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

assert(doc.includes("Phase: 65"), "doc must identify Phase 65.");
assert(doc.includes("inert readiness contract"), "doc must state this phase is inert.");
assert(doc.includes("I can keep track of the conversation context, but context alone cannot authorize or execute an action."), "doc must include safe user-facing copy.");
assert(doc.includes("context cannot execute") || doc.includes("execution authority"), "doc must preserve roadmap execution boundary language.");

[
  "live reasoning engine replacement",
  "context-based execution",
  "memory-derived authority",
  "hidden task continuation",
  "provider selection from context alone",
  "medical diagnosis from prior turns",
  "payment or marketplace transaction continuation",
  "emergency dispatch from prior turns",
  "contact or message execution from prior turns",
  "location or camera permission from prior turns",
  "identity verification from prior turns",
  "role or permission elevation",
  "Standard User runtime reasoning changes",
  "storage or network side effects",
  "backend behavior changes"
].forEach(boundary => {
  assert(doc.includes(boundary), `doc must document inactive boundary ${boundary}.`);
});

[
  "boundedConversationContext",
  "contextFreshnessLimit",
  "explicitUserRestatementForHighRisk",
  "riskTierReevaluationEachTurn",
  "policyEngineReviewEachTurn",
  "plannerNonAuthorityRule",
  "memoryNonAuthorityRule",
  "confirmationRequiredForHighRisk",
  "permissionRequiredForSensitiveActions",
  "contextClearOrResetPath",
  "sourceTraceForContextUse",
  "auditDecisionRecord",
  "noContextBasedExecution",
  "noHiddenTaskContinuation",
  "noImplicitPermission",
  "noFirstTurnOrLaterTurnExecution",
  "regressionSuiteCoverage"
].forEach(precondition => {
  assert(contract.MULTI_TURN_REASONING_REQUIRED_PRECONDITIONS.includes(precondition), `contract must include precondition ${precondition}.`);
  assert(doc.includes(precondition), `doc must include precondition ${precondition}.`);
});

[
  "healthcare",
  "medical_records",
  "pharmacy",
  "payments",
  "location",
  "communications",
  "provider_contact",
  "marketplace_transactions",
  "emergency",
  "identity",
  "account_profile",
  "role_authorization",
  "minors_family_support"
].forEach(domain => {
  assert(contract.MULTI_TURN_REASONING_RESTRICTED_DOMAINS.includes(domain), `contract must include restricted domain ${domain}.`);
  assert(doc.includes(domain), `doc must include restricted domain ${domain}.`);
});

const defaults = contract.MULTI_TURN_REASONING_NO_EXECUTION_DEFAULTS;
[
  "liveReasoningEngineEnabled",
  "contextBasedExecutionEnabled",
  "memoryDerivedAuthorityEnabled",
  "hiddenTaskContinuationEnabled",
  "providerSelectionFromContextEnabled",
  "permissionFromContextEnabled",
  "riskTierDowngradeFromContextEnabled",
  "standardUserReasoningMutationAllowed",
  "executionAllowed",
  "liveActionEnabled"
].forEach(field => {
  assert(defaults[field] === false, `${field} must default false.`);
  assert(contract.MULTI_TURN_REASONING_READINESS_CONTRACT[field] === false, `${field} must be false on the default contract.`);
});

const sample = contract.createMultiTurnReasoningReadinessContract({
  actionType: "evaluate_reasoning_upgrade",
  liveReasoningEngineEnabled: true,
  contextBasedExecutionEnabled: true,
  memoryDerivedAuthorityEnabled: true,
  hiddenTaskContinuationEnabled: true,
  executionAllowed: true
});

assert(sample.actionType === "evaluate_reasoning_upgrade", "recognized action type may be represented.");
assert(sample.phase === "65", "sample phase must remain 65.");
assert(sample.readinessStatus === "blocked", "sample readiness remains blocked.");
assert(sample.riskTier === "high", "sample risk tier remains high.");
assert(sample.liveReasoningEngineEnabled === false, "factory must force liveReasoningEngineEnabled disabled.");
assert(sample.contextBasedExecutionEnabled === false, "factory must force contextBasedExecutionEnabled disabled.");
assert(sample.memoryDerivedAuthorityEnabled === false, "factory must force memoryDerivedAuthorityEnabled disabled.");
assert(sample.hiddenTaskContinuationEnabled === false, "factory must force hiddenTaskContinuationEnabled disabled.");
assert(sample.executionAllowed === false, "factory must force executionAllowed disabled.");

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
  "executeFromContext(",
  "continueHiddenTask(",
  "selectProviderFromContext(",
  "grantPermissionFromContext("
].forEach(forbidden => {
  assert(!contractSource.includes(forbidden), `contract module must not include runtime behavior: ${forbidden}`);
});

[
  "nexus-multi-turn-reasoning-readiness-contract.js",
  "NexusMultiTurnReasoningReadinessContract",
  "multiTurnReasoningReadiness",
  "MULTI_TURN_REASONING_READINESS_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}.`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}.`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}.`);
});

assert(packageData.scripts["qa:nexus-multi-turn-reasoning-readiness-contract"] === "node scripts/nexus-multi-turn-reasoning-readiness-contract-qa.js", "package.json must expose qa:nexus-multi-turn-reasoning-readiness-contract.");
assert(qaSuite.includes("scripts/nexus-multi-turn-reasoning-readiness-contract-qa.js"), "qa-suite.js must include Phase 65 QA.");

console.log("[nexus-multi-turn-reasoning-readiness-contract-qa] passed");
