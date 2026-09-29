"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { ExecutionRepository } = require("../../nexus/data/execution-repository.js");

// Found live (task state-machine/confirmation-flow audit): `SELECT ... FOR
// UPDATE` on a row that doesn't exist yet takes no lock -- there is nothing
// to lock. Two concurrent start() calls for the SAME idempotency key (a
// straggler agent.advance-task job racing agent.sweep-advanceable-tasks'
// re-enqueue, which uses a freshly-randomized, never-deduped idempotency key
// per retry) could both see "no existing row" and both attempt the INSERT.
// The real unique (tenant_id, idempotency_key) constraint
// (foundation/migrations/003_nexus_unified_runtime.sql:131) then made the
// LOSING insert throw a raw Postgres unique-violation error, propagated
// unchanged all the way to executeTask()'s catch -- which, having no
// NexusRuntimeError/.attemptedExecution signal to work with, treated it as
// "nothing was ever attempted" and permanently blocked the task, even though
// the WINNING call may have succeeded or still be running fine.
//
// A fake db whose nexus_tool_executions table is a real, synchronous
// in-memory array evaluated against the real INSERT ... ON CONFLICT clause
// the fixed repository issues -- not a canned response queue -- so a
// genuine race (both SELECTs resolving to "no row" before either INSERT
// runs) is reproduced the same way real concurrent Postgres transactions
// would race on this exact unique constraint.
function racingExecutionDb() {
  const rows = [];
  const db = {
    rows,
    async transaction(fn) {
      const trx = Object.create(db);
      trx.query = (sql, params) => db.query(sql, params);
      return fn(trx);
    },
    async query(sql, params) {
      if (/for update/.test(sql)) {
        const [tenantId, idempotencyKey] = params;
        return { rows: rows.filter(row => row.tenant_id === tenantId && row.idempotency_key === idempotencyKey) };
      }
      if (/insert into nexus_tool_executions/.test(sql)) {
        const [executionId, tenantId, taskId, stepId, toolId, actorId, idempotencyKey, request] = params;
        if (rows.some(row => row.tenant_id === tenantId && row.idempotency_key === idempotencyKey)) return { rows: [] };
        const row = { execution_id: executionId, tenant_id: tenantId, task_id: taskId, step_id: stepId,
          tool_id: toolId, actor_id: actorId, idempotency_key: idempotencyKey, state: "running", request };
        rows.push(row);
        return { rows: [row] };
      }
      if (/^select \* from nexus_tool_executions where tenant_id=\$1 and idempotency_key=\$2$/.test(sql)) {
        const [tenantId, idempotencyKey] = params;
        return { rows: rows.filter(row => row.tenant_id === tenantId && row.idempotency_key === idempotencyKey) };
      }
      if (/update nexus_task_steps/.test(sql)) return { rows: [] };
      throw new Error(`unexpected SQL: ${sql.slice(0, 120)}`);
    }
  };
  return db;
}

test("two concurrent start() calls for the same idempotency key never both throw or both insert -- one wins, the other honestly reports duplicate:true", async () => {
  const repo = new ExecutionRepository(racingExecutionDb());
  const args = { tenantId: "t1", taskId: "task1", stepId: "step1", toolId: "documents.save", actorId: "u1", idempotencyKey: "key1", request: {} };
  const [a, b] = await Promise.all([repo.start(args), repo.start(args)]);
  const outcomes = [a, b];
  assert.equal(outcomes.filter(result => result.duplicate === false).length, 1, "exactly one concurrent call must win and actually start the execution");
  assert.equal(outcomes.filter(result => result.duplicate === true).length, 1, "the losing call must be reported as a real duplicate, not throw");
  assert.equal(a.execution.execution_id, b.execution.execution_id, "both calls must resolve to the SAME execution record");
});

test("two genuinely different idempotency keys both start their own execution, unaffected by the fix", async () => {
  const repo = new ExecutionRepository(racingExecutionDb());
  const a = await repo.start({ tenantId: "t1", taskId: "task1", stepId: "step1", toolId: "documents.save", actorId: "u1", idempotencyKey: "key1", request: {} });
  const b = await repo.start({ tenantId: "t1", taskId: "task1", stepId: "step2", toolId: "documents.save", actorId: "u1", idempotencyKey: "key2", request: {} });
  assert.equal(a.duplicate, false);
  assert.equal(b.duplicate, false);
  assert.notEqual(a.execution.execution_id, b.execution.execution_id);
});
