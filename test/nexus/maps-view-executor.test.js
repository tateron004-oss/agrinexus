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
