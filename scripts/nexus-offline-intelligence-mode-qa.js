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
  "function nexusOfflineIntelligenceModePrepare",
  "offlineIntelligenceMode",
  "offlineModeActive: true",
  "syncAvailable: false",
  "externalExecutionBlocked: true",
  "data-nexus-offline-intelligence-status=\"true\"",
  "data-sync-available=\"false\"",
  "data-external-execution-blocked=\"true\""
].forEach(term => assert(app.includes(term), `offline intelligence mode should include ${term}`));

assert(pkg.scripts["qa:nexus-offline-intelligence-mode"], "package alias should run offline intelligence QA");
assert(qaSuite.includes("scripts/nexus-offline-intelligence-mode-qa.js"), "qa-suite should include offline intelligence QA");

[
  "fetch(",
  "navigator.onLine",
  "serviceWorker.register",
  "localStorage.setItem",
  "sessionStorage.setItem",
  "indexedDB",
  "window.open",
  "location.href",
  "Sync completed",
  "Message sent",
  "Call placed",
  "Provider contacted",
  "Payment completed"
].forEach(term => assert(!runtimeSource.includes(term), `offline intelligence runtime must not introduce ${term}`));

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
  ["Nexus, offline agriculture help for crop pests.", true, []],
  ["Nexus, offline chronic care help.", true, []],
  ["Nexus, offline clinic prep.", true, []],
  ["Nexus, offline marketplace listing draft for maize.", true, ["Marketplace listing draft"]],
  ["Nexus, offline message draft to buyer.", true, ["Review-only handoff draft"]],
  ["Nexus, offline reminder proposal for medicine.", true, ["Reminder proposal"]],
  ["Nexus, send this message while offline and sync later.", true, ["Review-only handoff draft"]]
];

cases.forEach(([prompt, localGuidanceAvailable, queuedDrafts]) => {
  sandbox.reset();
  const result = sandbox.response(prompt, { force: true });
  assert(result?.handled, `${prompt} should be handled`);
  const offline = result.task?.offlineIntelligenceMode;
  assert(offline, `${prompt} should produce offline mode object`);
  assert.equal(offline.offlineModeActive, true, `${prompt} should activate offline mode object`);
  assert.equal(offline.networkRequired, false, `${prompt} should not require network`);
  assert.equal(offline.localGuidanceAvailable, localGuidanceAvailable, `${prompt} local guidance availability should match`);
  assert.equal(offline.syncAvailable, false, `${prompt} must not claim sync availability`);
  assert.equal(offline.externalExecutionBlocked, true, `${prompt} must block external execution`);
  assert.equal(offline.executionAuthority, false, `${prompt} must not grant execution authority`);
  assert.equal(offline.providerHandoffAuthorized, false, `${prompt} must not authorize provider handoff`);
  queuedDrafts.forEach(draft => assert(offline.queuedDrafts.includes(draft), `${prompt} should include ${draft}`));
  assert(!/sync completed|message sent|call placed|provider contacted|payment completed/i.test(offline.outcomeMessage), `${prompt} must not make false offline execution claim`);
  const card = sandbox.card();
  assert(card.includes("data-nexus-offline-intelligence-status=\"true\""), `${prompt} should render offline status`);
  assert(card.includes("data-sync-available=\"false\""), `${prompt} should state sync unavailable`);
  assert(card.includes("data-external-execution-blocked=\"true\""), `${prompt} should state external execution blocked`);
});

console.log("Nexus offline intelligence mode QA passed");
console.log("- offline guidance, queued drafts, sync-unavailable posture, external execution block, and no false offline claims verified");
