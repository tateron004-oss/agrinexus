const { clean, safeJson } = require("./providerUtils");
const { geocodeLocation, mapsFetch } = require("./googleMapsProvider");

// Real, keyless place lookup for pharmacies and clinics, matching the same
// zero-config-real pattern nexus/maps/executor.js and the weather provider
// already use: OpenStreetMap's Nominatim (geocoding) and Overpass API
// (nearby-amenity search), no API key required. Before this, both
// pharmacyBridgeProvider.js and mobileClinicBridgeProvider.js only ever
// searched a hardcoded 3-4 entry local catalog regardless of what location
// was given -- confirmed decorative by the production capability audit.
const OVERPASS_URL = "https://overpass-api.de/api/interpreter";
const USER_AGENT = "AgriNexus/1.0 place-lookup-readonly";

async function overpassQuery(fetchImpl, query) {
  const response = await fetchImpl(OVERPASS_URL, {
    method: "POST",
    headers: { "content-type": "text/plain", "user-agent": USER_AGENT },
    body: query,
    signal: AbortSignal.timeout(9000)
  });
  const payload = await safeJson(response);
  if (!response.ok) throw new Error(payload.error || payload.message || response.statusText || `http-${response.status}`);
  return payload;
}

function placeName(tags, fallback) {
  return clean(tags?.name || tags?.["brand"] || fallback);
}

function placeAddress(tags) {
  const parts = [tags?.["addr:housenumber"], tags?.["addr:street"], tags?.["addr:city"], tags?.["addr:state"]].filter(Boolean);
  return clean(parts.join(" ")) || "Address not listed in OpenStreetMap";
}

function haversineMeters(lat1, lon1, lat2, lon2) {
  const toRad = value => (value * Math.PI) / 180;
  const earthRadiusM = 6371000;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return Math.round(earthRadiusM * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

// osmFilters: an array of Overpass tag-match strings, e.g. ['"amenity"="pharmacy"'].
async function findNearbyPlaces({ locationText, osmFilters, radiusMeters = 8000, limit = 8, fetchImpl, env = process.env }) {
  const fetcher = fetchImpl || mapsFetch(env);
  if (typeof fetcher !== "function") throw new Error("no-fetch-available");
  const origin = await geocodeLocation(locationText, fetcher);
  const clauses = osmFilters.flatMap(filter => [
    `node[${filter}](around:${radiusMeters},${origin.lat},${origin.lon});`,
    `way[${filter}](around:${radiusMeters},${origin.lat},${origin.lon});`
  ]).join("\n  ");
  const query = `[out:json][timeout:8];\n(\n  ${clauses}\n);\nout center ${Math.min(Math.max(limit * 3, 10), 60)};`;
  const payload = await overpassQuery(fetcher, query);
  const elements = Array.isArray(payload.elements) ? payload.elements : [];
  const places = elements.map(element => {
    const lat = element.lat ?? element.center?.lat;
    const lon = element.lon ?? element.center?.lon;
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
    return {
      name: placeName(element.tags, "Unnamed location"),
      address: placeAddress(element.tags),
      lat, lon,
      distanceMeters: haversineMeters(origin.lat, origin.lon, lat, lon),
      phone: clean(element.tags?.phone || element.tags?.["contact:phone"] || ""),
      openingHours: clean(element.tags?.opening_hours || "")
    };
  }).filter(Boolean).sort((a, b) => a.distanceMeters - b.distanceMeters).slice(0, limit);
  return { origin, places };
}

module.exports = { findNearbyPlaces, OVERPASS_URL };
