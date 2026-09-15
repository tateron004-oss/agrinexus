"use strict";

const { parseAssistantReminderTime, extractAssistantReminderTask } = require("./time-phrase.js");

function createReminderScheduleExecutor({ notifications }) {
  if (!notifications?.enqueue) throw new Error("A notification repository is required.");
  return async function execute({ input, context, taskId, idempotencyKey }) {
    const rawText = String(input?.when || input?.reminder || "").trim();
    const { scheduledAt, whenLabel } = parseAssistantReminderTime(rawText);
    const task = extractAssistantReminderTask(rawText);
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
