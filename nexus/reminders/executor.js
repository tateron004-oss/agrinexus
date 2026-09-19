"use strict";

const { parseAssistantReminderTime, extractAssistantReminderTask } = require("./time-phrase.js");

function createReminderScheduleExecutor({ notifications }) {
  if (!notifications?.enqueue) throw new Error("A notification repository is required.");
  return async function execute({ input, context, taskId, idempotencyKey }) {
    // The deterministic planner sends { reminder, when } (the user's own words). The AI planner, when it
    // handles a phrasing the deterministic one misses, invents its own field names ({ title,
    // timeOffsetMinutes }). Those were ignored, so the reminder silently became "follow up" due tomorrow.
    const rawText = String(input?.when || input?.reminder || input?.text || input?.message || input?.title || "").trim();
    const offsetMinutes = Number(input?.timeOffsetMinutes);
    const hasOffset = Number.isFinite(offsetMinutes) && offsetMinutes > 0 && offsetMinutes <= 60 * 24 * 365;
    const { scheduledAt, whenLabel } = hasOffset
      ? { scheduledAt: new Date(Date.now() + offsetMinutes * 60 * 1000).toISOString(), whenLabel: `in ${offsetMinutes} minute${offsetMinutes === 1 ? "" : "s"}` }
      : parseAssistantReminderTime(rawText);
    const task = extractAssistantReminderTask(String(input?.reminder || input?.title || rawText).trim());
    const notification = await notifications.enqueue({
      tenantId: context.tenantId,
      userId: context.userId,
      taskId,
      channel: "push",
      content: { title: "Nexus reminder", body: task, reminderText: task, whenLabel },
      scheduledAt: new Date(scheduledAt),
      idempotencyKey
    });
    return {
      resolvedTime: whenLabel,
      scheduledAt,
      reminderId: notification.notification_id,
      notificationId: notification.notification_id,
      persisted: true,
      reminder: task
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
