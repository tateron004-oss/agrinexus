"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const mh = require("../../public/nexus-mental-health-behavioral-wellness.js");

test("shouldHandle and classifyState agree on medical-emergency phrases (previously shouldHandle alone missed them)", () => {
  for (const text of ["I have chest pain", "I cannot breathe right now", "This is a medical emergency"]) {
    assert.equal(mh.shouldHandle(text), true, text);
    const classification = mh.classifyState(text);
    assert.equal(classification.crisisOverride, true, text);
    assert.equal(classification.state, "medical_emergency", text);
  }
  // "overdose" also matches CRISIS_PATTERNS (checked first), so it
  // classifies as immediate_danger instead -- still crisisOverride:true,
  // which is what actually matters for gating a safety response.
  assert.equal(mh.shouldHandle("possible overdose"), true);
  assert.equal(mh.classifyState("possible overdose").crisisOverride, true);
});

test("crisisOverride fires for direct crisis and safeguarding language", () => {
  assert.equal(mh.classifyState("I want to end my life").crisisOverride, true);
  assert.equal(mh.classifyState("I want to end my life").state, "immediate_danger");
  assert.equal(mh.classifyState("someone is hurting me at home").crisisOverride, true);
  assert.equal(mh.classifyState("someone is hurting me at home").state, "abuse_or_safeguarding_concern");
});

// Confirmed live: shouldHandle()'s general MENTAL_HEALTH_PATTERNS list
// matches plain words ("therapy", "provider", "counseling") that appear
// constantly in ordinary, unrelated commands (a real fitness log, a
// communications/calendar action naming a provider). Any caller gating a
// real action on shouldHandle() alone would silently replace it with a
// support redirect. classifyState(...).crisisOverride only fires for the
// genuinely safety-critical patterns and must stay false for these.
test("ordinary commands mentioning therapy/provider/counseling do not set crisisOverride, even though shouldHandle is broader", () => {
  const ordinary = [
    "I completed my therapy session today.",
    "Send a real email through the provider integration.",
    "Book a calendar event with my provider.",
    "Find pharmacy support for metformin and show a safety response with sources."
  ];
  for (const text of ordinary) {
    assert.equal(mh.classifyState(text).crisisOverride, false, text);
  }
});

test("buildSupportPacket for a crisis message returns a real safety response, not a diagnosis or dispatch claim", () => {
  const packet = mh.buildSupportPacket("I want to end my life", {});
  assert.equal(packet.classification.crisisOverride, true);
  assert.match(packet.userVisibleStatus, /contact local emergency/i);
  assert.equal(packet.safety.noDiagnosis, true);
  assert.equal(packet.safety.noEmergencyDispatch, true);
  assert.equal(packet.safety.noProviderContacted, true);
});

// Found live 2026-09-25: the exact real phrase "I've been feeling really
// down lately and don't see the point in anything" matched NONE of the
// existing patterns (no literal "hopeless", "depressed", "suicide", etc.),
// so shouldHandle() returned false and the whole safety module never
// engaged. This is real, classic passive-hopelessness/anhedonia language,
// not an edge case.
test("hopelessness/anhedonia phrasing with no literal crisis word still engages the safety module", () => {
  const realWorldPhrase = "I've been feeling really down lately and don't see the point in anything";
  assert.equal(mh.shouldHandle(realWorldPhrase), true);
  const classification = mh.classifyState(realWorldPhrase);
  assert.equal(classification.crisisOverride, true);
  assert.equal(classification.state, "elevated_concern");
  for (const text of [
    "I don't see the point in trying anymore",
    "nothing matters to me anymore",
    "I'm giving up",
    "what's the point",
    "I don't want to exist"
  ]) {
    assert.equal(mh.shouldHandle(text), true, text);
    assert.equal(mh.classifyState(text).crisisOverride, true, text);
  }
});

// Found live: even a correctly-classified crisis never produced a real,
// dialable phone number anywhere in the response -- only "contact local
// emergency services", with the actual 988/911 numbers sitting unused in
// JURISDICTION_ESCALATION_REGISTRY. A real number must actually appear in
// the text a person reads/hears when the jurisdiction has one configured.
test("a real, verified jurisdiction's crisis contact numbers actually appear in the spoken/written response", () => {
  const packet = mh.buildSupportPacket("I want to end my life", { jurisdiction: "california" });
  assert.equal(packet.jurisdictionEscalation.jurisdictionId, "us");
  assert.match(packet.userVisibleStatus, /988/);
  assert.match(packet.userVisibleStatus, /911/);
});

test("an unverified jurisdiction still does not fabricate a specific resource number", () => {
  const packet = mh.buildSupportPacket("I want to end my life", { jurisdiction: "some unlisted country" });
  assert.equal(packet.jurisdictionEscalation.jurisdictionId, "generic");
  assert.equal(/\b\d{3,}\b/.test(packet.userVisibleStatus), false);
});
