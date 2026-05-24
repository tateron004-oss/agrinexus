class AdminRepository {
  constructor(db) {
    this.db = db;
  }

  async listAuditEvents(tenantId, { action, entityType, limit = 50 } = {}) {
    const params = [tenantId];
    let where = "where tenant_id = $1";
    if (action) {
      params.push(action);
      where += ` and action = $${params.length}`;
    }
    if (entityType) {
      params.push(entityType);
      where += ` and entity_type = $${params.length}`;
    }
    params.push(limit);
    const result = await this.db.query(
      `select *
       from audit_events
       ${where}
       order by created_at desc
       limit $${params.length}`,
      params
    );
    return result.rows || [];
  }

  async listAiRuns(tenantId, { runType, provider, limit = 50 } = {}) {
    const params = [tenantId];
    let where = "where tenant_id = $1";
    if (runType) {
      params.push(runType);
      where += ` and run_type = $${params.length}`;
    }
    if (provider) {
      params.push(provider);
      where += ` and provider = $${params.length}`;
    }
    params.push(limit);
    const result = await this.db.query(
      `select *
       from ai_runs
       ${where}
       order by created_at desc
       limit $${params.length}`,
      params
    );
    return result.rows || [];
  }
}

module.exports = { AdminRepository };
