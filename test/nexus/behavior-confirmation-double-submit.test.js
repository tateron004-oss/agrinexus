"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const appSource = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

// Found live (fresh-module frontend audit): submitNexusPendingBehaviorConfirmation had no in-flight lock --
// a double "yes" (duplicate voice-final event, double-tap Enter, a second click before the first request
// resolves) fired two concurrent POSTs to /api/nexus/runtime/behavior/confirm for the same pending step.
// Unlike the older confirmPendingWorkflow() path (which already disables its input while in flight), this
// newer behavior-spine path had no equivalent guard. The real backend execution IS already atomic
// (ExecutionRepository.start()'s unique constraint on (tenant_id, idempotency_key) prevents a double real
// action either way -- verified separately against nexus/data/execution-repository.js), so this is a
// robustness/consistency fix, not a double-real-send risk like PR #801 was.

function extractFunction(name, nextMarker) {
  const start = appSource.indexOf(`async function ${name}(`);
  assert.ok(start > 0, `could not locate ${name} in app.js`);
  const end = appSource.indexOf(nextMarker, start);
  assert.ok(end > start, `could not find the end marker for ${name} in app.js`);
  return appSource.slice(start, end);
}

function buildSandbox(requestImpl) {
  const requestCalls = [];
  const sandbox = {
    nexusPendingBehaviorConfirmation: { taskId: "tsk_1", stepId: "step_1" },
    authoritativeGenesisTranscriptRoute: "x",
    pendingAgentClarification: "x",
    pendingNexusSpokenCommand: "x",
    nexusActiveWorkflowState: null,
    nexusAgenticCommandMissions: [],
    NEXUS_PRESENCE_STATES: { THINKING: "thinking" },
    setNexusPresenceState() {},
    requestWithTimeout: (...args) => { requestCalls.push(args); return requestImpl(...args); },
    processNexusAuthoritativeBehaviorResult: async () => true
  };
  vm.createContext(sandbox);
  return { sandbox, requestCalls };
}

test("submitNexusPendingBehaviorConfirmation clears the pending confirmation synchronously, before awaiting the request", () => {
  const source = extractFunction("submitNexusPendingBehaviorConfirmation", "\n// Keeps a plain record-keeping note");
  const { sandbox } = buildSandbox(() => new Promise(() => {})); // never resolves, for this test
  vm.runInContext(source + "\nthis.run = submitNexusPendingBehaviorConfirmation;", sandbox);
  assert.ok(sandbox.nexusPendingBehaviorConfirmation, "precondition: a pending confirmation exists");
  sandbox.run(true, "yes"); // fire and forget -- do not await, we only care about synchronous state right after the call starts
  assert.equal(sandbox.nexusPendingBehaviorConfirmation, null, "the pending confirmation must already be cleared synchronously, before the request resolves");
});

// Bounded so a real regression (the guard being removed, letting the second call also hang awaiting its own
// never-resolving request) fails this test cleanly instead of hanging the whole suite.
function withTimeout(promise, ms, message) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error(message)), ms))
  ]);
}

test("a double 'yes' fires only one real POST to /api/nexus/runtime/behavior/confirm, not two", async () => {
  const source = extractFunction("submitNexusPendingBehaviorConfirmation", "\n// Keeps a plain record-keeping note");
  let resolveRequest;
  const { sandbox, requestCalls } = buildSandbox(() => new Promise(resolve => { resolveRequest = resolve; }));
  vm.runInContext(source + "\nthis.run = submitNexusPendingBehaviorConfirmation;", sandbox);

  const first = sandbox.run(true, "yes");
  const second = sandbox.run(true, "yes"); // fired before the first request resolves -- simulates a double-tap
  assert.equal(await withTimeout(second, 2000, "the second call never resolved -- it is waiting on a real request that was never sent, meaning the double-submit guard regressed"), false,
    "the second call must see no pending confirmation and return false immediately");
  resolveRequest({ schema: "nexus.behavior-turn.v1", authoritative: true, legacyFallbackUsed: false });
  await withTimeout(first, 2000, "the first call never resolved");
  assert.equal(requestCalls.length, 1, "only one real request must have been sent for the double-tap");
});
