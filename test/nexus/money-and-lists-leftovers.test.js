"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { farmWorkTurn } = require("../../nexus/farmwork/index.js");
const { readRequest } = require("../../nexus/personal/items.js");
const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");

// Found by the persona audit: "paid 5000 till number 123456" and "paid 2000 to paybill 247247 account 5521" were not read; "change the last sale to 4000" changed the last ENTRY (an expense) and said so as if
// it were the sale; there was no way to say "that was an expense, not a sale"; "add milk, bread and sugar to my shopping list" was ONE item called "milk, bread and sugar".

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

test("a payment by till or paybill is a cost, and the till number is not kept", async () => {
  const f = await withFarm();
  assert.match(await f.say("paid 5000 till number 123456"), /^Recorded: spent 5,000 on payment \(other\)/);
  assert.match(await f.say("paid 2000 to paybill 247247 account 5521"), /^Recorded: spent 2,000 on payment \(other\)/);
  assert.match(await f.say("paid 1500 for fuel via till 556677"), /^Recorded: spent 1,500 on fuel \(transport\)/);
  assert.match(await f.say("bought fertilizer for 4000 via till 556677"), /^Recorded: bought fertilizer for 4,000 \(fertiliser\)/);
  assert.doesNotMatch(JSON.stringify(await f.money()), /123456|247247|5521|556677/, "no till, paybill or account number is stored");
});

test("'the last sale' is the last sale, even when something else was recorded after it", async () => {
  const f = await withFarm();
  await f.say("spent 800 on fuel");
  assert.match(await f.say("change my last sale to 4000"), /^Changed: income of 3,000 \(sold maize\) is now 4,000\./);
  assert.equal((await f.money()).find(record => record.type === "expense").amount, 800, "the expense was not touched");
  assert.match(await f.say("change my last expense to 900"), /^Changed: spending of 800 \(fuel\) is now 900\./);
  const onlyExpense = farmer();
  await onlyExpense.say("sold 2 bags of maize for 3000"); await onlyExpense.say("spent 800 on fuel");
  assert.match(await onlyExpense.say("change my last income to an expense"), /^Changed: income of 3,000/);
  assert.match(await onlyExpense.say("change my last sale to 4000"), /^I have no sale recorded to change\./, "no sale left: the expense is not changed instead");
});

test("an entry can be turned into the other kind, said plainly, and one on credit is left alone", async () => {
  const f = await withFarm();
  assert.match(await f.say("change my last sale to an expense"), /^Changed: income of 3,000 \(sold maize\) is now an expense\./);
  assert.equal((await f.money())[0].type, "expense");
  assert.match(await f.say("the last one was a sale not an expense"), /^Changed: spending of 3,000 \(sold maize\) is now a sale\./);
  assert.match(await f.say("make the last entry a sale"), /^It is already a sale/, "nothing to change");
  await f.say("sold 3 bags of potatoes for 1200 on credit to Mary");
  assert.match(await f.say("make my last entry an expense"), /^That one is on credit/);
  assert.equal((await f.money())[0].type, "income", "the credit sale is still a sale");
});

test("several things on a shopping list are several items", () => {
  assert.deepEqual(readRequest("add milk, bread and sugar to my shopping list", "2026-10-05"), { action: "todo-add-many", list: "shopping", items: ["milk", "bread", "sugar"] });
  assert.deepEqual(readRequest("put maize flour, cooking oil and salt on my shopping list", "2026-10-05").items, ["maize flour", "cooking oil", "salt"]);
  assert.deepEqual(readRequest("add 2 kg of sugar and 1 loaf of bread to my shopping list", "2026-10-05").items, ["2 kg of sugar", "1 loaf of bread"]);
  // one thing stays one item, and a to-do keeps its own wording
  assert.equal(readRequest("add milk to my shopping list", "2026-10-05").action, "todo-add");
  assert.deepEqual(readRequest("add buy seed and call the vet to my to-do list", "2026-10-05"), { action: "todo-add", list: "todo", text: "buy seed and call the vet" });
});
