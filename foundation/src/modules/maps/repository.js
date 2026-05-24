class MapsRepository {
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

  async listFacilities(tenantId, { countryId } = {}) {
    const params = [tenantId];
    let where = "where tenant_id = $1";
    if (countryId) {
      params.push(countryId);
      where += ` and country_id = $${params.length}`;
    }
    const result = await this.db.query(
      `select *
       from facilities
       ${where}
       order by name`,
      params
    );
    return result.rows || [];
  }

  async listRoutes(tenantId, { countryId } = {}) {
    const params = [tenantId];
    let where = "where r.tenant_id = $1";
    if (countryId) {
      params.push(countryId);
      where += ` and r.country_id = $${params.length}`;
    }
    const result = await this.db.query(
      `select r.*, c.name as country_name
       from routes r
       left join countries c on c.id = r.country_id
       ${where}
       order by r.name`,
      params
    );
    return result.rows || [];
  }

  async listCheckpoints(routeIds = []) {
    if (!routeIds.length) return [];
    const result = await this.db.query(
      `select *
       from route_checkpoints
       where route_id = any($1)
       order by route_id, sequence`,
      [routeIds]
    );
    return result.rows || [];
  }
}

module.exports = { MapsRepository };
