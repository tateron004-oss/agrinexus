"use strict";
const assert = require("node:assert/strict");
const test = require("node:test");
const { RecordRepository } = require("../../nexus/data/record-repository.js");
const { TaskRepository } = require("../../nexus/data/task-repository.js");
const { createHandlers, SITUATIONAL_AWARENESS_WORKSPACE_ID, HEALTH_CHECKIN_NUDGE_RECORD_TYPE } = require("../../nexus/workers/handlers.js");

function fakeDb(results = []) {
  const calls = [];
  const db = { calls, async query(sql, params) { calls.push({ sql, params }); return results.shift() || { rows: [] }; },
    async transaction(work) { return work(db); } };
  return db;
}

test("listStaleHealthSubjects only inspects real structural columns, never the freeform data blob", async () => {
  const db = fakeDb([{ rows: [{ tenant_id: "t1", subject_id: "sub1", last_health_record_at: "2026-08-01T00:00:00.000Z" }] }]);
  const repo = new RecordRepository(db);
  const staleBefore = new Date("2026-09-01T00:00:00.000Z");
  const result = await repo.listStaleHealthSubjects({ staleBefore, limit: 10 });
  assert.equal(result.length, 1);
  assert.match(db.calls[0].sql, /classification='health'/);
  assert.match(db.calls[0].sql, /group by tenant_id, subject_id/);
  assert.match(db.calls[0].sql, /having max\(updated_at\) < \$1/);
  assert.doesNotMatch(db.calls[0].sql, /->>'/);
  assert.deepEqual(db.calls[0].params, [staleBefore, 10]);
});

test("countAutonomousCreatedSince counts only autonomous tasks via the real created_at column", async () => {
  const db = fakeDb([{ rows: [{ count: 3 }] }]);
  const repo = new TaskRepository(db);
  const since = new Date("2026-09-15T00:00:00.000Z");
  const count = await repo.countAutonomousCreatedSince({ tenantId: "t1", since });
  assert.equal(count, 3);
  assert.match(db.calls[0].sql, /created_at>=\$2/);
  assert.match(db.calls[0].sql, /task_document->>'autonomous'/);
  assert.deepEqual(db.calls[0].params, ["t1", since]);
});

function sweepFixture({ staleSubjects = [], recentNudgesBySubject = {}, autonomousCountsByTenant = {}, pausedTenants = null, engineCreate = null } = {}) {
  const created = { tasks: [], nudgeRecords: [] };
  const runtime = {
    records: {
      listStaleHealthSubjects: async () => staleSubjects,
      list: async ({ tenantId, subjectId }) => recentNudgesBySubject[`${tenantId}:${subjectId}`] || [],
      create: async item => { created.nudgeRecords.push(item); return { record_id: "rec_1" }; }
    },
    tasks: {
      countAutonomousCreatedSince: async ({ tenantId }) => autonomousCountsByTenant[tenantId] || 0
    },
    engine: {
      create: engineCreate || (async input => { created.tasks.push(input); return { taskId: `tsk_${created.tasks.length}` }; })
    }
  };
  if (pausedTenants) runtime.autonomyControl = { isPaused: async ({ tenantId }) => Boolean(pausedTenants[tenantId]) };
  return { runtime, created };
}

test("situational-awareness.sweep creates a real autonomous nudge task for a stale, un-cooled-down subject", async () => {
  const { runtime, created } = sweepFixture({
    staleSubjects: [{ tenant_id: "t1", subject_id: "sub1", last_health_record_at: "2026-08-01T00:00:00.000Z" }]
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.sweep"]({ job: { payload: {} } });
  assert.equal(result.scanned, 1);
  assert.equal(result.created, 1);
  assert.equal(created.tasks.length, 1);
  const taskInput = created.tasks[0];
  assert.equal(taskInput.autonomous, true);
  assert.equal(taskInput.command.tenantId, "t1");
  assert.equal(taskInput.command.actorId, "sub1");
  assert.equal(taskInput.command.channel, "worker");
  assert.equal(taskInput.steps.length, 1);
  assert.equal(taskInput.steps[0].toolId, "reminders.schedule");
  assert.equal(created.nudgeRecords.length, 1);
  assert.equal(created.nudgeRecords[0].workspaceId, SITUATIONAL_AWARENESS_WORKSPACE_ID);
  assert.equal(created.nudgeRecords[0].recordType, HEALTH_CHECKIN_NUDGE_RECORD_TYPE);
  assert.equal(created.nudgeRecords[0].classification, "standard");
  assert.equal(created.nudgeRecords[0].subjectId, "sub1");
});

test("situational-awareness.sweep skips a subject still within its cooldown window", async () => {
  const { runtime, created } = sweepFixture({
    staleSubjects: [{ tenant_id: "t1", subject_id: "sub1", last_health_record_at: "2026-08-01T00:00:00.000Z" }],
    recentNudgesBySubject: { "t1:sub1": [{ updated_at: new Date().toISOString() }] }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.sweep"]({ job: { payload: {} } });
  assert.equal(result.created, 0);
  assert.equal(created.tasks.length, 0);
  assert.equal(created.nudgeRecords.length, 0);
});

test("situational-awareness.sweep fires again once a prior nudge's cooldown has fully elapsed", async () => {
  const longAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
  const { runtime, created } = sweepFixture({
    staleSubjects: [{ tenant_id: "t1", subject_id: "sub1", last_health_record_at: "2026-08-01T00:00:00.000Z" }],
    recentNudgesBySubject: { "t1:sub1": [{ updated_at: longAgo }] }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.sweep"]({ job: { payload: { cooldownMs: 7 * 24 * 60 * 60 * 1000 } } });
  assert.equal(result.created, 1);
});

test("situational-awareness.sweep enforces the per-tenant daily autonomous-task cap", async () => {
  const { runtime, created } = sweepFixture({
    staleSubjects: [
      { tenant_id: "t1", subject_id: "sub1", last_health_record_at: "2026-08-01T00:00:00.000Z" },
      { tenant_id: "t1", subject_id: "sub2", last_health_record_at: "2026-08-01T00:00:00.000Z" }
    ],
    autonomousCountsByTenant: { t1: 10 }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.sweep"]({ job: { payload: { dailyAutonomousTaskCapPerTenant: 10 } } });
  assert.equal(result.created, 0);
  assert.equal(created.tasks.length, 0);
});

test("situational-awareness.sweep counts the cap only once per tenant per sweep, and tracks new creations against it", async () => {
  const countCalls = [];
  const { runtime, created } = sweepFixture({
    staleSubjects: [
      { tenant_id: "t1", subject_id: "sub1", last_health_record_at: "2026-08-01T00:00:00.000Z" },
      { tenant_id: "t1", subject_id: "sub2", last_health_record_at: "2026-08-01T00:00:00.000Z" },
      { tenant_id: "t1", subject_id: "sub3", last_health_record_at: "2026-08-01T00:00:00.000Z" }
    ],
    autonomousCountsByTenant: { t1: 8 }
  });
  runtime.tasks.countAutonomousCreatedSince = async ({ tenantId }) => { countCalls.push(tenantId); return 8; };
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.sweep"]({ job: { payload: { dailyAutonomousTaskCapPerTenant: 10 } } });
  assert.equal(countCalls.length, 1);
  assert.equal(result.created, 2);
  assert.equal(created.tasks.length, 2);
});

test("situational-awareness.sweep tracks cap and cooldown independently per tenant", async () => {
  const { runtime, created } = sweepFixture({
    staleSubjects: [
      { tenant_id: "t1", subject_id: "sub1", last_health_record_at: "2026-08-01T00:00:00.000Z" },
      { tenant_id: "t2", subject_id: "sub2", last_health_record_at: "2026-08-01T00:00:00.000Z" }
    ],
    autonomousCountsByTenant: { t1: 10, t2: 0 }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.sweep"]({ job: { payload: { dailyAutonomousTaskCapPerTenant: 10 } } });
  assert.equal(result.created, 1);
  assert.equal(created.tasks[0].command.tenantId, "t2");
});

test("situational-awareness.sweep skips a paused tenant entirely, without even checking cooldown or the cap", async () => {
  const listCalls = [];
  const { runtime, created } = sweepFixture({
    staleSubjects: [{ tenant_id: "t1", subject_id: "sub1", last_health_record_at: "2026-08-01T00:00:00.000Z" }],
    pausedTenants: { t1: true }
  });
  runtime.records.list = async input => { listCalls.push(input); return []; };
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.sweep"]({ job: { payload: {} } });
  assert.equal(result.created, 0);
  assert.equal(result.skippedPaused, 1);
  assert.equal(created.tasks.length, 0);
  assert.equal(listCalls.length, 0);
});

test("situational-awareness.sweep still creates for an unpaused tenant while another tenant stays paused", async () => {
  const { runtime, created } = sweepFixture({
    staleSubjects: [
      { tenant_id: "t1", subject_id: "sub1", last_health_record_at: "2026-08-01T00:00:00.000Z" },
      { tenant_id: "t2", subject_id: "sub2", last_health_record_at: "2026-08-01T00:00:00.000Z" }
    ],
    pausedTenants: { t1: true, t2: false }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.sweep"]({ job: { payload: {} } });
  assert.equal(result.created, 1);
  assert.equal(result.skippedPaused, 1);
  assert.equal(created.tasks[0].command.tenantId, "t2");
});

test("situational-awareness.sweep defers to the engine's own guard when a pause races the cached check", async () => {
  const { runtime, created } = sweepFixture({
    staleSubjects: [
      { tenant_id: "t1", subject_id: "sub1", last_health_record_at: "2026-08-01T00:00:00.000Z" },
      { tenant_id: "t1", subject_id: "sub2", last_health_record_at: "2026-08-01T00:00:00.000Z" }
    ],
    pausedTenants: { t1: false },
    engineCreate: async input => {
      const error = new Error("Autonomous task creation is paused for this tenant.");
      error.code = "autonomy_paused";
      throw error;
    }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.sweep"]({ job: { payload: {} } });
  assert.equal(result.created, 0);
  assert.equal(result.skippedPaused, 2);
  assert.equal(created.tasks.length, 0);
});

test("situational-awareness.sweep re-throws an unrelated engine.create failure instead of swallowing it as a pause", async () => {
  const { runtime } = sweepFixture({
    staleSubjects: [{ tenant_id: "t1", subject_id: "sub1", last_health_record_at: "2026-08-01T00:00:00.000Z" }],
    engineCreate: async () => { throw new Error("database unavailable"); }
  });
  const handlers = createHandlers({ runtime });
  await assert.rejects(() => handlers["situational-awareness.sweep"]({ job: { payload: {} } }), /database unavailable/);
});

test("listUnacknowledgedNudges joins real delivery state and excludes already-escalated nudges, never guessing the freeform data shape", async () => {
  const db = fakeDb([{ rows: [{ record_id: "rec_1", tenant_id: "t1", subject_id: "sub1", version: 1, data: {} }] }]);
  const repo = new RecordRepository(db);
  const deliveredBefore = new Date("2026-09-01T00:00:00.000Z");
  const result = await repo.listUnacknowledgedNudges({ workspaceId: "situational-awareness", recordType: "health_checkin_nudge", deliveredBefore, limit: 10 });
  assert.equal(result.length, 1);
  const sql = db.calls[0].sql;
  assert.match(sql, /join nexus_notifications no on no\.task_id = n\.task_id/);
  assert.match(sql, /no\.state='delivered'/);
  assert.match(sql, /no\.delivered_at < \$3/);
  assert.match(sql, /\(n\.data->>'escalatedAt'\) is null/);
  assert.match(sql, /not exists/);
  assert.match(sql, /h\.classification='health'/);
  assert.deepEqual(db.calls[0].params, ["situational-awareness", "health_checkin_nudge", deliveredBefore, 10]);
});

function escalationFixture({ unacknowledgedNudges = [], autonomousCountsByTenant = {}, pausedTenants = null, engineCreate = null, updateImpl = null } = {}) {
  const created = { tasks: [], updates: [] };
  const runtime = {
    records: {
      listUnacknowledgedNudges: async () => unacknowledgedNudges,
      update: updateImpl || (async item => { created.updates.push(item); return { ...item }; })
    },
    tasks: {
      countAutonomousCreatedSince: async ({ tenantId }) => autonomousCountsByTenant[tenantId] || 0
    },
    engine: {
      create: engineCreate || (async input => { created.tasks.push(input); return { taskId: `tsk_${created.tasks.length}` }; })
    }
  };
  if (pausedTenants) runtime.autonomyControl = { isPaused: async ({ tenantId }) => Boolean(pausedTenants[tenantId]) };
  return { runtime, created };
}

test("situational-awareness.escalate-unacknowledged-nudges escalates a delivered, unfollowed-up nudge with a real second reminder task", async () => {
  const { runtime, created } = escalationFixture({
    unacknowledgedNudges: [{ record_id: "rec_1", tenant_id: "t1", subject_id: "sub1", version: 1, data: { reason: "health_checkin_stale" } }]
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.escalate-unacknowledged-nudges"]({ job: { payload: {} } });
  assert.equal(result.scanned, 1);
  assert.equal(result.escalated, 1);
  assert.equal(created.tasks.length, 1);
  const taskInput = created.tasks[0];
  assert.equal(taskInput.autonomous, true);
  assert.equal(taskInput.command.tenantId, "t1");
  assert.equal(taskInput.command.actorId, "sub1");
  assert.equal(taskInput.steps[0].toolId, "reminders.schedule");
  assert.equal(created.updates.length, 1);
  assert.equal(created.updates[0].recordId, "rec_1");
  assert.equal(created.updates[0].expectedVersion, 1);
  assert.equal(created.updates[0].data.reason, "health_checkin_stale");
  assert.ok(created.updates[0].data.escalatedAt);
  assert.equal(created.updates[0].data.escalationTaskId, "tsk_1");
});

test("situational-awareness.escalate-unacknowledged-nudges enforces the per-tenant daily autonomous-task cap", async () => {
  const { runtime, created } = escalationFixture({
    unacknowledgedNudges: [
      { record_id: "rec_1", tenant_id: "t1", subject_id: "sub1", version: 1, data: {} },
      { record_id: "rec_2", tenant_id: "t1", subject_id: "sub2", version: 1, data: {} }
    ],
    autonomousCountsByTenant: { t1: 10 }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.escalate-unacknowledged-nudges"]({ job: { payload: { dailyAutonomousTaskCapPerTenant: 10 } } });
  assert.equal(result.escalated, 0);
  assert.equal(created.tasks.length, 0);
});

test("situational-awareness.escalate-unacknowledged-nudges skips a paused tenant entirely", async () => {
  const { runtime, created } = escalationFixture({
    unacknowledgedNudges: [{ record_id: "rec_1", tenant_id: "t1", subject_id: "sub1", version: 1, data: {} }],
    pausedTenants: { t1: true }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.escalate-unacknowledged-nudges"]({ job: { payload: {} } });
  assert.equal(result.escalated, 0);
  assert.equal(result.skippedPaused, 1);
  assert.equal(created.tasks.length, 0);
});

test("situational-awareness.escalate-unacknowledged-nudges defers to the engine's own guard when a pause races the cached check", async () => {
  const { runtime, created } = escalationFixture({
    unacknowledgedNudges: [{ record_id: "rec_1", tenant_id: "t1", subject_id: "sub1", version: 1, data: {} }],
    pausedTenants: { t1: false },
    engineCreate: async () => { const error = new Error("Autonomous task creation is paused for this tenant."); error.code = "autonomy_paused"; throw error; }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.escalate-unacknowledged-nudges"]({ job: { payload: {} } });
  assert.equal(result.escalated, 0);
  assert.equal(result.skippedPaused, 1);
  assert.equal(created.tasks.length, 0);
});

test("situational-awareness.escalate-unacknowledged-nudges still counts the escalation even when marking the nudge record loses a concurrent update race", async () => {
  const { runtime, created } = escalationFixture({
    unacknowledgedNudges: [{ record_id: "rec_1", tenant_id: "t1", subject_id: "sub1", version: 1, data: {} }],
    updateImpl: async () => { throw new Error("Record rec_1 was changed by another operation."); }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.escalate-unacknowledged-nudges"]({ job: { payload: {} } });
  assert.equal(result.escalated, 1, "the escalation task was genuinely created and must still count even if the marker update lost a race");
  assert.equal(created.tasks.length, 1);
});

test("situational-awareness.escalate-unacknowledged-nudges re-throws an unrelated engine.create failure instead of swallowing it as a pause", async () => {
  const { runtime } = escalationFixture({
    unacknowledgedNudges: [{ record_id: "rec_1", tenant_id: "t1", subject_id: "sub1", version: 1, data: {} }],
    engineCreate: async () => { throw new Error("database unavailable"); }
  });
  const handlers = createHandlers({ runtime });
  await assert.rejects(() => handlers["situational-awareness.escalate-unacknowledged-nudges"]({ job: { payload: {} } }), /database unavailable/);
});
