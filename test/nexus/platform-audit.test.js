"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// The platform owner's activity record: every create, number link, sender-settings change, admin password reset, close, reopen and erase is recorded in the DEFAULT space (never inside a business),
// readable only by the platform owner at GET /api/platform/audit, never holding a password, and still there after the business it is about has been erased.

const root = path.resolve(__dirname, "..", "..");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const platformAudit = require(path.join(root, "server", "platformAudit.js"));

test("the record keeps the newest 1000, drops anything that is not a count or a masked value, and filters by business", () => {
  const db = {};
  for (let i = 0; i < 1005; i += 1) platformAudit.record(db, { by: "Owner@Example.com", action: "business.closed", businessId: i % 2 ? "odd-co" : "even-co", businessName: "N", facts: { signInsEnded: i } });
  assert.equal(db.platformAudit.length, 1000, "capped");
  assert.equal(db.platformAudit[0].facts.signInsEnded, 1004, "newest first");
  assert.equal(db.platformAudit[0].by, "owner@example.com");
  const sneaky = platformAudit.record({}, { by: "o@x.org", action: "business.created", businessId: "x-co", facts: { password: "Secret123!", adminEmail: "a@x.org", people: 3, uploadsRemoved: "many", fields: ["smsFrom", "x".repeat(200)] } });
  assert.deepEqual(Object.keys(sneaky.facts).sort(), ["adminEmail", "fields", "people"]);
  assert.ok(!JSON.stringify(sneaky).includes("Secret123"));
  assert.equal(platformAudit.list(db, { business: "odd-co", limit: 5 }).length, 5);
  assert.ok(platformAudit.list(db, { business: "odd-co", limit: 5 }).every(item => item.businessId === "odd-co"));
  assert.equal(platformAudit.list(db, {}).length, platformAudit.DEFAULT_LIMIT);
  assert.equal(platformAudit.list(db, { limit: "99999" }).length, platformAudit.MAX_LIMIT);
  assert.equal(platformAudit.list(db, { limit: "-4" }).length, platformAudit.DEFAULT_LIMIT);
  assert.deepEqual(platformAudit.list({}, {}), []);
});

const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "platform-audit-"));
const defaultDb = path.join(dir, "db.json");
let server;
async function waitFor(url) { for (let i = 0; i < 80; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
async function call(method, pathname, body, cookie) {
  const res = await fetch(`${base}${pathname}`, { method, headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}) }, body: method === "GET" ? undefined : JSON.stringify(body || {}) });
  const json = await res.json().catch(() => ({}));
  return { status: res.status, json, text: JSON.stringify(json), cookie: (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ") };
}
const login = (email, password) => call("POST", "/api/login", { email, password });

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), defaultDb);
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, SESSION_SECRET: "platform-audit-secret-for-the-test-0123456789", PORT: String(port), AGRINEXUS_DB_PATH: defaultDb, AGRINEXUS_STATE_STORE: "json",
    DATABASE_URL: "", AGRINEXUS_SPACES_PATH: path.join(dir, "spaces-directory.json"), OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_FILE_STORAGE_DIR: path.join(dir, "uploads") }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("every platform action is recorded: who, what, which business, when; never a password; readable only by the platform owner", async () => {
  const owner = await login("admin@agrinexus.org", "Admin2026!");
  assert.equal(owner.status, 200);
  const made = await call("POST", "/api/platform/businesses", { id: "audit-co", name: "Audit Co", adminName: "Audit Owner", adminEmail: "owner@audit.example", country: "Kenya", language: "sw" }, owner.cookie);
  assert.equal(made.status, 200);
  const firstPassword = made.json.created.password;
  assert.equal((await call("POST", "/api/platform/businesses/number", { id: "audit-co", number: "+254712345678" }, owner.cookie)).status, 200);
  assert.equal((await call("POST", "/api/platform/businesses/settings", { id: "audit-co", smsFrom: "+254700111222" }, owner.cookie)).status, 200);
  const reset = await call("POST", "/api/platform/businesses/admin-reset", { id: "audit-co" }, owner.cookie);
  assert.equal(reset.status, 200);
  const resetPassword = reset.json.reset.password;
  assert.equal((await call("POST", "/api/platform/businesses/close", { id: "audit-co" }, owner.cookie)).status, 200);
  assert.equal((await call("POST", "/api/platform/businesses/reopen", { id: "audit-co" }, owner.cookie)).status, 200);

  const audit = await call("GET", "/api/platform/audit", null, owner.cookie);
  assert.equal(audit.status, 200);
  const mine = audit.json.entries.filter(item => item.businessId === "audit-co");
  assert.deepEqual(mine.map(item => item.action), ["business.reopened", "business.closed", "business.admin_password_reset", "business.settings_changed", "business.number_linked", "business.created"], "newest first");
  for (const entry of mine) {
    assert.equal(entry.by, "admin@agrinexus.org");
    assert.equal(entry.businessName, "Audit Co");
    assert.ok(!Number.isNaN(Date.parse(entry.at)));
    assert.ok(entry.id);
  }
  assert.equal(mine.at(-1).facts.adminEmail, "owner@audit.example");
  assert.deepEqual(mine.find(item => item.action === "business.settings_changed").facts.fields, ["smsFrom"]);
  assert.ok(!audit.text.includes("+254712345678"), "the full phone number is never recorded");
  assert.ok(!audit.text.includes(firstPassword) && !audit.text.includes(resetPassword), "no password is ever recorded");
  assert.ok(!audit.text.includes("+254700111222"), "no sender value is recorded, only which field changed");
  assert.equal(audit.json.viewer.language, "en");

  // Filter and limit.
  const other = await call("POST", "/api/platform/businesses", { id: "other-co", name: "Other Co", adminName: "Other Owner", adminEmail: "owner@other.example", country: "Kenya" }, owner.cookie);
  assert.equal(other.status, 200);
  const onlyOther = await call("GET", "/api/platform/audit?business=other-co", null, owner.cookie);
  assert.deepEqual(onlyOther.json.entries.map(item => item.businessId), ["other-co"]);
  assert.equal((await call("GET", "/api/platform/audit?limit=2", null, owner.cookie)).json.entries.length, 2);

  // The record is in the platform's own record on disk, and not in any business's.
  const platformFile = fs.readFileSync(defaultDb, "utf8");
  assert.match(platformFile, /"platformAudit"/);
  assert.ok(!platformFile.includes(firstPassword) && !platformFile.includes(resetPassword), "no one-time password is kept in the platform's record");
  const businessFile = fs.readFileSync(path.join(dir, "db.space-audit-co.json"), "utf8");
  assert.ok(!/platformAudit/.test(businessFile), "nothing of the platform's record is inside the business");

  // A business's own Admin (and an ordinary person in it) can read none of it.
  const admin = await login("owner@audit.example", resetPassword);
  assert.equal(admin.status, 200);
  assert.equal(admin.json.user.language, "sw");
  const denied = await call("GET", "/api/platform/audit", null, admin.cookie);
  assert.equal(denied.status, 403);
  assert.ok(!denied.text.includes("audit-co") && !denied.text.includes("entries"));
  assert.equal((await call("GET", "/api/platform/audit?business=audit-co", null, admin.cookie)).status, 403);
  assert.equal((await call("GET", "/api/platform/businesses", null, admin.cookie)).status, 403);
  assert.equal((await call("GET", "/api/platform/audit")).status, 401, "not signed in");
  const staff = await call("POST", "/api/team/users", { name: "Audit Staff", email: "staff@audit.example" }, admin.cookie);
  assert.equal(staff.status, 200);
  const staffLogin = await login("staff@audit.example", staff.json.created.password);
  assert.equal((await call("GET", "/api/platform/audit", null, staffLogin.cookie)).status, 403);
  // Nothing a business Admin can call writes to it either.
  assert.equal((await call("POST", "/api/platform/audit", { entries: [] }, admin.cookie)).status, 403);
  assert.equal((await call("POST", "/api/platform/audit", { entries: [] }, owner.cookie)).status, 404, "the platform owner cannot write it by hand either");
});

test("erasing a business removes the business but not the platform's record that it happened (only its id, name and time)", async () => {
  const owner = await login("admin@agrinexus.org", "Admin2026!");
  const made = await call("POST", "/api/platform/businesses", { id: "gone-co", name: "Gone Co", adminName: "Gone Owner", adminEmail: "owner@gone.example", country: "Kenya" }, owner.cookie);
  assert.equal(made.status, 200);
  const early = await call("POST", "/api/platform/businesses/erase", { id: "gone-co", confirm: "gone-co" }, owner.cookie);
  assert.equal(early.status, 409, "still open: not erased");
  assert.equal((await call("GET", "/api/platform/audit?business=gone-co", null, owner.cookie)).json.entries.some(item => item.action === "business.erased"), false, "a refused erase is not recorded as done");
  await call("POST", "/api/platform/businesses/close", { id: "gone-co" }, owner.cookie);
  const erased = await call("POST", "/api/platform/businesses/erase", { id: "gone-co", confirm: "gone-co" }, owner.cookie);
  assert.equal(erased.status, 200);
  assert.ok(!erased.json.businesses.some(item => item.id === "gone-co"), "the business is gone");
  assert.ok(!fs.existsSync(path.join(dir, "db.space-gone-co.json")), "its record file is gone");

  const entries = (await call("GET", "/api/platform/audit?business=gone-co", null, owner.cookie)).json.entries;
  assert.deepEqual(entries.map(item => item.action), ["business.erased", "business.closed", "business.created"]);
  const last = entries[0];
  assert.equal(last.businessId, "gone-co");
  assert.equal(last.businessName, "Gone Co", "the name is kept even though the business is not");
  assert.ok(!Number.isNaN(Date.parse(last.at)));
  assert.equal(last.facts.people, 1);
  assert.equal(entries[0].facts.adminEmail, undefined);
});
