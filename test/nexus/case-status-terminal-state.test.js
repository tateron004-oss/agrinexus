"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live: /api/nexus/cases (a provider/admin-facing case-management
// queue, gated behind canUse(user, "provider-queue") -- not reachable by a
// Standard User/Investor/guest) had no terminal-state concept at all. A case
// already "closed" or "archived" could be silently moved back to any other
// status by the exact same unguarded PATCH/status call that closed it, and
// link-record kept accepting new records into an already-closed case with
// no error -- the same terminal-state-reopen shape already fixed for
// chronic-care/shipment/learning/applicant/employer records, just a write
// path with literally no transition guard instead of a read-fallback.
const root = path.resolve(__dirname, "..", "..");
const port = 4642;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-case-status-terminal-state-db.json");

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

function cookieFrom(res) {
  const raw = typeof res.headers.getSetCookie === "function" ? res.headers.getSetCookie() : [res.headers.get("set-cookie")].filter(Boolean);
  return raw.map(part => part.split(";")[0]).join("; ");
}

async function login(email, password) {
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password }) });
  assert.equal(res.status, 200, `login for ${email} should succeed`);
  return cookieFrom(res);
}

async function post(cookie, path, body) {
  const res = await fetch(`${base}${path}`, { method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify(body || {}) });
  return { status: res.status, json: await res.json() };
}

async function patch(cookie, path, body) {
  const res = await fetch(`${base}${path}`, { method: "PATCH", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify(body || {}) });
  return { status: res.status, json: await res.json() };
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
  fs.rmSync(tempDbPath, { force: true });
});

test("a closed case cannot be silently reopened via PATCH or the status endpoint", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");

  const created = await post(adminCookie, "/api/nexus/cases", { title: "Terminal state test case" });
  assert.equal(created.status, 200);
  const caseId = created.json.case.id;

  const closed = await post(adminCookie, `/api/nexus/cases/${caseId}/status`, { status: "closed" });
  assert.equal(closed.json.case.status, "closed");

  const viaStatusEndpoint = await post(adminCookie, `/api/nexus/cases/${caseId}/status`, { status: "open" });
  assert.equal(viaStatusEndpoint.status, 409, "the status endpoint must refuse to change a closed case's status");
  assert.equal(viaStatusEndpoint.json.error, "case_closed");

  const viaPatch = await patch(adminCookie, `/api/nexus/cases/${caseId}`, { status: "routed", title: "Retitled" });
  assert.equal(viaPatch.json.case.status, "closed", "PATCH must not silently reopen a closed case's status, even while updating other fields");
  assert.equal(viaPatch.json.case.title, "Retitled", "PATCH must still be able to update non-status fields on a closed case");
});

test("an archived case refuses new linked records instead of silently accepting them", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");

  const record = await post(adminCookie, "/api/nexus/records", { recordType: "health_note", payload: { note: "unrelated record" } });
  assert.equal(record.status, 200);
  const recordId = record.json.record.id;

  const created = await post(adminCookie, "/api/nexus/cases", { title: "Archived case link-record test" });
  const caseId = created.json.case.id;
  await post(adminCookie, `/api/nexus/cases/${caseId}/status`, { status: "archived" });

  const linkAttempt = await post(adminCookie, `/api/nexus/cases/${caseId}/link-record`, { recordId });
  assert.equal(linkAttempt.status, 409, "linking a real record to an archived case must be refused");
  assert.equal(linkAttempt.json.error, "case_closed");
});

test("status transitions between non-terminal states still work exactly as before", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");

  const created = await post(adminCookie, "/api/nexus/cases", { title: "Ordinary transition test" });
  const caseId = created.json.case.id;

  const routed = await post(adminCookie, `/api/nexus/cases/${caseId}/status`, { status: "routed" });
  assert.equal(routed.json.case.status, "routed");

  const reviewed = await post(adminCookie, `/api/nexus/cases/${caseId}/status`, { status: "in_review" });
  assert.equal(reviewed.json.case.status, "in_review");
});
