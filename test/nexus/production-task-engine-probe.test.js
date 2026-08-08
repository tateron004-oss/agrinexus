"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createServerRuntimeAdapter } = require("../../nexus/compat/server-runtime-adapter.js");

test("acceptance task-engine probe persists and closes an exact-release task", async () => {
  const sha = "a".repeat(40); const calls = [];
  const runtime = { ready: Promise.resolve(), engine: {
    async create(input) { calls.push(["create", input]); return { taskId: "task_probe" }; },
    async transition(input) { calls.push(["transition", input]); return { state: "cancelled" }; }
  }, tasks: { async get(input) { calls.push(["get", input]); return { taskId: "task_probe", state: "cancelled", steps: [{}] }; } } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "secret", RENDER_GIT_COMMIT: sha },
    resolveUser: async () => null, readJson: async () => ({ releaseSha: sha }), createRuntimeFn: () => runtime });
  const response = {}; let status; let body;
  await adapter.handle({ method: "POST", headers: { authorization: "Bearer secret" } }, response,
    new URL("https://production/api/nexus/runtime/production-acceptance/probes/task-engine"), (_res, code, value) => { status = code; body = value; });
  assert.equal(status, 200); assert.equal(body.ok, true); assert.equal(body.releaseSha, sha);
  assert.equal(body.durable, true); assert.equal(body.state, "cancelled"); assert.equal(body.steps, 1);
  assert.deepEqual(calls.map(([name]) => name), ["create", "transition", "get"]);
});
