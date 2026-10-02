"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (CSRF/session/rate-limit audit): rateLimit()/authRateLimit() keyed every bucket on
// req.socket.remoteAddress -- the raw TCP peer of whatever connection this process itself accepted. The
// real production service (nexus-genesis-certified in render.yaml) is a Render web service behind
// Render's own edge proxy; the app never sees a client's real socket there, only a connection from
// Render's internal proxy, so remoteAddress is effectively constant for every real caller. Every
// per-caller budget collapsed into one shared, globally-exhaustible bucket -- most seriously on
// authRateLimit (login/password-reset, 10 attempts/5min): a single unauthenticated attacker could lock
// every real user out of logging in, repeatably, with negligible effort. AGRINEXUS_TRUST_PROXY (set true
// in render.yaml for the real deployment) opts into trusting the LAST hop of X-Forwarded-For -- the one
// the app's own single trusted proxy appended -- falling back to remoteAddress otherwise, so an
// untrusted header is never trusted by default (local dev, this test suite, or any future
// direct-exposure deployment).
const root = path.resolve(__dirname, "..", "..");
const dbPath = path.join(root, "db.json");

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

function login(base, email, password, forwardedFor) {
  const headers = { "content-type": "application/json" };
  if (forwardedFor) headers["x-forwarded-for"] = forwardedFor;
  return fetch(`${base}/api/login`, { method: "POST", headers, body: JSON.stringify({ email, password }) });
}

// Every attempt below uses a DISTINCT, never-repeated email, specifically so the separate, already-tested
// per-ACCOUNT budget (authRateLimitByAccount, 6 attempts/15min per email -- see
// test/nexus/login-account-rate-limit.test.js) never fires and cannot be confused with the per-IP layer
// under test here; each email is used exactly once, well under that budget's own threshold.
let emailCounter = 0;
const freshEmail = () => `zzproxy-keying-${Date.now()}-${++emailCounter}@example.com`;

test("with AGRINEXUS_TRUST_PROXY=true, two distinct X-Forwarded-For clients get independent rate-limit budgets, not one shared bucket", async () => {
  const port = 4741;
  const base = `http://localhost:${port}`;
  const tempDbPath = path.join(root, "tmp-rate-limit-trust-proxy-db.json");
  fs.copyFileSync(dbPath, tempDbPath);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", AGRINEXUS_TRUST_PROXY: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  try {
    await waitFor(`${base}/api/healthz`);
    // Exhaust the per-IP budget (10/5min) for one forwarded client, a distinct email each time.
    for (let i = 0; i < 10; i += 1) {
      const res = await login(base, freshEmail(), "wrong-password", "203.0.113.5");
      assert.notEqual(res.status, 429, `client A attempt ${i + 1} must not be rate-limited yet`);
    }
    const clientAEleventh = await login(base, freshEmail(), "wrong-password", "203.0.113.5");
    assert.equal(clientAEleventh.status, 429, "client A's own per-IP budget must be exhausted by its 11th attempt");

    // A DIFFERENT forwarded client, same real connection (same test process) -- must not inherit
    // client A's exhausted per-IP budget.
    const clientBFirst = await login(base, freshEmail(), "wrong-password", "198.51.100.9");
    assert.notEqual(clientBFirst.status, 429, "a different forwarded client must not be swept up in client A's per-IP block");
  } finally {
    server.kill();
    fs.rmSync(tempDbPath, { force: true });
  }
});

test("without AGRINEXUS_TRUST_PROXY, X-Forwarded-For is ignored -- the safe default for a deployment not known to sit behind a trusted proxy", async () => {
  const port = 4742;
  const base = `http://localhost:${port}`;
  const tempDbPath = path.join(root, "tmp-rate-limit-no-trust-proxy-db.json");
  fs.copyFileSync(dbPath, tempDbPath);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  try {
    await waitFor(`${base}/api/healthz`);
    for (let i = 0; i < 10; i += 1) {
      const res = await login(base, freshEmail(), "wrong-password", `203.0.113.${i}`);
      assert.notEqual(res.status, 429, `attempt ${i + 1} (with a different spoofed X-Forwarded-For each time) must not be rate-limited yet`);
    }
    const eleventh = await login(base, freshEmail(), "wrong-password", "203.0.113.99");
    assert.equal(eleventh.status, 429, "a spoofed, differing X-Forwarded-For on every request must not reset the per-IP budget when the header is untrusted -- all 11 requests share the real single test connection's own budget");
  } finally {
    server.kill();
    fs.rmSync(tempDbPath, { force: true });
  }
});
