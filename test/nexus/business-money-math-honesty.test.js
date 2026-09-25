"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const voiceDispatch = require("../../nexus/business/voice-dispatch.js");

// Found live: "paid" was an unconditional expense signal checked before
// income words, even overriding an explicit "income" label -- "record
// income: client paid me $500" logged an EXPENSE, swinging netIncome by
// $1,000 in the wrong direction for a single payment received.
test("'paid' in a received-payment/passive construction is recognized as income, not an unconditional expense signal", () => {
  for (const text of [
    "record income: client paid me $500",
    "I got paid $500 for consulting",
    "the client paid me $500",
    "I was paid $200 today"
  ]) {
    assert.equal(voiceDispatch.extractTransactionArgs(text, {}).type, "income", text);
  }
});

test("'I paid X for Y' (money going out) still correctly logs as an expense, unaffected by the received-payment fix", () => {
  for (const text of ["I paid $50 for supplies", "paid the vendor $200"]) {
    assert.equal(voiceDispatch.extractTransactionArgs(text, {}).type, "expense", text);
  }
});

// Found live: a negative unitPrice (reachable via direct tool-call
// arguments) silently reduced an invoice's total by any amount a caller
// supplied.
test("a negative unit price is rejected, not silently accepted", () => {
  const result = voiceDispatch.extractInvoiceItemArgs("add a line item to INV-1001", { unitPrice: -100, quantity: 2, description: "refund adjustment" });
  assert.equal(result.unitPrice, null);
});

test("a genuine positive unit price still works exactly as before", () => {
  const result = voiceDispatch.extractInvoiceItemArgs("add a line item to INV-1001", { unitPrice: 50, quantity: 2, description: "normal item" });
  assert.equal(result.unitPrice, 50);
});

function dashboardCatalog(overrides = {}) {
  return {
    leads: [], transactions: [], invoices: [], invoiceItems: [], grants: [], tasks: [], appointments: [], listings: [],
    ...overrides
  };
}

// Found live: the invoice PDF export's footer total summed raw, unrounded
// quantity*unitPrice products while each row displayed its own
// independently-rounded total -- a fractional-cent unit price (e.g. fuel at
// $3.999/gal, an ordinary real-world price) made the footer disagree with
// the rows by a cent in the same PDF. The dashboard's own invoiceTotal used
// the same unrounded-sum pattern.
test("computeBusinessDashboard's invoiceTotal rounds each line before summing, matching the invoice PDF export exactly", () => {
  const dashboard = voiceDispatch.computeBusinessDashboard(dashboardCatalog({
    invoiceItems: [
      { invoiceNumber: "INV-1", quantity: 10, unitPrice: 3.999 },
      { invoiceNumber: "INV-1", quantity: 5, unitPrice: 4.299 }
    ]
  }));
  assert.equal(dashboard.invoiceTotal, 61.49, "10*3.999 rounds to 39.99, 5*4.299 rounds to 21.50 -- these must sum to 61.49 (matching the per-row-rounded PDF), not the raw unrounded 61.485");
});

// Found live: grant.status is freeform text with no normalization --
// "Awarded" (capitalized, exactly how a natural "set the grant status to
// Awarded" phrase gets stored) never matched an exact-lowercase "awarded"
// check, silently dropping that grant's amount from the awarded total.
test("computeBusinessDashboard's grantsAwarded matches grant status case-insensitively", () => {
  const dashboard = voiceDispatch.computeBusinessDashboard(dashboardCatalog({
    grants: [
      { amount: 50000, status: "Awarded" },
      { amount: 25000, status: "awarded" },
      { amount: 10000, status: "pending" }
    ]
  }));
  assert.equal(dashboard.grantsRequested, 85000);
  assert.equal(dashboard.grantsAwarded, 75000, "both differently-cased 'awarded' grants must count");
});
