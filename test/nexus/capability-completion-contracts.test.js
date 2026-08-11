"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { CONTRACTS, verifyCapabilityCompletion } = require("../../nexus/apps/capability-completion-contracts.js");
const sha = "a".repeat(40);

test("all authoritative applications have explicit completion evidence", () => {
  assert.deepEqual(Object.keys(CONTRACTS).sort(), ["agriculture", "communications", "documents", "health", "learning",
    "live-knowledge", "maps", "marketplace", "mobile-clinic", "music-media", "offline-queue", "operations",
    "pharmacy", "reminders", "telehealth", "workforce"].sort());
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
