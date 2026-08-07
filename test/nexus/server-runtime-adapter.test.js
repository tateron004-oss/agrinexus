"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { createServerRuntimeAdapter, requestContext, resolveAuthoritativeIdentity, stringArray } = require("../../nexus/compat/server-runtime-adapter.js");

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

test("legacy permission objects normalize without granting disabled capabilities", () => {
  assert.deepEqual(stringArray({ health: true, admin: false, tasks: true }), ["health", "tasks"]);
  const context = requestContext({ headers: {} }, { id: "user-1", tenantId: "tenant-1", roles: ["admin"], permissions: ["*"] });
  assert.equal(context.can("tasks:execute"), true);
});

test("legacy sessions bind to one managed PostgreSQL identity and canonical role permissions", async () => {
  const calls = [];
  const identity = await resolveAuthoritativeIdentity({ db: { query: async (sql, params) => {
    calls.push({ sql, params });
    return { rows: [{ id: "20000000-0000-0000-0000-000000000001", tenant_id: "00000000-0000-0000-0000-000000000001",
      email: "demo@agrinexus.org", roles: ["coordinator"] }] };
  } } }, { email: "Demo@AgriNexus.org" });
  assert.equal(identity.tenantId, "00000000-0000-0000-0000-000000000001");
  assert.ok(identity.permissions.includes("tasks:execute"));
  assert.deepEqual(calls[0].params, ["demo@agrinexus.org"]);
});

test("ambiguous or absent managed identities fail closed", async () => {
  const runtime = { db: { query: async () => ({ rows: [{ id: "one" }, { id: "two" }] }) } };
  assert.equal(await resolveAuthoritativeIdentity(runtime, { email: "same@example.org" }), null);
  assert.equal(await resolveAuthoritativeIdentity(runtime, {}), null);
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

test("authenticated legacy accounts still require an authoritative identity before writes", async () => {
  let registered = 0;
  const adapter = createServerRuntimeAdapter({ resolveUser: async () => ({ id: "legacy", email: "legacy@example.org" }), readJson: async () => ({}),
    createRuntimeFn: async () => ({ engine: {}, tools: {} }), registerToolsFn: async () => { registered += 1; }, resolveIdentityFn: async () => null });
  const capture = responseCapture();
  await adapter.handle({ method: "POST", headers: {} }, {}, new URL("http://local/api/nexus/runtime/tasks"), capture.send);
  assert.equal(registered, 1);
  assert.equal(capture.result.status, 403);
  assert.equal(capture.result.body.code, "authoritative_identity_required");
});
