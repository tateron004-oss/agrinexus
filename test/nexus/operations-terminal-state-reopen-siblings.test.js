"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Follow-up sweep of the "latestX" siblings flagged at the end of PR #638
// (drone missions) and PR #640 (chronic-care): shipments, learning profiles,
// applicant profiles, and employer profiles all shared the same
// find(active) || arr[0] || null fallback shape, and each has its own
// explicit "stop further activity" action (cancel_shipment,
// archive_learning_profile, archive_applicant/no_contact_applicant,
// mark_employer_closed) that a sibling write action could silently undo by
// supplying the terminal record's real id, or by omitting an id entirely
// when it was the caller's only record.
const root = path.resolve(__dirname, "..", "..");
const port = 4641;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-operations-terminal-state-reopen-siblings-db.json");

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

async function opsAction(cookie, body) {
  const res = await fetch(`${base}/api/nexus/operations/action`, { method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify(body) });
  const responseBody = await res.json();
  return { status: res.status, json: responseBody.nexusOperationsResult || responseBody };
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

test("a cancelled shipment cannot have new tracking events silently reopen it, by ID or via the latest-record fallback", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");

  const created = await opsAction(adminCookie, { action: "create_shipment", origin: "farm", destination: "market" });
  assert.equal(created.json.ok, true);
  const shipmentId = created.json.record.shipmentId;

  const cancelled = await opsAction(adminCookie, { action: "cancel_shipment", shipmentId });
  assert.equal(cancelled.json.record.status, "cancelled");

  const byExactId = await opsAction(adminCookie, { action: "add_tracking_event", shipmentId, status: "in-transit" });
  assert.notEqual(byExactId.json.record.shipmentId, shipmentId, "a tracking event must never reopen the cancelled shipment by its real id");

  const byFallback = await opsAction(adminCookie, { action: "add_tracking_event", status: "in-transit" });
  assert.notEqual(byFallback.json.record.shipmentId, shipmentId, "the omitted-id fallback must never resolve to the cancelled shipment either");

  const stillCancelled = await opsAction(adminCookie, { action: "show_shipment_timeline", shipmentId });
  assert.equal(stillCancelled.json.record.status, "cancelled", "the cancelled shipment's own status must remain unchanged");
});

test("an archived learning profile cannot have new training/referral records silently attached to it", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");

  const created = await opsAction(adminCookie, { action: "create_learning_profile" });
  assert.equal(created.json.ok, true);
  const learningProfileId = created.json.record.learningProfileId;

  const archived = await opsAction(adminCookie, { action: "archive_learning_profile", learningProfileId });
  assert.equal(archived.json.record.status, "archived");

  const byExactId = await opsAction(adminCookie, { action: "prepare_training_referral", learningProfileId });
  assert.notEqual(byExactId.json.record.learningProfileId, learningProfileId, "a training referral must never attach to the archived profile by its real id");

  const byFallback = await opsAction(adminCookie, { action: "track_training_interest" });
  assert.notEqual(byFallback.json.record.learningProfileId, learningProfileId, "the omitted-id fallback must never resolve to the archived profile either");
});

test("a no-contact applicant cannot have a new resume/application packet silently attached to it", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");

  const created = await opsAction(adminCookie, { action: "create_applicant_profile" });
  assert.equal(created.json.ok, true);
  const applicantId = created.json.record.applicantId;

  const noContact = await opsAction(adminCookie, { action: "no_contact_applicant", applicantId });
  assert.equal(noContact.json.record.status, "no-contact");

  const byExactId = await opsAction(adminCookie, { action: "prepare_resume_packet", applicantId });
  assert.notEqual(byExactId.json.record.applicantId, applicantId, "a resume packet must never attach to the no-contact applicant by its real id");

  const byFallback = await opsAction(adminCookie, { action: "prepare_resume_packet" });
  assert.notEqual(byFallback.json.record.applicantId, applicantId, "the omitted-id fallback must never resolve to the no-contact applicant either");
});

test("a closed employer cannot have a new job opportunity silently attached to it", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");

  const created = await opsAction(adminCookie, { action: "create_employer_profile", companyName: "Terminal Test Farms" });
  assert.equal(created.json.ok, true);
  const employerId = created.json.record.employerId;

  const closed = await opsAction(adminCookie, { action: "mark_employer_closed", employerId });
  assert.equal(closed.json.record.status, "closed");

  const byExactId = await opsAction(adminCookie, { action: "add_job_opportunity", employerId, title: "Field hand" });
  assert.notEqual(byExactId.json.record.employerId, employerId, "a job opportunity must never attach to the closed employer by its real id");

  const byFallback = await opsAction(adminCookie, { action: "add_job_opportunity", title: "Field hand" });
  assert.notEqual(byFallback.json.record.employerId, employerId, "the omitted-id fallback must never resolve to the closed employer either");
});
