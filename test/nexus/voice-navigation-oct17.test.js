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
  assert.equal(navigation.parseCommand("Directions from Stockton to Sacramento"), null, "a route between two named places is the route tool's");
});

function spokenApi() {
  const source = app.slice(app.indexOf("const kyroNavigationKey = "), app.indexOf("async function handleKyroNavigationCommand("));
  const context = { window: { KyroNavigation: navigation }, kyroWithoutPoliteTail: text => String(text).replace(/[,;]?\s+(?:please|now|thanks)[.?!]*$/i, "") };
  vm.runInNewContext(`${source}\nthis.nav = kyroSpokenNavigation; this.key = kyroNavigationKey;`, context);
  return context;
}

test("the page takes a spoken navigation request itself, but not a request to open a screen or an ordinary sentence", () => {
  const api = spokenApi();
  for (const say of ["Take me to Sacramento.", "Navigate to Nairobi", "Start navigation to the airport in Nairobi.", "Give me directions to the market", "Where am I?", "Stop navigation", "Take me home please"]) assert.equal(api.nav(say), true, say);
  for (const say of ["Take me to the map.", "Take me to my documents", "Take me to the dashboard", "Open the map.", "Show me a map of California.", "What is the weather in Tokyo?", "Directions from Stockton to Sacramento", "Show me the route from Fresno to Oakland"]) assert.equal(api.nav(say), false, say);
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
