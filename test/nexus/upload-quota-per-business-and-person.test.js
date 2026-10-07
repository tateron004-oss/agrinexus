"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const uploads = require("../../server/uploads.js");

// One business (or one person) must not be able to use up all the stored-file space. Each business has an allowance of its own and so does each person, counted only from their own files; a refusal says
// plainly that the storage is full; deleting a file frees its share at once; and erasing a business still removes its files.

const root = path.resolve(__dirname, "..", "..");
const port = 15542;
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "upload-quota-"));
const uploadDir = path.join(dir, "uploads");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let server;
let counter = 0;
async function waitFor(url) { for (let i = 0; i < 80; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
async function call(method, pathname, body, cookie) {
  counter += 1;
  const res = await fetch(`${base}${pathname}`, { method, headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}), "x-forwarded-for": `10.30.${(counter >> 8) & 255}.${counter & 255}` }, body: method === "GET" ? undefined : JSON.stringify(body || {}) });
  const text = await res.text();
  let json = null; try { json = JSON.parse(text); } catch { /* not JSON */ }
  return { status: res.status, json, text, cookie: (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ") };
}
const login = (email, password) => call("POST", "/api/login", { email, password });
const NINE_HUNDRED_KB = Buffer.concat([Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]), Buffer.alloc(900 * 1024, 7)]);
async function upload(cookie) {
  counter += 1;
  const form = new FormData();
  form.append("file", new Blob([NINE_HUNDRED_KB], { type: "image/png" }), "photo.png");
  const res = await fetch(`${base}/api/nexus/upload`, { method: "POST", headers: { cookie, "x-forwarded-for": `10.31.${(counter >> 8) & 255}.${counter & 255}` }, body: form });
  return { status: res.status, json: await res.json().catch(() => null) };
}
const metas = () => fs.readdirSync(uploadDir).filter(name => name.endsWith(".meta.json")).map(name => JSON.parse(fs.readFileSync(path.join(uploadDir, name), "utf8")));

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), SESSION_SECRET: "upload-quota-secret-for-the-test-0123456789", AGRINEXUS_TRUST_PROXY: "true", AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_PATH: path.join(dir, "dir.json"),
    OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_FILE_STORAGE_DIR: uploadDir, NEXUS_FILE_UPLOAD_ENABLED: "true",
    AGRINEXUS_UPLOAD_USER_QUOTA_MB: "1", AGRINEXUS_UPLOAD_SPACE_QUOTA_MB: "2" }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("allowances come from the environment, with sensible defaults and bounds", () => {
  assert.equal(uploads.spaceQuotaBytes({}), 500 * 1024 * 1024);
  assert.equal(uploads.userQuotaBytes({}), 50 * 1024 * 1024);
  assert.equal(uploads.spaceQuotaBytes({ AGRINEXUS_UPLOAD_SPACE_QUOTA_MB: "20" }), 20 * 1024 * 1024);
  assert.equal(uploads.userQuotaBytes({ AGRINEXUS_UPLOAD_USER_QUOTA_MB: "3" }), 3 * 1024 * 1024);
  assert.equal(uploads.userQuotaBytes({ AGRINEXUS_UPLOAD_USER_QUOTA_MB: "999999" }), 4000 * 1024 * 1024);
  assert.equal(uploads.userQuotaBytes({ AGRINEXUS_UPLOAD_USER_QUOTA_MB: "nonsense" }), 50 * 1024 * 1024);
});

test("usage is counted from a business's and a person's own files only", () => {
  const scratch = fs.mkdtempSync(path.join(os.tmpdir(), "upload-usage-"));
  const put = (id, space, uploadedBy, sizeBytes) => fs.writeFileSync(path.join(scratch, `${id}.meta.json`), JSON.stringify({ fileId: id, space, uploadedBy, sizeBytes }));
  put("a", "biz-1", "u1", 100); put("b", "biz-1", "u2", 40); put("c", "biz-2", "u1", 1000); fs.writeFileSync(path.join(scratch, "d.meta.json"), JSON.stringify({ fileId: "d", uploadedBy: "u1", sizeBytes: 7 }));
  assert.deepEqual(uploads.usageForOwner(scratch, { space: "biz-1", userId: "u1" }), { spaceBytes: 140, userBytes: 100 });
  assert.deepEqual(uploads.usageForOwner(scratch, { space: "biz-2", userId: "u1" }), { spaceBytes: 1000, userBytes: 1000 });
  assert.deepEqual(uploads.usageForOwner(scratch, { space: "default", userId: "u1" }), { spaceBytes: 7, userBytes: 7 }, "a file from before businesses existed belongs to the default space");
  assert.deepEqual(uploads.usageForOwner(path.join(scratch, "missing"), { space: "biz-1", userId: "u1" }), { spaceBytes: 0, userBytes: 0 });
  fs.rmSync(scratch, { recursive: true, force: true });
});

test("a person stops at their own allowance, a business at its own, neither is counted from other people's files, deleting frees room, and erasing a business removes its files", async () => {
  const owner = await login("admin@agrinexus.org", "Admin2026!");
  assert.equal(owner.status, 200);
  const make = async (id, email) => {
    const made = await call("POST", "/api/platform/businesses", { id, name: id, adminName: id, adminEmail: email, country: "Kenya" }, owner.cookie);
    assert.equal(made.status, 200, made.text.slice(0, 200));
    const admin = await login(email, made.json.created.password);
    assert.equal(admin.status, 200);
    return admin;
  };
  const addPerson = async (admin, name, email) => {
    const added = await call("POST", "/api/team/users", { name, email }, admin.cookie);
    assert.equal(added.status, 200, added.text.slice(0, 200));
    const person = await login(email, added.json.created.password);
    assert.equal(person.status, 200);
    return person;
  };
  const adminA = await make("quota-a", "owner@quota-a.example");
  const adminB = await make("quota-b", "owner@quota-b.example");

  // Person one: one 900 KB file fits in their 1 MB allowance, a second does not, and the refusal says the storage is full.
  assert.equal((await upload(adminA.cookie)).status, 200);
  const second = await upload(adminA.cookie);
  assert.equal(second.status, 413);
  assert.match(second.json.error, /Your storage is full/);
  assert.equal(metas().filter(meta => meta.space === "quota-a").length, 1, "the refused file left nothing behind");
  assert.deepEqual(fs.readdirSync(uploadDir).filter(name => name.startsWith(".tmp-")), [], "no half-written file is left");

  // Person two in the same business is not held back by person one's files; person three would push the business past its 2 MB.
  const two = await addPerson(adminA, "Two", "two@quota-a.example");
  const three = await addPerson(adminA, "Three", "three@quota-a.example");
  assert.equal((await upload(two.cookie)).status, 200);
  const overBusiness = await upload(three.cookie);
  assert.equal(overBusiness.status, 413);
  assert.match(overBusiness.json.error, /business's storage is full/);

  // Another business has its own allowance: A's files do not count against B.
  assert.equal((await upload(adminB.cookie)).status, 200);

  // Deleting a file frees room at once.
  assert.equal(uploads.deleteUpload(uploadDir, metas().find(meta => meta.space === "quota-a").fileId), true);
  assert.equal((await upload(three.cookie)).status, 200, "room was freed by the delete");

  // Erasing a business still removes every file its people uploaded, and leaves the other business's file alone.
  const bFilesBefore = metas().filter(meta => meta.space === "quota-b").length;
  assert.ok(metas().filter(meta => meta.space === "quota-a").length >= 2);
  assert.equal((await call("POST", "/api/platform/businesses/close", { id: "quota-a" }, owner.cookie)).status, 200);
  const erased = await call("POST", "/api/platform/businesses/erase", { id: "quota-a", confirm: "quota-a" }, owner.cookie);
  assert.equal(erased.status, 200, erased.text.slice(0, 300));
  assert.equal(metas().filter(meta => meta.space === "quota-a").length, 0, "every file of the erased business is gone");
  assert.equal(metas().filter(meta => meta.space === "quota-b").length, bFilesBefore, "the other business is untouched");
});

test("one person's quota does not depend on the business allowance, and the unlimited-looking default space also has its own", async () => {
  // A person in the default space (the platform owner) has the same per-person allowance.
  const owner = await login("admin@agrinexus.org", "Admin2026!");
  assert.equal((await upload(owner.cookie)).status, 200);
  const again = await upload(owner.cookie);
  assert.equal(again.status, 413);
  assert.match(again.json.error, /Your storage is full/);
});
