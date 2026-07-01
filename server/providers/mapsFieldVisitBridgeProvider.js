const {
  clean,
  envEnabled,
  providerResponse,
  disabledResponse,
  requireConfirmation,
  blockedResponse
} = require("./providerUtils");

const googleMapsProvider = require("./googleMapsProvider");
const remindersProvider = require("./reminderProvider");
const offlineSyncProvider = require("./offlineSyncProvider");

const SENSITIVE_FIELD_VISIT_PATTERN = /\b(payment|checkout|escrow|card|bank|routing|account number|ssn|diagnos|prescri|medical record|insurance|password|secret|token|private key|emergency dispatch|911|call now|message now|whatsapp)\b/i;
const DESTINATION_TYPES = new Set(["provider", "marketplace", "learning", "farm", "community", "custom"]);

function status(env = process.env) {
  const maps = googleMapsProvider.status(env);
  return {
    provider: "nexus-maps-field-visit-bridge",
    enabled: envEnabled("NEXUS_MAPS_FIELD_VISIT_BRIDGE_ENABLED", env, true),
    localVisitPlanningReady: true,
    mapsProvider: maps,
    routeFallbackAvailable: true,
    noGeolocation: true,
    noLocationPermission: true,
    noProviderContact: true,
    noBooking: true,
    noDispatch: true,
    noPayments: true,
    confirmationControlled: true
  };
}

function ensureVisitPlans(db) {
  db.profile = db.profile || {};
  db.profile.nexusFieldVisitPlans = db.profile.nexusFieldVisitPlans || [];
  return db.profile.nexusFieldVisitPlans;
}

function normalizeDestination(destination = {}) {
  const destinationType = clean(destination.destinationType || destination.type || "custom").toLowerCase();
  const safeType = DESTINATION_TYPES.has(destinationType) ? destinationType : "custom";
  return {
    id: clean(destination.id).slice(0, 120),
    destinationType: safeType,
    label: clean(destination.label || destination.title || destination.name || "Field visit destination").slice(0, 180),
    addressText: clean(destination.addressText || destination.address || destination.location || destination.destination).slice(0, 220),
    source: clean(destination.source || "").slice(0, 160),
    contactAuthorized: false,
    bookingAuthorized: false,
    dispatchAuthorized: false,
    paymentAuthorized: false
  };
}

function destinationFromBody(body = {}) {
  return normalizeDestination({
    destinationType: body.destinationType || body.type || "custom",
    label: body.destinationLabel || body.label || body.title || body.destination,
    addressText: body.destinationAddress || body.addressText || body.address || body.location || body.destination,
    source: body.source
  });
}

function buildFallbackUrl(origin, destination) {
  return googleMapsProvider.mapsUrl(origin, destination);
}

function validateVisitPlanInput({ title, origin, destinations = [] }, action) {
  if (!clean(title)) return "Visit plan title is required.";
  if (!clean(origin)) return "Typed origin is required. Nexus will not use browser geolocation.";
  if (!Array.isArray(destinations) || destinations.length === 0) return "At least one typed or selected destination is required.";
  for (const destination of destinations) {
    if (!clean(destination.label)) return "Each destination needs a visible label.";
    if (!clean(destination.addressText)) return "Each destination needs user-provided address or location text.";
  }
  const joined = [title, origin, ...destinations.flatMap(destination => [destination.label, destination.addressText, destination.source])].join(" ");
  if (SENSITIVE_FIELD_VISIT_PATTERN.test(joined)) return `${action} blocked because it includes payment, health, credential, emergency, contact, or secret content.`;
  return "";
}

function buildPlan(body = {}, routeData = null) {
  const title = clean(body.title || "Field visit plan").slice(0, 180);
  const origin = clean(body.origin).slice(0, 220);
  const destinations = Array.isArray(body.destinations) && body.destinations.length
    ? body.destinations.map(normalizeDestination)
    : [destinationFromBody(body)];
  const primaryDestination = destinations[0] || {};
  const routeFallbackUrl = buildFallbackUrl(origin, primaryDestination.addressText || primaryDestination.label || "");
  return {
    id: clean(body.id || `field-visit-${Date.now()}`).slice(0, 120),
    title,
    origin,
    destinations,
    routeFallbackUrl,
    routeProviderStatus: routeData?.status || "fallback_available",
    distanceMeters: routeData?.distanceMeters || null,
    duration: routeData?.duration || null,
    routeDescription: routeData?.description || "",
    noGeolocationUsed: true,
    noLocationPermissionRequested: true,
    noProviderContact: true,
    noBooking: true,
    noDispatch: true,
    noPayments: true,
    createdAt: clean(body.createdAt) || new Date().toISOString()
  };
}

function safePlanSummary(plan = {}) {
  return {
    id: clean(plan.id),
    title: clean(plan.title),
    origin: clean(plan.origin),
    destinations: (Array.isArray(plan.destinations) ? plan.destinations : []).map(destination => ({
      destinationType: clean(destination.destinationType),
      label: clean(destination.label),
      addressText: clean(destination.addressText),
      source: clean(destination.source)
    })),
    routeFallbackUrl: clean(plan.routeFallbackUrl),
    routeProviderStatus: clean(plan.routeProviderStatus),
    distanceMeters: plan.distanceMeters || null,
    duration: plan.duration || null,
    createdAt: clean(plan.createdAt)
  };
}

function createVisitPlan(body = {}, db, env = process.env) {
  const provider = "nexus-maps-field-visit-bridge";
  const action = "maps.field_visit.plan";
  if (!envEnabled("NEXUS_MAPS_FIELD_VISIT_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_MAPS_FIELD_VISIT_BRIDGE_ENABLED");
  const plan = buildPlan(body);
  const safetyError = validateVisitPlanInput(plan, "Field visit plan");
  if (safetyError) return blockedResponse(provider, action, safetyError);
  return providerResponse({
    provider,
    action,
    status: "prepared",
    message: "Field visit plan prepared from user-provided text only. No geolocation, provider contact, booking, dispatch, transport booking, or payment occurred.",
    data: { plan, routeFallbackUrl: plan.routeFallbackUrl }
  });
}

async function routeVisitPlan(body = {}, db, env = process.env) {
  const provider = "nexus-maps-field-visit-bridge";
  const action = "maps.field_visit.route";
  if (!envEnabled("NEXUS_MAPS_FIELD_VISIT_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_MAPS_FIELD_VISIT_BRIDGE_ENABLED");
  const basePlan = buildPlan(body);
  const safetyError = validateVisitPlanInput(basePlan, "Field visit route");
  if (safetyError) return blockedResponse(provider, action, safetyError);
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const primaryDestination = basePlan.destinations[0];
  const routeResult = await googleMapsProvider.route({
    confirmed: true,
    origin: basePlan.origin,
    destination: primaryDestination.addressText
  }, env);
  const routeData = routeResult.body?.data || {};
  const plan = buildPlan(body, {
    status: routeResult.body?.status || "fallback_available",
    distanceMeters: routeData.distanceMeters || null,
    duration: routeData.duration || null,
    description: routeData.description || ""
  });
  return providerResponse({
    provider,
    action,
    status: routeResult.body?.status === "completed" ? "completed" : "fallback_available",
    missingConfig: routeResult.body?.missingConfig || [],
    message: routeResult.body?.missingConfig?.length
      ? "Google Maps API key is missing. Field visit route fallback URL returned from user-provided origin and destination only."
      : "Field visit route prepared from user-provided origin and destination after explicit confirmation.",
    data: {
      plan,
      route: {
        origin: basePlan.origin,
        destination: primaryDestination.addressText,
        routeUrl: routeData.routeUrl || plan.routeFallbackUrl,
        distanceMeters: routeData.distanceMeters || null,
        duration: routeData.duration || null,
        description: routeData.description || "",
        noLocationPermissionRequested: true
      }
    }
  });
}

function saveVisitPlan(body = {}, db, env = process.env) {
  const provider = "nexus-maps-field-visit-bridge";
  const action = "maps.field_visit.save";
  if (!envEnabled("NEXUS_MAPS_FIELD_VISIT_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_MAPS_FIELD_VISIT_BRIDGE_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const plan = buildPlan(body);
  const safetyError = validateVisitPlanInput(plan, "Field visit save");
  if (safetyError) return blockedResponse(provider, action, safetyError);
  const saved = {
    ...safePlanSummary(plan),
    status: "local_field_visit_plan_saved",
    savedAt: new Date().toISOString()
  };
  ensureVisitPlans(db).unshift(saved);
  db.profile.nexusFieldVisitPlans = db.profile.nexusFieldVisitPlans.slice(0, 50);
  return providerResponse({
    provider,
    action,
    status: "completed",
    message: "Field visit plan saved locally after explicit confirmation. No geolocation, provider contact, booking, dispatch, transport booking, or payment occurred.",
    data: { plan: saved }
  });
}

function createVisitReminder(body = {}, db, env = process.env) {
  const provider = "nexus-maps-field-visit-bridge";
  const action = "maps.field_visit.reminder";
  if (!envEnabled("NEXUS_MAPS_FIELD_VISIT_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_MAPS_FIELD_VISIT_BRIDGE_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const plan = buildPlan(body);
  const safetyError = validateVisitPlanInput(plan, "Field visit reminder");
  if (safetyError) return blockedResponse(provider, action, safetyError);
  const reminderType = clean(body.reminderType || "Field visit").slice(0, 80);
  const reminder = remindersProvider.create({
    confirmed: true,
    title: `${reminderType}: ${plan.title}`,
    dueAt: clean(body.dueAt || "next field visit review"),
    note: "Maps Field Visit reminder. In-app only; no OS notification permission, provider contact, booking, dispatch, transport booking, or payment."
  }, db, env);
  if (reminder.body?.status !== "completed") return reminder;
  return providerResponse({
    provider,
    action,
    status: "completed",
    message: "Field visit reminder created after explicit confirmation. No OS notification permission was requested.",
    data: { reminder: reminder.body.data.reminder }
  });
}

function queueVisitOffline(body = {}, db, env = process.env) {
  const provider = "nexus-maps-field-visit-bridge";
  const action = "maps.field_visit.offline";
  if (!envEnabled("NEXUS_MAPS_FIELD_VISIT_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_MAPS_FIELD_VISIT_BRIDGE_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const plan = buildPlan(body);
  const safetyError = validateVisitPlanInput(plan, "Field visit offline queue");
  if (safetyError) return blockedResponse(provider, action, safetyError);
  const content = JSON.stringify({
    planId: plan.id,
    title: plan.title,
    originText: plan.origin,
    destinationLabels: plan.destinations.map(destination => destination.label),
    destinationAddressText: plan.destinations.map(destination => destination.addressText),
    routeFallbackUrl: plan.routeFallbackUrl,
    queuedAt: new Date().toISOString(),
    noLiveTracking: true,
    noProviderContact: true,
    noMoneyMovement: true,
    noDispatch: true
  });
  const queued = offlineSyncProvider.queueItem({ confirmed: true, type: "field_visit_plan", content }, db, env);
  if (queued.body?.status !== "completed") return queued;
  return providerResponse({
    provider,
    action,
    status: "completed",
    message: "Field visit plan queued locally for offline review after explicit confirmation. Safe route metadata only.",
    data: { item: queued.body.data.item }
  });
}

function savedVisitPlans(db, env = process.env) {
  const provider = "nexus-maps-field-visit-bridge";
  const action = "maps.field_visit.saved";
  if (!envEnabled("NEXUS_MAPS_FIELD_VISIT_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_MAPS_FIELD_VISIT_BRIDGE_ENABLED");
  return providerResponse({
    provider,
    action,
    status: "completed",
    message: "Loaded locally saved field visit plans.",
    data: { plans: ensureVisitPlans(db).slice(0, 25) }
  });
}

module.exports = {
  status,
  createVisitPlan,
  routeVisitPlan,
  saveVisitPlan,
  createVisitReminder,
  queueVisitOffline,
  savedVisitPlans,
  normalizeDestination,
  buildPlan
};
