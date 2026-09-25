"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// 2026-09-24: the account owner logged into the shared demo app and was
// greeted/addressed as "Ron" instead of by his own account identity. Root
// cause: db.profile is a single GLOBAL object shared by every account, and
// db.profile.agentMemory.userName / userModel.name got overwritten globally
// the moment ANYONE said something like "Hello Nexus, this is Ron" -- every
// other account's personalization then fell back to reading that same
// shared field, with no per-user scoping at all. A real cross-account data
// leak (of a name, not something more sensitive, but the "this cannot
// happen" identity-isolation expectation is real).
//
// Fixed with one small, genuinely per-user store, db.profile.userDisplayNames
// (keyed by the authenticated user's real account id), and by removing the
// shared-global fallback entirely at every read site instead of just adding
// a better fallback in front of it.
//
// This is a real, spawned-server, end-to-end HTTP test (not a mock, and not
// just a source-text check): it proves that two real, separately-logged-in
// accounts on the same running server and the same on-disk db.json get
// genuinely isolated personalization, which is exactly the class of bug a
// unit test against an extracted function (with a stubbed-in db.profile)
// would not catch -- the leak only shows up when the SAME shared db.profile
// object is read back by a DIFFERENT account, which is what this test
// actually exercises.
const root = path.resolve(__dirname, "..", "..");
const port = 4608;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-user-display-name-per-account-isolation-db.json");

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

async function login(email, password) {
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  assert.equal(res.status, 200, `login for ${email} must succeed`);
  const cookie = res.headers.get("set-cookie")?.split(";")[0];
  assert.ok(cookie, `login for ${email} must return a session cookie`);
  return cookie;
}

async function say(cookie, command) {
  const res = await fetch(`${base}/api/agent/command`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ command })
  });
  const body = await res.json();
  return body.commandResult?.response || "";
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

test("user A stating a name does not leak into user B's greeting on the same shared server/db", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  const standardCookie = await login("user@agrinexus.org", "User2026!");

  // Baseline: before anyone states a name, neither account is greeted by a
  // name that isn't their own.
  const standardBefore = await say(standardCookie, "good morning");
  assert.doesNotMatch(standardBefore, /\bRon\b/, "must not already be greeted as Ron before anyone said that name");

  // User A (admin) states a name in a real greeting -- this is the exact
  // phrase from the original bug report ("Hello Nexus, this is Ron").
  const adminGreeting = await say(adminCookie, "Hello Nexus, this is Ron");
  assert.match(adminGreeting, /\bRon\b/, "the account that just stated the name must be addressed by it");

  // The core regression check: user A's spoken name must not bleed into
  // user B's personalization on a later, completely unrelated turn.
  const standardAfter = await say(standardCookie, "good morning");
  assert.doesNotMatch(standardAfter, /\bRon\b/, "a DIFFERENT account must never be addressed by the name another account just stated");

  // And user A's own name capture must still work for user A on a later turn
  // (this is a real per-account store, not just a suppression of the leak).
  const adminAfter = await say(adminCookie, "good morning");
  assert.match(adminAfter, /\bRon\b/, "the account that stated its own name should still be recognized by it on a later turn");

  // Cross-check directly against the on-disk shared db.profile: the new
  // per-account store must be keyed by the real account id, and must not
  // contain any entry for the standard user.
  const db = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  assert.equal(db.profile.userDisplayNames?.u_admin, "Ron", "the name must be stored under the admin account's own real id");
  assert.ok(!("u_standard" in (db.profile.userDisplayNames || {})), "the standard-user account must have no display name recorded at all");
});

test("a second account stating its own different name is recognized as itself and does not overwrite or get overwritten by the first account's name", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  const standardCookie = await login("user@agrinexus.org", "User2026!");

  await say(adminCookie, "Hello Nexus, this is Ron");
  const standardGreeting = await say(standardCookie, "Hi, my name is Grace.");
  assert.match(standardGreeting, /\bGrace\b/, "the second account's own stated name must be recognized for itself");
  assert.doesNotMatch(standardGreeting, /\bRon\b/, "the second account must never be greeted with the first account's name");

  // Both must now independently remember their own name.
  const adminAfter = await say(adminCookie, "good morning");
  assert.match(adminAfter, /\bRon\b/, "user A keeps its own name");
  const standardAfter = await say(standardCookie, "good morning");
  assert.match(standardAfter, /\bGrace\b/, "user B keeps its own, different name");
  assert.doesNotMatch(standardAfter, /\bRon\b/, "user B's later turns must still never show user A's name");

  const db = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  assert.equal(db.profile.userDisplayNames?.u_admin, "Ron");
  assert.equal(db.profile.userDisplayNames?.u_standard, "Grace");
});

test("the shared-global fallback fields are no longer read anywhere in server.js", () => {
  const source = fs.readFileSync(path.join(root, "server.js"), "utf8");
  assert.doesNotMatch(source, /agentMemory\.userName\b/, "no code should still write/read the old shared-global userName field");
  assert.doesNotMatch(source, /agentMemory\?\.userName\b/);
  assert.doesNotMatch(source, /userModel\?\.name\b/, "no code should still read the old shared-global userModel.name field");
  assert.doesNotMatch(source, /userModel\.name\b/);
  assert.match(source, /profile\.userDisplayNames = profile\.userDisplayNames \|\| \{\}/, "the new per-user store must be initialized centrally in ensureAiProfile");
});
