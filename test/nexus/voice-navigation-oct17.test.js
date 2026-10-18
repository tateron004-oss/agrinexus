"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const navigation = require("../../public/kyro-navigation.js");
const { completeLogisticsTrackPlan } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");

const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

// Found by the owner's own testing and the logistics check: "take me to Sacramento" and "start navigation to the airport in Nairobi" were left to the voice model's map tool, which answers "I'm missing your starting point"
// (it cannot know where the person is); and "estimate the delivery time from Stockton to Fresno" got "the route details weren't accepted".

test("'start navigation to ...' is a request to be guided there, like 'take me to ...'", () => {
  assert.deepEqual(navigation.parseCommand("Start navigation to the airport in Nairobi."), { type: "go", destination: "the airport in Nairobi", mode: "drive" });
  assert.deepEqual(navigation.parseCommand("Start navigating to Sacramento"), { type: "go", destination: "Sacramento", mode: "drive" });
  assert.deepEqual(navigation.parseCommand("Take me to Sacramento."), { type: "go", destination: "Sacramento", mode: "drive" });
  assert.equal(navigation.parseCommand("Show me the route from Stockton to Sacramento"), null, "the route drawn on the map is the map tool's");
});

function spokenApi() {
  const source = app.slice(app.indexOf("const kyroNavigationKey = "), app.indexOf("async function handleKyroNavigationCommand("));
  const context = { window: { KyroNavigation: navigation }, kyroWithoutPoliteTail: text => String(text).replace(/[,;]?\s+(?:please|now|thanks)[.?!]*$/i, "") };
  vm.runInNewContext(`${source}\nthis.nav = kyroSpokenNavigation; this.key = kyroNavigationKey;`, context);
  return context;
}

test("the page takes a spoken navigation request itself, but not a request to open a screen or an ordinary sentence", () => {
  const api = spokenApi();
  for (const say of ["Take me to Sacramento.", "Navigate to Nairobi", "Start navigation to the airport in Nairobi.", "Give me directions to the market", "Where am I?", "Stop navigation", "Take me home please", "Give me directions from Stockton to Sacramento"]) assert.equal(api.nav(say), true, say);
  for (const say of ["Take me to the map.", "Take me to my documents", "Take me to the dashboard", "Open the map.", "Show me a map of California.", "What is the weather in Tokyo?", "Show me the route from Fresno to Oakland"]) assert.equal(api.nav(say), false, say);
  assert.equal(api.key("Take me to Sacramento."), "take me to sacramento");
});

test("the spoken route starts the guidance and cuts off the model, and the model's own map tool is not asked as well", () => {
  assert.match(app, /if \(trimmed && typeof kyroSpokenNavigation === "function" && kyroSpokenNavigation\(trimmed\)\) \{\s+if \(!heardAgain\) \{\s+try \{ kyroTakeOverTurn\(\); \} catch \{[^}]*\}\s+kyroPageSpeaksUntil = Date\.now\(\) \+ 40000;\s+kyroLastNavigationSaid = \{ key: kyroNavigationKey\(trimmed\), at: Date\.now\(\) \};\s+void handleKyroNavigationCommand\(trimmed, \{ source: "voice" \}\);/);
  assert.match(app, /if \(toolName === "nexus_maps_route" && kyroLastNavigationSaid\.key && kyroLastNavigationSaid\.key === kyroNavigationKey\(kyroWithoutPoliteTail\(command\)\)/);
  const spoken = app.indexOf("if (kyroHandleSpokenOpen(trimmed, {}))"); const nav = app.indexOf("typeof kyroSpokenNavigation === \"function\" && kyroSpokenNavigation(trimmed)");
  assert.ok(spoken > 0 && nav > spoken, "a request to open a screen is taken first");
});

test("'estimate the delivery time from A to B' is a shipment estimate between the two places", () => {
  const catalog = { applications: defaultApplicationManifests(), tools: [{ toolId: "logistics.track" }] };
  for (const say of ["Estimate the delivery time from Stockton to Fresno.", "Calculate the delivery time from Nairobi to Nakuru", "Track my shipment from Nairobi to Nakuru. How long will it take?"]) {
    const plan = completeLogisticsTrackPlan(say, catalog);
    assert.equal(plan?.steps[0].toolId, "logistics.track", say);
  }
  assert.deepEqual(completeLogisticsTrackPlan("Estimate the delivery time from Stockton to Fresno.", catalog).steps[0].input, { origin: "Stockton", destination: "Fresno" });
  assert.equal(completeLogisticsTrackPlan("Estimate the cost of maize.", catalog), null);
});

// The steps between two named places, read out, with no location read and nothing started (found by the owner asking for turn-by-turn directions from one named place to another).
test("'directions from A to B' (and its wordings) is a request for the steps between two named places; 'from here' is guidance from the person's own location", () => {
  for (const [say, from, to, mode] of [["Give me directions from Stockton to Sacramento.", "Stockton", "Sacramento", "drive"], ["Turn by turn directions from Fresno to Oakland", "Fresno", "Oakland", "drive"],
    ["What are the steps from Nairobi to Nakuru?", "Nairobi", "Nakuru", "drive"], ["How do I get from Stockton to Sacramento?", "Stockton", "Sacramento", "drive"], ["Walking directions from the library to the market", "the library", "the market", "walk"]])
    assert.deepEqual(navigation.parseCommand(say), { type: "between", from, to, mode }, say);
  assert.deepEqual(navigation.parseCommand("Give me directions from here to Sacramento"), { type: "go", destination: "Sacramento", mode: "drive" });
});

test("the steps between two places are found without reading the person's location: both places are searched, the route is planned, the first eight steps are read and the rest counted", async () => {
  const calls = [];
  const api = async body => {
    calls.push(body);
    if (body.action === "search") return { places: [body.query === "Sacramento" ? { label: "Sacramento, California", lat: 38.58, lng: -121.49 } : { label: "Stockton, California", lat: 37.96, lng: -121.29 }] };
    return { route: { distanceMeters: 78000, durationSeconds: 3500, destination: { label: "Sacramento", lat: 38.58, lng: -121.49 }, steps: Array.from({ length: 12 }, (_, i) => ({ instruction: i === 0 ? "Head north on Main Street" : `Turn right onto Road ${i}` })) } };
  };
  const navigator = navigation.createNavigator({ geolocation: { getCurrentPosition() { throw new Error("location must not be read"); }, watchPosition() { throw new Error("must not follow"); } }, api, speak() {}, storage: null });
  const reply = await navigator.handle("Give me directions from Stockton to Sacramento");
  assert.match(reply, /^From Stockton to Sacramento: 78 kilometers, about 58 minutes\. 1, Head north on Main Street\. 2, Turn right onto Road 1\./);
  assert.match(reply, /8, Turn right onto Road 7\. There are 4 more steps\. To be guided turn by turn from where you are, say "take me to Sacramento"\.$/);
  assert.deepEqual(calls.map(call => call.action), ["search", "search", "route"]);
  assert.ok(calls.slice(0, 2).every(call => call.near === undefined), "neither place is searched near the other: that finds a namesake next door instead of the far city");
  assert.deepEqual(calls[2].to, { lat: 38.58, lng: -121.49 }); assert.deepEqual(calls[2].from, { lat: 37.96, lng: -121.29 });
  assert.equal(navigator.active, false, "nothing is being followed");
  const missing = navigation.createNavigator({ geolocation: {}, api: async () => ({ places: [] }), speak() {}, storage: null });
  assert.equal(await missing.handle("Give me directions from Zzyzxville to Sacramento"), "I couldn't find Zzyzxville on the map.");
});
