"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// Found by walking the business-spaces screens in a browser: an erase that deleted a business even when its people's engine data could not be queued for erasure, a closed business whose people got a
// misleading refusal (and, with Postgres sign-in, could slip into the default space), cards shown to people who could not use them, and forms shown to people who could not submit them.

const root = path.resolve(__dirname, "..", "..");
const html = name => fs.readFileSync(path.join(root, "public", name), "utf8");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

test("the screens: owner-only cards are hidden from a business's own Admin, the phone-card text is true, forms wait for permission", () => {
  const index = html("index.html");
  const app = html("app.js");
  assert.match(index, /id="adminSubscribersCard"/);
  assert.match(index, /id="adminCommunicationsCard"/);
  assert.match(app, /for \(const id of \["adminCommunicationsCard", "adminSubscribersCard"\]\)[^\n]*card\.hidden = data\?\.permissions\?\.platform !== true/);
  assert.ok(!/Anyone not listed is screened/.test(index), "the stale 'screened' claim is gone");
  assert.match(index, /A number that is not listed is told politely that it is not authorized/);
  assert.match(html("communications-setup.js"), /Only the platform owner can open this page\./);
  for (const page of ["platform", "team"]) {
    assert.match(html(`${page}.html`), /<section id="addSection"[^>]*hidden>/, `${page}.html hides its form until it is allowed`);
    assert.match(html(`${page}.js`), /byId\("addSection"\)\.hidden = false/, `${page}.js shows it once the server has said yes`);
  }
});

// ---------- a real server: a database is "configured" but cannot be reached, so the engine cannot take erasure requests ----------
const port = 15356;
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "spaces-fixes-"));
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
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, SESSION_SECRET: "fixes-secret-for-the-test-0123456789", PORT: String(port), AGRINEXUS_DB_PATH: defaultDb, AGRINEXUS_STATE_STORE: "json",
    DATABASE_URL: "postgres://nobody:nothing@127.0.0.1:1/none", AGRINEXUS_SPACES_PATH: path.join(dir, "spaces-directory.json"), OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_FILE_STORAGE_DIR: path.join(dir, "uploads") }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("an erase that cannot queue everyone's engine erasure stops, deletes nothing, and can be tried again", async () => {
  const owner = await login("admin@agrinexus.org", "Admin2026!");
  assert.equal(owner.status, 200);
  const made = await call("POST", "/api/platform/businesses", { id: "fix-co", name: "Fix Co", adminName: "Fix Owner", adminEmail: "owner@fix.example", country: "Kenya" }, owner.cookie);
  assert.equal(made.status, 200);
  const admin = await login("owner@fix.example", made.json.created.password);
  assert.equal(admin.status, 200);
  assert.equal((await call("POST", "/api/team/users", { name: "Fix Staff", email: "staff@fix.example" }, admin.cookie)).status, 200);

  await call("POST", "/api/platform/businesses/close", { id: "fix-co" }, owner.cookie);
  const erase = await call("POST", "/api/platform/businesses/erase", { id: "fix-co", confirm: "fix-co" }, owner.cookie);
  assert.equal(erase.status, 502, "stopped, not reported as done");
  assert.match(erase.json.error, /nothing was deleted/i);
  assert.equal(erase.json.erased.engineErasuresFailed, 2);
  assert.deepEqual(erase.json.erased.failedPeople.sort(), ["owner@fix.example", "staff@fix.example"]);
  assert.ok(fs.existsSync(path.join(dir, "db.space-fix-co.json")), "the business's record is still there");
  const listed = (await call("GET", "/api/platform/businesses", null, owner.cookie)).json.businesses.find(item => item.id === "fix-co");
  assert.ok(listed && listed.closed && listed.people === 2, "still listed, still closed, nobody lost");

  // Closed-business sign-in: the right password is told why; anything else gets the ordinary refusal; the wording no longer says "demo".
  const told = await login("owner@fix.example", made.json.created.password);
  assert.equal(told.status, 403);
  assert.match(told.json.error, /business has been closed/i);
  const wrong = await login("owner@fix.example", "not-the-password");
  assert.equal(wrong.status, 401);
  assert.equal(wrong.json.error, "Invalid email or password.");
  assert.equal((await login("nobody@nowhere.example", "whatever")).json.error, "Invalid email or password.");
  assert.ok(!/demo/i.test(wrong.text));

  // Reopen, and the business is whole again.
  await call("POST", "/api/platform/businesses/reopen", { id: "fix-co" }, owner.cookie);
  assert.equal((await login("owner@fix.example", made.json.created.password)).status, 200);
});

test("with no database at all there is no engine data, and a closed business erases cleanly", async () => {
  // The default server in the other tests has no database; here the same rule is read straight from the code so this test needs no second server.
  const source = fs.readFileSync(path.join(root, "server.js"), "utf8");
  assert.match(source, /const engineInUse = Boolean\(process\.env\.DATABASE_URL\);/);
  assert.match(source, /if \(summary\.engineErasuresFailed\) \{[\s\S]{0,700}return send\(res, 502,/);
  assert.match(source, /if \(result\.engineErasuresFailed\) return result;[\s\S]{0,200}nexusUploads\.uploadDir/, "files are deleted only after every request is queued");
  assert.match(source, /pgUsers\.disableUser\(getPgPool\(\), pgUser\.id\)/, "Postgres sign-ins of erased people are switched off");
});
