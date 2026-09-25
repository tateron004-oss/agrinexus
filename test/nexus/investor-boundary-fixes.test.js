"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (Investor-boundary audit): the Investor role is a read-only
// demo/sales login by design, and its health-record REDACTION was already
// correctly enforced for db.profile.healthIntakes -- but three separate,
// real gaps let an Investor account write real PHI, read a SEPARATE
// unredacted PHI store, and trigger a real external side effect (a live
// Twilio SMS/WhatsApp send):
// 1. medicalPostRoutes (server.js) had no role check at all -- only
//    canWriteHealth(user) (Admin/Standard User) should be allowed to write.
// 2. medicalGetRoutes returned nexusTelehealthBridgeIntakes/etc. -- a
//    separate PHI store from healthIntakes that never plugged into
//    profileForUser()'s redaction -- completely unredacted to anyone signed
//    in, including Investor.
// 3. A dozen `user.restrictions?.includes(...)` checks (guest-only, since
//    Investor accounts are never given a restrictions array) were the only
//    gate on real Twilio sends/payment calls/health writes; a new
//    userIsRestrictedFrom() helper now also treats Investor as restricted
//    from those same categories.

const root = path.resolve(__dirname, "..", "..");
const port = 4624;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-investor-boundary-db.json");

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
let investorCookie;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
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
  adminCookie = adminRes.headers.get("set-cookie").split(";")[0];

  const email = "investor-boundary-test@example.com";
  const created = await fetch(`${base}/api/admin/investor-user`, {
    method: "POST", headers: { "content-type": "application/json", cookie: adminCookie },
    body: JSON.stringify({ email, password: "Investor2026!", name: "Investor Boundary Test" })
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
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
});

async function post(pathname, body, cookie) {
  const res = await fetch(`${base}${pathname}`, {
    method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify(body || {})
  });
  return { status: res.status, body: await res.json() };
}

async function get(pathname, cookie) {
  const res = await fetch(`${base}${pathname}`, { headers: { cookie } });
  return { status: res.status, body: await res.json() };
}

test("an Investor account cannot write a real health-bridge intake; a Standard User/Admin still can", () => {
  return (async () => {
    const realReason = "Confidential telehealth reason that must never reach an Investor";
    const asInvestor = await post("/api/nexus/tools/telehealth/intake", { confirmed: true, sessionType: "provider_review", reason: realReason }, investorCookie);
    assert.equal(asInvestor.status, 403, JSON.stringify(asInvestor.body));

    const asAdmin = await post("/api/nexus/tools/telehealth/intake", { confirmed: true, sessionType: "provider_review", reason: realReason }, adminCookie);
    assert.equal(asAdmin.status, 200, JSON.stringify(asAdmin.body));
    assert.equal(asAdmin.body.data.intake.reason, realReason, "the real write must still succeed for a real account");
  })();
});

test("an Investor account reads a redacted version of a separate real PHI store (telehealth intakes), unlike Admin", async () => {
  const realReason = "Confidential telehealth reason for the read-side redaction check";
  const written = await post("/api/nexus/tools/telehealth/intake", { confirmed: true, sessionType: "provider_review", reason: realReason }, adminCookie);
  assert.equal(written.status, 200, JSON.stringify(written.body));

  const asAdmin = await get("/api/nexus/tools/telehealth/intakes", adminCookie);
  assert.equal(asAdmin.status, 200);
  assert.ok(asAdmin.body.data.intakes.some(item => item.reason === realReason), "the real account must still see the real content");

  const asInvestor = await get("/api/nexus/tools/telehealth/intakes", investorCookie);
  assert.equal(asInvestor.status, 200);
  assert.ok(asInvestor.body.data.intakes.every(item => item.reason !== realReason), "an Investor must never see the real free-text reason");
  assert.ok(asInvestor.body.data.intakes.every(item => item.redacted === true), "each item must be honestly marked redacted, not just missing a field");
});

test("mobile-clinics/search (a public facility directory, not patient data) is unaffected by the redaction fix", async () => {
  const asInvestor = await get("/api/nexus/tools/mobile-clinics/search", investorCookie);
  assert.equal(asInvestor.status, 200, JSON.stringify(asInvestor.body));
  assert.ok(Array.isArray(asInvestor.body.data.cards) && asInvestor.body.data.cards.length > 0, "a facility-directory search must return its real cards, not be redacted away");
  assert.ok(asInvestor.body.data.cards.every(card => card.redacted === undefined), "facility-directory cards must never be marked redacted -- they are not patient records");
});

test("an Investor account cannot trigger a real Twilio send via buyer-seller messaging; a Standard User/Admin path still reaches the send branch", async () => {
  const asInvestor = await post("/api/trade/message", { channel: "SMS", message: "please call about the order" }, investorCookie);
  assert.equal(asInvestor.status, 200, JSON.stringify(asInvestor.body));
  const investorThread = asInvestor.body.tradeMessageResult.thread;
  assert.equal(investorThread.liveRecipientConfigured, undefined, "the real-send branch must never be entered for an Investor");
  assert.equal(investorThread.status, "active", "must stay in the local-only state, never active-live");

  const asAdmin = await post("/api/trade/message", { channel: "SMS", message: "please call about the order" }, adminCookie);
  assert.equal(asAdmin.status, 200, JSON.stringify(asAdmin.body));
  const adminThread = asAdmin.body.tradeMessageResult.thread;
  assert.notEqual(adminThread.liveRecipientConfigured, undefined, "a real account must still reach the real-send branch (Twilio itself may be unconfigured in this test env, but the gate must not be the reason)");
});
