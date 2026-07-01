const { clean, envEnabled, providerResponse, disabledResponse, requireConfirmation, blockedResponse } = require("./providerUtils");
const djiProvider = require("./djiProvider");
const remindersProvider = require("./reminderProvider");
const offlineSyncProvider = require("./offlineSyncProvider");

const SENSITIVE_DRONE_PATTERN = /\b(emergency|disaster dispatch|flight launch|takeoff|control aircraft|payment|secret|token|password|restricted airspace)\b/i;

function status(env = process.env) {
  return {
    provider: "nexus-drone-mission-bridge",
    enabled: envEnabled("NEXUS_DRONE_MISSION_BRIDGE_ENABLED", env, true),
    dji: djiProvider.status(env),
    intakeOnly: true,
    flightControlEnabled: false,
    noDispatch: true,
    confirmationControlled: true
  };
}

function ensureRequests(db) {
  db.profile = db.profile || {};
  db.profile.nexusDroneMissionRequests = db.profile.nexusDroneMissionRequests || [];
  return db.profile.nexusDroneMissionRequests;
}

function requestRecord(body = {}) {
  return {
    id: clean(body.id || `drone-mission-${Date.now()}`),
    title: clean(body.title || "Drone mission request").slice(0, 180),
    missionType: clean(body.missionType || "crop monitoring").slice(0, 80),
    area: clean(body.area || body.fieldArea).slice(0, 180),
    purpose: clean(body.purpose || "Field review preparation").slice(0, 280),
    status: "intake_only",
    flightControlEnabled: false,
    dispatchAuthorized: false,
    createdAt: clean(body.createdAt) || new Date().toISOString()
  };
}

function validate(record) {
  if (!record.title || !record.area) return "Drone mission title and field area are required.";
  if (SENSITIVE_DRONE_PATTERN.test(Object.values(record).join(" "))) return "Drone mission blocked because it includes flight control, emergency dispatch, payment, restricted airspace, credential, or secret content.";
  return "";
}

function missionRequest(body = {}, db, env = process.env) {
  const provider = "nexus-drone-mission-bridge";
  const action = "drones.bridge.mission_request";
  if (!envEnabled("NEXUS_DRONE_MISSION_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_DRONE_MISSION_BRIDGE_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const request = requestRecord(body);
  const error = validate(request);
  if (error) return blockedResponse(provider, action, error);
  ensureRequests(db).unshift(request);
  db.profile.nexusDroneMissionRequests = db.profile.nexusDroneMissionRequests.slice(0, 50);
  return providerResponse({ provider, action, status: "completed", message: "Drone mission request saved as intake only. No drone flight was launched, controlled, or dispatched.", data: { request } });
}

function missionRequests(db, env = process.env) {
  const provider = "nexus-drone-mission-bridge";
  const action = "drones.bridge.mission_requests";
  if (!envEnabled("NEXUS_DRONE_MISSION_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_DRONE_MISSION_BRIDGE_ENABLED");
  return providerResponse({ provider, action, status: "completed", message: "Loaded drone mission intake requests.", data: { requests: ensureRequests(db).slice(0, 25) } });
}

function reminder(body = {}, db, env = process.env) {
  const provider = "nexus-drone-mission-bridge";
  const action = "drones.bridge.reminder";
  if (!envEnabled("NEXUS_DRONE_MISSION_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_DRONE_MISSION_BRIDGE_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const record = requestRecord(body);
  const error = validate(record);
  if (error) return blockedResponse(provider, action, error);
  const result = remindersProvider.create({ confirmed: true, title: `Drone intake review: ${record.title}`, dueAt: clean(body.dueAt || "next drone mission review"), note: "Drone intake reminder only; no flight control or dispatch." }, db, env);
  if (result.body?.status !== "completed") return result;
  return providerResponse({ provider, action, status: "completed", message: "Drone mission reminder created after explicit confirmation. No OS notification permission was requested.", data: { reminder: result.body.data.reminder } });
}

function offline(body = {}, db, env = process.env) {
  const provider = "nexus-drone-mission-bridge";
  const action = "drones.bridge.offline";
  if (!envEnabled("NEXUS_DRONE_MISSION_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_DRONE_MISSION_BRIDGE_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const record = requestRecord(body);
  const error = validate(record);
  if (error) return blockedResponse(provider, action, error);
  const queued = offlineSyncProvider.queueItem({ confirmed: true, type: "drone_mission_intake", content: JSON.stringify({ title: record.title, missionType: record.missionType, fieldAreaText: record.area, purpose: record.purpose, noFlightControl: true, noDispatch: true }) }, db, env);
  if (queued.body?.status !== "completed") return queued;
  return providerResponse({ provider, action, status: "completed", message: "Drone mission intake queued locally for offline review. No flight control or dispatch was queued.", data: { item: queued.body.data.item } });
}

module.exports = { status, missionRequest, missionRequests, reminder, offline, requestRecord };
