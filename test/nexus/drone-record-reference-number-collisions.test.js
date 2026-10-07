"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (drone/course audit, confirmed twice independently): every
// drone/field record reference number (missionRef/scanRef/findingRef/
// taskRef/reportRef/planRef/alertRef/sprayRef/forecastRef/auditRef/
// zoneNumber) was generated from `array.length + 1`, but every one of these
// arrays is immediately capped with `.unshift(record); array =
// array.slice(0, 20)` right after insertion -- once an account has created
// more than 20 records of a given type, `.length` permanently stays at 20,
// so the ref generator keeps computing the same suffix forever. Every
// subsequent record of that type got an identical "unique" reference
// number, breaking any downstream lookup that identifies a record by its
// human-readable ref.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-drone-record-reference-number-collisions-db.json");

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
    body: JSON.stringify({ email: "demo@agrinexus.org", password: "Prototype2026!" })
  });
  assert.equal(loginRes.status, 200);
  cookie = loginRes.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

async function createDroneScan() {
  const res = await fetch(`${base}/api/trade/drone-scan`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({}) });
  const body = await res.json();
  assert.equal(res.status, 200, JSON.stringify(body));
  return body.state?.droneScans?.[0]?.scanRef || body.droneScans?.[0]?.scanRef;
}

function readTempDb() {
  return JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
}

test("drone scan reference numbers stay unique past the 20-item display cap, instead of colliding forever after #20", async () => {
  const refs = [];
  for (let i = 0; i < 22; i += 1) {
    await createDroneScan();
    const db = readTempDb();
    refs.push(db.profile.droneScans[0].scanRef);
  }
  const uniqueRefs = new Set(refs);
  assert.equal(uniqueRefs.size, refs.length,
    `expected all ${refs.length} drone scan reference numbers to be unique, but found duplicates: ${JSON.stringify(refs)}`);
  // The 21st and 22nd scans (both created after the array's own 20-item cap
  // kicked in) are exactly the pair that collided before the fix.
  assert.notEqual(refs[20], refs[21]);
});
