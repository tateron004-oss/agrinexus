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

// Found live (job-queue/schedule-dispatch follow-up audit): create() never
// validated cadence's shape at all -- only nextOccurrence() did, at dispatch
// time -- so a schedule with an invalid cadence (e.g. everySeconds under 60)
// could be persisted successfully and only fail once it actually became due.
test("create() rejects an invalid cadence up front, the same rule nextOccurrence enforces at dispatch time", async () => {
  const x = db([{ rows: [{ schedule_id: "s1" }] }]);
  await assert.rejects(new ScheduleRepository(x).create({ tenantId: "t", ownerId: "u", jobType: "notifications.deliver",
    timezone: "UTC", nextRunAt: new Date(), cadence: { everySeconds: 30 } }), /at least 60/);
  assert.equal(x.calls.length, 0, "an invalid schedule must never be persisted");
});

// Found live: dispatchDue ran its whole due-batch loop inside ONE
// transaction, so a throw from nextOccurrence for any single schedule (a
// poison-pill cadence create() previously never rejected) rolled back every
// OTHER schedule's advancement in the same batch too, and left the
// poison-pill's own next_run_at unchanged -- so it sorted first again on
// every subsequent pass and threw every time, forever, blocking the
// dispatcher for every tenant sharing that batch.
test("a schedule with a poison-pill cadence is paused without blocking any other schedule in the same due batch", async () => {
  const x = db([
    { rows: [
      { schedule_id: "bad", tenant_id: "t1", owner_id: "u1", task_id: null, job_type: "notifications.deliver", payload: {}, cadence: { everySeconds: 30 }, next_run_at: "2026-01-01T00:00:00Z" },
      { schedule_id: "good", tenant_id: "t2", owner_id: "u2", task_id: null, job_type: "notifications.deliver", payload: {}, cadence: { everySeconds: 3600 }, next_run_at: "2026-01-01T00:00:00Z" }
    ] },
    { rows: [] }, // the "bad" schedule's pause update
    { rows: [] }  // the "good" schedule's normal advance update
  ]);
  const enqueued = [];
  const rows = await new ScheduleRepository(x).dispatchDue({ jobs: { enqueue: async job => { enqueued.push(job); return { job_id: `j-${job.tenantId}` }; } }, now: new Date("2026-01-02T00:00:00Z") });
  assert.equal(enqueued.length, 2, "both schedules must still be enqueued -- the poison pill only breaks computing its OWN next run");
  assert.equal(rows[0].paused, true);
  assert.match(rows[0].error, /at least 60/);
  assert.match(x.calls[1].sql, /state='paused'/, "the bad schedule stops being selected again instead of retrying forever");
  assert.equal(rows[1].paused, undefined, "the good schedule in the same batch must advance normally, unaffected");
  assert.match(x.calls[2].sql, /state=\$2/);
  assert.equal(x.calls[2].params[1], "active");
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

// "deletion.execute" is internal-only (see control-api.test.js's createSchedule allowlist test): requestDeletion() enqueues it immediately,
// so this sweep should only ever have to catch a lost one. Confirms it re-enqueues by requestId, not by re-running executeDeletion itself
// directly (so retries/backoff still go through the normal durable job path), and that an empty scan is a no-op.
// Found live (job-queue/schedule-dispatch follow-up audit): a deletion
// request whose executeDeletion() deterministically fails was retried by
// the job queue's own normal backoff, but once those retries were exhausted
// the REQUEST itself was left at state='queued' forever -- deletion.sweep
// had no way to tell it apart from a genuinely lost job, so it got
// re-enqueued as a brand-new job on every sweep pass, forever.
test("deletion.execute marks the request permanently failed only once the job's own retries are exhausted, not on an ordinary retryable attempt", async () => {
  const marked = [];
  const runtime = { notifications: {}, schedules: {}, jobs: {},
    dataLifecycle: { executeDeletion: async () => { throw new Error("constraint violation"); }, markFailed: async input => { marked.push(input); } } };
  const handlers = createHandlers({ runtime });
  await assert.rejects(handlers["deletion.execute"]({ job: { tenant_id: "t", attempts: 2, max_attempts: 5, payload: { requestId: "r" } } }));
  assert.equal(marked.length, 0, "a job with attempts remaining must not be marked failed yet");
  await assert.rejects(handlers["deletion.execute"]({ job: { tenant_id: "t", attempts: 5, max_attempts: 5, payload: { requestId: "r" } } }));
  assert.equal(marked.length, 1, "the final attempt must mark the request permanently failed");
  assert.deepEqual(marked[0], { tenantId: "t", requestId: "r", error: "constraint violation" });
});

test("deletion.sweep re-enqueues stale queued erasure requests, not the ones already picked up", async () => {
  const enqueued = [];
  const runtime = { notifications: {}, schedules: {}, jobs: { enqueue: async job => { enqueued.push(job); return { job_id: "j1" }; } },
    dataLifecycle: { listStaleQueued: async () => [{ tenant_id: "t1", request_id: "req_1" }, { tenant_id: "t2", request_id: "req_2" }] } };
  const outcome = await createHandlers({ runtime })["deletion.sweep"]({ job: { payload: {} } });
  assert.deepEqual(outcome, { scanned: 2, requeued: 2 });
  assert.equal(enqueued.length, 2);
  assert.equal(enqueued[0].tenantId, "t1"); assert.equal(enqueued[0].jobType, "deletion.execute"); assert.equal(enqueued[0].payload.requestId, "req_1");
  assert.match(enqueued[0].idempotencyKey, /^deletion-sweep:req_1:/);
  assert.notEqual(enqueued[0].idempotencyKey, enqueued[1].idempotencyKey.replace("req_2", "req_1"), "each sweep pass gets its own idempotency key so a lost job can be retried");
  const empty = { notifications: {}, schedules: {}, jobs: { enqueue: async () => { throw new Error("must not enqueue anything"); } }, dataLifecycle: { listStaleQueued: async () => [] } };
  assert.deepEqual(await createHandlers({ runtime: empty })["deletion.sweep"]({ job: { payload: {} } }), { scanned: 0, requeued: 0 });
});
