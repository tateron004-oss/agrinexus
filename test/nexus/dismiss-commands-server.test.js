"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// Found by using the product: "close the weather card" mentions the weather, so the weather tool answered it with "Which location's weather would you like?" (twice, on the person's phone).
// Through the real server (no AI key, so the older path the phone line and the fallback use): a request to close or go back runs no tool and asks no question.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://127.0.0.1:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "dismiss-server-"));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let cookie = ""; let counter = 0;

async function waitFor(url) { for (let i = 0; i < 100; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
const post = async (route, body) => { const res = await fetch(`${base}${route}`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify(body) }); return res.json(); };
const tool = async (name, command, language = "en") => { counter += 1; return post("/api/voice/realtime/tool", { name, correlationId: `d${Date.now()}-${counter}`, arguments: { command, language }, language }); };

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  server = spawn(process.execPath, ["server.js"], { cwd: root, stdio: "ignore", windowsHide: true, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_PATH: path.join(dir, "spaces.json"),
    OPENAI_API_KEY: "", DATABASE_URL: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", AGRINEXUS_TRUST_PROXY: "true", AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "100000", AGRINEXUS_RATE_LIMIT_PER_WINDOW: "100000", NEXUS_TEST_REMINDER_STORE: "memory" } });
  await waitFor(`${base}/api/healthz`);
  const login = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
  assert.equal(login.status, 200);
  cookie = (login.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ");
});
test.after(() => { server?.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("a request to close the weather card runs no tool and asks no question, whichever tool the model picked", async () => {
  for (const name of ["nexus_weather", "nexus_live_knowledge", "nexus_maps_route", "nexus_workflow", "nexus_everyday_records", "nexus_general_conversation"]) {
    for (const phrase of ["close the weather card", "Close out the weather information.", "dismiss the weather", "go back to the orb", "I'm done"]) {
      const result = await tool(name, phrase);
      assert.equal(result.response, "Okay.", `${name} / "${phrase}" -> ${result.response}`);
      assert.equal(result.status, "completed");
      assert.deepEqual(result.clientAction, { type: "return-to-orb" });
      assert.doesNotMatch(String(result.response), /which location|city|weather would/i);
    }
  }
});

test("in Kiswahili the answer is Sawa, and the screen still goes back to the orb", async () => {
  const result = await tool("nexus_weather", "funga kadi ya hali ya hewa", "sw");
  assert.equal(result.response, "Sawa.");
  assert.deepEqual(result.clientAction, { type: "return-to-orb" });
});

test("a real weather question is still a weather question, and a person's own records are never mistaken for a dismissal", async () => {
  const weather = await tool("nexus_weather", "what is the weather");
  assert.match(String(weather.response), /location|city|town|region/i, "a weather question with no place still asks where");
  assert.equal(weather.clientAction, undefined);
  const list = await tool("nexus_everyday_records", "clear my shopping list");
  assert.notEqual(list.response, "Okay.", "clearing a shopping list is not a dismissal");
  assert.equal(list.clientAction, undefined);
  const report = await tool("nexus_everyday_records", "close report 12: pump repaired");
  assert.equal(report.clientAction, undefined);
});

test("the older command route does the same, so the phone line and the fallback never answer a close with a question", async () => {
  const body = await post("/api/agent/command", { command: "close the weather card", language: "en", conversational: true });
  const result = body.commandResult || body;
  assert.doesNotMatch(String(result.response || ""), /which location|city, town|weather would/i, String(result.response));
});

test("the voice instructions tell the model to answer a close with Okay and call no tool", () => {
  const source = fs.readFileSync(path.join(root, "server.js"), "utf8");
  const start = source.indexOf("function openAiRealtimeInstructions(");
  const body = source.slice(start, source.indexOf("\nfunction ", start + 10));
  assert.match(body, /close, hide or dismiss what is on the screen/);
  assert.match(body, /do not call any tool and do not ask a question: say \\"Okay\.\\"/);
});
