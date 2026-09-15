"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createReminderScheduleExecutor, verifyReminderScheduleOutcome } = require("../../nexus/reminders/executor.js");

function fixture() {
  const enqueued = [];
  const notifications = {
    enqueue: async item => {
      const notification = { notification_id: `ntf_${enqueued.length + 1}`, ...item };
      enqueued.push(notification);
      return notification;
    }
  };
  return { notifications, enqueued };
}

test("createReminderScheduleExecutor requires a notification repository", () => {
  assert.throws(() => createReminderScheduleExecutor({}));
});

test("a natural-language reminder produces a real future scheduledAt and enqueues a push notification", async () => {
  const { notifications, enqueued } = fixture();
  const execute = createReminderScheduleExecutor({ notifications });
  const context = { tenantId: "tenant-1", userId: "user-1" };
  const result = await execute({ input: { when: "remind me to check irrigation tomorrow at 9am" }, context, taskId: "tsk_1", idempotencyKey: "idem-1" });

  assert.equal(enqueued.length, 1);
  assert.equal(enqueued[0].tenantId, "tenant-1");
  assert.equal(enqueued[0].userId, "user-1");
  assert.equal(enqueued[0].taskId, "tsk_1");
  assert.equal(enqueued[0].channel, "push");
  assert.equal(enqueued[0].idempotencyKey, "idem-1");
  assert.ok(enqueued[0].scheduledAt instanceof Date);
  assert.ok(enqueued[0].scheduledAt.getTime() > Date.now());
  assert.equal(enqueued[0].content.reminderText, "check irrigation");

  assert.equal(result.persisted, true);
  assert.equal(result.notificationId, "ntf_1");
  assert.equal(result.reminder, "check irrigation");
  assert.ok(new Date(result.scheduledAt).getTime() > Date.now());
});

test("'in 2 hours' resolves to roughly 2 hours out", async () => {
  const { notifications, enqueued } = fixture();
  const execute = createReminderScheduleExecutor({ notifications });
  const before = Date.now();
  await execute({ input: { when: "in 2 hours", reminder: "call the vet" }, context: { tenantId: "t", userId: "u" }, taskId: "tsk_2", idempotencyKey: "idem-2" });
  const deltaMs = enqueued[0].scheduledAt.getTime() - before;
  assert.ok(deltaMs > 1.9 * 60 * 60 * 1000 && deltaMs < 2.1 * 60 * 60 * 1000);
});

test("verifyReminderScheduleOutcome passes for a well-formed result and fails for an incomplete one", () => {
  const good = { persisted: true, notificationId: "ntf_1", scheduledAt: new Date().toISOString() };
  assert.equal(verifyReminderScheduleOutcome({ result: good }).verified, true);

  assert.equal(verifyReminderScheduleOutcome({ result: { persisted: false } }).verified, false);
  assert.equal(verifyReminderScheduleOutcome({ result: { persisted: true, notificationId: "" } }).verified, false);
  assert.equal(verifyReminderScheduleOutcome({ result: { persisted: true, notificationId: "ntf_1", scheduledAt: "not-a-date" } }).verified, false);
  assert.equal(verifyReminderScheduleOutcome({ result: null }).verified, false);
});
