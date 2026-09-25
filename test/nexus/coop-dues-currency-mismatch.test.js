"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const coop = require("../../nexus/farmwork/coop.js");
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
