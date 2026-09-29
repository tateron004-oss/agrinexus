"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (follow-up sweep): userIsRestrictedFrom() was built specifically to close the gap where
// a role with NO restrictions array at all (Investor has none -- only guest/demo sessions get an
// explicit restrictions: [...] array) sails straight through a raw `user?.restrictions?.includes(...)`
// check, since undefined?.includes(...) is always falsy. createVideoSessionWorkflow,
// createCommunicationThread and createOutboundCallWorkflow were all already fixed once (per their own
// "restriction-bypass follow-up audit" comments) for "no restriction check at all", but each fix reused
// the raw idiom instead of the centralized function -- reopening the Investor-specific bypass for a
// real PHI write, a real SMS/WhatsApp send, and a real outbound Twilio call.
const root = path.resolve(__dirname, "..", "..");
const port = 4724;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-investor-restriction-bypass-raw-idiom-db.json");

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
let investorCookie;

test.before(async () => {
  const seedDb = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  seedDb.profile.healthIntakes = []; // so the video-session branch's "!intake" precondition can fire
  fs.writeFileSync(tempDbPath, JSON.stringify(seedDb));
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
  assert.equal(adminRes.status, 200);
  const adminCookie = adminRes.headers.get("set-cookie").split(";")[0];

  // A dedicated, English-locale sandbox Investor login (the seeded investor@agrinexus.org account is
  // Arabic-locale, which would otherwise make this test's assertions fight translation instead of
  // testing the restriction gate itself).
  const email = "investor-restriction-bypass-test@example.com";
  const created = await fetch(`${base}/api/admin/investor-user`, {
    method: "POST", headers: { "content-type": "application/json", cookie: adminCookie },
    body: JSON.stringify({ email, password: "Investor2026!", name: "Investor Restriction Test" })
  });
  assert.equal(created.status, 200, JSON.stringify(await created.clone().json()));
  const investorLogin = await fetch(`${base}/api/login`, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password: "Investor2026!" })
  });
  assert.equal(investorLogin.status, 200);
  investorCookie = investorLogin.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

function readTempDb() {
  return JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
}

async function cmd(body) {
  const res = await fetch(`${base}/api/agent/command`, { method: "POST", headers: { "content-type": "application/json", cookie: investorCookie }, body: JSON.stringify(body) });
  const responseBody = await res.json();
  return responseBody.commandResult || {};
}

test("a real signed-in Investor cannot place a real outbound call, even after a genuine two-turn confirmation", async () => {
  const staged = await cmd({ command: "call the doctor about my rash at +15551234567" });
  assert.equal(staged.status, "needs-confirmation", JSON.stringify(staged));
  await cmd({ command: "yes" });
  // A call record is always logged either way (it exists to show WHY nothing real happened) -- the
  // real assertion is that its delivery was honestly refused, not silently placed for real.
  const record = readTempDb().profile.outboundCalls[0];
  assert.equal(record.delivery.ok, false, `expected the delivery to be honestly refused for a restricted Investor account: ${JSON.stringify(record)}`);
  assert.equal(record.delivery.status, "restricted-account-no-real-call");
});

test("a real signed-in Investor's video-call request does not write a real health intake record, even after confirming", async () => {
  const before = readTempDb().profile.healthIntakes.length;
  const staged = await cmd({ command: "show my injury to a doctor" });
  assert.equal(staged.status, "needs-confirmation", JSON.stringify(staged));
  await cmd({ command: "yes" });
  assert.equal(readTempDb().profile.healthIntakes.length, before, "no health intake must be written for a restricted Investor account, confirmed or not");
});

test("a real signed-in Admin (not restricted) CAN still place a real outbound call after confirming, unaffected by the fix", async () => {
  const adminLogin = await fetch(`${base}/api/login`, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" })
  });
  const adminCookie = adminLogin.headers.get("set-cookie").split(";")[0];
  const adminCmd = async body => { const res = await fetch(`${base}/api/agent/command`, { method: "POST", headers: { "content-type": "application/json", cookie: adminCookie }, body: JSON.stringify(body) }); return (await res.json()).commandResult || {}; };
  const before = (readTempDb().profile.outboundCalls || []).length;
  const staged = await adminCmd({ command: "call the doctor about my knee at +15559876543" });
  assert.equal(staged.status, "needs-confirmation", JSON.stringify(staged));
  const confirmed = await adminCmd({ command: "yes" });
  const after = (readTempDb().profile.outboundCalls || []).length;
  assert.equal(after, before + 1, `expected the Admin's confirmed call to actually create a real outbound call record, unlike a restricted account: ${JSON.stringify(confirmed)}`);
});
