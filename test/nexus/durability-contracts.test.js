const assert = require("node:assert/strict");
const test = require("node:test");
const fs = require("node:fs");
const path = require("node:path");
const { vectorLiteral, MemoryRepository } = require("../../nexus/memory/repository.js");
const { JobRepository } = require("../../nexus/workers/job-repository.js");

function fakeDb(results = []) {
  const calls = [];
  const db = { calls, async query(sql, params) { calls.push({ sql, params }); return results.shift() || { rows: [], rowCount: 1 }; },
    async transaction(work) { calls.push({ transaction: "begin" }); return work(db); } };
  return db;
}

test("one migration owns all durable control-plane records and pgvector", () => {
  const sql = fs.readFileSync(path.join(__dirname, "../../foundation/migrations/003_nexus_unified_runtime.sql"), "utf8");
  for (const table of ["nexus_tasks", "nexus_task_steps", "nexus_tool_definitions", "nexus_tool_executions",
    "nexus_consents", "nexus_memory_items", "nexus_audit_events", "nexus_worker_jobs", "nexus_documents",
    "nexus_webhook_events", "nexus_notifications", "nexus_sync_operations", "nexus_outbox", "nexus_inbox"]) {
    assert.match(sql, new RegExp(`create table if not exists ${table}`));
  }
  assert.match(sql, /create extension if not exists vector/); assert.match(sql, /embedding vector\(1536\)/);
  assert.equal(fs.existsSync(path.join(__dirname, "../../foundation/migrations/003_authoritative_platform.sql")), false);
});
test("memory requires provenance, validates embeddings, and enforces principal scope", async () => {
  assert.equal(vectorLiteral(new Array(1536).fill(0)).length, 3073);
  assert.throws(() => vectorLiteral([0]), /1536/);
  const db = fakeDb([{ rows: [{ memory_id: "mem_1" }] }]); const memory = new MemoryRepository(db);
  await assert.rejects(memory.remember({ memoryClass: "semantic", purpose: "assist" }), /provenance/);
  await memory.recall({ tenantId: "tenant", principalId: "user", memoryClass: "semantic", purpose: "assist",
    embedding: new Array(1536).fill(0), roles: [] });
  assert.match(db.calls[0].sql, /tenant_id=\$1 and principal_id=\$2/);
});

test("workers claim transactionally with skip-locked leases and idempotent enqueue", async () => {
  const db = fakeDb([{ rows: [{ job_id: "job_1" }] }, { rows: [{ job_id: "job_1", attempts: 1, state: "leased" }] }, { rows: [] }]);
  const jobs = new JobRepository(db);
  await jobs.enqueue({ tenantId: "tenant", jobType: "tool", idempotencyKey: "task:step", payload: {} });
  const claimed = await jobs.claim({ workerId: "worker" }); assert.equal(claimed.state, "leased");
  assert.match(db.calls[0].sql, /on conflict \(tenant_id,idempotency_key\)/);
  assert.match(db.calls[2].sql, /for update skip locked/);
});
