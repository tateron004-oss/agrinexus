class WorkforceRepository {
  constructor(db) {
    this.db = db;
  }

  async getCandidateProfile(userId) {
    const result = await this.db.query(
      `select cp.*, lp.readiness_score
       from candidate_profiles cp
       left join learner_profiles lp on lp.user_id = cp.user_id
       where cp.user_id = $1
       limit 1`,
      [userId]
    );
    return (result.rows || [])[0] || null;
  }

  async updateCandidateProfile(candidateProfileId, patch) {
    const result = await this.db.query(
      `update candidate_profiles
       set eligibility = coalesce($2, eligibility),
           career_track = coalesce($3, career_track),
           pipeline_stage = coalesce($4, pipeline_stage),
           mentor_status = coalesce($5, mentor_status),
           next_shift = coalesce($6, next_shift),
           earnings_estimate = coalesce($7, earnings_estimate),
           updated_at = now()
       where id = $1
       returning *`,
      [
        candidateProfileId,
        patch.eligibility || null,
        patch.careerTrack || null,
        patch.pipelineStage || null,
        patch.mentorStatus || null,
        patch.nextShift || null,
        patch.earningsEstimate ?? null
      ]
    );
    return (result.rows || [])[0] || null;
  }

  async listRoles(tenantId) {
    const result = await this.db.query(
      `select wr.*, c.name as country_name
       from workforce_roles wr
       left join countries c on c.id = wr.country_id
       where wr.tenant_id = $1 and wr.status = 'open'
       order by wr.min_readiness, wr.title`,
      [tenantId]
    );
    return result.rows || [];
  }

  async getRole(tenantId, roleId) {
    const result = await this.db.query(
      `select *
       from workforce_roles
       where tenant_id = $1 and id = $2
       limit 1`,
      [tenantId, roleId]
    );
    return (result.rows || [])[0] || null;
  }

  async createApplication({ candidateProfileId, workforceRoleId }) {
    const result = await this.db.query(
      `insert into job_applications (candidate_profile_id, workforce_role_id, status)
       values ($1, $2, 'submitted')
       returning *`,
      [candidateProfileId, workforceRoleId]
    );
    return (result.rows || [])[0] || null;
  }
}

module.exports = { WorkforceRepository };
