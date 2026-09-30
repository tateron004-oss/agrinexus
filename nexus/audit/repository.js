const { createId } = require("../contracts/identifiers.js");
const { redact } = require("../observability/logger.js");

class AuditRepository {
  constructor(db, { releaseSha = process.env.RENDER_GIT_COMMIT || process.env.GIT_SHA || null } = {}) {
    if (!db?.query) throw new Error("A database runtime is required."); this.db = db; this.releaseSha = releaseSha;
  }
  // Found live (observability audit): this had no redact() call, unlike its sibling ObservabilityRepository
  // (nexus/observability/event-repository.js), which redacts metadata at the same trust boundary before
  // every insert. Every current caller's metadata shape happens to be clean today (minimal {verified,
  // method, reason}-style objects, ids, counts, scrubbed provider-failure fields), so there is no live leak
  // -- but the guarantee lived only in individual call-site discipline, not at the repository itself, the
  // exact shape of gap this session has repeatedly found and fixed elsewhere. list() returns metadata
  // verbatim to any tenant member with observability:read or admin, so this is the one place to close it.
  async record({ tenantId, actorId, correlationId, taskId = null, eventType, outcome, metadata = {} }) {
    const eventId = createId("event");
    const result = await this.db.query(`insert into nexus_audit_events
      (event_id,tenant_id,actor_id,correlation_id,task_id,event_type,outcome,release_sha,metadata)
      values ($1,$2,$3,$4,$5,$6,$7,$8,$9) returning *`,
    [eventId, tenantId, actorId, correlationId, taskId, eventType, outcome, this.releaseSha, redact(metadata)]);
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
