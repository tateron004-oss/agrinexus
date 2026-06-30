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
  "persistentTaskMemory: nexusPersistentTaskMemoryLoad()",
  "function nexusPersistentTaskMemoryRecord",
  "function nexusPersistentTaskMemoryRecall",
  "data-nexus-persistent-task-memory-status=\"true\"",
  "executionAuthority: false",
  "providerHandoffAuthorized: false"
].forEach(term => assert(app.includes(term), `persistent task memory should include ${term}`));

assert(pkg.scripts["qa:nexus-persistent-task-memory"], "package alias should run persistent task memory QA");
assert(qaSuite.includes("scripts/nexus-persistent-task-memory-qa.js"), "qa-suite should include persistent task memory QA");

[
  "window.open",
  "location.href",
  "navigator.geolocation",
  "getUserMedia",
  "fetch(",
  "sessionStorage.setItem",
  "ACTION_CALL",
  "Message sent",
  "Call placed",
  "Payment completed",
  "Appointment booked",
  "Provider contacted",
  "Emergency dispatched"
].forEach(term => assert(!runtimeSource.includes(term), `persistent task memory runtime must not introduce ${term}`));

const sandbox = vm.runInNewContext(`
  let experienceMode = "user";
  const storage = {};
  const sessionStorage = {
    getItem: key => Object.prototype.hasOwnProperty.call(storage, key) ? storage[key] : null,
    setItem: (key, value) => { storage[key] = String(value); },
    removeItem: key => { delete storage[key]; }
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
    active: nexusOpenDialogueActiveTask,
    recall: nexusPersistentTaskMemoryRecall,
    card: renderNexusOpenDialogueAgentCard,
    memory: () => nexusOpenDialogueAgentState.persistentTaskMemory,
    storage: () => ({ ...storage }),
    state: () => nexusOpenDialogueAgentState
  });
`);

function ask(command) {
  const result = sandbox.response(command, { force: true });
  assert(result?.handled, `${command} should be handled`);
  const response = result.response || result.task?.finalSummary || "";
  assert(!/message sent|call placed|payment completed|appointment booked|provider contacted|emergency dispatched/i.test(response), `${command} must not claim execution`);
  return result;
}

ask("Nexus, help me sell maize.");
let memory = sandbox.memory();
assert.equal(memory.recentWorkflows.length, 1, "first workflow should be remembered");
assert(memory.lastPlan, "farm/marketplace plan should be stored as last plan");
assert.equal(memory.recentWorkflows[0].executionAuthority, false, "memory snapshot must not grant execution authority");

ask("I have 20 bags in Kenya.");
memory = sandbox.memory();
assert(memory.collectedFacts.some(item => /20 bags in kenya/i.test(item.value)), "safe agriculture fact should be session-stored");

ask("Draft a message to a buyer.");
memory = sandbox.memory();
assert(memory.lastDraft, "last draft should be remembered");

ask("Make it more professional.");
memory = sandbox.memory();
assert(memory.modifiedOutputs.length >= 1, "modified output should be tracked");

const recallPlan = ask("Use the last plan.");
assert(/Last plan recalled|local plan/i.test(recallPlan.response), "last plan should be recallable");

const finish = ask("Finish.");
assert(/Workflow finished locally/i.test(finish.response), "finish should close the workflow locally");
memory = sandbox.memory();
assert(memory.completedTasks.length >= 1, "finished workflow should be in completed tasks");

ask("Nexus, help me prepare for a meeting.");
ask("The meeting is with a doctor about my mother.");
const continueResult = ask("Continue.");
assert(/created|prepared|plan|questions|checklist|draft|continue/i.test(continueResult.response), "continue should resume active workflow");

const cancelResult = ask("Cancel that.");
assert(/canceled locally|no action was executed/i.test(cancelResult.response), "cancel should be logged locally");
memory = sandbox.memory();
assert(memory.canceledTasks.length >= 1, "canceled task should be remembered");

ask("Nexus, message Mary that I need help.");
memory = sandbox.memory();
assert(!memory.collectedFacts.some(item => /mary/i.test(item.value)), "communication details must not be persisted as collected facts");
assert(memory.lastPendingConfirmation || memory.lastBlockedAction, "high-risk communication boundary should be remembered without execution");

const card = sandbox.card();
assert(card.includes("data-nexus-persistent-task-memory-status=\"true\""), "Standard User card should show memory status");
assert(card.includes("No provider handoff, calls, messages, payments"), "memory UI should state no-execution boundary");

assert(!sandbox.storage()["nexusPersistentTaskMemory.v1"], "persistent task memory should remain in-memory only in this phase");

console.log("Nexus persistent task memory QA passed");
console.log("- in-memory task memory, recall, finish/cancel, draft/plan tracking, sensitive persistence boundaries, and no-execution guarantees verified");
