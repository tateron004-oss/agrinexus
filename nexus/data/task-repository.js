const { assertId } = require("../contracts/identifiers.js");

class ConcurrencyError extends Error {
  constructor(taskId) { super(`Task ${taskId} was changed by another operation.`); this.name = "ConcurrencyError"; }
}

class TaskRepository {
  constructor(db) { if (!db?.query) throw new Error("A database runtime is required."); this.db = db; }

  async create(task, steps = []) {
    assertId("task", task.taskId);
    return this.db.transaction(async trx => {
      await trx.query(`insert into nexus_tasks
        (task_id, tenant_id, owner_id, conversation_id, correlation_id, goal, application, risk_tier,
         state, priority, version, task_document, due_at, recurrence, created_at, updated_at)
        values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12::jsonb,$13,$14,$15,$16)`, [
        task.taskId, task.tenantId, task.ownerId, task.conversationId, task.correlationId, task.goal,
        task.application, task.riskTier, task.state, task.priority, task.version, JSON.stringify(task),
        task.dueAt, task.recurrence, task.createdAt, task.updatedAt
      ]);
      for (let index = 0; index < steps.length; index += 1) {
        const step = steps[index]; assertId("step", step.stepId);
        await trx.query(`insert into nexus_task_steps
          (step_id, tenant_id, task_id, sequence, title, tool_id, depends_on, state, input,
           confirmation_state, idempotency_key) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`, [
          step.stepId, task.tenantId, task.taskId, index + 1, step.title, step.toolId || null,
          step.dependsOn || [], step.state || "pending", step.input || {},
          step.confirmationRequired ? "required" : "not_required", step.idempotencyKey
        ]);
      }
      return { ...task, steps };
    });
  }

  async get({ tenantId, taskId, includeSteps = true }) {
    const result = await this.db.query("select task_document from nexus_tasks where tenant_id=$1 and task_id=$2", [tenantId, taskId]);
    const row = (result.rows || result)[0];
    if (!row) return null;
    if (!includeSteps) return row.task_document;
    const steps = await this.db.query("select * from nexus_task_steps where tenant_id=$1 and task_id=$2 order by sequence", [tenantId, taskId]);
    return { ...row.task_document, steps: steps.rows || steps };
  }

  async list({ tenantId, ownerId, state, limit = 50 }) {
    const params = [tenantId]; let where = "tenant_id=$1";
    if (ownerId) { params.push(ownerId); where += ` and owner_id=$${params.length}`; }
    if (state) { params.push(state); where += ` and state=$${params.length}`; }
    params.push(Math.min(Math.max(limit, 1), 200));
    const result = await this.db.query(`select task_document from nexus_tasks where ${where} order by updated_at desc limit $${params.length}`, params);
    return (result.rows || result).map(row => row.task_document);
  }

  async save(task, expectedVersion) {
    const result = await this.db.query(`update nexus_tasks set state=$1, version=$2, task_document=$3::jsonb,
      outcome=$4, outcome_verified_at=case when $1='completed' then now() else outcome_verified_at end,
      updated_at=$5 where tenant_id=$6 and task_id=$7 and version=$8 returning task_id`, [
      task.state, task.version, JSON.stringify(task), task.outcome, task.updatedAt,
      task.tenantId, task.taskId, expectedVersion
    ]);
    if ((result.rowCount ?? (result.rows || []).length) !== 1) throw new ConcurrencyError(task.taskId);
    return task;
  }

  async getStep({ tenantId, taskId, stepId }) {
    const result = await this.db.query("select * from nexus_task_steps where tenant_id=$1 and task_id=$2 and step_id=$3", [tenantId, taskId, stepId]);
    return (result.rows || result)[0] || null;
  }

  async approveStep({ tenantId, taskId, stepId, approved }) {
    const result = await this.db.query(`update nexus_task_steps set confirmation_state=$4, updated_at=now()
      where tenant_id=$1 and task_id=$2 and step_id=$3 returning *`, [tenantId, taskId, stepId, approved ? "approved" : "rejected"]);
    return (result.rows || result)[0] || null;
  }
}

module.exports = Object.freeze({ TaskRepository, ConcurrencyError });
