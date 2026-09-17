"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { createServerRuntimeAdapter } = require("../../nexus/compat/server-runtime-adapter.js");

// behaviorTurnRequest/behaviorAcknowledgeRequest are the in-process bridge a
// non-HTTP caller (the legacy server.js voice/native tool dispatcher) uses to
// reach the real behavior spine -- the same one /api/nexus/runtime/behavior/turn
// and .../acknowledgements use over HTTP -- for a capability (lists) that only
// exists in this runtime. These tests cover the bridge itself, not the spine.
function fixture({ behavior } = {}) {
  const active = { ready: Promise.resolve(), behavior };
  const adapter = createServerRuntimeAdapter({ env: {}, resolveUser: async () => null, readJson: async () => ({}), createRuntimeFn: () => active });
  const authoritativeUser = { id: "authoritative-user-1", tenantId: "tenant-authoritative-1", role: "standard-user", permissions: ["tasks:execute"] };
  return { adapter, authoritativeUser };
}

test("behaviorTurnRequest calls the real behavior spine with a request-scoped context, not raw legacy fields", async () => {
  let received;
  const { adapter, authoritativeUser } = fixture({ behavior: { turn: async input => { received = input; return { state: "render_required" }; } } });
  const result = await adapter.behaviorTurnRequest({ text: "Create a checklist called Farm Chores.", channel: "voice", locale: "en", user: authoritativeUser });
  assert.equal(result.state, "render_required");
  assert.equal(received.input.text, "Create a checklist called Farm Chores.");
  assert.equal(received.input.channel, "voice");
  assert.equal(received.input.locale, "en");
  assert.equal(received.context.tenantId, "tenant-authoritative-1");
  assert.equal(received.context.userId, "authoritative-user-1");
  assert.ok(received.input.correlationId, "a correlation id must be generated for the turn");
});

test("behaviorTurnRequest fails closed with no legacy fallback when the behavior spine is unavailable", async () => {
  const { adapter, authoritativeUser } = fixture({ behavior: null });
  await assert.rejects(
    () => adapter.behaviorTurnRequest({ text: "Create a checklist.", user: authoritativeUser }),
    error => { assert.equal(error.code, "behavior_spine_unavailable"); assert.match(error.message, /no legacy write fallback/i); return true; }
  );
});

test("behaviorAcknowledgeRequest forwards the render receipt to the real behavior spine, scoped to the authoritative user", async () => {
  let received;
  const { adapter, authoritativeUser } = fixture({ behavior: { acknowledge: async input => { received = input; return { completed: true, state: "completed" }; } } });
  const result = await adapter.behaviorAcknowledgeRequest({
    taskId: "task-1", commandId: "cmd-1", correlationId: "corr-1", workspace: "lists",
    rendered: true, visible: false, audible: true, evidence: { listId: "list-1" }, user: authoritativeUser
  });
  assert.equal(result.completed, true);
  assert.equal(received.input.taskId, "task-1");
  assert.equal(received.input.rendered, true);
  assert.equal(received.input.audible, true);
  assert.deepEqual(received.input.evidence, { listId: "list-1" });
  assert.equal(received.context.userId, "authoritative-user-1");
});

test("behaviorAcknowledgeRequest fails closed when the renderer acknowledgement path is unavailable", async () => {
  const { adapter, authoritativeUser } = fixture({ behavior: {} });
  await assert.rejects(
    () => adapter.behaviorAcknowledgeRequest({ taskId: "task-1", user: authoritativeUser }),
    error => { assert.equal(error.code, "behavior_acknowledgement_unavailable"); return true; }
  );
});
