const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  ORCHESTRATION_ENGINE_REQUIRED_PRECONDITIONS,
  ORCHESTRATION_ENGINE_RESTRICTED_DOMAINS,
  ORCHESTRATION_ENGINE_NO_EXECUTION_DEFAULTS,
  ORCHESTRATION_ENGINE_READINESS_CONTRACT,
  createOrchestrationEngineReadinessContract
} = require("../public/nexus-orchestration-engine-readiness-contract.js");

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

const docName = "NEXUS_SPRINT_P1_ORCHESTRATION_ENGINE_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-p1-orchestration-engine-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint P1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint P1 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contractSource = read("public", "nexus-orchestration-engine-readiness-contract.js");

assertIncludes(doc, [
  "Sprint P1",
  "024a89d1956249ebc789be46180bfe76777cf2a8",
  "documentation and deterministic QA only",
  "Relationship To Prior Lanes",
  "Runtime Activation Preconditions",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Standard User Boundary",
  "Required Contract Invariants",
  "Restricted Domains",
  "Safe Copy Boundary",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint P2 - Orchestration Engine Feature Flag Contract"
], "P1 readiness gate doc");

assertIncludes(doc, [
  "Sprint O5 - Tool Provider Selection Lane Closeout",
  "Phase 68 - Orchestration Engine Readiness Contract",
  "Tool Provider Selection readiness is not orchestration authority",
  "an orchestration trace must never become consent, permission, provider authorization, credential use, handoff approval, step approval, or execution approval"
], "P1 relationship language");

assertIncludes(doc, [
  "product owner approval for an orchestration runtime change",
  "evaluated orchestrator engine version",
  "approved step list",
  "visible step list display",
  "visible current step display",
  "risk tier for each step",
  "policy decision for each step",
  "permission state for each step",
  "consent state for each step",
  "explicit approval for each high-risk step",
  "audit event for each step",
  "provider availability for each step",
  "connector registry entry for each provider step",
  "visible provider display for each provider step",
  "visible action type display for each step",
  "visible purpose and consequence display for each step",
  "step cancellation path",
  "full orchestration cancellation path",
  "step failure fallback",
  "orchestration stop fallback",
  "rollback or stop plan",
  "reviewable orchestration trace",
  "no autonomous high-risk step",
  "no raw adapter calls",
  "no background execution",
  "no silent provider handoff",
  "representative prompt set",
  "multilingual prompt coverage",
  "Standard User prompt coverage",
  "voice prompt coverage",
  "typed prompt coverage",
  "ambiguity fallback",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "P1 activation preconditions");

assertIncludes(doc, [
  "live orchestration engine",
  "orchestration runtime UI",
  "orchestration review buttons",
  "step queue runtime UI",
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
  "policy bypass from orchestration metadata",
  "confirmation bypass from orchestration metadata",
  "permission bypass from orchestration metadata",
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
], "P1 blocked behavior");

assertIncludes(doc, [
  "no Orchestration Engine runtime surface",
  "no orchestration engine module loaded",
  "no orchestration step runner loaded",
  "no orchestration queue or trace rendered from Sprint P artifacts",
  "no orchestration-driven route mutation",
  "no orchestration-driven risk tier mutation",
  "no orchestration-driven provider handoff",
  "no orchestration-driven execution, staging, or confirmation bypass",
  "existing confirmation and permission gates untouched"
], "P1 Standard User boundary");

for (const precondition of [
  "approvedStepList",
  "riskTierForEachStep",
  "policyDecisionForEachStep",
  "permissionStateForEachStep",
  "explicitApprovalForEachHighRiskStep",
  "auditEventForEachStep",
  "providerAvailabilityForEachStep",
  "stepCancellationPath",
  "stepFailureFallback",
  "noAutonomousHighRiskStep",
  "noRawAdapterCalls",
  "noBackgroundExecution",
  "noSilentProviderHandoff",
  "reviewableOrchestrationTrace",
  "rollbackOrStopPlan",
  "regressionSuiteCoverage"
]) {
  assert(ORCHESTRATION_ENGINE_REQUIRED_PRECONDITIONS.includes(precondition), `Phase 68 contract must include ${precondition}.`);
}

for (const domain of [
  "healthcare",
  "medical_records",
  "pharmacy",
  "payments",
  "location",
  "communications",
  "provider_contact",
  "marketplace_transactions",
  "emergency",
  "transportation_dispatch",
  "identity",
  "account_profile",
  "role_authorization",
  "minors_family_support"
]) {
  assert(ORCHESTRATION_ENGINE_RESTRICTED_DOMAINS.includes(domain), `Phase 68 contract must include restricted domain ${domain}.`);
}

for (const field of [
  "liveOrchestrationEngineEnabled",
  "autonomousHighRiskOrchestrationEnabled",
  "backgroundExecutionEnabled",
  "providerAdapterExecutionEnabled",
  "silentProviderHandoffEnabled",
  "rawAdapterCallsEnabled",
  "standardUserOrchestrationMutationAllowed",
  "executionAllowed",
  "liveActionEnabled"
]) {
  assert.equal(ORCHESTRATION_ENGINE_NO_EXECUTION_DEFAULTS[field], false, `${field} must default false.`);
  assert.equal(ORCHESTRATION_ENGINE_READINESS_CONTRACT[field], false, `${field} must remain false on default contract.`);
  assert(doc.includes(`${field}: false`), `P1 doc must list ${field}: false.`);
}

const unsafeOverride = createOrchestrationEngineReadinessContract({
  actionType: "prepare_orchestration_trace",
  liveOrchestrationEngineEnabled: true,
  autonomousHighRiskOrchestrationEnabled: true,
  backgroundExecutionEnabled: true,
  providerAdapterExecutionEnabled: true,
  silentProviderHandoffEnabled: true,
  rawAdapterCallsEnabled: true,
  standardUserOrchestrationMutationAllowed: true,
  executionAllowed: true,
  liveActionEnabled: true
});

assert.equal(unsafeOverride.actionType, "prepare_orchestration_trace");
assert.equal(unsafeOverride.phase, "68");
assert.equal(unsafeOverride.readinessStatus, "blocked");
assert.equal(unsafeOverride.riskTier, "restricted");
for (const field of Object.keys(ORCHESTRATION_ENGINE_NO_EXECUTION_DEFAULTS)) {
  assert.equal(unsafeOverride[field], false, `Factory must force unsafe override ${field} back to false.`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-orchestration-engine-readiness-contract.js",
  "NexusOrchestrationEngineReadinessContract",
  "ORCHESTRATION_ENGINE_READINESS_CONTRACT",
  "createOrchestrationEngineReadinessContract",
  "orchestrationEngineRuntime",
  "orchestratorRuntime",
  "orchestrationStepRunner",
  "runOrchestration(",
  "executeStep(",
  "chainSteps(",
  "callAdapter(",
  "dispatchEmergency(",
  "nexus-sprint-p1-orchestration-engine-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Orchestration Engine lane artifact: ${term}`);
}

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
  "callAdapter(",
  "dispatchEmergency("
]) {
  assert(!contractSource.includes(term), `Phase 68 contract must not include runtime API: ${term}`);
}

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_O5_TOOL_PROVIDER_SELECTION_LANE_CLOSEOUT.md"],
  ["docs", "NEXUS_ORCHESTRATION_ENGINE_READINESS_CONTRACT_PHASE_68.md"],
  ["public", "nexus-orchestration-engine-readiness-contract.js"],
  ["scripts", "nexus-orchestration-engine-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `P1 requires artifact: ${requiredPath.join("/")}`);
}

const alias = "qa:nexus-sprint-p1-orchestration-engine-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint P1 QA.");

console.log("[nexus-sprint-p1-orchestration-engine-runtime-activation-readiness-gate-qa] passed");
