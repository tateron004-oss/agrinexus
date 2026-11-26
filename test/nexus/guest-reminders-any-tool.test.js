"use strict";
// Live Igbo voice run, 26 Nov 2026: the speech-to-text wrote "Remind me tomorrow at 6 PM to water the maize" down in Igbo, the page's own reminder route did not take it, the voice
// model sent it to the messaging tool, and a guest was told "This account type cannot use that action here. Sign in with a full account." Setting, cancelling or listing one's own
// reminder sends nothing, so it is done by the reminder code whichever of the messaging, email or health tools the model picked. A real message stays refused for a guest.
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "guest-reminders-"));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let n = 0; let cookie = "";

async function waitFor(url) { for (let i = 0; i < 100; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
async function post(route, body) {
  const res = await fetch(`${base}${route}`, { method: "POST", headers: { "content-type": "application/json", "x-forwarded-for": "10.15.98.1", ...(cookie ? { cookie } : {}) }, body: JSON.stringify(body) });
  const text = await res.text();
  let json = null; try { json = JSON.parse(text); } catch { /* not JSON */ }
  return { status: res.status, json, setCookie: (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ") };
}
const tool = async (name, args) => (await post("/api/voice/realtime/tool", { name, correlationId: `gr-${++n}-${Math.random().toString(36).slice(2, 8)}`, arguments: { language: "ig", timeZone: "Africa/Lagos", ...args }, language: "ig" })).json || {};

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), SESSION_SECRET: "guest-reminders-secret-for-the-test-0123456789", AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_DIR: path.join(dir, "spaces"),
    OPENAI_API_KEY: "", DATABASE_URL: "", AGRINEXUS_STATE_STORE: "json", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_TEST_REMINDER_STORE: "memory", AGRINEXUS_TRUST_PROXY: "true",
    AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "100000", AGRINEXUS_RATE_LIMIT_PER_WINDOW: "100000" }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
  const guest = await post("/api/auth/guest-session", { name: "Voice Test", language: "ig" });
  assert.ok([200, 201].includes(guest.status), JSON.stringify(guest.json).slice(0, 200)); cookie = guest.setCookie;
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

const RESTRICTED = /This account type cannot use that action here/;

test("a guest's own reminder is set, listed and cancelled whichever of the messaging, email or health tools the voice model picked", async () => {
  for (const [toolName, task] of [["nexus_communications", "water the maize"], ["nexus_email", "feed the goats"], ["nexus_health_preparation", "take my medicine"]]) {
    const set = await tool(toolName, { command: `Remind me tomorrow at 6 PM to ${task}.` });
    assert.doesNotMatch(String(set.response || ""), RESTRICTED, `${toolName}: ${JSON.stringify(set).slice(0, 240)}`);
    assert.notEqual(set.status, "restricted", toolName);
    assert.match(String(set.response || ""), new RegExp(`remind you to ${task.replace(/\bmy\b/, "(?:my|your)")}`, "i"), `${toolName} set it: ${String(set.response).slice(0, 200)}`);
  }
  const list = await tool("nexus_communications", { command: "Show my reminders" });
  assert.doesNotMatch(String(list.response || ""), RESTRICTED);
  assert.match(String(list.response || ""), /water the maize/i, String(list.response).slice(0, 200));
  const cancel = await tool("nexus_communications", { command: "Cancel my reminder to water the maize." });
  assert.doesNotMatch(String(cancel.response || ""), RESTRICTED, JSON.stringify(cancel).slice(0, 240));
  assert.notEqual(cancel.status, "restricted");
});

test("a real message is still refused for a guest, and a reminder sent by text is not taken for one's own reminder", async () => {
  const text = await tool("nexus_communications", { command: "Text +2348012345678 saying I am on my way" });
  assert.match(String(text.response || ""), RESTRICTED, JSON.stringify(text).slice(0, 240));
  const bySms = await tool("nexus_communications", { command: "Remind Grace by SMS about the meeting tomorrow at 6 PM" });
  assert.match(String(bySms.response || ""), RESTRICTED, "an SMS to someone else is a message");
});
