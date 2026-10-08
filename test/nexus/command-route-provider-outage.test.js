const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

// Found against the real runtime (docs/REAL_RUNTIME_VERIFICATION.md): while the AI provider answered with an error, /api/agent/command said "openai_native.provider_blocked" for EVERYTHING, including
// requests that need no model (lists, notes, reminders, health readings, safety), so an outage stopped "add milk to my shopping list". Now only a request that really needs the model keeps that answer.
// The mock provider below answers every call with HTTP 503 (an outage), or, in the second server, lets the first call through (the model picks a tool) and fails the closing wording call.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const dbPath = path.join(root, "db.json");

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
async function waitFor(url) {
  for (let i = 0; i < 100; i += 1) {
    try { const res = await fetch(url); if (res.ok) return; } catch { await wait(150); }
  }
  throw new Error(`${url} did not become reachable`);
}

async function boot(label, handler) {
  const port = freePortSync();
  const base = `http://localhost:${port}`;
  const tempDbPath = path.join(root, `tmp-command-route-provider-outage-${label}-db.json`);
  const mock = http.createServer((req, res) => {
    let raw = ""; req.on("data", chunk => { raw += String(chunk); });
    req.on("end", () => { res.setHeader("content-type", "application/json"); handler(JSON.parse(raw || "{}"), res); });
  });
  const mockPort = await new Promise(resolve => mock.listen(0, "127.0.0.1", () => resolve(mock.address().port)));
  fs.copyFileSync(dbPath, tempDbPath);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, NEXUS_DISABLE_LOCAL_ENV_FILES: "true", OPENAI_API_KEY: "test-only-openai-native-key", OPENAI_RESPONSES_URL: `http://127.0.0.1:${mockPort}/responses`, NEXUS_OPENAI_NATIVE_ENABLED: "true" },
    stdio: "ignore", windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const login = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" }) });
  const cookie = login.headers.get("set-cookie").split(";")[0];
  const ask = async (command, extra = {}) => {
    const res = await fetch(`${base}/api/agent/command`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ command, language: "en", conversational: true, timeZone: "Africa/Nairobi", ...extra }) });
    return (await res.json()).commandResult || {};
  };
  const stop = async () => { server.kill(); await new Promise(resolve => server.once("exit", resolve)); mock.close(); if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath); };
  return { ask, stop };
}

test("while the provider is down, requests that need no model are still answered; only model-dependent ones say provider_blocked", async () => {
  const outage = await boot("outage", (body, res) => { res.statusCode = 503; res.end(JSON.stringify({ error: { message: "simulated outage" } })); });
  try {
    const reminder = await outage.ask("remind me tomorrow at 8am to call the vet");
    assert.equal(reminder.intent, "openai_native.nexus_general_conversation", JSON.stringify(reminder));
    // (this test has no database, so the reminder store honestly says it could not save; with a database it says "Done. I will remind you ..." -- see the real-runtime outage script)
    assert.match(reminder.response, /reminder/i);
    assert.doesNotMatch(reminder.response, /provider returned/i);
    const needsTime = await outage.ask("remind me to water the maize");
    assert.match(needsTime.response, /When should I remind you/i);
    const reading = await outage.ask("my blood pressure is 150 over 95");
    assert.equal(reading.status, "needs-confirmation", "a health reading is read back and asked about, not blocked");
    assert.match(reading.response, /150 over 95/);
    const secret = await outage.ask("remember that my PIN is 4821");
    assert.equal(secret.intent, "safety.secret_refused");
    const crisis = await outage.ask("I want to end my life");
    assert.doesNotMatch(String(crisis.intent), /provider_blocked/, "a crisis message is answered with the safety reply, never 'provider blocked'");
    const modelNeeded = await outage.ask("tell me a story about a farmer");
    assert.equal(modelNeeded.intent, "openai_native.provider_blocked", "a request that needs the model still says so honestly");
    assert.equal(modelNeeded.status, "provider-error");
  } finally { await outage.stop(); }
});

test("when the model's closing wording call fails after a tool already ran, the tool's own answer is given, not 'provider blocked'", async () => {
  let calls = 0;
  const closing = await boot("closing", (body, res) => {
    calls += 1;
    if (!body.previous_response_id) {
      res.end(JSON.stringify({ id: "resp_1", output: [{ type: "function_call", name: "nexus_general_conversation", call_id: "call_1", id: "call_1", arguments: JSON.stringify({ command: "hello" }) }] }));
    } else { res.statusCode = 503; res.end(JSON.stringify({ error: { message: "simulated outage" } })); }
  });
  try {
    const answer = await closing.ask("hello");
    assert.ok(calls >= 2, "the closing call was attempted");
    assert.doesNotMatch(String(answer.intent), /provider_blocked/, JSON.stringify(answer));
    assert.match(answer.response, /hello|help/i);
  } finally { await closing.stop(); }
});
