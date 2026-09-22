"use strict";
const assert = require("node:assert/strict");
const test = require("node:test");
const { RecordRepository } = require("../../nexus/data/record-repository.js");
const { createHandlers, SITUATIONAL_AWARENESS_WORKSPACE_ID, LEAD_FOLLOWUP_NUDGE_RECORD_TYPE } = require("../../nexus/workers/handlers.js");

function fakeDb(results = []) {
  const calls = [];
  const db = { calls, async query(sql, params) { calls.push({ sql, params }); return results.shift() || { rows: [] }; },
    async transaction(work) { return work(db); } };
  return db;
}

test("listBusinessWorkspacesWithDueFollowUps only matches a real YYYY-MM-DD followUpDate in the past, never dueDate/deadline", async () => {
  const db = fakeDb([{ rows: [{ tenant_id: "t1", owner_id: "u1", record_id: "rec_biz", business_name: "Grace Chapel",
    due_leads: [{ name: "Grace Otieno", followUpDate: "2026-01-01" }] }] }]);
  const repo = new RecordRepository(db);
  const result = await repo.listBusinessWorkspacesWithDueFollowUps({ limit: 10 });
  assert.equal(result.length, 1);
  const sql = db.calls[0].sql;
  assert.match(sql, /followUpDate/);
  assert.match(sql, /\^\\d\{4\}-\\d\{2\}-\\d\{2\}\$/);
  assert.match(sql, /< current_date/);
  assert.match(sql, /record_type='business-client'/);
  assert.doesNotMatch(sql, /dueDate/);
  assert.doesNotMatch(sql, /deadline/);
  assert.deepEqual(db.calls[0].params, [10]);
});

function sweepFixture({ dueWorkspaces = [], recentNudgesBySubject = {}, autonomousCountsByTenant = {}, pausedTenants = null, engineCreate = null } = {}) {
  const created = { tasks: [], nudgeRecords: [] };
  const runtime = {
    records: {
      listBusinessWorkspacesWithDueFollowUps: async () => dueWorkspaces,
      list: async ({ tenantId, subjectId }) => recentNudgesBySubject[`${tenantId}:${subjectId}`] || [],
      create: async item => { created.nudgeRecords.push(item); return { record_id: "rec_1" }; }
    },
    tasks: { countAutonomousCreatedSince: async ({ tenantId }) => autonomousCountsByTenant[tenantId] || 0 },
    engine: { create: engineCreate || (async input => { created.tasks.push(input); return { taskId: `tsk_${created.tasks.length}` }; }) }
  };
  if (pausedTenants) runtime.autonomyControl = { isPaused: async ({ tenantId }) => Boolean(pausedTenants[tenantId]) };
  return { runtime, created };
}

test("situational-awareness.lead-followup-sweep creates a real autonomous reminder naming the actual due lead and date", async () => {
  const { runtime, created } = sweepFixture({
    dueWorkspaces: [{ tenant_id: "t1", owner_id: "u1", record_id: "rec_biz", business_name: "Grace Chapel",
      due_leads: [{ name: "Grace Otieno", followUpDate: "2026-01-01" }] }]
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.lead-followup-sweep"]({ job: { payload: {} } });
  assert.equal(result.scanned, 1);
  assert.equal(result.created, 1);
  const taskInput = created.tasks[0];
  assert.equal(taskInput.autonomous, true);
  assert.equal(taskInput.application, "business");
  assert.equal(taskInput.command.tenantId, "t1");
  assert.equal(taskInput.command.actorId, "u1");
  assert.equal(taskInput.steps[0].toolId, "reminders.schedule");
  assert.match(taskInput.steps[0].input.when, /Grace Otieno/);
  assert.match(taskInput.steps[0].input.when, /2026-01-01/);
  assert.equal(created.nudgeRecords[0].workspaceId, SITUATIONAL_AWARENESS_WORKSPACE_ID);
  assert.equal(created.nudgeRecords[0].recordType, LEAD_FOLLOWUP_NUDGE_RECORD_TYPE);
  assert.equal(created.nudgeRecords[0].subjectId, "rec_biz");
});

test("situational-awareness.lead-followup-sweep sends one consolidated reminder naming every due lead in a workspace", async () => {
  const { runtime, created } = sweepFixture({
    dueWorkspaces: [{ tenant_id: "t1", owner_id: "u1", record_id: "rec_biz", business_name: "Grace Chapel",
      due_leads: [{ name: "Grace Otieno", followUpDate: "2026-01-01" }, { name: "John Kamau", followUpDate: "2026-01-05" }] }]
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.lead-followup-sweep"]({ job: { payload: {} } });
  assert.equal(result.created, 1, "one consolidated reminder, not one per lead");
  const when = created.tasks[0].steps[0].input.when;
  assert.match(when, /Grace Otieno/);
  assert.match(when, /John Kamau/);
});

test("situational-awareness.lead-followup-sweep never uses communications.send -- reaching the lead is not this sweep's decision", async () => {
  const { runtime, created } = sweepFixture({
    dueWorkspaces: [{ tenant_id: "t1", owner_id: "u1", record_id: "rec_biz", business_name: "A", due_leads: [{ name: "X", followUpDate: "2026-01-01" }] }]
  });
  const handlers = createHandlers({ runtime });
  await handlers["situational-awareness.lead-followup-sweep"]({ job: { payload: {} } });
  assert.equal(created.tasks[0].steps.every(step => step.toolId !== "communications.send"), true);
});

test("situational-awareness.lead-followup-sweep enforces the per-tenant daily autonomous-task cap", async () => {
  const { runtime, created } = sweepFixture({
    dueWorkspaces: [
      { tenant_id: "t1", owner_id: "u1", record_id: "rec_a", business_name: "A", due_leads: [{ name: "X", followUpDate: "2026-01-01" }] },
      { tenant_id: "t1", owner_id: "u2", record_id: "rec_b", business_name: "B", due_leads: [{ name: "Y", followUpDate: "2026-01-01" }] }
    ],
    autonomousCountsByTenant: { t1: 10 }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.lead-followup-sweep"]({ job: { payload: { dailyAutonomousTaskCapPerTenant: 10 } } });
  assert.equal(result.created, 0);
  assert.equal(created.tasks.length, 0);
});

test("situational-awareness.lead-followup-sweep skips a paused tenant entirely", async () => {
  const { runtime, created } = sweepFixture({
    dueWorkspaces: [{ tenant_id: "t1", owner_id: "u1", record_id: "rec_biz", business_name: "A", due_leads: [{ name: "X", followUpDate: "2026-01-01" }] }],
    pausedTenants: { t1: true }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.lead-followup-sweep"]({ job: { payload: {} } });
  assert.equal(result.created, 0);
  assert.equal(result.skippedPaused, 1);
  assert.equal(created.tasks.length, 0);
});

test("situational-awareness.lead-followup-sweep defers to the engine's own guard when a pause races the cached check", async () => {
  const { runtime, created } = sweepFixture({
    dueWorkspaces: [{ tenant_id: "t1", owner_id: "u1", record_id: "rec_biz", business_name: "A", due_leads: [{ name: "X", followUpDate: "2026-01-01" }] }],
    engineCreate: async () => { const error = new Error("Autonomous task creation is paused for this tenant."); error.code = "autonomy_paused"; throw error; }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.lead-followup-sweep"]({ job: { payload: {} } });
  assert.equal(result.created, 0);
  assert.equal(result.skippedPaused, 1);
  assert.equal(created.tasks.length, 0);
});

test("situational-awareness.lead-followup-sweep re-throws an unrelated engine.create failure instead of swallowing it as a pause", async () => {
  const { runtime } = sweepFixture({
    dueWorkspaces: [{ tenant_id: "t1", owner_id: "u1", record_id: "rec_biz", business_name: "A", due_leads: [{ name: "X", followUpDate: "2026-01-01" }] }],
    engineCreate: async () => { throw new Error("database unavailable"); }
  });
  const handlers = createHandlers({ runtime });
  await assert.rejects(() => handlers["situational-awareness.lead-followup-sweep"]({ job: { payload: {} } }), /database unavailable/);
});
