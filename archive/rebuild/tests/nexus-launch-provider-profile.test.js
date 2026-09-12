"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { REQUIRED_PROVIDER_IDS, classifyProviders } = require("../../scripts/lib/nexus-launch-provider-profile.js");

function provider(id, status = "connected") { return { id, name: id, status, mode: "live" }; }

test("optional and intentionally unavailable providers do not block launch", () => {
  const providers = [...REQUIRED_PROVIDER_IDS].map(id => provider(id));
  providers.push(provider("learning-lms", "needs-credentials"), provider("trade-payments", "needs-live-provider"));
  const profile = classifyProviders({ ok: false, providers });
  assert.equal(profile.ready, true);
  assert.deepEqual(profile.requiredGaps, []);
  assert.deepEqual(profile.optionalGaps.map(item => item.id), ["learning-lms"]);
  assert.deepEqual(profile.intentionallyUnavailable.map(item => item.id), ["trade-payments"]);
});

test("missing or disconnected launch providers remain fail-closed", () => {
  const providers = [...REQUIRED_PROVIDER_IDS].filter(id => id !== "music-playback").map(id => provider(id));
  providers.find(item => item.id === "voice-tts").status = "needs-live-provider";
  const profile = classifyProviders({ providers });
  assert.equal(profile.ready, false);
  assert.equal(profile.observedRequiredCount, REQUIRED_PROVIDER_IDS.size - 1);
  assert.deepEqual(profile.requiredGaps.map(item => item.id), ["voice-tts"]);
});

test("recipient and user authorization states count as connected readiness", () => {
  const providers = [...REQUIRED_PROVIDER_IDS].map(id => provider(id));
  providers.find(item => item.id === "music-playback").status = "needs-user-auth";
  assert.equal(classifyProviders({ providers }).ready, true);
});
