"use strict";
const assert = require("node:assert/strict");
const test = require("node:test");
const { canonicalProviderTools, CANONICAL_PROVIDER_TOOLS } = require("../../nexus/tools/canonical-provider-definitions.js");
const { createProviderCatalog } = require("../../nexus/tools/provider-catalog.js");

// Confirmed live: "Send a message to my doctor saying I'm not feeling
// well." and "Save a telehealth intake for my ongoing back pain concern."
// both completed immediately with a fake-looking receipt and zero
// confirmation step -- a user could reasonably believe a real message
// reached their doctor, or a real intake was saved, when nothing actually
// happened (this whole execution layer is a local simulation). Both tools'
// catalog entries were missing confirmationRequired, unlike the otherwise-
// equivalent health.record and offline.sync, which already had it.

test("communications.send and telehealth.prepare both require confirmation, matching the already-established health.record/offline.sync pattern", () => {
  const communications = CANONICAL_PROVIDER_TOOLS.find(t => t.toolId === "communications.send");
  const telehealth = CANONICAL_PROVIDER_TOOLS.find(t => t.toolId === "telehealth.prepare");
  assert.equal(communications.confirmationRequired, true);
  assert.equal(telehealth.confirmationRequired, true);
});

test("the confirmationRequired flag survives the real deploy-time serialization path (canonicalProviderTools -> provider-catalog parsing -> the tool record actually registered)", () => {
  const definitions = canonicalProviderTools({ receiptSecret: "test-secret", providerBaseUrl: "https://example-provider.test" });
  const serialized = JSON.stringify(definitions);
  const catalog = createProviderCatalog({ env: { NEXUS_TOOL_PROVIDERS_JSON: serialized } });
  const communicationsDef = catalog.definitions.find(d => d.toolId === "communications.send");
  const telehealthDef = catalog.definitions.find(d => d.toolId === "telehealth.prepare");
  assert.equal(communicationsDef.confirmationRequired, true);
  assert.equal(telehealthDef.confirmationRequired, true);

  const registered = [];
  const fakeRegistry = { register: async record => { registered.push(record); return record; } };
  return catalog.register(fakeRegistry).then(() => {
    const communicationsRecord = registered.find(r => r.toolId === "communications.send");
    const telehealthRecord = registered.find(r => r.toolId === "telehealth.prepare");
    assert.equal(communicationsRecord.confirmationRequired, true);
    assert.equal(telehealthRecord.confirmationRequired, true);
  });
});

test("health.record and offline.sync (the already-correct reference cases) are unaffected by this change", () => {
  const healthRecord = CANONICAL_PROVIDER_TOOLS.find(t => t.toolId === "health.record");
  const offlineSync = CANONICAL_PROVIDER_TOOLS.find(t => t.toolId === "offline.sync");
  assert.equal(healthRecord.confirmationRequired, true);
  assert.equal(offlineSync.confirmationRequired, true);
});

test("read-only tools (knowledge.search, maps.view) still correctly have no confirmation requirement", () => {
  const knowledge = CANONICAL_PROVIDER_TOOLS.find(t => t.toolId === "knowledge.search");
  const maps = CANONICAL_PROVIDER_TOOLS.find(t => t.toolId === "maps.view");
  assert.equal(Boolean(knowledge.confirmationRequired), false);
  assert.equal(Boolean(maps.confirmationRequired), false);
});
