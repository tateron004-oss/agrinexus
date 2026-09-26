"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4622;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-knowledge-history-ownership-db.json");

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

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

async function login(email, password) {
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, password }) });
  return res.headers.get("set-cookie").split(";")[0];
}

// Found live (cross-user-IDOR audit): institutionalEvidenceReceipts carries
// the caller's own raw question (potentially sensitive free-text, e.g. a
// health question) and the AI's answer, but had no owner tag and no
// per-owner filtering at all -- any signed-in user could read every other
// user's receipts through /api/nexus/knowledge/history.
test("a user's knowledge-query receipt is not visible to a different signed-in user", async () => {
  const cookieA = await login("demo@agrinexus.org", "Prototype2026!");
  const cookieB = await login("user@agrinexus.org", "User2026!");
  const secretQuestion = `what should I do about my private symptom ${Date.now()}`;

  const queryRes = await fetch(`${base}/api/nexus/knowledge/query`, {
    method: "POST", headers: { "content-type": "application/json", cookie: cookieA },
    body: JSON.stringify({ question: secretQuestion })
  });
  const queryBody = await queryRes.json();
  assert.equal(queryRes.status, 200);
  assert.ok(queryBody.result?.institutionalEvidenceReceipt?.receiptId, "expected a real institutional evidence receipt to be created");

  const historyAsOwner = await (await fetch(`${base}/api/nexus/knowledge/history`, { headers: { cookie: cookieA } })).json();
  assert.ok(historyAsOwner.institutionalEvidenceReceipts.some(item => item.question === secretQuestion), "the owner must still see their own receipt");

  const historyAsOther = await (await fetch(`${base}/api/nexus/knowledge/history`, { headers: { cookie: cookieB } })).json();
  assert.ok(!historyAsOther.institutionalEvidenceReceipts.some(item => item.question === secretQuestion), "a different signed-in user must never see another user's question/answer receipt");
});
