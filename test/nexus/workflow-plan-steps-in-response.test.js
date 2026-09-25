"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4612;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-workflow-plan-steps-db.json");

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
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" }) });
  cookie = res.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

async function callWorkflow(command, extra = {}) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_workflow", arguments: { command, ...extra } })
  });
  return res.json();
}

// Found live: workflowOrchestratorBridgeProvider.workflowPlan() computes a
// real, specific step list per workflow type into data.plan.steps, but the
// response text fell back to one of two fixed disclaimer sentences
// regardless of type -- the real steps never reached the user.
test("a workforce-learning workflow's real, specific step list reaches the response, not just a generic disclaimer", async () => {
  const result = await callWorkflow("start a workforce learning workflow", { workflowType: "workforce-learning" });
  assert.equal(result.status, "prepared");
  for (const step of ["learning resource", "save course", "session preparation"]) {
    assert.match(result.response, new RegExp(step), `expected the real step "${step}" to appear in the response`);
  }
  assert.equal(result.providerData?.plan?.workflowType, "workforce-learning");
});

test("a different workflow type gets its own different, real step list -- not a copy-pasted generic sentence", async () => {
  const result = await callWorkflow("start a drone service request workflow", { workflowType: "drone-service-request" });
  assert.match(result.response, /mission request/);
  assert.match(result.response, /field visit plan/);
  assert.doesNotMatch(result.response, /learning resource/, "a drone workflow's response must not contain the workforce workflow's steps");
});

test("saving a confirmed workflow also shows the real steps, not just the save confirmation sentence", async () => {
  const result = await callWorkflow("save this marketplace inquiry workflow", { workflowType: "marketplace-inquiry", confirmed: true });
  assert.equal(result.status, "completed");
  assert.match(result.response, /listing search/);
  assert.match(result.response, /inquiry draft/);
});
