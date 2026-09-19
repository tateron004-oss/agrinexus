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

test("the AI planner's own field names (title + timeOffsetMinutes) schedule the real time and text, not tomorrow's 'follow up'", async () => {
  // Confirmed live 2026-09-19: "Remind me to test push in 2 minutes." reached the executor as
  // { title: "Test push", timeOffsetMinutes: 2 }, which was ignored: due tomorrow, text "follow up".
  const { notifications, enqueued } = fixture();
  const before = Date.now();
  const result = await createReminderScheduleExecutor({ notifications })({ input: { title: "Test push", timeOffsetMinutes: 2 },
    context: { tenantId: "t", userId: "u" }, taskId: "tsk", idempotencyKey: "k" });
  const due = new Date(enqueued[0].scheduledAt).getTime();
  assert.ok(due >= before + 119000 && due <= Date.now() + 121000, "due in about two minutes");
  assert.equal(result.reminder, "Test push"); assert.equal(enqueued[0].content.reminderText, "Test push");
  assert.equal(result.resolvedTime, "in 2 minutes");
});

test("an unusable offset is ignored and the user's own words still decide the time", async () => {
  for (const bad of [0, -5, "abc", 10 ** 9, null]) {
    const { notifications, enqueued } = fixture();
    await createReminderScheduleExecutor({ notifications })({ input: { when: "remind me to stretch in 3 hours", timeOffsetMinutes: bad },
      context: { tenantId: "t", userId: "u" }, taskId: "tsk", idempotencyKey: "k" });
    const hours = (new Date(enqueued[0].scheduledAt).getTime() - Date.now()) / 3600000;
    assert.ok(hours > 2.9 && hours < 3.1, `offset ${bad} ignored`);
  }
});

test("the deterministic { reminder, when } input is unchanged", async () => {
  const { notifications, enqueued } = fixture();
  const goal = "Remind me to check my crops in 30 minutes";
  const result = await createReminderScheduleExecutor({ notifications })({ input: { reminder: goal, when: goal }, context: { tenantId: "t", userId: "u" }, taskId: "tsk", idempotencyKey: "k" });
  assert.equal(result.reminder, "check my crops");
  assert.equal(result.resolvedTime, "in 30 minutes");
  assert.ok(new Date(enqueued[0].scheduledAt).getTime() - Date.now() < 31 * 60 * 1000);
});
