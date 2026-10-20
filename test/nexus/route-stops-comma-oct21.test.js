"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const server = fs.readFileSync(path.join(__dirname, "..", "..", "server.js"), "utf8");
const slice = (source, start) => { const at = source.indexOf(start); return source.slice(at, source.indexOf("\n}\n", at) + 3); };

// Found live after #1137: the speech reader writes "from Nairobi to Nakuru, via Naivasha." with a comma, and the stop was read as part of the destination ("Nakuru, via Naivasha"), which no map knows.
const raw = new vm.Script(`${slice(server, "function nexusOpenAiNativeExtractRouteArgs(")}\nnexusOpenAiNativeExtractRouteArgs`).runInNewContext({ sanitizePilotText: value => String(value || "").trim(), stripTrailingArrivalTimeClause: value => value });
const extract = (...args) => JSON.parse(JSON.stringify(raw(...args)));

test("a stop after a comma is a stop, not part of the destination", () => {
  assert.deepEqual(extract("Show me a route from Nairobi to Nakuru, via Naivasha.", {}), { origin: "Nairobi", destination: "Nakuru", waypoints: ["Naivasha"] });
  assert.deepEqual(extract("Show me a route from Nairobi to Nakuru via Naivasha.", {}), { origin: "Nairobi", destination: "Nakuru", waypoints: ["Naivasha"] });
  assert.deepEqual(extract("Directions from Nairobi to Kisumu, stopping at Nakuru, and Kericho.", {}), { origin: "Nairobi", destination: "Kisumu", waypoints: ["Nakuru", "Kericho"] });
  assert.deepEqual(extract("Directions from Nairobi to Kisumu through Naivasha, Nakuru and Kericho", {}), { origin: "Nairobi", destination: "Kisumu", waypoints: ["Naivasha", "Nakuru", "Kericho"] });
});

test("a destination the model passed with the stops attached is split", () => {
  assert.deepEqual(extract("route please", { origin: "Nairobi", destination: "Nakuru, via Naivasha" }), { origin: "Nairobi", destination: "Nakuru", waypoints: ["Naivasha"] });
  assert.deepEqual(extract("route please", { origin: "Nairobi", destination: "Nakuru via Naivasha", waypoints: ["Gilgil"] }), { origin: "Nairobi", destination: "Nakuru", waypoints: ["Gilgil"] });
});

test("a route with no stops is unchanged", () => {
  assert.deepEqual(extract("Show me a route from Nairobi to Nakuru.", {}), { origin: "Nairobi", destination: "Nakuru", waypoints: [] });
  assert.deepEqual(extract("anything", { origin: "A", destination: "B" }), { origin: "A", destination: "B", waypoints: [] });
});
