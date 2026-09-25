"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// Found live (account-erasure/export audit): there was no real deletion or
// export of a user's actual data anywhere in the app. The one reachable
// "privacy" UI (Request export / Request delete review, in the Production
// prototype rails panel) only ever wrote a local no-op review record --
// db.profile (communicationThreads, orders, healthIntakes, buyerContacts,
// drone missions, etc.) was completely untouched, uploaded files could never
// be deleted by any code path, and the one REAL deletion pipeline
// (nexus/security/data-lifecycle-repository.js) only ever reaches the newer
// Postgres nexus_* tables, never this JSON blob. These tests exercise the
// real /api/account/export and /api/account/erase routes end to end against
// a live server, the same way the rest of this security-audit night's fixes
// have been verified.

const root = path.resolve(__dirname, "..", "..");
const port = 4571;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-account-erasure-test-db.json");
const tempUploadDir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-erasure-uploads-"));

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitFor(url) {
  for (let i = 0; i < 80; i += 1) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error(`${url} did not become reachable`);
}

let server;
let adminCookie;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "",
      NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_FILE_STORAGE_DIR: tempUploadDir,
      NEXUS_FILE_UPLOAD_ENABLED: "true"
    },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" })
  });
  adminCookie = res.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  fs.rmSync(tempUploadDir, { recursive: true, force: true });
});

async function post(pathname, body, cookie) {
  const res = await fetch(`${base}${pathname}`, {
    method: "POST",
    headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}) },
    body: JSON.stringify(body || {})
  });
  return { status: res.status, body: await res.json() };
}

async function createTestUser(email) {
  const created = await post("/api/admin/test-user", { email, password: "Erasure2026!", name: "Erasure Test" }, adminCookie);
  assert.equal(created.status, 200, JSON.stringify(created.body));
  const loginRes = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password: "Erasure2026!" })
  });
  assert.equal(loginRes.status, 200);
  return loginRes.headers.get("set-cookie").split(";")[0];
}

function readTempDb() {
  return JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
}

test("export and erase end-to-end: real owned records are exported and erased; shared/unowned records and other users' data are left alone; login is blocked afterward", async () => {
  const email = "erasure-subject@example.com";
  const cookie = await createTestUser(email);

  // Real owned records, via real REST routes (not the AI tool layer, so this
  // needs no OPENAI_API_KEY): a communication thread (createdBy = email,
  // cascades to communicationMessages by threadId) and a buyer contact
  // (requestedBy = email).
  const thread = await post("/api/communications/thread", { module: "AgriTrade", channel: "in-app chat", message: "hello buyer" }, cookie);
  assert.equal(thread.status, 200, JSON.stringify(thread.body));
  const threadId = thread.body.communicationThreadResult.thread.id;

  const contact = await post("/api/trade/buyer-contact", { note: "please call me" }, cookie);
  assert.equal(contact.status, 200, JSON.stringify(contact.body));

  const beforeDb = readTempDb();
  assert.ok(beforeDb.profile.communicationThreads.some(t => t.id === threadId && t.createdBy === email));
  assert.ok(beforeDb.profile.communicationMessages.some(m => m.threadId === threadId));
  assert.ok(beforeDb.profile.buyerContacts.some(c => c.requestedBy === email));
  const sharedHealthRecordCountBefore = (beforeDb.profile.healthIntakes || []).length;
  const ordersCountBefore = (beforeDb.profile.orders || []).length;
  const adminThreadCountBefore = beforeDb.profile.communicationThreads.filter(t => t.createdBy !== email).length;
  const userId = beforeDb.users.find(u => String(u.email || "").toLowerCase() === email).id;

  // A real uploaded file, via the real multipart upload route.
  const REAL_PNG_1X1 = Buffer.from(
    "89504e470d0a1a0a0000000d494844520000000100000001080200000090775" +
    "3de0000000c4944415478da6360000000020001e221bc330000000049454e44ae426082",
    "hex"
  );
  const boundary = "----erasuretestboundary";
  const multipart = Buffer.concat([
    Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="leaf.png"\r\nContent-Type: image/png\r\n\r\n`),
    REAL_PNG_1X1,
    Buffer.from(`\r\n--${boundary}--\r\n`)
  ]);
  const uploadRes = await fetch(`${base}/api/nexus/upload`, {
    method: "POST",
    headers: { "content-type": `multipart/form-data; boundary=${boundary}`, cookie },
    body: multipart
  });
  assert.equal(uploadRes.status, 200, JSON.stringify(await uploadRes.clone().json()));
  const uploadBody = await uploadRes.json();
  const fileId = uploadBody.fileId;
  assert.ok(fs.existsSync(path.join(tempUploadDir, fileId)), "the uploaded file must really be on disk before erasure");

  // --- Real export ---
  const exportResult = await post("/api/account/export", {}, cookie);
  assert.equal(exportResult.status, 200, JSON.stringify(exportResult.body));
  assert.equal(exportResult.body.recordCounts.communicationThreads, 1);
  assert.equal(exportResult.body.recordCounts.buyerContacts, 1);
  assert.equal(exportResult.body.uploadedFileCount, 1);
  assert.ok(exportResult.body.knownGaps.some(gap => /clinical|telehealth/i.test(gap)), "the export must honestly disclose the shared health-record gap, not imply completeness");
  assert.ok(exportResult.body.downloadPath.startsWith("/exports/"));
  const downloadRes = await fetch(`${base}${exportResult.body.downloadPath}`, { headers: { cookie } });
  assert.equal(downloadRes.status, 200, "the export file must actually be downloadable by its owner");
  const downloaded = await downloadRes.json();
  const exportedPayload = JSON.parse(downloaded.content);
  assert.equal(exportedPayload.account.email, email);
  assert.equal(exportedPayload.profileRecords.communicationThreads.length, 1);
  assert.equal(exportedPayload.uploadedFiles.length, 1);
  assert.equal(exportedPayload.uploadedFiles[0].fileId, fileId);

  // --- Erase without confirmation must be refused, not silently applied ---
  const unconfirmed = await post("/api/account/erase", {}, cookie);
  assert.equal(unconfirmed.status, 400);
  assert.equal(unconfirmed.body.status, "confirmation_required");
  const stillThereDb = readTempDb();
  assert.ok(stillThereDb.profile.communicationThreads.some(t => t.id === threadId), "an unconfirmed erase call must not have removed anything");

  // --- Real erase ---
  const erased = await post("/api/account/erase", { confirmed: true }, cookie);
  assert.equal(erased.status, 200, JSON.stringify(erased.body));
  assert.equal(erased.body.verification.profileRecordsRemoved.communicationThreads, 1);
  assert.equal(erased.body.verification.profileRecordsRemoved.communicationMessages, 2, "both the outbound and simulated inbound message must cascade-delete with their thread");
  assert.equal(erased.body.verification.profileRecordsRemoved.buyerContacts, 1);
  assert.equal(erased.body.verification.uploadedFilesRemoved, 1);
  assert.ok(erased.body.knownGaps.length > 0);

  const afterDb = readTempDb();
  assert.ok(!afterDb.profile.communicationThreads.some(t => t.id === threadId), "the owned thread must be gone");
  assert.ok(!afterDb.profile.communicationMessages.some(m => m.threadId === threadId), "messages belonging to the deleted thread must be gone too");
  assert.ok(!afterDb.profile.buyerContacts.some(c => c.requestedBy === email), "the owned buyer contact must be gone");
  assert.equal(afterDb.profile.communicationThreads.filter(t => t.createdBy !== email).length, adminThreadCountBefore, "other users' communication threads must be completely untouched");
  assert.equal((afterDb.profile.healthIntakes || []).length, sharedHealthRecordCountBefore, "shared/unowned health records must be left exactly alone -- there is no way to attribute them to one account");
  assert.equal((afterDb.profile.orders || []).length, ordersCountBefore, "shared/unowned orders must be left exactly alone");
  assert.ok(!fs.existsSync(path.join(tempUploadDir, fileId)), "the uploaded file must actually be deleted from disk");
  assert.ok(!fs.existsSync(path.join(tempUploadDir, `${fileId}.meta.json`)), "the upload's metadata sidecar must be deleted too");

  const erasedUser = afterDb.users.find(u => u.id === userId);
  assert.equal(erasedUser.status, "deleted");
  assert.notEqual(erasedUser.email, email, "the email must be scrambled so it can be reused by a new account");

  // --- Login must now be refused ---
  const loginAfter = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password: "Erasure2026!" })
  });
  assert.equal(loginAfter.status, 401);

  // --- The session that performed the erasure must itself be dead immediately ---
  const afterOwnSession = await post("/api/account/export", {}, cookie);
  assert.equal(afterOwnSession.status, 401, "the erasing session must be logged out as part of erasure, not just the password");
});

test("guest sessions get a clear refusal, not a silent no-op or a crash, from export/erase", async () => {
  const guestRes = await fetch(`${base}/api/auth/guest-session`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ name: "Guest Tester" })
  });
  assert.equal(guestRes.status, 201, JSON.stringify(await guestRes.clone().json()));
  const guestCookie = guestRes.headers.get("set-cookie").split(";")[0];

  const exportResult = await post("/api/account/export", {}, guestCookie);
  assert.equal(exportResult.status, 400);

  const eraseResult = await post("/api/account/erase", { confirmed: true }, guestCookie);
  assert.equal(eraseResult.status, 400);
});

test("export/erase require sign-in", async () => {
  const exportResult = await post("/api/account/export", {});
  assert.equal(exportResult.status, 401);
  const eraseResult = await post("/api/account/erase", { confirmed: true });
  assert.equal(eraseResult.status, 401);
});
