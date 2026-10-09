"use strict";

// Where a "find a pharmacy / clinic" search should look. Found by the phrase sweep: "Find a pharmacy near me" listed places in Stockton and Sacramento, California (the starter catalog,
// used because no place was given) and "Find a clinic near Kisumu" never reached the finder at all. A named place is looked up as named; "near me" with no device location uses the
// town the person told Kyro, else the capital of the country on their account, and SAYS so; with nothing to go on the person is asked which town. The browser's location is only
// ever used when the caller was handed coordinates by the browser (with its permission): nothing here asks for them.
const clean = value => String(value ?? "").replace(/\s+/g, " ").trim();

// name, ISO code (Nominatim countrycodes), the city to look near when only the country is known, other spellings
const COUNTRIES = Object.freeze([
  ["Kenya", "ke", "Nairobi", []], ["Nigeria", "ng", "Lagos", []], ["Uganda", "ug", "Kampala", []], ["Tanzania", "tz", "Dar es Salaam", ["united republic of tanzania"]],
  ["Ghana", "gh", "Accra", []], ["Rwanda", "rw", "Kigali", []], ["Ethiopia", "et", "Addis Ababa", []], ["Zambia", "zm", "Lusaka", []], ["Malawi", "mw", "Lilongwe", []],
  ["Egypt", "eg", "Cairo", []], ["South Africa", "za", "Johannesburg", []], ["Democratic Republic of the Congo", "cd", "Kinshasa", ["drc", "dr congo", "congo-kinshasa", "congo (kinshasa)", "democratic republic of congo"]],
  ["United States", "us", "", ["usa", "united states of america", "u.s.", "us"]], ["United Kingdom", "gb", "", ["uk", "great britain", "england"]]
].map(([name, code, capital, aliases]) => Object.freeze({ name, code, capital, names: [name.toLowerCase(), ...aliases] })));

function countryEntry(value) {
  const text = clean(value).toLowerCase().replace(/^the\s+/, "");
  if (!text) return null;
  return COUNTRIES.find(country => country.names.includes(text)) || null;
}
// A country named inside a longer place text ("Kisumu, Kenya", "Nairobi Kenya")
function countryNamedIn(value) {
  const text = clean(value).toLowerCase();
  if (!text) return null;
  const parts = text.split(/\s*,\s*/);
  const last = countryEntry(parts[parts.length - 1]);
  if (last) return last;
  return COUNTRIES.find(country => country.name !== "United States" && country.name !== "United Kingdom" && new RegExp(`\\b${country.names[0]}\\b`).test(text)) || null;
}

const UNNAMED_PLACE = /^(?:me|my|my location|my place|my area|my town|my village|here|this area|this place|this town|current location|where i am|where i'm at|nearby|around here|the area|home|hapa|mimi|nilipo|nyumbani|kwangu|karibu|karibu nami|ninapoishi)$/i;
const NOT_A_PLACE_START = /^(?:the|a|an|my|our|your|this|that|these|those|me|us|here|there|where|which|what|its|his|her|their|some|any)\b/i;
const PLACE_WORD = "[\\p{L}][\\p{L}\\p{M} .'’-]*?";
const PLACE_TAIL = "(?=\\s+(?:and|then|with|that|which|who|open|today|now|please|na|au|leo|sasa)\\b|[,.;!?]|$)";

// The place a person named in "find a pharmacy near Kisumu", "clinic in Nakuru", "duka la dawa karibu na Kisumu"; "" when none was named ("near me", "nearby", "nearest").
function namedPlaceIn(text) {
  const sentence = clean(text).replace(/[.!?]+$/, "");
  if (!sentence) return "";
  const patterns = [
    new RegExp(`\\bkaribu\\s+na\\s+(${PLACE_WORD})${PLACE_TAIL}`, "iu"),
    new RegExp(`\\b(?:near|around|close to|next to|in the town of|in|at)\\s+(${PLACE_WORD})${PLACE_TAIL}`, "iu"),
    new RegExp(`\\bkatika\\s+(${PLACE_WORD})${PLACE_TAIL}`, "iu"),
    new RegExp(`\\bhuko\\s+(${PLACE_WORD})${PLACE_TAIL}`, "iu")
  ];
  for (const pattern of patterns) {
    const found = clean(pattern.exec(sentence)?.[1]);
    if (!found) continue;
    if (UNNAMED_PLACE.test(found) || NOT_A_PLACE_START.test(found)) return "";
    if (found.split(" ").length > 5) continue;
    return found;
  }
  return "";
}

const isUnnamed = value => !clean(value) || UNNAMED_PLACE.test(clean(value)) || /^current location$/i.test(clean(value));

const WORDS = {
  en: {
    ask: kind => `Which town should I look in? I don't know where you are yet. Say it like "a ${kind} near Kisumu", or tell me "I live in <your town>".`,
    country: (near, country) => `I don't know exactly where you are, so I looked near ${near}; tell me your town for better results.`,
    saved: town => `I looked near ${town}, the town you told me. Tell me if you are somewhere else.`,
    mismatch: (found, expected) => `Note: these places are in ${found}, not ${expected}.`,
    mismatchNamed: found => `Note: these places are in ${found}.`
  },
  sw: {
    ask: kind => `Nitafute katika mji gani? Bado sijui ulipo. Sema kwa mfano "${kind === "clinic" ? "kliniki" : "duka la dawa"} karibu na Kisumu", au niambie "ninaishi <mji wako>".`,
    country: near => `Sijui ulipo hasa, kwa hiyo nimetafuta karibu na ${near}; niambie mji wako upate matokeo bora.`,
    saved: town => `Nimetafuta karibu na ${town}, mji uliniambia. Niambie ukiwa mahali pengine.`,
    mismatch: (found, expected) => `Kumbuka: maeneo haya yako ${found}, si ${expected}.`,
    mismatchNamed: found => `Kumbuka: maeneo haya yako ${found}.`
  }
};
const wordsFor = language => WORDS[String(language || "").toLowerCase().startsWith("sw") ? "sw" : "en"];

// What to search near, from what was asked and what is known about the person. Always one of:
//   named          the place they said
//   device         coordinates the browser handed over (with the person's permission)
//   saved-town     "near me" and they once told Kyro their town
//   country-default "near me" and only their country is known: the capital, said out loud
//   ask            nothing to go on: the caller asks which town (never a list from some other country)
function planPlaceSearch(query = {}, { kind = "pharmacy" } = {}) {
  const words = wordsFor(query.language);
  const account = countryEntry(query.country);
  const named = isUnnamed(query.location || query.city) ? "" : clean(query.location || query.city);
  const lat = Number(query.lat ?? query.latitude); const lon = Number(query.lon ?? query.lng ?? query.longitude);
  if (named) {
    const asked = countryNamedIn(named);
    return { mode: "named", locationText: named, countryCode: (asked || account)?.code || "", expectedCountry: asked || account, account, note: "", words };
  }
  if (query.lat !== undefined || query.latitude !== undefined) {
    if (Number.isFinite(lat) && Number.isFinite(lon) && Math.abs(lat) <= 90 && Math.abs(lon) <= 180) return { mode: "device", coords: { lat, lon }, locationText: "", countryCode: "", expectedCountry: account, account, note: "", words };
  }
  const town = clean(query.savedTown);
  if (town) {
    const near = account ? `${town}, ${account.name}` : town;
    return { mode: "saved-town", locationText: near, countryCode: account?.code || "", expectedCountry: account, account, note: words.saved(town), words };
  }
  if (account?.capital) {
    const near = `${account.capital}, ${account.name}`;
    return { mode: "country-default", locationText: near, countryCode: account.code, expectedCountry: account, account, note: words.country(near), words };
  }
  return { mode: "ask", locationText: "", countryCode: "", expectedCountry: account, account, note: "", question: words.ask(kind), words };
}

// The country a geocoded place is in: the code Nominatim gave, else the last part of its label ("Kisumu, Kenya").
function originCountry(origin) {
  const byCode = String(origin?.countryCode || "").toLowerCase();
  const entry = COUNTRIES.find(country => country.code === byCode) || countryEntry(origin?.country) || countryNamedIn(String(origin?.label || "").split(/\s*,\s*/).slice(-1)[0]);
  return { code: byCode || entry?.code || "", name: clean(origin?.country) || entry?.name || "" };
}

// Said whenever the places found are in a different country from the one asked about (or the account's): never a silent list from somewhere else.
function countryNote(plan, origin) {
  const found = originCountry(origin);
  const expected = plan?.expectedCountry;
  if (!found.code && !found.name) return "";
  if (expected) {
    if ((found.code && found.code === expected.code) || (!found.code && found.name.toLowerCase() === expected.name.toLowerCase())) return "";
    return plan.words.mismatch(found.name || found.code.toUpperCase(), expected.name);
  }
  return "";
}

// "Find a pharmacy near me", "Find a clinic near Kisumu", "Where is the nearest hospital?", "Tafuta duka la dawa karibu na Kisumu": { kind: "pharmacy" | "clinic", place, nearest } or null when it
// is some other sentence (a question about what a pharmacy is, medicine safety with sources, clinic stock or jobs, a mobile clinic, which has its own reader).
const NEARBY_KIND = [
  ["pharmacy", /\b(?:pharmacy|pharmacies|chemist|chemists|drug ?store|duka la dawa|maduka ya dawa|famasia)\b/i],
  ["clinic", /\b(?:clinic|clinics|hospital|hospitals|health ?cent(?:re|er)s?|dispensary|dispensaries|kliniki|zahanati|hospitali|kituo cha afya)\b/i]
];
const NEARBY_VERB = /\b(?:find|search|show|locate|look(?:ing)? for|where(?:'s| is| are)?|get me|take me to|need|want|tafuta|nionyeshe|onyesha|wapi|nipe|ninahitaji|nataka)\b/i;
const NEARBY_CUE = /\b(?:near ?by|nearest|closest|near me|karibu|around here|near)\b/i;
function parseNearbyPlacesRequest(text) {
  const goal = clean(text);
  if (!goal || goal.length > 200 || /\bmobile\s+clinic\b/i.test(goal) || !NEARBY_VERB.test(goal) || /\b(?:safety|sources?|medication|metformin|stock|jobs?|vacanc\w*|price|cost)\b/i.test(goal)) return null;
  const kind = NEARBY_KIND.find(([, pattern]) => pattern.test(goal))?.[0];
  if (!kind) return null;
  const place = namedPlaceIn(goal);
  if (!place && !NEARBY_CUE.test(goal)) return null;
  return { kind, place, nearest: /\b(?:nearest|closest)\b/i.test(goal) };
}

module.exports = Object.freeze({ parseNearbyPlacesRequest, COUNTRIES, countryEntry, countryNamedIn, namedPlaceIn, isUnnamed, planPlaceSearch, originCountry, countryNote, wordsFor });
