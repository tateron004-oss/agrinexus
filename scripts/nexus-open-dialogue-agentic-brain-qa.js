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
  assert(signatureEnd > start && bodyStart > signatureEnd, `${name} body should start after signature`);
  let depth = 0;
  for (let index = bodyStart; index < source.length; index += 1) {
    const char = source[index];
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }
  throw new Error(`${name} body should be extractable`);
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
  "renderNexusOpenDialogueAgentCard",
  "handleNexusOpenDialogueAgentCommand",
  "handleNexusOpenDialogueAgentControl",
  "handleNexusOpenDialogueAgentClick"
];

const extracted = Object.fromEntries(functionNames.map(name => [name, extractFunction(app, name)]));

[
  "nexus-open-dialogue-agent-state.v1",
  "nexus-open-dialogue-agent-scorecard.v1",
  "Nexus Agent",
  "available_local",
  "available_handoff",
  "available_confirmed_execution",
  "unavailable_blocked",
  "Emergency warning detected",
  "No provider handoff",
  "noExternalAction"
].forEach(term => assert(app.includes(term), `open dialogue agent should include ${term}`));

[
  "getUserMedia",
  "navigator.geolocation",
  "getCurrentPosition",
  "watchPosition",
  "XMLHttpRequest",
  "window.open",
  "location.href",
  "dispatchProviderWebhook",
  "localStorage.setItem",
  "sessionStorage.setItem",
  "indexedDB",
  "ACTION_CALL"
].forEach(term => {
  const source = functionNames.map(name => extracted[name]).join("\n");
  assert(!source.includes(term), `open dialogue agent runtime must not introduce ${term}`);
});

assert(app.includes("if (handleNexusOpenDialogueAgentCommand(command)) return true;"), "Standard User safe typed-command dispatcher should route open dialogue before fallback previews");
assert(app.includes("handleNexusOpenDialogueAgentClick(event)"), "Standard User click handler should wire Nexus Agent controls");
assert(app.includes("${renderNexusOpenDialogueAgentCard()}"), "Standard User workspace should render the Nexus Agent card");
assert(pkg.scripts["qa:nexus-open-dialogue-agentic-brain"], "package alias should run open dialogue agent QA");
assert(qaSuite.includes("scripts/nexus-open-dialogue-agentic-brain-qa.js"), "qa-suite should include open dialogue agent QA");

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
  ${extracted.nexusOpenAgentNormalizeText}
  ${extracted.nexusOpenAgentCreateId}
  ${extracted.nexusOpenDialogueCapabilityMatrix}
  ${extracted.nexusOpenDialogueRiskClassifier}
  ${extracted.nexusOpenDialogueEmergencyResponse}
  ${extracted.nexusOpenDialogueInterpretCommand}
  ${extracted.nexusOpenDialoguePlanSteps}
  ${extracted.nexusOpenDialogueActionLabel}
  ${extracted.nexusOpenDialogueLocalOutput}
  ${extracted.nexusOpenDialogueActionAllowed}
  ${extracted.nexusOpenDialogueInferLocalActionType}
  ${extracted.nexusOpenDialogueArtifactContent}
  ${extracted.nexusOpenDialogueLocalActionTitle}
  ${extracted.nexusOpenDialogueOutcomeForAction}
  ${extracted.nexusOpenDialogueExecuteLocalAction}
  ${extracted.nexusHigherIntelligenceMemoryMatches}
  ${extracted.nexusHigherIntelligenceCapabilityChoice}
  ${extracted.nexusHigherIntelligenceSelfCheck}
  ${extracted.nexusHigherIntelligenceReason}
  ${extracted.nexusHigherIntelligenceRecordLearning}
  ${extracted.nexusPersistentTaskMemoryLoad}
  ${extracted.nexusPersistentTaskMemoryCanPersist}
  ${extracted.nexusPersistentTaskMemorySnapshot}
  ${extracted.nexusPersistentTaskMemorySave}
  ${extracted.nexusPersistentTaskMemoryRecord}
  ${extracted.nexusPersistentTaskMemoryRecall}
  ${extracted.nexusRealActionAdaptersRegistry}
  ${extracted.nexusRealActionAdapterSelect}
  ${extracted.nexusRealActionAdapterPrepare}
  ${extracted.nexusRealActionAdapterExecute}
  ${extracted.nexusVoiceCommandLoopInitialState}
  ${extracted.nexusVoiceCommandLoopNormalizeCommand}
  ${extracted.nexusVoiceCommandLoopNextPrompt}
  ${extracted.nexusVoiceCommandLoopSpokenStyleResponse}
  ${extracted.nexusVoiceCommandLoopUpdate}
  ${extracted.nexusVoiceCommandLoopComplete}
  ${extracted.nexusReminderCalendarParseSchedule}
  ${extracted.nexusReminderCalendarPrepare}
  ${extracted.nexusMapLocationExtractFallback}
  ${extracted.nexusMapLocationPermissionPrepare}
  ${extracted.nexusMessagingCallHandoffPrepare}
  ${extracted.nexusProviderDirectoryIntegrationPrepare}
  ${extracted.nexusOpenDialogueCreateTask}
  ${extracted.nexusOpenDialogueAgentQuestion}
  ${extracted.nexusOpenDialogueUpdateScorecard}
  ${extracted.nexusOpenDialogueSetActiveTask}
  ${extracted.nexusOpenDialogueActiveTask}
  ${extracted.nexusOpenDialogueHandleFollowUp}
  ${extracted.nexusOpenDialogueAgentResponse}
  ${extracted.renderNexusOpenDialogueAgentCard}
  ({
    interpret: nexusOpenDialogueInterpretCommand,
    risk: nexusOpenDialogueRiskClassifier,
    response: nexusOpenDialogueAgentResponse,
    active: nexusOpenDialogueActiveTask,
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
    },
    score: nexusOpenDialogueUpdateScorecard
  });
`, { Date, Math });

const knownDomainCases = [
  ["Nexus, find agriculture training.", "learning", "find resources"],
  ["Nexus, plan my farm tasks for today.", "agriculture", "plan"],
  ["Nexus, help me sell maize.", "marketplace", "prepare"],
  ["I have 20 bags in Kenya.", "marketplace", "prepare"],
  ["Nexus, help me manage my diabetes.", "chronic-care", "prepare"],
  ["Nexus, remind me to take my medicine.", "health", "remind"],
  ["Every morning at 8.", "reminders", "prepare"],
  ["Nexus, help me find a job.", "workforce", "find resources"],
  ["Nexus, call John.", "communication", "contact someone"],
  ["Nexus, message Mary that I need help.", "communication", "draft"],
  ["Nexus, buy my medication.", "health", "prepare"],
  ["Nexus, I have chest pain and trouble breathing.", "health", "prepare"]
];

for (const [prompt, domain, goalCategory] of knownDomainCases) {
  const interpretation = sandbox.interpret(prompt);
  assert.equal(interpretation.inferredDomain, domain, `${prompt} should infer ${domain}`);
  if (goalCategory !== "prepare") assert.equal(interpretation.goalCategory, goalCategory, `${prompt} should infer ${goalCategory}`);
  const result = sandbox.response(prompt, { force: true });
  assert.equal(result.handled, true, `${prompt} should be handled`);
  if (/chest pain|trouble breathing/.test(prompt)) {
    assert.equal(result.task.status, "emergency_stopped", "emergency prompt should stop normal workflow");
    assert.match(result.response, /Emergency warning detected/, "emergency response should warn safely");
  } else {
    assert(result.task, `${prompt} should create or update a task`);
    assert.equal(result.task.executionAuthority, false, `${prompt} task must not grant execution`);
    assert.equal(result.task.noExecutionAuthorized, true, `${prompt} task must mark no execution authorized`);
    assert(result.task.outcomeLog.length >= 1, `${prompt} should record outcome verification`);
  }
}

const openCases = [
  "Nexus, I don't know what to do next.",
  "Nexus, help me prepare for a meeting.",
  "Nexus, help me organize my day.",
  "Nexus, I have a problem with my farm and my health.",
  "Continue.",
  "Cancel that.",
  "Change the message to sound more professional.",
  "Do the next step."
];

for (const prompt of openCases) {
  const result = sandbox.response(prompt, { force: true });
  assert.equal(result.handled, true, `${prompt} should be handled by open dialogue brain`);
  assert(!/call placed|message sent|payment completed|order created|dispatched|sent to your provider/i.test(result.response), `${prompt} must not claim external execution`);
}

sandbox.reset();
const meeting = sandbox.response("Nexus, help me prepare for a meeting.", { force: true });
assert.equal(meeting.task.waitingForInput, true, "meeting prep should ask one useful missing-context question");
const meetingFollowUp = sandbox.response("The meeting is with a doctor about my mother.", { force: true });
assert.equal(meetingFollowUp.task.waitingForInput, false, "meeting follow-up should satisfy missing context");
assert.match(meetingFollowUp.response, /Plan created|prepared|summary created|Checklist|Questions|safe local/i, "meeting follow-up should produce a local outcome");

const multi = sandbox.response("Nexus, I have a problem with my farm and my health.", { force: true });
assert(multi.task.secondaryDomains.includes("health") || multi.task.secondaryDomains.includes("agriculture"), "multi-domain request should preserve secondary domains");

sandbox.reset();
const call = sandbox.response("Nexus, call John.", { force: true });
assert.equal(call.task.riskLevel, "high", "call request should be high risk");
assert.equal(call.task.waitingForConfirmation, true, "call request should require confirmation");
const confirm = sandbox.response("Confirm.", { force: true });
assert.match(confirm.response, /no external action was executed/i, "confirmation intent must not execute unavailable provider action");

const scorecard = sandbox.score();
assert(scorecard.percentage >= 90, `scorecard should be at least 90%, got ${scorecard.percentage}`);
assert.equal(scorecard.checks.openDialogueFallback, true, "scorecard should include open dialogue fallback");
assert.equal(scorecard.checks.falseExecutionPrevention, true, "scorecard should include false execution prevention");

const card = sandbox.card();
assert(card.includes("Nexus Agent"), "Standard User card should include Nexus Agent title");
assert(card.includes("data-execution-authority=\"false\""), "card should declare no execution authority");
assert(card.includes("Confirm"), "card should include Confirm control");
assert(card.includes("Cancel"), "card should include Cancel control");

console.log("Nexus open dialogue agentic brain QA passed");
console.log(`- scorecard ${scorecard.percentage}% (${scorecard.passed}/${scorecard.total})`);
console.log("- known domains, open dialogue, continuation, confirmation, emergency stop, and no-execution guarantees verified");
