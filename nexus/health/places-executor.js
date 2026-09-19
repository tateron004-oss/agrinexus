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

// The capability completion contracts (nexus/apps/capability-completion-contracts.js)
// ask for locations/source/selectedLocation (clinic) and result/source/
// safetyResponse (pharmacy). They are derived only from real search cards; an
// empty search adds none of them, so it can never be mistaken for a completed one.
const placeLine = card => [card.name, card.address && card.address !== "Address not listed in OpenStreetMap" ? card.address : "", card.city].filter(Boolean).join(", ");

function clinicEvidence(flat, input) {
  const cards = Array.isArray(flat?.cards) ? flat.cards : [];
  if (!cards.length) return {};
  const locations = cards.map(placeLine);
  return { locations, source: cards[0].source || "OpenStreetMap (live)", ...(input.selectClosest ? { selectedLocation: locations[0] } : {}) };
}

function pharmacyEvidence(flat) {
  const cards = Array.isArray(flat?.cards) ? flat.cards : [];
  if (!cards.length) return {};
  return { result: `Found ${cards.length} pharmacy location(s) near ${cards[0].city || "the requested area"}: ${cards.slice(0, 3).map(card => card.name).join("; ")}`,
    source: cards[0].source || "OpenStreetMap (live)",
    safetyResponse: "Medication decisions need pharmacist or prescribing-clinician review; Nexus does not confirm stock, prescribe, or change medication." };
}

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
    const flat = { ...result.body, ...(result.body?.data || {}) };
    return { ...flat, ...pharmacyEvidence(flat) };
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
    const flat = { ...result.body, ...(result.body?.data || {}) };
    return { ...flat, ...clinicEvidence(flat, input) };
  };
}

function verifyClinicFindOutcome({ result }) {
  const verified = result?.status === "completed" && result?.ok !== false && Array.isArray(result?.data?.cards);
  return { verified, method: "real_osm_place_search_with_local_fallback", reason: verified ? null : "clinic_search_incomplete" };
}

module.exports = Object.freeze({ createPharmacyFindExecutor, verifyPharmacyFindOutcome, createClinicFindExecutor, verifyClinicFindOutcome });
