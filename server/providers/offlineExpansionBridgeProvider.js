const { clean, envEnabled, providerResponse, disabledResponse, requireConfirmation, blockedResponse } = require("./providerUtils");
const offlineSyncProvider = require("./offlineSyncProvider");

const SAFE_TYPES = new Set(["provider_card", "learning_resource", "marketplace_listing", "field_visit_plan", "drone_mission_intake", "communication_draft", "reminder", "workflow_plan", "session_plan", "course_plan"]);
const BLOCKED_TEXT = /\b(health|medical|patient|payment|card|bank|secret|token|password|call|message|sms|whatsapp|telegram|email|live location|geolocation|camera|emergency|dispatch|drone flight|checkout)\b/i;

function status(env = process.env) {
  return { provider: "nexus-offline-expansion-bridge", enabled: envEnabled("NEXUS_OFFLINE_EXPANSION_BRIDGE_ENABLED", env, true), safeMetadataOnly: true, noQueuedExecution: true };
}

function ensureQueue(db) {
  db.profile = db.profile || {};
  db.profile.offlineQueue = db.profile.offlineQueue || [];
  return db.profile.offlineQueue;
}

function items(db, env = process.env) {
  const provider = "nexus-offline-expansion-bridge";
  const action = "offline.bridge.items";
  if (!envEnabled("NEXUS_OFFLINE_EXPANSION_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_OFFLINE_EXPANSION_BRIDGE_ENABLED");
  return providerResponse({ provider, action, status: "completed", message: "Loaded safe local offline queue items.", data: { items: ensureQueue(db).slice(0, 50) } });
}

function queue(body = {}, db, env = process.env) {
  const provider = "nexus-offline-expansion-bridge";
  const action = "offline.bridge.queue";
  if (!envEnabled("NEXUS_OFFLINE_EXPANSION_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_OFFLINE_EXPANSION_BRIDGE_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const type = clean(body.type || "workflow_plan");
  const title = clean(body.title || "Offline bridge item").slice(0, 180);
  const summary = clean(body.summary || body.content || "Safe metadata item for offline review.").slice(0, 500);
  if (!SAFE_TYPES.has(type)) return blockedResponse(provider, action, "Offline bridge item type is not in the safe metadata allowlist.");
  if (BLOCKED_TEXT.test(`${type} ${title} ${summary}`)) return blockedResponse(provider, action, "Offline bridge blocked sensitive or executable content. No action was queued.");
  const queued = offlineSyncProvider.queueItem({ confirmed: true, type, content: JSON.stringify({ title, summary, queuedBy: "offline-expansion-bridge", noExecution: true }) }, db, env);
  if (queued.body?.status !== "completed") return queued;
  return providerResponse({ provider, action, status: "completed", message: "Safe metadata queued locally through Offline Expansion Bridge.", data: { item: queued.body.data.item } });
}

function sync(body = {}, db, env = process.env) {
  const provider = "nexus-offline-expansion-bridge";
  const action = "offline.bridge.sync";
  if (!envEnabled("NEXUS_OFFLINE_EXPANSION_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_OFFLINE_EXPANSION_BRIDGE_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  return offlineSyncProvider.sync({ confirmed: true }, db, env);
}

function clearSafe(body = {}, db, env = process.env) {
  const provider = "nexus-offline-expansion-bridge";
  const action = "offline.bridge.clear_safe";
  if (!envEnabled("NEXUS_OFFLINE_EXPANSION_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_OFFLINE_EXPANSION_BRIDGE_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const queueItems = ensureQueue(db);
  const blocked = queueItems.filter(item => BLOCKED_TEXT.test(`${item.type} ${item.content}`));
  const cleared = queueItems.length - blocked.length;
  db.profile.offlineQueue = blocked;
  return providerResponse({ provider, action, status: "completed", message: `Cleared ${cleared} safe offline item(s); retained ${blocked.length} blocked/sensitive item(s).`, data: { cleared, retained: blocked.length } });
}

module.exports = { status, items, queue, sync, clearSafe };
