const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const indexPath = path.join(root, "public", "index.html");
const appPath = path.join(root, "public", "app.js");
const serverPath = path.join(root, "server.js");
const memoryPath = path.join(root, "public", "nexus-session-memory.js");
const docPath = path.join(root, "docs", "NEXUS_SESSION_MEMORY_UI_READINESS_AUDIT.md");
const modelDocPath = path.join(root, "docs", "NEXUS_SESSION_MEMORY_MODEL.md");
const observationDocPath = path.join(root, "docs", "NEXUS_SESSION_MEMORY_OBSERVATION_QA.md");

const index = fs.readFileSync(indexPath, "utf8");
const app = fs.readFileSync(appPath, "utf8");
const server = fs.readFileSync(serverPath, "utf8");
const memorySource = fs.readFileSync(memoryPath, "utf8");
const doc = fs.readFileSync(docPath, "utf8");
const modelDoc = fs.readFileSync(modelDocPath, "utf8");
const observationDoc = fs.readFileSync(observationDocPath, "utf8");

const activeRuntime = `${index}\n${app}\n${server}`;

assert(!index.includes("nexus-session-memory.js"), "index.html must not load session memory in Phase 11G4");
assert(!activeRuntime.includes("NexusSessionMemory"), "active runtime must not consume NexusSessionMemory");
assert(!/session-memory-ui|sessionMemoryPanel|sessionMemoryStatus|session-memory-inspector|memory-chip/i.test(activeRuntime), "no visible session memory UI should be introduced");
assert(!/data-session-memory|aria-label="[^"]*session memory|id="[^"]*sessionMemory|class="[^"]*session-memory/i.test(activeRuntime), "no session memory DOM hooks should be introduced");

const forbiddenRuntimePatterns = [
  /NexusSessionMemory[\s\S]{0,240}openWorkflow/i,
  /NexusSessionMemory[\s\S]{0,240}goSection/i,
  /NexusSessionMemory[\s\S]{0,240}fetch\(/i,
  /NexusSessionMemory[\s\S]{0,240}localStorage/i,
  /NexusSessionMemory[\s\S]{0,240}sessionStorage/i,
  /NexusSessionMemory[\s\S]{0,240}request\(/i,
  /NexusSessionMemory[\s\S]{0,240}confirm/i,
  /NexusSessionMemory[\s\S]{0,240}dispatch/i,
  /NexusSessionMemory[\s\S]{0,240}getUserMedia/i,
  /NexusSessionMemory[\s\S]{0,240}geolocation/i,
  /NexusSessionMemory[\s\S]{0,240}native/i,
  /NexusSessionMemory[\s\S]{0,240}payment/i,
  /NexusSessionMemory[\s\S]{0,240}call/i,
  /NexusSessionMemory[\s\S]{0,240}message/i
];
for (const pattern of forbiddenRuntimePatterns) {
  assert(!pattern.test(activeRuntime), `active runtime must not match ${pattern}`);
}

for (const forbidden of [
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "window.open",
  "location.href",
  ".click()",
  "getUserMedia",
  "geolocation",
  "ACTION_CALL",
  "ACTION_DIAL",
  "openWorkflow",
  "confirmPending",
  "agentPendingAction",
  "outboundCalls.push",
  "transactions.push",
  "messages.push"
]) {
  assert(!memorySource.includes(forbidden), `session memory module must not introduce ${forbidden}`);
}

assert.match(memorySource, /canExecute:\s*false/, "session memory must preserve canExecute false");
assert.match(memorySource, /executionAuthority:\s*"none"/, "session memory must preserve executionAuthority none");
assert.match(memorySource, /persistence:\s*"in_memory_only"/, "session memory schema should remain in-memory only");

assert.match(doc, /Phase: 11G4/, "UI readiness audit should identify Phase 11G4");
assert.match(doc, /does not add visible UI/i, "UI readiness audit should state no visible UI is added");
assert.match(doc, /Session memory is context, not authority|not authority/i, "UI readiness audit should preserve context-not-authority boundary");
assert.match(doc, /confirmation bypass controls/i, "UI readiness audit should list unsafe confirmation bypass controls");
assert.match(doc, /auto-run buttons/i, "UI readiness audit should list unsafe auto-run controls");
assert.match(doc, /phone numbers/i, "UI readiness audit should exclude phone numbers");
assert.match(doc, /health details/i, "UI readiness audit should exclude health details");
assert.match(doc, /payment details/i, "UI readiness audit should exclude payment details");
assert.match(doc, /precise location/i, "UI readiness audit should exclude precise location");
assert.match(doc, /reset\/clear/i, "UI readiness audit should document reset or clear expectations");
assert.match(doc, /Standard User demo should remain unchanged/i, "UI readiness audit should protect Standard User demo");

assert.match(modelDoc, /Phase: 11G2/, "model doc should remain present");
assert.match(observationDoc, /Phase: 11G3/, "observation doc should remain present");
assert.match(observationDoc, /read-only/i, "observation doc should preserve read-only posture");

console.log("Nexus session memory UI readiness QA passed");
console.log("- active UI/server do not load session memory");
console.log("- no visible session memory UI or DOM hooks are present");
console.log("- session memory remains in-memory, non-executing, and non-authoritative");
console.log("- UI readiness audit documents safe and unsafe future surfaces");
