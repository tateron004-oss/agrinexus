const { clean, envEnabled, providerResponse, disabledResponse, requireConfirmation, blockedResponse } = require("./providerUtils");
const zoomProvider = require("./zoomProvider");
const remindersProvider = require("./reminderProvider");
const offlineSyncProvider = require("./offlineSyncProvider");

const SESSION_TYPES = new Set(["provider review", "learning/training", "agriculture support", "workforce coaching", "marketplace support", "community service"]);
const SENSITIVE_SESSION_PATTERN = /\b(diagnos|prescri|medical record|patient|payment|card|bank|secret|token|password|emergency|dispatch|invite all)\b/i;

function status(env = process.env) {
  return { provider: "nexus-session-bridge", enabled: envEnabled("NEXUS_SESSION_BRIDGE_ENABLED", env, true), zoom: zoomProvider.status(env), preparationAvailable: true, noHiddenInvites: true, confirmationControlled: true };
}

function sessionPlan(body = {}) {
  const sessionType = clean(body.sessionType || "learning/training").toLowerCase();
  return {
    id: clean(body.id || `session-plan-${Date.now()}`),
    title: clean(body.title || "Nexus session plan").slice(0, 180),
    sessionType: SESSION_TYPES.has(sessionType) ? sessionType : "community service",
    topic: clean(body.topic || body.title || "Nexus prepared session").slice(0, 180),
    startTime: clean(body.startTime || ""),
    duration: Math.min(Number(body.duration || 30), 120),
    status: "prepared_only",
    invitesSent: false,
    providerBooked: false,
    medicalAppointmentClaimed: false,
    createdAt: clean(body.createdAt) || new Date().toISOString()
  };
}

function validate(plan) {
  if (!plan.title || !plan.topic) return "Session title and topic are required.";
  if (SENSITIVE_SESSION_PATTERN.test(Object.values(plan).join(" "))) return "Session plan blocked because it includes health, payment, emergency, invite, credential, or secret content.";
  return "";
}

function prepare(body = {}, db, env = process.env) {
  const provider = "nexus-session-bridge";
  const action = "sessions.prepare";
  if (!envEnabled("NEXUS_SESSION_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_SESSION_BRIDGE_ENABLED");
  const plan = sessionPlan(body);
  const error = validate(plan);
  if (error) return blockedResponse(provider, action, error);
  return providerResponse({ provider, action, status: "prepared", message: "Session plan prepared locally. No Zoom meeting, invite, booking, or medical appointment was created.", data: { plan } });
}

async function createZoom(body = {}, db, env = process.env) {
  const provider = "nexus-session-bridge";
  const action = "sessions.zoom.create";
  if (!envEnabled("NEXUS_SESSION_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_SESSION_BRIDGE_ENABLED");
  const plan = sessionPlan(body);
  const error = validate(plan);
  if (error) return blockedResponse(provider, action, error);
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  return zoomProvider.createMeeting({ confirmed: true, topic: plan.topic, startTime: plan.startTime, duration: plan.duration }, env);
}

function reminder(body = {}, db, env = process.env) {
  const provider = "nexus-session-bridge";
  const action = "sessions.reminder";
  if (!envEnabled("NEXUS_SESSION_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_SESSION_BRIDGE_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const plan = sessionPlan(body);
  const error = validate(plan);
  if (error) return blockedResponse(provider, action, error);
  const result = remindersProvider.create({ confirmed: true, title: `Session review: ${plan.title}`, dueAt: clean(body.dueAt || "next session review"), note: "Session reminder only; no booking or invites sent." }, db, env);
  if (result.body?.status !== "completed") return result;
  return providerResponse({ provider, action, status: "completed", message: "Session reminder created after explicit confirmation. No OS notification permission was requested.", data: { reminder: result.body.data.reminder } });
}

function offline(body = {}, db, env = process.env) {
  const provider = "nexus-session-bridge";
  const action = "sessions.offline";
  if (!envEnabled("NEXUS_SESSION_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_SESSION_BRIDGE_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const plan = sessionPlan(body);
  const error = validate(plan);
  if (error) return blockedResponse(provider, action, error);
  const queued = offlineSyncProvider.queueItem({ confirmed: true, type: "session_plan", content: JSON.stringify({ title: plan.title, sessionType: plan.sessionType, topic: plan.topic, noBooking: true, noInvites: true }) }, db, env);
  if (queued.body?.status !== "completed") return queued;
  return providerResponse({ provider, action, status: "completed", message: "Session plan queued locally for offline review. No booking or invites were queued.", data: { item: queued.body.data.item } });
}

module.exports = { status, prepare, createZoom, reminder, offline, sessionPlan };
