const fs = require("node:fs");
const assert = require("node:assert/strict");
const provider = require("../server/providers/paymentReadinessBridgeProvider");

const server = fs.readFileSync("server.js", "utf8");
const app = fs.readFileSync("public/app.js", "utf8");

(() => {
  assert(server.includes("/api/nexus/tools/payments/readiness-check"));
  assert(server.includes("/api/nexus/tools/payments/stripe/payment-intent"));
  assert(app.includes("Marketplace Payment Readiness Bridge"));
  const status = provider.status({});
  assert.equal(status.checkoutUiEnabled, false);
  assert.equal(status.productionPaymentsEnabled, false);
  const readiness = provider.readinessCheck({ amount: 500, currency: "usd" }, {});
  assert.equal(readiness.body.data.moneyMovementAuthorized, false);
  const payment = provider.paymentIntent({ amount: 500, currency: "usd" }, {});
  assert.equal(payment.body.status, "disabled");
  console.log("PASS payment readiness bridge keeps payments sandbox-disabled by default");
})();
