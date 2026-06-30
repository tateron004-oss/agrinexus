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
  "nexus-open-dialogue-agent-state.v1",
  "nexus-open-dialogue-agent-scorecard.v1",
  "Nexus Agent",
  "domainSpecificAgentBehavior",
  "completionSummary",
  "available_local",
  "available_handoff",
  "available_confirmed_execution",
  "unavailable_blocked",
  "No provider handoff"
].forEach(term => assert(app.includes(term), `Nexus Intelligence Brain v1 should include ${term}`));

[
  "getUserMedia",
  "navigator.geolocation",
  "getCurrentPosition",
  "watchPosition",
  "XMLHttpRequest",
  "window.open",
  "location.href",
  "localStorage.setItem",
  "sessionStorage.setItem",
  "ACTION_CALL"
].forEach(term => assert(!runtimeSource.includes(term), `Nexus Intelligence Brain v1 must not introduce ${term}`));

assert(pkg.scripts["qa:nexus-intelligence-brain-v1"], "package alias should run Nexus Intelligence Brain v1 QA");
assert(qaSuite.includes("scripts/nexus-intelligence-brain-v1-qa.js"), "qa-suite should include Nexus Intelligence Brain v1 QA");
assert(
  app.indexOf("if (handleNexusOpenDialogueAgentCommand(command)) return true;") < app.indexOf("if (handleJarvisStyleStandardUserSafetyResponse(command)) return true;")
    && app.indexOf("if (handleNexusOpenDialogueAgentCommand(command)) return true;") < app.indexOf("if (handleNexusSimulationCaptionCommand(command)) return true;"),
  "Standard User typed commands should route through Nexus Intelligence Brain v1 before older safety/domain-specific caption handlers"
);
assert(
  app.indexOf("if (handleNexusOpenDialogueAgentCommand(spokenCommand || command || localizedCommand || rawCommand)) return;") <
    app.indexOf("if (handleJarvisStyleStandardUserSafetyResponse(spokenCommand || command || localizedCommand || rawCommand)) return;"),
  "Standard User voice commands should route through Nexus Intelligence Brain v1 before older safety handlers"
);

const sandbox = vm.runInNewContext(`
  let experienceMode = "user";
  let nexusOpenDialogueAgentState = {
    schemaVersion: "nexus-open-dialogue-agent-state.v1",
    activeTaskId: null,
    tasks: [],
    taskHistory: [],
    lastOutcome: "",
    lastDraft: "",
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
    response: nexusOpenDialogueAgentResponse,
    active: nexusOpenDialogueActiveTask,
    card: renderNexusOpenDialogueAgentCard,
    score: nexusOpenDialogueUpdateScorecard,
    state: () => nexusOpenDialogueAgentState,
    reset: () => {
      nexusOpenDialogueAgentState = {
        schemaVersion: "nexus-open-dialogue-agent-state.v1",
        activeTaskId: null,
        tasks: [],
        taskHistory: [],
        lastOutcome: "",
        lastDraft: "",
        scorecard: null
      };
      return nexusOpenDialogueAgentState;
    }
  });
`, { Date, Math });

function assertTaskSafety(prompt, result) {
  assert.equal(result.handled, true, `${prompt} should be handled`);
  if (!result.task) return;
  assert.equal(result.task.executionAuthority, false, `${prompt} must not grant execution authority`);
  assert.equal(result.task.noExecutionAuthorized, true, `${prompt} must mark no execution authorized`);
  assert.equal(result.task.providerHandoffAuthorized, false, `${prompt} must not authorize provider handoff`);
  assert(result.task.outcomeLog.length >= 1, `${prompt} should record outcome verification`);
  assert(!/message sent|call placed|payment completed|appointment booked|medicine purchased|provider contacted|emergency dispatched/i.test(result.response), `${prompt} must not claim false external execution`);
}

const requiredKnownPrompts = [
  ["Nexus, find agriculture training.", "learning", "find resources", "low"],
  ["Nexus, plan my farm tasks for today.", "agriculture", "plan", "low"],
  ["Nexus, help me sell maize.", "marketplace", "prepare", "medium"],
  ["I have 20 bags in Kenya.", "marketplace", "prepare", "medium"],
  ["Nexus, help me manage my diabetes.", "chronic-care", "prepare", "medium"],
  ["Nexus, prepare questions for my doctor.", "health", "prepare questions", "medium"],
  ["Nexus, remind me to take my medicine.", "health", "remind", "medium"],
  ["Every morning at 8.", "reminders", "prepare", "medium"],
  ["Nexus, help me find a job.", "workforce", "find resources", "low"],
  ["Nexus, call John.", "communication", "contact someone", "high"],
  ["Nexus, message Mary that I need help.", "communication", "draft", "high"],
  ["Nexus, buy my medication.", "health", "prepare", "high"],
  ["Nexus, I have chest pain and trouble breathing.", "health", "prepare", "emergency"]
];

sandbox.reset();
for (const [prompt, domain, goalCategory, riskLevel] of requiredKnownPrompts) {
  const interpretation = sandbox.interpret(prompt);
  assert.equal(interpretation.inferredDomain, domain, `${prompt} should infer ${domain}`);
  assert.equal(interpretation.goalCategory, goalCategory, `${prompt} should infer ${goalCategory}`);
  const result = sandbox.response(prompt, { force: true });
  assertTaskSafety(prompt, result);
  assert.equal(result.task.riskLevel, riskLevel, `${prompt} should classify ${riskLevel} risk`);
  if (riskLevel === "emergency") {
    assert.equal(result.task.status, "emergency_stopped", "emergency should stop normal workflow");
    assert.match(result.response, /Emergency warning detected/, "emergency should show urgent escalation");
  }
}

const openDialoguePrompts = [
  "Nexus, I don't know what to do next.",
  "Nexus, help me prepare for a meeting.",
  "The meeting is with a doctor about my mother.",
  "Nexus, help me organize my day.",
  "Nexus, I have a problem with my farm and my health.",
  "Continue.",
  "Cancel that.",
  "Change the message to sound more professional.",
  "Do the next step."
];

sandbox.reset();
for (const prompt of openDialoguePrompts) {
  const result = sandbox.response(prompt, { force: true });
  assertTaskSafety(prompt, result);
}

sandbox.reset();
const openFallback = sandbox.response("Nexus, help me figure this out.", { force: true });
assert.equal(openFallback.task.status, "active", "open fallback should create an active support task");
assert.equal(openFallback.task.activeDomain, "general-assistant", "open fallback should use general assistant domain");

sandbox.reset();
const meeting = sandbox.response("Nexus, help me prepare for a meeting.", { force: true });
assert.equal(meeting.task.status, "waiting_for_input", "meeting prep should ask for missing context");
assert.equal(meeting.task.missingInputs[0], "meeting topic or audience", "meeting prep should ask one useful question");
const meetingFollowUp = sandbox.response("The meeting is with a doctor about my mother.", { force: true });
assert.equal(meetingFollowUp.task.status, "active", "meeting follow-up should continue active task");
assert.match(meetingFollowUp.response, /Plan created|prepared|summary created|safe local/i, "meeting follow-up should produce safe local outcome");

sandbox.reset();
const multi = sandbox.response("Nexus, I have a problem with my farm and my health.", { force: true });
assert.equal(multi.task.activeDomain, "health", "health should be primary for farm + health request under current safety ordering");
assert(multi.task.secondaryDomains.includes("agriculture"), "multi-domain request should preserve agriculture as secondary");
assert(multi.task.planSteps.some(step => step.stepId === "split-domains"), "multi-domain request should create split-domains step");

sandbox.reset();
const call = sandbox.response("Nexus, call John.", { force: true });
assert.equal(call.task.waitingForConfirmation, true, "call should require confirmation");
assert.match(call.response, /final confirmation gate|sensitive action/i, "call should pause at confirmation boundary");
const confirm = sandbox.response("Confirm.", { force: true });
assert.match(confirm.response, /no external action was executed/i, "confirm should not execute unavailable provider action");

const scorecard = sandbox.score();
assert.equal(scorecard.total, 20, "Nexus Intelligence Brain v1 scorecard should contain 20 checks");
assert(scorecard.percentage >= 90, `scorecard should be at least 90%, got ${scorecard.percentage}%`);
[
  "openCommandInterpretation",
  "goalCategoryDetection",
  "domainDetection",
  "multiDomainDetection",
  "riskClassification",
  "emergencyOverride",
  "taskCreation",
  "planGeneration",
  "localExecution",
  "sessionTaskContext",
  "followUpContinuation",
  "confirmationHandling",
  "blockedActionHandling",
  "capabilityMatrixEnforcement",
  "outcomeVerification",
  "standardUserUiContract",
  "falseExecutionPrevention",
  "openDialogueFallback",
  "domainSpecificAgentBehavior",
  "completionSummary"
].forEach(check => assert.equal(scorecard.checks[check], true, `${check} should pass`));

const card = sandbox.card();
[
  "Nexus Agent",
  "Domain(s):",
  "Risk:",
  "Current step:",
  "Missing:",
  "Completed:",
  "Pending confirmation:",
  "Available now:",
  "Blocked:",
  "Agentic scorecard: 100% (20/20)",
  "data-execution-authority=\"false\"",
  "data-provider-handoff-authorized=\"false\""
].forEach(term => assert(card.includes(term), `Standard User card should include ${term}`));

console.log("Nexus Intelligence Brain v1 QA passed");
console.log(`- scorecard ${scorecard.percentage}% (${scorecard.passed}/${scorecard.total})`);
console.log("- open dialogue, task state, planning, risk, capability, continuation, confirmation, emergency stop, and Standard User UI verified");
