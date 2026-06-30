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
  "function nexusMapLocationExtractFallback",
  "function nexusMapLocationPermissionPrepare",
  "mapLocationRequest",
  "data-nexus-map-location-permission-status=\"true\"",
  "data-permission-granted=\"false\"",
  "data-location-permission-requested=\"false\"",
  "No live location was used."
].forEach(term => assert(app.includes(term), `map/location permission layer should include ${term}`));

assert(pkg.scripts["qa:nexus-map-location-permission-execution"], "package alias should run map/location QA");
assert(qaSuite.includes("scripts/nexus-map-location-permission-execution-qa.js"), "qa-suite should include map/location QA");

[
  "navigator.geolocation",
  "getCurrentPosition",
  "watchPosition",
  "window.open",
  "location.href",
  "fetch(",
  "localStorage.setItem",
  "sessionStorage.setItem",
  "ACTION_CALL",
  "Live location used",
  "Route launched",
  "Navigation started",
  "Provider contacted"
].forEach(term => assert(!runtimeSource.includes(term), `map/location permission runtime must not introduce ${term}`));

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
    fallback: nexusMapLocationExtractFallback,
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

assert.equal(sandbox.fallback("Find clinic in Stockton, CA"), "Stockton, CA", "explicit city should be extracted");
assert.equal(sandbox.fallback("Find agriculture training in Kenya"), "Kenya", "country fallback should be extracted");

const cases = [
  ["Nexus, find a clinic near me.", "clinic/provider", true, "city or region needed", false],
  ["Nexus, find agriculture training near me.", "training/resource", true, "city or region needed", false],
  ["Nexus, help me get transport to a clinic in Stockton, CA.", "clinic/provider", false, "Stockton, CA", true],
  ["Nexus, route me to a market in Kenya.", "marketplace/market", false, "Kenya", true],
  ["Nexus, use my location.", "map/location support", true, "city or region needed", false]
];

cases.forEach(([prompt, requestedResource, permissionRequired, fallbackLocation, routePrepared]) => {
  sandbox.reset();
  const result = sandbox.response(prompt, { force: true });
  assert(result?.handled, `${prompt} should be handled`);
  const request = result.task?.mapLocationRequest;
  assert(request, `${prompt} should produce map/location request`);
  assert.equal(request.requestedResource, requestedResource, `${prompt} resource should match`);
  assert.equal(request.permissionRequired, permissionRequired, `${prompt} permission requirement should match`);
  assert.equal(request.permissionGranted, false, `${prompt} must not grant permission`);
  assert.equal(request.fallbackLocation, fallbackLocation, `${prompt} fallback location should match`);
  assert.equal(request.mapActionAvailable, false, `${prompt} must not expose live map action`);
  assert.equal(request.routePrepared, routePrepared, `${prompt} routePrepared should reflect text fallback only`);
  assert.equal(request.noLocationPermissionRequested, true, `${prompt} must not request live location`);
  assert.equal(request.executionAuthority, false, `${prompt} must not grant execution authority`);
  assert.equal(request.providerHandoffAuthorized, false, `${prompt} must not authorize provider handoff`);
  assert(!/live location used|route launched|navigation started|provider contacted/i.test(request.outcomeMessage), `${prompt} must not make false location/route claims`);
  const card = sandbox.card();
  assert(card.includes("data-nexus-map-location-permission-status=\"true\""), `${prompt} should render map/location status`);
  assert(card.includes("data-permission-granted=\"false\""), `${prompt} card should state permission not granted`);
  assert(card.includes("data-location-permission-requested=\"false\""), `${prompt} card should state no permission request`);
});

console.log("Nexus map/location permission execution QA passed");
console.log("- explicit text fallback, permission-required state, no geolocation request, no live route, and no-execution guarantees verified");
