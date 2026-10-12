"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// The voice interview for telehealth sends the reason it collected as `summary`. End to end on a real server with no AI key: a reason that describes an emergency opens nothing and says what to do; an ordinary reason
// is saved as an intake case for a provider to review.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "tele-intake-"));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let n = 0; let cookie = "";

async function waitFor(url) { for (let i = 0; i < 100; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
async function post(route, body) {
  const res = await fetch(`${base}${route}`, { method: "POST", headers: { "content-type": "application/json", "x-forwarded-for": "10.15.97.1", ...(cookie ? { cookie } : {}) }, body: JSON.stringify(body) });
  const text = await res.text();
  let json = null; try { json = JSON.parse(text); } catch { /* not JSON */ }
  return { status: res.status, json, setCookie: (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ") };
}
const tool = async (name, args) => (await post("/api/voice/realtime/tool", { name, correlationId: `ti-${++n}-${Math.random().toString(36).slice(2, 8)}`, arguments: { language: "en", ...args }, language: "en" })).json || {};

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), SESSION_SECRET: "tele-intake-secret-for-the-test-0123456789", AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_DIR: path.join(dir, "spaces"),
    OPENAI_API_KEY: "", DATABASE_URL: "", AGRINEXUS_STATE_STORE: "json", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_TEST_REMINDER_STORE: "memory", AGRINEXUS_TRUST_PROXY: "true",
    AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "100000", AGRINEXUS_RATE_LIMIT_PER_WINDOW: "100000" }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
  const login = await post("/api/login", { email: "user@agrinexus.org", password: "User2026!" });
  assert.equal(login.status, 200); cookie = login.setCookie;
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("a telehealth intake whose reason describes an emergency opens nothing and says what to do; an ordinary reason is saved as a case", async () => {
  const ask = summary => tool("nexus_health_preparation", { command: "Start my telehealth intake", summary });
  const emergency = await ask("Reason: I cannot breathe and my chest hurts. Started: an hour ago.");
  assert.equal(emergency.status, "emergency-guidance");
  assert.match(emergency.response, /emergency or urgent care resources now instead of a routine telehealth intake/);
  assert.doesNotMatch(emergency.response, /I started your telehealth intake/);
  const calm = await ask("Reason: a cough and a fever. Started: two days ago.");
  assert.match(calm.response, /^I started your telehealth intake, case AN-PAT-[A-Z0-9-]+-VOICE-[0-9a-f]{8}\./);
  assert.equal(calm.status, "health-intake-created");
});
