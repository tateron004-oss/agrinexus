class AiRepository {
  constructor(db) {
    this.db = db;
  }

  async createRun({ tenantId, userId, runType, provider, model, prompt, responseText, responseMetadata = {} }) {
    const result = await this.db.query(
      `insert into ai_runs (tenant_id, user_id, run_type, provider, model, prompt, response_text, response_metadata)
       values ($1, $2, $3, $4, $5, $6, $7, $8)
       returning *`,
      [tenantId, userId, runType, provider, model, prompt, responseText, responseMetadata]
    );
    return (result.rows || [])[0] || null;
  }

  async listRuns(tenantId, { runType, limit = 25 } = {}) {
    const params = [tenantId];
    let where = "where tenant_id = $1";
    if (runType) {
      params.push(runType);
      where += ` and run_type = $${params.length}`;
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

module.exports = { AiRepository };
