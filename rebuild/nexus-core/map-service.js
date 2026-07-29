"use strict";

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

const MAP_ACTION_PATTERN = [
  "show",
  "display",
  "open",
  "view",
  "see",
  "find",
  "locate",
  "pull\\s+up",
  "bring\\s+up",
  "take\\s+me\\s+to",
  "take\\s+me\\s+back\\s+to",
  "go\\s+back\\s+to",
  "go\\s+to",
  "move\\s+to",
  "zoom\\s+(?:in\\s+)?to"
].join("|");

function cleanLocationCandidate(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .replace(/^[\s,;:.-]+|[\s,;:?.!-]+$/g, "")
    .trim();
}

function extractPlaceIntent(command) {
  let candidate = String(command || "").replace(/\s+/g, " ").trim();
  candidate = candidate
    .replace(/^(?:hey\s+|hello\s+)?nexus\b[\s,;:.-]*/i, "")
    .replace(/^(?:please|could\s+you|can\s+you|would\s+you|will\s+you)\b[\s,;:.-]*/i, "")
    .replace(/^(?:i(?:'d|\s+would)?\s+like\s+to|i\s+want\s+to)\s+/i, "")
    .replace(/^(?:reset|refresh|clear)\s+(?:the\s+)?maps?(?:\s+and\s+|\s+to\s+)?/i, "")
    .trim();

  const actionPrefix = new RegExp(
    `^(?:${MAP_ACTION_PATTERN})\\s+(?:me\\s+)?(?:(?:a|the)\\s+)?(?:city\\s+of\\s+)?(?:maps?\\s+(?:of|for)\\s+)?`,
    "i"
  );
  candidate = candidate.replace(actionPrefix, "");
  candidate = candidate.replace(/[\s,;:?.!-]+$/g, "");
  candidate = candidate
    .replace(/^(?:me\s+)?(?:a|the)\s+maps?\s+(?:of|for)\s+/i, "")
    .replace(/\s+(?:on|in)\s+(?:the\s+)?maps?$/i, "")
    .replace(/\s+(?:map|maps)$/i, "")
    .replace(/\s+(?:please)$/i, "");

  const place = cleanLocationCandidate(candidate);
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
  const text = String(command || "").replace(/\s+/g, " ").trim();
  const route = /\b(?:route|directions|navigate|travel)\b.*?\bfrom\s+(.+?)\s+\bto\s+(.+?)(?:[?.!]|$)/i.exec(text)
    || /\bfrom\s+(.+?)\s+\bto\s+(.+?)(?:[?.!]|$)/i.exec(text);
  if (route) {
    return Object.freeze({ type: "route", origin: route[1].trim(), destination: route[2].trim() });
  }
  const intent = extractPlaceIntent(text);
  return Object.freeze({ type: "place", place: intent.place });
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
