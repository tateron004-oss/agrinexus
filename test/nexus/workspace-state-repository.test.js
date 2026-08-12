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
        data: input.data, provenance: input.provenance };
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
