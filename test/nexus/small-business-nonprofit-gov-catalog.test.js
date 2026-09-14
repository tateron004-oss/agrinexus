const test = require("node:test");
const assert = require("node:assert/strict");
const learningBridge = require("../../server/providers/learningBridgeProvider.js");
const { agentProfiles, createResponse } = require("../../nexus/business/strategy.js");

const NEW_CATEGORIES = [
  "small-business-finance",
  "marketing-strategy",
  "nonprofit-grants",
  "minority-business-development",
  "government-partnership",
  "tech-modernization"
];

test("the local learning catalog includes real small-business, nonprofit, and government-partnership resources", () => {
  const catalog = learningBridge.localCatalog();
  for (const category of NEW_CATEGORIES) {
    const match = catalog.find(item => item.category === category);
    assert.ok(match, `expected a catalog resource for category ${category}`);
    assert.ok(match.title && match.summary && match.details, `${category} resource must have real content, not a stub`);
    assert.ok(Array.isArray(match.keywords) && match.keywords.length > 0);
  }
});

test("new small-business/nonprofit/government resources are findable through the normal search path", async () => {
  const financeSearch = await learningBridge.search({ query: "financial literacy" }, { NEXUS_LEARNING_BRIDGE_ENABLED: "true" });
  assert.ok(financeSearch.body.data.cards.some(card => card.category === "small-business-finance"));

  const grantSearch = await learningBridge.search({ query: "grant writing" }, { NEXUS_LEARNING_BRIDGE_ENABLED: "true" });
  assert.ok(grantSearch.body.data.cards.some(card => card.category === "nonprofit-grants"));

  const minoritySearch = await learningBridge.search({ query: "minority owned" }, { NEXUS_LEARNING_BRIDGE_ENABLED: "true" });
  assert.ok(minoritySearch.body.data.cards.some(card => card.category === "minority-business-development"));

  const govSearch = await learningBridge.search({ category: "government-partnership" }, { NEXUS_LEARNING_BRIDGE_ENABLED: "true" });
  assert.ok(govSearch.body.data.cards.some(card => card.category === "government-partnership"));

  const techSearch = await learningBridge.search({ query: "technology modernization" }, { NEXUS_LEARNING_BRIDGE_ENABLED: "true" });
  assert.ok(techSearch.body.data.cards.some(card => card.category === "tech-modernization"));
});

test("progress tracking works for the new catalog resources, same as any other resource", () => {
  const db = { profile: {} };
  const resource = learningBridge.localCatalog().find(item => item.category === "marketing-strategy");
  const result = learningBridge.markProgress({ resourceId: resource.id, title: resource.title, category: resource.category, confirmed: true }, db, { NEXUS_LEARNING_BRIDGE_ENABLED: "true" });
  assert.equal(result.body.status, "completed");
  assert.equal(db.profile.nexusLearningProgress[0].resourceId, resource.id);
});

test("grant, minority-business, and government resource content never states a specific current dollar amount, deadline, or approval odds as fact", () => {
  const catalog = learningBridge.localCatalog();
  const risky = /\$[\d,]+|% approval|guaranteed|deadline is|due (on|by) \d/i;
  for (const category of ["nonprofit-grants", "minority-business-development", "government-partnership"]) {
    const match = catalog.find(item => item.category === category);
    assert.doesNotMatch(match.details + " " + match.summary, risky, `${category} resource must not fabricate specific funding facts`);
  }
});

test("business strategy agent profiles include marketing, finance, and government tracks", () => {
  for (const key of ["marketing", "finance", "government"]) {
    assert.ok(Object.hasOwn(agentProfiles, key), `expected an agent profile for ${key}`);
    const output = createResponse({ agent: key, request: "Help me plan next steps", objective: "Grow sustainably" });
    assert.match(output, /Template Outline/);
    assert.match(output, /Draft structure only; no live research, investor assessment or external action occurred\./);
  }
});
