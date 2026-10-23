"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawn } = require("node:child_process");
const { freePortSync } = require("../helpers/free-port.js");

// 23 October 2026: files vanished after restarts and there were repeated 502 errors on Render, and only the owner could look. The running server now says, with no login, how long it has been up, how much memory it uses and whether the
// upload folder is on a separate mounted disk or on temporary container storage (which is lost at every restart and release). Nothing private is shown (no path).
const root = path.resolve(__dirname, "..", "..");
const port = freePortSync();
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-runtime-selfcheck-db.json");
const tempUploadDir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-runtime-uploads-"));
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
let server;
test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), tempDbPath);
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_FILE_STORAGE_DIR: tempUploadDir, NEXUS_FILE_UPLOAD_ENABLED: "true" }, stdio: "ignore" });
  for (let i = 0; i < 80; i += 1) { try { if ((await fetch(`${base}/api/healthz`)).ok) break; } catch { await wait(150); } }
});
test.after(() => { server.kill(); fs.rmSync(tempDbPath, { force: true }); fs.rmSync(tempUploadDir, { recursive: true, force: true }); });

test("anyone can read the uptime, the memory and where uploads are kept, and no folder path is shown", async () => {
  const res = await fetch(`${base}/api/runtime`);
  assert.equal(res.status, 200);
  const body = await res.json();
  assert.equal(body.ok, true);
  assert.ok(Number.isFinite(body.uptimeSeconds) && body.uptimeSeconds >= 0);
  assert.ok(body.memoryMb.rss > 0 && body.memoryMb.heapUsed > 0);
  assert.match(body.startedAt, /^\d{4}-\d\d-\d\dT/);
  assert.equal(body.uploads.writable, true, "the upload folder is writable");
  assert.ok(["separate-disk", "container-storage", "unknown"].includes(body.uploads.kind));
  assert.ok(body.uploads.meaning.length > 20);
  assert.doesNotMatch(JSON.stringify(body), new RegExp(tempUploadDir.replace(/[\^$.*+?()[\]{}|]/g, "\$&")), "no path is shown");
  const readiness = await (await fetch(`${base}/api/nexus/upload/readiness`)).json();
  assert.equal(readiness.storage.kind, body.uploads.kind);
  assert.equal(readiness.uploadEnabled, true);
});

test("saved documents, résumés and data exports are checked the same way, and the verdict names the setting to change", async () => {
  const body = await (await fetch(`${base}/api/runtime`)).json();
  assert.ok(["separate-disk", "container-storage", "unknown"].includes(body.exports.kind));
  assert.equal(body.exports.writable, true);
  assert.match(body.exports.meaning, /saved documents, résumés and data exports/i);
  if (body.exports.kind === "container-storage") assert.match(body.exports.meaning, /NEXUS_EXPORT_DIR/);
  assert.doesNotMatch(JSON.stringify(body), /output[\/]nexus-exports/, "no path is shown");
});
