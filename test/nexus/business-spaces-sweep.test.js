"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// A brand-new business starts from an empty record of the usual shape. This sweep runs the main pages and a spread of ordinary things a person asks Kyro inside a fresh business and fails on any
// server error that the same thing does NOT cause in the default space. (It found real ones: a payment checkout and an activity note both assumed the demo data existed.)

const root = path.resolve(__dirname, "..", "..");
const port = 15352;
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "spaces-sweep-"));
const defaultDb = path.join(dir, "db.json");
let server;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
async function waitFor(url) { for (let i = 0; i < 80; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
async function call(pathname, cookie, body, method = "POST") {
  try {
    const res = await fetch(`${base}${pathname}`, { method, headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}) }, body: method === "GET" ? undefined : JSON.stringify(body || {}) });
    const text = await res.text();
    let json = null; try { json = JSON.parse(text); } catch { /* not JSON */ }
    return { status: res.status, json, text, cookie: (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ") };
  } catch (error) { return { status: 0, json: null, text: String(error.message), cookie: "" }; }
}
const say = (cookie, command) => call("/api/voice/realtime/tool", cookie, { name: "nexus_general_conversation", correlationId: `sweep-${Math.random().toString(36).slice(2, 8)}`, arguments: { command, language: "en" }, language: "en" });

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), defaultDb);
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, SESSION_SECRET: "sweep-secret-for-the-test-0123456789", PORT: String(port), AGRINEXUS_DB_PATH: defaultDb, AGRINEXUS_SPACES_PATH: path.join(dir, "spaces-directory.json"), OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_FILE_STORAGE_DIR: path.join(dir, "uploads") }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("a fresh business runs the main pages and ordinary requests without a server error that the default space does not also have", async () => {
  const owner = await call("/api/login", "", { email: "admin@agrinexus.org", password: "Admin2026!" });
  assert.equal(owner.status, 200);
  const made = await call("/api/platform/businesses", owner.cookie, { id: "sweep-co", name: "Sweep Co", adminName: "Sweep Owner", adminEmail: "owner@sweep.example", country: "Kenya" });
  assert.equal(made.status, 200);
  const business = await call("/api/login", "", { email: "owner@sweep.example", password: made.json.created.password });
  assert.equal(business.status, 200);
  const defaultUser = owner; // the default space's own Admin, for comparison

  const src = fs.readFileSync(path.join(root, "server.js"), "utf8") + "\n" + fs.readFileSync(path.join(root, "nexus/compat/server-runtime-adapter.js"), "utf8");
  const skip = /\/(logout|download|export|stream|events|callback|incoming|webhook|reset|erase)|^\/api\/(platform|team)\//;
  const pages = [...new Set([...src.matchAll(/url\.pathname === "(\/api\/[^"]+)" && req\.method === "GET"/g)].map(match => match[1]))].filter(route => !skip.test(route));
  const phrases = ["Add milk to my shopping list", "Save Wanjiru's number as +254712345678", "Note: remember to call the vet", "Remind me tomorrow at 9am to call the buyer", "I sold 5 bags of maize for 5000",
    "I live in Kisumu", "Add vet visit to my calendar tomorrow at 3pm", "Remember that I owe Peter 3000", "Create a list called stock with maize, beans", "Spent 800 on fuel", "My name is Amina", "I grow maize",
    "What's on my shopping list?", "Who are my contacts?", "What notes do I have?", "What are my reminders?", "What is my profit this year?", "What do you know about me?", "Show my lists",
    "My blood sugar is 7.2", "I have a headache", "What is the weather today?", "Find me a job", "Show my invoices"];
  const posts = [["/api/agent/command", { command: "Show my notes and lists" }], ["/api/nexus/runtime/behavior/turn", { input: { text: "What do you remember about me?", channel: "typed", locale: "en" } }],
    ["/api/trade/order", { product: "Maize", quantity: 3, note: "sweep" }], ["/api/trade/payment-checkout", { provider: "local", amount: 50, currency: "KES" }], ["/api/health/intake-simulation", { patientName: "Sweep", needSummary: "cough" }]];

  const run = async cookie => {
    const failures = new Set();
    for (const route of pages) { const r = await call(route, cookie, null, "GET"); if (r.status >= 500) failures.add(`GET ${route}`); }
    for (const phrase of phrases) { const r = await say(cookie, phrase); if (r.status >= 500) failures.add(`SAY ${phrase}`); }
    for (const [route, body] of posts) { const r = await call(route, cookie, body); if (r.status >= 500) failures.add(`POST ${route}`); }
    const state = await call("/api/state", cookie, null, "GET");
    if (state.status >= 500) failures.add("GET /api/state");
    return failures;
  };
  const inDefault = await run(defaultUser.cookie);
  const inBusiness = await run(business.cookie);
  const only = [...inBusiness].filter(item => !inDefault.has(item));
  assert.deepEqual(only, [], `server errors that only a fresh business hits: ${only.join(" | ")}`);
  assert.ok(pages.length > 50, `swept ${pages.length} pages`);
});
