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

async function geocodeLocation(locationText, fetchImpl) {
  const url = new URL(NOMINATIM_SEARCH_URL);
  url.searchParams.set("q", locationText);
  url.searchParams.set("format", "jsonv2");
  url.searchParams.set("limit", "1");
  const payload = await fetchJson(fetchImpl, url, {
    accept: "application/json",
    "user-agent": "AgriNexus/1.0 route-readonly-validation"
  });
  const match = Array.isArray(payload) ? payload[0] : null;
  if (!match || !match.lat || !match.lon) throw new Error(`location-not-found:${locationText}`);
  return {
    label: clean(match.display_name || locationText),
    lat: Number(match.lat),
    lon: Number(match.lon)
  };
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
  const stops = await Promise.all([origin, ...cleanedWaypoints, destination].map(location => geocodeLocation(location, fetchImpl)));
  if (stops.some(stop => !Number.isFinite(stop.lat) || !Number.isFinite(stop.lon))) {
    throw new Error("route-geocode-invalid");
  }
  const start = stops[0];
  const end = stops[stops.length - 1];
  const coordinatePath = stops.map(stop => `${stop.lon},${stop.lat}`).join(";");
  const routeUrl = `${OSRM_ROUTE_URL}/${coordinatePath}?overview=full&geometries=geojson&alternatives=false&steps=false`;
  const payload = await fetchJson(fetchImpl, routeUrl, { accept: "application/json" });
  const route = Array.isArray(payload.routes) ? payload.routes[0] : null;
  if (!route) throw new Error("route-not-found");
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
      // Fall through to the safe credential-blocked Google result with route URL fallback.
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
        distanceMeters: firstRoute?.distanceMeters || null,
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
