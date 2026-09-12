const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const indexPath = path.join(root, "public", "index.html");
const appPath = path.join(root, "public", "app.js");
const serverPath = path.join(root, "server.js");
const memoryPath = path.join(root, "public", "nexus-session-memory.js");
const planDocPath = path.join(root, "docs", "NEXUS_SESSION_MEMORY_RESET_CONSENT_UX_PLAN.md");
const modelDocPath = path.join(root, "docs", "NEXUS_SESSION_MEMORY_MODEL.md");
const uiReadinessDocPath = path.join(root, "docs", "NEXUS_SESSION_MEMORY_UI_READINESS_AUDIT.md");

const memory = require(memoryPath);
const index = fs.readFileSync(indexPath, "utf8");
const app = fs.readFileSync(appPath, "utf8");
const server = fs.readFileSync(serverPath, "utf8");
const memorySource = fs.readFileSync(memoryPath, "utf8");
const planDoc = fs.readFileSync(planDocPath, "utf8");
const modelDoc = fs.readFileSync(modelDocPath, "utf8");
const uiReadinessDoc = fs.readFileSync(uiReadinessDocPath, "utf8");
const activeRuntime = `${index}\n${app}\n${server}`;

assert(!index.includes("nexus-session-memory.js"), "index.html must not load session memory");
assert(!activeRuntime.includes("NexusSessionMemory"), "active runtime must not consume NexusSessionMemory");
assert(!/session-memory|sessionMemory|reset-session-memory|resetSessionMemory/i.test(activeRuntime), "no visible session memory reset UI or runtime hook should be added");
assert(!/data-session-memory|id="[^"]*sessionMemory|class="[^"]*session-memory/i.test(activeRuntime), "no session memory DOM hooks should be introduced");

for (const forbidden of [
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "fetch(",
  "XMLHttpRequest",
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

const context = memory.createNexusSessionContext({
  sessionId: "session.reset.qa",
  currentDomain: "learning",
  currentWorkflowSurface: "Ask Nexus",
  activeTopic: "irrigation",
  safeSummary: "User is discussing irrigation.",
  nonSensitiveHints: ["short lesson"],
  lastSafeStep: "Show safe learning guidance."
});
const task = memory.createNexusPendingTask({
  sessionId: context.sessionId,
  sourceText: "Call John",
  actionType: "call",
  risk: "high",
  canExecute: true,
  executionAuthority: "provider"
});
const reset = memory.resetNexusSessionContext(context, "user_requested_reset");
const cleared = memory.clearNexusSessionContext(context, "consent_reset_completed");
const snapshot = memory.serializeNexusSessionMemory(reset, [task]);

assert.equal(reset.currentDomain, "general", "reset should clear current domain");
assert.equal(reset.currentWorkflowSurface, "", "reset should clear workflow surface");
assert.equal(reset.activeTopic, "", "reset should clear active topic");
assert.equal(reset.safeSummary, "", "reset should clear safe summary");
assert.deepEqual(reset.nonSensitiveHints, [], "reset should clear safe hints");
assert.equal(reset.lastSafeStep, "", "reset should clear last safe step");
assert.equal(reset.canExecute, false, "reset context must remain non-executing");
assert.equal(reset.executionAuthority, "none", "reset context must have no authority");
assert.equal(cleared.canExecute, false, "clear context must remain non-executing");
assert.equal(cleared.executionAuthority, "none", "clear context must have no authority");
assert.equal(snapshot.canExecute, false, "serialized reset snapshot must remain non-executing");
assert.equal(snapshot.executionAuthority, "none", "serialized reset snapshot must have no authority");
assert.equal(snapshot.pendingTasks[0].canExecute, false, "pending task preview after reset must not execute");
assert.equal(snapshot.pendingTasks[0].executionAuthority, "none", "pending task preview after reset must have no authority");

assert.match(planDoc, /Phase: 11G5/, "reset/consent plan should identify Phase 11G5");
assert.match(planDoc, /planning, documentation, and QA only/i, "plan should stay documentation/QA only");
assert.match(planDoc, /Session memory is temporary session context, not authority/i, "plan should state memory is context not authority");
assert.match(planDoc, /memory does not authorize actions/i, "plan should state memory does not authorize actions");
assert.match(planDoc, /memory can be reset/i, "plan should include reset principle");
assert.match(planDoc, /not_shown/i, "plan should document not_shown state");
assert.match(planDoc, /informational_notice_shown/i, "plan should document informational notice state");
assert.match(planDoc, /explicit_user_acknowledgment/i, "plan should document explicit acknowledgment state");
assert.match(planDoc, /reset_requested/i, "plan should document reset requested state");
assert.match(planDoc, /reset_completed/i, "plan should document reset completed state");
assert.match(planDoc, /cancel real-world services/i, "plan should state reset must not cancel services");
assert.match(planDoc, /hang up calls/i, "plan should state reset must not hang up calls");
assert.match(planDoc, /change payments/i, "plan should state reset must not change payments");
assert.match(planDoc, /alter health or emergency state/i, "plan should protect health/emergency state");
assert.match(planDoc, /affect native permissions/i, "plan should protect native permissions");
assert.match(planDoc, /Consent to remember context is not consent to execute/i, "plan should separate memory consent from execution consent");
assert.match(planDoc, /Standard User demo remains unchanged/i, "plan should protect Standard User demo");
assert.match(planDoc, /Reset session context/i, "plan should include reset control copy");
assert.match(planDoc, /canExecute:\s*false/, "plan should preserve canExecute false");
assert.match(planDoc, /executionAuthority:\s*"none"/, "plan should preserve executionAuthority none");
assert(!/memory (authorizes|confirms|executes|dispatches)/i.test(planDoc), "plan must not describe memory as execution authority");

assert.match(modelDoc, /Reset And Clear Behavior/i, "model doc should retain reset/clear section");
assert.match(uiReadinessDoc, /Reset Session Memory Control/i, "UI readiness doc should retain reset-control planning section");

console.log("Nexus session memory reset/consent QA passed");
console.log("- no visible reset/consent UI or runtime wiring is present");
console.log("- reset remains in-memory/model-only and non-executing");
console.log("- consent language stays separate from execution authority");
