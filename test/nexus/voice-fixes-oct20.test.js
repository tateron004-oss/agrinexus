"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// Two things found by testing the merged work by voice on the live site (20 October):
//  1. "Remind me every 3 months on the 15th to service the tractor" was sent by the voice model to the communications tool, which said the account could not do that, and nothing was set. A repeating reminder is now handled
//     by the reminder code whichever tool the model picked.
//  2. "Write me a PR brief" opened the interview panel, but the voice model also spoke a brief of its own instead of reading the interview's first line. The spoken line is now given an empty input, so the model sees only the line.
const root = path.resolve(__dirname, "..", "..");
const app = fs.readFileSync(path.join(root, "public/app.js"), "utf8");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "voice-fixes-"));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let n = 0; let cookie = "";

async function waitFor(url) { for (let i = 0; i < 100; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
async function post(route, body) {
  const res = await fetch(`${base}${route}`, { method: "POST", headers: { "content-type": "application/json", "x-forwarded-for": "10.15.99.1", ...(cookie ? { cookie } : {}) }, body: JSON.stringify(body) });
  const text = await res.text();
  let json = null; try { json = JSON.parse(text); } catch { /* not JSON */ }
  return { status: res.status, json, setCookie: (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ") };
}
const tool = async (name, args) => (await post("/api/voice/realtime/tool", { name, correlationId: `vf-${++n}-${Math.random().toString(36).slice(2, 8)}`, arguments: { language: "en", timeZone: "Africa/Nairobi", ...args }, language: "en" })).json || {};

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), SESSION_SECRET: "voice-fixes-secret-for-the-test-0123456789", AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_DIR: path.join(dir, "spaces"),
    OPENAI_API_KEY: "", DATABASE_URL: "", AGRINEXUS_STATE_STORE: "json", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_TEST_REMINDER_STORE: "memory", AGRINEXUS_TRUST_PROXY: "true",
    AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "100000", AGRINEXUS_RATE_LIMIT_PER_WINDOW: "100000" }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
  const login = await post("/api/login", { email: "user@agrinexus.org", password: "User2026!" });
  assert.equal(login.status, 200); cookie = login.setCookie;
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("a repeating reminder is set whichever tool the voice model picked, and the ones it should not take are left alone", async () => {
  for (const toolName of ["nexus_communications", "nexus_everyday_records", "nexus_general_conversation"]) {
    const said = await tool(toolName, { command: "Remind me every 3 months on the 15th to service the tractor" });
    // (the first is set; the same request again, by another tool, is the same reminder and says so)
    assert.match(String(said.response || ""), /(?:Okay\. I will|You already have that one: I will) remind you to service the tractor on the 15th of every 3 months at 9:00 am\./, `${toolName}: ${JSON.stringify(said).slice(0, 240)}`);
    if (toolName === "nexus_communications") assert.match(said.response, /^Okay\. I will/, "set the first time, by the wrong tool");
    assert.equal(said.status, "completed", toolName); assert.equal(said.capability, "reminders", toolName);
  }
  const ask = await tool("nexus_communications", { command: "Remind me yearly to renew the licence" });
  assert.match(ask.response, /Which date each year\?.*Nothing was set yet\./);
  const yearly = await tool("nexus_communications", { command: "Remind me every year on 15 October to renew the licence" });
  assert.match(yearly.response, /every year on 15 October at 9:00 am/);
  const list = await tool("nexus_communications", { command: "Show my repeating reminders" });
  assert.match(list.response, /service the tractor/); assert.match(list.response, /renew the licence/);
  const stop = await tool("nexus_communications", { command: "Stop my repeating reminder to renew the licence" });
  assert.match(stop.response, /stopped the repeating reminder to renew the licence/);
  // the words the model rewrites are not trusted over the person's own: the person's words are read first
  const reworded = await tool("nexus_communications", { command: "Create a quarterly recurring notification for maintenance", rawCallerText: "Remind me every 3 months on the 20th to check the pump" });
  assert.ok(reworded.response, "answered");
  // an ordinary message is not taken for a reminder
  const text = await tool("nexus_communications", { command: "Text +254712345678 saying I am on my way" });
  assert.doesNotMatch(String(text.response || ""), /repeating reminder|Okay\. I will remind you/i);
});

test("the spoken line of an interview is given a clean slate, so the model reads it and does not answer the person's request", () => {
  const at = app.indexOf("function speakKyroIntakeLine(");
  const body = app.slice(at, app.indexOf("\n}\n", at));
  assert.match(body, /type: "response\.create",\s+response: \{\s+\/\/ An empty input gives this response a clean slate[^\n]*\n\s+input: \[\],\s+instructions: `You are helping a person fill in a short form/);
  assert.match(body, /tool_choice: "none"/); assert.match(body, /output_modalities: \["audio"\]/);
});

test("the reminder gate is in the voice tool route, after the crisis answers and before the guides", () => {
  const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
  const gate = server.indexOf("const repeatAsk = rawCallerText && classifyRepeatRequest(rawCallerText) ? rawCallerText : command;");
  assert.ok(gate > 0);
  assert.ok(gate > server.indexOf("const secretRefusal = typeof secretNotSavedReply"), "after the crisis and secret answers");
  assert.ok(gate < server.indexOf("const childAsk = typeof childHelpTopic"), "before the child help and the guides");
  assert.match(server, /effectiveMentalHealthSignal\.state !== "medical_emergency"\) \{\s+const repeatOptions = \{ language: canonicalVoiceLanguage\(language\)/);
});
