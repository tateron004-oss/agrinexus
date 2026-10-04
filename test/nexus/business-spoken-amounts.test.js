"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const voiceDispatch = require("../../nexus/business/voice-dispatch.js");
const { farmWorkTurn } = require("../../nexus/farmwork/index.js");
const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");

// A business ledger that reads "Record income of 2 million shillings" as an income of 2 is wrong by a factor of a million and says nothing. Found by running spoken
// amounts through the extractors: "2 million" -> 2, "3 thousand" -> 3, a listing "for 2 million dollars" -> price 0, and number words ("two thousand shillings") were dropped
// so Kyro asked for the amount again.

const txn = text => voiceDispatch.extractTransactionArgs(text, {});

test("ledger amounts said with million / thousand are the right size", () => {
  for (const [text, amount, currency] of [
    ["Record income of 2 million shillings from the harvest", 2000000, "KES"],
    ["record income of 1.5 million KES", 1500000, "KES"],
    ["Log expense of 3 thousand shillings", 3000, "KES"],
    ["Log an expense of 2.5 thousand dollars for equipment", 2500, "USD"]
  ]) { const a = txn(text); assert.equal(a.amount, amount, text); assert.equal(a.currency, currency, text); }
});

test("ledger amounts said as number words are understood", () => {
  for (const [text, amount, type] of [
    ["Log an expense of two thousand shillings for fuel", 2000, "expense"],
    ["I spent five hundred shillings on seed", 500, "expense"],
    ["Record income of two million shillings", 2000000, "income"],
    ["Received two thousand five hundred shillings from Otieno", 2500, "income"],
    ["Log an expense of fifty dollars for tools", 50, "expense"]
  ]) { const a = txn(text); assert.equal(a.amount, amount, text); assert.equal(a.type, type, text); }
});

test("amounts that were already written in digits are unchanged", () => {
  assert.equal(txn("Received 2,500 shillings from Otieno").amount, 2500);
  assert.equal(txn("Log an expense of 50 dollars for tools").amount, 50);
  assert.equal(txn("record income: client paid me $500").amount, 500);
});

test("a listing price said as million / thousand / words is read, in the right currency", () => {
  for (const [text, price, currency] of [
    ["List 789 Pine Rd for 2 million dollars", 2000000, "USD"],
    ["List 789 Pine Rd for 2.5 million shillings", 2500000, "KES"],
    ["List 789 Pine Rd for four hundred and fifty thousand dollars", 450000, "USD"],
    ["List 789 Pine Rd for 500 thousand dollars", 500000, "USD"],
    ["List 789 Pine Rd for 450,000 dollars", 450000, "USD"]
  ]) { const a = voiceDispatch.extractListingArgs(text, {}); assert.equal(a.price, price, text); assert.equal(a.currency, currency, text); }
});

test("the address keeps its own words; only the amount is read from the spoken-number copy", () => {
  const a = voiceDispatch.extractListingArgs("List 789 Pine Rd for 2 million dollars", {});
  assert.match(a.address, /789 Pine Rd/);
});

test("an invoice line said with number words has the right quantity and price", () => {
  for (const text of ["Add to INV-0001: five bags of maize at five hundred shillings each", "Add to INV-0001: 5 bags of maize at 500 shillings each"]) {
    const a = voiceDispatch.extractInvoiceItemArgs(text, {});
    assert.equal(a.quantity, 5, text); assert.equal(a.unitPrice, 500, text); assert.equal(a.currency, "KES", text);
    assert.equal(a.invoiceNumber, "INV-0001");
  }
});

test("a grant amount said as 'two hundred thousand shillings' is read", () => {
  const a = voiceDispatch.extractGrantArgs("Track a grant from the county for two hundred thousand shillings", {});
  assert.equal(a.amount, 200000);
});

test("the farm toolkit gets the same fix ('spent 2 thousand' is 2,000, not 2)", async () => {
  const store = fakeFarmStore(); const memory = fakeMemory();
  const say = text => farmWorkTurn({ text, store, tenantId: "t1", userId: "u1", now: new Date("2026-09-20T05:00:00Z"), timeZone: "Africa/Nairobi", memory, notifications: { enqueue: async () => {}, existsByKey: async () => false }, nameOf: async () => "A farmer" });
  assert.match(String(await say("Spent 2 thousand shillings on fuel")), /2,000(?![,\d])/);
});
