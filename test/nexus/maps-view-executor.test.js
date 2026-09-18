"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const googleMapsProvider = require("../../server/providers/googleMapsProvider.js");
const { createMapsViewExecutor, verifyMapsViewOutcome } = require("../../nexus/maps/executor.js");

function withPatched(moduleExports, fnName, replacement, run) {
  const original = moduleExports[fnName];
  moduleExports[fnName] = replacement;
  return Promise.resolve(run()).finally(() => { moduleExports[fnName] = original; });
}

test("a real route (Google-configured or the OSM/OSRM fallback) returns a verified outcome", async () => {
  await withPatched(googleMapsProvider, "route", async body => {
    assert.equal(body.origin, "Farm A");
    assert.equal(body.destination, "Grain Elevator");
    return { httpStatus: 200, body: { ok: true, status: "completed", data: { distanceMeters: 12000, durationSeconds: 900 } } };
  }, async () => {
    const execute = createMapsViewExecutor({ env: {} });
    const result = await execute({ input: { origin: "Farm A", destination: "Grain Elevator" } });
    assert.equal(result.data.distanceMeters, 12000);
    assert.equal(verifyMapsViewOutcome({ result }).verified, true);
  });
});

test("a route described only by geometry (no distance) still verifies", async () => {
  await withPatched(googleMapsProvider, "route", async () => ({
    httpStatus: 200, body: { ok: true, status: "completed", data: { routeGeometry: "encoded-polyline" } }
  }), async () => {
    const execute = createMapsViewExecutor({ env: {} });
    const result = await execute({ input: { origin: "A", destination: "B" } });
    assert.equal(verifyMapsViewOutcome({ result }).verified, true);
  });
});

test("a failed route computation does not verify", async () => {
  await withPatched(googleMapsProvider, "route", async () => ({
    httpStatus: 502, body: { ok: false, status: "failed", data: {} }
  }), async () => {
    const execute = createMapsViewExecutor({ env: {} });
    const result = await execute({ input: { origin: "A", destination: "B" } });
    assert.equal(verifyMapsViewOutcome({ result }).verified, false);
  });
});

test("real route geometry and coordinates are flattened to the top level for the client's map renderer", async () => {
  // Confirmed live in production: googleMapsProvider.route()'s own established
  // convention (providerUtils.js's providerResponse(), shared by every
  // server/providers/*.js module) nests the real route fields inside
  // result.body.data -- but the client's map renderer (openGenesisRealtime-
  // MapWorkspace / nexusMapOutcomeVerified in public/app.js) reads
  // outcome.data.routeGeometry / .originLat / .destinationLat directly, not
  // outcome.data.data.*. Without flattening, a real "show a route" command
  // through the authoritative runtime (voice or typed) produced a real,
  // correctly-computed route that the client could never actually draw.
  await withPatched(googleMapsProvider, "route", async () => ({
    httpStatus: 200, body: { ok: true, status: "completed", provider: "openstreetmap-osrm",
      data: { origin: "Nairobi", destination: "Nakuru", routeGeometry: [[-1.3, 36.8], [-0.3, 36.1]],
        originLat: -1.3, originLng: 36.8, destinationLat: -0.3, destinationLng: 36.1, distanceMeters: 157788 } }
  }), async () => {
    const execute = createMapsViewExecutor({ env: {} });
    const result = await execute({ input: { origin: "Nairobi", destination: "Nakuru" } });
    assert.deepEqual(result.routeGeometry, [[-1.3, 36.8], [-0.3, 36.1]]);
    assert.equal(result.originLat, -1.3);
    assert.equal(result.originLng, 36.8);
    assert.equal(result.destinationLat, -0.3);
    assert.equal(result.destinationLng, 36.1);
    assert.equal(result.distanceMeters, 157788);
    // The nested shape stays intact too, since verifyMapsViewOutcome and
    // existing callers still read result.data.
    assert.equal(result.data.distanceMeters, 157788);
  });
});

test("waypoints are passed through as an array, defaulting to empty", async () => {
  await withPatched(googleMapsProvider, "route", async body => {
    assert.deepEqual(body.waypoints, ["Stop 1"]);
    return { httpStatus: 200, body: { ok: true, status: "completed", data: { distanceMeters: 500 } } };
  }, async () => {
    const execute = createMapsViewExecutor({ env: {} });
    await execute({ input: { origin: "A", destination: "B", waypoints: ["Stop 1"] } });
  });

  await withPatched(googleMapsProvider, "route", async body => {
    assert.deepEqual(body.waypoints, []);
    return { httpStatus: 200, body: { ok: true, status: "completed", data: { distanceMeters: 500 } } };
  }, async () => {
    const execute = createMapsViewExecutor({ env: {} });
    await execute({ input: { origin: "A", destination: "B" } });
  });
});
