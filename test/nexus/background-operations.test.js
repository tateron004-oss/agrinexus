"use strict";
const assert = require("node:assert/strict");
const test = require("node:test");
const { ScheduleRepository, nextOccurrence } = require("../../nexus/schedules/repository.js");
const { createHandlers } = require("../../nexus/workers/handlers.js");

function db(results = []) { const calls = []; const value = { calls, async query(sql, params) { calls.push({ sql, params }); return results.shift() || { rows: [] }; }, async transaction(work) { return work(value); } }; return value; }

test("one-time and recurring schedules calculate durable next occurrences", () => {
  assert.equal(nextOccurrence({ once: true }, new Date("2026-01-01T00:00:00Z")), null);
  assert.equal(nextOccurrence({ everySeconds: 3600 }, new Date("2026-01-01T00:00:00Z")).toISOString(), "2026-01-01T01:00:00.000Z");
  assert.throws(() => nextOccurrence({ everySeconds: 30 }, new Date()), /at least 60/);
});

test("due schedules lock, enqueue idempotently, and advance only after enqueue", async () => {
  const x = db([{ rows: [{ schedule_id: "s1", tenant_id: "t", owner_id: "u", task_id: "task", job_type: "notifications.deliver", payload: {}, cadence: { once: true }, next_run_at: "2026-01-01T00:00:00Z" }] }, { rows: [] }]);
  const enqueued = [];
  const rows = await new ScheduleRepository(x).dispatchDue({ jobs: { enqueue: async job => { enqueued.push(job); return { job_id: "j1" }; } }, now: new Date("2026-01-02T00:00:00Z") });
  assert.equal(rows[0].jobId, "j1"); assert.match(x.calls[0].sql, /for update skip locked/);
  assert.equal(enqueued[0].idempotencyKey, "schedule:s1:2026-01-01T00:00:00.000Z");
  assert.equal(x.calls[1].params[1], "completed");
});

test("notification delivery never reports success without a verified provider receipt", async () => {
  const failed = []; const delivered = [];
  const runtime = { notifications: { claim: async () => [{ notification_id: "n1", channel: "push" }], failed: async (...args) => failed.push(args), delivered: async id => delivered.push(id) },
    schedules: {}, jobs: {}, dataLifecycle: {} };
  const unavailable = await createHandlers({ runtime })["notifications.deliver"]({ job: { payload: {} }, heartbeat: async () => {} });
  assert.equal(unavailable.outcomes[0].code, "delivery_provider_unavailable"); assert.equal(delivered.length, 0);
  const verified = await createHandlers({ runtime, deliveryProviders: { push: async () => ({ verified: true, providerReceiptId: "p1" }) } })["notifications.deliver"]({ job: { payload: {} }, heartbeat: async () => {} });
  assert.equal(verified.outcomes[0].delivered, true); assert.deepEqual(delivered, ["n1"]); assert.equal(failed.length, 1);
});

test("retention and deletion jobs use the authoritative lifecycle repository", async () => {
  const calls = []; const runtime = { notifications: {}, schedules: {}, jobs: {}, dataLifecycle: { purgeExpired: async input => { calls.push(input); return ["a"]; }, executeDeletion: async input => { calls.push(input); return { state: "verified" }; } } };
  const handlers = createHandlers({ runtime });
  assert.deepEqual(await handlers["retention.sweep"]({ job: { payload: { limit: 20 } } }), { purged: ["a"] });
  assert.equal((await handlers["deletion.execute"]({ job: { tenant_id: "t", payload: { requestId: "r" } } })).state, "verified");
  assert.deepEqual(calls[1], { tenantId: "t", requestId: "r" });
});
