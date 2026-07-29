"use strict";

const COUNTRY_CODES = Object.freeze({
  india: "in",
  kenya: "ke",
  nigeria: "ng"
});

function parseMapRequest(command) {
  const text = String(command || "").replace(/\s+/g, " ").trim();
  const route = /\b(?:route|directions|navigate|travel)\b.*?\bfrom\s+(.+?)\s+\bto\s+(.+?)(?:[?.!]|$)/i.exec(text)
    || /\bfrom\s+(.+?)\s+\bto\s+(.+?)(?:[?.!]|$)/i.exec(text);
  if (route) {
    return Object.freeze({ type: "route", origin: route[1].trim(), destination: route[2].trim() });
  }
  const place = text
    .replace(/\b(?:reset|refresh|clear)\s+(?:the\s+)?maps?(?:\s+and)?\b/gi, " ")
    .replace(/\b(?:go|get|take|bring|move|zoom)\s+(?:me\s+)?back\s+to\b/gi, " ")
    .replace(/\b(nexus|please|show|open|display|me|a|the|map|maps|of)\b/gi, " ")
    .replace(/\s+/g, " ")
    .replace(/^[\s,;:.-]+|[\s,;:.-]+$/g, "")
    .trim();
  return Object.freeze({ type: "place", place: place || text });
}

function createOpenMapProvider({ fetchImpl = fetch } = {}) {
  async function geocode(query) {
    const normalizedQuery = String(query || "").trim();
    const countryCode = COUNTRY_CODES[normalizedQuery.toLowerCase()] || null;
    const parameters = new URLSearchParams({
      format: "jsonv2",
      limit: countryCode ? "5" : "3",
      addressdetails: "1",
      q: normalizedQuery
    });
    if (countryCode) {
      parameters.set("countrycodes", countryCode);
      parameters.set("featuretype", "country");
    }
    const response = await fetchImpl(
      `https://nominatim.openstreetmap.org/search?${parameters.toString()}`,
      { headers: { "user-agent": "Nexus-Genesis/1.0 (map-support)" } }
    );
    if (!response.ok) throw new Error(`Map location lookup failed (${response.status}).`);
    const results = await response.json();
    const selected = Array.isArray(results)
      ? results.find((result) => {
        if (!countryCode) return true;
        const resultCountryCode = String(result.address?.country_code || "").toLowerCase();
        return resultCountryCode === countryCode
          && (result.addresstype === "country" || result.type === "administrative");
      })
      : null;
    if (!selected) throw new Error(`Nexus could not locate ${normalizedQuery}.`);
    return Object.freeze({
      label: selected.display_name || normalizedQuery,
      lat: Number(selected.lat),
      lon: Number(selected.lon),
      boundingBox: (selected.boundingbox || []).map(Number)
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

module.exports = { createOpenMapProvider, parseMapRequest };
