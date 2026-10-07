"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn, spawnSync } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const spaces = require("../../server/businessSpaces.js");
const stateBackup = require("../../server/stateBackup.js");

// Stage 4 of business spaces, operations: a person added to a business can sign in; close, reopen and erase a business; how much a business uses Kyro (counts only); and backup and restore of the app's own
// record (default space, every business, and the business directory), which `npm run db:backup` cannot see.

const root = path.resolve(__dirname, "..", "..");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// ---------- backup and restore, in a folder of their own ----------
function seedFolder() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "spaces-backup-"));
  const dbPath = path.join(dir, "db.json");
  const directoryPath = path.join(dir, "spaces-directory.json");
  fs.writeFileSync(dbPath, JSON.stringify({ users: [{ id: "u_default", email: "admin@agrinexus.org", role: "Admin" }], profile: { marker: "default-data" } }));
  return { dir, dbPath, directoryPath };
}
async function addBusiness({ dbPath, directoryPath }, id, { email, number, settings = {}, closed = false } = {}) {
  const directory = spaces.createFileDirectory(directoryPath);
  await directory.createSpace(id, { name: `${id} Co` });
  await directory.linkEmail(email, id);
  await directory.linkNumber(number, id);
  await directory.setSettings(id, settings);
  if (closed) await directory.setClosed(id, true);
  fs.writeFileSync(spaces.spaceDbPath(dbPath, id), JSON.stringify({ users: [{ id: `u_${id}`, email, role: "Admin" }], profile: { marker: `${id}-data` } }));
}

test("a backup holds the default record, every business and the directory; restoring one business leaves everything else alone", async () => {
  const folder = seedFolder();
  try {
    await addBusiness(folder, "acme", { email: "o@acme.example", number: "+254700000111", settings: { emailFrom: "Acme <hi@acme.example>" } });
    await addBusiness(folder, "beta-co", { email: "o@beta.example", number: "+254700000222", closed: true });
    const store = stateBackup.createFileStore(folder);
    const all = await stateBackup.collectState(store);
    assert.equal(all.format, stateBackup.FORMAT);
    assert.deepEqual(all.spaces.map(space => space.id), ["default", "acme", "beta-co"]);
    assert.deepEqual(all.spaces.find(space => space.id === "acme").emails, ["o@acme.example"]);
    assert.deepEqual(all.spaces.find(space => space.id === "acme").settings, { emailFrom: "Acme <hi@acme.example>" });
    assert.ok(all.spaces.find(space => space.id === "beta-co").closedAt, "a closed business stays closed");

    const one = await stateBackup.collectState(store, { business: "acme" });
    assert.deepEqual(one.spaces.map(space => space.id), ["acme"], "one business, no default record");
    await assert.rejects(stateBackup.collectState(store, { business: "nope" }), /no business/);

    // Lose acme, then bring it back from the single-business backup: its record, email, number and settings return, and nothing else is touched.
    fs.rmSync(spaces.spaceDbPath(folder.dbPath, "acme"));
    const directory = spaces.createFileDirectory(folder.directoryPath);
    await directory.removeSpace("acme");
    assert.equal(await directory.exists("acme"), false);
    const betaBefore = fs.readFileSync(spaces.spaceDbPath(folder.dbPath, "beta-co"), "utf8");
    const defaultBefore = fs.readFileSync(folder.dbPath, "utf8");
    const summary = await stateBackup.applyState(store, one, { business: "acme" });
    assert.deepEqual(summary.restored, ["acme"]);
    assert.equal(JSON.parse(fs.readFileSync(spaces.spaceDbPath(folder.dbPath, "acme"), "utf8")).profile.marker, "acme-data");
    assert.equal(await directory.spaceForEmail("o@acme.example"), "acme");
    assert.equal(await directory.spaceForNumber("+254700000111"), "acme");
    assert.deepEqual((await directory.info("acme")).settings, { emailFrom: "Acme <hi@acme.example>" });
    assert.equal(fs.readFileSync(spaces.spaceDbPath(folder.dbPath, "beta-co"), "utf8"), betaBefore);
    assert.equal(fs.readFileSync(folder.dbPath, "utf8"), defaultBefore);

    // A business that exists is not overwritten unless asked.
    fs.writeFileSync(spaces.spaceDbPath(folder.dbPath, "acme"), JSON.stringify({ users: [], profile: { marker: "changed-since" } }));
    const refused = await stateBackup.applyState(store, one, { business: "acme" });
    assert.deepEqual(refused.restored, []);
    assert.match(refused.skipped[0].reason, /already exists/);
    assert.equal(JSON.parse(fs.readFileSync(spaces.spaceDbPath(folder.dbPath, "acme"), "utf8")).profile.marker, "changed-since");
    assert.deepEqual((await stateBackup.applyState(store, one, { business: "acme", replace: true })).restored, ["acme"]);
    assert.equal(JSON.parse(fs.readFileSync(spaces.spaceDbPath(folder.dbPath, "acme"), "utf8")).profile.marker, "acme-data");

    // The default record is only written when asked for.
    fs.writeFileSync(folder.dbPath, JSON.stringify({ users: [], profile: { marker: "default-changed" } }));
    await stateBackup.applyState(store, all, { replace: true });
    assert.equal(JSON.parse(fs.readFileSync(folder.dbPath, "utf8")).profile.marker, "default-changed", "left alone without includeDefault");
    await stateBackup.applyState(store, all, { includeDefault: true, replace: true });
    assert.equal(JSON.parse(fs.readFileSync(folder.dbPath, "utf8")).profile.marker, "default-data");
    await assert.rejects(stateBackup.applyState(store, all, { business: "default" }), /not the default/);
  } finally { fs.rmSync(folder.dir, { recursive: true, force: true }); }
});

test("a damaged or foreign backup is refused before anything is written", () => {
  const good = { format: stateBackup.FORMAT, spaces: [{ id: "default", record: { users: [] } }, { id: "acme", emails: [], numbers: [], record: { users: [] } }] };
  assert.equal(stateBackup.validateStateBackup(good), true);
  const bad = [
    [{ ...good, format: "nexus-postgres-backup-v2" }, /Unsupported/], [{ ...good, spaces: [] }, /no spaces/],
    [{ ...good, spaces: [good.spaces[0], good.spaces[0]] }, /twice/], [{ ...good, spaces: [{ id: "../etc", emails: [], numbers: [], record: { users: [] } }] }, /invalid id/],
    [{ ...good, spaces: [{ id: "acme", emails: [], numbers: [], record: null }] }, /missing or damaged/], [{ ...good, spaces: [{ id: "acme", record: { users: [] } }] }, /directory entries/],
    [{ ...good, spaces: [{ id: "acme", emails: [], numbers: [], settings: "x", record: { users: [] } }] }, /settings/]
  ];
  for (const [backup, message] of bad) assert.throws(() => stateBackup.validateStateBackup(backup), message);
});

test("the backup and restore scripts: private file, locked restore, a business back in place", async () => {
  const folder = seedFolder();
  const out = path.join(folder.dir, "out");
  const env = { ...process.env, AGRINEXUS_STATE_STORE: "json", AGRINEXUS_DB_PATH: folder.dbPath, AGRINEXUS_SPACES_PATH: folder.directoryPath, NEXUS_DISABLE_LOCAL_ENV_FILES: "true" };
  delete env.DATABASE_URL; delete env.NEXUS_ALLOW_DATABASE_RESTORE;
  const run = (script, args, extra = {}) => spawnSync(process.execPath, [path.join(root, "scripts", script), ...args], { cwd: root, env: { ...env, ...extra }, encoding: "utf8" });
  try {
    await addBusiness(folder, "acme", { email: "o@acme.example", number: "+254700000111" });
    const made = run("state-backup.js", ["--business", "acme", "--out", out]);
    assert.equal(made.status, 0, made.stderr);
    const summary = JSON.parse(made.stdout);
    assert.deepEqual(summary.spaces, ["acme"]);
    if (process.platform !== "win32") assert.equal(fs.statSync(summary.file).mode & 0o077, 0, "readable by its owner only");
    assert.equal(JSON.parse(run("state-restore.js", [summary.file, "--verify-only"]).stdout).ok, true);
    const locked = run("state-restore.js", [summary.file, "--business", "acme", "--replace"]);
    assert.notEqual(locked.status, 0);
    assert.match(locked.stderr, /locked/i);
    fs.rmSync(spaces.spaceDbPath(folder.dbPath, "acme"));
    await spaces.createFileDirectory(folder.directoryPath).removeSpace("acme");
    const restored = run("state-restore.js", [summary.file, "--business", "acme"], { NEXUS_ALLOW_DATABASE_RESTORE: "true" });
    assert.equal(restored.status, 0, restored.stderr);
    assert.deepEqual(JSON.parse(restored.stdout).restored, ["acme"]);
    assert.equal(JSON.parse(fs.readFileSync(spaces.spaceDbPath(folder.dbPath, "acme"), "utf8")).profile.marker, "acme-data");
    assert.notEqual(run("state-restore.js", [path.join(folder.dir, "missing.json")]).status, 0);
  } finally { fs.rmSync(folder.dir, { recursive: true, force: true }); }
});

// ---------- the real server ----------
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "spaces-ops-"));
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
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, SESSION_SECRET: "ops-secret-for-the-test-0123456789", PORT: String(port), AGRINEXUS_DB_PATH: defaultDb, AGRINEXUS_SPACES_PATH: path.join(dir, "spaces-directory.json"), OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_FILE_STORAGE_DIR: path.join(dir, "uploads") }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("people added inside a business can sign in; an email is one person in one place; close, reopen, usage and erase", async () => {
  const owner = await login("admin@agrinexus.org", "Admin2026!");
  const make = async (id, email) => {
    const made = await call("POST", "/api/platform/businesses", { id, name: `${id} Co`, adminName: `${id} owner`, adminEmail: email, country: "Kenya" }, owner.cookie);
    assert.equal(made.status, 200);
    return login(email, made.json.created.password);
  };
  const acme = await make("acme", "owner@acme.example");
  const beta = await make("beta-co", "owner@beta.example");

  // A person added by a business's Admin can sign in (their email is linked to the business).
  const staff = await call("POST", "/api/team/users", { name: "Acme Staff", email: "staff@acme.example" }, acme.cookie);
  assert.equal(staff.status, 200);
  const staffLogin = await login("staff@acme.example", staff.json.created.password);
  assert.equal(staffLogin.status, 200, "added people can sign in");
  assert.equal(staffLogin.json.user.email, "staff@acme.example");
  // An email is one person in one place.
  assert.equal((await call("POST", "/api/team/users", { name: "Dup", email: "staff@acme.example" }, beta.cookie)).status, 409, "already in another business");
  assert.equal((await call("POST", "/api/team/users", { name: "Dup", email: "user@agrinexus.org" }, beta.cookie)).status, 409, "already an account in the default space");
  assert.equal((await call("POST", "/api/team/users", { name: "Dup", email: "staff@acme.example" }, owner.cookie)).status, 409, "the default space cannot take an email a business holds");
  assert.equal((await call("POST", "/api/admin/test-user", { email: "staff@acme.example" }, owner.cookie)).status, 409);
  const sandbox = await call("POST", "/api/admin/test-user", { email: "sandbox@acme.example", name: "Sandbox" }, acme.cookie);
  assert.equal(sandbox.status, 200, "other account-creating routes link the email too");
  assert.equal((await login("sandbox@acme.example", sandbox.json.testUserResult.password)).status, 200);

  // Usage: counts and a last time, never content.
  await call("POST", "/api/trade/order", { product: "Maize", quantity: 2, note: "zzusage-note" }, acme.cookie);
  const listed = (await call("GET", "/api/platform/businesses", null, owner.cookie));
  const row = listed.json.businesses.find(item => item.id === "acme");
  assert.ok(row.usage && row.usage.orders >= 1 && row.people >= 3);
  assert.ok(!listed.text.includes("zzusage-note"), "the platform owner sees counts, not what is in the records");

  // Close: nobody in it can reach it, nothing is deleted, other businesses are untouched, reopening restores it.
  assert.equal((await call("POST", "/api/platform/businesses/close", { id: "acme" }, beta.cookie)).status, 403);
  assert.equal((await call("POST", "/api/platform/businesses/close", { id: "nope" }, owner.cookie)).status, 404);
  const closed = await call("POST", "/api/platform/businesses/close", { id: "acme" }, owner.cookie);
  assert.equal(closed.status, 200);
  assert.equal(closed.json.businesses.find(item => item.id === "acme").closed, true);
  assert.equal((await call("GET", "/api/team/users", null, acme.cookie)).status, 401, "a signed-in session stops at once");
  assert.equal((await call("GET", "/api/team/users", null, staffLogin.cookie)).status, 401);
  assert.equal((await login("owner@acme.example", "anything")).status, 401);
  assert.equal((await call("GET", "/api/team/users", null, beta.cookie)).status, 200, "another business is unaffected");
  assert.ok(fs.existsSync(path.join(dir, "db.space-acme.json")), "nothing was deleted");
  const reopened = await call("POST", "/api/platform/businesses/reopen", { id: "acme" }, owner.cookie);
  assert.equal(reopened.json.businesses.find(item => item.id === "acme").closed, false);
  assert.equal((await login("staff@acme.example", staff.json.created.password)).status, 200, "its people can sign in again");

  // Erase: only a closed business, only with the id typed again; then it is gone, and its emails are free again.
  assert.equal((await call("POST", "/api/platform/businesses/erase", { id: "acme", confirm: "acme" }, owner.cookie)).status, 409, "not closed");
  await call("POST", "/api/platform/businesses/close", { id: "acme" }, owner.cookie);
  assert.equal((await call("POST", "/api/platform/businesses/erase", { id: "acme", confirm: "wrong" }, owner.cookie)).status, 400);
  assert.equal((await call("POST", "/api/platform/businesses/erase", { id: "acme", confirm: "acme" }, beta.cookie)).status, 403);
  const erased = await call("POST", "/api/platform/businesses/erase", { id: "acme", confirm: "acme" }, owner.cookie);
  assert.equal(erased.status, 200);
  assert.equal(erased.json.erased.people, 3);
  assert.ok(!erased.json.businesses.some(item => item.id === "acme"));
  assert.ok(!fs.existsSync(path.join(dir, "db.space-acme.json")), "the record is gone");
  assert.equal((await login("owner@acme.example", "anything")).status, 401);
  assert.equal((await call("POST", "/api/platform/businesses/reopen", { id: "acme" }, owner.cookie)).status, 404);
  const again = await call("POST", "/api/platform/businesses", { id: "acme", name: "Acme again", adminName: "New Owner", adminEmail: "owner@acme.example", country: "Kenya" }, owner.cookie);
  assert.equal(again.status, 200, "the id and the email can be used again after an erase");
  assert.equal((await call("GET", "/api/team/users", null, beta.cookie)).status, 200, "Beta was never touched");
});
