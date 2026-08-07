const assert = require("node:assert/strict");
const test = require("node:test");
const fs = require("node:fs");
const path = require("node:path");
const { createTask, transitionTask } = require("../../nexus/tasks/state-machine.js");
const { TaskRepository, ConcurrencyError } = require("../../nexus/data/task-repository.js");
const { JobRepository } = require("../../nexus/workers/job-repository.js");
const { MemoryRepository } = require("../../nexus/memory/repository.js");

function fakeDb(results = []) {
  const calls = [];
  const db = {
    calls,
    async query(sql, params) { calls.push({ sql, params }); return results.shift() || { rows: [], rowCount: 1 }; },
    async transaction(work) { calls.push({ transaction: "begin" }); return work(db); }
  };
  return db;
}

test("durability migration declares tasks, scoped memory, consent, audit, jobs and delivery ledgers", () => {
  const sql = fs.readFileSync(path.join(__dirname, "../../foundation/migrations/003_nexus_unified_runtime.sql"), "utf8");
  for (const table of ["nexus_tasks", "nexus_consents", "nexus_memory_items", "nexus_audit_events", "nexus_worker_jobs", "nexus_outbox", "nexus_inbox"]) {
    assert.match(sql, new RegExp(`create table if not exists ${table}`));
  }
  assert.match(sql, /unique \(tenant_id, idempotency_key\)/);
});

test("task repository restores durable task documents and rejects stale writers", async () => {
  const now = () => new Date("2026-08-07T20:00:00Z");
  let task = createTask({ tenantId: "tenant-1", ownerId: "user-1", conversationId: "cnv_1", correlationId: "trace-1", goal: "Find maize guidance" }, now);
  const db = fakeDb([{ rows: [], rowCount: 1 }, { rows: [{ task_document: task }] }, { rows: [], rowCount: 0 }]);
  const repository = new TaskRepository(db);
  await repository.create(task);
  assert.deepEqual(await repository.get({ tenantId: "tenant-1", taskId: task.taskId }), task);
  task = transitionTask(task, "planned", { actorId: "brain", reason: "plan ready" }, now);
  await assert.rejects(repository.save(task, 1), ConcurrencyError);
  assert.match(db.calls[1].sql, /tenant_id = \$1 and task_id = \$2/);
});

test("workers use transactional skip-locked leases and idempotent enqueue", async () => {
  const db = fakeDb([{ rows: [{ job_id: "job_1" }] }, { rows: [{ job_id: "job_1", state: "leased" }] }]);
  const repository = new JobRepository(db);
  await repository.enqueue({ jobId: "job_1", tenantId: "tenant-1", jobType: "tool", idempotencyKey: "task-1:step-1", payload: {} });
  const job = await repository.claim({ workerId: "worker-1" });
  assert.equal(job.state, "leased");
  assert.match(db.calls[0].sql, /on conflict \(tenant_id, idempotency_key\)/);
  assert.match(db.calls[2].sql, /for update skip locked/);
});

test("memory requires provenance and always recalls within tenant, principal, class and purpose", async () => {
  const db = fakeDb([{ rows: [] }, { rows: [{ memory_id: "mem_1" }] }]);
  const repository = new MemoryRepository(db);
  await assert.rejects(repository.remember({ memoryClass: "semantic", purpose: "assist" }), /provenance/);
  await repository.remember({ memoryId: "mem_1", tenantId: "tenant-1", principalId: "user-1", memoryClass: "semantic", purpose: "assist", content: { language: "sw" }, provenance: { source: "user" } });
  await repository.recall({ tenantId: "tenant-1", principalId: "user-1", memoryClass: "semantic", purpose: "assist" });
  assert.match(db.calls[1].sql, /tenant_id=\$1 and principal_id=\$2 and memory_class=\$3 and purpose=\$4/);
});
