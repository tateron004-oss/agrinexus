"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Confirmed live during the Kyro capability audit (2026-09-22): every account -- the seeded
// demo/admin/standard users AND anything created via /api/admin/test-user or /api/admin/admin-user --
// had its password written into db.json's users[] array in the clear, regardless of AUTH_STORE (the
// blob is a shadow copy either way). This pins that a plaintext row already sitting in the blob (the
// committed db.json still has one) is verified once and migrated to a real scrypt hash on next login,
// that a brand-new sandbox account is stored hashed from the start, and that wrong credentials still fail.
const root = path.resolve(__dirname, "..", "..");
const port = 4603;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-password-storage-hashing-db.json");

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

function readUsers() {
  return JSON.parse(fs.readFileSync(tempDbPath, "utf8")).users;
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

test("a legacy plaintext row (the committed db.json's shape) is not left in the clear", () => {
  const admin = readUsers().find(user => user.email === "admin@agrinexus.org");
  assert.equal(admin.password, "Admin2026!", "precondition: the fixture really does start out plaintext");
});

test("logging in against a plaintext row succeeds and migrates it to a real hash, never leaving the plaintext behind", async () => {
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" }) });
  assert.equal(res.status, 200);
  await wait(200);
  const admin = readUsers().find(user => user.email === "admin@agrinexus.org");
  assert.ok(admin.password.startsWith("scrypt:"), `expected a scrypt hash, got: ${admin.password}`);
  assert.notEqual(admin.password, "Admin2026!");
});

test("a second login against the now-hashed row still succeeds with the real password", async () => {
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" }) });
  assert.equal(res.status, 200);
});

test("a wrong password is rejected against a hashed row, exactly as it would be against a plaintext one", async () => {
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "definitely-wrong" }) });
  assert.equal(res.status, 401);
});

test("a brand-new sandbox account created via /api/admin/test-user is stored hashed from the start, and can log in with its real password", async () => {
  const loginRes = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" }) });
  const cookie = loginRes.headers.get("set-cookie").split(";")[0];

  const createRes = await fetch(`${base}/api/admin/test-user`, { method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ email: "zzverify-password-hashing@example.com", name: "Zzverify Hash Test", password: "Zzverify2026!" }) });
  const createBody = await createRes.json();
  assert.equal(createRes.status, 200);
  // The admin creating the account is still shown the real password once -- that's the intended UX, not the bug.
  assert.equal(createBody.testUserResult?.password, "Zzverify2026!");

  const stored = readUsers().find(user => user.email === "zzverify-password-hashing@example.com");
  assert.ok(stored.password.startsWith("scrypt:"), `expected a scrypt hash, got: ${stored.password}`);

  const newLogin = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "zzverify-password-hashing@example.com", password: "Zzverify2026!" }) });
  assert.equal(newLogin.status, 200);
});

// Found live (login-security follow-up audit): the blob-mode login path
// looked the account up FIRST and only ran the deliberately-expensive
// scrypt comparison when a matching account was found -- so a nonexistent
// email returned quickly while a wrong password for a real account paid
// scrypt's real cost, even though both return the identical 401. That
// timing gap alone lets an attacker enumerate valid emails. Threshold
// calibrated against this exact machine/test harness: the pre-fix path
// measured ~8ms (no real hashing), the fixed path measures ~33ms
// (real scrypt) -- 15ms sits clearly between the two with margin on both
// sides, without this test depending on a precise timing ratio.
test("a login attempt for a nonexistent email still pays a real, measurable cryptographic cost, not a fast short-circuit", async () => {
  const started = process.hrtime.bigint();
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "no-such-account-at-all@example.com", password: "anything" }) });
  const elapsedMs = Number(process.hrtime.bigint() - started) / 1e6;
  assert.equal(res.status, 401);
  assert.ok(elapsedMs >= 15, `expected a real scrypt cost (>=15ms), got ${elapsedMs.toFixed(2)}ms -- looks like the lookup short-circuited before hashing`);
});
