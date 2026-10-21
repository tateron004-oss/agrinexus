"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { completeRemainingWorkspacePlan } = require("../../nexus/brain/planner.js");
const { readRepeatRequest } = require("../../nexus/reminders/repeat-phrase.js");
const mapsProvider = require("../../server/providers/googleMapsProvider.js");

// Two things found by the owner's list: (1) a date inside a repeating reminder's task ("every day to call about the 15 October meeting") was cut out of the task;
// (2) a typed route with stops ("from Nairobi to Nakuru via Naivasha") got no answer, and the spoken one said a setup was missing when the free map service had only been busy.

test("a repeating reminder keeps a date that belongs to its task", () => {
  const read = text => readRepeatRequest(text);
  assert.equal(read("Remind me every day to call about the 15 October meeting").task, "call about the 15 October meeting");
  assert.match(read("Remind me every Monday to confirm the March 3rd delivery").task, /March 3rd delivery/);
  // the schedule is still read as the schedule
  assert.equal(read("Remind me every day to take my medicine").task, "take my medicine");
});

const catalog = { tools: [{ toolId: "maps.view" }], applications: [{ applicationId: "maps" }] };
const routeInput = text => completeRemainingWorkspacePlan(text, catalog)?.steps?.[0]?.input;

test("a typed route names its stops: via, through, and stopping at", () => {
  const one = routeInput("Show a route from Nairobi to Nakuru via Naivasha.");
  assert.equal(one.origin, "Nairobi"); assert.equal(one.destination, "Nakuru"); assert.deepEqual(one.waypoints, ["Naivasha"]);
  const two = routeInput("Directions from Nairobi to Kisumu stopping at Nakuru and Kericho.");
  assert.equal(two.destination, "Kisumu"); assert.deepEqual(two.waypoints, ["Nakuru", "Kericho"]);
  const three = routeInput("Show a route from Nairobi to Kisumu, through Naivasha, Nakuru and Kericho by 5pm.");
  assert.equal(three.destination, "Kisumu"); assert.deepEqual(three.waypoints, ["Naivasha", "Nakuru", "Kericho"]);
  const plain = routeInput("Show a route from Nairobi to Nakuru.");
  assert.equal(plain.destination, "Nakuru"); assert.equal(plain.waypoints, undefined);
});

test("a route the free map service cannot answer is not called a missing setup: it names the place, or says the service did not answer", async () => {
  const off = { NEXUS_MAPS_ENABLED: "true", NEXUS_MAPS_GEOCODE_GAP_MS: "0", NEXUS_MAPS_GEOCODE_RETRY_MS: "0" };
  const notFound = await mapsProvider.route({ origin: "Nairobi", destination: "Zzyzxville", waypoints: ["Naivasha"] }, { ...off, NEXUS_MAPS_FETCH_IMPL: async () => ({ ok: true, text: async () => "[]" }) });
  assert.notEqual(notFound.body.status, "completed");
  assert.doesNotMatch(JSON.stringify(notFound.body), /API key is missing|setup is missing/i);
  assert.match(JSON.stringify(notFound.body), /could not find/i);
  const busy = await mapsProvider.route({ origin: "Nairobi", destination: "Nakuru", waypoints: ["Naivasha"] }, { ...off, NEXUS_MAPS_FETCH_IMPL: async () => ({ ok: false, status: 429, text: async () => "slow down" }) });
  assert.doesNotMatch(JSON.stringify(busy.body), /API key is missing|setup is missing/i);
  assert.match(JSON.stringify(busy.body), /did not answer/i);
  assert.ok(busy.body.data?.routeUrl, "the map link is still given");
});

test("a route with stops is worked out in order from one place at a time", async () => {
  const asked = [];
  const coordinates = { nairobi: [36.82, -1.29], naivasha: [36.43, -0.72], nakuru: [36.07, -0.3] };
  const fetchImpl = async url => {
    const text = String(url);
    if (/nominatim/.test(text)) {
      const q = new URL(text).searchParams.get("q").toLowerCase();
      asked.push(q);
      const [lon, lat] = coordinates[q];
      return { ok: true, text: async () => JSON.stringify([{ lat: String(lat), lon: String(lon), display_name: q }]) };
    }
    return { ok: true, text: async () => JSON.stringify({ code: "Ok", routes: [{ distance: 157600, duration: 7000, geometry: { coordinates: [[36.82, -1.29], [36.07, -0.3]] } }] }) };
  };
  const result = await mapsProvider.publicOsmRoute("Nairobi", "Nakuru", "https://example.test/link", { NEXUS_MAPS_FETCH_IMPL: fetchImpl }, ["Naivasha"]);
  assert.deepEqual(asked, ["nairobi", "naivasha", "nakuru"]);
  assert.equal(result.body.status, "completed");
});

test("a routing service that is busy once and then answers still gives the route (one more try), and one that never answers is said plainly", async () => {
  const geocode = text => ({ ok: true, text: async () => JSON.stringify([{ lat: "-1.29", lon: "36.82", display_name: text }]) });
  let osrmCalls = 0;
  const flaky = async url => {
    if (/nominatim/.test(String(url))) return geocode("place");
    osrmCalls += 1;
    if (osrmCalls === 1) return { ok: false, status: 429, text: async () => "too many requests" };
    return { ok: true, text: async () => JSON.stringify({ code: "Ok", routes: [{ distance: 157600, duration: 7000, geometry: { coordinates: [[36.82, -1.29], [36.07, -0.3]] } }] }) };
  };
  const env = { NEXUS_MAPS_ENABLED: "true", NEXUS_MAPS_GEOCODE_GAP_MS: "0", NEXUS_MAPS_GEOCODE_RETRY_MS: "0" };
  const ok = await mapsProvider.route({ origin: "Nairobi", destination: "Nakuru", waypoints: ["Naivasha"] }, { ...env, NEXUS_MAPS_FETCH_IMPL: flaky });
  assert.equal(ok.body.status, "completed"); assert.equal(osrmCalls, 2);
  const never = await mapsProvider.route({ origin: "Nairobi", destination: "Nakuru" }, { ...env, NEXUS_MAPS_FETCH_IMPL: async url => (/nominatim/.test(String(url)) ? geocode("place") : { ok: false, status: 503, text: async () => "down" }) });
  assert.notEqual(never.body.status, "completed"); assert.match(JSON.stringify(never.body), /did not answer/i);
});
