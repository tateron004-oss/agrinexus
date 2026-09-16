const { createId } = require("../contracts/identifiers.js");

class AuditRepository {
  constructor(db, { releaseSha = process.env.RENDER_GIT_COMMIT || process.env.GIT_SHA || null } = {}) {
    if (!db?.query) throw new Error("A database runtime is required."); this.db = db; this.releaseSha = releaseSha;
  }
  async record({ tenantId, actorId, correlationId, taskId = null, eventType, outcome, metadata = {} }) {
    const eventId = createId("event");
    const result = await this.db.query(`insert into nexus_audit_events
      (event_id,tenant_id,actor_id,correlation_id,task_id,event_type,outcome,release_sha,metadata)
      values ($1,$2,$3,$4,$5,$6,$7,$8,$9) returning *`,
    [eventId, tenantId, actorId, correlationId, taskId, eventType, outcome, this.releaseSha, metadata]);
    return (result.rows || result)[0];
  }

  // Backs the audit review surface: everything Kyro (or anyone else) did,
  // for a human to actually look at. A list view is enough to start --
  // no aggregation, just the real trail already being written by every
  // engine.execute()/transition()/create() call.
  async list({ tenantId, actorId, taskId, eventType, limit = 100 }) {
    const values = [tenantId]; let where = "tenant_id=$1";
    for (const [column, value] of [["actor_id", actorId], ["task_id", taskId], ["event_type", eventType]]) {
      if (value) { values.push(value); where += ` and ${column}=$${values.length}`; }
    }
    values.push(Math.min(Math.max(limit, 1), 200));
    const result = await this.db.query(`select * from nexus_audit_events where ${where} order by occurred_at desc limit $${values.length}`, values);
    return result.rows || result;
  }
}

module.exports = Object.freeze({ AuditRepository });
