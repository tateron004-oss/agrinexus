const { clean, safeJson } = require("./providerUtils");
const { mapsFetch } = require("./googleMapsProvider");

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

const NOMINATIM_SEARCH_URL = "https://nominatim.openstreetmap.org/search";

// Overpass is a shared public service: measured 2026-09-19 it answered in 4-9s
// when it answered at all, rate-limited (429) and timed out intermittently, so
// a clinic/pharmacy search silently fell back to the empty local catalog
// ("Loaded 0 local ... option(s)") for a city that has dozens. Nominatim, which
// this provider already depends on for geocoding, answered the same bounded
// query in under a second. Used only when the caller names a fallbackTerm and
// Overpass failed or found nothing; results are the same real OpenStreetMap data.
// Found live (follow-up sweep, same shape as nexus/navigation/service.js's already-fixed clampLat/
// clampLng): unclamped, this could send a latitude past +/-90 near a pole or a longitude past +/-180
// near the antimeridian -- and unlike navigation/service.js (which never sets bounded=1, so an
// out-of-range viewbox there only degrades ranking), THIS provider sets bounded=1, making it a hard
// filter that can zero out real nearby pharmacy/clinic results for a health-related feature.
const clampLat = value => Math.max(-90, Math.min(90, value));
const clampLng = value => Math.max(-180, Math.min(180, value));

async function nominatimPlaces({ origin, term, limit, radiusMeters, fetcher }) {
  const latDelta = radiusMeters / 111000;
  const lonDelta = radiusMeters / (111000 * Math.max(Math.cos((origin.lat * Math.PI) / 180), 0.1));
  const url = new URL(NOMINATIM_SEARCH_URL);
  url.searchParams.set("q", term);
  url.searchParams.set("format", "jsonv2");
  url.searchParams.set("limit", String(Math.min(Math.max(limit * 2, 10), 40)));
  url.searchParams.set("addressdetails", "1");
  url.searchParams.set("extratags", "1");
  url.searchParams.set("bounded", "1");
  url.searchParams.set("viewbox", [clampLng(origin.lon - lonDelta), clampLat(origin.lat + latDelta), clampLng(origin.lon + lonDelta), clampLat(origin.lat - latDelta)].join(","));
  const response = await fetcher(url, { method: "GET", headers: { accept: "application/json", "user-agent": USER_AGENT }, signal: AbortSignal.timeout(9000) });
  const payload = await safeJson(response);
  if (!response.ok || !Array.isArray(payload)) throw new Error("nominatim-unavailable");
  return payload.map(item => {
    const lat = Number(item.lat); const lon = Number(item.lon);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
    const address = item.address || {};
    const street = clean([address.house_number, address.road, address.suburb || address.city || address.town].filter(Boolean).join(" "));
    return {
      name: clean(item.name || String(item.display_name || "").split(",")[0]) || "Unnamed location",
      address: street || "Address not listed in OpenStreetMap",
      lat, lon,
      distanceMeters: haversineMeters(origin.lat, origin.lon, lat, lon),
      phone: clean(item.extratags?.phone || item.extratags?.["contact:phone"] || ""),
      openingHours: clean(item.extratags?.opening_hours || "")
    };
  }).filter(Boolean).sort((a, b) => a.distanceMeters - b.distanceMeters).slice(0, limit);
}

// Geocodes a named place with Nominatim (the same keyless source as before), also returning the country it is in. countryCode (an ISO code such as "ke") prefers that
// country first -- "near Kisumu" for a person in Kenya -- and only then looks anywhere, so a place that exists only elsewhere is still found (and the caller says which country).
async function geocodePlace(locationText, fetcher, countryCode = "") {
  const lookup = async code => {
    const url = new URL(NOMINATIM_SEARCH_URL);
    url.searchParams.set("q", locationText);
    url.searchParams.set("format", "jsonv2");
    url.searchParams.set("limit", "1");
    url.searchParams.set("addressdetails", "1");
    if (code) url.searchParams.set("countrycodes", code);
    const response = await fetcher(url, { method: "GET", headers: { accept: "application/json", "user-agent": USER_AGENT }, signal: AbortSignal.timeout(9000) });
    const payload = await safeJson(response);
    if (!response.ok) throw new Error(payload?.error?.message || payload?.message || response.statusText || `http-${response.status}`);
    const match = Array.isArray(payload) ? payload[0] : null;
    return match && match.lat && match.lon ? match : null;
  };
  let match = null;
  if (countryCode) { try { match = await lookup(countryCode); } catch { /* look anywhere */ } }
  if (!match) match = await lookup("");
  if (!match) throw new Error(`location-not-found:${locationText}`);
  return { label: clean(match.display_name || locationText), lat: Number(match.lat), lon: Number(match.lon),
    country: clean(match.address?.country || ""), countryCode: String(match.address?.country_code || "").toLowerCase() };
}

// osmFilters: an array of Overpass tag-match strings, e.g. ['"amenity"="pharmacy"'].
// fallbackTerm (optional): a plain word such as "pharmacy" for the Nominatim fallback above.
// countryCode (optional): prefer a named place in this country. coords (optional, { lat, lon }): the device's own position, handed over by the browser with permission; no lookup needed.
async function findNearbyPlaces({ locationText, osmFilters, radiusMeters = 8000, limit = 8, fetchImpl, env = process.env, fallbackTerm = "", countryCode = "", coords = null }) {
  const fetcher = fetchImpl || mapsFetch(env);
  if (typeof fetcher !== "function") throw new Error("no-fetch-available");
  const origin = coords && Number.isFinite(coords.lat) && Number.isFinite(coords.lon)
    ? { label: "your device location", lat: coords.lat, lon: coords.lon, country: "", countryCode: "" }
    : await geocodePlace(locationText, fetcher, countryCode);
  if (!fallbackTerm) return overpassPlaces({ origin, osmFilters, radiusMeters, limit, fetcher });
  let result = { origin, places: [] };
  try { result = await overpassPlaces({ origin, osmFilters, radiusMeters, limit, fetcher }); } catch { /* fall through to Nominatim */ }
  if (result.places.length) return result;
  try { return { origin, places: await nominatimPlaces({ origin, term: fallbackTerm, limit, radiusMeters, fetcher }) }; }
  catch { return result; }
}

async function overpassPlaces({ origin, osmFilters, radiusMeters, limit, fetcher }) {
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
