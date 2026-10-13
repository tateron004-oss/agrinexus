"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

// Found testing the live site: every voice map request (Kenya, Nigeria, a Nairobi to Mombasa route) opened the map, then the tool reported "Nexus card launcher failed for map" because the map has no workspace panel
// (the check wanted one). The model would then tell the person it could not open the map. The map is open once the full-screen map surface is set.

const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

test("dispatching a map action reports success when the full-screen map is open, with or without a workspace panel", () => {
  const start = app.indexOf("function dispatchGenesisWorkspaceAction(");
  const body = app.slice(start, app.indexOf("\nasync function ", start) > 0 ? app.indexOf("\nasync function ", start) : start + 12000);
  const tail = body.slice(body.lastIndexOf("genesis.workspace.acknowledged"));
  assert.match(tail, /if \(workspace === "map"\) return document\.body\.dataset\.genesisMapSurface === "full-scale-leaflet" \|\| ack\.visible;\s*return ack\.visible;/);
  assert.match(app, /document\.body\.dataset\.genesisMapSurface = "full-scale-leaflet";/, "set by the map launcher before the dispatch returns");
  assert.match(app, /throw new Error\(`Nexus card launcher failed for \$\{workspace\} \(\$\{requestId\}\)\.`\)/, "which is what threw for a map that had opened");
});
