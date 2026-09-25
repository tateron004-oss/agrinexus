"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4618;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-provider-readiness-response-db.json");

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

// Found live: this response was always the same fixed sentence ("Nexus
// checked provider readiness without exposing secrets. Review the missing
// environment variable names...") even though providerLanes already
// computes real, specific, per-provider readiness data -- a consumer that
// only reads the flattened `response` text never saw which providers were
// actually configured, only that a check happened.
test("provider readiness response names the real configured/unconfigured lanes, not just a generic confirmation", async () => {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_provider_readiness", arguments: { command: "check provider readiness" } })
  });
  const result = await res.json();
  assert.equal(result.status, "completed");
  const laneNames = Object.keys(result.providerReadiness || {});
  assert.ok(laneNames.length > 0, "expected at least one real provider lane");
  assert.match(result.response, /provider lane\(s\) are configured/i);
  // At least one real lane name from providerReadiness must appear in the
  // response text, proving the summary isn't just a generic sentence.
  assert.ok(laneNames.some(name => result.response.includes(name)), `expected one of [${laneNames.join(", ")}] to appear in: ${result.response}`);
});
