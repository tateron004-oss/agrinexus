const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const indexPath = path.join(root, "public", "index.html");
const appPath = path.join(root, "public", "app.js");
const serverPath = path.join(root, "server.js");
const memoryPath = path.join(root, "public", "nexus-session-memory.js");
const docPath = path.join(root, "docs", "NEXUS_SESSION_MEMORY_STANDARD_USER_DEMO_READINESS.md");
const modelDocPath = path.join(root, "docs", "NEXUS_SESSION_MEMORY_MODEL.md");
const observationDocPath = path.join(root, "docs", "NEXUS_SESSION_MEMORY_OBSERVATION_QA.md");
const uiReadinessDocPath = path.join(root, "docs", "NEXUS_SESSION_MEMORY_UI_READINESS_AUDIT.md");
const resetConsentDocPath = path.join(root, "docs", "NEXUS_SESSION_MEMORY_RESET_CONSENT_UX_PLAN.md");

const memory = require(memoryPath);
const index = fs.readFileSync(indexPath, "utf8");
const app = fs.readFileSync(appPath, "utf8");
const server = fs.readFileSync(serverPath, "utf8");
const memorySource = fs.readFileSync(memoryPath, "utf8");
const doc = fs.readFileSync(docPath, "utf8");
const modelDoc = fs.readFileSync(modelDocPath, "utf8");
const observationDoc = fs.readFileSync(observationDocPath, "utf8");
const uiReadinessDoc = fs.readFileSync(uiReadinessDocPath, "utf8");
const resetConsentDoc = fs.readFileSync(resetConsentDocPath, "utf8");

const activeRuntime = `${index}\n${app}\n${server}`;

assert.match(index, /id="guestStartBtn"/, "Standard User start button must remain present");
assert.match(index, /Start as User/, "Standard User entry label must remain present");
assert.match(index, /nexus-tool-registry\.js/, "Standard User build should still load the tool registry");
assert.match(index, /nexus-intent-classifier\.js/, "Standard User build should still load the intent classifier");
assert.match(index, /nexus-policy-engine\.js/, "Standard User build should still load the policy engine");
assert.match(index, /nexus-planner\.js/, "Standard User build should still load the planner");
assert.match(index, /app\.js/, "Standard User build should still load app.js");
assert(!index.includes("nexus-session-memory.js"), "index.html must not load session memory in the Standard User demo");

for (const forbidden of [
  "NexusSessionMemory",
  "nexus-session-memory",
  "sessionMemory",
  "resetSessionMemory",
  "data-session-memory",
  "session-memory-panel",
  "session-memory-status",
  "session-memory-inspector"
]) {
  assert(!activeRuntime.includes(forbidden), `active Standard User runtime must not include ${forbidden}`);
}

assert(!/app\.(get|post|put|patch|delete)\(\s*["'`]\/api\/(?:nexus-)?(?:session-)?memory/i.test(server), "server must not expose a session memory API route");
assert(!/fetch\(\s*["'`]\/api\/(?:nexus-)?(?:session-)?memory/i.test(activeRuntime), "runtime must not fetch session memory APIs");
assert(!/localStorage\.(?:setItem|getItem|removeItem)\(["'`][^"'`]*(?:sessionMemory|session-memory|memoryConsent|memory-consent)/i.test(activeRuntime), "runtime must not persist session memory in localStorage");
assert(!/sessionStorage\.(?:setItem|getItem|removeItem)\(["'`][^"'`]*(?:sessionMemory|session-memory|memoryConsent|memory-consent)/i.test(activeRuntime), "runtime must not persist session memory in sessionStorage");
assert(!/indexedDB[^;\n]*(?:sessionMemory|session-memory|memoryConsent|memory-consent)/i.test(activeRuntime), "runtime must not persist session memory in IndexedDB");

for (const forbiddenHook of [
  "window.open",
  "location.href",
  ".click()",
  "getUserMedia",
  "geolocation",
  "ACTION_CALL",
  "ACTION_DIAL",
  "openWorkflow",
  "goSection",
  "confirmPending",
  "agentPendingAction",
  "nativeBridge",
  "outboundCalls.push",
  "transactions.push",
  "messages.push"
]) {
  assert(!new RegExp(`NexusSessionMemory[\\s\\S]{0,260}${forbiddenHook.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "i").test(activeRuntime), `session memory must not be wired to ${forbiddenHook}`);
}

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
  sessionId: "session.standard-user-demo.qa",
  currentDomain: "learning",
  currentWorkflowSurface: "Standard User Ask Nexus",
  activeTopic: "irrigation training",
  safeSummary: "User is exploring training options.",
  nonSensitiveHints: ["training", "field support"],
  lastSafeStep: "Show low-risk learning guidance."
});
const task = memory.createNexusPendingTask({
  sessionId: context.sessionId,
  sourceText: "Call Maria at +1 555 555 5555",
  actionType: "call",
  risk: "high",
  canExecute: true,
  executionAuthority: "provider",
  providerUrl: "tel:+15555555555"
});
const snapshot = memory.serializeNexusSessionMemory(context, [task]);
const validation = memory.validateNexusSessionMemorySnapshot(snapshot);

assert.equal(context.canExecute, false, "session context must remain non-executing");
assert.equal(context.executionAuthority, "none", "session context must have no execution authority");
assert.equal(task.canExecute, false, "pending task must remain non-executing");
assert.equal(task.executionAuthority, "none", "pending task must have no execution authority");
assert.equal(task.actionType, "context_only", "blocked executable task types must be downgraded to context_only");
assert.equal(snapshot.canExecute, false, "serialized snapshot must remain non-executing");
assert.equal(snapshot.executionAuthority, "none", "serialized snapshot must have no execution authority");
assert.equal(validation.ok, true, `snapshot validation should pass: ${validation.errors.join(", ")}`);
assert(!JSON.stringify(snapshot).includes("+1 555 555 5555"), "snapshot must not expose raw phone numbers");
assert(!JSON.stringify(snapshot).includes("providerUrl"), "snapshot must not expose executable provider URLs");

assert.match(doc, /Phase: 11G6/, "readiness doc should identify Phase 11G6");
assert.match(doc, /Standard User build is not wired to session memory/i, "doc should state Standard User is not wired to session memory");
assert.match(doc, /does not load `public\/nexus-session-memory\.js`/i, "doc should state session memory is not loaded");
assert.match(doc, /No visible session memory UI/i, "doc should confirm no visible session memory UI");
assert.match(doc, /No session memory state is persisted/i, "doc should confirm no persistence");
assert.match(doc, /Session memory remains context only, not authority/i, "doc should preserve context-not-authority boundary");
assert.match(doc, /planner, policy, provider, native bridge, confirmation, route, health, emergency, call, message, marketplace, payment, account\/profile, camera, or location/i, "doc should cover high-risk runtime boundaries");
assert.match(doc, /Standard User demo testing/i, "doc should state demo-readiness conclusion");

assert.match(modelDoc, /Phase: 11G2/, "model doc should remain present");
assert.match(observationDoc, /Phase: 11G3/, "observation doc should remain present");
assert.match(uiReadinessDoc, /Phase: 11G4/, "UI readiness doc should remain present");
assert.match(resetConsentDoc, /Phase: 11G5/, "reset/consent doc should remain present");

console.log("Nexus session memory Standard User demo QA passed");
console.log("- Standard User index does not load session memory");
console.log("- active app/server runtime does not consume session memory");
console.log("- no session memory persistence, UI, route, provider, native, permission, or execution hooks are present");
console.log("- session memory snapshots remain non-executing and redacted");
