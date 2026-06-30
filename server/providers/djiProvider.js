const {
  clean,
  envEnabled,
  missingEnv,
  providerResponse,
  disabledResponse,
  missingConfigResponse,
  requireConfirmation,
  blockedResponse
} = require("./providerUtils");

function status(env = process.env) {
  return {
    provider: "dji-cloud-api",
    enabled: envEnabled("NEXUS_DRONES_ENABLED", env),
    missingConfig: missingEnv(["DJI_APP_KEY", "DJI_APP_SECRET", "DJI_ORG_ID"], env),
    flightControlEnabled: false
  };
}

function providerStatus(env = process.env) {
  const provider = "dji-cloud-api";
  const action = "drones.status";
  if (!envEnabled("NEXUS_DRONES_ENABLED", env)) return disabledResponse(provider, action, "NEXUS_DRONES_ENABLED");
  const missing = missingEnv(["DJI_APP_KEY", "DJI_APP_SECRET", "DJI_ORG_ID"], env);
  if (missing.length) return missingConfigResponse(provider, action, missing);
  return providerResponse({
    provider,
    action,
    status: "completed",
    message: "DJI Cloud API credentials are present for status/intake testing. Flight control remains disabled.",
    data: { configured: true, flightControlEnabled: false }
  });
}

function missionRequest(body = {}, db, env = process.env) {
  const provider = "dji-cloud-api";
  const action = "drones.mission_request";
  if (!envEnabled("NEXUS_DRONES_ENABLED", env)) return disabledResponse(provider, action, "NEXUS_DRONES_ENABLED");
  const missing = missingEnv(["DJI_APP_KEY", "DJI_APP_SECRET", "DJI_ORG_ID"], env);
  if (missing.length) return missingConfigResponse(provider, action, missing);
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  if (!clean(body.title) || !clean(body.area)) return blockedResponse(provider, action, "Mission request title and area are required. No flight control is available.");
  const request = {
    id: `dji-request-${Date.now()}`,
    title: clean(body.title),
    area: clean(body.area),
    purpose: clean(body.purpose || "Field review"),
    status: "intake_only",
    flightControlEnabled: false,
    createdAt: new Date().toISOString()
  };
  db.profile = db.profile || {};
  db.profile.droneMissionRequests = [request, ...(db.profile.droneMissionRequests || [])].slice(0, 25);
  return providerResponse({
    provider,
    action,
    status: "completed",
    message: "Drone mission request saved as intake only. No drone flight was launched or controlled.",
    data: { request }
  });
}

module.exports = { status, providerStatus, missionRequest };
