"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { isUnifiedBrainCommand, shouldHandleBeforeLegacy } = require("../../public/nexus-unified-brain-runtime.js");

// Found live: "Add a buyer named Jane Doe" (a real business/CRM lead-add
// command -- real estate reuses the marketplace's own "buyer"/"seller"
// words for its own lead types) only ever matched ONE domain
// (marketplace_trade) in classifyDomains, since DOMAINS has no real-estate/
// business concept at all. The >=2-domain requirement then rejected it, so
// it fell through to the decorative marketplace-trade workflow card instead
// of ever reaching nexusBusinessVoiceDispatch.run()'s real addLead (see
// test/nexus/business-real-estate.test.js, which confirms the server-side
// classify() already correctly resolves this exact phrase to "addLead").
test("real-estate/business lead-add commands are recognized even though they only match one classifyDomains domain", () => {
  for (const command of [
    "Add a buyer named Jane Doe",
    "Track a seller named Tom Rivera",
    "Add a new tenant named Grace",
    "Log a landlord contact",
    "Create a lead for the downtown property"
  ]) {
    assert.equal(isUnifiedBrainCommand(command), true, command);
    assert.equal(shouldHandleBeforeLegacy(command), true, command);
  }
});

// An ordinary marketplace browse/sell phrase with no add/create/track verb
// must still behave exactly as before (single-domain, correctly rejected
// unless it independently qualifies for some other reason).
test("a plain marketplace phrase with no lead-add verb is unaffected by the new bypass", () => {
  assert.equal(isUnifiedBrainCommand("Show me what is listed for sale on AgriTrade."), false);
});
