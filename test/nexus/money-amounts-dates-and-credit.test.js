"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { farmWorkTurn } = require("../../nexus/farmwork/index.js");
const { parseQuantity } = require("../../nexus/farmwork/parse.js");
const { normalizeSpokenText } = require("../../nexus/i18n/spoken-input.js");
const { precheck, run, extractTransactionArgs } = require("../../nexus/business/voice-dispatch.js");
const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");

// Found by the persona audits (farmer, small shop, church, nonprofit): "10 bags at 3000 each" saved 3,000 as the whole sale; "6k" and "200k" were read as 6 and 200; "5000/=" and "200 bob" were
// not money; every sale was dated today; "1/2 acre" was 2 acres; two amounts in one sentence kept only the first; "KSh" and "shillings" made two separate currency totals; a sale on credit counted as
// income; an entry could not be corrected or deleted; a question naming a month was not answered for that month; "log a payment" was silently an expense and a pledge was income; the 201st
// ledger entry gave a generic error. Every sentence below is run through the real toolkit.

const NOW = new Date("2026-10-05T09:00:00Z"); // Monday 5 October 2026 in Nairobi
function farmer() {
  const store = fakeFarmStore(); const memory = fakeMemory();
  const say = async text => farmWorkTurn({ text, store, tenantId: "t1", userId: "u1", now: NOW, timeZone: "Africa/Nairobi", memory, notifications: { enqueue: async () => {}, existsByKey: async () => false }, nameOf: async () => "A farmer" });
  const money = async () => (await store.list({ tenantId: "t1", userId: "u1", collection: "money" })).map(record => record.data);
  return { say, store, money };
}
const asText = reply => (typeof reply === "string" ? reply : reply?.response || reply?.text || JSON.stringify(reply));

test("a price for each one is multiplied by how many were sold or bought", async () => {
  const who = farmer();
  assert.match(asText(await who.say("I sold 10 bags of maize at 3000 each")), /sold 10 bags of maize for 30,000/);
  assert.match(asText(await who.say("sold 5 chickens at 600 each")), /sold 5 chickens for 3,000/);
  assert.match(asText(await who.say("bought 2 hoes at 500 each")), /bought 2 hoes for 1,000/);
  const rows = await who.money();
  assert.deepEqual(rows.map(row => row.amount).sort((a, b) => a - b), [1000, 3000, 30000]);
});

test("k, bob, /= and elfu are read as the money they are, and a run of 5k is not money", () => {
  assert.equal(normalizeSpokenText("sold maize for 6k"), "sold maize for 6000");
  assert.equal(normalizeSpokenText("paid 200k for the tractor"), "paid 200000 for the tractor");
  assert.equal(normalizeSpokenText("I spent Ksh 2.5k on seed"), "I spent Ksh 2500 on seed");
  assert.equal(normalizeSpokenText("sold for 5000/="), "sold for 5000 shillings");
  assert.equal(normalizeSpokenText("bought seed at 200 bob"), "bought seed at 200 shillings");
  assert.equal(normalizeSpokenText("sold for 6k bob"), "sold for 6000 shillings");
  assert.equal(normalizeSpokenText("Ksh.5000 for fertilizer"), "Ksh 5000 for fertilizer");
  assert.equal(normalizeSpokenText("I ran 5k this morning"), "I ran 5k this morning");
  assert.equal(normalizeSpokenText("sold 20kg for 5000"), "sold 20kg for 5000");
});

test("the day a sale or purchase happened is kept, and a day still ahead is not used", async () => {
  const who = farmer();
  const yesterday = asText(await who.say("sold maize for 6k yesterday"));
  assert.match(yesterday, /sold maize for 6,000/);
  assert.match(yesterday, /Dated/);
  await who.say("spent 5000 on seed last Friday");
  await who.say("sold beans for 2000 on 10 September");
  await who.say("sold tomatoes for 1500");
  const days = (await who.money()).map(row => row.day).sort();
  assert.deepEqual(days, ["2026-09-10", "2026-10-02", "2026-10-04", "2026-10-05"]);
});

test("two things said in one sentence are two entries, and one thing about two items stays one", async () => {
  const who = farmer();
  const both = asText(await who.say("sold beans for 4000 and tomatoes for 2500"));
  assert.match(both, /sold beans for 4,000/); assert.match(both, /sold tomatoes for 2,500/);
  await who.say("spent 5000 on seed and 3000 on labour");
  assert.equal((await who.money()).length, 4);
  await who.say("sold maize and beans for 9000");
  const rows = await who.money();
  assert.equal(rows.length, 5);
  assert.equal(rows.filter(row => row.amount === 9000).length, 1);
});

test("'shillings', 'bob' and KSh are the same money, and shillings are never added to dollars", async () => {
  const who = farmer();
  await who.say("sold maize for KSh 5000");
  await who.say("sold beans for 9000 shillings");
  await who.say("bought seed for 800 bob");
  const profit = asText(await who.say("what is my profit"));
  assert.match(profit, /income KSh 14,000/); assert.match(profit, /spending KSh 800/); assert.match(profit, /profit of KSh 13,200/);
  const mixed = farmer();
  await mixed.say("sold 10 kg of maize to Otieno for 500 dollars");
  await mixed.say("sold 20 kg of beans to Otieno for 3000 shillings");
  const income = asText(await mixed.say("show my income"));
  assert.match(income, /\$500/); assert.match(income, /3,000 shillings/);
});

test("a sale on credit is owed, not income, until it is paid", async () => {
  const who = farmer();
  const sale = asText(await who.say("sold 20 bags of maize to Otieno on credit for 60000"));
  assert.match(sale, /on credit/); assert.match(sale, /not counted it as income/);
  assert.match(asText(await who.say("how much did I earn this month")), /no income recorded/);
  assert.match(asText(await who.say("who owes me")), /Otieno 60,000/);
  const part = asText(await who.say("Otieno paid 20000"));
  assert.match(part, /Otieno paid 20,000/); assert.match(part, /still owes 40,000/);
  assert.match(asText(await who.say("how much did I earn this month")), /20,000/);
  assert.match(asText(await who.say("Otieno paid")), /owes you nothing now/);
  assert.match(asText(await who.say("how much did I earn this month")), /60,000/);
  assert.match(asText(await who.say("who owes me")), /Nobody owes you/);
  // someone who owes nothing: the words are left for normal handling
  assert.equal(await who.say("Wanjiru paid"), null);
});

test("an entry can be corrected or deleted", async () => {
  const who = farmer();
  await who.say("sold maize for 5000");
  await who.say("sold beans for 5000");
  await who.say("spent 800 on seed");
  assert.match(asText(await who.say("that should be 8000")), /Changed: spending of 800.* is now 8,000/);
  assert.match(asText(await who.say("delete the 5000 sale")), /found 2 entries/);
  assert.match(asText(await who.say("delete the beans sale")), /Removed: income of 5,000/);
  assert.equal((await who.money()).length, 2);
  assert.match(asText(await who.say("delete the 777 sale")), /could not find/);
});

test("a question naming a month or a year is answered for that period, and spending can be shown by month", async () => {
  const who = farmer();
  await who.say("spent 3000 on seed on 10 September");
  await who.say("spent 1000 on seed");
  assert.match(asText(await who.say("how much did I spend in September")), /You spent 3,000 in September 2026/);
  assert.match(asText(await who.say("how much did I spend in August")), /no spending recorded for August 2026/);
  assert.match(asText(await who.say("how much did I spend this month")), /You spent 1,000 this month/);
  const byMonth = asText(await who.say("show my spending by month"));
  assert.match(byMonth, /September 2026 3,000/); assert.match(byMonth, /October 2026 1,000/);
});

test("1/2 acre is half an acre, and half an acre and two and a half acres are read", () => {
  assert.equal(parseQuantity("plant 1/2 acre of beans").value, 0.5);
  assert.equal(parseQuantity("a plot of half an acre").value, 0.5);
  assert.equal(parseQuantity("1 1/2 acres").value, 1.5);
  assert.equal(parseQuantity("2 and a half acres").value, 2.5);
  assert.equal(parseQuantity("50 kg").value, 50);
});

test("business: a payment with no direction is asked, a pledge is not income, a date is kept, and a full ledger says so", async () => {
  assert.match(precheck("log a payment of 5000 shillings").clarification, /received \(income\) or money you paid out/);
  assert.ok(!precheck("log an expense of 2000 shillings on seed").clarification);
  assert.equal(extractTransactionArgs("log income of 6k bob from maize", {}).amount, 6000);
  assert.equal(extractTransactionArgs("log income of 6k bob from maize", {}).currency, "KES");
  assert.equal(extractTransactionArgs("we got a pledge of 20000 shillings from the church", {}).pledge, true);
  assert.equal(extractTransactionArgs("received the pledge of 20000 shillings", {}).pledge, false);
  const make = transactions => ({ record_id: "rec_1", version: 1, data: { info: { businessName: "Amina Farm" }, editable: { transactions } } });
  const request = client => async ({ method }) => (method === "GET" ? { body: { clients: [client] } } : { body: client });
  const sentences = [];
  const saved = request(make([]));
  const dated = await run({ command: "log income of 6000 shillings from maize yesterday", confirmed: true, businessRequest: async args => { sentences.push(args); return saved(args); } });
  assert.equal(dated.status, "completed", JSON.stringify(dated));
  const put = sentences.find(call => call.method === "PUT");
  assert.match(put.body.editable.transactions[0].date, /^\d{4}-\d{2}-\d{2}$/);
  const full = make(Array.from({ length: 200 }, (_, index) => ({ date: "2026-01-01", type: "income", category: "", amount: index + 1, currency: "KES", description: "x" })));
  const refused = await run({ command: "log income of 6000 shillings from maize", confirmed: true, businessRequest: request(full) });
  assert.equal(refused.status, "needs-input");
  assert.match(refused.response, /already holds 200 money entries/);
  const pledge = await run({ command: "log a pledge of 5000 shillings income", confirmed: true, businessRequest: request(make([])) });
  assert.equal(pledge.status, "needs-input");
  assert.match(pledge.response, /promise, not money received/);
});
