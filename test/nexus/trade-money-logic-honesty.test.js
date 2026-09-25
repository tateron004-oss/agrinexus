"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4620;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-trade-money-logic-db.json");

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
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" }) });
  cookie = res.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

async function post(pathname, body = {}) {
  const res = await fetch(`${base}${pathname}`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify(body)
  });
  return { status: res.status, body: await res.json() };
}

// Found live (money-logic audit): nothing marked a trade quote as "already
// released" -- the same quote could be released an unlimited number of
// times (a double-click, a client retry, a replayed request), crediting the
// wallet again in full every time.
test("releasing the same escrow quote twice does not double-credit the wallet", async () => {
  await post("/api/trade/advanced", { type: "quote", price: 650 });
  const first = await post("/api/trade/advanced", { type: "release" });
  assert.equal(first.status, 200);
  const walletAfterFirst = first.body.profile.wallet;
  assert.ok(walletAfterFirst >= 650, "the first release must credit the wallet");

  const second = await post("/api/trade/advanced", { type: "release" });
  assert.equal(second.status, 409, "a repeat release of the same quote must be refused");
  assert.match(second.body.error, /already been released/i);
});

// Found live: order.total always assumed exactly 20 units regardless of
// what body.quantity actually said -- a real 5-unit order at $30/unit
// (expected total $150) silently produced $600 (30*20) instead.
test("a real order total reflects the actual requested quantity, not a hardcoded 20 units", async () => {
  const productsRes = await fetch(`${base}/api/state`, { headers: { cookie } });
  const state = await productsRes.json();
  const product = (state.products || [])[0];
  assert.ok(product, "expected at least one product in the catalog");

  const result = await post("/api/trade/order", { productId: product.id, quantity: 5 });
  assert.equal(result.status, 200);
  const createdOrder = result.body.profile.orders?.[result.body.profile.orders.length - 1];
  assert.ok(createdOrder, "expected a real created order");
  assert.equal(createdOrder.total, product.price * 5, `expected total for 5 units, got ${createdOrder.total}`);
});

// Found live: /api/trade/advance ignored body.orderId entirely and always
// advanced the LAST order -- a request explicitly targeting an earlier
// order silently advanced a different one instead.
test("advancing a specific order by id advances that order, not always the most recent one", async () => {
  const productsRes = await fetch(`${base}/api/state`, { headers: { cookie } });
  const product = (await productsRes.json()).products?.[0];
  const firstOrder = (order => order.profile.orders[order.profile.orders.length - 1])((await post("/api/trade/order", { productId: product.id })).body);
  await post("/api/trade/order", { productId: product.id }); // a second, more recent order

  const advanceResult = await post("/api/trade/advance", { orderId: firstOrder.id });
  assert.equal(advanceResult.status, 200);
  const updatedFirstOrder = advanceResult.body.profile.orders.find(order => order.id === firstOrder.id);
  // A new order already starts at "Packed" -- one advance call moves it on
  // to the next stage.
  assert.equal(updatedFirstOrder.stage, "In transit", "the explicitly-targeted order must be the one that advanced");
  const untouchedSecondOrder = advanceResult.body.profile.orders.find(order => order.id !== firstOrder.id && order.productId === firstOrder.productId && order.createdAt >= firstOrder.createdAt);
  assert.notEqual(untouchedSecondOrder?.stage, "In transit", "the second, more-recently-created order must NOT have been the one advanced");
});

// Found live: no balance floor existed anywhere in the wallet code -- a
// single debit request could push the wallet arbitrarily negative with a
// plain 200 response.
test("a wallet debit larger than the available balance is refused, not silently accepted", async () => {
  const credit = await post("/api/trade/wallet", { amount: 50 });
  assert.equal(credit.status, 200);
  const balanceAfterCredit = credit.body.profile.wallet;

  const overdraft = await post("/api/trade/wallet", { amount: -(balanceAfterCredit + 5000) });
  assert.equal(overdraft.status, 409);
  assert.match(overdraft.body.error, /insufficient/i);
});

test("a wallet debit within the available balance still works exactly as before", async () => {
  await post("/api/trade/wallet", { amount: 100 });
  const debit = await post("/api/trade/wallet", { amount: -30 });
  assert.equal(debit.status, 200);
});

// Found live (money-logic audit): settlement reused the same generic
// "amount" computed for every logistics record type (quote, booking,
// pickup, delivery...) -- a freight-cost ESTIMATE (12% of the order total),
// not the sale proceeds. A real $6,400 order settled for a seller payout of
// $748.80, roughly 88% of the real sale value never paid. This is a
// SEPARATE payment-release path from /api/trade/advanced's own "release"
// action (already fixed) -- that fix never reached this one.
test("settling an order pays the seller from the real order total, not a freight-cost estimate", async () => {
  const productsRes = await fetch(`${base}/api/state`, { headers: { cookie } });
  const product = (await productsRes.json()).products?.[0];
  assert.ok(product, "expected at least one product in the catalog");

  const orderResult = await post("/api/trade/order", { productId: product.id, quantity: 10 });
  assert.equal(orderResult.status, 200);
  const order = orderResult.body.profile.orders[orderResult.body.profile.orders.length - 1];
  assert.equal(order.total, product.price * 10, "sanity check on the real order total");

  const settleResult = await post("/api/trade/logistics", { type: "settlement", orderId: order.id });
  assert.equal(settleResult.status, 200, JSON.stringify(settleResult.body));
  const { record } = settleResult.body.tradeLogisticsResult;
  assert.equal(record.platformFee.grossAmount, order.total, "the settlement must use the real order total as the gross sale amount, not a freight-cost estimate");
  assert.ok(record.sellerNetAmount > order.total * 0.9, `expected the seller to receive close to the real order total minus the platform fee, got ${record.sellerNetAmount} for an order total of ${order.total}`);
});

test("settling the same order twice does not double-credit the wallet", async () => {
  const productsRes = await fetch(`${base}/api/state`, { headers: { cookie } });
  const product = (await productsRes.json()).products?.[0];
  const orderResult = await post("/api/trade/order", { productId: product.id, quantity: 3 });
  const order = orderResult.body.profile.orders[orderResult.body.profile.orders.length - 1];

  const first = await post("/api/trade/logistics", { type: "settlement", orderId: order.id });
  assert.equal(first.status, 200);
  const walletAfterFirst = first.body.profile.wallet;

  const second = await post("/api/trade/logistics", { type: "settlement", orderId: order.id });
  assert.equal(second.status, 409, "a repeat settlement of the same order must be refused");
  assert.match(second.body.error, /already been settled/i);
});
