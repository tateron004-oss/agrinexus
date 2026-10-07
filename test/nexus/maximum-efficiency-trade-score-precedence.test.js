"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-maximum-efficiency-trade-score-db.json");

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
  const seeded = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  seeded.profile = seeded.profile || {};
  // A real, specific stored trade-efficiency score that is neither of the two
  // hardcoded fallback values (72/58), so the bug (which discards the real
  // score entirely) is unambiguous.
  seeded.profile.tradeEfficiencyReviews = [{ id: "review-seed-1", score: 41, createdAt: new Date().toISOString() }];
  seeded.profile.orders = [];
  fs.writeFileSync(tempDbPath, JSON.stringify(seeded));
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

// Found live: `? :` binds looser than `||`, so
// `reviews[0]?.score || orders.length ? 72 : 58` parsed as
// `(reviews[0]?.score || orders.length) ? 72 : 58` -- the real stored review
// score was NEVER used as the output value at all. Whenever any review score
// (even a real one) or any order existed, tradeScore was hardcoded to 72;
// otherwise hardcoded to 58. This silently corrupted the "AgriTrade" entry in
// moduleScores, which feeds overallScore, bottlenecks, and the readiness
// status shown to the user/investor via /api/intelligence/maximum-efficiency.
test("the real stored trade-efficiency review score is used, not discarded for a hardcoded 72/58 placeholder", async () => {
  const res = await fetch(`${base}/api/intelligence/maximum-efficiency`, {
    method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ persist: false })
  });
  assert.equal(res.status, 200);
  const body = await res.json();
  const trade = body.maximumOperationalEfficiencyResult.moduleScores.find(item => item.module === "AgriTrade");
  assert.ok(trade, JSON.stringify(body.maximumOperationalEfficiencyResult));
  assert.equal(trade.score, 41, "the real stored review score must be used, not a hardcoded 72/58 placeholder");
});
