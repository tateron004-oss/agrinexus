const test = require("node:test");
const assert = require("node:assert/strict");
const mapsProvider = require("../../server/providers/googleMapsProvider.js");

function withStubbedFetch(handler, fn) {
  const original = globalThis.fetch;
  globalThis.fetch = handler;
  return Promise.resolve(fn()).finally(() => {
    globalThis.fetch = original;
  });
}

test("route() with a real Google Maps API key returns durationSeconds and routeGeometry, not just the raw duration string", async () => {
  await withStubbedFetch(
    async url => {
      assert.match(String(url), /^https:\/\/routes\.googleapis\.com\//);
      return {
        ok: true,
        text: async () => JSON.stringify({
          routes: [{
            duration: "1234s",
            distanceMeters: 78234,
            description: "via I-5 N",
            polyline: { geoJsonLinestring: { coordinates: [[-121.29, 37.96], [-121.40, 38.30], [-121.49, 38.58]] } }
          }]
        })
      };
    },
    async () => {
      const result = await mapsProvider.route(
        { origin: "Stockton, CA", destination: "Sacramento, CA" },
        {
          NEXUS_MAPS_ENABLED: "true",
          GOOGLE_MAPS_API_KEY: "test-key",
          NEXUS_MAPS_FETCH_IMPL: async () => ({ ok: true, text: async () => JSON.stringify([]) })
        }
      );
      assert.equal(result.body.status, "completed");
      assert.equal(result.body.data.durationSeconds, 1234, "duration string '1234s' must be parsed into a number of seconds");
      assert.ok(Array.isArray(result.body.data.routeGeometry), "a real Google route must return a polyline, like the OSRM fallback does");
      assert.ok(result.body.data.routeGeometry.length > 1);
      assert.equal(result.body.data.distanceMeters, 78234);
    }
  );
});

test("route() with a real Google Maps API key sends intermediates for waypoints and returns them resolved", async () => {
  await withStubbedFetch(
    async (url, init) => {
      if (String(url).startsWith("https://routes.googleapis.com/")) {
        const body = JSON.parse(init.body);
        assert.deepEqual(body.intermediates, [{ address: "Elk Grove, CA" }, { address: "Galt, CA" }]);
        return { ok: true, text: async () => JSON.stringify({
          routes: [{ duration: "2000s", distanceMeters: 90000, polyline: { geoJsonLinestring: { coordinates: [[-121.29, 37.96], [-121.49, 38.58]] } } }]
        }) };
      }
      return { ok: true, text: async () => JSON.stringify([{ lat: "38.4", lon: "-121.4", display_name: "Waypoint" }]) };
    },
    async () => {
      const result = await mapsProvider.route(
        { origin: "Stockton, CA", destination: "Sacramento, CA", waypoints: ["Elk Grove, CA", "Galt, CA"] },
        { NEXUS_MAPS_ENABLED: "true", GOOGLE_MAPS_API_KEY: "test-key", NEXUS_MAPS_FETCH_IMPL: async () => ({ ok: true, text: async () => JSON.stringify([{ lat: "38.4", lon: "-121.4", display_name: "Waypoint" }]) }) }
      );
      assert.equal(result.body.status, "completed");
      assert.deepEqual(result.body.data.waypoints, ["Elk Grove, CA", "Galt, CA"]);
      assert.equal(result.body.data.waypointsResolved.length, 2);
      assert.match(result.body.message, /Multi-stop route/);
    }
  );
});

test("cleanWaypoints filters blanks and caps at 8 stops", () => {
  assert.deepEqual(mapsProvider.cleanWaypoints(["  A  ", "", "B", null, undefined, "C"]), ["A", "B", "C"]);
  assert.equal(mapsProvider.cleanWaypoints(Array.from({ length: 20 }, (_, index) => `stop-${index}`)).length, 8);
  assert.deepEqual(mapsProvider.cleanWaypoints(undefined), []);
});

test("publicOsmRoute() chains origin, waypoints, and destination into one OSRM coordinate path", async () => {
  const requestedUrls = [];
  const fetchImpl = async url => {
    requestedUrls.push(String(url));
    if (String(url).includes("nominatim")) {
      const query = new URL(url).searchParams.get("q");
      const coords = { "Stockton, CA": [37.96, -121.29], "Elk Grove, CA": [38.41, -121.37], "Sacramento, CA": [38.58, -121.49] }[query] || [0, 0];
      return { ok: true, text: async () => JSON.stringify([{ lat: String(coords[0]), lon: String(coords[1]), display_name: query }]) };
    }
    assert.match(url, /^https:\/\/router\.project-osrm\.org\/route\/v1\/driving\/-121\.29,37\.96;-121\.37,38\.41;-121\.49,38\.58\?/, "OSRM URL must chain all three stops in order");
    return { ok: true, text: async () => JSON.stringify({ routes: [{ distance: 90000, duration: 3600, geometry: { coordinates: [[-121.29, 37.96], [-121.49, 38.58]] } }] }) };
  };
  const result = await mapsProvider.publicOsmRoute("Stockton, CA", "Sacramento, CA", "https://maps.example/fallback", { NEXUS_MAPS_FETCH_IMPL: fetchImpl }, ["Elk Grove, CA"]);
  assert.equal(result.body.status, "completed");
  assert.equal(result.body.data.waypointsResolved.length, 1);
  assert.ok(requestedUrls.some(url => url.includes("router.project-osrm.org")));
});

test("route() handles a Google response with no polyline or unparseable duration without crashing", async () => {
  await withStubbedFetch(
    async () => ({ ok: true, text: async () => JSON.stringify({ routes: [{ distanceMeters: 100 }] }) }),
    async () => {
      const result = await mapsProvider.route(
        { origin: "Stockton, CA", destination: "Sacramento, CA" },
        { NEXUS_MAPS_ENABLED: "true", GOOGLE_MAPS_API_KEY: "test-key" }
      );
      assert.equal(result.body.status, "completed");
      assert.equal(result.body.data.durationSeconds, null);
      assert.equal(result.body.data.routeGeometry, null);
    }
  );
});
