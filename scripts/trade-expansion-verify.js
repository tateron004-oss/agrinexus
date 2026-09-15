// Manual local verification for the Phase 9 trade-order shadow-write
// (server.js's create_transaction/settle_transaction actions ->
// server/pg-trade.js). Not part of scripts/qa-suite.js: needs a real local
// Postgres with TRADE_STORE=postgres + DATABASE_URL configured (see .env),
// same reason the other Phase 9 expansion scripts are standalone.
// Run manually: node scripts/trade-expansion-verify.js
const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const { Pool } = require("pg");
const { loadEnvFile } = require("../foundation/src/runtime/env-file");

loadEnvFile();

const port = 4499;
const base = `http://localhost:${port}`;
const root = path.join(__dirname, "..");
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-trade-expansion-verify-db.json");

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
  const setCookie = res.headers.get("set-cookie");
  if (!res.ok) throw new Error(`login ${email} failed: ${res.status}`);
  return setCookie.split(";")[0];
}

async function call(route, { body, cookie } = {}) {
  const res = await fetch(`${base}${route}`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify(body || {})
  });
  const json = await res.json();
  return { status: res.status, json };
}

(async () => {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required -- set it the same way TRADE_STORE=postgres expects (see .env).");
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });

  fs.copyFileSync(dbPath, tempDbPath);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, NEXUS_PRESERVE_EMPTY_ENV: "1", PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, TRADE_STORE: "postgres", OPENAI_API_KEY: "" },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitFor(`${base}/api/healthz`);
    const userCookie = await login("user@agrinexus.org", "User2026!");

    const created = await call("/api/nexus/operations/action", {
      body: { action: "create_transaction", country: "egypt", amount: "500", currency: "USD" },
      cookie: userCookie
    });
    assert.equal(created.status, 200);
    const transactionId = created.json.nexusOperationsResult.record.transactionId;
    assert.ok(transactionId, "expected a real transaction id back");

    let orderRow = { rows: [] };
    for (let i = 0; i < 20 && orderRow.rows.length === 0; i += 1) {
      await wait(200);
      orderRow = await pool.query("select order_number, stage, country_id, total_amount from trade_orders where order_number = $1", [transactionId]);
    }
    assert.equal(orderRow.rows.length, 1, "a real transaction creation must shadow-write a real trade_orders row");
    assert.equal(orderRow.rows[0].stage, "draft");
    assert.ok(orderRow.rows[0].country_id, "egypt should map to a real seeded country id");
    console.log(`Verified real trade_orders row for "${transactionId}" (stage=draft)`);

    const withItem = await call("/api/nexus/operations/action", {
      body: { action: "add_transaction_item", transactionId, name: "Coffee lot", amount: 500 },
      cookie: userCookie
    });
    assert.equal(withItem.status, 200);

    const settled = await call("/api/nexus/operations/action", {
      body: { action: "settle_transaction", transactionId },
      cookie: userCookie
    });
    assert.equal(settled.status, 200);
    assert.equal(settled.json.nexusOperationsResult.record.status, "settled");

    let settledRow = { rows: [{ stage: "draft" }] };
    for (let i = 0; i < 20 && settledRow.rows[0].stage !== "settled"; i += 1) {
      await wait(200);
      settledRow = await pool.query("select stage, total_amount from trade_orders where order_number = $1", [transactionId]);
    }
    assert.equal(settledRow.rows[0].stage, "settled", "settling the transaction must update the SAME real trade_orders row, not create a second one");
    assert.equal(Number(settledRow.rows[0].total_amount), 500);
    const countCheck = await pool.query("select count(*)::int as count from trade_orders where order_number = $1", [transactionId]);
    assert.equal(countCheck.rows[0].count, 1, "create+settle on the same transaction must upsert one row, not two");
    console.log("Verified settlement updates the same real trade_orders row (stage=settled, total_amount=500)");

    await pool.query("delete from trade_orders where order_number = $1", [transactionId]);
    console.log("Trade expansion verification passed");
  } finally {
    server.kill();
    await pool.end();
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  }
})().catch(async error => {
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  console.error(error.stack || error.message);
  process.exit(1);
});
