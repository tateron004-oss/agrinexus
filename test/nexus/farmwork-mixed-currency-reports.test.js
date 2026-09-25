"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const money = require("../../nexus/farmwork/money.js");
const reports = require("../../nexus/farmwork/reports.js");
const swahiliBusiness = require("../../nexus/farmwork/swahili-business.js");
const { fakeFarmStore } = require("./farmwork-fake.js");

// Found live (real-estate/GPS follow-up audit): four separate "totals by
// category" / receipt builders summed raw amounts across DIFFERENT
// currencies before labeling the total with whichever record happened to be
// first, fabricating a number that was neither real amount. Fixed to bucket
// by currency, like sum()/showTotals() already do everywhere else in this
// module. These tests seed two labour expenses in different currencies and
// confirm both currencies now show up separately, never combined.

async function seedMixedLabour(store, tenantId = "t1", userId = "u1") {
  await store.add({ tenantId, userId, collection: "money", data: { type: "expense", category: "labour", amount: 5000, currency: "KES", item: "weeding", day: "2026-09-01" } });
  await store.add({ tenantId, userId, collection: "money", data: { type: "expense", category: "labour", amount: 40, currency: "USD", item: "weeding", day: "2026-09-02" } });
}

test("money.js: 'expenses by category' shows each currency separately instead of summing them together", async () => {
  const store = fakeFarmStore();
  await seedMixedLabour(store);
  const ctx = { store, tenantId: "t1", userId: "u1", today: "2026-09-20", text: "show my expenses by category this year" };
  const reply = await money.handle(ctx);
  assert.match(reply, /KES\s*5,000/);
  assert.match(reply, /USD 40/);
  assert.doesNotMatch(reply, /USD 5040|USD 5,040|KES\s*5,040/, "must never combine 5000 KES and 40 USD into one fabricated figure");
});

test("reports.js: the printable expense report's BY KIND section keeps currencies separate", async () => {
  const store = fakeFarmStore();
  await seedMixedLabour(store);
  const ctx = { store, tenantId: "t1", userId: "u1", today: "2026-09-20" };
  const report = await reports.build(ctx, "expenses", "expense report this year");
  assert.match(report.content, /KES\s*5,000/);
  assert.match(report.content, /USD 40/);
  assert.doesNotMatch(report.content, /USD 5040|USD 5,040|KES\s*5,040/);
});

test("reports.js: a buyer receipt totals each currency separately when order and sale lines differ in currency", async () => {
  const store = fakeFarmStore();
  await store.add({ tenantId: "t1", userId: "u1", collection: "order", data: { kind: "sale", status: "done", party: "Otieno", item: "maize", qty: 10, unit: "kg", price: 100, currency: "KES", doneOn: "2026-09-01" } });
  await store.add({ tenantId: "t1", userId: "u1", collection: "money", data: { type: "income", party: "Otieno", item: "beans", qty: 5, unit: "kg", amount: 20, currency: "USD", day: "2026-09-05" } });
  const ctx = { store, tenantId: "t1", userId: "u1", today: "2026-09-20" };
  const receipt = await reports.receipt(ctx, "Otieno");
  assert.match(receipt.content, /KES\s*1,000/);
  assert.match(receipt.content, /USD 20/);
  assert.doesNotMatch(receipt.content, /KES\s*1,020|USD 1020|USD 1,020/, "must never combine a KES order and a USD sale into one fabricated total");
});

test("swahili-business.js: the KWA AINA (by-kind) section keeps currencies separate, mirroring the English fix", async () => {
  const store = fakeFarmStore();
  await seedMixedLabour(store);
  const ctx = { store, tenantId: "t1", userId: "u1", today: "2026-09-20" };
  const report = await swahiliBusiness.buildReport(ctx, "expenses", "ripoti ya matumizi mwaka huu");
  assert.match(report.content, /KES\s*5,000/);
  assert.match(report.content, /USD 40/);
  assert.doesNotMatch(report.content, /USD 5040|USD 5,040|KES\s*5,040/);
});
