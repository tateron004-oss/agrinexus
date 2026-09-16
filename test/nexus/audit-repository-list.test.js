"use strict";
const assert = require("node:assert/strict");
const test = require("node:test");
const { AuditRepository } = require("../../nexus/audit/repository.js");

function fakeDb(results = []) {
  const calls = [];
  const db = { calls, async query(sql, params) { calls.push({ sql, params }); return results.shift() || { rows: [] }; } };
  return db;
}

test("list scopes to tenant and orders by occurred_at desc with no optional filters", async () => {
  const db = fakeDb([{ rows: [{ event_id: "evt_1" }] }]);
  const repo = new AuditRepository(db);
  const events = await repo.list({ tenantId: "t1" });
  assert.equal(events.length, 1);
  assert.match(db.calls[0].sql, /where tenant_id=\$1/);
  assert.match(db.calls[0].sql, /order by occurred_at desc/);
  assert.deepEqual(db.calls[0].params, ["t1", 100]);
});

test("list applies actorId, taskId, and eventType filters only when supplied", async () => {
  const db = fakeDb([{ rows: [] }]);
  const repo = new AuditRepository(db);
  await repo.list({ tenantId: "t1", actorId: "u1", taskId: "tsk_1", eventType: "task.created", limit: 25 });
  assert.match(db.calls[0].sql, /and actor_id=\$2/);
  assert.match(db.calls[0].sql, /and task_id=\$3/);
  assert.match(db.calls[0].sql, /and event_type=\$4/);
  assert.deepEqual(db.calls[0].params, ["t1", "u1", "tsk_1", "task.created", 25]);
});

test("list clamps limit to the 1-200 range", async () => {
  const db = fakeDb([{ rows: [] }, { rows: [] }]);
  const repo = new AuditRepository(db);
  await repo.list({ tenantId: "t1", limit: 0 });
  assert.equal(db.calls[0].params.at(-1), 1);
  await repo.list({ tenantId: "t1", limit: 10000 });
  assert.equal(db.calls[1].params.at(-1), 200);
});
