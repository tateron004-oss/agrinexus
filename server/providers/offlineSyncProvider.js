const {
  clean,
  envEnabled,
  providerResponse,
  disabledResponse,
  requireConfirmation,
  blockedResponse
} = require("./providerUtils");

const BLOCKED_TYPES = /(health|medical|patient|payment|card|bank|contact_secret|provider_handoff|call|message|sms|whatsapp|telegram|email|location|camera|emergency|drone_flight|marketplace_payment)/i;

function status(env = process.env) {
  return {
    provider: "local-offline-sync",
    enabled: envEnabled("NEXUS_OFFLINE_SYNC_ENABLED", env, true),
    highRiskQueueBlocked: true
  };
}

function ensureQueue(db) {
  db.profile = db.profile || {};
  db.profile.offlineQueue = db.profile.offlineQueue || [];
  db.profile.offlineSyncHistory = db.profile.offlineSyncHistory || [];
  return db.profile.offlineQueue;
}

function queueItem(body = {}, db, env = process.env) {
  const provider = "local-offline-sync";
  const action = "offline.queue";
  if (!envEnabled("NEXUS_OFFLINE_SYNC_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_OFFLINE_SYNC_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const type = clean(body.type || "note");
  const content = clean(body.content);
  if (!content) return blockedResponse(provider, action, "Offline queue content is required.");
  if (BLOCKED_TYPES.test(`${type} ${content}`)) return blockedResponse(provider, action, "High-risk or sensitive offline queue item blocked. No provider handoff or execution was queued.");
  const item = { id: `offline-${Date.now()}`, type, content, status: "queued", createdAt: new Date().toISOString() };
  ensureQueue(db).unshift(item);
  db.profile.offlineQueue = db.profile.offlineQueue.slice(0, 50);
  return providerResponse({ provider, action, status: "completed", message: "Safe offline item queued locally.", data: { item } });
}

function sync(body = {}, db, env = process.env) {
  const provider = "local-offline-sync";
  const action = "offline.sync";
  if (!envEnabled("NEXUS_OFFLINE_SYNC_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_OFFLINE_SYNC_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const queue = ensureQueue(db);
  const synced = [];
  const skipped = [];
  for (const item of queue) {
    if (BLOCKED_TYPES.test(`${item.type} ${item.content}`)) skipped.push({ ...item, status: "skipped_sensitive" });
    else synced.push({ ...item, status: "synced_safe_local" });
  }
  db.profile.offlineQueue = skipped;
  db.profile.offlineSyncHistory.unshift({ id: `sync-${Date.now()}`, synced: synced.length, skipped: skipped.length, createdAt: new Date().toISOString() });
  db.profile.offlineSyncHistory = db.profile.offlineSyncHistory.slice(0, 25);
  return providerResponse({
    provider,
    action,
    status: "completed",
    message: `Offline sync processed ${synced.length} safe item(s) and skipped ${skipped.length} sensitive/high-risk item(s).`,
    data: { synced, skipped }
  });
}

module.exports = { status, queueItem, sync };
