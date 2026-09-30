"use strict";
const assert = require("node:assert/strict");
const test = require("node:test");
const { AutonomyControlRepository, WORKSPACE_ID, RECORD_TYPE } = require("../../nexus/security/autonomy-control-repository.js");

function fixture(existing = null) {
  const calls = { create: [], update: [], list: [] };
  const records = {
    list: async input => { calls.list.push(input); return existing ? [existing] : []; },
    create: async input => { calls.create.push(input); return { record_id: "rec_1", data: input.data }; },
    update: async input => { calls.update.push(input); return { record_id: existing?.record_id, data: input.data }; }
  };
  return { repo: new AutonomyControlRepository(records), calls };
}

test("constructor requires a real record repository", () => {
  assert.throws(() => new AutonomyControlRepository({}), /durable record repository is required/);
});

test("isPaused is false with no prior state", async () => {
  const { repo } = fixture(null);
  assert.equal(await repo.isPaused({ tenantId: "t1" }), false);
});

test("status returns the default unpaused shape with no prior state", async () => {
  const { repo } = fixture(null);
  assert.deepEqual(await repo.status({ tenantId: "t1" }), { paused: false });
});

test("setPaused creates a new record on first use, scoped to the autonomy-control workspace", async () => {
  const { repo, calls } = fixture(null);
  const result = await repo.setPaused({ tenantId: "t1", actorId: "admin-1", paused: true, reason: "bad trigger" });
  assert.equal(calls.create.length, 1);
  assert.equal(calls.update.length, 0);
  assert.equal(calls.create[0].workspaceId, WORKSPACE_ID);
  assert.equal(calls.create[0].recordType, RECORD_TYPE);
  assert.equal(calls.create[0].classification, "standard");
  assert.equal(calls.create[0].data.paused, true);
  assert.equal(calls.create[0].data.reason, "bad trigger");
  assert.equal(calls.create[0].data.changedBy, "admin-1");
  assert.equal(result.data.paused, true);
});

test("setPaused updates the existing record (with optimistic concurrency) once one exists", async () => {
  const existing = { record_id: "rec_1", version: 3, data: { paused: true } };
  const { repo, calls } = fixture(existing);
  await repo.setPaused({ tenantId: "t1", actorId: "admin-1", paused: false, reason: "resolved" });
  assert.equal(calls.update.length, 1);
  assert.equal(calls.create.length, 0);
  assert.equal(calls.update[0].recordId, "rec_1");
  assert.equal(calls.update[0].expectedVersion, 3);
  assert.equal(calls.update[0].data.paused, false);
});

test("isPaused reflects the most recently stored state", async () => {
  const { repo } = fixture({ record_id: "rec_1", version: 1, data: { paused: true, reason: "manual hold" } });
  assert.equal(await repo.isPaused({ tenantId: "t1" }), true);
  assert.deepEqual(await repo.status({ tenantId: "t1" }), { paused: true, reason: "manual hold" });
});

// Found live (fresh-module audit): the old read-then-branch (current() then either update() or create())
// had no lock on the create path -- two concurrent first-time setPaused() calls for the same tenant could
// both see no existing row and both create one. When the real repository's upsertSingleton is available,
// setPaused must use it (a real advisory-lock-guarded read-check-write) instead of the unlocked fallback.
test("setPaused uses the repository's upsertSingleton (a real locked read-check-write) when available, instead of the unlocked read-then-branch", async () => {
  const calls = { upsertSingleton: [], create: [], update: [], list: [] };
  const records = {
    list: async input => { calls.list.push(input); return []; },
    create: async input => { calls.create.push(input); return { record_id: "rec_x", data: input.data }; },
    update: async input => { calls.update.push(input); return { record_id: "rec_x", data: input.data }; },
    upsertSingleton: async input => { calls.upsertSingleton.push(input); return { record_id: "rec_locked", data: input.data }; }
  };
  const repo = new AutonomyControlRepository(records);
  const result = await repo.setPaused({ tenantId: "t1", actorId: "admin-1", paused: true, reason: "bad trigger" });
  assert.equal(calls.upsertSingleton.length, 1);
  assert.equal(calls.create.length, 0, "must not also call the unlocked create() when upsertSingleton is available");
  assert.equal(calls.update.length, 0);
  assert.equal(calls.upsertSingleton[0].workspaceId, WORKSPACE_ID);
  assert.equal(calls.upsertSingleton[0].recordType, RECORD_TYPE);
  assert.equal(calls.upsertSingleton[0].data.paused, true);
  assert.equal(result.record_id, "rec_locked");
});
