"use strict";
const test = require("node:test"), assert = require("node:assert/strict");
const fs = require("node:fs"), path = require("node:path");

// Tool 10 of the small-business/nonprofit suite: a purely computed
// dashboard over the real data every other tool in this workspace already
// saves (income/expenses, customers/donors, invoices, grants, tasks,
// appointments). This extracts and runs the actual shipped renderDashboard()
// against a synthetic workspace, confirming every number is a real
// aggregate of the input rows, not a placeholder or an estimate.
function loadRenderDashboard(editable) {
  const source = fs.readFileSync(path.join(__dirname, "../../public/business-services.js"), "utf8");
  const begin = source.indexOf("function renderDashboard(");
  const end = source.indexOf("\n  function render(", begin);
  assert.ok(begin >= 0 && end > begin, "could not locate renderDashboard in public/business-services.js");
  const summaryEl = { innerHTML: "" };
  const sandbox = { byId: id => (id === "dashboard-summary" ? summaryEl : null), current: { data: { editable } } };
  const fn = new Function("byId", "current", source.slice(begin, end) + "\nreturn renderDashboard;")(sandbox.byId, sandbox.current);
  fn();
  return summaryEl.innerHTML;
}

function workspace(overrides = {}) {
  return {
    transactions: [], leads: [], invoiceItems: [], invoices: [], grants: [], tasks: [], appointments: [],
    ...overrides
  };
}

test("dashboard computes real net income from transactions, not a placeholder", () => {
  const html = loadRenderDashboard(workspace({ transactions: [
    { type: "income", amount: 500 }, { type: "income", amount: 250 }, { type: "expense", amount: 300 }
  ] }));
  assert.match(html, /Net income/);
  assert.match(html, /450\.00/);
  assert.match(html, /income 750\.00/);
  assert.match(html, /expenses 300\.00/);
});

test("dashboard counts customers/donors/sponsors/volunteers separately by real lead type", () => {
  const html = loadRenderDashboard(workspace({ leads: [
    { type: "customer" }, { type: "customer" }, { type: "donor" }, { type: "sponsor" }, { type: "volunteer" }, { type: "volunteer" }
  ] }));
  assert.match(html, /2 customers, 1 donors, 1 sponsors, 2 volunteers/);
});

test("dashboard sums real invoice line items and counts unpaid invoices", () => {
  const html = loadRenderDashboard(workspace({
    invoices: [{ status: "paid" }, { status: "sent" }, { status: "draft" }],
    invoiceItems: [{ quantity: 2, unitPrice: 50 }, { quantity: 1, unitPrice: 25 }]
  }));
  assert.match(html, /125\.00, 2 invoice\(s\) not marked paid/);
});

test("dashboard sums grant amounts requested vs. actually awarded", () => {
  const html = loadRenderDashboard(workspace({ grants: [
    { amount: 10000, status: "drafting" }, { amount: 5000, status: "awarded" }, { amount: 2000, status: "declined" }
  ] }));
  assert.match(html, /17000\.00 tracked, 5000\.00 awarded/);
});

test("dashboard counts open tasks against the real total, and active appointments", () => {
  const html = loadRenderDashboard(workspace({
    tasks: [{ status: "todo" }, { status: "in-progress" }, { status: "done" }],
    appointments: [{ status: "scheduled" }, { status: "synced" }, { status: "cancelled" }]
  }));
  assert.match(html, /2 of 3 not yet done/);
  assert.match(html, /2 active/);
});

test("dashboard on a brand-new, empty workspace shows real zeros, not missing/undefined values", () => {
  const html = loadRenderDashboard(workspace());
  assert.doesNotMatch(html, /undefined|NaN/);
  assert.match(html, /0\.00 \(income 0\.00 \/ expenses 0\.00\)/);
  assert.match(html, /0 customers, 0 donors, 0 sponsors, 0 volunteers/);
});
