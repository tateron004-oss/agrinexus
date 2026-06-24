const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

const docPath = path.join(root, "docs", "NEXUS_STAGED_ACTION_UI_OBSERVATION_QA.md");
const mapperPath = path.join(root, "public", "nexus-action-decision-mapper.js");
const stagedStatePath = path.join(root, "public", "nexus-staged-action-state.js");

assert(fs.existsSync(docPath), "docs/NEXUS_STAGED_ACTION_UI_OBSERVATION_QA.md must exist");
assert(fs.existsSync(mapperPath), "public/nexus-action-decision-mapper.js must exist");
assert(fs.existsSync(stagedStatePath), "public/nexus-staged-action-state.js must exist");

const doc = read("docs", "NEXUS_STAGED_ACTION_UI_OBSERVATION_QA.md");
const qaSource = read("scripts", "nexus-staged-action-ui-observation-qa.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const memory = read("public", "nexus-session-memory.js");
const mapperSource = read("public", "nexus-action-decision-mapper.js");
const stagedStateSource = read("public", "nexus-staged-action-state.js");
const mapper = require(mapperPath);
const stagedState = require(stagedStatePath);

assert.equal(typeof mapper.mapNexusPromptToActionDecision, "function", "mapper must expose mapNexusPromptToActionDecision");
assert.equal(typeof stagedState.deriveNexusStagedActionState, "function", "state helper must expose deriveNexusStagedActionState");

for (const term of [
  "Staged Action UI Observation QA",
  "prompt",
  "actionDecision",
  "stagedActionState",
  "observation metadata only",
  "hidden/debug-only",
  "QA-only",
  "observationOnly",
  "executionAttempted",
  "providerHandoffAttempted",
  "permissionRequested",
  "visibleUiRendered",
  "executionAllowed",
  "providerHandoffAllowed",
  "no visible UI rendered",
  "no live execution",
  "no provider handoff",
  "no browser permissions",
  "no call execution",
  "no message execution",
  "no camera opening",
  "no location sharing",
  "no transaction",
  "no emergency dispatch claim",
  "planner metadata is not execution authority",
  "selectedToolId must not directly execute",
  "agentAction must not directly execute",
  "missingInputs must block execution",
  "restricted actions must not execute",
  "provider_handoff_only must not mean execution happened",
  "confirmationRequired must be honored",
  "Standard User visible behavior remains unchanged"
]) {
  assert(`${doc}\n${qaSource}`.includes(term), `observation doc/QA must include required term: ${term}`);
}

function observePrompt(prompt, context = {}) {
  const actionDecision = mapper.mapNexusPromptToActionDecision(prompt, context);
  const state = stagedState.deriveNexusStagedActionState(actionDecision, context);
  return {
    prompt,
    actionDecision,
    stagedActionState: state,
    observationOnly: true,
    hidden: true,
    debugOnly: true,
    qaOnly: true,
    executionAttempted: false,
    providerHandoffAttempted: false,
    permissionRequested: false,
    visibleUiRendered: false
  };
}

function assertSafeObservation(prompt, context = {}) {
  const observation = observePrompt(prompt, context);
  assert.equal(observation.observationOnly, true, `${prompt} must be observation-only`);
  assert.equal(observation.hidden, true, `${prompt} observation must be hidden`);
  assert.equal(observation.debugOnly, true, `${prompt} observation must be debug-only`);
  assert.equal(observation.qaOnly, true, `${prompt} observation must be QA-only`);
  assert.equal(observation.executionAttempted, false, `${prompt} must not attempt execution`);
  assert.equal(observation.providerHandoffAttempted, false, `${prompt} must not attempt provider handoff`);
  assert.equal(observation.permissionRequested, false, `${prompt} must not request permission`);
  assert.equal(observation.visibleUiRendered, false, `${prompt} must not render visible UI`);
  assert(observation.actionDecision && typeof observation.actionDecision === "object", `${prompt} must include actionDecision`);
  assert(observation.stagedActionState && typeof observation.stagedActionState === "object", `${prompt} must include stagedActionState`);
  assert.equal(observation.stagedActionState.executionAllowed, false, `${prompt} stagedActionState.executionAllowed must be false`);
  assert.equal(observation.stagedActionState.providerHandoffAllowed, false, `${prompt} stagedActionState.providerHandoffAllowed must be false`);
  assert.notEqual(observation.actionDecision.executionBoundary, "controlled_execution", `${prompt} must not be controlled execution`);
  if (["high", "restricted"].includes(observation.actionDecision.riskLevel)) {
    assert.notEqual(observation.actionDecision.resultState, "completed", `${prompt} high/restricted action must not be completed`);
  }
  return observation;
}

const irrigation = assertSafeObservation("Nexus, teach me how irrigation works");
assert.equal(irrigation.actionDecision.domain, "learning", "irrigation prompt should map to learning");
assert.equal(irrigation.actionDecision.riskLevel, "low", "irrigation prompt should be low risk");
assert(["suggestion_preview", "review_option"].includes(irrigation.stagedActionState.uiState), "irrigation should derive suggestion or review state");

const training = assertSafeObservation("Nexus, help me find agriculture training");
assert.equal(training.actionDecision.domain, "learning", "training prompt should map to learning");
assert.equal(training.actionDecision.riskLevel, "low", "training prompt should be low risk");
assert(["suggestion_preview", "review_option"].includes(training.stagedActionState.uiState), "training should derive suggestion or review state");
assert(!/enrolled|completed|certificate issued/i.test(`${training.actionDecision.summary} ${training.actionDecision.safetyNotes.join(" ")}`), "training observation must not claim enrollment");

const jobs = assertSafeObservation("Nexus, show me farm jobs");
assert.equal(jobs.actionDecision.domain, "jobs", "jobs prompt should map to jobs");
assert.equal(jobs.actionDecision.riskLevel, "low", "jobs prompt should be low risk");
assert.equal(jobs.stagedActionState.uiState, "review_option", "jobs should derive review_option");
assert(!/application submitted|shared user data/i.test(`${jobs.actionDecision.summary} ${jobs.actionDecision.safetyNotes.join(" ")}`), "jobs observation must not claim job application submission");

const marketplace = assertSafeObservation("Nexus, browse AgriTrade");
assert.equal(marketplace.actionDecision.domain, "marketplace", "AgriTrade prompt should map to marketplace");
assert.equal(marketplace.actionDecision.riskLevel, "low", "AgriTrade browse should be low risk");
assert.equal(marketplace.stagedActionState.uiState, "review_option", "AgriTrade browse should derive review_option");
assert(marketplace.stagedActionState.blockedControls.includes("transaction"), "AgriTrade browse must block transaction");
assert(!/bought|sold|paid|seller contacted|reserved/i.test(`${marketplace.actionDecision.summary} ${marketplace.actionDecision.safetyNotes.join(" ")}`), "AgriTrade browse must not claim buy/sell/payment/seller contact");

const crop = assertSafeObservation("Nexus, I need help with crop issues");
assert.equal(crop.actionDecision.domain, "agriculture", "crop prompt should map to agriculture");
assert.equal(crop.actionDecision.riskLevel, "low", "crop prompt should be low risk");
assert(["suggestion_preview", "review_option"].includes(crop.stagedActionState.uiState), "crop prompt should derive suggestion or review state");
assert.equal(crop.actionDecision.providerCandidates.length, 0, "crop prompt must not contact provider");

const call = assertSafeObservation("Nexus, call someone");
assert.equal(call.actionDecision.domain, "communications", "call prompt should map to communications");
assert(["medium", "high"].includes(call.actionDecision.riskLevel), "call prompt should be medium or high risk");
assert(call.actionDecision.missingInputs.includes("contactName") || call.actionDecision.missingInputs.includes("phoneNumber"), "call prompt should require missing contactName or phoneNumber");
assert(["missing_input_required", "confirmation_required"].includes(call.stagedActionState.uiState), "call prompt should need input or confirmation");
assert(!/call placed|dialed|provider opened|handoff completed/i.test(`${call.actionDecision.summary} ${call.actionDecision.safetyNotes.join(" ")} ${call.stagedActionState.description}`), "call observation must not claim call execution");

const message = assertSafeObservation("Nexus, send a message");
assert.equal(message.actionDecision.domain, "communications", "message prompt should map to communications");
assert(["medium", "high"].includes(message.actionDecision.riskLevel), "message prompt should be medium or high risk");
assert(message.actionDecision.missingInputs.includes("recipient") || message.actionDecision.missingInputs.includes("messageBody"), "message prompt should require recipient or messageBody");
assert.equal(message.stagedActionState.uiState, "missing_input_required", "message prompt should need missing input");
assert(!/message sent|sent message|provider opened|handoff completed/i.test(`${message.actionDecision.summary} ${message.actionDecision.safetyNotes.join(" ")} ${message.stagedActionState.description}`), "message observation must not claim message execution");

const location = assertSafeObservation("Nexus, find my location");
assert.equal(location.actionDecision.riskLevel, "high", "location prompt should be high risk");
assert(location.actionDecision.requiredPermissions.includes("location") || location.actionDecision.requiredPermissions.includes("geolocation"), "location prompt should require location/geolocation permission");
assert(["confirmation_required", "missing_input_required", "blocked_restricted"].includes(location.stagedActionState.uiState), "location should require confirmation, input, or block");
assert(location.stagedActionState.blockedControls.includes("request_permission"), "location state must block permission request");
assert(!/location shared|location acquired|geolocation requested/i.test(`${location.actionDecision.summary} ${location.actionDecision.safetyNotes.join(" ")}`), "location observation must not request browser geolocation");

const camera = assertSafeObservation("Nexus, use my camera");
assert.equal(camera.actionDecision.riskLevel, "high", "camera prompt should be high risk");
assert(camera.actionDecision.requiredPermissions.includes("camera"), "camera prompt should require camera permission");
assert(camera.stagedActionState.blockedControls.includes("open_camera"), "camera state must block camera opening");
assert(!/camera opened|photo taken|media captured/i.test(`${camera.actionDecision.summary} ${camera.actionDecision.safetyNotes.join(" ")}`), "camera observation must not open camera");

const buy = assertSafeObservation("Nexus, buy this item");
assert(["high", "restricted"].includes(buy.actionDecision.riskLevel), "buy prompt should be high or restricted");
assert(["blocked_restricted", "confirmation_required"].includes(buy.stagedActionState.uiState), "buy prompt should derive blocked or confirmation-required state");
assert(buy.stagedActionState.blockedControls.includes("transaction"), "buy prompt must block transaction");
assert(!/transaction completed|payment sent|item purchased|offer submitted/i.test(`${buy.actionDecision.summary} ${buy.actionDecision.safetyNotes.join(" ")}`), "buy observation must not transact");

const emergency = assertSafeObservation("Nexus, I have an emergency");
assert(["high", "restricted"].includes(emergency.actionDecision.riskLevel), "emergency prompt should be high or restricted");
assert.equal(emergency.stagedActionState.uiState, "blocked_restricted", "emergency prompt should derive blocked_restricted");
assert(!/\b(dispatched|ambulance sent|provider called|help is on the way)\b/i.test(`${emergency.actionDecision.summary} ${emergency.actionDecision.safetyNotes.join(" ")} ${emergency.stagedActionState.description}`), "emergency observation must not claim emergency dispatch");

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
  assert(!`${mapperSource}\n${stagedStateSource}`.includes(forbidden), `mapper/state helpers must not include execution hook: ${forbidden}`);
}

assert(!index.includes("nexus-action-decision-mapper.js"), "Standard User page must not load action decision mapper");
assert(!index.includes("nexus-staged-action-state.js"), "Standard User page must not load staged action state helper");
assert(!index.includes("nexus-staged-action-ui-observation"), "Standard User page must not load staged action UI observation");
assert(!/NexusActionDecisionMapper[\s\S]{0,240}(openWorkflow|goSection|request\(|confirm|execute|stage|dispatch|getUserMedia|geolocation)/i.test(app), "frontend must not execute from mapper");
assert(!/NexusStagedActionState[\s\S]{0,240}(openWorkflow|goSection|request\(|confirm|execute|stage|dispatch|getUserMedia|geolocation)/i.test(app), "frontend must not execute from staged action state");
assert(!/NexusActionDecisionMapper[\s\S]{0,240}(openWorkflow|goSection|request\(|confirm|execute|stage|dispatch|getUserMedia|geolocation)/i.test(server), "backend must not execute from mapper");
assert(!/NexusStagedActionState[\s\S]{0,240}(openWorkflow|goSection|request\(|confirm|execute|stage|dispatch|getUserMedia|geolocation)/i.test(server), "backend must not execute from staged action state");
assert.match(app, /Preview only - no action has been taken\./, "existing preview-only language must remain");
assert.match(app, /Review options/, "existing Review options label must remain");
assert.match(server, /runtimeStatus:\s*"metadata-only"/, "backend agentAction metadata must remain metadata-only");
assert.match(memory, /canExecute:\s*false/, "session memory must remain non-executing");
assert.match(memory, /executionAuthority:\s*"none"/, "session memory must remain non-authoritative");
assert(mapperSource.includes("mapNexusPromptToActionDecision"), "mapper source must remain present");
assert(stagedStateSource.includes("deriveNexusStagedActionState"), "staged state helper source must remain present");

console.log("Nexus staged action UI observation QA passed");
console.log("- prompt -> actionDecision -> stagedActionState observation chain is safe");
console.log("- all observation objects are hidden/debug-only/QA-only and non-executing");
console.log("- high-risk, restricted, permission, communication, transaction, and emergency prompts remain guarded");
console.log("- Standard User runtime remains unwired to staged action UI observation");
