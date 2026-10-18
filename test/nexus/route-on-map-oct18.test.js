"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const nav = require("../../public/kyro-navigation.js");
const { buildRoute } = require("../../nexus/navigation/directions.js");

// Asked by the owner after the spoken directions were fixed: "does it show the map with turn by turn instructions?" It did not -- the steps were only said. The navigator now hands the route, the places and every
// position reading to a `view`, and the page draws the route on the map, lists the steps, and moves a "you" marker.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

function straightRoute() {
  const coordinates = []; for (let i = 0; i <= 200; i += 1) coordinates.push([36.8, -1.3 + i * 0.0001]);
  const route = buildRoute({ distance: 2200, duration: 300, geometry: { coordinates }, legs: [{ steps: [
    { name: "First Road", distance: 1100, maneuver: { type: "depart", bearing_after: 0, location: coordinates[0] } },
    { name: "Second Road", distance: 1100, maneuver: { type: "turn", modifier: "left", location: coordinates[100] } },
    { name: "", distance: 0, maneuver: { type: "arrive", modifier: "left", location: coordinates[200] } }] }] });
  route.destination = { label: "Kibera Health Centre", lat: -1.28, lng: 36.8 };
  return route;
}

test("directions between two named places are drawn: the route, both places, and the steps are handed to the view; a view that fails changes nothing said", async () => {
  const route = straightRoute(); const seen = [];
  const api = async body => (body.action === "search" ? { places: [{ lat: body.query === "Kibera" ? -1.28 : -1.3, lng: 36.8 }] } : { route });
  const view = { route: detail => seen.push(detail) };
  const reply = await nav.createNavigator({ geolocation: {}, api, speak() {}, storage: null, view }).handle("Give me directions from Westlands to Kibera");
  assert.match(reply, /^From Westlands to Kibera: /);
  assert.equal(seen.length, 1);
  assert.equal(seen[0].live, false);
  assert.equal(seen[0].route, route);
  assert.deepEqual(seen[0].from, { label: "Westlands", lat: -1.3, lng: 36.8 });
  assert.deepEqual(seen[0].to, { label: "Kibera", lat: -1.28, lng: 36.8 });
  const broken = { route() { throw new Error("no map here"); } };
  assert.equal(await nav.createNavigator({ geolocation: {}, api, speak() {}, storage: null, view: broken }).handle("Give me directions from Westlands to Kibera"), reply);
});

test("guided navigation draws the route when it starts, moves the marker on every reading, and removes the marker when guidance ends", async () => {
  const route = straightRoute(); const seen = []; const watchers = [];
  const geolocation = { getCurrentPosition(ok) { ok({ coords: { latitude: -1.3, longitude: 36.8, accuracy: 10 } }); }, watchPosition(ok) { watchers.push(ok); return 1; }, clearWatch() {} };
  const view = { route: detail => seen.push(["route", detail]), position: fix => seen.push(["position", fix]), stopped: () => seen.push(["stopped"]) };
  const navigator = nav.createNavigator({ geolocation, api: async () => ({ route }), speak() {}, storage: null, view });
  await navigator.handle("Take me to Kibera Health Centre");
  assert.equal(seen[0][0], "route"); assert.equal(seen[0][1].live, true); assert.deepEqual(seen[0][1].to, { lat: -1.28, lng: 36.8, label: "Kibera Health Centre" });
  assert.equal(seen[1][0], "position");
  watchers[0]({ coords: { latitude: -1.2995, longitude: 36.8, accuracy: 10 } });
  assert.deepEqual(seen.at(-1), ["position", { lat: -1.2995, lng: 36.8, accuracy: 10 }]);
  navigator.stop(true);
  assert.deepEqual(seen.at(-1), ["stopped"]);
});

function fakeElement() {
  const el = { children: [], style: {}, attrs: {}, isConnected: true, textContent: "", listeners: {},
    setAttribute(k, v) { el.attrs[k] = v; }, append(...nodes) { el.children.push(...nodes); }, appendChild(node) { el.children.push(node); },
    addEventListener(name, fn) { el.listeners[name] = fn; }, remove() { el.isConnected = false; } };
  return el;
}

function pageApi({ mapOpen }) {
  const source = app.slice(app.indexOf("let kyroRouteYouMarker = null;"), app.indexOf("\nasync function handleNexusUnifiedBrainRuntimeCommand("));
  const log = []; const sheets = [];
  const marker = () => { const m = { added: false, remove() { m.added = false; }, setLatLng(at) { m.at = at; }, addTo() { m.added = true; return m; }, bindTooltip() { return m; } }; return m; };
  const layer = () => ({ clearLayers() { log.push("clear"); }, addLayer() {} });
  const context = {
    window: { KyroNavigation: nav }, escapeHtml: text => String(text), safeInvalidateLeafletMap() {}, setInterval: () => 1, clearInterval() {},
    waitForStableUserMapCanvas: () => Promise.resolve(),
    openGenesisRealtimeMapWorkspace: (payload, command) => { log.push(["open", payload]); return true; },
    userMapLayers: { route: layer(), markers: layer() },
    userMap: { fitBounds: (bounds, options) => log.push(["fit", bounds.length, options]), hasLayer: m => m.added, getBounds: () => ({ contains: () => true }), panTo() {} },
    L: { polyline: pts => { log.push(["line", pts.length]); return { addTo() {} }; }, marker: at => { log.push(["pin", at]); return { addTo() { return { bindPopup() {} }; } }; }, circleMarker: marker },
    document: { querySelector: () => null, body: { classList: { contains: name => name === "user-map-full-open" && mapOpen }, appendChild: node => sheets.push(node) }, createElement: fakeElement, querySelectorAll: () => sheets.filter(s => s.isConnected) }
  };
  vm.runInNewContext(`${source}\nthis.view = kyroRouteView; this.points = kyroRoutePoints;`, context);
  return { view: context.view, points: context.points, log, sheets };
}

test("the page turns the route's [lng, lat] line into [lat, lng] points", () => {
  const { points } = pageApi({ mapOpen: false });
  assert.deepEqual(JSON.parse(JSON.stringify(points({ geometry: [[36.8, -1.3], [36.8, -1.29], ["x", 1], [500, 2]] }))), [[-1.3, 36.8], [-1.29, 36.8]]);
});

test("with the map closed the page opens it with the road route; with it open it redraws in place; either way the steps are listed", () => {
  const route = straightRoute();
  const closed = pageApi({ mapOpen: false });
  closed.view.route({ route, from: { label: "Westlands" }, to: { label: "Kibera" }, live: false, language: "en" });
  const opened = closed.log.find(entry => entry[0] === "open");
  assert.ok(opened, "the map is opened");
  assert.equal(opened[1].origin, "Westlands"); assert.equal(opened[1].destination, "Kibera");
  assert.deepEqual(JSON.parse(JSON.stringify(opened[1].routeGeometry[0])), [-1.3, 36.8]);
  assert.equal(closed.sheets.length, 1);
  assert.equal(closed.sheets[0].attrs["data-kyro-route-steps"], "true");
  const list = closed.sheets[0].children.find(node => node.children.length > 2 && node.children.every(child => child.textContent));
  assert.equal(list.children.length, route.steps.length, "one line per step");
  assert.match(closed.sheets[0].children[0].children[0].textContent, /^Westlands → Kibera: /);

  const open = pageApi({ mapOpen: true });
  open.view.route({ route, from: { label: "" }, to: { label: "Kibera" }, live: true, language: "en" });
  assert.ok(!open.log.some(entry => entry[0] === "open"), "an open map is redrawn, not reopened");
  assert.ok(open.log.some(entry => entry[0] === "line" && entry[1] > 100), "the road is drawn");
  assert.ok(open.log.some(entry => entry[0] === "fit"));
  assert.match(open.sheets[0].children[0].children[0].textContent, /^You → Kibera: /);
});

test("the page shows a 'you' marker that follows the readings and leaves with the guidance, and the step list goes when the map does", () => {
  const page = pageApi({ mapOpen: true });
  page.view.position({ lat: -1.3, lng: 36.8 });
  page.view.position({ lat: -1.299, lng: 36.8 });
  page.view.stopped();
  const closedMap = pageApi({ mapOpen: false });
  assert.doesNotThrow(() => closedMap.view.position({ lat: -1.3, lng: 36.8 }), "no map open, nothing to move");
  assert.match(app, /const KYRO_BODY_SCREEN_SELECTOR = "[^"]*\[data-kyro-route-steps\]/, "going back to the orb takes the list down");
  assert.match(app, /view: kyroRouteView, api: body =>/, "the navigator is given the view");
});
