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
  "function nexusRealActionAdaptersRegistry",
  "function nexusRealActionAdapterPrepare",
  "data-nexus-real-action-adapter-status=\"true\"",
  "messaging.adapter",
  "call.adapter",
  "reminder-calendar.adapter",
  "map-location.adapter",
  "provider-directory.adapter",
  "appointment-request.adapter",
  "marketplace-listing.adapter",
  "payment.adapter",
  "offline-sync.adapter",
  "health-summary.adapter",
  "workforce-job-matching.adapter"
].forEach(term => assert(app.includes(term), `real action adapters should include ${term}`));

assert(pkg.scripts["qa:nexus-real-action-adapters"], "package alias should run real action adapters QA");
assert(qaSuite.includes("scripts/nexus-real-action-adapters-qa.js"), "qa-suite should include real action adapters QA");

[
  "window.open",
  "location.href",
  "navigator.geolocation",
  "getUserMedia",
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
].forEach(term => assert(!runtimeSource.includes(term), `real action adapters must not introduce ${term}`));

const sandbox = vm.runInNewContext(`
  let experienceMode = "user";
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
    adapters: nexusRealActionAdaptersRegistry,
    execute: nexusRealActionAdapterExecute,
    card: renderNexusOpenDialogueAgentCard,
    state: () => nexusOpenDialogueAgentState
  });
`);

const adapters = sandbox.adapters();
assert(adapters.length >= 10, "adapter registry should cover required domains");
adapters.forEach(adapter => {
  assert.equal(typeof adapter.adapterId, "string", "adapter should have adapterId");
  assert.equal(typeof adapter.domain, "string", "adapter should have domain");
  assert.equal(typeof adapter.implemented, "boolean", `${adapter.adapterId} should state implementation status`);
  assert.equal(typeof adapter.requiresConfirmation, "boolean", `${adapter.adapterId} should state confirmation requirement`);
  assert.equal(typeof adapter.requiresPermission, "boolean", `${adapter.adapterId} should state permission requirement`);
  assert(adapter.falseClaimGuard, `${adapter.adapterId} should include false-claim guard`);
});

const cases = [
  ["Nexus, message Mary that I need help.", "messaging.adapter", false, true],
  ["Nexus, call John.", "call.adapter", false, true],
  ["Nexus, book doctor appointment.", "appointment-request.adapter", false, true],
  ["Nexus, find clinic near me.", "map-location.adapter", false, true],
  ["Nexus, sell maize today.", "marketplace-listing.adapter", false, true],
  ["Nexus, buy medication.", "payment.adapter", false, true],
  ["Nexus, remind me to take medicine.", "reminder-calendar.adapter", false, true],
  ["Nexus, send my summary to a provider.", "messaging.adapter", false, true],
  ["Nexus, prepare a physician report.", "health-summary.adapter", true, false],
  ["Nexus, show me farm jobs.", "workforce-job-matching.adapter", true, false]
];

cases.forEach(([prompt, expectedAdapter, implemented, fallbackOnly]) => {
  const result = sandbox.response(prompt, { force: true });
  assert(result?.handled, `${prompt} should be handled`);
  const decision = result.task?.actionAdapterDecision;
  assert(decision, `${prompt} should produce an adapter decision`);
  assert.equal(decision.adapterId, expectedAdapter, `${prompt} should select ${expectedAdapter}`);
  assert.equal(decision.implemented, implemented, `${prompt} implementation status should be honest`);
  assert.equal(decision.fallbackOnly, fallbackOnly, `${prompt} fallback status should be honest`);
  assert.equal(decision.executed, false, `${prompt} must not execute through adapter`);
  assert.equal(decision.executionAuthority, false, `${prompt} must not grant execution authority`);
  assert.equal(decision.providerHandoffAuthorized, false, `${prompt} must not authorize provider handoff`);
  assert(!/message sent|call placed|appointment booked|payment completed|medicine purchased|provider contacted|emergency dispatched/i.test(decision.outcomeMessage), `${prompt} must not make false execution claim`);
  const execution = sandbox.execute(decision);
  assert.equal(execution.executed, false, `${prompt} execute helper must remain non-executing`);
});

const card = sandbox.card();
assert(card.includes("data-nexus-real-action-adapter-status=\"true\""), "Standard User card should show adapter status");
assert(card.includes("data-execution-authority=\"false\""), "adapter card should remain non-authoritative");

console.log("Nexus real action adapters QA passed");
console.log("- adapter registry, selection, fallback, confirmation/permission boundaries, false-claim guards, and no-execution guarantees verified");
