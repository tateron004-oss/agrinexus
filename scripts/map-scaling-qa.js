const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const app = read("public/app.js");
const css = read("public/styles.css");
const html = read("public/index.html");
const sw = read("public/sw.js");
const pkg = JSON.parse(read("package.json"));
const server = read("server.js");
const foundationConfig = read("foundation/src/config.js");
const mapsService = read("foundation/src/modules/maps/service.js");
const mobileBridge = read("public/native-bridge.json");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function count(pattern, text = app) {
  return (text.match(pattern) || []).length;
}

assert(html.includes("leaflet@1.9.4/dist/leaflet.css"), "Leaflet CSS should be loaded.");
assert(html.includes("leaflet@1.9.4/dist/leaflet.js"), "Leaflet JS should be loaded.");
assert(count(/L\.map\(/g) >= 7, "Expected all real map canvases to initialize through Leaflet.");
assert(count(/L\.map\([^)]*leafletMapOptions\(/g) >= 7, "Every Leaflet map should use the shared zoom contract.");
assert(app.includes("const MAP_ZOOM_CONFIG"), "Map zoom config should be centralized.");
assert(app.includes("minZoom: MAP_ZOOM_CONFIG.minZoom"), "Leaflet maps/tiles should configure minZoom.");
assert(app.includes("maxZoom: MAP_ZOOM_CONFIG.maxZoom"), "Leaflet maps/tiles should configure maxZoom.");
assert(app.includes("maxNativeZoom: MAP_ZOOM_CONFIG.maxNativeZoom"), "Tile layers should cap native raster zoom to avoid blurry over-zoom.");
assert(app.includes("detectRetina: true"), "Tile layers should request high-DPI tiles when Leaflet can do so.");
assert(app.includes("zoomControl: true"), "User-facing Leaflet zoom controls should remain enabled.");
assert(app.includes("L.control.layers"), "Layer picker should remain available.");
assert(app.includes("L.control.scale"), "Scale control should remain available.");
assert(app.includes("tileerror"), "Tile failure fallback should remain wired.");
assert(app.includes("activateFallback"), "OSM fallback should remain wired for base tile failures.");
assert(app.includes("layers.routes = L.layerGroup().addTo(map)"), "Main route overlay should remain wired.");
assert(app.includes("layers.markers = L.layerGroup().addTo(map)"), "Main marker overlay should remain wired.");
assert(app.includes("layers.facilities = L.layerGroup().addTo(map)"), "Main facility overlay should remain wired.");
assert(app.includes("layers.liveRoute = L.layerGroup().addTo(map)"), "Live route overlay should remain wired.");
assert(app.includes("drawShipmentRoute"), "Shipment/trade route rendering should remain wired.");
assert(app.includes("addOperationalCountryMarkers"), "Country/farm/provider marker rendering should remain wired.");
assert(app.includes("drawRuralHealthNetwork"), "Health map overlay rendering should remain wired.");
assert(app.includes("workflowLeafletMap"), "Workflow modal map should remain wired.");
assert(sw.includes("app.js") && sw.includes("styles.css"), "PWA shell should still cache app map runtime files.");
assert(mobileBridge.includes("mapsAndLocation"), "Native/mobile map and location bridge metadata should still exist.");
assert(foundationConfig.includes("MAP_TILE_PROVIDER"), "Foundation map provider config should remain available.");
assert(mapsService.includes("tileProvider()"), "Foundation maps service should expose provider metadata.");
assert(server.includes("/api/config") && server.includes("leaflet-openstreetmap"), "Server config should report map runtime metadata.");
assert(pkg.scripts["map:scaling-qa"] === "node scripts/map-scaling-qa.js", "package script should expose map scaling QA.");

const mapCss = css
  .split(/\r?\n/)
  .filter(line => /map|leaflet|shipment|workflow/i.test(line))
  .join("\n");
assert(!/transform\s*:\s*scale\s*\(/i.test(mapCss), "Map-specific CSS must not use transform: scale for fake zoom.");

const paidKeyPatterns = [
  /pk\.[A-Za-z0-9._-]{20,}/,
  /AIza[0-9A-Za-z_-]{20,}/,
  /sk\.[A-Za-z0-9._-]{20,}/
];
for (const pattern of paidKeyPatterns) {
  assert(!pattern.test(app), "No paid map API key should be hardcoded in public/app.js.");
  assert(!pattern.test(html), "No paid map API key should be hardcoded in public/index.html.");
}

console.log("Map scaling QA passed");
