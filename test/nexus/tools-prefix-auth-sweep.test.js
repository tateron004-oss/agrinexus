"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (final /api/nexus/tools/* sweep, closing out the missing-auth
// bug class this session's earlier fixes started): the whole /api/nexus/
// tools/* prefix backs real provider actions -- saved field-visit plans
// with real addresses, saved provider contacts/notes, saved learning
// resources, real drone mission requests with a real farm location,
// marketplace listings, workflow plans, real Zoom meeting creation, real
// Google Maps Directions calls -- and, through ten separate sibling
// routes, the exact same db.profile.nexusReminders/offlineQueue arrays the
// direct reminders/offline routes were already gated for. Only a handful
// of individual routes (medicalGetRoutes/medicalPostRoutes, the sms/
// whatsapp/call senders) had been fixed one route at a time; everything
// else under this prefix had no auth check at all. Gated the whole prefix
// in one place instead of chasing each route.

const root = path.resolve(__dirname, "..", "..");
const port = 4627;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-tools-prefix-auth-sweep-db.json");

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
let adminCookie;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const adminRes = await fetch(`${base}/api/login`, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" })
  });
  adminCookie = adminRes.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
});

const PREVIOUSLY_UNGATED_ROUTES = [
  "/api/nexus/tools/maps/field-visit/save",
  "/api/nexus/tools/maps/field-visit/saved",
  "/api/nexus/tools/maps/field-visit/reminder",
  "/api/nexus/tools/maps/field-visit/offline",
  "/api/nexus/tools/providers/save",
  "/api/nexus/tools/providers/note",
  "/api/nexus/tools/learning/save",
  "/api/nexus/tools/learning/reminder",
  "/api/nexus/tools/learning/offline",
  "/api/nexus/tools/lms/bridge/save-course",
  "/api/nexus/tools/drones/mission-request",
  "/api/nexus/tools/drones/bridge/mission-request",
  "/api/nexus/tools/drones/bridge/mission-requests",
  "/api/nexus/tools/drones/bridge/reminder",
  "/api/nexus/tools/drones/bridge/offline",
  "/api/nexus/tools/marketplace/listing",
  "/api/nexus/tools/marketplace/listings",
  "/api/nexus/tools/marketplace/note",
  "/api/nexus/tools/marketplace/reminder",
  "/api/nexus/tools/marketplace/offline",
  "/api/nexus/tools/workflows/save",
  "/api/nexus/tools/workflows/reminder",
  "/api/nexus/tools/workflows/offline",
  "/api/nexus/tools/zoom/meeting",
  "/api/nexus/tools/sessions/zoom/create",
  "/api/nexus/tools/sessions/reminder",
  "/api/nexus/tools/sessions/offline",
  "/api/nexus/tools/maps/route",
  "/api/nexus/tools/maps/field-visit/route",
  "/api/nexus/tools/reminders",
  "/api/nexus/tools/reminders/create",
  "/api/nexus/tools/offline/queue",
  "/api/nexus/tools/offline/bridge/items",
  "/api/nexus/tools/offline/bridge/queue"
];

test("every previously-unauthenticated /api/nexus/tools/* action route now requires sign-in", async () => {
  for (const pathname of PREVIOUSLY_UNGATED_ROUTES) {
    const res = await fetch(`${base}${pathname}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: "{}"
    });
    assert.equal(res.status, 401, `${pathname} must require sign-in`);
  }
});

test("/status routes under the same prefix remain reachable without signing in", async () => {
  for (const pathname of ["/api/nexus/tools/status", "/api/nexus/tools/communications/status", "/api/nexus/tools/maps/status", "/api/nexus/tools/reminders/status"]) {
    const res = await fetch(`${base}${pathname}`);
    assert.notEqual(res.status, 401, `${pathname} must stay reachable without sign-in (capability descriptor, no real content)`);
  }
});

test("a signed-in caller still reaches real /api/nexus/tools/* actions, unaffected by the prefix gate", async () => {
  const res = await fetch(`${base}/api/nexus/tools/reminders/create`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie: adminCookie },
    body: JSON.stringify({ confirmed: true, title: "Check on the north field", dueAt: "tomorrow" })
  });
  assert.notEqual(res.status, 401);
});
