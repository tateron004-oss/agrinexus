const crypto = require("node:crypto");
const { BLOCKED_REAL_WORLD_ACTIONS } = require("./nexus-n100-deep-workflow-engine.js");

const SCHEMA_VERSION = "nexus.n100.mapRoutePlanningAssistant.v1";

const SUPPORTED_ROUTE_ARTIFACTS = Object.freeze([
  "route_planning_checklist",
  "transportation_options_review",
  "travel_safety_notes",
  "appointment_trip_prep",
  "field_visit_route_notes"
]);

const BLOCKED_ROUTE_ACTIONS = Object.freeze([
  "request_geolocation",
  "share_location",
  "start_turn_by_turn_navigation",
  "open_external_maps",
  "dispatch_transport",
  "book_ride",
  "contact_driver",
  "contact_provider",
  "payment_purchase"
]);

function text(value, fallback = "") {
  const normalized = String(value || "").trim().replace(/\s+/g, " ");
  return normalized || fallback;
}

function stableId(prefix, value) {
  return `${prefix}-${crypto.createHash("sha256").update(String(value || "")).digest("hex").slice(0, 12)}`;
}

function nowIso(input = {}) {
  return input.nowIso || new Date(input.now || Date.now()).toISOString();
}

function classifyRouteArtifact(prompt = "") {
  const lower = text(prompt).toLowerCase();
  if (/\b(find my location|use my location|share my location|navigate now|open maps|book a ride|dispatch|call driver)\b/.test(lower)) return "blocked_route_execution";
  if (/transport|ride|bus|clinic access/.test(lower)) return "transportation_options_review";
  if (/safe|safety|night|weather/.test(lower)) return "travel_safety_notes";
  if (/appointment|clinic|doctor|pharmacy/.test(lower)) return "appointment_trip_prep";
  if (/field|farm|visit|route/.test(lower)) return "field_visit_route_notes";
  return "route_planning_checklist";
}

function safetyPosture() {
  return Object.freeze({
    canExecute: false,
    executionAuthority: "none",
    explicitLocationTextOnly: true,
    noGeolocationPermissionRequested: true,
    noLocationSharingAuthorized: true,
    noTurnByTurnNavigationStarted: true,
    noExternalMapsOpened: true,
    noTransportationDispatchAuthorized: true,
    noProviderContactAuthorized: true,
    noPaymentAuthorized: true,
    noBackendWritePerformed: true,
    noStorageWritePerformed: true,
    noExternalNavigationAuthorized: true
  });
}

function routeBody(artifactType, input = {}) {
  const origin = text(input.originText, "your starting point");
  const destination = text(input.destinationText, input.prompt || "your destination");
  if (artifactType === "transportation_options_review") {
    return `Transportation options review from ${origin} to ${destination}: compare public transit, trusted family/community ride, clinic transport desk, and walking safety. No ride was booked.`;
  }
  if (artifactType === "travel_safety_notes") {
    return `Travel safety notes for ${destination}: confirm daylight timing, weather, phone battery, emergency contacts, and safe return plan. No location was shared.`;
  }
  if (artifactType === "appointment_trip_prep") {
    return `Appointment trip prep for ${destination}: confirm appointment time, documents, travel buffer, pickup options, and cancellation plan. No provider or driver was contacted.`;
  }
  if (artifactType === "field_visit_route_notes") {
    return `Field visit route notes for ${destination}: identify meeting point, road conditions to verify, field access notes, and check-in plan. No map app was opened.`;
  }
  return `Route planning checklist from ${origin} to ${destination}: confirm addresses manually, compare safe options, plan timing, and choose whether to open a map yourself.`;
}

function auditMetadata(input = {}) {
  const artifactType = text(input.artifactType, "route_planning_checklist");
  return Object.freeze({
    auditId: text(input.auditId, stableId("n100-route-audit", `${artifactType}:${input.prompt || ""}`)),
    auditEventType: "route_planning_artifact_prepared",
    artifactType,
    createdAt: nowIso(input),
    redactedPayloadOnly: true,
    noExecutionAuthorized: true,
    noLocationPermissionRequested: true
  });
}

function blockedRouteResponse(prompt = "") {
  const artifactType = "blocked_route_execution";
  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    routeArtifactId: stableId("n100-route-blocked", prompt),
    artifactType,
    status: "blocked_no_route_execution",
    reason: "Nexus can prepare route planning notes, but it cannot request location, share location, open maps, dispatch transport, book rides, or contact providers in this phase.",
    blockedActions: Object.freeze([...BLOCKED_REAL_WORLD_ACTIONS, ...BLOCKED_ROUTE_ACTIONS]),
    auditMetadata: auditMetadata({ artifactType, prompt }),
    safetyPosture: safetyPosture(),
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noBackendWritePerformed: true
  });
}

function createN100MapRouteArtifact(input = {}) {
  const prompt = text(input.prompt, "Prepare route planning notes.");
  const artifactType = input.artifactType && SUPPORTED_ROUTE_ARTIFACTS.includes(input.artifactType)
    ? input.artifactType
    : classifyRouteArtifact(prompt);
  if (!SUPPORTED_ROUTE_ARTIFACTS.includes(artifactType)) return blockedRouteResponse(prompt);

  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    routeArtifactId: text(input.routeArtifactId, stableId("n100-route", `${artifactType}:${prompt}`)),
    artifactType,
    status: "prepared_for_user_review",
    prompt,
    originText: text(input.originText, ""),
    destinationText: text(input.destinationText, prompt),
    title: text(input.title, artifactType.replace(/_/g, " ")),
    body: routeBody(artifactType, input),
    requiresExplicitLocationText: true,
    requiresUserReview: true,
    blockedActions: Object.freeze([...BLOCKED_REAL_WORLD_ACTIONS, ...BLOCKED_ROUTE_ACTIONS]),
    auditMetadata: auditMetadata({ artifactType, prompt, nowIso: input.nowIso }),
    safetyPosture: safetyPosture(),
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noBackendWritePerformed: true
  });
}

function isSafeN100MapRouteArtifact(artifact) {
  if (!artifact || typeof artifact !== "object" || Array.isArray(artifact)) return false;
  if (artifact.schemaVersion !== SCHEMA_VERSION) return false;
  if (!artifact.routeArtifactId || !artifact.artifactType || !artifact.status) return false;
  if (artifact.canExecute !== false || artifact.executionAuthority !== "none") return false;
  if (artifact.noExecutionAuthorized !== true || artifact.noBackendWritePerformed !== true) return false;
  if (!artifact.safetyPosture || artifact.safetyPosture.noGeolocationPermissionRequested !== true || artifact.safetyPosture.noExternalMapsOpened !== true) return false;
  if (artifact.safetyPosture.noTransportationDispatchAuthorized !== true || artifact.safetyPosture.noLocationSharingAuthorized !== true) return false;
  const serialized = JSON.stringify(artifact);
  if (/(getCurrentPosition|watchPosition|navigator\.geolocation|maps\.google|geo:|location\.href|window\.open|dispatchRide|bookRide|providerUrl|paymentIntent|executionAuthority":"provider")/.test(serialized)) return false;
  return Array.isArray(artifact.blockedActions) && BLOCKED_ROUTE_ACTIONS.every(action => artifact.blockedActions.includes(action));
}

module.exports = Object.freeze({
  SCHEMA_VERSION,
  SUPPORTED_ROUTE_ARTIFACTS,
  BLOCKED_ROUTE_ACTIONS,
  createN100MapRouteArtifact,
  blockedRouteResponse,
  isSafeN100MapRouteArtifact
});
