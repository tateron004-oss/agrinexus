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

const extracted = Object.fromEntries(functionNames.map(name => [name, extractFunction(app, name)]));
const runtimeSource = functionNames.map(name => extracted[name]).join("\n");

[
  "create_checklist",
  "create_plan",
  "prepare_questions",
  "draft_message",
  "create_call_prep",
  "create_reminder_proposal",
  "create_clinic_visit_summary",
  "create_marketplace_listing_prep",
  "create_job_pathway",
  "create_farm_task_plan",
  "create_completion_summary",
  "externalExecutionOccurred: false",
  "data-external-execution-occurred=\"false\""
].forEach(term => assert(app.includes(term), `capability execution should include ${term}`));

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
  "Appointment booked"
].forEach(term => assert(!runtimeSource.includes(term), `capability executor must not introduce ${term}`));

assert(pkg.scripts["qa:nexus-agentic-capability-execution"], "package alias should run capability execution QA");
assert(qaSuite.includes("scripts/nexus-agentic-capability-execution-qa.js"), "qa-suite should include capability execution QA");

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
    }
  });
`, { Date, Math });

function run(prompt) {
  const result = sandbox.response(prompt, { force: true });
  assert.equal(result?.handled, true, `${prompt} should be handled`);
  return result;
}

function artifactTypes(task) {
  return (task.localArtifacts || []).map(artifact => artifact.actionType);
}

function assertNoExternalExecution(task, label) {
  assert.equal(task.executionAuthority, false, `${label} should not grant execution authority`);
  assert.equal(task.noExecutionAuthorized, true, `${label} should preserve no-execution authorization`);
  assert.equal(task.providerHandoffAuthorized, false, `${label} should not authorize provider handoff`);
  assert((task.localArtifacts || []).every(artifact => artifact.externalExecutionOccurred === false), `${label} artifacts should be local-only`);
  const text = `${task.finalSummary}\n${(task.outcomeLog || []).map(item => item.summary).join("\n")}`;
  assert(!/message sent|call placed|payment completed|appointment booked|medicine purchased|provider contacted|transaction occurred|emergency dispatched/i.test(text), `${label} must not claim external execution`);
}

sandbox.reset();
run("Nexus, help me sell maize.");
run("I have 20 bags in Kenya.");
const buyerDraft = run("Draft a message to a buyer.");
assert.equal(buyerDraft.task.activeDomain, "marketplace", "marketplace task should persist across buyer draft follow-up");
assert(artifactTypes(buyerDraft.task).includes("create_marketplace_listing_prep"), "marketplace listing prep should be created");
assert(artifactTypes(buyerDraft.task).includes("draft_message"), "buyer message draft should be created");
assert.match(buyerDraft.task.finalSummary, /not sent/i, "buyer draft should verify it was not sent");
assertNoExternalExecution(buyerDraft.task, "marketplace flow");

sandbox.reset();
run("Nexus, help me manage my diabetes.");
const doctorQuestions = run("Prepare questions for my doctor.");
assert.equal(doctorQuestions.task.activeDomain, "chronic-care", "chronic care task should persist");
assert(artifactTypes(doctorQuestions.task).includes("create_clinic_visit_summary"), "doctor questions/clinic summary should be created");
assert.match(doctorQuestions.task.finalSummary, /did not diagnose|change medication/i, "doctor prep should preserve medical boundary");
assertNoExternalExecution(doctorQuestions.task, "chronic care flow");

sandbox.reset();
run("Nexus, remind me to take my medicine.");
const reminder = run("Every morning at 8.");
assert(artifactTypes(reminder.task).includes("create_reminder_proposal"), "reminder proposal should be created");
assert.match(reminder.task.finalSummary, /No reminder was scheduled/i, "reminder proposal should not claim scheduling");
assertNoExternalExecution(reminder.task, "reminder flow");

sandbox.reset();
const meeting = run("Nexus, help me prepare for a meeting.");
assert.equal(meeting.task.waitingForInput, true, "meeting prep should ask for context");
run("The meeting is with a doctor about my mother.");
const meetingQuestions = run("Create the questions.");
assert(artifactTypes(meetingQuestions.task).includes("create_clinic_visit_summary"), "meeting doctor questions should be created");
assert.match(meetingQuestions.task.finalSummary, /Clinic visit prep summary created|Questions prepared/i, "meeting questions should verify output");
assertNoExternalExecution(meetingQuestions.task, "meeting flow");

sandbox.reset();
const farm = run("Nexus, plan my farm tasks for today.");
assert(artifactTypes(farm.task).includes("create_farm_task_plan"), "farm task plan should be created");
assert.match(farm.task.finalSummary, /Farm task plan created/i, "farm task outcome should be verified");
assertNoExternalExecution(farm.task, "farm task flow");

sandbox.reset();
const message = run("Nexus, message Mary that I need help.");
assert.equal(message.task.waitingForConfirmation, true, "message should require confirmation before sending");
assert(artifactTypes(message.task).includes("draft_message"), "message draft should be created");
assert.match(message.task.finalSummary, /not sent/i, "message flow should not claim sent");
assertNoExternalExecution(message.task, "message flow");

sandbox.reset();
const call = run("Nexus, call John.");
assert.equal(call.task.waitingForConfirmation, true, "call should require confirmation");
assert(artifactTypes(call.task).includes("create_call_prep"), "call prep card should be created");
assert.match(call.task.finalSummary, /No call was placed/i, "call flow should not claim call placed");
assertNoExternalExecution(call.task, "call flow");

sandbox.reset();
const buyMedication = run("Nexus, buy my medication.");
assert.equal(buyMedication.task.status, "blocked", "medication purchase should be blocked");
assert.match(buyMedication.task.finalSummary, /blocked/i, "blocked medication purchase should explain safe boundary");
assertNoExternalExecution(buyMedication.task, "blocked purchase flow");

sandbox.reset();
const emergency = run("Nexus, I have chest pain and trouble breathing.");
assert.equal(emergency.task.status, "emergency_stopped", "emergency should stop normal workflow");
assert.match(emergency.task.finalSummary, /Emergency warning detected/i, "emergency should show urgent warning");
assertNoExternalExecution(emergency.task, "emergency flow");

sandbox.reset();
run("Nexus, plan my farm tasks for today.");
const card = sandbox.card();
assert(card.includes("nexus-agent-artifact"), "Standard User card should render local artifact stack");
assert(card.includes("data-external-execution-occurred=\"false\""), "rendered artifacts should declare no external execution");

console.log("Nexus agentic capability execution QA passed");
console.log("- local artifacts, follow-up execution, confirmation gates, blocked actions, and no-execution guarantees verified");
