"use strict";

// The one search both finders (pharmacyBridgeProvider, mobileClinicBridgeProvider) run: a place to look near is worked out first (placesLocation.js), the live OpenStreetMap lookup is
// run, and the local starter catalog is only a fallback that is never shown for a country other than the one asked about. Found by the phrase sweep: "Find a pharmacy near me" listed
// Stockton and Sacramento, California -- the catalog, used because no place was given.
const osmPlacesProvider = require("./osmPlacesProvider");
const { planPlaceSearch, countryNote } = require("./placesLocation");

const joinSentences = parts => parts.map(part => String(part || "").trim()).filter(Boolean).join(" ");

// kind: "pharmacy" | "clinic". makeCard(place, index, origin) builds a live card; catalogCards(text, plan) the (already country-filtered) starter-catalog cards.
async function searchNearby({ query = {}, env = process.env, kind, osmFilters, fallbackTerm, osmEnabled, makeCard, catalogCards, text = "", respond }) {
  const plan = planPlaceSearch(query, { kind });
  if (plan.mode === "ask") return respond(plan.question, { cards: [], needsLocation: true, question: plan.question });
  let lookedNear = plan.locationText || (plan.coords ? "your device location" : "");
  let mismatch = "";
  if (osmEnabled) {
    try {
      const { origin, places } = await osmPlacesProvider.findNearbyPlaces({ locationText: plan.locationText, coords: plan.coords, countryCode: plan.countryCode, osmFilters, limit: 8, env, fallbackTerm });
      lookedNear = origin.label || lookedNear;
      mismatch = countryNote(plan, origin);
      if (places.length) {
        return respond(joinSentences([`Found ${places.length} real ${kind} location(s) near ${origin.label} via OpenStreetMap.`, plan.note, mismatch]), {
          cards: places.map((place, index) => makeCard(place, index, origin)), searchMode: plan.mode, searchedNear: origin.label,
          ...(plan.note ? { locationNote: plan.note } : {}), ...(mismatch ? { countryNote: mismatch } : {})
        });
      }
    } catch {
      // Fall through to the local catalog.
    }
  }
  // With no place named the catalog is matched on the town that was searched, not on the words of the request.
  const townText = String(plan.locationText || "").split(",")[0].trim().toLowerCase();
  const cards = plan.mode === "device" ? [] : catalogCards(plan.mode === "named" ? text : townText, plan);
  if (!mismatch && plan.mode === "named" && plan.account) {
    const other = cards.find(card => card.country && card.country.toLowerCase() !== plan.account.name.toLowerCase());
    if (other) mismatch = plan.words.mismatch(other.country, plan.account.name);
  }
  const base = cards.length ? `Loaded ${cards.length} local ${kind} option(s).` : `I did not find a ${kind} near ${lookedNear || "there"} just now.`;
  return respond(joinSentences([base, plan.note, mismatch]), { cards, searchMode: plan.mode, ...(lookedNear ? { searchedNear: lookedNear } : {}),
    ...(plan.note ? { locationNote: plan.note } : {}), ...(mismatch ? { countryNote: mismatch } : {}) });
}

// Catalog entries carry the country they are in; with a country known (the account's, or the one named) the others are not offered.
function inExpectedCountry(entry, plan) {
  if (plan?.mode === "named") return true; // the person named the place: it is listed, with a note when it is in another country
  const expected = plan?.expectedCountry?.name;
  return !expected || !entry.country || entry.country.toLowerCase() === expected.toLowerCase();
}

module.exports = Object.freeze({ searchNearby, inExpectedCountry });
