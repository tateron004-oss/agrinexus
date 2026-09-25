"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { classifyDomains, isUnifiedBrainCommand } = require("../../public/nexus-unified-brain-runtime.js");

// Found live: classifyDomains's marketplace_trade regex didn't include
// "price"/"cost"/"quote", so "What is the price of maize?" matched only the
// "agriculture" domain (single domain, rejected by the >=2-domain rule) --
// but the decorative routeNexusIntentDrivenWorkflowCommand classifier in
// app.js already treats "price" as a marketplace-trade signal, so it was
// guaranteed to win by default over the real NexusUnifiedBrainRuntime path.
test("a commodity price question matches both agriculture and marketplace_trade, reaching the real backend", () => {
  assert.deepEqual(classifyDomains("What is the price of maize?").sort(), ["agriculture", "marketplace_trade"]);
  assert.equal(isUnifiedBrainCommand("What is the price of maize?"), true);
});

test("a plain agriculture question with no trade signal is unaffected", () => {
  assert.deepEqual(classifyDomains("How do I treat maize leaf rust?"), ["agriculture"]);
  assert.equal(isUnifiedBrainCommand("How do I treat maize leaf rust?"), false);
});
