"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// Found live: drawShipmentRoute() always drew the "Live shipment" marker at state.originPoint (the
// fixed pickup point) whenever real route geometry was available -- the BEST-data case -- instead of
// state.livePoint (the real current GPS position), which is computed right there in
// shipmentTrackingState() and is already correctly preferred by the sibling no-routeGeometry fallback
// a few lines below. A user tracking a real, live-tracked shipment saw the marker glued to the start
// point for the entire trip, while the popup's own ETA/checkpoint text kept updating -- a visible
// contradiction between the marker position and the tracking text right next to it.
const appSource = fs.readFileSync(path.join(__dirname, "..", "..", "public", "app.js"), "utf8");

function extractFunction(name) {
  let start = appSource.indexOf(`function ${name}(`);
  assert.ok(start > 0, `could not locate function ${name} in app.js`);
  const parenStart = appSource.indexOf("(", start);
  let parenDepth = 0;
  let parenEnd = parenStart;
  for (; parenEnd < appSource.length; parenEnd += 1) {
    if (appSource[parenEnd] === "(") parenDepth += 1;
    else if (appSource[parenEnd] === ")") { parenDepth -= 1; if (parenDepth === 0) break; }
  }
  const bodyStart = appSource.indexOf("{", parenEnd);
  let depth = 0; let i = bodyStart;
  for (; i < appSource.length; i += 1) {
    if (appSource[i] === "{") depth += 1;
    else if (appSource[i] === "}") { depth -= 1; if (depth === 0) break; }
  }
  return appSource.slice(start, i + 1);
}

function loadDrawShipmentRoute() {
  const markerCalls = [];
  const chainable = () => ({ addTo: () => ({ bindPopup: () => {}, bindTooltip: () => {} }) });
  const context = {
    window: {},
    data: { profile: {} },
    translateText: value => value,
    escapeHtml: value => value,
    L: {
      divIcon: () => ({}),
      marker: (point, opts) => { markerCalls.push(Array.from(point)); return chainable(); },
      polyline: () => chainable(),
      circleMarker: () => chainable()
    }
  };
  context.window.L = context.L;
  vm.createContext(context);
  vm.runInContext(`${extractFunction("shipmentTrackingState")}\n${extractFunction("shipmentMarkerIcon")}\n${extractFunction("drawShipmentRoute")}\ndrawShipmentRoute;`, context);
  const draw = (layer, route, options) => vm.runInContext("drawShipmentRoute", context)(layer, route, options);
  return { draw, markerCalls };
}

test("the live shipment marker follows the real current GPS position, not the frozen pickup point, when real route geometry is available", () => {
  const { draw, markerCalls } = loadDrawShipmentRoute();
  const route = { checkpoints: ["Pickup", "In transit", "Delivered"] };
  const order = {
    checkpoint: "In transit",
    liveTracking: {
      routeGeometry: [[-1.28, 36.82], [-1.0, 36.9], [-0.28, 37.07]],
      originLat: -1.28, originLng: 36.82,
      destinationLat: -0.28, destinationLng: 37.07,
      latitude: -0.7, longitude: 36.95 // the real, current live position -- partway along the route
    }
  };
  const layer = { clearLayers: () => {} };
  draw(layer, route, { order });
  assert.equal(markerCalls.length, 1, "expected exactly one shipment marker to be drawn");
  assert.deepEqual(markerCalls[0], [-0.7, 36.95], "the marker must be drawn at the real live GPS position, not the fixed origin point");
});

test("falls back to the origin point when no live GPS position is available, unaffected by the fix", () => {
  const { draw, markerCalls } = loadDrawShipmentRoute();
  const route = { checkpoints: ["Pickup", "In transit", "Delivered"] };
  const order = {
    checkpoint: "Pickup",
    liveTracking: {
      routeGeometry: [[-1.28, 36.82], [-1.0, 36.9], [-0.28, 37.07]],
      originLat: -1.28, originLng: 36.82,
      destinationLat: -0.28, destinationLng: 37.07
      // no latitude/longitude -- no live GPS fix yet
    }
  };
  const layer = { clearLayers: () => {} };
  draw(layer, route, { order });
  assert.equal(markerCalls.length, 1);
  assert.deepEqual(markerCalls[0], [-1.28, 36.82], "must fall back to the origin point when no live position is available");
});
