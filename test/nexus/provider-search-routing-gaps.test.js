const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4529;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-provider-search-routing-gaps-db.json");

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

async function callHealthTool(command) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_health_preparation", arguments: { command } })
  });
  return res.json();
}

// The generic fallback and the real NPI-search "no match" response are both
// status "health-preparation-ready", so these tests distinguish them by the
// response text -- the fallback always says "I opened Health and Chronic
// Care"; a real (even zero-result) search attempt never does.
function reachedRealSearch(result) {
  return !/I opened Health and Chronic Care/i.test(result.response);
}

test("a trailing period no longer breaks provider search matching", async () => {
  const result = await callHealthTool("find a doctor.");
  assert.ok(reachedRealSearch(result), "a trailing period must not prevent the real provider search from firing");
});

test("'I need to find a doctor' (natural conversational prefix) reaches the real search", async () => {
  const result = await callHealthTool("I need to find a doctor");
  assert.ok(reachedRealSearch(result));
});

test("a specific specialty name right after 'find a' reaches the real search, with or without trailing punctuation", async () => {
  const withoutPeriod = await callHealthTool("find a cardiologist in Stockton");
  assert.ok(reachedRealSearch(withoutPeriod));
  const withPeriod = await callHealthTool("find a cardiologist in Stockton.");
  assert.ok(reachedRealSearch(withPeriod));
});

test("'find a doctor named X' still extracts the name correctly", async () => {
  const result = await callHealthTool("find a doctor named Ron");
  assert.ok(reachedRealSearch(result));
});

test("an unrelated health command is unaffected by the widened provider-search gate", async () => {
  const result = await callHealthTool("My blood pressure is 150 over 95.");
  assert.equal(result.status, "health-reading-saved");
});
