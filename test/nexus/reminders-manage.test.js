"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { NotificationRepository } = require("../../nexus/notifications/repository.js");
const { createRemindersListExecutor, verifyRemindersListOutcome, createRemindersCancelExecutor, verifyRemindersCancelOutcome } = require("../../nexus/reminders/manage-executor.js");
const { completeRemindersManagePlan } = require("../../nexus/brain/planner.js");
const { createWorkspaceOutcome } = require("../../nexus/contracts/workspace-outcome.js");

const context = { tenantId: "tenant-1", userId: "user-1" };
const row = (id, text, when) => ({ notification_id: id, content: { reminderText: text }, scheduled_at: when });

function fakeNotifications(rows) {
  const state = { cancelled: [], rows: [...rows] };
  return { state,
    async listReminders() { return state.rows; },
    async cancelReminder({ notificationId }) {
      const found = state.rows.find(item => item.notification_id === notificationId);
      if (!found) return null;
      state.cancelled.push(notificationId); state.rows = state.rows.filter(item => item !== found); return found;
    } };
}

test("reminders.list returns readable strings (not objects) and verifies", async () => {
  const notifications = fakeNotifications([row("ntf_1", "call the vendor", "2026-09-19T15:00:00Z"), row("ntf_2", "buy milk", null)]);
  const result = await createRemindersListExecutor({ notifications })({ context });
  assert.equal(result.count, 2);
  assert.deepEqual(result.reminders, ["call the vendor (due 2026-09-19 15:00 UTC)", "buy milk (due no time set)"]);
  assert.ok(result.reminders.every(item => typeof item === "string"), "arrays of objects render as [object Object] in the client card");
  assert.deepEqual(result.reminderIds, ["ntf_1", "ntf_2"]);
  assert.equal(verifyRemindersListOutcome({ result }).verified, true);
  const empty = await createRemindersListExecutor({ notifications: fakeNotifications([]) })({ context });
  assert.equal(empty.summary, "You have no upcoming reminders.");
  assert.equal(verifyRemindersListOutcome({ result: empty }).verified, true);
});

test("reminders.cancel cancels exactly one matching reminder, ignoring a time phrase in the request", async () => {
  const notifications = fakeNotifications([row("ntf_1", "call the vendor", "2026-09-19T15:00:00Z"), row("ntf_2", "buy milk", null)]);
  const result = await createRemindersCancelExecutor({ notifications })({ context, input: { reminder: "call the vendor tomorrow at 3pm" } });
  assert.equal(result.cancelled, true);
  assert.equal(result.reminderId, "ntf_1");
  assert.deepEqual(notifications.state.cancelled, ["ntf_1"]);
  assert.equal(verifyRemindersCancelOutcome({ result }).verified, true);
});

test("reminders.cancel never guesses: several matches, none, or no subject all cancel nothing", async () => {
  const notifications = fakeNotifications([row("ntf_1", "call the vendor", null), row("ntf_2", "call the vendor about seeds", null), row("ntf_3", "buy milk", null)]);
  const execute = createRemindersCancelExecutor({ notifications });
  const ambiguous = await execute({ context, input: { reminder: "call the vendor" } });
  assert.equal(ambiguous.cancelled, false); assert.equal(ambiguous.reason, "ambiguous"); assert.equal(ambiguous.matches, 2);
  const missing = await execute({ context, input: { reminder: "water the goats" } });
  assert.equal(missing.reason, "not_found");
  const vague = await execute({ context, input: {} });
  assert.equal(vague.reason, "which_reminder");
  assert.equal(vague.candidates.length, 3, "a vague request names the candidates instead of picking one");
  assert.deepEqual(notifications.state.cancelled, []);
  for (const result of [ambiguous, missing, vague]) assert.equal(verifyRemindersCancelOutcome({ result }).verified, true);
});

// Found live: a raw substring test (storedText.includes(subject)) let a
// request naming a reminder that does NOT exist silently match a real,
// different reminder whenever the requested text was a character-for-
// character prefix of the stored one -- "invoice 2" (no such reminder) is a
// substring of the real "...invoice 23", so cancelling by "invoice 2"
// silently cancelled the real "invoice 23" reminder. Because that collision
// produces exactly one match, the ambiguous-match guard never sees it.
test("cancelling by a subject that does not exist never silently matches a different, similarly-worded real reminder", async () => {
  const notifications = fakeNotifications([row("ntf_1", "call the vendor about invoice 23", null)]);
  const result = await createRemindersCancelExecutor({ notifications })({ context, input: { reminder: "call the vendor about invoice 2" } });
  assert.equal(result.cancelled, false);
  assert.equal(result.reason, "not_found", "a request for the non-existent 'invoice 2' must never resolve to the real 'invoice 23'");
  assert.deepEqual(notifications.state.cancelled, [], "the real, different reminder must not be cancelled");
});

test("reminders.cancel by id resolves an otherwise ambiguous pair", async () => {
  const notifications = fakeNotifications([row("ntf_1", "call the vendor", null), row("ntf_2", "call the vendor", null)]);
  const result = await createRemindersCancelExecutor({ notifications })({ context, input: { reminderId: "ntf_2" } });
  assert.equal(result.cancelled, true);
  assert.deepEqual(notifications.state.cancelled, ["ntf_2"]);
});

test("a reminder that stopped being upcoming between lookup and cancel is reported, not claimed cancelled", async () => {
  const notifications = fakeNotifications([row("ntf_1", "buy milk", null)]);
  notifications.cancelReminder = async () => null;
  const result = await createRemindersCancelExecutor({ notifications })({ context, input: { reminder: "buy milk" } });
  assert.equal(result.cancelled, false);
  assert.equal(result.reason, "no_longer_upcoming");
});

test("the repository only touches the owner's still-queued reminders", async () => {
  const calls = [];
  const db = { async query(sql, params) { calls.push({ sql, params }); return { rows: [] }; } };
  const repository = new NotificationRepository(db);
  await repository.listReminders({ tenantId: "t", userId: "u" });
  await repository.cancelReminder({ tenantId: "t", userId: "u", notificationId: "ntf_9" });
  for (const call of calls) {
    assert.match(call.sql, /tenant_id=\$\d+ and user_id=\$\d+/);
    assert.match(call.sql, /state='queued'/);
    assert.match(call.sql, /content->>'reminderText'/);
  }
  assert.deepEqual(calls[1].params, ["ntf_9", "t", "u"]);
  await assert.rejects(() => repository.cancelReminder({ tenantId: "t", userId: "", notificationId: "n" }));
});

const catalog = { tools: ["reminders.schedule", "reminders.list", "reminders.cancel"].map(toolId => ({ toolId })),
  applications: [{ applicationId: "reminders" }] };

test("planner routes list/cancel phrasing to the new tools and leaves scheduling alone", () => {
  const tool = text => completeRemindersManagePlan(text, catalog)?.steps[0].toolId ?? null;
  assert.equal(tool("Show my reminders"), "reminders.list");
  assert.equal(tool("What reminders do I have?"), "reminders.list");
  assert.equal(tool("List my reminders"), "reminders.list");
  assert.equal(tool("Cancel my reminder to call the vendor"), "reminders.cancel");
  assert.equal(tool("Delete the buy milk reminder"), "reminders.cancel");
  assert.equal(tool("Cancel my reminder to call the vendor tomorrow at 3pm"), "reminders.cancel");
  assert.equal(tool("Remind me to call the vendor tomorrow at 3pm"), null, "creating a reminder is the schedule matcher's job");
  assert.equal(tool("Remind me to show my reminders tomorrow"), null);
  assert.equal(tool("What is the weather"), null);

  const cancel = completeRemindersManagePlan("Cancel my reminder to call the vendor", catalog);
  assert.equal(cancel.steps[0].input.reminder, "call the vendor");
  assert.equal(cancel.steps[0].input.intent, "cancel_reminder");
  const byName = completeRemindersManagePlan("Delete the buy milk reminder", catalog);
  assert.equal(byName.steps[0].input.reminder, "buy milk");
  const byId = completeRemindersManagePlan("Cancel reminder ntf_abc-123", catalog);
  assert.equal(byId.steps[0].input.reminderId, "ntf_abc-123");
});

test("planner does nothing when the tools are not in the catalog", () => {
  assert.equal(completeRemindersManagePlan("Show my reminders", { tools: [{ toolId: "reminders.schedule" }], applications: [{ applicationId: "reminders" }] }), null);
});

test("outcomes name their operation so the client can tell list/cancel from schedule", () => {
  const make = intent => createWorkspaceOutcome({
    command: { commandId: "c", correlationId: "r", conversationId: "v", channel: "typed", text: "x" },
    plan: { application: "reminders", steps: [{ input: intent ? { intent } : {} }] },
    task: { taskId: "t", steps: [] }, state: "completed", outcome: { verified: true } });
  assert.equal(make("list_reminders").operation, "list_reminders");
  assert.equal(make("cancel_reminder").operation, "cancel_reminder");
  assert.equal(make(null).operation, "schedule_reminder");
});
