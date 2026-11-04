"use strict";

const { resolveReminderTime, describeMoment, extractAssistantReminderTask } = require("./time-phrase.js");
const { reminderContent } = require("./private-reminder.js");
const { copiesOf } = require("./duplicates.js");

function createReminderScheduleExecutor({ notifications }) {
  if (!notifications?.enqueue) throw new Error("A notification repository is required.");
  return async function execute({ input, context, taskId, idempotencyKey }) {
    // The deterministic planner sends { reminder, when } (the user's own words). The AI planner, when it
    // handles a phrasing the deterministic one misses, invents its own field names ({ title,
    // timeOffsetMinutes }). Those were ignored, so the reminder silently became "follow up" due tomorrow.
    const rawText = String(input?.when || input?.reminder || input?.text || input?.message || input?.title || "").trim();
    const offsetMinutes = Number(input?.timeOffsetMinutes);
    const hasOffset = Number.isFinite(offsetMinutes) && offsetMinutes > 0 && offsetMinutes <= 60 * 24 * 365;
    let scheduledAt; let resolvedTime;
    if (hasOffset) {
      const when = new Date(Date.now() + offsetMinutes * 60 * 1000);
      scheduledAt = when.toISOString();
      resolvedTime = `in ${offsetMinutes} minute${offsetMinutes === 1 ? "" : "s"}, ${describeMoment(when, { timeZone: context.timeZone })}`;
    } else {
      // A time that is unclear (a bare "at 6"), contradicts itself, or is missing is never turned into a guess: nothing is scheduled, and the question to ask is the error.
      const timing = resolveReminderTime(rawText, { timeZone: context.timeZone });
      if (timing.status !== "ok") throw Object.assign(new Error((input?.language === "sw" || timing.language === "sw" ? timing.ask?.sw : timing.ask?.en) || timing.ask?.en || "I need to know when to remind you. Nothing was set."), { code: "reminder_time_unclear", status: 422 });
      scheduledAt = timing.scheduledAt;
      resolvedTime = timing.readback;
    }
    const task = extractAssistantReminderTask(String(input?.reminder || input?.title || rawText).trim());
    // The same reminder is not made twice. A spoken "remind me to drink water in 2 minutes" can reach this creator AND the older command route (the voice model's own tool call arrives as well as the page's), and
    // the older route already looks for a copy; this one never did, so one spoken reminder could be two rows and cancelling one left the other to fire (4 November 2026 test report). A copy of the same words within
    // 90 seconds that is already there (queued, or being sent right now) is the reminder.
    let existing = null;
    if (typeof notifications.listReminders === "function") {
      try { existing = copiesOf(await notifications.listReminders({ tenantId: context.tenantId, userId: context.userId, limit: 200, includeInFlight: true }), { content: { reminderText: task }, scheduled_at: scheduledAt })[0] || null; } catch { existing = null; }
    }
    const notification = existing || await notifications.enqueue({
      tenantId: context.tenantId,
      userId: context.userId,
      taskId,
      channel: "push",
      content: reminderContent(task, { whenLabel: resolvedTime, ...(input?.language === "sw" ? { language: "sw" } : {}) }),
      scheduledAt: new Date(scheduledAt),
      idempotencyKey
    });
    return {
      resolvedTime,
      scheduledAt,
      reminderId: notification.notification_id,
      notificationId: notification.notification_id,
      persisted: true,
      reminder: task,
      ...(existing ? { duplicate: true } : {})
    };
  };
}

function verifyReminderScheduleOutcome({ result }) {
  const verified = result?.persisted === true
    && typeof result?.notificationId === "string" && result.notificationId.length > 0
    && !Number.isNaN(new Date(result?.scheduledAt || "").getTime());
  return { verified, method: "local_notification_enqueue", reason: verified ? null : "reminder_enqueue_incomplete" };
}

module.exports = Object.freeze({ createReminderScheduleExecutor, verifyReminderScheduleOutcome });
