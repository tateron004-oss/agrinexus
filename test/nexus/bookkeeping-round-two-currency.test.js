"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { person, run, runTable } = require("./bookkeeping-round-two-helper.js");
const { currencyForCountry } = require("../../nexus/farmwork/currency.js");

// An amount said with no currency used to take the one currency the person had used, and totals filled in the missing label when they were added up, so a single "$20" relabelled every
// earlier unlabelled amount. Now the currency is labelled ONCE, when the amount is saved (from what was said, else from the country on the profile) and nothing stored is relabelled.
const inc = (amount, currency) => ({ type: "income", amount, currency });

test("the home currency comes from the profile country, once", () => {
  for (const [country, currency] of [["Kenya", "KSh"], ["kenya", "KSh"], ["KE", "KSh"], ["Nigeria", "₦"], ["Tanzania", "TSh"], ["Uganda", "UGX"], ["Ghana", "GHS"], ["Rwanda", "RWF"], ["Ethiopia", "ETB"], ["Zambia", "ZMW"], ["South Africa", "ZAR"], ["Egypt", ""], ["", ""], [undefined, ""]]) assert.equal(currencyForCountry(country), currency, String(country));
});

test("with a country, an unlabelled amount is saved in the home currency and a dollar amount stays USD", async () => {
  const failures = await runTable([
    ["sold maize 4500", { money: [inc(4500, "KSh")], reply: /sold maize for KSh 4,500/ }],
    [["sold maize 4500", "sold beans $20", "sold rice 1000"], { money: [inc(4500, "KSh"), inc(20, "$"), inc(1000, "KSh")], reply: /Income this month: KSh 5,500 and \$20\./ }],
    ["sold maize for 2000 shillings", { money: [inc(2000, "KSh")] }],
    ["sold maize 30 dollars", { money: [inc(30, "$")] }],
    ["bought seed 1200", { money: [{ type: "expense", amount: 1200, currency: "KSh" }] }],
    ["nimeuza sukari kilo mbili 400", { money: [inc(400, "KSh")], reply: /KSh 400/ }],
    ["I sold shoes 2500 ksh", { money: [inc(2500, "KSh")] }],
    ["John owes me 800", { money: [{ type: "income", amount: 800, currency: "KSh", unpaid: true }] }]
  ], { country: "Kenya" });
  assert.deepEqual(failures, []);
  const nigeria = await runTable([["sold rice 15000", { money: [inc(15000, "₦")], reply: /₦15,000/ }], ["sold milk $5", { money: [inc(5, "$")] }]], { country: "Nigeria" });
  assert.deepEqual(nigeria, []);
});

test("a single dollar amount never relabels the amounts said before it, with or without a country", async () => {
  for (const country of ["", "Kenya"]) {
    const who = person({ country });
    await run(who, ["sold maize 4500", "sold beans 3000", "sold milk $20"]);
    const stored = who.money().map(row => [row.amount, row.currency]);
    assert.deepEqual(stored[2], [20, "$"]);
    assert.ok(stored[0][1] === stored[1][1], "the two earlier amounts keep the same label");
    assert.notEqual(stored[0][1], "$", `earlier amounts were not relabelled (${country || "no country"})`);
    const reply = await who.say("how much did I earn this month");
    assert.match(reply, /\$20/);
    assert.doesNotMatch(reply, /\$7,520|\$7,500|\$4,500/, "totals are per currency, never one summed number");
  }
});

test("totals are kept per currency and never added across currencies", async () => {
  const who = person({ country: "Kenya" });
  await run(who, ["sold maize for 3000 KES", "sold rice for 25 dollars", "sold beans for 4000 naira", "bought seed 500", "bought feed for $5"]);
  assert.match(await who.say("how much did I earn this month"), /^You earned (?=.*KSh 3,000)(?=.*\$25)(?=.*₦4,000)/);
  assert.match(await who.say("what is my profit this month"), /income (?=.*KSh 3,000)(?=.*\$25)(?=.*₦4,000).*spending (?=.*KSh 500)(?=.*\$5)/);
});

test("without a country, an unlabelled amount still takes the one local currency the person has always used, but never a dollar", async () => {
  const one = person();
  await one.say("sold maize KSh 4500");
  await one.say("sold beans 800");
  assert.deepEqual(one.money().map(row => row.currency), ["KSh", "KSh"]);
  const dollar = person();
  await dollar.say("sold maize $20");
  await dollar.say("sold beans 800");
  assert.deepEqual(dollar.money().map(row => row.currency), ["$", ""], "a dollar used once does not become the label for the next unlabelled amount");
});
