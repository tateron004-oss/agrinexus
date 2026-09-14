const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4527;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-agriculture-pest-guidance-db.json");

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

async function callAgriculture(command) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_agriculture", arguments: { command } })
  });
  return res.json();
}

test("a textbook leaf-feeding-pest description (holes + caterpillars) gets real pest guidance, not the generic fallback menu", async () => {
  const result = await callAgriculture("I see small holes in my tomato leaves and some caterpillars.");
  assert.equal(result.status, "guidance-ready");
  assert.match(result.response, /leaf-feeding pest/i);
  assert.doesNotMatch(result.response, /I opened Agriculture Help/i);
});

test("mentioning caterpillars/larvae alone (no explicit 'holes') still reaches the real pest guidance", async () => {
  const result = await callAgriculture("There are caterpillars all over my beans.");
  assert.match(result.response, /leaf-feeding pest/i);
});

test("the existing yellow-lower-leaves guidance is unaffected by the new pest branch", async () => {
  const result = await callAgriculture("My maize has yellow lower leaves, what could be wrong?");
  assert.match(result.response, /nitrogen stress/i);
  assert.doesNotMatch(result.response, /leaf-feeding pest/i);
});

test("a genuinely vague question still falls through honestly to the generic prompt for more detail", async () => {
  const result = await callAgriculture("Something seems off with my beans.");
  assert.match(result.response, /I opened Agriculture Help/i);
});

test("pest guidance never names a specific pesticide or gives a dosage, and always defers to a local specialist", async () => {
  const result = await callAgriculture("My cassava leaves have holes and there are worms on them.");
  assert.match(result.response, /extension service|specialist/i);
  assert.doesNotMatch(result.response, /\bmg\/|\bml\/|\d+\s*(?:ml|mg|liters?)\b/i);
});
