const { json } = require("../../runtime/http");
const { requirePermission } = require("../../runtime/permissions");

function registerAdminRoutes(router, { adminRepository }) {
  router.add("GET /admin/audit-events", requirePermission("admin:read", async request => {
    const events = await adminRepository.listAuditEvents(request.context.tenantId, {
      action: request.query.action,
      entityType: request.query.entityType,
      limit: Number(request.query.limit || 50)
    });
    return json(200, { events });
  }));

  router.add("GET /admin/ai-runs", requirePermission("admin:read", async request => {
    const runs = await adminRepository.listAiRuns(request.context.tenantId, {
      runType: request.query.runType,
      provider: request.query.provider,
      limit: Number(request.query.limit || 50)
    });
    return json(200, { runs });
  }));
}

module.exports = { registerAdminRoutes };
