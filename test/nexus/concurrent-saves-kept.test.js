"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawn } = require("node:child_process");

// Found by a live check: 10 saves sent at the same moment kept only 5, because each request read the saved state, changed its own copy, and the last to save replaced the others'.
// A save that finds the stored state has changed since it was read is now merged with it (server/db-merge.js), so every one of them stays.

const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-concurrent-saves-test-db.json");
const tempUploadDir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-concurrent-saves-uploads-"));
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let cookie;

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), tempDbPath);
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_FILE_STORAGE_DIR: tempUploadDir }, stdio: "ignore" });
  for (let i = 0; i < 100; i += 1) { try { if ((await fetch(`${base}/api/healthz`)).ok) break; } catch { await wait(150); } }
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
  assert.equal(res.status, 200);
  cookie = res.headers.get("set-cookie").split(";")[0];
});
test.after(() => {
  server.kill();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  fs.rmSync(tempUploadDir, { recursive: true, force: true });
});

test("twelve saves sent at the same moment are all kept", async () => {
  const marker = `ZZCONCURRENT${crypto.randomUUID().slice(0, 6)}`;
  const results = await Promise.all(Array.from({ length: 12 }, (_, i) => fetch(`${base}/api/trade/buyer-contact`, {
    method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ note: `${marker}-${i}` })
  }).then(res => res.status)));
  assert.deepEqual([...new Set(results)], [200]);
  const state = await (await fetch(`${base}/api/state`, { headers: { cookie } })).text();
  const kept = Array.from({ length: 12 }, (_, i) => state.includes(`${marker}-${i}`));
  assert.deepEqual(kept.filter(Boolean).length, 12, `kept ${kept.filter(Boolean).length} of 12: ${kept.map((k, i) => (k ? "" : i)).filter(x => x !== "").join(",")} missing`);
});
