"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { farmWorkTurn } = require("../../nexus/farmwork/index.js");
const books = require("../../nexus/farmwork/books.js");
const amounts = require("../../nexus/farmwork/books-amounts.js");
const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");

// The deterministic bookkeeping toolkit used to understand ONE phrasing ("sold 3 bags of maize for 4500"). About nine in ten of the ways people really say it fell through ("sold maize 4500", "sold eggs 15 trays
// at 450", "paid rent 5000", "John owes me 800", "undo", "my cow gave 18 litres"). These tests drive the toolkit directly with the fake store and check what was STORED (amount, category, currency) as well as what
// was said back. The rule under all of them: when an amount could be read two ways, the toolkit asks; it never records a number it was not sure of.

const NOW = new Date("2026-10-05T09:00:00Z"); // Monday 5 October 2026, noon in Nairobi
function person({ userId = "u1", store = fakeFarmStore(), memory = fakeMemory() } = {}) {
  const say = async text => {
    const reply = await farmWorkTurn({ text, store, tenantId: "t1", userId, now: NOW, timeZone: "Africa/Nairobi", memory, notifications: { enqueue: async () => {}, existsByKey: async () => false }, nameOf: async () => "A trader" });
    return typeof reply === "string" ? reply : reply ? JSON.stringify(reply) : null;
  };
  const rows = collection => store.rows.filter(row => row.collection === collection && !row.deleted).map(row => row.data).reverse(); // oldest first
  return { say, store, memory, rows, money: () => rows("money"), log: () => memory.listFarmEntries().then(list => list.map(row => row.content)) };
}
const run = async (who, lines) => { const out = []; for (const line of lines) out.push(await who.say(line)); return out; };
const subset = (actual, wanted, label) => { for (const [key, value] of Object.entries(wanted)) assert.deepEqual(actual[key], value, `${label}: ${key} was ${JSON.stringify(actual[key])}, wanted ${JSON.stringify(value)} (${JSON.stringify(actual)})`); };

// ---------- 1. sales and purchases said without "for" ----------
// [phrase, what is stored (every phrase is said by someone with NO farm records at all)]
const TRADES = [
  ["sold maize 4500", { type: "income", amount: 4500, item: "maize", category: "crops" }],
  ["sold 3 sacks of maize 4500", { type: "income", amount: 4500, qty: 3, unit: "sack", item: "maize" }],
  ["sold maize 3 sacks 4500", { type: "income", amount: 4500, qty: 3, unit: "sack", item: "maize" }],
  ["I sold maize 4500", { type: "income", amount: 4500 }],
  ["we sold maize 4500", { type: "income", amount: 4500 }],
  ["I have sold maize 4500", { type: "income", amount: 4500 }],
  ["just sold maize 4500", { type: "income", amount: 4500 }],
  ["sold maize 4500 today", { type: "income", amount: 4500, day: "2026-10-05" }],
  ["sold maize 4500 yesterday", { type: "income", amount: 4500, day: "2026-10-04" }],
  ["record that I sold maize 4500", { type: "income", amount: 4500 }],
  ["sold maize ksh 4,500", { type: "income", amount: 4500, currency: "KSh" }],
  ["sold maize KSh 4500/=", { type: "income", amount: 4500, currency: "KSh" }],
  ["sold maize 4500 shillings", { type: "income", amount: 4500, currency: "shillings", item: "maize" }],
  ["I sold sukuma wiki 200 bob", { type: "income", amount: 200, item: "sukuma wiki" }],
  ["sold maize 2k", { type: "income", amount: 2000 }],
  ["sold maize 2.5k", { type: "income", amount: 2500 }],
  ["sold milk 30 dollars", { type: "income", amount: 30, currency: "$", item: "milk" }],
  ["sold maize 10000 naira", { type: "income", amount: 10000, currency: "₦" }],
  ["sold beans 3,000", { type: "income", amount: 3000, item: "beans" }],
  ["sold shoes 2500", { type: "income", amount: 2500, item: "shoes", category: "other" }],
  ["sold 3 pairs of shoes 7500", { type: "income", amount: 7500, item: "3 pairs of shoes" }],
  ["sold soap 150", { type: "income", amount: 150, item: "soap" }],
  ["sold bread 50", { type: "income", amount: 50, item: "bread" }],
  ["sold airtime 500", { type: "income", amount: 500, item: "airtime" }],
  ["sold paraffin 200", { type: "income", amount: 200, item: "paraffin" }],
  ["sold 2 kg of sugar 400", { type: "income", amount: 400, qty: 2, unit: "kg", item: "sugar" }],
  ["sold 4 bags of cement 38000", { type: "income", amount: 38000, qty: 4, unit: "bag", item: "cement" }],
  ["sold a phone 15000", { type: "income", amount: 15000 }],
  ["sold mandazi 300", { type: "income", amount: 300, item: "mandazi" }],
  ["sold my old phone 3000", { type: "income", amount: 3000, item: "old phone" }],
  ["got 2000 from selling beans", { type: "income", amount: 2000, item: "beans" }],
  ["made 3000 selling mandazi", { type: "income", amount: 3000, item: "mandazi" }],
  ["earned 500 selling airtime", { type: "income", amount: 500 }],
  ["sold maize 4500 on credit", { type: "income", amount: 4500, unpaid: true }],
  ["sold maize 4500 to Mary on credit", { type: "income", amount: 4500, unpaid: true, party: "Mary" }],
  ["sold maize to Mary 4500", { type: "income", amount: 4500, party: "Mary" }],
  // "at" is the price of ONE for things counted; "for" and a bare amount are the whole
  ["sold eggs 15 trays at 450", { type: "income", amount: 6750, qty: 15, unit: "tray", item: "eggs" }],
  ["sold eggs 15 trays at 450 each", { type: "income", amount: 6750, qty: 15, unit: "tray", item: "eggs" }],
  ["sold 15 trays of eggs at 450", { type: "income", amount: 6750, qty: 15, unit: "tray", item: "eggs" }],
  ["sold 15 trays of eggs for 450", { type: "income", amount: 450, qty: 15, unit: "tray", item: "eggs" }],
  ["sold 15 trays of eggs 450", { type: "income", amount: 450, qty: 15, item: "eggs" }],
  ["sold milk 100 litres at 55 each", { type: "income", amount: 5500, qty: 100, unit: "L", item: "milk" }],
  ["sold 3 chickens at 600", { type: "income", amount: 1800, item: "chickens" }],
  ["sold 2 bags of flour 300 each", { type: "income", amount: 600, qty: 2, unit: "bag", item: "flour" }],
  ["bought stock 12000", { type: "expense", amount: 12000, category: "stock", item: "stock" }],
  ["bought seed 1200", { type: "expense", amount: 1200, category: "seed" }],
  ["bought fertiliser 3400", { type: "expense", amount: 3400, category: "fertiliser" }],
  ["bought 10 bags of cement 8500 each", { type: "expense", amount: 85000, qty: 10, unit: "bag", item: "cement" }],
  ["bought 5 bags of fertiliser at 3000", { type: "expense", amount: 15000, qty: 5, unit: "bag", category: "fertiliser" }],
  ["bought 3 pairs of shoes at 1200", { type: "expense", amount: 3600 }],
  ["purchased 20 crates of eggs 6000", { type: "expense", amount: 6000, qty: 20, unit: "crate" }],
  ["bought sugar 2000 from Mama Fatuma", { type: "expense", amount: 2000, party: "Mama Fatuma", item: "sugar" }],
  ["supplier Mama Fatuma delivered 20 crates of eggs 6000", { type: "expense", amount: 6000, party: "Mama Fatuma", qty: 20 }],
  ["bought feed 2500", { type: "expense", amount: 2500, category: "feed" }],
  ["bought 10 bags of dairy meal for 25000 shillings", { type: "expense", amount: 25000, category: "feed" }]
];
test("sales and purchases said without 'for' are recorded with the right amount, item and currency, with no farm records needed", async () => {
  let checked = 0;
  for (const [phrase, wanted] of TRADES) {
    const who = person();
    const reply = await who.say(phrase);
    if (wanted === null) { assert.equal(reply, null, phrase); continue; }
    assert.match(reply, /^Recorded: /, `${phrase} -> ${reply}`);
    const saved = who.money();
    assert.equal(saved.length, 1, `${phrase}: exactly one entry (${JSON.stringify(saved)})`);
    subset(saved[0], wanted, phrase);
    checked += 1;
  }
  assert.ok(checked >= 50, `${checked} phrases checked`);
});

test("two things in one sentence are two entries, and how each was paid is only a note (nothing is paid or sent)", async () => {
  const who = person();
  const reply = await who.say("sold 1 goat 12000 cash and 3 chickens 4500 mpesa");
  assert.match(reply, /^Recorded: sold 1 goat for 12,000, paid by cash\. Recorded: sold 3 chickens for 4,500, paid by mpesa\. Income this month: 16,500\.$/);
  const [goat, chickens] = who.money();
  subset(goat, { type: "income", amount: 12000, payment: "cash", category: "livestock" }, "goat");
  subset(chickens, { type: "income", amount: 4500, payment: "mpesa", category: "livestock" }, "chickens");
  assert.equal(who.money().length, 2);
  assert.equal(who.money().some(entry => entry.type === "expense"), false, "a payment method is never a payment");
  const one = person(); await one.say("sold 1 goat 12000 cash");
  subset(one.money()[0], { amount: 12000, payment: "cash" }, "one goat");
  const mixed = person(); await mixed.say("sold maize 3000 and bought seed 500");
  assert.deepEqual(mixed.money().map(entry => [entry.type, entry.amount]), [["income", 3000], ["expense", 500]]);
  const together = person(); await together.say("sold maize and beans 4500");
  assert.equal(together.money().length, 1, "one price for two things stays one sale");
  assert.equal(together.money()[0].amount, 4500);
});

test("an amount that could be read two ways is asked about, never guessed", async () => {
  const cases = [
    ["sold maize for 4.500", 4500, "4.500"], ["sold maize 4.500", 4500, "4.500"], ["sold maize 4 5 0 0", 4500, "4 5 0 0"], ["sold maize 1 000", 1000, "1 000"],
    ["bought seed 12 000 cash", 12000, "12 000"], ["sold eggs 15 trays at 4.500", 67500, "4.500"], ["paid rent 5.000", 5000, "5.000"], ["sold maize 4,5", 4.5, "4,5"]
  ];
  // (candidate is what is stored after "yes": for 15 trays at 4,500 each it is the 15 x 4,500)
  for (const [phrase, candidate, says] of cases) {
    const who = person();
    const ask = await who.say(phrase);
    assert.match(ask, new RegExp(`^Did you mean [\\d.,]+ when you said "${says.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"\\?`), `${phrase} -> ${ask}`);
    assert.equal(who.money().length, 0, `${phrase}: nothing is recorded until the answer`);
    // "no" leaves it as it is; "yes" records exactly the number that was asked about
    const no = person(); await no.say(phrase);
    assert.match(await no.say("no"), /left it as it is/);
    assert.equal(no.money().length, 0);
    const yes = person(); await yes.say(phrase);
    assert.match(await yes.say("yes"), /^Recorded: /);
    assert.equal(yes.money().length, 1, phrase);
    assert.equal(yes.money()[0].amount, candidate, `${phrase} -> ${candidate}`);
  }
  // anything else said instead is simply a new request: the question is dropped and nothing was recorded
  const who = person(); await who.say("sold maize 4.500");
  assert.match(await who.say("sold maize 4500"), /^Recorded: sold maize for 4,500/);
  assert.equal(who.money().length, 1);
});

test("'k', slashes and symbols are read the way they are written", () => {
  assert.equal(amounts.readToken("2k").amount, 2000);
  assert.equal(amounts.readToken("2.5k").amount, 2500);
  assert.equal(amounts.readToken("KSh 4,500").amount, 4500);
  assert.equal(amounts.readToken("KSh 4,500").currency, "KSh");
  assert.equal(amounts.readToken("$20").currency, "$");
  assert.equal(amounts.readToken("4500 dollars").currency, "$");
  assert.equal(amounts.readToken("4.500").unsure, 4500);
  assert.equal(amounts.readToken("4.5").unsure, null);
  assert.equal(amounts.readToken("12,50").unsure, 12.5);
  assert.equal(amounts.spokenDigits("sold maize 4 5 0 0"), 4500);
  assert.equal(amounts.spokenDigits("sold 3 5 kg bags"), null, "digits followed by a unit are a quantity");
  assert.equal(amounts.spokenDigits("sold maize 4500"), null);
  assert.deepEqual(amounts.splitTrailingMoney("maize 4500 cash"), { head: "maize", token: "4500", payment: "cash" });
  assert.equal(amounts.splitTrailingMoney("maize for 4500"), null, "an amount after 'for' already has its marker");
  assert.equal(amounts.splitTrailingMoney("sold 3 4500"), null);
  const spaced = amounts.splitTrailingMoney("maize 1 000");
  assert.equal(spaced.spaced, true); assert.equal(spaced.token, "1000");
});

test("a sale with no price is asked for the price, and the half-finished entry is kept for the answer", async () => {
  const who = person();
  assert.equal(await who.say("I sold maize"), "How much did you sell it for?");
  assert.equal(who.money().length, 0);
  assert.match(await who.say("4500"), /^Recorded: sold maize for 4,500\./);
  subset(who.money()[0], { type: "income", amount: 4500, item: "maize" }, "maize");
  assert.equal(await who.say("I bought fertiliser"), "How much did it cost?");
  assert.match(await who.say("3500"), /^Recorded: bought fertiliser for 3,500 \(fertiliser\)/);
  assert.equal(await who.say("I sold some tomatoes"), "How much did you sell it for?");
  assert.match(await who.say("5k"), /^Recorded: sold tomatoes for 5,000/);
  // a quantity is not a price: "10 bags at 3500 each" is 35,000, and a hint never becomes 3,500
  assert.equal(await who.say("I sold beans to Mama Njeri"), "How much did you sell it for?");
  assert.match(await who.say("10 bags at 3500 each"), /^Recorded: sold 10 bags of beans to Mama Njeri for 35,000\./);
  subset(who.money().at(-1), { amount: 35000, qty: 10, unit: "bag", party: "Mama Njeri" }, "beans");
  assert.equal(await who.say("I sold rice"), "How much did you sell it for?");
  assert.match(await who.say("4.500"), /do you mean 4,500/);
  assert.equal(who.money().length, 4, "a doubtful answer records nothing");
  assert.match(await who.say("cancel"), /Nothing was saved/);
  assert.equal(who.money().length, 4);
  // the day said with the first words is kept
  assert.equal(await who.say("I bought sugar yesterday"), "How much did it cost?");
  assert.match(await who.say("900"), /Dated Sunday 4 October\./);
  assert.equal(who.money().at(-1).day, "2026-10-04");
  // a stranger's chat is left alone
  const quiet = person();
  for (const text of ["I bought a new phone, it is great", "I sold my shares in the company and now I am happy", "I sold it"]) assert.equal(await quiet.say(text), null, text);
  assert.equal(quiet.money().length, 0);
});

test("a quantity and a price with no item asks what it was, and keeps the price for the answer", async () => {
  const who = person();
  assert.equal(await who.say("sold 1 bag at 4500 each"), "What was it?");
  assert.match(await who.say("maize"), /^Recorded: sold 1 bag of maize for 4,500\./);
  assert.equal(await who.say("sold 3 bags for 9000"), "What was it?");
  assert.match(await who.say("beans"), /^Recorded: sold 3 bags of beans for 9,000\./);
  assert.deepEqual(who.money().map(entry => [entry.item, entry.amount]), [["maize", 4500], ["beans", 9000]]);
});

test("kilos and litres sold 'at' a price are asked: each, or the lot?", async () => {
  const who = person();
  assert.match(await who.say("sold 20 kg of maize at 45"), /for each one, or for all of it together/);
  assert.match(await who.say("each"), /^Recorded: sold 20 kg of maize for 900\./);
  assert.match(await who.say("sold 20 kg of maize at 4500"), /for each one, or for all of it together/);
  assert.match(await who.say("total"), /^Recorded: sold 20 kg of maize for 4,500\./);
  assert.deepEqual(who.money().map(entry => entry.amount), [900, 4500]);
  // "per kg" was never in doubt
  assert.match(await who.say("sold 5kg tomatoes at 80 per kilo"), /for 400\./);
});
