const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

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

const docName = "NEXUS_SPRINT_AG1_FIELD_AGENT_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-ag1-field-agent-mode-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint AG1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint AG1 QA script must exist.");

const doc = read("docs", docName);
const af5Doc = read("docs", "NEXUS_SPRINT_AF5_AGRITRADE_MARKETPLACE_MODE_LANE_CLOSEOUT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fieldContractSource = read("public", "nexus-field-agent-mode-readiness-contract.js");
const fieldContract = require("../public/nexus-field-agent-mode-readiness-contract.js");

assertIncludes(doc, [
  "Sprint AG1",
  "04f03608ef392015904fee3f800b8c5e86f34c77",
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
  "Sprint AG2 - Field Agent Mode Feature Flag Contract"
], "AG1 readiness doc");

assertIncludes(doc, [
  "Sprint AF5 - AgriTrade Marketplace Mode Lane Closeout",
  "Phase 85 - Field Agent Mode Readiness Contract",
  "Field Agent Mode readiness is not field dispatch authority, offline capture authority, case intake authority, task assignment authority, location authority, camera authority, microphone authority, provider authority, communications authority, transportation authority, emergency authority, medical authority, marketplace authority, identity authority, product owner approval, user consent, provider confirmation, field supervisor approval, human review approval, audit approval, or execution authority"
], "AG1 relationship section");

assertIncludes(doc, [
  "product owner approval for a Field Agent Mode runtime change",
  "verified field source, partner, supervisor, program, case, task, or regulated source",
  "verified live field connector or partner availability state",
  "source attribution",
  "freshness label",
  "confidence label",
  "user consent boundary",
  "field worker role and permission check",
  "supervisor or admin review path when needed",
  "explicit user approval for every field, location, camera, microphone, contact, dispatch, submission, or partner-dependent action",
  "provider, supervisor, program partner, transportation partner, or field operations confirmation before any partner-facing workflow",
  "visible cancellation path",
  "audit decision record",
  "safe fallback path",
  "no unsupported live claim",
  "no completed action claim",
  "no auto field dispatch",
  "no offline capture submission",
  "no case creation, task assignment, location sharing, camera activation, microphone activation, provider contact, call, message, payment, marketplace transaction, healthcare, pharmacy, prescription, refill, transportation dispatch, emergency dispatch, or account/profile mutation from Field Agent Mode",
  "no communications execution",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "AG1 runtime activation preconditions");

assertIncludes(doc, [
  "active Field Agent Mode runtime",
  "live field connector activation",
  "field source connector runtime",
  "offline capture runtime",
  "survey connector runtime",
  "case intake connector runtime",
  "task assignment connector runtime",
  "location connector runtime",
  "camera connector runtime",
  "microphone connector runtime",
  "provider connector runtime",
  "communications connector runtime",
  "transportation connector runtime",
  "field dispatch runtime",
  "offline capture submission runtime",
  "case creation runtime",
  "task assignment runtime",
  "location sharing runtime",
  "camera activation runtime",
  "microphone activation runtime",
  "provider contact runtime",
  "call execution runtime",
  "message execution runtime",
  "completed action claims",
  "typed route mutation",
  "voice route mutation",
  "policy bypass from Field Agent Mode metadata",
  "confirmation bypass from Field Agent Mode metadata",
  "permission bypass from Field Agent Mode metadata",
  "permission prompts",
  "audit writes",
  "backend writes",
  "localStorage or sessionStorage writes",
  "fetch or network calls",
  "provider handoff",
  "supervisor handoff",
  "field partner handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "AG1 blocked runtime behavior");

assertIncludes(doc, [
  "I can help prepare field support options.",
  "Field Agent Mode is not connected yet.",
  "This requires a verified field source or partner.",
  "This requires role permission, consent, and approval.",
  "I cannot submit field capture yet.",
  "I cannot share location, use the camera, or contact a provider yet.",
  "No action has been taken.",
  "I dispatched a field agent.",
  "I submitted your field report.",
  "I created the case.",
  "I assigned the task.",
  "I shared your location.",
  "I opened your camera.",
  "I contacted the provider.",
  "I sent the message.",
  "I arranged transportation.",
  "I completed the action."
], "AG1 safe copy boundary");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AF5_AGRITRADE_MARKETPLACE_MODE_LANE_CLOSEOUT.md"],
  ["docs", "NEXUS_FIELD_AGENT_MODE_READINESS_CONTRACT_PHASE_85.md"],
  ["public", "nexus-field-agent-mode-readiness-contract.js"],
  ["scripts", "nexus-field-agent-mode-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `AG1 requires artifact: ${requiredPath.join("/")}`);
}

assertIncludes(af5Doc, [
  "Sprint AG1 - Field Agent Mode Runtime Activation Readiness Gate"
], "AF5 closeout next sprint recommendation");

assertIncludes(fieldContractSource, [
  "FIELD_AGENT_MODE_READINESS_CONTRACT",
  "field-agent-mode.readiness.phase_85",
  "FIELD_AGENT_MODE_NO_EXECUTION_DEFAULTS",
  "createFieldAgentModeReadinessContract",
  "offline capture safe",
  "location",
  "communications",
  "provider_contact",
  "regulated_execution"
], "Phase 85 Field Agent Mode readiness contract");

assert.equal(fieldContract.FIELD_AGENT_MODE_READINESS_CONTRACT.readinessStatus, "blocked");
assert.equal(fieldContract.FIELD_AGENT_MODE_READINESS_CONTRACT.riskTier, "high");
assert.equal(fieldContract.FIELD_AGENT_MODE_READINESS_CONTRACT.acceptanceTarget, "offline capture safe");
assert.equal(fieldContract.FIELD_AGENT_MODE_READINESS_CONTRACT.liveConnectorEnabled, false);
assert.equal(fieldContract.FIELD_AGENT_MODE_READINESS_CONTRACT.providerExecutionEnabled, false);
assert.equal(fieldContract.FIELD_AGENT_MODE_READINESS_CONTRACT.regulatedActionEnabled, false);
assert.equal(fieldContract.FIELD_AGENT_MODE_READINESS_CONTRACT.silentActionAllowed, false);
assert.equal(fieldContract.FIELD_AGENT_MODE_READINESS_CONTRACT.backgroundExecutionAllowed, false);
assert.equal(fieldContract.FIELD_AGENT_MODE_READINESS_CONTRACT.standardUserRuntimeMutationAllowed, false);
assert.equal(fieldContract.FIELD_AGENT_MODE_READINESS_CONTRACT.storageSideEffectAllowed, false);
assert.equal(fieldContract.FIELD_AGENT_MODE_READINESS_CONTRACT.networkSideEffectAllowed, false);
assert.equal(fieldContract.FIELD_AGENT_MODE_READINESS_CONTRACT.executionAllowed, false);
assert.equal(fieldContract.FIELD_AGENT_MODE_READINESS_CONTRACT.liveActionEnabled, false);

const sample = fieldContract.createFieldAgentModeReadinessContract({
  actionType: "prepare_field_agent_mode_summary",
  liveConnectorEnabled: true,
  providerExecutionEnabled: true,
  regulatedActionEnabled: true,
  executionAllowed: true,
  liveActionEnabled: true
});
assert.equal(sample.actionType, "prepare_field_agent_mode_summary");
assert.equal(sample.phase, "85");
assert.equal(sample.readinessStatus, "blocked");
assert.equal(sample.riskTier, "high");
assert.equal(sample.liveConnectorEnabled, false);
assert.equal(sample.providerExecutionEnabled, false);
assert.equal(sample.regulatedActionEnabled, false);
assert.equal(sample.executionAllowed, false);
assert.equal(sample.liveActionEnabled, false);

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-field-agent-mode-readiness-contract.js",
  "NexusFieldAgentModeReadinessContract",
  "FIELD_AGENT_MODE_READINESS_CONTRACT",
  "field-agent-mode.readiness.phase_85",
  "createFieldAgentModeReadinessContract",
  "fieldAgentModeRuntime",
  "liveFieldAgentModeRuntime",
  "liveFieldConnectorRuntime",
  "offlineCaptureRuntime",
  "submitFieldCapture(",
  "dispatchFieldAgent(",
  "createFieldCase(",
  "assignFieldTask(",
  "shareFieldLocation(",
  "activateFieldCamera(",
  "activateFieldMicrophone(",
  "contactFieldProvider(",
  "nexus-sprint-ag1-field-agent-mode-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Field Agent Mode lane artifact: ${term}`);
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
  "navigator.geolocation",
  "mediaDevices",
  "window.location",
  "location.href",
  "open(",
  "sendBeacon",
  "setItem",
  "postMessage",
  "window.nativeBridge",
  "nativeBridge.",
  "ACTION_CALL",
  "getUserMedia",
  "openWorkflow(",
  "goSection(",
  "submitFieldCapture(",
  "dispatchFieldAgent(",
  "createFieldCase(",
  "assignFieldTask(",
  "shareFieldLocation(",
  "activateFieldCamera(",
  "activateFieldMicrophone(",
  "contactFieldProvider("
]) {
  assert(!fieldContractSource.includes(term), `Phase 85 contract must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-ag1-field-agent-mode-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AG1 QA.");
assert(qaSuite.includes("scripts/nexus-field-agent-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 85 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-af5-agritrade-marketplace-mode-lane-closeout-qa.js"), "qa-suite must continue to include Sprint AF5 QA.");

console.log("[nexus-sprint-ag1-field-agent-mode-runtime-activation-readiness-gate-qa] passed");
