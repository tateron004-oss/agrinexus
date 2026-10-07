"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawn } = require("node:child_process");

// Found by the persona audit ("Mama Achieng"): everything one person typed to Kyro sat in one shared store that ANY other signed-in person, or a guest with only a free-text name, could read from
// /api/state ("he beats me and I am hiding at my sister's house", an HIV status, family planning kept from a husband); the last turns of it were given to the AI model as context for whoever asked
// next; and most of it was still there after the person erased their account. Now each person sees only their own, the model is given only the asker's own, and erasure takes them out.

const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-private-history-test-db.json");
const tempUploadDir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-private-history-uploads-"));
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
let server;

const SECRETS = ["he beats me and I am hiding at my sister Akinyi house zebra-lantern-91", "I am HIV positive and I take my pills quietly zebra-lantern-92", "my husband must not know I use family planning zebra-lantern-93"];

const cookieFrom = res => (res.headers.getSetCookie ? res.headers.getSetCookie() : [res.headers.get("set-cookie")]).filter(Boolean).map(part => part.split(";")[0]).join("; ");
async function api(pathname, cookie, body, method = "POST") {
  const res = await fetch(`${base}${pathname}`, { method, headers: { "content-type": "application/json", cookie: cookie || "" }, body: method === "GET" ? undefined : JSON.stringify(body || {}) });
  const text = await res.text();
  let json; try { json = JSON.parse(text); } catch { json = { raw: text }; }
  return { status: res.status, json, text, cookie: cookieFrom(res) };
}
const login = async (email, password) => { const result = await api("/api/login", "", { email, password }); assert.equal(result.status, 200, `${email} must sign in`); return result.cookie; };
const readDb = () => JSON.parse(fs.readFileSync(tempDbPath, "utf8"));

let adminCookie; let aCookie; let bCookie; let guestCookie;

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), tempDbPath);
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_FILE_STORAGE_DIR: tempUploadDir }, stdio: "ignore", windowsHide: true });
  for (let i = 0; i < 80; i += 1) { try { if ((await fetch(`${base}/api/healthz`)).ok) break; } catch { await wait(150); } }
  adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  for (const email of ["achieng.private@example.org", "other.person@example.org"]) assert.equal((await api("/api/admin/test-user", adminCookie, { email, name: "QA User", password: "Quiet-Pass-2026!" })).status, 200);
  aCookie = await login("achieng.private@example.org", "Quiet-Pass-2026!");
  bCookie = await login("other.person@example.org", "Quiet-Pass-2026!");
  const guest = await api("/api/auth/guest-session", "", { name: "Visitor Tester" });
  assert.equal(guest.status, 201); guestCookie = guest.cookie;
  for (const sentence of SECRETS) await api("/api/agent/command", aCookie, { command: sentence });
});
test.after(() => {
  server.kill();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  fs.rmSync(tempUploadDir, { recursive: true, force: true });
});

const leaks = text => SECRETS.filter(sentence => text.includes(sentence));

test("the person sees their own words, and nobody else (signed in or guest) sees any of them", async () => {
  const own = await api("/api/state", aCookie, null, "GET");
  assert.equal(own.status, 200);
  assert.ok(leaks(own.text).length >= 1, "a person still sees their own history");
  assert.ok(own.json.profile?.agentCommands?.length >= 1 || own.json.agentCommands?.length >= 1 || own.text.includes("zebra-lantern-91"));
  for (const [who, cookie] of [["another signed-in person", bCookie], ["a guest", guestCookie]]) {
    const state = await api("/api/state", cookie, null, "GET");
    assert.equal(state.status, 200, who);
    assert.deepEqual(leaks(state.text), [], `${who} must not be shown what someone else typed`);
  }
});

test("the other places the shared history could be read from do not show it either", async () => {
  const urls = ["/api/nexus/brain/memory", "/api/nexus/brain/tasks", "/api/nexus/brain/missions", "/api/nexus/brain/receipts", "/api/nexus/brain/status", "/api/nexus/persistent-memory/records", "/api/nexus/persistent-memory/status",
    "/api/intelligence/frontier-brain", "/api/cloud-agent/status", "/api/cloud-agent/audit", "/api/nexus-brain/status", "/api/voice/runtime/status", "/api/nexus/user-testing/memory", "/api/nexus/runtime/status"];
  for (const cookie of [bCookie, guestCookie]) {
    for (const url of urls) {
      const result = await api(url, cookie, null, "GET");
      assert.deepEqual(leaks(result.text), [], `${url} must not show what someone else typed`);
    }
  }
});

test("an Admin still sees everything (audit and support)", async () => {
  const state = await api("/api/state", adminCookie, null, "GET");
  assert.ok(leaks(state.text).length >= 1);
});

test("a second person's own commands are theirs alone", async () => {
  await api("/api/agent/command", bCookie, { command: "what is the price of beans zebra-lantern-94" });
  const mine = await api("/api/state", bCookie, null, "GET");
  const hers = await api("/api/state", aCookie, null, "GET");
  assert.ok(mine.text.includes("zebra-lantern-94"));
  assert.equal(hers.text.includes("zebra-lantern-94"), false);
  assert.deepEqual(leaks(mine.text), []);
});

test("erasing the account takes the person's words out of the shared store", async () => {
  const erased = await api("/api/account/erase", aCookie, { confirmed: true });
  assert.equal(erased.status, 200, JSON.stringify(erased.json).slice(0, 200));
  const profileText = JSON.stringify(readDb().profile);
  assert.deepEqual(leaks(profileText), [], "none of what she said may remain in the shared profile");
  const other = await api("/api/state", bCookie, null, "GET");
  assert.deepEqual(leaks(other.text), []);
  assert.ok(profileText.includes("zebra-lantern-94"), "another person's history is untouched");
});
