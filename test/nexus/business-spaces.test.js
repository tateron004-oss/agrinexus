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

// Separate business spaces. Each business has its own copy of the shared record, chosen once per request from the sign-in (email), the session or cookie, or the number that was dialled.
// The platform owner (an Admin in the default space) creates businesses; a business's own Admin is never the platform owner and never reaches platform-level screens.

const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "spaces-"));
const defaultDb = path.join(dir, "db.json");
const env = { SESSION_SECRET: "spaces-secret-for-the-test-0123456789", TWILIO_AUTH_TOKEN: "spaces-twilio-token", PUBLIC_BASE_URL: base };
let server;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const fileOf = id => JSON.parse(fs.readFileSync(spaces.spaceDbPath(defaultDb, id), "utf8"));

const ACME = { id: "acme", name: "Acme Farms", admin: "owner@acme.example", number: "+254700000111" };
const BETA = { id: "beta-co", name: "Beta Co-op", admin: "owner@beta.example", number: "+254700000222" };
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
async function phoneCall(pathname, form) {
  const params = Object.keys(form).sort().map(key => `${key}${form[key]}`).join("");
  const signature = crypto.createHmac("sha1", env.TWILIO_AUTH_TOKEN).update(`${base}${pathname}${params}`).digest("base64");
  const res = await fetch(`${base}${pathname}`, { method: "POST", headers: { "content-type": "application/x-www-form-urlencoded", "x-twilio-signature": signature }, body: new URLSearchParams(form).toString() });
  return { status: res.status, text: await res.text() };
}

test("the directory: ids, one email and one number belong to exactly one business", async () => {
  const d = spaces.createFileDirectory(path.join(dir, "unit-directory.json"));
  await assert.rejects(d.createSpace("default"), /business id/);
  await assert.rejects(d.createSpace("Bad Name"), /business id/);
  await d.createSpace("one"); await d.createSpace("two");
  await assert.rejects(d.createSpace("one"), /already exists/);
  await d.linkEmail("A@x.org", "one");
  await assert.rejects(d.linkEmail("a@x.org", "two"), /already belongs/);
  await d.linkNumber("+254 700 000 999", "one");
  await assert.rejects(d.linkNumber("+254700000999", "two"), /already belongs/);
  assert.equal(await d.spaceForEmail("a@X.org"), "one");
  assert.equal(await d.spaceForEmail("nobody@x.org"), "default");
  assert.equal(await d.spaceForNumber("+254700000999"), "one");
  assert.equal(await d.spaceForNumber("+254700000998"), null);
  assert.equal(await d.exists("one"), true);
  assert.equal(await d.exists("three"), false);
  // Two changes at once are both kept.
  await Promise.all([d.linkNumber("+254700000001", "one"), d.linkNumber("+254700000002", "two")]);
  assert.deepEqual((await d.describe()).map(item => [item.id, item.numbers.length]), [["one", 2], ["two", 1]]);
  assert.equal(spaces.spaceDbPath("/data/db.json", "default"), "/data/db.json");
  assert.match(spaces.spaceDbPath("/data/db.json", "acme"), /db\.space-acme\.json$/);
});

test("the platform owner: an Admin in the default space, optionally limited to PLATFORM_OWNER_EMAILS; never a business's Admin", () => {
  const admin = { email: "Owner@x.org", role: "Admin" };
  assert.equal(spaces.isPlatformOwner(admin, {}, "default"), true, "with nothing set, every default-space Admin (as before)");
  assert.equal(spaces.isPlatformOwner(admin, { PLATFORM_OWNER_EMAILS: "owner@x.org, second@x.org" }, "default"), true);
  assert.equal(spaces.isPlatformOwner({ email: "other@x.org", role: "Admin" }, { PLATFORM_OWNER_EMAILS: "owner@x.org" }, "default"), false);
  assert.equal(spaces.isPlatformOwner(admin, {}, "acme"), false, "an Admin inside a business is not the platform owner");
  assert.equal(spaces.isPlatformOwner({ ...admin, role: "Standard User" }, {}, "default"), false);
  assert.equal(spaces.isPlatformOwner({ ...admin, status: "disabled" }, {}, "default"), false);
  assert.equal(spaces.isPlatformOwner({ ...admin, guest: true }, {}, "default"), false);
  assert.equal(spaces.isPlatformOwner(null, {}, "default"), false);
});

test("a new space's record has the one first account and none of the demo accounts or data", () => {
  const template = { countries: [{ id: "c" }], routes: [], users: [{ email: "admin@agrinexus.org" }], profile: { orders: [{ id: "demo" }], wallet: 5990, userId: "u_demo", activity: ["x"] } };
  const record = spaces.newSpaceRecord(template, { adminAccount: { id: "u1", email: "a@b.org" } });
  assert.deepEqual(record.users.map(user => user.email), ["a@b.org"]);
  assert.deepEqual(record.profile.orders, [], "no demo lists");
  assert.equal(record.profile.wallet, 0, "no pretend balance");
  assert.equal(record.profile.userId, "", "no demo user");
  assert.ok(Array.isArray(record.profile.activity), "but the usual sections exist, so the app does not trip over a missing one");
  assert.equal(record.countries.length, 1);
});

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), defaultDb);
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, ...env, PORT: String(port), AGRINEXUS_DB_PATH: defaultDb, AGRINEXUS_SPACES_PATH: path.join(dir, "spaces-directory.json"), OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("two businesses on one real server: creation, sign-in, separation, platform-only screens, phones", async () => {
  const owner = await login("admin@agrinexus.org", "Admin2026!");
  assert.equal(owner.status, 200);
  assert.equal(owner.json.permissions.platform, true);
  const ordinary = await login("user@agrinexus.org", "User2026!");
  assert.equal(ordinary.json.permissions.platform, false);

  // Only the platform owner manages businesses.
  assert.equal((await call("GET", "/api/platform/businesses")).status, 401);
  assert.equal((await call("GET", "/api/platform/businesses", null, ordinary.cookie)).status, 403);
  assert.equal((await call("POST", "/api/platform/businesses", { id: "x1", name: "X", adminName: "A", adminEmail: "a@x.example" }, ordinary.cookie)).status, 403);

  // Validation, then creation.
  const make = (business, extra = {}) => call("POST", "/api/platform/businesses", { id: business.id, name: business.name, adminName: `${business.name} owner`, adminEmail: business.admin, country: "Kenya", ...extra }, owner.cookie);
  assert.equal((await make(ACME, { id: "Bad Id" })).status, 400);
  assert.equal((await make(ACME, { id: "default" })).status, 400);
  assert.equal((await make(ACME, { name: " " })).status, 400);
  assert.equal((await make(ACME, { adminEmail: "not-an-email" })).status, 400);
  assert.equal((await make(ACME, { adminEmail: "admin@agrinexus.org" })).status, 409, "an email that is already an account here");
  const acme = await make(ACME);
  assert.equal(acme.status, 200);
  assert.ok(acme.json.created.password.length >= 12);
  assert.equal((await make(ACME, { adminEmail: "other@acme.example" })).status, 409, "the id is taken");
  assert.equal((await make(BETA, { adminEmail: ACME.admin })).status, 409, "an email already linked to another business");
  const beta = await make(BETA);
  assert.equal(beta.status, 200);
  assert.deepEqual(beta.json.businesses.map(item => item.id), [ACME.id, BETA.id]);
  assert.ok(!acme.text.replace(acme.json.created.password, "").includes("scrypt:"), "no hash in the answer");
  assert.ok(!fs.existsSync(spaces.spaceDbPath(defaultDb, "bad-id")), "a refused business leaves nothing behind");

  // Each business's Admin signs in to their own space, and only there.
  const a = await login(ACME.admin, acme.json.created.password);
  const b = await login(BETA.admin, beta.json.created.password);
  assert.equal(a.json.user.email, ACME.admin);
  assert.equal(a.json.permissions.platform, false);
  assert.deepEqual(a.json.loginProfiles, [], "no demo login picker inside a business");
  assert.equal(a.json.admin.readiness, null, "the platform's own readiness is not shown to a business");
  assert.deepEqual(a.json.admin.phoneCallersFromSettings, []);
  assert.deepEqual(a.json.admin.users.map(user => user.email), [ACME.admin]);
  assert.equal((await login(BETA.admin, acme.json.created.password)).status, 401, "one business's password is not another's");

  // A business's Admin has no platform powers.
  for (const [method, route] of [["GET", "/api/platform/businesses"], ["POST", "/api/platform/businesses"], ["POST", "/api/platform/businesses/admin-reset"], ["POST", "/api/platform/businesses/number"],
    ["GET", "/api/admin/communications/status"], ["GET", "/api/admin/system/errors"], ["GET", "/api/admin/system/postgres-shadow-status"], ["POST", "/api/admin/subscriber"], ["POST", "/api/billing/checkout"]]) {
    assert.equal((await call(method, route, {}, a.cookie)).status, 403, route);
  }
  assert.equal((await call("POST", "/api/demo/run", {}, a.cookie)).status, 403, "demo runs would fill a real business with pretend records");
  // Guest sessions are the default-space demo only.
  assert.equal((await call("POST", "/api/auth/guest-session", {}, a.cookie)).status, 403);

  // Records are separate: a person added in Acme is in Acme's file and nowhere else.
  assert.equal((await call("POST", "/api/team/users", { name: "Marker Person", email: "marker-zq81@acme.example" }, a.cookie)).status, 200);
  const text = id => JSON.stringify(fileOf(id));
  assert.ok(text(ACME.id).includes("marker-zq81@acme.example"));
  assert.ok(!text(BETA.id).includes("marker-zq81") && !fs.readFileSync(defaultDb, "utf8").includes("marker-zq81"));
  assert.deepEqual((await call("GET", "/api/team/users", null, b.cookie)).json.team, [], "Beta sees none of Acme's people");
  // The documented demo accounts are never planted into a business.
  for (const id of [ACME.id, BETA.id]) assert.ok(!fileOf(id).users.some(user => /@agrinexus\.org$/.test(user.email)), `${id} holds no demo account`);
  assert.ok(fs.readFileSync(defaultDb, "utf8").includes("admin@agrinexus.org"), "the default space keeps them, as today");

  // Phones: a number belongs to one business; a caller listed by Acme is a stranger to everyone else.
  assert.equal((await call("POST", "/api/platform/businesses/number", { id: ACME.id, number: "0712" }, owner.cookie)).status, 400);
  assert.equal((await call("POST", "/api/platform/businesses/number", { id: "nope", number: ACME.number }, owner.cookie)).status, 404);
  assert.equal((await call("POST", "/api/platform/businesses/number", { id: ACME.id, number: ACME.number }, owner.cookie)).status, 200);
  assert.equal((await call("POST", "/api/platform/businesses/number", { id: BETA.id, number: BETA.number }, owner.cookie)).status, 200);
  assert.equal((await call("POST", "/api/platform/businesses/number", { id: BETA.id, number: ACME.number }, owner.cookie)).status, 409, "a number is one business's");
  const listed = (await call("GET", "/api/platform/businesses", null, owner.cookie)).json.businesses;
  assert.ok(!JSON.stringify(listed).includes("254700000111"), "numbers are masked in the list");
  assert.deepEqual(listed.find(item => item.id === ACME.id).admins, [ACME.admin]);
  assert.equal((await call("POST", "/api/team/users", { name: "Caller One", email: "caller1@acme.example" }, a.cookie)).status, 200);
  assert.equal((await call("POST", "/api/admin/phone-callers", { phone: CALLER, email: "caller1@acme.example" }, a.cookie)).status, 200);
  const form = to => ({ CallSid: "CA1234567890abcdef", From: CALLER, To: to, CallStatus: "ringing" });
  const toAcme = await phoneCall("/api/voice/phone/incoming", form(ACME.number));
  assert.equal(toAcme.status, 200);
  assert.ok(!/not authorized/i.test(toAcme.text), "Acme's number answers Acme's caller");
  assert.match((await phoneCall("/api/voice/phone/incoming", form(BETA.number))).text, /not authorized/i, "the same caller is a stranger to Beta");
  assert.match((await phoneCall("/api/voice/phone/incoming", form("+254700000333"))).text, /not authorized/i, "an unclaimed number is the default space");
  // A status callback for a call a business placed (our number is the From) lands in that business's record.
  const sid = "CAabcdef0123456789";
  assert.equal((await phoneCall("/api/voice/phone/call-status", { CallSid: sid, CallStatus: "completed", Direction: "outbound-api", From: BETA.number, To: CALLER })).status, 200);
  assert.ok((fileOf(BETA.id).profile.twilioCallStatusReceipts || []).some(item => item.callSid === sid));
  assert.ok(!(fileOf(ACME.id).profile.twilioCallStatusReceipts || []).some(item => item.callSid === sid));

  // A remember-me cookie names its space and is signed; changing the space, or naming a business that does not exist, gets nowhere.
  const durable = a.cookie.split("; ").find(item => item.startsWith("agrinexus_auth="));
  assert.ok(durable);
  const [payload, signature] = durable.slice("agrinexus_auth=".length).split(".");
  const claim = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
  assert.equal(claim.space, ACME.id);
  assert.equal((await call("GET", "/api/team/users", null, durable)).status, 200);
  const sign = body => { const p = Buffer.from(JSON.stringify(body)).toString("base64url"); return `agrinexus_auth=${p}.${crypto.createHmac("sha256", env.SESSION_SECRET).update(p).digest("base64url")}`; };
  assert.equal((await call("GET", "/api/team/users", null, `agrinexus_auth=${Buffer.from(JSON.stringify({ ...claim, space: BETA.id })).toString("base64url")}.${signature}`)).status, 401, "a changed space breaks the signature");
  assert.equal((await call("GET", "/api/team/users", null, sign({ ...claim, space: "ghost-business" }))).status, 401, "a business that does not exist is just signed out");
  assert.equal((await call("GET", "/api/team/users", null, sign({ ...claim, space: BETA.id }))).status, 401, "even correctly signed, Acme's person is not in Beta's record");

  // The platform owner can give a business's first Admin a new temporary password; the old password and sign-in stop working.
  const reset = await call("POST", "/api/platform/businesses/admin-reset", { id: ACME.id }, owner.cookie);
  assert.equal(reset.status, 200);
  assert.equal(reset.json.reset.email, ACME.admin);
  assert.equal((await call("GET", "/api/team/users", null, a.cookie)).status, 401, "the old session is gone");
  assert.equal((await login(ACME.admin, acme.json.created.password)).status, 401);
  assert.equal((await login(ACME.admin, reset.json.reset.password)).status, 200);
  assert.equal((await call("POST", "/api/platform/businesses/admin-reset", { id: "ghost-business" }, owner.cookie)).status, 404);
});

test("the platform screen is served and the header link is hidden until the server says so", async () => {
  assert.equal((await fetch(`${base}/platform.html`)).status, 200);
  assert.equal((await fetch(`${base}/platform.js`)).status, 200);
  const html = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
  assert.match(html, /id="platformLink"[^>]*href="\/platform\.html"[^>]*hidden/);
});

test("the phone stream token carries the space, signed", () => {
  const source = fs.readFileSync(path.join(root, "server.js"), "utf8");
  const extract = name => { const start = source.indexOf(`function ${name}(`); assert.ok(start > 0, name); return source.slice(start, source.indexOf("\nfunction ", start + 10)); };
  const sandbox = { process: { env }, Buffer, crypto, PHONE_REALTIME_STREAM_TOKEN_TTL_MS: 120000 };
  vm.createContext(sandbox);
  vm.runInContext(["durableAuthSecret", "issuePhoneRealtimeStreamToken", "verifyPhoneRealtimeStreamToken"].map(extract).join("\n") + "\nthis.issue = issuePhoneRealtimeStreamToken; this.verify = verifyPhoneRealtimeStreamToken;", sandbox);
  const token = sandbox.issue("u1", "CA12345678901", Date.now(), env, "acme");
  assert.equal(sandbox.verify(token, "CA12345678901", Date.now(), env).space, "acme");
  const [payload, signature] = token.split(".");
  const forged = Buffer.from(JSON.stringify({ ...JSON.parse(Buffer.from(payload, "base64url")), space: "beta" })).toString("base64url");
  assert.equal(sandbox.verify(`${forged}.${signature}`, "CA12345678901", Date.now(), env), null);
  assert.equal(sandbox.verify(sandbox.issue("u1", "CA12345678901", Date.now(), env, "default"), "CA12345678901", Date.now(), env).space, undefined, "the default space adds no claim");
});
