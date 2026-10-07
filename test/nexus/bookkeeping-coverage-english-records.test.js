"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { farmWorkTurn } = require("../../nexus/farmwork/index.js");
const { farmLogTurn } = require("../../nexus/farm/log.js");
const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");

// Second half of the English bookkeeping coverage: summaries, a shop's own costs, standalone debts, undo and correction across stores, and quick farm logs without registered animals or fields.
const NOW = new Date("2026-10-05T09:00:00Z"); // Monday 5 October 2026, noon in Nairobi
function person({ userId = "u1", store = fakeFarmStore(), memory = fakeMemory() } = {}) {
  const say = async text => {
    const reply = await farmWorkTurn({ text, store, tenantId: "t1", userId, now: NOW, timeZone: "Africa/Nairobi", memory, notifications: { enqueue: async () => {}, existsByKey: async () => false }, nameOf: async () => "A trader" });
    if (reply === null) { // what the planner does next: the farm log (rain, harvests, eggs) answers what the toolkit did not
      const logged = await farmLogTurn({ text, memory, tenantId: "t1", userId, now: NOW, timeZone: "Africa/Nairobi" });
      return logged || null;
    }
    return typeof reply === "string" ? reply : JSON.stringify(reply);
  };
  const rows = collection => store.rows.filter(row => row.collection === collection && !row.deleted).map(row => row.data).reverse();
  const log = async () => (await memory.listFarmEntries()).map(row => row.content);
  return { say, store, memory, rows, money: () => rows("money"), log };
}
const run = async (who, lines) => { const out = []; for (const line of lines) out.push(await who.say(line)); return out; };
const subset = (actual, wanted, label) => { for (const [key, value] of Object.entries(wanted)) assert.deepEqual(actual[key], value, `${label}: ${key} was ${JSON.stringify(actual[key])} in ${JSON.stringify(actual)}`); };

// ---------- 2. summaries ----------
test("'what did I earn today' and its relatives are answered from the records, and 'on the farm' is not a kind of cost", async () => {
  const who = person();
  await run(who, ["sold maize 4500", "sold beans 3000", "bought seed 1200", "spent 800 on fuel"]);
  const earned = ["what did I earn today", "what did i earn today?", "today's sales", "sales today", "total sales today", "my sales today", "how much did I make today", "how much did I earn today", "what are my sales today",
    "how much have I sold today", "income today", "how much income today", "how much did I make this week", "how much did I make this month", "how much did I earn this week", "tell me what I earned today", "what did I make this month",
    "how much have I earned from my farm this month", "what is my income this month", "what did I take in today"];
  for (const phrase of earned) assert.match(await who.say(phrase), /7,500/, phrase);
  const profit = ["profit today", "what is my profit today", "what's my profit today", "how much profit did I make today", "did I make a profit today", "my profit this week", "what's my net profit this month"];
  for (const phrase of profit) assert.match(await who.say(phrase), /a profit of 5,500/, phrase);
  const spent = ["expenses today", "what did I spend today", "how much did I spend today", "how much did I spend this week", "my expenses this month", "total expenses this month", "what are my expenses today",
    "how much did I spend on the farm this month", "how much did I spend on the farm this season", "how much did I spend on the farm", "how much did I spend on my business this month", "how much have I spent this month"];
  for (const phrase of spent) { const reply = await who.say(phrase); assert.match(reply, /2,000/, phrase); assert.doesNotMatch(reply, /no the farm|I have no/, phrase); }
  assert.match(await who.say("how much did I spend on fuel this month"), /800 on fuel/);
  assert.match(await who.say("how much did I spend on the farm this season"), /^You spent 2,000 this season \(2 entries\)\./);
  assert.match(await who.say("how much did I earn yesterday"), /^I have no income recorded for yesterday\./);
});

test("a question about money is never answered 'nothing' when sales are waiting to be paid, and an empty account's question is left alone", async () => {
  const who = person();
  await who.say("sold maize to Mary 4500 on credit");
  const reply = await who.say("what did I earn today");
  assert.match(reply, /no income recorded today yet, but 1 sale on credit \(4,500\) is waiting to be paid/);
  const empty = person();
  assert.equal(await empty.say("what did I earn today"), null, "nothing is recorded here, so the rest of Kyro answers");
});

// ---------- 3. a shop's costs on a fresh account ----------
const COSTS = [
  ["paid rent 5000", { amount: 5000, category: "rent" }], ["paid for rent 5000", { amount: 5000, category: "rent" }], ["rent 5000", { amount: 5000, category: "rent" }], ["paid 3000 for shop rent", { amount: 3000, category: "rent" }],
  ["paid electricity 1500", { amount: 1500, category: "utilities" }], ["spent 1500 on electricity for the shop", { amount: 1500, category: "utilities" }], ["paid KPLC 2000", { amount: 2000, category: "utilities" }],
  ["paid labour 1500", { amount: 1500, category: "labour" }], ["spent 12000 on stock", { amount: 12000, category: "stock" }], ["paid for fuel 500", { amount: 500, category: "transport" }], ["fuel for boda 500", { amount: 500, category: "transport" }],
  ["paid the watchman 300", { amount: 300, category: "labour" }], ["farm hand 200", { amount: 200, category: "labour" }], ["paid the farm hand 200", { amount: 200, category: "labour" }], ["paid the farm hand two hundred shillings today", { amount: 200, category: "labour" }],
  ["Peter 5 days at 500", { amount: 2500, category: "labour", party: "Peter" }], ["paid Peter 5 days at 500", { amount: 2500, category: "labour", party: "Peter" }], ["Peter worked 5 days at 500 per day", { amount: 2500, category: "labour", party: "Peter" }],
  ["Mary 2 days at 700", { amount: 1400, party: "Mary" }], ["paid Peter 3000 wages", { amount: 3000, category: "labour", party: "Peter" }], ["paid airtime 100", { amount: 100, category: "utilities" }],
  ["rent 5000 yesterday", { amount: 5000, category: "rent", day: "2026-10-04" }]
];
test("a shopkeeper with no farm records records rent, electricity, labour and stock as business costs", async () => {
  for (const [phrase, wanted] of COSTS) {
    const who = person();
    const reply = await who.say(phrase);
    assert.match(reply, /^Recorded: /, `${phrase} -> ${reply}`);
    assert.equal(who.money().length, 1, phrase);
    subset(who.money()[0], { type: "expense", ...wanted }, phrase);
  }
  const shop = person();
  await run(shop, ["sold shoes 10000", "paid rent 5000", "paid electricity 1500", "paid labour 1500", "bought stock 12000"]);
  assert.match(await shop.say("profit today"), /income 10,000, spending 20,000, so a loss of 10,000/, "rent, electricity, labour and stock all count against the shop");
  const labour = person(); await labour.say("Peter 5 days at 500");
  assert.match(labour.money()[0].item, /5 days of labour/);
});

test("a farmer's electricity is still a household cost, and 'pay' is a request, never a record", async () => {
  const farmer = person();
  await run(farmer, ["Add a field called North Plot", "skip", "skip", "skip", "skip"]);
  await farmer.say("sold maize 9000");
  assert.match(await farmer.say("paid electricity 1500"), /\(household\)/);
  assert.match(await farmer.say("profit this month"), /income 9,000, spending 0, so a profit of 9,000/);
  const who = person();
  for (const text of ["pay rent 5000", "pay my electricity bill 1500 paybill 888880", "send 5000 to John on mpesa", "Pay 5000 to John", "withdraw 10000 from my wallet", "paid the till 123456 for 2300 sugar"]) assert.equal(await who.say(text), null, text);
  assert.equal(who.money().length, 0);
});

// ---------- 4. standalone debts ----------
test("'John owes me 800': a receivable with partial payments, per currency, never counted as income until paid", async () => {
  const who = person();
  assert.match(await who.say("John owes me 800"), /^Recorded: John owes you 800\. I have not counted it as income yet\./);
  subset(who.money()[0], { type: "income", unpaid: true, debt: true, party: "John", amount: 800 }, "debt");
  assert.match(await who.say("what did I earn today"), /no income recorded today yet, but 1 sale on credit \(800\)/);
  assert.equal(await who.say("who owes me"), 'Owed to you: John 800. Say "John paid" when one of them pays.');
  assert.equal(await who.say("how much does John owe me"), "John owes you 800.");
  assert.equal(await who.say("how much does John owe"), "John owes you 800.");
  assert.equal(await who.say("does John owe me anything"), "John owes you 800.");
  assert.match(await who.say("John paid 500"), /^Recorded: John paid 500, now counted as income\. John still owes 300\./);
  assert.equal(await who.say("how much does John owe me"), "John owes you 300.");
  assert.match(await who.say("how much has John paid me"), /^John has paid you 500 so far \(1 payment\)\. John still owes you 300\./);
  assert.match(await who.say("what did I earn today"), /^You earned 500 today/);
  assert.match(await who.say("John paid 300"), /John owes you nothing now\./);
  assert.equal(await who.say("how much does John owe me"), "John owes you nothing that I know of.");
  assert.equal(await who.say("who owes me"), "Nobody owes you anything that I know of.");
  assert.match(await who.say("how much has John paid me in total"), /^John has paid you 800 so far/);
  assert.match(await who.say("what did I earn today"), /^You earned 800 today/);
});

test("credit sales said as 'Mary bought on credit', several debtors, and money in different currencies is never added together", async () => {
  const who = person();
  assert.match(await who.say("Mary bought on credit 2000"), /^Recorded: Mary owes you 2,000\./);
  assert.match(await who.say("Peter bought airtime on credit 300"), /^Recorded: sold airtime to Peter for 300 on credit\./);
  assert.match(await who.say("Mary bought airtime on credit for 500"), /^Recorded: sold airtime to Mary for 500 on credit\./);
  assert.match(await who.say("who owes me"), /Mary 2,500/);
  assert.match(await who.say("Mary paid 2500"), /Mary owes you nothing now/);
  const two = person();
  await run(two, ["John owes me 800 KSh", "John owes me $20"]);
  assert.match(await two.say("how much does John owe me"), /^John owes you (?:KSh 800 and \$20|\$20 and KSh 800)\.$/);
  const ask = person();
  assert.equal(await ask.say("Mary owes me"), "How much do they owe you?");
  assert.match(await ask.say("2k"), /^Recorded: Mary owes you 2,000\./);
  assert.match(await ask.say("Peter owes me 4.500"), /^Did you mean 4,500 when Peter owes you "4.500"\?/);
  assert.equal(ask.money().length, 1, "an amount in doubt is not recorded");
  for (const text of ["who owes me", "nobody owes me anything", "someone owes me", "I owe you one"]) assert.doesNotMatch(String(await ask.say(text)), /Recorded/, text);
});

test("'I owe the supplier 5000': a payable that becomes a cost only when it is paid, in parts, with no double counting", async () => {
  const who = person();
  assert.match(await who.say("I owe the supplier 5000"), /^Recorded: you owe Supplier 5,000\. It is not counted as a cost until you pay it\./);
  assert.match(await who.say("what did I spend today"), /^I have no spending recorded for today/, "not a cost yet");
  assert.equal(await who.say("how much do I owe the supplier"), "You owe Supplier 5,000.");
  assert.match(await who.say("who do I owe"), /^You owe: Supplier 5,000\./);
  assert.match(await who.say("I paid the supplier 2000"), /^Recorded: you paid Supplier 2,000 of what you owed\. 2,000 of it is counted as a cost now\. You still owe Supplier 3,000\./);
  assert.match(await who.say("what did I spend today"), /^You spent 2,000 today \(1 entry\)/);
  assert.match(await who.say("I paid the supplier 3500"), /You only owed Supplier 3,000, so that is all I recorded\. You owe Supplier nothing now\./);
  assert.match(await who.say("what did I spend today"), /^You spent 5,000 today/);
  assert.equal(await who.say("how much do I owe the supplier"), "You owe Supplier nothing that I know of.");
  // something bought on credit was counted when it was bought: paying it is not a second cost (as it always was)
  const credit = person(); await credit.say("bought 5 bags of fertiliser for 20000 on credit from Wanjiru");
  assert.match(await credit.say("I paid Wanjiru 8000"), /That is not a new cost/);
  assert.match(await credit.say("what did I spend today"), /^You spent 20,000 today \(1 entry\)/);
  const asked = person();
  assert.equal(await asked.say("I owe Mama Fatuma"), "How much do you owe them?");
  assert.match(await asked.say("1500"), /^Recorded: you owe Mama Fatuma 1,500\./);
});

// ---------- 5. undo and correct across the stores ----------
test("'undo' and 'remove my last record' take away the MOST RECENT entry of any kind, and say exactly what", async () => {
  const who = person();
  await who.say("collected 42 eggs");
  assert.equal(await who.say("sold 2 bags for 8000"), "What was it?", "a sale with no item asks what it was (it used to be saved with the item \"for 8000\")");
  assert.match(await who.say("maize"), /^Recorded: sold 2 bags of maize for 8,000\./);
  const first = await who.say("remove my last record");
  assert.match(first, /^Removed: income of 8,000/);
  assert.equal((await who.log()).length, 1, "the eggs are still there");
  assert.equal(who.money().length, 0);
  const second = await who.say("remove my last record");
  assert.equal(second, "Removed your last entry: 42 eggs for today.");
  assert.equal((await who.log()).length, 0);
  assert.equal(await who.say("remove my last record"), "There is nothing to undo.");

  const seeds = person();
  await seeds.say("I harvested 3 bags of maize");
  await seeds.say("bought seeds for 500");
  assert.match(await seeds.say("remove last entry"), /^Removed: spending of 500 \(bought seeds\)/);
  assert.equal((await seeds.log()).length, 1, "the harvest was not what was removed");
  assert.match(await seeds.say("delete the last entry"), /^Removed your last entry: 3 bags of maize for today\./);
});

test("bare undo phrases, and the typed ones, each name what they removed", async () => {
  for (const phrase of ["undo", "undo that", "scratch that", "scrap that", "oops undo", "delete that", "remove that", "undo my last entry", "undo the last record", "delete the last one", "undo that last entry"]) {
    const who = person();
    await who.say("sold maize 4500");
    assert.match(await who.say(phrase), /^Removed: income of 4,500 \(sold maize\)/, phrase);
    assert.equal(who.money().length, 0, phrase);
  }
  const who = person();
  await run(who, ["sold maize 4500", "bought seed 1200", "sold beans 3000", "spent 800 on fuel"]);
  assert.match(await who.say("delete the last sale"), /^Removed: income of 3,000 \(sold beans\)/, "the latest SALE, not the fuel after it");
  assert.match(await who.say("delete the last expense"), /^Removed: spending of 800 \(fuel\)/);
  assert.match(await who.say("undo my last purchase"), /^Removed: spending of 1,200 \(bought seed\)/);
  assert.match(await who.say("cancel last sale"), /^Removed: income of 4,500/);
  assert.equal(await who.say("delete the last sale"), "I have no sale recorded to remove.");
  assert.equal(await who.say("delete the last expense"), "I have no expense recorded to remove.");
  const mixed = person();
  await run(mixed, ["I harvested 3 bags of maize", "the hens laid 42 eggs", "sold maize 4500"]);
  assert.equal(await mixed.say("delete the last harvest"), "Removed your last entry: 42 eggs for today.", "eggs are the latest harvest");
  assert.equal(await mixed.say("undo the last egg entry"), "I have no egg entry recorded to remove.");
  assert.equal(await mixed.say("delete the last harvest"), "Removed your last entry: 3 bags of maize for today.");
  assert.equal(mixed.money().length, 1);
  // a bare "undo" never reaches back further than an hour, and never takes out a payment
  const old = person(); await old.say("sold maize 4500");
  old.store.rows.forEach(row => { row.createdAt = new Date(Date.now() - 3 * 3600 * 1000).toISOString(); });
  assert.equal(await old.say("undo"), null, "too long ago to mean 'that'");
  assert.match(await old.say("delete the last entry"), /^Removed: income of 4,500/, "but an explicit 'last entry' always works");
  const paid = person(); await run(paid, ["John owes me 800", "John paid 500"]);
  assert.match(await paid.say("undo"), /^The last thing I recorded was a payment/);
  assert.equal(paid.money().length, 2, "nothing was removed");
});

test("corrections: 'oops that was 3500', 'actually change the last one to 4800', 'no it was 5 bags', and 'the last sale' is the last sale", async () => {
  const who = person();
  await who.say("sold maize 4500");
  assert.match(await who.say("oops that was 3500"), /^Changed: income of 4,500 \(sold maize\) is now 3,500\./);
  assert.match(await who.say("actually change the last one to 4800"), /^Changed: income of 3,500 \(sold maize\) is now 4,800\./);
  assert.match(await who.say("no it was 5000"), /is now 5,000\./);
  assert.match(await who.say("sorry it was 4000"), /is now 4,000\./);
  assert.match(await who.say("that should be 4200"), /is now 4,200\./);
  assert.match(await who.say("it should have been 4100"), /is now 4,100\./);
  assert.match(await who.say("make it 4300"), /is now 4,300\./);
  assert.equal(who.money()[0].amount, 4300);
  const qty = person(); await qty.say("sold 3 bags of maize for 9000");
  assert.match(await qty.say("no it was 5 bags"), /^Changed the quantity of income of 9,000 \(sold maize\): it is now 5 bags, not 3 bags\. The amount is still 9,000/);
  subset(qty.money()[0], { qty: 5, unit: "bag", amount: 9000 }, "quantity");
  const typed = person(); await run(typed, ["sold maize for 3000", "spent 800 on fuel"]);
  assert.match(await typed.say("change my last sale to 4000"), /^Changed: income of 3,000 \(sold maize\) is now 4,000\./);
  assert.equal(typed.money()[1].amount, 800, "the expense was not touched");
  assert.match(await typed.say("change my last income to 4100"), /^Changed:/);
  const none = person(); await none.say("spent 800 on fuel");
  assert.equal(await none.say("change my last sale to 4000"), "I have no sale recorded to change.");
  const doubt = person(); await doubt.say("sold maize 4500");
  assert.match(await doubt.say("that should be 4.500"), /^I wasn't sure about "4.500": do you mean 4,500\? Nothing was changed\./);
  assert.equal(doubt.money()[0].amount, 4500);
  assert.equal(await person().say("oops that was 3500"), null, "nothing to correct");
  // corrections across stores: the farm log's eggs and harvests can be corrected by number too
  const log = person(); await log.say("I harvested 3 bags of maize");
  assert.match(await log.say("no it was 5 bags not 3"), /^Changed: 3 bags of maize is now 5 bags of maize, for today\./);
  assert.equal((await log.log()).length, 1);
  assert.equal((await log.log())[0].value, 5);
  const eggs = person(); await eggs.say("collected 42 eggs");
  assert.match(await eggs.say("sorry that was 40"), /^Changed: 42 eggs is now 40 eggs, for today\./);
  const milk = person(); await milk.say("log 30 litres of milk today");
  assert.match(await milk.say("sorry that was 20 litres"), /30 litres of milk is now 20 litres of milk/);
  assert.match(await eggs.say("that should be 5000 dollars"), /looks like money\. Nothing was changed/);
  const old = person(); await old.say("sold maize 4500");
  old.store.rows.forEach(row => { row.createdAt = new Date(Date.now() - 3 * 24 * 3600 * 1000).toISOString(); });
  assert.match(await old.say("that should be 5000"), /a while ago, so I have not changed it/);
});

// ---------- 7. a missing detail is asked for, and kept ----------
test("'I harvested maize' asks how much and keeps the half-finished entry; a correction of the previous entry works", async () => {
  const who = person();
  assert.equal(await who.say("I harvested maize"), "How much was it? For example 3 bags or 200 kg.");
  assert.equal((await who.log()).length, 0);
  assert.match(await who.say("three bags"), /^Logged 3 bags of maize for today\./);
  assert.match(await who.say("no it was 5 bags not 3"), /^Changed: 3 bags of maize is now 5 bags of maize/);
  assert.equal((await who.log())[0].value, 5);
  assert.equal(await who.say("I collected eggs"), "How many eggs?");
  assert.match(await who.say("42"), /^Logged 42 eggs for today\./);
  assert.equal(await who.say("I harvested beans yesterday"), "How much was it? For example 3 bags or 200 kg.");
  assert.match(await who.say("200 kg"), /^Logged 200 kg of beans for yesterday\./);
  assert.equal(await who.say("I harvested tomatoes"), "How much was it? For example 3 bags or 200 kg.");
  assert.match(await who.say("cancel"), /Nothing was saved/);
  assert.equal((await who.log()).length, 3);
  const buy = person();
  assert.equal(await buy.say("I bought fertiliser"), "How much did it cost?");
  assert.match(await buy.say("4500 shillings"), /^Recorded: bought fertiliser for 4,500 shillings \(fertiliser\)/);
  assert.match(await buy.say("no it was 5400"), /^Changed: spending of 4,500 shillings \(bought fertiliser\) is now 5,400 shillings\./);
  assert.match(await buy.say("how much have I spent on the farm"), /5,400/);
  assert.equal(buy.money()[0].amount, 5400);
});

// ---------- 6. unnamed animals and quick farm logs ----------
test("milk, eggs, vaccination and births without a named animal are kept as written", async () => {
  const who = person();
  assert.match(await who.say("my cow gave 18 litres"), /^Logged 18 litres of milk for today\. Total milk this year: 18 litres\./);
  assert.match(await who.say("the cows gave 40 litres of milk"), /Total milk this year: 58 litres/);
  assert.match(await who.say("my cow gave 18 litres of milk yesterday"), /^Logged 18 litres of milk for yesterday/);
  assert.match(await who.say("hens laid 42 eggs"), /^Logged 42 eggs for today\./);
  assert.match(await who.say("the hens laid 30 eggs yesterday"), /^Logged 30 eggs for yesterday\./);
  assert.match(await who.say("collected 42 eggs"), /^Logged 42 eggs for today\./);
  assert.match(await who.say("my chickens have laid 12 eggs"), /^Logged 12 eggs for today\./);
  assert.match(await who.say("I milked 18 litres"), /^Logged 18 litres of milk for today\./);
  assert.match(await who.say("how many eggs this week"), /^Harvest this week: 96 eggs\./);
  const entries = await who.log();
  assert.equal(entries.filter(entry => entry.crop === "milk").reduce((sum, entry) => sum + entry.value, 0), 94);
  assert.match(await who.say("vaccinated the goats"), /^Recorded: vaccinated your goats today\./);
  assert.match(await who.say("I vaccinated the goats for PPR today"), /vaccinated your goats \(PPR\) today/);
  assert.match(await who.say("I dewormed the cows"), /^Recorded: dewormed your cows today\./);
  assert.match(await who.say("vaccinated the goats against PPR, next due in 6 months"), /I'll remember it's due again/);
  const events = who.rows("animal_event");
  subset(events[0], { type: "vaccination", animal: "your goats", herd: true, species: "goat", detail: "" }, "goats");
  assert.equal(events[1].detail, "PPR");
  assert.ok(events[3].nextDue > "2026-10-05");
  assert.match(await who.say("my cow gave birth to a female calf this morning"), /^Recorded: your cow gave birth today \(female calf\)\./);
  subset(who.rows("animal_event").at(-1), { type: "birth", detail: "female calf" }, "birth");
  assert.match(await who.say("what vaccinations are due"), /Nothing is due in the next 30 days|Due/);
  // one named cow: it is hers; several: one short question
  const one = person();
  await run(one, ["add a cow called Daisy", "skip", "skip", "skip", "skip"]);
  assert.match(await one.say("my cow gave 18 litres"), /^Recorded: daisy gave 18 L today\./);
  assert.match(await one.say("how much milk did daisy give today"), /18/);
  const two = person();
  await run(two, ["add a cow called Daisy", "skip", "skip", "skip", "skip", "add a cow called Bella", "skip", "skip", "skip", "skip"]);
  assert.match(await two.say("my cow gave 12 litres"), /^Which cow\? bella, daisy/);
  assert.match(await two.say("bella"), /^Recorded: bella gave 12 L today\./);
  assert.equal(two.rows("animal_event").at(-1).animal, "bella");
  assert.match(await two.say("my cow gave 9 litres"), /^Which cow\?/);
  assert.match(await two.say("all"), /^Logged 9 litres of milk for today/);
  assert.match(await two.say("my cow gave 7 litres"), /^Which cow\?/);
  assert.match(await two.say("susan"), /^I don't have one called "susan"\. Please pick one: bella, daisy/);
  assert.match(await two.say("daisy"), /^Recorded: daisy gave 7 L today\./);
  assert.match(await two.say("the cows gave 40 litres"), /^Logged 40 litres of milk/, "a herd is never asked 'which'");
  assert.match(await two.say("vaccinated the cow"), /^Which cow\?/);
  assert.match(await two.say("daisy"), /^Recorded: daisy vaccinated today\./);
  assert.match(await two.say("daisy gave 5 litres"), /^Recorded: daisy gave 5 L today\./, "a named animal is still livestock.js's own");
});

test("planting, spraying and other farm jobs are recorded without a field, and health talk is never taken", async () => {
  const who = person();
  assert.match(await who.say("planted 2 acres of maize"), /^Recorded: planted 2 acres of maize today\./);
  assert.match(await who.say("planted 2 acres of maize yesterday"), /yesterday\./);
  assert.match(await who.say("sprayed the tomatoes this morning for blight"), /^Recorded: sprayed tomatoes \(blight\) today\. I only keep the record; I can't tell you what to use/);
  assert.match(await who.say("weeded the beans"), /^Recorded: weeded beans today\./);
  assert.match(await who.say("planted maize in the garden"), /^Recorded: planted maize in garden today\./);
  const jobs = who.rows("activity");
  subset(jobs[0], { verb: "planted", item: "maize", size: { value: 2, unit: "acre" }, day: "2026-10-05" }, "planting");
  assert.equal(jobs[1].day, "2026-10-04");
  assert.match(await who.say("what did I plant"), /^4 entries|3 entries/);
  assert.match(await who.say("what did I spray"), /^1 entry, latest first: today sprayed tomatoes/);
  for (const text of ["I sprayed the kale with pesticide yesterday can I eat it today", "I sprayed pesticide and now I have a headache and I feel dizzy and vomiting", "when should I plant maize in Kisumu?", "I planted it and now my child is sick", "sprayed the cows"]) assert.equal(await who.say(text), null, text);
  assert.equal(who.rows("activity").length, 5, "nothing more was recorded for those");
  // a field they have is the field's business (fields.js)
  const farm = person();
  await run(farm, ["Add a field called North Plot", "skip", "skip", "skip", "skip"]);
  assert.match(await farm.say("I planted maize in North Plot on 12 March"), /^Noted: maize planted in North Plot/);
  assert.equal(farm.rows("activity").length, 0);
});

test("a price said 'each' on the market board is the price of ONE, and the place is kept", async () => {
  const who = person();
  assert.match(await who.say("post for sale: 50 bags of maize at 3000 each"), /^Posted\. Listing 1: for sale — 50 bags of maize at 3,000 per bag/);
  assert.match(await who.say("post for sale: 50 bags of maize at 3000 each in Kakamega"), /at 3,000 per bag — A trader \(Kakamega\)/);
  assert.match(await who.say("post for sale: 20 chickens at 600 each near Kisii"), /20 chickens at 600 each — A trader \(Kisii\)/);
  assert.match(await who.say("post for sale: 500 kg maize at 40 per kg"), /500 kg of maize at 40 per kg/);
  assert.match(await who.say("post for sale: 10 bags of beans price 20000 for the lot"), /10 bags of beans at 2,000 per bag/);
  const listings = (await who.store.listPublic({ tenantId: "t1", collection: "listing" })).map(row => row.data);
  assert.equal(listings.find(row => row.item === "maize" && row.area === "Kakamega").price, 3000);
  assert.equal(listings.find(row => row.item === "chickens").qty, 20);
});

// ---------- the guard rails ----------
test("nothing here ever claims a payment or records something that was only a question", async () => {
  const who = person();
  for (const text of ["Should I buy a car?", "what is the price of maize today?", "I bought a phone, any tips?", "How do I store maize so weevils do not eat it", "I sold my shares and now I am worried", "when should I pay rent",
    "can you pay my electricity bill", "remind me to pay rent 5000 tomorrow", "John owes me", "who owes me what"]) assert.doesNotMatch(String(await who.say(text)), /^Recorded/, text);
  assert.equal(who.money().length, 0);
  // the very same farm-log phrases still work straight from the log (the planner's second stop)
  const memory = fakeMemory();
  assert.match(await farmLogTurn({ text: "the hens laid 42 eggs", memory, tenantId: "t1", userId: "u1", now: NOW, timeZone: "Africa/Nairobi" }), /^Logged 42 eggs/);
  assert.equal(await farmLogTurn({ text: "add 2 litres of milk to my shopping list", memory, tenantId: "t1", userId: "u1", now: NOW, timeZone: "Africa/Nairobi" }), null);
  assert.match(await farmLogTurn({ text: "got 12 mm of rain last night", memory, tenantId: "t1", userId: "u1", now: NOW, timeZone: "Africa/Nairobi" }), /^Logged 12 mm of rain for yesterday/);
});
