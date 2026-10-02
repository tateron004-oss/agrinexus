"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const coop = require("../../nexus/farmwork/coop.js");
const swahiliCoop = require("../../nexus/farmwork/swahili-people.js");
const reports = require("../../nexus/farmwork/reports.js");
const { fakeFarmStore } = require("./farmwork-fake.js");

// Found live (export/invoice/farm-toolkit follow-up audit): dues owed/paid-up
// checks used to sum every matching payment's raw amount regardless of
// currency, then compare that fabricated total against the coop's single,
// fixed dues amount (one currency) -- a member who once paid dues in a
// different currency could silently count toward, or clear, a dues target
// denominated in an entirely different currency. Fixed to only count
// payments in the coop's own currency toward the dues target.

async function seed(store, { tenantId = "t1", userId = "u1", duesAmount = 1000, currency = "KES" } = {}) {
  const scope = { tenantId, userId };
  await store.add({ ...scope, collection: "coop", data: { name: "Amina Sacco", dues: duesAmount, currency, period: "monthly" } });
  await store.add({ ...scope, collection: "member", data: { name: "Otieno" } });
  return scope;
}

function ctxFor(store, scope, text, today = "2026-09-20") {
  return { text, store, tenantId: scope.tenantId, userId: scope.userId, today };
}

test("a USD payment does not count toward a KES-denominated dues target", async () => {
  const store = fakeFarmStore();
  const scope = await seed(store);
  // A one-off USD payment somehow recorded against dues (e.g. a visiting
  // member paying in a different currency) must not silently clear or
  // reduce a KES-denominated dues target.
  await store.add({ ...scope, collection: "coop_payment", data: { member: "Otieno", kind: "dues", amount: 1000, currency: "USD", day: "2026-09-05" } });
  const reply = await coop.handle(ctxFor(store, scope, "who owes dues"));
  assert.match(reply, /Otieno/, "Otieno must still owe -- the USD payment must not count toward the KES target");
  assert.match(reply, /KES\s*1,000/, "the full KES 1,000 must still be owed, unreduced by the USD payment");
});

test("a matching-currency payment correctly clears the dues target", async () => {
  const store = fakeFarmStore();
  const scope = await seed(store);
  await store.add({ ...scope, collection: "coop_payment", data: { member: "Otieno", kind: "dues", amount: 1000, currency: "KES", day: "2026-09-05" } });
  const reply = await coop.handle(ctxFor(store, scope, "who owes dues"));
  assert.match(reply, /Everyone has paid/i);
});

test("the cooperative summary's paid-up count is also unaffected by a mismatched-currency payment", async () => {
  const store = fakeFarmStore();
  const scope = await seed(store);
  await store.add({ ...scope, collection: "coop_payment", data: { member: "Otieno", kind: "dues", amount: 1000, currency: "USD", day: "2026-09-05" } });
  const reply = await coop.handle(ctxFor(store, scope, "show cooperative summary"));
  assert.match(reply, /0 paid up/);
});

test("the printable cooperative statement excludes a mismatched-currency payment from a member's dues-paid cell", async () => {
  const store = fakeFarmStore();
  const scope = await seed(store);
  await store.add({ ...scope, collection: "coop_payment", data: { member: "Otieno", kind: "dues", amount: 1000, currency: "USD", day: "2026-09-05" } });
  await store.add({ ...scope, collection: "coop_payment", data: { member: "Otieno", kind: "dues", amount: 400, currency: "KES", day: "2026-09-06" } });
  const report = await reports.build({ store, tenantId: scope.tenantId, userId: scope.userId, today: "2026-09-20" }, "coop", "cooperative statement this year");
  assert.match(report.content, /KES\s*400/, "only the matching-currency payment should count");
  assert.doesNotMatch(report.content, /KES\s*1,400/, "must not mix the USD payment into the KES cell");
});

// Found live (money-arithmetic audit): swahili-people.js reimplements coop.js's dues-tracking logic by
// hand rather than reusing paidTowardDues -- and lost the currency-match guard in the process. A member
// could clear (or silently reduce) a dues target denominated in a completely different currency just by
// recording a large-enough payment, purely because the raw numbers were summed with no check.
test("(Swahili) a USD payment does not count toward a KES-denominated dues target", async () => {
  const store = fakeFarmStore();
  const scope = await seed(store);
  await store.add({ ...scope, collection: "coop_payment", data: { member: "Otieno", kind: "dues", amount: 1000, currency: "USD", day: "2026-09-05" } });
  const reply = await swahiliCoop.handle(ctxFor(store, scope, "nani hajalipa ada"));
  assert.match(reply, /Otieno/, "Otieno must still owe -- the USD payment must not count toward the KES target");
  assert.match(reply, /KES\s*1,000/, "the full KES 1,000 must still be owed, unreduced by the USD payment");
});

test("(Swahili) a matching-currency payment correctly clears the dues target", async () => {
  const store = fakeFarmStore();
  const scope = await seed(store);
  await store.add({ ...scope, collection: "coop_payment", data: { member: "Otieno", kind: "dues", amount: 1000, currency: "KES", day: "2026-09-05" } });
  const reply = await swahiliCoop.handle(ctxFor(store, scope, "nani hajalipa ada"));
  assert.match(reply, /kila mtu amelipa/i);
});

test("(Swahili) 'amelipa' recording also refuses to let a mismatched-currency payment silently clear real dues owed", async () => {
  const store = fakeFarmStore();
  const scope = await seed(store);
  await store.add({ ...scope, collection: "coop_payment", data: { member: "Otieno", kind: "dues", amount: 999, currency: "USD", day: "2026-09-05" } });
  const reply = await swahiliCoop.handle(ctxFor(store, scope, "Otieno amelipa ada 1"));
  // Even though the USD payment (999) plus this new 1-unit KES payment would raw-sum past the 1,000
  // dues target, the USD payment must never count -- still owed, KES 999.
  assert.match(reply, /999/, `expected the real remaining KES balance, got: ${reply}`);
});

// Found live (money-arithmetic audit): the Swahili cooperative summary report labeled its whole total
// with whichever payment happened to be most recently recorded (regardless of that payment's own
// currency), instead of genuinely bucketing dues/contributions/payouts by their own real currency the
// way coop.js's own English report already does.
test("(Swahili) the cooperative summary report buckets dues/contributions/payouts by their own real currency, not whichever payment was most recent", async () => {
  const store = fakeFarmStore();
  const scope = await seed(store);
  await store.add({ ...scope, collection: "coop_payment", data: { member: "Otieno", kind: "dues", amount: 500, currency: "KES", day: "2026-09-05" } });
  await store.add({ ...scope, collection: "coop_payment", data: { member: "Otieno", kind: "contribution", amount: 1000, currency: "shilingi", day: "2026-09-06" } });
  await store.add({ ...scope, collection: "coop_payment", data: { member: "Otieno", kind: "payout", amount: 5000, currency: "", day: "2026-09-07" } });
  const reply = await swahiliCoop.handle(ctxFor(store, scope, "onyesha michango ya ushirika"));
  assert.match(reply, /shilingi 1,000/, `contributions must show their own real currency, got: ${reply}`);
});
