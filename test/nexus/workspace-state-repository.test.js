"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { WorkspaceStateRepository } = require("../../nexus/apps/workspace-state-repository.js");

test("workspace state is staged durably and completed only by a verified renderer receipt", async () => {
  const rows = [];
  const records = {
    async list() { return rows; },
    async create(input) {
      const row = { record_id: "record-1", task_id: input.taskId, version: 1,
        data: input.data, provenance: input.provenance, subjectId: input.subjectId };
      rows.unshift(row); return row;
    },
    async update(input) {
      const row = rows.find(item => item.record_id === input.recordId);
      Object.assign(row, { version: row.version + 1, data: input.data, provenance: input.provenance });
      return row;
    }
  };
  const repository = new WorkspaceStateRepository(records);
  const outcome = { schema: "nexus.workspace-outcome.v1", commandId: "cmd-1",
    correlationId: "cor-1", application: "maps", workspace: "map",
    completed: false, verification: { providerVerified: true, renderRequired: true, renderVerified: false } };
  const staged = await repository.stage({ tenantId: "tenant-1", ownerId: "user-1", taskId: "task-1", outcome });
  // Found live (erasure audit): this record used to be created with no
  // subjectId at all, so it was stored with subject_id=NULL -- which never
  // matches a subject-scoped account-erasure query, permanently leaving the
  // record's real rendered content behind after "erase my account".
  assert.equal(rows[0].subjectId, "user-1", "the record must carry the owner as its subject so account erasure can find it");
  assert.equal(staged.data.lifecycle, "render_required");
  assert.equal(staged.data.verification.renderVerified, false);
  await assert.rejects(() => repository.acknowledge({ tenantId: "tenant-1", actorId: "user-1",
    taskId: "task-1", receipt: { rendered: true, visible: false, audible: false } }),
  error => error.code === "workspace_render_unverified");
  const completed = await repository.acknowledge({ tenantId: "tenant-1", actorId: "user-1",
    taskId: "task-1", receipt: { rendered: true, visible: true, audible: false,
      evidence: { locator: "#map" }, observedAt: "2026-08-12T22:00:00.000Z" } });
  assert.equal(completed.data.lifecycle, "completed");
  assert.equal(completed.data.completed, true);
  assert.equal(completed.data.verification.renderVerified, true);
  assert.equal(completed.data.rendererReceipt.evidence.locator, "#map");
});

// Found live: current() used to call list() with no task_id filter at all (the real RecordRepository.list()
// had no way to filter by it), so it had to overfetch the 200 most-recently-updated rows of this record
// type TENANT-WIDE and find the match client-side. A row is written for EVERY task that reaches
// render_required, across every application -- once more than 200 OTHER tasks in the tenant had a more
// recently updated row, a genuinely existing row for an older, still-in-flight task fell out of the window.
// This fake mirrors the real repository's actual behavior (filters by the given columns including task_id,
// orders newest-updated-first, respects the given limit) instead of the file's other test's simplified
// "return everything" fake, so it can actually reproduce the bug.
test("current() finds a task's own workspace-state row even after many other tasks' rows are more recently updated in the same tenant", async () => {
  const rows = [];
  const records = {
    async list({ recordType, taskId, limit = 200 }) {
      let matches = rows.filter(row => row.record_type === recordType);
      if (taskId) matches = matches.filter(row => row.task_id === taskId);
      return matches.slice(0, limit);
    },
    async create(input) {
      const row = { record_id: `record-${rows.length + 1}`, task_id: input.taskId, record_type: input.recordType,
        version: 1, data: input.data, provenance: input.provenance, subjectId: input.subjectId };
      rows.unshift(row); return row;
    },
    async update(input) { return input; }
  };
  const repository = new WorkspaceStateRepository(records);
  const outcome = { schema: "nexus.workspace-outcome.v1", commandId: "cmd-1", correlationId: "cor-1",
    application: "maps", workspace: "map", completed: false,
    verification: { providerVerified: true, renderRequired: true, renderVerified: false } };
  await repository.stage({ tenantId: "tenant-1", ownerId: "user-old", taskId: "task-old", outcome });
  for (let i = 0; i < 200; i += 1) await repository.stage({ tenantId: "tenant-1", ownerId: `user-${i}`, taskId: `task-${i}`, outcome });
  const found = await repository.current({ tenantId: "tenant-1", taskId: "task-old" });
  assert.ok(found, "a genuinely existing workspace-state row must still be found by its own task, regardless of how many other tasks in the tenant are busier");
  assert.equal(found.task_id, "task-old");
});
