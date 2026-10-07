"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const crypto = require("node:crypto");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const vm = require("node:vm");
const spaces = require("../../server/businessSpaces.js");
const sender = require("../../server/businessSender.js");
const senderOverride = require("../../server/providers/senderOverride.js");
const twilioProvider = require("../../server/providers/twilioProvider.js");
const emailProvider = require("../../server/providers/emailProvider.js");

// Stage 2 of business spaces: a business sends as ITSELF (its own number, WhatsApp, email and payout account, all set by the platform owner) and never as the platform. A payment callback finds
// its business from the payment reference. Where a business has nothing set, the platform's value is never used: that kind of message or payment simply cannot go.

const root = path.resolve(__dirname, "..", "..");

test("sender settings: known keys only, each in its own format, blank clears", () => {
  assert.equal(sender.normalizeSettings({}, { smsFrom: "+254 712-345-678" }).settings.smsFrom, "+254712345678");
  assert.equal(sender.normalizeSettings({}, { whatsappFrom: "+254712345678" }).settings.whatsappFrom, "whatsapp:+254712345678");
  assert.equal(sender.normalizeSettings({}, { whatsappFrom: "whatsapp:+254712345678" }).settings.whatsappFrom, "whatsapp:+254712345678");
  assert.equal(sender.normalizeSettings({}, { emailFrom: "Green Valley <hello@greenvalley.example>" }).settings.emailFrom, "Green Valley <hello@greenvalley.example>");
  assert.equal(sender.normalizeSettings({}, { emailFrom: "hello@greenvalley.example" }).ok, true);
  for (const bad of [{ smsFrom: "0712" }, { whatsappFrom: "abc" }, { emailFrom: "not an email" }, { emailFrom: "A <b@c.d" }, { emailFrom: "x@y.z\r\nBcc: evil@e.com" }, { paystackSubaccount: "no spaces allowed" }, { flutterwaveSubaccount: "ab" }]) {
    assert.equal(sender.normalizeSettings({}, bad).ok, false, JSON.stringify(bad));
  }
  assert.equal(sender.normalizeSettings({}, { unknownKey: "x" }).ok, false, "nothing known to set");
  const kept = sender.normalizeSettings({ smsFrom: "+254700000001", emailFrom: "a@b.co" }, { smsFrom: "" });
  assert.deepEqual(kept.settings, { emailFrom: "a@b.co" });
});

test("a business's environment: its own numbers and settings, none of the platform's, and the default space untouched", () => {
  const base = { TWILIO_ACCOUNT_SID: "ACshared", TWILIO_AUTH_TOKEN: "shared", TWILIO_PHONE_NUMBER: "+15550001111", TWILIO_WHATSAPP_FROM: "whatsapp:+15550001111", TWILIO_SMS_FROM: "+15550001111",
    NEXUS_EMAIL_FROM: "platform@kyro.example", PAYSTACK_SUBACCOUNT_CODE: "ACCT_platform", FLUTTERWAVE_SUBACCOUNT_ID: "RS_platform", DEMO_SMS_TO: "+15559990000", DEMO_CALL_TO: "+15559990001",
    HEALTH_PROVIDER_PHONE: "+15559990002", TWILIO_AUTHORIZED_CALLERS: "+15551234567", PHONE_SCREENING_ENABLED: "true", RESEND_API_KEY: "re_shared" };
  assert.equal(sender.businessSenderEnv(base, null), base);
  assert.equal(sender.businessSenderEnv(base, { space: "default" }), base, "the very same object, so nothing changes by default");
  const bare = sender.businessSenderEnv(base, { space: "acme", settings: {}, numbers: [] });
  for (const name of ["TWILIO_PHONE_NUMBER", "TWILIO_FROM_NUMBER", "TWILIO_SMS_FROM", "TWILIO_WHATSAPP_FROM", "NEXUS_EMAIL_FROM", "PAYSTACK_SUBACCOUNT_CODE", "FLUTTERWAVE_SUBACCOUNT_ID", ...sender.PLATFORM_ONLY_BLANKED]) {
    assert.equal(bare[name], "", `${name} is blank for a business with nothing set`);
  }
  assert.equal(bare.TWILIO_ACCOUNT_SID, "ACshared", "one shared Twilio account");
  assert.equal(bare.RESEND_API_KEY, "re_shared", "one shared email key");
  const set = sender.businessSenderEnv(base, { space: "acme", numbers: ["+254700000111", "+254700000112"], settings: { smsFrom: "+254700000113", whatsappFrom: "whatsapp:+254700000111", emailFrom: "Acme <hi@acme.example>", paystackSubaccount: "ACCT_acme", flutterwaveSubaccount: "RS_acme" } });
  assert.equal(set.TWILIO_PHONE_NUMBER, "+254700000111");
  assert.equal(set.TWILIO_VOICE_FROM_NUMBER, "+254700000111");
  assert.equal(set.TWILIO_SMS_FROM, "+254700000113");
  assert.equal(set.TWILIO_WHATSAPP_FROM, "whatsapp:+254700000111");
  assert.equal(set.NEXUS_EMAIL_FROM, "Acme <hi@acme.example>");
  assert.equal(set.PAYSTACK_SUBACCOUNT_CODE, "ACCT_acme");
  assert.equal(base.TWILIO_PHONE_NUMBER, "+15550001111", "the platform's own environment is not changed");
});

test("the real providers send as the business inside it, as the platform outside, and refuse a business with nothing set", async () => {
  const keep = { ...process.env };
  Object.assign(process.env, { TWILIO_ACCOUNT_SID: "ACshared", TWILIO_AUTH_TOKEN: "shared", TWILIO_PHONE_NUMBER: "+15550001111", NEXUS_SMS_ENABLED: "true", NEXUS_EMAIL_ENABLED: "true",
    RESEND_API_KEY: "re_shared", NEXUS_EMAIL_FROM: "platform@kyro.example" });
  senderOverride.setResolver(base => sender.businessSenderEnv(base, spaces.currentContext()));
  try {
    assert.deepEqual(twilioProvider.status(process.env).sms.missingConfig, [], "the platform is fully set up outside any business");
    assert.deepEqual(emailProvider.status(process.env).missingConfig, []);

    const bare = await spaces.runInSpace("acme", async () => ({ twilio: twilioProvider.status(process.env).sms.missingConfig, email: emailProvider.status(process.env).missingConfig }), { settings: {}, numbers: [] });
    assert.ok(bare.twilio.includes("TWILIO_FROM_NUMBER"), "no number of its own: it cannot send, rather than sending from the platform's");
    assert.ok(bare.email.includes("NEXUS_EMAIL_FROM"), "no email sender of its own: it cannot email as the platform");

    const own = await spaces.runInSpace("acme", async () => ({ twilio: twilioProvider.status(process.env).sms.missingConfig, email: emailProvider.status(process.env).missingConfig }),
      { settings: { emailFrom: "Acme <hi@acme.example>" }, numbers: ["+254700000111"] });
    assert.deepEqual(own.twilio, []);
    assert.deepEqual(own.email, []);

    // A real send attempt from a business with no number is refused before anything is sent.
    const refused = await spaces.runInSpace("acme", () => twilioProvider.sendSms({ confirmed: true, to: "+254700000999", message: "hello" }, process.env), { settings: {}, numbers: [] });
    assert.notEqual(refused.body?.status, "sent");
    assert.ok(/needs-config|missing|not configured|setup/i.test(JSON.stringify(refused)), JSON.stringify(refused).slice(0, 200));
  } finally {
    senderOverride.setResolver(null);
    for (const key of Object.keys(process.env)) if (!(key in keep)) delete process.env[key];
    Object.assign(process.env, keep);
  }
});

test("a call's other party is worked out against the BUSINESS's own number, not only the platform's", () => {
  const source = fs.readFileSync(path.join(root, "server.js"), "utf8");
  const extract = name => { const start = source.indexOf(`function ${name}(`); assert.ok(start > 0, name); return source.slice(start, source.indexOf("\nfunction ", start + 10)); };
  const sandbox = { process: { env: { TWILIO_PHONE_NUMBER: "+15550001111" } }, senderOverride: { resolve: env => (spaces.currentSpace() === "default" ? env : sender.businessSenderEnv(env, spaces.currentContext())) } };
  vm.createContext(sandbox);
  vm.runInContext(["normalizePhoneNumber", "phoneExternalPartyNumber"].map(extract).join("\n") + "\nthis.party = phoneExternalPartyNumber;", sandbox);
  const outbound = { From: "+254700000111", To: "+254712000001", Direction: "outbound-api" };
  assert.equal(spaces.runInSpace("acme", () => sandbox.party(outbound, sandbox.process.env), { numbers: ["+254700000111"] }), "+254712000001", "the person called, not the business's own number");
  assert.equal(sandbox.party(outbound, sandbox.process.env), "+254700000111", "outside a business the platform's own number is the only one known (unchanged behaviour)");
});

// ---------- the real server ----------
const port = 15351;
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "spaces-providers-"));
const defaultDb = path.join(dir, "db.json");
const env = { SESSION_SECRET: "providers-secret-for-the-test-0123456789", PUBLIC_BASE_URL: base, PAYSTACK_SECRET_KEY: "test-paystack-secret", PAYMENT_PROVIDER: "paystack", PAYSTACK_SUBACCOUNT_CODE: "ACCT_platform" };
let server;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const fileOf = id => JSON.parse(fs.readFileSync(spaces.spaceDbPath(defaultDb, id), "utf8"));
async function waitFor(url) { for (let i = 0; i < 80; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
async function call(method, pathname, body, cookie) {
  const res = await fetch(`${base}${pathname}`, { method, headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}) }, body: method === "GET" ? undefined : JSON.stringify(body || {}) });
  const json = await res.json().catch(() => ({}));
  return { status: res.status, json, text: JSON.stringify(json), cookie: (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ") };
}
const login = (email, password) => call("POST", "/api/login", { email, password });

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), defaultDb);
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, ...env, PORT: String(port), AGRINEXUS_DB_PATH: defaultDb, AGRINEXUS_SPACES_PATH: path.join(dir, "spaces-directory.json"), OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("on a real server: platform owner sets a business's sender; payments carry the business and never use the platform's payout; the callback finds its business", async () => {
  const owner = await login("admin@agrinexus.org", "Admin2026!");
  const made = await call("POST", "/api/platform/businesses", { id: "acme", name: "Acme Farms", adminName: "Acme Owner", adminEmail: "owner@acme.example", country: "Kenya" }, owner.cookie);
  assert.equal(made.status, 200);
  const acme = await login("owner@acme.example", made.json.created.password);
  assert.equal(acme.status, 200);

  // Settings: platform owner only, validated, masked in the list, never shown wholesale.
  const settings = (body, cookie = owner.cookie) => call("POST", "/api/platform/businesses/settings", body, cookie);
  assert.equal((await settings({ id: "acme", smsFrom: "+254700000113" }, acme.cookie)).status, 403, "a business cannot set its own sender");
  assert.equal((await settings({ id: "nope", smsFrom: "+254700000113" })).status, 404);
  assert.equal((await settings({ id: "acme", smsFrom: "banana" })).status, 400);
  assert.equal((await settings({ id: "acme" })).status, 400, "nothing to set");
  const saved = await settings({ id: "acme", emailFrom: "Acme <hi@acme.example>", whatsappFrom: "+254700000111", flutterwaveSubaccount: "RS_acme123456" });
  assert.equal(saved.status, 200);
  const row = saved.json.businesses.find(item => item.id === "acme");
  assert.equal(row.sends.email, "Acme <hi@acme.example>");
  assert.ok(!saved.text.includes("RS_acme123456"), "the payout account is masked in the list");
  assert.equal((await settings({ id: "acme", emailFrom: "" })).status, 200, "blank removes one");

  // A business with no payout account takes no real payment, and its reference names the business.
  const checkout = await call("POST", "/api/trade/payment-checkout", { provider: "paystack", amount: 100, currency: "KES" }, acme.cookie);
  assert.equal(checkout.status, 200);
  const record = checkout.json.tradePaymentCheckoutResult;
  assert.match(record.reference, /^ANPAY-\d+-\d+\.acme$/);
  assert.ok(record.setupRequired.some(line => /no payout account/i.test(line)), "the platform's own Paystack payout is never used for a business");
  assert.notEqual(record.status, "paystack-checkout-ready");
  const platformRecord = (await call("POST", "/api/trade/payment-checkout", { provider: "paystack", amount: 100, currency: "KES" }, owner.cookie)).json.tradePaymentCheckoutResult;
  assert.match(platformRecord.reference, /^ANPAY-\d+-\d+$/, "the default space's references are unchanged");

  // The provider's callback carries no sign-in: it finds the business from the reference, and still needs its own valid signature.
  const payload = JSON.stringify({ event: "charge.success", data: { reference: record.reference, status: "success", amount: Math.round(100 * 100), id: 987654 } });
  const sign = text => crypto.createHmac("sha512", env.PAYSTACK_SECRET_KEY).update(text).digest("hex");
  const post = (text, signature) => fetch(`${base}/api/trade/payment-callback/paystack`, { method: "POST", headers: { "content-type": "application/json", "x-paystack-signature": signature }, body: text });
  assert.equal((await post(payload, "0".repeat(128))).status, 403, "a wrong signature is refused, whatever the reference says");
  assert.equal((await post(payload, sign(payload))).status, 200);
  const stored = fileOf("acme").profile.paymentCheckoutRecords.find(item => item.reference === record.reference);
  assert.equal(stored.status, "paid", "marked paid in the business that made it");
  assert.ok(!(fileOf("acme").profile.paymentCheckoutRecords || []).some(item => item.reference === platformRecord.reference));
  assert.ok(!fs.readFileSync(defaultDb, "utf8").includes(record.reference), "and nowhere else");
  // A reference that names a business that does not exist, or none, reaches only the default space, where it matches nothing.
  const stranger = JSON.stringify({ event: "charge.success", data: { reference: "ANPAY-1-1.ghost-co", status: "success", amount: 1, id: 1 } });
  assert.equal((await post(stranger, sign(stranger))).status, 200);
  // The browser redirect (GET) finds the business the same way.
  const get = await fetch(`${base}/api/trade/payment-callback/paystack?reference=${encodeURIComponent(record.reference)}`);
  assert.equal(get.status, 200);
});
