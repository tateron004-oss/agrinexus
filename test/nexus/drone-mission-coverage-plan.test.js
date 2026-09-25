"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const droneBridge = require("../../server/providers/droneMissionBridgeProvider.js");

test("parseAreaHectares reads hectares and converts acres, and returns null with no size mentioned", () => {
  assert.equal(droneBridge.parseAreaHectares("my 5 hectare north field"), 5);
  assert.equal(droneBridge.parseAreaHectares("a 10 acre plot"), 10 * 0.404686);
  assert.equal(droneBridge.parseAreaHectares("the north field"), null);
});

// Found live (drone/logistics follow-up audit): the original regex had no
// sign handling, so it matched only the digits after a leading "-" and
// silently dropped it -- "-5 hectares" parsed as a valid, positive 5
// hectares instead of being rejected as invalid input.
test("parseAreaHectares rejects a negative area instead of silently dropping the sign", () => {
  assert.equal(droneBridge.parseAreaHectares("-5 hectares"), null);
  assert.equal(droneBridge.parseAreaHectares("-2.5 acres"), null);
  assert.equal(droneBridge.parseAreaHectares("0 hectares"), null);
});

test("planCoverage computes a deterministic, honestly-labeled simulated estimate", () => {
  const plan = droneBridge.planCoverage({ areaHectares: 4 });
  assert.equal(plan.areaHectares, 4);
  assert.equal(plan.passes, Math.ceil(Math.sqrt(40000) / 20));
  assert.ok(plan.estimatedFlightMinutes > 0);
  assert.ok(plan.estimatedImages > 0);
  assert.match(plan.limitation, /not a real flight plan/);
});

test("planCoverage scales up passes and flight time for a larger field", () => {
  const small = droneBridge.planCoverage({ areaHectares: 1 });
  const large = droneBridge.planCoverage({ areaHectares: 20 });
  assert.ok(large.totalDistanceMeters > small.totalDistanceMeters);
  assert.ok(large.estimatedFlightMinutes > small.estimatedFlightMinutes);
});

test("planCoverage returns null for missing or non-positive area", () => {
  assert.equal(droneBridge.planCoverage({}), null);
  assert.equal(droneBridge.planCoverage({ areaHectares: 0 }), null);
  assert.equal(droneBridge.planCoverage({ areaHectares: -3 }), null);
});

function fixtureDb() {
  return { profile: {} };
}

test("missionRequest attaches a coverage plan when the area text names a size", () => {
  const db = fixtureDb();
  const result = droneBridge.missionRequest({
    title: "Check my field", area: "my 8 hectare maize field", purpose: "pest scan", confirmed: true
  }, db, {});
  assert.equal(result.body.status, "completed");
  assert.ok(result.body.data.request.coveragePlan, "a request with a stated size must include a coverage plan");
  assert.equal(result.body.data.request.coveragePlan.areaHectares, 8);
  assert.match(result.body.message, /Simulated coverage estimate/);
});

test("missionRequest omits the coverage plan when no size is mentioned or given", () => {
  const db = fixtureDb();
  const result = droneBridge.missionRequest({
    title: "Check my field", area: "the north field", purpose: "pest scan", confirmed: true
  }, db, {});
  assert.equal(result.body.status, "completed");
  assert.equal(result.body.data.request.coveragePlan, null);
  assert.doesNotMatch(result.body.message, /Simulated coverage estimate/);
});

test("missionRequest prefers an explicit areaHectares over text parsing", () => {
  const db = fixtureDb();
  const result = droneBridge.missionRequest({
    title: "Check my field", area: "the north field", areaHectares: 3, purpose: "pest scan", confirmed: true
  }, db, {});
  assert.equal(result.body.data.request.coveragePlan.areaHectares, 3);
});

test("missionRequest still blocks sensitive content even when a coverage plan would otherwise apply", () => {
  const db = fixtureDb();
  const result = droneBridge.missionRequest({
    title: "Launch takeoff now", area: "my 5 hectare field", purpose: "flight launch", confirmed: true
  }, db, {});
  assert.equal(result.body.status, "blocked");
  assert.equal(db.profile.nexusDroneMissionRequests?.length || 0, 0, "a blocked request must not be saved");
});
