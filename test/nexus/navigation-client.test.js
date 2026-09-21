"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const nav = require("../../public/kyro-navigation.js");
const { buildRoute } = require("../../nexus/navigation/directions.js");

const ROOT = path.resolve(__dirname, "..", "..");

// ---------- plus codes ----------
test("plus codes match the published Open Location Code examples and round-trip", () => {
  assert.equal(nav.encodePlusCode(47.0000625, 8.0000625), "8FVC2222+22"); assert.equal(nav.encodePlusCode(47.0000625, 8.0000625, 11), "8FVC2222+22G");
  assert.match(nav.encodePlusCode(20.375, 2.775), /^7FG49QGG\+/); assert.match(nav.encodePlusCode(-1.2921, 36.8219), /^6GCRPR5C\+/);
  assert.deepEqual(nav.decodePlusCode("8FVC2222+22"), { lat: 47.0000625, lng: 8.0000625 });
  for (const [lat, lng] of [[-1.2921, 36.8219], [9.03, 38.74], [-33.9249, 18.4241], [30.0444, 31.2357], [0, 0], [-89.99, -179.99], [89.99, 179.99], [6.5244, 3.3792]]) {
    const back = nav.decodePlusCode(nav.encodePlusCode(lat, lng)); assert.ok(Math.abs(back.lat - lat) < 0.00007 && Math.abs(back.lng - lng) < 0.00007, `${lat},${lng}`);
    assert.ok(nav.distanceBetween({ lat, lng }, back) < 12, "within about a dozen meters");
  }
  assert.equal(nav.encodePlusCode(NaN, 1), ""); assert.equal(nav.decodePlusCode("nonsense"), null); assert.equal(nav.decodePlusCode("8FVC2222"), null); assert.equal(nav.decodePlusCode(""), null);
  assert.equal(nav.encodePlusCode(91, 190).length, 11, "out-of-range values are clipped and wrapped, not broken");
});

test("distances and durations are said the way a person says them", () => {
  assert.deepEqual([5, 45, 120, 480, 999, 1200, 15000].map(nav.sayDistance), ["a few meters", "50 meters", "100 meters", "500 meters", "1000 meters", "1.2 kilometers", "15 kilometers"]);
  assert.equal(nav.sayDistance(1010), "1 kilometer"); assert.deepEqual([20, 90, 3600, 5400, 7500].map(nav.sayDuration), ["less than a minute", "2 minutes", "1 hour", "1 hour 30 minutes", "2 hours 5 minutes"]);
});

// ---------- what the person says ----------
test("the GPS takes only words that are plainly for it", () => {
  const yes = { "Where am I": "where", "what is my location?": "where", "my plus code": "where", "Save this place as home": "save", "remember here as my work": "save", "show my saved places": "places", "forget place market": "forget", "Stop navigation": "stop", "stop navigating": "stop", "repeat that": "repeat", "what's the next turn": "repeat", "how far is it": "status", "when will I arrive": "status", "take me home": "go", "Navigate to Kisumu Hospital": "go", "directions to the clinic": "go", "walk me to the market": "go", "drive me to Nakuru": "go" };
  for (const [text, type] of Object.entries(yes)) assert.equal(nav.parseCommand(text)?.type, type, text);
  assert.deepEqual(nav.parseCommand("Walk me to the market"), { type: "go", destination: "the market", mode: "walk" }); assert.deepEqual(nav.parseCommand("take me to Kibera on foot"), { type: "go", destination: "Kibera", mode: "walk" });
  assert.deepEqual(nav.parseCommand("navigate home"), { type: "go", destination: "home", mode: "drive" });
  for (const text of ["directions from Nairobi to Nakuru", "take me to settings", "take me to the dashboard", "take me to the next step", "tell me a joke", "what is the weather", "where is the nearest clinic", "I am home", "save this", "stop", "hello", "how do I get to sleep", "Show a route from Nairobi to Nakuru with route geometry.", "Find mobile clinic locations near Nairobi and select the closest one.", "x".repeat(300), ""])
    assert.equal(nav.parseCommand(text), null, text);
});

// ---------- following a route ----------
// About 2.2 km north with a left turn at about 1.1 km. Each coordinate step is about 11 m.
function straightRoute() {
  const coordinates = []; for (let i = 0; i <= 200; i += 1) coordinates.push([36.8, -1.3 + i * 0.0001]);
  return buildRoute({ distance: 2200, duration: 300, geometry: { coordinates }, legs: [{ steps: [
    { name: "First Road", distance: 1100, maneuver: { type: "depart", bearing_after: 0, location: coordinates[0] } },
    { name: "Second Road", distance: 1100, maneuver: { type: "turn", modifier: "left", location: coordinates[100] } },
    { name: "", distance: 0, maneuver: { type: "arrive", modifier: "left", location: coordinates[200] } }] }] });
}
const onLine = (index, sideways = 0, accuracy = 10) => ({ lat: -1.3 + index * 0.0001, lng: 36.8 + sideways / 111320, accuracy });

test("guidance announces each turn ahead of time, once, and says when you arrive", () => {
  const follower = nav.createRouteFollower(straightRoute(), { mode: "drive" }); const said = [];
  for (let i = 0; i <= 200; i += 4) { const r = follower.update(onLine(i)); for (const line of r.say) said.push({ at: i, ...line }); }
  const texts = said.map(line => line.text);
  assert.equal(texts[0], "Head north on First Road."); assert.equal(texts.filter(text => /Second Road/.test(text)).length, 3, "three announcements for the one turn");
  assert.match(texts.find(text => /^In (?:500|550|450) meters/.test(text)), /turn left onto Second Road\.$/); assert.match(texts.find(text => /^In (?:200|250|150) meters/.test(text)), /turn left onto Second Road\.$/);
  const now = said.find(line => /^Now, turn left onto Second Road\.$/.test(line.text)); assert.ok(now && now.urgent && now.at >= 90 && now.at <= 100, "the last warning is close to the turn and interrupts other speech");
  assert.equal(texts.filter(text => text === "You have arrived.").length, 1); assert.equal(texts.at(-1), "You have arrived."); assert.equal(said.at(-1).urgent, true);
  const order = texts.filter(text => /Second Road|arrived/.test(text)); assert.match(order[0], /^In 5/); assert.match(order.at(-1), /arrived/);
  assert.equal(follower.update(onLine(200)).say.length, 0, "nothing more is said after arriving");
});

test("guidance tracks how far is left, what is next, and how long", () => {
  const follower = nav.createRouteFollower(straightRoute(), { mode: "drive" }); const first = follower.update(onLine(0));
  assert.ok(Math.abs(first.remainingMeters - 2220) < 40); assert.equal(first.next.instruction, "Turn left onto Second Road"); assert.ok(Math.abs(first.next.distanceMeters - 1106) < 30); assert.equal(first.offRoute, false);
  const later = follower.update(onLine(150)); assert.ok(Math.abs(later.remainingMeters - 553) < 30); assert.ok(Math.abs(later.remainingSeconds - 75) < 8); assert.equal(later.next.instruction, "You have arrived, on your left");
  assert.ok(later.cross < 1);
});

test("leaving the route is noticed only after a few readings in a row, and a poor reading never counts", () => {
  const follower = nav.createRouteFollower(straightRoute(), { mode: "drive" }); follower.update(onLine(10));
  assert.equal(follower.update(onLine(20, 120)).offRoute, false); assert.equal(follower.update(onLine(21, 120)).offRoute, false); assert.equal(follower.update(onLine(22, 120)).offRoute, true);
  assert.equal(follower.update(onLine(23, 0)).offRoute, false, "back on the route resets it"); follower.update(onLine(24, 120)); follower.update(onLine(25, 120));
  assert.equal(follower.update(onLine(26, 0)).offRoute, false, "two bad readings then a good one is not off route");
  const poor = nav.createRouteFollower(straightRoute(), { mode: "drive" }); for (let i = 0; i < 6; i += 1) assert.equal(poor.update(onLine(10 + i, 300, 400)).offRoute, false, "a 400 m accuracy reading says nothing");
  const fuzzy = nav.createRouteFollower(straightRoute(), { mode: "drive" }); for (let i = 0; i < 6; i += 1) assert.equal(fuzzy.update(onLine(10 + i, 60, 60)).offRoute, false, "60 m sideways with 60 m accuracy is within the noise");
});

test("walking gets shorter warnings and a closer arrival than driving", () => {
  const walk = nav.createRouteFollower(straightRoute(), { mode: "walk" }); const said = [];
  for (let i = 0; i <= 200; i += 2) for (const line of walk.update(onLine(i)).say) said.push(line.text);
  assert.ok(said.some(text => /^In (?:150|100|1\d\d) meters, turn left/.test(text)), said.join(" | ")); assert.ok(!said.some(text => /^In 500 meters/.test(text)));
});

test("a route that doubles back is followed correctly, never jumping to the wrong leg", () => {
  const out = []; for (let i = 0; i <= 90; i += 1) out.push([36.8, -1.3 + i * 0.0001]); const back = []; for (let i = 90; i >= 0; i -= 1) back.push([36.8002, -1.3 + i * 0.0001]);
  const route = buildRoute({ distance: 2000, duration: 300, geometry: { coordinates: [...out, ...back] }, legs: [{ steps: [
    { name: "Out", distance: 1, maneuver: { type: "depart", bearing_after: 0, location: out[0] } }, { name: "Back", distance: 1, maneuver: { type: "turn", modifier: "right", location: out.at(-1) } }, { name: "", distance: 0, maneuver: { type: "arrive", location: back.at(-1) } }] }] });
  const follower = nav.createRouteFollower(route, { mode: "drive" }); let last = -1;
  for (const [lng, lat] of [...out, ...back]) { const r = follower.update({ lat, lng, accuracy: 5 }); assert.ok(r.along >= last - 30, `progress went backwards: ${last} -> ${r.along}`); last = r.along; }
  assert.ok(last > route.distanceMeters - 40);
});

// ---------- the navigator with a fake phone and a fake server ----------
function phone({ start = { lat: -1.3, lng: 36.8, accuracy: 12 }, failure = null } = {}) {
  const watchers = []; const cleared = []; let position = start;
  const geolocation = {
    getCurrentPosition(ok, err) { if (failure) err({ code: failure }); else ok({ coords: { latitude: position.lat, longitude: position.lng, accuracy: position.accuracy } }); },
    watchPosition(ok, err) { watchers.push({ ok, err }); return 7; }, clearWatch(id) { cleared.push(id); }
  };
  return { geolocation, watchers, cleared, at(pos) { position = pos; }, emit(lat, lng, accuracy = 10) { watchers.at(-1).ok({ coords: { latitude: lat, longitude: lng, accuracy } }); }, deny() { watchers.at(-1).err({ code: 1 }); } };
}
const memoryStorage = () => { const map = new Map(); return { map, getItem: key => (map.has(key) ? map.get(key) : null), setItem: (key, value) => map.set(key, String(value)) }; };
function setup({ handler, ...options } = {}) {
  const p = phone(options.phone); const calls = []; const spoken = []; const panel = { shows: [], hides: 0 }; const released = []; let clock = 1000000; const storage = options.storage || memoryStorage();
  const route = straightRoute(); route.destination = { label: "Kibera Health Centre", lat: -1.28, lng: 36.8 }; route.mode = "drive";
  const api = async body => { calls.push(body); if (handler) return handler(body, route); if (body.action === "reverse") return { place: { label: "Haile Selassie Avenue, Nairobi" } }; if (body.action === "route") return { route }; return {}; };
  const navigator = nav.createNavigator({ geolocation: p.geolocation, api, speak: (text, opts) => spoken.push({ text, ...opts }), storage, ui: { show: value => panel.shows.push(value), hide: () => { panel.hides += 1; } }, wakeLock: async () => ({ release: () => released.push(true) }), now: () => clock });
  return { navigator, p, calls, spoken, panel, released, storage, route, tick: ms => { clock += ms; } };
}

test("where am I: the name, the numbers, and a plus code that works even with no signal", async () => {
  const t = setup(); const said = await t.navigator.handle("Where am I");
  assert.match(said, /^You are near Haile Selassie Avenue, Nairobi\. Your position is 1\.30000 S, 36\.80000 E, to within about 12 meters\. Your plus code is 6GCRPR[0-9A-Z]{2}\+[0-9A-Z]{2}\. Read it to anyone/);
  assert.equal(said.match(/plus code is (\S+)\./)[1], nav.encodePlusCode(-1.3, 36.8)); assert.deepEqual(t.calls, [{ action: "reverse", position: { lat: -1.3, lng: 36.8 } }]);
  const offline = setup({ handler: async () => { throw new TypeError("Failed to fetch"); } }); const still = await offline.navigator.handle("what is my location");
  assert.doesNotMatch(still, /You are near/); assert.match(still, /Your plus code is /);
  assert.match(await setup({ phone: { failure: 1 } }).navigator.handle("where am I"), /Allow location for this site/); assert.match(await setup({ phone: { failure: 3 } }).navigator.handle("where am I"), /clearer view of the sky/);
  assert.match(await setup({ phone: { failure: 2 } }).navigator.handle("where am I"), /Check that location is switched on/);
  assert.match(await nav.createNavigator({ api: async () => ({}), storage: memoryStorage() }).handle("where am I"), /Check that location is switched on/);
});

test("saved places stay on this phone, can be replaced and forgotten, and are bounded", async () => {
  const t = setup();
  assert.match(await t.navigator.handle("Save this place as my home"), /^Saved this place as home\. It stays on this phone only\. Say "take me home"/);
  const stored = JSON.parse(t.storage.getItem(nav.PLACES_KEY)); assert.equal(stored.length, 1); assert.deepEqual([stored[0].name, stored[0].lat, stored[0].lng], ["home", -1.3, 36.8]);
  t.p.at({ lat: -1.31, lng: 36.81, accuracy: 10 }); await t.navigator.handle("save this place as the Market"); await t.navigator.handle("save this place as home");
  assert.equal(JSON.parse(t.storage.getItem(nav.PLACES_KEY)).length, 2); assert.equal(nav.readPlaces(t.storage).find(item => item.name === "home").lat, -1.31);
  assert.equal(await t.navigator.handle("show my saved places"), "You have 2 saved places: market, home."); assert.equal(await t.navigator.handle("forget place market"), "Forgot market."); assert.equal(await t.navigator.handle("forget place market"), "I don't have a place called market.");
  assert.equal(t.calls.length, 0, "saving and listing places never contact the server");
  assert.match(await setup().navigator.handle("show my places"), /You have no saved places/);
  const full = setup(); for (let i = 0; i < 50; i += 1) await full.navigator.handle(`save this place as spot ${i}`);
  assert.match(await full.navigator.handle("save this place as one too many"), /fifty saved places/);
  const broken = setup({ storage: { getItem: () => null, setItem: () => { throw new Error("full"); } } }); assert.match(await broken.navigator.handle("save this place as home"), /couldn't save that on this phone/);
  assert.equal(await t.navigator.handle("save this"), null);
});

test("take me home: routes to the saved place with no search, keeps the screen on, tells you about your location once", async () => {
  const t = setup(); t.p.at({ lat: -1.28, lng: 36.8, accuracy: 10 }); await t.navigator.handle("save this place as home"); t.p.at({ lat: -1.3, lng: 36.8, accuracy: 10 });
  const said = await t.navigator.handle("Take me home");
  const routeCall = t.calls.find(call => call.action === "route"); assert.deepEqual(routeCall, { action: "route", from: { lat: -1.3, lng: 36.8 }, to: { lat: -1.28, lng: 36.8, label: "home" }, mode: "drive", language: "en" });
  assert.equal(t.calls.some(call => call.action === "search"), false); assert.match(said, /^Taking you to home: 2\.2 kilometers, about 5 minutes\. Head north on First Road\. Keep your screen on, because a browser can't guide with the screen off\. I use your phone's location only while guiding you/);
  assert.match(said, /Say "stop navigation" to end\.$/); assert.equal(t.navigator.active, true); assert.equal(t.p.watchers.length, 1); assert.equal(t.panel.shows.length >= 1, true); assert.match(t.panel.shows[0].instruction, /Turn left onto Second Road/);
  t.navigator.stop(true); assert.deepEqual(t.p.cleared, [7]); assert.equal(t.released.length, 1); assert.equal(t.panel.hides, 1);
  const again = await t.navigator.handle("take me home"); assert.doesNotMatch(again, /I use your phone's location/, "said once, not every trip");
});

test("take me to a place by name: it is searched near you, walking is asked for, and a plus code works", async () => {
  const t = setup(); const said = await t.navigator.handle("walk me to Kibera Health Centre");
  assert.deepEqual(t.calls.find(call => call.action === "route"), { action: "route", from: { lat: -1.3, lng: 36.8 }, to: { query: "Kibera Health Centre" }, mode: "walk", language: "en" }); assert.match(said, /^Walking you to Kibera Health Centre:/);
  t.navigator.stop(true);
  const code = nav.encodePlusCode(-1.28, 36.81); await t.navigator.handle(`navigate to ${code}`); const to = t.calls.filter(call => call.action === "route").at(-1).to;
  assert.ok(Math.abs(to.lat + 1.28) < 0.0001 && Math.abs(to.lng - 36.81) < 0.0001 && to.label === code, JSON.stringify(to));
  assert.match(await setup().navigator.handle("take me home"), /I don't know where home is yet/); assert.match(await setup().navigator.handle("take me"), /Where would you like to go/);
});

test("problems are said plainly: no permission, no route, no signal, and nothing is spoken about location unless asked", async () => {
  assert.match(await setup({ phone: { failure: 1 } }).navigator.handle("take me home"), /Allow location/);
  assert.equal(await setup({ handler: async () => { throw new Error("I couldn't find Atlantis."); } }).navigator.handle("take me to Atlantis"), "I couldn't find Atlantis.");
  assert.match(await setup({ handler: async () => { throw new TypeError("Failed to fetch"); } }).navigator.handle("take me to Kibera"), /couldn't plan a route\. Check your connection/);
  const t = setup(); for (const text of ["what is the weather", "take me to settings", "hello", "record my blood pressure", "directions from Nairobi to Nakuru", "repeat that", "how far is it"]) assert.equal(await t.navigator.handle(text), null, text);
  assert.equal(t.calls.length, 0); assert.equal(t.p.watchers.length, 0, "the location is not read for anything but a navigation request");
  assert.equal(await t.navigator.handle("stop navigation"), "I'm not guiding you anywhere right now.");
});

test("guiding: spoken turns as the person moves, the panel updates, and arriving ends it", async () => {
  const t = setup(); t.p.at({ lat: -1.3, lng: 36.8, accuracy: 10 }); await t.navigator.handle("navigate to Kibera Health Centre"); t.spoken.length = 0;
  for (let i = 2; i <= 200; i += 4) t.p.emit(-1.3 + i * 0.0001, 36.8);
  const said = t.spoken.map(item => item.text); assert.ok(said.some(text => /^In (?:450|500|550) meters, turn left onto Second Road/.test(text)), said.join(" | ")); assert.ok(said.some(text => /^Now, turn left onto Second Road/.test(text)));
  assert.ok(said.some(text => /^In \d+ meters, you will arrive, on your left\.$/.test(text)), "the end is announced ahead"); assert.ok(!said.some(text => /^In .*you have arrived/.test(text)));
  assert.equal(said.at(-1), "You have arrived."); assert.equal(t.spoken.at(-1).interrupt, true); assert.equal(t.navigator.active, false, "arriving ends guidance"); assert.deepEqual(t.p.cleared, [7]); assert.equal(t.released.length, 1); assert.ok(t.panel.hides >= 1);
  assert.ok(t.panel.shows.some(value => /kilometer|meters/.test(value.remaining) && value.destination === "Kibera Health Centre"));
});

test("leaving the route finds a new one, but not more than once every twenty seconds, and says so when it cannot", async () => {
  let reroutes = 0; const t = setup({ handler: async (body, route) => { if (body.action === "reverse") return { place: { label: "x" } }; if (body.action === "route" && body.from.lat > -1.295) { reroutes += 1; if (reroutes === 2) throw new TypeError("Failed to fetch"); return { route: { ...route, distanceMeters: 800, durationSeconds: 120 } }; } return { route }; } });
  await t.navigator.handle("take me to Kibera Health Centre"); t.spoken.length = 0; t.calls.length = 0;
  for (let i = 0; i < 3; i += 1) t.p.emit(-1.29, 36.8005, 10); await new Promise(resolve => setImmediate(resolve));
  assert.deepEqual(t.calls.map(call => call.action), ["route"]); assert.deepEqual(t.calls[0].from, { lat: -1.29, lng: 36.8005 }); assert.equal(t.calls[0].mode, "drive");
  assert.ok(t.spoken.some(item => /off the route\. Finding a new way/.test(item.text) && item.interrupt)); assert.ok(t.spoken.some(item => /^New route, 800 meters, about 2 minutes\.$/.test(item.text)));
  t.calls.length = 0; for (let i = 0; i < 4; i += 1) t.p.emit(-1.2, 36.9, 10); await new Promise(resolve => setImmediate(resolve)); assert.equal(t.calls.length, 0, "not asked again within twenty seconds");
  t.tick(21000); t.spoken.length = 0; for (let i = 0; i < 3; i += 1) t.p.emit(-1.2, 36.9, 10); await new Promise(resolve => setImmediate(resolve)); await new Promise(resolve => setImmediate(resolve));
  assert.equal(t.calls.length, 1); assert.ok(t.spoken.some(item => /can't plan a new route without a connection/.test(item.text)), t.spoken.map(item => item.text).join(" | ")); assert.equal(t.navigator.active, true, "still guiding");
});

test("repeat, how far, stop and losing permission while guiding", async () => {
  const t = setup(); await t.navigator.handle("take me to Kibera Health Centre"); t.p.emit(-1.3 + 60 * 0.0001, 36.8);
  assert.match(await t.navigator.handle("repeat that"), /^In (?:450|500) meters, turn left onto Second Road\.$/); assert.match(await t.navigator.handle("how far is it"), /kilometers? to go, about \d+ minutes\.$/);
  assert.equal(await t.navigator.handle("stop navigation"), "Navigation stopped."); assert.equal(t.navigator.active, false); assert.deepEqual(t.p.cleared, [7]);
  const denied = setup(); await denied.navigator.handle("take me to Kibera Health Centre"); denied.spoken.length = 0; denied.p.deny();
  assert.match(denied.spoken[0].text, /Allow location/); assert.equal(denied.navigator.active, false);
});

test("the page loads the GPS, the offline shell caches it, and the words are handled on the phone before anything is sent", () => {
  const html = fs.readFileSync(path.join(ROOT, "public", "index.html"), "utf8"); assert.match(html, /<script src="\/kyro-navigation\.js\?v=kyro-navigation-1"><\/script>/);
  assert.ok(html.indexOf("kyro-navigation.js") < html.indexOf('src="/app.js'), "loaded before the app");
  assert.match(fs.readFileSync(path.join(ROOT, "public", "sw.js"), "utf8"), /kyro-navigation\.js/);
  const app = fs.readFileSync(path.join(ROOT, "public", "app.js"), "utf8");
  assert.match(app, /async function handleKyroNavigationCommand\(text, options = \{\}\)/); assert.match(app, /\/api\/nexus\/runtime\/navigation/);
  const routed = app.slice(app.indexOf("async function handleNexusUnifiedBrainRuntimeCommand("), app.indexOf("async function handleNexusHealthcareCollaborationRuntimeCommand("));
  assert.ok(routed.indexOf("handleNexusMentalHealthBehavioralWellnessCommand") < routed.indexOf("handleKyroNavigationCommand"), "safety support keeps priority");
  assert.ok(routed.indexOf("handleKyroNavigationCommand") < routed.indexOf("/api/nexus/runtime/behavior/turn"), "handled on the phone before the server is asked");
  assert.match(routed, /typeof handleKyroNavigationCommand === "function" && await handleKyroNavigationCommand\(text, options\)/);
  const browser = nav.forBrowser({ api: async () => ({}), locale: "en" }); assert.equal(typeof browser.handle, "function");
});
