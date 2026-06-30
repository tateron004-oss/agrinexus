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
  "nexusOfflineIntelligenceModePrepare",
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
  "function nexusVoiceCommandLoopInitialState",
  "function nexusVoiceCommandLoopNormalizeCommand",
  "function nexusVoiceCommandLoopUpdate",
  "function nexusVoiceCommandLoopComplete",
  "data-nexus-voice-command-loop-status=\"true\"",
  "voiceModeReady",
  "lastHeardCommand",
  "commandConfidence",
  "routedToBrain",
  "pendingConfirmation",
  "spokenStyleResponse",
  "nextPrompt"
].forEach(term => assert(app.includes(term), `voice command loop should include ${term}`));

assert(pkg.scripts["qa:nexus-voice-command-loop"], "package alias should run voice command loop QA");
assert(qaSuite.includes("scripts/nexus-voice-command-loop-qa.js"), "qa-suite should include voice command loop QA");

[
  "SpeechRecognition",
  "webkitSpeechRecognition",
  "navigator.mediaDevices",
  "getUserMedia",
  "navigator.geolocation",
  "window.open",
  "location.href",
  "fetch(",
  "localStorage.setItem",
  "sessionStorage.setItem",
  "ACTION_CALL",
  "Message sent",
  "Call placed",
  "Payment completed",
  "Appointment booked",
  "Provider contacted",
  "Emergency dispatched"
].forEach(term => assert(!runtimeSource.includes(term), `voice command loop runtime must not introduce ${term}`));

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
  function routeVoice(command) {
    const loop = nexusVoiceCommandLoopUpdate(command, { routedToBrain: true });
    const result = nexusOpenDialogueAgentResponse(loop.normalizedCommand || command, { force: true });
    const completed = nexusVoiceCommandLoopComplete(loop, result);
    return { loop, result, completed, card: renderNexusOpenDialogueAgentCard() };
  }
  ({
    normalize: nexusVoiceCommandLoopNormalizeCommand,
    routeVoice,
    state: () => nexusVoiceCommandLoopState,
    reset: () => {
      nexusVoiceCommandLoopState = nexusVoiceCommandLoopInitialState();
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

const normal = sandbox.normalize("Hey Nexus, help me sell maize.");
assert.equal(normal.wakeMatched, true, "wake phrase should be recognized");
assert.equal(normal.normalizedCommand, "help me sell maize.", "wake phrase should be stripped before routing");
assert(normal.commandConfidence >= 0.7, "wake command should have useful confidence");

const cases = [
  ["Hey Nexus, help me sell maize.", "task-request", true],
  ["Nexus, continue.", "continue", true],
  ["Nexus, draft the message.", "communication-boundary", true],
  ["Nexus, confirm.", "confirm", true],
  ["Nexus, cancel that.", "cancel", true],
  ["Nexus, call John.", "communication-boundary", true],
  ["Nexus, I have chest pain and trouble breathing.", "emergency", true]
];

cases.forEach(([prompt, expectedIntent, expectHandled]) => {
  sandbox.reset();
  const { loop, result, completed, card } = sandbox.routeVoice(prompt);
  assert.equal(loop.commandIntent, expectedIntent, `${prompt} should classify as ${expectedIntent}`);
  assert.equal(completed.voiceModeReady, true, `${prompt} should keep voice mode ready`);
  assert.equal(completed.executionAuthority, false, `${prompt} must not grant execution authority`);
  assert.equal(completed.providerHandoffAuthorized, false, `${prompt} must not authorize provider handoff`);
  assert.equal(Boolean(result?.handled), expectHandled, `${prompt} should route through Nexus brain`);
  assert(card.includes("data-nexus-voice-command-loop-status=\"true\""), `${prompt} should render voice loop status`);
  assert(card.includes("data-execution-authority=\"false\""), `${prompt} card should remain non-authoritative`);
  assert(!/message sent|call placed|appointment booked|payment completed|provider contacted|emergency dispatched/i.test(completed.spokenStyleResponse), `${prompt} must not make a false execution claim`);
});

sandbox.reset();
const callResult = sandbox.routeVoice("Nexus, call John.");
assert(callResult.completed.spokenStyleResponse.includes("will not send, call, or contact anyone automatically"), "call command should keep communication boundary");
assert(callResult.result.task?.actionAdapterDecision?.adapterId === "call.adapter", "call command should still select call adapter");
assert.equal(callResult.result.task.actionAdapterDecision.executed, false, "call adapter must remain non-executing");

sandbox.reset();
const emergencyResult = sandbox.routeVoice("Nexus, I have chest pain and trouble breathing.");
assert(emergencyResult.completed.spokenStyleResponse.includes("Please contact local emergency services now"), "emergency prompt should keep emergency override language");
assert.equal(emergencyResult.completed.executionAuthority, false, "emergency prompt must not dispatch");

console.log("Nexus voice command loop QA passed");
console.log("- wake-word normalization, command confidence, brain routing, confirmation boundaries, emergency override, and no-execution guarantees verified");
