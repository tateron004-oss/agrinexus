"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createServerRuntimeAdapter } = require("../../nexus/compat/server-runtime-adapter.js");

test("acceptance semantic-memory probe uses the governed principal and reconstructed repository", async () => {
  const sha = "b".repeat(40); let stored;
  const membership = { tenant_id: "tenant-1", user_id: "user-1", role: "acceptance-controller", permissions: ["acceptance:identity"] };
  const db = { async query(sql, params) {
    if (sql.includes("nexus_organization_memberships")) return { rows: [membership] };
    if (sql.includes("insert into nexus_memory_items")) { stored = { memory_id: params[0], content: params[7] }; return { rows: [stored] }; }
    if (sql.includes("from nexus_memory_items") && sql.includes("similarity")) return { rows: [stored] };
    if (sql.includes("update nexus_memory_items set deleted_at")) return { rows: [{ memory_id: stored.memory_id }] };
    return { rows: [] };
  } };
  const runtime = { ready: Promise.resolve(), db, memory: { async remember(input) {
    stored = { memory_id: "memory_probe", content: input.content }; return stored;
  } } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "secret", RENDER_GIT_COMMIT: sha },
    resolveUser: async () => null, readJson: async () => ({ releaseSha: sha }), createRuntimeFn: () => runtime });
  let status; let body;
  await adapter.handle({ method: "POST", headers: { authorization: "Bearer secret" } }, {},
    new URL("https://production/api/nexus/runtime/production-acceptance/probes/semantic-memory"),
    (_res, code, value) => { status = code; body = value; });
  assert.equal(status, 200); assert.equal(body.ok, true); assert.equal(body.releaseSha, sha);
  assert.equal(body.durable, true); assert.equal(body.repositoryReconstructed, true); assert.equal(body.cleanedUp, true);
});
