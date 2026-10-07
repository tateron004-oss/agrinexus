"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const http = require("node:http");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (payment-callback gap, flagged 2026-09-28, scoped with the user 2026-10-01):
// initializeTradePaymentCheckout genuinely calls the real Paystack/Flutterwave checkout-initiation
// APIs and points their callback_url/redirect_url at /api/trade/payment-callback/paystack and
// /api/trade/payment-callback/flutterwave -- but no route handler existed for either path, anywhere.
// A real buyer completing a real payment had no way to ever have that reflected here. Per the user's
// explicit choice, these routes ONLY mark the matching checkout/order as paid; they never move money.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-trade-payment-callback-webhook-db.json");
const PAYSTACK_SECRET_KEY = "sk_test_fake_paystack_secret";
const FLUTTERWAVE_WEBHOOK_SECRET_HASH = "fake-flutterwave-verif-hash-secret";
const FLUTTERWAVE_SECRET_KEY = "FLWSECK_TEST-fake-flutterwave-secret";

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

// Stands in for Paystack's/Flutterwave's own "verify transaction" API, since the real provider
// APIs cannot be reached from this test. The GET callback routes call this instead of the real
// provider, via PAYSTACK_API_BASE_URL/FLUTTERWAVE_API_BASE_URL (the same override the production
// code reads, defaulting to the real provider when unset).
function startVerifyStub() {
  const responses = { paystack: new Map(), flutterwave: new Map() };
  const server = http.createServer((req, res) => {
    const paystackMatch = req.url.match(/^\/transaction\/verify\/(.+)$/);
    const flutterwaveMatch = req.url.match(/^\/v3\/transactions\/(.+)\/verify$/);
    let body;
    if (paystackMatch) {
      body = responses.paystack.get(decodeURIComponent(paystackMatch[1])) || { status: false, data: null };
    } else if (flutterwaveMatch) {
      body = responses.flutterwave.get(decodeURIComponent(flutterwaveMatch[1])) || { status: "error", data: null };
    } else {
      res.writeHead(404);
      return res.end();
    }
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(body));
  });
  return new Promise(resolve => {
    server.listen(0, "127.0.0.1", () => resolve({ server, port: server.address().port, responses }));
  });
}

let server;
let stub;
let cookie;

test.before(async () => {
  stub = await startVerifyStub();
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      AGRINEXUS_DB_PATH: tempDbPath,
      OPENAI_API_KEY: "",
      NEXUS_DISABLE_LOCAL_ENV_FILES: "true",
      PAYSTACK_SECRET_KEY,
      FLUTTERWAVE_SECRET_KEY,
      FLUTTERWAVE_WEBHOOK_SECRET_HASH,
      PAYSTACK_API_BASE_URL: `http://127.0.0.1:${stub.port}`,
      FLUTTERWAVE_API_BASE_URL: `http://127.0.0.1:${stub.port}`
    },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const loginRes = await fetch(`${base}/api/login`, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "demo@agrinexus.org", password: "Prototype2026!" })
  });
  assert.equal(loginRes.status, 200);
  cookie = loginRes.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  stub.server.close();
  fs.rmSync(tempDbPath, { force: true });
});

function readTempDb() {
  return JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
}

function seedCheckout({ provider, reference, orderId, grossAmount = 1000, currency = "USD", status = `${provider}-checkout-ready` }) {
  const db = readTempDb();
  db.profile = db.profile || {};
  db.profile.wallet = 0;
  db.profile.walletTransactions = [];
  db.profile.paymentCheckoutRecords = db.profile.paymentCheckoutRecords || [];
  db.profile.orders = db.profile.orders || [];
  if (orderId) {
    db.profile.orders.push({
      id: orderId, orderNumber: `AN-ORD-${orderId}`, productId: null, product: "Test crop lot",
      total: grossAmount, stage: "Delivered", stageIndex: 4, timeline: [], settled: false,
      createdAt: new Date().toISOString()
    });
  }
  db.profile.paymentCheckoutRecords.push({
    id: `checkout_${reference}`, checkoutNumber: `AN-CHECKOUT-${reference}`, provider,
    status, orderId: orderId || null, orderNumber: orderId ? `AN-ORD-${orderId}` : null,
    grossAmount, currency, reference, checkoutUrl: null, createdAt: new Date().toISOString()
  });
  fs.writeFileSync(tempDbPath, JSON.stringify(db));
}

function findCheckout(reference) {
  return (readTempDb().profile.paymentCheckoutRecords || []).find(item => item.reference === reference);
}

function findOrder(orderId) {
  return (readTempDb().profile.orders || []).find(item => item.id === orderId);
}

function paystackWebhookBody(reference, { status = "success", amount = 100000, currency = "USD" } = {}) {
  return JSON.stringify({ event: "charge.success", data: { reference, status, amount, currency, id: 9001 } });
}

function paystackSignature(rawBody) {
  return crypto.createHmac("sha512", PAYSTACK_SECRET_KEY).update(rawBody).digest("hex");
}

async function postPaystackWebhook(rawBody, { signature } = {}) {
  const res = await fetch(`${base}/api/trade/payment-callback/paystack`, {
    method: "POST",
    headers: { "content-type": "application/json", "x-paystack-signature": signature ?? paystackSignature(rawBody) },
    body: rawBody
  });
  return { status: res.status, body: await res.json() };
}

async function postFlutterwaveWebhook(payload, { verifHash } = {}) {
  const res = await fetch(`${base}/api/trade/payment-callback/flutterwave`, {
    method: "POST",
    headers: { "content-type": "application/json", "verif-hash": verifHash ?? FLUTTERWAVE_WEBHOOK_SECRET_HASH },
    body: JSON.stringify(payload)
  });
  return { status: res.status, body: await res.json() };
}

test("a signed, successful Paystack webhook marks the checkout and order paid, without crediting the wallet", async () => {
  seedCheckout({ provider: "paystack", reference: "ANPAY-TEST-1", orderId: "ord_paystack_1", grossAmount: 1000, currency: "USD" });
  const rawBody = paystackWebhookBody("ANPAY-TEST-1", { amount: 100000 });
  const result = await postPaystackWebhook(rawBody);
  assert.equal(result.status, 200, JSON.stringify(result.body));

  const checkout = findCheckout("ANPAY-TEST-1");
  assert.equal(checkout.status, "paid");
  assert.ok(checkout.paidAt);
  const order = findOrder("ord_paystack_1");
  assert.equal(order.paid, true);
  assert.equal(order.paymentProvider, "paystack");
  assert.equal(readTempDb().profile.wallet, 0, "a payment-callback webhook must never credit the real wallet -- it only marks the order as paid");
});

test("replaying the same successful Paystack webhook is idempotent, not reprocessed", async () => {
  seedCheckout({ provider: "paystack", reference: "ANPAY-TEST-2", orderId: "ord_paystack_2", grossAmount: 500, currency: "USD" });
  const rawBody = paystackWebhookBody("ANPAY-TEST-2", { amount: 50000 });
  const first = await postPaystackWebhook(rawBody);
  assert.equal(first.status, 200);
  const paidAtFirst = findCheckout("ANPAY-TEST-2").paidAt;

  const second = await postPaystackWebhook(rawBody);
  assert.equal(second.status, 200);
  const afterSecond = findCheckout("ANPAY-TEST-2");
  assert.equal(afterSecond.paidAt, paidAtFirst, "a replayed webhook for an already-paid checkout must not reprocess it");
  assert.equal(readTempDb().profile.wallet, 0);
});

test("a Paystack webhook with an invalid signature is refused and never marks anything paid", async () => {
  seedCheckout({ provider: "paystack", reference: "ANPAY-TEST-3", orderId: "ord_paystack_3", grossAmount: 500 });
  const rawBody = paystackWebhookBody("ANPAY-TEST-3");
  const result = await postPaystackWebhook(rawBody, { signature: "0".repeat(128) });
  assert.equal(result.status, 403, JSON.stringify(result.body));
  assert.equal(findCheckout("ANPAY-TEST-3").status, "paystack-checkout-ready");
  assert.equal(findOrder("ord_paystack_3").paid, undefined);
});

test("a signed Paystack webhook reporting a failed charge marks the checkout failed, not paid", async () => {
  seedCheckout({ provider: "paystack", reference: "ANPAY-TEST-4", orderId: "ord_paystack_4", grossAmount: 500 });
  const rawBody = paystackWebhookBody("ANPAY-TEST-4", { status: "failed" });
  const result = await postPaystackWebhook(rawBody);
  assert.equal(result.status, 200, JSON.stringify(result.body));
  assert.equal(findCheckout("ANPAY-TEST-4").status, "paystack-payment-not-completed");
  assert.equal(findOrder("ord_paystack_4").paid, undefined);
});

test("a signed Paystack webhook whose verified amount does not match the checkout is not marked paid", async () => {
  seedCheckout({ provider: "paystack", reference: "ANPAY-TEST-5", orderId: "ord_paystack_5", grossAmount: 1000, currency: "USD" });
  // the checkout expects $1000 (100000 cents); the webhook claims only $5 (500 cents) was paid
  const rawBody = paystackWebhookBody("ANPAY-TEST-5", { amount: 500 });
  const result = await postPaystackWebhook(rawBody);
  assert.equal(result.status, 200, JSON.stringify(result.body));
  assert.notEqual(findCheckout("ANPAY-TEST-5").status, "paid", "an amount mismatch between the signed webhook and the checkout must never be marked paid");
  assert.equal(findOrder("ord_paystack_5").paid, undefined);
});

test("a Paystack GET redirect re-verifies server-side instead of trusting the query string, and marks paid on a genuine success", async () => {
  seedCheckout({ provider: "paystack", reference: "ANPAY-TEST-6", orderId: "ord_paystack_6", grossAmount: 250, currency: "USD" });
  stub.responses.paystack.set("ANPAY-TEST-6", { status: true, data: { status: "success", amount: 25000, currency: "USD", reference: "ANPAY-TEST-6", id: 777 } });
  const res = await fetch(`${base}/api/trade/payment-callback/paystack?reference=ANPAY-TEST-6`);
  assert.equal(res.status, 200);
  const html = await res.text();
  assert.match(html, /Payment received/);
  assert.equal(findCheckout("ANPAY-TEST-6").status, "paid");
  assert.equal(findOrder("ord_paystack_6").paid, true);
});

test("a Paystack GET redirect with a reference the provider never confirms is not marked paid, regardless of the query string", async () => {
  seedCheckout({ provider: "paystack", reference: "ANPAY-TEST-7", orderId: "ord_paystack_7", grossAmount: 250 });
  // deliberately never populate stub.responses.paystack for this reference -- the stub's default
  // response is an unconfirmed transaction, simulating a forged or incomplete redirect.
  const res = await fetch(`${base}/api/trade/payment-callback/paystack?reference=ANPAY-TEST-7`);
  assert.equal(res.status, 200);
  const html = await res.text();
  assert.match(html, /not confirmed/);
  assert.notEqual(findCheckout("ANPAY-TEST-7").status, "paid");
  assert.equal(findOrder("ord_paystack_7").paid, undefined);
});

test("a signed, successful Flutterwave webhook (re-confirmed against the verify API) marks the checkout and order paid, without crediting the wallet", async () => {
  seedCheckout({ provider: "flutterwave", reference: "ANPAY-FLW-1", orderId: "ord_flw_1", grossAmount: 300, currency: "USD" });
  stub.responses.flutterwave.set("flw_txn_1", { status: "success", data: { status: "successful", amount: 300, currency: "USD", tx_ref: "ANPAY-FLW-1", id: "flw_txn_1" } });
  const result = await postFlutterwaveWebhook({ event: "charge.completed", data: { id: "flw_txn_1", tx_ref: "ANPAY-FLW-1", status: "successful", amount: 300, currency: "USD" } });
  assert.equal(result.status, 200, JSON.stringify(result.body));
  assert.equal(findCheckout("ANPAY-FLW-1").status, "paid");
  assert.equal(findOrder("ord_flw_1").paid, true);
  assert.equal(readTempDb().profile.wallet, 0);
});

test("a Flutterwave webhook with an invalid verif-hash is refused, even if the body looks successful", async () => {
  seedCheckout({ provider: "flutterwave", reference: "ANPAY-FLW-2", orderId: "ord_flw_2", grossAmount: 300 });
  stub.responses.flutterwave.set("flw_txn_2", { status: "success", data: { status: "successful", amount: 300, currency: "USD", tx_ref: "ANPAY-FLW-2", id: "flw_txn_2" } });
  const result = await postFlutterwaveWebhook(
    { event: "charge.completed", data: { id: "flw_txn_2", tx_ref: "ANPAY-FLW-2", status: "successful", amount: 300, currency: "USD" } },
    { verifHash: "wrong-hash" }
  );
  assert.equal(result.status, 403, JSON.stringify(result.body));
  assert.notEqual(findCheckout("ANPAY-FLW-2").status, "paid");
  assert.equal(findOrder("ord_flw_2").paid, undefined);
});

// Flutterwave's verif-hash is a constant shared secret, not an HMAC over the body (weaker than
// Paystack's scheme) -- so even a correctly-hashed webhook body must still be re-confirmed against
// Flutterwave's own verify-transaction API before anything is marked paid.
test("a correctly-signed Flutterwave webhook is not trusted on its own -- the verify API must also confirm it", async () => {
  seedCheckout({ provider: "flutterwave", reference: "ANPAY-FLW-3", orderId: "ord_flw_3", grossAmount: 300 });
  // deliberately never populate stub.responses.flutterwave for this transaction id
  const result = await postFlutterwaveWebhook({ event: "charge.completed", data: { id: "flw_txn_3", tx_ref: "ANPAY-FLW-3", status: "successful", amount: 300, currency: "USD" } });
  assert.equal(result.status, 200, JSON.stringify(result.body));
  assert.notEqual(findCheckout("ANPAY-FLW-3").status, "paid", "a webhook body claiming success must not be trusted without the provider's own verify API confirming it");
  assert.equal(findOrder("ord_flw_3").paid, undefined);
});

test("a Flutterwave GET redirect re-verifies server-side and marks paid on a genuine success", async () => {
  seedCheckout({ provider: "flutterwave", reference: "ANPAY-FLW-4", orderId: "ord_flw_4", grossAmount: 150, currency: "USD" });
  stub.responses.flutterwave.set("flw_txn_4", { status: "success", data: { status: "successful", amount: 150, currency: "USD", tx_ref: "ANPAY-FLW-4", id: "flw_txn_4" } });
  const res = await fetch(`${base}/api/trade/payment-callback/flutterwave?transaction_id=flw_txn_4&tx_ref=ANPAY-FLW-4&status=successful`);
  assert.equal(res.status, 200);
  const html = await res.text();
  assert.match(html, /Payment received/);
  assert.equal(findCheckout("ANPAY-FLW-4").status, "paid");
  assert.equal(findOrder("ord_flw_4").paid, true);
});
