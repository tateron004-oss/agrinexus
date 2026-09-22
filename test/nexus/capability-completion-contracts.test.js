"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { CONTRACTS, verifyCapabilityCompletion } = require("../../nexus/apps/capability-completion-contracts.js");
const sha = "a".repeat(40);

test("all authoritative applications have explicit completion evidence", () => {
  assert.deepEqual(Object.keys(CONTRACTS).sort(), ["agriculture", "business", "communications", "documents", "health", "images", "learning",
    "lists", "live-knowledge", "logistics", "maps", "marketplace", "mobile-clinic", "music-media", "offline-queue", "operations",
    "pharmacy", "reminders", "telehealth", "videos", "workforce"].sort());
});

test("map completion requires endpoints, route geometry, exact release and visible render", () => {
  assert.equal(verifyCapabilityCompletion({ application: "maps", releaseSha: sha,
    evidence: { origin: "Nairobi", destination: "Nakuru", routeGeometry: [[-1.28, 36.82]], rendered: true, visible: true } }).verified, true);
  assert.throws(() => verifyCapabilityCompletion({ application: "maps", releaseSha: sha,
    evidence: { origin: "Nairobi", rendered: true, visible: true } }), /destination, routeGeometry/);
});

test("media completion cannot substitute a handler call for actual playback", () => {
  assert.throws(() => verifyCapabilityCompletion({ application: "music-media", releaseSha: sha,
    evidence: { requestedMedia: "Stevie Wonder", resolvedMedia: "Sir Duke", playbackState: "pending", rendered: true, audible: false } }), /playbackState/);
});

test("every registered application has a completion contract, so none can reach authoritative without one", () => {
  const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
  const missing = defaultApplicationManifests().map(app => app.applicationId).filter(id => !Object.hasOwn(CONTRACTS, id));
  assert.deepEqual(missing, [], "an application without a contract fails the production evidence compile");
});

test("only communications may use the held-gate evidence, and only when it states nothing was executed", () => {
  const base = { draft: "Draft a message.", consentRequired: true, rendered: true, visible: true };
  const ok = verifyCapabilityCompletion({ application: "communications", releaseSha: sha, evidence: { ...base, confirmationGateHeld: true, actionExecuted: false } });
  assert.equal(ok.confirmationGateHeld, true);
  for (const extra of [{}, { confirmationGateHeld: true }, { confirmationGateHeld: true, actionExecuted: true }, { confirmationGateHeld: false, actionExecuted: false }])
    assert.throws(() => verifyCapabilityCompletion({ application: "communications", releaseSha: sha, evidence: { ...base, ...extra } }), /consentState, deliveryReceipt/);
  assert.throws(() => verifyCapabilityCompletion({ application: "communications", releaseSha: sha,
    evidence: { draft: "x", consentRequired: true, confirmationGateHeld: true, actionExecuted: false, rendered: false, visible: false } }), /renderer acknowledgement/, "the prompt must still be rendered");
  assert.throws(() => verifyCapabilityCompletion({ application: "health", releaseSha: sha,
    evidence: { confirmationGateHeld: true, actionExecuted: false, rendered: true, visible: true } }), /health is missing completion evidence/);
});
