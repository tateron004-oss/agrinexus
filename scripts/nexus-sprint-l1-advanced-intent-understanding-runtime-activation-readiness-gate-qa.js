const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_SPRINT_L1_ADVANCED_INTENT_UNDERSTANDING_RUNTIME_ACTIVATION_READINESS_GATE.md"),
  phase64Doc: path.join(root, "docs", "NEXUS_ADVANCED_INTENT_UNDERSTANDING_READINESS_CONTRACT_PHASE_64.md"),
  phase64Contract: path.join(root, "public", "nexus-advanced-intent-understanding-readiness-contract.js"),
  phase64Qa: path.join(root, "scripts", "nexus-advanced-intent-understanding-readiness-contract-qa.js"),
  k5Doc: path.join(root, "docs", "NEXUS_SPRINT_K5_PERSONALIZATION_LANE_CLOSEOUT.md"),
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
    console.error(`[nexus-sprint-l1-advanced-intent-understanding-runtime-activation-readiness-gate-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const doc = read(paths.doc);
const phase64Doc = read(paths.phase64Doc);
const contractSource = read(paths.phase64Contract);
const contract = require(paths.phase64Contract);
const k5Doc = read(paths.k5Doc);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

assert(doc.includes("Current base: `91ee675aba22bbd881bb189b7fefd75aa5ac215f`"), "doc must record the L1 base commit.");
assert(doc.includes("Sprint L1 defines the readiness gate"), "doc must describe the L1 readiness gate.");
assert(doc.includes("documentation and deterministic QA only"), "doc must state this phase is docs and deterministic QA only.");
assert(doc.includes("Sprint K5 - Personalization Lane Closeout"), "doc must connect to the completed K lane.");
assert(doc.includes("Phase 64 - Advanced Intent Understanding Readiness Contract"), "doc must connect to Phase 64.");
assert(doc.includes("Sprint L2 - Advanced Intent Understanding Feature Flag Contract"), "doc must identify the next safe sprint.");
assert(k5Doc.includes("Sprint L1 - Advanced Intent Understanding Runtime Activation Readiness Gate"), "K5 closeout must point to Sprint L1.");

[
  "product owner approval for a classifier runtime change",
  "evaluated classifier version",
  "representative prompt set",
  "multilingual prompt coverage",
  "Standard User prompt coverage",
  "voice prompt coverage",
  "typed prompt coverage",
  "risk stability baseline",
  "ambiguity fallback",
  "clarification path",
  "high-risk no downgrade rule",
  "source trace for classifier decision",
  "audit decision record",
  "policy engine review",
  "planner non-authority rule",
  "provider selection boundary",
  "no raw adapter calls",
  "no implicit permission",
  "no first-turn execution",
  "user override or correction path",
  "regression suite coverage",
  "browser validation plan",
  "rollback plan"
].forEach(requirement => {
  assert(doc.includes(requirement), `doc must include runtime precondition: ${requirement}.`);
});

[
  "live classifier replacement",
  "automatic route changes",
  "hidden risk downgrades",
  "confidence-only risk downgrades",
  "ambiguous prompt execution",
  "provider selection from raw intent",
  "tool selection from raw intent",
  "planner action creation from raw intent",
  "policy bypass from classifier confidence",
  "confirmation bypass from classifier confidence",
  "permission bypass from classifier confidence",
  "source-backed answer claims without sources",
  "medical diagnosis inference",
  "pharmacy or prescription inference",
  "payment intent execution",
  "marketplace transaction inference",
  "emergency dispatch inference",
  "contact or message execution inference",
  "location or camera permission inference",
  "identity verification inference",
  "role or permission elevation",
  "Standard User runtime classifier changes",
  "storage writes",
  "network calls",
  "backend writes",
  "audit writes",
  "localStorage or sessionStorage writes",
  "execution authority"
].forEach(blocked => {
  assert(doc.includes(blocked), `doc must block runtime behavior: ${blocked}.`);
});

[
  "healthcare",
  "medical records",
  "pharmacy",
  "payments",
  "location",
  "communications",
  "provider contact",
  "marketplace transactions",
  "emergency",
  "identity",
  "account profile",
  "role authorization",
  "minors and family support"
].forEach(domain => {
  assert(doc.includes(domain), `doc must mention restricted domain: ${domain}.`);
});

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
  assert(doc.includes(`${field}: false`), `doc must preserve invariant ${field}: false.`);
  assert(contract.ADVANCED_INTENT_UNDERSTANDING_NO_EXECUTION_DEFAULTS[field] === false, `${field} must default false in Phase 64 contract.`);
  assert(contract.ADVANCED_INTENT_UNDERSTANDING_READINESS_CONTRACT[field] === false, `${field} must remain false in Phase 64 default contract.`);
});

assert(phase64Doc.includes("inert readiness contract"), "Phase 64 doc must remain inert.");
assert(phase64Doc.includes("I will not infer permission or execute an action from an ambiguous request"), "Phase 64 doc must retain safe classifier copy.");
assert(contractSource.includes("createAdvancedIntentUnderstandingReadinessContract"), "Phase 64 contract factory must remain present.");

const attemptedOverride = contract.createAdvancedIntentUnderstandingReadinessContract({
  actionType: "evaluate_classifier_upgrade",
  liveClassifierReplacementEnabled: true,
  automaticRouteChangesEnabled: true,
  hiddenRiskDowngradeEnabled: true,
  providerSelectionEnabled: true,
  rawAdapterCallsEnabled: true,
  implicitPermissionEnabled: true,
  firstTurnExecutionEnabled: true,
  standardUserClassifierMutationAllowed: true,
  executionAllowed: true,
  liveActionEnabled: true
});

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
  assert(attemptedOverride[field] === false, `factory must force ${field} false despite override attempts.`);
});

[
  "nexus-advanced-intent-understanding-readiness-contract.js",
  "NexusAdvancedIntentUnderstandingReadinessContract",
  "ADVANCED_INTENT_UNDERSTANDING_READINESS_CONTRACT",
  "createAdvancedIntentUnderstandingReadinessContract",
  "nexus-sprint-l1-advanced-intent-understanding-runtime-activation-readiness-gate",
  "replaceClassifier",
  "activateIntentUnderstanding",
  "advancedIntentRuntime",
  "classifierRuntime",
  "classifierFeatureFlag",
  "autoRouteFromClassifier",
  "downgradeRiskFromClassifier",
  "selectProviderFromIntent",
  "executeIntent",
  "dispatchIntentAction"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not include runtime hook ${runtimeHook}.`);
  assert(!app.includes(runtimeHook), `app.js must not include runtime hook ${runtimeHook}.`);
  assert(!server.includes(runtimeHook), `server.js must not include runtime hook ${runtimeHook}.`);
});

[
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "navigator.credentials",
  "navigator.geolocation",
  "mediaDevices",
  "window.location",
  "document.location",
  "window.nativeBridge",
  "nativeBridge.",
  "ACTION_CALL",
  "getUserMedia",
  "openWorkflow(",
  "goSection(",
  "addEventListener",
  "querySelector",
  "replaceClassifier(",
  "routeAutomatically(",
  "selectProvider(",
  "executeIntent("
].forEach(forbidden => {
  assert(!contractSource.includes(forbidden), `Phase 64 contract module must remain inert and avoid ${forbidden}.`);
});

const alias = "qa:nexus-sprint-l1-advanced-intent-understanding-runtime-activation-readiness-gate";
const scriptPath = "scripts/nexus-sprint-l1-advanced-intent-understanding-runtime-activation-readiness-gate-qa.js";
assert(packageData.scripts[alias] === `node ${scriptPath}`, `package.json must expose ${alias}.`);
assert(qaSuite.includes(scriptPath), "qa-suite.js must include Sprint L1 QA.");
assert(qaSuite.includes("scripts/nexus-advanced-intent-understanding-readiness-contract-qa.js"), "qa-suite.js must continue to include Phase 64 QA.");

console.log("[nexus-sprint-l1-advanced-intent-understanding-runtime-activation-readiness-gate-qa] passed");
