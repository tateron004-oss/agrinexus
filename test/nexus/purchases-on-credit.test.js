"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { farmWorkTurn } = require("../../nexus/farmwork/index.js");
const { precheck, extractTransactionArgs } = require("../../nexus/business/voice-dispatch.js");
const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");

// Left open after the money fixes (#905): buying on credit ("I owe the supplier") was recorded as a plain cash cost with nothing remembered about the debt, "I paid Wanjiru 5000" was then recorded as
// a SECOND cost, and in the business ledger "sold 10 bags at 3000 each" logged 3,000 and a sale on credit was logged as income that had not been received.

const NOW = new Date("2026-10-06T09:00:00Z");
function farmer() {
  const store = fakeFarmStore(); const memory = fakeMemory();
  const say = async text => farmWorkTurn({ text, store, tenantId: "t1", userId: "u1", now: NOW, timeZone: "Africa/Nairobi", memory, notifications: { enqueue: async () => {}, existsByKey: async () => false }, nameOf: async () => "A farmer" });
  const money = async () => (await store.list({ tenantId: "t1", userId: "u1", collection: "money" })).map(record => record.data);
  return { say, money };
}
const text = reply => (typeof reply === "string" ? reply : reply?.response || JSON.stringify(reply));

test("buying on credit counts the cost now and remembers who is owed", async () => {
  const who = farmer();
  const bought = text(await who.say("bought 5 bags of fertilizer from Wanjiru on credit for 12500"));
  assert.match(bought, /on credit/);
  assert.match(bought, /counts as a cost now.*you owe Wanjiru 12,500/);
  assert.match(bought, /Spent this month: 12,500/);
  assert.equal((await who.money())[0].owing, 12500);
  await who.say("bought 3 bags of seed on credit for 6000");
  const owe = text(await who.say("what do I owe"));
  assert.match(owe, /Wanjiru 12,500/); assert.match(owe, /Someone 6,000/); assert.match(owe, /Total 18,500/);
  assert.equal((await who.money()).find(row => row.item === "seed").item, "seed", "the words 'on credit' are not part of the item");
  assert.match(text(await who.say("how much did I spend this month")), /You spent 18,500 this month/);
});

test("paying what is owed is not a second cost, part payments work, and an ordinary payment is still a cost", async () => {
  const who = farmer();
  await who.say("bought 5 bags of fertilizer from Wanjiru on credit for 12500");
  const part = text(await who.say("I paid Wanjiru 5000"));
  assert.match(part, /you paid Wanjiru 5,000 of what you owed/);
  assert.match(part, /not a new cost/);
  assert.match(part, /still owe Wanjiru 7,500/);
  assert.match(text(await who.say("how much did I spend this month")), /You spent 12,500 this month \(1 entry\)/);
  assert.match(text(await who.say("I paid Wanjiru")), /you paid Wanjiru 7,500.*owe Wanjiru nothing now/);
  assert.match(text(await who.say("who do I owe")), /don't owe anyone/);
  assert.equal((await who.money()).length, 1);
  // someone who is not owed anything: the old behaviour, a plain payment that is a cost
  assert.match(text(await who.say("I paid Otieno 2000 for labour")), /Recorded: paid Otieno 2,000 for labour/);
  assert.equal((await who.money()).length, 2);
  assert.equal(await who.say("I paid Wanjiru"), null, "nothing owed to Wanjiru any more: left for normal handling");
});

test("a sale on credit and a debt are kept apart even for the same name", async () => {
  const who = farmer();
  await who.say("sold 20 bags of maize to Otieno on credit for 60000");
  await who.say("bought 2 bags of seed from Otieno on credit for 4000");
  assert.match(text(await who.say("who owes me")), /Otieno 60,000/);
  assert.match(text(await who.say("who do I owe")), /Otieno 4,000/);
  assert.match(text(await who.say("I paid Otieno")), /you paid Otieno 4,000/);
  assert.match(text(await who.say("who owes me")), /Otieno 60,000/, "what Otieno owes the farmer is untouched");
  assert.match(text(await who.say("Otieno paid")), /Otieno paid 60,000/);
});

test("business ledger: a price for each one is multiplied, and a sale on credit is not logged as income", () => {
  assert.equal(extractTransactionArgs("I sold 10 bags of maize at 3000 shillings each", {}).amount, 30000);
  assert.equal(extractTransactionArgs("we sold 5 chickens at 600 shillings each", {}).amount, 3000);
  assert.equal(extractTransactionArgs("I bought 2 hoes at 500 shillings each", {}).amount, 1000);
  assert.equal(extractTransactionArgs("we sold 3 goats at 4000 each", {}).amount, 12000);
  assert.equal(extractTransactionArgs("log a sale of 6000 shillings", {}).amount, 6000);
  const credit = precheck("I sold 20 bags of maize to Otieno on credit for 60000 shillings");
  assert.match(credit.clarification, /sale on credit.*not logged it|have not logged it/);
  assert.match(credit.clarification, /received 60000 shillings from Otieno/);
  assert.ok(!precheck("I sold 20 bags of maize to Otieno for 60000 shillings").clarification);
  assert.ok(!precheck("I bought seed on credit for 4000 shillings").clarification, "an expense on credit is still a cost");
});
