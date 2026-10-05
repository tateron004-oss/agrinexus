"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// The server already computed a real road route (OpenStreetMap + OSRM, or Google Maps), but the screen threw it away and drew a straight line between
// two cities from a built-in list of 28 (and drew nothing for any other place). It now draws the road the server computed, with distance and time.

const root = path.resolve(__dirname, "..", "..");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const serverSource = fs.readFileSync(path.join(root, "server.js"), "utf8");
const start = appSource.indexOf("function genesisRoadRoute(");
const end = appSource.indexOf("const genesisWorkspaceBridgeRequests");
assert.ok(start > 0 && end > start, "the map launcher must stay extractable");

function load() {
  const calls = { polylines: [], markers: [], popups: [], fit: [], opened: [], more: [] };
  const layer = () => ({ clearLayers() {}, getLayers() { return []; } });
  const sandbox = {
    document: { body: { dataset: {} }, querySelector: () => ({ setAttribute: (name, value) => calls.more.push([name, value]) }) },
    userMap: { fitBounds: (points, options) => calls.fit.push([points, options]) },
    userMapLayers: { route: layer(), markers: layer() },
    L: {
      polyline: (points, style) => { calls.polylines.push([points, style]); return { addTo: () => {} }; },
      marker: point => { const entry = { point, popup: "" }; calls.markers.push(entry); return { addTo() { return this; }, bindPopup(html) { entry.popup = html; return this; }, openPopup() { return this; } }; }
    },
    escapeHtml: value => String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"),
    safeInvalidateLeafletMap: () => {},
    waitForStableUserMapCanvas: () => Promise.resolve(),
    africanMapCountryTarget: () => null,
    openFullScaleUserMap: response => { calls.opened.push(response); return true; },
    openCountryMapFromVoice: () => true,
    genesisRealtimeMapTarget: () => null,
    africanCityLocationCatalog: () => [
      { city: "Nairobi", aliases: ["nairobi"], latitude: -1.286389, longitude: 36.817223 },
      { city: "Nakuru", aliases: ["nakuru"], latitude: -0.303099, longitude: 36.080025 }
    ],
    normalizeToolText: value => String(value || "").toLowerCase(),
    Number, Math, String, Array, Boolean, Object
  };
  vm.createContext(sandbox);
  vm.runInContext(appSource.slice(start, end) + "\nthis.road = genesisRoadRoute; this.open = openGenesisRealtimeMapWorkspace;", sandbox);
  return { road: sandbox.road, open: sandbox.open, calls, sandbox };
}

const GEOMETRY = [[-1.2864, 36.8172], [-1.0, 36.6], [-0.6, 36.3], [-0.3031, 36.08]];

test("a route with real geometry is read with its points, names, distance and time in plain words", () => {
  const { road } = load();
  const route = road({ origin: "Nairobi", destination: "Nakuru", routeGeometry: GEOMETRY, distanceMeters: 158400, durationSeconds: 11400 });
  assert.equal(route.points.length, 4);
  assert.equal(JSON.stringify(route.points[0]), JSON.stringify([-1.2864, 36.8172]));
  assert.equal(route.summary, "about 158 km, around 3 h 10 min by road");
  assert.equal(road({ origin: "A", destination: "B", routeGeometry: GEOMETRY, distanceMeters: 4200, durationSeconds: 540 }).summary, "about 4.2 km, around 9 min by road");
  assert.equal(road({ origin: "A", destination: "B", routeGeometry: GEOMETRY, distanceMeters: 50000, durationSeconds: 7200 }).summary, "about 50 km, around 2 h by road");
  assert.equal(road({ origin: "A", destination: "B", routeGeometry: GEOMETRY }).summary, "", "no distance or time: no invented figures");
});

test("geometry that is missing, too short or nonsense is not used", () => {
  const { road } = load();
  for (const routeGeometry of [undefined, null, [], [[-1, 36]], "x", [[999, 36], [0, 0]], [["a", "b"], ["c", "d"]], [[-1.2, 36.8, 0], [-0.3]]]) {
    const route = road({ origin: "A", destination: "B", routeGeometry });
    assert.equal(route, null, JSON.stringify(routeGeometry));
  }
  assert.equal(road({ origin: "A", destination: "B", routeGeometry: [[0, 0], [1, 1], ["x", 2]] }).points.length, 2, "a bad point is dropped, the rest kept");
});

test("the map draws the real road and both ends, fits to it, and says the distance and time", async () => {
  const { open, calls, sandbox } = load();
  const shown = open({ origin: "Nairobi", destination: "Nakuru", routeGeometry: GEOMETRY, distanceMeters: 158400, durationSeconds: 11400 }, "show a route from Nairobi to Nakuru");
  assert.equal(shown, true);
  assert.equal(calls.opened[0], "I opened the map with the road route from Nairobi to Nakuru: about 158 km, around 3 h 10 min by road.");
  await Promise.resolve(); await Promise.resolve();
  assert.equal(calls.polylines.length, 1);
  assert.equal(calls.polylines[0][0].length, 4, "every point of the road, not a two-point straight line");
  assert.equal(calls.markers.length, 2);
  assert.match(calls.markers[1].popup, /Nakuru.*about 158 km, around 3 h 10 min by road/);
  assert.equal(calls.fit.length, 1);
  assert.equal(sandbox.document.body.dataset.genesisMapLocation, "Nairobi to Nakuru");
});

test("a place that is not in the built-in city list still gets its route drawn", async () => {
  const { open, calls } = load();
  open({ origin: "Kakamega", destination: "Mumias", routeGeometry: [[0.2827, 34.7519], [0.25, 34.65], [0.3361, 34.4877]], distanceMeters: 41000, durationSeconds: 3000 }, "");
  await Promise.resolve(); await Promise.resolve();
  assert.equal(calls.polylines.length, 1);
  assert.match(calls.markers[1].popup, /Mumias/);
});

test("a name typed by a person is escaped before it reaches the map popup", async () => {
  const { open, calls } = load();
  open({ origin: "A<b>", destination: "<img src=x onerror=alert(1)>", routeGeometry: GEOMETRY }, "");
  await Promise.resolve(); await Promise.resolve();
  assert.equal(calls.markers.some(entry => /<img|<b>/.test(entry.popup)), false);
});

test("with no geometry the older straight line between two known cities is still drawn", async () => {
  const { open, calls } = load();
  open({ origin: "Nairobi", destination: "Nakuru" }, "");
  await Promise.resolve(); await Promise.resolve();
  assert.equal(calls.polylines.length, 1);
  assert.equal(calls.polylines[0][0].length, 2, "the fallback is unchanged");
  assert.match(calls.opened[0], /^I opened the real map\./);
});

test("the spoken route tool hands the computed road to the screen, and the screen reads it", () => {
  assert.match(serverSource, /mapRoute: \{ origin: routeData\.originResolved \|\| routeArgs\.origin, destination: routeData\.destinationResolved \|\| routeArgs\.destination,\s*routeGeometry: routeData\.routeGeometry/);
  assert.match(appSource, /openGenesisRealtimeMapWorkspace\(result\?\.mapRoute && typeof result\.mapRoute === "object" \? \{ \.\.\.payload, \.\.\.result\.mapRoute \} : payload, command\)/);
  assert.match(appSource, /openGenesisRealtimeMapWorkspace\(data, outcome\.response\)/, "the typed (authoritative) route already passes the outcome data, which carries the geometry");
});
