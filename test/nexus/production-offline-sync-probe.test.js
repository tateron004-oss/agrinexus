"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createServerRuntimeAdapter } = require("../../nexus/compat/server-runtime-adapter.js");

test("acceptance offline-sync probe persists, resolves, rereads, and cleans up a conflict", async () => {
  const sha = "d".repeat(40); const rows = [];
  const runtime = { ready: Promise.resolve(), sync: {
    async apply(operation, handler) { const current = await handler({ phase: "inspect" }); const row = {
      sync_id: "sync_probe", state: "conflict", conflict: { serverVersion: current.version }, operation_id: operation.operationId
    }; rows.push(row); return row; },
    async resolve({ resolution }) { rows[0] = { ...rows[0], state: "rejected", conflict: { ...rows[0].conflict, resolution } }; return rows[0]; },
    async changes() { return [...rows]; }
  }, db: { async query(sql) { if (sql.startsWith("delete")) rows.splice(0); return { rows: [] }; } } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "secret", RENDER_GIT_COMMIT: sha },
    resolveUser: async () => null, readJson: async () => ({ releaseSha: sha }), createRuntimeFn: () => runtime });
  let status; let body;
  await adapter.handle({ method: "POST", headers: { authorization: "Bearer secret" } }, {},
    new URL("https://production/api/nexus/runtime/production-acceptance/probes/offline-sync"),
    (_res, code, value) => { status = code; body = value; });
  assert.equal(status, 200); assert.equal(body.ok, true); assert.equal(body.releaseSha, sha);
  assert.equal(body.conflictRecovery, true); assert.equal(body.durableConflict, true);
  assert.equal(body.resolution, "accept-server"); assert.equal(body.cleanedUp, true);
});
