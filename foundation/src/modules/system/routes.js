const { json } = require("../../runtime/http");
const { requirePermission } = require("../../runtime/permissions");

function registerSystemRoutes(router, { systemService }) {
  router.add("GET /system/health", requirePermission("system:read", async () => {
    return json(200, await systemService.health());
  }));

  router.add("GET /system/providers", requirePermission("system:read", async () => {
    return json(200, { providers: systemService.providers() });
  }));

  router.add("GET /system/modules", requirePermission("system:read", async () => {
    return json(200, systemService.moduleStatus());
  }));
}

module.exports = { registerSystemRoutes };
