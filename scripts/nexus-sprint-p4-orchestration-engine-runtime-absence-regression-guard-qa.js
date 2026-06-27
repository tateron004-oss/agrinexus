const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_ORCHESTRATION_ENGINE_FEATURE_FLAG_STATE,
  normalizeOrchestrationEngineFeatureFlagState
} = require("../public/nexus-orchestration-engine-feature-flag.js");
const {
  protectedFields,
  loadOrchestrationEngineFlagFixtures,
  validateOrchestrationEngineFlagFixtures
} = require("./nexus-sprint-p3-orchestration-engine-flag-contract-harness.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertIncludes(source, terms, label) {
  const normalizedSource = source.replace(/`/g, "");
  for (const term of terms) {
    assert(normalizedSource.includes(term), `${label} must include: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_P4_ORCHESTRATION_ENGINE_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-p4-orchestration-engine-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint P4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint P4 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-orchestration-engine-readiness-contract.js");
const featureFlagModule = read("public", "nexus-orchestration-engine-feature-flag.js");
const p3Harness = read("scripts", "nexus-sprint-p3-orchestration-engine-flag-contract-harness.js");
const fixtures = loadOrchestrationEngineFlagFixtures();

assertIncludes(doc, [
  "Sprint P4",
  "1d31c88eb7aa7ef5283424f579d728542c0e29b5",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint P5 - Orchestration Engine Lane Closeout"
], "P4 absence guard doc");

assertIncludes(doc, [
  "P1 Orchestration Engine runtime activation readiness gate",
  "P2 Orchestration Engine feature flag contract",
  "P3 Orchestration Engine flag contract harness",
  "Phase 68 Orchestration Engine readiness contract"
], "P4 protected artifacts");

assertIncludes(doc, [
  "public/nexus-orchestration-engine-readiness-contract.js",
  "public/nexus-orchestration-engine-feature-flag.js",
  "scripts/nexus-sprint-p3-orchestration-engine-flag-contract-harness.js",
  "fixtures/nexus/orchestration-engine-feature-flags.json",
  "Sprint P QA scripts"
], "P4 runtime absence artifact list");

assertIncludes(doc, [
  "It intentionally does not ban generic words such as",
  "orchestration",
  "plan",
  "review",
  "trace",
  "step",
  "route",
  "language",
  "settings"
], "P4 generic wording exception");

assertIncludes(doc, [
  "live orchestration engine",
  "active orchestrator runtime",
  "orchestration runtime UI",
  "orchestration review buttons",
  "orchestration trace preview UI",
  "step queue runtime UI",
  "step runner runtime",
  "event handlers",
  "typed route mutation",
  "voice route mutation",
  "automatic route changes from selectedToolId metadata",
  "automatic step chaining",
  "executable step runners",
  "background execution",
  "provider adapter execution",
  "raw adapter calls",
  "silent provider handoff",
  "automatic connector execution",
  "autonomous high-risk orchestration",
  "orchestration from raw intent",
  "plan-based orchestration execution",
  "selectedToolId-based orchestration execution",
  "context-based orchestration execution",
  "ambiguous prompt execution",
  "policy bypass from orchestration",
  "confirmation bypass from orchestration",
  "permission bypass from orchestration",
  "medical diagnosis from orchestration",
  "pharmacy or prescription execution from orchestration",
  "payment or marketplace transaction execution from orchestration",
  "emergency dispatch from orchestration",
  "contact or message execution from orchestration",
  "location or camera activation from orchestration",
  "permission prompts",
  "audit writes",
  "backend writes",
  "localStorage or sessionStorage writes",
  "fetch or network calls",
  "provider handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "payment execution",
  "marketplace transactions",
  "location sharing",
  "camera or microphone activation",
  "health, medical, pharmacy, prescription, or FHIR execution",
  "appointment scheduling",
  "transportation dispatch",
  "emergency dispatch",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "P4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_P1_ORCHESTRATION_ENGINE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_P2_ORCHESTRATION_ENGINE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_P3_ORCHESTRATION_ENGINE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_ORCHESTRATION_ENGINE_READINESS_CONTRACT_PHASE_68.md"],
  ["public", "nexus-orchestration-engine-readiness-contract.js"],
  ["public", "nexus-orchestration-engine-feature-flag.js"],
  ["fixtures", "nexus", "orchestration-engine-feature-flags.json"],
  ["scripts", "nexus-sprint-p3-orchestration-engine-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `P4 requires artifact: ${requiredPath.join("/")}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-orchestration-engine-readiness-contract.js",
  "nexus-orchestration-engine-feature-flag.js",
  "nexus-sprint-p3-orchestration-engine-flag-contract-harness",
  "orchestration-engine-feature-flags.json",
  "NEXUS_ORCHESTRATION_ENGINE_VISIBLE_ENABLED",
  "NexusOrchestrationEngineFeatureFlagContract",
  "normalizeOrchestrationEngineFeatureFlagState",
  "isOrchestrationEngineVisibleFeatureEnabled",
  "orchestrationEngineRuntime",
  "orchestratorRuntime",
  "orchestrationStepRunner",
  "runOrchestration(",
  "executeStep(",
  "chainSteps(",
  "callAdapter(",
  "dispatchEmergency(",
  "nexus-sprint-p4-orchestration-engine-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Orchestration Engine lane artifact: ${term}`);
}

assertIncludes(readinessContract, [
  "ORCHESTRATION_ENGINE_READINESS_CONTRACT",
  "orchestration_engine.readiness.phase_68",
  "ORCHESTRATION_ENGINE_NO_EXECUTION_DEFAULTS",
  "createOrchestrationEngineReadinessContract",
  "executionAllowed: false",
  "liveOrchestrationEngineEnabled: false",
  "autonomousHighRiskOrchestrationEnabled: false",
  "providerAdapterExecutionEnabled: false"
], "Phase 68 Orchestration Engine readiness contract");

assert.equal(DEFAULT_ORCHESTRATION_ENGINE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_ORCHESTRATION_ENGINE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_ORCHESTRATION_ENGINE_FEATURE_FLAG_STATE[field], false, `P4 default ${field} must remain false.`);
}
assert.equal(DEFAULT_ORCHESTRATION_ENGINE_FEATURE_FLAG_STATE.noExecution, true);

const normalizedUnsafeAttempt = normalizeOrchestrationEngineFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true,
  orchestrationReviewAllowed: true,
  orchestrationTracePreviewAllowed: true,
  orchestrationRuntimeAllowed: true,
  liveOrchestrationEngineAllowed: true,
  executableStepsAllowed: true,
  automaticStepChainingAllowed: true,
  backgroundExecutionAllowed: true,
  providerAdapterExecutionAllowed: true,
  rawAdapterCallsAllowed: true,
  silentProviderHandoffAllowed: true,
  autonomousHighRiskOrchestrationAllowed: true,
  orchestrationFromRawIntentAllowed: true,
  planBasedOrchestrationExecutionAllowed: true,
  selectedToolIdOrchestrationExecutionAllowed: true,
  contextBasedOrchestrationExecutionAllowed: true,
  policyBypassAllowed: true,
  confirmationBypassAllowed: true,
  permissionBypassAllowed: true,
  firstTurnExecutionAllowed: true,
  laterTurnExecutionAllowed: true,
  standardUserOrchestrationMutationAllowed: true,
  backendWriteAllowed: true,
  storageWriteAllowed: true,
  networkAllowed: true,
  auditWriteAllowed: true,
  executionAuthority: true,
  noExecution: false
});

assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateOrchestrationEngineFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "P3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "P3 fixtures must remain complete.");

for (const source of [featureFlagModule, p3Harness]) {
  for (const term of [
    "document.",
    "querySelector",
    "addEventListener",
    "fetch(",
    "XMLHttpRequest",
    "localStorage",
    "sessionStorage",
    "indexedDB",
    "navigator.credentials",
    "navigator.geolocation",
    "mediaDevices",
    "window.location",
    "location.href",
    "sendBeacon",
    "setItem",
    "postMessage",
    "window.nativeBridge",
    "nativeBridge.",
    "ACTION_CALL",
    "getUserMedia",
    "openWorkflow(",
    "goSection(",
    "runOrchestration(",
    "executeStep(",
    "chainSteps(",
    "callAdapter(",
    "dispatchEmergency("
  ]) {
    assert(!source.includes(term), `Sprint P contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-p4-orchestration-engine-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint P4 QA.");

console.log("[nexus-sprint-p4-orchestration-engine-runtime-absence-regression-guard-qa] passed");
