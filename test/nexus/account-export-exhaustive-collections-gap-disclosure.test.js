"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (exhaustive follow-up sweep, same bug shape as three earlier
// disclosure fixes this session): ~60 more db.profile arrays across
// server.js's own inline routes (/api/trade/advanced, /api/workforce/advanced,
// /api/learning/advanced, /api/map/advanced, /api/intelligence/*,
// /api/cloud-agent/*) and several provider files were confirmed to carry no
// createdBy/requestedBy/userEmail field and were missing from
// knownUnownedProfileGaps() -- a real user who used any of these features
// then erased their account was told erasure was complete with no caveat.
// This test seeds one representative array from each of the six new
// disclosure blocks to confirm all six fire.
const root = path.resolve(__dirname, "..", "..");
const port = 4727;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-account-export-exhaustive-collections-gap-db.json");

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
  const seeded = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  seeded.profile.integrationEvents = [{ id: "integration-event-seed-1", providerId: "database", module: "Evidence", action: "test", createdAt: new Date().toISOString() }];
  seeded.profile.walletTransactions = [{ id: "wallet-txn-seed-1", amount: 10, createdAt: new Date().toISOString() }];
  seeded.profile.fieldZones = [{ id: "field-zone-seed-1", status: "field-zone-ready", createdAt: new Date().toISOString() }];
  seeded.profile.timesheets = [{ id: "timesheet-seed-1", createdAt: new Date().toISOString() }];
  seeded.profile.nexusReminders = [{ id: "nexus-reminder-seed-1", createdAt: new Date().toISOString() }];
  // Course-enrollment cross-user collision fix: certificates (and its
  // learning siblings) moved off this shared db.profile blob onto the user
  // record itself, which has a real owner -- so, unlike the five true gaps
  // above, it is seeded on the admin user directly and is expected to show
  // up in the real export payload below, not in the gap disclosure list.
  const adminUser = seeded.users.find(item => item.email === "admin@agrinexus.org");
  adminUser.certificates = [{ id: "certificate-seed-1", courseId: "course-1", createdAt: new Date().toISOString() }];
  fs.writeFileSync(tempDbPath, JSON.stringify(seeded));
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
  fs.rmSync(tempDbPath, { force: true });
});

test("account export honestly discloses all six new unowned-collection gaps, instead of implying completeness", async () => {
  const loginRes = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" }) });
  assert.equal(loginRes.status, 200);
  const cookie = loginRes.headers.get("set-cookie").split(";")[0];

  const exportRes = await fetch(`${base}/api/account/export`, { method: "POST", headers: { "content-type": "application/json", cookie } });
  const exportBody = await exportRes.json();
  assert.equal(exportRes.status, 200, JSON.stringify(exportBody));
  const gaps = exportBody.knownGaps.join(" | ");
  assert.match(gaps, /integration event/i, "agent/AI/ops evidence gap must be disclosed");
  assert.match(gaps, /wallet transaction/i, "trade/logistics/finance gap must be disclosed");
  assert.match(gaps, /field zone/i, "map/logistics gap must be disclosed");
  assert.match(gaps, /timesheet/i, "workforce operations gap must be disclosed");
  assert.doesNotMatch(gaps, /certificate/i, "learning records now have a real owner and must not be disclosed as an unowned gap");
  assert.equal(exportBody.recordCounts.certificates, 1, "the admin's own certificate must appear in the real export instead of being disclosed as a gap");
  assert.match(gaps, /legacy voice reminder/i, "provider-bridge records gap must be disclosed");
});
