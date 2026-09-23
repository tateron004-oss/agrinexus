"use strict";
const fs = require("node:fs");
const vm = require("node:vm");
const test = require("node:test");
const assert = require("node:assert/strict");

const app = fs.readFileSync(require("node:path").join(__dirname, "..", "..", "server.js"), "utf8");
const start = app.indexOf("function nexusOpenAiNativeToolChoiceHint(");
const end = app.indexOf("function normalizeOpenAiFunctionArguments(", start);
const source = app.slice(start, end);

const box = {};
vm.createContext(box);
vm.runInContext(source, box);
const toolHint = box.nexusOpenAiNativeToolChoiceHint;

test("bare 'today'/'now'/'latest' no longer hijacks calendar/reminder/email requests -- ordering matters in this first-match-wins chain", () => {
  assert.equal(toolHint("Can you check my calendar for today?"), "nexus_calendar");
  assert.equal(toolHint("Cancel my meeting now"), "nexus_calendar");
  assert.equal(toolHint("Remind me now to email the buyer"), "nexus_automation_reminder");
  assert.equal(toolHint("Send me the latest invoice by email"), "nexus_email");
});

test("nexus_receipts is reachable -- it previously had no matching branch at all", () => {
  assert.equal(toolHint("Show me my receipts"), "nexus_receipts");
  assert.equal(toolHint("What's my audit history?"), "nexus_receipts");
});

test("a genuine live-knowledge question is unaffected by the reordering", () => {
  assert.equal(toolHint("What is the current price of maize in Nairobi?"), "nexus_live_knowledge");
  assert.equal(toolHint("Can you cite your sources for that?"), "nexus_live_knowledge");
});

// Core-essentials real estate support (2026-09-23): "buyer"/"seller"/
// "listing" were already claimed by the agri-trade marketplace bucket
// below, so without an earlier, unambiguous real-estate-specific check,
// "add a listing at 123 Main St" would be mislabeled as a marketplace
// command instead of the business assistant that actually tracks it.
test("unambiguous real estate phrasing routes to the business assistant ahead of the marketplace bucket that already claims buyer/seller/listing", () => {
  assert.equal(toolHint("I need a realtor to help me sell my house"), "nexus_business_assistant");
  assert.equal(toolHint("Add a new tenant to my rental property"), "nexus_business_assistant");
  assert.equal(toolHint("Add a landlord contact"), "nexus_business_assistant");
  assert.equal(toolHint("Create a property listing for the office building"), "nexus_business_assistant");
});

test("plain agri-trade buyer/seller/listing phrasing (no real estate word) still reaches the marketplace bucket, unaffected", () => {
  assert.equal(toolHint("Find a buyer for my maize"), "nexus_marketplace_logistics");
  assert.equal(toolHint("Track vendor pricing for my tomato shipment"), "nexus_marketplace_logistics");
});
