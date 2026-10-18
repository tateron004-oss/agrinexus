"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const grab = re => app.match(re)[0];

// Found by the owner's own voice test: "open the US map", "show me California" and "show me the city of Stockton on the map" opened nothing. The page opened the map itself only when typed, and only for a country or one of four
// Kenyan cities; said aloud it was left to the voice model's map tool, which wants a start and a destination.
function mapApi() {
  const source = [grab(/const KYRO_OPEN_LEAD = [^\n]*\n/), grab(/const KYRO_OPEN_VERB = [^\n]*\n/), grab(/const KYRO_OPEN_MAP = [^\n]*\n/), grab(/const KYRO_OPEN_MAP_NOT = [^\n]*\n/),
    app.slice(app.indexOf("function kyroOpenMapRequest("), app.indexOf("const KYRO_MAP_PLACE_ON")),
    app.slice(app.indexOf("const KYRO_MAP_PLACE_ON"), app.indexOf("const KYRO_US_STATES")),
    app.slice(app.indexOf("function kyroWithoutPoliteTail("), app.indexOf("const KYRO_OPEN_LEAD"))].join("\n");
  const context = {};
  vm.runInNewContext(`${source}\nthis.place = kyroMapPlace; this.open = kyroOpenMapRequest;`, context);
  return context;
}

test("a city, a state or a place with its state, asked for on the map in any of the usual ways, is named", () => {
  const api = mapApi();
  for (const [say, place] of [["Show me the city of Stockton on the map.", "Stockton"], ["Show me California on the map.", "California"], ["Show me a map of California.", "California"], ["Open the Stockton map.", "Stockton"],
    ["Open a map of Stockton, California", "Stockton, California"], ["Show me the state of Texas on the map", "Texas"], ["Can you show me Nakuru on the map please?", "Nakuru"]]) assert.equal(api.place(say), place, say);
});

test("the plain map, a kind of map, a route, something nearby and the person's own things name no place", () => {
  const api = mapApi();
  for (const say of ["Open the map.", "Open the full map.", "Open the world map", "Show me my clients on the map.", "Show me the route from Nairobi to Mombasa on the map", "Show me clinics near me on the map", "How far is Nakuru from Nairobi?"]) assert.equal(api.place(say), "", say);
});

test("the page opens the map for a spoken request and for a place, and the model's own map tool is not asked as well", () => {
  assert.match(app, /const mapPlace = kyroMapPlace\(said\);\s+if \(kyroOpenMapRequest\(said\) \|\| mapPlace\) \{\s+if \(!options\.typed\) \{ try \{ kyroTakeOverTurn\(\); \}/);
  assert.match(app, /if \(!country && mapPlace\) \{ void kyroOpenMapAtPlace\(mapPlace, said, lang\); return true; \}/);
  assert.match(app, /if \(toolName === "nexus_maps_route" && kyroPageJustOpened\(command\) && \(kyroOpenMapRequest\(kyroWithoutPoliteTail\(command\)\) \|\| kyroMapPlace\(command\)\)\) \{\s+return \{ ok: true, status: "completed", response: "Kyro already opened the map and said so\. Say nothing more\."/);
});

test("a place is found by the server's place search, centred at state size for a US state and city size otherwise, and a place that cannot be found is said plainly", () => {
  const fn = app.slice(app.indexOf("async function kyroOpenMapAtPlace("), app.indexOf("\n}\n", app.indexOf("async function kyroOpenMapAtPlace(")) + 3);
  assert.match(fn, /request\("\/api\/nexus\/runtime\/navigation", \{ method: "POST", body: \{ action: "search", query: place \} \}\)/);
  assert.match(fn, /KYRO_US_STATES\.has\(String\(place\)\.toLowerCase\(\)\) \? 6 : 11/);
  assert.match(fn, /I could not find \$\{name\} on the map, so here is the map\./);
  assert.match(fn, /Here is \$\{name\} on the map\. You can zoom and drag it\./);
  const states = app.match(/const KYRO_US_STATES = new Set\(\[([^\]]*)\]\)/)[1].split(",").length;
  assert.equal(states, 50);
});
