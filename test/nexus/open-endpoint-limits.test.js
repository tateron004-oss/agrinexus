"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const crypto = require("node:crypto");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// Companion to login-limit-counts-failures-only.test.js. Many people share one internet address (a clinic, an office, a mobile carrier), so a limit that counts every request from an address hurts real users
// and barely slows an attacker. These limits count the abusive event instead: a wrong reset code, a NEW guest account, a reset email actually asked for a given inbox, each signed-in person's own calls. The routes an
// anonymous caller could use to send email, make accounts or keep the write path busy have limits where they had none.

const root = path.resolve(__dirname, "..", "..");
const portA = 15540;
const portB = 15541;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "open-limits-"));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const sha = value => crypto.createHash("sha256").update(value).digest("hex");
const servers = [];
async function waitFor(url) { for (let i = 0; i < 80; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
function start(port, name, extraEnv, mutateDb) {
  const dbFile = path.join(dir, `${name}.json`);
  const db = JSON.parse(fs.readFileSync(path.join(root, "db.json"), "utf8"));
  if (mutateDb) mutateDb(db);
  fs.writeFileSync(dbFile, JSON.stringify(db));
  const child = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_TRUST_PROXY: "true", AGRINEXUS_DB_PATH: dbFile, AGRINEXUS_SPACES_PATH: path.join(dir, `${name}-dir.json`), OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", ...extraEnv }, stdio: "ignore", windowsHide: true });
  servers.push(child);
  return { dbFile, base: `http://localhost:${port}`, port };
}
function caller(base) {
  return async (method, pathname, body, ip, cookie) => {
    const res = await fetch(`${base}${pathname}`, { method, headers: { "content-type": "application/json", "x-forwarded-for": ip, ...(cookie ? { cookie } : {}) }, body: method === "GET" ? undefined : JSON.stringify(body || {}) });
    const text = await res.text();
    let json = null; try { json = JSON.parse(text); } catch { /* not JSON */ }
    return { status: res.status, json, text, cookie: (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ") };
  };
}

const TOKENS = Array.from({ length: 8 }, (_, i) => `known-reset-code-number-${i}-abcdef`);
let A; let B; let callA; let callB;
const png = Buffer.concat([Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]), Buffer.alloc(64, 3)]);

test.before(async () => {
  A = start(portA, "a", {}, db => {
    TOKENS.forEach((token, i) => db.users.push({ id: `u_reset${i}`, name: `Reset ${i}`, email: `reset${i}@example.test`, password: "Old-Password-1!", role: "Standard User", country: "Nigeria", language: "en",
      resetTokenHash: sha(token), resetTokenExpiresAt: new Date(Date.now() + 20 * 60_000).toISOString() }));
  });
  B = start(portB, "b", { AGRINEXUS_GUEST_ACCOUNT_CAP: "8", AGRINEXUS_GUEST_SESSIONS_PER_HOUR_PER_ADDRESS: "4", AGRINEXUS_ANON_WRITE_RATE_LIMIT_PER_MINUTE: "10", AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "5",
    NEXUS_FILE_UPLOAD_ENABLED: "true", NEXUS_FILE_STORAGE_DIR: path.join(dir, "uploads") });
  callA = caller(A.base); callB = caller(B.base);
  await waitFor(`${A.base}/api/healthz`);
  await waitFor(`${B.base}/api/healthz`);
});
test.after(() => { for (const child of servers) child.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

const tokenHashOf = email => JSON.parse(fs.readFileSync(A.dbFile, "utf8")).users.find(item => item.email === email)?.resetTokenHash;

test("password reset request: a clinic's worth of different people on one address is fine; a flood from it is stopped; another address is unaffected", async () => {
  const ip = "198.51.100.1";
  for (let i = 0; i < 20; i += 1) assert.equal((await callA("POST", "/api/auth/password-reset", { email: `person${i}@example.test` }, ip)).status, 200, `request ${i + 1}`);
  assert.equal((await callA("POST", "/api/auth/password-reset", { email: "person-more@example.test" }, ip)).status, 429, "the 21st in ten minutes");
  assert.equal((await callA("POST", "/api/auth/password-reset", { email: "person-more@example.test" }, "198.51.100.2")).status, 200, "another address");
});

test("password reset request: at most 5 emails an hour to any one inbox, from any number of addresses, and the answer never reveals whether the email is registered", async () => {
  const email = "user@agrinexus.org";
  const seen = [tokenHashOf(email)];
  const answers = [];
  for (let i = 0; i < 5; i += 1) {
    const res = await callA("POST", "/api/auth/password-reset", { email }, `198.51.100.${10 + i}`);
    assert.equal(res.status, 200);
    answers.push(res.text);
    seen.push(tokenHashOf(email));
  }
  assert.equal(new Set(seen).size, 6, "each of the first five requests issued a fresh code");
  const sixth = await callA("POST", "/api/auth/password-reset", { email }, "198.51.100.30");
  assert.equal(sixth.status, 200, "the same answer, not an error");
  assert.equal(sixth.text, answers[0]);
  assert.equal(tokenHashOf(email), seen[5], "but no new code was made, and no email was sent");
  // An email nobody has registered gets exactly the same answers all the way through, so the limit tells an outsider nothing.
  const nobody = [];
  for (let i = 0; i < 7; i += 1) nobody.push(await callA("POST", "/api/auth/password-reset", { email: "nobody-here@example.test" }, `198.51.100.${40 + i}`));
  assert.ok(nobody.every(res => res.status === 200 && res.text === answers[0]));
});

test("password reset confirm: only a wrong or expired code uses up the budget, so people on one address who get it right are never held back", async () => {
  const ip = "198.51.100.60";
  for (let i = 0; i < 7; i += 1) assert.equal((await callA("POST", "/api/auth/password-reset/confirm", { email: `reset${i}@example.test`, token: TOKENS[i], newPassword: `New-Password-${i}!` }, ip)).status, 200, `correct reset ${i + 1}`);
  assert.equal((await callA("POST", "/api/login", { email: "reset0@example.test", password: "New-Password-0!" }, "198.51.100.61")).status, 200, "the new password works");
  for (let i = 0; i < 5; i += 1) assert.equal((await callA("POST", "/api/auth/password-reset/confirm", { email: "reset0@example.test", token: `wrong-code-${i}-xxxxxxxx`, newPassword: "Whatever-1!" }, ip)).status, 400, `wrong code ${i + 1}`);
  assert.equal((await callA("POST", "/api/auth/password-reset/confirm", { email: "reset7@example.test", token: TOKENS[7], newPassword: "New-Password-7!" }, ip)).status, 429, "five wrong codes from the address: even a right one waits");
  assert.equal((await callA("POST", "/api/auth/password-reset/confirm", { email: "reset7@example.test", token: TOKENS[7], newPassword: "New-Password-7!" }, "198.51.100.62")).status, 200, "another address is unaffected");
});

test("guest sessions: a guest coming back is not counted, new ones are limited per address per hour, and guest-hopping does not earn the AI route a new budget", async () => {
  const ip = "203.0.113.10";
  const first = await callB("POST", "/api/auth/guest-session", { name: "Visitor One" }, ip);
  assert.equal(first.status, 201);
  for (let i = 0; i < 12; i += 1) assert.equal((await callB("POST", "/api/auth/guest-session", { name: "Visitor One" }, ip, first.cookie)).status, 200, `return ${i + 1}`);
  for (let i = 0; i < 3; i += 1) assert.equal((await callB("POST", "/api/auth/guest-session", { name: `Visitor ${i + 2}` }, ip)).status, 201, `new guest ${i + 2}`);
  const refused = await callB("POST", "/api/auth/guest-session", { name: "Visitor Five" }, ip);
  assert.equal(refused.status, 429);
  assert.equal(refused.json.code, "guest_session_rate_limited");
  assert.equal((await callB("POST", "/api/auth/guest-session", { name: "Elsewhere" }, "203.0.113.11")).status, 201, "another address");

  // Guests are made with no check, so a new guest never gets a new AI budget: the address's own budget (5 here) is shared by every guest on it.
  const ip2 = "203.0.113.20";
  const g1 = await callB("POST", "/api/auth/guest-session", { name: "Hopper" }, ip2);
  assert.equal(g1.status, 201);
  const statuses = [];
  for (let i = 0; i < 6; i += 1) statuses.push((await callB("POST", "/api/agent/plan", { goal: "x" }, ip2, g1.cookie)).status);
  assert.equal(statuses[5], 429, `the 6th call from the address: ${statuses}`);
  const g2 = await callB("POST", "/api/auth/guest-session", { name: "Hopper Two" }, ip2);
  assert.equal(g2.status, 201);
  assert.equal((await callB("POST", "/api/agent/plan", { goal: "x" }, ip2, g2.cookie)).status, 429, "a second guest on the same address shares the exhausted budget");
});

test("guest sessions: a ceiling on live guest accounts overall, however many addresses ask", async () => {
  // So far this server has made 4 + 1 + 2 = 7 guests; the ceiling is 8.
  assert.equal((await callB("POST", "/api/auth/guest-session", { name: "Last One" }, "203.0.113.30")).status, 201);
  const full = await callB("POST", "/api/auth/guest-session", { name: "Too Many" }, "203.0.113.31");
  assert.equal(full.status, 503);
  assert.equal(full.json.code, "guest_sessions_full");
});

test("signed-out changes have a generous ceiling per address; sign-in, webhooks and signed-in people are never counted in it", async () => {
  const ip = "203.0.113.40";
  for (let i = 0; i < 10; i += 1) assert.notEqual((await callB("POST", "/api/nexus/profile/language", {}, ip)).status, 429, `signed-out change ${i + 1}`);
  const over = await callB("POST", "/api/nexus/profile/language", {}, ip);
  assert.equal(over.status, 429);
  assert.notEqual((await callB("POST", "/api/nexus/profile/language", {}, "203.0.113.41")).status, 429, "another address");
  assert.equal((await callB("POST", "/api/login", { email: "user@agrinexus.org", password: "wrong-password" }, ip)).status, 401, "sign-in has its own limits");
  assert.notEqual((await callB("POST", "/api/telephony/inbound-webhook", {}, ip)).status, 429, "a provider webhook is not limited here");
  const signedIn = await callB("POST", "/api/login", { email: "user@agrinexus.org", password: "User2026!" }, ip);
  assert.equal(signedIn.status, 200);
  assert.notEqual((await callB("POST", "/api/nexus/profile/language", {}, ip, signedIn.cookie)).status, 429, "a signed-in person is not counted");
});

test("signed-in people on one address each have their own AI and upload allowance", async () => {
  const ip = "203.0.113.50";
  const admin = await callB("POST", "/api/login", { email: "admin@agrinexus.org", password: "Admin2026!" }, ip);
  const demo = await callB("POST", "/api/login", { email: "demo@agrinexus.org", password: "Prototype2026!" }, ip);
  assert.equal(admin.status, 200);
  assert.equal(demo.status, 200);
  const first = await callB("POST", "/api/agent/plan", { goal: "x" }, ip, admin.cookie);
  assert.ok(first.status !== 429 && first.status !== 403, `the admin can reach the route: ${first.status}`);
  for (let i = 0; i < 4; i += 1) assert.notEqual((await callB("POST", "/api/agent/plan", { goal: "x" }, ip, admin.cookie)).status, 429);
  assert.equal((await callB("POST", "/api/agent/plan", { goal: "x" }, ip, admin.cookie)).status, 429, "the admin has used their own 5");
  const other = await callB("POST", "/api/agent/plan", { goal: "x" }, ip, demo.cookie);
  assert.notEqual(other.status, 429, "a colleague on the same address is not held back");

  // Uploads: 20 per person in ten minutes, per person.
  const upload = async cookie => {
    const form = new FormData();
    form.append("file", new Blob([png], { type: "image/png" }), "a.png");
    const res = await fetch(`${B.base}/api/nexus/upload`, { method: "POST", headers: { cookie, "x-forwarded-for": ip }, body: form });
    return res.status;
  };
  for (let i = 0; i < 20; i += 1) assert.equal(await upload(admin.cookie), 200, `admin upload ${i + 1}`);
  assert.equal(await upload(admin.cookie), 429, "the admin's 21st");
  assert.equal(await upload(demo.cookie), 200, "a colleague on the same address can still upload");
});
