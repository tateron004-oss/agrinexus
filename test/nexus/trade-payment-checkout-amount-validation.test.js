"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (wallet/payment-math audit): unlike every sibling money-write
// path in this file (/api/trade/wallet, and the quote/release actions on
// /api/trade/advanced, all guarded with Number.isFinite), POST
// /api/trade/payment-checkout had no validation on body.amount at all --
// initializeTradePaymentCheckout's `Number(body.amount || ...)` let a
// non-numeric string become NaN, a negative number stay negative, or the
// string "Infinity" become the real value Infinity, all flowing straight
// into the persisted checkout record's financial fields and, when a real
// Paystack/Flutterwave key is configured, into a live third-party
// payment-initialization API call.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-trade-payment-checkout-amount-validation-db.json");

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
let cookie;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const loginRes = await fetch(`${base}/api/login`, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" })
  });
  assert.equal(loginRes.status, 200);
  cookie = loginRes.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

async function post(body) {
  const res = await fetch(`${base}/api/trade/payment-checkout`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify(body) });
  return { status: res.status, body: await res.json() };
}

test("a non-numeric payment amount is rejected, not silently turned into a NaN-poisoned checkout", async () => {
  const result = await post({ amount: "not-a-number" });
  assert.equal(result.status, 400, JSON.stringify(result.body));
  assert.match(result.body.error, /finite number greater than zero/);
});

test("a negative payment amount is rejected", async () => {
  const result = await post({ amount: -500 });
  assert.equal(result.status, 400, JSON.stringify(result.body));
});

test("an infinite payment amount is rejected", async () => {
  const result = await post({ amount: "Infinity" });
  assert.equal(result.status, 400, JSON.stringify(result.body));
});

test("a zero payment amount is rejected", async () => {
  const result = await post({ amount: 0 });
  assert.equal(result.status, 400, JSON.stringify(result.body));
});

test("a genuinely valid payment amount still creates a real checkout, unaffected by the fix", async () => {
  const result = await post({ amount: 250 });
  assert.equal(result.status, 200, JSON.stringify(result.body));
  const checkout = result.body.tradePaymentCheckoutResult;
  assert.equal(checkout.grossAmount, 250);
  assert.ok(Number.isFinite(checkout.platformFeeAmount) && Number.isFinite(checkout.sellerNetAmount));
});

test("omitting the amount still works, falling back to the order/product default, unaffected by the fix", async () => {
  const result = await post({});
  assert.equal(result.status, 200, JSON.stringify(result.body));
  assert.ok(Number.isFinite(result.body.tradePaymentCheckoutResult.grossAmount));
});

// Found live (money-arithmetic follow-up audit): grossAmount was stored and used in the
// fee-split with no rounding to the currency's real precision, unlike the platformFeeAmount/
// sellerNetAmount fields computed right next to it (both already .toFixed(2)'d). A sub-cent
// amount like 99.999 flowed straight through to the persisted checkout record and to
// paymentSubunitAmount's live Paystack subunit conversion, producing a gross that didn't match
// what the buyer was actually charged after subunit rounding.
test("a payment amount with more precision than the currency supports is rounded before it enters the fee split", async () => {
  const result = await post({ amount: 99.999, currency: "USD" });
  assert.equal(result.status, 200, JSON.stringify(result.body));
  const checkout = result.body.tradePaymentCheckoutResult;
  assert.equal(checkout.grossAmount, 100);
  assert.equal(checkout.platformFeeAmount, Number((100 * checkout.feeRate).toFixed(2)));
  assert.equal(checkout.sellerNetAmount, Number((100 - checkout.platformFeeAmount).toFixed(2)));
});

test("a payment amount in a zero-decimal currency is rounded to a whole unit, not a fractional one", async () => {
  const result = await post({ amount: 1500.5, currency: "JPY" });
  assert.equal(result.status, 200, JSON.stringify(result.body));
  assert.equal(result.body.tradePaymentCheckoutResult.grossAmount, 1501);
});
