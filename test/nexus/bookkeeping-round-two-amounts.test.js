"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { person, run, runTable } = require("./bookkeeping-round-two-helper.js");
const english = require("../../nexus/i18n/english-numbers.js");
const rereads = require("../../nexus/farmwork/rereads.js");

// English amounts said as words ("two grand", "four five zero zero") and the answer to "Did you mean 4,500?" said as a bare amount or a bare yes. Rule: an amount that could mean two things is asked about,
// and nothing is recorded until it is plain.
const sold = (amount, extra = {}) => ({ type: "income", amount, ...extra });
const spent = (amount, extra = {}) => ({ type: "expense", amount, ...extra });

test("English number words and slang are read: grand, and-a-half, hundreds, thousands", async () => {
  const failures = await runTable([
    ["sold maize for two grand", { money: [sold(2000)] }], ["sold maize a grand", { money: [sold(1000)] }], ["sold rice for five grand", { money: [sold(5000)] }], ["sold rice for 2.5 grand", { money: [sold(2500)] }],
    ["sold rice for two and a half grand", { money: [sold(2500)] }], ["sold rice two and a half thousand", { money: [sold(2500)] }], ["bought seed for one and a half thousand", { money: [spent(1500)] }],
    ["sold shoes for a grand and a half", { money: [sold(1500)] }], ["bought flour three grand", { money: [spent(3000)] }], ["paid rent two grand", { money: [spent(2000, { category: "rent" })] }],
    ["sold maize for a hundred and twenty", { money: [sold(120)] }], ["sold maize forty five hundred", { money: [sold(4500)] }], ["sold maize four thousand five hundred", { money: [sold(4500)] }],
    ["sold maize twelve hundred", { money: [sold(1200)] }], ["sold maize for two thousand five hundred", { money: [sold(2500)] }], ["sold beans for fifty thousand", { money: [sold(50000)] }],
    ["sold maize for one million two hundred thousand", { money: [sold(1200000)] }], ["sold sugar 2 kg for four hundred", { money: [sold(400, { qty: 2, unit: "kg", item: "sugar" })] }],
    ["John owes me two grand", { money: [{ type: "income", amount: 2000, unpaid: true, party: "John" }] }], ["spent one and a half grand on fuel", { money: [spent(1500, { category: "transport" })] }],
    ["sold eggs 3 trays at five hundred each", { money: [sold(1500, { qty: 3, unit: "tray" })] }]
  ]);
  assert.deepEqual(failures, []);
});

test("an English amount that could be read two ways is asked about and nothing is recorded until it is plain", async () => {
  const asks = [
    ["sold maize four thousand five", /could be 4,500 or 4,005/], ["bought seed for four thousand five", /could be 4,500 or 4,005/], ["sold beans for twenty five thousand five", /could be 25,500 or 25,005/],
    ["sold maize four five zero zero", /^Did you mean 4,500 when you said "four five zero zero"/], ["paid rent four five zero zero", /^Did you mean 4,500/], ["spent four five zero zero on fuel", /^Did you mean 4,500/],
    ["John owes me four five zero zero", /^Did you mean 4,500/], ["sold maize 4 5 0 0", /^Did you mean 4,500 when you said "4 5 0 0"/], ["sold maize 4.500", /^Did you mean 4,500/], ["sold maize 1 000", /^Did you mean 1,000/],
    ["I sold maize four five zero", /^Did you mean 450/], ["sold rice zero five zero zero", null]
  ];
  for (const [phrase, pattern] of asks) {
    const who = person();
    const reply = await who.say(phrase);
    if (pattern === null) { assert.ok(!/^Recorded/.test(String(reply)), `${phrase} -> ${reply}`); assert.equal(who.money().length, 0, phrase); continue; }
    assert.match(String(reply), pattern, phrase);
    assert.equal(who.money().length, 0, `${phrase}: nothing is recorded until the answer`);
  }
  // not about money: left alone
  const quiet = person();
  for (const text of ["my phone number is zero seven one two three four five six", "the gate code is four five zero zero", "we walked four thousand five steps"]) assert.equal(await quiet.say(text), null, text);
});

test("a bare amount answers 'Did you mean...?' and the half-finished entry is completed with it", async () => {
  const answers = [
    ["sold maize 4.500", "4500", 4500], ["sold maize 4.500", "4,500", 4500], ["sold maize 4.500", "4.5k", 4500], ["sold maize 4.500", "elfu nne mia tano", 4500], ["sold maize 4.500", "four thousand five hundred", 4500],
    ["sold maize 4.500", "it was 4500", 4500], ["sold maize 4.500", "4500 shillings", 4500], ["sold maize 4.500", "KSh 4,500", 4500], ["sold maize 4.500", "forty five hundred", 4500], ["sold maize 4.500", "no 4200", 4200],
    ["sold maize 4.500", "2k", 2000], ["sold maize four thousand five", "4500", 4500], ["sold maize four thousand five", "four thousand five hundred", 4500], ["sold maize four thousand five", "4005", 4005],
    ["sold maize four five zero zero", "4500", 4500], ["sold maize 4 5 0 0", "4500", 4500], ["sold maize 4 5 0 0", "4,500", 4500], ["paid rent 5.000", "5000", 5000], ["paid rent four five zero zero", "4500", 4500],
    ["bought seed 12 000 cash", "12000", 12000]
  ];
  for (const [phrase, reply, amount] of answers) {
    const who = person();
    const ask = await who.say(phrase);
    assert.match(String(ask), /Did you mean|could be/, phrase);
    const done = await who.say(reply);
    assert.match(String(done), /^Recorded: /, `${phrase} + ${reply} -> ${done}`);
    assert.equal(who.money().length, 1, `${phrase} + ${reply}`);
    assert.equal(who.money()[0].amount, amount, `${phrase} + ${reply}`);
  }
  // a quantity sale: the price is what the answer replaces
  const eggs = person(); await run(eggs, ["sold eggs 15 trays at 4.500", "450"]);
  assert.equal(eggs.money()[0].amount, 6750); assert.equal(eggs.money()[0].qty, 15);
  // a debt: the amount is replaced too
  const debt = person(); await run(debt, ["John owes me 4.500", "800"]);
  assert.equal(debt.money()[0].amount, 800); assert.equal(debt.money()[0].party, "John");
  // two things said in one sentence: only the doubtful one changes
  const two = person(); await run(two, ["sold maize 3000 and bought seed 4.500", "500"]);
  assert.deepEqual(two.money().map(row => [row.type, row.amount]), [["income", 3000], ["expense", 500]]);
});

test("a bare yes, ndiyo or sawa confirms the one reading offered; no and hapana leave it; an unclear answer is asked about again", async () => {
  for (const yes of ["yes", "Yes.", "ndiyo", "ndio", "sawa", "Sawa.", "yeah", "ok", "naam"]) {
    const who = person(); await who.say("sold maize 4.500");
    assert.match(String(await who.say(yes)), /^Recorded: sold maize for 4,500/, yes);
    assert.equal(who.money()[0].amount, 4500, yes);
  }
  for (const no of ["no", "No.", "hapana", "la", "nope"]) {
    const who = person(); await who.say("sold maize 4.500");
    assert.match(String(await who.say(no)), /left it as it is|nimeacha kama ilivyo/, no);
    assert.equal(who.money().length, 0, no);
  }
  // two possible readings: a yes cannot choose between them
  const two = person(); await two.say("sold maize four thousand five");
  assert.match(String(await two.say("yes")), /^(?!Recorded)/);
  assert.equal(two.money().length, 0);
  // an answer that is itself unclear keeps the question open
  const again = person(); await again.say("sold maize 4.500");
  assert.match(String(await again.say("4.500")), /Is that 4,500 or 4\.5\?/);
  assert.match(String(await again.say("elfu mia tano")), /500,000 or 1,500/);
  assert.equal(again.money().length, 0, "still nothing recorded");
  assert.match(String(await again.say("4500")), /^Recorded: sold maize for 4,500/);
  // something else entirely drops the question and is handled as a new request
  const moved = person(); await moved.say("sold maize 4.500");
  assert.match(String(await moved.say("sold beans 3000")), /^Recorded: sold beans for 3,000/);
  assert.equal(moved.money().length, 1);
});

test("Swahili amount questions are answered with a bare amount or a yes in either language", async () => {
  const cases = [["nimeuza mahindi 4.500", "elfu tano", 5000], ["nimeuza mahindi 4.500", "4500", 4500], ["nimeuza mahindi 4.500", "4.5k", 4500], ["nimeuza mahindi 4.500", "ndiyo", 4500], ["nimeuza mahindi 4.500", "sawa", 4500], ["nimeuza mahindi 4.500", "yes", 4500],
    ["nimeuza mahindi 4.500", "elfu nne mia tano", 4500], ["nimenunua mbegu 12.000", "elfu kumi na mbili", 12000]];
  for (const [phrase, reply, amount] of cases) {
    const who = person(); await who.say(phrase);
    assert.match(String(await who.say(reply)), /^Nimerekodi: /, `${phrase} + ${reply}`);
    assert.equal(who.money()[0].amount, amount, `${phrase} + ${reply}`);
  }
  const unclear = person(); await unclear.say("nimeuza mahindi 4.500");
  assert.match(String(await unclear.say("elfu mia tano")), /Sijui kama ni 500,000 au 1,500/);
  assert.equal(unclear.money().length, 0);
});

test("the helper readers", () => {
  const bare = rereads.parseBareAmount;
  assert.equal(bare("4500").amount, 4500); assert.equal(bare("2.5k").amount, 2500); assert.equal(bare("KSh 4,500").currency, "KSh"); assert.equal(bare("elfu nne mia tano").amount, 4500);
  assert.deepEqual(bare("4.500").ambiguous, [4500, 4.5]); assert.deepEqual(bare("elfu mia tano").ambiguous, [500000, 1500]);
  for (const text of ["", "maize", "10 bags", "sold maize 4500", "yes", "4500 and 3000 and more words here"]) assert.equal(bare(text), null, text);
  assert.equal(rereads.replaceAmount("sold maize for 4500", 4500, "5000"), "sold maize for 5000");
  assert.equal(rereads.replaceAmount("sold maize for 14500", 4500, "5000"), null, "a longer number is not the doubtful one");
  const r = english.rewrite("sold maize four thousand five");
  assert.deepEqual(r.ambiguity.values, [4500, 4005]);
  assert.equal(english.rewrite("sold maize two grand").text, "sold maize two thousand");
  assert.equal(english.rewrite("hello there").ambiguity, null);
});
