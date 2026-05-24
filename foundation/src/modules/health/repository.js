class HealthRepository {
  constructor(db) {
    this.db = db;
  }

  async listIntakes(tenantId, { countryId } = {}) {
    const params = [tenantId];
    let where = "where pi.tenant_id = $1";
    if (countryId) {
      params.push(countryId);
      where += ` and pi.country_id = $${params.length}`;
    }
    const result = await this.db.query(
      `select pi.*, c.name as country_name
       from patient_intakes pi
       join countries c on c.id = pi.country_id
       ${where}
       order by pi.created_at desc`,
      params
    );
    return result.rows || [];
  }

  async getCountry(tenantId, countryId) {
    const result = await this.db.query(
      `select c.*, pm.risk_level, pm.heat_index_c, pm.queue_status, pm.facilities, pm.patients
       from countries c
       left join lateral (
         select *
         from program_metrics pm
         where pm.country_id = c.id
         order by pm.measured_at desc
         limit 1
       ) pm on true
       where c.tenant_id = $1 and c.id = $2
       limit 1`,
      [tenantId, countryId]
    );
    return (result.rows || [])[0] || null;
  }

  async createIntake({ tenantId, countryId, createdBy, patientRef, needSummary, riskLevel }) {
    const result = await this.db.query(
      `insert into patient_intakes (tenant_id, country_id, created_by, patient_ref, need_summary, risk_level, queue_status)
       values ($1, $2, $3, $4, $5, $6, 'Intake')
       returning *`,
      [tenantId, countryId, createdBy, patientRef, needSummary, riskLevel]
    );
    return (result.rows || [])[0] || null;
  }

  async updateIntake(intakeId, patch) {
    const result = await this.db.query(
      `update patient_intakes
       set queue_status = coalesce($2, queue_status),
           representative_status = coalesce($3, representative_status),
           updated_at = now()
       where id = $1
       returning *`,
      [intakeId, patch.queueStatus || null, patch.representativeStatus || null]
    );
    return (result.rows || [])[0] || null;
  }

  async createAiRun({ tenantId, userId, runType, provider, model, prompt, responseText, responseMetadata }) {
    const result = await this.db.query(
      `insert into ai_runs (tenant_id, user_id, run_type, provider, model, prompt, response_text, response_metadata)
       values ($1, $2, $3, $4, $5, $6, $7, $8)
       returning *`,
      [
        tenantId,
        userId,
        runType,
        provider,
        model || null,
        JSON.stringify(prompt || {}),
        responseText,
        JSON.stringify(responseMetadata || {})
      ]
    );
    return (result.rows || [])[0] || null;
  }
}

module.exports = { HealthRepository };
