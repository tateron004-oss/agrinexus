const assert = require("node:assert/strict");
const test = require("node:test");
const { ObservabilityRepository, CostLimitError } = require("../../nexus/observability/operations-repository.js");

function fakeDb(results = []) {
  const calls = [];
  return { calls, async query(sql, params) { calls.push({ sql, params }); return results.shift() || { rows: [], rowCount: 0 }; } };
}

test("traces persist durable start and terminal state with measured duration", async () => {
  const db = fakeDb(); const telemetry = new ObservabilityRepository(db);
  const span = await telemetry.startSpan({ traceId: "request_1", tenantId: "tenant_1", taskId: "tsk_1", operation: "tool.execute" });
  const finished = await telemetry.finishSpan(span, { attributes: { verified: true } });
  assert.match(span.spanId, /^spn_/); assert.equal(finished.state, "ok"); assert.ok(finished.durationMs >= 0);
  assert.match(db.calls[0].sql, /insert into nexus_trace_spans/); assert.match(db.calls[1].sql, /finished_at/);
});

test("cost controls reject per-operation and daily budget overflow", async () => {
  const db = fakeDb([{ rows: [{ spent_cents: 90 }] }]);
  const telemetry = new ObservabilityRepository(db, { dailyCostLimitCents: 100 });
  await assert.rejects(() => telemetry.assertCostAllowed({ tenantId: "tenant_1", estimatedCostCents: 11 }),
    error => error instanceof CostLimitError && error.code === "cost_limit_exceeded");
  await assert.rejects(() => telemetry.assertCostAllowed({ tenantId: "tenant_1", estimatedCostCents: 6, operationLimitCents: 5 }),
    error => error.details.operationLimit === 5);
});

test("provider health, alert deduplication, and user progress use authoritative tables", async () => {
  const db = fakeDb([
    { rows: [{ provider_id: "documents", state: "degraded", consecutive_failures: 3 }] },
    { rows: [{ alert_id: "alt_1" }] },
    { rows: [{ today_cents: 12 }] }, { rows: [] }, { rows: [] },
    { rows: [{ task_id: "tsk_1", state: "running", total_steps: 4, completed_steps: 2, failed_steps: 0 }] }
  ]);
  const telemetry = new ObservabilityRepository(db);
  const health = await telemetry.recordProviderHealth({ tenantId: "tenant_1", providerId: "documents", successful: false, errorCode: "timeout" });
  await telemetry.alert({ tenantId: "tenant_1", alertKey: "provider:documents", summary: "Repeated failures" });
  const snapshot = await telemetry.snapshot({ tenantId: "tenant_1", taskId: "tsk_1" });
  assert.equal(health.consecutive_failures, 3); assert.equal(snapshot.progress.completed_steps, 2);
  assert.match(db.calls[0].sql, /on conflict \(tenant_id,provider_id\)/);
  assert.match(db.calls[1].sql, /on conflict \(tenant_id,alert_key,state\)/);
  assert.match(db.calls[5].sql, /nexus_task_steps/);
});
