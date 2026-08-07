const { assertId } = require("../contracts/identifiers.js");

class ConcurrencyError extends Error {
  constructor(taskId) {
    super(`Task ${taskId} was changed by another operation.`);
    this.name = "ConcurrencyError";
  }
}

class TaskRepository {
  constructor(db) {
    if (!db || typeof db.query !== "function") throw new Error("A database runtime is required.");
    this.db = db;
  }

  async create(task) {
    assertId("task", task.taskId);
    await this.db.query(`insert into nexus_tasks
      (task_id, tenant_id, owner_id, conversation_id, correlation_id, goal, application,
       risk_tier, state, version, task_document, created_at, updated_at)
      values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11::jsonb,$12,$13)`, [
      task.taskId, task.tenantId, task.ownerId, task.conversationId, task.correlationId,
      task.goal, task.application, task.riskTier, task.state, task.version,
      JSON.stringify(task), task.createdAt, task.updatedAt
    ]);
    return task;
  }

  async get({ tenantId, taskId }) {
    const result = await this.db.query(
      "select task_document from nexus_tasks where tenant_id = $1 and task_id = $2",
      [tenantId, taskId]
    );
    const row = (result.rows || result)[0];
    return row ? row.task_document : null;
  }

  async save(task, expectedVersion) {
    const result = await this.db.query(`update nexus_tasks set
      state=$1, version=$2, task_document=$3::jsonb, updated_at=$4
      where tenant_id=$5 and task_id=$6 and version=$7 returning task_id`, [
      task.state, task.version, JSON.stringify(task), task.updatedAt,
      task.tenantId, task.taskId, expectedVersion
    ]);
    if ((result.rowCount ?? (result.rows || []).length) !== 1) throw new ConcurrencyError(task.taskId);
    return task;
  }
}

module.exports = Object.freeze({ TaskRepository, ConcurrencyError });
