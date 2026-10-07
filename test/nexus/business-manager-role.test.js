"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const team = require("../../server/teamManagement.js");

// The Business manager: an ordinary account an Admin has put in charge of one team. They can add people, reset a password, switch an account off or on and link a phone, for THEIR team only,
// and nothing else changes for them (no Admin screens, no other team, no other person's private records).

const root = path.resolve(__dirname, "..", "..");
const serverSource = fs.readFileSync(path.join(root, "server.js"), "utf8");
const indexSource = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");

const fixture = () => ({
  users: [
    { id: "u_admin", email: "admin@agrinexus.org", role: "Admin", name: "Owner" },
    { id: "u_mgr", email: "mgr@example.org", role: "Standard User", businessManager: true, name: "Manager" },
    { id: "u_mgr2", email: "mgr2@example.org", role: "Standard User", businessManager: true, name: "Other manager" },
    { id: "u_a", email: "a@example.org", role: "Standard User", teamManagerId: "u_mgr", name: "A" },
    { id: "u_b", email: "b@example.org", role: "Standard User", teamManagerId: "u_mgr2", name: "B" },
    { id: "u_free", email: "free@example.org", role: "Standard User", name: "Nobody's" },
    { id: "u_inv", email: "inv@example.org", role: "Investor", name: "Investor" },
    { id: "u_gone", email: "gone@example.org", role: "Standard User", teamManagerId: "u_mgr", status: "deleted" },
    { id: "u_guest", email: "g@guest.local", role: "Standard User", guest: true, teamManagerId: "u_mgr" }
  ]
});

test("only a Standard User with the flag is a business manager, and a switched-off one cannot manage", () => {
  const db = fixture();
  const get = id => db.users.find(user => user.id === id);
  assert.equal(team.canManageTeam(get("u_mgr")), true);
  assert.equal(team.canManageTeam(get("u_admin")), true);
  assert.equal(team.canManageTeam(get("u_a")), false);
  assert.equal(team.canManageTeam({ ...get("u_inv"), businessManager: true }), false, "the flag means nothing on another role");
  assert.equal(team.canManageTeam({ ...get("u_mgr"), status: "disabled" }), false);
  assert.equal(team.canManageTeam(null), false);
});

test("a manager lists only their own team: no Admin, no Investor, no other team, no erased or guest account, not themselves", () => {
  const db = fixture();
  const mine = team.listedUsers(db, db.users[1]).map(user => user.id);
  assert.deepEqual(mine, ["u_a"]);
  const all = team.listedUsers(db, db.users[0]).map(user => user.id);
  assert.ok(all.includes("u_a") && all.includes("u_b") && all.includes("u_free") && all.includes("u_mgr"));
  assert.ok(!all.includes("u_admin") && !all.includes("u_inv") && !all.includes("u_gone") && !all.includes("u_guest"));
});

test("who a manager may change: their team only; everything else answers the same 'not on your team'", () => {
  const db = fixture();
  const mgr = db.users[1];
  assert.equal(team.manageableUser(db, mgr, "A@Example.org").ok, true);
  for (const email of ["b@example.org", "free@example.org", "admin@agrinexus.org", "inv@example.org", "nobody@example.org", "gone@example.org", "g@guest.local"]) {
    const result = team.manageableUser(db, mgr, email);
    assert.equal(result.ok, false, email);
    assert.equal(result.status, 404, email);
    assert.equal(result.error, team.manageableUser(db, mgr, "nobody@example.org").error, "the same words, so nothing can be probed");
  }
  assert.equal(team.manageableUser(db, mgr, "mgr@example.org").status, 400, "not their own account");
  assert.equal(team.manageableUser(db, mgr, "mgr2@example.org").status, 404, "another manager is off their team");
  assert.equal(team.manageableUser(db, db.users[0], "mgr2@example.org").ok, true, "an Admin can change a manager");
  assert.equal(team.manageableUser(db, db.users[0], "admin@agrinexus.org").ok, false, "nobody changes an Admin here");
});

test("the Team screen shape carries no password, hash or token, and only a masked phone", () => {
  const db = fixture();
  db.phoneCallers = [{ id: "pc_1", phone: "+254712345678", userId: "u_a", label: "mobile" }];
  const shaped = team.shapeUser({ ...db.users[3], password: "scrypt:aa:bb", resetTokenHash: "x" }, db);
  const text = JSON.stringify(shaped);
  assert.ok(!/scrypt|resetToken|password/i.test(text));
  assert.ok(!text.includes("254712345678"));
  assert.match(shaped.phones[0].phone, /^\+254\*+5678$/);
});

test("a number linked to an account that is switched off (or erased) is not answered", () => {
  const start = serverSource.indexOf("function resolveAuthorizedPhoneCaller(");
  assert.ok(start > 0);
  const source = serverSource.slice(start, serverSource.indexOf("\nfunction ", start + 10));
  const sandbox = { twilioAuthorizedCallers: () => [], phoneExternalPartyNumber: body => body.From };
  vm.createContext(sandbox);
  vm.runInContext(`${source}\nthis.resolve = resolveAuthorizedPhoneCaller;`, sandbox);
  const db = { users: [{ id: "u1", email: "a@example.org", role: "Standard User" }], phoneCallers: [{ id: "pc", phone: "+254700000001", userId: "u1" }] };
  assert.equal(sandbox.resolve(db, { From: "+254700000001" }, {})?.id, "u1");
  db.users[0].status = "disabled";
  assert.equal(sandbox.resolve(db, { From: "+254700000001" }, {}), null);
  db.users[0].status = "deleted";
  assert.equal(sandbox.resolve(db, { From: "+254700000001" }, {}), null);
});

test("the header has a hidden My team link, and the Admin screen has the card that makes managers", () => {
  assert.match(indexSource, /id="teamLink"[^>]*href="\/team\.html"[^>]*hidden/);
  assert.match(indexSource, /id="businessManagerForm"/);
});

// ---------- the real server ----------
const port = 15321;
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-business-manager-test-db.json");
let server;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function waitFor(url) {
  for (let i = 0; i < 80; i += 1) {
    try { if ((await fetch(url)).ok) return; } catch { await sleep(150); }
  }
  throw new Error(`${url} did not become reachable`);
}
async function call(method, pathname, body, cookie) {
  const res = await fetch(`${base}${pathname}`, { method, headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}) }, body: method === "GET" ? undefined : JSON.stringify(body || {}) });
  const json = await res.json().catch(() => ({}));
  return { status: res.status, json, text: JSON.stringify(json), cookie: (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ") };
}
const login = (email, password) => call("POST", "/api/login", { email, password });

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), tempDbPath);
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
});
test.after(() => { server.kill(); if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath); });

test("the whole flow on a real server: Admin makes managers, a manager runs only their own team", async () => {
  const admin = await login("admin@agrinexus.org", "Admin2026!");
  assert.equal(admin.status, 200);
  assert.equal(admin.json.permissions.team, true);
  const ordinary = await login("user@agrinexus.org", "User2026!");
  assert.equal(ordinary.json.permissions.team, false);
  assert.equal(ordinary.json.user.businessManager, false);
  assert.equal((await call("GET", "/api/team/users", null, ordinary.cookie)).status, 403);
  assert.equal((await call("GET", "/api/team/users")).status, 401);

  // The Admin creates two accounts and makes them managers.
  const madeA = await call("POST", "/api/team/users", { name: "Manager A", email: "mgr-a@example.org" }, admin.cookie);
  const madeB = await call("POST", "/api/team/users", { name: "Manager B", email: "mgr-b@example.org" }, admin.cookie);
  assert.equal(madeA.status, 200);
  assert.ok(madeA.json.created.password.length >= 12);
  for (const email of ["mgr-a@example.org", "mgr-b@example.org"]) assert.equal((await call("POST", "/api/admin/business-manager", { email, enabled: true }, admin.cookie)).status, 200);
  assert.equal((await call("POST", "/api/admin/business-manager", { email: "admin@agrinexus.org", enabled: true }, admin.cookie)).status, 404, "an Admin account cannot be made a manager");
  assert.equal((await call("POST", "/api/admin/business-manager", { email: "mgr-a@example.org" }, admin.cookie)).status, 400, "nothing to change");

  const a = await login("mgr-a@example.org", madeA.json.created.password);
  const b = await login("mgr-b@example.org", madeB.json.created.password);
  assert.equal(a.json.permissions.team, true);
  assert.equal(a.json.user.businessManager, true);
  assert.equal(a.json.user.role, "Standard User", "still an ordinary account underneath");

  // A manager cannot reach Admin routes, make managers, or touch an Admin.
  assert.equal((await call("POST", "/api/admin/business-manager", { email: "mgr-b@example.org", enabled: false }, a.cookie)).status, 403);
  assert.equal((await call("POST", "/api/admin/test-user", { email: "x@example.org" }, a.cookie)).status, 403);
  assert.equal((await call("POST", "/api/admin/phone-callers", { phone: "+254700000009", email: "mgr-a@example.org" }, a.cookie)).status, 403);
  assert.equal((await call("GET", "/api/admin/communications/status", null, a.cookie)).status, 403);

  // A adds a person; the list shows only people, never a password or hash.
  const staff = await call("POST", "/api/team/users", { name: "Staff One", email: "Staff1@Example.org" }, a.cookie);
  assert.equal(staff.status, 200);
  assert.deepEqual(staff.json.team.map(member => member.email), ["staff1@example.org"]);
  assert.ok(!staff.text.replace(staff.json.created.password, "").includes("scrypt:"));
  assert.equal((await call("POST", "/api/team/users", { name: "Dup", email: "staff1@example.org" }, a.cookie)).status, 409);
  assert.equal((await call("POST", "/api/team/users", { name: "Admin?", email: "admin@agrinexus.org" }, a.cookie)).status, 409);
  assert.equal((await call("POST", "/api/team/users", { name: "", email: "z@example.org" }, a.cookie)).status, 400);
  assert.equal((await call("POST", "/api/team/users", { name: "Z", email: "not-an-email" }, a.cookie)).status, 400);

  // B sees none of A's people and cannot change them (same answer as for someone who does not exist).
  assert.deepEqual((await call("GET", "/api/team/users", null, b.cookie)).json.team, []);
  const missing = await call("POST", "/api/team/users/reset-password", { email: "nobody@example.org" }, b.cookie);
  for (const route of ["/api/team/users/reset-password", "/api/team/users/status", "/api/team/phone-numbers"]) {
    const attempt = await call("POST", route, { email: "staff1@example.org", active: false, phone: "+254712345678" }, b.cookie);
    assert.equal(attempt.status, 404, route);
    assert.equal(attempt.json.error, missing.json.error);
  }
  // Neither manager can reach an Admin, an Investor, a person on nobody's team, or themselves.
  for (const email of ["admin@agrinexus.org", "investor@agrinexus.org", "user@agrinexus.org"]) assert.equal((await call("POST", "/api/team/users/reset-password", { email }, a.cookie)).status, 404, email);
  assert.equal((await call("POST", "/api/team/users/reset-password", { email: "mgr-a@example.org" }, a.cookie)).status, 400);

  // Link a phone: A can, B cannot take the same number for their own person, and B cannot remove A's row.
  const staffCookie = (await login("staff1@example.org", staff.json.created.password));
  assert.equal(staffCookie.status, 200);
  assert.equal(staffCookie.json.permissions.team, false);
  const linked = await call("POST", "/api/team/phone-numbers", { email: "staff1@example.org", phone: "+254 712 345 678", label: "Staff mobile" }, a.cookie);
  assert.equal(linked.status, 200);
  assert.match(linked.json.team[0].phones[0].phone, /^\+254\*+5678$/);
  assert.ok(!linked.text.includes("254712345678"));
  assert.equal((await call("POST", "/api/team/phone-numbers", { email: "staff1@example.org", phone: "0712345678" }, a.cookie)).status, 400, "a number needs its country code");
  const staffB = await call("POST", "/api/team/users", { name: "Staff Two", email: "staff2@example.org" }, b.cookie);
  const steal = await call("POST", "/api/team/phone-numbers", { email: "staff2@example.org", phone: "+254712345678" }, b.cookie);
  assert.equal(steal.status, 409);
  assert.equal((await call("POST", "/api/team/phone-numbers/remove", { id: linked.json.team[0].phones[0].id }, b.cookie)).status, 404);
  assert.equal(staffB.status, 200);
  for (const [index, phone] of ["+254700000002", "+254700000003", "+254700000004"].entries()) {
    const more = await call("POST", "/api/team/phone-numbers", { email: "staff1@example.org", phone }, a.cookie);
    assert.equal(more.status, index < 2 ? 200 : 400, "up to 3 numbers a person");
  }

  // A new password ends the old sign-in at once; the old password stops working.
  const reset = await call("POST", "/api/team/users/reset-password", { email: "staff1@example.org" }, a.cookie);
  assert.equal(reset.status, 200);
  assert.notEqual(reset.json.reset.password, staff.json.created.password);
  assert.equal((await call("GET", "/api/team/users", null, staffCookie.cookie)).status, 401, "the old session is gone");
  assert.equal((await login("staff1@example.org", staff.json.created.password)).status, 401);
  const again = await login("staff1@example.org", reset.json.reset.password);
  assert.equal(again.status, 200);

  // Switching off: signed-in session stops, sign-in is refused with a plain reason, switching on restores it.
  const off = await call("POST", "/api/team/users/status", { email: "staff1@example.org", active: false }, a.cookie);
  assert.equal(off.status, 200);
  assert.equal(off.json.team[0].active, false);
  assert.equal((await call("GET", "/api/team/users", null, again.cookie)).status, 401);
  const refused = await login("staff1@example.org", reset.json.reset.password);
  assert.equal(refused.status, 403);
  assert.match(refused.json.error, /switched off/i);
  assert.equal((await call("POST", "/api/team/users/status", { email: "staff1@example.org" }, a.cookie)).status, 400, "must say on or off");
  assert.equal((await call("POST", "/api/team/users/status", { email: "staff1@example.org", active: true }, a.cookie)).status, 200);

  // Removing a number works for its own manager.
  const rows = (await call("GET", "/api/team/users", null, a.cookie)).json.team[0].phones;
  assert.equal((await call("POST", "/api/team/phone-numbers/remove", { id: rows[0].id }, a.cookie)).json.team[0].phones.length, rows.length - 1);

  // The Admin can put someone on a manager's team, and only then can that manager reach them.
  assert.equal((await call("POST", "/api/team/users/status", { email: "user@agrinexus.org", active: false }, a.cookie)).status, 404);
  assert.equal((await call("POST", "/api/admin/business-manager", { email: "user@agrinexus.org", managerEmail: "mgr-a@example.org" }, admin.cookie)).status, 200);
  assert.ok((await call("GET", "/api/team/users", null, a.cookie)).json.team.some(member => member.email === "user@agrinexus.org"));
  assert.equal((await call("POST", "/api/admin/business-manager", { email: "user@agrinexus.org", managerEmail: "staff1@example.org" }, admin.cookie)).status, 404, "only a business manager can have a team");
  assert.equal((await call("POST", "/api/admin/business-manager", { email: "user@agrinexus.org", managerEmail: "" }, admin.cookie)).status, 200);
  assert.ok(!(await call("GET", "/api/team/users", null, a.cookie)).json.team.some(member => member.email === "user@agrinexus.org"));

  // Taking the manager role away closes the Team tools straight away.
  assert.equal((await call("POST", "/api/admin/business-manager", { email: "mgr-b@example.org", enabled: false }, admin.cookie)).status, 200);
  assert.equal((await call("GET", "/api/team/users", null, b.cookie)).status, 403);

  // The Admin sees every ordinary account on the Team screen too.
  const adminView = await call("GET", "/api/team/users", null, admin.cookie);
  assert.ok(adminView.json.team.length >= 4);
  assert.ok(!adminView.json.team.some(member => member.email === "admin@agrinexus.org"));
});

test("the Team page is served", async () => {
  const page = await fetch(`${base}/team.html`);
  assert.equal(page.status, 200);
  assert.match(await page.text(), /My team/);
  assert.equal((await fetch(`${base}/team.js`)).status, 200);
});
