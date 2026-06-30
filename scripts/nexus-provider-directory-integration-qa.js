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
  "function nexusProviderDirectoryIntegrationPrepare",
  "providerDirectoryRequest",
  "verifiedProviderDataAvailable: false",
  "providerOptions: []",
  "data-nexus-provider-directory-status=\"true\"",
  "data-provider-data-verified=\"false\"",
  "data-provider-contacted=\"false\"",
  "No provider was contacted."
].forEach(term => assert(app.includes(term), `provider directory integration should include ${term}`));

assert(pkg.scripts["qa:nexus-provider-directory-integration"], "package alias should run provider directory QA");
assert(qaSuite.includes("scripts/nexus-provider-directory-integration-qa.js"), "qa-suite should include provider directory QA");

[
  "fetch(",
  "window.open",
  "location.href",
  "navigator.geolocation",
  "getUserMedia",
  "localStorage.setItem",
  "sessionStorage.setItem",
  "Provider contacted",
  "Appointment booked",
  "Medication purchased",
  "Payment completed"
].forEach(term => assert(!runtimeSource.includes(term), `provider directory runtime must not introduce ${term}`));

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
  ["Nexus, find a clinic for my mother in Kenya.", "family care support", "Kenya"],
  ["Nexus, prepare a doctor appointment request.", "appointment request preparation", "city or region needed"],
  ["Nexus, help me find diabetes care.", "diabetes care", "city or region needed"],
  ["Nexus, send my summary to a provider.", "provider/clinic support", "city or region needed"],
  ["Nexus, buy my medication.", "pharmacy questions", "city or region needed"]
];

cases.forEach(([prompt, careNeed, locationInput]) => {
  sandbox.reset();
  const result = sandbox.response(prompt, { force: true });
  assert(result?.handled, `${prompt} should be handled`);
  const request = result.task?.providerDirectoryRequest;
  assert(request, `${prompt} should produce provider directory request`);
  assert.equal(request.careNeed, careNeed, `${prompt} care need should match`);
  assert.equal(request.locationInput, locationInput, `${prompt} location input should match`);
  assert.equal(request.verifiedProviderDataAvailable, false, `${prompt} must not claim verified provider data`);
  assert(Array.isArray(request.providerOptions) && request.providerOptions.length === 0, `${prompt} must not invent provider options`);
  assert.equal(request.confirmationRequired, true, `${prompt} should require confirmation before contact/share`);
  assert.equal(request.contacted, false, `${prompt} must not contact provider`);
  assert.equal(request.executionAuthority, false, `${prompt} must not grant execution authority`);
  assert.equal(request.providerHandoffAuthorized, false, `${prompt} must not authorize provider handoff`);
  assert(!/provider contacted|appointment booked|medication purchased|payment completed/i.test(request.outcomeMessage), `${prompt} must not make false provider/action claims`);
  const card = sandbox.card();
  assert(card.includes("data-nexus-provider-directory-status=\"true\""), `${prompt} should render provider directory status`);
  assert(card.includes("data-provider-data-verified=\"false\""), `${prompt} card should state provider data unverified`);
  assert(card.includes("data-provider-contacted=\"false\""), `${prompt} card should state no provider contacted`);
});

sandbox.reset();
const emergency = sandbox.response("Nexus, I have chest pain and trouble breathing.", { force: true });
assert(emergency?.handled, "emergency prompt should be handled");
assert.equal(emergency.task?.providerDirectoryRequest, null, "emergency prompt should not create provider directory request");
assert.equal(emergency.task?.status, "emergency_stopped", "emergency prompt should stop normal workflow");

console.log("Nexus provider directory integration QA passed");
console.log("- provider prep, unverified-data posture, no invented providers, confirmation requirement, emergency stop, and no-contact guarantees verified");
