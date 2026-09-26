"use strict";
const assert = require("node:assert/strict");
const test = require("node:test");
const { RecordRepository } = require("../../nexus/data/record-repository.js");
const { FarmRecordRepository } = require("../../nexus/farmwork/store.js");
const { createHandlers, SITUATIONAL_AWARENESS_WORKSPACE_ID, FARM_LOG_NUDGE_RECORD_TYPE } = require("../../nexus/workers/handlers.js");

// The farm-domain counterpart to situational-awareness-sweep.test.js's health coverage. Extends the same
// proactive-nudge mechanism to the farm toolkit's own real activity (nexus_memory_items, purpose
// 'farm_records') rather than the older nexus_records/health.record world the original sweep watches.

function fakeDb(results = []) {
  const calls = [];
  const db = { calls, async query(sql, params) { calls.push({ sql, params }); return results.shift() || { rows: [] }; },
    async transaction(work) { return work(db); } };
  return db;
}

test("FarmRecordRepository.listStalePrincipals inspects real structural columns, scoped to this store's own purpose", async () => {
  const db = fakeDb([{ rows: [{ tenant_id: "t1", principal_id: "p1", last_record_at: "2026-08-01T00:00:00.000Z" }] }]);
  const repo = new FarmRecordRepository(db);
  const staleBefore = new Date("2026-09-01T00:00:00.000Z");
  const result = await repo.listStalePrincipals({ staleBefore, limit: 10 });
  assert.equal(result.length, 1);
  assert.match(db.calls[0].sql, /purpose='farm_records'/);
  assert.match(db.calls[0].sql, /group by tenant_id, principal_id/);
  assert.match(db.calls[0].sql, /having max\(updated_at\) < \$1/);
  assert.deepEqual(db.calls[0].params, [staleBefore, 10]);
});

test("FarmRecordRepository.listStalePrincipals uses whichever purpose the store was constructed with (health_records, for the health toolkit's own store)", async () => {
  const db = fakeDb([{ rows: [] }]);
  const repo = new FarmRecordRepository(db, { purpose: "health_records", sensitivity: "health" });
  await repo.listStalePrincipals({ staleBefore: new Date(), limit: 10 });
  assert.match(db.calls[0].sql, /purpose='health_records'/);
});

test("listUnacknowledgedMemoryNudges checks freshness against nexus_memory_items, never guessing the freeform data shape", async () => {
  const db = fakeDb([{ rows: [{ record_id: "rec_1", tenant_id: "t1", subject_id: "sub1", version: 1, data: {} }] }]);
  const repo = new RecordRepository(db);
  const deliveredBefore = new Date("2026-09-01T00:00:00.000Z");
  const result = await repo.listUnacknowledgedMemoryNudges({ workspaceId: "situational-awareness", recordType: "farm_log_nudge", memoryPurpose: "farm_records", deliveredBefore, limit: 10 });
  assert.equal(result.length, 1);
  const sql = db.calls[0].sql;
  assert.match(sql, /join nexus_notifications no on no\.task_id = n\.task_id/);
  assert.match(sql, /no\.state='delivered'/);
  assert.match(sql, /no\.delivered_at < \$3/);
  assert.match(sql, /\(n\.data->>'escalatedAt'\) is null/);
  assert.match(sql, /not exists/);
  assert.match(sql, /from nexus_memory_items m/);
  assert.match(sql, /m\.purpose=\$5/);
  assert.deepEqual(db.calls[0].params, ["situational-awareness", "farm_log_nudge", deliveredBefore, 10, "farm_records"]);
});

function sweepFixture({ staleSubjects = [], recentNudgesBySubject = {}, autonomousCountsByTenant = {}, pausedTenants = null, engineCreate = null } = {}) {
  const created = { tasks: [], nudgeRecords: [], removed: [] };
  let seq = 0;
  const runtime = {
    farmRecords: { listStalePrincipals: async () => staleSubjects },
    records: {
      claimCooldown: async ({ tenantId, ownerId, subjectId, workspaceId, recordType, cooldownMs, classification, data, provenance }) => {
        const last = (recentNudgesBySubject[`${tenantId}:${subjectId}`] || [])[0];
        if (last && Date.now() - new Date(last.updated_at).getTime() < cooldownMs) return null;
        const record = { record_id: `rec_${++seq}`, tenantId, ownerId, subjectId, workspaceId, recordType, classification, data, provenance };
        created.nudgeRecords.push(record);
        return record;
      },
      attachTask: async () => {},
      remove: async ({ recordId }) => { created.removed.push(recordId); return true; }
    },
    tasks: { countAutonomousCreatedSince: async ({ tenantId }) => autonomousCountsByTenant[tenantId] || 0 },
    engine: { create: engineCreate || (async input => { created.tasks.push(input); return { taskId: `tsk_${created.tasks.length}` }; }) }
  };
  if (pausedTenants) runtime.autonomyControl = { isPaused: async ({ tenantId }) => Boolean(pausedTenants[tenantId]) };
  return { runtime, created };
}

test("situational-awareness.farm-sweep creates a real autonomous nudge task for a stale, un-cooled-down principal", async () => {
  const { runtime, created } = sweepFixture({
    staleSubjects: [{ tenant_id: "t1", principal_id: "p1", last_record_at: "2026-08-01T00:00:00.000Z" }]
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.farm-sweep"]({ job: { payload: {} } });
  assert.equal(result.scanned, 1);
  assert.equal(result.created, 1);
  assert.equal(created.tasks.length, 1);
  const taskInput = created.tasks[0];
  assert.equal(taskInput.autonomous, true);
  assert.equal(taskInput.application, "farm");
  assert.equal(taskInput.command.tenantId, "t1");
  assert.equal(taskInput.command.actorId, "p1");
  assert.equal(taskInput.command.channel, "worker");
  assert.equal(taskInput.steps[0].toolId, "reminders.schedule");
  assert.equal(created.nudgeRecords.length, 1);
  assert.equal(created.nudgeRecords[0].workspaceId, SITUATIONAL_AWARENESS_WORKSPACE_ID);
  assert.equal(created.nudgeRecords[0].recordType, FARM_LOG_NUDGE_RECORD_TYPE);
  assert.equal(created.nudgeRecords[0].classification, "standard");
  assert.equal(created.nudgeRecords[0].subjectId, "p1");
});

test("situational-awareness.farm-sweep skips a principal still within its cooldown window", async () => {
  const { runtime, created } = sweepFixture({
    staleSubjects: [{ tenant_id: "t1", principal_id: "p1", last_record_at: "2026-08-01T00:00:00.000Z" }],
    recentNudgesBySubject: { "t1:p1": [{ updated_at: new Date().toISOString() }] }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.farm-sweep"]({ job: { payload: {} } });
  assert.equal(result.created, 0);
  assert.equal(created.tasks.length, 0);
});

test("situational-awareness.farm-sweep enforces the per-tenant daily autonomous-task cap, shared with the health sweep's own tenant-wide counter", async () => {
  const { runtime, created } = sweepFixture({
    staleSubjects: [
      { tenant_id: "t1", principal_id: "p1", last_record_at: "2026-08-01T00:00:00.000Z" },
      { tenant_id: "t1", principal_id: "p2", last_record_at: "2026-08-01T00:00:00.000Z" }
    ],
    autonomousCountsByTenant: { t1: 10 }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.farm-sweep"]({ job: { payload: { dailyAutonomousTaskCapPerTenant: 10 } } });
  assert.equal(result.created, 0);
  assert.equal(created.tasks.length, 0);
});

test("situational-awareness.farm-sweep skips a paused tenant entirely", async () => {
  const { runtime, created } = sweepFixture({
    staleSubjects: [{ tenant_id: "t1", principal_id: "p1", last_record_at: "2026-08-01T00:00:00.000Z" }],
    pausedTenants: { t1: true }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.farm-sweep"]({ job: { payload: {} } });
  assert.equal(result.created, 0);
  assert.equal(result.skippedPaused, 1);
  assert.equal(created.tasks.length, 0);
});

test("situational-awareness.farm-sweep defers to the engine's own guard when a pause races the cached check", async () => {
  const { runtime, created } = sweepFixture({
    staleSubjects: [{ tenant_id: "t1", principal_id: "p1", last_record_at: "2026-08-01T00:00:00.000Z" }],
    pausedTenants: { t1: false },
    engineCreate: async () => { const error = new Error("Autonomous task creation is paused for this tenant."); error.code = "autonomy_paused"; throw error; }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.farm-sweep"]({ job: { payload: {} } });
  assert.equal(result.created, 0);
  assert.equal(result.skippedPaused, 1);
});

test("situational-awareness.farm-sweep re-throws an unrelated engine.create failure instead of swallowing it as a pause", async () => {
  const { runtime } = sweepFixture({
    staleSubjects: [{ tenant_id: "t1", principal_id: "p1", last_record_at: "2026-08-01T00:00:00.000Z" }],
    engineCreate: async () => { throw new Error("database unavailable"); }
  });
  const handlers = createHandlers({ runtime });
  await assert.rejects(() => handlers["situational-awareness.farm-sweep"]({ job: { payload: {} } }), /database unavailable/);
});

function escalationFixture({ unacknowledgedNudges = [], autonomousCountsByTenant = {}, pausedTenants = null, engineCreate = null, updateImpl = null } = {}) {
  const created = { tasks: [], updates: [] };
  const runtime = {
    records: {
      listUnacknowledgedMemoryNudges: async () => unacknowledgedNudges,
      update: updateImpl || (async item => { created.updates.push(item); return { ...item, version: item.expectedVersion + 1 }; })
    },
    tasks: { countAutonomousCreatedSince: async ({ tenantId }) => autonomousCountsByTenant[tenantId] || 0 },
    engine: { create: engineCreate || (async input => { created.tasks.push(input); return { taskId: `tsk_${created.tasks.length}` }; }) }
  };
  if (pausedTenants) runtime.autonomyControl = { isPaused: async ({ tenantId }) => Boolean(pausedTenants[tenantId]) };
  return { runtime, created };
}

test("situational-awareness.escalate-unacknowledged-farm-nudges escalates a delivered, unfollowed-up nudge with a real second reminder task", async () => {
  const { runtime, created } = escalationFixture({
    unacknowledgedNudges: [{ record_id: "rec_1", tenant_id: "t1", subject_id: "p1", version: 1, data: { reason: "farm_log_stale" } }]
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.escalate-unacknowledged-farm-nudges"]({ job: { payload: {} } });
  assert.equal(result.scanned, 1);
  assert.equal(result.escalated, 1);
  const taskInput = created.tasks[0];
  assert.equal(taskInput.autonomous, true);
  assert.equal(taskInput.application, "farm");
  assert.equal(taskInput.command.actorId, "p1");
  assert.equal(taskInput.steps[0].toolId, "reminders.schedule");
  assert.equal(created.updates.length, 2, "the claim and the taskId attachment are two separate writes");
  assert.equal(created.updates[0].recordId, "rec_1");
  assert.equal(created.updates[0].expectedVersion, 1);
  assert.ok(created.updates[0].data.escalatedAt);
  assert.equal(created.updates[0].data.escalationTaskId, undefined, "the claim write must not already assume a task exists");
  assert.equal(created.updates[1].expectedVersion, 2);
  assert.equal(created.updates[1].data.escalationTaskId, "tsk_1");
});

test("situational-awareness.escalate-unacknowledged-farm-nudges enforces the per-tenant daily autonomous-task cap", async () => {
  const { runtime, created } = escalationFixture({
    unacknowledgedNudges: [
      { record_id: "rec_1", tenant_id: "t1", subject_id: "p1", version: 1, data: {} },
      { record_id: "rec_2", tenant_id: "t1", subject_id: "p2", version: 1, data: {} }
    ],
    autonomousCountsByTenant: { t1: 10 }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.escalate-unacknowledged-farm-nudges"]({ job: { payload: { dailyAutonomousTaskCapPerTenant: 10 } } });
  assert.equal(result.escalated, 0);
  assert.equal(created.tasks.length, 0);
});

test("situational-awareness.escalate-unacknowledged-farm-nudges skips a paused tenant entirely", async () => {
  const { runtime, created } = escalationFixture({
    unacknowledgedNudges: [{ record_id: "rec_1", tenant_id: "t1", subject_id: "p1", version: 1, data: {} }],
    pausedTenants: { t1: true }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.escalate-unacknowledged-farm-nudges"]({ job: { payload: {} } });
  assert.equal(result.escalated, 0);
  assert.equal(result.skippedPaused, 1);
  assert.equal(created.tasks.length, 0);
});

test("situational-awareness.escalate-unacknowledged-farm-nudges refuses to escalate the same nudge twice when the claim loses a version race", async () => {
  let claimed = false;
  const { runtime, created } = escalationFixture({
    unacknowledgedNudges: [{ record_id: "rec_1", tenant_id: "t1", subject_id: "p1", version: 1, data: {} }],
    updateImpl: async item => {
      created.updates.push(item);
      if (item.data.escalatedAt && !("escalationTaskId" in item.data)) {
        if (claimed) throw new Error("Record rec_1 was changed by another operation.");
        claimed = true;
      }
      return { ...item, version: item.expectedVersion + 1 };
    }
  });
  const handlers = createHandlers({ runtime });
  await handlers["situational-awareness.escalate-unacknowledged-farm-nudges"]({ job: { payload: {} } });
  await handlers["situational-awareness.escalate-unacknowledged-farm-nudges"]({ job: { payload: {} } });
  assert.equal(created.tasks.length, 1, "only one escalation task may exist for this nudge, not two");
});

test("situational-awareness.escalate-unacknowledged-farm-nudges still counts the escalation even when attaching the taskId loses a concurrent update race", async () => {
  const { runtime, created } = escalationFixture({
    unacknowledgedNudges: [{ record_id: "rec_1", tenant_id: "t1", subject_id: "p1", version: 1, data: {} }],
    updateImpl: async item => {
      created.updates.push(item);
      if ("escalationTaskId" in item.data) throw new Error("Record rec_1 was changed by another operation.");
      return { ...item, version: item.expectedVersion + 1 };
    }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.escalate-unacknowledged-farm-nudges"]({ job: { payload: {} } });
  assert.equal(result.escalated, 1, "the escalation task was genuinely created and must still count even if attaching its id lost a race");
  assert.equal(created.tasks.length, 1);
});

test("situational-awareness.escalate-unacknowledged-farm-nudges skips a nudge whose claim already lost a version race, without creating a task", async () => {
  const { runtime, created } = escalationFixture({
    unacknowledgedNudges: [{ record_id: "rec_1", tenant_id: "t1", subject_id: "p1", version: 1, data: {} }],
    updateImpl: async () => { throw new Error("Record rec_1 was changed by another operation."); }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.escalate-unacknowledged-farm-nudges"]({ job: { payload: {} } });
  assert.equal(result.escalated, 0, "a claim that loses its version race must not create a duplicate escalation task");
  assert.equal(created.tasks.length, 0);
});

test("situational-awareness.escalate-unacknowledged-farm-nudges re-throws an unrelated engine.create failure instead of swallowing it as a pause", async () => {
  const { runtime } = escalationFixture({
    unacknowledgedNudges: [{ record_id: "rec_1", tenant_id: "t1", subject_id: "p1", version: 1, data: {} }],
    engineCreate: async () => { throw new Error("database unavailable"); }
  });
  const handlers = createHandlers({ runtime });
  await assert.rejects(() => handlers["situational-awareness.escalate-unacknowledged-farm-nudges"]({ job: { payload: {} } }), /database unavailable/);
});
