"use strict";

const crypto = require("node:crypto");

// One person's one-time reminders in the store the worker really delivers from (nexus_notifications, sent as web push when their time comes), for the older command route and the
// phone line. These used to be written to the shared legacy list (db.profile.assistantReminders), which nothing ever delivers: a reminder set by voice or in the command box
// never arrived. There are two stores in the product:
//   * the delivery store (this file, and the planner's reminders.schedule): real push at the reminder's time.
//   * the legacy list (db.profile.assistantReminders): now only a mirror kept for the morning briefing and the older screens, and the home of reminders made before this change.
// Everything is scoped to the owner (tenant + user): nobody can list, change or cancel another person's reminder.

const DEDUPE_MS = 90 * 1000;
const normalize = value => String(value || "").toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
const iso = value => { const date = value instanceof Date ? value : new Date(value); return Number.isNaN(date.getTime()) ? "" : date.toISOString(); };

// A stored reminder, as the older route talks about it.
function shape(row) {
  const content = row?.content || {};
  return { id: row.notification_id, task: String(content.reminderText || content.body || ""), scheduledAt: iso(row.scheduled_at), createdAt: iso(row.created_at), timeZone: String(content.timeZone || ""),
    whenLabel: String(content.whenLabel || ""), correlationId: String(content.correlationId || ""), legacyId: String(content.legacyReminderId || ""), source: "delivery", state: row.state || "queued" };
}

function createDeliveryReminders({ notifications, tenantId, userId }) {
  if (!notifications?.enqueue || !notifications?.listReminders || !notifications?.cancelReminder) throw new Error("A notification repository is required.");
  if (!tenantId || !userId) throw new Error("Tenant and user are required.");
  const list = async () => (await notifications.listReminders({ tenantId, userId, limit: 200 })).map(shape);
  const contentOf = ({ task, whenLabel, timeZone, correlationId, legacyId, language }) => ({ title: "Nexus reminder", body: task, reminderText: task, whenLabel: whenLabel || "", timeZone: timeZone || "",
    ...(correlationId ? { correlationId } : {}), ...(legacyId ? { legacyReminderId: legacyId } : {}), ...(language ? { language } : {}), source: "older-route" });

  return Object.freeze({
    list,
    // -> { duplicate, reminder }. The same words at the same moment (within 90 seconds), or the same request sent again (same correlation id), is the reminder already there.
    async schedule({ task, scheduledAt, whenLabel, timeZone, correlationId = "", legacyId = "", language = "" }) {
      if (!task || !iso(scheduledAt)) throw new Error("A reminder needs its words and a time.");
      const wanted = normalize(task); const when = Date.parse(scheduledAt);
      if (!legacyId) {
        const dup = (await list()).find(item => normalize(item.task) === wanted && ((correlationId && item.correlationId === correlationId) || Math.abs(Date.parse(item.scheduledAt) - when) <= DEDUPE_MS));
        if (dup) return { duplicate: true, reminder: dup };
      }
      // The key makes the same request, arriving twice at once, one row; a reminder moved in from the legacy list is keyed by its own id, so moving it twice is moving it once.
      const key = legacyId ? `legacy-reminder:${legacyId}` : correlationId ? `older-reminder:${correlationId}:${crypto.createHash("sha1").update(wanted).digest("hex").slice(0, 12)}` : `older-reminder:${crypto.randomUUID()}`;
      const make = idempotencyKey => notifications.enqueue({ tenantId, userId, channel: "push", scheduledAt: new Date(scheduledAt), idempotencyKey, content: contentOf({ task, whenLabel, timeZone, correlationId, legacyId, language }) });
      let row = await make(key);
      if (row?.state && row.state !== "queued" && !legacyId) row = await make(`older-reminder:${crypto.randomUUID()}`);
      if (!row?.notification_id) throw new Error("The reminder was not stored.");
      return { duplicate: false, reminder: shape(row) };
    },
    async cancel(id) { return Boolean(await notifications.cancelReminder({ tenantId, userId, notificationId: id })); },
    // A new time is a new queued row and the old one cancelled, so a failure at either step never leaves the person with two live reminders or none.
    async change(id, { scheduledAt, whenLabel, timeZone }) {
      const current = (await list()).find(item => item.id === id);
      if (!current) return { ok: false, reason: "not_found" };
      const made = await notifications.enqueue({ tenantId, userId, channel: "push", scheduledAt: new Date(scheduledAt), idempotencyKey: `older-reminder:${crypto.randomUUID()}`,
        content: contentOf({ task: current.task, whenLabel, timeZone: timeZone || current.timeZone, correlationId: "", legacyId: current.legacyId }) });
      if (!(await notifications.cancelReminder({ tenantId, userId, notificationId: id }))) {
        await notifications.cancelReminder({ tenantId, userId, notificationId: made.notification_id });
        return { ok: false, reason: "no_longer_upcoming" };
      }
      return { ok: true, reminder: shape(made) };
    },
    async cancelAll() { let count = 0; for (const item of await list()) if (await notifications.cancelReminder({ tenantId, userId, notificationId: item.id })) count += 1; return count; }
  });
}

module.exports = Object.freeze({ createDeliveryReminders, DEDUPE_MS });
