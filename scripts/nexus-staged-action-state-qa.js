const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

const docPath = path.join(root, "docs", "NEXUS_STAGED_ACTION_STATE_DERIVATION.md");
const helperPath = path.join(root, "public", "nexus-staged-action-state.js");
const mapperPath = path.join(root, "public", "nexus-action-decision-mapper.js");

assert(fs.existsSync(docPath), "docs/NEXUS_STAGED_ACTION_STATE_DERIVATION.md must exist");
assert(fs.existsSync(helperPath), "public/nexus-staged-action-state.js must exist");

const doc = read("docs", "NEXUS_STAGED_ACTION_STATE_DERIVATION.md");
const helperSource = read("public", "nexus-staged-action-state.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const memory = read("public", "nexus-session-memory.js");
const mapper = require(mapperPath);
const stagedState = require(helperPath);

assert.equal(typeof stagedState.deriveNexusStagedActionState, "function", "helper must expose deriveNexusStagedActionState");

for (const term of [
  "deriveNexusStagedActionState",
  "hidden_metadata_only",
  "informational_response",
  "suggestion_preview",
  "review_option",
  "staged_action",
  "missing_input_required",
  "confirmation_required",
  "provider_handoff_ready",
  "blocked_restricted",
  "cancelled",
  "executionAllowed",
  "providerHandoffAllowed",
  "allowedControls",
  "blockedControls",
  "missingInputs must block execution",
  "restricted actions must not execute",
  "confirmationRequired true means no execution may occur",
  "provider_handoff_only means Nexus may prepare a handoff but did not execute the action",
  "selectedToolId must not directly execute",
  "agentAction must not directly execute",
  "no browser permissions",
  "no call execution",
  "no message execution",
  "no camera opening",
  "no location sharing",
  "no transaction",
  "no emergency dispatch claim",
  "Standard User visible behavior remains unchanged"
]) {
  assert(`${doc}\n${helperSource}`.includes(term), `staged action state doc/helper must include required term: ${term}`);
}

function deriveFromPrompt(prompt, context = {}) {
  const actionDecision = mapper.mapNexusPromptToActionDecision(prompt);
  const state = stagedState.deriveNexusStagedActionState(actionDecision, context);
  assert.equal(state.executionAllowed, false, `${prompt} executionAllowed must be false`);
  assert.equal(state.providerHandoffAllowed, false, `${prompt} providerHandoffAllowed must be false`);
  assert(Array.isArray(state.allowedControls), `${prompt} allowedControls must be an array`);
  assert(Array.isArray(state.blockedControls), `${prompt} blockedControls must be an array`);
  assert(state.blockedControls.includes("execute"), `${prompt} execute must be blocked`);
  return { actionDecision, state };
}

const learning = deriveFromPrompt("Nexus, teach me how irrigation works");
assert.equal(learning.state.uiState, "suggestion_preview", "learning suggestion should derive suggestion_preview");

const jobs = deriveFromPrompt("Nexus, show me farm jobs");
assert.equal(jobs.state.uiState, "review_option", "jobs navigation should derive review_option");

const marketplace = deriveFromPrompt("Nexus, browse AgriTrade");
assert.equal(marketplace.state.uiState, "review_option", "marketplace browse should derive review_option");
assert(marketplace.state.blockedControls.includes("transaction"), "marketplace browse must block transaction");

const agriculture = deriveFromPrompt("Nexus, I need help with crop issues");
assert(["suggestion_preview", "review_option"].includes(agriculture.state.uiState), "agriculture support should derive suggestion or review state");

const call = deriveFromPrompt("Nexus, call someone");
assert.equal(call.state.uiState, "missing_input_required", "call with missing contact should derive missing_input_required");
assert.equal(call.state.providerHandoffAllowed, false, "call missing input should not allow provider handoff");

const message = deriveFromPrompt("Nexus, send a message");
assert.equal(message.state.uiState, "missing_input_required", "message with missing body should derive missing_input_required");

const location = deriveFromPrompt("Nexus, find my location");
assert(["confirmation_required", "blocked_restricted"].includes(location.state.uiState), "location should require confirmation or be blocked");
assert(location.state.blockedControls.includes("request_permission"), "location state must block direct browser permissions");

const camera = deriveFromPrompt("Nexus, use my camera");
assert(["confirmation_required", "blocked_restricted"].includes(camera.state.uiState), "camera should require confirmation or be blocked");
assert(camera.state.blockedControls.includes("open_camera"), "camera state must block camera opening");

const emergency = deriveFromPrompt("Nexus, I have an emergency");
assert.equal(emergency.state.uiState, "blocked_restricted", "emergency should derive blocked_restricted");
assert(!/\b(dispatched|ambulance sent|provider called|help is on the way)\b/i.test(`${emergency.state.description} ${emergency.state.safetyNotes.join(" ")}`), "emergency state must not claim dispatch");

const buy = deriveFromPrompt("Nexus, buy this item");
assert(["blocked_restricted", "confirmation_required"].includes(buy.state.uiState), "buy item should derive blocked or confirmation-required state");
assert(buy.state.blockedControls.includes("transaction"), "buy item must block transaction");

const cancelled = stagedState.deriveNexusStagedActionState(jobs.actionDecision, { cancelled: true });
assert.equal(cancelled.uiState, "cancelled", "cancelled context should derive cancelled");
assert.equal(cancelled.executionAllowed, false, "cancelled state must not execute");

const handoffReady = stagedState.deriveNexusStagedActionState({
  actionId: "test.handoff",
  selectedToolId: "communications.phone",
  riskLevel: "medium",
  userVisibleLabel: "Provider handoff",
  summary: "Review provider handoff.",
  missingInputs: [],
  requiredPermissions: [],
  confirmationRequired: false,
  providerCandidates: [{ providerId: "native-phone" }],
  executionBoundary: "provider_handoff_only",
  resultState: "provider_handoff_ready",
  safetyNotes: []
}, { confirmationSatisfied: true });
assert.equal(handoffReady.uiState, "provider_handoff_ready", "provider_handoff_only may derive provider_handoff_ready after future confirmation context");
assert.equal(handoffReady.executionAllowed, false, "provider_handoff_ready must not mean execution happened");
assert.equal(handoffReady.providerHandoffAllowed, false, "Phase 12F must not allow provider handoff");

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
  assert(!helperSource.includes(forbidden), `staged action helper must not include execution hook: ${forbidden}`);
}

assert(!index.includes("nexus-staged-action-state.js"), "Standard User page must not load staged action state helper yet");
assert(!/NexusStagedActionState[\s\S]{0,240}(openWorkflow|goSection|request\(|confirm|execute|stage|dispatch|getUserMedia|geolocation)/i.test(app), "frontend must not execute from staged action state");
assert(!/NexusStagedActionState[\s\S]{0,240}(openWorkflow|goSection|request\(|confirm|execute|stage|dispatch|getUserMedia|geolocation)/i.test(server), "backend must not execute from staged action state");
assert.match(app, /Preview only - no action has been taken\./, "existing preview-only language must remain");
assert.match(server, /runtimeStatus:\s*"metadata-only"/, "backend agentAction metadata must remain metadata-only");
assert.match(memory, /canExecute:\s*false/, "session memory must remain non-executing");
assert.match(memory, /executionAuthority:\s*"none"/, "session memory must remain non-authoritative");

console.log("Nexus staged action state QA passed");
console.log("- representative actionDecision objects derive safe inert UI states");
console.log("- executionAllowed remains false for every representative case");
console.log("- high-risk, restricted, provider handoff, and cancelled states remain non-executing");
console.log("- Standard User runtime remains unwired to staged action state");
