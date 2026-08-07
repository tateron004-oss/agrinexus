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
}

module.exports = Object.freeze({ AuditRepository });
