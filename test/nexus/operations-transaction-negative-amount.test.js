"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live: add_transaction_item stored amount as a free-text field, only
// later parsed by settle_transaction's Number(item.amount) || 0 -- a
// non-numeric value already correctly falls back to a $0 contribution
// (honest, unchanged behavior), but a genuinely negative number passed
// straight through and silently drove the transaction's real, persisted,
// displayed settledAmount negative -- "Settled the transaction with a
// simulated payment of -4800 USD" makes no sense for a sale/purchase line
// item.
const root = path.resolve(__dirname, "..", "..");
const port = 4653;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-operations-transaction-negative-amount-db.json");

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

function cookieFrom(res) {
  const raw = typeof res.headers.getSetCookie === "function" ? res.headers.getSetCookie() : [res.headers.get("set-cookie")].filter(Boolean);
  return raw.map(part => part.split(";")[0]).join("; ");
}

async function login(email, password) {
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password }) });
  assert.equal(res.status, 200, `login for ${email} should succeed`);
  return cookieFrom(res);
}

async function opsAction(cookie, body) {
  const res = await fetch(`${base}/api/nexus/operations/action`, { method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify(body) });
  const responseBody = await res.json();
  return { status: res.status, json: responseBody.nexusOperationsResult || responseBody };
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

test("a negative transaction line-item amount never drives the settled total negative", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");

  const created = await opsAction(adminCookie, { action: "create_transaction" });
  assert.equal(created.json.ok, true);
  const transactionId = created.json.record.transactionId;

  await opsAction(adminCookie, { action: "add_transaction_item", transactionId, name: "Refund adjustment", amount: "-5000" });
  await opsAction(adminCookie, { action: "add_transaction_item", transactionId, name: "Maize sale", amount: "200" });

  const settled = await opsAction(adminCookie, { action: "settle_transaction", transactionId });
  assert.equal(settled.json.ok, true);
  assert.ok(settled.json.record.settledAmount >= 0, `settledAmount must never be negative, got ${settled.json.record.settledAmount}`);
  assert.equal(settled.json.record.settledAmount, 200, "the negative item must contribute 0, not -5000");
});
