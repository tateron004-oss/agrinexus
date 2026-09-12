const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

const docPath = path.join(root, "docs", "NEXUS_ACTION_DECISION_OBSERVATION_METADATA.md");
const mapperPath = path.join(root, "public", "nexus-action-decision-mapper.js");

assert(fs.existsSync(docPath), "docs/NEXUS_ACTION_DECISION_OBSERVATION_METADATA.md must exist");
assert(fs.existsSync(mapperPath), "public/nexus-action-decision-mapper.js must exist");

const doc = read("docs", "NEXUS_ACTION_DECISION_OBSERVATION_METADATA.md");
const mapperSource = read("public", "nexus-action-decision-mapper.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const memory = read("public", "nexus-session-memory.js");
const mapper = require(mapperPath);

assert.equal(typeof mapper.mapNexusPromptToActionDecision, "function", "mapper must load safely in Node");

function observeActionDecision(prompt) {
  const actionDecision = mapper.mapNexusPromptToActionDecision(prompt);
  return {
    schemaVersion: "nexus-action-decision-observation.v1",
    visibility: "hidden",
    surface: "qa-only",
    debugOnly: true,
    canExecute: false,
    executionAuthority: "none",
    actionDecision,
    safetyNotes: [
      "actionDecision is observation metadata only",
      "planner metadata is not execution authority",
      "selectedToolId must not directly execute real actions",
      "agentAction must not directly execute real actions",
      "missingInputs must block execution",
      "restricted actions must not execute",
      "provider_handoff_only must not mean execution happened",
      "confirmationRequired must be honored before any future action",
      "no live execution"
    ]
  };
}

for (const term of [
  "Action Decision Observation Metadata",
  "actionDecision",
  "observation metadata only",
  "hidden",
  "debug-only",
  "QA-only",
  "planner metadata is not execution authority",
  "selectedToolId must not directly execute",
  "agentAction must not directly execute",
  "missingInputs must block execution",
  "restricted actions must not execute",
  "provider_handoff_only must not mean execution happened",
  "confirmationRequired must be honored",
  "no live execution",
  "no browser geolocation request",
  "no camera opening",
  "no call execution",
  "no message execution",
  "no transaction",
  "no emergency dispatch claim",
  "Standard User visible behavior remains unchanged"
]) {
  assert(`${doc}\n${__filename}`.includes(term), `observation doc/QA must include required term: ${term}`);
}

function assertObservation(prompt) {
  const observation = observeActionDecision(prompt);
  assert.equal(observation.visibility, "hidden", `${prompt} observation must be hidden`);
  assert.equal(observation.surface, "qa-only", `${prompt} observation must be QA-only`);
  assert.equal(observation.debugOnly, true, `${prompt} observation must be debug-only`);
  assert.equal(observation.canExecute, false, `${prompt} observation must not execute`);
  assert.equal(observation.executionAuthority, "none", `${prompt} observation must not gain authority`);
  assert(observation.actionDecision && typeof observation.actionDecision === "object", `${prompt} should include actionDecision`);
  for (const field of [
    "actionId",
    "intent",
    "selectedToolId",
    "executionLevel",
    "riskLevel",
    "domain",
    "userVisibleLabel",
    "summary",
    "requiredInputs",
    "missingInputs",
    "requiredPermissions",
    "confirmationRequired",
    "confirmationText",
    "cancelPath",
    "providerCandidates",
    "executionBoundary",
    "auditPolicy",
    "safetyNotes",
    "resultState",
    "failureReason"
  ]) {
    assert(Object.prototype.hasOwnProperty.call(observation.actionDecision, field), `${prompt} actionDecision missing ${field}`);
  }
  assert.notEqual(observation.actionDecision.executionBoundary, "controlled_execution", `${prompt} must not allow controlled_execution in Phase 12D`);
  if (["high", "restricted"].includes(observation.actionDecision.riskLevel)) {
    assert.notEqual(observation.actionDecision.resultState, "completed", `${prompt} high/restricted action must not be completed`);
  }
  return observation;
}

const irrigation = assertObservation("Nexus, teach me how irrigation works").actionDecision;
assert.equal(irrigation.domain, "learning", "irrigation prompt should map to learning");
assert.equal(irrigation.riskLevel, "low", "irrigation prompt should be low risk");
assert(["suggestion_only", "navigation_only"].includes(irrigation.executionBoundary), "irrigation prompt should stay suggestion/navigation only");
assert.equal(irrigation.confirmationRequired, false, "irrigation prompt should not require confirmation");

const training = assertObservation("Nexus, help me find agriculture training").actionDecision;
assert.equal(training.domain, "learning", "training prompt should map to learning");
assert.equal(training.riskLevel, "low", "training prompt should be low risk");
assert(["suggestion_only", "navigation_only"].includes(training.executionBoundary), "training prompt should stay suggestion/navigation only");
assert(!/enrolled|completed|certificate issued/i.test(`${training.summary} ${training.safetyNotes.join(" ")}`), "training prompt must not claim enrollment");

const jobs = assertObservation("Nexus, show me farm jobs").actionDecision;
assert.equal(jobs.domain, "jobs", "jobs prompt should map to jobs");
assert.equal(jobs.riskLevel, "low", "jobs prompt should be low risk");
assert.equal(jobs.executionBoundary, "navigation_only", "jobs prompt should be navigation only");
assert(!/application submitted|shared user data/i.test(`${jobs.summary} ${jobs.safetyNotes.join(" ")}`), "jobs prompt must not claim application submission");

const marketplace = assertObservation("Nexus, browse AgriTrade").actionDecision;
assert.equal(marketplace.domain, "marketplace", "AgriTrade prompt should map to marketplace");
assert.equal(marketplace.riskLevel, "low", "AgriTrade browse should be low risk");
assert.equal(marketplace.executionBoundary, "navigation_only", "AgriTrade browse should be navigation only");
assert(!/bought|sold|paid|seller contacted|reserved/i.test(`${marketplace.summary} ${marketplace.safetyNotes.join(" ")}`), "AgriTrade browse must not claim transaction");

const crop = assertObservation("Nexus, I need help with crop issues").actionDecision;
assert.equal(crop.domain, "agriculture", "crop prompt should map to agriculture");
assert.equal(crop.riskLevel, "low", "crop prompt should be low risk");
assert.equal(crop.providerCandidates.length, 0, "crop prompt must not contact provider");

const call = assertObservation("Nexus, call someone").actionDecision;
assert.equal(call.domain, "communications", "call prompt should map to communications");
assert(["medium", "high"].includes(call.riskLevel), "call prompt should be medium or high risk");
assert(call.missingInputs.includes("contactName") || call.missingInputs.includes("phoneNumber"), "call prompt should include missing contactName or phoneNumber");
assert(["blocked_missing_inputs", "staged"].includes(call.resultState), "call prompt should remain blocked or staged");
assert(!/call placed|dialed|provider opened/i.test(`${call.summary} ${call.safetyNotes.join(" ")}`), "call prompt must not claim call execution");

const message = assertObservation("Nexus, send a message").actionDecision;
assert.equal(message.domain, "communications", "message prompt should map to communications");
assert(["medium", "high"].includes(message.riskLevel), "message prompt should be medium or high risk");
assert(message.missingInputs.includes("recipient") || message.missingInputs.includes("messageBody"), "message prompt should include missing recipient or messageBody");
assert(!/message sent|sent message|provider opened/i.test(`${message.summary} ${message.safetyNotes.join(" ")}`), "message prompt must not claim message execution");

const location = assertObservation("Nexus, find my location").actionDecision;
assert.equal(location.riskLevel, "high", "location prompt should be high risk");
assert(location.requiredPermissions.includes("location") || location.requiredPermissions.includes("geolocation"), "location prompt should require location/geolocation permission");
assert(!/location shared|location acquired|geolocation requested/i.test(`${location.summary} ${location.safetyNotes.join(" ")}`), "location prompt must not request browser geolocation");

const camera = assertObservation("Nexus, use my camera").actionDecision;
assert.equal(camera.riskLevel, "high", "camera prompt should be high risk");
assert(camera.requiredPermissions.includes("camera"), "camera prompt should require camera permission");
assert(!/camera opened|photo taken|media captured/i.test(`${camera.summary} ${camera.safetyNotes.join(" ")}`), "camera prompt must not open camera");

const buy = assertObservation("Nexus, buy this item").actionDecision;
assert(["high", "restricted"].includes(buy.riskLevel), "buy prompt should be high or restricted");
assert(["blocked", "confirmation_required"].includes(buy.executionBoundary), "buy prompt should remain blocked or confirmation-gated");
assert(!/transaction completed|payment sent|item purchased|offer submitted/i.test(`${buy.summary} ${buy.safetyNotes.join(" ")}`), "buy prompt must not transact");

const emergency = assertObservation("Nexus, I have an emergency").actionDecision;
assert(["high", "restricted"].includes(emergency.riskLevel), "emergency prompt should be high or restricted");
assert.equal(emergency.executionBoundary, "blocked", "emergency prompt should remain blocked");
assert(!/\b(dispatched|ambulance sent|provider called|help is on the way)\b/i.test(`${emergency.summary} ${emergency.safetyNotes.join(" ")}`), "emergency prompt must not claim dispatch");

for (const forbidden of [
  "fetch(",
  "XMLHttpRequest",
  "navigator.geolocation",
  "getUserMedia",
  "window.open",
  "location.href",
  ".click()",
  "openWorkflow(",
  "goSection(",
  "confirmPending",
  "nativeBridge",
  "ACTION_CALL",
  "outboundCalls.push",
  "messages.push",
  "transactions.push",
  "healthProfiles.push"
]) {
  assert(!mapperSource.includes(forbidden), `mapper must not include execution hook: ${forbidden}`);
}

assert(!index.includes("nexus-action-decision-mapper.js"), "Standard User page must not load mapper for observation");
assert(!index.includes("nexus-action-decision-observation.js"), "Standard User page must not load action decision observation");
assert(!/NexusActionDecisionMapper[\s\S]{0,240}(openWorkflow|goSection|request\(|confirm|execute|stage|dispatch|getUserMedia|geolocation)/i.test(app), "frontend must not execute from action decision mapper");
assert(!/NexusActionDecisionMapper[\s\S]{0,240}(openWorkflow|goSection|request\(|confirm|execute|stage|dispatch|getUserMedia|geolocation)/i.test(server), "backend must not execute from action decision mapper");
assert.match(app, /executionBoundary:\s*"metadataOnly"/, "existing frontend metadata remains metadata-only");
assert.match(server, /runtimeStatus:\s*"metadata-only"/, "existing backend agentAction metadata remains metadata-only");
assert.match(memory, /canExecute:\s*false/, "session memory remains non-executing");
assert.match(memory, /executionAuthority:\s*"none"/, "session memory remains non-authoritative");

console.log("Nexus action decision observation QA passed");
console.log("- actionDecision metadata is hidden/debug-only/QA-only");
console.log("- representative prompts observe safe mapper output");
console.log("- high-risk and restricted prompts do not claim execution");
console.log("- Standard User visible behavior remains unchanged");
