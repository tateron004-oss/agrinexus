"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { farmWorkTurn } = require("../../nexus/farmwork/index.js");
const { normalizeSpokenText } = require("../../nexus/i18n/spoken-input.js");
const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");

// Found by the persona audits (farmer, small shop): money was recorded WRONG without a word. "I sold 3 sacks for 9000 and bought seed for 2000" counted the seed as income ("sold bought seed"); "I sold
// maize and paid the transporter 500" recorded a sale of 500; "3 hundred" was 3 and "1 500" was 1; "paid school fees 12000" was a labour cost and "paid Mary Wanjiku 5000" was labour too; "paid 300 for the
// pickup" was not read; a 99,999,999,999 sale was saved; "some time ago" was silently today; "sold sukuma wiki" was not a farm sale. Every sentence below is run through the real toolkit.

const NOW = new Date("2026-10-05T09:00:00Z");
function farmer() {
  const store = fakeFarmStore(); const memory = fakeMemory();
  const say = async text => {
    const reply = await farmWorkTurn({ text, store, tenantId: "t1", userId: "u1", now: NOW, timeZone: "Africa/Nairobi", memory, notifications: { enqueue: async () => {}, existsByKey: async () => false }, nameOf: async () => "A farmer" });
    return typeof reply === "string" ? reply : reply?.response || reply?.text || JSON.stringify(reply);
  };
  const money = async () => (await store.list({ tenantId: "t1", userId: "u1", collection: "money" })).map(record => record.data);
  return { say, money };
}
const withFarm = async () => { const f = farmer(); await f.say("sold 2 bags of maize for 3000"); return f; };

test("amounts said as '3 hundred', '1 500' or '12 000' are the whole amount, and counts of kilos or bags are not joined", () => {
  assert.equal(normalizeSpokenText("sold maize for 3 hundred"), "sold maize for 300");
  assert.equal(normalizeSpokenText("sold 3 hundred kg of maize for 9000"), "sold 300 kg of maize for 9000");
  assert.equal(normalizeSpokenText("sold maize for 1 500"), "sold maize for 1500");
  assert.equal(normalizeSpokenText("paid 12 000 for fuel"), "paid 12000 for fuel");
  assert.equal(normalizeSpokenText("I sold 20 bags at 1 200 each"), "I sold 20 bags at 1200 each");
  assert.equal(normalizeSpokenText("sold 5 100 kg"), "sold 5 100 kg", "a count is not money");
  assert.equal(normalizeSpokenText("sold maize for three hundred"), "sold maize for 300");
});

test("a sale and a purchase in one sentence are one income and one cost, never a sale of the seed", async () => {
  const f = await withFarm();
  const reply = await f.say("I sold 3 sacks of maize for 9000 and bought seed for 2000");
  assert.match(reply, /sold 3 sacks of maize for 9,000/);
  assert.match(reply, /bought seed for 2,000 \(seed\)/);
  assert.doesNotMatch(reply, /sold bought/);
  const records = await f.money();
  assert.equal(records.filter(record => record.type === "income").reduce((sum, record) => sum + record.amount, 0), 3000 + 9000);
  assert.equal(records.filter(record => record.type === "expense").reduce((sum, record) => sum + record.amount, 0), 2000);
  const potatoes = await f.say("I sold 5 bags of potatoes for 2500 each and paid 300 for the pickup");
  assert.match(potatoes, /sold 5 bags of potatoes for 12,500/);
  assert.match(potatoes, /spent 300 on the pickup/);
});

test("a sale with no price next to a cost is not guessed: nothing is recorded and the price is asked for", async () => {
  const f = await withFarm();
  const before = (await f.money()).length;
  const reply = await f.say("I sold maize and paid the transporter 500");
  assert.match(reply, /can't tell what the maize sold for[\s\S]*Nothing is recorded yet[\s\S]*sold maize for 5000/);
  assert.equal((await f.money()).length, before);
});

test("'paid 300 for the pickup' is a cost, and household payments and unexplained payments are not farm labour", async () => {
  const f = await withFarm();
  assert.match(await f.say("paid 300 for the pickup"), /Recorded: spent 300 on the pickup/);
  assert.match(await f.say("paid 2 hundred for fuel"), /spent 200 on fuel \(transport\)/);
  assert.match(await f.say("paid Mary 5000 for weeding"), /Recorded: paid Mary 5,000 for weeding\./);
  const unexplained = await f.say("paid Mary Wanjiku 5000");
  assert.match(unexplained, /Recorded: paid Mary Wanjiku 5,000\. I did not have a reason, so it is under "other"/);
  assert.equal((await f.money()).find(record => record.party === "Mary Wanjiku").category, "other", "nobody is assumed to be labour");
  const profitBefore = await f.say("what is my profit this year");
  const school = await f.say("paid school fees 12000");
  assert.match(school, /Recorded: paid school fees 12,000 \(household\)\. I keep household costs out of your farm profit\./);
  assert.equal(await f.say("what is my profit this year"), profitBefore, "household costs are not in the farm's profit");
  assert.equal((await f.money()).find(record => record.item === "school fees").category, "household");
});

test("an amount that cannot be right is not saved, and says so", async () => {
  const f = await withFarm();
  const before = (await f.money()).length;
  assert.match(await f.say("sold maize for 99999999999"), /99,999,999,999 looks wrong, so I have not recorded it\. I only record amounts up to 100,000,000/);
  assert.match(await f.say("bought seed for 200000000"), /looks wrong, so I have not recorded it/);
  assert.equal((await f.money()).length, before);
  assert.match(await f.say("sold maize for 5000000"), /Recorded: sold maize for 5,000,000/, "a large but possible amount is saved");
});

test("a day that was not given is said to be today, and how to give one", async () => {
  const f = await withFarm();
  assert.match(await f.say("sold maize some time ago for 5000"), /I did not have a day, so it is dated today\. Say "yesterday"/);
  assert.doesNotMatch(await f.say("sold maize yesterday for 5000"), /I did not have a day/);
  assert.doesNotMatch(await f.say("sold maize for 5000"), /I did not have a day/);
});

test("leafy vegetables and common fruits are farm sales", async () => {
  const f = await withFarm();
  assert.match(await f.say("sold sukuma wiki for 500"), /Recorded: sold sukuma wiki for 500/);
  assert.match(await f.say("sold 20 bunches of spinach for 400"), /Recorded: sold 20 bunches of spinach for 400/);
  assert.equal((await f.money()).filter(record => record.category === "crops").length, 3);
});
