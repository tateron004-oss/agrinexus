"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawn } = require("node:child_process");
const setup = require("../../server/providers/communicationsStatus.js");

// The owner asked to get WhatsApp, email and phone calls working. The code for all four was already built; what was missing was a way to see what each one still needs and to prove it works.
// This reads the real settings, says plainly what is missing, never shows a secret, and sends a test only to the owner's own phone or inbox.

const channelOf = (status, id) => status.channels.find(channel => channel.id === id);

test("with nothing set, every channel is off and says exactly which settings to add", () => {
  const status = setup.describeCommunications({}, {});
  assert.deepEqual(status.channels.map(channel => [channel.id, channel.state]), [["sms", "off"], ["whatsapp", "off"], ["email", "off"], ["calls", "off"]]);
  assert.match(channelOf(status, "sms").summary, /Set NEXUS_SMS_ENABLED or NEXUS_MESSAGES_ENABLED to true, and add: TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER/);
  assert.match(channelOf(status, "whatsapp").summary, /TWILIO_WHATSAPP_FROM/);
  assert.match(channelOf(status, "email").summary, /NEXUS_EMAIL_FROM/);
  assert.match(channelOf(status, "calls").summary, /PUBLIC_BASE_URL/);
});

test("a channel that is switched on but not set up is called a pretend, so nobody thinks it sends", () => {
  const status = setup.describeCommunications({ NEXUS_SMS_ENABLED: "true", NEXUS_EMAIL_ENABLED: "true" }, {});
  assert.equal(channelOf(status, "sms").state, "simulated");
  assert.match(channelOf(status, "sms").summary, /only a labelled pretend: nothing reaches a phone/);
  assert.equal(channelOf(status, "email").state, "needs-setup");
  assert.match(channelOf(status, "email").summary, /missing: .*NEXUS_EMAIL_FROM/);
});

test("fully set up channels are ready, and the notes catch the mistakes people make", () => {
  const env = { TWILIO_ACCOUNT_SID: "AC123", TWILIO_AUTH_TOKEN: "supersecret-token-xyz", TWILIO_PHONE_NUMBER: "+12025550123", NEXUS_SMS_ENABLED: "true", NEXUS_WHATSAPP_ENABLED: "true", TWILIO_WHATSAPP_FROM: "whatsapp:+14155238886",
    NEXUS_CALLS_ENABLED: "true", PUBLIC_BASE_URL: "https://x.onrender.com", PHONE_PROVIDER: "twilio", NEXUS_EMAIL_ENABLED: "true", NEXUS_EMAIL_PROVIDER: "sendgrid", SENDGRID_API_KEY: "SG.secret-key-abc", SENDGRID_FROM_EMAIL: "me@gmail.com" };
  const status = setup.describeCommunications(env, { authorizedCallerCount: 2, ownPhone: "+254712345678", adminEmail: "owner@example.org" });
  assert.equal(channelOf(status, "sms").state, "ready");
  assert.equal(channelOf(status, "whatsapp").state, "ready");
  assert.equal(channelOf(status, "calls").state, "ready");
  assert.equal(channelOf(status, "email").state, "needs-setup", "email still lacks NEXUS_EMAIL_FROM: SENDGRID_FROM_EMAIL is not what Kyro reads");
  assert.ok(channelOf(status, "email").notes.some(note => /SENDGRID_FROM_EMAIL is set, but Kyro reads NEXUS_EMAIL_FROM/.test(note)));
  assert.ok(channelOf(status, "whatsapp").notes.some(note => /SANDBOX/.test(note)));
  assert.ok(channelOf(status, "whatsapp").notes.some(note => /pre-approved message template/.test(note)));
  assert.ok(channelOf(status, "calls").notes.some(note => /\/api\/voice\/phone\/incoming/.test(note)));
  assert.ok(channelOf(status, "calls").notes.some(note => /2 numbers are on the list/.test(note)));
  const free = setup.describeCommunications({ ...env, NEXUS_EMAIL_FROM: "me@gmail.com" }, {});
  assert.equal(channelOf(free, "email").state, "ready");
  assert.ok(channelOf(free, "email").notes.some(note => /free-mail sender/.test(note)));
  // no secret, and no whole phone number or address, ever leaves
  const text = JSON.stringify(setup.describeCommunications({ ...env, NEXUS_EMAIL_FROM: "me@gmail.com" }, { ownPhone: "+254712345678", adminEmail: "owner@example.org" }));
  for (const secret of ["supersecret-token-xyz", "SG.secret-key-abc", "AC123", "+12025550123", "254712345678", "owner@example.org"]) assert.equal(text.includes(secret), false, `${secret} must not appear`);
});

test("a failure is explained in plain words with the next step", () => {
  assert.match(setup.explainFailure({ errorCode: 30032 }).plain, /not verified for texting/);
  assert.match(setup.explainFailure({ errorCode: "21408" }).next, /Geo permissions/);
  assert.match(setup.explainFailure({ errorCode: 63015 }).next, /join code/);
  assert.match(setup.explainFailure({ channel: "email", httpStatus: 403, message: "The from address does not match a verified Sender Identity" }).plain, /not verified the sender/);
  assert.match(setup.explainFailure({ channel: "email", httpStatus: 401 }).plain, /API key/);
  const failed = setup.summarizeTest("sms", { body: { status: "failed", message: "Twilio reported the text as undelivered (error 30032: x)", data: { errorCode: 30032 } } });
  assert.equal(failed.ok, false); assert.equal(failed.outcome, "failed"); assert.match(failed.next, /toll-free verification/);
  const pretend = setup.summarizeTest("sms", { body: { status: "completed", data: { sid: "SIMULATEDSMS-1", simulated: true } } });
  assert.equal(pretend.ok, false); assert.equal(pretend.outcome, "simulated");
  assert.equal(setup.summarizeTest("sms", { body: { status: "completed", data: { sid: "SM1", deliveryConfirmed: true } } }).outcome, "delivered");
  assert.equal(setup.summarizeTest("sms", { body: { status: "completed", data: { sid: "SM1" } } }).outcome, "accepted");
  assert.match(setup.summarizeTest("email", { body: { status: "completed", data: { providerMessageId: "m1" } } }).plain, /spam folder/);
  assert.equal(setup.summarizeTest("whatsapp", { body: { status: "disabled", message: "off" } }).outcome, "off");
  assert.equal(setup.summarizeTest("call", { body: { status: "missing_config", message: "missing" } }).outcome, "needs-setup");
});

// ---- through the real server, as the real Admin and a real non-admin (no provider account is configured, so nothing real is ever sent) ----
const root = path.resolve(__dirname, "..", "..");
const port = 4977;
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-communications-setup-test-db.json");
const tempUploadDir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-comms-setup-uploads-"));
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let adminCookie; let userCookie;
async function login(email, password) {
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, password }) });
  assert.equal(res.status, 200, `${email} must be able to sign in`);
  return res.headers.get("set-cookie").split(";")[0];
}
async function call(pathname, cookie, body, method = "POST") {
  const res = await fetch(`${base}${pathname}`, { method, headers: { "content-type": "application/json", cookie }, body: method === "GET" ? undefined : JSON.stringify(body || {}) });
  const text = await res.text();
  let json; try { json = JSON.parse(text); } catch { json = { raw: text.slice(0, 200) }; }
  return { status: res.status, json };
}

test.describe("communications setup routes (real server)", () => {
  test.before(async () => {
    fs.copyFileSync(path.join(root, "db.json"), tempDbPath);
    server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_FILE_STORAGE_DIR: tempUploadDir, TWILIO_AUTHORIZED_CALLERS: "+15550001111",
      NEXUS_SMS_ENABLED: "true", NEXUS_WHATSAPP_ENABLED: "true", NEXUS_EMAIL_ENABLED: "true", NEXUS_CALLS_ENABLED: "", TWILIO_ACCOUNT_SID: "", TWILIO_AUTH_TOKEN: "", TWILIO_PHONE_NUMBER: "", TWILIO_WHATSAPP_FROM: "", NEXUS_EMAIL_FROM: "", SENDGRID_API_KEY: "", RESEND_API_KEY: "", NEXUS_EMAIL_PROVIDER: "sendgrid", NEXUS_SIMULATE_DOMAIN_PROVIDERS: "true" }, stdio: "ignore", windowsHide: true });
    for (let i = 0; i < 80; i += 1) { try { if ((await fetch(`${base}/api/healthz`)).ok) break; } catch { await wait(150); } }
    adminCookie = await login("admin@agrinexus.org", "Admin2026!");
    userCookie = await login("user@agrinexus.org", "User2026!");
  });
  test.after(() => {
    server.kill();
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
    fs.rmSync(tempUploadDir, { recursive: true, force: true });
  });

  test("only the owner can see the setup status or send a test", async () => {
    assert.equal((await call("/api/admin/communications/status", userCookie, null, "GET")).status, 403);
    assert.equal((await call("/api/admin/communications/test", userCookie, { channel: "sms", confirm: true })).status, 403);
    assert.equal((await call("/api/admin/communications/status", "", null, "GET")).status >= 400, true);
  });

  test("the owner sees each channel's real state, with the owner's own number masked", async () => {
    const status = await call("/api/admin/communications/status", adminCookie, null, "GET");
    assert.equal(status.status, 200, JSON.stringify(status.json).slice(0, 200));
    assert.equal(channelOf(status.json, "sms").state, "simulated");
    assert.equal(channelOf(status.json, "whatsapp").state, "simulated", "switched on but no WhatsApp sender: a pretend");
    assert.equal(channelOf(status.json, "email").state, "needs-setup");
    assert.equal(channelOf(status.json, "calls").state, "off");
    assert.match(status.json.testRecipients.phone, /^\+155\*+/);
    assert.equal(JSON.stringify(status.json).includes("15550001111"), false);
  });

  test("a test needs a clear confirmation and a real channel, and goes only to the owner", async () => {
    assert.equal((await call("/api/admin/communications/test", adminCookie, { channel: "sms" })).status, 400);
    assert.equal((await call("/api/admin/communications/test", adminCookie, { channel: "sms", confirm: "yes" })).status, 400);
    assert.equal((await call("/api/admin/communications/test", adminCookie, { channel: "fax", confirm: true })).status, 400);
    const sms = await call("/api/admin/communications/test", adminCookie, { channel: "sms", to: "+254799999999", confirm: true });
    assert.equal(sms.status, 200);
    assert.equal(sms.json.ok, false);
    assert.equal(sms.json.test.outcome, "simulated", "not configured: a labelled pretend, never reported as sent");
    assert.match(sms.json.test.to, /^\+155/, "the recipient is the owner's own number, whatever was asked");
    const whatsapp = await call("/api/admin/communications/test", adminCookie, { channel: "whatsapp", confirm: true });
    assert.equal(whatsapp.json.test.outcome, "simulated");
    const calls = await call("/api/admin/communications/test", adminCookie, { channel: "call", confirm: true });
    assert.equal(calls.json.test.outcome, "off");
    assert.match(calls.json.test.next, /status cards/);
    const email = await call("/api/admin/communications/test", adminCookie, { channel: "email", to: "someone-else@example.org", confirm: true });
    assert.equal(email.json.test.outcome, "needs-setup");
    assert.match(email.json.test.to, /^a\*\*\*@/, "the owner's own account email, masked");
  });

  test("only a few tests an hour are allowed", async () => {
    let blocked = null;
    for (let i = 0; i < 8 && !blocked; i += 1) { const result = await call("/api/admin/communications/test", adminCookie, { channel: "sms", confirm: true }); if (result.status === 429) blocked = result; }
    assert.ok(blocked, "a seventh test within the hour is refused");
    assert.match(blocked.json.error, /6 tests in the last hour/);
  });
});

test("the setup page and the Admin screen link to it, and the page never injects data as markup", () => {
  const html = fs.readFileSync(path.join(root, "public", "communications-setup.html"), "utf8");
  const script = fs.readFileSync(path.join(root, "public", "communications-setup.js"), "utf8");
  const index = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
  assert.match(index, /href="\/communications-setup\.html"/);
  for (const need of ["NEXUS_EMAIL_FROM", "NEXUS_SMS_ENABLED", "NEXUS_WHATSAPP_ENABLED", "NEXUS_CALLS_ENABLED", "TWILIO_WHATSAPP_FROM", "/api/voice/phone/incoming", "30032"]) assert.ok(html.includes(need), `the checklist must mention ${need}`);
  assert.equal(/innerHTML|insertAdjacentHTML|document\.write/.test(script), false, "provider text is shown with textContent only");
  assert.match(script, /confirm: true/);
});
