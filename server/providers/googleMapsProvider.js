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

function status(env = process.env) {
  return {
    provider: "google-maps",
    enabled: envEnabled("NEXUS_MAPS_ENABLED", env),
    missingConfig: missingEnv(["GOOGLE_MAPS_API_KEY"], env),
    fallbackAvailable: true
  };
}

function mapsUrl(origin, destination) {
  const params = new URLSearchParams({ api: "1", origin, destination, travelmode: "driving" });
  return `https://www.google.com/maps/dir/?${params.toString()}`;
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

module.exports = { status, route, mapsUrl };
