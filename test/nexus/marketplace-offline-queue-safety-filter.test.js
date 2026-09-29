"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (legal/consent/marketplace-safety audit): marketplaceBridgeProvider.js's
// createListing() scans the WHOLE normalized listing record against
// SENSITIVE_MARKETPLACE_PATTERN before saving it, but the sibling queueOffline()
// only scanned {title, category, description} -- location and quantity, both
// of which get persisted into the queued offline content, were completely
// unscanned. A bank account number or other sensitive content stuffed into
// location or quantity would be saved to the local offline queue untouched,
// even though identical content in title/category/description was already
// correctly blocked.
const root = path.resolve(__dirname, "..", "..");
const port = 4713;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-marketplace-offline-queue-safety-filter-db.json");

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
    body: JSON.stringify({ email: "demo@agrinexus.org", password: "Prototype2026!" })
  });
  assert.equal(loginRes.status, 200);
  cookie = loginRes.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

async function post(body) {
  const res = await fetch(`${base}/api/nexus/tools/marketplace/offline`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify(body) });
  return { status: res.status, body: await res.json() };
}

test("sensitive content in a listing's location field is blocked, not silently queued for offline sync", async () => {
  // "ssn" is deliberately used here rather than "bank"/"card"/"health" --
  // those also happen to trip offlineSyncProvider.js's own separate, more
  // generic BLOCKED_TYPES content filter, which would mask whether THIS
  // specific fix (the marketplace-safety field-coverage gap) is what's
  // actually doing the blocking.
  const result = await post({ confirmed: true, title: "Maize seeds", category: "Grain", location: "ssn 123-45-6789" });
  assert.equal(result.body.status, "blocked", JSON.stringify(result.body));
  assert.match(result.body.message, /payment, checkout, private financial, health, credential, or secret content/);
});

test("sensitive content in a listing's quantity field is blocked, not silently queued for offline sync", async () => {
  const result = await post({ confirmed: true, title: "Maize seeds", category: "Grain", quantity: "routing number 021000021" });
  assert.equal(result.body.status, "blocked", JSON.stringify(result.body));
});

test("an ordinary, non-sensitive listing is still queued normally, unaffected by the fix", async () => {
  const result = await post({ confirmed: true, title: "Maize seeds", category: "Grain", location: "Nairobi", quantity: "20 bags" });
  assert.equal(result.body.status, "completed", JSON.stringify(result.body));
});

// Found live (follow-up sweep): unlike createListing() (which always overrides source to a fixed
// string), queueOffline() passes body.source straight through normalizeListing() untouched -- and
// source is persisted into the queued content. It was the one field on this specific route where a
// caller could put arbitrary sensitive text straight into the offline queue.
test("sensitive content in a listing's source field is blocked, not silently queued for offline sync", async () => {
  const result = await post({ confirmed: true, title: "Maize seeds", category: "Grain", source: "ssn 123-45-6789" });
  assert.equal(result.body.status, "blocked", JSON.stringify(result.body));
});
