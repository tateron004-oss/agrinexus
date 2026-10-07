"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// Many people can sit behind one internet address (a clinic, an office, a mobile carrier). The sign-in limits used to count every attempt, so the 11th correct sign-in from one address in five minutes
// was refused, and so was one person's 7th sign-in in a quarter of an hour. Only FAILED attempts count now: the same limits still stop guessing, a correct password clears that account's failures, and a
// correct sign-in never lets a guesser reset the address's count.

const root = path.resolve(__dirname, "..", "..");
const port = 15359;
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "login-limit-"));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let server;
async function waitFor(url) { for (let i = 0; i < 80; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
const login = (email, password, ip) => fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json", "x-forwarded-for": ip }, body: JSON.stringify({ email, password }) });
const GOOD = ["user@agrinexus.org", "User2026!"];

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_TRUST_PROXY: "true", AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_PATH: path.join(dir, "dir.json"), OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("correct sign-ins are never limited: 15 from one address, by one account, in a row", async () => {
  for (let i = 1; i <= 15; i += 1) assert.equal((await login(...GOOD, "198.51.100.10")).status, 200, `sign-in ${i}`);
});

test("a correct password clears that account's failures", async () => {
  const email = "investor@agrinexus.org";
  for (let i = 0; i < 5; i += 1) assert.equal((await login(email, "wrong-password", "198.51.100.20")).status, 401);
  assert.equal((await login(email, "Investor2026!", "198.51.100.21")).status, 200);
  for (let i = 0; i < 6; i += 1) assert.equal((await login(email, "wrong-password", `198.51.100.${30 + i}`)).status, 401, `failure ${i + 1} after the clear`);
  assert.equal((await login(email, "wrong-password", "198.51.100.40")).status, 429, "the 7th failure since the clear is blocked");
});

test("guessing is still stopped: 10 failures from one address, then even the right password waits", async () => {
  const ip = "198.51.100.50";
  for (let i = 0; i < 10; i += 1) assert.equal((await login(`guess${i}@example.com`, "wrong-password", ip)).status, 401, `failure ${i + 1}`);
  assert.equal((await login(...GOOD, ip)).status, 429, "the address has used its failures");
  assert.equal((await login(...GOOD, "198.51.100.51")).status, 200, "another address is unaffected");
});

test("a correct sign-in does not let a guesser reset the address's count", async () => {
  const ip = "198.51.100.60";
  for (let i = 0; i < 9; i += 1) assert.equal((await login(`spray${i}@example.com`, "wrong-password", ip)).status, 401);
  assert.equal((await login(...GOOD, ip)).status, 200, "their own correct sign-in works");
  assert.equal((await login("spray-last@example.com", "wrong-password", ip)).status, 401, "the 10th failure");
  assert.equal((await login("spray-more@example.com", "wrong-password", ip)).status, 429, "the count was not reset by the correct sign-in");
});
