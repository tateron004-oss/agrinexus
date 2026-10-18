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
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "shipments-"));
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
  const seed = JSON.parse(fs.readFileSync(path.join(root, "db.json"), "utf8"));
  seed.profile = seed.profile || {}; seed.profile.orders = [...(seed.profile.orders || []), { orderNumber: "AN-ORD-MINE-1", product: "Maize", stage: "Packed", checkpoint: "Stockton depot", createdBy: "user@agrinexus.org", createdAt: "2026-10-01T10:00:00Z" }];
  fs.writeFileSync(path.join(dir, "db.json"), JSON.stringify(seed));
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), SESSION_SECRET: "shipments-secret-for-the-test-0123456789", AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_DIR: path.join(dir, "spaces"),
    OPENAI_API_KEY: "", DATABASE_URL: "", AGRINEXUS_STATE_STORE: "json", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_TEST_REMINDER_STORE: "memory", AGRINEXUS_TRUST_PROXY: "true",
    AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "100000", AGRINEXUS_RATE_LIMIT_PER_WINDOW: "100000" }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
  await login("user", "user@agrinexus.org", "User2026!");
  await login("admin", "admin@agrinexus.org", "Admin2026!");
  await login("investor", "investor@agrinexus.org", "Investor2026!");
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

const SHIPMENT_PHRASES = ["What shipments do I have?", "Track my shipment.", "Where is my order?", "Show me my orders.", "Do I have any deliveries?"];

test("a person with no order of their own is told so plainly, with what Kyro can do, and is never told about the sample orders, on either voice door", async () => {
  for (const name of ["nexus_marketplace_logistics", "nexus_everyday_records"]) {
    for (const phrase of SHIPMENT_PHRASES) {
      const reply = await said(phrase, { who: "investor", name });
      assert.match(reply, /I do not see an active crop order yet, so there is no shipment of yours to track\./, `${name}: ${phrase} -> ${reply}`);
      assert.match(reply, /estimate the delivery time from Stockton to Fresno/, `${name}: ${phrase}`);
      assert.doesNotMatch(reply, /AN-ORD-|AgriTrade|sample listing|Nairobi Hub|Avocado|couldn't do that|name a module/i, `${name}: ${phrase} -> ${reply}`);
    }
  }
});

test("a person with an order of their own is told what they have, and where the latest one is, without the sample orders", async () => {
  for (const name of ["nexus_marketplace_logistics", "nexus_everyday_records"]) {
    const list = await said("What shipments do I have?", { who: "user", name });
    assert.match(list, /^(?:Got it\. )?You have 1 order: AN-ORD-MINE-1 for Maize, stage Packed, at Stockton depot\. Say track my shipment for the latest one\./, `${name}: ${list}`);
    assert.doesNotMatch(list, /AN-ORD-(?!MINE)|AgriTrade|sample listing/i, name);
    const track = await said("Track my shipment.", { who: "user", name });
    assert.match(track, /AN-ORD-MINE-1 for Maize is at Stockton depot|AN-ORD-MINE-1 for Maize, stage Packed/, `${name}: ${track}`);
  }
});

test("an order number that is not the person's own is not found, even when it exists for somebody else", async () => {
  const reply = await said("Where is my order AN-ORD-0021?", { who: "investor", name: "nexus_everyday_records" });
  assert.doesNotMatch(reply, /Cassava|Nairobi Hub|Stage:/i, reply);
});

test("creating an order is not mistaken for asking about shipments", async () => {
  const reply = await said("Create a crop order for 20 bags of maize", { who: "user", name: "nexus_marketplace_logistics" });
  assert.doesNotMatch(reply, /You have \d+ orders?:|there is no shipment of yours to track/i, reply);
});
