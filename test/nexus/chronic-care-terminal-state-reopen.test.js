"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (drone-mission-terminal-reopen follow-up audit): the same bug
// shape found in drone missions (a terminal record silently revived by ID,
// or via a "latest record" fallback that ignores status) also applies to
// chronic-care profiles. mark_deceased_stop_outreach explicitly archives a
// profile's linked intakes/care tasks and marks noContact so nothing
// further touches that patient's record -- but add_rpm_reading,
// add_rtm_activity, the provider-packet actions, and create_intake's
// auto-link had no check on the profile's own status before writing to or
// linking against it.
const root = path.resolve(__dirname, "..", "..");
const port = 4640;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-chronic-care-terminal-state-reopen-db.json");

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

test("a chronic-care profile marked deceased/stop-outreach cannot have new vitals or activity silently added to it, by ID or via the latest-record fallback", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");

  const created = await opsAction(adminCookie, { action: "create_chronic_care_profile", conditionArea: "diabetes", patientName: "Test Patient" });
  assert.equal(created.json.ok, true);
  const chronicCareId = created.json.record.chronicCareId;

  const deceased = await opsAction(adminCookie, { action: "mark_deceased_stop_outreach", chronicCareId });
  assert.equal(deceased.json.record.status, "deceased-stop-outreach");

  // Supplying the real, exact chronicCareId of the deceased profile.
  const rpmByExactId = await opsAction(adminCookie, { action: "add_rpm_reading", chronicCareId, type: "blood_pressure", value: "120/80" });
  assert.equal(rpmByExactId.json.ok, true);
  assert.notEqual(rpmByExactId.json.record.chronicCareId, chronicCareId, "a reading must never attach to the deceased profile by its real id");

  // Supplying no id at all, relying on the "latest profile" fallback -- this
  // is the caller's ONLY profile, so the pre-fix fallback would return it
  // anyway despite being deceased.
  const rtmByFallback = await opsAction(adminCookie, { action: "add_rtm_activity", type: "mobility", value: "walked 200m" });
  assert.notEqual(rtmByFallback.json.record.chronicCareId, chronicCareId, "the omitted-id fallback must never resolve to the deceased profile either");

  const packetAttempt = await opsAction(adminCookie, { action: "create_provider_review_packet", chronicCareId });
  assert.notEqual(packetAttempt.json.record.chronicCareId, chronicCareId, "a provider-review packet must not be prepared from the deceased profile");

  // A brand-new intake with no explicit chronicCareId must not be silently
  // linked to the deceased profile either.
  const intake = await opsAction(adminCookie, { action: "create_intake", reason: "unrelated new concern" });
  assert.notEqual(intake.json.record.chronicCareId, chronicCareId, "a fresh intake must not auto-link to the deceased profile");

  // The deceased profile's own timeline (read-only) is unaffected by any of
  // this, and remains exactly as it was left by mark_deceased_stop_outreach.
  const timeline = await opsAction(adminCookie, { action: "show_chronic_care_timeline", chronicCareId });
  assert.equal(timeline.json.record.status, "deceased-stop-outreach", "the deceased profile's own status must remain unchanged");
});
