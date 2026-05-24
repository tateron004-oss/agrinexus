const { createRouter } = require("./runtime/http");
const { registerAuthRoutes } = require("./modules/auth/routes");
const { registerCoreRoutes } = require("./modules/core/routes");
const { registerLearningRoutes } = require("./modules/learning/routes");
const { registerWorkforceRoutes } = require("./modules/workforce/routes");
const { registerHealthRoutes } = require("./modules/health/routes");
const { registerTradeRoutes } = require("./modules/trade/routes");
const { registerAiRoutes } = require("./modules/ai/routes");
const { registerMapsRoutes } = require("./modules/maps/routes");
const { registerSystemRoutes } = require("./modules/system/routes");
const { registerAdminRoutes } = require("./modules/admin/routes");

function createFoundationRouter(dependencies) {
  const router = createRouter();
  registerAuthRoutes(router, dependencies);
  if (dependencies.coreRepository) registerCoreRoutes(router, dependencies);
  if (dependencies.learningRepository && dependencies.learningService) registerLearningRoutes(router, dependencies);
  if (dependencies.workforceRepository && dependencies.workforceService) registerWorkforceRoutes(router, dependencies);
  if (dependencies.healthRepository && dependencies.healthService) registerHealthRoutes(router, dependencies);
  if (dependencies.tradeRepository && dependencies.tradeService) registerTradeRoutes(router, dependencies);
  if (dependencies.aiRepository && dependencies.aiService) registerAiRoutes(router, dependencies);
  if (dependencies.mapsRepository && dependencies.mapsService) registerMapsRoutes(router, dependencies);
  if (dependencies.systemService) registerSystemRoutes(router, dependencies);
  if (dependencies.adminRepository) registerAdminRoutes(router, dependencies);
  return router;
}

module.exports = { createFoundationRouter };
