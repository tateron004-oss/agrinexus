"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createServerRuntimeAdapter } = require("../../nexus/compat/server-runtime-adapter.js");

test("acceptance identity probe proves same-tenant access and cross-tenant denial", async () => {
  const sha = "e".repeat(40); const calls = [];
  const membership = { tenant_id: "tenant-1", user_id: "user-1", role: "acceptance-controller", permissions: ["acceptance:identity"] };
  const runtime = { ready: Promise.resolve(), db: { async query() { return { rows: [membership] }; } }, access: {
    async authorize(input) { calls.push(input); if (input.tenantId !== membership.tenant_id) { const error = new Error("membership required"); error.code = "tenant_membership_required"; throw error; } return { authorized: true }; }
  } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "secret", RENDER_GIT_COMMIT: sha },
    resolveUser: async () => null, readJson: async () => ({ releaseSha: sha }), createRuntimeFn: () => runtime });
  let status; let body;
  await adapter.handle({ method: "POST", headers: { authorization: "Bearer secret" } }, {},
    new URL("https://production/api/nexus/runtime/production-acceptance/probes/identity"),
    (_res, code, value) => { status = code; body = value; });
  assert.equal(status, 200); assert.equal(body.ok, true); assert.equal(body.releaseSha, sha);
  assert.equal(body.tenantIsolation, true); assert.equal(body.sameTenantAuthorized, true); assert.equal(body.crossTenantDenied, true);
  assert.equal(calls.length, 2); assert.notEqual(calls[0].tenantId, calls[1].tenantId);
});
