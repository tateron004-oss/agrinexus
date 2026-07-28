"use strict";

const assert = require("node:assert/strict");
const { createOpenMapProvider, parseMapRequest } = require("../nexus-core/map-service");
const { resolveVisibleMap } = require("../browser/nexus-clean-entry");

async function verifyNewestMapRequestWins() {
  const elements = {
    "nexus-map-canvas": {},
    "nexus-map-summary": { textContent: "" },
    "nexus-map-link": {
      href: "",
      removeAttribute(name) {
        if (name === "href") this.href = "";
      }
    }
  };
  const renderedLabels = [];
  const map = {
    removeLayer() {},
    fitBounds() {},
    setView() { return this; },
    invalidateSize() {}
  };
  const leaflet = {
    map() { return map; },
    tileLayer() { return { addTo() { return this; } }; },
    marker(_point) {
      let label = "";
      return {
        bindPopup(value) { label = value; return this; },
        addTo() { renderedLabels.push(label); return this; },
        openPopup() {}
      };
    }
  };
  let finishChurchLookup;
  const fetchImpl = async (_url, options) => {
    const command = JSON.parse(options.body).command;
    if (/church/i.test(command)) {
      return new Promise((resolve) => {
        finishChurchLookup = () => resolve({
          ok: true,
          json: async () => ({
            type: "place",
            location: { label: "Kenya Church, India", lat: 19, lon: 72.8, boundingBox: [] }
          })
        });
      });
    }
    return {
      ok: true,
      json: async () => ({
        type: "place",
        location: { label: "Kenya", lat: 0.1, lon: 37.9, boundingBox: [-4.9, 5, 33.8, 41.9] }
      })
    };
  };
  const documentObject = { getElementById: (id) => elements[id] || null };
  const oldRequest = resolveVisibleMap({
    command: "Show Kenya Church",
    sessionToken: "test",
    documentObject,
    fetchImpl,
    leaflet
  });
  const kenyaRequest = resolveVisibleMap({
    command: "Show me a map of Kenya",
    sessionToken: "test",
    documentObject,
    fetchImpl,
    leaflet
  });
  await kenyaRequest;
  finishChurchLookup();
  await assert.rejects(oldRequest, (error) => error.code === "NEXUS_MAP_REQUEST_SUPERSEDED");
  assert.deepEqual(renderedLabels, ["Kenya"]);
  assert.match(elements["nexus-map-summary"].textContent, /Kenya/);
}

async function main() {
  assert.deepEqual(parseMapRequest("Nexus, show me a route from Nairobi, Kenya to Abuja, Nigeria"), {
    type: "route",
    origin: "Nairobi, Kenya",
    destination: "Abuja, Nigeria"
  });
  assert.deepEqual(parseMapRequest("Nexus, show me a map of Kenya"), { type: "place", place: "Kenya" });
  assert.deepEqual(parseMapRequest("Nexus, take me back to Kenya"), { type: "place", place: "Kenya" });

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
      return {
        ok: true,
        json: async () => [
          {
            display_name: "Kenya Church, India",
            lat: "19.0",
            lon: "72.8",
            boundingbox: [],
            addresstype: "place_of_worship",
            address: { country_code: "in" }
          },
          {
            display_name: "Kenya",
            lat: "0.1",
            lon: "37.9",
            boundingbox: ["-4.9", "5.0", "33.8", "41.9"],
            addresstype: "country",
            address: { country_code: "ke" }
          }
        ]
      };
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
  assert.match(requests.at(-1), /countrycodes=ke/);
  assert.match(requests.at(-1), /featuretype=country/);
  await verifyNewestMapRequestWins();
  console.log("Nexus visible map and route service: PASS");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
