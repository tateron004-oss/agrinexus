const { json } = require("../../runtime/http");
const { requirePermission } = require("../../runtime/permissions");

function registerLearningRoutes(router, { learningRepository, learningService }) {
  router.add("GET /learning/courses", requirePermission("core:read", async request => {
    const courses = await learningRepository.listCourses(request.context.tenantId);
    return json(200, { courses });
  }));

  router.add("GET /learning/profile", requirePermission("core:read", async request => {
    const profile = await learningRepository.getLearnerProfile(request.context.userId);
    if (!profile) return json(404, { error: "Learner profile not found" });
    return json(200, { profile });
  }));

  router.add("POST /learning/enrollments", requirePermission("learning:write", async request => {
    const result = await learningService.startCourse({
      context: request.context,
      courseId: request.body.courseId
    });
    return json(201, result);
  }));

  router.add("POST /learning/quizzes/complete", requirePermission("learning:write", async request => {
    const result = await learningService.completeQuiz({ context: request.context });
    return json(200, result);
  }));

  router.add("POST /learning/certificates", requirePermission("learning:write", async request => {
    const result = await learningService.issueCertificate({ context: request.context });
    return json(201, result);
  }));
}

module.exports = { registerLearningRoutes };
