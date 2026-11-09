"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { rankPlaces, bestPlace } = require("../../nexus/navigation/place-rank.js");

// 9 November 2026 (owner's testing): "show me Cairo on a map" opened Cairo, Illinois; a place said with a comma, or three places in one sentence, was answered "I need a start and an end".

// what the free place search listed for "Cairo" (live, 9 November 2026)
const CAIRO = [
  { category: "place", addresstype: "village", importance: 0.4947, lat: "37.0058", lon: "-89.1772", display_name: "Cairo, Alexander County, Illinois, United States" },
  { category: "place", addresstype: "town", importance: 0.4763, lat: "30.8773", lon: "-84.2079", display_name: "Cairo, Grady County, Georgia, United States" },
  { category: "boundary", addresstype: "city", importance: 0.7515, lat: "30.0444", lon: "31.2357", display_name: "القاهرة, مصر" },
  { category: "place", addresstype: "village", importance: 0.4343, lat: "42.2999", lon: "-73.9995", display_name: "Town of Cairo, Greene County, New York, United States" }
];

test("a named city is the most important one with that name, not the first the search lists", () => {
  assert.equal(bestPlace(CAIRO).display_name, "القاهرة, مصر");
  const ranked = rankPlaces(CAIRO);
  assert.equal(ranked.length, 4);
  assert.deepEqual(ranked.map(p => p.importance), [0.7515, 0.4947, 0.4763, 0.4343]);
  assert.equal(CAIRO[0].lat, "37.0058", "the list given is not changed");
});

test("a street, shop or building keeps the search's own order, and an empty or single list is safe", () => {
  const street = [
    { category: "highway", importance: 0.2, display_name: "12 Main Street, Stockton" },
    { category: "place", importance: 0.9, display_name: "Stockton" }
  ];
  assert.deepEqual(rankPlaces(street).map(p => p.display_name), ["12 Main Street, Stockton", "Stockton"]);
  assert.equal(bestPlace([]), null);
  assert.equal(bestPlace(null), null);
  assert.deepEqual(rankPlaces([CAIRO[0]]), [CAIRO[0]]);
  // equal importance keeps the order the search gave
  const tie = [{ category: "place", importance: 0.5, display_name: "A" }, { category: "place", importance: 0.5, display_name: "B" }];
  assert.deepEqual(rankPlaces(tie).map(p => p.display_name), ["A", "B"]);
});

test("the place search and the route lookup both use that rule", () => {
  const root = path.join(__dirname, "..", "..");
  assert.match(fs.readFileSync(path.join(root, "nexus", "navigation", "service.js"), "utf8"), /place-rank\.js"\)\.rankPlaces\(found\)/);
  const provider = fs.readFileSync(path.join(root, "server", "providers", "googleMapsProvider.js"), "utf8");
  assert.match(provider, /place-rank\.js"\)\.bestPlace\(payload\)/);
  assert.match(provider, /url\.searchParams\.set\("limit", "5"\)/);
});

// the page's own wording rules, taken from the page source
function pageRules() {
  const app = fs.readFileSync(path.join(__dirname, "..", "..", "public", "app.js"), "utf8");
  const line = name => { const m = app.match(new RegExp(`^const ${name} = .*;$`, "m")); assert.ok(m, name); return m[0]; };
  const fn = name => { const start = app.indexOf(`function ${name}(`); const end = app.indexOf("\n}\n", start); assert.ok(start >= 0, name); return app.slice(start, end + 2); };
  const code = ["KYRO_OPEN_VERB", "KYRO_OPEN_LEAD", "KYRO_MISHEARD_OPEN", "KYRO_OPEN_MAP_NOT", "KYRO_MAP_PLACE_ON", "KYRO_MAP_PLACE_OF", "KYRO_MAP_PLACE_NAMED", "KYRO_MAP_NOT_A_PLACE"].map(line).join("\n")
    + "\n" + ["kyroHeardOpenVerb", "kyroWithoutPoliteTail", "kyroMapPlace"].map(fn).join("\n") + "\nreturn { kyroMapPlace };";
  return new Function(code)();
}

test("by voice or typed, a place on the map is a map: with a comma, with a list, or asked with 'where is' or 'find'", () => {
  const { kyroMapPlace } = pageRules();
  const cases = {
    "Show me Cairo on a map.": "Cairo",
    "Show me Mombassa on a map": "Mombassa",
    "Show me Stockton on a map.": "Stockton",
    "Show me Cairo, Egypt on a map.": "Cairo, Egypt",
    "Show me Mombasa, Kenya on the map": "Mombasa, Kenya",
    "Where is Cairo on the map?": "Cairo",
    "Find Nakuru on a map": "Nakuru",
    "Show me Stockton, Cairo or Mombasa on a map.": "Stockton, Cairo or Mombasa",
    "Show me a map of Cairo.": "Cairo",
    "Open the Stockton map": "Stockton"
  };
  for (const [said, place] of Object.entries(cases)) assert.equal(kyroMapPlace(said), place, said);
  // not places: routes, directions, nearby things, the person's own things, and plain questions
  for (const no of ["Give me directions from Stockton to Sacramento.", "Show me the route from Cairo to Alexandria on the map", "Show me clinics near me on the map", "Show me my clients on the map",
    "Where is my order on the map", "Find a pharmacy on the map", "Show me the map", "Show me a video of Cairo"]) assert.equal(kyroMapPlace(no), "", no);
});
