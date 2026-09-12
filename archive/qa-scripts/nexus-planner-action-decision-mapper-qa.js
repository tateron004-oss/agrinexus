const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

const docPath = path.join(root, "docs", "NEXUS_PLANNER_ACTION_DECISION_MAPPER.md");
const mapperPath = path.join(root, "public", "nexus-action-decision-mapper.js");

assert(fs.existsSync(docPath), "docs/NEXUS_PLANNER_ACTION_DECISION_MAPPER.md must exist");
assert(fs.existsSync(mapperPath), "public/nexus-action-decision-mapper.js must exist");

const doc = read("docs", "NEXUS_PLANNER_ACTION_DECISION_MAPPER.md");
const mapperSource = read("public", "nexus-action-decision-mapper.js");
const app = read("public", "app.js");
const server = read("server.js");
const index = read("public", "index.html");
const memory = read("public", "nexus-session-memory.js");
const mapper = require(mapperPath);

assert.equal(typeof mapper.mapNexusPromptToActionDecision, "function", "mapper must export mapNexusPromptToActionDecision");

for (const term of [
  "mapNexusPromptToActionDecision",
  "actionId",
  "intent",
  "selectedToolId",
  "executionLevel",
  "riskLevel",
  "requiredInputs",
  "missingInputs",
  "requiredPermissions",
  "confirmationRequired",
  "confirmationText",
  "providerCandidates",
  "executionBoundary",
  "auditPolicy",
  "resultState",
  "failureReason",
  "planner metadata is not execution authority",
  "selectedToolId must not directly execute",
  "agentAction must not directly execute",
  "missingInputs must block execution",
  "restricted actions must not execute",
  "provider_handoff_only",
  "suggestion_only",
  "navigation_only",
  "staged_only",
  "confirmation_required",
  "blocked",
  "learning",
  "jobs",
  "marketplace",
  "agriculture",
  "call",
  "message",
  "location",
  "camera",
  "health"
]) {
  assert(`${doc}\n${mapperSource}`.includes(term), `mapper doc/source must include required term: ${term}`);
}

function decision(prompt) {
  const result = mapper.mapNexusPromptToActionDecision(prompt);
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
    assert(Object.prototype.hasOwnProperty.call(result, field), `${prompt} decision missing ${field}`);
  }
  assert(Array.isArray(result.requiredInputs), `${prompt} requiredInputs must be an array`);
  assert(Array.isArray(result.missingInputs), `${prompt} missingInputs must be an array`);
  assert(Array.isArray(result.requiredPermissions), `${prompt} requiredPermissions must be an array`);
  assert(Array.isArray(result.providerCandidates), `${prompt} providerCandidates must be an array`);
  assert(Array.isArray(result.safetyNotes), `${prompt} safetyNotes must be an array`);
  assert.notEqual(result.resultState, "completed", `${prompt} must not report completed in Phase 12C`);
  assert(result.safetyNotes.some(note => /not execution authority|must not directly execute|must not directly execute real actions/i.test(note)), `${prompt} must carry non-execution safety notes`);
  return result;
}

const learning = decision("Nexus, teach me how irrigation works");
assert.equal(learning.riskLevel, "low", "learning prompt should be low risk");
assert(["suggestion_only", "navigation_only"].includes(learning.executionBoundary), "learning prompt should be suggestion or navigation only");
assert.equal(learning.confirmationRequired, false, "learning prompt should not require confirmation");

const jobs = decision("Nexus, show me farm jobs");
assert.equal(jobs.riskLevel, "low", "jobs prompt should be low risk");
assert.equal(jobs.domain, "jobs", "jobs prompt should map to jobs domain");
assert.equal(jobs.executionBoundary, "navigation_only", "jobs prompt should be navigation only");

const marketplace = decision("Nexus, browse AgriTrade");
assert.equal(marketplace.riskLevel, "low", "AgriTrade browse prompt should be low risk");
assert.equal(marketplace.domain, "marketplace", "AgriTrade browse prompt should map to marketplace");
assert.equal(marketplace.executionBoundary, "navigation_only", "AgriTrade browse prompt should be navigation only");
assert.notEqual(marketplace.resultState, "completed", "marketplace review must not claim transaction completion");

const crop = decision("Nexus, I need help with crop issues");
assert.equal(crop.domain, "agriculture", "crop support prompt should map to agriculture");
assert.equal(crop.riskLevel, "low", "crop support prompt should be low risk");
assert.equal(crop.providerCandidates.length, 0, "crop support prompt should not include provider execution");

const call = decision("Nexus, call someone");
assert.equal(call.domain, "communications", "call prompt should map to communications");
assert(call.missingInputs.includes("contactName") || call.missingInputs.includes("phoneNumber"), "call prompt should require contactName or phoneNumber");
assert(["blocked_missing_inputs", "staged"].includes(call.resultState), "call prompt should be blocked_missing_inputs or staged");
assert(call.confirmationRequired === true || call.missingInputs.length > 0, "call prompt should require confirmation or remain blocked due to missing inputs");
assert.notEqual(call.executionBoundary, "controlled_execution", "call prompt must not be controlled execution");

const message = decision("Nexus, send a message");
assert.equal(message.domain, "communications", "message prompt should map to communications");
assert(message.missingInputs.includes("recipient") || message.missingInputs.includes("messageBody"), "message prompt should require recipient and/or messageBody");
assert.notEqual(message.executionBoundary, "controlled_execution", "message prompt must not execute");

const location = decision("Nexus, find my location");
assert.equal(location.riskLevel, "high", "location prompt should be high risk");
assert(location.requiredPermissions.includes("location") || location.requiredPermissions.includes("geolocation"), "location prompt should require location permission");
assert(["blocked", "confirmation_required"].includes(location.executionBoundary), "location prompt should be blocked or confirmation_required");
assert.equal(location.resultState, "blocked_permission_required", "location prompt should remain permission blocked");

const camera = decision("Nexus, use my camera");
assert.equal(camera.riskLevel, "high", "camera prompt should be high risk");
assert(camera.requiredPermissions.includes("camera"), "camera prompt should require camera permission");
assert(["blocked", "confirmation_required"].includes(camera.executionBoundary), "camera prompt should be blocked or confirmation_required");
assert.equal(camera.resultState, "blocked_permission_required", "camera prompt should remain permission blocked");

const emergency = decision("Nexus, I have an emergency");
assert(["restricted", "high"].includes(emergency.riskLevel), "emergency prompt should be restricted or high risk");
assert.equal(emergency.executionBoundary, "blocked", "emergency prompt should be blocked");
assert(!/\b(dispatched|provider called|ambulance sent|help is on the way)\b/i.test(`${emergency.summary} ${emergency.safetyNotes.join(" ")}`), "emergency prompt must not claim dispatch or provider call");

const buy = decision("Nexus, buy this item");
assert(["restricted", "high"].includes(buy.riskLevel), "buy prompt should be high or restricted risk");
assert(["blocked", "confirmation_required"].includes(buy.executionBoundary), "buy prompt should be blocked or confirmation_required");
assert.notEqual(buy.resultState, "completed", "buy prompt must not buy or pay");

for (const source of [mapperSource]) {
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
    assert(!source.includes(forbidden), `mapper must not include execution or permission hook: ${forbidden}`);
  }
}

assert(!index.includes("nexus-action-decision-mapper.js"), "Standard User page must not load action decision mapper yet");
assert(!/NexusActionDecisionMapper[\s\S]{0,240}(openWorkflow|goSection|request\(|confirm|execute|stage|dispatch|getUserMedia|geolocation)/i.test(app), "frontend must not execute from action decision mapper");
assert(!/NexusActionDecisionMapper[\s\S]{0,240}(openWorkflow|goSection|request\(|confirm|execute|stage|dispatch|getUserMedia|geolocation)/i.test(server), "backend must not execute from action decision mapper");
assert.match(app, /executionBoundary:\s*"metadataOnly"/, "existing frontend metadata remains metadata-only");
assert.match(server, /runtimeStatus:\s*"metadata-only"/, "existing backend agentAction metadata remains metadata-only");
assert.match(memory, /canExecute:\s*false/, "session memory remains non-executing");
assert.match(memory, /executionAuthority:\s*"none"/, "session memory remains non-authoritative");

console.log("Nexus planner action decision mapper QA passed");
console.log("- representative prompts map to schema-shaped metadata");
console.log("- low-risk prompts remain suggestion/navigation only");
console.log("- high-risk and restricted prompts remain staged, permission-gated, or blocked");
console.log("- mapper is not loaded into active UI/server execution paths");
