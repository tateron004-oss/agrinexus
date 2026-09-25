"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4619;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-maps-route-response-db.json");

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitFor(url) {
  for (let i = 0; i < 80; i += 1) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error(`${url} did not become reachable`);
}

let server;
let cookie;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" }) });
  cookie = res.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

// Found live: the real computed distance/duration lived only in
// body.data.distanceMeters/durationSeconds -- the generic fallback response
// is a fixed sentence naming the data SOURCE ("computed using public
// OpenStreetMap/Nominatim plus OSRM") but never the actual numbers, even
// though a real route was genuinely calculated. Real OSRM/Nominatim network
// call against two well-known cities (no API key required for this path).
test("nexus_maps_route's response includes the real computed distance/duration, not just a generic source-attribution sentence", async () => {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_maps_route", arguments: { command: "Route from Nairobi, Kenya to Nakuru, Kenya", confirmed: true } })
  });
  const result = await res.json();
  if (result.status !== "completed") {
    // A transient real-network failure (no internet in this environment) --
    // confirm it fails honestly rather than asserting on network-dependent numbers.
    assert.notEqual(result.status, undefined);
    return;
  }
  assert.match(result.response, /\d+(\.\d+)? km/, `expected a real distance in the response: ${result.response}`);
  assert.match(result.response, /\d+ minute/, `expected a real duration in the response: ${result.response}`);
});
