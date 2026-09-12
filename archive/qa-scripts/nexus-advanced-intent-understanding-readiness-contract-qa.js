const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_ADVANCED_INTENT_UNDERSTANDING_READINESS_CONTRACT_PHASE_64.md"),
  contract: path.join(root, "public", "nexus-advanced-intent-understanding-readiness-contract.js"),
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
    console.error(`[nexus-advanced-intent-understanding-readiness-contract-qa] ${message}`);
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

assert(doc.includes("Phase: 64"), "doc must identify Phase 64.");
assert(doc.includes("inert readiness contract"), "doc must state this phase is inert.");
assert(doc.includes("I will not infer permission or execute an action from an ambiguous request"), "doc must include safe classifier copy.");
assert(doc.includes("risk stable"), "doc must preserve roadmap risk-stability language.");

[
  "live classifier replacement",
  "automatic route changes",
  "hidden risk downgrades",
  "provider selection from raw intent",
  "medical diagnosis inference",
  "payment intent execution",
  "marketplace transaction inference",
  "emergency dispatch inference",
  "contact or message execution inference",
  "location or camera permission inference",
  "identity verification inference",
  "role or permission elevation",
  "Standard User runtime classifier changes",
  "storage or network side effects",
  "backend behavior changes"
].forEach(boundary => {
  assert(doc.includes(boundary), `doc must document inactive boundary ${boundary}.`);
});

[
  "evaluatedClassifierVersion",
  "representativePromptSet",
  "riskStabilityBaseline",
  "ambiguityFallback",
  "clarificationPath",
  "highRiskNoDowngradeRule",
  "sourceTraceForClassifierDecision",
  "auditDecisionRecord",
  "policyEngineReview",
  "plannerNonAuthorityRule",
  "providerSelectionBoundary",
  "noRawAdapterCalls",
  "noImplicitPermission",
  "noFirstTurnExecution",
  "userOverrideOrCorrectionPath",
  "regressionSuiteCoverage",
  "rollbackPlan"
].forEach(precondition => {
  assert(contract.ADVANCED_INTENT_UNDERSTANDING_REQUIRED_PRECONDITIONS.includes(precondition), `contract must include precondition ${precondition}.`);
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
  assert(contract.ADVANCED_INTENT_UNDERSTANDING_RESTRICTED_DOMAINS.includes(domain), `contract must include restricted domain ${domain}.`);
  assert(doc.includes(domain), `doc must include restricted domain ${domain}.`);
});

const defaults = contract.ADVANCED_INTENT_UNDERSTANDING_NO_EXECUTION_DEFAULTS;
[
  "liveClassifierReplacementEnabled",
  "automaticRouteChangesEnabled",
  "hiddenRiskDowngradeEnabled",
  "providerSelectionEnabled",
  "rawAdapterCallsEnabled",
  "implicitPermissionEnabled",
  "firstTurnExecutionEnabled",
  "standardUserClassifierMutationAllowed",
  "executionAllowed",
  "liveActionEnabled"
].forEach(field => {
  assert(defaults[field] === false, `${field} must default false.`);
  assert(contract.ADVANCED_INTENT_UNDERSTANDING_READINESS_CONTRACT[field] === false, `${field} must be false on the default contract.`);
});

const sample = contract.createAdvancedIntentUnderstandingReadinessContract({
  actionType: "evaluate_classifier_upgrade",
  liveClassifierReplacementEnabled: true,
  automaticRouteChangesEnabled: true,
  hiddenRiskDowngradeEnabled: true,
  firstTurnExecutionEnabled: true,
  executionAllowed: true
});

assert(sample.actionType === "evaluate_classifier_upgrade", "recognized action type may be represented.");
assert(sample.phase === "64", "sample phase must remain 64.");
assert(sample.readinessStatus === "blocked", "sample readiness remains blocked.");
assert(sample.riskTier === "high", "sample risk tier remains high.");
assert(sample.liveClassifierReplacementEnabled === false, "factory must force classifier replacement disabled.");
assert(sample.automaticRouteChangesEnabled === false, "factory must force route changes disabled.");
assert(sample.hiddenRiskDowngradeEnabled === false, "factory must force risk downgrade disabled.");
assert(sample.firstTurnExecutionEnabled === false, "factory must force first-turn execution disabled.");
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
  "replaceClassifier(",
  "routeAutomatically(",
  "selectProvider(",
  "executeIntent("
].forEach(forbidden => {
  assert(!contractSource.includes(forbidden), `contract module must not include runtime behavior: ${forbidden}`);
});

[
  "nexus-advanced-intent-understanding-readiness-contract.js",
  "NexusAdvancedIntentUnderstandingReadinessContract",
  "advancedIntentUnderstandingReadiness",
  "ADVANCED_INTENT_UNDERSTANDING_READINESS_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}.`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}.`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}.`);
});

assert(packageData.scripts["qa:nexus-advanced-intent-understanding-readiness-contract"] === "node scripts/nexus-advanced-intent-understanding-readiness-contract-qa.js", "package.json must expose qa:nexus-advanced-intent-understanding-readiness-contract.");
assert(qaSuite.includes("scripts/nexus-advanced-intent-understanding-readiness-contract-qa.js"), "qa-suite.js must include advanced intent understanding readiness QA.");

console.log("[nexus-advanced-intent-understanding-readiness-contract-qa] passed");
