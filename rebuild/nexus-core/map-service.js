"use strict";

function parseMapRequest(command) {
  const text = String(command || "").replace(/\s+/g, " ").trim();
  const route = /\b(?:route|directions|navigate|travel)\b.*?\bfrom\s+(.+?)\s+\bto\s+(.+?)(?:[?.!]|$)/i.exec(text)
    || /\bfrom\s+(.+?)\s+\bto\s+(.+?)(?:[?.!]|$)/i.exec(text);
  if (route) {
    return Object.freeze({ type: "route", origin: route[1].trim(), destination: route[2].trim() });
  }
  const place = text
    .replace(/\b(nexus|please|show|open|display|me|a|the|map|maps|of)\b/gi, " ")
    .replace(/\s+/g, " ")
    .replace(/^[\s,;:.-]+|[\s,;:.-]+$/g, "")
    .trim();
  return Object.freeze({ type: "place", place: place || text });
}

function createOpenMapProvider({ fetchImpl = fetch } = {}) {
  async function geocode(query) {
    const response = await fetchImpl(
      `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q=${encodeURIComponent(query)}`,
      { headers: { "user-agent": "Nexus-Genesis/1.0 (map-support)" } }
    );
    if (!response.ok) throw new Error(`Map location lookup failed (${response.status}).`);
    const results = await response.json();
    if (!Array.isArray(results) || !results[0]) throw new Error(`Nexus could not locate ${query}.`);
    return Object.freeze({
      label: results[0].display_name || query,
      lat: Number(results[0].lat),
      lon: Number(results[0].lon),
      boundingBox: (results[0].boundingbox || []).map(Number)
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
