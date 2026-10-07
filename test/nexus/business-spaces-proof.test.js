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
const pgUsers = require("../../server/pg-users.js");

// PROOF STAGE for separate business spaces. Two businesses ("acme", "beta") beside the default system, on one real server:
//   1. sign-in picks the right space from the email, and a cookie keeps you there;
//   2. a record saved in one space is in that space's file and in no other;
//   3. the documented demo accounts are never planted into a business space;
//   4. a phone call goes to the business whose number was dialled, and a number that is not that business's caller is declined;
//   5. nothing a person holds (session, remember-me cookie, phone stream token) can be used to land in another space.

const root = path.resolve(__dirname, "..", "..");
const port = 15340;
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "spaces-proof-"));
const defaultDb = path.join(dir, "db.json");
const directoryFile = path.join(dir, "spaces-directory.json");
const env = { SESSION_SECRET: "proof-secret-for-spaces-test-0123456789", TWILIO_AUTH_TOKEN: "proof-twilio-token", PUBLIC_BASE_URL: base };
let server;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const fileOf = id => JSON.parse(fs.readFileSync(spaces.spaceDbPath(defaultDb, id), "utf8"));

const ACME = { admin: "owner@acme.example", pass: "AcmeOwner-2026!", number: "+254700000111" };
const BETA = { admin: "owner@beta.example", pass: "BetaOwner-2026!", number: "+254700000222" };
const CALLER = "+254712000001";

async function waitFor(url) {
  for (let i = 0; i < 80; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } }
  throw new Error(`${url} did not become reachable`);
}
async function call(method, pathname, body, cookie) {
  const res = await fetch(`${base}${pathname}`, { method, headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}) }, body: method === "GET" ? undefined : JSON.stringify(body || {}) });
  const json = await res.json().catch(() => ({}));
  return { status: res.status, json, text: JSON.stringify(json), cookie: (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ") };
}
const login = (email, password) => call("POST", "/api/login", { email, password });

// A Twilio-signed call webhook (form body), signed the way validTwilioWebhookSignature checks it.
async function phoneCall(pathname, form) {
  const params = Object.keys(form).sort().map(key => `${key}${form[key]}`).join("");
  const signature = crypto.createHmac("sha1", env.TWILIO_AUTH_TOKEN).update(`${base}${pathname}${params}`).digest("base64");
  const res = await fetch(`${base}${pathname}`, { method: "POST", headers: { "content-type": "application/x-www-form-urlencoded", "x-twilio-signature": signature }, body: new URLSearchParams(form).toString() });
  return { status: res.status, text: await res.text() };
}

test.before(async () => {
  const template = JSON.parse(fs.readFileSync(path.join(root, "db.json"), "utf8"));
  fs.writeFileSync(defaultDb, JSON.stringify(template));
  const directory = spaces.createDirectory(directoryFile);
  for (const [id, who] of [["acme", ACME], ["beta", BETA]]) {
    directory.createSpace(id, { name: id });
    directory.linkEmail(who.admin, id);
    directory.linkNumber(who.number, id);
    const adminAccount = { id: `u_${id}_owner`, name: `${id} owner`, email: who.admin, password: pgUsers.hashPassword(who.pass), role: "Admin", country: "Kenya", language: "en", createdAt: new Date().toISOString() };
    fs.writeFileSync(spaces.spaceDbPath(defaultDb, id), JSON.stringify(spaces.newSpaceRecord(template, { adminAccount })));
  }
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, ...env, PORT: String(port), AGRINEXUS_DB_PATH: defaultDb, AGRINEXUS_SPACES_PATH: directoryFile, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("the directory: ids, one email and one number belong to exactly one business", () => {
  const d = spaces.createDirectory(path.join(dir, "unit-directory.json"));
  assert.throws(() => d.createSpace("default"), /business id/);
  assert.throws(() => d.createSpace("Bad Name"), /business id/);
  d.createSpace("one"); d.createSpace("two");
  d.linkEmail("A@x.org", "one");
  assert.throws(() => d.linkEmail("a@x.org", "two"), /already belongs/);
  d.linkNumber("+254 700 000 999", "one");
  assert.throws(() => d.linkNumber("+254700000999", "two"), /already belongs/);
  assert.equal(d.spaceForEmail("a@X.org"), "one");
  assert.equal(d.spaceForEmail("nobody@x.org"), "default");
  assert.equal(d.spaceForNumber("+254700000999"), "one");
  assert.equal(d.spaceForNumber("+254700000998"), null);
  assert.equal(spaces.spaceDbPath("/data/db.json", "default"), "/data/db.json");
  assert.match(spaces.spaceDbPath("/data/db.json", "acme"), /db\.space-acme\.json$/);
});

test("sign-in picks the right space, and the session stays in it", async () => {
  const acme = await login(ACME.admin, ACME.pass);
  const beta = await login(BETA.admin, BETA.pass);
  assert.equal(acme.status, 200);
  assert.equal(acme.json.user.email, ACME.admin);
  assert.equal(beta.json.user.email, BETA.admin);
  // The demo Admin signs in to the default space as before.
  const demo = await login("admin@agrinexus.org", "Admin2026!");
  assert.equal(demo.status, 200);
  // An Acme owner's password does not work for a Beta email, and the demo password does not work inside a business.
  assert.equal((await login(BETA.admin, ACME.pass)).status, 401);
  // The admin screen data comes from the person's own space.
  const acmeState = await call("POST", "/api/team/users", { name: "Acme Staff", email: "staff@acme.example" }, acme.cookie);
  assert.equal(acmeState.status, 200);
  assert.deepEqual((await call("GET", "/api/team/users", null, acme.cookie)).json.team.map(x => x.email), ["staff@acme.example"]);
  assert.deepEqual((await call("GET", "/api/team/users", null, beta.cookie)).json.team.map(x => x.email), [], "Beta sees none of Acme's people");
  const demoTeam = (await call("GET", "/api/team/users", null, demo.cookie)).json.team.map(x => x.email);
  assert.ok(!demoTeam.includes("staff@acme.example"), "the default space does not see Acme's people");
});

test("a record saved in one space is in that space's file only", async () => {
  const acme = await login(ACME.admin, ACME.pass);
  await call("POST", "/api/team/users", { name: "Marker Person", email: "marker-zq81@acme.example" }, acme.cookie);
  const text = id => JSON.stringify(fileOf(id));
  assert.ok(text("acme").includes("marker-zq81@acme.example"));
  assert.ok(!text("beta").includes("marker-zq81"));
  assert.ok(!fs.readFileSync(defaultDb, "utf8").includes("marker-zq81"));
  assert.ok(!text("acme").includes("staff@beta") && !text("beta").includes("acme.example"), "no email crossed over");
});

test("the demo accounts are never planted into a business space", async () => {
  await login(ACME.admin, ACME.pass);
  await login(BETA.admin, BETA.pass);
  await call("GET", "/api/healthz");
  for (const id of ["acme", "beta"]) {
    const emails = fileOf(id).users.map(user => user.email);
    assert.ok(!emails.includes("admin@agrinexus.org"), `${id} must not hold the demo Admin`);
    assert.ok(!emails.includes("user@agrinexus.org") && !emails.includes("investor@agrinexus.org"), `${id} must not hold any demo account`);
  }
  assert.ok(fs.readFileSync(defaultDb, "utf8").includes("admin@agrinexus.org"), "the default space keeps them, as today");
  // And the demo password gets nobody into a business: the email is not in any business directory entry, so it is the default space's account.
  const acme = await login(ACME.admin, "Admin2026!");
  assert.equal(acme.status, 401);
});

test("a remember-me cookie cannot be turned into another space, and an unknown session lands nowhere", async () => {
  const acme = await login(ACME.admin, ACME.pass);
  const durable = acme.cookie.split("; ").find(item => item.startsWith("agrinexus_auth="));
  assert.ok(durable, "a remember-me cookie was issued");
  const [payload, signature] = durable.slice("agrinexus_auth=".length).split(".");
  const claim = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
  assert.equal(claim.space, "acme", "the cookie carries its space");
  const forged = Buffer.from(JSON.stringify({ ...claim, space: "beta" })).toString("base64url");
  // Only the durable cookie is sent (no live session), once as issued and once with the space changed.
  assert.equal((await call("GET", "/api/team/users", null, durable)).status, 200);
  assert.equal((await call("GET", "/api/team/users", null, `agrinexus_auth=${forged}.${signature}`)).status, 401, "a changed space breaks the signature");
  assert.equal((await call("GET", "/api/team/users", null, "agrinexus_sid=0000")).status, 401);
});

test("a phone call goes to the business whose number was dialled", async () => {
  // Link the caller in Acme's own list (the Admin screen route runs in Acme's space).
  const acme = await login(ACME.admin, ACME.pass);
  const member = await call("POST", "/api/team/users", { name: "Caller One", email: "caller1@acme.example" }, acme.cookie);
  assert.equal(member.status, 200);
  assert.equal((await call("POST", "/api/admin/phone-callers", { phone: CALLER, email: "caller1@acme.example", label: "caller" }, acme.cookie)).status, 200);
  assert.ok(fileOf("acme").phoneCallers?.some(row => row.phone === CALLER));
  assert.ok(!(fileOf("beta").phoneCallers || []).some(row => row.phone === CALLER));

  const form = to => ({ CallSid: "CA1234567890abcdef", From: CALLER, To: to, CallStatus: "ringing" });
  const toAcme = await phoneCall("/api/voice/phone/incoming", form(ACME.number));
  assert.equal(toAcme.status, 200);
  assert.ok(!/not authorized/i.test(toAcme.text), "Acme's number answers Acme's caller");
  const toBeta = await phoneCall("/api/voice/phone/incoming", form(BETA.number));
  assert.match(toBeta.text, /not authorized/i, "the same caller is a stranger to Beta");
  const toNobody = await phoneCall("/api/voice/phone/incoming", form("+254700000333"));
  assert.match(toNobody.text, /not authorized/i, "an unclaimed number is the default space, where this caller is not listed");
});

test("a status callback for a call a business placed lands in that business's record", async () => {
  // For a call we placed, Twilio's From is our number (the business) and To is the person called.
  const sid = "CAabcdef0123456789";
  const placed = await phoneCall("/api/voice/phone/call-status", { CallSid: sid, CallStatus: "completed", Direction: "outbound-api", From: BETA.number, To: CALLER });
  assert.equal(placed.status, 200);
  assert.ok((fileOf("beta").profile.twilioCallStatusReceipts || []).some(item => item.callSid === sid), "saved in Beta");
  assert.ok(!(fileOf("acme").profile.twilioCallStatusReceipts || []).some(item => item.callSid === sid), "not in Acme");
  assert.ok(!fs.readFileSync(defaultDb, "utf8").includes(sid), "not in the default space");
  // An incoming call's status names our number as To.
  const incoming = await phoneCall("/api/voice/phone/call-status", { CallSid: "CAfedcba9876543210", CallStatus: "completed", Direction: "inbound", From: CALLER, To: ACME.number });
  assert.equal(incoming.status, 200);
  assert.ok((fileOf("acme").profile.twilioCallStatusReceipts || []).some(item => item.callSid === "CAfedcba9876543210"));
});

test("the phone stream token and the remember-me cookie carry the space, signed", () => {
  const source = fs.readFileSync(path.join(root, "server.js"), "utf8");
  const extract = name => { const start = source.indexOf(`function ${name}(`); assert.ok(start > 0, name); return source.slice(start, source.indexOf("\nfunction ", start + 10)); };
  const sandbox = { process: { env }, Buffer, crypto, PHONE_REALTIME_STREAM_TOKEN_TTL_MS: 120000, businessSpaces: spaces };
  vm.createContext(sandbox);
  vm.runInContext(["durableAuthSecret", "issuePhoneRealtimeStreamToken", "verifyPhoneRealtimeStreamToken"].map(extract).join("\n") + "\nthis.issue = issuePhoneRealtimeStreamToken; this.verify = verifyPhoneRealtimeStreamToken;", sandbox);
  const token = sandbox.issue("u1", "CA12345678901", Date.now(), env, "acme");
  assert.equal(sandbox.verify(token, "CA12345678901", Date.now(), env).space, "acme");
  const [payload, signature] = token.split(".");
  const forged = Buffer.from(JSON.stringify({ ...JSON.parse(Buffer.from(payload, "base64url")), space: "beta" })).toString("base64url");
  assert.equal(sandbox.verify(`${forged}.${signature}`, "CA12345678901", Date.now(), env), null);
  assert.equal(sandbox.verify(sandbox.issue("u1", "CA12345678901", Date.now(), env, "default"), "CA12345678901", Date.now(), env).space, undefined, "default space adds no claim");
});
