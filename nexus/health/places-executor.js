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
    return { ...result.body };
  };
}

function verifyPharmacyFindOutcome({ result }) {
  const verified = result?.status === "completed" && result?.ok !== false && Array.isArray(result?.data?.cards);
  return { verified, method: "real_osm_place_search_with_local_fallback", reason: verified ? null : "pharmacy_search_incomplete" };
}

function createClinicFindExecutor({ env = process.env } = {}) {
  return async function execute({ input = {} }) {
    const result = await mobileClinicBridgeProvider.search({ location: input.location || input.city, q: input.query || input.q }, env);
    return { ...result.body };
  };
}

function verifyClinicFindOutcome({ result }) {
  const verified = result?.status === "completed" && result?.ok !== false && Array.isArray(result?.data?.cards);
  return { verified, method: "real_osm_place_search_with_local_fallback", reason: verified ? null : "clinic_search_incomplete" };
}

module.exports = Object.freeze({ createPharmacyFindExecutor, verifyPharmacyFindOutcome, createClinicFindExecutor, verifyClinicFindOutcome });
