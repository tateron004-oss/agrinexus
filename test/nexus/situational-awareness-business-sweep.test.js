"use strict";
const assert = require("node:assert/strict");
const test = require("node:test");
const { RecordRepository } = require("../../nexus/data/record-repository.js");
const { createHandlers, SITUATIONAL_AWARENESS_WORKSPACE_ID, BUSINESS_FOLLOWUP_NUDGE_RECORD_TYPE } = require("../../nexus/workers/handlers.js");

function fakeDb(results = []) {
  const calls = [];
  const db = { calls, async query(sql, params) { calls.push({ sql, params }); return results.shift() || { rows: [] }; },
    async transaction(work) { return work(db); } };
  return db;
}

test("listStaleBusinessWorkspaces checks record staleness and open tasks/grants, never a freeform dueDate/deadline comparison", async () => {
  const db = fakeDb([{ rows: [{ tenant_id: "t1", owner_id: "u1", record_id: "rec_biz", updated_at: "2026-08-01T00:00:00.000Z",
    business_name: "Grace Chapel", open_task_titles: ["Follow up with donor"], open_grant_labels: ["Community Fund"] }] }]);
  const repo = new RecordRepository(db);
  const staleBefore = new Date("2026-09-01T00:00:00.000Z");
  const result = await repo.listStaleBusinessWorkspaces({ staleBefore, limit: 10 });
  assert.equal(result.length, 1);
  const sql = db.calls[0].sql;
  assert.match(sql, /record_type='business-client'/);
  assert.match(sql, /workspace_id='operations'/);
  assert.match(sql, /jsonb_array_elements/);
  assert.match(sql, /not in \('done','complete'\)/);
  assert.match(sql, /not in \('awarded','declined'\)/);
  assert.doesNotMatch(sql, /dueDate/i);
  assert.doesNotMatch(sql, /deadline/i);
  assert.deepEqual(db.calls[0].params, [staleBefore, 10]);
});

function sweepFixture({ staleWorkspaces = [], recentNudgesByOwner = {}, autonomousCountsByTenant = {}, pausedTenants = null, engineCreate = null } = {}) {
  const created = { tasks: [], nudgeRecords: [] };
  const runtime = {
    records: {
      listStaleBusinessWorkspaces: async () => staleWorkspaces,
      // Found live: record_id ("rec_<uuid>") is not a real uuid and can
      // never be a subjectId (a real Postgres `uuid` column) -- the real
      // repository is queried by ownerId, and the handler matches the
      // specific record via data.recordId. This fake mirrors that exact
      // contract now, not the pre-fix (broken) subjectId-based one.
      list: async ({ tenantId, ownerId }) => recentNudgesByOwner[`${tenantId}:${ownerId}`] || [],
      create: async item => { created.nudgeRecords.push(item); return { record_id: "rec_1" }; }
    },
    tasks: { countAutonomousCreatedSince: async ({ tenantId }) => autonomousCountsByTenant[tenantId] || 0 },
    engine: { create: engineCreate || (async input => { created.tasks.push(input); return { taskId: `tsk_${created.tasks.length}` }; }) }
  };
  if (pausedTenants) runtime.autonomyControl = { isPaused: async ({ tenantId }) => Boolean(pausedTenants[tenantId]) };
  return { runtime, created };
}

test("situational-awareness.business-sweep creates a real autonomous documents.create task naming the actual open items", async () => {
  const { runtime, created } = sweepFixture({
    staleWorkspaces: [{ tenant_id: "t1", owner_id: "u1", record_id: "rec_biz", updated_at: "2026-08-01T00:00:00.000Z",
      business_name: "Grace Chapel", open_task_titles: ["Follow up with donor"], open_grant_labels: ["Community Fund"] }]
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.business-sweep"]({ job: { payload: {} } });
  assert.equal(result.scanned, 1);
  assert.equal(result.created, 1);
  const taskInput = created.tasks[0];
  assert.equal(taskInput.autonomous, true);
  assert.equal(taskInput.application, "business");
  assert.equal(taskInput.command.tenantId, "t1");
  assert.equal(taskInput.command.actorId, "u1", "the reminder/document belongs to the workspace owner, not the record ID");
  assert.equal(taskInput.steps.length, 1);
  assert.equal(taskInput.steps[0].toolId, "documents.create");
  const content = taskInput.steps[0].input.content;
  assert.match(content, /Grace Chapel/);
  assert.match(content, /Follow up with donor/);
  assert.match(content, /Community Fund/);
  assert.equal(created.nudgeRecords[0].workspaceId, SITUATIONAL_AWARENESS_WORKSPACE_ID);
  assert.equal(created.nudgeRecords[0].recordType, BUSINESS_FOLLOWUP_NUDGE_RECORD_TYPE);
  // Found live: record_id is a "rec_<uuid>" business-record id, not a real
  // uuid -- it must never be sent as subjectId (a real Postgres `uuid`
  // column), only saved into data.recordId, which the cooldown check
  // matches against instead.
  assert.equal(created.nudgeRecords[0].subjectId, undefined, "record_id must never be sent as subjectId");
  assert.equal(created.nudgeRecords[0].data.recordId, "rec_biz", "cooldown is scoped to the specific business record, via data.recordId, not the owner");
  assert.equal(created.nudgeRecords[0].ownerId, "u1");
});

test("situational-awareness.business-sweep scopes cooldown per business record, so a second stale workspace for the same owner still nudges", async () => {
  const { runtime, created } = sweepFixture({
    staleWorkspaces: [
      { tenant_id: "t1", owner_id: "u1", record_id: "rec_a", updated_at: "2026-08-01T00:00:00.000Z", business_name: "Farm Co", open_task_titles: ["A"], open_grant_labels: [] },
      { tenant_id: "t1", owner_id: "u1", record_id: "rec_b", updated_at: "2026-08-01T00:00:00.000Z", business_name: "Side Hustle", open_task_titles: ["B"], open_grant_labels: [] }
    ],
    recentNudgesByOwner: { "t1:u1": [{ updated_at: new Date().toISOString(), data: { recordId: "rec_a" } }] }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.business-sweep"]({ job: { payload: {} } });
  assert.equal(result.created, 1, "rec_a is on cooldown, rec_b is not");
  assert.equal(created.tasks[0].steps[0].input.content.includes("Side Hustle"), true);
});

test("situational-awareness.business-sweep handles no open grants or no open tasks without a broken document", async () => {
  const { runtime, created } = sweepFixture({
    staleWorkspaces: [{ tenant_id: "t1", owner_id: "u1", record_id: "rec_biz", updated_at: "2026-08-01T00:00:00.000Z",
      business_name: "Grace Chapel", open_task_titles: null, open_grant_labels: ["Community Fund"] }]
  });
  const handlers = createHandlers({ runtime });
  await handlers["situational-awareness.business-sweep"]({ job: { payload: {} } });
  const content = created.tasks[0].steps[0].input.content;
  assert.doesNotMatch(content, /## Open Tasks/);
  assert.match(content, /## Grants Not Yet Resolved/);
});

test("situational-awareness.business-sweep enforces the per-tenant daily autonomous-task cap", async () => {
  const { runtime, created } = sweepFixture({
    staleWorkspaces: [
      { tenant_id: "t1", owner_id: "u1", record_id: "rec_a", updated_at: "2026-08-01T00:00:00.000Z", business_name: "A", open_task_titles: ["x"], open_grant_labels: [] },
      { tenant_id: "t1", owner_id: "u2", record_id: "rec_b", updated_at: "2026-08-01T00:00:00.000Z", business_name: "B", open_task_titles: ["y"], open_grant_labels: [] }
    ],
    autonomousCountsByTenant: { t1: 10 }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.business-sweep"]({ job: { payload: { dailyAutonomousTaskCapPerTenant: 10 } } });
  assert.equal(result.created, 0);
  assert.equal(created.tasks.length, 0);
});

test("situational-awareness.business-sweep skips a paused tenant entirely", async () => {
  const { runtime, created } = sweepFixture({
    staleWorkspaces: [{ tenant_id: "t1", owner_id: "u1", record_id: "rec_biz", updated_at: "2026-08-01T00:00:00.000Z", business_name: "A", open_task_titles: ["x"], open_grant_labels: [] }],
    pausedTenants: { t1: true }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.business-sweep"]({ job: { payload: {} } });
  assert.equal(result.created, 0);
  assert.equal(result.skippedPaused, 1);
  assert.equal(created.tasks.length, 0);
});

test("situational-awareness.business-sweep defers to the engine's own guard when a pause races the cached check", async () => {
  const { runtime, created } = sweepFixture({
    staleWorkspaces: [{ tenant_id: "t1", owner_id: "u1", record_id: "rec_biz", updated_at: "2026-08-01T00:00:00.000Z", business_name: "A", open_task_titles: ["x"], open_grant_labels: [] }],
    engineCreate: async () => { const error = new Error("Autonomous task creation is paused for this tenant."); error.code = "autonomy_paused"; throw error; }
  });
  const handlers = createHandlers({ runtime });
  const result = await handlers["situational-awareness.business-sweep"]({ job: { payload: {} } });
  assert.equal(result.created, 0);
  assert.equal(result.skippedPaused, 1);
  assert.equal(created.tasks.length, 0);
});

test("situational-awareness.business-sweep re-throws an unrelated engine.create failure instead of swallowing it as a pause", async () => {
  const { runtime } = sweepFixture({
    staleWorkspaces: [{ tenant_id: "t1", owner_id: "u1", record_id: "rec_biz", updated_at: "2026-08-01T00:00:00.000Z", business_name: "A", open_task_titles: ["x"], open_grant_labels: [] }],
    engineCreate: async () => { throw new Error("database unavailable"); }
  });
  const handlers = createHandlers({ runtime });
  await assert.rejects(() => handlers["situational-awareness.business-sweep"]({ job: { payload: {} } }), /database unavailable/);
});
