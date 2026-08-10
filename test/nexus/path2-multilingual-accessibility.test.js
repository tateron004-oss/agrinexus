"use strict";
const assert = require("node:assert/strict");
const test = require("node:test");
const { SUPPORTED_LOCALES, normalizeLocale, createInteractionProfile } = require("../../nexus/experience/interaction-profile.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { ApplicationRegistry } = require("../../nexus/apps/registry.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");

test("all six Path 2 languages produce durable full-workflow interaction requirements", () => {
  assert.deepEqual(SUPPORTED_LOCALES, ["en", "es", "fr", "sw", "ar", "pt"]);
  for (const locale of SUPPORTED_LOCALES) {
    const profile = createInteractionProfile({ locale: `${locale}-regional`, channel: "voice",
      userPreferences: { accessibility: { lowLiteracy: true, screenReader: true, captions: true } } });
    assert.equal(profile.locale, locale);
    assert.equal(profile.voiceOnly, true);
    assert.equal(profile.requirements.preserveLanguageAcrossWorkflow, true);
    assert.equal(profile.requirements.preserveSafetyMeaning, true);
    assert.equal(profile.requirements.announceVisibleOutcome, true);
    assert.ok(profile.preferredFormats.includes("plain-language"));
  }
  assert.equal(createInteractionProfile({ locale: "ar-EG" }).direction, "rtl");
  assert.equal(normalizeLocale("unsupported", "sw"), "sw");
});

test("planner sends locale and accessibility requirements through an unfamiliar workflow", async () => {
  let observed;
  const planner = new OpenEndedPlanner({
    model: { plan: async request => { observed = request; return { goal: request.goal, application: "health",
      riskTier: "high", steps: [{ id: "intake", title: "Collect intake", toolId: null, input: {}, dependsOn: [] }], clarification: null }; } },
    tools: { list: async () => [] }, applications: new ApplicationRegistry(defaultApplicationManifests()), memory: null
  });
  await planner.plan({ command: { tenantId: "tenant", actorId: "user", text: "Nisaidie kuandaa ziara yangu ya daktari",
    locale: "sw-KE", channel: "voice" }, context: { roles: [], can: () => true,
      userPreferences: { accessibility: { lowLiteracy: true, screenReader: true } } }, conversationHistory: [] });
  assert.equal(observed.locale, "sw");
  assert.equal(observed.interactionProfile.lowLiteracy, true);
  assert.equal(observed.interactionProfile.screenReader, true);
  assert.equal(observed.interactionProfile.requirements.preserveSafetyMeaning, true);
});
