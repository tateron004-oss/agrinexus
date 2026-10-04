"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const vm = require("node:vm");
const { spawn } = require("node:child_process");
const registry = require("../../server/phoneCallerRegistry.js");

// The phone number manager: the owner adds/changes/removes who may phone Kyro from the admin panel instead of editing a Render setting and restarting.

const root = path.resolve(__dirname, "..", "..");
const serverSource = fs.readFileSync(path.join(root, "server.js"), "utf8");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const htmlSource = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");

function loadServerFunctions() {
  const extract = name => {
    const start = serverSource.indexOf(`function ${name}(`);
    assert.ok(start > 0, `could not locate ${name} in server.js`);
    return serverSource.slice(start, serverSource.indexOf("\nfunction ", start + 10));
  };
  const sandbox = { process: { env: {} } };
  vm.createContext(sandbox);
  vm.runInContext(
    ["normalizePhoneNumber", "twilioAuthorizedCallers", "phoneExternalPartyNumber", "resolveAuthorizedPhoneCaller", "nexusOwnPhoneForUser"].map(extract).join("\n") +
    "\nthis.normalizePhoneNumber = normalizePhoneNumber; this.resolveAuthorizedPhoneCaller = resolveAuthorizedPhoneCaller; this.nexusOwnPhoneForUser = nexusOwnPhoneForUser;",
    sandbox
  );
  return sandbox;
}
const { normalizePhoneNumber, resolveAuthorizedPhoneCaller, nexusOwnPhoneForUser } = loadServerFunctions();

const fixtureDb = () => ({
  users: [
    { id: "u_admin", email: "admin@agrinexus.org", role: "Admin" },
    { id: "u_amina", email: "amina@example.org", role: "Standard User", name: "Amina" },
    { id: "u_guest", email: "guest-1@guest.local", role: "Standard User", guest: true }
  ]
});
const add = (db, fields) => registry.addOrUpdateCaller(db, { normalizePhone: normalizePhoneNumber, actorEmail: "admin@agrinexus.org", ...fields });

test("an added number lets that person phone Kyro as their own account (and nobody else)", () => {
  const db = fixtureDb();
  assert.equal(add(db, { phone: "+254 712 345 678", email: "Amina@Example.org", label: "Mama Amina" }).ok, true);
  assert.equal(resolveAuthorizedPhoneCaller(db, { From: "+254712345678" }, {})?.id, "u_amina");
  assert.equal(resolveAuthorizedPhoneCaller(db, { From: "+254799999999" }, {}), null, "an unlisted number still gets nothing");
});

test("a number whose account has been deleted gets NO identity -- never the owner's", () => {
  const db = fixtureDb();
  add(db, { phone: "+254712345678", email: "amina@example.org" });
  db.users = db.users.filter(user => user.id !== "u_amina");
  // Even with the owner's bare number on the Render list, a managed row that points nowhere must not fall through to it.
  const env = { TWILIO_AUTHORIZED_CALLERS: "+254712345678" };
  assert.equal(resolveAuthorizedPhoneCaller(db, { From: "+254712345678" }, env), null);
});

test("the Render list still works, and a managed row wins for the same number", () => {
  const db = fixtureDb();
  const env = { TWILIO_AUTHORIZED_CALLERS: "+15551230000:admin@agrinexus.org,+254712345678:admin@agrinexus.org" };
  assert.equal(resolveAuthorizedPhoneCaller(db, { From: "+15551230000" }, env)?.id, "u_admin");
  add(db, { phone: "+254712345678", email: "amina@example.org" });
  assert.equal(resolveAuthorizedPhoneCaller(db, { From: "+254712345678" }, env)?.id, "u_amina");
});

test("removing a number takes access away straight away", () => {
  const db = fixtureDb();
  const { caller } = add(db, { phone: "+254712345678", email: "amina@example.org" });
  assert.ok(registry.removeCaller(db, caller.id));
  assert.equal(resolveAuthorizedPhoneCaller(db, { From: "+254712345678" }, {}), null);
  assert.equal(registry.removeCaller(db, caller.id), null, "removing twice reports not found");
});

test("re-adding a number moves it to the new account instead of listing it twice", () => {
  const db = fixtureDb();
  add(db, { phone: "+254712345678", email: "amina@example.org" });
  const again = add(db, { phone: "+254 712-345-678", email: "admin@agrinexus.org", label: "now the owner" });
  assert.equal(again.updated, true);
  assert.equal(db.phoneCallers.length, 1);
  assert.equal(resolveAuthorizedPhoneCaller(db, { From: "+254712345678" }, {})?.id, "u_admin");
});

test("bad input is refused with a plain message: no +, unknown account, guest, empty", () => {
  const db = fixtureDb();
  assert.equal(add(db, { phone: "0712345678", email: "amina@example.org" }).ok, false);
  assert.equal(add(db, { phone: "+254712345678", email: "nobody@example.org" }).status, 404);
  assert.equal(add(db, { phone: "+254712345678", email: "guest-1@guest.local" }).ok, false);
  assert.equal(add(db, { phone: "+254712345678", email: "" }).ok, false);
  assert.equal(db.phoneCallers, undefined, "nothing was stored");
});

test("the list is capped and the note is cleaned and shortened", () => {
  const db = fixtureDb();
  db.phoneCallers = Array.from({ length: registry.CAP }, (_, i) => ({ id: `x${i}`, phone: `+2547${String(10000000 + i)}`, userId: "u_amina", email: "amina@example.org" }));
  assert.equal(add(db, { phone: "+254700000001", email: "amina@example.org" }).ok, false);
  const small = fixtureDb();
  const res = add(small, { phone: "+254712345678", email: "amina@example.org", label: `  Mama\u0007\n   Amina ${"x".repeat(200)}` });
  assert.ok(res.caller.label.length <= registry.LABEL_MAX);
  assert.equal(/[\u0000-\u001f]/.test(res.caller.label), false);
});

test("erasing an account removes its numbers and only its numbers", () => {
  const db = fixtureDb();
  add(db, { phone: "+254712345678", email: "amina@example.org" });
  add(db, { phone: "+254712345679", email: "amina@example.org" });
  add(db, { phone: "+254712345680", email: "admin@agrinexus.org" });
  assert.equal(registry.removeCallersForUser(db, "u_amina"), 2);
  assert.deepEqual(db.phoneCallers.map(row => row.userId), ["u_admin"]);
  assert.equal(registry.removeCallersForUser(db, ""), 0);
});

test("the call-bridging lookup finds a managed number for that exact account only", () => {
  const db = fixtureDb();
  add(db, { phone: "+254712345678", email: "amina@example.org" });
  assert.equal(nexusOwnPhoneForUser(db.users[1], {}, db), "+254712345678");
  assert.equal(nexusOwnPhoneForUser(db.users[0], {}, db), "", "the Admin does not borrow Amina's number");
  assert.equal(nexusOwnPhoneForUser(db.users[1], {}), "", "old two-argument callers still work");
});

test("the admin view names each account and flags a number whose account is gone", () => {
  const db = fixtureDb();
  add(db, { phone: "+254712345678", email: "amina@example.org" });
  assert.deepEqual(registry.adminView(db).map(row => [row.name, row.accountMissing]), [["Amina", false]]);
  db.users = db.users.filter(user => user.id !== "u_amina");
  assert.equal(registry.adminView(db)[0].accountMissing, true);
});

test("the admin screen has the card, the form, and escapes what people typed", () => {
  for (const id of ["adminPhoneNumbersCard", "adminPhoneNumbers", "phoneCallerForm", "phoneCallerPhone", "phoneCallerEmail", "phoneCallerLabel"]) {
    assert.ok(htmlSource.includes(`id="${id}"`), `index.html needs #${id}`);
  }
  assert.match(appSource, /renderAdminPhoneNumbers\(data\.admin\)/);
  const start = appSource.indexOf("function renderAdminPhoneNumbers(");
  const body = appSource.slice(start, appSource.indexOf("async function submitAdminPhoneCaller("));
  // name and note are built into `who` / `note` first; those two and every direct field must go through escapeHtml.
  for (const expression of ["row\\.phone", "row\\.email", "row\\.id", "who", "note"]) {
    assert.match(body, new RegExp(`escapeHtml\\(${expression}\\)`), `${expression} must be escaped`);
  }
  assert.equal(/\$\{row\.(?:name|label|email|phone)\}/.test(body.replace(/escapeHtml\([^)]*\)/g, "")) && /innerHTML[^;]*\$\{row\.label\}/.test(body), false);
  assert.match(appSource, /\/api\/admin\/phone-callers\/remove/);
});

// --- through the real server, as the real Admin and a real non-admin ---
const port = 4851;
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-phone-number-manager-test-db.json");
const tempUploadDir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-phone-mgr-uploads-"));
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let adminCookie; let userCookie;

async function login(email, password) {
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, password }) });
  assert.equal(res.status, 200, `${email} must be able to sign in`);
  return res.headers.get("set-cookie").split(";")[0];
}
async function call(pathname, cookie, body) {
  const res = await fetch(`${base}${pathname}`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify(body || {}) });
  const text = await res.text();
  let json; try { json = JSON.parse(text); } catch { json = { raw: text.slice(0, 200) }; }
  return { status: res.status, json };
}

test.describe("admin routes (real server)", () => {
  test.before(async () => {
    fs.copyFileSync(path.join(root, "db.json"), tempDbPath);
    server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_FILE_STORAGE_DIR: tempUploadDir, TWILIO_AUTHORIZED_CALLERS: "+15550001111" }, stdio: "ignore", windowsHide: true });
    for (let i = 0; i < 80; i += 1) { try { if ((await fetch(`${base}/api/healthz`)).ok) break; } catch { await wait(150); } }
    adminCookie = await login("admin@agrinexus.org", "Admin2026!");
    userCookie = await login("user@agrinexus.org", "User2026!");
  });
  test.after(() => {
    server.kill();
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
    fs.rmSync(tempUploadDir, { recursive: true, force: true });
  });

  test("only an Admin can add or remove numbers", async () => {
    assert.equal((await call("/api/admin/phone-callers", userCookie, { phone: "+254712345678", email: "user@agrinexus.org" })).status, 403);
    assert.equal((await call("/api/admin/phone-callers/remove", userCookie, { id: "x" })).status, 403);
    assert.equal((await call("/api/admin/phone-callers", "", { phone: "+254712345678", email: "user@agrinexus.org" })).status >= 400, true);
  });

  test("an Admin adds a number, sees it in the admin data (and the masked Render one), then removes it", async () => {
    const added = await call("/api/admin/phone-callers", adminCookie, { phone: "+254 712 345 678", email: "user@agrinexus.org", label: "Test farmer" });
    assert.equal(added.status, 200, JSON.stringify(added.json).slice(0, 200));
    const rows = added.json.admin.phoneCallers;
    assert.equal(rows.length, 1);
    assert.equal(rows[0].phone, "+254712345678");
    assert.equal(rows[0].email, "user@agrinexus.org");
    assert.equal(rows[0].accountMissing, false);
    const fromRender = added.json.admin.phoneCallersFromSettings;
    assert.equal(fromRender.length, 1);
    assert.equal(fromRender[0].owner, true);
    assert.equal(fromRender[0].phone.includes("5550001111"), false, "the Render number is shown masked");

    const bad = await call("/api/admin/phone-callers", adminCookie, { phone: "0712345678", email: "user@agrinexus.org" });
    assert.equal(bad.status, 400);
    assert.match(bad.json.error, /country code/);
    assert.equal((await call("/api/admin/phone-callers", adminCookie, { phone: "+254700000000", email: "nobody@example.org" })).status, 404);

    const removed = await call("/api/admin/phone-callers/remove", adminCookie, { id: rows[0].id });
    assert.equal(removed.status, 200);
    assert.deepEqual(removed.json.admin.phoneCallers, []);
    assert.equal((await call("/api/admin/phone-callers/remove", adminCookie, { id: rows[0].id })).status, 404);
  });

  test("the number appears in the person's data export and is erased with their account", async () => {
    const added = await call("/api/admin/phone-callers", adminCookie, { phone: "+254711111111", email: "user@agrinexus.org" });
    assert.equal(added.status, 200);
    const exported = await call("/api/account/export", userCookie, {});
    assert.equal(exported.status, 200, JSON.stringify(exported.json).slice(0, 200));
    const file = await fetch(`${base}${exported.json.downloadPath}`, { headers: { cookie: userCookie } });
    const payload = JSON.parse((await file.json()).content);
    assert.deepEqual((payload.profileRecords.phoneAccessNumbers || []).map(row => row.phone), ["+254711111111"]);
    const erased = await call("/api/account/erase", userCookie, { confirmed: true });
    assert.equal(erased.status, 200, JSON.stringify(erased.json).slice(0, 200));
    assert.equal(erased.json.verification.profileRecordsRemoved.phoneAccessNumbers, 1);
    const after = await call("/api/admin/phone-callers", adminCookie, { phone: "+254722222222", email: "admin@agrinexus.org" });
    assert.deepEqual(after.json.admin.phoneCallers.map(row => row.phone), ["+254722222222"], "the erased account's number is gone; the admin's new one is the only row");
  });
});
