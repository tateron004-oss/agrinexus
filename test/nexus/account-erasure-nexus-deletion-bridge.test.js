"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { createServerRuntimeAdapter } = require("../../nexus/compat/server-runtime-adapter.js");

// Found live: /api/account/erase (the route the real "Delete my account" UI
// calls, public/app.js) only ever erased the legacy db.profile blob. A real
// user's authoritative Postgres/nexus data (companion memory, tasks,
// conversations, health/farm records, reminders/schedules, registered push
// devices -- see data-lifecycle-repository.js's executeDeletion) was only
// reachable via the separate /api/nexus/runtime/privacy/deletions API, which
// the real client never calls, so it silently survived while the response
// still said "erased". requestDeletionRequest is the in-process bridge
// server.js now uses to request real erasure as part of the same action --
// mirrors behaviorTurnRequest/behaviorConfirmRequest's established pattern.
function fixture({ dataLifecycle, jobs } = {}) {
  const active = {
    ready: Promise.resolve(),
    dataLifecycle: dataLifecycle || { requestDeletion: async () => ({ request_id: "del_1", state: "queued" }) },
    jobs: jobs === undefined ? { enqueue: async () => ({}) } : jobs
  };
  const adapter = createServerRuntimeAdapter({ env: {}, resolveUser: async () => null, readJson: async () => ({}), createRuntimeFn: () => active });
  return { adapter };
}

test("requestDeletionRequest asks the real data-lifecycle repository to erase this user's own data and queues its execution", async () => {
  const calls = { requestDeletion: null, enqueue: null };
  const { adapter } = fixture({
    dataLifecycle: { requestDeletion: async args => { calls.requestDeletion = args; return { request_id: "del_42", state: "queued" }; } },
    jobs: { enqueue: async args => { calls.enqueue = args; return {}; } }
  });
  const user = { id: "user-1", tenantId: "tenant-1", role: "standard-user", permissions: ["privacy:delete"] };
  const result = await adapter.requestDeletionRequest({ user });
  assert.equal(result.request_id, "del_42");
  assert.deepEqual(calls.requestDeletion, { tenantId: "tenant-1", subjectId: "user-1", requestedBy: "user-1" });
  assert.equal(calls.enqueue.jobType, "deletion.execute");
  assert.equal(calls.enqueue.idempotencyKey, "deletion-execute:del_42");
  assert.deepEqual(calls.enqueue.payload, { requestId: "del_42" });
});

test("requestDeletionRequest fails closed when the caller lacks privacy:delete permission, instead of silently no-op'ing", async () => {
  const { adapter } = fixture();
  const user = { id: "user-1", tenantId: "tenant-1", role: "standard-user", permissions: [] };
  await assert.rejects(
    () => adapter.requestDeletionRequest({ user }),
    error => { assert.match(error.message, /privacy:delete/); return true; }
  );
});
