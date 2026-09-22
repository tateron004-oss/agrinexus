"use strict";
const assert = require("node:assert/strict");
const test = require("node:test");
const { WellnessRepository } = require("../../nexus/wellness/store.js");
const { createHandlers, SITUATIONAL_AWARENESS_WORKSPACE_ID, WELLNESS_GOAL_NUDGE_RECORD_TYPE } = require("../../nexus/workers/handlers.js");

function fakeDb(results = []) {
  const calls = [];
  const db = { calls, async query(sql, params) { calls.push({ sql, params }); return results.shift() || { rows: [] }; },
    async transaction(work) { return work(db); } };
  return db;
}

test("listStaleWorkoutGoalPrincipals only matches a real workout goal against real workout entries, on the same table's own two content shapes", async () => {
  const db = fakeDb([{ rows: [{ tenant_id: "t1", principal_id: "u1", last_workout_at: null }] }]);
  const repo = new WellnessRepository(db);
  const staleBefore = new Date("2026-09-01T00:00:00.000Z");
  const result = await repo.listStaleWorkoutGoalPrincipals({ staleBefore, limit: 10 });
  assert.equal(result.length, 1);
  const sql = db.calls[0].sql;
  assert.match(sql, /purpose='wellness'/);
  assert.match(sql, /content->>'kind'='goal'/);
  assert.match(sql, /content->>'metric'='workouts'/);
  assert.match(sql, /content->>'kind'='entry'/);
  assert.match(sql, /content->>'metric'='workout'/);
  assert.deepEqual(db.calls[0].params, [staleBefore, 10]);
});

function sweepFixture({ staleGoals = [], recentNudgesBySubject = {}, autonomousCountsByTenant = {}, pausedTenants = null, engineCreate = null } = {}) {
  const created = { tasks: [], nudgeRecords: [] };
  const runtime = {
    wellnessRecords: { listStaleWorkoutGoalPrincipals: async () => staleGoals },
    records: {
      list: async ({ tenantId, subjectId }) => recentNudgesBySubject[`${tenantId}:${subjectId}`] || [],
      create: async item => { created.nudgeRecords.push(item); return { record_id: "rec_1" }; }
    },
    tasks: { countAutonomousCreatedSince: async ({ tenantId }) => autonomousCountsByTenant[tenantId] || 0 },
    engine: { create: engineCreate || (async input => { created.tasks.push(input); return { taskId: `tsk_${created.tasks.length}` }; }) }
  };
  if (pausedTenants) runtime.autonomyControl = { isPaused: async ({ tenantId }) => Boolean(pausedTenants[tenantId]) };
  return { runtime, created };
}

test("situational-awareness.wellness-sweep creates a real autonomous reminders.schedule task for a stale workout goal", async () => {
  const { runtime, created } = sweepFixture({ staleGoals: [{ tenant_id: "t1", principal_id: "u1", last_workout_at: null }] });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.wellness-sweep"]({ job: { payload: {} } });
  assert.equal(result.scanned, 1);
  assert.equal(result.created, 1);
  const taskInput = created.tasks[0];
  assert.equal(taskInput.autonomous, true);
  assert.equal(taskInput.application, "wellness");
  assert.equal(taskInput.command.tenantId, "t1");
  assert.equal(taskInput.command.actorId, "u1");
  assert.equal(taskInput.steps[0].toolId, "reminders.schedule");
  assert.equal(created.nudgeRecords[0].workspaceId, SITUATIONAL_AWARENESS_WORKSPACE_ID);
  assert.equal(created.nudgeRecords[0].recordType, WELLNESS_GOAL_NUDGE_RECORD_TYPE);
  assert.equal(created.nudgeRecords[0].subjectId, "u1");
});

test("situational-awareness.wellness-sweep skips a subject still within its cooldown window", async () => {
  const { runtime, created } = sweepFixture({
    staleGoals: [{ tenant_id: "t1", principal_id: "u1", last_workout_at: null }],
    recentNudgesBySubject: { "t1:u1": [{ updated_at: new Date().toISOString() }] }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.wellness-sweep"]({ job: { payload: {} } });
  assert.equal(result.created, 0);
  assert.equal(created.tasks.length, 0);
});

test("situational-awareness.wellness-sweep enforces the per-tenant daily autonomous-task cap", async () => {
  const { runtime, created } = sweepFixture({
    staleGoals: [{ tenant_id: "t1", principal_id: "u1", last_workout_at: null }, { tenant_id: "t1", principal_id: "u2", last_workout_at: null }],
    autonomousCountsByTenant: { t1: 10 }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.wellness-sweep"]({ job: { payload: { dailyAutonomousTaskCapPerTenant: 10 } } });
  assert.equal(result.created, 0);
  assert.equal(created.tasks.length, 0);
});

test("situational-awareness.wellness-sweep skips a paused tenant entirely", async () => {
  const { runtime, created } = sweepFixture({
    staleGoals: [{ tenant_id: "t1", principal_id: "u1", last_workout_at: null }],
    pausedTenants: { t1: true }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.wellness-sweep"]({ job: { payload: {} } });
  assert.equal(result.created, 0);
  assert.equal(result.skippedPaused, 1);
  assert.equal(created.tasks.length, 0);
});

test("situational-awareness.wellness-sweep defers to the engine's own guard when a pause races the cached check", async () => {
  const { runtime, created } = sweepFixture({
    staleGoals: [{ tenant_id: "t1", principal_id: "u1", last_workout_at: null }],
    engineCreate: async () => { const error = new Error("Autonomous task creation is paused for this tenant."); error.code = "autonomy_paused"; throw error; }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.wellness-sweep"]({ job: { payload: {} } });
  assert.equal(result.created, 0);
  assert.equal(result.skippedPaused, 1);
  assert.equal(created.tasks.length, 0);
});

test("situational-awareness.wellness-sweep re-throws an unrelated engine.create failure instead of swallowing it as a pause", async () => {
  const { runtime } = sweepFixture({
    staleGoals: [{ tenant_id: "t1", principal_id: "u1", last_workout_at: null }],
    engineCreate: async () => { throw new Error("database unavailable"); }
  });
  const handlers = createHandlers({ runtime });
  await assert.rejects(() => handlers["situational-awareness.wellness-sweep"]({ job: { payload: {} } }), /database unavailable/);
});
