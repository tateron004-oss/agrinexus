"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { describeStep, buildRoute, haversine, compass } = require("../../nexus/navigation/directions.js");
const { createNavigationService, PER_MINUTE } = require("../../nexus/navigation/service.js");

const step = (type, modifier, extra = {}) => ({ name: "", distance: 100, maneuver: { type, modifier, location: [36.8, -1.29], ...extra }, ...extra.step });

test("steps are worded the way a person would say them", () => {
  assert.equal(describeStep({ name: "Uhuru Highway", maneuver: { type: "depart", bearing_after: 45 } }), "Head north-east on Uhuru Highway");
  assert.equal(describeStep({ name: "", maneuver: { type: "depart", bearing_after: 180 } }), "Head south");
  assert.equal(describeStep(step("turn", "left", { step: { name: "Kenyatta Avenue" } })), "Turn left onto Kenyatta Avenue");
  assert.equal(describeStep(step("turn", "sharp right")), "Turn sharply right"); assert.equal(describeStep(step("turn", "slight left", { step: { name: "Ring Road" } })), "Bear left onto Ring Road");
  assert.equal(describeStep(step("turn", "uturn")), "Make a U-turn"); assert.equal(describeStep(step("end of road", "left", { step: { name: "Moi Avenue" } })), "At the end of the road, turn left onto Moi Avenue");
  assert.equal(describeStep(step("roundabout", "right", { exit: 2, step: { name: "Waiyaki Way" } })), "At the roundabout, take the second exit onto Waiyaki Way");
  assert.equal(describeStep(step("rotary", "left", { exit: 1 })), "At the roundabout, take the first exit");
  assert.equal(describeStep(step("fork", "slight left")), "Keep left at the fork"); assert.equal(describeStep(step("merge", "slight right", { step: { name: "Expressway" } })), "Merge right onto Expressway");
  assert.equal(describeStep(step("on ramp", "right")), "Take the ramp"); assert.equal(describeStep(step("off ramp", "right")), "Take the exit");
  assert.equal(describeStep(step("new name", "straight", { step: { name: "Lang'ata Road" } })), "Continue onto Lang'ata Road"); assert.equal(describeStep(step("continue", "left")), "Turn left");
  assert.equal(describeStep(step("arrive", "left")), "You have arrived, on your left"); assert.equal(describeStep(step("arrive", "straight")), "You have arrived");
  assert.equal(describeStep(step("something new")), "Continue"); assert.equal(describeStep(undefined), "Continue");
  assert.equal(compass(0), "north"); assert.equal(compass(359), "north"); assert.equal(compass(270), "west"); assert.equal(compass(-90), "west");
});

// A straight line north for about 2.2 km, with a turn at ~1 km and the arrival at the end.
function osrm() {
  const coordinates = []; for (let i = 0; i <= 200; i += 1) coordinates.push([36.8, -1.3 + i * 0.0001]); // 0.0001 degrees is about 11 m
  const at = index => coordinates[Math.min(index, coordinates.length - 1)];
  const mid = Math.floor(coordinates.length / 2);
  return { code: "Ok", routes: [{ distance: 2200, duration: 300, geometry: { coordinates }, legs: [{ steps: [
    { name: "First Road", distance: 1100, maneuver: { type: "depart", bearing_after: 0, location: at(0) } },
    { name: "Second Road", distance: 1100, maneuver: { type: "turn", modifier: "left", location: at(mid) } },
    { name: "", distance: 0, maneuver: { type: "arrive", modifier: "left", location: at(coordinates.length - 1) } }] }] }] };
}

test("a route puts every turn on the line the phone follows, in order, with arrival at the very end", () => {
  const route = buildRoute(osrm().routes[0]);
  assert.equal(route.steps.length, 3); assert.equal(route.steps[0].alongMeters, 0); assert.ok(route.steps[1].alongMeters > 900 && route.steps[1].alongMeters < 1300, String(route.steps[1].alongMeters));
  assert.equal(route.steps[2].alongMeters, route.distanceMeters); assert.equal(route.steps[1].instruction, "Turn left onto Second Road"); assert.equal(route.durationSeconds, 300);
  for (let i = 1; i < route.steps.length; i += 1) assert.ok(route.steps[i].alongMeters >= route.steps[i - 1].alongMeters);
  assert.ok(Math.abs(route.distanceMeters - 2220) < 40, `line length ${route.distanceMeters}`);
  assert.throws(() => buildRoute({ geometry: { coordinates: [[1, 1]] }, legs: [] }), /geometry/); assert.throws(() => buildRoute({ geometry: { coordinates: [[1, 1], [1, 2]] }, legs: [{ steps: [] }] }), /steps/);
});

test("a very long route is thinned to a size a phone can follow, keeping both ends", () => {
  const coordinates = Array.from({ length: 20000 }, (_, i) => [36 + i * 0.00001, -1]);
  const route = buildRoute({ distance: 22000, duration: 1, geometry: { coordinates }, legs: [{ steps: [{ name: "A", distance: 1, maneuver: { type: "depart", bearing_after: 90, location: coordinates[0] } }, { name: "", distance: 0, maneuver: { type: "arrive", location: coordinates.at(-1) } }] }] });
  assert.ok(route.geometry.length <= 6001); assert.deepEqual(route.geometry[0], coordinates[0]); assert.deepEqual(route.geometry.at(-1), coordinates.at(-1));
});

// ---------- the service, with a fake network ----------
function fakeNetwork(handlers = {}) {
  const calls = [];
  const fetchImpl = async (url, options = {}) => {
    calls.push({ url: String(url), options });
    const u = String(url); let result;
    if (/\/search\?/.test(u)) result = handlers.search ?? [{ lat: "-1.31", lon: "36.79", name: "Kibera Health Centre", address: { road: "Kibera Drive", suburb: "Kibera", city: "Nairobi" }, display_name: "Kibera Health Centre, Kibera Drive, Kibera, Nairobi, Kenya" }, { lat: "-1.40", lon: "36.90", name: "Kibera Clinic Far", address: { city: "Kajiado" } }];
    else if (/\/reverse\?/.test(u)) result = handlers.reverse ?? { name: "", address: { road: "Haile Selassie Avenue", suburb: "Starehe", city: "Nairobi", state: "Nairobi County" }, display_name: "Haile Selassie Avenue, Nairobi" };
    else result = handlers.route ?? osrm();
    if (result instanceof Error) throw result;
    if (typeof result === "number") return { ok: false, status: result, json: async () => ({}) };
    return { ok: true, status: 200, json: async () => result };
  };
  return { calls, fetchImpl };
}
const here = { lat: -1.3, lng: 36.8 };

test("a route is requested from the routing service with steps, for driving or walking, and comes back followable", async () => {
  const net = fakeNetwork(); const service = createNavigationService({ env: {}, fetchImpl: net.fetchImpl });
  const drive = await service.handle({ context: { userId: "u1" }, body: { action: "route", from: here, to: { lat: -1.28, lng: 36.8, label: "Home" }, mode: "drive" } });
  assert.equal(drive.status, 200); const route = drive.body.route;
  assert.equal(route.mode, "drive"); assert.equal(route.provider, "openstreetmap-osrm"); assert.deepEqual(route.destination, { label: "Home", lat: -1.28, lng: 36.8 }); assert.equal(route.steps[0].instruction, "Head north on First Road");
  assert.match(net.calls[0].url, /^https:\/\/router\.project-osrm\.org\/route\/v1\/driving\/36\.8,-1\.3;36\.8,-1\.28\?overview=full&geometries=geojson&steps=true/);
  assert.equal(net.calls[0].options.headers["user-agent"].startsWith("Kyro/"), true);
  const walk = await service.handle({ context: { userId: "u1" }, body: { action: "route", from: here, to: { lat: -1.28, lng: 36.8 }, mode: "walk" } });
  assert.match(net.calls[1].url, /^https:\/\/routing\.openstreetmap\.de\/routed-foot\/route\/v1\/driving\//); assert.equal(walk.body.route.provider, "openstreetmap-foot");
});

test("a destination given as words is searched for near the person, and the closest match wins", async () => {
  const net = fakeNetwork(); const service = createNavigationService({ env: {}, fetchImpl: net.fetchImpl });
  const found = await service.handle({ context: { userId: "u1" }, body: { action: "search", query: "Kibera clinic", near: here } });
  assert.equal(found.body.places[0].label, "Kibera Health Centre, Kibera Drive, Kibera, Nairobi"); assert.ok(found.body.places[0].distanceMeters < found.body.places[1].distanceMeters);
  assert.match(net.calls[0].url, /nominatim\.openstreetmap\.org\/search\?q=Kibera\+clinic.*viewbox=35\.8000%2C-0\.3000%2C37\.8000%2C-2\.3000/);
  const routed = await service.handle({ context: { userId: "u1" }, body: { action: "route", from: here, to: { query: "Kibera clinic" } } });
  assert.equal(routed.body.route.destination.label, "Kibera Health Centre, Kibera Drive, Kibera, Nairobi"); assert.equal(routed.body.route.destination.lat, -1.31);
  assert.match(net.calls.at(-1).url, /36\.8,-1\.3;36\.79,-1\.31/);
});

test("what is at a position is named, and nothing found is not an error", async () => {
  const service = createNavigationService({ env: {}, fetchImpl: fakeNetwork().fetchImpl });
  assert.equal((await service.handle({ context: { userId: "u1" }, body: { action: "reverse", position: here } })).body.place.label, "Haile Selassie Avenue, Starehe, Nairobi, Nairobi County");
  const nothing = createNavigationService({ env: {}, fetchImpl: fakeNetwork({ reverse: { error: "Unable to geocode" } }).fetchImpl });
  assert.deepEqual((await nothing.handle({ context: { userId: "u1" }, body: { action: "reverse", position: here } })).body.place, { label: "" });
});

test("bad requests and provider trouble come back as plain, honest errors", async () => {
  const ask = (body, net = fakeNetwork()) => createNavigationService({ env: {}, fetchImpl: net.fetchImpl }).handle({ context: { userId: "u1" }, body });
  await assert.rejects(ask({ action: "route", from: { lat: 95, lng: 36 }, to: { lat: 1, lng: 1 } }), { code: "invalid_position", status: 400 });
  await assert.rejects(ask({ action: "route", from: { lat: "x", lng: 36 }, to: { lat: 1, lng: 1 } }), { code: "invalid_position" }); await assert.rejects(ask({ action: "route", from: here, to: null }), { code: "invalid_query", status: 400 });
  await assert.rejects(ask({ action: "search", query: "   " }), { code: "invalid_query" }); await assert.rejects(ask({ action: "fly" }), { code: "invalid_action" });
  await assert.rejects(ask({ action: "route", from: here, to: { query: "Nowhere Land" } }, fakeNetwork({ search: [] })), { code: "place_not_found", status: 404 });
  await assert.rejects(ask({ action: "route", from: here, to: { lat: -1.30001, lng: 36.80001 } }), { code: "already_there" });
  await assert.rejects(ask({ action: "route", from: here, to: { lat: -1.2, lng: 36.8 } }, fakeNetwork({ route: { code: "NoRoute", routes: [] } })), { code: "no_route", status: 404 });
  await assert.rejects(ask({ action: "route", from: here, to: { lat: -1.2, lng: 36.8 } }, fakeNetwork({ route: 429 })), { code: "navigation_provider_busy", status: 503 });
  await assert.rejects(ask({ action: "route", from: here, to: { lat: -1.2, lng: 36.8 } }, fakeNetwork({ route: 500 })), { code: "navigation_provider_error", status: 502 });
  await assert.rejects(ask({ action: "route", from: here, to: { lat: -1.2, lng: 36.8 } }, fakeNetwork({ route: new Error("ECONNRESET") })), { code: "navigation_provider_unreachable", status: 502 });
  await assert.rejects(ask({ action: "route", from: here, to: { lat: -1.2, lng: 36.8 } }, fakeNetwork({ route: { code: "Ok", routes: [{ geometry: { coordinates: [[1, 1]] }, legs: [] }] } })), { code: "navigation_provider_error" });
});

test("each person is limited in how often they can ask, and the provider can be pointed at your own server or switched off", async () => {
  let clock = 1000000; const net = fakeNetwork(); const service = createNavigationService({ env: {}, fetchImpl: net.fetchImpl, now: () => clock });
  for (let i = 0; i < PER_MINUTE; i += 1) await service.handle({ context: { userId: "u1" }, body: { action: "reverse", position: here } });
  await assert.rejects(service.handle({ context: { userId: "u1" }, body: { action: "reverse", position: here } }), { code: "navigation_rate_limited", status: 429 });
  await service.handle({ context: { userId: "u2" }, body: { action: "reverse", position: here } }); clock += 61000;
  await service.handle({ context: { userId: "u1" }, body: { action: "reverse", position: here } });
  const own = fakeNetwork(); const custom = createNavigationService({ env: { NEXUS_ROUTING_DRIVE_URL: "https://routes.example.org/route/v1/driving/", NEXUS_GEOCODER_URL: "https://geo.example.org" }, fetchImpl: own.fetchImpl });
  const made = await custom.route({ from: here, to: { query: "somewhere" } });
  assert.match(own.calls[0].url, /^https:\/\/geo\.example\.org\/search/); assert.match(own.calls[1].url, /^https:\/\/routes\.example\.org\/route\/v1\/driving\/36\.8,-1\.3;/); assert.equal(made.provider, "custom");
  const off = createNavigationService({ env: { NEXUS_MAPS_PUBLIC_OSM_ENABLED: "false" }, fetchImpl: fakeNetwork().fetchImpl });
  await assert.rejects(off.route({ from: here, to: { lat: -1.2, lng: 36.8 } }), { code: "navigation_unavailable", status: 503 });
});

// Found live (navigation correctness audit): limit() only ever capped one
// user's own request rate -- there was no cache of identical/near-identical
// lookups at all, so several people asking "where am I" or searching for
// the same popular destination within a minute could send that many real,
// separate requests to the shared, rate-limited public Nominatim service --
// enough real-world concurrent use to plausibly get the deployment's shared
// IP rate-limited or banned, breaking navigation for every user.
test("identical search/reverse lookups within a short window are served from cache, not repeated against the real provider", async () => {
  let clock = 2000000; const net = fakeNetwork(); const service = createNavigationService({ env: {}, fetchImpl: net.fetchImpl, now: () => clock });
  const firstSearch = await service.handle({ context: { userId: "u1" }, body: { action: "search", query: "Kibera clinic", near: here } });
  const secondSearch = await service.handle({ context: { userId: "u2" }, body: { action: "search", query: "Kibera clinic", near: here } });
  assert.equal(net.calls.length, 1, "a second user's identical search must not repeat the real network call");
  assert.deepEqual(secondSearch.body.places, firstSearch.body.places);

  const firstReverse = await service.handle({ context: { userId: "u1" }, body: { action: "reverse", position: here } });
  const secondReverse = await service.handle({ context: { userId: "u2" }, body: { action: "reverse", position: here } });
  assert.equal(net.calls.length, 2, "a second user's identical reverse lookup must not repeat the real network call");
  assert.deepEqual(secondReverse.body.place, firstReverse.body.place);

  clock += 61000;
  await service.handle({ context: { userId: "u1" }, body: { action: "search", query: "Kibera clinic", near: here } });
  assert.equal(net.calls.length, 3, "a lookup past the cache window must hit the real provider again");
});

test("the viewbox sent to Nominatim is clamped to valid lat/lng ranges near the antimeridian and the poles", async () => {
  const net = fakeNetwork(); const service = createNavigationService({ env: {}, fetchImpl: net.fetchImpl });
  await service.handle({ context: { userId: "u1" }, body: { action: "search", query: "shop", near: { lat: 89.5, lng: 179.5 } } });
  const viewbox = decodeURIComponent(net.calls[0].url.match(/viewbox=([^&]+)/)[1]);
  const [minLng, maxLat, maxLng, minLat] = viewbox.split(",").map(Number);
  for (const value of [minLng, maxLng]) assert.ok(value >= -180 && value <= 180, `longitude ${value} out of range`);
  for (const value of [minLat, maxLat]) assert.ok(value >= -90 && value <= 90, `latitude ${value} out of range`);
});

test("the endpoint is wired behind sign-in, and a position is never written anywhere", () => {
  const adapter = fs.readFileSync(path.join(__dirname, "..", "..", "nexus", "compat", "server-runtime-adapter.js"), "utf8");
  assert.match(adapter, /url\.pathname === "\/api\/nexus\/runtime\/navigation" && req\.method === "POST"\) result = await navigation\.handle\(request\)/);
  assert.ok(adapter.indexOf("Authentication is required for authoritative Nexus tasks") < adapter.indexOf("runtime/navigation\" && req.method"), "sign-in is checked before the navigation route");
  const service = fs.readFileSync(path.join(__dirname, "..", "..", "nexus", "navigation", "service.js"), "utf8");
  assert.doesNotMatch(service, /console\.|logger|writeFile|insert into|localStorage/, "no logging or storage of anyone's position");
});

test("distances on the earth are right", () => { assert.ok(Math.abs(haversine([36.8219, -1.2921], [36.8219, -1.3021]) - 1112) < 5); assert.equal(Math.round(haversine([0, 0], [0, 0])), 0); });
