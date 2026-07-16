const {
  clean,
  envEnabled,
  missingEnv,
  providerResponse,
  disabledResponse,
  missingConfigResponse,
  requireConfirmation,
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

function mapsUrl(origin, destination) {
  const params = new URLSearchParams({ api: "1", origin, destination, travelmode: "driving" });
  return `https://www.google.com/maps/dir/?${params.toString()}`;
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

async function publicOsmRoute(origin, destination, fallbackUrl, env = process.env) {
  if (!envEnabled("NEXUS_MAPS_PUBLIC_OSM_ENABLED", env, true)) return null;
  const fetchImpl = mapsFetch(env);
  if (typeof fetchImpl !== "function") return null;
  const start = await geocodeLocation(origin, fetchImpl);
  const end = await geocodeLocation(destination, fetchImpl);
  if (!Number.isFinite(start.lat) || !Number.isFinite(start.lon) || !Number.isFinite(end.lat) || !Number.isFinite(end.lon)) {
    throw new Error("route-geocode-invalid");
  }
  const routeUrl = `${OSRM_ROUTE_URL}/${start.lon},${start.lat};${end.lon},${end.lat}?overview=false&alternatives=false&steps=false`;
  const payload = await fetchJson(fetchImpl, routeUrl, { accept: "application/json" });
  const route = Array.isArray(payload.routes) ? payload.routes[0] : null;
  if (!route) throw new Error("route-not-found");
  return providerResponse({
    provider: "openstreetmap-osrm",
    action: "maps.route",
    status: "completed",
    message: "Route distance and duration computed from user-provided origin and destination using public OpenStreetMap/Nominatim plus OSRM. No browser geolocation was requested.",
    data: {
      origin,
      destination,
      originResolved: start.label,
      destinationResolved: end.label,
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
  if (!origin || !destination) return blockedResponse(provider, action, "Origin and destination text are required. Nexus will not use browser geolocation.");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const fallbackUrl = mapsUrl(origin, destination);
  const missing = missingEnv(["GOOGLE_MAPS_API_KEY"], env);
  if (missing.length) {
    try {
      const publicRoute = await publicOsmRoute(origin, destination, fallbackUrl, env);
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
        "x-goog-fieldmask": "routes.duration,routes.distanceMeters,routes.description"
      },
      body: JSON.stringify({
        origin: { address: origin },
        destination: { address: destination },
        travelMode: "DRIVE",
        routingPreference: "TRAFFIC_AWARE"
      })
    });
    const payload = await safeJson(result);
    if (!result.ok) throw new Error(payload.error?.message || result.statusText);
    const firstRoute = Array.isArray(payload.routes) ? payload.routes[0] : null;
    return providerResponse({
      provider,
      action,
      status: "completed",
      message: "Route computed from user-provided origin and destination after confirmation.",
      data: {
        origin,
        destination,
        distanceMeters: firstRoute?.distanceMeters || null,
        duration: firstRoute?.duration || null,
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

module.exports = { status, route, mapsUrl, publicOsmRoute, NOMINATIM_SEARCH_URL, OSRM_ROUTE_URL };
