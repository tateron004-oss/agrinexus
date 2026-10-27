"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const trips = require("../../public/kyro-trip-topics.js");
const itinerary = require("../../nexus/trips/itinerary.js");
const { createNavigationService, greatCircle } = require("../../nexus/navigation/service.js");
const mapsProvider = require("../../server/providers/googleMapsProvider.js");
const { OpenAiPlanningModel } = require("../../nexus/brain/openai-planning-model.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const { fakeMemory } = require("./farmwork-fake.js");

// Found on 26 October 2026: a friend asked Kyro about "travel arrangements to Africa". Kyro talked, but showed no itinerary and no document; the voice model said "I can't show an itinerary yet because there's no saved trip", and the map showed the whole continent, not a route.
// The owner's rule: Kyro has to show lists and documents, and the map has to show the route, whatever the question. He then asked for the same for a travel agent who wants to show a client a SIMULATED itinerary for anywhere.
// A request for a trip is now taken by the page, written as a document (with a Download button) that says it is an illustration, and the route can be drawn on the map, with a straight line where there is no road.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

test("a request for a trip itinerary is taken, with its place, days and people; a region is asked about; an order, a saved trip or a question about something else is left alone", () => {
  const take = {
    "Plan a 7 day trip to Kenya.": { destination: "Kenya", days: 7 }, "Make an itinerary for a week in Kenya.": { destination: "Kenya", days: 7 }, "Make me a sample itinerary for Paris for 5 days.": { destination: "Paris", days: 5 },
    "I am traveling to Nairobi from Atlanta next month. Help me with my travel arrangements.": { destination: "Nairobi", origin: "Atlanta" }, "What are the travel arrangements for a trip from Atlanta to Nairobi?": { destination: "Nairobi", origin: "Atlanta" },
    "Plan a honeymoon in Bali for two people.": { destination: "Bali", travelers: 2, style: "honeymoon" }, "Show me a travel plan for Japan for four people.": { destination: "Japan", travelers: 4 },
    "Build a 10 day trip to Italy from Chicago via Rome and Florence.": { destination: "Italy", origin: "Chicago", days: 10, stops: ["Rome", "Florence"] }, "Create a luxury safari itinerary in Tanzania.": { destination: "Tanzania", style: "luxury" },
    "Give me a 3 day itinerary in New York City.": { destination: "New York City", days: 3 }, "I want to show my client a trip to Greece.": { destination: "Greece" }, "Plan a 7 day trip to Kenya from Atlanta and show the route on the map": { destination: "Kenya", origin: "Atlanta", wantsMap: true }
  };
  for (const [say, want] of Object.entries(take)) { const got = trips.tripRequest(say); assert.ok(got && !got.needsPlace, say); for (const [key, value] of Object.entries(want)) assert.deepEqual(got[key], value, `${say}: ${key}`); }
  for (const say of ["Plan a trip to Africa.", "Can you show me my travel itinerary to Africa?", "I am traveling to Africa next month. Can you help me with my travel arrangements?", "Make an itinerary for Europe."]) assert.equal(trips.tripRequest(say)?.needsPlace, true, say);
  for (const say of ["Book me a flight to Nairobi.", "Open my Kenya trip itinerary.", "Remind me about my trip tomorrow.", "Cancel my trip to Kenya.", "What is the weather in Nairobi?", "Show me the route from Atlanta to Nairobi.", "Log my business trip expenses.",
    "I want to hurt myself and I am going on a trip.", "Play some music", "How do I get a passport?", "Plan my farm planting schedule.", "Tell me about Kenya."]) assert.equal(trips.tripRequest(say), null, say);
});

test("'show the route on the map' is a follow-up only when it names no two places (the direct route request is the maps' own)", () => {
  for (const say of ["Show me the route.", "Show it on the map.", "Show the trip on the map.", "Show my route on the map"]) assert.equal(trips.wantsTripRoute(say), true, say);
  for (const say of ["Show me the route from Atlanta to Nairobi.", "Play some music", "Show my notes"]) assert.equal(trips.wantsTripRoute(say), false, say);
});

test("nothing Kyro is already known to say, or already answers in another guide, is taken as a trip", () => {
  for (const phrase of require("./fixtures/verified-say-phrases.json").phrases) assert.equal(trips.tripRequest(phrase), null, phrase);
  for (const name of ["safety-guide", "special-ed-guide", "reentry-guide", "us-community-support", "parents-guide", "chronic-conditions", "womens-health", "church-guide", "athlete-guide", "money-guide"]) {
    const guide = require(`../../nexus/knowledge/${name}.js`);
    for (const list of Object.values(guide.PHRASES || {})) for (const phrase of (Array.isArray(list) ? list : [])) assert.equal(trips.tripRequest(phrase), null, `${name}: ${phrase}`);
  }
});

const days = count => Array.from({ length: count }, (_, index) => ({ day: index + 1, title: `Day ${index + 1} title`, morning: "A walk in the old town.", afternoon: "Lunch at a local market.", evening: "Dinner with live music." }));

test("the model's answer is checked: usable days are kept (cut to the days asked for, no markup), an answer with too few days or no JSON is not used, and the document says it is an illustration", () => {
  const good = JSON.stringify({ overview: "A relaxed week.", days: days(9), tips: ["Bring a hat.", "<b>Carry water.</b>"] });
  const parsed = itinerary.parseTripAnswer(`Here you go:\n${good}`, 7);
  assert.equal(parsed.days.length, 7);
  assert.deepEqual(parsed.days.map(row => row.day), [1, 2, 3, 4, 5, 6, 7]);
  assert.equal(parsed.tips[1], "bCarry water./b");
  assert.equal(itinerary.parseTripAnswer("I cannot do that", 7), null);
  assert.equal(itinerary.parseTripAnswer(JSON.stringify({ days: days(2) }), 7), null, "two days is not a week");
  assert.equal(itinerary.parseTripAnswer(JSON.stringify({ days: "none" }), 7), null);
  const request = { destination: "Kenya", origin: "Atlanta", stops: ["Nairobi"], days: 7, travelers: 2, style: "family" };
  const doc = itinerary.tripDocument(request, parsed, { now: new Date("2026-10-26T12:00:00Z") });
  assert.equal(doc.format, "docx");
  assert.match(doc.title, /^Sample itinerary: 7 days in Kenya$/);
  assert.match(doc.content, /^# SAMPLE ITINERARY \(SIMULATED\)\nSample itinerary: 7 days in Kenya\n\nReminder for the travel agent: the day-by-day ideas were written by an AI from general knowledge and have not been checked against official or local sources\. Please read them, and check anything that matters, before you show this to a client\.\n\nThis is an illustration made by Kyro/, "the reminder is the first thing after the title, ahead of everything else");
  assert.equal(doc.content.split(itinerary.REMINDER).length, 2, "said once");
  assert.match(doc.content, /Nothing is reserved\. No prices, flights, schedules, opening times or availability are shown or checked\./);
  assert.match(doc.content, /- Route on the map: Atlanta → Nairobi → Kenya \(say "show the route on the map"\)/);
  assert.match(doc.content, /## Day 7: Day 7 title/);
  assert.match(doc.content, /travel\.state\.gov/);
  assert.match(doc.content, /Made with Kyro on 2026-10-26/);
  assert.doesNotMatch(doc.content, /\$\d|\bUSD\b|\bper night\b/i);
  const outline = itinerary.tripDocument({ destination: "Paris", days: 4 }, itinerary.outlineContent({ destination: "Paris", days: 4 }), { outline: true });
  assert.match(outline.content, /could not be written this time, so this is an outline for you to fill in/);
  assert.match(outline.content, /\(add a morning activity\)/);
  const goal = itinerary.tripGoal(request);
  assert.match(goal, /exactly 7 days/); assert.match(goal, /Do NOT state any price/); assert.match(goal, /Atlanta/);
});

test("the AI model client takes its own instructions and a longer answer for this one job, within limits", async () => {
  const seen = [];
  const model = new OpenAiPlanningModel({ apiKey: "test", fetchFn: async (url, init) => { seen.push(JSON.parse(init.body)); return { ok: true, json: async () => ({ output_text: "{}", usage: {} }) }; } });
  await model.respond({ goal: "x", instructions: "Answer only with JSON.", maxOutputTokens: 3000 });
  await model.respond({ goal: "x", maxOutputTokens: 999999 });
  await model.respond({ goal: "x" });
  assert.equal(seen[0].instructions, "Answer only with JSON."); assert.equal(seen[0].max_output_tokens, 3000);
  assert.equal(seen[1].max_output_tokens, 3200, "never more than the ceiling");
  assert.match(seen[2].instructions, /farmers/); assert.equal(seen[2].max_output_tokens, 700, "everything else as before");
});

function planner(respond) {
  const tools = [{ tool_id: "documents.create", domain: "documents", description: "", risk_tier: "low", confirmation_required: false }, { tool_id: "lists.create", domain: "lists", description: "", risk_tier: "low", confirmation_required: false }];
  return new OpenEndedPlanner({ model: { plan: async () => { throw new Error("the AI model must not plan"); }, respond }, tools: { list: async () => tools }, applications: { list: () => defaultApplicationManifests() }, memory: Object.assign(fakeMemory(), { search: async () => [] }) });
}
const ask = (p, text, context = { timeZone: "America/Chicago" }) => p.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context });

test("through the planner: a trip request becomes a saved document that is shown (docx, reopened); the model failing or answering badly still gives an outline document; a region is asked about; the spoken-only route leaves it to the page", async () => {
  const withDays = planner(async () => JSON.stringify({ overview: "A relaxed week.", days: days(7), tips: ["Bring a hat."] }));
  const plan = await ask(withDays, "Plan a 7 day trip to Kenya from Atlanta.");
  assert.equal(plan.knowledge, "trip-itinerary"); assert.equal(plan.application, "documents");
  assert.equal(plan.steps.length, 1); assert.equal(plan.steps[0].toolId, "documents.create");
  assert.equal(plan.steps[0].input.format, "docx"); assert.equal(plan.steps[0].input.reopenAfterSave, true);
  assert.match(plan.steps[0].input.content, /Dinner with live music/); assert.doesNotMatch(plan.steps[0].input.content, /outline for you to fill in/);
  for (const respond of [async () => null, async () => { throw new Error("down"); }, async () => "sorry, no"]) {
    const outline = await ask(planner(respond), "Make me a sample itinerary for Paris for 5 days.");
    assert.equal(outline.steps[0].toolId, "documents.create"); assert.match(outline.steps[0].input.content, /outline for you to fill in/); assert.match(outline.steps[0].input.title, /5 days in Paris/);
  }
  const region = await ask(withDays, "Can you show me my travel itinerary to Africa?");
  assert.equal(region.knowledge, "trip-itinerary:needs-place"); assert.deepEqual(region.steps, []); assert.match(region.response, /country or a city/);
  for (const say of ["Open my Kenya trip itinerary.", "Book me a flight to Nairobi."]) { const other = await ask(withDays, say).catch(() => null); assert.notEqual(String(other?.knowledge || ""), "trip-itinerary", say); }
  const spoken = await ask(withDays, "Plan a 7 day trip to Kenya.", { timeZone: "America/Chicago", deterministicOnly: true });
  assert.notEqual(String(spoken.knowledge || ""), "trip-itinerary", "the spoken-only route leaves it to the page");
});

// a stand-in for the free map services: places by name, and a road only where the places are near
const PLACES = { atlanta: [33.749, -84.388], nairobi: [-1.2921, 36.8219], mombasa: [-4.0435, 39.6682], paris: [48.8566, 2.3522] };
const reply = (status, body) => ({ ok: status >= 200 && status < 300, status, statusText: status === 200 ? "OK" : "error", json: async () => body, text: async () => JSON.stringify(body) });
function fakeMaps(counter = { roads: 0 }) {
  return async url => {
    url = String(url);
    if (url.includes("/search")) { const q = new URL(url).searchParams.get("q").toLowerCase(); const p = PLACES[q]; return reply(200, p ? [{ lat: String(p[0]), lon: String(p[1]), name: q, display_name: q, address: { city: q } }] : []); }
    counter.roads += 1;
    const m = url.match(/driving\/([-\d.]+),([-\d.]+);([-\d.]+),([-\d.]+)/);
    if (Math.hypot(+m[1] - +m[3], +m[2] - +m[4]) > 20) return reply(400, { code: "NoRoute", message: "Impossible route between points" });
    return reply(200, { code: "Ok", routes: [{ distance: 480000, duration: 20000, geometry: { coordinates: [[+m[1], +m[2]], [+m[3], +m[4]]] }, legs: [{ steps: [{ distance: 480000, name: "A109", maneuver: { type: "depart", location: [+m[1], +m[2]] } }] }] }] });
  };
}

test("the straight line between two far places is a great circle with both ends on it", () => {
  const line = greatCircle({ lat: 33.749, lng: -84.388 }, { lat: -1.2921, lng: 36.8219 });
  assert.deepEqual(line[0], [-84.388, 33.749]); assert.deepEqual(line[line.length - 1], [36.8219, -1.2921]);
  assert.ok(line.length > 30);
  assert.ok(Math.max(...line.map(pair => pair[1])) > 34.5, "it bows toward the pole, north of both ends, as a flight path does");
});

test("a path across the Pacific goes on past the date line (no jump to the other side), and the page keeps those points", async () => {
  const line = greatCircle({ lat: 34.05, lng: -118.24 }, { lat: 35.68, lng: 139.69 });
  for (let i = 1; i < line.length; i += 1) assert.ok(Math.abs(line[i][0] - line[i - 1][0]) < 20, `no jump at ${i}: ${line[i - 1][0]} to ${line[i][0]}`);
  assert.ok(Math.abs(line[line.length - 1][0] - (139.69 - 360)) < 0.01, "it ends at Tokyo, 220.31 degrees west of Greenwich");
  const start = app.indexOf("function kyroRoutePoints(route) {"); const end = app.indexOf("\n}\n", start) + 2;
  const context = {}; vm.runInNewContext(`${app.slice(start, end)}\nthis.points = kyroRoutePoints;`, context);
  assert.equal(context.points({ geometry: line }).length, line.length, "none dropped");
  const city = { "los angeles": [34.05, -118.24], tokyo: [35.68, 139.69], osaka: [34.69, 135.5] };
  const fetchImpl = async url => { url = String(url); const q = new URL(url).searchParams.get("q").toLowerCase(); const p = city[q]; return reply(200, p ? [{ lat: String(p[0]), lon: String(p[1]), name: q, display_name: q, address: { city: q } }] : []); };
  const nav = createNavigationService({ env: {}, fetchImpl });
  const t = (await nav.handle({ context: { userId: "u" }, body: { action: "trip", stops: ["Los Angeles", "Tokyo", "Osaka"] } })).body.route;
  for (let i = 1; i < t.geometry.length; i += 1) assert.ok(Math.abs(t.geometry[i][0] - t.geometry[i - 1][0]) < 20, `a trip has no jump at ${i}`);
});

test("navigation: a trip is each place found by name and each leg drawn (a road where near, otherwise a straight line); far places and no-road places are a straight line and not an error; a missing place is said plainly", async () => {
  const counter = { roads: 0 };
  const nav = createNavigationService({ env: {}, fetchImpl: fakeMaps(counter) });
  const t = (await nav.handle({ context: { userId: "u" }, body: { action: "trip", stops: ["Atlanta", "Nairobi", "Mombasa"] } })).body.route;
  assert.equal(t.mode, "trip"); assert.equal(t.straightLine, true); assert.deepEqual(t.stops.map(stop => stop.label), ["Atlanta", "Nairobi", "Mombasa"]);
  assert.match(t.steps[0].instruction, /^Atlanta to Nairobi: about 12,9\d\d kilometers in a straight line \(a flight path, not a booked flight\)\.$/);
  assert.match(t.steps[1].instruction, /^Nairobi to Mombasa: about 480 kilometers by road\.$/);
  assert.ok(t.geometry.length > 60 && t.distanceMeters > 13_000_000);
  assert.equal(counter.roads, 1, "no road was asked for between the continents");
  const direct = (await nav.handle({ context: { userId: "u" }, body: { action: "route", allowStraightLine: true, from: { lat: 33.749, lng: -84.388, label: "Atlanta" }, to: { lat: -1.2921, lng: 36.8219, label: "Nairobi" } } })).body.route;
  assert.equal(direct.mode, "air"); assert.equal(direct.durationSeconds, 0); assert.ok(direct.geometry.length > 60);
  assert.match(direct.steps[0].instruction, /Atlanta to Nairobi: about 12,9\d\d kilometers in a straight line\. This shows the direction and the distance, not a booked flight or a schedule\./);
  // turn-by-turn guidance never follows a straight line: without the request for one, no road is still "no route"
  await assert.rejects(() => nav.handle({ context: { userId: "u" }, body: { action: "route", from: { lat: 33.749, lng: -84.388 }, to: { lat: -1.2921, lng: 36.8219, label: "Nairobi" } } }), error => ["no_route", "navigation_provider_error"].includes(error.code));
  await assert.rejects(() => nav.handle({ context: { userId: "u" }, body: { action: "trip", stops: ["Atlanta", "Nowhereville"] } }), error => error.code === "place_not_found" && /Nowhereville/.test(error.message));
  await assert.rejects(() => nav.handle({ context: { userId: "u" }, body: { action: "trip", stops: ["Atlanta"] } }), error => error.status === 400);
});

test("the maps provider ('show the route from Atlanta to Nairobi'): far places are a straight line, a 'no route' answer is a straight line, a routing outage is still an error, and near places are a road as before", async () => {
  const env = fetchImpl => ({ NEXUS_MAPS_FETCH_IMPL: fetchImpl });
  const far = await mapsProvider.route({ origin: "Atlanta", destination: "Nairobi" }, env(fakeMaps()));
  assert.equal(far.body.data.straightLine, true); assert.equal(far.body.provider, "great-circle"); assert.ok(far.body.data.routeGeometry.length > 60);
  // [latitude, longitude]: found on the live site (27 October 2026) when Atlanta was drawn in Antarctica, because the points were [longitude, latitude]
  const first = far.body.data.routeGeometry[0]; const last = far.body.data.routeGeometry[far.body.data.routeGeometry.length - 1];
  assert.ok(Math.abs(first[0] - 33.749) < 0.01 && Math.abs(first[1] + 84.388) < 0.01, `starts at Atlanta as [lat, lng]: ${first}`);
  assert.ok(Math.abs(last[0] + 1.2921) < 0.01 && Math.abs(last[1] - 36.8219) < 0.01, `ends at Nairobi as [lat, lng]: ${last}`);
  assert.ok(far.body.data.routeGeometry.every(pair => Math.abs(pair[0]) <= 90), "every first number is a latitude");
  assert.ok(far.body.data.distanceMeters > 12_800_000 && far.body.data.distanceMeters < 13_100_000); assert.equal(far.body.data.durationSeconds, null);
  assert.match(far.body.message, /too far apart for a road route/);
  const near = await mapsProvider.route({ origin: "Nairobi", destination: "Mombasa" }, env(fakeMaps()));
  assert.equal(near.body.data.straightLine, undefined); assert.equal(near.body.provider, "openstreetmap-osrm");
  const noRoad = async url => (String(url).includes("/search") ? fakeMaps()(url) : reply(200, { code: "NoRoute", routes: [] }));
  const islands = await mapsProvider.route({ origin: "Nairobi", destination: "Mombasa" }, env(noRoad));
  assert.equal(islands.body.data.straightLine, true); assert.match(islands.body.message, /found no road route/);
  const outage = async url => { if (String(url).includes("/search")) return fakeMaps()(url); return reply(503, {}); };
  const down = await mapsProvider.route({ origin: "Nairobi", destination: "Mombasa" }, env(outage));
  assert.equal(down.body.ok, false, "an outage is a failure, said as one");
  assert.notEqual(down.body.data?.straightLine, true, "and is never drawn as if there were no road");
});

test("on the page: a trip request is the page's own turn and remembers its places for an hour; 'show the route' needs a trip with two places; the map marks each stop and the list is titled as a trip; the scripts are loaded before app.js and cached", () => {
  const start = app.indexOf("let kyroLastTrip = { stops: [], at: 0, wantsMap: false };");
  const end = app.indexOf("async function kyroShowTripRoute()", start);
  assert.ok(start > 0 && end > start);
  let now = 5_000_000;
  const context = { window: { KyroTripTopics: trips }, Date: { now: () => now } };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.claim = kyroTripQuestion; this.routeAsk = kyroTripRouteAsk; this.last = () => kyroLastTrip;`, context);
  assert.equal(context.routeAsk("Show me the route."), false, "no trip yet");
  assert.equal(context.claim("Plan a 7 day trip to Kenya from Atlanta."), true);
  assert.deepEqual(Array.from(context.last().stops), ["Atlanta", "Kenya"]);
  assert.equal(context.routeAsk("Show me the route."), true);
  now += 59 * 60 * 1000; assert.equal(context.routeAsk("Show it on the map."), true, "59 minutes later");
  now += 2 * 60 * 1000; assert.equal(context.routeAsk("Show it on the map."), false, "an hour and a minute later");
  assert.equal(context.claim("Plan a trip to Africa."), true, "a region is the page's too (it is asked about)");
  assert.equal(context.claim("Open my Kenya trip itinerary."), false);
  assert.equal(context.routeAsk("Show me the route from Atlanta to Nairobi."), false);
  assert.match(app, /if \(trimmed && typeof kyroTripQuestion === "function" && kyroTripQuestion\(trimmed\)\) \{\s+if \(!heardAgain\) \{\s+try \{ kyroTakeOverTurn\(\); \} catch \{ \/\* nothing to cut off \*\/ \}\s+kyroPageSpeaksUntil = Date\.now\(\) \+ 60000;\s+void handleNexusUnifiedBrainRuntimeCommand\(trimmed, \{ source: "typed", kyroDirect: true \}\);/);
  // typed and spoken alike (the shared entry point): the route follow-up, and a trip that asks for the map too
  assert.match(app, /options\.kyroTripWrapped !== true\) \{\s+try \{\s+if \(typeof kyroTripRouteAsk === "function" && kyroTripRouteAsk\(text\)\) \{ await kyroShowTripRoute\(\); return true; \}\s+if \(typeof kyroTripQuestion === "function" && kyroTripQuestion\(text\) && kyroLastTrip\.wantsMap\) \{\s+const handledTrip = await handleNexusUnifiedBrainRuntimeCommand\(command, \{ \.\.\.options, kyroTripWrapped: true \}\);\s+if \(handledTrip !== false\) void kyroShowTripRouteAfterDocument\(\);/);
  // the map waits for the itinerary's card to be closed (closing it goes back to the start screen, which takes a map with it), then is drawn; with no card it is drawn at once
  assert.match(app, /async function kyroShowTripRouteAfterDocument\(\) \{[\s\S]*?const card = \(\) => document\.querySelector\("\[data-kyro-result=\\"document\\"\]"\);[\s\S]*?for \(let i = 0; i < 600 && card\(\); i \+= 1\) await sleep\(1000\);\s+if \(card\(\)\) return false;[\s\S]*?return kyroShowTripRoute\(\);\s+\}/);
  assert.match(app, /kyroTripRouteAsk\(trimmed\)\) \{\s+if \(!heardAgain\) \{\s+try \{ kyroTakeOverTurn\(\); \} catch \{ \/\* nothing to cut off \*\/ \}\s+kyroPageSpeaksUntil = Date\.now\(\) \+ 30000;\s+void kyroShowTripRoute\(\);/);
  assert.match(app, /body: \{ action: "trip", stops: trip\.stops \}/);
  assert.match(app, /kyroRouteView\.route\(\{ route, from: \{ label: trip\.stops\[0\] \}, to: \{ label: trip\.stops\[trip\.stops\.length - 1\] \}/);
  assert.match(app, /function kyroMarkTripStops\(stops\)/);
  // the stops are one group that is replaced, never added to; a trip's route is fitted after the panel is opened and the map told its size, three times
  assert.match(app, /if \(kyroTripStopLayer\) \{ try \{ kyroTripStopLayer\.remove\(\); \} catch \{ \/\* already gone \*\/ \} kyroTripStopLayer = null; \}/);
  assert.match(app, /if \(route\?\.mode === "trip" \|\| route\?\.straightLine\) \{\s*\/\/[^\n]*\n\s*const fitTrip = \(\) => \{ try \{ document\.querySelector\("#map \.user-simple-module > details\.user-module-more"\)\?\.setAttribute\("open", "true"\); safeInvalidateLeafletMap\(userMap\); kyroFitRouteBelowSteps\(points, live\); kyroMarkTripStops\(route\.stops\); \}/);
  assert.match(app, /fitTrip\(\); setTimeout\(fitTrip, 600\); setTimeout\(fitTrip, 1800\);\s+\} else kyroFitRouteBelowSteps\(points, live\);/);
  assert.match(app, /Trip route: \$\{route\.stops\.map\(stop => stop\.label\)\.join\(" → "\)\}/);
  const index = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");
  const sw = fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8");
  const tag = '<script src="/kyro-trip-topics.js?v=kyro-trip-topics-2"></script>';
  assert.ok(index.includes(tag) && index.indexOf(tag) < index.search(/<script[^>]+src="\/app\.js/));
  assert.match(sw, /`\/kyro-trip-topics\.js\?v=kyro-trip-topics-2`/);
});

test("a flight path has no driving time to say: the list says only the distance, never 'less than a minute'", () => {
  const nav = require("../../public/kyro-navigation.js");
  assert.match(app, /Number\(route\.durationSeconds\) > 0 \? `\$\{nav\.sayDistance/);
  const source = fs.readFileSync(path.join(__dirname, "../../public/kyro-navigation.js"), "utf8");
  assert.match(source, /Number\(seconds\) > 0 \? tx\(language, "about"/);
  assert.ok(nav.sayDistance(12_900_000, "en").length > 5);
});

test("a trip that asks for its map in the same sentence: the map is drawn when the itinerary's card is closed (the person is told so), at once when no card comes up, and not at all while the card is still open after ten minutes", async () => {
  const start = app.indexOf("async function kyroShowTripRouteAfterDocument() {");
  const end = app.indexOf("\n}\n", start) + 2;
  assert.ok(start > 0 && end > start);
  const make = ({ cardPolls }) => {
    const log = []; let polls = 0;
    const context = {
      document: { querySelector: () => { polls += 1; return cardPolls(polls) ? {} : null; } },
      setTimeout: fn => { fn(); return 0; }, setVoiceResponse: line => log.push(["said", line]), kyroShowTripRoute: async () => { log.push(["route"]); return true; }
    };
    vm.runInNewContext(`${app.slice(start, end)}\nthis.run = kyroShowTripRouteAfterDocument;`, context);
    return { run: context.run, log };
  };
  const never = make({ cardPolls: () => false });
  assert.equal(await never.run(), true); assert.deepEqual(never.log, [["route"]], "no card: the map at once, nothing said");
  const closed = make({ cardPolls: n => n >= 3 && n <= 8 });
  assert.equal(await closed.run(), true);
  assert.deepEqual(closed.log.map(entry => entry[0]), ["said", "route"]);
  assert.match(closed.log[0][1], /When you close it, I will show the route on the map\./);
  const stays = make({ cardPolls: n => n >= 3 });
  assert.equal(await stays.run(), false); assert.deepEqual(stays.log.map(entry => entry[0]), ["said"], "still open after ten minutes: no map");
});
