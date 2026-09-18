"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const pharmacyBridgeProvider = require("../../server/providers/pharmacyBridgeProvider");
const mobileClinicBridgeProvider = require("../../server/providers/mobileClinicBridgeProvider");
const { createPharmacyFindExecutor, verifyPharmacyFindOutcome, createClinicFindExecutor, verifyClinicFindOutcome } = require("../../nexus/health/places-executor.js");

function withPatched(moduleExports, fnName, replacement, run) {
  const original = moduleExports[fnName];
  moduleExports[fnName] = replacement;
  return Promise.resolve(run()).finally(() => { moduleExports[fnName] = original; });
}

test("pharmacy.find executor wraps the real bridge provider and verifies a completed search", async () => {
  await withPatched(pharmacyBridgeProvider, "search", async (query) => {
    assert.equal(query.location, "Nairobi");
    return { httpStatus: 200, body: { ok: true, status: "completed", data: { cards: [{ name: "Real Pharmacy", source: "OpenStreetMap (live)" }] } } };
  }, async () => {
    const execute = createPharmacyFindExecutor({ env: {} });
    const result = await execute({ input: { location: "Nairobi" } });
    assert.equal(result.data.cards[0].name, "Real Pharmacy");
    assert.equal(verifyPharmacyFindOutcome({ result }).verified, true);
  });
});

test("pharmacy.find executor passes through city and query fields", async () => {
  await withPatched(pharmacyBridgeProvider, "search", async (query) => {
    assert.equal(query.location, "Nakuru");
    assert.equal(query.q, "medication safety");
    return { httpStatus: 200, body: { ok: true, status: "completed", data: { cards: [] } } };
  }, async () => {
    const execute = createPharmacyFindExecutor({ env: {} });
    await execute({ input: { city: "Nakuru", query: "medication safety" } });
  });
});

test("pharmacy.find verification fails when the underlying search does not return a real cards array", async () => {
  await withPatched(pharmacyBridgeProvider, "search", async () => ({ httpStatus: 503, body: { ok: false, status: "failed", data: {} } }), async () => {
    const execute = createPharmacyFindExecutor({ env: {} });
    const result = await execute({ input: { location: "Nairobi" } });
    assert.equal(verifyPharmacyFindOutcome({ result }).verified, false);
  });
});

test("clinic.find executor wraps the real bridge provider and verifies a completed search", async () => {
  await withPatched(mobileClinicBridgeProvider, "search", async (query) => {
    assert.equal(query.location, "Kisumu");
    return { httpStatus: 200, body: { ok: true, status: "completed", data: { cards: [{ name: "Real Clinic", source: "OpenStreetMap (live)" }] } } };
  }, async () => {
    const execute = createClinicFindExecutor({ env: {} });
    const result = await execute({ input: { location: "Kisumu" } });
    assert.equal(result.data.cards[0].name, "Real Clinic");
    assert.equal(verifyClinicFindOutcome({ result }).verified, true);
  });
});

test("clinic.find verification fails when the underlying search does not return a real cards array", async () => {
  await withPatched(mobileClinicBridgeProvider, "search", async () => ({ httpStatus: 503, body: { ok: false, status: "failed", data: {} } }), async () => {
    const execute = createClinicFindExecutor({ env: {} });
    const result = await execute({ input: { location: "Kisumu" } });
    assert.equal(verifyClinicFindOutcome({ result }).verified, false);
  });
});

test("real pharmacy/clinic cards are flattened to the top level, not just nested under .data", async () => {
  // Same shape mismatch already fixed for maps.view and communications.send:
  // pharmacyBridgeProvider/mobileClinicBridgeProvider both use providerUtils.js's
  // providerResponse(), which nests the real fields (cards, safetyNote,
  // emergencyNote) inside body.data. Confirmed live: a real pharmacy/clinic
  // search's cards were only reachable at outcome.data.data.cards, so the
  // client's generic "location-list" outcome card showed a raw nested JSON
  // blob instead of clean listings.
  await withPatched(pharmacyBridgeProvider, "search", async () => ({
    httpStatus: 200, body: { ok: true, status: "completed",
      data: { cards: [{ name: "Real Pharmacy" }], safetyNote: "Preparation only." } }
  }), async () => {
    const execute = createPharmacyFindExecutor({ env: {} });
    const result = await execute({ input: { location: "Nairobi" } });
    assert.equal(result.cards[0].name, "Real Pharmacy");
    assert.equal(result.safetyNote, "Preparation only.");
    assert.equal(result.data.cards[0].name, "Real Pharmacy");
  });

  await withPatched(mobileClinicBridgeProvider, "search", async () => ({
    httpStatus: 200, body: { ok: true, status: "completed",
      data: { cards: [{ name: "Real Clinic" }], safetyNote: "Preparation only." } }
  }), async () => {
    const execute = createClinicFindExecutor({ env: {} });
    const result = await execute({ input: { location: "Kisumu" } });
    assert.equal(result.cards[0].name, "Real Clinic");
    assert.equal(result.safetyNote, "Preparation only.");
  });
});
