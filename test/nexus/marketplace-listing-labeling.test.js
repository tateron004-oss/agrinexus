const test = require("node:test");
const assert = require("node:assert/strict");
const marketplaceBridge = require("../../server/providers/marketplaceBridgeProvider.js");

function freshDb() {
  return { profile: {} };
}

test("with no real listings, search clearly says the results are demo/sample listings, not real postings", () => {
  const db = freshDb();
  const result = marketplaceBridge.search({}, db, { NEXUS_MARKETPLACE_BRIDGE_ENABLED: "true" });
  assert.equal(result.body.data.realListingCount, 0);
  assert.equal(result.body.data.demoListingCount, 8);
  assert.match(result.body.message, /no saved AgriTrade listings yet/i);
  assert.match(result.body.message, /sample listing.*not real postings/i);
});

test("with a real listing, search distinguishes the user's real listing count from the demo catalog count", () => {
  const db = freshDb();
  marketplaceBridge.createListing({ title: "My real maize lot", category: "Seeds", confirmed: true }, db);
  const result = marketplaceBridge.search({}, db, { NEXUS_MARKETPLACE_BRIDGE_ENABLED: "true" });
  assert.equal(result.body.data.realListingCount, 1);
  assert.equal(result.body.data.demoListingCount, 8);
  assert.match(result.body.message, /1 of your saved AgriTrade listing/i);
  assert.match(result.body.message, /8 AgriTrade sample listing.*not real postings/i);
});

test("every card in a search result carries an honest per-item sourceType distinguishing real from demo", () => {
  const db = freshDb();
  marketplaceBridge.createListing({ title: "My real maize lot", category: "Seeds", confirmed: true }, db);
  const result = marketplaceBridge.search({}, db, { NEXUS_MARKETPLACE_BRIDGE_ENABLED: "true" });
  const real = result.body.data.cards.filter(card => card.sourceType !== "starter_catalog");
  const demo = result.body.data.cards.filter(card => card.sourceType === "starter_catalog");
  assert.equal(real.length, 1);
  assert.equal(demo.length, 8);
  assert.ok(demo.every(card => card.source === "AgriTrade local starter catalog"));
});

test("a category filter that only matches demo listings still reports zero real listings honestly", () => {
  const db = freshDb();
  const result = marketplaceBridge.search({ category: "Seeds" }, db, { NEXUS_MARKETPLACE_BRIDGE_ENABLED: "true" });
  assert.equal(result.body.data.realListingCount, 0);
  assert.ok(result.body.data.demoListingCount >= 1);
});
