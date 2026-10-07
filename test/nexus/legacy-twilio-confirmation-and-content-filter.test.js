"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (communications/notifications audit): unlike server/providers/communicationsBridgeProvider.js's
// sendSms/sendWhatsapp/startCall (which require confirmed:true via requireConfirmation() and refuse any
// message matching SENSITIVE_COMMUNICATION_PATTERN before sending), the legacy in-file real-send paths
// (/api/trade/message, /api/communications/thread, /api/notifications/send, POST
// /api/voice/phone/outbound-call) had neither a confirmation gate nor a content scan -- any authenticated,
// non-restricted user could trigger a real, billed Twilio SMS/WhatsApp/call to a client-supplied recipient
// with a single unconfirmed request, carrying arbitrary free text (including health, payment, or
// credential content) straight through with no filter at all.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-legacy-twilio-confirmation-content-filter-db.json");

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
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" })
  });
  assert.equal(loginRes.status, 200);
  cookie = loginRes.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

async function post(pathname, body) {
  const res = await fetch(`${base}${pathname}`, {
    method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify(body || {})
  });
  return { status: res.status, body: await res.json() };
}

test("/api/trade/message never reaches a real Twilio send without confirmed:true, but does once confirmed", async () => {
  const unconfirmed = await post("/api/trade/message", { channel: "SMS", message: "please call about the order" });
  assert.equal(unconfirmed.status, 200, JSON.stringify(unconfirmed.body));
  const unconfirmedThread = unconfirmed.body.tradeMessageResult.thread;
  assert.equal(unconfirmedThread.deliveryStatus, "confirmation-required-for-live-send", JSON.stringify(unconfirmedThread));

  const confirmed = await post("/api/trade/message", { channel: "SMS", message: "please call about the order", confirmed: true });
  assert.equal(confirmed.status, 200, JSON.stringify(confirmed.body));
  const confirmedThread = confirmed.body.tradeMessageResult.thread;
  assert.notEqual(confirmedThread.deliveryStatus, "confirmation-required-for-live-send", JSON.stringify(confirmedThread));
});

test("/api/trade/message blocks a real send whose message contains sensitive content, even when confirmed", async () => {
  const result = await post("/api/trade/message", { channel: "SMS", message: "here is my bank account and password for the payment", confirmed: true });
  assert.equal(result.status, 200, JSON.stringify(result.body));
  const thread = result.body.tradeMessageResult.thread;
  assert.equal(thread.deliveryStatus, "blocked-sensitive-content", JSON.stringify(thread));
});

test("/api/communications/thread never reaches a real Twilio send without confirmed:true, but does once confirmed", async () => {
  const unconfirmed = await post("/api/communications/thread", { module: "AgriTrade", channel: "SMS", message: "status update" });
  assert.equal(unconfirmed.status, 200, JSON.stringify(unconfirmed.body));
  assert.equal(unconfirmed.body.communicationThreadResult.thread.deliveryStatus, "confirmation-required-for-live-send");

  const confirmed = await post("/api/communications/thread", { module: "AgriTrade", channel: "SMS", message: "status update", confirmed: true });
  assert.equal(confirmed.status, 200, JSON.stringify(confirmed.body));
  assert.notEqual(confirmed.body.communicationThreadResult.thread.deliveryStatus, "confirmation-required-for-live-send");
});

test("/api/communications/thread blocks a real send whose message contains sensitive content, even when confirmed", async () => {
  const result = await post("/api/communications/thread", { module: "AgriTrade", channel: "SMS", message: "my card number and secret token are attached", confirmed: true });
  assert.equal(result.status, 200, JSON.stringify(result.body));
  assert.equal(result.body.communicationThreadResult.thread.deliveryStatus, "blocked-sensitive-content");
});

test("/api/notifications/send never reaches a real Twilio send without confirmed:true, but does once confirmed", async () => {
  const unconfirmed = await post("/api/notifications/send", { module: "AgriTrade", channel: "sms", message: "order update" });
  assert.equal(unconfirmed.status, 200, JSON.stringify(unconfirmed.body));
  assert.equal(unconfirmed.body.profile.notifications[0].deliveryStatus, "confirmation-required-for-live-send");

  const confirmed = await post("/api/notifications/send", { module: "AgriTrade", channel: "sms", message: "order update", confirmed: true });
  assert.equal(confirmed.status, 200, JSON.stringify(confirmed.body));
  assert.notEqual(confirmed.body.profile.notifications[0].deliveryStatus, "confirmation-required-for-live-send");
});

test("/api/notifications/send blocks a real send whose message contains sensitive content, even when confirmed", async () => {
  const result = await post("/api/notifications/send", { module: "AgriTrade", channel: "sms", message: "patient diagnosis and prescription details", confirmed: true });
  assert.equal(result.status, 200, JSON.stringify(result.body));
  assert.equal(result.body.profile.notifications[0].deliveryStatus, "blocked-sensitive-content");
});

test("POST /api/voice/phone/outbound-call refuses an unconfirmed request outright, and accepts a confirmed one", async () => {
  const unconfirmed = await post("/api/voice/phone/outbound-call", { purpose: "buyer callback" });
  assert.equal(unconfirmed.status, 400, JSON.stringify(unconfirmed.body));
  assert.equal(unconfirmed.body.status, "confirmation_required");

  const confirmed = await post("/api/voice/phone/outbound-call", { purpose: "buyer callback", confirmed: true });
  assert.notEqual(confirmed.status, 400, JSON.stringify(confirmed.body));
});

test("createOutboundCallWorkflow's other (already-confirmed) callers are unaffected by the route-level confirmation gate", async () => {
  // The Cloud Agent's own communications.outbound_call step and the conversational "call X" -> "yes"
  // dispatcher never set body.confirmed -- they have their own prior approval/staging gate instead. Prove
  // the voice-command path still reaches a real call attempt (not stuck at "needs confirmation") once the
  // user has already said "yes" in that flow.
  const staged = await post("/api/agent/command", { command: "call the doctor about my knee at +15559876543" });
  assert.equal(staged.status, 200, JSON.stringify(staged.body));
  assert.equal(staged.body.commandResult?.status, "needs-confirmation", JSON.stringify(staged.body));
  const confirmed = await post("/api/agent/command", { command: "yes" });
  assert.equal(confirmed.status, 200, JSON.stringify(confirmed.body));
  const db = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  const call = db.profile.outboundCalls[0];
  // Twilio itself is unconfigured in this test env, so the real dial attempt fails with
  // "needs-twilio-call-config" -- the point is that it reached the real attempt at all, rather than being
  // wrongly stopped at a confirmation gate this flow was never designed to satisfy.
  assert.equal(call.delivery.status, "needs-twilio-call-config", `expected the already-confirmed voice flow to reach a real call attempt, got: ${JSON.stringify(call.delivery)}`);
});
