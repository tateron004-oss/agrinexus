const { createFoundationRouter } = require("../src/app");
const { readConfig } = require("../src/config");
const { MapsRepository } = require("../src/modules/maps/repository");
const { MapsService } = require("../src/modules/maps/service");
const { createDatabaseRuntime } = require("../src/runtime/database");
const { createRequestContext } = require("../src/runtime/request-context");
const { permissionsForRoles } = require("../src/runtime/permissions");

class FakeAdapter {
  constructor() {
    this.country = {
      id: "country-1",
      tenant_id: "tenant-1",
      name: "Nigeria",
      iso_code: "NG",
      latitude: 9.082,
      longitude: 8.6753,
      risk_level: "High",
      heat_index_c: 39,
      queue_status: "2 callers ahead",
      patients: 5600,
      facilities: 18,
      data_quality_rate: 93
    };
    this.facilities = [
      {
        id: "facility-1",
        tenant_id: "tenant-1",
        country_id: "country-1",
        name: "Lagos Care Hub",
        facility_type: "clinic",
        latitude: 6.5244,
        longitude: 3.3792,
        status: "active",
        metadata: { capacity: 120 }
      }
    ];
    this.routes = [
      {
        id: "route-1",
        tenant_id: "tenant-1",
        country_id: "country-1",
        country_name: "Nigeria",
        name: "Lagos Produce Corridor",
        corridor_type: "trade",
        color: "#176fba",
        status: "active"
      }
    ];
    this.checkpoints = [
      { id: "checkpoint-1", route_id: "route-1", sequence: 1, name: "Lagos Hub", latitude: 6.5244, longitude: 3.3792, checkpoint_type: "hub" },
      { id: "checkpoint-2", route_id: "route-1", sequence: 2, name: "Ibadan Hub", latitude: 7.3775, longitude: 3.947, checkpoint_type: "distribution" }
    ];
  }

  async query(sql) {
    if (sql.includes("from countries")) return { rows: [this.country] };
    if (sql.includes("from facilities")) return { rows: this.facilities };
    if (sql.includes("from routes")) return { rows: this.routes };
    if (sql.includes("from route_checkpoints")) return { rows: this.checkpoints };
    return { rows: [] };
  }
}

async function main() {
  const config = readConfig({ SESSION_SECRET: "test-secret", MAP_TILE_PROVIDER: "openstreetmap" });
  const db = createDatabaseRuntime({ adapter: new FakeAdapter() });
  const mapsRepository = new MapsRepository(db);
  const mapsService = new MapsService({ repository: mapsRepository, config });
  const router = createFoundationRouter({ mapsRepository, mapsService, config });
  const context = createRequestContext({
    tenantId: "tenant-1",
    userId: "user-1",
    roles: ["coordinator"],
    permissions: permissionsForRoles(["coordinator"])
  });

  const facilities = await router.handle({ method: "GET", url: "/maps/layers/facilities", headers: {}, body: {}, context });
  if (facilities.status !== 200 || facilities.body.geojson.features[0].geometry.type !== "Point") throw new Error("Expected facility point layer.");

  const routes = await router.handle({ method: "GET", url: "/maps/layers/routes", headers: {}, body: {}, context });
  if (routes.status !== 200 || routes.body.geojson.features[0].geometry.type !== "LineString") throw new Error("Expected route line layer.");

  const risk = await router.handle({ method: "GET", url: "/maps/layers/risk", headers: {}, body: {}, context });
  if (risk.status !== 200 || risk.body.geojson.features[0].properties.riskLevel !== "High") throw new Error("Expected risk layer.");

  const geojson = await router.handle({ method: "GET", url: "/maps/geojson", headers: {}, body: {}, context });
  if (geojson.status !== 200 || geojson.body.features.length < 3) throw new Error("Expected combined GeoJSON.");

  console.log("Maps routes smoke passed");
}

main().catch(error => {
  console.error(error.stack || error.message);
  process.exit(1);
});
