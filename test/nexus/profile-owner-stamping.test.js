"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { spawn } = require("node:child_process");

// Records people create in the shared db.profile arrays (workforce paperwork, trade quotes, map zones, health intakes, saved providers ...) were written with no
// owner, so the account download could not include them and an erasure could not remove them. New ones are now stamped _ownerEmail = the person, which the
// download and the erasure already read.

const root = path.resolve(__dirname, "..", "..");
const source = fs.readFileSync(path.join(root, "server.js"), "utf8");
const start = source.indexOf("const PROFILE_OWNER_FIELDS");
const end = source.indexOf("function profileRecordOwnedBy");
assert.ok(start > 0 && end > start, "the stamping code must stay extractable");

function load() {
  const sandbox = { require, WeakSet, Set, Map, Array, Object, String, JSON };
  vm.createContext(sandbox);
  vm.runInContext(`${source.slice(start, end)}\nthis.snapshot = snapshotProfileRecordsForOwnerStamping; this.stamp = stampNewProfileRecordsWithOwner; this.keys = profileStampKeys; this.hide = withoutOwnerMarks; this.ownerFields = PROFILE_OWNER_FIELDS;`, sandbox);
  return sandbox;
}

test("a new record in a shared array is stamped with the person who made it; existing ones are never taken over", () => {
  const { snapshot, stamp } = load();
  const old = { id: "a1", note: "someone else's" };
  const db = { profile: { workforceOnboarding: [old], fieldZones: [], applications: [{ id: "ap1", createdBy: "x@example.org" }] } };
  const before = snapshot(db);
  const fresh = { id: "n1", note: "mine" };
  db.profile.workforceOnboarding.unshift(fresh);
  db.profile.fieldZones.push({ id: "z1" });
  db.profile.applications.unshift({ id: "ap2" });
  assert.equal(stamp(db, before, "Amina@Example.org"), 3);
  assert.equal(fresh._ownerEmail, "amina@example.org");
  assert.equal(old._ownerEmail, undefined, "an existing record is not stamped");
  assert.equal(db.profile.applications[1].createdBy, "x@example.org", "an owner already there is kept");
  assert.equal(db.profile.applications[0]._ownerEmail, "amina@example.org");
});

test("a copy of an existing record (changed by someone else) keeps no new owner; a record with no id is told apart by the object itself", () => {
  const { snapshot, stamp } = load();
  const old = { id: "a1", status: "open" };
  const noId = { text: "legacy" };
  const db = { profile: { workforceDocuments: [old, noId] } };
  const before = snapshot(db);
  db.profile.workforceDocuments = [{ ...old, status: "closed" }, noId, { text: "new, no id" }];
  stamp(db, before, "amina@example.org");
  assert.equal(db.profile.workforceDocuments[0]._ownerEmail, undefined, "same id as an earlier record: not a new record");
  assert.equal(noId._ownerEmail, undefined);
  assert.equal(db.profile.workforceDocuments[2]._ownerEmail, "amina@example.org");
});

test("the audit logs are never stamped, and the financial ledger only gets a view mark that the download and the erasure do not use, so both are retained", () => {
  const { snapshot, stamp, keys, ownerFields } = load();
  const db = { profile: { walletTransactions: [], paymentCheckoutRecords: [], tradeEvents: [], notifications: [], platformRevenueLedger: [], integrationEvents: [], usageEvents: [], activity: [], twilioCallStatusReceipts: [], paymentReleases: [] } };
  const before = snapshot(db);
  for (const key of Object.keys(db.profile)) db.profile[key].push({ id: `${key}-1` });
  assert.equal(stamp(db, before, "amina@example.org"), 4, "only the four ledger lists other people must not be shown");
  for (const key of ["walletTransactions", "paymentCheckoutRecords", "tradeEvents", "notifications"]) {
    assert.equal(db.profile[key][0]._ledgerOwner, "amina@example.org", key);
    assert.equal(db.profile[key][0]._ownerEmail, undefined, `${key} is never given the mark the download and the erasure read`);
  }
  for (const key of ["platformRevenueLedger", "integrationEvents", "usageEvents", "activity", "twilioCallStatusReceipts", "paymentReleases"]) assert.deepEqual(db.profile[key][0], { id: `${key}-1` }, `${key} is not stamped`);
  assert.equal(ownerFields.includes("_ledgerOwner"), false, "the erasure and the download do not look at the view mark");
  for (const key of ["platformRevenueLedger", "integrationEvents", "twilioCallStatusReceipts", "paymentReleases", "cloudAgentAudit", "offlineSyncHistory", "agentExecutions", "telehealthProviderActions"]) assert.equal(keys().includes(key), false, key);
  assert.equal(keys().includes("workforceOnboarding"), true);
  assert.equal(keys().includes("tradeQuotes"), true);
  assert.equal(keys().includes("buyerContacts"), true);
});

test("the owner mark is never shown to other people", () => {
  const { hide } = load();
  const profile = { workforceOnboarding: [{ id: "a", _ownerEmail: "amina@example.org", note: "x" }, { id: "b" }], fieldZones: [{ id: "z" }], walletTransactions: [{ id: "w", _ownerEmail: "keep@example.org" }] };
  const shown = JSON.parse(JSON.stringify(hide(profile)));
  assert.deepEqual(shown.workforceOnboarding, [{ id: "a", note: "x" }, { id: "b" }]);
  assert.equal(profile.workforceOnboarding[0]._ownerEmail, "amina@example.org", "what is saved is not changed");
  assert.equal(hide({ fieldZones: [] }) !== null, true);
  assert.equal(hide(null), null);
});

test("things that are not records are left alone, and no person means no stamping", () => {
  const { snapshot, stamp } = load();
  const db = { profile: { workforceOnboarding: [], timesheets: "not a list", fieldZones: [] } };
  const before = snapshot(db);
  db.profile.workforceOnboarding.push("a string", 42, null, ["nested"], { id: "ok" });
  assert.equal(stamp(db, before, "amina@example.org"), 1);
  assert.equal(stamp(db, before, ""), 0);
  assert.equal(stamp({}, before, "amina@example.org"), 0);
});

test("the server saves through the stamping, only for a signed-in person on a request that can change data", () => {
  assert.match(source, /const stamping = profileOwnerStamping\.getStore\(\);\s*if \(stamping && stamping\.db === db && stamping\.email\)/);
  assert.match(source, /if \(user\?\.email && req\.method !== "GET" && req\.method !== "HEAD"\) profileOwnerStamping\.enterWith/);
});

// ---- through the real server ----
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-profile-owner-stamping-db.json");
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
let server;

async function login(email, password) {
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, password }) });
  assert.equal(res.status, 200, `${email} signs in`);
  return res.headers.get("set-cookie").split(";")[0];
}
const post = (cookie, pathname, body) => fetch(`${base}${pathname}`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify(body || {}) });

test.describe("real server", () => {
  test.before(async () => {
    fs.copyFileSync(path.join(root, "db.json"), tempDbPath);
    server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" }, stdio: "ignore", windowsHide: true });
    for (let i = 0; i < 80; i += 1) { try { if ((await fetch(`${base}/api/healthz`)).ok) break; } catch { await wait(150); } }
  });
  test.after(() => { server.kill(); if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath); });

  test("a workforce record is stamped with its owner, shows up in that person's download only, and goes with their erasure", async () => {
    const userCookie = await login("user@agrinexus.org", "User2026!");
    const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
    assert.equal((await post(userCookie, "/api/workforce/advanced", { type: "onboarding" })).status, 200);
    assert.equal((await post(adminCookie, "/api/workforce/advanced", { type: "onboarding" })).status, 200);
    const stored = JSON.parse(fs.readFileSync(tempDbPath, "utf8")).profile.workforceOnboarding;
    assert.equal(stored.length, 2);
    assert.deepEqual(stored.map(record => record._ownerEmail).sort(), ["admin@agrinexus.org", "user@agrinexus.org"]);

    // the admin (another person) is shown the record without the owner's email
    const stateText = JSON.stringify(JSON.parse(fs.readFileSync(tempDbPath, "utf8")).profile.workforceOnboarding);
    assert.match(stateText, /_ownerEmail/, "it is saved on the record");
    const state = await (await fetch(`${base}/api/state`, { headers: { cookie: adminCookie } })).json();
    assert.ok(state.profile.workforceOnboarding.length >= 2, "the records are in the state the admin is shown");
    assert.equal(JSON.stringify(state.profile.workforceOnboarding).includes("_ownerEmail"), false, "but not the owner marks");

    const exported = await post(userCookie, "/api/account/export", {});
    assert.equal(exported.status, 200);
    const exportBody = await exported.json();
    const file = await fetch(`${base}${exportBody.downloadPath}`, { headers: { cookie: userCookie } });
    const payload = JSON.parse((await file.json()).content);
    assert.equal(payload.profileRecords.workforceOnboarding.length, 1, "only their own onboarding record is in their download");
    assert.equal(payload.profileRecords.workforceOnboarding[0]._ownerEmail, "user@agrinexus.org");

    const erased = await post(userCookie, "/api/account/erase", { confirmed: true });
    assert.equal(erased.status, 200);
    const after = JSON.parse(fs.readFileSync(tempDbPath, "utf8")).profile.workforceOnboarding;
    assert.deepEqual(after.map(record => record._ownerEmail), ["admin@agrinexus.org"], "their record is gone; the other person's stays");
  });
});
