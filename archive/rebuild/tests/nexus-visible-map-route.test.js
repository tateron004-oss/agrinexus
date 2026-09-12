"use strict";

const assert = require("node:assert/strict");
const { createOpenMapProvider, extractPlaceIntent, parseMapRequest } = require("../nexus-core/map-service");
const {
  resolveVisibleMap,
  resetVisibleMapStateForTest,
  stabilizeVisibleMapLayout
} = require("../browser/nexus-clean-entry");

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

async function verifyCityMapDoesNotSelectBusiness() {
  resetVisibleMapStateForTest();
  const requests = [];
  const provider = createOpenMapProvider({
    fetchImpl: async (url) => {
      requests.push(url);
      return {
        ok: true,
        json: async () => [
          {
            display_name: "Jumia Pickup Station, Mombasa, Kenya",
            lat: "-4.0437",
            lon: "39.6684",
            boundingbox: ["-4.044", "-4.043", "39.668", "39.669"],
            addresstype: "commercial",
            category: "shop",
            address: { country_code: "ke" }
          },
          {
            display_name: "Mombasa, Mombasa County, Kenya",
            lat: "-4.0505",
            lon: "39.6672",
            boundingbox: ["-4.135", "-3.930", "39.550", "39.760"],
            addresstype: "city",
            category: "boundary",
            address: { country_code: "ke" }
          }
        ]
      };
    }
  });
  const result = await provider("Show me a map of Mombasa, Kenya");
  assert.equal(result.location.label, "Mombasa, Mombasa County, Kenya");
  assert.equal(result.location.administrative, true);
  assert.equal(result.location.placeType, "city");
  assert.match(requests[0], /countrycodes=ke/);
  assert.doesNotMatch(requests[0], /featuretype=country/);

  const elements = {
    "nexus-map-canvas": {},
    "nexus-map-summary": { textContent: "" },
    "nexus-map-link": { href: "", removeAttribute() { this.href = ""; } }
  };
  let markerCount = 0;
  let fittedBounds = null;
  const map = {
    removeLayer() {},
    fitBounds(bounds, options) { fittedBounds = { bounds, options }; },
    setView() { return this; },
    invalidateSize() {}
  };
  const leaflet = {
    map() { return map; },
    tileLayer() { return { addTo() { return this; } }; },
    marker() {
      markerCount += 1;
      return { bindPopup() { return this; }, addTo() { return this; }, openPopup() {} };
    }
  };
  await resolveVisibleMap({
    command: "Show me a map of Mombasa, Kenya",
    sessionToken: "test",
    documentObject: { getElementById: (id) => elements[id] || null },
    fetchImpl: async () => ({ ok: true, json: async () => result }),
    leaflet
  });
  assert.equal(markerCount, 0, "A city request must not create or open a nearby business marker.");
  assert.deepEqual(fittedBounds.bounds, [[-4.135, 39.55], [-3.93, 39.76]]);
  assert.equal(fittedBounds.options.maxZoom, 12);
  assert.match(elements["nexus-map-summary"].textContent, /city-area map of Mombasa/i);
}

async function main() {
  assert.deepEqual(parseMapRequest("Nexus, show me a route from Nairobi, Kenya to Abuja, Nigeria"), {
    type: "route",
    origin: "Nairobi, Kenya",
    destination: "Abuja, Nigeria"
  });
  assert.deepEqual(parseMapRequest("Nexus, show me a map of Kenya"), { type: "place", place: "Kenya" });
  assert.deepEqual(parseMapRequest("Nexus, open up a map of Kenya"), { type: "place", place: "Kenya" });
  assert.deepEqual(parseMapRequest("Nexus, open the map to Mombasa"), { type: "place", place: "Mombasa" });
  assert.deepEqual(parseMapRequest("Nexus, open a map for Kenya"), { type: "place", place: "Kenya" });
  assert.deepEqual(parseMapRequest("Nexus, open the map to see all of Kenya"), {
    type: "place",
    place: "Kenya"
  });
  assert.deepEqual(parseMapRequest("Nexus, show the whole of Nigeria on the map"), {
    type: "place",
    place: "Nigeria"
  });
  assert.deepEqual(parseMapRequest("Nexus, zoom out to view all of Ghana"), {
    type: "place",
    place: "Ghana"
  });
  assert.deepEqual(parseMapRequest("Nexus, pull up a map of Mombasa, Kenya"), {
    type: "place",
    place: "Mombasa, Kenya"
  });
  assert.deepEqual(parseMapRequest("Nexus, take me back to Kenya"), { type: "place", place: "Kenya" });
  assert.deepEqual(parseMapRequest("Nexus, reset the map and show Mombasa, Kenya"), {
    type: "place",
    place: "Mombasa, Kenya"
  });
  const paraphrases = [
    "Show me Mombasa.",
    "Open up a map of Mombasa, Kenya.",
    "Pull up a map of Mombasa, Kenya.",
    "Take me to Mombasa, Kenya.",
    "Open Mombasa, Kenya on the map.",
    "I want to see Mombasa, Kenya.",
    "Can you display the city of Mombasa, Kenya?",
    "Please find Mombasa, Kenya.",
    "Nexus, bring up the map for Mombasa, Kenya.",
    "Zoom in to Mombasa, Kenya.",
    "Reset the map to Mombasa, Kenya."
  ];
  paraphrases.forEach((command) => {
    assert.equal(
      parseMapRequest(command).place,
      command === "Show me Mombasa." ? "Mombasa" : "Mombasa, Kenya",
      `Natural map command must extract only the location: ${command}`
    );
  });
  assert.deepEqual(extractPlaceIntent("Open Mombasa, Kenya on the map"), {
    action: "show-place",
    place: "Mombasa, Kenya"
  });

  let invalidations = 0;
  let animationFrameScheduled = false;
  let delayedInvalidationScheduled = false;
  stabilizeVisibleMapLayout(
    { invalidateSize() { invalidations += 1; } },
    {
      requestAnimationFrame(callback) {
        animationFrameScheduled = true;
        callback();
      },
      setTimeout(callback, delay) {
        delayedInvalidationScheduled = delay === 250;
        callback();
      }
    }
  );
  assert.equal(invalidations, 3, "Map layout must be recalculated now, after paint, and after workspace animation.");
  assert.equal(animationFrameScheduled, true);
  assert.equal(delayedInvalidationScheduled, true);

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
  await verifyCityMapDoesNotSelectBusiness();
  console.log("Nexus visible map and route service: PASS");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
