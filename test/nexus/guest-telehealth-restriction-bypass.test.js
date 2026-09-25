"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4571;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-guest-telehealth-restriction-db.json");

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
let guestCookie;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const res = await fetch(`${base}/api/auth/guest-session`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ name: "Guest Tester" })
  });
  guestCookie = res.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
});

async function post(pathname, body) {
  const res = await fetch(`${base}${pathname}`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie: guestCookie },
    body: JSON.stringify(body)
  });
  return { status: res.status, body: await res.json() };
}

// Found live (uploads/telehealth/permissions follow-up audit): a guest
// session is created with restrictions: ["health-record-write", ...], but
// canWriteHealth() -- the gate on every real telehealth/pharmacy/mobile-
// clinic/healthcare-workflow route -- checked only user.role, never
// user.restrictions, so a guest (role "Standard User") passed it anyway.

test("a guest session cannot create a real telehealth encounter, despite its own restriction saying it can't write health records", async () => {
  const result = await post("/api/nexus/telehealth/create-encounter", {
    conditionArea: "general", confirmed: true, consentToPreparePacket: true
  });
  assert.equal(result.status, 403);
  assert.match(result.body.error, /does not allow/i);
});

// The medicalPostRoutes table's own restriction check used to key off
// shouldPersist (does this write a local record), but telehealth/session/
// create's videoProvider:"daily" path creates a REAL external Daily.co video
// room while writing no local record, so it was miscategorized as
// shouldPersist:false and the restriction check never ran on this one route.
test("a guest session cannot create a real telehealth video session either, even though this route writes no local record", async () => {
  const result = await post("/api/nexus/tools/telehealth/session/create", {
    confirmed: true, videoProvider: "daily", title: "Checkup"
  });
  assert.equal(result.status, 403);
  assert.match(result.body.error, /health records/i);
});
