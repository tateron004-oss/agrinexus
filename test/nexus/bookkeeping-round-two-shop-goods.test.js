"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { person, runTable } = require("./bookkeeping-round-two-helper.js");

// A duka's goods in Kiswahili (sukari, unga, mafuta, sabuni, mkate, chumvi, nyama, maziwa, mchele, mandazi, soda, vocha, mkaa, saruji, simu...) are recorded for ANYONE, not only for a person who already keeps
// farm records. Every phrase here is said by someone with no records at all. The goods are stored with their English names, so one record means the same thing in either language.
const sold = (amount, item, extra = {}) => ({ type: "income", amount, item, ...extra });
const bought = (amount, item, extra = {}) => ({ type: "expense", amount, item, ...extra });

test("Kiswahili: selling a duka's goods, with no farm records", async () => {
  const failures = await runTable([
    ["nimeuza sukari kilo mbili 400", { money: [sold(400, "sugar", { qty: 2, unit: "kg", category: "other" })], reply: /^Nimerekodi: umeuza kilo 2 za sukari kwa 400\. Mapato ya mwezi huu: 400\.$/ }],
    ["nimeuza sukari kilo mbili kwa shilingi 400", { money: [sold(400, "sugar", { qty: 2, unit: "kg", currency: "shillings" })] }], ["nimeuza sukari kilo 2 elfu moja mia mbili", { money: [sold(1200, "sugar", { qty: 2, unit: "kg" })] }],
    ["nimeuza unga gunia moja elfu mbili", { money: [sold(2000, "flour", { qty: 1, unit: "sack" })] }], ["tumeuza unga gunia 2 elfu nne", { money: [sold(4000, "flour", { qty: 2, unit: "sack" })] }], ["nimeuza unga kilo 2 kwa 240", { money: [sold(240, "flour", { qty: 2, unit: "kg" })] }],
    ["nimeuza mandazi 20 mia mbili", { money: [sold(200, "mandazi", { qty: 20 })] }], ["nimeuza mandazi kwa 300", { money: [sold(300, "mandazi")] }], ["nimeuza mandazi 30 kwa 600", { money: [sold(600, "mandazi", { qty: 30 })] }],
    ["nimeuza soda 10 kwa 500", { money: [sold(500, "soda", { qty: 10 })] }], ["nimeuza airtime 500", { money: [sold(500, "airtime")] }], ["nimeuza vocha elfu moja", { money: [sold(1000, "airtime")] }], ["nimeuza vocha 20 kwa 2000", { money: [sold(2000, "airtime", { qty: 20 })] }],
    ["nimeuza mkaa gunia 2 elfu mbili", { money: [sold(2000, "charcoal", { qty: 2, unit: "sack" })] }], ["nimeuza saruji mifuko 4 kwa 3800", { money: [sold(3800, "cement", { qty: 4, unit: "bag" })] }], ["nimeuza saruji mfuko mmoja elfu moja", { money: [sold(1000, "cement", { qty: 1, unit: "bag" })] }],
    ["nimeuza simu elfu kumi na tano", { money: [sold(15000, "phone")] }], ["nimeuza sabuni 5 kwa 250", { money: [sold(250, "soap", { qty: 5 })] }], ["nimeuza mkate 10 elfu moja", { money: [sold(1000, "bread", { qty: 10 })] }],
    ["nimeuza chumvi pakiti 6 kwa 180", { money: [sold(180, "salt", { qty: 6, unit: "packet" })] }], ["nimeuza nyama kilo 2 elfu moja", { money: [sold(1000, "meat", { qty: 2, unit: "kg" })] }], ["nimeuza maziwa lita 5 kwa 300", { money: [sold(300, "milk", { qty: 5, unit: "L", category: "milk" })] }],
    ["nimeuza mchele kilo 3 kwa 450", { money: [sold(450, "rice", { qty: 3, unit: "kg", category: "crops" })] }], ["niliuza chumvi 100", { money: [sold(100, "salt")] }], ["nimeuza mafuta ya kupikia lita 2 kwa 600", { money: [sold(600, "cooking oil", { qty: 2, unit: "L" })] }],
    ["nimeuza sukari kilo 2 kwa 400 jana", { money: [sold(400, "sugar", { day: "2026-10-04" })], reply: /\(jana\)/ }], ["nimeuza unga gunia 2 kwa Mama Njeri kwa 3000 kwa mkopo", { money: [sold(3000, "flour", { party: "Mama Njeri", unpaid: true })] }],
    ["nimemuuzia Juma sukari kilo 2 kwa 400", { money: [sold(400, "sugar", { party: "Juma" })] }], ["nimeuza sukari kilo 2 kwa 4.000", { money: [], reply: /^Je, ni 4,000\?/ }]
  ]);
  assert.deepEqual(failures, []);
});

test("Kiswahili: buying a duka's goods and its costs, with no farm records", async () => {
  const failures = await runTable([
    ["nimenunua unga gunia 3 elfu tatu", { money: [bought(3000, "flour", { qty: 3, unit: "sack", category: "other" })], reply: /^Nimerekodi: umenunua gunia 3 za unga kwa 3,000/ }],
    ["nimenunua sukari gunia 2 elfu nane", { money: [bought(8000, "sugar", { qty: 2, unit: "sack" })] }], ["nimenunua sabuni 20 kwa 1000", { money: [bought(1000, "soap", { qty: 20 })] }], ["nimenunua mkaa gunia 5 elfu tano", { money: [bought(5000, "charcoal", { qty: 5, unit: "sack" })] }],
    ["nimenunua mafuta ya kupikia lita 10 elfu tatu", { money: [bought(3000, "cooking oil", { qty: 10, unit: "L", category: "stock" })] }], ["nimenunua stock ya elfu kumi", { money: [bought(10000, "stock", { category: "stock" })] }],
    ["nimenunua mzigo kwa elfu nane kutoka kwa Mama Fatuma", { money: [bought(8000, "mzigo", { party: "Mama Fatuma", category: "stock" })] }], ["nimenunua bidhaa za elfu tano", { money: [bought(5000, "bidhaa", { category: "stock" })] }],
    ["nimenunua soda krate 2 kwa 1200", { money: [bought(1200, "soda", { qty: 2, unit: "crate" })] }], ["nimenunua unga mifuko kumi kila mmoja 150", { money: [bought(1500, "flour", { qty: 10, unit: "bag" })] }], ["nimenunua mchele kilo 10 kwa 1500", { money: [bought(1500, "rice", { qty: 10, unit: "kg" })] }],
    ["nimenunua unga gunia 2 kutoka kwa Juma elfu nne kwa mkopo", { money: [bought(4000, "flour", { party: "Juma", unpaid: true, owing: 4000 })] }], ["nimenunua simu kwa 20000", { money: [bought(20000, "phone")] }],
    ["nimelipa kodi elfu tatu", { money: [bought(3000, "kodi", { category: "rent" })] }], ["nimetumia 300 kwa nauli ya kuleta mzigo", { money: [bought(300, "nauli ya kuleta mzigo", { category: "transport" })] }], ["nimelipa umeme elfu moja", { money: [bought(1000, "umeme", { category: "utilities" })] }],
    ["nimepokea elfu tano kwa mpesa kutoka kwa Otieno", { money: [{ type: "income", amount: 5000, party: "Otieno" }] }], ["nimepata elfu mbili mia tatu leo kwa boda", { money: [{ type: "income", amount: 2300 }] }],
    ["nimemlipa msambazaji elfu tatu kwa mpesa", { money: [{ type: "expense", amount: 3000, party: "Msambazaji" }] }]
  ]);
  assert.deepEqual(failures, []);
});

test("Kiswahili: a sale or purchase with no amount is asked about, and the half-finished sentence waits for the answer", async () => {
  const failures = await runTable([
    ["nimeuza sukari kilo 2", { money: [], reply: /^Sijasikia kiasi\..*kiasi tu sasa/ }], [["nimeuza sukari kilo 2", "400"], { money: [sold(400, "sugar", { qty: 2, unit: "kg" })] }], [["nimeuza sukari kilo 2", "elfu moja mia mbili"], { money: [sold(1200, "sugar", { qty: 2, unit: "kg" })] }],
    [["nimeuza mkate", "600"], { money: [sold(600, "bread")] }], [["nimenunua unga gunia 2", "elfu nne"], { money: [bought(4000, "flour", { qty: 2, unit: "sack" })], reply: /^Nimerekodi: umenunua gunia 2 za unga kwa 4,000/ }],
    [["nimeuza sukari", "400"], { money: [sold(400, "sugar")] }], [["nimeuza sukari", "4.500"], { money: [], reply: /Sijui kama ni 4,500 au 4\.5/ }], [["nimeuza sukari", "4.500", "4500"], { money: [sold(4500, "sugar")] }],
    [["nimeuza sukari", "sold maize 3000"], { money: [sold(3000, "maize")] }], [["nimeuza sukari", "cancel"], { money: [], reply: /Nothing was saved/ }], ["nimeuza", { money: [], replies: [null] }]
  ]);
  assert.deepEqual(failures, []);
});

test("things that are not a duka's business are still left alone, and a personal sale says how to take it back out", async () => {
  const quiet = person();
  for (const text of ["Habari yako", "nina njaa", "nimeuza", "nimetumia simu yangu", "unga mzuri sana", "sukari ni tamu", "nimekula mandazi", "nimenunua", "bei ya sukari leo ni ngapi"]) {
    const reply = await quiet.say(text);
    assert.ok(reply === null || /^Sijasikia kiasi/.test(reply), `${text} -> ${reply}`);
  }
  assert.equal(quiet.money().length, 0);
  assert.match(await person().say("nimeuza simu yangu elfu kumi"), /futa rekodi ya mwisho/);
  assert.match(await person().say("nimeuza gari langu kwa 100000"), /futa rekodi ya mwisho/);
  // after a first record the person is no longer 'fresh': no hint
  const who = person(); await who.say("nimeuza sukari kilo 2 kwa 400");
  assert.doesNotMatch(await who.say("nimeuza simu yangu elfu kumi"), /futa rekodi ya mwisho/);
});

test("the same goods said in English and Kiswahili are one thing: totals, items and the English summary agree", async () => {
  const who = person();
  for (const text of ["nimeuza sukari kilo mbili 400", "sold sugar 3 kg 600", "nimenunua sukari gunia 2 elfu nane"]) await who.say(text);
  assert.deepEqual(who.money().map(row => row.item), ["sugar", "sugar", "sugar"]);
  assert.match(await who.say("how much did I earn this month"), /^You earned 1,000 this month \(2 entries\)\.$/);
  assert.match(await who.say("faida yangu mwezi huu"), /faida|hasara/);
  assert.match(await who.say("nimetumia kiasi gani mwezi huu"), /Ulitumia 8,000 mwezi huu/);
});
