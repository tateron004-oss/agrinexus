"use strict";

const { extractIntentAndParameters, extractMapParameters } = require("./intent-parameter-extractor");

const COUNTRY_CODES = Object.freeze({
  india: "in",
  kenya: "ke",
  nigeria: "ng"
});

const ADMINISTRATIVE_PLACE_TYPES = new Set([
  "administrative",
  "city",
  "county",
  "municipality",
  "state",
  "town",
  "village"
]);

function cleanLocationCandidate(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .replace(/^[\s,;:.-]+|[\s,;:?.!-]+$/g, "")
    .trim();
}

function extractPlaceIntent(command) {
  const resolution = extractIntentAndParameters(command);
  const place = resolution.workflow === "maps"
    ? resolution.parameters.place
    : extractMapParameters(resolution.utterance).place;
  return Object.freeze({
    action: "show-place",
    place: place || cleanLocationCandidate(command)
  });
}

function countryCodeFromQuery(query) {
  const normalized = String(query || "").toLowerCase();
  const country = Object.keys(COUNTRY_CODES).find((name) => new RegExp(`\\b${name}\\b`, "i").test(normalized));
  return country ? COUNTRY_CODES[country] : null;
}

function administrativePlaceScore(result, countryCode) {
  const address = result && result.address || {};
  const resultCountryCode = String(address.country_code || "").toLowerCase();
  if (countryCode && resultCountryCode && resultCountryCode !== countryCode) return -1000;
  const type = String(result && (result.addresstype || result.type) || "").toLowerCase();
  const category = String(result && result.category || "").toLowerCase();
  let score = countryCode && resultCountryCode === countryCode ? 100 : 0;
  if (ADMINISTRATIVE_PLACE_TYPES.has(type)) score += 80;
  if (category === "boundary" || category === "place") score += 40;
  if (Array.isArray(result && result.boundingbox) && result.boundingbox.length === 4) score += 20;
  if (type === "commercial" || category === "shop" || category === "amenity") score -= 200;
  return score;
}

function parseMapRequest(command) {
  if (command && typeof command === "object" && command.action) {
    return command.action === "route"
      ? Object.freeze({ type: "route", origin: command.origin, destination: command.destination })
      : Object.freeze({ type: "place", place: command.place });
  }
  const resolution = extractIntentAndParameters(command);
  const parameters = resolution.workflow === "maps"
    ? resolution.parameters
    : extractMapParameters(resolution.utterance);
  return parameters.action === "route"
    ? Object.freeze({ type: "route", origin: parameters.origin, destination: parameters.destination })
    : Object.freeze({ type: "place", place: parameters.place });
}

function createOpenMapProvider({ fetchImpl = fetch } = {}) {
  async function geocode(query) {
    const normalizedQuery = String(query || "").trim();
    const exactCountryCode = COUNTRY_CODES[normalizedQuery.toLowerCase()] || null;
    const countryCode = countryCodeFromQuery(normalizedQuery);
    const parameters = new URLSearchParams({
      format: "jsonv2",
      limit: countryCode ? "10" : "5",
      addressdetails: "1",
      q: normalizedQuery
    });
    if (countryCode) {
      parameters.set("countrycodes", countryCode);
      if (exactCountryCode) parameters.set("featuretype", "country");
    }
    const response = await fetchImpl(
      `https://nominatim.openstreetmap.org/search?${parameters.toString()}`,
      { headers: { "user-agent": "Nexus-Genesis/1.0 (map-support)" } }
    );
    if (!response.ok) throw new Error(`Map location lookup failed (${response.status}).`);
    const results = await response.json();
    const selected = Array.isArray(results)
      ? [...results].sort((left, right) =>
        administrativePlaceScore(right, countryCode) - administrativePlaceScore(left, countryCode)
      )[0]
      : null;
    if (!selected) throw new Error(`Nexus could not locate ${normalizedQuery}.`);
    const placeType = String(selected.addresstype || selected.type || "").toLowerCase();
    return Object.freeze({
      label: selected.display_name || normalizedQuery,
      lat: Number(selected.lat),
      lon: Number(selected.lon),
      boundingBox: (selected.boundingbox || []).map(Number),
      placeType,
      administrative: ADMINISTRATIVE_PLACE_TYPES.has(placeType)
        || ["boundary", "place"].includes(String(selected.category || "").toLowerCase())
    });
  }

  return async function resolve(command) {
    const request = parseMapRequest(command);
    if (request.type === "place") {
      const location = await geocode(request.place);
      return Object.freeze({ status: "visible-map-ready", type: "place", location });
    }
    const [origin, destination] = await Promise.all([
      geocode(request.origin),
      geocode(request.destination)
    ]);
    const coordinates = `${origin.lon},${origin.lat};${destination.lon},${destination.lat}`;
    const response = await fetchImpl(
      `https://router.project-osrm.org/route/v1/driving/${coordinates}?overview=full&geometries=geojson&steps=true`
    );
    if (!response.ok) throw new Error(`Map route lookup failed (${response.status}).`);
    const result = await response.json();
    const route = result && result.code === "Ok" && result.routes && result.routes[0];
    if (!route || !route.geometry || !Array.isArray(route.geometry.coordinates)) {
      throw new Error(`Nexus could not plot a driving route from ${request.origin} to ${request.destination}.`);
    }
    return Object.freeze({
      status: "visible-route-ready",
      type: "route",
      origin,
      destination,
      distanceMeters: route.distance,
      durationSeconds: route.duration,
      geometry: route.geometry
    });
  };
}

module.exports = { createOpenMapProvider, extractPlaceIntent, parseMapRequest };
