const {
  clean,
  envEnabled,
  providerResponse,
  disabledResponse,
  requireConfirmation,
  blockedResponse
} = require("./providerUtils");

function status(env = process.env) {
  return {
    provider: "local-reminders",
    enabled: envEnabled("NEXUS_REMINDERS_ENABLED", env, true),
    osNotificationsEnabled: false
  };
}

function ensureReminders(db) {
  db.profile = db.profile || {};
  db.profile.nexusReminders = db.profile.nexusReminders || [];
  return db.profile.nexusReminders;
}

function list(db, env = process.env) {
  const provider = "local-reminders";
  const action = "reminders.list";
  if (!envEnabled("NEXUS_REMINDERS_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_REMINDERS_ENABLED");
  return providerResponse({
    provider,
    action,
    status: "completed",
    message: "Loaded in-app reminders. No OS notification permission was requested.",
    data: { cards: ensureReminders(db).slice(0, 25), osNotificationsEnabled: false }
  });
}

function create(body = {}, db, env = process.env) {
  const provider = "local-reminders";
  const action = "reminders.create";
  if (!envEnabled("NEXUS_REMINDERS_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_REMINDERS_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  if (!clean(body.title)) return blockedResponse(provider, action, "Reminder title is required.");
  // Found live (unbounded-input sweep): unlike its sibling POST
  // /api/nexus/reminders (server.js, sanitizePilotText caps title/notes/
  // time at 160/320/120), this function's own create() had no length cap at
  // all -- the request body's only limit is the global 20MB readBody cap,
  // and db.profile.nexusReminders is capped by item COUNT (50), not by
  // size, so a handful of multi-MB reminders meaningfully bloats the single
  // JSON/jsonb state blob every read/write rewrites wholesale.
  const reminder = {
    id: `reminder-${Date.now()}`,
    title: clean(body.title).slice(0, 200),
    dueAt: clean(body.dueAt || "").slice(0, 120),
    note: clean(body.note || "").slice(0, 500),
    status: "in_app_only",
    osNotificationRequested: false,
    createdAt: new Date().toISOString()
  };
  ensureReminders(db).unshift(reminder);
  db.profile.nexusReminders = db.profile.nexusReminders.slice(0, 50);
  return providerResponse({
    provider,
    action,
    status: "completed",
    message: "In-app reminder created after explicit confirmation. No OS notification permission was requested.",
    data: { reminder }
  });
}

module.exports = { status, list, create };
