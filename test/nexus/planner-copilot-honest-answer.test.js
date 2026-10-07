"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const http = require("node:http");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { freePortSync } = require("../helpers/free-port.js");

// The planner's open-question branch (ai.copilot) used to call runAi("copilot", ...) whose prompt never contained what the person said, so the answer was the same fixed
// recommendation whatever they asked (and with no model configured, the fixed "AI copilot recommends..." paragraph). Now the person's words go into the prompt, and when no
// real model answered, the reply says plainly that nothing was done instead of presenting a question-blind paragraph as an answer.

const root = path.resolve(__dirname, "..", "..");
// Worded to score as the copilot tool in the planner and to avoid the earlier handlers that catch "copilot", "recommend", "question" and so on (those answer before the planner runs).
const QUESTION = "ai answer operational best action: the Nakuru storage shed needs repair, no workflow should run";

function startServer(port, dir, extraEnv) {
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  return spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_PATH: path.join(dir, "dir.json"), OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", ...extraEnv },
    stdio: "ignore",
    windowsHide: true
  });
}
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
async function waitFor(url) { for (let i = 0; i < 80; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
async function signIn(base) {
  const login = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
  assert.equal(login.status, 200);
  return (login.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ");
}
async function ask(base, cookie, command) {
  const res = await fetch(`${base}/api/agent/command`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ command }) });
  const body = await res.json();
  return { status: res.status, result: body.commandResult || body };
}

test("with no real model configured, an open question is told plainly that nothing was done, not given a fixed recommendation", async () => {
  const port = freePortSync();
  const base = `http://localhost:${port}`;
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "copilot-offline-"));
  const server = startServer(port, dir, {});
  try {
    await waitFor(`${base}/api/healthz`);
    const cookie = await signIn(base);
    const { status, result } = await ask(base, cookie, QUESTION);
    assert.equal(status, 200);
    assert.equal(result.intent, "conversation.not_handled");
    assert.equal(result.status, "needs-review");
    assert.match(result.response, /couldn't do that.*nothing was saved/i);
    assert.doesNotMatch(result.response, /AI copilot recommends/i);
  } finally {
    server.kill();
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test("with a real model configured, the person's own words reach the model and its answer is returned", async () => {
  const port = freePortSync();
  const base = `http://localhost:${port}`;
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "copilot-webhook-"));
  const seen = [];
  const model = http.createServer((req, res) => {
    let raw = "";
    req.on("data", chunk => { raw += chunk; });
    req.on("end", () => {
      try { seen.push(JSON.parse(raw)); } catch { seen.push({}); }
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ text: "Test model: wait one week, prices in Nakuru usually firm up.", model: "test-model", id: "resp-1" }));
    });
  });
  await new Promise(resolve => model.listen(0, "127.0.0.1", resolve));
  const server = startServer(port, dir, { AI_PROVIDER: "webhook", AI_WEBHOOK_URL: `http://127.0.0.1:${model.address().port}/ai` });
  try {
    await waitFor(`${base}/api/healthz`);
    const cookie = await signIn(base);
    const { status, result } = await ask(base, cookie, QUESTION);
    assert.equal(status, 200);
    assert.equal(result.intent, "ai-question");
    assert.equal(result.status, "completed");
    assert.match(result.response, /Test model: wait one week/);
    assert.ok(seen.length >= 1, "the model was called");
    assert.match(seen[0].prompt, /Operator question: .*the Nakuru storage shed needs repair/);
  } finally {
    server.kill();
    model.close();
    fs.rmSync(dir, { recursive: true, force: true });
  }
});
