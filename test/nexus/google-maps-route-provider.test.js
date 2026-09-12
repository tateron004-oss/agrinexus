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
