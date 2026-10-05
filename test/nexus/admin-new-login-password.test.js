"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { spawn } = require("node:child_process");

// Found by an independent audit: an admin who made a login and left the password alone gave it a well-known default that anyone could guess (the form was pre-filled with it, and the
// server used it when none was sent). A login made with no password now gets a random one, and the forms start with a random one written in them.

const root = path.resolve(__dirname, "..", "..");
const port = 4861;
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-admin-new-login-password-db.json");
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
let server;

async function login(email, password) {
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, password }) });
  return res;
}
const post = (cookie, pathname, body) => fetch(`${base}${pathname}`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify(body || {}) });

test("the forms no longer start with a well-known password", () => {
  const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
  for (const known of ['value: "User2026!"', 'value: "Admin2026!"', 'value: "Investor2026!"']) assert.equal(app.includes(known), false, known);
  assert.equal((app.match(/value: newTemporaryPassword\(\)/g) || []).length, 3);
  const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
  for (const known of ['body.password || "User2026!"', 'body.password || "Admin2026!"', 'body.password || "Investor2026!"']) assert.equal(server.includes(known), false, known);
});

test.describe("real server", () => {
  test.before(async () => {
    fs.copyFileSync(path.join(root, "db.json"), tempDbPath);
    server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" }, stdio: "ignore", windowsHide: true });
    for (let i = 0; i < 80; i += 1) { try { if ((await fetch(`${base}/api/healthz`)).ok) break; } catch { await wait(150); } }
  });
  test.after(() => { server.kill(); if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath); });

  test("a login made with no password gets a random one, shown to the admin, that works; the old default does not", async () => {
    const adminRes = await login("admin@agrinexus.org", "Admin2026!");
    assert.equal(adminRes.status, 200);
    const adminCookie = adminRes.headers.get("set-cookie").split(";")[0];
    for (const [route, email, oldDefault] of [["/api/admin/test-user", "newuser1@example.org", "User2026!"], ["/api/admin/admin-user", "newadmin1@example.org", "Admin2026!"], ["/api/admin/investor-user", "newinvestor1@example.org", "Investor2026!"]]) {
      const created = await post(adminCookie, route, { email, name: "New Person" });
      assert.equal(created.status, 200, route);
      const body = await created.json();
      const result = body.testUserResult || body.adminUserResult || body.investorUserResult;
      assert.ok(result?.password && result.password.length >= 10, `${route} shows the generated password to the admin`);
      assert.notEqual(result.password, oldDefault);
      assert.equal((await login(email, oldDefault)).status, 401, `${route}: the well-known default does not work`);
      assert.equal((await login(email, result.password)).status, 200, `${route}: the generated password works`);
    }
  });
});
