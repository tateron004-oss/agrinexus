"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4623;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-pilot-responses-audit-auth-db.json");

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
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" })
  });
  adminCookie = res.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
});

// Found live (IDOR/access-control audit): /api/nexus/my-responses had no
// auth check at all, unlike every sibling route reading the same
// db.nexusProviderResponses array (all gated by provider-queue role or, for
// the parent /api/nexus/records* prefix, at least sign-in). An anonymous
// caller could read every provider/admin review response ever published in
// the workspace, including the linked recordId and the reviewer's free-text
// note.
test("/api/nexus/my-responses requires sign-in, and a signed-in user sees a real published response once it exists", async () => {
  const unauth = await fetch(`${base}/api/nexus/my-responses`);
  assert.equal(unauth.status, 401, "an anonymous caller must not be able to read published provider/admin responses");

  const createdRecord = await fetch(`${base}/api/nexus/records`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie: adminCookie },
    body: JSON.stringify({ sourceMode: "telehealth_intake", payload: { note: "confidential review subject" } })
  });
  assert.equal(createdRecord.status, 200);
  const recordId = (await createdRecord.json()).record.id;

  const createdResponse = await fetch(`${base}/api/nexus/records/${recordId}/responses`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie: adminCookie },
    body: JSON.stringify({ responseText: "Reviewer note: proceed with standard follow-up.", visibleToUser: true })
  });
  assert.equal(createdResponse.status, 200, JSON.stringify(await createdResponse.clone().json()));

  const stillUnauth = await fetch(`${base}/api/nexus/my-responses`);
  assert.equal(stillUnauth.status, 401, "must still be refused even once a real published response exists");

  const authed = await fetch(`${base}/api/nexus/my-responses`, { headers: { cookie: adminCookie } });
  assert.equal(authed.status, 200);
  const authedBody = await authed.json();
  assert.ok(authedBody.responses.some(item => item.recordId === recordId), "a signed-in caller must see the real published response");
});

// Found live: this route returns the exact same db.nexusPilotAuditEvents
// array as /api/nexus/consent-history, which already requires sign-in with
// an explicit comment that it must not be readable by an unauthenticated
// caller -- this route was an unguarded second door onto the same data.
test("/api/nexus/audit requires sign-in, matching the protection already on /api/nexus/consent-history for the identical data", async () => {
  const unauth = await fetch(`${base}/api/nexus/audit`);
  assert.equal(unauth.status, 401);

  const authed = await fetch(`${base}/api/nexus/audit`, { headers: { cookie: adminCookie } });
  assert.equal(authed.status, 200);
  assert.ok(Array.isArray((await authed.json()).audit));
});
