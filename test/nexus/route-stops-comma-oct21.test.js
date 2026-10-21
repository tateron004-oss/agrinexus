"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const server = fs.readFileSync(path.join(__dirname, "..", "..", "server.js"), "utf8");
const slice = (source, start) => { const at = source.indexOf(start); return source.slice(at, source.indexOf("\n}\n", at) + 3); };

// Found live after #1137: the speech reader writes "from Nairobi to Nakuru, via Naivasha." with a comma, and the stop was read as part of the destination ("Nakuru, via Naivasha"), which no map knows.
const raw = new vm.Script(`${slice(server, "function nexusOpenAiNativeExtractRouteArgs(")}\nnexusOpenAiNativeExtractRouteArgs`).runInNewContext({ sanitizePilotText: value => String(value || "").trim(), stripTrailingArrivalTimeClause: value => value });
const extract = (...args) => JSON.parse(JSON.stringify(raw(...args)));

test("a stop after a comma is a stop, not part of the destination", () => {
  assert.deepEqual(extract("Show me a route from Nairobi to Nakuru, via Naivasha.", {}), { origin: "Nairobi", destination: "Nakuru", waypoints: ["Naivasha"] });
  assert.deepEqual(extract("Show me a route from Nairobi to Nakuru via Naivasha.", {}), { origin: "Nairobi", destination: "Nakuru", waypoints: ["Naivasha"] });
  assert.deepEqual(extract("Directions from Nairobi to Kisumu, stopping at Nakuru, and Kericho.", {}), { origin: "Nairobi", destination: "Kisumu", waypoints: ["Nakuru", "Kericho"] });
  assert.deepEqual(extract("Directions from Nairobi to Kisumu through Naivasha, Nakuru and Kericho", {}), { origin: "Nairobi", destination: "Kisumu", waypoints: ["Naivasha", "Nakuru", "Kericho"] });
});

test("a destination the model passed with the stops attached is split", () => {
  assert.deepEqual(extract("route please", { origin: "Nairobi", destination: "Nakuru, via Naivasha" }), { origin: "Nairobi", destination: "Nakuru", waypoints: ["Naivasha"] });
  assert.deepEqual(extract("route please", { origin: "Nairobi", destination: "Nakuru via Naivasha", waypoints: ["Gilgil"] }), { origin: "Nairobi", destination: "Nakuru", waypoints: ["Gilgil"] });
});

test("a route with no stops is unchanged", () => {
  assert.deepEqual(extract("Show me a route from Nairobi to Nakuru.", {}), { origin: "Nairobi", destination: "Nakuru", waypoints: [] });
  assert.deepEqual(extract("anything", { origin: "A", destination: "B" }), { origin: "A", destination: "B", waypoints: [] });
});

// Found live after #1138: "Give me directions from Nairobi to Kisumu, stopping at Nakuru and Kericho" was taken by the page's steps-between-two-places reader, which looked up "Kisumu, stopping at Nakuru and Kericho" as one place.
test("directions with stops are left to the map route, which takes the stops in order; directions between two places are still read out", () => {
  const navigation = require("../../public/kyro-navigation.js");
  for (const say of ["Give me directions from Nairobi to Kisumu, stopping at Nakuru and Kericho.", "Directions from Nairobi to Nakuru via Naivasha", "How do I get from Nairobi to Kisumu through Nakuru?"])
    assert.notEqual(navigation.parseCommand(say)?.type, "between", say);
  assert.deepEqual(navigation.parseCommand("Give me directions from Stockton to Sacramento."), { type: "between", from: "Stockton", to: "Sacramento", mode: "drive" });
  assert.deepEqual(navigation.parseCommand("What are the steps from Nairobi to Nakuru?"), { type: "between", from: "Nairobi", to: "Nakuru", mode: "drive" });
});

test("the route is said with its stops: on the page and in the voice tool's reply", () => {
  const app = fs.readFileSync(path.join(__dirname, "..", "..", "public", "app.js"), "utf8");
  const road = new vm.Script(`${slice(app, "function genesisRoadRoute(")}\ngenesisRoadRoute`).runInNewContext({});
  const geometry = [[-1.28, 36.81], [-0.78, 36.44], [-0.28, 36.07]];
  const withStops = JSON.parse(JSON.stringify(road({ origin: "Nairobi", destination: "Nakuru", waypoints: ["Naivasha", "Gilgil"], routeGeometry: geometry, distanceMeters: 158000, durationSeconds: 7440 })));
  assert.deepEqual(withStops.stops, ["Naivasha", "Gilgil"]);
  assert.equal(JSON.parse(JSON.stringify(road({ origin: "Nairobi", destination: "Nakuru", routeGeometry: geometry }))).stops.length, 0);
  assert.match(app, /road route from \$\{road\.origin\}\$\{road\.stops\?\.length \? ` via \$\{road\.stops\.join\(" and "\)\}` : ""\} to \$\{road\.destination\}/);
  assert.match(server, /From \$\{routeData\.originResolved \|\| routeArgs\.origin\}\$\{routeArgs\.waypoints\?\.length \? ` via \$\{routeArgs\.waypoints\.join\(" and "\)\}` : ""\} to /);
  assert.match(server, /\.\.\.\(routeArgs\.waypoints\?\.length \? \{ waypoints: routeArgs\.waypoints \} : \{\}\),\s+routeGeometry: routeData\.routeGeometry/);
});

test("each stop is marked on the map: the provider gives its point, the page reads it and draws a named dot", async () => {
  const mapsProvider = require("../../server/providers/googleMapsProvider.js");
  const coordinates = { nairobi: [36.82, -1.29], naivasha: [36.43, -0.72], gilgil: [36.32, -0.5], nakuru: [36.07, -0.3] };
  const fetchImpl = async url => {
    const text = String(url);
    if (/nominatim/.test(text)) {
      const [lon, lat] = coordinates[new URL(text).searchParams.get("q").toLowerCase()];
      return { ok: true, text: async () => JSON.stringify([{ lat: String(lat), lon: String(lon), display_name: "somewhere" }]) };
    }
    return { ok: true, text: async () => JSON.stringify({ code: "Ok", routes: [{ distance: 157600, duration: 7000, geometry: { coordinates: [[36.82, -1.29], [36.07, -0.3]] } }] }) };
  };
  const result = await mapsProvider.publicOsmRoute("Nairobi", "Nakuru", "https://example.test/link", { NEXUS_MAPS_FETCH_IMPL: fetchImpl }, ["Naivasha", "Gilgil"]);
  assert.deepEqual(result.body.data.waypointPoints, [{ name: "Naivasha", lat: -0.72, lng: 36.43 }, { name: "Gilgil", lat: -0.5, lng: 36.32 }]);
  const direct = await mapsProvider.publicOsmRoute("Nairobi", "Nakuru", "https://example.test/link", { NEXUS_MAPS_FETCH_IMPL: fetchImpl }, []);
  assert.deepEqual(direct.body.data.waypointPoints, []);

  const app = fs.readFileSync(path.join(__dirname, "..", "..", "public", "app.js"), "utf8");
  const road = new vm.Script(`${slice(app, "function genesisRoadRoute(")}\ngenesisRoadRoute`).runInNewContext({});
  const read = JSON.parse(JSON.stringify(road({ origin: "Nairobi", destination: "Nakuru", routeGeometry: [[-1.28, 36.81], [-0.3, 36.07]], waypointPoints: [{ name: "Naivasha", lat: -0.72, lng: 36.43 }, { name: "Bad", lat: "x", lng: 1 }, { name: "Off", lat: 95, lng: 1 }] })));
  assert.deepEqual(read.stopPoints, [{ name: "Naivasha", lat: -0.72, lng: 36.43 }], "only stops with a real point on the earth are marked");
  assert.deepEqual(JSON.parse(JSON.stringify(road({ origin: "A", destination: "B", routeGeometry: [[1, 1], [2, 2]] }))).stopPoints, []);
  assert.match(app, /road\.stopPoints\.forEach\(\(stop, index\) => \{[^]*?L\.marker\(\[stop\.lat, stop\.lng\], \{ icon: L\.divIcon\([^]*?escapeHtml\(label\)[^]*?bindPopup/);
  // the map is sized before it is fitted to the road
  assert.match(app, /setAttribute\("open", "true"\);\s+safeInvalidateLeafletMap\(userMap\);\s+userMap\.fitBounds\(road\.points/);
  assert.match(server, /\.\.\.\(routeData\.waypointPoints\?\.length \? \{ waypointPoints: routeData\.waypointPoints \} : \{\}\)/);
});
