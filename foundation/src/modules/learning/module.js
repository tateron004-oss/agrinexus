const { createModule } = require("../../module-factory");

const learningModule = createModule({
  name: "learning",
  owner: "learning",
  responsibilities: [
    "Course catalog",
    "Enrollment",
    "Quiz progress",
    "Certificate issuance",
    "Readiness contribution"
  ],
  routes: [
    "GET /learning/courses",
    "POST /learning/enrollments",
    "POST /learning/quizzes/complete",
    "POST /learning/certificates",
    "GET /learning/profile"
  ],
  tables: ["courses", "learner_profiles", "course_enrollments", "certificates"],
  integrations: ["certificate document renderer", "learning content provider"]
});

module.exports = { learningModule };
