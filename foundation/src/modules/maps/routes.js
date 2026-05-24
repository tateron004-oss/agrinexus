const { json } = require("../../runtime/http");
const { requirePermission } = require("../../runtime/permissions");

function registerMapsRoutes(router, { mapsService }) {
  router.add("GET /maps/layers/facilities", requirePermission("maps:read", async request => {
    return json(200, await mapsService.facilityLayer(request.context.tenantId, {
      countryId: request.query.countryId
    }));
  }));

  router.add("GET /maps/layers/routes", requirePermission("maps:read", async request => {
    return json(200, await mapsService.routeLayer(request.context.tenantId, {
      countryId: request.query.countryId
    }));
  }));

  router.add("GET /maps/layers/risk", requirePermission("maps:read", async request => {
    return json(200, await mapsService.riskLayer(request.context.tenantId));
  }));

  router.add("GET /maps/geojson", requirePermission("maps:read", async request => {
    return json(200, await mapsService.geojson(request.context.tenantId, {
      countryId: request.query.countryId
    }));
  }));
}

module.exports = { registerMapsRoutes };
