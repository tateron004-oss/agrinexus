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

function sweepFixture({ staleSubjects = [], recentNudgesBySubject = {}, autonomousCountsByTenant = {}, pausedTenants = null, engineCreate = null, claimCooldown = null } = {}) {
  const created = { tasks: [], nudgeRecords: [], removed: [], attached: [] };
  let seq = 0;
  const runtime = {
    records: {
      listStaleHealthSubjects: async () => staleSubjects,
      // Mirrors RecordRepository.claimCooldown()'s real contract: re-checks the cooldown and reserves it in one
      // step, returning null (no side effect at all) when a recent-enough marker already exists.
      claimCooldown: claimCooldown || (async ({ tenantId, ownerId, subjectId, workspaceId, recordType, cooldownMs, classification, data, provenance }) => {
        const last = (recentNudgesBySubject[`${tenantId}:${subjectId}`] || [])[0];
        if (last && Date.now() - new Date(last.updated_at).getTime() < cooldownMs) return null;
        const record = { record_id: `rec_${++seq}`, tenantId, ownerId, subjectId, workspaceId, recordType, classification, data, provenance };
        created.nudgeRecords.push(record);
        return record;
      }),
      attachTask: async ({ recordId, taskId }) => { created.attached.push({ recordId, taskId }); },
      remove: async ({ recordId }) => { created.removed.push(recordId); return true; }
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
  const claimCalls = [];
  const { runtime, created } = sweepFixture({
    staleSubjects: [{ tenant_id: "t1", subject_id: "sub1", last_health_record_at: "2026-08-01T00:00:00.000Z" }],
    pausedTenants: { t1: true }
  });
  runtime.records.claimCooldown = async input => { claimCalls.push(input); return null; };
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.sweep"]({ job: { payload: {} } });
  assert.equal(result.created, 0);
  assert.equal(result.skippedPaused, 1);
  assert.equal(created.tasks.length, 0);
  assert.equal(claimCalls.length, 0);
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

test("situational-awareness.sweep defers to the engine's own guard when a pause races the cached check, and gives the cooldown window back", async () => {
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
  // Found live: a reservation made before this failure must not silently block a future genuine nudge for the
  // whole cooldown period over a task that was never actually created. Only the FIRST candidate ever reaches
  // claimCooldown() here -- once its engine.create() throws autonomy_paused, the tenant is cached as paused and
  // the second candidate is skipped before claiming anything at all.
  assert.equal(created.removed.length, 1, "the one reserved cooldown window must be given back since no real task exists for it");
});

test("situational-awareness.sweep re-throws an unrelated engine.create failure, but still gives the cooldown window back first", async () => {
  const { runtime, created } = sweepFixture({
    staleSubjects: [{ tenant_id: "t1", subject_id: "sub1", last_health_record_at: "2026-08-01T00:00:00.000Z" }],
    engineCreate: async () => { throw new Error("database unavailable"); }
  });
  const handlers = createHandlers({ runtime });
  await assert.rejects(() => handlers["situational-awareness.sweep"]({ job: { payload: {} } }), /database unavailable/);
  assert.equal(created.removed.length, 1);
});

// Found live: two concurrent sweeps racing for the same subject both used to pass a plain list()-then-create()
// check before either had written its marker, both creating a real duplicate autonomous task. claimCooldown()'s
// job is to make that impossible by construction (the real repository does this with an advisory lock); this
// proves the handler actually calls it BEFORE creating the task, not after, so a losing claim never reaches
// engine.create() at all.
test("situational-awareness.sweep never creates a task when the cooldown claim is refused, and never claims twice for one candidate", async () => {
  const claimCalls = [];
  let claimedOnce = false;
  const { runtime, created } = sweepFixture({
    staleSubjects: [{ tenant_id: "t1", subject_id: "sub1", last_health_record_at: "2026-08-01T00:00:00.000Z" }]
  });
  runtime.records.claimCooldown = async input => {
    claimCalls.push(input);
    if (claimedOnce) return null; // a second claim attempt for the same candidate must be refused
    claimedOnce = true;
    return { record_id: "rec_1" };
  };
  const handlers = createHandlers({ runtime });
  const [first, second] = await Promise.all([
    handlers["situational-awareness.sweep"]({ job: { payload: {} } }),
    handlers["situational-awareness.sweep"]({ job: { payload: {} } })
  ]);
  assert.equal(claimCalls.length, 2, "both sweeps must attempt the claim");
  assert.equal(first.created + second.created, 1, "exactly one of the two racing sweeps may create the real task");
  assert.equal(created.tasks.length, 1, "only one real autonomous task may exist for this candidate, not two");
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
      // Mirrors RecordRepository.update()'s real optimistic-concurrency contract: a successful update bumps the
      // row's version by one, which the caller must use as the expectedVersion for its next write.
      update: updateImpl || (async item => { created.updates.push(item); return { ...item, version: item.expectedVersion + 1 }; })
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
  // Found live: the claim (marking escalatedAt) must happen BEFORE the task is created, as its own write --
  // not bundled into one update alongside escalationTaskId after the fact, which left no way to back off before
  // a duplicate real task existed.
  assert.equal(created.updates.length, 2, "the claim and the taskId attachment are two separate writes");
  assert.equal(created.updates[0].recordId, "rec_1");
  assert.equal(created.updates[0].expectedVersion, 1);
  assert.equal(created.updates[0].data.reason, "health_checkin_stale");
  assert.ok(created.updates[0].data.escalatedAt);
  assert.equal(created.updates[0].data.escalationTaskId, undefined, "the claim write must not already assume a task exists");
  assert.equal(created.updates[1].expectedVersion, 2, "the taskId attachment must use the claim's own bumped version");
  assert.equal(created.updates[1].data.escalationTaskId, "tsk_1");
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

// Found live: two concurrent escalation sweeps racing for the SAME already-existing nudge record used to both
// read it, both create a duplicate real escalation task, and only THEN race on the version-checked update -- so
// the optimistic-concurrency check only ever prevented a duplicate bookkeeping write, never the duplicate task.
// Claiming (the escalatedAt update) BEFORE creating the task means the loser's own claim throws a version
// conflict and it backs off before calling engine.create() at all.
test("situational-awareness.escalate-unacknowledged-nudges refuses to escalate the same nudge twice when the claim loses a version race", async () => {
  let claimed = false;
  const { runtime, created } = escalationFixture({
    unacknowledgedNudges: [{ record_id: "rec_1", tenant_id: "t1", subject_id: "sub1", version: 1, data: {} }],
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
  await handlers["situational-awareness.escalate-unacknowledged-nudges"]({ job: { payload: {} } });
  await handlers["situational-awareness.escalate-unacknowledged-nudges"]({ job: { payload: {} } });
  assert.equal(created.tasks.length, 1, "only one escalation task may exist for this nudge, not two");
});

test("situational-awareness.escalate-unacknowledged-nudges still counts the escalation even when attaching the taskId loses a concurrent update race", async () => {
  const { runtime, created } = escalationFixture({
    unacknowledgedNudges: [{ record_id: "rec_1", tenant_id: "t1", subject_id: "sub1", version: 1, data: {} }],
    updateImpl: async item => {
      created.updates.push(item);
      if ("escalationTaskId" in item.data) throw new Error("Record rec_1 was changed by another operation.");
      return { ...item, version: item.expectedVersion + 1 };
    }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.escalate-unacknowledged-nudges"]({ job: { payload: {} } });
  assert.equal(result.escalated, 1, "the escalation task was genuinely created and must still count even if attaching its id lost a race");
  assert.equal(created.tasks.length, 1);
});

test("situational-awareness.escalate-unacknowledged-nudges skips a nudge whose claim already lost a version race, without creating a task", async () => {
  const { runtime, created } = escalationFixture({
    unacknowledgedNudges: [{ record_id: "rec_1", tenant_id: "t1", subject_id: "sub1", version: 1, data: {} }],
    updateImpl: async () => { throw new Error("Record rec_1 was changed by another operation."); }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.escalate-unacknowledged-nudges"]({ job: { payload: {} } });
  assert.equal(result.escalated, 0, "a claim that loses its version race must not create a duplicate escalation task");
  assert.equal(created.tasks.length, 0);
});

test("situational-awareness.escalate-unacknowledged-nudges re-throws an unrelated engine.create failure, but reverts its claim first", async () => {
  const updates = [];
  const { runtime } = escalationFixture({
    unacknowledgedNudges: [{ record_id: "rec_1", tenant_id: "t1", subject_id: "sub1", version: 1, data: { reason: "x" } }],
    engineCreate: async () => { throw new Error("database unavailable"); },
    updateImpl: async item => { updates.push(item); return { ...item, version: item.expectedVersion + 1 }; }
  });
  const handlers = createHandlers({ runtime });
  await assert.rejects(() => handlers["situational-awareness.escalate-unacknowledged-nudges"]({ job: { payload: {} } }), /database unavailable/);
  assert.equal(updates.length, 2, "the claim, then its revert");
  assert.equal(updates[1].data.escalatedAt, undefined, "the revert must restore the nudge's original data, with no escalatedAt");
});
