"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { farmWorkTurn } = require("../../nexus/farmwork/index.js");
const { parsePricePer, parseQuantity } = require("../../nexus/farmwork/parse.js");
const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");

// Found by a code review of the farm toolkit and reproduced: "2 tonnes of maize at 40000 per tonne" was stored as 2000 kg at 40,000 per KG, so every
// total built on it (the market board, orders, sales) came out 1000 times too big -- a sale recorded 80,000,000 of income instead of 80,000.
// (And "2 per gram" was stored as 2 per kg, 1000 times too small.) Weights are stored in kg, so a price has to be stated per kg too.

const NOW = new Date("2026-09-20T05:00:00Z");
function farmer() {
  const store = fakeFarmStore(); const memory = fakeMemory();
  const say = text => farmWorkTurn({ text, store, tenantId: "t1", userId: "u1", now: NOW, timeZone: "Africa/Nairobi", memory,
    notifications: { enqueue: async () => {}, existsByKey: async () => false }, nameOf: async () => "A farmer" });
  return { say };
}

test("parsePricePer converts the price along with the unit (tonne -> kg, gram -> kg, ml -> litre) and keeps what was said", () => {
  assert.deepEqual(parsePricePer("at 40000 per tonne"), { amount: 40, currency: "", per: "kg", spokenAmount: 40000 });
  assert.equal(parsePricePer("at 38500 per ton").amount, 38.5);
  assert.equal(parsePricePer("at 12345 per tonne").amount, 12.345, "no rounding that would change a total");
  assert.equal(parsePricePer("at 2 per gram").amount, 2000);
  assert.equal(parsePricePer("at 3 per ml").amount, 3000);
  assert.equal(parsePricePer("at 3 per ml").per, "L");
});

test("prices in units that were already right are unchanged", () => {
  assert.equal(parsePricePer("at 45 per kg").amount, 45);
  assert.equal(parsePricePer("for 40 a kg").amount, 40);
  assert.deepEqual(parsePricePer("at KSh 4000 per bag"), { amount: 4000, currency: "KSh", per: "bag", spokenAmount: 4000 });
  assert.equal(parsePricePer("at 50 per litre").amount, 50);
});

test("a sale of 2 tonnes at 40000 per tonne is 80,000 -- not 80,000,000", async () => {
  const who = farmer();
  const reply = await who.say("Sold 2 tonnes of maize to Otieno at 40000 per tonne");
  assert.match(reply, /sold 2000 kg of maize to Otieno for 80,000(?![,\d])/, reply);
  assert.doesNotMatch(reply, /80,000,000/);
});

test("the same price said per kg or per tonne gives the same total", async () => {
  const perKg = await farmer().say("Sold 2000 kg of maize to Otieno at 40 per kg");
  const perTonne = await farmer().say("Sold 2 tonnes of maize to Otieno at 40000 per tonne");
  assert.match(perKg, /for 80,000(?![,\d])/);
  assert.match(perTonne, /for 80,000(?![,\d])/);
});

test("a separately stated total is still trusted over the per-unit price (the echo check still works for tonnes)", async () => {
  const reply = await farmer().say("Sold 2 tonnes of maize to Otieno for 75000, at 40000 per tonne");
  assert.match(reply, /for 75,000(?![,\d])/, reply);
});

test("a purchase and an order at a per-tonne price are right too", async () => {
  const bought = await farmer().say("Bought 3 tonnes of fertilizer at 60000 per tonne");
  assert.match(String(bought), /180,000(?![,\d])/, bought);
  const who = farmer();
  await who.say("Add a buyer called Amina Traders");
  const order = await who.say("Add an order from Amina Traders for 2 tonnes maize at 40000 per tonne");
  assert.match(String(order), /80,000 in all/, order);
  assert.doesNotMatch(String(order), /80,000,000/);
});

test("the market board stores the per-kg price for a per-tonne listing", async () => {
  const who = farmer();
  const reply = await who.say("Post for sale 2 tonnes of maize at 40000 per tonne");
  assert.match(String(reply), /2000 kg of maize at 40\b/, reply);
  assert.doesNotMatch(String(reply), /at 40,000 per kg/);
});

test("quantities in tonnes were already right and still are", () => {
  assert.deepEqual({ value: parseQuantity("2 tonnes of maize").value, unit: parseQuantity("2 tonnes of maize").unit }, { value: 2000, unit: "kg" });
});
