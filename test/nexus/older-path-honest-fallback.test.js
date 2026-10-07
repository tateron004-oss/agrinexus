"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// When the older command route could not match a request to anything it can do, it used to answer one fixed "AI copilot recommends the next best action..." paragraph that never saw what the person
// said (so it was the same for a note, a list, a reading), which read as an answer when nothing had been saved. It now says plainly that it could not do it and that nothing was saved.

const root = path.resolve(__dirname, "..", "..");
const port = 15361;
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "honest-fallback-"));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let server;
let cookie = "";
async function waitFor(url) { for (let i = 0; i < 80; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
async function ask(command) {
  const res = await fetch(`${base}/api/agent/command`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ command }) });
  const body = await res.json();
  return { status: res.status, result: body.commandResult || body };
}

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_PATH: path.join(dir, "dir.json"), OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
  const login = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
  assert.equal(login.status, 200);
  cookie = (login.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ");
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("a list request the older route cannot match is told plainly that nothing was done", async () => {
  const { status, result } = await ask("Add milk to my shopping list");
  assert.equal(status, 200);
  assert.equal(result.intent, "conversation.not_handled");
  assert.match(result.response, /couldn't do that.*nothing was saved/i);
  assert.doesNotMatch(result.response, /AI copilot recommends/i);
  assert.equal(result.status, "needs-review");
});

test("requests the older route can really handle are unaffected", async () => {
  const { result } = await ask("open the map");
  assert.notEqual(result.intent, "conversation.not_handled");
});
