"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawn } = require("node:child_process");

// "Remind me tomorrow at 7am to check the water tank" was answered "Done. I will remind you to remind me to check the water tank tomorrow at 7am." -- the time was
// cut out of the sentence and the lead-in "remind me to" was left in the task. Through the real spoken route.

const root = path.resolve(__dirname, "..", "..");
const port = 4753;
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-reminders-spoken-test-db.json");
const tempUploadDir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-rem-uploads-"));
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let cookie;
test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), tempDbPath);
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_TEST_REMINDER_STORE: "memory", NEXUS_FILE_STORAGE_DIR: tempUploadDir }, stdio: "ignore", windowsHide: true });
  for (let i = 0; i < 80; i += 1) { try { if ((await fetch(`${base}/api/healthz`)).ok) break; } catch { await wait(150); } }
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
  cookie = res.headers.get("set-cookie").split(";")[0];
});
test.after(() => { server.kill(); fs.rmSync(tempDbPath, { force: true }); fs.rmSync(tempUploadDir, { recursive: true, force: true }); });
const speak = async command => {
  const res = await fetch(`${base}/api/voice/realtime/tool`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ name: "nexus_general_conversation", correlationId: `rem-${Math.random().toString(36).slice(2, 8)}`, arguments: { command, language: "en" }, language: "en" }) });
  return (await res.json()).response;
};

test("the spoken reply repeats the task and the time, and never 'remind you to remind me'", async () => {
  for (const [command, expected] of [
    ["remind me tomorrow at 7am to check the water tank", /^Done\. I will remind you to check the water tank at 7:00 am tomorrow\./],
    ["remind me tomorrow morning to check the water tank", /^Done\. I will remind you to check the water tank at 8:00 am tomorrow\./],
    ["remind me in an hour to check the pump", /^Done\. I will remind you to check the pump in an hour, at \d{1,2}:\d{2} (?:am|pm) (?:today|tomorrow)\./],
    ["remind me on 15 October at 10am about the clinic", /^Done\. I will remind you about the clinic at 10:00 am on \w+, 15 October\./i],
    ["remind me next Monday to call the vet", /^Done\. I will remind you to call the vet at 9:00 am on Monday, \d{1,2} \w+\./]
  ]) {
    const reply = await speak(command);
    assert.match(reply, expected, `${command} -> ${reply}`);
    assert.doesNotMatch(reply, /remind you to remind/i, reply);
  }
});
