"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (device/notification ownership audit): db.profile.assistantReminders is a
// single array shared by every real account in the workspace, with createdBy: user.email
// as the only per-user attribution (the same convention this codebase already uses
// elsewhere, e.g. nexusFieldDispatches' requestedBy). None of its readers filtered by
// it: "list my reminders" returned every user's reminders (task text, contact name/
// phone, scheduled time) to whichever caller asked; "cancel my reminder" canceled the
// FIRST active reminder in the whole shared array regardless of who created it -- a
// real cross-user MUTATION, not just a read leak.
const root = path.resolve(__dirname, "..", "..");
const port = 4796;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-assistant-reminders-cross-user-isolation-db.json");

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
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, password }) });
  assert.equal(res.status, 200, `login for ${email} should succeed`);
  return cookieFrom(res);
}

async function createTestUser(adminCookie, email, password) {
  const res = await fetch(`${base}/api/admin/test-user`, { method: "POST", headers: { "content-type": "application/json", cookie: adminCookie },
    body: JSON.stringify({ email, name: "QA User", password }) });
  assert.equal(res.status, 200, `creating ${email} should succeed`);
}

async function cmd(cookie, command) {
  const res = await fetch(`${base}/api/agent/command`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ command }) });
  const body = await res.json();
  return body.commandResult || {};
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

test("a different real user cannot see another user's reminder via 'list my reminders'", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  await createTestUser(adminCookie, "zzrem-victim1@example.com", "VictimPass2026!");
  await createTestUser(adminCookie, "zzrem-attacker1@example.com", "AttackerPass2026!");
  const victimCookie = await login("zzrem-victim1@example.com", "VictimPass2026!");
  const attackerCookie = await login("zzrem-attacker1@example.com", "AttackerPass2026!");

  const created = await cmd(victimCookie, "remind me to call my oncologist Friday at 3pm");
  assert.equal(created.intent, "assistant.reminder_scheduled");

  const attackerList = await cmd(attackerCookie, "list my reminders");
  assert.equal(attackerList.metadata?.reminders?.length || 0, 0, "an attacker with no reminders of their own must not see the victim's real reminder");

  const victimList = await cmd(victimCookie, "list my reminders");
  assert.equal(victimList.metadata?.reminders?.length, 1, "the victim must still see their own reminder");
  assert.match(victimList.metadata.reminders[0].task, /oncologist/);
});

test("a different real user cannot cancel another user's reminder via 'cancel my reminder'", async () => {
  const victimCookie = await login("zzrem-victim1@example.com", "VictimPass2026!");
  const attackerCookie = await login("zzrem-attacker1@example.com", "AttackerPass2026!");

  const cancelAttempt = await cmd(attackerCookie, "cancel my reminder");
  assert.equal(cancelAttempt.intent, "assistant.no_reminder_to_cancel", "an attacker with no reminders of their own must not be able to cancel the victim's real reminder");

  const victimList = await cmd(victimCookie, "list my reminders");
  assert.equal(victimList.metadata?.reminders?.length, 1, "the victim's real reminder must still be active, untouched by the attacker's cancel attempt");

  const victimCancel = await cmd(victimCookie, "cancel my reminder");
  assert.equal(victimCancel.intent, "assistant.reminder_canceled", "the victim must still be able to cancel their own reminder");
});
