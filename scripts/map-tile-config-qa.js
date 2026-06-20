const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const app = read("public/app.js");
const server = read("server.js");
const envExample = read(".env.example");
const renderYaml = read("render.yaml");
const readme = read("README.md");
const sw = read("public/sw.js");
const pkg = JSON.parse(read("package.json"));

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(server.includes("function publicMapConfig"), "Server should expose a public map config builder.");
assert(server.includes("DEFAULT_PUBLIC_MAP_TILE_LAYERS"), "Server should define safe default public tile layers.");
assert(server.includes("publicTileLayerConfig"), "Server should normalize public tile layer env values.");
assert(server.includes("offlineTileCaching: false"), "Server should explicitly document no offline tile caching in config.");
assert(server.includes("MAP_TILE_URL"), "Server config should honor MAP_TILE_URL for the operational layer.");
assert(server.includes("MAP_TILE_ATTRIBUTION"), "Server config should honor MAP_TILE_ATTRIBUTION.");
assert(server.includes("MAP_IMAGERY_TILE_URL"), "Server config should support imagery tile URL overrides.");
assert(server.includes("MAP_LABEL_TILE_URL"), "Server config should support label tile URL overrides.");
assert(server.includes("MAP_HUMANITARIAN_TILE_URL"), "Server config should support humanitarian tile URL overrides.");
assert(server.includes("/api/config") && server.includes("const publicMap = publicMapConfig()"), "/api/config should include public map config.");

assert(app.includes("DEFAULT_MAP_TILE_CONFIG"), "Frontend should retain safe tile defaults for local/dev fallback.");
assert(app.includes("let mapTileConfig = DEFAULT_MAP_TILE_CONFIG"), "Frontend should start from safe tile defaults.");
assert(app.includes("async function loadPublicMapConfig"), "Frontend should load server public map config.");
assert(app.includes('fetch("/api/config"'), "Frontend should fetch map config from /api/config.");
assert(app.includes("normalizedMapTileLayers"), "Frontend should normalize configured tile layers before building Leaflet layers.");
assert(app.includes("mapLayers.operational.url"), "Operational layer should consume configured tile URL.");
assert(app.includes("mapLayers.satellite.url"), "Imagery layer should consume configured tile URL.");
assert(app.includes("mapLayers.labels.url"), "Label layer should consume configured tile URL.");
assert(app.includes("mapLayers.humanitarian.url"), "Humanitarian layer should consume configured tile URL.");
assert(app.includes("mapLayers.openStreetMap.url"), "OpenStreetMap fallback layer should remain available.");
assert(app.includes("mapLayers.operational.attribution"), "Operational attribution should be preserved.");
assert(app.includes("detectRetina: true"), "Leaflet high-DPI tile behavior should remain configured.");
assert(app.includes("maxNativeZoom: MAP_ZOOM_CONFIG.maxNativeZoom"), "Leaflet native raster zoom cap should remain configured.");
assert(app.includes("activateFallback"), "Tile failure fallback should remain wired.");
assert(app.includes("layers.routes = L.layerGroup().addTo(map)"), "Main route overlay should remain wired.");
assert(app.includes("drawShipmentRoute"), "Shipment route overlay should remain wired.");
assert(app.includes("drawRuralHealthNetwork"), "Rural health overlay should remain wired.");

[
  "MAP_TILE_ATTRIBUTION",
  "MAP_IMAGERY_TILE_URL",
  "MAP_IMAGERY_ATTRIBUTION",
  "MAP_LABEL_TILE_URL",
  "MAP_LABEL_ATTRIBUTION",
  "MAP_HUMANITARIAN_TILE_URL",
  "MAP_HUMANITARIAN_ATTRIBUTION"
].forEach(name => {
  assert(envExample.includes(name), `.env.example should document ${name}.`);
  assert(renderYaml.includes(name), `render.yaml should include ${name}.`);
});

assert(readme.includes("/api/config"), "README should document the public map config contract.");
assert(readme.includes("Offline tile caching is not implemented yet"), "README should document offline tile caching remains out of scope.");
assert(sw.includes("APP_SHELL") && !/tile\.openstreetmap|ArcGIS\/rest\/services|openstreetmap\.fr\/hot/i.test(sw), "Service worker should not cache third-party tile URLs yet.");
assert(pkg.scripts["map:tile-config-qa"] === "node scripts/map-tile-config-qa.js", "package script should expose Phase 2 map tile config QA.");

const paidKeyPatterns = [
  /pk\.[A-Za-z0-9._-]{20,}/,
  /AIza[0-9A-Za-z_-]{20,}/,
  /sk\.[A-Za-z0-9._-]{20,}/
];
for (const pattern of paidKeyPatterns) {
  assert(!pattern.test(app), "No paid map API key should be hardcoded in public/app.js.");
  assert(!pattern.test(server), "No paid map API key should be hardcoded in server.js.");
  assert(!pattern.test(envExample), "No paid map API key should be hardcoded in .env.example.");
  assert(!pattern.test(renderYaml), "No paid map API key should be hardcoded in render.yaml.");
}

console.log("Map tile config QA passed");
