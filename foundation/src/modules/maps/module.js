const { createModule } = require("../../module-factory");

const mapsModule = createModule({
  name: "maps",
  owner: "geo",
  responsibilities: [
    "Facility map layers",
    "Route and checkpoint layers",
    "Risk overlays",
    "Provider abstraction for map tiles/geocoding",
    "GeoJSON export"
  ],
  routes: [
    "GET /maps/layers/facilities",
    "GET /maps/layers/routes",
    "GET /maps/layers/risk",
    "GET /maps/geojson"
  ],
  tables: ["countries", "facilities", "routes", "route_checkpoints", "program_metrics"],
  integrations: ["OpenStreetMap", "Mapbox or Google Maps optional", "GPS/logistics provider"]
});

module.exports = { mapsModule };
