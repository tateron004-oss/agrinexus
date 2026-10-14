"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// Found testing with several people at once: eight guests created at the same moment left ONE working session ("Sign in required" for the other seven, a minute into their test), because the shared record is read and
// written whole on every request and the writes overwrite each other. A guest's record is now made again from the signed token that carries who they are, while the session is still live on the server.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "guest-race-"));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let server;

async function waitFor(url) { for (let i = 0; i < 100; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
const guest = async (name, address) => {
  const res = await fetch(`${base}/api/auth/guest-session`, { method: "POST", headers: { "content-type": "application/json", "x-forwarded-for": address }, body: JSON.stringify({ name }) });
  return { status: res.status, cookie: (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ") };
};
const state = async (cookie, address = "10.1.1.99") => fetch(`${base}/api/state`, { headers: { cookie, "x-forwarded-for": address } });

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), SESSION_SECRET: "guest-race-secret-for-the-test-0123456789", AGRINEXUS_DB_PATH: path.join(dir, "db.json"),
    OPENAI_API_KEY: "", DATABASE_URL: "", AGRINEXUS_STATE_STORE: "json", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_TEST_REMINDER_STORE: "memory", AGRINEXUS_TRUST_PROXY: "true",
    AGRINEXUS_RATE_LIMIT_PER_WINDOW: "100000", AGRINEXUS_GUEST_SESSIONS_PER_HOUR_PER_ADDRESS: "1000" }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("every guest made at the same moment keeps a working session, as the person they said they were", async () => {
  const made = await Promise.all(Array.from({ length: 8 }, (_, i) => guest(`Race ${i}`, `10.1.1.${i + 1}`)));
  assert.deepEqual(made.map(item => item.status), Array(8).fill(201));
  await sleep(400);
  const after = await Promise.all(made.map(item => state(item.cookie)));
  assert.deepEqual(after.map(res => res.status), Array(8).fill(200), "all eight are still signed in");
  const names = await Promise.all(after.map(async res => (await res.json()).user?.name));
  assert.deepEqual([...names].sort(), Array.from({ length: 8 }, (_, i) => `Race ${i}`).sort(), "each is still the person who made it");
  const again = await Promise.all(made.map(item => state(item.cookie)));
  assert.deepEqual(again.map(res => res.status), Array(8).fill(200), "and stays so on the next request");
});

test("a signed-out guest is not brought back by the token, and a made-up guest cookie is not believed", async () => {
  const [mine] = await Promise.all([guest("Leaving", "10.2.2.1"), guest("Staying", "10.2.2.2")]);
  assert.equal((await state(mine.cookie)).status, 200);
  const out = await fetch(`${base}/api/logout`, { method: "POST", headers: { cookie: mine.cookie, "content-type": "application/json", "x-forwarded-for": "10.2.2.1" }, body: "{}" });
  assert.ok(out.ok, "logout works");
  assert.equal((await state(mine.cookie)).status, 401, "the old cookies no longer sign in");
  const forged = mine.cookie.replace(/agrinexus_auth=[^;]*/, "agrinexus_auth=eyJ1c2VySWQiOiJndWVzdF8wMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAiLCJndWVzdCI6dHJ1ZSwibmFtZSI6Ik1hbGxvcnkifQ.bm90LXNpZ25lZA");
  assert.equal((await state(forged)).status, 401, "an unsigned token makes nobody");
});

test("the token carries a guest's identity only when it was signed for a guest, and the source says so", () => {
  const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
  assert.ok(server.includes("{ guest: true, name: displayName, language }"), "guest creation signs the claims");
  assert.ok(server.includes("restrictions: [...GUEST_RESTRICTIONS]"));
  assert.ok(server.includes("if (!resolvedUser && userId && GUEST_ID_PATTERN.test(String(userId)))"), "only with a live server-side session");
});
