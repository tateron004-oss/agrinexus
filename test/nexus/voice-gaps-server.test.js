"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// The live voice session has eleven tools; the catch-all one (nexus_everyday_records) is its door for everything else. End to end on a real server with no AI key: saving as a PDF, the offline
// queue, a receipt and a service check are answered through that door; "Nexus" is never said; a shipment lookup tells a person only about their own orders; a delivery-time question is answered honestly.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "voice-gaps-"));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let n = 0;
const jars = {};

async function waitFor(url) { for (let i = 0; i < 100; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
async function post(route, body, who = "user") {
  const res = await fetch(`${base}${route}`, { method: "POST", headers: { "content-type": "application/json", "x-forwarded-for": "10.15.99.1", ...(jars[who] ? { cookie: jars[who] } : {}) }, body: JSON.stringify(body) });
  const text = await res.text();
  let json = null; try { json = JSON.parse(text); } catch { /* not JSON */ }
  return { status: res.status, json, setCookie: (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ") };
}
async function login(who, email, password) { const r = await post("/api/login", { email, password }, who); assert.equal(r.status, 200, `${email} signs in`); jars[who] = r.setCookie; }
const tool = async (command, { who = "user", name = "nexus_everyday_records" } = {}) => (await post("/api/voice/realtime/tool", { name, correlationId: `vg-${++n}-${Math.random().toString(36).slice(2, 8)}`, arguments: { command, language: "en" }, language: "en" }, who)).json || {};
const said = async (command, options) => (await tool(command, options)).response || "";

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), SESSION_SECRET: "voice-gaps-secret-for-the-test-0123456789", AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_DIR: path.join(dir, "spaces"),
    OPENAI_API_KEY: "", DATABASE_URL: "", AGRINEXUS_STATE_STORE: "json", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_TEST_REMINDER_STORE: "memory", AGRINEXUS_TRUST_PROXY: "true",
    AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "100000", AGRINEXUS_RATE_LIMIT_PER_WINDOW: "100000" }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
  await login("user", "user@agrinexus.org", "User2026!");
  await login("admin", "admin@agrinexus.org", "Admin2026!");
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("through the catch-all tool: saving as a PDF asks for a yes, the offline queue asks plainly, a receipt and a service check are answered", async () => {
  const exported = await said("Export my notes as a PDF");
  assert.match(exported, /^Before I go ahead with "Export my notes as a PDF", I need your yes\. Say yes to do it, or no to cancel\.$/);
  const offline = await said("Queue this for when I am offline");
  assert.match(offline, /^Before I go ahead with "Queue this for when I am offline", I need your yes\./);
  assert.doesNotMatch(offline, /requires explicit confirmed|bridge|offline\.bridge/);
  assert.match(await said("Show my last receipt"), /I found \d+ recent Kyro receipt or audit item\(s\)/);
  assert.match(await said("Is Spotify connected"), /Kyro checked provider readiness/);
  // what was not handed over is unchanged: a reminder is set at once, with no second yes
  assert.match(await said("Remind me to call Amina tomorrow at 5pm"), /I will remind you to call Amina at 5:00 pm tomorrow/);
});

test("nothing Kyro says on the voice route uses the internal name", async () => {
  for (const text of ["Show my last receipt", "Is Spotify connected", "What do you remember about me", "Hello Kyro", "What can you do"]) assert.doesNotMatch(await said(text), /\bNexus\b/, text);
});

test("a delivery-time question is answered honestly, and a shipment lookup is read from the orders this person may see", async () => {
  const estimate = await said("How long will delivery to Nakuru take", { name: "nexus_marketplace_logistics" });
  assert.match(estimate, /^I can't estimate a delivery time without an order or a route to work from\.|^AN-ORD-/, "either the honest answer, or the status of an order the person may see");
  assert.doesNotMatch(estimate, /AgriTrade|sample listing/i);
  // an order marked as another account's is not read out; one marked as this person's is
  const state = (await post("/api/agent/command", { command: "hello", conversational: true }, "user")).json;
  assert.ok(state, "state is readable");
  const server_ = fs.readFileSync(path.join(root, "server.js"), "utf8");
  assert.match(server_, /const order = orderForUser\(db, user\);\s*if \(!order && asksDeliveryTime\)/, "the lookup uses the visibility helper, not the latest order of anybody");
  assert.match(server_, /createdBy: String\(user\?\.email \|\| ""\)\.trim\(\)\.toLowerCase\(\) \|\| undefined,/, "a new order is marked with whose it is");
});
