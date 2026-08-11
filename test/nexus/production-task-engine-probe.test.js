"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createServerRuntimeAdapter } = require("../../nexus/compat/server-runtime-adapter.js");

test("acceptance task-engine probe persists and closes an exact-release task", async () => {
  const sha = "a".repeat(40); const calls = [];
  const runtime = { ready: Promise.resolve(), engine: {
    async create(input) { calls.push(["create", input]); return { taskId: "task_probe" }; },
    async transition(input) { calls.push(["transition", input]); return { state: "cancelled" }; }
  }, tasks: { async get(input) { calls.push(["get", input]); return { taskId: "task_probe", state: "cancelled", steps: [{}] }; } },
  db: { async query() { return { rows: [{ tenant_id: "tenant-1", user_id: "user-1", role: "acceptance-controller", permissions: ["acceptance:identity"] }] }; } } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "secret", RENDER_GIT_COMMIT: sha },
    resolveUser: async () => null, readJson: async () => ({ releaseSha: sha }), createRuntimeFn: () => runtime });
  const response = {}; let status; let body;
  await adapter.handle({ method: "POST", headers: { authorization: "Bearer secret" } }, response,
    new URL("https://production/api/nexus/runtime/production-acceptance/probes/task-engine"), (_res, code, value) => { status = code; body = value; });
  assert.equal(status, 200); assert.equal(body.ok, true); assert.equal(body.releaseSha, sha);
  assert.equal(body.durable, true); assert.equal(body.state, "cancelled"); assert.equal(body.steps, 1);
  assert.deepEqual(calls.map(([name]) => name), ["create", "transition", "get"]);
  assert.match(calls[0][1].command.conversationId, /^cnv_/);
  assert.equal(calls[0][1].command.tenantId, "tenant-1"); assert.equal(calls[0][1].command.actorId, "user-1");
});

test("acceptance task-engine probe reports the exact failing lifecycle stage", async () => {
  const sha = "b".repeat(40);
  const failure = Object.assign(new Error("conversation write rejected"), { code: "23503" });
  const runtime = { ready: Promise.resolve(), engine: { async create() { throw failure; } },
    db: { async query() { return { rows: [{ tenant_id: "tenant-1", user_id: "user-1", role: "acceptance-controller", permissions: ["acceptance:identity"] }] }; } } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "secret", RENDER_GIT_COMMIT: sha },
    resolveUser: async () => null, readJson: async () => ({ releaseSha: sha }), createRuntimeFn: () => runtime });
  let status; let body;
  await adapter.handle({ method: "POST", headers: { authorization: "Bearer secret" } }, {},
    new URL("https://production/api/nexus/runtime/production-acceptance/probes/task-engine"), (_res, code, value) => { status = code; body = value; });
  assert.equal(status, 503); assert.equal(body.releaseSha, sha); assert.equal(body.stage, "create");
  assert.equal(body.code, "23503"); assert.equal(body.error, "conversation write rejected");
});
