const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const port = 4469;
const base = `http://localhost:${port}`;
const root = path.join(__dirname, "..");
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-field-agent-dispatch-smoke-db.json");
let userCookie = "";
let adminCookie = "";

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

async function login(email, password) {
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const setCookie = res.headers.get("set-cookie");
  if (!res.ok) throw new Error(`login ${email} failed: ${res.status}`);
  return setCookie.split(";")[0];
}

async function call(route, { method, body, cookie } = {}) {
  const res = await fetch(`${base}${route}`, {
    method: method || (body ? "POST" : "GET"),
    headers: { "content-type": "application/json", cookie },
    body: body ? JSON.stringify(body) : undefined
  });
  const json = await res.json();
  return { status: res.status, json };
}

(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, NEXUS_PRESERVE_EMPTY_ENV: "1", PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "" },
    stdio: "ignore",
    windowsHide: true
  });
  try {
    await waitFor(`${base}/api/healthz`);
    userCookie = await login("user@agrinexus.org", "User2026!");
    adminCookie = await login("admin@agrinexus.org", "Admin2026!");

    const listed = await call("/api/field-agents", { cookie: userCookie });
    assert.equal(listed.status, 200);
    assert.ok(listed.json.agents.length >= 1, "field agents must be seeded");
    assert.ok(listed.json.agents.every(agent => agent.status === "available"), "seeded agents start available");

    const kenyaAgentId = listed.json.agents.find(agent => agent.region === "Kenya").id;

    const dispatched = await call("/api/field-agents/dispatch", {
      body: { taskType: "field-visit", taskDescription: "Check maize field for pest damage", region: "Kenya" },
      cookie: userCookie
    });
    assert.equal(dispatched.status, 200);
    assert.equal(dispatched.json.agent.id, kenyaAgentId, "dispatch must match the requested region");
    assert.equal(dispatched.json.agent.status, "assigned");
    assert.equal(dispatched.json.dispatch.status, "assigned");
    const dispatchId = dispatched.json.dispatch.id;

    const nowUnavailable = await call("/api/field-agents", { cookie: userCookie });
    assert.equal(nowUnavailable.json.agents.find(agent => agent.id === kenyaAgentId).status, "assigned", "dispatched agent must show assigned");

    const dispatchAgainSameRegion = await call("/api/field-agents/dispatch", {
      body: { taskType: "field-visit", taskDescription: "second Kenya request", region: "Kenya" },
      cookie: userCookie
    });
    assert.equal(dispatchAgainSameRegion.status, 200);
    assert.notEqual(dispatchAgainSameRegion.json.agent.id, kenyaAgentId, "a second request for a busy region must fall back to a different available agent, not double-book");

    const forbiddenComplete = await call(`/api/field-agents/dispatch/${dispatchId}/status`, { method: "PATCH", body: { status: "completed" }, cookie: userCookie });
    assert.equal(forbiddenComplete.status, 403, "a standard user must not be able to mark a dispatch completed");

    const allowedCancel = await call(`/api/field-agents/dispatch/${dispatchId}/status`, { method: "PATCH", body: { status: "cancelled" }, cookie: userCookie });
    assert.equal(allowedCancel.status, 200, "a standard user must be able to cancel their own dispatch");
    assert.equal(allowedCancel.json.dispatch.status, "cancelled");

    const freedAgain = await call("/api/field-agents", { cookie: userCookie });
    assert.equal(freedAgain.json.agents.find(agent => agent.id === kenyaAgentId).status, "available", "cancelling a dispatch must free the agent");

    const secondDispatchId = dispatchAgainSameRegion.json.dispatch.id;
    const adminComplete = await call(`/api/field-agents/dispatch/${secondDispatchId}/status`, { method: "PATCH", body: { status: "completed" }, cookie: adminCookie });
    assert.equal(adminComplete.status, 200, "an admin must be able to mark a dispatch completed");
    assert.equal(adminComplete.json.dispatch.status, "completed");

    const ownDispatches = await call("/api/field-agents/dispatches", { cookie: userCookie });
    assert.equal(ownDispatches.status, 200);
    assert.ok(ownDispatches.json.dispatches.every(item => item.requestedBy === "Standard User"), "a standard user must only see their own dispatches");

    const allDispatches = await call("/api/field-agents/dispatches", { cookie: adminCookie });
    assert.ok(allDispatches.json.dispatches.length >= ownDispatches.json.dispatches.length, "an admin must see at least as many dispatches as a standard user");

    const noAgentAvailable = await call("/api/field-agents/dispatch", { body: { taskType: "field-visit", taskDescription: "third request", agentId: kenyaAgentId }, cookie: userCookie });
    // kenyaAgentId is available again after cancellation, so an explicit request for it should succeed here.
    assert.equal(noAgentAvailable.status, 200);
    assert.equal(noAgentAvailable.json.agent.id, kenyaAgentId);

    console.log("Field agent dispatch smoke test passed");
  } finally {
    server.kill();
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  }
})().catch(error => {
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  console.error(error.stack || error.message);
  process.exit(1);
});
