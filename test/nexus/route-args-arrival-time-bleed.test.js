const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4551;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-route-args-arrival-time-bleed-db.json");

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
    // NEXUS_MAPS_PUBLIC_OSM_ENABLED=false makes publicOsmRoute() return null
    // immediately (server/providers/googleMapsProvider.js:87) instead of
    // attempting a real network call to Nominatim/OSRM -- this test only
    // cares about the extracted origin/destination strings, not whether a
    // live geocode succeeds, so it must not depend on real network access
    // (which always fails in CI's isolated sandbox, and is flaky even
    // locally depending on live third-party service availability).
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_MAPS_PUBLIC_OSM_ENABLED: "false" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" })
  });
  cookie = res.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
});

async function callRoute(command) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_maps_route", arguments: { command } })
  });
  return res.json();
}

// Asserting only on providerData.destination/origin (not on real geocoding
// succeeding) is deliberate: server/providers/googleMapsProvider.js's
// route() populates these same two fields identically whether the real
// public OSRM/Nominatim call succeeds or -- as it always will in CI's
// network-isolated sandbox -- fails and falls back to the safe
// credential-blocked "route URL" response. Asserting on destinationResolved
// or real coordinates would make this test network-dependent and flaky
// exactly the way this project's established CI lesson warns against.
test("a trailing 'by <time>' clause is stripped from the destination", async () => {
  const result = await callRoute("Show a route from Stockton to Sacramento by 5pm.");
  assert.equal(result.providerData.destination, "Sacramento");
});

test("a trailing 'at <time>' clause is also stripped", async () => {
  const result = await callRoute("Show a route from Stockton to Sacramento at 5pm.");
  assert.equal(result.providerData.destination, "Sacramento");
});

test("a route with no trailing time clause is unaffected", async () => {
  const result = await callRoute("Show a route from Stockton to Sacramento.");
  assert.equal(result.providerData.origin, "Stockton");
  assert.equal(result.providerData.destination, "Sacramento");
});

test("a via-clause after the destination is still excluded, unaffected by the arrival-time fix", async () => {
  const result = await callRoute("Show a route from Stockton to Sacramento via Elk Grove.");
  assert.equal(result.providerData.destination, "Sacramento");
});
