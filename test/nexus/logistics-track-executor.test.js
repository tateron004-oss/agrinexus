"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const googleMapsProvider = require("../../server/providers/googleMapsProvider.js");
const { createLogisticsTrackExecutor, verifyLogisticsTrackOutcome } = require("../../nexus/logistics/executor.js");

// Closes item 12 of the 2026-09-22 capability audit: the primary/authoritative runtime had no logistics
// tool at all -- only the legacy voice-only path could reach production's real "logistics provider"
// (itself AgriNexus's own decorative mock, a separate, provider-access-gated problem this executor
// does NOT solve -- see the file's own header). What this fixes: a genuine road-route distance/duration
// estimate, honestly labeled as an estimate, reachable through the primary path for the first time.
// googleMapsProvider.route() already has its own coverage (maps-view-executor.test.js); patched here
// the same way that file does, to isolate what this executor actually adds.
function withPatched(moduleExports, fnName, replacement, run) {
  const original = moduleExports[fnName];
  moduleExports[fnName] = replacement;
  return Promise.resolve(run()).finally(() => { moduleExports[fnName] = original; });
}

test("a real computed route returns a real duration-based estimated arrival, honestly labeled", async () => {
  const now = Date.now();
  await withPatched(googleMapsProvider, "route", async body => {
    assert.equal(body.origin, "Nairobi");
    assert.equal(body.destination, "Nakuru");
    return { body: { data: { distanceMeters: 158000, durationSeconds: 7200, routeGeometry: [[-1.28, 36.82], [-0.28, 36.07]] } } };
  }, async () => {
    const execute = createLogisticsTrackExecutor({ env: {} });
    const result = await execute({ input: { origin: "Nairobi", destination: "Nakuru" } });
    assert.equal(result.ok, true);
    assert.equal(result.trackingMethod, "route_based_estimate");
    assert.match(result.limitation, /not live carrier tracking/);
    assert.equal(result.distanceMeters, 158000);
    assert.equal(result.durationSeconds, 7200);
    assert.ok(new Date(result.estimatedArrival).getTime() >= now + 7200 * 1000 - 1000);
    assert.equal(verifyLogisticsTrackOutcome({ result }).verified, true);
  });
});

test("missing origin or destination is refused before calling the route provider", async () => {
  const execute = createLogisticsTrackExecutor({ env: {} });
  const result = await execute({ input: { origin: "Nairobi" } });
  assert.equal(result.ok, false);
  assert.equal(result.reason, "origin_and_destination_required");
  assert.equal(verifyLogisticsTrackOutcome({ result }).verified, false);
});

test("a route the provider could not compute is reported honestly, not fabricated", async () => {
  await withPatched(googleMapsProvider, "route", async () => ({ body: { data: {} } }), async () => {
    const execute = createLogisticsTrackExecutor({ env: {} });
    const result = await execute({ input: { origin: "Nowhere", destination: "Nowhere Else" } });
    assert.equal(result.ok, false);
    assert.equal(result.reason, "route_not_computed");
    assert.equal(verifyLogisticsTrackOutcome({ result }).verified, false);
  });
});

test("verifyLogisticsTrackOutcome refuses a hand-built result claiming success without real route data", () => {
  assert.equal(verifyLogisticsTrackOutcome({ result: { ok: true, trackingMethod: "route_based_estimate" } }).verified, false);
  assert.equal(verifyLogisticsTrackOutcome({ result: { ok: true, trackingMethod: "live_carrier_tracking", durationSeconds: 100 } }).verified, false,
    "must reject a result that claims a tracking method this executor doesn't actually provide");
  assert.equal(verifyLogisticsTrackOutcome({ result: undefined }).verified, false);
});
