class CoreRepository {
  constructor(db) {
    this.db = db;
  }

  async listCountries(tenantId) {
    const result = await this.db.query(
      `select c.*, pm.patients, pm.facilities, pm.risk_level, pm.heat_index_c, pm.queue_status,
              pm.outcome_rate, pm.adoption_rate, pm.safety_override_rate, pm.data_quality_rate
       from countries c
       left join lateral (
         select *
         from program_metrics pm
         where pm.country_id = c.id
         order by pm.measured_at desc
         limit 1
       ) pm on true
       where c.tenant_id = $1
       order by c.name`,
      [tenantId]
    );
    return result.rows || [];
  }

  async getCountry(tenantId, countryId) {
    const result = await this.db.query(
      `select c.*, pm.patients, pm.facilities, pm.risk_level, pm.heat_index_c, pm.queue_status,
              pm.outcome_rate, pm.adoption_rate, pm.safety_override_rate, pm.data_quality_rate
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

  async listFacilities(tenantId, { countryId } = {}) {
    const params = [tenantId];
    let where = "where f.tenant_id = $1";
    if (countryId) {
      params.push(countryId);
      where += ` and f.country_id = $${params.length}`;
    }
    const result = await this.db.query(
      `select f.*
       from facilities f
       ${where}
       order by f.name`,
      params
    );
    return result.rows || [];
  }
}

module.exports = { CoreRepository };
