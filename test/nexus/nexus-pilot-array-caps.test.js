"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (nexus* array cap audit): db.nexusPilotRecords, db.nexusPilotReviewQueue,
// db.nexusPilotOfflineQueue, db.nexusNotifications, db.nexusCommunications, db.nexusOutcomes,
// db.nexusLaunchBlockers, db.nexusCaseTimeline, db.nexusCases, db.nexusProviderResponses,
// db.nexusProviderPathwayRequests, db.nexusKnowledgeSavedResults, db.nexusKnowledgeReviewSummaries,
// db.nexusProviderOrganizations, db.nexusProviderReviewers, db.nexusRoutingRules, and
// db.nexusPilotAdminNotes were all grown with .unshift() on every write with no cap anywhere --
// unlike their sibling db.nexus* arrays (nexusPilotAuditEvents, nexusInstitutionalEvidenceReceipts,
// nexusKnowledgeQueries, nexusFieldDispatches, nexusRoutingLogs, nexusPilotConsentEvents,
// nexusExportDeleteRequests, nexusIntegrationAttempts), all of which already cap. This test exercises
// two of the simplest, auth-free call sites (records, notifications) well past their new 200-item cap
// and confirms the array itself stays bounded.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-nexus-pilot-array-caps-db.json");

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
  const seeded = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  // Pre-seed well past the 200-item cap directly, instead of making 250+ real
  // HTTP requests (which trips this project's own rate limiter) -- one real
  // write on top of an already-oversized array is enough to prove the cap
  // applies, without needing to defeat rate limiting to get there.
  seeded.nexusPilotRecords = Array.from({ length: 250 }, (_, i) => ({ id: `seed-record-${i}`, createdAt: new Date().toISOString() }));
  seeded.nexusNotifications = Array.from({ length: 250 }, (_, i) => ({ id: `seed-notification-${i}`, createdAt: new Date().toISOString() }));
  fs.writeFileSync(tempDbPath, JSON.stringify(seeded));
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
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

test("db.nexusPilotRecords stays capped at 200 after one more write on top of an already-oversized array", async () => {
  const res = await fetch(`${base}/api/nexus/records`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ sourceMode: "pharmacy", summary: "one more record" })
  });
  assert.equal(res.status, 200);
  const db = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  assert.equal(db.nexusPilotRecords.length, 200, "nexusPilotRecords must stay capped at 200, not grow unbounded");
});

test("db.nexusNotifications stays capped at 200 after one more write on top of an already-oversized array", async () => {
  const res = await fetch(`${base}/api/nexus/notifications`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ title: "one more notice", message: "test" })
  });
  assert.equal(res.status, 200);
  const db = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  assert.equal(db.nexusNotifications.length, 200, "nexusNotifications must stay capped at 200, not grow unbounded");
});
