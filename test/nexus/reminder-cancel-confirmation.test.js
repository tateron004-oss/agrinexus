"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { BehaviorSpine, reminderCancelledResponse } = require("../../nexus/runtime/behavior-spine.js");
const { createRemindersCancelPreview, createRemindersCancelExecutor } = require("../../nexus/reminders/manage-executor.js");

// Found testing the live site: "Cancel my reminder about my Pap smear" asked "I prepared the request and need your confirmation before the next governed action" (which reminder?) and, after yes, said only "Done. It is on your screen."
// The question now names the one reminder that will be cancelled, and the answer says which was cancelled, or why none was.

const GENERIC = "I prepared the request and need your confirmation before the next governed action.";
const context = { tenantId: "t", userId: "u", timeZone: "America/Chicago" };
const rows = [
  { notification_id: "n1", content: { reminderText: "about my Pap smear" }, scheduled_at: "2026-10-14T14:00:00.000Z" },
  { notification_id: "n2", content: { reminderText: "check the pump" }, scheduled_at: "2026-10-14T15:00:00.000Z" },
  { notification_id: "n3", content: { reminderText: "check the pump at the north field" }, scheduled_at: "2026-10-15T15:00:00.000Z" }
];
const notifications = { listReminders: async () => rows, cancelReminder: async () => true };

test("the question names the one reminder, by its words and its time; nothing found, several, or none named keeps the usual wording", async () => {
  const preview = createRemindersCancelPreview({ notifications });
  const said = await preview({ input: { intent: "cancel_reminder", reminder: "my Pap smear" }, context });
  assert.equal(said, 'I can cancel your reminder "about my Pap smear (due Wed 14 Oct, 9:00 am)". Say yes to cancel it, or no to keep it.');
  assert.equal(await preview({ input: { reminderId: "n2" }, context }), 'I can cancel your reminder "check the pump (due Wed 14 Oct, 10:00 am)". Say yes to cancel it, or no to keep it.');
  assert.equal(await preview({ input: { reminder: "the pump" }, context }), null, "two match: the cancel asks which");
  assert.equal(await preview({ input: { reminder: "the tractor" }, context }), null);
  assert.equal(await preview({ input: {}, context }), null);
  assert.throws(() => createRemindersCancelPreview({}));
});

test("the preview and the cancel pick the same reminder", async () => {
  const cancelled = [];
  const execute = createRemindersCancelExecutor({ notifications: { ...notifications, cancelReminder: async ({ notificationId }) => { cancelled.push(notificationId); return true; } } });
  const preview = createRemindersCancelPreview({ notifications });
  for (const input of [{ reminder: "my Pap smear" }, { reminder: "pump at the north field" }, { reminderId: "n2" }]) {
    const said = await preview({ input, context }); const done = await execute({ input, context });
    assert.equal(done.cancelled, true); assert.ok(said.includes(done.reminder), `${JSON.stringify(input)}: "${said}" names "${done.reminder}"`);
  }
  assert.deepEqual(cancelled, ["n1", "n3", "n2"]);
});

test("the spine uses it for reminders.cancel only, and a failure or a missing preview never blocks the prompt", async () => {
  const tools = { get: async id => ({ tool_id: id }) };
  const make = reminderCancelPreview => new BehaviorSpine({ agent: { command: async () => {} }, engine: { tools, executeTask: async () => ({}) }, tasks: { get: async () => null }, conversations: {}, workspaceStates: { stage: async () => {}, acknowledge: async () => {} }, reminderCancelPreview });
  const ask = (spine, toolId = "reminders.cancel", withContext = true) => spine.confirmationPrompt({ task: { steps: [{ step_id: "s1", tool_id: toolId, input: { reminder: "my Pap smear" } }] }, pendingStepId: "s1", context: withContext ? context : undefined });
  const spine = make(createRemindersCancelPreview({ notifications }));
  assert.match(await ask(spine), /^I can cancel your reminder "about my Pap smear \(due Wed 14 Oct, 9:00 am\)"\. Say yes to cancel it, or no to keep it\.$/);
  assert.equal(await ask(spine, "reminders.schedule"), GENERIC, "other tools keep the usual wording");
  assert.equal(await ask(make(async () => { throw new Error("db down"); })), GENERIC);
  assert.equal(await ask(make(null)), GENERIC);
  assert.equal(await ask(spine, "reminders.cancel", false), GENERIC);
});

test("after the yes, the answer says which reminder was cancelled, or why none was", () => {
  const plan = { steps: [{ toolId: "reminders.cancel" }] };
  const task = output => ({ steps: [{ output }] });
  assert.equal(reminderCancelledResponse(plan, task({ cancelled: true, reminder: "about my Pap smear (due Wed 14 Oct, 9:00 am)" })), 'Cancelled your reminder "about my Pap smear (due Wed 14 Oct, 9:00 am)".');
  assert.match(reminderCancelledResponse(plan, task({ cancelled: false, reason: "ambiguous", candidates: ["check the pump (due Wed 14 Oct, 10:00 am)", "check the pump at the north field (due Thu 15 Oct, 10:00 am)"] })), /^More than one reminder matches, so I cancelled none\. They are: check the pump .*; check the pump at the north field .*\. Say which one/);
  assert.match(reminderCancelledResponse(plan, task({ cancelled: false, reason: "not_found", candidates: ["check the pump (due Wed 14 Oct, 10:00 am)"] })), /^I could not find a reminder like that, so I cancelled nothing\. Your reminders are: check the pump/);
  assert.match(reminderCancelledResponse(plan, task({ cancelled: false, reason: "not_found", candidates: [] })), /You have no upcoming reminders\.$/);
  assert.match(reminderCancelledResponse(plan, task({ cancelled: false, reason: "which_reminder", candidates: ["a (due x)"] })), /^Which reminder should I cancel\? You have: a/);
  assert.match(reminderCancelledResponse(plan, task({ cancelled: false, reason: "no_longer_upcoming" })), /already gone off or been cancelled/);
  assert.equal(reminderCancelledResponse({ steps: [{ toolId: "reminders.list" }] }, task({ cancelled: true, reminder: "x" })), "", "other tools are not touched");
  assert.equal(reminderCancelledResponse(plan, task({})), "");
});

// Found on live after #1032: the question named the reminder, but after the yes the answer was still "Done. It is on your screen." The plan rebuilt from the stored task in confirm() names each step's tool tool_id (the database
// name), and every "what was done" sentence looks for toolId.
test("after a yes, the plan rebuilt from the stored task carries toolId, so the sentence that says what was done is found", async () => {
  const stored = { taskId: "tsk_1", ownerId: "u", application: "reminders", goal: "cancel", riskTier: "low", conversationId: "cnv_1",
    steps: [{ step_id: "s1", tool_id: "reminders.cancel", input: { reminder: "my Pap smear" }, output: { cancelled: true, reminder: "about my Pap smear (due Wed 14 Oct, 9:00 am)" } }] };
  let seenPlan = null;
  const spine = new BehaviorSpine({ agent: { command: async () => {} }, engine: { tools: { get: async id => ({ tool_id: id }) }, approve: async () => {}, executeTask: async () => ({ state: "awaiting_render", completed: false }), transition: async () => stored },
    tasks: { get: async () => stored }, conversations: { append: async () => {} }, workspaceStates: { stage: async ({ outcome }) => { seenPlan = outcome; }, acknowledge: async () => {} } });
  const result = await spine.confirm({ input: { taskId: "tsk_1", stepId: "s1", approved: true, text: "yes" }, context: { tenantId: "t", userId: "u", timeZone: "UTC" } });
  assert.equal(result.response, 'Cancelled your reminder "about my Pap smear (due Wed 14 Oct, 9:00 am)".');
  assert.ok(seenPlan !== undefined);
  assert.equal(reminderCancelledResponse({ steps: [{ tool_id: "reminders.cancel" }] }, { steps: [{ output: { cancelled: true, reminder: "x (due y)" } }] }), 'Cancelled your reminder "x (due y)".');
});
