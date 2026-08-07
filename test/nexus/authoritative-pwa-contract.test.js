"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "../..");

test("authoritative PWA uses durable sync and truthful push registration", () => {
  const client = fs.readFileSync(path.join(root, "public/nexus-authoritative-pwa-runtime.js"), "utf8");
  const worker = fs.readFileSync(path.join(root, "public/sw.js"), "utf8");
  const index = fs.readFileSync(path.join(root, "public/index.html"), "utf8");
  assert.match(client, /indexedDB\.open/);
  assert.match(client, /\/api\/nexus\/runtime\/sync\/push/);
  assert.match(client, /pushSubscription: subscription\.toJSON/);
  assert.match(worker, /nexus-authoritative-sync/);
  assert.match(worker, /payload\.receiptId/);
  assert.match(index, /nexus-authoritative-pwa-runtime\.js/);
});
