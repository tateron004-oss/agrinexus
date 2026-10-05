"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { farmWorkTurn } = require("../../nexus/farmwork/index.js");
const { farmLogTurn } = require("../../nexus/farm/log.js");
const { extractPeriod } = require("../../nexus/personal/dates.js");
const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");

// Plain farm questions that got no answer or the wrong one, found by asking them against the real handlers.

const NOW = new Date("2026-10-05T05:00:00Z");
function farmer() {
  const store = fakeFarmStore(); const memory = fakeMemory();
  const say = text => farmWorkTurn({ text, store, tenantId: "t1", userId: "u1", now: NOW, timeZone: "Africa/Nairobi", memory, notifications: { enqueue: async () => {}, existsByKey: async () => false }, nameOf: async () => "A farmer" });
  return { say, store };
}
async function finish(say, ...answers) { for (const answer of answers) await say(answer); }

test("'How many bags of seed do I have?' finds the seed that was just added", async () => {
  const { say } = farmer();
  assert.equal(await say("Add 5 bags of seed to my stock"), "Added 5 bags of seed. You now have 5 bags.");
  assert.equal(await say("How many bags of seed do I have?"), "You have 5 bags of seed.");
  assert.equal(await say("how many seed do i have"), "You have 5 bags of seed.");
  await say("Add 50 kg of maize seed to my store");
  assert.equal(await say("How many kg of maize seed do I have?"), "You have 50 kg of maize seed.");
  assert.equal(await say("How many sacks of fertilizer do I have?"), "I don't have fertilizer in your stock.");
});

test("a question about animals, fields or money is not answered as if it were stock", async () => {
  const { say } = farmer();
  await say("Add 5 bags of seed to my stock");
  for (const text of ["How many animals do I have?", "How many cows do I have?", "How many fields do I have?", "How much money do I have?", "How many workers do I have?"]) {
    const answer = await say(text);
    assert.doesNotMatch(String(answer), /in your stock/, text);
  }
});

test("animals can be counted and asked about by name", async () => {
  const { say } = farmer();
  assert.equal(await say("How many animals do I have?"), 'You have no animals recorded. Say "add a cow called Bella".');
  await say("Add a cow called Daisy"); await finish(say, "skip", "skip", "skip", "skip");
  await say("Add 12 chickens"); await finish(say, "skip", "skip", "skip", "skip", "skip");
  assert.equal(await say("How many animals do I have?"), "You have 13 animals recorded.");
  assert.equal(await say("how many cows do i have"), "You have 1 cow or bull.");
  assert.equal(await say("How many chickens do I have?"), "You have 12 chickens.");
  assert.equal(await say("How many goats do I have?"), "You have no goats recorded.");
  assert.match(await say("Tell me about Daisy"), /^daisy — cattle\./i);
  assert.match(await say("How is Daisy?"), /^daisy — cattle\./i);
  assert.match(await say("How's Daisy"), /^daisy — cattle\./i);
  assert.equal(await say("Tell me about the weather"), null, "a name that is not one of the animals carries on to normal planning");
  assert.equal(await say("How is the weather"), null);
});

test("a past-tense planting never lands in the future, and 'I planted ...' is understood", async () => {
  const { say, store } = farmer();
  await say("Add a field called North Plot, 2 acres"); await finish(say, "skip", "skip", "skip");
  const planted = () => store.rows.find(row => row.collection === "field" && !row.deleted).data.planted;
  assert.match(await say("I planted maize in North Plot on 12 March"), /^Noted: maize planted in North Plot Thursday 12 March\./);
  assert.equal(planted(), "2026-03-12", "the March that has passed, not next March");
  assert.match(await say("We sowed beans in North Plot on 3 November"), /Monday 3 November\./);
  assert.equal(planted(), "2025-11-03", "last November, not one still ahead");
  assert.match(await say("I planted maize in North Plot on 12 March 2027"), /12 March\./);
  assert.equal(planted(), "2027-03-12", "a year the person said is respected");
  await say("Plant beans in North Plot on 3 November");
  assert.equal(planted(), "2026-11-03", "an instruction to plant stays as said (the person's plan)");
  await say("Plant maize in North Plot");
  assert.equal(planted(), "2026-10-05", "no date means today, as before");
});

// ---- the farm log ----
function logMemory() {
  const rows = []; let n = 0;
  const live = userId => rows.filter(row => row.userId === userId && !row.deleted);
  return { rows,
    async addFarmEntry({ userId, content }) { rows.unshift({ memory_id: `f${++n}`, userId, content, deleted: false }); return { memoryId: `f${n}` }; },
    async addFarmEntryUnlessCapped({ userId, content }) { rows.unshift({ memory_id: `f${++n}`, userId, content, deleted: false }); return { memoryId: `f${n}`, content }; },
    async listFarmEntries({ userId }) { return live(userId).map(row => ({ memory_id: row.memory_id, content: row.content })); },
    async removeFarmEntry() { return true; } };
}
const logSay = (memory, text, now = NOW) => farmLogTurn({ text, memory, tenantId: "t1", userId: "u1", now, timeZone: "Africa/Nairobi" });

test("'How much did I harvest this year?' is answered, with or without a crop, 'harvest' or 'harvested'", async () => {
  const memory = logMemory();
  assert.equal(await logSay(memory, "How much did I harvest this year"), "I have no harvest logged for this year.");
  await logSay(memory, "I harvested 200 kg of maize"); await logSay(memory, "I harvested 20 bags of maize"); await logSay(memory, "I harvested 15 bags of beans from North Plot");
  const all = "Harvest this year: beans 15 bags; maize 20 bags and 200 kg.";
  assert.equal(await logSay(memory, "How much did I harvest this year"), all);
  assert.equal(await logSay(memory, "how much did I harvest"), all);
  assert.equal(await logSay(memory, "How much have I harvested?"), all);
  assert.equal(await logSay(memory, "How much maize did I harvest this year"), "Harvest this year: maize 20 bags and 200 kg.");
  assert.equal(await logSay(memory, "How much maize have I harvested"), "Harvest this year: maize 20 bags and 200 kg.");
  assert.equal(await logSay(memory, "How much beans did I harvest"), "Harvest this year: beans 15 bags.");
  assert.equal(await logSay(memory, "how many bags of beans did I harvest"), "Harvest this year: beans 15 bags.");
  assert.equal(await logSay(memory, "how much did I harvest this season"), "Harvest this season: beans 15 bags; maize 20 bags and 200 kg.");
  assert.equal(await logSay(memory, "What is my total harvest"), all);
});

test("a question about last year is answered for last year, not silently for this year", async () => {
  const memory = logMemory();
  await logSay(memory, "I harvested 200 kg of maize", new Date("2025-09-01T05:00:00Z"));
  assert.equal(await logSay(memory, "how much did I harvest last year"), "Harvest last year: maize 200 kg.");
  assert.equal(await logSay(memory, "how much did I harvest this year"), "I have no harvest logged for this year.");
  assert.deepEqual(extractPeriod("last year", "2026-10-05"), { from: "2025-01-01", to: "2025-12-31", label: "last year" });
  assert.equal(extractPeriod("this year", "2026-10-05").label, "this year");
  assert.equal(extractPeriod("last month", "2026-10-05").label, "last month");
});

test("things that only look like a harvest question are left alone", async () => {
  const memory = logMemory();
  for (const text of ["How much did I spend this year", "How many people did I hire", "how many bags did I sell"]) assert.equal(await logSay(memory, text), null, text);
  assert.match(await logSay(memory, "how much rain did I get"), /^I have no rain logged for this month/, "the rain question is still the rain question");
});
