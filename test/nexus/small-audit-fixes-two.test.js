"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { farmWorkTurn } = require("../../nexus/farmwork/index.js");
const { readRepeatRequest } = require("../../nexus/reminders/repeat-phrase.js");
const { repeatReminderTurn } = require("../../nexus/reminders/repeat-service.js");
const { parseAssistantReminderTime, extractAssistantReminderTask, hasReminderTimePhrase } = require("../../nexus/reminders/time-phrase.js");
const { normalizeRecipient } = require("../../nexus/communications/send-request.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");

// Smaller findings from the independent capability audits: "mark my maize listing sold", "how much did I collect from customers" read as a harvest, "twice a day at 9" quietly set at 8 am
// and 8 pm, a spelled-out "in two minutes" turned into "tomorrow", a Kenyan number with 5 digits accepted, "Hello Kyro" sent to the model, and a refusal that listed "every few days"
// as both supported and not.

const NOW = new Date("2026-09-20T05:00:00Z");
function farmer(userId = "u1", store = fakeFarmStore()) {
  const memory = fakeMemory();
  return { say: text => farmWorkTurn({ text, store, tenantId: "t1", userId, now: NOW, timeZone: "Africa/Nairobi", memory, notifications: null, nameOf: async () => "Amina" }), store };
}

test("'mark my maize listing sold' takes the one maize listing off the board as sold", async () => {
  const who = farmer();
  await who.say("Post for sale: 500 kg maize at 40 per kg");
  await who.say("Post for sale: 20 kg beans at 90 per kg");
  assert.match(await who.say("Mark my maize listing sold"), /^Marked listing 1 as sold and taken it off the board\./);
  assert.match(await who.say("mark my listing for beans as sold"), /^Marked listing 2 as sold/);
  assert.match(await who.say("mark my listing for beans as sold"), /nothing on the board/i);
  assert.match(await who.say("Show the board"), /Nothing|nothing|no listings|0/i);
});

test("'how much did I collect from customers' is not a harvest question, and harvest ones still are", () => {
  const { readRequest } = require("../../nexus/farm/log.js");
  assert.equal(readRequest("How much did I collect from customers this month", "2026-10-05"), null);
  assert.equal(readRequest("how much rent did I collect", "2026-10-05"), null);
  assert.equal(readRequest("How much maize did I harvest this year", "2026-10-05").action, "sum-harvest");
  assert.equal(readRequest("how much did I collect from the north field", "2026-10-05").action, "sum-harvest");
  assert.equal(readRequest("how many bags have I picked", "2026-10-05").action, "sum-harvest");
});

test("'twice a day at 9' asks for the second time; two times, or none, still work", async () => {
  assert.equal(readRepeatRequest("remind me twice a day at 9 to take my pills").action, "need-times");
  assert.equal(readRepeatRequest("remind me three times a day at 8 and 1 to take my pills").action, "need-times");
  assert.deepEqual(JSON.parse(JSON.stringify(readRepeatRequest("remind me twice a day at 9 and 5 to take my pills").times)), ["09:00", "17:00"]);
  assert.deepEqual(JSON.parse(JSON.stringify(readRepeatRequest("remind me twice a day to take my pills").times)), ["08:00", "20:00"]);
  const store = { add: async () => assert.fail("nothing is set"), list: async () => [], cancel: async () => false };
  const reply = await repeatReminderTurn({ text: "remind me twice a day at 9 to take my pills", store, tenantId: "t", userId: "u", timeZone: "Africa/Nairobi", now: new Date("2026-10-05T04:00:00Z") });
  assert.match(reply, /Which 2 times\?.*twice a day at 9 and 5.*Nothing was set yet\./);
});

test("the refusal for a repeat that cannot be done does not list 'every few days' as supported", async () => {
  const reply = await repeatReminderTurn({ text: "remind me every few days to check the pump", store: { add: async () => assert.fail("nothing is set"), list: async () => [], cancel: async () => false }, tenantId: "t", userId: "u", timeZone: "Africa/Nairobi" });
  assert.match(reply, /every other day or every 3 days/);
  assert.equal((reply.match(/every few days/g) || []).length, 1, "named once, as something that cannot be done");
});

test("a spelled-out number of minutes or hours is read as that time", () => {
  const now = new Date("2026-10-05T06:00:00Z");
  const at = text => parseAssistantReminderTime(text, { timeZone: "Africa/Nairobi", now }).scheduledAt;
  assert.equal(at("Remind me in two minutes to check the oven"), "2026-10-05T06:02:00.000Z");
  assert.equal(at("remind me in ten minutes to stir"), "2026-10-05T06:10:00.000Z");
  assert.equal(at("in forty five minutes remind me to call"), "2026-10-05T06:45:00.000Z");
  assert.equal(at("remind me in three hours to water the maize"), "2026-10-05T09:00:00.000Z");
  assert.equal(hasReminderTimePhrase("remind me in two minutes to check the oven"), true);
  assert.equal(extractAssistantReminderTask("Remind me in two minutes to check the oven"), "check the oven");
  assert.equal(at("remind me in one hour to call"), "2026-10-05T07:00:00.000Z", "'one' is read as before");
});

test("a Kenyan, Tanzanian, Ugandan or Rwandan number must have 9 digits after the country code", () => {
  for (const bad of ["+25471234", "+2547123456789", "+25571234", "+2567123"]) assert.equal(normalizeRecipient("sms", bad), null, bad);
  for (const good of ["+254712345678", "+255712345678", "+256712345678", "+250788123456", "+2348031234567", "+14155552671"]) assert.equal(normalizeRecipient("sms", good), good, good);
});

test("'Hello Kyro' is a greeting, like 'Hello Nexus'", async () => {
  const planner = new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the AI planning model"); } }, tools: { list: async () => [] }, applications: { list: () => [] } });
  for (const text of ["Hello Kyro", "hi kyro", "Kyro", "Good morning Kyro", "Hello Nexus"]) {
    const plan = await planner.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context: {} });
    assert.match(plan.response, /^Hello.*how can I help\?$/, text);
  }
});
