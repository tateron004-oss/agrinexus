const { json } = require("../../runtime/http");
const { requirePermission } = require("../../runtime/permissions");

function registerAiRoutes(router, { aiRepository, aiService }) {
  router.add("POST /ai/command-center", requirePermission("ai:run", async request => {
    return json(201, await aiService.commandCenter({ context: request.context, prompt: request.body || {} }));
  }));

  router.add("POST /ai/price-guidance", requirePermission("ai:run", async request => {
    return json(201, await aiService.priceGuidance({ context: request.context, prompt: request.body || {} }));
  }));

  router.add("POST /ai/route-risk", requirePermission("ai:run", async request => {
    return json(201, await aiService.routeRisk({ context: request.context, prompt: request.body || {} }));
  }));

  router.add("POST /ai/care-plan", requirePermission("ai:run", async request => {
    return json(201, await aiService.carePlan({ context: request.context, prompt: request.body || {} }));
  }));

  router.add("GET /ai/runs", requirePermission("ai:run", async request => {
    const runs = await aiRepository.listRuns(request.context.tenantId, {
      runType: request.query.runType,
      limit: Number(request.query.limit || 25)
    });
    return json(200, { runs });
  }));
}

module.exports = { registerAiRoutes };
