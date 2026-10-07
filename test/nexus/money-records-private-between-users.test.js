"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawn } = require("node:child_process");

// Found by a live check against a copy of the app: after one user made a trade order, a wallet posting, a buyer contact, a buyer message, a payment checkout and a quote, a second signed-in Standard
// User received every one of them (names, message text, amounts) in /api/state, in the trade event and notification feeds, in the activity feed and in the mission timeline, and could move the first
// user's order on by id. Now each person is shown the money and trade records they made, plus demo and older records that carry no personal owner mark; an Admin is shown all.

const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-money-private-test-db.json");
const tempUploadDir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-money-private-uploads-"));
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let adminCookie; let aCookie; let bCookie;
async function login(email, password) {
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, password }) });
  assert.equal(res.status, 200, `${email} must be able to sign in`);
  return res.headers.get("set-cookie").split(";")[0];
}
async function call(pathname, cookie, body, method = "POST") {
  const res = await fetch(`${base}${pathname}`, { method, headers: { "content-type": "application/json", cookie }, body: method === "GET" ? undefined : JSON.stringify(body || {}) });
  const text = await res.text();
  let json; try { json = JSON.parse(text); } catch { json = null; }
  return { status: res.status, json, text };
}
const MARKER = `ZZPRIVATEMONEY${crypto.randomUUID().slice(0, 6)}`;
let aOrderId;

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), tempDbPath);
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_FILE_STORAGE_DIR: tempUploadDir }, stdio: "ignore" });
  for (let i = 0; i < 100; i += 1) { try { if ((await fetch(`${base}/api/healthz`)).ok) break; } catch { await wait(150); } }
  adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  aCookie = await login("user@agrinexus.org", "User2026!");
  const email = `second-${crypto.randomUUID().slice(0, 8)}@example.com`; const password = crypto.randomBytes(9).toString("base64url");
  assert.equal((await call("/api/admin/test-user", adminCookie, { email, name: "Second User", password })).status, 200);
  bCookie = await login(email, password);
});
test.after(() => {
  server.kill();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  fs.rmSync(tempUploadDir, { recursive: true, force: true });
});

async function userAActs() {
  assert.equal((await call("/api/trade/order", aCookie, { product: `${MARKER}-maize`, quantity: 5, note: `${MARKER}-order-note` })).status, 200);
  assert.equal((await call("/api/trade/wallet", aCookie, { provider: `${MARKER}-wallet`, amount: 40, note: `${MARKER}-wallet-note` })).status, 200);
  assert.equal((await call("/api/trade/buyer-contact", aCookie, { note: `${MARKER}-contact-note` })).status, 200);
  assert.equal((await call("/api/trade/message", aCookie, { message: `${MARKER}-message`, text: `${MARKER}-message`, buyerName: `${MARKER}-buyer`, productName: `${MARKER}-maize`, note: `${MARKER}-msg-note` })).status, 200);
  assert.equal((await call("/api/trade/payment-checkout", aCookie, { amount: 25, productName: `${MARKER}-maize`, buyerName: `${MARKER}-buyer`, note: `${MARKER}-checkout-note` })).status, 200);
  assert.equal((await call("/api/trade/advanced", aCookie, { action: "quote", product: `${MARKER}-maize`, buyerName: `${MARKER}-buyer`, note: `${MARKER}-quote-note`, amount: 100 })).status, 200);
}

test("money and trade records are shown to the person who made them and to an Admin, and to nobody else who signs in", async () => {
  const before = await call("/api/state", bCookie, null, "GET");
  const demoOrders = before.json.profile.orders.length;
  await userAActs();
  const own = await call("/api/state", aCookie, null, "GET");
  assert.ok(own.text.includes(MARKER), "the person who made them still sees them");
  aOrderId = own.json.profile.orders.find(order => String(order.product).includes(MARKER)).id;
  assert.ok((await call("/api/state", adminCookie, null, "GET")).text.includes(MARKER), "an Admin sees them");
  const other = await call("/api/state", bCookie, null, "GET");
  assert.equal(other.status, 200);
  assert.ok(!other.text.includes(MARKER), "another Standard User receives none of it, in any list, feed or timeline");
  assert.equal(other.json.profile.orders.length, demoOrders, "the demo orders, which have no personal owner, are still shown");
  for (const route of ["/api/cloud-agent/status", "/api/cloud-agent/audit"]) assert.ok(!(await call(route, bCookie, null, "GET")).text.includes(MARKER), `${route} does not return it either`);
  assert.ok(!(await call("/api/state", "", null, "GET")).text.includes(MARKER), "nor does a signed-out request");
});

test("another person cannot move on, track or settle someone else's order, and can still use their own", async () => {
  const moved = await call("/api/trade/advance", bCookie, { orderId: aOrderId });
  assert.equal(moved.status, 409, "someone else's order is not found for them");
  const still = (await call("/api/state", aCookie, null, "GET")).json.profile.orders.find(order => order.id === aOrderId);
  assert.equal(still.stage, "Packed", "the order did not move");
  assert.equal((await call("/api/trade/tracking", bCookie, { orderId: aOrderId })).status, 409);
  assert.equal((await call("/api/trade/order", bCookie, { product: "My own product", quantity: 2 })).status, 200);
  const mine = (await call("/api/state", bCookie, null, "GET")).json.profile.orders.find(order => order.product === "My own product");
  assert.ok(mine, "their own order is shown to them");
  assert.equal((await call("/api/trade/advance", bCookie, { orderId: mine.id })).status, 200, "and they can move it on");
  assert.equal((await call("/api/trade/advance", aCookie, { orderId: aOrderId })).status, 200, "the owner can move theirs on");
});
