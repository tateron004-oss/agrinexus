"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (follow-up sweep to PR #747): the SAME "reference number
// generated from array.length, but the array also gets `.slice()`-truncated
// elsewhere" bug class -- already fixed for 11 drone/field sites -- was
// still present in OVER 30 more sites across the file, most notably: the
// /api/map/advanced handler's OWN sibling switch branches (field-zone was
// fixed in #747, but facility-route/disruption/risk-layer/evidence/farmer-
// location, five branches of the exact same switch statement, were missed),
// and every branch of /api/health/rural-network's switch statement (9
// sibling record types). This is a follow-up commit on the same branch/PR
// closing out every remaining confirmed instance.
const root = path.resolve(__dirname, "..", "..");
const port = 4721;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-drone-record-reference-number-collisions-sweep-db.json");

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
  const loginRes = await fetch(`${base}/api/login`, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" })
  });
  assert.equal(loginRes.status, 200);
  cookie = loginRes.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

function readTempDb() {
  return JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
}

async function post(pathname, body) {
  const res = await fetch(`${base}${pathname}`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify(body) });
  const responseBody = await res.json();
  assert.equal(res.status, 200, JSON.stringify(responseBody));
  return responseBody;
}

test("/api/map/advanced's OTHER sibling branches (not just field-zone) stay unique past the 20-item cap", async () => {
  for (let i = 0; i < 22; i += 1) {
    await post("/api/map/advanced", { type: "facility-route" });
  }
  const refs = readTempDb().profile.facilityRoutes.map(item => item.routeNumber);
  assert.equal(new Set(refs).size, refs.length, `expected all facility route numbers to be unique: ${JSON.stringify(refs)}`);
});

test("/api/health/rural-network's sibling branches stay unique past the 20-item cap", async () => {
  for (let i = 0; i < 22; i += 1) {
    await post("/api/health/rural-network", { type: "nearest-clinic" });
  }
  const refs = readTempDb().profile.ruralClinicMatches.map(item => item.matchNumber);
  assert.equal(new Set(refs).size, refs.length, `expected all rural clinic match numbers to be unique: ${JSON.stringify(refs)}`);
});
