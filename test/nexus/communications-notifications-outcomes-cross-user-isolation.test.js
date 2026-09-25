"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (IDOR follow-up audit, same recurring shape as the Nexus
// Operations and /api/nexus/records cross-user IDORs already fixed):
// db.nexusCommunications/nexusNotifications/nexusOutcomes are shared,
// non-per-user collections that can carry real free-text content (message
// previews, notification bodies, outcome feedback). The routes over them
// only ever checked "is anyone signed in," never whether the caller owns
// the item -- any two authenticated users shared the exact same ID space.
const root = path.resolve(__dirname, "..", "..");
const port = 4625;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-comms-notifications-outcomes-isolation-db.json");

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

function cookieFrom(res) {
  const raw = typeof res.headers.getSetCookie === "function" ? res.headers.getSetCookie() : [res.headers.get("set-cookie")].filter(Boolean);
  return raw.map(part => part.split(";")[0]).join("; ");
}

async function login(email, password) {
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password }) });
  assert.equal(res.status, 200, `login for ${email} should succeed`);
  return cookieFrom(res);
}

async function createTestUser(adminCookie, email, password) {
  const res = await fetch(`${base}/api/admin/test-user`, { method: "POST", headers: { "content-type": "application/json", cookie: adminCookie },
    body: JSON.stringify({ email, name: "QA User", password }) });
  assert.equal(res.status, 200, `creating ${email} should succeed`);
}

let server;
let victimCookie;
let attackerCookie;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  await createTestUser(adminCookie, "zzcno-victim@example.com", "VictimPass2026!");
  await createTestUser(adminCookie, "zzcno-attacker@example.com", "AttackerPass2026!");
  victimCookie = await login("zzcno-victim@example.com", "VictimPass2026!");
  attackerCookie = await login("zzcno-attacker@example.com", "AttackerPass2026!");
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

test("a communication prepared by one user is invisible and unmutable to a different real user", async () => {
  const prepareRes = await fetch(`${base}/api/nexus/communications/prepare`, { method: "POST", headers: { "content-type": "application/json", cookie: victimCookie },
    body: JSON.stringify({ channel: "sms", messagePreview: "Victim's real private message content" }) });
  const created = await prepareRes.json();
  assert.equal(created.ok, true);
  const commId = created.communication.id;

  const attackerList = await fetch(`${base}/api/nexus/communications`, { headers: { cookie: attackerCookie } }).then(r => r.json());
  assert.ok(!attackerList.communications.some(item => item.id === commId), "the attacker must not see the victim's communication in their own listing");

  const patchAttempt = await fetch(`${base}/api/nexus/communications/${commId}`, { method: "PATCH", headers: { "content-type": "application/json", cookie: attackerCookie },
    body: JSON.stringify({ messagePreview: "tampered" }) });
  assert.equal(patchAttempt.status, 404, "an attacker patching the victim's communication by real id must get communication_not_found");

  const victimList = await fetch(`${base}/api/nexus/communications`, { headers: { cookie: victimCookie } }).then(r => r.json());
  const record = victimList.communications.find(item => item.id === commId);
  assert.equal(record.messagePreview, "Victim's real private message content", "the victim's communication must be untouched");
});

test("a notification created for one user is invisible and unmutable to a different real user", async () => {
  const createRes = await fetch(`${base}/api/nexus/notifications`, { method: "POST", headers: { "content-type": "application/json", cookie: victimCookie },
    body: JSON.stringify({ title: "Victim notification", message: "Victim's private notification body" }) });
  const created = await createRes.json();
  assert.equal(created.ok, true);
  const notificationId = created.notification.id;

  const attackerList = await fetch(`${base}/api/nexus/notifications`, { headers: { cookie: attackerCookie } }).then(r => r.json());
  assert.ok(!attackerList.notifications.some(item => item.id === notificationId), "the attacker must not see the victim's notification");

  const readAttempt = await fetch(`${base}/api/nexus/notifications/${notificationId}/read`, { method: "PATCH", headers: { cookie: attackerCookie } });
  assert.equal(readAttempt.status, 404, "an attacker marking the victim's notification read must get notification_not_found");
});

test("an outcome recorded by one user is invisible to a different real user, but a real Admin still sees everything", async () => {
  const createRes = await fetch(`${base}/api/nexus/outcomes`, { method: "POST", headers: { "content-type": "application/json", cookie: victimCookie },
    body: JSON.stringify({ outcomeType: "resolved", userFeedback: "Victim's private outcome feedback" }) });
  const created = await createRes.json();
  assert.equal(created.ok, true);
  const outcomeId = created.outcome.id;

  const attackerList = await fetch(`${base}/api/nexus/outcomes`, { headers: { cookie: attackerCookie } }).then(r => r.json());
  assert.ok(!attackerList.outcomes.some(item => item.id === outcomeId), "the attacker must not see the victim's outcome feedback");

  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  const adminList = await fetch(`${base}/api/nexus/outcomes`, { headers: { cookie: adminCookie } }).then(r => r.json());
  assert.ok(adminList.outcomes.some(item => item.id === outcomeId), "a real Admin must still see the victim's outcome");
});

test("a knowledge query asked by one user is invisible to a different real user in both the listing and the detail route", async () => {
  const queryRes = await fetch(`${base}/api/nexus/knowledge/query`, { method: "POST", headers: { "content-type": "application/json", cookie: victimCookie },
    body: JSON.stringify({ question: "Victim's real private health question", category: "health" }) });
  const queried = await queryRes.json();
  assert.equal(queried.ok, true);
  // The query's own id lives in history, not in the /query response body directly --
  // pull it back out via the victim's own (correctly-scoped) history listing.
  const victimHistory = await fetch(`${base}/api/nexus/knowledge/history`, { headers: { cookie: victimCookie } }).then(r => r.json());
  const victimQuery = victimHistory.queries.find(item => item.questionSummary === "Victim's real private health question");
  assert.ok(victimQuery, "the victim's own history must include their own query");

  const attackerHistory = await fetch(`${base}/api/nexus/knowledge/history`, { headers: { cookie: attackerCookie } }).then(r => r.json());
  assert.ok(!attackerHistory.queries.some(item => item.id === victimQuery.id), "the attacker's history listing must not include the victim's query");

  const detailAttempt = await fetch(`${base}/api/nexus/knowledge/history/${victimQuery.id}`, { headers: { cookie: attackerCookie } });
  assert.equal(detailAttempt.status, 404, "an attacker fetching the victim's query by real id must get knowledge_history_not_found");

  const ownDetail = await fetch(`${base}/api/nexus/knowledge/history/${victimQuery.id}`, { headers: { cookie: victimCookie } });
  assert.equal(ownDetail.status, 200, "the victim must still be able to fetch their own query detail");
});
