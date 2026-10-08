"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { person, run, runTable } = require("./bookkeeping-round-two-helper.js");

// A shop's stock LEVELS, in English and Kiswahili: set what you have, ask how much is left, say something is low or finished, ask what is running low, and see sales take goods out of stock only when
// ONE stock record matches. The levels are exactly what the person said; nothing is counted or invented.
const item = (name, qty, unit, extra = {}) => ({ name, qty, unit, ...extra });
const sale = (amount, extra = {}) => ({ type: "income", amount, ...extra });

test("English: setting stock levels (a level is what you have, not something added)", async () => {
  const failures = await runTable([
    ["I have 20 bags of flour", { stock: [item("flour", 20, "bag")], reply: /^Noted: you have 20 bags of flour in stock\.$/ }],
    ["we have 50 kg of rice left", { stock: [item("rice", 50, "kg")] }], ["I've got 5 bags of cement", { stock: [item("cement", 5, "bag")] }],
    ["I now have 12 packets of biscuits in the shop", { stock: [item("biscuits", 12, "packet")] }], ["I have got 3 kg of salt", { stock: [item("salt", 3, "kg")] }],
    ["I have 2.5 kg of sugar in stock", { stock: [item("sugar", 2.5, "kg")] }], ["we still have 40 litres of cooking oil", { stock: [item("cooking oil", 40, "L")] }],
    ["I have 0 bags of rice", { stock: [item("rice", 0, "bag")], reply: /0 bags of rice.*what is running low/ }],
    [["I have 20 bags of flour", "I have 15 bags of flour"], { stock: [item("flour", 15, "bag")], reply: /^Noted: you have 15 bags of flour in stock \(I had 20 bags\)\.$/ }],
    [["I have 20 bags of flour", "I have 5 kg of flour"], { stock: [item("flour", 20, "bag")], reply: /You keep flour in bags/ }],
    ["stock: sugar 15 kg", { stock: [item("sugar", 15, "kg")] }], ["stock sugar 15 kg", { stock: [item("sugar", 15, "kg")] }], ["stock of sugar 15 kg", { stock: [item("sugar", 15, "kg")] }],
    ["stock take: sugar 15 kg and flour 20 bags", { stock: [item("sugar", 15, "kg"), item("flour", 20, "bag")] }], ["stock: sugar 15 kg, rice 3 bags, salt 7 packets", { stock: [item("sugar", 15, "kg"), item("rice", 3, "bag"), item("salt", 7, "packet")] }],
    ["stock: 20 bags of maize flour", { stock: [item("maize flour", 20, "bag")] }], ["inventory: soap 30 pieces", { stock: [item("soap", 30, "piece")] }],
    [["stock: sugar 15 kg", "stock: sugar 9 kg"], { stock: [item("sugar", 9, "kg")] }]
  ]);
  assert.deepEqual(failures, []);
});

test("English: asking how much is left", async () => {
  const failures = await runTable([
    [["I have 20 bags of flour", "how much flour do I have"], { reply: /^You have 20 bags of flour\.$/ }], [["I have 20 bags of flour", "how many bags of flour do I have"], { reply: /^You have 20 bags of flour\.$/ }],
    [["I have 20 bags of flour", "do I have flour"], { reply: /^You have 20 bags of flour\.$/ }], [["I have 20 bags of flour", "what is my flour stock"], { reply: /^You have 20 bags of flour\.$/ }],
    [["I have 20 bags of flour", "how much flour is left"], { reply: /^You have 20 bags of flour\.$/ }], [["I have 20 bags of flour", "check my flour stock"], { reply: /^You have 20 bags of flour\.$/ }],
    [["I have 20 bags of flour", "how much sugar do I have"], { reply: /^I don't have sugar in your stock\.$/ }],
    ["how much sugar do I have", { reply: /^I don't have sugar in your stock yet\. Say "I have 20 bags of sugar"/ }], ["do I have flour", { reply: /don't have flour in your stock yet/ }],
    ["how much money do I have", { replies: [null] }], ["how much fertiliser do I have", { replies: [null] }]
  ]);
  assert.deepEqual(failures, []);
});

test("English: low, finished and the running-low list", async () => {
  const failures = await runTable([
    [["I have 20 bags of flour", "stock of flour is low"], { stock: [item("flour", 20, "bag", { low: 20 })], reply: /marked flour as low \(20 bags left\)/ }],
    [["I have 3 bags of flour", "flour is low", "what is running low"], { reply: /^Running low: flour \(3 bags, level 3 bags\)\.$/ }],
    [["I have 3 bags of flour", "we are running out of flour"], { stock: [item("flour", 3, "bag", { low: 3 })] }], [["I have 3 bags of flour", "flour is running low"], { stock: [item("flour", 3, "bag", { low: 3 })] }],
    [["I have 3 bags of flour", "flour is almost finished"], { stock: [item("flour", 3, "bag", { low: 3 })] }],
    [["I have 3 bags of flour", "flour is finished"], { stock: [item("flour", 0, "bag")], reply: /flour has run out/ }], [["I have 3 bags of flour", "we have run out of flour"], { stock: [item("flour", 0, "bag")] }],
    [["I have 3 bags of flour", "flour has run out"], { stock: [item("flour", 0, "bag")] }], [["I have 3 bags of flour", "no more flour"], { stock: [item("flour", 0, "bag")] }],
    [["I have 3 bags of flour", "I'm out of flour"], { stock: [item("flour", 0, "bag")] }],
    [["I have 3 bags of flour", "flour is finished", "what is running low"], { reply: /^Running low: flour \(0 bags\)\.$/ }],
    [["I have 3 bags of flour", "flour is low", "which items are low"], { reply: /^Running low: flour/ }], [["I have 3 bags of flour", "flour is low", "low stock"], { reply: /^Running low: flour/ }],
    [["I have 3 bags of flour", "flour is low", "what's running low in the shop"], { reply: /^Running low: flour/ }], [["I have 3 bags of flour", "flour is finished", "what is out of stock"], { reply: /^Running low: flour/ }],
    ["what is running low", { reply: /^Nothing is running low or out\./ }], [["I have 30 bags of flour", "what is running low"], { reply: /^Nothing is running low or out\./ }],
    [["I have 6 bags of rice", "warn me when rice is below 5", "sold 2 bags of rice 1000 each"], { stock: [item("rice", 4, "bag", { low: 5 })], reply: /4 bags left\. Heads up: that is at or below your low level of 5 bags/ }],
    [["I have 6 bags of rice", "warn me when rice is below 5"], { reply: /flag rice whenever it is at or below 5 bags/ }],
    ["sugar is low", { replies: [/^How much sugar is left\?/] }], [["sugar is low", "2 kg"], { stock: [item("sugar", 2, "kg", { low: 2 })], reply: /marked sugar as low \(2 kg left\)/ }],
    [["sugar is low", "cancel"], { stock: [], reply: /Nothing was saved/ }],
    ["sugar is finished", { reply: /don't have sugar in your stock list, so there is nothing to change/, stock: [] }],
    ["my battery is low", { replies: [null] }], ["money is finished", { replies: [null] }], ["the phone is low", { replies: [null] }]
  ]);
  assert.deepEqual(failures, []);
});

test("English: a sale takes goods out of stock only when ONE stock record matches, and says what it did", async () => {
  const failures = await runTable([
    [["I have 20 bags of flour", "sold 5 bags of flour 300 each"], { stock: [item("flour", 15, "bag")], money: [sale(1500, { item: "flour", qty: 5, unit: "bag" })], reply: /5 bags out of your stock; 15 bags left/ }],
    [["I have 20 bags of flour", "sold 5 bags of flour for 1500"], { stock: [item("flour", 15, "bag")] }], [["I have 20 bags of flour", "I sold 2 bags of flour"], { replies: [/Noted/, /^How much did you sell it for\?$/] }],
    [["I have 20 bags of flour", "sold 2 bags of flour", "600"], { stock: [item("flour", 18, "bag")], reply: /2 bags out of your stock; 18 bags left/ }],
    [["I have 4 bags of flour", "sold 6 bags of flour 300 each"], { stock: [item("flour", 0, "bag")], reply: /you had less recorded than you sold/ }],
    [["I have 20 bags of flour", "sold flour 600"], { stock: [item("flour", 20, "bag")], money: [sale(600)] }],
    [["I have 20 sacks of flour", "sold 2 bags of flour for 600"], { stock: [item("flour", 20, "sack")], reply: /You keep flour in sacks, so I did not change your stock/ }],
    [["I have 20 bags of flour", "I have 10 bags of sugar", "sold 2 bags of sugar 400 each"], { stock: [item("flour", 20, "bag"), item("sugar", 8, "bag")] }],
    [["I have 20 bags of flour", "sold 2 bags of rice 400 each"], { stock: [item("flour", 20, "bag")], reply: /^Recorded: sold 2 bags of rice for 800\. Income/ }],
    [["I have 5 kg of maize seed", "sold 100 kg of maize for 9000"], { stock: [item("maize seed", 5, "kg")] }],
    [["I have 5 kg of sugar", "I have 5 kg of brown sugar", "sold 1 kg of sugar for 150"], { stock: [item("sugar", 4, "kg"), item("brown sugar", 5, "kg")], reply: /^Recorded: sold 1 kg of sugar for 150/ }]
  ]);
  assert.deepEqual(failures, []);
});

test("English: things that are not stock are left alone", async () => {
  const quiet = person();
  for (const text of ["I have a headache", "I have 3 acres of maize", "I have 20 bags of flour to sell", "I have a question", "I have 2 cows", "we have 5 workers", "I have 3 kg of weight to lose", "the stock market is down", "I have to go now"]) assert.equal(await quiet.say(text), null, text);
  assert.equal(quiet.stock().length, 0);
  // a number that could be read two ways is asked about, not guessed
  const dot = person();
  assert.match(await dot.say("I have 4.500 kg of sugar"), /I am not sure about "4\.500 kg"/);
  assert.equal(dot.stock().length, 0);
});

test("Kiswahili: setting, asking, low and finished", async () => {
  const failures = await runTable([
    ["nina gunia 20 za unga", { stock: [item("flour", 20, "sack")], reply: /^Nimeandika: una gunia 20 za unga ghalani\.$/ }], ["nina unga mifuko ishirini", { stock: [item("flour", 20, "bag")] }],
    ["nina sukari kilo 15", { stock: [item("sugar", 15, "kg")] }], ["tuna mchele mifuko ishirini", { stock: [item("rice", 20, "bag")] }], ["nina unga gunia moja", { stock: [item("flour", 1, "sack")] }],
    ["nina sukari kilo mbili na nusu", { stock: [item("sugar", 2.5, "kg")] }], ["nimebakiwa na unga gunia 3", { stock: [item("flour", 3, "sack")] }], ["nimebaki na sabuni vipande 30", { stock: [item("soap", 30, "piece")] }],
    ["sukari iliyobaki ni kilo 15", { stock: [item("sugar", 15, "kg")] }], ["unga umebaki gunia 3", { stock: [item("flour", 3, "sack")] }], ["kwa sasa nina mchele gunia 4", { stock: [item("rice", 4, "sack")] }],
    ["ghala: sukari kilo 15, unga gunia 20", { stock: [item("sugar", 15, "kg"), item("flour", 20, "sack")] }], ["stoo: chumvi pakiti 10", { stock: [item("salt", 10, "packet")] }],
    [["nina gunia 20 za unga", "nina gunia 12 za unga"], { stock: [item("flour", 12, "sack")], reply: /\(nilikuwa na gunia 20\)/ }],
    [["nina gunia 20 za unga", "nina unga kiasi gani"], { reply: /^Una gunia 20 za unga\.$/ }], [["nina gunia 20 za unga", "unga uliobaki ni kiasi gani"], { reply: /^Una gunia 20 za unga\.$/ }],
    ["nina sukari kiasi gani", { reply: /^Sioni sukari kwenye ghala lako bado\./ }], [["nina unga gunia 3", "nina sukari kiasi gani"], { reply: /^Sioni sukari kwenye ghala lako bado\./ }],
    [["nina gunia 20 za unga", "unga unakwisha"], { stock: [item("flour", 20, "sack", { low: 20 })], reply: /alama ya akiba ndogo kwenye unga/ }], [["nina gunia 3 za unga", "unga unakwisha", "ni bidhaa gani zinaisha"], { reply: /^Zinazoisha: unga \(gunia 3\)\.$/ }],
    [["nina gunia 3 za unga", "unga umekwisha"], { stock: [item("flour", 0, "sack")], reply: /hakuna kilichobaki ghalani/ }], [["nina kilo 3 za sukari", "sukari imeisha"], { stock: [item("sugar", 0, "kg")] }],
    [["nina kilo 3 za sukari", "nimeishiwa na sukari"], { stock: [item("sugar", 0, "kg")] }], [["nina kilo 3 za sukari", "sukari inakwisha", "nini kinaisha"], { reply: /^Zinazoisha: sukari/ }],
    [["nina kilo 3 za sukari", "sukari inakwisha", "bidhaa gani zinaisha dukani"], { reply: /^Zinazoisha: sukari/ }], ["ni bidhaa gani zinaisha dukani", { reply: /^Hakuna kinachoisha\./ }],
    ["sukari inakwisha", { replies: [/^Zimebaki sukari kiasi gani\?/] }], [["sukari inakwisha", "kilo 2"], { stock: [item("sugar", 2, "kg", { low: 2 })] }], [["sukari inakwisha", "gunia 1"], { stock: [item("sugar", 1, "sack", { low: 1 })] }],
    ["sukari imeisha", { reply: /Sioni sukari kwenye ghala lako/, stock: [] }],
    [["nina mchele mifuko 6", "nikumbushe mchele ukiwa chini ya mfuko 5"], { stock: [item("rice", 6, "bag", { low: 5 })] }]
  ]);
  assert.deepEqual(failures, []);
});

test("Kiswahili: a sale takes goods out of stock, only from one matching record, and says so", async () => {
  const failures = await runTable([
    [["nina gunia 20 za unga", "nimeuza unga gunia 2 kwa 3000"], { stock: [item("flour", 18, "sack")], reply: /Nimetoa gunia 2 kwenye ghala lako; zimebaki gunia 18/ }],
    [["nina gunia 20 za unga", "nimeuza gunia 2 za unga kwa 3000"], { stock: [item("flour", 18, "sack")] }], [["nina kilo 15 za sukari", "nimeuza sukari kilo mbili 400"], { stock: [item("sugar", 13, "kg")], money: [sale(400, { item: "sugar", qty: 2, unit: "kg" })] }],
    [["nina gunia 20 za unga", "nimeuza unga mifuko 2 kwa 400"], { stock: [item("flour", 20, "sack")], reply: /Unaweka unga kwa gunia, kwa hivyo sijabadilisha ghala lako/ }],
    [["nina gunia 3 za unga", "nimeuza unga gunia 5 kwa 7000"], { stock: [item("flour", 0, "sack")], reply: /ulikuwa na kidogo kuliko ulichouza/ }],
    [["nina kilo 5 za mbegu", "nimeuza mahindi kilo 3 kwa 300"], { stock: [item("seed", 5, "kg")] }], [["nina unga gunia 3", "nimeuza sukari kilo 2 kwa 400"], { stock: [item("flour", 3, "sack")] }],
    [["nina unga gunia 5", "unga unakwisha", "nimeuza unga gunia 3 kwa 4500"], { stock: [item("flour", 2, "sack", { low: 5 })], reply: /Angalia: kiasi hicho kiko chini ya kiwango chako cha chini cha gunia 5/ }]
  ]);
  assert.deepEqual(failures, []);
  const quiet = person();
  for (const text of ["nina njaa", "nina deni", "nina swali", "nina ekari 3 za mahindi", "nina mkopo mkubwa", "nina kazi nyingi"]) assert.equal(await quiet.say(text), null, text);
  assert.equal(quiet.stock().length, 0);
  const dot = person();
  assert.match(await dot.say("nina kilo 2.500 za sukari"), /Sina uhakika na "kilo 2.500 za sukari"/);
  assert.equal(dot.stock().length, 0);
});

test("a stock level said in one language is read in the other, and the stock record is the same one", async () => {
  const who = person();
  await run(who, ["nina gunia 20 za unga", "sold 2 sacks of flour for 600"]);
  assert.deepEqual(who.stock().map(row => [row.name, row.qty, row.unit]), [["flour", 18, "sack"]]);
  assert.match(await who.say("how much flour do I have"), /^You have 18 sacks of flour\.$/);
  assert.match(await who.say("nina unga kiasi gani"), /^Una gunia 18 za unga\.$/);
});
