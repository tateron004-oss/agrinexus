"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (server/ dir module sweep follow-up): spotifyOAuthStates (an in-memory Map keyed by
// OAuth state) was only ever cleaned up on a completed round trip through /api/music/spotify/callback
// -- a user who starts the login flow and abandons it (closes the tab, denies consent without Spotify
// redirecting back at all) left its entry in the Map forever, for the life of the server process.
// Fixed with a TTL: cleanupSpotifyOAuthStates() sweeps expired entries whenever a new login flow
// starts, and the callback route independently rejects a state older than the TTL even if it's still
// technically present. SPOTIFY_OAUTH_STATE_TTL_MS is env-configurable so this test can use a TTL of
// milliseconds instead of the real 10-minute default.
const root = path.resolve(__dirname, "..", "..");
const port = 4825;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-spotify-oauth-state-ttl-db.json");

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
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", SPOTIFY_CLIENT_ID: "test-client-id", SPOTIFY_OAUTH_STATE_TTL_MS: "50" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const loginRes = await fetch(`${base}/api/login`, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" })
  });
  assert.equal(loginRes.status, 200);
  cookie = loginRes.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

test("a Spotify OAuth state older than its TTL is rejected at the callback, not accepted indefinitely", async () => {
  const loginRes = await fetch(`${base}/api/music/spotify/login`, { headers: { cookie }, redirect: "manual" });
  assert.equal(loginRes.status, 302);
  const location = loginRes.headers.get("location");
  const state = new URL(location).searchParams.get("state");
  assert.ok(state, "a real state value must be issued");

  await wait(100); // past the 50ms test TTL

  const callbackRes = await fetch(`${base}/api/music/spotify/callback?state=${encodeURIComponent(state)}&code=fake-code`, { redirect: "manual" });
  const body = await callbackRes.json();
  assert.equal(callbackRes.status, 400);
  assert.match(body.error, /not recognized/i);
});
