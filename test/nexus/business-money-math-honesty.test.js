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

// Found live (income/expense ledger audit): bare "received" sat in the
// unambiguous-income word list, so "We received the electricity bill for
// $340" -- money flowing OUT -- was logged as $340 of INCOME, swinging
// netIncome by $680 for a single transaction. The same "genuinely
// ambiguous, needs its own override" shape as the "paid" bug just above.
test("'received a bill/invoice' (money owed, not received) correctly logs as an expense", () => {
  for (const text of [
    "We received the electricity bill for $340",
    "We received an invoice for $200 from the supplier",
    "Received a water bill for 150 dollars"
  ]) {
    assert.equal(voiceDispatch.extractTransactionArgs(text, {}).type, "expense", text);
  }
});

test("a genuine 'received' income statement still correctly logs as income, unaffected by the received-bill fix", () => {
  for (const text of [
    "We received payment for the maize order, $500",
    "Received $500 for the maize sale",
    "We received a donation of $500"
  ]) {
    assert.equal(voiceDispatch.extractTransactionArgs(text, {}).type, "income", text);
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

// Found live: extractTransactionArgs' amount had no sign check at all -- a
// negative amount (reachable via direct tool-call arguments) would silently
// flip the meaning of "type", since the dashboard summary always adds
// amount into the matching income/expense bucket, never subtracts.
test("a negative transaction amount is rejected, not silently accepted", () => {
  const result = voiceDispatch.extractTransactionArgs("record an expense", { amount: -40, type: "expense" });
  assert.equal(result.amount, null);
});

test("a genuine positive transaction amount still works exactly as before", () => {
  const result = voiceDispatch.extractTransactionArgs("record an expense", { amount: 40, type: "expense" });
  assert.equal(result.amount, 40);
});

// Found live: extractGrantArgs' amount had no sign check at all.
test("a negative grant amount is rejected, not silently accepted", () => {
  const result = voiceDispatch.extractGrantArgs("add a grant from USDA", { amount: -50000 });
  assert.equal(result.amount, 0);
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

// Found live (follow-up sweep): unlike extractTransactionArgs/extractGrantArgs/extractListingArgs, this
// never parsed a currency at all -- "5 bags of maize at 500 shillings each" silently dropped
// "shillings", so a line item was always treated as USD regardless of what was actually said, and the
// stored row's shape had no currency field to begin with.
test("extractInvoiceItemArgs recognizes a local-currency unit price, not just a literal dollar sign", () => {
  const result = voiceDispatch.extractInvoiceItemArgs("add a line item to INV-1001: 5 bags of maize at 500 shillings each", {});
  assert.equal(result.unitPrice, 500);
  assert.equal(result.currency, "KES");
});

test("computeBusinessDashboard buckets invoiceTotal by currency instead of mixing it under one label", () => {
  const dashboard = voiceDispatch.computeBusinessDashboard(dashboardCatalog({
    invoiceItems: [
      { invoiceNumber: "INV-1", quantity: 2, unitPrice: 50, currency: "USD" },
      { invoiceNumber: "INV-2", quantity: 1, unitPrice: 5000000, currency: "KES" },
      { invoiceNumber: "INV-3", quantity: 3, unitPrice: 10, currency: "USD" }
    ]
  }));
  // Bucketed by raw numeric total, same convention as otherGrantRequestedCurrencies/otherListingCurrencies
  // elsewhere in this file (no real currency-value conversion) -- KES's larger raw number sorts first here.
  assert.equal(dashboard.invoiceCurrency, "KES");
  assert.equal(dashboard.invoiceTotal, 5000000);
  assert.deepEqual(dashboard.otherInvoiceCurrencies, ["USD"], "the USD line items (100+30=130) must be tracked separately, not combined with KES's larger raw number");
});

test("an invoice line item with no currency stated still defaults cleanly to USD, unaffected by the currency fix", () => {
  const dashboard = voiceDispatch.computeBusinessDashboard(dashboardCatalog({
    invoiceItems: [{ invoiceNumber: "INV-1", quantity: 2, unitPrice: 50 }]
  }));
  assert.equal(dashboard.invoiceCurrency, "USD");
  assert.equal(dashboard.invoiceTotal, 100);
  assert.deepEqual(dashboard.otherInvoiceCurrencies, []);
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

// Found live (business/CRM audit): unlike extractTransactionArgs/extractListingArgs, extractGrantArgs
// only ever matched a literal "$" prefix -- a grant amount stated in a local currency was silently
// parsed as amount: 0. Separately, grantsRequested/grantsAwarded summed across ALL grants with no
// per-currency bucketing, then the caller hard-prefixed both with a literal "$" -- the same
// currency-mixing shape already fixed for activeListingTotals.
test("extractGrantArgs recognizes a local-currency amount, not just a literal dollar sign", () => {
  const result = voiceDispatch.extractGrantArgs("Track a grant from the county government worth 5,000,000 shillings", {});
  assert.equal(result.amount, 5000000, "a KES-denominated amount must not be silently parsed as 0");
  assert.equal(result.currency, "KES");
});

test("computeBusinessDashboard buckets grantsRequested/grantsAwarded by currency instead of mixing them under one label", () => {
  const dashboard = voiceDispatch.computeBusinessDashboard(dashboardCatalog({
    grants: [
      { amount: 50000, currency: "USD", status: "awarded" },
      { amount: 5000000, currency: "KES", status: "awarded" },
      { amount: 10000, currency: "USD", status: "pending" }
    ]
  }));
  // Bucketed by raw numeric total, same convention as otherListingCurrencies/otherCurrencies elsewhere
  // in this file (no real currency-value conversion) -- KES's larger raw number sorts first here.
  assert.equal(dashboard.grantsRequestedCurrency, "KES");
  assert.equal(dashboard.grantsRequested, 5000000);
  assert.deepEqual(dashboard.otherGrantRequestedCurrencies, ["USD"], "the USD grants (50000+10000=60000) must be tracked separately, not combined with KES's larger raw number");
  assert.equal(dashboard.grantsAwardedCurrency, "KES");
  assert.equal(dashboard.grantsAwarded, 5000000);
  assert.deepEqual(dashboard.otherGrantAwardedCurrencies, ["USD"], "only the awarded USD grant (50000) counts here, not the pending one");
});

// Found live: extractLeadArgs only lowercases the regex-fallback branch -- a
// structured tool-call arg (args.type: "Donor") is stored verbatim, so a
// naturally-capitalized lead type fell into "others" instead of its real
// bucket. Same case-sensitivity bug class as grantsAwarded, fixed the same
// way: compare lowercased.
test("computeBusinessDashboard's lead-type buckets match case-insensitively, so a naturally-capitalized type still counts in its real bucket", () => {
  const dashboard = voiceDispatch.computeBusinessDashboard(dashboardCatalog({
    leads: [{ type: "Donor" }, { type: "donor" }, { type: "Buyer" }, { type: "Landlord" }]
  }));
  assert.equal(dashboard.donors, 2, "both differently-cased 'donor' leads must count");
  assert.equal(dashboard.buyers, 1);
  assert.equal(dashboard.landlords, 1);
  assert.equal(dashboard.others, 0, "none of these must fall into the generic others bucket");
});

// Found live: same case-sensitivity bug class as unpaidInvoices/grantsAwarded/lead-type above.
test("computeBusinessDashboard's openTasks matches task status case-insensitively", () => {
  const dashboard = voiceDispatch.computeBusinessDashboard(dashboardCatalog({
    tasks: [{ status: "Done" }, { status: "Complete" }, { status: "todo" }]
  }));
  assert.equal(dashboard.openTasks, 1, "both differently-cased 'done'/'complete' tasks must be excluded from the open count");
});

// Found live: the same case-sensitivity bug as grantsAwarded above, on
// invoice.status -- a naturally typed "Paid" (capital P) never matched an
// exact-lowercase "paid" check, so that invoice stayed counted as unpaid
// forever.
test("computeBusinessDashboard's unpaidInvoices matches invoice status case-insensitively", () => {
  const dashboard = voiceDispatch.computeBusinessDashboard(dashboardCatalog({
    invoices: [{ status: "Paid" }, { status: "paid" }, { status: "sent" }]
  }));
  assert.equal(dashboard.unpaidInvoices, 1, "both differently-cased 'paid' invoices must be excluded from the unpaid count");
});
