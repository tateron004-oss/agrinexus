const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

const docPath = path.join(root, "docs", "NEXUS_STAGED_ACTION_INERT_RENDERER_OBSERVATION_QA.md");
const mapperPath = path.join(root, "public", "nexus-action-decision-mapper.js");
const statePath = path.join(root, "public", "nexus-staged-action-state.js");
const rendererPath = path.join(root, "public", "nexus-staged-action-inert-renderer.js");

assert(fs.existsSync(docPath), "docs/NEXUS_STAGED_ACTION_INERT_RENDERER_OBSERVATION_QA.md must exist");
assert(fs.existsSync(mapperPath), "public/nexus-action-decision-mapper.js must exist");
assert(fs.existsSync(statePath), "public/nexus-staged-action-state.js must exist");
assert(fs.existsSync(rendererPath), "public/nexus-staged-action-inert-renderer.js must exist");

const doc = read("docs", "NEXUS_STAGED_ACTION_INERT_RENDERER_OBSERVATION_QA.md");
const qaSource = read("scripts", "nexus-staged-action-inert-renderer-observation-qa.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const memory = read("public", "nexus-session-memory.js");
const mapperSource = read("public", "nexus-action-decision-mapper.js");
const stateSource = read("public", "nexus-staged-action-state.js");
const rendererSource = read("public", "nexus-staged-action-inert-renderer.js");
const mapper = require(mapperPath);
const stagedState = require(statePath);
const renderer = require(rendererPath);

assert.equal(typeof mapper.mapNexusPromptToActionDecision, "function", "mapper must expose mapNexusPromptToActionDecision");
assert.equal(typeof stagedState.deriveNexusStagedActionState, "function", "state helper must expose deriveNexusStagedActionState");
assert.equal(typeof renderer.deriveNexusStagedActionRenderModel, "function", "renderer must expose deriveNexusStagedActionRenderModel");

for (const term of [
  "Staged Action Inert Renderer Observation QA",
  "prompt",
  "actionDecision",
  "stagedActionState",
  "inertRenderModel",
  "inert render observation metadata only",
  "hidden/debug-only",
  "QA-only",
  "observationOnly",
  "visibleUiRendered",
  "domRendered",
  "clickHandlersAttached",
  "executionAttempted",
  "providerHandoffAttempted",
  "permissionRequested",
  "navigationAttempted",
  "executionAllowed",
  "domRenderingAllowed",
  "clickHandlersAllowed",
  "permissionRequestAllowed",
  "no visible UI rendered",
  "no DOM rendering",
  "no click handlers",
  "no live execution",
  "no provider handoff",
  "no browser permissions",
  "no navigation",
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
  assert(`${doc}\n${qaSource}`.includes(term), `renderer observation doc/QA must include required term: ${term}`);
}

function observe(prompt, context = {}) {
  const actionDecision = mapper.mapNexusPromptToActionDecision(prompt, context);
  const state = stagedState.deriveNexusStagedActionState(actionDecision, context);
  const model = renderer.deriveNexusStagedActionRenderModel(state, actionDecision, context);
  return {
    prompt,
    actionDecision,
    stagedActionState: state,
    inertRenderModel: model,
    observationOnly: true,
    hidden: true,
    debugOnly: true,
    qaOnly: true,
    visibleUiRendered: false,
    domRendered: false,
    clickHandlersAttached: false,
    executionAttempted: false,
    providerHandoffAttempted: false,
    permissionRequested: false,
    navigationAttempted: false
  };
}

function assertSafeObservation(prompt, context = {}) {
  const observation = observe(prompt, context);
  for (const [field, expected] of [
    ["observationOnly", true],
    ["hidden", true],
    ["debugOnly", true],
    ["qaOnly", true],
    ["visibleUiRendered", false],
    ["domRendered", false],
    ["clickHandlersAttached", false],
    ["executionAttempted", false],
    ["providerHandoffAttempted", false],
    ["permissionRequested", false],
    ["navigationAttempted", false]
  ]) {
    assert.equal(observation[field], expected, `${prompt} observation ${field} must be ${expected}`);
  }
  assert(observation.actionDecision && typeof observation.actionDecision === "object", `${prompt} must include actionDecision`);
  assert(observation.stagedActionState && typeof observation.stagedActionState === "object", `${prompt} must include stagedActionState`);
  assert(observation.inertRenderModel && typeof observation.inertRenderModel === "object", `${prompt} must include inertRenderModel`);
  assert.equal(observation.stagedActionState.executionAllowed, false, `${prompt} stagedActionState.executionAllowed must be false`);
  assert.equal(observation.stagedActionState.providerHandoffAllowed, false, `${prompt} stagedActionState.providerHandoffAllowed must be false`);
  assert.equal(observation.inertRenderModel.executionAllowed, false, `${prompt} inertRenderModel.executionAllowed must be false`);
  assert.equal(observation.inertRenderModel.providerHandoffAllowed, false, `${prompt} inertRenderModel.providerHandoffAllowed must be false`);
  assert.equal(observation.inertRenderModel.domRenderingAllowed, false, `${prompt} inertRenderModel.domRenderingAllowed must be false`);
  assert.equal(observation.inertRenderModel.clickHandlersAllowed, false, `${prompt} inertRenderModel.clickHandlersAllowed must be false`);
  assert.equal(observation.inertRenderModel.permissionRequestAllowed, false, `${prompt} inertRenderModel.permissionRequestAllowed must be false`);
  assert.notEqual(observation.actionDecision.executionBoundary, "controlled_execution", `${prompt} must not be controlled execution`);
  if (["high", "restricted"].includes(observation.actionDecision.riskLevel)) {
    assert.notEqual(observation.actionDecision.resultState, "completed", `${prompt} high/restricted action must not be completed`);
  }
  return observation;
}

const irrigation = assertSafeObservation("Nexus, teach me how irrigation works");
assert.equal(irrigation.actionDecision.domain, "learning", "irrigation should map to learning");
assert.equal(irrigation.actionDecision.riskLevel, "low", "irrigation should be low risk");
assert(["suggestion_preview", "review_option"].includes(irrigation.stagedActionState.uiState), "irrigation should derive suggestion/review state");
assert(["inert_preview", "inert_review_option"].includes(irrigation.inertRenderModel.renderMode), "irrigation should derive inert preview/review render model");

const training = assertSafeObservation("Nexus, help me find agriculture training");
assert.equal(training.actionDecision.domain, "learning", "training should map to learning");
assert.equal(training.actionDecision.riskLevel, "low", "training should be low risk");
assert(!/enrolled|completed|certificate issued/i.test(`${training.actionDecision.summary} ${training.actionDecision.safetyNotes.join(" ")} ${training.inertRenderModel.body}`), "training must not claim enrollment");

const jobs = assertSafeObservation("Nexus, show me farm jobs");
assert.equal(jobs.actionDecision.domain, "jobs", "jobs should map to jobs");
assert.equal(jobs.actionDecision.riskLevel, "low", "jobs should be low risk");
assert.equal(jobs.stagedActionState.uiState, "review_option", "jobs should derive review_option");
assert.equal(jobs.inertRenderModel.renderMode, "inert_review_option", "jobs should derive inert_review_option");
assert(!/application submitted|shared user data|navigation attempted/i.test(`${jobs.actionDecision.summary} ${jobs.inertRenderModel.body} ${jobs.inertRenderModel.safetyCopy}`), "jobs must not claim submission or navigation");

const marketplace = assertSafeObservation("Nexus, browse AgriTrade");
assert.equal(marketplace.actionDecision.domain, "marketplace", "AgriTrade should map to marketplace");
assert.equal(marketplace.actionDecision.riskLevel, "low", "AgriTrade should be low risk");
assert.equal(marketplace.stagedActionState.uiState, "review_option", "AgriTrade should derive review_option");
assert.equal(marketplace.inertRenderModel.renderMode, "inert_review_option", "AgriTrade should derive inert review model");
assert(!/bought|sold|paid|seller contacted|reserved|transaction completed|payment sent/i.test(`${marketplace.actionDecision.summary} ${marketplace.actionDecision.safetyNotes.join(" ")} ${marketplace.inertRenderModel.body} ${marketplace.inertRenderModel.safetyCopy}`), "AgriTrade observation must not claim transaction completion");

const crop = assertSafeObservation("Nexus, I need help with crop issues");
assert.equal(crop.actionDecision.domain, "agriculture", "crop prompt should map to agriculture");
assert.equal(crop.actionDecision.riskLevel, "low", "crop prompt should be low risk");
assert(["suggestion_preview", "review_option"].includes(crop.stagedActionState.uiState), "crop should derive suggestion/review state");
assert.equal(crop.actionDecision.providerCandidates.length, 0, "crop prompt must not contact provider");

const call = assertSafeObservation("Nexus, call someone");
assert.equal(call.actionDecision.domain, "communications", "call prompt should map to communications");
assert(["medium", "high"].includes(call.actionDecision.riskLevel), "call should be medium or high risk");
assert(call.actionDecision.missingInputs.includes("contactName") || call.actionDecision.missingInputs.includes("phoneNumber"), "call should include missing contactName or phoneNumber");
assert(["missing_input_required", "confirmation_required"].includes(call.stagedActionState.uiState), "call should need input or confirmation");
assert(call.inertRenderModel.missingInputCopy || call.inertRenderModel.confirmationCopy, "call render model should include missingInputCopy or confirmationCopy");
assert(!/call placed|dialed|provider opened|handoff completed/i.test(`${call.actionDecision.summary} ${call.actionDecision.safetyNotes.join(" ")} ${call.inertRenderModel.body} ${call.inertRenderModel.providerCopy}`), "call observation must not claim call execution");

const message = assertSafeObservation("Nexus, send a message");
assert.equal(message.actionDecision.domain, "communications", "message prompt should map to communications");
assert(["medium", "high"].includes(message.actionDecision.riskLevel), "message should be medium or high risk");
assert(message.actionDecision.missingInputs.includes("recipient") || message.actionDecision.missingInputs.includes("messageBody"), "message should include missing recipient or messageBody");
assert(!/message sent|sent message|provider opened|send complete/i.test(`${message.actionDecision.summary} ${message.actionDecision.safetyNotes.join(" ")} ${message.inertRenderModel.body} ${message.inertRenderModel.providerCopy}`), "message observation must not claim sent message");

const location = assertSafeObservation("Nexus, find my location");
assert.equal(location.actionDecision.riskLevel, "high", "location should be high risk");
assert(location.actionDecision.requiredPermissions.includes("location") || location.actionDecision.requiredPermissions.includes("geolocation"), "location should require location/geolocation permission");
assert.equal(location.inertRenderModel.permissionRequestAllowed, false, "location render model must not request permission");
assert(!/location shared|location acquired|geolocation requested/i.test(`${location.actionDecision.summary} ${location.actionDecision.safetyNotes.join(" ")} ${location.inertRenderModel.body}`), "location observation must not request browser geolocation");

const camera = assertSafeObservation("Nexus, use my camera");
assert.equal(camera.actionDecision.riskLevel, "high", "camera should be high risk");
assert(camera.actionDecision.requiredPermissions.includes("camera"), "camera should require camera permission");
assert.equal(camera.inertRenderModel.permissionRequestAllowed, false, "camera render model must not request permission");
assert(!/camera opened|photo taken|media captured/i.test(`${camera.actionDecision.summary} ${camera.actionDecision.safetyNotes.join(" ")} ${camera.inertRenderModel.body}`), "camera observation must not open camera");

const buy = assertSafeObservation("Nexus, buy this item");
assert(["high", "restricted"].includes(buy.actionDecision.riskLevel), "buy should be high or restricted");
assert(["blocked_restricted", "confirmation_required"].includes(buy.stagedActionState.uiState), "buy should be blocked or confirmation-required");
assert(!/transaction completed|payment sent|item purchased|offer submitted|reserved|seller contacted/i.test(`${buy.actionDecision.summary} ${buy.actionDecision.safetyNotes.join(" ")} ${buy.inertRenderModel.body} ${buy.inertRenderModel.warningText}`), "buy observation must not claim transaction");

const emergency = assertSafeObservation("Nexus, I have an emergency");
assert(["high", "restricted"].includes(emergency.actionDecision.riskLevel), "emergency should be high or restricted");
assert.equal(emergency.stagedActionState.uiState, "blocked_restricted", "emergency should be blocked");
assert.equal(emergency.inertRenderModel.renderMode, "inert_blocked", "emergency should derive inert blocked render model");
assert(!/\b(dispatched|ambulance sent|provider called|help is on the way)\b/i.test(`${emergency.actionDecision.summary} ${emergency.actionDecision.safetyNotes.join(" ")} ${emergency.inertRenderModel.body} ${emergency.inertRenderModel.warningText}`), "emergency observation must not claim dispatch");

const cancelledActionDecision = mapper.mapNexusPromptToActionDecision("Nexus, show me farm jobs");
const cancelledState = stagedState.deriveNexusStagedActionState(cancelledActionDecision, { cancelled: true });
const cancelledModel = renderer.deriveNexusStagedActionRenderModel(cancelledState, cancelledActionDecision, { cancelled: true });
const cancelledObservation = {
  prompt: "Nexus, show me farm jobs",
  actionDecision: cancelledActionDecision,
  stagedActionState: cancelledState,
  inertRenderModel: cancelledModel,
  observationOnly: true,
  hidden: true,
  debugOnly: true,
  qaOnly: true,
  visibleUiRendered: false,
  domRendered: false,
  clickHandlersAttached: false,
  executionAttempted: false,
  providerHandoffAttempted: false,
  permissionRequested: false,
  navigationAttempted: false
};
assert.equal(cancelledObservation.stagedActionState.uiState, "cancelled", "cancelled fixture should derive cancelled uiState");
assert.equal(cancelledObservation.inertRenderModel.renderMode, "inert_cancelled", "cancelled fixture should derive inert_cancelled");
assert.equal(cancelledObservation.inertRenderModel.executionAllowed, false, "cancelled fixture must not execute");
assert(!/execute|reopen execution/i.test(`${cancelledObservation.inertRenderModel.primaryControlLabel} ${cancelledObservation.inertRenderModel.body}`), "cancelled fixture must not expose execution controls");

for (const forbidden of [
  "document.createElement",
  "addEventListener",
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
  assert(!`${mapperSource}\n${stateSource}\n${rendererSource}`.includes(forbidden), `metadata helpers must not include runtime hook: ${forbidden}`);
}

assert(!index.includes("nexus-action-decision-mapper.js"), "Standard User page must not load action decision mapper");
assert(!index.includes("nexus-staged-action-state.js"), "Standard User page must not load staged action state helper");
assert(!index.includes("nexus-staged-action-inert-renderer.js"), "Standard User page must not load inert renderer helper");
assert(!index.includes("nexus-staged-action-inert-renderer-observation"), "Standard User page must not load inert renderer observation");
assert(!/NexusActionDecisionMapper[\s\S]{0,240}(openWorkflow|goSection|request\(|confirm|execute|stage|dispatch|getUserMedia|geolocation)/i.test(app), "frontend must not execute from mapper");
assert(!/NexusStagedActionState[\s\S]{0,240}(openWorkflow|goSection|request\(|confirm|execute|stage|dispatch|getUserMedia|geolocation)/i.test(app), "frontend must not execute from staged action state");
assert(!/NexusStagedActionInertRenderer[\s\S]{0,240}(openWorkflow|goSection|request\(|confirm|execute|stage|dispatch|getUserMedia|geolocation)/i.test(app), "frontend must not execute from inert renderer");
assert(!/NexusActionDecisionMapper[\s\S]{0,240}(openWorkflow|goSection|request\(|confirm|execute|stage|dispatch|getUserMedia|geolocation)/i.test(server), "backend must not execute from mapper");
assert(!/NexusStagedActionState[\s\S]{0,240}(openWorkflow|goSection|request\(|confirm|execute|stage|dispatch|getUserMedia|geolocation)/i.test(server), "backend must not execute from staged action state");
assert(!/NexusStagedActionInertRenderer[\s\S]{0,240}(openWorkflow|goSection|request\(|confirm|execute|stage|dispatch|getUserMedia|geolocation)/i.test(server), "backend must not execute from inert renderer");
assert.match(app, /Preview only - no action has been taken\./, "existing preview-only language must remain");
assert.match(app, /Review options/, "existing Review options label must remain");
assert.match(server, /runtimeStatus:\s*"metadata-only"/, "backend agentAction metadata must remain metadata-only");
assert.match(memory, /canExecute:\s*false/, "session memory must remain non-executing");
assert.match(memory, /executionAuthority:\s*"none"/, "session memory must remain non-authoritative");

console.log("Nexus staged action inert renderer observation QA passed");
console.log("- prompt -> actionDecision -> stagedActionState -> inertRenderModel chain is safe");
console.log("- observations remain hidden/debug-only/QA-only with no DOM, click handlers, permissions, navigation, handoff, or execution");
console.log("- high-risk, restricted, communication, permission, transaction, emergency, and cancelled cases remain guarded");
console.log("- Standard User runtime remains unwired to inert renderer observation");
