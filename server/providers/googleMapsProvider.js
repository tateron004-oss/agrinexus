const {
  clean,
  envEnabled,
  missingEnv,
  providerResponse,
  disabledResponse,
  missingConfigResponse,
  blockedResponse,
  failedResponse,
  safeJson
} = require("./providerUtils");

const NOMINATIM_SEARCH_URL = "https://nominatim.openstreetmap.org/search";
const OSRM_ROUTE_URL = "https://router.project-osrm.org/route/v1/driving";

function status(env = process.env) {
  const googleMissing = missingEnv(["GOOGLE_MAPS_API_KEY"], env);
  const publicOsmEnabled = envEnabled("NEXUS_MAPS_PUBLIC_OSM_ENABLED", env, true);
  return {
    provider: "google-maps",
    enabled: envEnabled("NEXUS_MAPS_ENABLED", env),
    missingConfig: googleMissing,
    fallbackAvailable: true,
    publicOsmRouteEnabled: publicOsmEnabled,
    testability: googleMissing.length === 0 ? "ready" : publicOsmEnabled ? "read_only" : "missing_config",
    whatCanBeTestedNow: googleMissing.length === 0
      ? "Google Maps route computation with explicit origin and destination."
      : publicOsmEnabled
        ? "OpenStreetMap/Nominatim plus OSRM read-only route distance and duration, using explicit origin and destination."
        : "Safe Google Maps URL fallback only."
  };
}

function mapsUrl(origin, destination, waypoints = []) {
  const params = new URLSearchParams({ api: "1", origin, destination, travelmode: "driving" });
  if (waypoints.length) params.set("waypoints", waypoints.join("|"));
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function cleanWaypoints(value) {
  return (Array.isArray(value) ? value : []).map(clean).filter(Boolean).slice(0, 8);
}

function mapsFetch(env = process.env) {
  return typeof env.NEXUS_MAPS_FETCH_IMPL === "function" ? env.NEXUS_MAPS_FETCH_IMPL : globalThis.fetch;
}

async function fetchJson(fetchImpl, url, headers = {}) {
  const response = await fetchImpl(url, { method: "GET", headers, signal: AbortSignal.timeout(9000) });
  const payload = await safeJson(response);
  if (!response.ok) throw new Error(payload.error?.message || payload.message || response.statusText || `http-${response.status}`);
  return payload;
}

// Places already looked up are remembered for a day, so a route that names the same town again (or a town several people ask about) does not ask the free service again.
const GEOCODE_CACHE = new Map();
const GEOCODE_CACHE_MS = 24 * 60 * 60 * 1000;
const GEOCODE_CACHE_MAX = 500;
const sleepMs = ms => new Promise(resolve => setTimeout(resolve, ms));
// Roads already worked out are remembered for ten minutes (the same trip asked again, or by the voice model trying again, does not go back to the free routing service).
const ROUTE_CACHE = new Map();
const ROUTE_CACHE_MS = 10 * 60 * 1000;
const ROUTE_CACHE_MAX = 100;

// One more try after a short wait when a free service is busy or does not answer (they limit how often one address may ask); an answer, even "not found", is not tried again.
async function fetchJsonRetry(fetchImpl, url, headers, env = process.env) {
  for (let attempt = 0; ; attempt += 1) {
    try {
      return await fetchJson(fetchImpl, url, headers);
    } catch (error) {
      if (attempt >= 1) throw error;
      if (fetchImpl === globalThis.fetch) await sleepMs(Number(env?.NEXUS_MAPS_GEOCODE_RETRY_MS ?? 1500));
    }
  }
}

async function geocodeLocation(locationText, fetchImpl, env = process.env) {
  // Only the real network is remembered and paced; a stand-in fetch (tests, previews) always gets asked.
  const real = fetchImpl === globalThis.fetch;
  const key = String(locationText || "").trim().toLowerCase();
  const cached = real ? GEOCODE_CACHE.get(key) : null;
  if (cached && Date.now() - cached.at < GEOCODE_CACHE_MS) return cached.value;
  const url = new URL(NOMINATIM_SEARCH_URL);
  url.searchParams.set("q", locationText);
  url.searchParams.set("format", "jsonv2");
  url.searchParams.set("limit", "1");
  const payload = await fetchJsonRetry(fetchImpl, url, { accept: "application/json", "user-agent": "AgriNexus/1.0 route-readonly-validation" }, env);
  const match = Array.isArray(payload) ? payload[0] : null;
  if (!match || !match.lat || !match.lon) throw new Error(`location-not-found:${locationText}`);
  const value = { label: clean(match.display_name || locationText), lat: Number(match.lat), lon: Number(match.lon) };
  if (real) {
    if (GEOCODE_CACHE.size >= GEOCODE_CACHE_MAX) GEOCODE_CACHE.delete(GEOCODE_CACHE.keys().next().value);
    GEOCODE_CACHE.set(key, { value, at: Date.now() });
  }
  return value;
}

function simplifyGeometry(coordinates, maxPoints = 120) {
  if (!Array.isArray(coordinates) || coordinates.length === 0) return [];
  const points = coordinates
    .filter(pair => Array.isArray(pair) && Number.isFinite(Number(pair[0])) && Number.isFinite(Number(pair[1])))
    .map(([lon, lat]) => [Number(lat), Number(lon)]);
  if (points.length <= maxPoints) return points;
  const step = Math.ceil(points.length / maxPoints);
  const sampled = points.filter((_, index) => index % step === 0);
  const last = points[points.length - 1];
  if (sampled[sampled.length - 1] !== last) sampled.push(last);
  return sampled;
}

async function publicOsmRoute(origin, destination, fallbackUrl, env = process.env, waypoints = []) {
  if (!envEnabled("NEXUS_MAPS_PUBLIC_OSM_ENABLED", env, true)) return null;
  const fetchImpl = mapsFetch(env);
  if (typeof fetchImpl !== "function") return null;
  const cleanedWaypoints = cleanWaypoints(waypoints);
  // One place at a time, not all at once: the free place-finding service allows about one request a second from one address, and a route with stops asked for three or four together was refused as too many (a route of two places
  // got through, one with a stop did not). A place already remembered costs nothing; a new one waits a moment after the one before.
  const stops = [];
  const gap = fetchImpl === globalThis.fetch ? Number(env?.NEXUS_MAPS_GEOCODE_GAP_MS ?? 1100) : 0;
  for (const location of [origin, ...cleanedWaypoints, destination]) {
    const known = GEOCODE_CACHE.get(String(location || "").trim().toLowerCase());
    if (!known && stops.some(stop => !stop.cached) && gap > 0) await sleepMs(gap);
    const found = await geocodeLocation(location, fetchImpl, env);
    stops.push({ ...found, cached: Boolean(known) });
  }
  if (stops.some(stop => !Number.isFinite(stop.lat) || !Number.isFinite(stop.lon))) {
    throw new Error("route-geocode-invalid");
  }
  const start = stops[0];
  const end = stops[stops.length - 1];
  // Found on 26 October 2026: Atlanta to Nairobi has no road, so there was no route to draw and the map showed the whole continent. Places this far apart (or with no road between them) are drawn as the straight line between them,
  // and said to be that: the direction and the distance, not a booked flight or a schedule.
  const straightLine = () => {
    const { greatCircle } = require("../../nexus/navigation/service.js");
    const geometry = []; let meters = 0;
    for (let i = 0; i < stops.length - 1; i += 1) {
      const a = { lat: stops[i].lat, lng: stops[i].lon }; const b = { lat: stops[i + 1].lat, lng: stops[i + 1].lon };
      const line = greatCircle(a, b); geometry.push(...(geometry.length ? line.slice(1) : line));
      const rad = degrees => degrees * Math.PI / 180;
      meters += 2 * 6371000 * Math.asin(Math.sqrt(Math.sin(rad(b.lat - a.lat) / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(rad(b.lng - a.lng) / 2) ** 2));
    }
    return { geometry, meters: Math.round(meters) };
  };
  const tooFar = (() => { const { AIR_ONLY_METERS } = require("../../nexus/navigation/service.js"); return stops.slice(0, -1).some((stop, i) => { const a = stop; const b = stops[i + 1]; const rad = degrees => degrees * Math.PI / 180; return 2 * 6371000 * Math.asin(Math.sqrt(Math.sin(rad(b.lat - a.lat) / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(rad(b.lon - a.lon) / 2) ** 2)) >= AIR_ONLY_METERS; }); })();
  const airResponse = far => {
    const line = straightLine();
    return providerResponse({
      provider: "great-circle", action: "maps.route", status: "completed",
      message: far ? "These places are too far apart for a road route, so the map shows the straight line between them: the direction and the distance, not a booked flight or a schedule." : "The routing service found no road route between these places, so the map shows the straight line between them: the direction and the distance, not a booked flight or a schedule.",
      data: {
        origin, destination, waypoints: cleanedWaypoints, originResolved: start.label, destinationResolved: end.label, waypointsResolved: stops.slice(1, -1).map(stop => stop.label),
        waypointPoints: stops.slice(1, -1).map((stop, index) => ({ name: cleanedWaypoints[index], lat: stop.lat, lng: stop.lon })),
        originLat: start.lat, originLng: start.lon, destinationLat: end.lat, destinationLng: end.lon,
        routeGeometry: line.geometry.length > 1 ? line.geometry : null, distanceMeters: line.meters, duration: null, durationSeconds: null,
        straightLine: true, routeUrl: fallbackUrl, sourceUrl: "https://www.openstreetmap.org/", routeProvider: "straight line between the places (not a road or a flight schedule)",
        noLocationPermissionRequested: true, readOnly: true
      }
    });
  };
  if (tooFar) return airResponse(true);
  const coordinatePath = stops.map(stop => `${stop.lon},${stop.lat}`).join(";");
  const routeUrl = `${OSRM_ROUTE_URL}/${coordinatePath}?overview=full&geometries=geojson&alternatives=false&steps=false`;
  const real = fetchImpl === globalThis.fetch;
  const remembered = real ? ROUTE_CACHE.get(coordinatePath) : null;
  let payload;
  try { payload = remembered && Date.now() - remembered.at < ROUTE_CACHE_MS ? remembered.payload : await fetchJsonRetry(fetchImpl, routeUrl, { accept: "application/json" }, env); } catch (error) { if (/no ?route|impossible|bad request|http-400/i.test(String(error?.message))) return airResponse(false); throw error; }
  const route = Array.isArray(payload.routes) ? payload.routes[0] : null;
  if (real && route && payload !== remembered?.payload) {
    if (ROUTE_CACHE.size >= ROUTE_CACHE_MAX) ROUTE_CACHE.delete(ROUTE_CACHE.keys().next().value);
    ROUTE_CACHE.set(coordinatePath, { payload, at: Date.now() });
  }
  if (!route) return airResponse(false);
  const geometry = simplifyGeometry(route.geometry?.coordinates);
  return providerResponse({
    provider: "openstreetmap-osrm",
    action: "maps.route",
    status: "completed",
    message: cleanedWaypoints.length
      ? `Multi-stop route distance and duration computed for ${stops.length} stops using public OpenStreetMap/Nominatim plus OSRM. No browser geolocation was requested.`
      : "Route distance and duration computed from user-provided origin and destination using public OpenStreetMap/Nominatim plus OSRM. No browser geolocation was requested.",
    data: {
      origin,
      destination,
      waypoints: cleanedWaypoints,
      originResolved: start.label,
      destinationResolved: end.label,
      waypointsResolved: stops.slice(1, -1).map(stop => stop.label),
      // where each stop is, so the map can mark it: the name the person said, and the point the map service found for it
      waypointPoints: stops.slice(1, -1).map((stop, index) => ({ name: cleanedWaypoints[index], lat: stop.lat, lng: stop.lon })),
      originLat: start.lat,
      originLng: start.lon,
      destinationLat: end.lat,
      destinationLng: end.lon,
      routeGeometry: geometry.length > 1 ? geometry : null,
      distanceMeters: typeof route.distance === "number" ? Math.round(route.distance) : null,
      duration: typeof route.duration === "number" ? `${Math.round(route.duration)}s` : null,
      durationSeconds: typeof route.duration === "number" ? Math.round(route.duration) : null,
      routeUrl: fallbackUrl,
      sourceUrl: "https://www.openstreetmap.org/",
      routeProvider: "OSRM public demo server",
      noLocationPermissionRequested: true,
      readOnly: true
    }
  });
}

async function route(body = {}, env = process.env) {
  const provider = "google-maps";
  const action = "maps.route";
  if (!envEnabled("NEXUS_MAPS_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_MAPS_ENABLED");
  const origin = clean(body.origin);
  const destination = clean(body.destination);
  const waypoints = cleanWaypoints(body.waypoints);
  if (!origin || !destination) return blockedResponse(provider, action, "Origin and destination text are required. Nexus will not use browser geolocation.");
  // Read-only lookup (distance/duration/traffic) — no money moves, nothing is
  // booked or dispatched, so this doesn't need a confirmation gate any more
  // than checking the weather does.
  const fallbackUrl = mapsUrl(origin, destination, waypoints);
  const missing = missingEnv(["GOOGLE_MAPS_API_KEY"], env);
  if (missing.length) {
    try {
      const publicRoute = await publicOsmRoute(origin, destination, fallbackUrl, env, waypoints);
      if (publicRoute) return publicRoute;
    } catch (error) {
      // The free service was asked and could not answer for these places: say which place, or that it did not answer, instead of saying a setup is missing (nothing is missing: the free service is what is used without a key).
      const notFound = /^location-not-found:(.+)$/.exec(String(error?.message || ""));
      const reason = notFound
        ? `I could not find "${notFound[1]}" on the map. Try the town with its country, for example "${notFound[1]}, Kenya".`
        : "The free map service did not answer for every place just now. Try again in a moment.";
      const unavailable = failedResponse(provider, action, new Error(reason));
      unavailable.body.data = { origin, destination, waypoints, routeUrl: fallbackUrl, noLocationPermissionRequested: true, providerError: true };
      return unavailable;
    }
    const response = missingConfigResponse(provider, action, missing);
    response.body.data = { origin, destination, routeUrl: fallbackUrl, noLocationPermissionRequested: true };
    response.body.message = "Google Maps API key is missing. Returned a safe user-provided route URL fallback only.";
    return response;
  }
  try {
    const result = await fetch("https://routes.googleapis.com/directions/v2:computeRoutes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-goog-api-key": env.GOOGLE_MAPS_API_KEY,
        "x-goog-fieldmask": "routes.duration,routes.distanceMeters,routes.description,routes.polyline.geoJsonLinestring"
      },
      body: JSON.stringify({
        origin: { address: origin },
        destination: { address: destination },
        ...(waypoints.length ? { intermediates: waypoints.map(address => ({ address })) } : {}),
        travelMode: "DRIVE",
        routingPreference: "TRAFFIC_AWARE",
        polylineEncoding: "GEO_JSON_LINESTRING"
      })
    });
    const payload = await safeJson(result);
    if (!result.ok) throw new Error(payload.error?.message || result.statusText);
    const firstRoute = Array.isArray(payload.routes) ? payload.routes[0] : null;
    // Google renders duration as a Duration-proto string like "1234s", not a number.
    const rawDurationSeconds = typeof firstRoute?.duration === "string" ? Number(firstRoute.duration.replace(/s$/, "")) : null;
    const durationSeconds = Number.isFinite(rawDurationSeconds) ? Math.round(rawDurationSeconds) : null;
    const routeGeometry = simplifyGeometry(firstRoute?.polyline?.geoJsonLinestring?.coordinates);
    let originCoords = null;
    let destinationCoords = null;
    let waypointsResolved = [];
    try {
      const fetchImpl = mapsFetch(env);
      if (typeof fetchImpl === "function") {
        const [start, end, ...waypointStops] = await Promise.all([geocodeLocation(origin, fetchImpl), geocodeLocation(destination, fetchImpl), ...waypoints.map(location => geocodeLocation(location, fetchImpl))]);
        originCoords = { lat: start.lat, lng: start.lon, label: start.label };
        destinationCoords = { lat: end.lat, lng: end.lon, label: end.label };
        waypointsResolved = waypointStops.map(stop => stop.label);
      }
    } catch (error) {
      // Real-time distance still returned even if best-effort coordinate lookup fails.
    }
    return providerResponse({
      provider,
      action,
      status: "completed",
      message: waypoints.length ? "Multi-stop route computed from user-provided origin, destination, and waypoints after confirmation." : "Route computed from user-provided origin and destination after confirmation.",
      data: {
        origin,
        destination,
        waypoints,
        waypointsResolved,
        originLat: originCoords?.lat ?? null,
        originLng: originCoords?.lng ?? null,
        originResolved: originCoords?.label || "",
        destinationLat: destinationCoords?.lat ?? null,
        destinationLng: destinationCoords?.lng ?? null,
        destinationResolved: destinationCoords?.label || "",
        // Found live (maps/reports sibling sweep, same falsy-zero bug already fixed once tonight in
        // nexus/logistics/executor.js's own local durationSeconds -- that fix never touched this
        // provider, so the identical defect survived here): a genuinely-computed 0-meter route (origin
        // and destination resolving to the same or a near-identical coordinate) was coerced to null by
        // ||, same as the sibling free-OSM path (publicOsmRoute() below) already correctly avoids via a
        // typeof check.
        distanceMeters: typeof firstRoute?.distanceMeters === "number" ? firstRoute.distanceMeters : null,
        duration: firstRoute?.duration || null,
        durationSeconds,
        routeGeometry: routeGeometry.length > 1 ? routeGeometry : null,
        description: firstRoute?.description || "",
        routeUrl: fallbackUrl,
        noLocationPermissionRequested: true
      }
    });
  } catch (error) {
    const failed = failedResponse(provider, action, error);
    failed.body.data = { origin, destination, routeUrl: fallbackUrl, noLocationPermissionRequested: true, providerError: true };
    return failed;
  }
}

module.exports = { status, route, mapsUrl, publicOsmRoute, cleanWaypoints, geocodeLocation, mapsFetch, NOMINATIM_SEARCH_URL, OSRM_ROUTE_URL };
