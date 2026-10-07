"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const spaces = require("../../server/businessSpaces.js");
const team = require("../../server/teamManagement.js");

// Attacks and accidents against business spaces: changes made at the same moment, a business Admin or manager trying to get out of their business or to send as the platform, and input nobody should send.
// Each of these found a real fault the first time it ran (lost updates, a stray directory entry, a business sending SMS as the platform through an older route, 500s on broken bodies, look-alike emails).

const root = path.resolve(__dirname, "..", "..");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// ---------- plain logic ----------
test("business ids: plain and safe, and never a word that means something else", () => {
  for (const id of ["ab", "a-b", "a--b", "green-valley", "x".repeat(40), "farm2"]) assert.equal(spaces.validSpaceId(id), true, id);
  for (const id of ["a", "-ab", "ab-", "x".repeat(41), "UPPER", "has.dot", "a/b", "../x", "%2e%2e", "__proto__", "default", "admin", "platform", "constructor", "tostring", "", null, 5]) assert.equal(spaces.validSpaceId(id), false, String(id));
});

test("emails: plain ASCII only; no look-alike, invisible or malformed addresses", () => {
  for (const email of ["a@b.co", "first.last+tag@sub.example.org", "X_Y@Example.COM", "  a@b.co  ", "o@x.ke"]) assert.equal(team.validEmail(email), true, email);
  for (const email of ["a@b", "a b@x.co", "a@@x.co", ".a@x.co", "a.@x.co", "a..b@x.co", "\"q\"@x.co", "a@x.co.", "a​@x.co", "ａ@x.co", `${"x".repeat(65)}@x.co`, `a@${"x".repeat(250)}.co`, "", null, "a@x.c0"]) assert.equal(team.validEmail(email), false, String(email));
});

test("names: invisible and direction-changing characters are removed, length is capped", () => {
  assert.equal(spaces.cleanName("ev‮il ​Peter"), "evil Peter");
  assert.equal(spaces.cleanName("a\u0000b"), "a b");
  assert.equal(spaces.cleanName("N".repeat(500)).length, 80);
});

test("the directory file: built-in property names are not businesses; a damaged file is never mistaken for an empty one", async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "spaces-dirfile-"));
  try {
    const file = path.join(dir, "directory.json");
    const d = spaces.createFileDirectory(file);
    assert.equal(await d.exists("constructor"), false);
    assert.equal(await d.exists("__proto__"), false);
    assert.equal(await d.spaceForEmail("constructor@x.co"), "default");
    await d.createSpace("one");
    await d.linkEmail("a@x.co", "one");
    const before = fs.readFileSync(file, "utf8");
    fs.writeFileSync(file, before.slice(0, 20)); // a half-written file
    await assert.rejects(d.exists("one"), error => error.userSafe && error.httpStatus === 503 && !error.message.includes(dir));
    await assert.rejects(d.createSpace("two"), error => error.httpStatus === 503);
    assert.equal(fs.readFileSync(file, "utf8"), before.slice(0, 20), "a change never saves over a damaged file");
    fs.writeFileSync(file, before);
    assert.equal(await d.spaceForEmail("a@x.co"), "one", "and it works again once the file is whole");
    fs.rmSync(file);
    assert.equal(await d.exists("one"), false, "only a missing file means an empty directory");
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
});

// ---------- the real server ----------
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "spaces-adv-"));
const defaultDb = path.join(dir, "db.json");
const directoryFile = path.join(dir, "spaces-directory.json");
const spaceFile = id => path.join(dir, `db.space-${id}.json`);
const readSpace = id => JSON.parse(fs.readFileSync(spaceFile(id), "utf8"));
let server;
let counter = 0;
async function waitFor(url) { for (let i = 0; i < 80; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
// Every request comes from its own pretend address so the per-address limits (which are real, and shared by everyone behind one address) do not get in the way of a test that sends hundreds.
async function call(method, pathname, body, cookie, headers = {}) {
  counter += 1;
  try {
    const res = await fetch(`${base}${pathname}`, { method, headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}), "x-forwarded-for": `10.${(counter >> 16) & 255}.${(counter >> 8) & 255}.${counter & 255}`, ...headers },
      body: method === "GET" ? undefined : (typeof body === "string" ? body : JSON.stringify(body || {})), signal: AbortSignal.timeout(30000) });
    const text = await res.text();
    let json = null; try { json = JSON.parse(text); } catch { /* not JSON */ }
    return { status: res.status, json, text, cookie: (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ") };
  } catch (error) { return { status: 0, json: null, text: String(error.message), cookie: "" }; }
}
const login = (email, password) => call("POST", "/api/login", { email, password });

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), defaultDb);
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), SESSION_SECRET: "adversarial-secret-for-the-test-01234", AGRINEXUS_TRUST_PROXY: "true", AGRINEXUS_DB_PATH: defaultDb, AGRINEXUS_SPACES_PATH: directoryFile,
    OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_FILE_STORAGE_DIR: path.join(dir, "uploads"), NEXUS_FILE_UPLOAD_ENABLED: "true",
    // The platform has a number, an email sender and Twilio/Resend accounts; a business must never be able to send as them.
    TWILIO_ACCOUNT_SID: "ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", TWILIO_AUTH_TOKEN: "not-a-real-token", TWILIO_PHONE_NUMBER: "+15550001111", NEXUS_SMS_ENABLED: "true", NEXUS_CALLS_ENABLED: "true", NEXUS_WHATSAPP_ENABLED: "true",
    NEXUS_EMAIL_ENABLED: "true", RESEND_API_KEY: "re_not_real", NEXUS_EMAIL_FROM: "platform@kyro.example", PUBLIC_BASE_URL: base, PHONE_PROVIDER: "twilio" }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

let owner; let A; let B; let adminA; let adminB;
async function makeBusiness(id, email) {
  const made = await call("POST", "/api/platform/businesses", { id, name: id, adminName: id, adminEmail: email, country: "Kenya" }, owner.cookie);
  assert.equal(made.status, 200, `create ${id}: ${made.text.slice(0, 200)}`);
  const admin = await login(email, made.json.created.password);
  assert.equal(admin.status, 200);
  return admin;
}
test("setup: the platform owner and two businesses", async () => {
  owner = await login("admin@agrinexus.org", "Admin2026!");
  assert.equal(owner.status, 200);
  adminA = await makeBusiness("adv-a", "owner@adv-a.example");
  adminB = await makeBusiness("adv-b", "owner@adv-b.example");
  A = adminA; B = adminB;
});

test("changes made at the same moment are all kept, and exactly one of two competing creations wins", async () => {
  // 20 people added at once to one business: every one told "added" is really there.
  const adds = await Promise.all(Array.from({ length: 20 }, (_, i) => call("POST", "/api/team/users", { name: `P${i}`, email: `p${i}@adv-a.example` }, A.cookie)));
  assert.equal(adds.filter(r => r.status === 200).length, 20);
  assert.equal(readSpace("adv-a").users.filter(u => /^p\d+@adv-a/.test(u.email)).length, 20, "all 20 are in the record");
  // Two businesses at once: each keeps all of its own, and nothing crosses.
  const both = await Promise.all([...Array.from({ length: 10 }, (_, i) => call("POST", "/api/team/users", { name: `Q${i}`, email: `q${i}@adv-a.example` }, A.cookie)), ...Array.from({ length: 10 }, (_, i) => call("POST", "/api/team/users", { name: `Q${i}`, email: `q${i}@adv-b.example` }, B.cookie))]);
  assert.ok(both.every(r => r.status === 200));
  assert.equal(readSpace("adv-a").users.filter(u => /^q\d+@/.test(u.email)).length, 10);
  assert.equal(readSpace("adv-b").users.filter(u => /^q\d+@/.test(u.email)).length, 10);
  assert.ok(!JSON.stringify(readSpace("adv-a")).includes("@adv-b.example") && !JSON.stringify(readSpace("adv-b")).includes("@adv-a.example"));
  // The same business id, eight times at once: one wins.
  const sameId = await Promise.all(Array.from({ length: 8 }, (_, i) => call("POST", "/api/platform/businesses", { id: "race-id", name: "Race", adminName: "R", adminEmail: `r${i}@race-id.example` }, owner.cookie)));
  assert.equal(sameId.filter(r => r.status === 200).length, 1);
  // The same admin email under eight different ids at once: one wins, and the losers leave nothing behind (no directory entry, no record).
  const sameEmail = await Promise.all(Array.from({ length: 8 }, (_, i) => call("POST", "/api/platform/businesses", { id: `race-em-${i}`, name: "RaceE", adminName: "R", adminEmail: "same@race-em.example" }, owner.cookie)));
  assert.equal(sameEmail.filter(r => r.status === 200).length, 1);
  const directory = JSON.parse(fs.readFileSync(directoryFile, "utf8"));
  assert.deepEqual(Object.keys(directory.spaces).filter(id => !fs.existsSync(spaceFile(id))), [], "no directory entry without a record");
  assert.deepEqual(fs.readdirSync(dir).filter(f => /^db\.space-.*\.json$/.test(f)).map(f => f.slice(9, -5)).filter(id => !Object.hasOwn(directory.spaces, id)), [], "no record without a directory entry");
  // Three erases of one closed business at once: one does it, the others find nothing.
  await call("POST", "/api/platform/businesses/close", { id: "race-id" }, owner.cookie);
  const erases = await Promise.all([1, 2, 3].map(() => call("POST", "/api/platform/businesses/erase", { id: "race-id", confirm: "race-id" }, owner.cookie)));
  assert.deepEqual(erases.map(r => r.status).sort(), [200, 404, 404]);
});

test("a manager sending privilege fields to every route gains nothing, and nothing reaches the other business", async () => {
  const added = await call("POST", "/api/team/users", { name: "Mgr", email: "mgr@adv-a.example" }, A.cookie);
  assert.equal(added.status, 200);
  assert.equal((await call("POST", "/api/admin/business-manager", { email: "mgr@adv-a.example", enabled: true }, A.cookie)).status, 200);
  const mgr = await login("mgr@adv-a.example", added.json.created.password);
  const src = fs.readFileSync(path.join(root, "server.js"), "utf8");
  const postRoutes = [...new Set([...src.matchAll(/url\.pathname === "(\/api\/[^"]+)" && req\.method === "POST"/g)].map(match => match[1]))].filter(route => !/logout|login|account\/erase|platform|auth\/password/.test(route));
  assert.ok(postRoutes.length > 200, `${postRoutes.length} routes`);
  const evil = { role: "Admin", businessManager: true, teamManagerId: "x", status: "active", permissions: { admin: true, platform: true }, isPlatformOwner: true, platform: true, name: "HackedName", space: "adv-b", spaceId: "adv-b" };
  for (const route of postRoutes) await call("POST", route, evil, mgr.cookie);
  const me = readSpace("adv-a").users.find(u => u.email === "mgr@adv-a.example");
  assert.equal(me.role, "Standard User");
  assert.equal(me.name, "Mgr");
  assert.ok(!me.isPlatformOwner);
  const state = (await call("GET", "/api/state", null, mgr.cookie)).json;
  assert.equal(state.permissions.platform, false);
  assert.equal(state.permissions.admin, false);
  assert.ok(!JSON.stringify(readSpace("adv-b")).includes("HackedName"), "nothing reached the other business");
  // And a header or a query that names another business changes nothing.
  const spoofed = await call("GET", "/api/team/users?space=adv-a&business=adv-a", null, B.cookie, { "x-space": "adv-a", "x-business": "adv-a", "x-forwarded-host": "adv-a.example" });
  assert.equal(spoofed.status, 200);
  assert.ok(!spoofed.text.includes("@adv-a.example"));
});

test("one business's export cannot be downloaded by another, by the platform owner, or by anyone signed out", async () => {
  const exported = await call("POST", "/api/account/export", { confirmed: true }, A.cookie);
  const file = exported.json?.downloadPath;
  assert.match(file || "", /^\/exports\//);
  assert.equal((await call("GET", file, null, A.cookie)).status, 200);
  for (const [who, cookie] of [["another business", B.cookie], ["the platform owner", owner.cookie], ["nobody", ""]]) assert.notEqual((await call("GET", file, null, cookie)).status, 200, who);
});

test("an uploaded file can be opened by the person who uploaded it and by an Admin of the SAME business only", async () => {
  const png = Buffer.concat([Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]), Buffer.alloc(64, 1)]);
  const form = new FormData();
  form.append("file", new Blob([png], { type: "image/png" }), "probe.png");
  const uploaded = await fetch(`${base}/api/nexus/upload`, { method: "POST", headers: { cookie: A.cookie, "x-forwarded-for": "10.9.9.9" }, body: form });
  const body = await uploaded.json();
  assert.equal(uploaded.status, 200, JSON.stringify(body).slice(0, 200));
  const fileId = body.fileId || body.file?.fileId || body.upload?.fileId;
  assert.ok(fileId, JSON.stringify(body).slice(0, 200));
  const url = `/api/nexus/upload/file?fileId=${encodeURIComponent(fileId)}`;
  const raw = async cookie => (await fetch(`${base}${url}`, { headers: { ...(cookie ? { cookie } : {}), "x-forwarded-for": "10.9.9.8" } })).status;
  assert.equal(await raw(A.cookie), 200, "the uploader");
  assert.equal(await raw(B.cookie), 403, "another business's Admin");
  assert.equal(await raw(owner.cookie), 403, "the platform owner (an Admin in the default space)");
  assert.equal(await raw(""), 401, "nobody");
  // An Admin of the same business, who did not upload it, can.
  const second = await call("POST", "/api/admin/admin-user", { email: "second-admin@adv-a.example", name: "Second Admin", password: "Second-Admin-2026!" }, A.cookie);
  assert.equal(second.status, 200, second.text.slice(0, 160));
  const secondAdmin = await login("second-admin@adv-a.example", "Second-Admin-2026!");
  assert.equal(await raw(secondAdmin.cookie), 200, "an Admin of the same business");
});

test("upload access rule: files from before businesses existed belong to the default space", () => {
  const uploads = require("../../server/uploads.js");
  const legacy = { uploadedBy: "u1" };
  assert.equal(uploads.canAccessUpload(legacy, { id: "x", role: "Admin" }, "default"), true);
  assert.equal(uploads.canAccessUpload(legacy, { id: "x", role: "Admin" }, "adv-a"), false);
  assert.equal(uploads.canAccessUpload({ uploadedBy: "u1", space: "adv-a" }, { id: "x", role: "Admin" }, "adv-a"), true);
  assert.equal(uploads.canAccessUpload({ uploadedBy: "u1", space: "adv-a" }, { id: "x", role: "Admin" }, "default"), false);
  assert.equal(uploads.canAccessUpload({ uploadedBy: "u1", space: "adv-a" }, { id: "u1", role: "Standard User" }, "adv-a"), true);
  assert.equal(uploads.canAccessUpload({ uploadedBy: "u1", space: "adv-a" }, { id: "u2", role: "Standard User" }, "adv-a"), false);
  assert.equal(uploads.canAccessUpload(null, { id: "u1" }), false);
});

test("a business with no sender of its own cannot send as the platform, through any send route", async () => {
  // The platform really does have a number, an email sender and accounts here, so a platform send ATTEMPTS the provider (and is refused by it for the made-up credentials). A business must not even attempt.
  const body = { confirmed: true, to: "+254712000001", message: "adversarial probe", channel: "sms", subject: "probe", text: "adversarial probe" };
  const platformTry = await call("POST", "/api/nexus/communications/send-message", body, owner.cookie);
  assert.equal(platformTry.json.configured, true, "the platform is set up to send");
  const businessTry = await call("POST", "/api/nexus/communications/send-message", body, A.cookie);
  assert.equal(businessTry.json.configured, false);
  assert.ok(businessTry.json.missingEnv.includes("TWILIO_PHONE_NUMBER"));
  assert.equal(businessTry.json.status, "sms-provider-unconfigured");
  assert.ok(!/Authentication Error/.test(businessTry.text), "the provider was never called with the platform's account");
  // The tool routes: a business gets the labelled local simulation (nothing leaves), the platform really attempts.
  for (const route of ["/api/nexus/tools/sms/send", "/api/nexus/tools/call/start", "/api/nexus/tools/communications/sms/send"]) {
    const asBusiness = await call("POST", route, body, A.cookie);
    assert.ok(/simulated/i.test(asBusiness.text) && !/Authentication Error/.test(asBusiness.text), `${route}: ${asBusiness.text.slice(0, 160)}`);
  }
  // Nothing in the answers names the platform's own number or sender.
  for (const route of ["/api/nexus/communications/send-message", "/api/nexus/tools/sms/send", "/api/nexus/tools/call/start", "/api/nexus/tools/whatsapp/send"]) {
    const text = (await call("POST", route, body, A.cookie)).text;
    assert.ok(!text.includes("+15550001111") && !text.includes("platform@kyro.example"), route);
  }
});

test("input nobody should send is refused cleanly, never with a crash", async () => {
  for (const [label, route, body, cookie] of [["broken JSON to sign-in", "/api/login", "{not json", ""], ["broken JSON to team add", "/api/team/users", "{{{", A.cookie], ["broken JSON to platform", "/api/platform/businesses", "[", owner.cookie]]) {
    const r = await call("POST", route, body, cookie);
    assert.equal(r.status, 400, label);
    assert.equal(r.json.error, "Invalid JSON");
  }
  for (const [route, cookie] of [["/api/platform/businesses/number", owner.cookie], ["/api/team/users", A.cookie], ["/api/admin/business-manager", A.cookie]]) {
    for (const body of ["null", "5", "\"text\"", "[1,2]"]) assert.ok((await call("POST", route, body, cookie)).status < 500, `${route} with ${body}`);
  }
  // A body far bigger than any real request: answered quickly, and the server is still there afterwards.
  const started = Date.now();
  const huge = await call("POST", "/api/login", { email: "a@b.co", password: "x".repeat(2 * 1024 * 1024) }, "");
  assert.ok(huge.status > 0 && Date.now() - started < 15000, `status ${huge.status}`);
  const hugePhone = await fetch(`${base}/api/voice/phone/incoming`, { method: "POST", headers: { "content-type": "application/x-www-form-urlencoded" }, body: `To=%2B1&X=${"y".repeat(2 * 1024 * 1024)}`, signal: AbortSignal.timeout(15000) });
  assert.ok(hugePhone.status > 0);
  assert.equal((await call("GET", "/api/healthz")).status, 200);
});

test("who can be added: plain emails only, clean names, safe business ids and numbers", async () => {
  for (const email of ["a@x", "a b@x.co", "a@@x.co", ".a@x.co", "a..b@x.co", "\"q\"@x.co", "a@x.co.", "a​@x.co", "ａ@x.co", `${"x".repeat(300)}@x.co`]) {
    assert.equal((await call("POST", "/api/team/users", { name: "Weird", email }, A.cookie)).status, 400, JSON.stringify(email).slice(0, 40));
  }
  const ok = await call("POST", "/api/team/users", { name: "  Mixed Case  ", email: "  Mixed.Case+tag@Adv-A.Example  " }, A.cookie);
  assert.equal(ok.status, 200);
  assert.equal(ok.json.team.find(u => u.email === "mixed.case+tag@adv-a.example")?.name, "Mixed Case", "emails are stored lower-case and trimmed");
  const nasty = await call("POST", "/api/team/users", { name: "ev‮il <img src=x onerror=alert(1)>​", email: "nasty@adv-a.example" }, A.cookie);
  assert.equal(nasty.json.team.find(u => u.email === "nasty@adv-a.example").name, "evil <img src=x onerror=alert(1)>", "invisible controls removed; markup is just text (every screen shows names as text)");
  for (const id of ["a", "-ab", "ab-", "x".repeat(41), "admin", "default", "platform", "constructor", "__proto__", "has.dot", "a/b", "../x", "%2e%2e"]) {
    assert.equal((await call("POST", "/api/platform/businesses", { id, name: "Id test", adminName: "I", adminEmail: `i${counter}@idtest.example` }, owner.cookie)).status, 400, id);
  }
  for (const number of ["+2547001234567890123", "+0", "+٢٥٤٧٠٠١٢٣", "254700123456", "banana"]) {
    assert.equal((await call("POST", "/api/platform/businesses/number", { id: "adv-b", number }, owner.cookie)).status, 400, number);
  }
  assert.equal((await call("POST", "/api/platform/businesses/number", { id: "adv-b", number: "+254 (700) 123-456" }, owner.cookie)).status, 200);
  assert.equal((await call("POST", "/api/platform/businesses/number", { id: "adv-a", number: " +254-700-123-456 " }, owner.cookie)).status, 409, "the same number written another way is the same number");
});

test("a damaged directory is told as 'not available', changes nothing, and reveals no file path", async () => {
  const good = fs.readFileSync(directoryFile, "utf8");
  try {
    fs.writeFileSync(directoryFile, good.slice(0, Math.floor(good.length / 2)));
    const create = await call("POST", "/api/platform/businesses", { id: "while-damaged", name: "W", adminName: "W", adminEmail: "w@while-damaged.example" }, owner.cookie);
    assert.equal(create.status, 503);
    assert.ok(!create.text.includes(dir) && !/ENOENT|EPERM|rename/.test(create.text), create.text);
    assert.equal(fs.readFileSync(directoryFile, "utf8"), good.slice(0, Math.floor(good.length / 2)), "the damaged file was not saved over");
    assert.ok(!fs.existsSync(spaceFile("while-damaged")), "and no record was left behind");
    // A person already signed in to a business is simply signed out (fails closed), never moved into another business.
    assert.equal((await call("GET", "/api/team/users", null, B.cookie)).status, 401);
  } finally { fs.writeFileSync(directoryFile, good); }
  assert.equal((await call("GET", "/api/team/users", null, B.cookie)).status, 200, "and back as it was once the file is whole");
});

test("many businesses: the platform list stays quick", async () => {
  // A creation can only fail here for a reason of its own, so say which one (the answer, not just "500 !== 200").
  for (let i = 0; i < 25; i += 1) {
    const made = await call("POST", "/api/platform/businesses", { id: `scale-${i}`, name: `Scale ${i}`, adminName: "S", adminEmail: `s${i}@scale.example` }, owner.cookie);
    assert.equal(made.status, 200, `create scale-${i}: ${made.text.slice(0, 160)}`);
  }
  // "Quick" means the work itself is quick (about 40 ms here), not that one request was never delayed: a busy machine can hold any single request for a few seconds (a scheduler pause, a virus scan).
  // So the list is asked for up to three times and the best answer counts; a list that is really slow is slow every time.
  const times = [];
  let list;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const started = Date.now();
    list = await call("GET", "/api/platform/businesses", null, owner.cookie);
    times.push(Date.now() - started);
    assert.equal(list.status, 200, list.text.slice(0, 160));
    if (times[attempt] < 3000) break;
  }
  assert.ok(list.json.businesses.length >= 25);
  assert.ok(Math.min(...times) < 3000, `list times (ms): ${times.join(", ")}`);
});

test("changes keep working while the platform list is read over and over (a file held open for a moment must not fail a change)", async () => {
  // On Windows a file cannot be replaced while someone has it open. The platform list opens every business's record and the directory, so a change made at the same moment used to
  // run out of tries after about one second and answer 500 or 503 ("could not be saved just now"). The same happens on a busy machine when a virus scan or the search indexer holds a file.
  let reading = true;
  const readers = Array.from({ length: 4 }, () => (async () => { while (reading) await call("GET", "/api/platform/businesses", null, owner.cookie); })());
  const failures = [];
  try {
    for (let i = 0; i < 12; i += 1) {
      const made = await call("POST", "/api/platform/businesses", { id: `held-${i}`, name: `Held ${i}`, adminName: "H", adminEmail: `h${i}@held.example` }, owner.cookie);
      if (made.status !== 200) failures.push(`held-${i}: ${made.status} ${made.text.slice(0, 100)}`);
    }
  } finally { reading = false; await Promise.all(readers); }
  assert.deepEqual(failures, [], "every creation made while the list was being read was saved");
  const directory = JSON.parse(fs.readFileSync(directoryFile, "utf8"));
  assert.deepEqual(Object.keys(directory.spaces).filter(id => !fs.existsSync(spaceFile(id))), [], "no directory entry without a record");
});
