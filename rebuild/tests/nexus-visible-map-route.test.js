"use strict";

const assert = require("node:assert/strict");
const { createOpenMapProvider, parseMapRequest } = require("../nexus-core/map-service");

async function main() {
  assert.deepEqual(parseMapRequest("Nexus, show me a route from Nairobi, Kenya to Abuja, Nigeria"), {
    type: "route",
    origin: "Nairobi, Kenya",
    destination: "Abuja, Nigeria"
  });
  assert.deepEqual(parseMapRequest("Nexus, show me a map of Kenya"), { type: "place", place: "Kenya" });

  const requests = [];
  const provider = createOpenMapProvider({
    fetchImpl: async (url) => {
      requests.push(url);
      if (url.includes("Nairobi")) {
        return { ok: true, json: async () => [{ display_name: "Nairobi, Kenya", lat: "-1.2864", lon: "36.8172", boundingbox: [] }] };
      }
      if (url.includes("Abuja")) {
        return { ok: true, json: async () => [{ display_name: "Abuja, Nigeria", lat: "9.0765", lon: "7.3986", boundingbox: [] }] };
      }
      if (url.includes("route/v1")) {
        return {
          ok: true,
          json: async () => ({
            code: "Ok",
            routes: [{
              distance: 5080000,
              duration: 250000,
              geometry: { type: "LineString", coordinates: [[36.8172, -1.2864], [7.3986, 9.0765]] }
            }]
          })
        };
      }
      return { ok: true, json: async () => [{ display_name: "Kenya", lat: "0.1", lon: "37.9", boundingbox: ["-4.9", "5.0", "33.8", "41.9"] }] };
    }
  });

  const route = await provider("Show route from Nairobi, Kenya to Abuja, Nigeria");
  assert.equal(route.status, "visible-route-ready");
  assert.equal(route.type, "route");
  assert.equal(route.geometry.coordinates.length, 2);
  assert.match(requests.at(-1), /router\.project-osrm\.org\/route\/v1\/driving/);

  const place = await provider("Show me a map of Kenya");
  assert.equal(place.status, "visible-map-ready");
  assert.equal(place.location.label, "Kenya");
  console.log("Nexus visible map and route service: PASS");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
