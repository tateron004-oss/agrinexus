"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { farmWorkTurn } = require("../../nexus/farmwork/index.js");
const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");

const NOW = new Date("2026-09-20T05:00:00Z"); // Sunday 20 September 2026 in Nairobi

function farmer({ userId = "u1", store = fakeFarmStore(), memory = fakeMemory() } = {}) {
  const say = async text => farmWorkTurn({ text, store, tenantId: "t1", userId, now: NOW, timeZone: "Africa/Nairobi", memory, nameOf: async () => "A farmer" });
  return { say, store };
}

async function coopWithTwoJohns(who) {
  await who.say("Set up our cooperative called Test Co-op");
  await who.say("skip");
  await who.say("Add cooperative member John Otieno");
  await who.say("skip");
  await who.say("skip");
  await who.say("Add cooperative member John Kamau");
  await who.say("skip");
  await who.say("skip");
}

// Found live (coop audit): findMember()'s return shape is { member } XOR
// { ambiguous: [...] } XOR null -- they can never both be truthy. The old
// code checked "if (found?.member && money) { if (found.ambiguous) return
// null; ... }", so the ambiguous branch was dead code: a genuinely ambiguous
// name made the OUTER check false, silently skipping the whole handler with
// no record added and no feedback at all -- the payment the treasurer
// thought they'd recorded simply never happened.
test("an ambiguous member name asks which one, instead of silently dropping a payment, payout, or delivery", async () => {
  const who = farmer();
  await coopWithTwoJohns(who);

  const paid = await who.say("John paid 500 for dues");
  assert.match(paid, /Which one: John Kamau or John Otieno\?/);
  assert.equal((await who.store.list({ tenantId: "t1", userId: "u1", collection: "coop_payment" })).length, 0, "no payment must be recorded for an ambiguous name");

  const payout = await who.say("Payout to John: 200 for transport");
  assert.match(payout, /Which one: John Kamau or John Otieno\?/);

  const delivered = await who.say("John delivered 50 kg maize to the co-op");
  assert.match(delivered, /Which one: John Kamau or John Otieno\?/);
  assert.equal((await who.store.list({ tenantId: "t1", userId: "u1", collection: "coop_production" })).length, 0);

  // An exact, unambiguous name still works exactly as before.
  const exact = await who.say("John Otieno paid 500 for dues");
  assert.match(exact, /Recorded: John Otieno paid dues/);
});

// Found live: equipment booking had no membership check at all -- when the
// named person didn't resolve to exactly one registered co-op member (no
// match, or ambiguous), it silently fell back to the raw typed name and
// booked the shared resource for them anyway, blocking real members from
// that slot.
test("booking shared equipment for someone who isn't a registered co-op member is refused, not silently allowed", async () => {
  const who = farmer();
  await coopWithTwoJohns(who);
  await who.say("Add shared equipment: tractor");

  const forStranger = await who.say("Book the tractor for Random Guy on Friday");
  assert.match(forStranger, /I don't have a cooperative member called Random Guy/);
  assert.equal((await who.store.list({ tenantId: "t1", userId: "u1", collection: "coop_booking" })).length, 0, "no booking must be created for a non-member");

  const forAmbiguous = await who.say("Book the tractor for John on Friday");
  assert.match(forAmbiguous, /Which one: John Kamau or John Otieno\?/);

  // A real, unambiguous member still works exactly as before.
  const forReal = await who.say("Book the tractor for John Otieno on Friday");
  assert.match(forReal, /Booked the tractor for John Otieno/);

  // Booking with no name at all is still allowed (an anonymous reservation).
  const anonymous = await who.say("Book the tractor on Saturday");
  assert.match(anonymous, /Booked the tractor Saturday/);
});
