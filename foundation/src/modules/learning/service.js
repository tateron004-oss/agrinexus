const crypto = require("crypto");
const { recordAuditEvent } = require("../../runtime/audit");

class LearningService {
  constructor({ repository, db }) {
    this.repository = repository;
    this.db = db;
  }

  async startCourse({ context, courseId }) {
    const profile = await this.requiredProfile(context.userId);
    const course = await this.requiredCourse(context.tenantId, courseId);
    const readinessScore = Math.min(100, profile.readiness_score + course.readiness_points);

    await this.repository.startCourse({ learnerProfileId: profile.id, courseId });
    const updated = await this.repository.updateLearnerProgress({
      learnerProfileId: profile.id,
      readinessScore,
      quizScore: profile.quiz_score,
      currentCourseId: course.id
    });
    await this.audit(context, "learning.course_started", course.id, { courseTitle: course.title });

    return { profile: updated, course };
  }

  async completeQuiz({ context }) {
    const profile = await this.requiredProfile(context.userId);
    const updated = await this.repository.updateLearnerProgress({
      learnerProfileId: profile.id,
      readinessScore: Math.min(100, profile.readiness_score + 6),
      quizScore: Math.min(100, profile.quiz_score + 25),
      currentCourseId: profile.current_course_id
    });
    await this.audit(context, "learning.quiz_completed", profile.current_course_id, {});
    return { profile: updated };
  }

  async issueCertificate({ context }) {
    const profile = await this.requiredProfile(context.userId);
    if (!profile.current_course_id) throw new Error("Start a course before issuing a certificate.");
    if (profile.quiz_score < 25) throw new Error("Complete a quiz before issuing a certificate.");

    await this.repository.markCourseComplete({
      learnerProfileId: profile.id,
      courseId: profile.current_course_id
    });
    const certificate = await this.repository.createCertificate({
      learnerProfileId: profile.id,
      courseId: profile.current_course_id,
      certificateNumber: `AN-${crypto.randomBytes(5).toString("hex").toUpperCase()}`
    });
    const updated = await this.repository.updateLearnerProgress({
      learnerProfileId: profile.id,
      readinessScore: Math.min(100, profile.readiness_score + 10),
      quizScore: profile.quiz_score,
      currentCourseId: profile.current_course_id
    });
    await this.audit(context, "learning.certificate_issued", certificate.id, {
      courseId: profile.current_course_id
    });
    return { profile: updated, certificate };
  }

  async requiredProfile(userId) {
    const profile = await this.repository.getLearnerProfile(userId);
    if (!profile) throw new Error("Learner profile not found.");
    return profile;
  }

  async requiredCourse(tenantId, courseId) {
    const course = await this.repository.getCourse(tenantId, courseId);
    if (!course) throw new Error("Course not found.");
    return course;
  }

  async audit(context, action, entityId, metadata) {
    return recordAuditEvent(this.db, context, {
      action,
      entityType: "learning",
      entityId,
      metadata
    });
  }
}

module.exports = { LearningService };
