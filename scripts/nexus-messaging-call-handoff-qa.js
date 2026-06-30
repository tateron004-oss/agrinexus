const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function extractFunction(source, name) {
  const start = source.indexOf(`function ${name}`);
  assert(start >= 0, `${name} should exist`);
  const signatureEnd = source.indexOf(")", start);
  const bodyStart = source.indexOf("{", signatureEnd);
  assert(signatureEnd > start && bodyStart > signatureEnd, `${name} should have a body`);
  let depth = 0;
  for (let index = bodyStart; index < source.length; index += 1) {
    if (source[index] === "{") depth += 1;
    if (source[index] === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }
  throw new Error(`${name} should be extractable`);
}

const app = read("public", "app.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

const functionNames = [
  "nexusOpenAgentNormalizeText",
  "nexusOpenAgentCreateId",
  "nexusOpenDialogueCapabilityMatrix",
  "nexusOpenDialogueRiskClassifier",
  "nexusOpenDialogueEmergencyResponse",
  "nexusOpenDialogueInterpretCommand",
  "nexusOpenDialoguePlanSteps",
  "nexusOpenDialogueActionLabel",
  "nexusOpenDialogueLocalOutput",
  "nexusOpenDialogueActionAllowed",
  "nexusOpenDialogueInferLocalActionType",
  "nexusOpenDialogueArtifactContent",
  "nexusOpenDialogueLocalActionTitle",
  "nexusOpenDialogueOutcomeForAction",
  "nexusOpenDialogueExecuteLocalAction",
  "nexusHigherIntelligenceMemoryMatches",
  "nexusHigherIntelligenceCapabilityChoice",
  "nexusHigherIntelligenceSelfCheck",
  "nexusHigherIntelligenceReason",
  "nexusHigherIntelligenceRecordLearning",
  "nexusPersistentTaskMemoryLoad",
  "nexusPersistentTaskMemoryCanPersist",
  "nexusPersistentTaskMemorySnapshot",
  "nexusPersistentTaskMemorySave",
  "nexusPersistentTaskMemoryRecord",
  "nexusPersistentTaskMemoryRecall",
  "nexusRealActionAdaptersRegistry",
  "nexusRealActionAdapterSelect",
  "nexusRealActionAdapterPrepare",
  "nexusRealActionAdapterExecute",
  "nexusVoiceCommandLoopInitialState",
  "nexusVoiceCommandLoopNormalizeCommand",
  "nexusVoiceCommandLoopNextPrompt",
  "nexusVoiceCommandLoopSpokenStyleResponse",
  "nexusVoiceCommandLoopUpdate",
  "nexusVoiceCommandLoopComplete",
  "nexusReminderCalendarParseSchedule",
  "nexusReminderCalendarPrepare",
  "nexusMapLocationExtractFallback",
  "nexusMapLocationPermissionPrepare",
  "nexusMessagingCallHandoffPrepare",
  "nexusProviderDirectoryIntegrationPrepare",
  "nexusOpenDialogueCreateTask",
  "nexusOpenDialogueAgentQuestion",
  "nexusOpenDialogueUpdateScorecard",
  "nexusOpenDialogueSetActiveTask",
  "nexusOpenDialogueActiveTask",
  "nexusOpenDialogueHandleFollowUp",
  "nexusOpenDialogueAgentResponse",
  "renderNexusOpenDialogueAgentCard"
];

const runtimeSource = functionNames.map(name => extractFunction(app, name)).join("\n");

[
  "function nexusMessagingCallHandoffPrepare",
  "communicationHandoff",
  "data-nexus-messaging-call-handoff-status=\"true\"",
  "data-executed=\"false\"",
  "No message was sent.",
  "No call was placed."
].forEach(term => assert(app.includes(term), `messaging/call handoff should include ${term}`));

assert(pkg.scripts["qa:nexus-messaging-call-handoff"], "package alias should run messaging/call QA");
assert(qaSuite.includes("scripts/nexus-messaging-call-handoff-qa.js"), "qa-suite should include messaging/call QA");

[
  "window.open",
  "location.href",
  "fetch(",
  "navigator.geolocation",
  "getUserMedia",
  "localStorage.setItem",
  "sessionStorage.setItem",
  "ACTION_CALL",
  "Message sent",
  "Call placed",
  "Provider contacted",
  "Emergency dispatched"
].forEach(term => assert(!runtimeSource.includes(term), `messaging/call runtime must not introduce ${term}`));

const sandbox = vm.runInNewContext(`
  let experienceMode = "user";
  const storage = {};
  const sessionStorage = {
    getItem: key => Object.prototype.hasOwnProperty.call(storage, key) ? storage[key] : null,
    setItem: (key, value) => { storage[key] = String(value); }
  };
  let nexusVoiceCommandLoopState = nexusVoiceCommandLoopInitialState();
  let nexusOpenDialogueAgentState = {
    schemaVersion: "nexus-open-dialogue-agent-state.v1",
    activeTaskId: null,
    tasks: [],
    taskHistory: [],
    lastOutcome: "",
    lastDraft: "",
    persistentTaskMemory: nexusPersistentTaskMemoryLoad(),
    lastHigherReasoning: null,
    learningSignals: [],
    scorecard: null
  };
  const htmlSafe = value => String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
  ${runtimeSource}
  ({
    response: nexusOpenDialogueAgentResponse,
    card: renderNexusOpenDialogueAgentCard,
    reset: () => {
      nexusOpenDialogueAgentState = {
        schemaVersion: "nexus-open-dialogue-agent-state.v1",
        activeTaskId: null,
        tasks: [],
        taskHistory: [],
        lastOutcome: "",
        lastDraft: "",
        persistentTaskMemory: nexusPersistentTaskMemoryLoad(),
        lastHigherReasoning: null,
        learningSignals: [],
        scorecard: null
      };
    }
  });
`);

const cases = [
  ["Nexus, message Mary that I need help.", "message", "Mary that I need help", "messaging.adapter", "Message draft prepared. No message was sent."],
  ["Make it more professional.", null, null, null, null],
  ["Nexus, call John.", "call", "John", "call.adapter", "Call preparation created. No call was placed."],
  ["Nexus, contact a buyer about my maize.", "message", "buyer/seller", "messaging.adapter", "Message draft prepared. No message was sent."],
  ["Nexus, message the doctor about my mother.", "message", "provider/clinic", "messaging.adapter", "Message draft prepared. No message was sent."]
];

cases.forEach(([prompt, type, recipient, adapterId, outcome]) => {
  sandbox.reset();
  const result = sandbox.response(prompt, { force: true });
  assert(result?.handled, `${prompt} should be handled`);
  if (!type) {
    assert(!result.task?.communicationHandoff, `${prompt} should not create orphan communication handoff without a communication intent`);
    return;
  }
  const handoff = result.task?.communicationHandoff;
  assert(handoff, `${prompt} should produce communication handoff`);
  assert.equal(handoff.type, type, `${prompt} type should match`);
  assert.equal(handoff.recipient, recipient, `${prompt} recipient should match`);
  assert.equal(result.task.actionAdapterDecision?.adapterId, adapterId, `${prompt} should select ${adapterId}`);
  assert.equal(handoff.confirmationRequired, true, `${prompt} should require confirmation`);
  assert.equal(handoff.adapterImplemented, false, `${prompt} adapter should be unavailable in this phase`);
  assert.equal(handoff.executed, false, `${prompt} must not execute`);
  assert.equal(handoff.fallbackOnly, true, `${prompt} must remain fallback-only`);
  assert.equal(handoff.outcomeMessage, outcome, `${prompt} outcome should be honest`);
  assert.equal(handoff.executionAuthority, false, `${prompt} must not grant execution authority`);
  assert.equal(handoff.providerHandoffAuthorized, false, `${prompt} must not authorize provider handoff`);
  const card = sandbox.card();
  assert(card.includes("data-nexus-messaging-call-handoff-status=\"true\""), `${prompt} should render communication status`);
  assert(card.includes("data-executed=\"false\""), `${prompt} card should state executed false`);
});

sandbox.reset();
const emergency = sandbox.response("Nexus, I have chest pain and trouble breathing.", { force: true });
assert(emergency?.handled, "emergency prompt should be handled");
assert.equal(emergency.task?.communicationHandoff, null, "emergency prompt should not create communication handoff");
assert.equal(emergency.task?.status, "emergency_stopped", "emergency prompt should stop normal workflow");

console.log("Nexus messaging/call handoff QA passed");
console.log("- message drafts, call prep, confirmation requirement, fallback-only adapters, emergency stop, and no-execution guarantees verified");
