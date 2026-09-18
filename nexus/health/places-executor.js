"use strict";

// Real executors for the "pharmacy.find" and "clinic.find" canonical tools.
// Both wrap the same server/providers/{pharmacy,mobileClinic}BridgeProvider.js
// search() functions just upgraded to real OpenStreetMap Overpass lookups
// (keyless, zero-config-real -- the same pattern nexus/maps/executor.js
// already established) with the hardcoded 3-4 entry local catalog kept only
// as an honest fallback for when no location is given or the live lookup
// fails. Before this, both canonical tools only ever reached
// scripts/provider-engines.js's mock, which fabricated a location list
// locally regardless of what was asked -- confirmed decorative by the
// production capability audit.
const pharmacyBridgeProvider = require("../../server/providers/pharmacyBridgeProvider");
const mobileClinicBridgeProvider = require("../../server/providers/mobileClinicBridgeProvider");

function createPharmacyFindExecutor({ env = process.env } = {}) {
  return async function execute({ input = {} }) {
    const result = await pharmacyBridgeProvider.search({ location: input.location || input.city, q: input.query || input.q }, env);
    // Same shape mismatch already fixed for maps.view and communications.send:
    // pharmacyBridgeProvider (like every server/providers/*.js module) uses
    // providerUtils.js's providerResponse(), which nests the real fields
    // (cards, safetyNote, emergencyNote) inside body.data, not at body's own
    // top level. Confirmed live: a real pharmacy search's cards were only
    // reachable at outcome.data.data.cards, so the client's generic
    // "location-list" outcome card showed a raw nested JSON blob instead of
    // clean pharmacy listings.
    return { ...result.body, ...(result.body?.data || {}) };
  };
}

function verifyPharmacyFindOutcome({ result }) {
  const verified = result?.status === "completed" && result?.ok !== false && Array.isArray(result?.data?.cards);
  return { verified, method: "real_osm_place_search_with_local_fallback", reason: verified ? null : "pharmacy_search_incomplete" };
}

function createClinicFindExecutor({ env = process.env } = {}) {
  return async function execute({ input = {} }) {
    const result = await mobileClinicBridgeProvider.search({ location: input.location || input.city, q: input.query || input.q }, env);
    // See createPharmacyFindExecutor above -- same shape mismatch.
    return { ...result.body, ...(result.body?.data || {}) };
  };
}

function verifyClinicFindOutcome({ result }) {
  const verified = result?.status === "completed" && result?.ok !== false && Array.isArray(result?.data?.cards);
  return { verified, method: "real_osm_place_search_with_local_fallback", reason: verified ? null : "clinic_search_incomplete" };
}

module.exports = Object.freeze({ createPharmacyFindExecutor, verifyPharmacyFindOutcome, createClinicFindExecutor, verifyClinicFindOutcome });
