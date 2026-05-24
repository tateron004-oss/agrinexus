const { json } = require("../../runtime/http");
const { requirePermission } = require("../../runtime/permissions");

function registerCoreRoutes(router, { coreRepository }) {
  router.add("GET /countries", requirePermission("core:read", async request => {
    const countries = await coreRepository.listCountries(request.context.tenantId);
    return json(200, { countries });
  }));

  router.add("GET /countries/:id", requirePermission("core:read", async request => {
    const country = await coreRepository.getCountry(request.context.tenantId, request.params.id);
    if (!country) return json(404, { error: "Country not found" });
    return json(200, { country });
  }));

  router.add("GET /facilities", requirePermission("core:read", async request => {
    const facilities = await coreRepository.listFacilities(request.context.tenantId, {
      countryId: request.query.countryId
    });
    return json(200, { facilities });
  }));
}

module.exports = { registerCoreRoutes };
