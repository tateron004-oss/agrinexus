"use strict";
const assert = require("node:assert/strict");
const test = require("node:test");
const { RecordRepository } = require("../../nexus/data/record-repository.js");
const { createHandlers, SITUATIONAL_AWARENESS_WORKSPACE_ID, BUSINESS_DEADLINE_NUDGE_RECORD_TYPE } = require("../../nexus/workers/handlers.js");

function fakeDb(results = []) {
  const calls = [];
  const db = { calls, async query(sql, params) { calls.push({ sql, params }); return results.shift() || { rows: [] }; },
    async transaction(work) { return work(db); } };
  return db;
}

test("listBusinessWorkspacesWithDatedDeadlines checks a real overdue task dueDate or an approaching grant deadline, both strictly YYYY-MM-DD", async () => {
  const db = fakeDb([{ rows: [{ tenant_id: "t1", owner_id: "u1", record_id: "rec_biz", business_name: "A",
    overdue_tasks: [{ title: "File taxes", dueDate: "2026-01-01" }], approaching_grants: [] }] }]);
  const repo = new RecordRepository(db);
  const result = await repo.listBusinessWorkspacesWithDatedDeadlines({ limit: 10 });
  assert.equal(result.length, 1);
  const sql = db.calls[0].sql;
  assert.match(sql, /dueDate/);
  assert.match(sql, /deadline/);
  assert.match(sql, /< current_date/);
  assert.match(sql, /between current_date and current_date \+ 7/);
  assert.match(sql, /not in \('done','complete'\)/);
  assert.match(sql, /not in \('awarded','declined'\)/);
  assert.deepEqual(db.calls[0].params, [10]);
});

function sweepFixture({ candidates = [], recentNudgesBySubject = {}, autonomousCountsByTenant = {}, pausedTenants = null, engineCreate = null } = {}) {
  const created = { tasks: [], nudgeRecords: [], removed: [] };
  let seq = 0;
  const runtime = {
    records: {
      listBusinessWorkspacesWithDatedDeadlines: async () => candidates,
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

test("situational-awareness.business-deadline-sweep creates a real autonomous reminder naming the overdue task and its date", async () => {
  const { runtime, created } = sweepFixture({
    candidates: [{ tenant_id: "t1", owner_id: "u1", record_id: "rec_biz", business_name: "Grace Chapel",
      overdue_tasks: [{ title: "File taxes", dueDate: "2026-01-01" }], approaching_grants: [] }]
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.business-deadline-sweep"]({ job: { payload: {} } });
  assert.equal(result.scanned, 1);
  assert.equal(result.created, 1);
  const taskInput = created.tasks[0];
  assert.equal(taskInput.autonomous, true);
  assert.equal(taskInput.application, "business");
  assert.equal(taskInput.command.actorId, "u1");
  assert.equal(taskInput.steps[0].toolId, "reminders.schedule");
  assert.match(taskInput.steps[0].input.when, /File taxes/);
  assert.match(taskInput.steps[0].input.when, /2026-01-01/);
  assert.equal(taskInput.steps.every(step => step.toolId !== "communications.send"), true);
  assert.equal(created.nudgeRecords[0].recordType, BUSINESS_DEADLINE_NUDGE_RECORD_TYPE);
  assert.equal(created.nudgeRecords[0].workspaceId, SITUATIONAL_AWARENESS_WORKSPACE_ID);
});

test("situational-awareness.business-deadline-sweep names an approaching grant deadline too, in the same consolidated reminder", async () => {
  const { runtime, created } = sweepFixture({
    candidates: [{ tenant_id: "t1", owner_id: "u1", record_id: "rec_biz", business_name: "Grace Chapel",
      overdue_tasks: [{ title: "File taxes", dueDate: "2026-01-01" }],
      approaching_grants: [{ label: "Community Fund", deadline: "2026-09-25" }] }]
  });
  const handlers = createHandlers({ runtime });
  await handlers["situational-awareness.business-deadline-sweep"]({ job: { payload: {} } });
  const when = created.tasks[0].steps[0].input.when;
  assert.match(when, /File taxes/);
  assert.match(when, /Community Fund/);
  assert.match(when, /2026-09-25/);
});

test("situational-awareness.business-deadline-sweep enforces the per-tenant daily autonomous-task cap", async () => {
  const { runtime, created } = sweepFixture({
    candidates: [
      { tenant_id: "t1", owner_id: "u1", record_id: "rec_a", business_name: "A", overdue_tasks: [{ title: "X", dueDate: "2026-01-01" }], approaching_grants: [] },
      { tenant_id: "t1", owner_id: "u2", record_id: "rec_b", business_name: "B", overdue_tasks: [{ title: "Y", dueDate: "2026-01-01" }], approaching_grants: [] }
    ],
    autonomousCountsByTenant: { t1: 10 }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.business-deadline-sweep"]({ job: { payload: { dailyAutonomousTaskCapPerTenant: 10 } } });
  assert.equal(result.created, 0);
  assert.equal(created.tasks.length, 0);
});

test("situational-awareness.business-deadline-sweep skips a paused tenant entirely", async () => {
  const { runtime, created } = sweepFixture({
    candidates: [{ tenant_id: "t1", owner_id: "u1", record_id: "rec_biz", business_name: "A", overdue_tasks: [{ title: "X", dueDate: "2026-01-01" }], approaching_grants: [] }],
    pausedTenants: { t1: true }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.business-deadline-sweep"]({ job: { payload: {} } });
  assert.equal(result.created, 0);
  assert.equal(result.skippedPaused, 1);
  assert.equal(created.tasks.length, 0);
});

test("situational-awareness.business-deadline-sweep defers to the engine's own guard when a pause races the cached check", async () => {
  const { runtime, created } = sweepFixture({
    candidates: [{ tenant_id: "t1", owner_id: "u1", record_id: "rec_biz", business_name: "A", overdue_tasks: [{ title: "X", dueDate: "2026-01-01" }], approaching_grants: [] }],
    engineCreate: async () => { const error = new Error("Autonomous task creation is paused for this tenant."); error.code = "autonomy_paused"; throw error; }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.business-deadline-sweep"]({ job: { payload: {} } });
  assert.equal(result.created, 0);
  assert.equal(result.skippedPaused, 1);
  assert.equal(created.tasks.length, 0);
});

test("situational-awareness.business-deadline-sweep re-throws an unrelated engine.create failure instead of swallowing it as a pause", async () => {
  const { runtime } = sweepFixture({
    candidates: [{ tenant_id: "t1", owner_id: "u1", record_id: "rec_biz", business_name: "A", overdue_tasks: [{ title: "X", dueDate: "2026-01-01" }], approaching_grants: [] }],
    engineCreate: async () => { throw new Error("database unavailable"); }
  });
  const handlers = createHandlers({ runtime });
  await assert.rejects(() => handlers["situational-awareness.business-deadline-sweep"]({ job: { payload: {} } }), /database unavailable/);
});
