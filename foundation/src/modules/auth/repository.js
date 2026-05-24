class AuthRepository {
  constructor(db) {
    this.db = db;
  }

  async findUserByEmail({ tenantSlug, email }) {
    const result = await this.db.query(
      `select u.*, t.slug as tenant_slug
       from users u
       join tenants t on t.id = u.tenant_id
       where t.slug = $1 and lower(u.email) = lower($2)
       limit 1`,
      [tenantSlug, email]
    );
    return (result.rows || [])[0] || null;
  }

  async listUserRoles(userId) {
    const result = await this.db.query(
      `select r.code
       from user_roles ur
       join roles r on r.id = ur.role_id
       where ur.user_id = $1
       order by r.code`,
      [userId]
    );
    return (result.rows || []).map(row => row.code);
  }

  async listUsers(tenantId, { status, limit = 50 } = {}) {
    const params = [tenantId];
    let where = "where u.tenant_id = $1";
    if (status) {
      params.push(status);
      where += ` and u.status = $${params.length}`;
    }
    params.push(limit);
    const result = await this.db.query(
      `select u.id, u.tenant_id, u.email, u.display_name, u.status, u.preferred_country_id, u.created_at, u.updated_at,
              coalesce(json_agg(r.code order by r.code) filter (where r.code is not null), '[]') as roles
       from users u
       left join user_roles ur on ur.user_id = u.id
       left join roles r on r.id = ur.role_id
       ${where}
       group by u.id
       order by u.display_name
       limit $${params.length}`,
      params
    );
    return result.rows || [];
  }

  async listRoles(tenantId) {
    const result = await this.db.query(
      `select id, tenant_id, code, name, description, created_at
       from roles
       where tenant_id = $1
       order by code`,
      [tenantId]
    );
    return result.rows || [];
  }

  async assignRole({ tenantId, userId, roleCode }) {
    const result = await this.db.query(
      `insert into user_roles (user_id, role_id)
       select u.id, r.id
       from users u
       join roles r on r.tenant_id = u.tenant_id
       where u.tenant_id = $1 and u.id = $2 and r.code = $3
       on conflict do nothing
       returning user_id, role_id`,
      [tenantId, userId, roleCode]
    );
    return (result.rows || [])[0] || null;
  }
}

module.exports = { AuthRepository };
