"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (weather/GPS/notifications audit): POST /api/nexus/responses/:id/
// publish created the "Nexus review response ready" notification via
// normalizeNotification({...}) with NO third `user` argument -- ownerId
// falls back to user?.id, so it was always null. GET /api/nexus/notifications
// filters a non-admin caller by nexusPilotRecordOwned(item, user) (checks
// record.ownerId === user.id), so a null ownerId never matches any real
// account: the real submitter who is actually meant to see "your response is
// ready" never received it in their own notification list, reachable only
// via the admin-all-records view.
const root = path.resolve(__dirname, "..", "..");
const port = 4707;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-nexus-response-publish-notification-owner-db.json");

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

const cookieCache = new Map();
async function login(email, password) {
  if (cookieCache.has(email)) return cookieCache.get(email);
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, password }) });
  assert.equal(res.status, 200, `login for ${email} should succeed`);
  const cookie = cookieFrom(res);
  cookieCache.set(email, cookie);
  return cookie;
}

async function createTestUser(adminCookie, email, password) {
  const res = await fetch(`${base}/api/admin/test-user`, { method: "POST", headers: { "content-type": "application/json", cookie: adminCookie },
    body: JSON.stringify({ email, name: "QA User", password }) });
  assert.equal(res.status, 200, `creating ${email} should succeed`);
}

async function post(cookie, pathname, body = {}) {
  const res = await fetch(`${base}${pathname}`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify(body) });
  return { status: res.status, body: await res.json() };
}

async function get(cookie, pathname) {
  const res = await fetch(`${base}${pathname}`, { headers: { cookie } });
  return { status: res.status, body: await res.json() };
}

let server;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

test("publishing a provider response notifies the real submitter, not nobody (a null owner)", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  await createTestUser(adminCookie, "zzresp-submitter1@example.com", "SubmitterPass2026!");
  await createTestUser(adminCookie, "zzresp-bystander1@example.com", "BystanderPass2026!");
  const submitterCookie = await login("zzresp-submitter1@example.com", "SubmitterPass2026!");
  const bystanderCookie = await login("zzresp-bystander1@example.com", "BystanderPass2026!");

  const created = await post(submitterCookie, "/api/nexus/records", { sourceMode: "general", payload: { note: "test intake" } });
  assert.equal(created.status, 200, JSON.stringify(created.body));
  const recordId = created.body.record.id;

  const response = await post(adminCookie, `/api/nexus/records/${recordId}/responses`, { responseType: "note", responseText: "Reviewed." });
  assert.equal(response.status, 200, JSON.stringify(response.body));
  const responseId = response.body.response.id;

  const published = await post(adminCookie, `/api/nexus/responses/${responseId}/publish`);
  assert.equal(published.status, 200, JSON.stringify(published.body));

  const submitterNotifications = await get(submitterCookie, "/api/nexus/notifications");
  assert.equal(submitterNotifications.status, 200, JSON.stringify(submitterNotifications.body));
  assert.ok(submitterNotifications.body.notifications.some(item => item.recordId === recordId),
    "the real submitter must see their own 'response ready' notification, not have it silently orphaned");

  const bystanderNotifications = await get(bystanderCookie, "/api/nexus/notifications");
  assert.equal(bystanderNotifications.status, 200, JSON.stringify(bystanderNotifications.body));
  assert.ok(!bystanderNotifications.body.notifications.some(item => item.recordId === recordId),
    "a different, unrelated account must never see another user's response-ready notification");
});
