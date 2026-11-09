"use strict";

// Which of the places a search found is the one the person means.
// Found on 9 November 2026 (owner's test): "Show me Cairo on a map" opened Cairo, Illinois (a village of about 1,700 people), because the free place search lists a US village
// before the city of Cairo in Egypt even though it rates Egypt's Cairo far higher (importance 0.75 against 0.49). The same flaw sent "Cairo to Alexandria" to Illinois.
// When the person names a CITY, TOWN, STATE or COUNTRY (what the search calls a place or a boundary), the most important one with that name is the one meant; anything else (a street, a shop, a building)
// keeps the search's own order, because there its text match is the better guide. A person who wants the small one says so ("Cairo, Illinois"), and then the search only finds that one.

const PLACE_KINDS = new Set(["place", "boundary"]);
// a city, town or village is compared only with other settlements, and a state or country only with other regions: "Mombasa, Kenya" lists the country Kenya, which rates higher than the city, and must not win (found on the live site, 9 November 2026)
const SETTLEMENT = new Set(["city", "town", "village", "hamlet", "suburb", "municipality", "borough", "quarter", "neighbourhood", "neighborhood", "locality", "isolated_dwelling"]);
const kindOf = item => (SETTLEMENT.has(String(item?.addresstype || item?.type || "").toLowerCase()) ? "settlement" : "region");
const isPlace = item => PLACE_KINDS.has(String(item?.category || item?.class || "").toLowerCase());
const importance = item => (Number.isFinite(Number(item?.importance)) ? Number(item.importance) : 0);

// the same list, best first (a new array; the order of equals is kept)
function rankPlaces(list) {
  const items = Array.isArray(list) ? list.slice() : [];
  if (items.length < 2 || !isPlace(items[0])) return items;
  const kind = kindOf(items[0]);
  const places = items.filter(item => isPlace(item) && kindOf(item) === kind).map((item, index) => ({ item, index }));
  const others = items.filter(item => !(isPlace(item) && kindOf(item) === kind));
  places.sort((a, b) => importance(b.item) - importance(a.item) || a.index - b.index);
  return [...places.map(entry => entry.item), ...others];
}

const bestPlace = list => rankPlaces(list)[0] || null;

module.exports = Object.freeze({ rankPlaces, bestPlace, isPlace });
