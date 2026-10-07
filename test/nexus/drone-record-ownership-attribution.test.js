"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (drone/account-erasure audit): /api/trade/drone-scan,
// /api/trade/drone-mission, /api/trade/drone-intervention, and
// /api/trade/drone-advanced all hardcoded source: "operator" instead of the
// real signed-in user's email -- unlike the equivalent field-intelligence
// launch-kit path, which already used source: user.email. Per this
// codebase's own PROFILE_OWNER_FIELDS convention, these arrays are scanned by
// createdBy for real account export/erasure (server.js's
// collectOwnedProfileRecords/eraseOwnedProfileRecords) -- a record stamped
// "operator" matches no real account, so a real user's drone scans/
// missions/interventions/advanced operations were permanently unattributable:
// invisible to their own data export, and left behind forever by account
// erasure.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-drone-record-ownership-attribution-db.json");

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

async function post(pathname, body = {}) {
  const res = await fetch(`${base}${pathname}`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify(body) });
  return { status: res.status, body: await res.json() };
}

test("real drone scans, missions, interventions and advanced operations are attributed to the real signed-in user, not a fixed 'operator' placeholder", async () => {
  const scanResult = await post("/api/trade/drone-scan", {});
  assert.equal(scanResult.status, 200, JSON.stringify(scanResult.body));

  const missionResult = await post("/api/trade/drone-mission", {});
  assert.equal(missionResult.status, 200, JSON.stringify(missionResult.body));

  const interventionResult = await post("/api/trade/drone-intervention", {});
  assert.equal(interventionResult.status, 200, JSON.stringify(interventionResult.body));

  const advancedResult = await post("/api/trade/drone-advanced", { type: "field-report" });
  assert.equal(advancedResult.status, 200, JSON.stringify(advancedResult.body));

  const exportResult = await post("/api/account/export");
  assert.equal(exportResult.status, 200, JSON.stringify(exportResult.body));
  assert.ok(exportResult.body.ok, JSON.stringify(exportResult.body));

  assert.equal(exportResult.body.recordCounts.droneScans, 1,
    "the real drone scan just created must be attributed to this account's own export, not stamped with a placeholder that matches nobody");
  assert.equal(exportResult.body.recordCounts.droneMissions, 1,
    "the real drone mission just created must be attributed to this account's own export");
  assert.equal(exportResult.body.recordCounts.fieldInterventions, 1,
    "the real field intervention just created must be attributed to this account's own export");
  assert.equal(exportResult.body.recordCounts.droneFieldReports, 1,
    "the real advanced-drone field report just created must be attributed to this account's own export");
});
