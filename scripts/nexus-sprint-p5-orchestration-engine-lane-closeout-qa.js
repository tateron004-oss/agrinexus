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

const docName = "NEXUS_SPRINT_P5_ORCHESTRATION_ENGINE_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-p5-orchestration-engine-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint P5 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint P5 QA script must exist.");

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
  "Sprint P5",
  "e7943bdb5c48ed308b4a0fa5de16d13bb39d982c",
  "documentation and deterministic QA only",
  "Sprint P Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint Q1 - Natural Response Generation Runtime Activation Readiness Gate"
], "P5 closeout doc");

assertIncludes(doc, [
  "Orchestration Engine runtime activation readiness gate",
  "Orchestration Engine feature flag contract",
  "Orchestration Engine flag contract harness",
  "Orchestration Engine runtime absence regression guard",
  "Orchestration Engine lane closeout"
], "P5 sprint summary");

assertIncludes(doc, [
  "Orchestration Engine readiness is not runtime activation",
  "Orchestration Engine visibility readiness is not orchestration authority",
  "orchestration metadata is not consent, identity, role authorization, provider authorization, provider availability, step approval, or execution approval",
  "planner metadata must remain non-authoritative context",
  "selectedToolId metadata must remain non-authoritative context",
  "provider metadata must remain non-authoritative context",
  "orchestration cannot authorize, stage, dispatch, or execute an action by itself",
  "ambiguous prompts must clarify rather than infer high-impact intent from orchestration metadata",
  "enabled: false",
  "visibleUiAllowed: false",
  "orchestrationReviewAllowed: false",
  "orchestrationTracePreviewAllowed: false",
  "orchestrationRuntimeAllowed: false",
  "liveOrchestrationEngineAllowed: false",
  "executableStepsAllowed: false",
  "automaticStepChainingAllowed: false",
  "backgroundExecutionAllowed: false",
  "providerAdapterExecutionAllowed: false",
  "rawAdapterCallsAllowed: false",
  "silentProviderHandoffAllowed: false",
  "autonomousHighRiskOrchestrationAllowed: false",
  "orchestrationFromRawIntentAllowed: false",
  "planBasedOrchestrationExecutionAllowed: false",
  "selectedToolIdOrchestrationExecutionAllowed: false",
  "contextBasedOrchestrationExecutionAllowed: false",
  "policyBypassAllowed: false",
  "confirmationBypassAllowed: false",
  "permissionBypassAllowed: false",
  "firstTurnExecutionAllowed: false",
  "laterTurnExecutionAllowed: false",
  "standardUserOrchestrationMutationAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "auditWriteAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "unsafe authority attempts normalize back to no-execution values",
  "no action has been taken"
], "P5 no-authority and no-execution language");

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
  "identity verification from orchestration",
  "role or permission elevation from orchestration",
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
], "P5 blocked runtime categories");

const requiredDocs = [
  "NEXUS_SPRINT_P1_ORCHESTRATION_ENGINE_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "NEXUS_SPRINT_P2_ORCHESTRATION_ENGINE_FEATURE_FLAG_CONTRACT.md",
  "NEXUS_SPRINT_P3_ORCHESTRATION_ENGINE_FLAG_CONTRACT_HARNESS.md",
  "NEXUS_SPRINT_P4_ORCHESTRATION_ENGINE_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "NEXUS_ORCHESTRATION_ENGINE_READINESS_CONTRACT_PHASE_68.md",
  "NEXUS_NATURAL_RESPONSE_GENERATION_READINESS_CONTRACT_PHASE_69.md"
];

for (const requiredDoc of requiredDocs) {
  assert(exists("docs", requiredDoc), `Sprint P5 requires prior or next-lane doc: ${requiredDoc}`);
}

const requiredScripts = [
  "nexus-sprint-p1-orchestration-engine-runtime-activation-readiness-gate-qa.js",
  "nexus-sprint-p2-orchestration-engine-feature-flag-contract-qa.js",
  "nexus-sprint-p3-orchestration-engine-flag-contract-harness-qa.js",
  "nexus-sprint-p4-orchestration-engine-runtime-absence-regression-guard-qa.js"
];

for (const requiredScript of requiredScripts) {
  assert(exists("scripts", requiredScript), `Sprint P5 requires prior Sprint P QA: ${requiredScript}`);
  assert(qaSuite.includes(`scripts/${requiredScript}`), `qa-suite must include prior Sprint P QA: ${requiredScript}`);
}

assert(exists("public", "nexus-orchestration-engine-readiness-contract.js"), "Sprint P5 requires Phase 68 Orchestration Engine readiness contract.");
assert(exists("public", "nexus-orchestration-engine-feature-flag.js"), "Sprint P5 requires P2 feature flag contract.");
assert(exists("fixtures", "nexus", "orchestration-engine-feature-flags.json"), "Sprint P5 requires P3 feature flag fixture.");
assert(exists("public", "nexus-natural-response-generation-readiness-contract.js"), "Sprint P5 requires Phase 69 Natural Response Generation readiness contract.");

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

assertIncludes(featureFlagModule, [
  "DEFAULT_ORCHESTRATION_ENGINE_FEATURE_FLAG_STATE",
  "NEXUS_ORCHESTRATION_ENGINE_VISIBLE_ENABLED",
  "normalizeOrchestrationEngineFeatureFlagState",
  "isOrchestrationEngineVisibleFeatureEnabled",
  "executionAuthority",
  "noExecution"
], "P2 Orchestration Engine feature flag module");

assertIncludes(p3Harness, [
  "loadOrchestrationEngineFlagFixtures",
  "validateOrchestrationEngineFlagFixtures"
], "P3 Orchestration Engine harness");

assert.equal(DEFAULT_ORCHESTRATION_ENGINE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_ORCHESTRATION_ENGINE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_ORCHESTRATION_ENGINE_FEATURE_FLAG_STATE[field], false, `P5 default ${field} must remain false.`);
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
  "nexus-sprint-p5-orchestration-engine-lane-closeout"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Orchestration Engine lane artifact: ${term}`);
}

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

const alias = "qa:nexus-sprint-p5-orchestration-engine-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint P5 QA.");

console.log("[nexus-sprint-p5-orchestration-engine-lane-closeout-qa] passed");
