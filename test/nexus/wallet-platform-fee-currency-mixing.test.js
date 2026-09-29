"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// Found live: "Platform revenue"/"Revenue earned" summed platformTransactionFees' feeAmount across ALL
// currencies, then hardcoded a "$" prefix on the raw sum -- but a fee's currency is chosen per order at
// settlement time (server.js), not fixed per account, so one real profile can genuinely accumulate fees
// in KES, NGN, USD, CDF, and GHS side by side (the per-row fee ledger already displays each fee's own
// currency, proving the client already knows this). The same "sum mixed units under one mislabeled
// total" shape already fixed server-side for grants/listings/invoices, just on the client this time.
const appSource = fs.readFileSync(path.join(__dirname, "..", "..", "public", "app.js"), "utf8");

function extractFunction(name) {
  let start = appSource.indexOf(`function ${name}(`);
  assert.ok(start > 0, `could not locate function ${name} in app.js`);
  const parenStart = appSource.indexOf("(", start);
  let parenDepth = 0;
  let parenEnd = parenStart;
  for (; parenEnd < appSource.length; parenEnd += 1) {
    if (appSource[parenEnd] === "(") parenDepth += 1;
    else if (appSource[parenEnd] === ")") { parenDepth -= 1; if (parenDepth === 0) break; }
  }
  const bodyStart = appSource.indexOf("{", parenEnd);
  let depth = 0; let i = bodyStart;
  for (; i < appSource.length; i += 1) {
    if (appSource[i] === "{") depth += 1;
    else if (appSource[i] === "}") { depth -= 1; if (depth === 0) break; }
  }
  return appSource.slice(start, i + 1);
}

function loadFeeTotalDisplay() {
  const context = {};
  vm.createContext(context);
  vm.runInContext(`${extractFunction("moneyInCurrency")}\n${extractFunction("sumFeesByCurrency")}\n${extractFunction("feeTotalDisplay")}\nfeeTotalDisplay;`, context);
  return (fees, key) => vm.runInContext(`feeTotalDisplay(${JSON.stringify(fees)}, ${JSON.stringify(key)})`, context);
}

test("fees in different currencies are bucketed separately, not mixed under one mislabeled total", () => {
  const display = loadFeeTotalDisplay();
  const fees = [
    { currency: "USD", feeAmount: 50 },
    { currency: "KES", feeAmount: 5000000 },
    { currency: "USD", feeAmount: 10 }
  ];
  const result = display(fees, "feeAmount");
  // KES's larger raw number sorts first, same convention as the server-side currency-bucketing fixes.
  assert.match(result, /^KES 5,000,000/, result);
  assert.match(result, /not counting fees in USD/, result);
  assert.doesNotMatch(result, /\$/, "must never combine KES and USD into one dollar-labeled total");
});

test("a single-currency fee list still renders a plain total, unaffected by the fix", () => {
  const display = loadFeeTotalDisplay();
  const fees = [{ currency: "USD", feeAmount: 50 }, { currency: "USD", feeAmount: 25 }];
  assert.equal(display(fees, "feeAmount"), "$75");
});

test("a fee record with no currency field defaults cleanly to USD", () => {
  const display = loadFeeTotalDisplay();
  assert.equal(display([{ feeAmount: 100 }], "feeAmount"), "$100");
});
