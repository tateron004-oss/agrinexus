const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

const docPath = path.join(root, "docs", "NEXUS_AUTONOMOUS_ACTION_SCHEMA.md");
assert(fs.existsSync(docPath), "docs/NEXUS_AUTONOMOUS_ACTION_SCHEMA.md must exist");

const doc = read("docs", "NEXUS_AUTONOMOUS_ACTION_SCHEMA.md");
const phase12aDoc = read("docs", "NEXUS_AUTONOMOUS_EXECUTION_ARCHITECTURE.md");
const app = read("public", "app.js");
const server = read("server.js");
const memory = read("public", "nexus-session-memory.js");

for (const term of [
  "actionId",
  "intent",
  "selectedToolId",
  "executionLevel",
  "riskLevel",
  "domain",
  "userVisibleLabel",
  "requiredInputs",
  "missingInputs",
  "requiredPermissions",
  "confirmationRequired",
  "confirmationText",
  "providerCandidates",
  "executionBoundary",
  "auditPolicy",
  "resultState",
  "failureReason"
]) {
  assert(doc.includes(term), `autonomous action schema must include field: ${term}`);
}

for (const rule of [
  "planner metadata is not execution authority",
  "selectedToolId must not directly execute",
  "agentAction must not directly execute",
  "executionLevel must be policy-checked",
  "riskLevel must be policy-checked",
  "confirmationRequired must be honored",
  "provider handoff must be explicit",
  "missingInputs must block execution",
  "restricted actions must not execute"
]) {
  assert(doc.includes(rule), `autonomous action schema must include safety rule: ${rule}`);
}

for (const boundary of [
  "provider_handoff_only",
  "conversation_only",
  "suggestion_only",
  "navigation_only",
  "staged_only",
  "confirmation_required",
  "controlled_execution",
  "blocked"
]) {
  assert(doc.includes(boundary), `autonomous action schema must include execution boundary: ${boundary}`);
}

for (const risk of ["low", "medium", "high", "restricted"]) {
  assert(doc.includes(`\`${risk}\``) || doc.includes(`- ${risk}`), `autonomous action schema must define risk level: ${risk}`);
}

for (const level of [
  "Level 0: Conversation Only",
  "Level 1: Suggestion / Recommendation",
  "Level 2: Navigation / Review Option",
  "Level 3: Staged Action",
  "Level 4: Confirmation-Gated Action",
  "Level 5: Provider Handoff",
  "Level 6: Controlled Execution",
  "Level 7: Delegated Multi-Step Autonomy"
]) {
  assert(doc.includes(level), `autonomous action schema must reference ${level}`);
}

for (const state of [
  "proposed",
  "blocked_missing_inputs",
  "blocked_permission_required",
  "staged",
  "confirmation_pending",
  "cancelled",
  "provider_handoff_ready",
  "provider_handoff_opened",
  "execution_blocked",
  "completed",
  "failed"
]) {
  assert(doc.includes(state), `autonomous action schema must include resultState: ${state}`);
}

for (const reason of [
  "missing_required_input",
  "permission_not_granted",
  "confirmation_not_granted",
  "duplicate_contact_match",
  "provider_unavailable",
  "unsupported_action",
  "restricted_action",
  "policy_blocked",
  "audit_required",
  "unknown_error"
]) {
  assert(doc.includes(reason), `autonomous action schema must include failureReason: ${reason}`);
}

for (const example of [
  "Nexus, teach me how irrigation works.",
  "Nexus, show me farm jobs.",
  "Nexus, browse AgriTrade.",
  "Nexus, call Maria.",
  "Nexus, send a message.",
  "Nexus, find my location.",
  "Nexus, I need medical help.",
  "Nexus, I need help with crop issues."
]) {
  assert(doc.includes(example), `autonomous action schema must include required domain example: ${example}`);
}

for (const phrase of [
  "It is not execution authority",
  "does not enable live autonomous execution",
  "The planner is not an executor.",
  "provider_handoff_only does not mean the app executed the action",
  "completed is only allowed for low-risk internal UI actions or future policy-approved controlled execution",
  "Phase 12C: Planner-To-Action Decision Mapper"
]) {
  assert(doc.includes(phrase), `autonomous action schema must preserve safety phrase: ${phrase}`);
}

assert(phase12aDoc.includes("Action Decision Object"), "Phase 12A architecture must still define Action Decision Object");
assert(phase12aDoc.includes("planner must never directly invoke real-world actions"), "Phase 12A planner/executor boundary must remain present");
assert.match(app, /executionBoundary:\s*"metadataOnly"/, "frontend controlled action metadata must remain metadata-only");
assert.match(app, /executionBoundary:\s*"previewOnlyReadiness"/, "frontend preview readiness must remain preview-only");
assert.match(app, /executionBoundary:\s*"confirmationReadinessOnly"/, "frontend confirmation readiness must remain non-executing");
assert.match(app, /executionBoundary:\s*"navigationReadinessOnly"/, "frontend navigation readiness must remain non-executing");
assert.match(server, /runtimeStatus:\s*"metadata-only"/, "backend agentAction metadata must remain metadata-only");
assert.match(server, /source:\s*"existing-router"/, "backend agentAction source must remain existing-router");
assert.match(memory, /canExecute:\s*false/, "session memory must remain non-executing");
assert.match(memory, /executionAuthority:\s*"none"/, "session memory must not gain execution authority");

for (const forbidden of [
  "executeAutonomousAction(",
  "runAutonomousExecutor(",
  "selectedToolId.execute",
  "agentAction.execute",
  "planner.execute",
  "sessionMemory.execute",
  "autonomousAction.execute",
  "providerCandidates[0].execute"
]) {
  assert(!`${app}\n${server}\n${memory}`.includes(forbidden), `runtime must not introduce action-schema execution hook: ${forbidden}`);
}

console.log("Nexus autonomous action schema QA passed");
console.log("- schema document defines canonical autonomous action metadata fields");
console.log("- execution levels, risk levels, boundaries, result states, and failure reasons are covered");
console.log("- runtime metadata, planner, and session memory remain non-authoritative");
