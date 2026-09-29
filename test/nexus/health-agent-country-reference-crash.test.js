"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (drone/cloud-agent audit): runHealthActionByAgent never
// destructured `country` from activeContext(db) (unlike the sibling
// ensureVoiceHealthIntake it calls internally), yet its vitals/safety/
// careplan branches all reference `country.heat`/`country.risk`/
// `country.name` -- a real, unconditional ReferenceError on every single
// invocation of "capture vitals", "run a safety review", or "generate a
// care plan", whether reached through a direct voice/text command or as a
// step in the default Healthcare autopilot mission. The exception is
// caught by executeAgentStepWithRetry (so the request doesn't crash/500),
// but the feature always silently fails, reporting "needs-review" instead
// of ever actually capturing vitals, running the safety review, or
// generating the care plan.
const root = path.resolve(__dirname, "..", "..");
const port = 4714;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-health-agent-country-reference-crash-db.json");

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitFor(url) {
  for (let i = 0; i < 80; i += 1) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error(`${url} did not become reachable`);
}

let server;
let cookie;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const loginRes = await fetch(`${base}/api/login`, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "demo@agrinexus.org", password: "Prototype2026!" })
  });
  assert.equal(loginRes.status, 200);
  cookie = loginRes.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

async function cmd(body) {
  const res = await fetch(`${base}/api/agent/command`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify(body) });
  const responseBody = await res.json();
  return { httpStatus: res.status, result: responseBody.commandResult || {} };
}

test("'capture vitals' actually captures vitals instead of always silently failing", async () => {
  const { httpStatus, result } = await cmd({ command: "capture vitals", confirm: true });
  assert.equal(httpStatus, 200);
  assert.equal(result.status, "completed", `expected vitals capture to succeed, got: ${JSON.stringify(result)}`);
  assert.match(result.response, /vitals captured/i);
});

test("a safety review actually runs instead of always silently failing", async () => {
  const { httpStatus, result } = await cmd({ command: "run a safety review", confirm: true });
  assert.equal(httpStatus, 200);
  assert.equal(result.status, "completed", `expected the safety review to succeed, got: ${JSON.stringify(result)}`);
  assert.match(result.response, /safety review/i);
});

test("generating a care plan actually works instead of always silently failing", async () => {
  const { httpStatus, result } = await cmd({ command: "generate a care plan", confirm: true });
  assert.equal(httpStatus, 200);
  assert.equal(result.status, "completed", `expected care plan generation to succeed, got: ${JSON.stringify(result)}`);
  assert.match(result.response, /care plan/i);
});
