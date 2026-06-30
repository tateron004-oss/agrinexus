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
  "function nexusReminderCalendarParseSchedule",
  "function nexusReminderCalendarPrepare",
  "reminderCalendarProposal",
  "data-nexus-reminder-calendar-status=\"true\"",
  "data-scheduled=\"false\"",
  "No reminder was scheduled."
].forEach(term => assert(app.includes(term), `reminder/calendar integration should include ${term}`));

assert(pkg.scripts["qa:nexus-reminder-calendar-integration"], "package alias should run reminder/calendar QA");
assert(qaSuite.includes("scripts/nexus-reminder-calendar-integration-qa.js"), "qa-suite should include reminder/calendar QA");

[
  "Notification.requestPermission",
  "showNotification",
  "calendar.events.insert",
  "window.open",
  "location.href",
  "fetch(",
  "localStorage.setItem",
  "sessionStorage.setItem",
  "ACTION_CALL",
  "Reminder scheduled",
  "Appointment booked",
  "Provider contacted",
  "Message sent",
  "Call placed"
].forEach(term => assert(!runtimeSource.includes(term), `reminder/calendar runtime must not introduce ${term}`));

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
    parse: nexusReminderCalendarParseSchedule,
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
    }
  });
`);

assert.equal(sandbox.parse("Every morning at 8.").parsedTime, "recurring:morning:08:00", "morning schedule should parse");
assert.equal(sandbox.parse("Friday morning").parsedTime, "weekly:friday:morning", "Friday morning should parse");
assert.equal(sandbox.parse("tomorrow").parsedTime, "relative:tomorrow", "tomorrow should parse");

const cases = [
  ["Nexus, remind me to take my medicine.", "Medicine reminder proposal", "health", "Schedule detail needed"],
  ["Every morning at 8.", "Reminder proposal", "reminders", "Every morning at 8"],
  ["Nexus, remind me about my clinic visit tomorrow.", "Clinic visit reminder proposal", "health", "Tomorrow"],
  ["Nexus, remind me to check irrigation Friday morning.", "Farm task reminder proposal", "agriculture", "Friday morning"],
  ["Nexus, create a meeting reminder.", "Meeting reminder proposal", "workforce", "Schedule detail needed"]
];

cases.forEach(([prompt, expectedTitle, expectedDomain, expectedSchedule]) => {
  sandbox.reset();
  const result = sandbox.response(prompt, { force: true });
  assert(result?.handled, `${prompt} should be handled`);
  const proposal = result.task?.reminderCalendarProposal;
  assert(proposal, `${prompt} should produce reminder proposal`);
  assert.equal(proposal.title, expectedTitle, `${prompt} title should match`);
  assert.equal(proposal.domain, expectedDomain, `${prompt} domain should match`);
  assert.equal(proposal.scheduleText, expectedSchedule, `${prompt} schedule should match`);
  assert.equal(proposal.confirmationRequired, true, `${prompt} should require confirmation`);
  assert.equal(proposal.scheduled, false, `${prompt} must not be scheduled`);
  assert.equal(proposal.fallbackOnly, true, `${prompt} should be fallback-only`);
  assert.equal(proposal.executionAuthority, false, `${prompt} must not grant execution authority`);
  assert.equal(proposal.providerHandoffAuthorized, false, `${prompt} must not authorize provider handoff`);
  assert(!/scheduled successfully|appointment booked|calendar updated|notification sent/i.test(proposal.outcomeMessage), `${prompt} must not claim scheduling`);
  const card = sandbox.card();
  assert(card.includes("data-nexus-reminder-calendar-status=\"true\""), `${prompt} should render reminder status`);
  assert(card.includes("data-scheduled=\"false\""), `${prompt} card should state unscheduled`);
});

console.log("Nexus reminder/calendar integration QA passed");
console.log("- reminder proposal parsing, confirmation requirement, fallback-only state, unscheduled honesty, and no-execution guarantees verified");
