"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const osmPlacesProvider = require("../../server/providers/osmPlacesProvider");
const pharmacyBridgeProvider = require("../../server/providers/pharmacyBridgeProvider");
const mobileClinicBridgeProvider = require("../../server/providers/mobileClinicBridgeProvider");

function fakeNominatimThenOverpass({ geocode, overpassElements }) {
  let call = 0;
  return async (url) => {
    call += 1;
    if (call === 1) {
      // geocodeLocation() calls Nominatim first.
      assert.match(String(url), /nominatim\.openstreetmap\.org/);
      return { ok: true, text: async () => JSON.stringify([geocode]) };
    }
    assert.match(String(url), /overpass-api\.de/);
    return { ok: true, text: async () => JSON.stringify({ elements: overpassElements }) };
  };
}

test("findNearbyPlaces geocodes then queries Overpass, sorting real results by distance", async () => {
  const fetchImpl = fakeNominatimThenOverpass({
    geocode: { lat: "0.1", lon: "35.0", display_name: "Kisumu, Kenya" },
    overpassElements: [
      { tags: { name: "Far Pharmacy", "addr:street": "Main St" }, lat: 0.2, lon: 35.2 },
      { tags: { name: "Near Pharmacy" }, lat: 0.101, lon: 35.001 },
      { tags: {}, center: { lat: 0.15, lon: 35.05 } } // a "way" result with no name -- must not crash
    ]
  });
  const { origin, places } = await osmPlacesProvider.findNearbyPlaces({ locationText: "Kisumu", osmFilters: ['"amenity"="pharmacy"'], fetchImpl });
  assert.equal(origin.label, "Kisumu, Kenya");
  assert.equal(places.length, 3);
  // Near Pharmacy (0.101,35.001) < the unnamed way's center (0.15,35.05) <
  // Far Pharmacy (0.2,35.2), all measured from origin (0.1,35.0).
  assert.deepEqual(places.map(place => place.name), ["Near Pharmacy", "Unnamed location", "Far Pharmacy"]);
  assert.ok(places[0].distanceMeters < places[1].distanceMeters);
  assert.ok(places[1].distanceMeters < places[2].distanceMeters);
  assert.equal(places[2].address, "Main St");
});

test("findNearbyPlaces drops elements with no resolvable coordinates instead of crashing", async () => {
  const fetchImpl = fakeNominatimThenOverpass({
    geocode: { lat: "0.1", lon: "35.0", display_name: "Kisumu" },
    overpassElements: [{ tags: { name: "No coords" } }]
  });
  const { places } = await osmPlacesProvider.findNearbyPlaces({ locationText: "Kisumu", osmFilters: ['"amenity"="pharmacy"'], fetchImpl });
  assert.deepEqual(places, []);
});

test("findNearbyPlaces throws a clear error when geocoding finds nothing (never fabricates a location)", async () => {
  const fetchImpl = async () => ({ ok: true, text: async () => JSON.stringify([]) });
  await assert.rejects(() => osmPlacesProvider.findNearbyPlaces({ locationText: "Nowhereville", osmFilters: ['"amenity"="pharmacy"'], fetchImpl }),
    /location-not-found/);
});

test("pharmacy search returns real OpenStreetMap results when a location is given and the live lookup succeeds", async () => {
  const fetchImpl = fakeNominatimThenOverpass({
    geocode: { lat: "0.1", lon: "35.0", display_name: "Kisumu, Kenya" },
    overpassElements: [{ tags: { name: "Real Pharmacy", phone: "+254700000000" }, lat: 0.1001, lon: 35.0001 }]
  });
  const result = await pharmacyBridgeProvider.search({ location: "Kisumu" }, { NEXUS_MAPS_FETCH_IMPL: fetchImpl });
  assert.equal(result.body.status, "completed");
  assert.equal(result.body.data.cards.length, 1);
  assert.equal(result.body.data.cards[0].name, "Real Pharmacy");
  assert.equal(result.body.data.cards[0].source, "OpenStreetMap (live)");
  assert.match(result.body.message, /Found 1 real pharmacy location/);
});

test("pharmacy search falls back to a real, relevant local catalog match when the live lookup fails", async () => {
  const fetchImpl = async () => { throw new Error("network unreachable"); };
  const result = await pharmacyBridgeProvider.search({ location: "Sacramento" }, { NEXUS_MAPS_FETCH_IMPL: fetchImpl });
  assert.equal(result.body.status, "completed");
  assert.ok(result.body.data.cards.length > 0);
  assert.equal(result.body.data.cards[0].source, "Nexus local pharmacy starter catalog");
});

test("pharmacy search falls back honestly to zero results when the live lookup fails and no local catalog entry matches either", async () => {
  const fetchImpl = async () => { throw new Error("network unreachable"); };
  const result = await pharmacyBridgeProvider.search({ location: "Somewhere Unrelated" }, { NEXUS_MAPS_FETCH_IMPL: fetchImpl });
  assert.equal(result.body.status, "completed");
  assert.equal(result.body.data.cards.length, 0);
});

test("pharmacy search falls back to the local catalog when no location is given at all", async () => {
  const result = await pharmacyBridgeProvider.search({ q: "chronic care" }, {});
  assert.equal(result.body.data.cards[0].source, "Nexus local pharmacy starter catalog");
});

test("pharmacy search stays local-only when explicitly disabled via env, even with a location given", async () => {
  let fetchCalled = false;
  const fetchImpl = async () => { fetchCalled = true; return { ok: true, text: async () => "[]" }; };
  await pharmacyBridgeProvider.search({ location: "Kisumu" }, { NEXUS_PHARMACY_OSM_SEARCH_ENABLED: "false", NEXUS_MAPS_FETCH_IMPL: fetchImpl });
  assert.equal(fetchCalled, false);
});

test("mobile clinic search returns real OpenStreetMap results and falls back the same way pharmacy does", async () => {
  const fetchImpl = fakeNominatimThenOverpass({
    geocode: { lat: "-1.3", lon: "36.8", display_name: "Nairobi, Kenya" },
    overpassElements: [{ tags: { name: "Real Clinic" }, lat: -1.301, lon: 36.801 }]
  });
  const live = await mobileClinicBridgeProvider.search({ location: "Nairobi" }, { NEXUS_MAPS_FETCH_IMPL: fetchImpl });
  assert.equal(live.body.data.cards[0].source, "OpenStreetMap (live)");
  assert.equal(live.body.data.cards[0].name, "Real Clinic");

  const fallback = await mobileClinicBridgeProvider.search({ location: "Kisumu" }, { NEXUS_MAPS_FETCH_IMPL: async () => { throw new Error("down"); } });
  assert.equal(fallback.body.data.cards[0].source, "Nexus local mobile clinic starter catalog");
});
