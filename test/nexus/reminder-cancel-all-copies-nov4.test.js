"use strict";
// From the owner's 4 November 2026 test report: "i cancelled the reminder and it sent the reminder anyway" (platform-06, "Remind me to drink water in 2 minutes"), and "calendar creation is
// turned off so it can't sync to calendar" when setting reminders (everyday-09, a dated reminder). Every way found for a cancelled reminder to still arrive is pinned here:
//   1. the same spoken reminder made twice (no dedupe in the planner's creator) and only one copy cancelled;
//   2. a reminder the worker had already claimed ('delivering'), which cancel never saw and the worker sent regardless;
//   3. the worker's one-after-another send of a batch, where a row cancelled after the claim was still sent when its turn came.
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { createMemoryNotifications } = require("../../nexus/reminders/memory-stores.js");
const { createReminderScheduleExecutor } = require("../../nexus/reminders/executor.js");
const { createRemindersCancelExecutor, createRemindersCancelPreview, createRemindersListExecutor } = require("../../nexus/reminders/manage-executor.js");
const { createDeliveryReminders } = require("../../nexus/reminders/delivery-store.js");
const { sameReminder, copiesOf, areAllCopies } = require("../../nexus/reminders/duplicates.js");
const { createHandlers } = require("../../nexus/workers/handlers.js");
const { resolveReminderTime } = require("../../nexus/reminders/time-phrase.js");

const context = { tenantId: "tenant-1", userId: "user-1", timeZone: "America/Los_Angeles" };
const row = (id, text, when) => ({ notification_id: id, content: { reminderText: text }, scheduled_at: when });

test("the same words within 90 seconds are one reminder; different words or a different time are not", () => {
  const a = row("a", "Drink water", "2026-11-04T18:00:00Z");
  assert.equal(sameReminder(a, row("b", "drink  water!", "2026-11-04T18:01:00Z")), true);
  assert.equal(sameReminder(a, row("b", "drink water", "2026-11-04T18:05:00Z")), false);
  assert.equal(sameReminder(a, row("b", "drink tea", "2026-11-04T18:00:00Z")), false);
  assert.equal(copiesOf([a, row("b", "drink water", "2026-11-04T18:00:30Z"), row("c", "buy milk", "2026-11-04T18:00:00Z")], a).length, 2);
  assert.equal(areAllCopies([a, row("b", "drink water", "2026-11-04T18:00:30Z")]), true);
  assert.equal(areAllCopies([a, row("c", "buy milk", "2026-11-04T18:00:00Z")]), false);
  assert.equal(areAllCopies([a]), false, "one reminder is not a set of copies");
});

test("the planner's creator does not make the same spoken reminder twice", async () => {
  const notifications = createMemoryNotifications();
  const execute = createReminderScheduleExecutor({ notifications });
  const input = { reminder: "Remind me to drink water in 2 minutes", when: "in 2 minutes" };
  const first = await execute({ input, context, taskId: "t1", idempotencyKey: "k1" });
  const second = await execute({ input, context, taskId: "t2", idempotencyKey: "k2" });
  assert.equal(notifications.rows.length, 1, "two arrivals of one spoken request are one reminder");
  assert.equal(second.reminderId, first.reminderId);
  assert.equal(second.duplicate, true);
  assert.equal(first.duplicate, undefined);
});

test("cancelling a reminder that was made twice cancels every copy, so none is left to fire", async () => {
  const notifications = createMemoryNotifications();
  const at = new Date("2026-11-04T18:00:00Z");
  for (const key of ["a", "b"]) await notifications.enqueue({ tenantId: context.tenantId, userId: context.userId, channel: "push", scheduledAt: at, idempotencyKey: key, content: { reminderText: "drink water" } });
  const preview = await createRemindersCancelPreview({ notifications })({ input: { reminder: "drink water" }, context });
  assert.match(preview, /set 2 times; I will cancel all 2/);
  const result = await createRemindersCancelExecutor({ notifications })({ input: { reminder: "drink water" }, context });
  assert.equal(result.cancelled, true);
  assert.equal(result.cancelledCount, 2);
  assert.equal(notifications.rows.filter(item => item.state === "queued").length, 0, "no copy is left queued");
  assert.match(result.summary, /all 2 are cancelled/);
});

test("different reminders that merely share words are still asked about, never both cancelled", async () => {
  const notifications = createMemoryNotifications();
  await notifications.enqueue({ tenantId: context.tenantId, userId: context.userId, channel: "push", scheduledAt: new Date("2026-11-04T18:00:00Z"), idempotencyKey: "a", content: { reminderText: "call the vendor" } });
  await notifications.enqueue({ tenantId: context.tenantId, userId: context.userId, channel: "push", scheduledAt: new Date("2026-11-05T18:00:00Z"), idempotencyKey: "b", content: { reminderText: "call the vendor" } });
  const result = await createRemindersCancelExecutor({ notifications })({ input: { reminder: "call the vendor" }, context });
  assert.equal(result.cancelled, false);
  assert.equal(result.reason, "ambiguous");
  assert.equal(notifications.rows.filter(item => item.state === "queued").length, 2);
});

test("a reminder the worker has already claimed is seen, can be cancelled, and the person is told it may still arrive", async () => {
  const notifications = createMemoryNotifications();
  const made = await notifications.enqueue({ tenantId: context.tenantId, userId: context.userId, channel: "push", scheduledAt: new Date("2026-11-04T18:00:00Z"), idempotencyKey: "a", content: { reminderText: "drink water" } });
  made.state = "delivering"; // claimed by the worker
  const listed = await createRemindersListExecutor({ notifications })({ context });
  assert.equal(listed.count, 1, "a claimed reminder is not invisible");
  const result = await createRemindersCancelExecutor({ notifications })({ input: { reminder: "drink water" }, context });
  assert.equal(result.cancelled, true);
  assert.equal(result.inFlight, true);
  assert.match(result.summary, /already being sent/);
  assert.equal(made.state, "cancelled");
  // Delivered is history: it is not cancellable and the answer is honest.
  made.state = "delivered";
  const late = await createRemindersCancelExecutor({ notifications })({ input: { reminder: "drink water" }, context });
  assert.equal(late.cancelled, false);
});

test("the older route's delivery store sees, dedupes and cancels in-flight copies", async () => {
  const notifications = createMemoryNotifications();
  const store = createDeliveryReminders({ notifications, tenantId: context.tenantId, userId: context.userId });
  const when = new Date("2026-11-04T18:00:00Z").toISOString();
  const first = await store.schedule({ task: "drink water", scheduledAt: when });
  notifications.rows[0].state = "delivering";
  const again = await store.schedule({ task: "drink water", scheduledAt: when });
  assert.equal(again.duplicate, true, "a copy being sent right now is still the same reminder");
  assert.equal(notifications.rows.length, 1);
  const outcome = await store.cancelDetailed(first.reminder.id);
  assert.deepEqual(outcome, { ok: true, inFlight: true });
  assert.equal(await store.cancelAll(), 0);
});

test("the worker re-checks a claimed reminder right before sending and does not send one cancelled in the meantime", async () => {
  const sent = []; const delivered = [];
  const claimed = [{ notification_id: "n1", channel: "push", content: { reminderText: "one" } }, { notification_id: "n2", channel: "push", content: { reminderText: "two" } }];
  const cancelled = new Set();
  const runtime = { notifications: {
    async claim() { return claimed; },
    async stillHeld(id) { return !cancelled.has(id); },
    async delivered(id) { delivered.push(id); },
    async failed() { return null }, async extendLease() {} } };
  const handlers = createHandlers({ runtime, workerId: "w1", deliveryProviders: { push: async notification => { sent.push(notification.notification_id); cancelled.add("n2"); /* cancelled while n1 is going out */ return { verified: true, method: "test" }; } } });
  const outcomes = await handlers["notifications.deliver"]({ job: { payload: {} }, heartbeat: async () => {} });
  assert.deepEqual(sent, ["n1"], "the cancelled reminder is never sent");
  assert.deepEqual(delivered, ["n1"]);
  const list = Array.isArray(outcomes) ? outcomes : outcomes?.outcomes || [];
  if (list.length) assert.ok(list.some(item => item.notificationId === "n2" && item.code === "no_longer_wanted"));
});

test("a failed re-check never blocks a send (the check is a safety, not a gate)", async () => {
  const sent = [];
  const runtime = { notifications: { async claim() { return [{ notification_id: "n1", channel: "push", content: {} }]; }, async stillHeld() { throw new Error("db blip"); },
    async delivered() {}, async failed() { return null; }, async extendLease() {} } };
  const handlers = createHandlers({ runtime, workerId: "w1", deliveryProviders: { push: async n => { sent.push(n.notification_id); return { verified: true }; } } });
  await handlers["notifications.deliver"]({ job: { payload: {} }, heartbeat: async () => {} });
  assert.deepEqual(sent, ["n1"]);
});

test("the repository cancels a claimed row and its re-check asks whether the worker still holds it", async () => {
  const { NotificationRepository } = require("../../nexus/notifications/repository.js");
  const calls = [];
  const db = { async query(sql, params) { calls.push({ sql, params }); return { rows: [] }; } };
  const repo = new NotificationRepository(db);
  await repo.cancelReminder({ tenantId: "t", userId: "u", notificationId: "n" });
  assert.match(calls[0].sql, /state in \('queued','delivering'\)/, "a claimed row can be cancelled");
  assert.match(calls[0].sql, /previous_state/);
  assert.equal(await repo.stillHeld("n", "w1"), false);
  assert.match(calls[1].sql, /state='delivering' and leased_by is not distinct from \$2/);
  await repo.listReminders({ tenantId: "t", userId: "u" });
  assert.match(calls[2].sql, /\$4::boolean/);
  assert.equal(calls[2].params[3], false, "in-flight rows are listed only when asked for");
});

test("a reminder sentence is never sent to the calendar tool (the 'calendar creation is turned off' message)", () => {
  const source = fs.readFileSync(path.join(__dirname, "..", "..", "server.js"), "utf8");
  assert.match(source, /toolName === "nexus_calendar" && typeof floorReminders !== "undefined" && floorReminders\.isSetRequest\(command\) && !\/\\b\(calendar\|meeting\|appointment\|event\)\\b\/i\.test\(command\)\) toolName = "nexus_automation_reminder"/);
});

test("a date this year has already passed is set for next year and the person is told so", () => {
  const now = new Date("2026-11-04T18:00:00Z");
  const past = resolveReminderTime("Remind me on 15 October at 10 am about the clinic", { timeZone: "America/Los_Angeles", now });
  assert.equal(past.status, "ok");
  assert.match(past.readback, /2027/);
  assert.match(past.readback, /already passed this year/);
  assert.match(past.readbackSw, /imeshapita/);
  const future = resolveReminderTime("Remind me on 15 December at 10 am about the clinic", { timeZone: "America/Los_Angeles", now });
  assert.doesNotMatch(future.readback, /already passed/);
  const stated = resolveReminderTime("Remind me on 15 October 2027 at 10 am about the clinic", { timeZone: "America/Los_Angeles", now });
  assert.doesNotMatch(stated.readback, /already passed/, "a year the person said is not second-guessed");
});
