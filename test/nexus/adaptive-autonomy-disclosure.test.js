"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Confirmed by a follow-up audit of the "decorative dashboards" cleanup (mission-brain-disclosure.test.js,
// PR #418/#446): frontierNexusBrainModel/networkIntelligenceModel/ecosystemIntelligenceModel/
// executiveIntelligenceSuiteModel/autonomousOrchestrationModel all carry a "not real background-executing
// autonomy" disclosure that reaches the user -- but adaptiveAutonomyModel had none at all, even though its
// own `score` is exactly the same kind of local formula the others disclose. Unlike those five, this one's
// underlying signals/nudges/learning really are computed from real account activity (buildAdaptiveSignals
// reads db.profile directly), so it gets its own tailored notice rather than reusing the generic one.
const root = path.resolve(__dirname, "..", "..");
const port = 4604;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-adaptive-autonomy-disclosure-db.json");

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
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" })
  });
  cookie = res.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

test("adaptive autonomy status now carries the same real-vs-simulated disclosure the other legacy dashboards do", async () => {
  const res = await fetch(`${base}/api/adaptive-autonomy/status`, { headers: { cookie } });
  assert.equal(res.status, 200);
  const body = await res.json();
  assert.equal(body.isRealAutonomousExecution, false);
  assert.match(body.disclosureNotice, /local formula/);
  assert.match(body.disclosureNotice, /real account activity/, "tailored, not the generic five-dashboard boilerplate -- this one's signals really are real");
  assert.match(body.disclosureNotice, /until you approve anything external/);
});

test("frontier brain's plain-language summary and disclosure are still both present, just no longer concatenated into one string", async () => {
  const res = await fetch(`${base}/api/intelligence/frontier-brain`, { headers: { cookie } });
  assert.equal(res.status, 200);
  const body = await res.json();
  assert.equal(body.isRealAutonomousExecution, false);
  assert.match(body.disclosureNotice, /not Kyro's real background-executing autonomous task engine/);
  assert.ok(body.plainLanguageSummary && !body.plainLanguageSummary.includes(body.disclosureNotice),
    "the model's own plainLanguageSummary field must not have the disclosure baked into it -- that concatenation now happens (or doesn't) client-side");
});
