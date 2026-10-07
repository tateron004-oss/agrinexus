"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { farmWorkTurn } = require("../../nexus/farmwork/index.js");
const { completeDocumentPlan } = require("../../nexus/brain/planner.js");
const { BehaviorSpine } = require("../../nexus/runtime/behavior-spine.js");
const { createRemindersListExecutor, createRemindersCancelExecutor } = require("../../nexus/reminders/manage-executor.js");
const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");

// Found by an independent capability audit: "Remove my listing for maize" went to the real-estate module and the listing stayed on the board; "Print my farm report" was not matched;
// "Make me a report about maize prices and save it" saved the request sentence as a document; and a one-time reminder was confirmed with "Nexus completed the governed execution"
// and listed with a UTC timestamp, and cancelling an ambiguous reminder listed every reminder as a candidate.

const NOW = new Date("2026-09-20T05:00:00Z");
function farmer(userId = "u1", store = fakeFarmStore()) {
  const memory = fakeMemory();
  const say = text => farmWorkTurn({ text, store, tenantId: "t1", userId, now: NOW, timeZone: "Africa/Nairobi", memory, notifications: null, nameOf: async () => "Amina" });
  return { say, store };
}

test("'remove my listing for maize' takes down the one listing, and says so when there are several or none", async () => {
  const who = farmer();
  await who.say("Post for sale: 500 kg maize at 40 per kg");
  await who.say("Post for sale: 20 kg beans at 90 per kg");
  assert.match(await who.say("Remove my listing for maize"), /^Removed listing 1 \(Listing 1: for sale — 500 kg of maize/);
  assert.match(await who.say("Show my listings"), /Your listings: Listing 2.*beans/);
  assert.doesNotMatch(await who.say("Show my listings"), /maize/);
  assert.match(await who.say("take down my maize listing"), /can't find an open listing of yours for maize\. Yours: Listing 2/);
  assert.match(await who.say("remove my listing for sorghum"), /can't find an open listing of yours for sorghum/);
  await who.say("Post for sale: 10 kg beans at 95 per kg");
  assert.match(await who.say("remove my beans listing"), /You have 2 open listings for beans.*Say "remove listing" and its number\./);
  assert.match(await who.say("Remove listing 2"), /Removed listing 2/, "the numbered way is unchanged");
});

test("another person's listing is never removed by what it is for", async () => {
  const store = fakeFarmStore();
  const seller = farmer("u1", store); const other = farmer("u2", store);
  await seller.say("Post for sale: 500 kg maize at 40 per kg");
  assert.match(await other.say("remove my listing for maize"), /nothing on the board/i);
  assert.match(await other.say("show the board"), /Listing 1/);
});

test("'print my farm report' is the farm summary", async () => {
  const who = farmer();
  await who.say("Add a field called North Plot, 2 acres");
  for (const line of ["skip", "skip", "skip", "skip"]) await who.say(line);
  await who.say("Spent 5000 on fertilizer for North Plot");
  const report = await who.say("Print my farm report");
  assert.ok(report?.report, "a report is made");
  assert.match(report.report.content, /North Plot/);
  assert.equal(await who.say("Print the report about my trip"), null, "a report that is not the farmer's own records is left alone");
});

const catalog = { tools: [{ toolId: "documents.create" }], applications: [{ applicationId: "documents" }] };

test("a report with a subject but nothing to say is asked about, not saved as the request sentence", () => {
  const ask = completeDocumentPlan("Make me a report about maize prices and save it", catalog);
  assert.equal(ask.steps.length, 0);
  assert.match(ask.clarification, /What should it say\?/);
  assert.equal(completeDocumentPlan("Write a plan regarding the water tank and save it", catalog).steps.length, 0);
  // unchanged
  assert.equal(completeDocumentPlan("Create and save a farming plan document, then reopen it.", catalog).steps[0].toolId, "documents.create");
  assert.equal(completeDocumentPlan("Create a document called Farm Plan that says I will plant maize in March, and save it", catalog).steps[0].input.content, "I will plant maize in March");
  assert.equal(completeDocumentPlan("Write and save a report titled Nakuru Harvest, then open again.", catalog).steps[0].input.title, "Nakuru Harvest");
});

test("a one-time reminder is confirmed with the task and the time in the person's words", async () => {
  const command = { schema: "nexus.command.v1", commandId: "command_1", correlationId: "trace", conversationId: "conversation_1", tenantId: "tenant", actorId: "user", channel: "typed", locale: "en", text: "x" };
  const plan = { application: "reminders", goal: "Create reminder", steps: [{ toolId: "reminders.schedule", input: { reminder: "Remind me tomorrow morning to check the water tank", when: "tomorrow morning" } }] };
  const staged = [];
  const spine = new BehaviorSpine({ workspaceStates: { stage: async value => { staged.push(value); }, acknowledge: async () => {} },
    agent: { command: async () => ({ action: "create", command, plan, task: { taskId: "tsk_r" } }) },
    engine: { executeTask: async () => ({ state: "awaiting_render", completed: false, receipts: [{ receiptId: "r1" }] }) },
    tasks: { get: async () => ({ taskId: "tsk_r", steps: [] }) } });
  const result = await spine.turn({ input: {}, context: { tenantId: "tenant", userId: "user", timeZone: "Africa/Nairobi" } });
  assert.match(result.response, /^Okay\. I will remind you to check the water tank at 8:00 am (?:today|tomorrow)\.$/, "the time it was set for (8:00 am) is said, not just 'morning'");
  const offset = { ...plan, steps: [{ toolId: "reminders.schedule", input: { reminder: "check the pump", timeOffsetMinutes: 30 } }] };
  const spine2 = new BehaviorSpine({ workspaceStates: { stage: async () => {}, acknowledge: async () => {} },
    agent: { command: async () => ({ action: "create", command, plan: offset, task: { taskId: "tsk_r" } }) },
    engine: { executeTask: async () => ({ state: "awaiting_render", completed: false, receipts: [] }) }, tasks: { get: async () => ({ taskId: "tsk_r", steps: [] }) } });
  assert.match((await spine2.turn({ input: {}, context: { tenantId: "tenant", userId: "user" } })).response, /^Okay\. I will remind you to check the pump in 30 minutes, at \d{1,2}:\d{2} (?:am|pm) (?:today|tomorrow)\.$/);
  const other = { ...plan, application: "maps", steps: [{ toolId: "maps.route", input: {} }] };
  const spine3 = new BehaviorSpine({ workspaceStates: { stage: async () => {}, acknowledge: async () => {} },
    agent: { command: async () => ({ action: "create", command, plan: other, task: { taskId: "tsk_r" } }) },
    engine: { executeTask: async () => ({ state: "awaiting_render", completed: false, receipts: [] }) }, tasks: { get: async () => ({ taskId: "tsk_r", steps: [] }) } });
  assert.match((await spine3.turn({ input: {}, context: { tenantId: "tenant", userId: "user" } })).response, /Nexus completed the governed execution/, "other tools keep their wording");
});

const rows = [
  { notification_id: "n1", scheduled_at: "2026-10-06T05:00:00Z", content: { reminderText: "call the vendor" } },
  { notification_id: "n2", scheduled_at: "2026-10-07T06:30:00Z", content: { reminderText: "call the vendor about seed" } },
  { notification_id: "n3", scheduled_at: "2026-10-08T07:00:00Z", content: { reminderText: "water the maize" } }
];
const notifications = { listReminders: async () => rows, cancelReminder: async () => true };

test("reminders are listed in the person's own time zone, and an ambiguous cancel names only the ones that match", async () => {
  const list = await createRemindersListExecutor({ notifications })({ context: { tenantId: "t", userId: "u", timeZone: "Africa/Nairobi" } });
  assert.match(list.reminders[0], /call the vendor \(due Tue,? 6 Oct,? 8:00 am\)/i);
  const utc = await createRemindersListExecutor({ notifications })({ context: { tenantId: "t", userId: "u" } });
  assert.match(utc.reminders[0], /2026-10-06 05:00 UTC/, "with no zone it is the UTC timestamp as before");
  const ambiguous = await createRemindersCancelExecutor({ notifications })({ input: { reminder: "call the vendor" }, context: { tenantId: "t", userId: "u", timeZone: "Africa/Nairobi" } });
  assert.equal(ambiguous.reason, "ambiguous");
  assert.equal(ambiguous.matches, 2);
  assert.equal(ambiguous.candidates.length, 2, "only the two that match, not all three");
  assert.deepEqual(ambiguous.candidateIds, ["n1", "n2"]);
  const none = await createRemindersCancelExecutor({ notifications })({ input: { reminder: "feed the goats" }, context: { tenantId: "t", userId: "u" } });
  assert.equal(none.candidates.length, 3, "with no match the whole list is shown, as before");
});
