"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4537;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-exports-route-authentication-db.json");

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

async function login(email, password) {
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  return res.headers.get("set-cookie").split(";")[0];
}

let server;
let ownerCookie;
let otherCookie;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  ownerCookie = await login("admin@agrinexus.org", "Admin2026!");
  otherCookie = await login("user@agrinexus.org", "User2026!");
});

test.after(() => {
  server.kill();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
});

async function createExport(cookie) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({
      name: "nexus_document_export",
      arguments: { command: "Export this titled: Ownership Test as a txt document", confirmed: true }
    })
  });
  const body = await res.json();
  const downloadPath = body.documents?.[0]?.downloadPath;
  assert.ok(downloadPath, `export tool call did not report a downloadPath: ${JSON.stringify(body)}`);
  return downloadPath;
}

test("the exports route rejects an unauthenticated download of a real export", async () => {
  const downloadPath = await createExport(ownerCookie);
  const res = await fetch(`${base}${downloadPath}`);
  assert.equal(res.status, 401);
});

test("the exports route rejects a signed-in user who is not the export's owner", async () => {
  const downloadPath = await createExport(ownerCookie);
  const res = await fetch(`${base}${downloadPath}`, { headers: { cookie: otherCookie } });
  assert.equal(res.status, 403);
});

test("the exports route serves the real file to the authenticated owner", async () => {
  const downloadPath = await createExport(ownerCookie);
  const res = await fetch(`${base}${downloadPath}`, { headers: { cookie: ownerCookie } });
  assert.equal(res.status, 200);
  const text = await res.text();
  assert.match(text, /Ownership Test/);
});

test("the exports route still 404s a well-formed but nonexistent export id even when signed in", async () => {
  const res = await fetch(`${base}/exports/00000000-0000-0000-0000-000000000000.txt`, { headers: { cookie: ownerCookie } });
  assert.equal(res.status, 403, "an untracked id must be rejected as forbidden, not leaked as a 404 vs 403 oracle for real ids");
});

test("the exports route rejects a path-traversal-shaped filename before ever touching disk", async () => {
  const res = await fetch(`${base}/exports/..%2f..%2fserver.js`, { headers: { cookie: ownerCookie } });
  assert.equal(res.status, 404);
});
