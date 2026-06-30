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

const extracted = Object.fromEntries(functionNames.map(name => [name, extractFunction(app, name)]));
const runtimeSource = functionNames.map(name => extracted[name]).join("\n");

[
  "function nexusHigherIntelligenceReason",
  "function nexusHigherIntelligenceMemoryMatches",
  "function nexusHigherIntelligenceCapabilityChoice",
  "function nexusHigherIntelligenceSelfCheck",
  "function nexusHigherIntelligenceRecordLearning",
  "data-nexus-higher-intelligence-status=\"true\"",
  "lastHigherReasoning",
  "learningSignals"
].forEach(term => assert(app.includes(term), `higher intelligence layer should include ${term}`));

assert(pkg.scripts["qa:nexus-higher-intelligence-layer"], "package alias should run higher intelligence QA");
assert(qaSuite.includes("scripts/nexus-higher-intelligence-layer-qa.js"), "qa-suite should include higher intelligence QA");

[
  "window.open",
  "location.href",
  "navigator.geolocation",
  "getUserMedia",
  "localStorage.setItem",
  "sessionStorage.setItem",
  "ACTION_CALL",
  "Message sent",
  "Call placed",
  "Payment completed",
  "Appointment booked",
  "Provider contacted",
  "Emergency dispatched"
].forEach(term => assert(!runtimeSource.includes(term), `higher intelligence runtime must not introduce ${term}`));

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
    interpret: nexusOpenDialogueInterpretCommand,
    reason: nexusHigherIntelligenceReason,
    response: nexusOpenDialogueAgentResponse,
    card: renderNexusOpenDialogueAgentCard,
    state: () => nexusOpenDialogueAgentState,
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
      return nexusOpenDialogueAgentState;
    }
  });
`);

function assertReasoningShape(reasoning, label) {
  [
    "reasoningId",
    "rawInput",
    "normalizedInput",
    "inputType",
    "taskType",
    "goal",
    "goalCategory",
    "primaryDomain",
    "secondaryDomains",
    "urgency",
    "risk",
    "confidence",
    "uncertaintyReasons",
    "missingInputs",
    "memoryMatches",
    "availableCapabilities",
    "unavailableCapabilities",
    "proposedWorkflow",
    "immediateActions",
    "confirmationActions",
    "blockedActions",
    "nextBestMove",
    "selfCheck",
    "userFacingDecision"
  ].forEach(key => assert(Object.prototype.hasOwnProperty.call(reasoning, key), `${label} reasoning should include ${key}`));
  const minimumWorkflowSteps = reasoning.risk === "emergency" ? 1 : 2;
  assert(Array.isArray(reasoning.proposedWorkflow) && reasoning.proposedWorkflow.length >= minimumWorkflowSteps, `${label} should include workflow`);
  assert(reasoning.capabilityChoice?.selectedCapability, `${label} should record capability choice`);
  assert.equal(reasoning.selfCheck.executionAuthority, false, `${label} should not grant execution authority`);
  assert.equal(reasoning.selfCheck.providerHandoffAuthorized, false, `${label} should not authorize provider handoff`);
  assert.match(reasoning.userFacingDecision, /will not fake/i, `${label} should include honest no-fake-execution copy`);
}

function run(prompt) {
  const result = sandbox.response(prompt, { force: true });
  assert(result?.handled, `${prompt} should be handled`);
  assert(result.task, `${prompt} should create or update a task`);
  const reasoning = result.task.higherReasoning || sandbox.state().lastHigherReasoning;
  assert(reasoning, `${prompt} should produce higher reasoning`);
  assertReasoningShape(reasoning, prompt);
  const text = `${result.response}\n${result.task.finalSummary}`;
  assert(!/message sent|call placed|payment completed|appointment booked|medicine purchased|provider contacted|emergency dispatched/i.test(text), `${prompt} must not claim external execution`);
  return { result, reasoning };
}

const promptExpectations = [
  ["Nexus, I don't know what to do next.", "general-assistant"],
  ["Nexus, help me figure this out.", "general-assistant"],
  ["Nexus, can you handle this for me?", "general-assistant"],
  ["Nexus, what's the best move?", "general-assistant"],
  ["Nexus, I need a plan.", "general-assistant"],
  ["Nexus, my crops are failing and I need money.", "agriculture"],
  ["Nexus, my mother is sick and I need transport to a clinic.", "health"],
  ["Nexus, I need work, food, and medicine help.", "health"],
  ["Nexus, I have a farm problem and need to contact someone.", "communication"],
  ["Nexus, message Mary that I need help.", "communication"],
  ["Nexus, call John.", "communication"],
  ["Nexus, find a clinic near me.", "health"],
  ["Nexus, book me a doctor appointment.", "health"],
  ["Nexus, sell my maize today.", "marketplace"],
  ["Nexus, buy my medication.", "health"],
  ["Nexus, I have chest pain and trouble breathing.", "health"],
  ["Nexus, my mother is confused and cannot breathe well.", "health"]
];

sandbox.reset();
for (const [prompt, expectedDomain] of promptExpectations) {
  const { result, reasoning } = run(prompt);
  assert.equal(reasoning.primaryDomain, expectedDomain, `${prompt} should classify primary domain`);
  if (/chest pain|cannot breathe|trouble breathing/i.test(prompt)) {
    assert.equal(reasoning.risk, "emergency", `${prompt} should emergency-stop`);
    assert.equal(result.task.status, "emergency_stopped", `${prompt} should stop normal workflow`);
  }
  if (/message Mary|call John|appointment|contact someone|near me|buy my medication/i.test(prompt)) {
    assert(["high", "emergency"].includes(reasoning.risk), `${prompt} should be high risk or emergency`);
    assert(reasoning.confirmationActions.length || reasoning.blockedActions.length, `${prompt} should require confirmation or block`);
  }
  if (/crops|work, food|mother is sick/i.test(prompt)) {
    assert(reasoning.secondaryDomains.length >= 1, `${prompt} should represent multi-domain reasoning`);
  }
}

sandbox.reset();
run("Nexus, help me sell maize.");
run("I have 20 bags in Kenya.");
run("Draft a message to a buyer.");
const modify = run("Make it more professional.");
assert(modify.reasoning.memoryMatches.activeTask || sandbox.state().learningSignals.length >= 1, "follow-up should use memory or learning state");
assert(sandbox.state().learningSignals.length >= 1, "outcome learning signal should be stored");
assert(sandbox.state().lastHigherReasoning, "last higher reasoning should be stored");

const card = sandbox.card();
assert(card.includes("data-nexus-higher-intelligence-status=\"true\""), "Standard User card should show higher intelligence status");
assert(card.includes("data-execution-authority=\"false\""), "higher intelligence UI should remain no-execution");

console.log("Nexus Higher Intelligence Layer QA passed");
console.log("- structured reasoning, memory, workflow, capability choice, self-check, learning, UI, and no-execution boundaries verified");
