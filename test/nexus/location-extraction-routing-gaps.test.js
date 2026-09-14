const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4533;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-location-extraction-routing-gaps-db.json");

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
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "" },
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
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
});

async function callTool(name, command) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name, arguments: { command } })
  });
  return res.json();
}

// These assert only on the extracted-location text, not on the comparison
// status, because the real weather lookup needs internet access that CI's
// deterministic-validation sandbox (loopback-only networking) deliberately
// doesn't have -- see the PR #350 test fix for the same lesson.
test("comparing weather between two named locations extracts each one correctly, not swallowing the second into the first", async () => {
  const result = await callTool("nexus_weather", "Compare weather in Lagos with Cairo");
  assert.doesNotMatch(result.response, /Lagos with Cairo/i, "the first location must not swallow the comparison clause");
});

test("a trailing period does not break the weather comparison's location extraction", async () => {
  const withPeriod = await callTool("nexus_weather", "Compare weather in Lagos with Cairo.");
  assert.doesNotMatch(withPeriod.response, /Lagos with Cairo/i);
  assert.doesNotMatch(withPeriod.response, /Cairo\.\s*\(/i, "a trailing period must not leak into the second location's name");
});

test("mobile clinic search behaves identically with or without a trailing period, instead of silently returning every catalog entry", async () => {
  const withoutPeriod = await callTool("nexus_health_preparation", "Find a mobile clinic in Nairobi");
  const withPeriod = await callTool("nexus_health_preparation", "Find a mobile clinic in Nairobi.");
  assert.equal(withoutPeriod.response, withPeriod.response, "trailing punctuation must not change which clinics are returned");
  // Neither should silently return the full catalog for a city that isn't in it.
  assert.doesNotMatch(withPeriod.response, /I found 4 mobile clinic/i);
});

test("mobile clinic search still finds a real catalog match by city, with or without a trailing period", async () => {
  const withoutPeriod = await callTool("nexus_health_preparation", "Find a mobile clinic in Kisumu");
  const withPeriod = await callTool("nexus_health_preparation", "Find a mobile clinic in Kisumu.");
  assert.match(withoutPeriod.response, /Kisumu/);
  assert.equal(withoutPeriod.response, withPeriod.response);
});
