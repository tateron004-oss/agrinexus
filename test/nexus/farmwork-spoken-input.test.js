"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { farmWorkTurn } = require("../../nexus/farmwork/index.js");
const { farmLogTurn } = require("../../nexus/farm/log.js");
const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");
const fs = require("node:fs");
const path = require("node:path");

// Spoken input reaches the toolkits as a transcript: "Skip." / "Yes." with a full stop, and amounts as words ("forty kilos"). Both used to be
// missed -- "Skip." was SAVED AS THE ANSWER to an optional question, a spoken "Yes." never confirmed a removal, and any sentence with a number word
// was dropped. These use the real handlers.

const NOW = new Date("2026-09-20T05:00:00Z");
function farmer() {
  const store = fakeFarmStore(); const memory = fakeMemory();
  const say = text => farmWorkTurn({ text, store, tenantId: "t1", userId: "u1", now: NOW, timeZone: "Africa/Nairobi", memory,
    notifications: { enqueue: async () => {}, existsByKey: async () => false }, nameOf: async () => "A farmer" });
  return { say, store };
}

test("'Skip.' on an optional question skips it instead of being saved as the answer", async () => {
  const who = farmer();
  await who.say("Add a field called North Plot, 2 acres of maize");
  for (const reply of ["Skip.", "Skip.", "Skip."]) await who.say(reply);
  const fields = await who.store.list({ tenantId: "t1", userId: "u1", collection: "field" });
  assert.equal(fields.length, 1);
  assert.equal(JSON.stringify(fields[0].data).toLowerCase().includes("skip"), false, `a skipped answer must not be stored: ${JSON.stringify(fields[0].data)}`);
});

test("a spoken 'Yes.' (with the full stop) confirms a removal, and other natural yes/no replies work", async () => {
  for (const yes of ["Yes.", "Yes!", "yes please", "Yes, do it.", "Yeah.", "Okay."]) {
    const who = farmer();
    await who.say("Add a field called North Plot, 2 acres of maize");
    for (let i = 0; i < 3; i += 1) await who.say("skip");
    assert.match(await who.say("Remove the field North Plot"), /Say yes/);
    assert.match(String(await who.say(yes)), /removed North Plot/, `"${yes}" must confirm`);
  }
  const who = farmer();
  await who.say("Add a field called North Plot, 2 acres of maize");
  for (let i = 0; i < 3; i += 1) await who.say("skip");
  await who.say("Remove the field North Plot");
  assert.match(String(await who.say("No thanks.")), /left it as it is/i);
});

test("number words are understood by the farm toolkit (sales, stock)", async () => {
  const who = farmer();
  assert.match(String(await who.say("Sold two hundred kg of maize to Otieno at forty five per kg")), /sold 200 kg of maize to Otieno for 9,000/);
  assert.match(String(await who.say("I have fifty bags of maize in stock")), /50 bags/);
  assert.match(String(await who.say("Bought five bags of seed for three thousand")), /3,000/);
});

test("number words and trailing full stops are understood by the farm log", async () => {
  const together = fs.readFileSync(path.join(__dirname, "kyro-features-together.test.js"), "utf8");
  const memory = new Function(`${together.slice(together.indexOf("function fullMemory"), together.indexOf('test("each feature'))}\nreturn fullMemory;`)()();
  const log = text => farmLogTurn({ text, memory, tenantId: "t1", userId: "u1", timeZone: "Africa/Nairobi" });
  assert.match(String(await log("I harvested forty kilos of maize")), /^Logged 40 kg of maize/);
  assert.match(String(await log("It rained twelve millimeters today.")), /^Logged 12 mm of rain/);
  assert.match(String(await log("The tank is at forty percent.")), /^Logged tank at 40%/);
});

test("a spoken number with a lone 'one' in an ordinary sentence is not turned into a record", async () => {
  const who = farmer();
  assert.equal(await who.say("one of my cows is limping"), null);
});
