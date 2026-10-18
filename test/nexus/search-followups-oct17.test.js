"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const africa = require("../../nexus/knowledge/africa-small-business.js");
const business = require("../../public/kyro-business-topics.js");
const community = require("../../public/kyro-community-topics.js");
const states = require("../../nexus/knowledge/state-entities.js");
const places = require("../../server/providers/placesLocation.js");

// Found by the online-search check on the live site: "Look up what is needed to register a business in Kenya" skipped the checked Kenya guide (its sources and date) and the voice read out unverified fees from a web summary;
// "Find a veterinary clinic in Nakuru" was answered with a human health post.

test("'look up', 'search the web for', 'find out', 'research' and 'google' before a question about a business or help topic still reach the checked guide", () => {
  const nairobi = { timeZone: "Africa/Nairobi" };
  assert.equal(africa.africaTopic("Look up what is needed to register a business in Kenya.", nairobi), "ke-register");
  assert.equal(africa.africaTopic("Search the web for how to register a business in Nigeria", { timeZone: "Africa/Lagos" }), "ng-register");
  assert.equal(africa.africaTopic("Find out how much tax a small business pays in Kenya", nairobi), "ke-tax");
  assert.equal(business.topic("Search the web for SBA microloan requirements."), "loans");
  assert.equal(business.topic("Google how to get an EIN"), "ein-registration");
  assert.equal(business.topic("Research how to start a business"), "startup-steps");
  assert.equal(community.topic("Look up the Veterans Crisis Line"), "vet-crisis");
  assert.equal(community.topic("Search for help with Medicaid"), "cs-medicaid");
  assert.equal(states.stateEntityIntent("Look up how to form an LLC in Texas")?.kind, "llc");
});

test("a web search that is not about one of the guides is left to the live search, and a record or draft is still not a question", () => {
  const nairobi = { timeZone: "Africa/Nairobi" };
  for (const say of ["Search the web for the price of maize flour in Nairobi this week.", "What is the latest news about Kenya?", "Look up the weather in Lagos", "Search for how to prune tomato plants."]) {
    assert.equal(africa.africaTopic(say, nairobi), null, say); assert.equal(business.topic(say), null, say); assert.equal(community.topic(say), null, say);
  }
  assert.equal(business.topic("Log a tax payment of $300"), null);
  assert.equal(africa.africaTopic("Draft a letter about registering my business in Kenya", nairobi), null);
});

test("a vet, an animal clinic or a livestock service is not searched as a human health clinic, while clinics and pharmacies for people still are", () => {
  for (const say of ["Find a veterinary clinic in Nakuru.", "Find a vet near me", "Find an animal clinic near Kisumu", "Where is the nearest livestock clinic?", "Find a clinic for my dog near me"]) assert.equal(places.parseNearbyPlacesRequest(say), null, say);
  assert.deepEqual(places.parseNearbyPlacesRequest("Find a clinic near Nakuru"), { kind: "clinic", place: "Nakuru", nearest: false });
  assert.equal(places.parseNearbyPlacesRequest("Find a pharmacy near me")?.kind, "pharmacy");
  assert.equal(places.parseNearbyPlacesRequest("Where is the nearest hospital?")?.kind, "clinic");
  assert.equal(places.parseNearbyPlacesRequest("Find a VA clinic for veterans near me")?.kind, "clinic", "'veterans' is not 'vet'");
});

test("a request for a vet or livestock service is answered plainly (not with clinics or chemists for people), and says what to do instead", async () => {
  assert.equal(places.animalServiceRequest("Find a veterinary clinic in Nakuru."), true);
  assert.equal(places.animalServiceRequest("Where is the nearest livestock doctor?"), true);
  for (const say of ["Find a clinic near Nakuru", "Find a pharmacy near me", "Find a VA clinic for veterans near me", "How do I vaccinate my cows?"]) assert.equal(places.animalServiceRequest(say), false, say);
  const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
  const defs = require("../../nexus/tools/canonical-provider-definitions.js");
  const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
  const list = Array.isArray(defs) ? defs : Object.values(defs).find(Array.isArray) || [];
  const rows = list.map(tool => ({ tool_id: tool.toolId, domain: tool.domain, description: tool.description, risk_tier: tool.riskTier, confirmation_required: tool.confirmationRequired, consent_scope: tool.consentScope }));
  const planner = new OpenEndedPlanner({ model: { plan: async () => { throw new Error("the AI model must not be asked"); } }, memory: { search: async () => [] }, tools: { list: async () => rows }, applications: { list: () => defaultApplicationManifests() }, documents: { list: async () => [] } });
  const plan = await planner.plan({ command: { text: "Find a veterinary clinic in Nakuru.", tenantId: "t", actorId: "u", locale: "en", channel: "typed" }, context: { roles: [] } });
  assert.equal(plan.steps.length, 0);
  assert.match(plan.response, /I can only look up clinics and pharmacies for people, so I will not guess at a vet\. To find a vet or animal clinic, say, for example, "search the web for a vet in Nakuru"/);
  const human = await planner.plan({ command: { text: "Find a clinic near Nakuru", tenantId: "t", actorId: "u", locale: "en", channel: "typed" }, context: { roles: [] } });
  assert.equal(human.steps[0].toolId, "clinic.find");
});
