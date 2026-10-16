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

// Found earlier (the observability audit): the budget check read the spend so far, but a call's cost was only written down after it finished, so calls running at the same time all passed the check and together
// overspent the daily budget. A running call now reserves its estimate first; every other check counts it.
test("calls running at the same time cannot together overspend the daily budget: the estimate is reserved before the check and given back after", async () => {
  const db = { async query() { await new Promise(resolve => setImmediate(resolve)); return { rows: [{ spent_cents: 10 }] }; } };
  const telemetry = new ObservabilityRepository(db, { dailyCostLimitCents: 100 });
  const attempts = await Promise.allSettled(Array.from({ length: 6 }, () => telemetry.reserveCost({ tenantId: "tenant_1", estimatedCostCents: 30 })));
  const admitted = attempts.filter(item => item.status === "fulfilled"); const refused = attempts.filter(item => item.status === "rejected");
  assert.equal(admitted.length, 3, "10 spent + 3 x 30 = 100 fits; a fourth would not");
  assert.ok(refused.every(item => item.reason instanceof CostLimitError && item.reason.details.dailyLimitCents === 100));
  assert.equal(telemetry.reservedCents.get("tenant_1"), 90, "only the admitted calls hold a reservation");
  admitted[0].value(); admitted[0].value();
  assert.equal(telemetry.reservedCents.get("tenant_1"), 60, "released once, even if released twice");
  const again = await telemetry.reserveCost({ tenantId: "tenant_1", estimatedCostCents: 30 });
  assert.equal(typeof again, "function", "room again after one finished");
  again(); admitted[1].value(); admitted[2].value();
  assert.equal(telemetry.reservedCents.has("tenant_1"), false, "nothing left reserved");
});

test("reserving cost: a tool's own limit is checked, no daily limit or no estimate reserves nothing, another tenant's reservations do not count, and a forgotten reservation expires", async () => {
  const db = { async query() { return { rows: [{ spent_cents: 0 }] }; } };
  const limited = new ObservabilityRepository(db, { dailyCostLimitCents: 100 });
  await assert.rejects(() => limited.reserveCost({ tenantId: "t", estimatedCostCents: 6, operationLimitCents: 5 }), error => error.details.operationLimit === 5);
  assert.equal(limited.reservedCents.size, 0);
  const none = new ObservabilityRepository(db); const release = await none.reserveCost({ tenantId: "t", estimatedCostCents: 500 }); assert.equal(typeof release, "function"); assert.equal(none.reservedCents.size, 0);
  await limited.reserveCost({ tenantId: "t", estimatedCostCents: 0 }); assert.equal(limited.reservedCents.size, 0);
  await limited.reserveCost({ tenantId: "a", estimatedCostCents: 90 }); await limited.reserveCost({ tenantId: "b", estimatedCostCents: 90 });
  assert.equal(limited.reservedCents.get("a"), 90); assert.equal(limited.reservedCents.get("b"), 90);
  await limited.reserveCost({ tenantId: "c", estimatedCostCents: 10, holdMs: 20 });
  assert.equal(limited.reservedCents.get("c"), 10); await new Promise(resolve => setTimeout(resolve, 60)); assert.equal(limited.reservedCents.has("c"), false, "gave itself back");
});
