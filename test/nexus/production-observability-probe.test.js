"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createServerRuntimeAdapter } = require("../../nexus/compat/server-runtime-adapter.js");

test("acceptance observability probe persists an exact-release trace, cost, and evaluated alerts", async () => {
  const sha = "f".repeat(40); const membership = { tenant_id: "tenant-1", user_id: "user-1", role: "acceptance-controller", permissions: ["acceptance:identity"] }; let event;
  const runtime = { ready: Promise.resolve(), observability: { async record(input) { event = { trace_id: input.traceId,
    outcome: input.outcome, duration_ms: input.durationMs, cost_micros: input.costMicros, release_sha: input.releaseSha }; } },
  db: { async query(sql) { return sql.includes("nexus_organization_memberships") ? { rows: [membership] } : { rows: [event] }; } } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "secret", RENDER_GIT_COMMIT: sha },
    resolveUser: async () => null, readJson: async () => ({ releaseSha: sha }), createRuntimeFn: () => runtime });
  let status; let body;
  await adapter.handle({ method: "POST", headers: { authorization: "Bearer secret" } }, {},
    new URL("https://production/api/nexus/runtime/production-acceptance/probes/observability"),
    (_res, code, value) => { status = code; body = value; });
  assert.equal(status, 200); assert.equal(body.ok, true); assert.equal(body.releaseSha, sha);
  assert.equal(body.tracesReady, true); assert.equal(body.costsReady, true); assert.equal(body.alertsReady, true); assert.equal(body.alertCount, 3);
});
