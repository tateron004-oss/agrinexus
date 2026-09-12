const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_SPRINT_M1_MULTI_TURN_REASONING_RUNTIME_ACTIVATION_READINESS_GATE.md"),
  phase65Doc: path.join(root, "docs", "NEXUS_MULTI_TURN_REASONING_READINESS_CONTRACT_PHASE_65.md"),
  phase65Contract: path.join(root, "public", "nexus-multi-turn-reasoning-readiness-contract.js"),
  phase65Qa: path.join(root, "scripts", "nexus-multi-turn-reasoning-readiness-contract-qa.js"),
  l5Doc: path.join(root, "docs", "NEXUS_SPRINT_L5_ADVANCED_INTENT_UNDERSTANDING_LANE_CLOSEOUT.md"),
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
    console.error(`[nexus-sprint-m1-multi-turn-reasoning-runtime-activation-readiness-gate-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const doc = read(paths.doc);
const phase65Doc = read(paths.phase65Doc);
const contractSource = read(paths.phase65Contract);
const contract = require(paths.phase65Contract);
const l5Doc = read(paths.l5Doc);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

assert(doc.includes("Current base: `c94087b01a47f70350e8dca8f04045be4690ab3b`"), "doc must record the M1 base commit.");
assert(doc.includes("Sprint M1 defines the readiness gate"), "doc must describe the M1 readiness gate.");
assert(doc.includes("documentation and deterministic QA only"), "doc must state this phase is docs and deterministic QA only.");
assert(doc.includes("Sprint L5 - Advanced Intent Understanding Lane Closeout"), "doc must connect to the completed L lane.");
assert(doc.includes("Phase 65 - Multi-Turn Reasoning Readiness Contract"), "doc must connect to Phase 65.");
assert(doc.includes("Sprint M2 - Multi-Turn Reasoning Feature Flag Contract"), "doc must identify the next safe sprint.");
assert(l5Doc.includes("Sprint M1 - Multi-Turn Reasoning Runtime Activation Readiness Gate"), "L5 closeout must point to Sprint M1.");

[
  "product owner approval for a reasoning runtime change",
  "evaluated reasoning context version",
  "bounded conversation context model",
  "context freshness limit",
  "explicit user restatement for high-risk actions",
  "risk tier reevaluation on every turn",
  "policy engine review on every turn",
  "planner non-authority rule",
  "memory non-authority rule",
  "confirmation required for high-risk actions",
  "permission required for sensitive actions",
  "context clear or reset path",
  "source trace for context use",
  "audit decision record",
  "no context-based execution",
  "no hidden task continuation",
  "no implicit permission from prior turns",
  "no first-turn or later-turn execution from context alone",
  "representative prompt set",
  "multilingual prompt coverage",
  "Standard User prompt coverage",
  "voice prompt coverage",
  "typed prompt coverage",
  "ambiguity fallback",
  "user correction or override path",
  "regression suite coverage",
  "browser validation plan",
  "rollback plan"
].forEach(requirement => {
  assert(doc.includes(requirement), `doc must include runtime precondition: ${requirement}.`);
});

[
  "live reasoning engine replacement",
  "context-based execution",
  "memory-derived authority",
  "hidden task continuation",
  "automatic route changes from prior turns",
  "provider selection from context alone",
  "tool selection from context alone",
  "planner action creation from context alone",
  "policy bypass from prior context",
  "confirmation bypass from prior context",
  "permission bypass from prior context",
  "risk tier downgrade from prior context",
  "source-backed answer claims without sources",
  "medical diagnosis from prior turns",
  "pharmacy or prescription continuation from prior turns",
  "payment or marketplace transaction continuation from prior turns",
  "emergency dispatch from prior turns",
  "contact or message execution from prior turns",
  "location or camera permission from prior turns",
  "identity verification from prior turns",
  "role or permission elevation from prior turns",
  "Standard User runtime reasoning changes",
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
  assert(doc.includes(`${field}: false`), `doc must preserve invariant ${field}: false.`);
  assert(contract.MULTI_TURN_REASONING_NO_EXECUTION_DEFAULTS[field] === false, `${field} must default false in Phase 65 contract.`);
  assert(contract.MULTI_TURN_REASONING_READINESS_CONTRACT[field] === false, `${field} must remain false in Phase 65 default contract.`);
});

assert(phase65Doc.includes("inert readiness contract"), "Phase 65 doc must remain inert.");
assert(phase65Doc.includes("context alone cannot authorize or execute an action"), "Phase 65 doc must retain safe reasoning copy.");
assert(contractSource.includes("createMultiTurnReasoningReadinessContract"), "Phase 65 contract factory must remain present.");

const attemptedOverride = contract.createMultiTurnReasoningReadinessContract({
  actionType: "evaluate_reasoning_upgrade",
  liveReasoningEngineEnabled: true,
  contextBasedExecutionEnabled: true,
  memoryDerivedAuthorityEnabled: true,
  hiddenTaskContinuationEnabled: true,
  providerSelectionFromContextEnabled: true,
  permissionFromContextEnabled: true,
  riskTierDowngradeFromContextEnabled: true,
  standardUserReasoningMutationAllowed: true,
  executionAllowed: true,
  liveActionEnabled: true
});

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
  assert(attemptedOverride[field] === false, `factory must force ${field} false despite override attempts.`);
});

[
  "nexus-multi-turn-reasoning-readiness-contract.js",
  "NexusMultiTurnReasoningReadinessContract",
  "MULTI_TURN_REASONING_READINESS_CONTRACT",
  "createMultiTurnReasoningReadinessContract",
  "nexus-sprint-m1-multi-turn-reasoning-runtime-activation-readiness-gate",
  "multiTurnReasoningRuntime",
  "reasoningRuntime",
  "contextContinuationAdapter",
  "continueHiddenTask",
  "executeFromContext",
  "autoRouteFromContext",
  "selectProviderFromContext",
  "grantPermissionFromContext",
  "downgradeRiskFromContext"
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
  "executeFromContext(",
  "continueHiddenTask(",
  "selectProviderFromContext(",
  "grantPermissionFromContext("
].forEach(forbidden => {
  assert(!contractSource.includes(forbidden), `Phase 65 contract module must remain inert and avoid ${forbidden}.`);
});

const alias = "qa:nexus-sprint-m1-multi-turn-reasoning-runtime-activation-readiness-gate";
const scriptPath = "scripts/nexus-sprint-m1-multi-turn-reasoning-runtime-activation-readiness-gate-qa.js";
assert(packageData.scripts[alias] === `node ${scriptPath}`, `package.json must expose ${alias}.`);
assert(qaSuite.includes(scriptPath), "qa-suite.js must include Sprint M1 QA.");
assert(qaSuite.includes("scripts/nexus-multi-turn-reasoning-readiness-contract-qa.js"), "qa-suite.js must continue to include Phase 65 QA.");

console.log("[nexus-sprint-m1-multi-turn-reasoning-runtime-activation-readiness-gate-qa] passed");
