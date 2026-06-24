const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

const docPath = path.join(root, "docs", "NEXUS_STAGED_ACTION_INERT_RENDERER_CONTRACT.md");
const helperPath = path.join(root, "public", "nexus-staged-action-inert-renderer.js");
const mapperPath = path.join(root, "public", "nexus-action-decision-mapper.js");
const statePath = path.join(root, "public", "nexus-staged-action-state.js");

assert(fs.existsSync(docPath), "docs/NEXUS_STAGED_ACTION_INERT_RENDERER_CONTRACT.md must exist");
assert(fs.existsSync(helperPath), "public/nexus-staged-action-inert-renderer.js must exist");

const doc = read("docs", "NEXUS_STAGED_ACTION_INERT_RENDERER_CONTRACT.md");
const helperSource = read("public", "nexus-staged-action-inert-renderer.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const memory = read("public", "nexus-session-memory.js");
const mapper = require(mapperPath);
const stagedState = require(statePath);
const renderer = require(helperPath);

assert.equal(typeof renderer.deriveNexusStagedActionRenderModel, "function", "helper must expose deriveNexusStagedActionRenderModel");

for (const section of [
  "## 1. Purpose And Scope",
  "## 2. Relationship To Phase 12E, 12F, And 12G",
  "## 3. Why This Is An Inert Renderer Contract",
  "## 4. Render Model Object Shape",
  "## 5. Supported stagedActionState.uiState Values",
  "## 6. State-By-State Rendering Rules",
  "## 7. Control Label Rules",
  "## 8. Disabled Control Rules",
  "## 9. Risk-Based Copy Rules",
  "## 10. Missing-Input Copy Rules",
  "## 11. Confirmation Copy Rules",
  "## 12. Provider Handoff Copy Rules",
  "## 13. Blocked/Restricted Copy Rules",
  "## 14. Standard User Behavior Preservation",
  "## 15. Future Runtime Renderer Guidance",
  "## 16. QA Coverage",
  "## 17. Non-Goals"
]) {
  assert(doc.includes(section), `renderer contract must include section: ${section}`);
}

for (const term of [
  "Staged Action Inert Renderer Contract",
  "deriveNexusStagedActionRenderModel",
  "inert render metadata only",
  "renderMode",
  "visible",
  "title",
  "body",
  "badge",
  "riskLabel",
  "primaryControlLabel",
  "secondaryControlLabel",
  "disabledControls",
  "warningText",
  "confirmationCopy",
  "providerCopy",
  "missingInputCopy",
  "safetyCopy",
  "executionAllowed",
  "providerHandoffAllowed",
  "permissionRequestAllowed",
  "domRenderingAllowed",
  "clickHandlersAllowed",
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
  "no DOM rendering",
  "no visible runtime UI",
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
  "confirmationRequired must be honored",
  "Standard User visible behavior remains unchanged"
]) {
  assert(`${doc}\n${helperSource}`.includes(term), `renderer doc/helper must include required term: ${term}`);
}

function derive(prompt, context = {}) {
  const actionDecision = mapper.mapNexusPromptToActionDecision(prompt, context);
  const state = stagedState.deriveNexusStagedActionState(actionDecision, context);
  const model = renderer.deriveNexusStagedActionRenderModel(state, actionDecision, context);
  assert.equal(model.executionAllowed, false, `${prompt} executionAllowed must be false`);
  assert.equal(model.providerHandoffAllowed, false, `${prompt} providerHandoffAllowed must be false`);
  assert.equal(model.permissionRequestAllowed, false, `${prompt} permissionRequestAllowed must be false`);
  assert.equal(model.domRenderingAllowed, false, `${prompt} domRenderingAllowed must be false`);
  assert.equal(model.clickHandlersAllowed, false, `${prompt} clickHandlersAllowed must be false`);
  assert.equal(model.visible, false, `${prompt} model must not render visibly in Phase 12H`);
  assert(Array.isArray(model.disabledControls), `${prompt} disabledControls must be an array`);
  for (const control of ["execute", "provider_handoff", "request_permission"]) {
    assert(model.disabledControls.includes(control), `${prompt} must disable ${control}`);
  }
  return { actionDecision, state, model };
}

const learning = derive("Nexus, teach me how irrigation works");
assert.equal(learning.state.uiState, "suggestion_preview", "learning should derive suggestion_preview");
assert.equal(learning.model.renderMode, "inert_preview", "learning should derive inert_preview");

const jobs = derive("Nexus, show me farm jobs");
assert.equal(jobs.state.uiState, "review_option", "jobs should derive review_option");
assert.equal(jobs.model.renderMode, "inert_review_option", "jobs should derive inert_review_option");
assert(!/application submitted|shared user data/i.test(`${jobs.model.body} ${jobs.model.safetyCopy}`), "jobs model must not claim application submission");

const marketplace = derive("Nexus, browse AgriTrade");
assert.equal(marketplace.state.uiState, "review_option", "marketplace should derive review_option");
assert(marketplace.model.disabledControls.includes("transaction"), "marketplace model must disable transaction");
assert(!/bought|sold|paid|seller contacted|reserved/i.test(`${marketplace.model.body} ${marketplace.model.safetyCopy}`), "marketplace model must not claim buy/sell/payment/contact");

const agriculture = derive("Nexus, I need help with crop issues");
assert(["inert_preview", "inert_review_option"].includes(agriculture.model.renderMode), "agriculture support should derive preview/review render metadata");

const call = derive("Nexus, call someone");
assert.equal(call.state.uiState, "missing_input_required", "call missing target should require missing input");
assert.equal(call.model.renderMode, "inert_missing_input", "call should derive inert_missing_input");
assert(call.model.missingInputCopy.includes("contactName") || call.model.missingInputCopy.includes("phoneNumber"), "call model should identify missing contact/phone generically");
assert(!/call placed|dialed|provider opened|handoff completed/i.test(`${call.model.body} ${call.model.providerCopy} ${call.model.safetyCopy}`), "call model must not claim call execution");

const message = derive("Nexus, send a message");
assert.equal(message.state.uiState, "missing_input_required", "message should require missing input");
assert.equal(message.model.renderMode, "inert_missing_input", "message should derive inert_missing_input");
assert(!/message sent|sent message|provider opened/i.test(`${message.model.body} ${message.model.providerCopy} ${message.model.safetyCopy}`), "message model must not claim message execution");

const location = derive("Nexus, find my location");
assert(["inert_confirmation_required", "inert_blocked"].includes(location.model.renderMode), "location should derive confirmation or blocked render metadata");
assert(location.model.disabledControls.includes("request_permission"), "location model must disable permission request");

const camera = derive("Nexus, use my camera");
assert(["inert_confirmation_required", "inert_blocked"].includes(camera.model.renderMode), "camera should derive confirmation or blocked render metadata");
assert(camera.model.disabledControls.includes("open_camera"), "camera model must disable open_camera");

const buy = derive("Nexus, buy this item");
assert(["inert_confirmation_required", "inert_blocked"].includes(buy.model.renderMode), "buy should derive confirmation or blocked render metadata");
assert(buy.model.disabledControls.includes("transaction"), "buy model must disable transaction");
assert(!/transaction completed|payment sent|item purchased|offer submitted/i.test(`${buy.model.body} ${buy.model.warningText} ${buy.model.safetyCopy}`), "buy model must not claim transaction");

const emergency = derive("Nexus, I have an emergency");
assert.equal(emergency.state.uiState, "blocked_restricted", "emergency should be blocked");
assert.equal(emergency.model.renderMode, "inert_blocked", "emergency should derive inert_blocked");
assert(!/\b(dispatched|ambulance sent|provider called|help is on the way)\b/i.test(`${emergency.model.body} ${emergency.model.warningText} ${emergency.model.safetyCopy}`), "emergency model must not claim dispatch");

const cancelled = renderer.deriveNexusStagedActionRenderModel(
  stagedState.deriveNexusStagedActionState(jobs.actionDecision, { cancelled: true }),
  jobs.actionDecision,
  { cancelled: true }
);
assert.equal(cancelled.renderMode, "inert_cancelled", "cancelled should derive inert_cancelled");
assert.equal(cancelled.executionAllowed, false, "cancelled model must not execute");

const providerReady = renderer.deriveNexusStagedActionRenderModel({
  uiState: "provider_handoff_ready",
  visibleLabel: "Provider handoff",
  description: "Review provider handoff.",
  riskLevel: "medium",
  executionBoundary: "provider_handoff_only",
  blockedControls: ["provider_handoff"],
  executionAllowed: false,
  providerHandoffAllowed: false
}, {
  selectedToolId: "communications.phone",
  executionBoundary: "provider_handoff_only",
  riskLevel: "medium"
});
assert.equal(providerReady.renderMode, "inert_provider_handoff_ready", "provider handoff ready should derive inert provider metadata");
assert.equal(providerReady.providerHandoffAllowed, false, "provider handoff must not be allowed in Phase 12H");
assert(!/provider opened|handoff completed|call placed/i.test(`${providerReady.providerCopy} ${providerReady.warningText}`), "provider model must not claim provider opened");

const confirmation = renderer.deriveNexusStagedActionRenderModel({
  uiState: "confirmation_required",
  visibleLabel: "Confirm",
  description: "Review before action.",
  riskLevel: "high",
  executionBoundary: "confirmation_required",
  blockedControls: ["execute"],
  confirmationRequired: true,
  executionAllowed: false,
  providerHandoffAllowed: false
}, { confirmationRequired: true, riskLevel: "high" });
assert.equal(confirmation.renderMode, "inert_confirmation_required", "confirmation should derive inert confirmation model");
assert(!/granted|confirmed|approved/i.test(confirmation.confirmationCopy), "confirmation model must not claim confirmation granted");

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
  assert(!helperSource.includes(forbidden), `inert renderer helper must not include runtime hook: ${forbidden}`);
}

assert(!index.includes("nexus-staged-action-inert-renderer.js"), "Standard User page must not load inert renderer helper yet");
assert(!/NexusStagedActionInertRenderer[\s\S]{0,240}(openWorkflow|goSection|request\(|confirm|execute|stage|dispatch|getUserMedia|geolocation)/i.test(app), "frontend must not execute from inert renderer");
assert(!/NexusStagedActionInertRenderer[\s\S]{0,240}(openWorkflow|goSection|request\(|confirm|execute|stage|dispatch|getUserMedia|geolocation)/i.test(server), "backend must not execute from inert renderer");
assert.match(app, /Preview only - no action has been taken\./, "existing preview-only language must remain");
assert.match(app, /Review options/, "existing Review options label must remain");
assert.match(server, /runtimeStatus:\s*"metadata-only"/, "backend agentAction metadata must remain metadata-only");
assert.match(memory, /canExecute:\s*false/, "session memory must remain non-executing");
assert.match(memory, /executionAuthority:\s*"none"/, "session memory must remain non-authoritative");

console.log("Nexus staged action inert renderer QA passed");
console.log("- representative stagedActionState values derive inert render metadata");
console.log("- render models never allow execution, provider handoff, permission request, DOM rendering, or click handlers");
console.log("- high-risk, restricted, confirmation, provider handoff, and cancelled cases remain safe");
console.log("- Standard User runtime remains unwired to the inert renderer");
