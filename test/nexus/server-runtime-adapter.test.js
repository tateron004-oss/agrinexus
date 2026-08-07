"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { createServerRuntimeAdapter, requestContext } = require("../../nexus/compat/server-runtime-adapter.js");

function responseCapture() {
  const result = {};
  return { result, send(_res, status, body) { result.status = status; result.body = body; } };
}

test("request context preserves tenant, identity, role, and permission boundaries", () => {
  const context = requestContext({ headers: { "x-request-id": "request-1" } }, {
    id: "user-1", tenantId: "tenant-1", role: "Standard User", permissions: ["task.execute"]
  });
  assert.equal(context.requestId, "request-1"); assert.equal(context.tenantId, "tenant-1");
  assert.equal(context.userId, "user-1"); assert.equal(context.hasRole("Standard User"), true);
  assert.equal(context.can("task.execute"), true); assert.equal(context.can("admin"), false);
});

test("status truthfully refuses a missing authoritative runtime without legacy fallback", async () => {
  const adapter = createServerRuntimeAdapter({ resolveUser: async () => null, readJson: async () => ({}),
    createRuntimeFn: () => { const error = new Error("DATABASE_URL missing"); error.code = "UNSAFE_PRODUCTION_CONFIG"; throw error; } });
  const capture = responseCapture();
  assert.equal(await adapter.handle({ method: "GET", headers: {} }, {}, new URL("http://local/api/nexus/runtime/status"), capture.send), true);
  assert.equal(capture.result.status, 503); assert.equal(capture.result.body.authoritative, true);
  assert.equal(capture.result.body.durable, false); assert.match(capture.result.body.message, /no legacy write fallback/i);
});

test("task endpoints require an authenticated Nexus user before database access", async () => {
  let runtimeCreated = false;
  const adapter = createServerRuntimeAdapter({ resolveUser: async () => null, readJson: async () => ({}),
    createRuntimeFn: () => { runtimeCreated = true; return {}; } });
  const capture = responseCapture();
  await adapter.handle({ method: "POST", headers: {} }, {}, new URL("http://local/api/nexus/runtime/tasks"), capture.send);
  assert.equal(capture.result.status, 401); assert.equal(runtimeCreated, false);
});
