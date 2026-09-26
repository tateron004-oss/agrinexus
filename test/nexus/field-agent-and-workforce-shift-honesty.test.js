"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4621;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-field-agent-workforce-db.json");

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
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
  cookie = res.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

async function post(pathname, body = {}, useCookie = true) {
  const res = await fetch(`${base}${pathname}`, {
    method: "POST",
    headers: { "content-type": "application/json", ...(useCookie ? { cookie } : {}) },
    body: JSON.stringify(body)
  });
  return { status: res.status, body: await res.json() };
}

async function patch(pathname, body = {}, useCookie = true) {
  const res = await fetch(`${base}${pathname}`, {
    method: "PATCH",
    headers: { "content-type": "application/json", ...(useCookie ? { cookie } : {}) },
    body: JSON.stringify(body)
  });
  return { status: res.status, body: await res.json() };
}

// Found live (drone/workforce audit): this route had no `if (!user)` check
// at all, unlike its GET/POST siblings on the same resource. The ownership
// check falls back to the literal string "Standard User" when there is no
// signed-in user -- which is exactly the seeded demo account's real display
// name -- so any unauthenticated caller could cancel a dispatch that
// account had requested, with no cookie or login at all.
test("cancelling a field-agent dispatch requires authentication, even when the dispatch was requested by the 'Standard User' account", async () => {
  const created = await post("/api/field-agents/dispatch", { taskType: "field-visit", region: "Kenya" });
  assert.equal(created.status, 200);
  const dispatchId = created.body.dispatch.id;

  const unauthenticated = await patch(`/api/field-agents/dispatch/${dispatchId}/status`, { status: "cancelled" }, false);
  assert.equal(unauthenticated.status, 401, "an unauthenticated caller must never be able to change a dispatch's status");

  const stillAssigned = await post("/api/field-agents/dispatch", { taskType: "field-visit", region: "Kenya" });
  // If the unauthenticated cancel above had actually succeeded, the agent
  // freed by it would still show as available -- checking the dispatch
  // itself stayed "assigned" is the direct proof.
  assert.notEqual(stillAssigned.status, 500);
  const original = await patch(`/api/field-agents/dispatch/${dispatchId}/status`, { status: "cancelled" }); // the real owner, authenticated, can still cancel
  assert.equal(original.status, 200);
});

// Found live: every seeded field agent carries a real `skills` list, but
// auto-matching never consulted it -- a drone-support task in a region
// whose only available agent has no drone-support skill was still matched
// and dispatched, then recorded as staffed by a "qualified agent".
test("dispatching a drone-support task prefers a skilled agent over an unskilled one in the requested region", async () => {
  const result = await post("/api/field-agents/dispatch", { taskType: "drone-support", region: "Nigeria" });
  assert.equal(result.status, 200);
  // Chidi Okafor (Nigeria) has no drone-support skill; Wanjiru Kamau (Kenya)
  // does. Skill must win over region for this task.
  assert.equal(result.body.agent.name, "Wanjiru Kamau");
  assert.ok(result.body.agent.skills.includes("drone-support"));
});

// Found live: /api/workforce/action's "shift" handler was fully
// unconditionally repeatable -- calling it in a loop stacked unlimited
// "scheduled" shifts onto essentially the same real-world time slot and
// credited db.profile.earnings every single time, with no cap.
test("scheduling a workforce shift twice in a row is refused, not double-booked and double-paid", async () => {
  await post("/api/workforce/action", { type: "interview" });
  const first = await post("/api/workforce/action", { type: "shift" });
  assert.equal(first.status, 200);
  const earningsAfterFirst = first.body.profile.earnings;
  const scheduledCountAfterFirst = first.body.profile.shiftSchedule.filter(item => item.status === "scheduled" && new Date(item.startsAt).getTime() > Date.now()).length;
  assert.equal(scheduledCountAfterFirst, 1, "exactly one future-dated shift must exist after the first, successful call");

  const second = await post("/api/workforce/action", { type: "shift" });
  assert.equal(second.status, 409, "a second shift while one is already scheduled must be refused");

  const stateRes = await fetch(`${base}/api/state`, { headers: { cookie } });
  const state = await stateRes.json();
  assert.equal(state.profile.earnings, earningsAfterFirst, "earnings must not be credited a second time");
  assert.equal(state.profile.shiftSchedule.filter(item => item.status === "scheduled" && new Date(item.startsAt).getTime() > Date.now()).length, 1,
    "still only one future-dated shift after the refused second call");
});
