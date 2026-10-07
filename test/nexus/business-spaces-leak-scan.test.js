"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const crypto = require("node:crypto");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// The safety net for business spaces. Two businesses each do a lot, with a distinctive marker. Then everyone who is NOT in that business (the other business's Admin and staff, the default space's
// ordinary user, and the platform owner) reads every plain page, every page that takes an id (using the ids the first business's actions produced), asks Kyro to read things back, and tries the typed
// command box and the behaviour turn, and replays the first business's writes against the first business's own ids. The marker must never appear, and the first business's stored record must be
// byte-for-byte unchanged by all of it. It stays in the project and runs on every change: a new route that leaks across businesses fails here.

const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "spaces-leak-"));
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
const say = (cookie, command) => call("/api/voice/realtime/tool", cookie, { name: "nexus_general_conversation", correlationId: `leak-${Math.random().toString(36).slice(2, 8)}`, arguments: { command, language: "en" }, language: "en" });
const uuids = text => new Set(String(text).match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|(?:cnv|tsk|doc|rec|mem|art|msg)_[0-9a-f-]{20,}/g) || []);
const fileOf = id => path.join(dir, `db.space-${id}.json`);

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), defaultDb);
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, SESSION_SECRET: "leak-scan-secret-for-the-test-0123456789", PORT: String(port), AGRINEXUS_DB_PATH: defaultDb, AGRINEXUS_SPACES_PATH: path.join(dir, "spaces-directory.json"), OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_FILE_STORAGE_DIR: path.join(dir, "uploads") }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("nothing one business does is visible to anyone outside it, and nobody outside it can change it", async () => {
  const owner = await call("/api/login", "", { email: "admin@agrinexus.org", password: "Admin2026!" });
  const defaultUser = await call("/api/login", "", { email: "user@agrinexus.org", password: "User2026!" });
  assert.equal(owner.status, 200);
  const makeBusiness = async (id, email) => {
    const made = await call("/api/platform/businesses", owner.cookie, { id, name: `${id} Co`, adminName: `${id} owner`, adminEmail: email, country: "Kenya" });
    assert.equal(made.status, 200, `create ${id}`);
    const admin = await call("/api/login", "", { email, password: made.json.created.password });
    assert.equal(admin.status, 200, `login ${id}`);
    const staffMade = await call("/api/team/users", admin.cookie, { name: `${id} staff`, email: `staff@${id}.example` });
    assert.equal(staffMade.status, 200);
    const staff = await call("/api/login", "", { email: `staff@${id}.example`, password: staffMade.json.created.password });
    assert.equal(staff.status, 200, `staff login ${id}`);
    return { id, admin, staff };
  };
  const A = await makeBusiness("scan-a", "owner@scan-a.example");
  const B = await makeBusiness("scan-b", "owner@scan-b.example");
  const MA = `zzscana${crypto.randomUUID().slice(0, 6)}`;
  const MB = `zzscanb${crypto.randomUUID().slice(0, 6)}`;

  // ---- each business does many things (A's Admin and A's staff; B's Admin) ----
  const ids = new Set();
  const take = result => { for (const id of uuids(result.text)) ids.add(id); return result; };
  const actions = (cookie, M) => [
    `Add ${M}milk to my shopping list`, `Save ${M}wanjiru's number as +254712345678`, `Note: ${M} private note about my health`, `Remind me tomorrow at 9am to ${M}call the buyer`,
    `I sold 5 bags of maize for 5000 to ${M}buyer`, `I live in ${M}kisumu`, `Add ${M}vet visit to my calendar tomorrow at 3pm`, `Remember that I owe ${M}debtor 3000`,
    `Create a list called ${M}stock with maize, beans`, `Spent 800 on ${M}fuel`, `My name is ${M}amina`, `I grow ${M}maize`
  ].map(text => () => say(cookie, text));
  for (const run of [...actions(A.admin.cookie, MA), ...actions(A.staff.cookie, MA)]) take(await run());
  for (const run of actions(B.admin.cookie, MB)) await run();
  const postsFor = M => [
    ["/api/nexus/runtime/behavior/turn", { input: { text: `Tell me about ${M} maize prices`, channel: "typed", locale: "en" } }],
    ["/api/agent/command", { command: `Add ${M}typed to my notes` }],
    ["/api/health/intake-simulation", { patientName: `${M}-patient`, needSummary: `${M} need` }],
    ["/api/trade/order", { product: `${M}-product`, quantity: 3, note: `${M}-order` }],
    ["/api/trade/payment-checkout", { provider: "local", amount: 40, currency: "KES", note: `${M}-pay` }],
    ["/api/trade/wallet", { provider: `${M}-wallet`, amount: 20 }]
  ];
  const aPosts = postsFor(MA);
  for (const [route, body] of aPosts) take(await call(route, A.admin.cookie, body));
  for (const [route, body] of postsFor(MB)) await call(route, B.admin.cookie, body);
  take(await call("/api/state", A.admin.cookie, null, "GET"));
  const aState = await call("/api/state", A.admin.cookie, null, "GET");
  assert.ok(aState.text.toLowerCase().includes(MA), "A's own state carries A's marker (the scan is looking for something real)");
  assert.ok(ids.size > 0, "A's actions produced ids to try");

  const aBefore = fs.readFileSync(fileOf("scan-a"));
  const has = text => String(text).toLowerCase().includes(MA);
  const observers = [["B's Admin", B.admin.cookie], ["B's staff", B.staff.cookie], ["the default space's user", defaultUser.cookie], ["the platform owner", owner.cookie]];

  // ---- plain pages ----
  const src = fs.readFileSync(path.join(root, "server.js"), "utf8") + "\n" + fs.readFileSync(path.join(root, "nexus/compat/server-runtime-adapter.js"), "utf8");
  const skip = /\/(logout|download|export|stream|events|callback|incoming|webhook|reset|erase)/;
  const plain = [...new Set([...src.matchAll(/url\.pathname === "(\/api\/[^"]+)" && req\.method === "GET"/g)].map(match => match[1]))].filter(route => !skip.test(route));
  assert.ok(plain.length > 50, `scanned ${plain.length} plain pages`);
  const leaks = [];
  for (const [who, cookie] of observers) {
    for (const route of plain) { const r = await call(route, cookie, null, "GET"); if (r.status === 200 && has(r.text)) leaks.push(`${who} GET ${route}`); }
    const state = await call("/api/state", cookie, null, "GET");
    if (has(state.text)) leaks.push(`${who} /api/state`);
  }

  // ---- pages that take an id, with every id A's actions produced ----
  const templates = new Set();
  for (const m of src.matchAll(/url\.pathname\.match\(\/\^(\\\/api[^/]*(?:\\\/[^/]+)*?)\$\/\)/g)) templates.add(m[1].replace(/\\\//g, "/").replace(/\(\[\^\/\]\+\)/g, "{id}"));
  for (const m of src.matchAll(/\/\^(\\\/api\\\/nexus\\\/runtime\\\/[^$]*?)\$\/\.test\(url\.pathname\)/g)) templates.add(m[1].replace(/\\\//g, "/").replace(/\[\^\/\]\+/g, "{id}"));
  for (const m of src.matchAll(/url\.pathname\.startsWith\("(\/api\/[^"]+\/)"\) && req\.method === "GET"/g)) templates.add(`${m[1]}{id}`);
  const idList = [...ids].slice(0, 10);
  let tried = 0;
  for (const [who, cookie] of observers) {
    for (const template of templates) {
      if (!template.includes("{id}") || skip.test(template)) continue;
      for (const id of idList) {
        const r = await call(template.replace(/\{id\}/g, id), cookie, null, "GET"); tried += 1;
        if (r.status === 200 && has(r.text)) leaks.push(`${who} GET ${template}`);
      }
    }
  }

  // ---- Kyro read-backs, the typed box, the behaviour turn ----
  const asks = ["What's on my shopping list?", "Who are my contacts?", "What notes do I have?", "What are my reminders?", "What is on my calendar?", "What is my profit this year?", "What do you know about me?",
    "What did I record?", "Show my lists", "What do I owe?", "What did I say earlier?", "What are my tasks?", "Read my health readings", "What did I spend?", "Show my stock", "What is my name?"];
  for (const [who, cookie] of observers) {
    for (const text of asks) { const r = await say(cookie, text); if (has(r.text)) leaks.push(`${who} asked "${text}"`); }
    const typed = await call("/api/agent/command", cookie, { command: "Show my notes and lists" });
    if (has(typed.text)) leaks.push(`${who} typed command box`);
    const turn = await call("/api/nexus/runtime/behavior/turn", cookie, { input: { text: "What do you remember about me?", channel: "typed", locale: "en" } });
    if (has(turn.text)) leaks.push(`${who} behaviour turn`);
  }

  // ---- writes: replay A's own writes against A's ids as the others ----
  for (const [, cookie] of observers.slice(0, 3)) {
    for (const id of idList) {
      for (const method of ["PATCH", "POST", "DELETE"]) {
        for (const template of ["/api/nexus/records/{id}", "/api/nexus/records/{id}/summary", "/api/nexus/records/{id}/consent"]) await call(template.replace("{id}", id), cookie, { status: "approved", summary: `${MB} overwrite`, payload: { x: MB } }, method);
      }
    }
    // Same kinds of writes, naming A's ids (with the outsider's own marker, so their own record can hold it).
    for (const [route, body] of postsFor(MB)) await call(route, cookie, { ...body, orderId: idList[0], productId: idList[0], id: idList[0] });
  }

  assert.deepEqual(leaks, [], `A's marker reached somebody outside A: ${leaks.slice(0, 12).join(" | ")}`);
  // Nobody outside A could change A's record: it is byte-for-byte what it was after A finished (A's own cookies were not used above).
  assert.ok(Buffer.compare(aBefore, fs.readFileSync(fileOf("scan-a"))) === 0, "A's stored record changed while only outsiders were acting");
  // And the markers stayed in their own files.
  const text = id => fs.readFileSync(id === "default" ? defaultDb : fileOf(id), "utf8").toLowerCase();
  assert.ok(text("scan-a").includes(MA) && !text("scan-a").includes(MB), "A's record holds A's marker and not B's");
  assert.ok(text("scan-b").includes(MB) && !text("scan-b").includes(MA), "B's record holds B's marker and not A's");
  assert.ok(!text("default").includes(MA), "the default record holds none of A's data (it may hold B's marker: the default space's own user replayed B-style writes above)");
  console.log(`leak scan: ${observers.length} outside observers x ${plain.length} pages, ${tried} id probes, ${asks.length} read-backs each`);
});
