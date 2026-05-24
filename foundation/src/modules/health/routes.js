const { json } = require("../../runtime/http");
const { requirePermission } = require("../../runtime/permissions");

function registerHealthRoutes(router, { healthRepository, healthService }) {
  router.add("GET /health/intakes", requirePermission("health:write", async request => {
    const intakes = await healthRepository.listIntakes(request.context.tenantId, {
      countryId: request.query.countryId
    });
    return json(200, { intakes });
  }));

  router.add("POST /health/intakes", requirePermission("health:write", async request => {
    return json(201, await healthService.createIntake({
      context: request.context,
      countryId: request.body.countryId,
      needSummary: request.body.needSummary,
      riskLevel: request.body.riskLevel
    }));
  }));

  router.add("POST /health/intakes/:id/escalate", requirePermission("health:write", async request => {
    return json(200, await healthService.escalateRepresentative({
      context: request.context,
      intakeId: request.params.id
    }));
  }));

  router.add("POST /health/safety-review", requirePermission("health:write", async request => {
    return json(200, await healthService.runSafetyReview({
      context: request.context,
      countryId: request.body.countryId
    }));
  }));

  router.add("POST /health/map-inspector", requirePermission("health:write", async request => {
    return json(200, await healthService.runMapInspector({
      context: request.context,
      countryId: request.body.countryId
    }));
  }));

  router.add("POST /health/care-plan", requirePermission("health:write", async request => {
    return json(200, await healthService.generateCarePlan({
      context: request.context,
      intakeId: request.body.intakeId
    }));
  }));
}

module.exports = { registerHealthRoutes };
