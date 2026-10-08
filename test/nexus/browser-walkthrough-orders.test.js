"use strict";
// Found in a real browser (Agritrade page): an order made by Nexus ("trade.market_review") stores productName, and the page printed
// "AN-ORD-AGENT-024 for undefined" and "undefined - Agent market review - ...".
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

test("the agent's order stores productName, so every page that prints an order's product must fall back to it", () => {
  assert.match(server, /orderNumber: `AN-ORD-AGENT-[^`]*`,\s*productId: product\.id,[\s\S]{0,400}?product: product\.name,\s*productName: product\.name,/);
  const bare = app.match(/\$\{(?:escapeHtml\()?(?:latestOrder|order)\.product\)?\}/g) || [];
  assert.deepEqual(bare, [], "an order's product is printed without the productName fallback");
  assert.match(app, /latestOrder\.orderNumber\} for \$\{latestOrder\.product \|\| latestOrder\.productName/);
  assert.match(app, /escapeHtml\(order\.product \|\| order\.productName \|\| "Crop"\)/);
});
