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

// Found live (follow-up sweep): reports.js's pad() bounded a table cell to its column width with
// `.slice(0, Math.max(width, value.length))` -- a no-op whenever the value is longer than the column,
// since Math.max always resolves to the value's own full length in that case. A job title (or any other
// non-last-column cell) longer than its declared column width was never actually truncated, so it kept
// pushing every column after it further right than the same column on every other row of the printed
// txt/pdf/docx report -- a real, reliably-triggered misalignment in a customer-facing document.
test("reports.js: a job title longer than its column width doesn't push later columns out of alignment with other rows", async () => {
  const store = fakeFarmStore();
  const longTitle = "Repair the entire northern boundary fence line properly";
  assert.ok(longTitle.length > 34, "the fixture title must actually exceed the Job column's declared width of 34");
  await store.add({ tenantId: "t1", userId: "u1", collection: "task", data: { title: longTitle, assignee: "Amina", due: "2026-09-25", status: "open" } });
  await store.add({ tenantId: "t1", userId: "u1", collection: "task", data: { title: "Fix pump", assignee: "Otieno", due: "2026-09-26", status: "open" } });
  const ctx = { store, tenantId: "t1", userId: "u1", today: "2026-09-20" };
  const report = await reports.build(ctx, "tasks", "task list");
  const lines = report.content.split("\n").filter(line => /Amina|Otieno/.test(line));
  assert.equal(lines.length, 2, `expected exactly one row per task: ${JSON.stringify(lines)}`);
  const whoColumnStart = line => (/Amina/.test(line) ? line.indexOf("Amina") : line.indexOf("Otieno"));
  assert.equal(whoColumnStart(lines[0]), whoColumnStart(lines[1]), `expected the Who column to start at the same character offset on every row, regardless of how long the job title is: ${JSON.stringify(lines)}`);
});
