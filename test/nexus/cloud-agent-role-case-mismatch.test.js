"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (follow-up sweep): real user roles are stored capitalized ("Admin"/"Investor", see
// DEFAULT_USERS and every other role check in server.js), but three cloud-agent tool-template sites
// compared against lowercase "admin"/"investor" -- the whole feature was unreachable for every real
// account, including the platform's own seeded admin: creating a template was refused with "Only admin
// or investor access", approving one was refused with "Only admin can approve", and even a caller who
// passed body.approved:true at creation time silently got a draft instead of an approved template.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-cloud-agent-role-case-mismatch-db.json");

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
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" })
  });
  assert.equal(loginRes.status, 200);
  cookie = loginRes.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

async function post(pathname, body) {
  const res = await fetch(`${base}${pathname}`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify(body) });
  return { status: res.status, body: await res.json() };
}

test("a real signed-in Admin can create a cloud-agent tool template, not blocked as though they had no role at all", async () => {
  const result = await post("/api/cloud-agent/tool-template", { title: "Test supervised workflow" });
  assert.equal(result.status, 200, JSON.stringify(result.body));
  assert.ok(result.body.cloudAgentToolTemplate, "a real template must be returned");
  assert.notEqual(result.body.error, "Only admin or investor access can create cloud-agent tool templates.");
});

test("a real signed-in Admin approving body.approved:true at creation time gets an immediately-approved template, not a silent draft", async () => {
  const result = await post("/api/cloud-agent/tool-template", { title: "Auto-approved workflow", approved: true });
  assert.equal(result.status, 200, JSON.stringify(result.body));
  assert.equal(result.body.cloudAgentToolTemplate.status, "approved-template", "user.role === \"Admin\" (the real, capitalized role) must match, not silently fall through to draft-needs-approval");
});

test("a real signed-in Admin can approve a draft tool template, not told 'only admin can approve'", async () => {
  const created = await post("/api/cloud-agent/tool-template", { title: "Needs a real approval" });
  assert.equal(created.status, 200, JSON.stringify(created.body));
  const templateId = created.body.cloudAgentToolTemplate.id;
  assert.equal(created.body.cloudAgentToolTemplate.status, "draft-needs-approval");

  const approved = await post("/api/cloud-agent/approve", { templateId });
  assert.equal(approved.status, 200, JSON.stringify(approved.body));
  assert.notEqual(approved.body.error, "Only admin can approve tool templates");
  assert.equal(approved.body.cloudAgentApproval.template.status, "approved-template");
});
