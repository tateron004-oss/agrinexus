"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { isPrivateReminder, pushBodyFor, briefTextFor, reminderContent, PRIVATE_BODY } = require("../../nexus/reminders/private-reminder.js");
const { createReminderScheduleExecutor } = require("../../nexus/reminders/executor.js");
const { createDeliveryReminders } = require("../../nexus/reminders/delivery-store.js");
const { reminderSetResponse } = require("../../nexus/runtime/behavior-spine.js");
const guide = require("../../nexus/knowledge/womens-health.js");

// A reminder about something private (a Pap smear, a mammogram, birth control, a prenatal visit, a period, menopause, an STI or HIV test) must not put its words on a phone's lock screen or in a morning brief read aloud.
// The person's own words stay in Kyro (the reminder list, what Kyro says back); the notification says only that she has a private reminder.

test("which reminders are private, and which are not", () => {
  for (const text of ["get my Pap smear", "book a mammogram", "my prenatal visit on Thursday", "antenatal clinic", "take my pill", "take my birth control", "get my IUD checked", "see the gynaecologist", "my period is due", "ask about menopause",
    "HIV test", "STI screening", "go to the family planning clinic", "women's health appointment", "postnatal check", "pregnancy scan"]) assert.equal(isPrivateReminder(text), true, text);
  for (const text of ["check the pump", "call the buyer", "take my blood pressure medicine", "plant the maize", "pay the invoice", "the time period for the loan", "doctor appointment", "dentist at 3", "", null]) assert.equal(isPrivateReminder(text), false, String(text));
});

test("the notification shows a private line; the words are kept; an ordinary reminder is unchanged", () => {
  const secret = reminderContent("get my Pap smear", { whenLabel: "at 9:00 am on 3 March" });
  assert.equal(secret.title, "Kyro reminder"); assert.equal(secret.body, PRIVATE_BODY.en); assert.equal(secret.reminderText, "get my Pap smear"); assert.equal(secret.private, true); assert.equal(secret.whenLabel, "at 9:00 am on 3 March");
  assert.doesNotMatch(`${secret.title} ${secret.body}`, /pap|smear/i);
  assert.equal(reminderContent("get my Pap smear", { language: "sw" }).body, PRIVATE_BODY.sw);
  assert.deepEqual(reminderContent("check the pump", { whenLabel: "at 8 am" }), { title: "Nexus reminder", body: "check the pump", reminderText: "check the pump", whenLabel: "at 8 am" });
  assert.equal(pushBodyFor("call the buyer"), "call the buyer"); assert.equal(pushBodyFor("book a mammogram"), PRIVATE_BODY.en);
  assert.equal(briefTextFor("book a mammogram"), "a private reminder"); assert.equal(briefTextFor("check the pump"), "check the pump"); assert.equal(briefTextFor("my period", "sw"), "ukumbusho wa faragha");
});

test("a reminder set through the planner's tool and one set through the older route are stored the same way", async () => {
  const stored = [];
  const execute = createReminderScheduleExecutor({ notifications: { enqueue: async item => { stored.push(item); return { notification_id: "ntf_1" }; } } });
  const result = await execute({ input: { reminder: "remind me about my mammogram", when: "tomorrow at 9am" }, context: { tenantId: "t", userId: "u", timeZone: "America/Chicago" }, taskId: "task_1", idempotencyKey: "k1" });
  assert.equal(result.persisted, true);
  assert.equal(stored[0].content.body, PRIVATE_BODY.en); assert.match(stored[0].content.reminderText, /mammogram/i); assert.equal(stored[0].content.private, true);
  await execute({ input: { reminder: "remind me to check the pump", when: "tomorrow at 9am" }, context: { tenantId: "t", userId: "u", timeZone: "America/Chicago" }, taskId: "task_2", idempotencyKey: "k2" });
  assert.match(stored[1].content.body, /check the pump/); assert.equal(stored[1].content.private, undefined);

  const queued = [];
  const delivery = createDeliveryReminders({ tenantId: "t", userId: "u", notifications: { enqueue: async item => { queued.push(item); return { notification_id: "ntf_2", content: item.content, scheduled_at: item.scheduledAt, created_at: new Date(), state: "queued" }; }, listReminders: async () => [], cancelReminder: async () => null } });
  await delivery.schedule({ task: "see the gynaecologist", scheduledAt: new Date(Date.now() + 3600000).toISOString(), whenLabel: "in an hour", timeZone: "UTC" });
  assert.equal(queued[0].content.body, PRIVATE_BODY.en); assert.equal(queued[0].content.reminderText, "see the gynaecologist");
});

test("Kyro says what the phone will show, only for a private reminder", () => {
  const plan = reminder => ({ steps: [{ toolId: "reminders.schedule", input: { reminder, when: "tomorrow at 9am" } }] });
  const said = reminderSetResponse(plan("remind me about my Pap smear"), { timeZone: "America/Chicago" });
  assert.match(said, /^Okay\. I will remind you about your Pap smear /); assert.match(said, /The notification on your phone will say only that you have a private reminder\.$/);
  assert.doesNotMatch(reminderSetResponse(plan("remind me to check the pump"), { timeZone: "America/Chicago" }), /private reminder/);
});

test("the repeating reminder and the morning brief use it too, and the guides tell her she can ask", () => {
  const root = path.join(__dirname, "../..");
  const repeat = fs.readFileSync(path.join(root, "nexus/reminders/repeat-service.js"), "utf8");
  assert.ok(repeat.includes("body: pushBodyFor(rule.task, rule.language)") && repeat.includes("isPrivateReminder(rule.task)"));
  assert.ok(fs.readFileSync(path.join(root, "nexus/brief/service.js"), "utf8").includes("briefTextFor(row?.content?.reminderText"));
  for (const [id, options, pattern] of [["cervical-screening", { us: true }, /remind me about my Pap smear on 3 March/], ["breast-health", { us: true }, /remind me about my mammogram/], ["prenatal-care", { us: true }, /remind me about my prenatal visit/],
    ["womens-health-overview", { us: true }, /will say only that you have a private reminder/], ["cervical-screening", { us: false }, /remind me about my screening/], ["prenatal-care", { us: false }, /remind me about my antenatal visit/]])
    assert.match(guide.womensHealthAnswer(id, options).text, pattern, `${id} ${JSON.stringify(options)}`);
});

// found by the live voice test (a senior's "remind me to take my pills at 8 pm"): it was said back as "I will remind you to take my pills", as if the pills were Kyro's
test("what a reminder is said back as turns the person's words round: my is your, me is you, I is you", () => {
  const { toSecondPerson } = require("../../nexus/reminders/second-person.js");
  assert.equal(toSecondPerson("take my pills"), "take your pills");
  assert.equal(toSecondPerson("call my daughter and tell her I am home"), "call your daughter and tell her you are home");
  assert.equal(toSecondPerson("Pay me back, I'll be late, it is mine"), "Pay you back, you'll be late, it is yours");
  assert.equal(toSecondPerson("My pills"), "Your pills");
  assert.equal(toSecondPerson("do it myself"), "do it yourself");
  assert.equal(toSecondPerson("take metformin"), "take metformin", "words with no first person are left alone");
  assert.equal(toSecondPerson("collect the permit at the Mayor’s office"), "collect the permit at the Mayor’s office", "'Mayor' and 'mine' inside other words are not touched");
  assert.equal(toSecondPerson(null), "");
});
