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

// Found live: "delivery-confirm" unconditionally set order.stage to
// "Delivered" regardless of what stage the order was actually at -- a
// brand-new order (stage "Packed") could jump straight to "Delivered" with
// zero real "In transit"/"Quality check" progress, even though the same
// record's own "proof" field says a delivery photo/signature/receiver
// confirmation is required. That fabricated "Delivered" status then
// satisfies the settlement gate elsewhere in this same file, letting
// payment release fire right behind it.
test("delivery cannot be confirmed before the order has actually reached Quality check", async () => {
  const productsRes = await fetch(`${base}/api/state`, { headers: { cookie } });
  const product = (await productsRes.json()).products?.[0];
  const created = await post("/api/trade/order", { productId: product.id });
  const order = created.body.profile.orders[created.body.profile.orders.length - 1];
  assert.equal(order.stage, "Packed");

  const tooEarly = await post("/api/trade/logistics", { type: "delivery-confirm", orderId: order.id });
  assert.equal(tooEarly.status, 200);
  const stillPacked = tooEarly.body.profile.orders.find(item => item.id === order.id);
  assert.equal(stillPacked.stage, "Packed", "delivery must not be confirmed before Quality check");
  assert.match(tooEarly.body.tradeLogisticsResult.record.status, /refused/i);

  await post("/api/trade/advance", { orderId: order.id }); // Packed -> In transit
  await post("/api/trade/advance", { orderId: order.id }); // In transit -> Quality check
  const nowReady = await post("/api/trade/logistics", { type: "delivery-confirm", orderId: order.id });
  const delivered = nowReady.body.profile.orders.find(item => item.id === order.id);
  assert.equal(delivered.stage, "Delivered", "delivery confirmation must still succeed once the order has genuinely reached Quality check");
});

// Found live: hours and minutes used to be computed independently
// (floor(seconds/3600) and round((seconds%3600)/60)) -- rounding the
// minutes remainder up to 60 never carried into the hour, printing "60m"
// for a 59m59s route instead of "1h", or "1h 60m" instead of "2h" for a
// 1h59m59s route. server.js has no module exports (it starts a real HTTP
// listener at load time), so this extracts the actual shipped function's
// source and evaluates it directly, rather than re-implementing the logic
// in the test and only proving the reimplementation is correct.
test("formatDurationHuman never prints a 60-minute remainder; a rollover always lands in the hour", () => {
  const source = fs.readFileSync(path.join(root, "server.js"), "utf8");
  const match = /function formatDurationHuman\(totalSeconds\) \{[\s\S]*?\n\}/.exec(source);
  assert.ok(match, "formatDurationHuman must exist in server.js");
  const body = match[0].replace(/^function formatDurationHuman\(totalSeconds\) \{/, "").replace(/\}$/, "");
  const formatDurationHuman = new Function("totalSeconds", body);
  assert.equal(formatDurationHuman(3599), "1h", "59m59s must round up into the hour, not read '60m'");
  assert.equal(formatDurationHuman(7199), "2h", "1h59m59s must round up into the next hour, not read '1h 60m'");
  assert.equal(formatDurationHuman(3600), "1h");
  assert.equal(formatDurationHuman(90), "2m");
  assert.equal(formatDurationHuman(5400), "1h 30m");
});

// Found live (money-logic audit): Number("Infinity") is a finite-looking
// truthy value that is always >= 0 and never < anything, so it silently
// passed both the credit-type check and the balance-floor check, permanently
// corrupting the stored wallet balance to Infinity.
test("a non-finite wallet amount is refused, not silently credited", async () => {
  const before = await post("/api/trade/wallet", { amount: 1 });
  const balanceBefore = before.body.profile.wallet;

  const infinite = await post("/api/trade/wallet", { amount: "Infinity" });
  assert.equal(infinite.status, 400);
  assert.match(infinite.body.error, /finite/i);

  const after = await post("/api/trade/wallet", { amount: 0.01 });
  assert.ok(Number.isFinite(after.body.profile.wallet), "the wallet balance must not have been corrupted to Infinity");
  assert.ok(after.body.profile.wallet < balanceBefore + 1000, "the infinite request must not have been credited");
});

// Same Infinity-bypass shape in /api/trade/advanced's quote and release
// actions, which also feed straight into the wallet balance on release.
test("a non-finite quote price is refused, and a non-finite release amount is refused", async () => {
  const badQuote = await post("/api/trade/advanced", { type: "quote", price: "Infinity" });
  assert.equal(badQuote.status, 400);
  assert.match(badQuote.body.error, /finite/i);

  await post("/api/trade/advanced", { type: "quote", price: 650 });
  const badRelease = await post("/api/trade/advanced", { type: "release", amount: "Infinity" });
  assert.equal(badRelease.status, 400);
  assert.match(badRelease.body.error, /finite/i);
});

// Found live (trade sibling sweep): the Infinity guard above correctly accepts an explicit price/
// amount of 0 (0 is finite), but the value actually STORED still used `body.price || ...`/
// `body.amount || ...`, silently discarding the caller's real, explicitly-requested 0 and substituting
// a fallback (the product's real price, or 650) instead.
test("an explicit quote price of 0 is honored, not silently replaced by the product's fallback price", async () => {
  const zeroQuote = await post("/api/trade/advanced", { type: "quote", price: 0 });
  assert.equal(zeroQuote.status, 200, JSON.stringify(zeroQuote.body));
  assert.equal(zeroQuote.body.tradeAdvancedResult.record.price, 0, "an explicit price of 0 must be stored as 0, not replaced by a fallback");
});

test("an explicit release amount of 0 is honored, not silently replaced by the quote/product's fallback amount", async () => {
  await post("/api/trade/advanced", { type: "quote", price: 777 });
  const before = await fetch(`${base}/api/state`, { headers: { cookie } });
  const walletBefore = (await before.json()).profile.wallet;

  const zeroRelease = await post("/api/trade/advanced", { type: "release", amount: 0 });
  assert.equal(zeroRelease.status, 200, JSON.stringify(zeroRelease.body));
  assert.equal(zeroRelease.body.tradeAdvancedResult.record.amount, 0, "an explicit release amount of 0 must be stored as 0, not replaced by a fallback");
  assert.equal(zeroRelease.body.profile.wallet, walletBefore, "a $0 release must not credit the wallet with the quote's real price instead");
});

// Found live (further follow-up sweep): unlike every sibling money-write path in this file, a
// non-finite/negative body.amount on /api/trade/logistics had no validation at all -- flowing
// straight into a persisted logistics record (and, for the "settlement" type, into the same real
// wallet-crediting path already fixed above).
test("a non-finite logistics amount is refused, not silently persisted into a corrupted record", async () => {
  const badLogistics = await post("/api/trade/logistics", { type: "logistics-quote", amount: "Infinity" });
  assert.equal(badLogistics.status, 400);
  assert.match(badLogistics.body.error, /finite/i);

  const negative = await post("/api/trade/logistics", { type: "logistics-quote", amount: -50 });
  assert.equal(negative.status, 400);
});

// Found live (same sweep): /api/health/mobile-clinic-revenue had the same missing-validation gap --
// a non-finite body.amount flowed straight into a persisted mobileClinicRevenueRecords entry shown
// in receipts and payout instructions.
test("a non-finite mobile-clinic-revenue amount is refused, not silently persisted", async () => {
  const badRevenue = await post("/api/health/mobile-clinic-revenue", { type: "clinic-payment-request", amount: "Infinity" });
  assert.equal(badRevenue.status, 400);
  assert.match(badRevenue.body.error, /finite/i);

  const negative = await post("/api/health/mobile-clinic-revenue", { type: "clinic-payment-request", amount: -100 });
  assert.equal(negative.status, 400);
});

// Found live (falsy-zero sweep, same route as above but a different bug): the
// finite/range guard just above explicitly allows and validates amount:0
// ("must be a finite number, zero or greater"), but the amount actually
// persisted a few lines later used `body.amount || fallback`, which treats an
// explicit 0 as falsy -- a legitimately free/waived/sponsored clinic visit
// was recorded and shown on the patient/provider receipt as a $1500 charge.
test("an explicit mobile-clinic-revenue amount of 0 (a waived/sponsored visit) is honored, not replaced with the $1500 default", async () => {
  const result = await post("/api/health/mobile-clinic-revenue", { type: "clinic-payment-request", amount: 0 });
  assert.equal(result.status, 200, JSON.stringify(result.body));
  const record = result.body.mobileClinicRevenueResult.record;
  assert.equal(record.amount, 0, "an explicit amount of 0 must be honored, not silently replaced with the $1500 default");
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

  await post("/api/trade/advance", { orderId: order.id }); // Packed -> In transit
  await post("/api/trade/advance", { orderId: order.id }); // In transit -> Quality check
  const confirmed = await post("/api/trade/logistics", { type: "delivery-confirm", orderId: order.id });
  assert.equal(confirmed.status, 200, JSON.stringify(confirmed.body));
  assert.equal(confirmed.body.profile.orders.find(item => item.id === order.id).stage, "Delivered", "delivery-confirm must have genuinely succeeded once the order reached Quality check");

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
  await post("/api/trade/advance", { orderId: order.id }); // Packed -> In transit
  await post("/api/trade/advance", { orderId: order.id }); // In transit -> Quality check
  await post("/api/trade/logistics", { type: "delivery-confirm", orderId: order.id });

  const first = await post("/api/trade/logistics", { type: "settlement", orderId: order.id });
  assert.equal(first.status, 200);
  const walletAfterFirst = first.body.profile.wallet;

  const second = await post("/api/trade/logistics", { type: "settlement", orderId: order.id });
  assert.equal(second.status, 409, "a repeat settlement of the same order must be refused");
  assert.match(second.body.error, /already been settled/i);
});

// Found live (drone/logistics follow-up audit): record.proof for the
// settlement type explicitly claims "payment release waits for delivery
// proof and buyer confirmation," but nothing enforced that -- a real
// spawned-server call with type:"settlement" credited the seller's wallet
// in full on a brand-new order that had never been advanced past its
// initial stage.
test("settling an order that has not been marked Delivered is refused, not silently paid out", async () => {
  const productsRes = await fetch(`${base}/api/state`, { headers: { cookie } });
  const product = (await productsRes.json()).products?.[0];
  const orderResult = await post("/api/trade/order", { productId: product.id, quantity: 2 });
  const order = orderResult.body.profile.orders[orderResult.body.profile.orders.length - 1];
  assert.notEqual(order.stage, "Delivered", "sanity check: a freshly created order must not already be Delivered");

  const settleResult = await post("/api/trade/logistics", { type: "settlement", orderId: order.id });
  assert.equal(settleResult.status, 409);
  assert.match(settleResult.body.error, /not been marked Delivered/i);
});

// Found live: order.stage and order.stageIndex are two independently
// -written fields for the same order -- createTradeLogisticsWorkflow's
// "delivery-confirm" sets order.stage="Delivered" directly without
// touching stageIndex, so a later, completely ordinary call to
// /api/trade/advance advanced the stale stageIndex and derived a stage
// from it, visibly regressing the order from "Delivered" back to
// "In transit". Reproduced live before the fix; both mutation sites are
// now guarded so "Delivered" is terminal regardless of which code path
// reached it.
test("an order marked Delivered via the logistics workflow cannot be regressed by /api/trade/advance or a later logistics call", async () => {
  const productsRes = await fetch(`${base}/api/state`, { headers: { cookie } });
  const product = (await productsRes.json()).products?.[0];
  const orderResult = await post("/api/trade/order", { productId: product.id, quantity: 4 });
  const order = orderResult.body.profile.orders[orderResult.body.profile.orders.length - 1];
  await post("/api/trade/advance", { orderId: order.id }); // Packed -> In transit
  await post("/api/trade/advance", { orderId: order.id }); // In transit -> Quality check
  await post("/api/trade/logistics", { type: "delivery-confirm", orderId: order.id });

  const advanceResult = await post("/api/trade/advance", { orderId: order.id });
  assert.equal(advanceResult.status, 409, "advancing an already-delivered order must be refused, not regress its stage");
  assert.match(advanceResult.body.error, /already been delivered/i);

  const regressAttempt = await post("/api/trade/logistics", { type: "shipping-booking", orderId: order.id });
  assert.equal(regressAttempt.status, 200);
  assert.equal(regressAttempt.body.tradeLogisticsResult.order.stage, "Delivered", "a later logistics call of a different type must not overwrite a terminal Delivered stage");
});
