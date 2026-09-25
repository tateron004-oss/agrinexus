"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4574;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-genesis-voice-guest-restriction-db.json");

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

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
});

test.after(() => {
  server.kill();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
});

// Found live (push/auth/call-screening follow-up audit): genesisVoiceGuestUser
// -- a SECOND, separate anonymous guest identity issued with zero identity
// verification (not even a typed name, unlike /api/auth/guest-session) to
// anyone who calls /api/voice/realtime/session while unauthenticated -- had
// no restrictions array at all, so an anonymous voice caller could still
// trigger what the app believed was a real outbound Twilio call.
test("an anonymous genesis-voice guest (no login at all) cannot place a real outbound call via the realtime tool gateway", async () => {
  const sessionRes = await fetch(`${base}/api/voice/realtime/session`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ language: "en" })
  });
  const setCookie = sessionRes.headers.get("set-cookie");
  assert.ok(setCookie, "expected the anonymous voice session to be issued a bounded guest cookie");
  const guestCookie = setCookie.split(";")[0];

  const toolRes = await fetch(`${base}/api/voice/realtime/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie: guestCookie },
    body: JSON.stringify({ arguments: { command: "call the doctor about my rash at +15551234567, do it" } })
  });
  assert.equal(toolRes.status, 200);
  const firstBody = await toolRes.json();
  assert.match(firstBody.response, /please confirm/i, "expected the call to be staged pending a yes/no confirmation");

  const confirmRes = await fetch(`${base}/api/voice/realtime/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie: guestCookie },
    body: JSON.stringify({ arguments: { command: "yes" } })
  });
  const body = await confirmRes.json();
  assert.match(body.response, /restricted-account-no-real-call/, "must be refused for the restriction, not silently placed as a real call");
  assert.doesNotMatch(body.response, /Calling now/i);
});
