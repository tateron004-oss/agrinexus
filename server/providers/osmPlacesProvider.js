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
// A named place keeps its coordinates for a day, and a search for a kind of place near it keeps its answer for ten minutes. Overpass and Nominatim are shared public services that answer in 1 to 9 seconds, and the same
// few searches ("a pharmacy near Nairobi") are asked again and again, so a repeat is answered at once. Only the real network is remembered (a stand-in fetch, as in the tests, is always asked), only a search that found
// something, and nothing is kept for a search from a device's own position.
const GEOCODE_CACHE = new Map();
const PLACES_CACHE = new Map();
const GEOCODE_CACHE_MS = 24 * 60 * 60 * 1000;
const PLACES_CACHE_MS = 10 * 60 * 1000;
const CACHE_ENTRIES = 200;
function recall(cache, key, ttlMs) {
  const hit = cache.get(key);
  if (!hit) return null;
  if (Date.now() - hit.at >= ttlMs) { cache.delete(key); return null; }
  return hit.value;
}
function remember(cache, key, value) {
  if (cache.size >= CACHE_ENTRIES) cache.delete(cache.keys().next().value);
  cache.set(key, { at: Date.now(), value });
}

const HEDGE_MS = 3000;
async function findNearbyPlaces({ locationText, osmFilters, radiusMeters = 8000, limit = 8, fetchImpl, env = process.env, fallbackTerm = "", countryCode = "", coords = null, hedgeMs = HEDGE_MS }) {
  const fetcher = fetchImpl || mapsFetch(env);
  if (typeof fetcher !== "function") throw new Error("no-fetch-available");
  const real = fetcher === globalThis.fetch;
  const fromDevice = Boolean(coords && Number.isFinite(coords.lat) && Number.isFinite(coords.lon));
  const searchKey = real && !fromDevice ? JSON.stringify([String(locationText || "").trim().toLowerCase(), countryCode, osmFilters, radiusMeters, limit, fallbackTerm]) : "";
  const known = searchKey ? recall(PLACES_CACHE, searchKey, PLACES_CACHE_MS) : null;
  if (known) return { ...known, origin: { ...known.origin }, places: known.places.map(place => ({ ...place })) };
  let origin;
  if (fromDevice) origin = { label: "your device location", lat: coords.lat, lon: coords.lon, country: "", countryCode: "" };
  else {
    const placeKey = real ? `${String(locationText || "").trim().toLowerCase()}|${countryCode}` : "";
    const cachedOrigin = placeKey ? recall(GEOCODE_CACHE, placeKey, GEOCODE_CACHE_MS) : null;
    origin = cachedOrigin ? { ...cachedOrigin } : null;
    if (!origin) {
      origin = await geocodePlace(locationText, fetcher, countryCode);
      if (placeKey) remember(GEOCODE_CACHE, placeKey, { ...origin });
    }
  }
  const keep = found => { if (searchKey && found.places.length) remember(PLACES_CACHE, searchKey, found); return found; };
  if (!fallbackTerm) return keep(await overpassPlaces({ origin, osmFilters, radiusMeters, limit, fetcher }));
  // Overpass has the richer answer (phone, opening hours) but is a shared service that answers in 1 to 9 seconds, or times out, and Nominatim answers the same question in under a second. So Overpass is asked first and
  // given hedgeMs; if it has not answered with places by then (or failed, or found nothing) Nominatim is asked as well, and whichever answers first with places wins. A slow Overpass no longer costs its whole 9 seconds.
  const overpass = overpassPlaces({ origin, osmFilters, radiusMeters, limit, fetcher }).then(found => found, () => null);
  let hedgeTimer;
  const early = await Promise.race([overpass, new Promise(resolve => { hedgeTimer = setTimeout(() => resolve("slow"), hedgeMs); })]);
  clearTimeout(hedgeTimer);
  if (early && early !== "slow" && early.places.length) return keep(early);
  const nominatim = nominatimPlaces({ origin, term: fallbackTerm, limit, radiusMeters, fetcher }).then(places => ({ origin, places }), () => null);
  const useful = promise => promise.then(found => (found && found.places.length ? found : new Promise(() => {})));
  let winner = await Promise.race([useful(overpass), useful(nominatim), Promise.all([overpass, nominatim]).then(() => null)]);
  if (!winner) {
    const [first, second] = await Promise.all([overpass, nominatim]);
    winner = first && first.places.length ? first : second && second.places.length ? second : null;
  }
  return winner ? keep(winner) : { origin, places: [] };
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
