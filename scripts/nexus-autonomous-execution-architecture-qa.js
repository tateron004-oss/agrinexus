const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

const docPath = path.join(root, "docs", "NEXUS_AUTONOMOUS_EXECUTION_ARCHITECTURE.md");
assert(fs.existsSync(docPath), "docs/NEXUS_AUTONOMOUS_EXECUTION_ARCHITECTURE.md must exist");

const doc = read("docs", "NEXUS_AUTONOMOUS_EXECUTION_ARCHITECTURE.md");
const app = read("public", "app.js");
const server = read("server.js");
const memory = read("public", "nexus-session-memory.js");

for (const term of [
  "Autonomous Execution Levels",
  "Planner vs Executor Boundary",
  "Action Decision Object",
  "Risk Classification",
  "Confirmation Contract",
  "Provider Adapter Model",
  "Audit and Evidence Model",
  "Future Phase Roadmap",
  "planner must never directly invoke real-world actions",
  "confirmationRequired",
  "executionBoundary",
  "provider_handoff_only",
  "low",
  "medium",
  "high",
  "restricted"
]) {
  assert(doc.includes(term), `architecture doc must include required term: ${term}`);
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
  assert(doc.includes(level), `architecture doc must define ${level}`);
}

for (const adapter of [
  "communications.whatsapp",
  "communications.phone",
  "communications.telegram",
  "maps.location",
  "calendar.google",
  "marketplace.agritrade",
  "learning.koachlearn",
  "jobs.workforce",
  "health.telehealth",
  "agriculture.support"
]) {
  assert(doc.includes(adapter), `architecture doc must define provider adapter: ${adapter}`);
}

for (const phase of [
  "Phase 12B: Autonomous Action Schema QA",
  "Phase 12C: Planner-to-Action Decision Mapper",
  "Phase 12D: Staged Action UI Contract",
  "Phase 12E: Voice Confirmation Contract",
  "Phase 12F: Provider Adapter Registry Spec",
  "Phase 12G: Low-Risk Controlled Execution Prototype",
  "Phase 12H: Contact/Call Provider Handoff Prototype",
  "Phase 12I: Map/Location Controlled Execution Prototype",
  "Phase 12J: Multi-Step Delegated Task Planning"
]) {
  assert(doc.includes(phase), `architecture doc must include roadmap item: ${phase}`);
}

for (const phrase of [
  "does not enable live autonomous execution",
  "selectedToolId",
  "agentAction",
  "session memory",
  "Audit logging must never trigger execution",
  "Vague acknowledgments must not confirm high-risk actions",
  "No provider opens from this object.",
  "The planner is not an executor."
]) {
  assert(doc.includes(phrase), `architecture doc must preserve safety phrase: ${phrase}`);
}

assert.match(app, /executionBoundary:\s*"metadataOnly"/, "runtime should keep controlled action metadata as metadata-only");
assert.match(app, /executionBoundary:\s*"previewOnlyReadiness"/, "runtime should keep preview readiness preview-only");
assert.match(app, /executionBoundary:\s*"confirmationReadinessOnly"/, "runtime should keep confirmation readiness non-executing");
assert.match(app, /executionBoundary:\s*"navigationReadinessOnly"/, "runtime should keep navigation readiness non-executing");
assert.match(app, /runtimeStatus !== "metadata-only"/, "frontend should only observe metadata-only agentAction payloads");
assert.match(server, /runtimeStatus:\s*"metadata-only"/, "backend agentAction metadata must remain metadata-only");
assert.match(server, /source:\s*"existing-router"/, "backend agentAction metadata must preserve existing-router authority");
assert.match(memory, /canExecute:\s*false/, "session memory must remain non-executing");
assert.match(memory, /executionAuthority:\s*"none"/, "session memory must not gain execution authority");

for (const forbidden of [
  "autoExecuteAutonomousAction",
  "executeAutonomousAction(",
  "runProviderAdapterFromPlanner",
  "selectedToolId.execute",
  "agentAction.execute",
  "planner.execute",
  "sessionMemory.execute"
]) {
  assert(!`${app}\n${server}\n${memory}`.includes(forbidden), `runtime must not introduce autonomous execution hook: ${forbidden}`);
}

console.log("Nexus autonomous execution architecture QA passed");
console.log("- architecture document defines execution levels, planner/executor boundary, and action decision object");
console.log("- provider adapter, confirmation, risk, audit, and roadmap terms are present");
console.log("- runtime metadata, planner, and session memory remain non-authoritative");
