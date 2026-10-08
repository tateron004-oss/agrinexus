"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const http = require("node:http");
const crypto = require("node:crypto");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { startServer } = require("../helpers/free-port.js");

// Found by running the production audit against the real Postgres-backed runtime with the AI model configured: account 2 could read account 1's last spoken sentence
// in its own /api/state (agentMemory.activeGuidedMission.goal, lastAutonomousBrainAppliedTo.command, ...).
//
// The older agent keeps ONE "what we are in the middle of" context in the shared profile. runAgentCommand clears the previous speaker's context when a different person
// starts talking (switchAgentContextTo), but the route that asks the AI model first (runNexusOpenAiNativeAgentCommand, the first thing /api/agent/command and the phone
// line do whenever the model is configured) wrote the new speaker's name onto that context without clearing it. The second person then counted as "the person who spoke
// last" and was shown the first person's context as their own.
const root = path.resolve(__dirname, "..", "..");
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "native-context-switch-"));
const MARKER = `ctxmark${crypto.randomBytes(3).toString("hex")}`;
let mock; let real; let admin;

async function call(base, method, route, body, cookie = "") {
  const res = await fetch(`${base}${route}`, { method, headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}) }, body: body ? JSON.stringify(body) : undefined });
  const text = await res.text(); let json = null; try { json = JSON.parse(text); } catch { /* not JSON */ }
  return { status: res.status, json, text, cookie: (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ") };
}
async function account(name) {
  const email = `ctx-${name}-${crypto.randomUUID().slice(0, 6)}@example.com`; const password = `Pw-${crypto.randomUUID()}`;
  assert.equal((await call(real.base, "POST", "/api/admin/test-user", { email, name, password, language: "en" }, admin)).status, 200);
  const login = await call(real.base, "POST", "/api/login", { email, password });
  assert.equal(login.status, 200);
  return { email, cookie: login.cookie };
}

test.before(async () => {
  // The AI model, stood in for: it just answers in words (it calls no tool).
  mock = http.createServer((req, res) => { req.resume(); req.on("end", () => { res.setHeader("content-type", "application/json"); res.end(JSON.stringify({ id: "resp_stub", output_text: "Here is a plain answer." })); }); });
  const mockPort = await new Promise(resolve => mock.listen(0, "127.0.0.1", () => resolve(mock.address().port)));
  fs.copyFileSync(path.join(root, "db.json"), path.join(tmp, "db.json"));
  real = await startServer({ host: "127.0.0.1", env: { AGRINEXUS_DB_PATH: path.join(tmp, "db.json"), AGRINEXUS_SPACES_PATH: path.join(tmp, "spaces.json"), NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_TEST_REMINDER_STORE: "memory",
    OPENAI_API_KEY: "test-only-openai-native-key", OPENAI_RESPONSES_URL: `http://127.0.0.1:${mockPort}/responses`, NEXUS_OPENAI_NATIVE_ENABLED: "true",
    AGRINEXUS_TRUST_PROXY: "true", AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "100000", AGRINEXUS_RATE_LIMIT_PER_WINDOW: "100000", NEXUS_FILE_STORAGE_DIR: path.join(tmp, "uploads") } });
  admin = (await call(real.base, "POST", "/api/login", { email: "admin@agrinexus.org", password: "Admin2026!" })).cookie;
});
test.after(() => { try { real?.stop(); } catch { /* gone */ } try { mock?.close(); } catch { /* gone */ } fs.rmSync(tmp, { recursive: true, force: true }); });

const leaks = (value, path = "", found = []) => {
  if (typeof value === "string") { if (value.toLowerCase().includes(MARKER)) found.push(path); }
  else if (value && typeof value === "object") for (const [key, inner] of Object.entries(value)) leaks(inner, `${path}/${key}`, found);
  return found;
};

test("a second person who talks to the AI-model route is not shown the first person's last sentence in their own /api/state", async () => {
  const first = await account("first"); const second = await account("second");
  // The first person speaks through the older spoken route (the agent keeps their context: mission, brain context, ...).
  const spoken = await call(real.base, "POST", "/api/voice/realtime/tool", { name: "nexus_general_conversation", correlationId: `ctx-${MARKER}`, arguments: { command: `remind me tomorrow at 10am to ${MARKER} sell the maize`, language: "en" }, language: "en" }, first.cookie);
  assert.equal(spoken.status, 200);
  // The first person's own state does hold it (the test would prove nothing otherwise).
  const own = await call(real.base, "GET", "/api/state", null, first.cookie);
  assert.ok(leaks(own.json).length > 0, "the first person's own state should carry what they said");
  // The second person asks the AI-model route something else, then reads their own state.
  const asked = await call(real.base, "POST", "/api/agent/command", { command: "what is a good crop to grow after beans", language: "en", conversational: true }, second.cookie);
  assert.equal(asked.status, 200);
  assert.match(String(asked.json?.commandResult?.intent || ""), /^openai_native\./, "the second person's request must have gone through the AI-model route");
  const theirs = await call(real.base, "GET", "/api/state", null, second.cookie);
  assert.deepEqual(leaks(theirs.json), [], "the second person's /api/state must not carry the first person's words");
});
