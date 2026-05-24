class LearningRepository {
  constructor(db) {
    this.db = db;
  }

  async listCourses(tenantId) {
    const result = await this.db.query(
      `select *
       from courses
       where tenant_id = $1 and status = 'active'
       order by title`,
      [tenantId]
    );
    return result.rows || [];
  }

  async getCourse(tenantId, courseId) {
    const result = await this.db.query(
      `select *
       from courses
       where tenant_id = $1 and id = $2
       limit 1`,
      [tenantId, courseId]
    );
    return (result.rows || [])[0] || null;
  }

  async getLearnerProfile(userId) {
    const result = await this.db.query(
      `select *
       from learner_profiles
       where user_id = $1
       limit 1`,
      [userId]
    );
    return (result.rows || [])[0] || null;
  }

  async startCourse({ learnerProfileId, courseId }) {
    await this.db.query(
      `insert into course_enrollments (learner_profile_id, course_id, status)
       values ($1, $2, 'started')
       on conflict (learner_profile_id, course_id)
       do update set status = 'started', started_at = now()`,
      [learnerProfileId, courseId]
    );
  }

  async updateLearnerProgress({ learnerProfileId, readinessScore, quizScore, currentCourseId }) {
    const result = await this.db.query(
      `update learner_profiles
       set readiness_score = $2,
           quiz_score = $3,
           current_course_id = $4,
           updated_at = now()
       where id = $1
       returning *`,
      [learnerProfileId, readinessScore, quizScore, currentCourseId]
    );
    return (result.rows || [])[0] || null;
  }

  async markCourseComplete({ learnerProfileId, courseId }) {
    await this.db.query(
      `update course_enrollments
       set status = 'completed', completed_at = now()
       where learner_profile_id = $1 and course_id = $2`,
      [learnerProfileId, courseId]
    );
  }

  async createCertificate({ learnerProfileId, courseId, certificateNumber }) {
    const result = await this.db.query(
      `insert into certificates (learner_profile_id, course_id, certificate_number)
       values ($1, $2, $3)
       returning *`,
      [learnerProfileId, courseId, certificateNumber]
    );
    return (result.rows || [])[0] || null;
  }
}

module.exports = { LearningRepository };
