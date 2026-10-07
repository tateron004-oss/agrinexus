"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (cloud-agent-adjacent sweep): the only isolation on db.nexusFieldDispatches was string
// equality on the display-name field "requestedBy", not a stable id. Every account created via
// POST /api/admin/test-user with no explicit name defaults to the literal "Test User" -- so two
// DISTINCT, real, authenticated accounts sharing that default name could read (via the voice/text
// "nexus_agriculture" tool AND the direct GET /api/field-agents/dispatches route) and, via the PATCH
// status route, WRITE each other's dispatch records, including free-text taskDescription/location.
// Also: db.nexusFieldDispatches was never capped (unlike essentially every other unshift-based array in
// this file), and was entirely absent from account export/erasure despite genuinely being real
// user-submitted content.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-field-dispatch-ownership-cap-erasure-db.json");

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
let adminCookie;
let firstCookie;
let secondCookie;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const adminRes = await fetch(`${base}/api/login`, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" })
  });
  adminCookie = adminRes.headers.get("set-cookie").split(";")[0];

  // Both accounts deliberately omit "name" so each defaults to the literal "Test User" -- the exact
  // real-world collision this bug exploits.
  const firstEmail = "field-dispatch-owner-a@example.com";
  const secondEmail = "field-dispatch-owner-b@example.com";
  for (const email of [firstEmail, secondEmail]) {
    const created = await fetch(`${base}/api/admin/test-user`, {
      method: "POST", headers: { "content-type": "application/json", cookie: adminCookie },
      body: JSON.stringify({ email, password: "FieldDispatch2026!" })
    });
    assert.equal(created.status, 200, JSON.stringify(await created.clone().json()));
  }
  const firstLogin = await fetch(`${base}/api/login`, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: firstEmail, password: "FieldDispatch2026!" })
  });
  assert.equal(firstLogin.status, 200);
  firstCookie = firstLogin.headers.get("set-cookie").split(";")[0];
  const secondLogin = await fetch(`${base}/api/login`, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: secondEmail, password: "FieldDispatch2026!" })
  });
  assert.equal(secondLogin.status, 200);
  secondCookie = secondLogin.headers.get("set-cookie").split(";")[0];

  const db = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  const firstUser = db.users.find(u => u.email === firstEmail);
  const secondUser = db.users.find(u => u.email === secondEmail);
  assert.equal(firstUser.name, "Test User", "expected the default test-user name to collide");
  assert.equal(secondUser.name, "Test User", "expected the default test-user name to collide");
});

test.after(() => {
  server.kill();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
});

async function callAgriculture(cookie, command, extra = {}) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_agriculture", arguments: { command, ...extra } })
  });
  return res.json();
}

async function getDispatches(cookie) {
  const res = await fetch(`${base}/api/field-agents/dispatches`, { headers: { cookie } });
  return { status: res.status, body: await res.json() };
}

test("two distinct accounts that share the default 'Test User' name do not see each other's field-agent dispatches via voice/text", async () => {
  const created = await callAgriculture(firstCookie, "I need a field agent dispatched to Kenya for irrigation support.");
  assert.equal(created.status, "field-agent-dispatched", JSON.stringify(created));

  const asSecond = await callAgriculture(secondCookie, "Show my field agent dispatches.");
  assert.equal(asSecond.status, "field-agent-dispatches-listed");
  assert.equal(asSecond.fieldAgentDispatches.length, 0, "a same-named but distinct account must not see the other account's dispatch");
  assert.doesNotMatch(asSecond.response, /Kenya/i);

  const asFirst = await callAgriculture(firstCookie, "Show my field agent dispatches.");
  assert.equal(asFirst.fieldAgentDispatches.length, 1, "the real requester must still see their own dispatch");
});

test("two distinct same-named accounts do not see each other's dispatches via GET /api/field-agents/dispatches either", async () => {
  const asSecond = await getDispatches(secondCookie);
  assert.equal(asSecond.status, 200);
  assert.equal(asSecond.body.dispatches.length, 0);

  const asFirst = await getDispatches(firstCookie);
  assert.equal(asFirst.status, 200);
  assert.ok(asFirst.body.dispatches.length >= 1);
});

test("a same-named but distinct account cannot cancel another account's dispatch via PATCH status", async () => {
  const asFirst = await getDispatches(firstCookie);
  const dispatchId = asFirst.body.dispatches[0].id;

  const res = await fetch(`${base}/api/field-agents/dispatch/${dispatchId}/status`, {
    method: "PATCH", headers: { "content-type": "application/json", cookie: secondCookie },
    body: JSON.stringify({ status: "cancelled" })
  });
  const body = await res.json();
  assert.equal(res.status, 403, JSON.stringify(body));

  const stillThere = await getDispatches(firstCookie);
  assert.equal(stillThere.body.dispatches.find(d => d.id === dispatchId).status, "assigned", "the real owner's dispatch must be unaffected");
});

test("the real owner CAN cancel their own dispatch, unaffected by the ownership fix", async () => {
  const asFirst = await getDispatches(firstCookie);
  const dispatchId = asFirst.body.dispatches[0].id;
  const res = await fetch(`${base}/api/field-agents/dispatch/${dispatchId}/status`, {
    method: "PATCH", headers: { "content-type": "application/json", cookie: firstCookie },
    body: JSON.stringify({ status: "cancelled" })
  });
  assert.equal(res.status, 200, JSON.stringify(await res.clone().json()));
});

test("db.nexusFieldDispatches stays capped at 200 across repeated dispatches", async () => {
  // Only 4 field agents are seeded, so proving a 200-item cap can't be done with 200 real dispatch
  // calls (the pool would exhaust after 4). Pre-seed 200 filler records directly (same technique used
  // for workforce-toolkit-scoping-and-caps.test.js's 1000-item cap), then make exactly one real
  // dispatch and confirm the array is still capped.
  const db = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  const before = db.nexusFieldDispatches.length;
  for (let i = 0; i < 200; i += 1) {
    db.nexusFieldDispatches.push({ id: `field-dispatch-filler-${i}`, agentId: "filler", taskType: "field-visit", taskDescription: "filler", location: "", status: "assigned", requestedBy: "Filler", ownerId: "filler-owner", createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
  }
  // Guarantee at least one real agent is available for the one real dispatch below, independent of
  // whatever earlier tests in this file left behind.
  for (const agent of db.nexusFieldAgents) {
    agent.status = "available";
    agent.activeDispatchId = null;
  }
  fs.writeFileSync(tempDbPath, JSON.stringify(db));

  const result = await callAgriculture(adminCookie, "I need a field agent dispatched for irrigation support.");
  assert.equal(result.status, "field-agent-dispatched", JSON.stringify(result));

  const after = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  assert.ok(after.nexusFieldDispatches.length <= 200, `expected nexusFieldDispatches to be capped at 200, got ${after.nexusFieldDispatches.length}`);
  assert.ok(after.nexusFieldDispatches.length > before, "the real dispatch must still have been recorded");
});

test("account export and erasure include field-agent dispatch records the account actually owns", async () => {
  // Seed a real-shaped dispatch record directly, owned by the second account, rather than relying on
  // the finite (4-agent) seeded pool still having capacity after the tests above.
  const db = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  const secondUser = db.users.find(u => u.email === "field-dispatch-owner-b@example.com");
  db.nexusFieldDispatches.unshift({ id: `field-dispatch-export-test-${Date.now()}`, agentId: "field-agent-drc-1", taskType: "marketplace-verification", taskDescription: "Please schedule a field agent for a marketplace verification in DRC.", location: "DRC", status: "assigned", requestedBy: "Test User", ownerId: secondUser.id, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
  fs.writeFileSync(tempDbPath, JSON.stringify(db));

  const exportRes = await fetch(`${base}/api/account/export`, { method: "POST", headers: { "content-type": "application/json", cookie: secondCookie } });
  const exportBody = await exportRes.json();
  assert.equal(exportRes.status, 200, JSON.stringify(exportBody));
  assert.ok(exportBody.recordCounts.nexusFieldDispatches >= 1, "nexusFieldDispatches must be included in the export, not silently excluded for lacking a real owner field");

  const eraseRes = await fetch(`${base}/api/account/erase`, { method: "POST", headers: { "content-type": "application/json", cookie: secondCookie }, body: JSON.stringify({ confirmed: true }) });
  const eraseBody = await eraseRes.json();
  assert.equal(eraseRes.status, 200, JSON.stringify(eraseBody));
  assert.ok(eraseBody.verification.profileRecordsRemoved.nexusFieldDispatches >= 1, "nexusFieldDispatches must actually be removed by erasure");
});
