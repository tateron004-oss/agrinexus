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
  const begin = source.indexOf("function moneyByCurrency(");
  const end = source.indexOf("\n  function render(", begin);
  assert.ok(begin >= 0 && end > begin, "could not locate renderDashboard in public/business-services.js");
  assert.ok(source.indexOf("function renderDashboard(") > begin, "moneyByCurrency must precede renderDashboard");
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

// Found live: real property listings (a real, saved backend collection --
// the same "list 123 Main Street for $450,000" data voice/chat commands
// create and read) had no dashboard row at all, unlike every other tracked
// collection in this workspace, even though nexus/business/voice-dispatch.js's
// computeBusinessDashboard() already computes these exact real metrics
// server-side.
test("dashboard shows real listing counts/status/value, mirroring computeBusinessDashboard exactly", () => {
  const html = loadRenderDashboard(workspace({ listings: [
    { address: "123 Main Street", price: 450000, status: "active" },
    { address: "45 Oak Ave", price: 300000, status: "active" },
    { address: "9 Pine Road", price: 200000, status: "pending" },
    { address: "2 Elm Court", price: 500000, status: "sold" }
  ] }));
  assert.match(html, /Listings/);
  assert.match(html, /4 total: 2 active \(value 750000\.00\), 1 pending, 1 sold/);
});

test("a workspace with no listings at all shows no Listings row, rather than a fake zero row", () => {
  const html = loadRenderDashboard(workspace());
  assert.doesNotMatch(html, /Listings/);
});

// The dashboard row above proves the numbers are real, but a user still
// needs a way to actually see/edit each real listing -- confirm render()
// wires up the same rows() row-editor every other collection gets, and that
// the page has a matching container/button for it.
test("render() wires listings through the same rows() editor every other collection uses", () => {
  const source = fs.readFileSync(path.join(__dirname, "../../public/business-services.js"), "utf8");
  assert.match(source, /rows\("listings", editable\.listings,/);
  assert.match(source, /byId\("add-listing"\)\.addEventListener\("click"/);
});

test("business-services.html has a listings container and an Add listing button", () => {
  const html = fs.readFileSync(path.join(__dirname, "../../public/business-services.html"), "utf8");
  assert.match(html, /id="listings" class="rows"/);
  assert.match(html, /id="add-listing" type="button">Add listing</);
});
