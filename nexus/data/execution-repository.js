const { createId } = require("../contracts/identifiers.js");

class ExecutionRepository {
  constructor(db) { if (!db?.query || !db?.transaction) throw new Error("A transactional database runtime is required."); this.db = db; }
  async get({ tenantId, idempotencyKey }) {
    const result = await this.db.query("select * from nexus_tool_executions where tenant_id=$1 and idempotency_key=$2", [tenantId, idempotencyKey]);
    return (result.rows || result)[0] || null;
  }
  async start({ tenantId, taskId, stepId, toolId, actorId, idempotencyKey, request }) {
    return this.db.transaction(async trx => {
      const existing = await trx.query("select * from nexus_tool_executions where tenant_id=$1 and idempotency_key=$2 for update", [tenantId, idempotencyKey]);
      if ((existing.rows || existing)[0]) return { execution: (existing.rows || existing)[0], duplicate: true };
      const executionId = createId("toolCall");
      // Found live (task state-machine/confirmation-flow audit): SELECT ... FOR
      // UPDATE above takes no lock when zero rows match (there is nothing yet to
      // lock), so two concurrent start() calls for the same idempotency key (a
      // straggler agent.advance-task job racing agent.sweep-advanceable-tasks'
      // re-enqueue) could both reach here and both attempt this insert. The real
      // unique (tenant_id, idempotency_key) constraint then made the LOSING
      // insert throw a raw Postgres unique-violation error, which propagated
      // unchanged into executeTask()'s catch and permanently blocked the task --
      // even though the winning call may have succeeded or still be running
      // fine. ON CONFLICT DO NOTHING plus a re-select turns the losing call into
      // the same honest {duplicate:true} outcome the pre-existing-row branch
      // above already returns, instead of letting it throw.
      const inserted = await trx.query(`insert into nexus_tool_executions
        (execution_id,tenant_id,task_id,step_id,tool_id,actor_id,idempotency_key,state,request)
        values ($1,$2,$3,$4,$5,$6,$7,'running',$8)
        on conflict (tenant_id, idempotency_key) do nothing returning *`,
      [executionId, tenantId, taskId, stepId, toolId, actorId, idempotencyKey, request]);
      const insertedRow = (inserted.rows || inserted)[0];
      if (!insertedRow) {
        const winner = await trx.query("select * from nexus_tool_executions where tenant_id=$1 and idempotency_key=$2", [tenantId, idempotencyKey]);
        return { execution: (winner.rows || winner)[0], duplicate: true };
      }
      await trx.query(`update nexus_task_steps set state='running',attempt_count=attempt_count+1,
        started_at=coalesce(started_at,now()),updated_at=now() where tenant_id=$1 and task_id=$2 and step_id=$3`,
      [tenantId, taskId, stepId]);
      return { execution: insertedRow, duplicate: false };
    });
  }
  async finish({ tenantId, executionId, stepId, successful, response = null, error = null, receipt, verified }) {
    return this.db.transaction(async trx => {
      const state = successful ? "completed" : "failed";
      const result = await trx.query(`update nexus_tool_executions set state=$3,response=$4,error=$5,receipt=$6,
        verified_at=case when $7 then now() else null end,updated_at=now()
        where tenant_id=$1 and execution_id=$2 returning *`,
      [tenantId, executionId, state, response, error, receipt, verified]);
      await trx.query(`update nexus_task_steps set state=$3,output=$4,error=$5,
        completed_at=case when $3='completed' then now() else completed_at end,updated_at=now()
        where tenant_id=$1 and step_id=$2`, [tenantId, stepId, state, response, error]);
      return (result.rows || result)[0] || null;
    });
  }
}

module.exports = Object.freeze({ ExecutionRepository });
