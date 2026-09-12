const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  TOOL_PROVIDER_SELECTION_REQUIRED_PRECONDITIONS,
  TOOL_PROVIDER_SELECTION_RESTRICTED_DOMAINS,
  TOOL_PROVIDER_SELECTION_NO_EXECUTION_DEFAULTS,
  TOOL_PROVIDER_SELECTION_READINESS_CONTRACT,
  createToolProviderSelectionReadinessContract
} = require("../public/nexus-tool-provider-selection-readiness-contract.js");

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

const docName = "NEXUS_SPRINT_O1_TOOL_PROVIDER_SELECTION_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-o1-tool-provider-selection-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint O1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint O1 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contractSource = read("public", "nexus-tool-provider-selection-readiness-contract.js");

assertIncludes(doc, [
  "Sprint O1",
  "ebd18ae983161ba5691c3ed4457c48386cc69d4c",
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
  "Sprint O2 - Tool Provider Selection Feature Flag Contract"
], "O1 readiness gate doc");

assertIncludes(doc, [
  "Sprint N5 - Task Planning Lane Closeout",
  "Phase 67 - Tool/Provider Selection Readiness Contract",
  "Task Planning readiness is not provider selection authority",
  "a selected provider path must never become consent, permission, provider authorization, credential use, handoff approval, or execution approval"
], "O1 relationship language");

assertIncludes(doc, [
  "product owner approval for a selection runtime change",
  "evaluated selection engine version",
  "connector registry entry for every selectable provider",
  "selected tool id trace",
  "provider availability state",
  "policy gate decision",
  "risk tier for selected connector",
  "permission state for selected connector",
  "consent state for selected connector",
  "visible provider display",
  "visible action type display",
  "visible purpose and consequence display",
  "fallback provider path",
  "unsupported provider path",
  "explicit approval for high-risk handoff",
  "cancellation path",
  "audit decision record",
  "no raw adapter calls",
  "no provider selection from raw intent",
  "no silent provider handoff",
  "representative prompt set",
  "multilingual prompt coverage",
  "Standard User prompt coverage",
  "voice prompt coverage",
  "typed prompt coverage",
  "ambiguity fallback",
  "rollback plan",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "O1 activation preconditions");

assertIncludes(doc, [
  "live provider selection engine",
  "connector picker runtime UI",
  "raw adapter calls",
  "provider calls from raw intent",
  "silent provider handoff",
  "automatic connector execution",
  "provider credential use",
  "payment provider selection",
  "medical or pharmacy provider execution",
  "emergency provider dispatch",
  "transportation dispatch provider execution",
  "contact or message provider execution",
  "location or camera provider activation",
  "plan-based provider selection",
  "context-based provider selection",
  "selectedToolId execution authority",
  "policy bypass from selected provider metadata",
  "confirmation bypass from selected provider metadata",
  "permission bypass from selected provider metadata",
  "medical diagnosis from a selected provider",
  "pharmacy or prescription execution from a selected provider",
  "payment or marketplace transaction execution from a selected provider",
  "emergency dispatch from a selected provider",
  "contact or message execution from a selected provider",
  "location or camera activation from a selected provider",
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
], "O1 blocked behavior");

assertIncludes(doc, [
  "no Tool/Provider Selection runtime surface",
  "no provider selection engine module loaded",
  "no provider selection adapter loaded",
  "no selectedToolId-driven route mutation",
  "no selectedToolId-driven risk tier mutation",
  "no selectedToolId-driven provider handoff",
  "no selectedToolId-driven execution, staging, or confirmation bypass",
  "existing confirmation and permission gates untouched"
], "O1 Standard User boundary");

for (const precondition of [
  "connectorRegistryEntry",
  "selectedToolIdTrace",
  "providerAvailabilityState",
  "policyGateDecision",
  "riskTierForSelectedConnector",
  "permissionStateForSelectedConnector",
  "consentStateForSelectedConnector",
  "visibleProviderDisplay",
  "visibleActionTypeDisplay",
  "fallbackProviderPath",
  "unsupportedProviderPath",
  "auditDecisionRecord",
  "noRawAdapterCalls",
  "noProviderSelectionFromRawIntent",
  "noSilentProviderHandoff",
  "regressionSuiteCoverage"
]) {
  assert(TOOL_PROVIDER_SELECTION_REQUIRED_PRECONDITIONS.includes(precondition), `Phase 67 contract must include ${precondition}.`);
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
  assert(TOOL_PROVIDER_SELECTION_RESTRICTED_DOMAINS.includes(domain), `Phase 67 contract must include restricted domain ${domain}.`);
}

for (const field of [
  "liveSelectionEngineEnabled",
  "rawAdapterCallsEnabled",
  "providerCallsFromRawIntentEnabled",
  "silentProviderHandoffEnabled",
  "automaticConnectorExecutionEnabled",
  "providerCredentialUseEnabled",
  "standardUserSelectionMutationAllowed",
  "executionAllowed",
  "liveActionEnabled"
]) {
  assert.equal(TOOL_PROVIDER_SELECTION_NO_EXECUTION_DEFAULTS[field], false, `${field} must default false.`);
  assert.equal(TOOL_PROVIDER_SELECTION_READINESS_CONTRACT[field], false, `${field} must remain false on default contract.`);
  assert(doc.includes(`${field}: false`), `O1 doc must list ${field}: false.`);
}

const unsafeOverride = createToolProviderSelectionReadinessContract({
  actionType: "prepare_provider_path",
  liveSelectionEngineEnabled: true,
  rawAdapterCallsEnabled: true,
  providerCallsFromRawIntentEnabled: true,
  silentProviderHandoffEnabled: true,
  automaticConnectorExecutionEnabled: true,
  providerCredentialUseEnabled: true,
  standardUserSelectionMutationAllowed: true,
  executionAllowed: true,
  liveActionEnabled: true
});

assert.equal(unsafeOverride.actionType, "prepare_provider_path");
assert.equal(unsafeOverride.phase, "67");
assert.equal(unsafeOverride.readinessStatus, "blocked");
assert.equal(unsafeOverride.riskTier, "high");
for (const field of Object.keys(TOOL_PROVIDER_SELECTION_NO_EXECUTION_DEFAULTS)) {
  assert.equal(unsafeOverride[field], false, `Factory must force unsafe override ${field} back to false.`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-tool-provider-selection-readiness-contract.js",
  "NexusToolProviderSelectionReadinessContract",
  "TOOL_PROVIDER_SELECTION_READINESS_CONTRACT",
  "createToolProviderSelectionReadinessContract",
  "toolProviderSelectionRuntime",
  "providerSelectionRuntime",
  "providerSelectionAdapter",
  "selectAndExecuteProvider",
  "openProvider(",
  "callAdapter(",
  "rawAdapterCall",
  "silentProviderHandoff",
  "nexus-sprint-o1-tool-provider-selection-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Tool/Provider Selection lane artifact: ${term}`);
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
  "openProvider(",
  "callAdapter(",
  "selectAndExecuteProvider("
]) {
  assert(!contractSource.includes(term), `Phase 67 contract must not include runtime API: ${term}`);
}

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_N5_TASK_PLANNING_LANE_CLOSEOUT.md"],
  ["docs", "NEXUS_TOOL_PROVIDER_SELECTION_READINESS_CONTRACT_PHASE_67.md"],
  ["public", "nexus-tool-provider-selection-readiness-contract.js"],
  ["scripts", "nexus-tool-provider-selection-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `O1 requires artifact: ${requiredPath.join("/")}`);
}

const alias = "qa:nexus-sprint-o1-tool-provider-selection-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint O1 QA.");

console.log("[nexus-sprint-o1-tool-provider-selection-runtime-activation-readiness-gate-qa] passed");
