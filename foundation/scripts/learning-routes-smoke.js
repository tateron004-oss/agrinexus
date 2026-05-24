const { createFoundationRouter } = require("../src/app");
const { readConfig } = require("../src/config");
const { LearningRepository } = require("../src/modules/learning/repository");
const { LearningService } = require("../src/modules/learning/service");
const { createDatabaseRuntime } = require("../src/runtime/database");
const { createRequestContext } = require("../src/runtime/request-context");
const { permissionsForRoles } = require("../src/runtime/permissions");

class FakeAdapter {
  constructor() {
    this.course = {
      id: "course-1",
      tenant_id: "tenant-1",
      title: "Digital Foundations",
      track: "Digital",
      readiness_points: 8,
      status: "active"
    };
    this.profile = {
      id: "learner-1",
      user_id: "user-1",
      readiness_score: 32,
      quiz_score: 0,
      current_course_id: null
    };
    this.certificates = [];
  }

  async query(sql, params) {
    if (sql.includes("from courses") && sql.includes("order by title")) return { rows: [this.course] };
    if (sql.includes("from courses") && sql.includes("limit 1")) return { rows: [this.course] };
    if (sql.includes("from learner_profiles")) return { rows: [this.profile] };
    if (sql.includes("insert into course_enrollments")) return { rows: [] };
    if (sql.includes("update learner_profiles")) {
      this.profile = {
        ...this.profile,
        readiness_score: params[1],
        quiz_score: params[2],
        current_course_id: params[3]
      };
      return { rows: [this.profile] };
    }
    if (sql.includes("update course_enrollments")) return { rows: [] };
    if (sql.includes("insert into certificates")) {
      const certificate = {
        id: "certificate-1",
        learner_profile_id: params[0],
        course_id: params[1],
        certificate_number: params[2]
      };
      this.certificates.push(certificate);
      return { rows: [certificate] };
    }
    if (sql.includes("insert into audit_events")) return { rows: [] };
    return { rows: [] };
  }
}

async function main() {
  const config = readConfig({ SESSION_SECRET: "test-secret" });
  const db = createDatabaseRuntime({ adapter: new FakeAdapter() });
  const learningRepository = new LearningRepository(db);
  const learningService = new LearningService({ repository: learningRepository, db, config });
  const router = createFoundationRouter({ learningRepository, learningService, config });
  const context = createRequestContext({
    tenantId: "tenant-1",
    userId: "user-1",
    roles: ["coordinator"],
    permissions: permissionsForRoles(["coordinator"])
  });

  const courses = await router.handle({ method: "GET", url: "/learning/courses", headers: {}, context });
  if (courses.status !== 200 || courses.body.courses.length !== 1) throw new Error("Expected courses list.");

  const start = await router.handle({
    method: "POST",
    url: "/learning/enrollments",
    headers: {},
    body: { courseId: "course-1" },
    context
  });
  if (start.status !== 201 || start.body.profile.readiness_score !== 40) throw new Error("Expected course start readiness 40.");

  const quiz = await router.handle({ method: "POST", url: "/learning/quizzes/complete", headers: {}, body: {}, context });
  if (quiz.status !== 200 || quiz.body.profile.quiz_score !== 25) throw new Error("Expected quiz score 25.");

  const cert = await router.handle({ method: "POST", url: "/learning/certificates", headers: {}, body: {}, context });
  if (cert.status !== 201 || !cert.body.certificate.certificate_number) throw new Error("Expected certificate.");

  console.log("Learning routes smoke passed");
}

main().catch(error => {
  console.error(error.stack || error.message);
  process.exit(1);
});
