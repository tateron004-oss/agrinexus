const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4525;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-weather-memory-routing-gaps-db.json");

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

test("a vague weather question with no real location asks for one instead of geocoding the whole sentence into a wrong place", async () => {
  const r1 = await callTool("nexus_weather", "Will it rain tomorrow?");
  assert.equal(r1.status, "missing-location");
  assert.match(r1.response, /which location/i);

  const r2 = await callTool("nexus_weather", "What is the weather like?");
  assert.equal(r2.status, "missing-location");
});

// These two assert only that the missing-location guard doesn't fire for a
// real location phrase -- not that the underlying weather lookup succeeds --
// because the actual weather API call depends on real internet access,
// which the deterministic CI sandbox (loopback-only networking, no route to
// the internet) deliberately does not have. weather-source-provider.test.js
// already covers the provider's own real-vs-mocked-fetch behavior in-process.
test("a bare one-word location follow-up is still treated as a real location, unaffected by the missing-location guard", async () => {
  const result = await callTool("nexus_weather", "Nairobi");
  assert.notEqual(result.status, "missing-location");
});

test("an explicit 'in <city>' phrase is still treated as a real location, unaffected by the missing-location guard", async () => {
  const result = await callTool("nexus_weather", "What is the weather like in Nairobi?");
  assert.notEqual(result.status, "missing-location");
});

test("a genuine memory recall question is searched, not treated as a save request needing confirmation", async () => {
  const result = await callTool("nexus_memory", "What do you remember about my farm?");
  assert.equal(result.status, "completed");
  assert.notEqual(result.status, "confirmation-required");
});

test("an imperative save request still correctly requires confirmation, unaffected by the recall-question fix", async () => {
  const result = await callTool("nexus_memory", "Remember that my farm is in Kisumu.");
  assert.equal(result.status, "confirmation-required");
});

test("a 'do you remember' recall question is also treated as search, not save", async () => {
  const result = await callTool("nexus_memory", "Do you remember what I told you about my phone?");
  assert.equal(result.status, "completed");
});

test("forget/delete phrasing is unaffected by the memory recall-question fix", async () => {
  const result = await callTool("nexus_memory", "Forget what I told you about my phone number.");
  assert.equal(result.status, "confirmation-required");
  assert.match(result.response, /remove or archive/i);
});
