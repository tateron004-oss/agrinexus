"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const money = require("../../nexus/farmwork/money.js");
const { fakeFarmStore } = require("./farmwork-fake.js");

// Found by an independent audit: a sale of 2 tonnes of maize took 8 kg out of the maize SEED in stock, and an amount said with no currency took the currency of the most recent
// record, so after one entry in UGX a Kenyan farmer's "800" was recorded as UGX 800.

const ctxFor = (store, text) => ({ store, tenantId: "t1", userId: "u1", today: "2026-10-05", text, hasFarmData: async () => true });
const stockOf = async store => (await store.list({ tenantId: "t1", userId: "u1", collection: "stock" })).map(record => `${record.data.name}:${record.data.qty}${record.data.unit}`).sort();

test("selling maize does not take kilos out of the maize seed", async () => {
  const store = fakeFarmStore();
  await store.add({ tenantId: "t1", userId: "u1", collection: "stock", data: { name: "maize seed", category: "seed", qty: 8, unit: "kg" } });
  const reply = await money.handle(ctxFor(store, "I sold 100 kg of maize to Amina for 9000 shillings"));
  assert.match(reply, /Recorded: sold/);
  assert.doesNotMatch(reply, /out of your stock/);
  assert.deepEqual(await stockOf(store), ["maize seed:8kg"]);
});

test("selling harvested maize still takes it out of the harvested maize in stock, and selling seed takes it out of seed", async () => {
  const store = fakeFarmStore();
  await store.add({ tenantId: "t1", userId: "u1", collection: "stock", data: { name: "maize", category: "other", qty: 500, unit: "kg" } });
  await store.add({ tenantId: "t1", userId: "u1", collection: "stock", data: { name: "maize seed", category: "seed", qty: 8, unit: "kg" } });
  const harvest = await money.handle(ctxFor(store, "I sold 100 kg of maize for 9000 shillings"));
  assert.match(harvest, /took 100 kg out of your stock/);
  assert.deepEqual(await stockOf(store), ["maize seed:8kg", "maize:400kg"]);
  const seed = await money.handle(ctxFor(store, "I sold 3 kg of maize seed for 600 shillings"));
  assert.match(seed, /out of your stock/);
  assert.deepEqual(await stockOf(store), ["maize seed:5kg", "maize:400kg"]);
});

test("an amount with no currency takes the currency the person has always used, but not one of several", async () => {
  const one = fakeFarmStore();
  await one.add({ tenantId: "t1", userId: "u1", collection: "money", data: { type: "expense", category: "other", amount: 500, currency: "KES", item: "rope", day: "2026-10-01" } });
  assert.match(await money.handle(ctxFor(one, "Bought a hoe for 800")), /KES\s*800/);

  const mixed = fakeFarmStore();
  await mixed.add({ tenantId: "t1", userId: "u1", collection: "money", data: { type: "expense", category: "other", amount: 500, currency: "KES", item: "rope", day: "2026-10-01" } });
  await mixed.add({ tenantId: "t1", userId: "u1", collection: "money", data: { type: "income", category: "other", amount: 90000, currency: "UGX", item: "beans", day: "2026-10-02" } });
  const reply = await money.handle(ctxFor(mixed, "Bought a hoe for 800"));
  assert.doesNotMatch(reply, /UGX\s*800|KES\s*800/, "no currency is guessed when there is more than one");
  const records = await mixed.list({ tenantId: "t1", userId: "u1", collection: "money" });
  assert.equal(records.find(record => record.data.item === "hoe" || /hoe/.test(record.data.note || ""))?.data.currency, "");
});
