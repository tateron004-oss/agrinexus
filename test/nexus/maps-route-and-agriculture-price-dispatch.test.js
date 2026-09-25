"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { classifyDomains, isUnifiedBrainCommand, shouldHandleBeforeLegacy } = require("../../public/nexus-unified-brain-runtime.js");

// Found live: DOMAINS has no maps/routing concept at all, so "Route from
// Nairobi to Mombasa" only ever matched "logistics_shipment" (via "route")
// -- a single domain, rejected by the >=2-domain rule -- and fell through
// into the decorative "logistics-maps-shipments" workflow card instead of
// reaching the real nexus_maps_route tool.
test("genuine route/directions requests are recognized even though they only match one classifyDomains domain", () => {
  for (const command of [
    "Route from Nairobi to Mombasa",
    "Directions to the nearest clinic",
    "Take me to the hospital",
    "Navigate to Kisumu"
  ]) {
    assert.equal(isUnifiedBrainCommand(command), true, command);
    assert.equal(shouldHandleBeforeLegacy(command), true, command);
  }
});

// Found live: "What's the current price of fertilizer with sources?" matched
// only "marketplace_trade" (via "price") since the agriculture domain had no
// farm-input words at all -- a single domain, rejected by the >=2-domain
// rule -- so it fell through to the decorative marketplace-trade card
// instead of nexus_live_knowledge's real, cited price lookup.
test("a farm-input price question matches both agriculture and marketplace_trade, reaching the real backend", () => {
  assert.deepEqual(classifyDomains("What is the price of fertilizer?").sort(), ["agriculture", "marketplace_trade"]);
  assert.equal(isUnifiedBrainCommand("What is the price of fertilizer?"), true);
  assert.equal(isUnifiedBrainCommand("What is the current price of urea with sources?"), true);
});

// An unrelated destination-free "show me the map" request is unaffected.
test("a plain map-open request with no route phrasing is unaffected by the new bypass", () => {
  assert.equal(isUnifiedBrainCommand("Open the map"), false);
});
