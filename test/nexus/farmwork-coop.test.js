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

// Found live (systemic ambiguous-match sweep): booking used a raw first-match
// .find() over the equipment list -- "Water pump" and "Pump sprayer" both
// match the shared word "pump", and the OLD code silently booked whichever
// item happened to be listed first, reserving the wrong equipment/day with
// no error at all.
test("booking equipment whose name is a shared-word match across two different items asks which one, instead of silently booking the wrong one", async () => {
  const who = farmer();
  await who.say("Add shared equipment: water pump");
  await who.say("Add shared equipment: pump sprayer");

  const ambiguous = await who.say("Book the pump for Friday");
  assert.match(ambiguous, /Which one: (water pump or pump sprayer|pump sprayer or water pump)\?/);
  assert.equal((await who.store.list({ tenantId: "t1", userId: "u1", collection: "coop_booking" })).length, 0, "no booking must be created for an ambiguous equipment name");

  // An exact, unambiguous name still works exactly as before.
  const exact = await who.say("Book the water pump for Friday");
  assert.match(exact, /Booked the water pump/);
});

// Found live (drone/field-visit audit): the clash check and the booking used to be two
// separate store calls (list() then add()), with a real window between them for two
// near-simultaneous bookings of the same equipment and day to both read "no clash" and
// both succeed, silently double-booking a shared resource.
test("two concurrent bookings for the same equipment and day only succeed once, not both", async () => {
  const who = farmer();
  await coopWithTwoJohns(who);
  await who.say("Add shared equipment: tractor");

  const [first, second] = await Promise.all([who.say("Book the tractor for John Otieno on Friday"), who.say("Book the tractor for John Kamau on Friday")]);
  const outcomes = [first, second];
  assert.equal(outcomes.filter(text => /^Booked the tractor for/.test(text)).length, 1, "exactly one request must have won the race and booked the tractor");
  assert.equal(outcomes.filter(text => /already booked Friday/.test(text)).length, 1, "exactly one request must have lost the race and been refused");

  const bookings = await who.store.list({ tenantId: "t1", userId: "u1", collection: "coop_booking" });
  assert.equal(bookings.filter(booking => booking.data.equipment === "tractor" && booking.data.day === bookings[0].data.day).length, 1, "the tractor must only be booked once for that day, not twice");
});
