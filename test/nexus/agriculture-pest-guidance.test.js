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
  assert.match(result.response, /tell me which part of the plant is affected/i, "it asks for the detail it needs, in plain words");
  assert.doesNotMatch(result.response, /I opened Agriculture Help/i, "and does not announce a window");
  assert.match(result.response, /can't name a spray or a dose/i);
});

test("spots, rot or wilting get general guidance that names no spray, and sends the person to the extension officer with a photo", async () => {
  for (const text of ["My tomato leaves have yellow spots", "The leaves on my beans are wilting", "There is blight on my potatoes"]) {
    const result = await callAgriculture(text);
    assert.match(result.response, /can't say which from here/i, text);
    assert.match(result.response, /clear photo and show it to your local agricultural extension officer before spraying anything/i, text);
    assert.doesNotMatch(result.response, /I opened Agriculture Help|\bmg\b|\bml\b|per litre|mancozeb|copper|fungicide/i, text);
  }
});

test("pest guidance never names a specific pesticide or gives a dosage, and always defers to a local specialist", async () => {
  const result = await callAgriculture("My cassava leaves have holes and there are worms on them.");
  assert.match(result.response, /extension service|specialist/i);
  assert.doesNotMatch(result.response, /\bmg\/|\bml\/|\d+\s*(?:ml|mg|liters?)\b/i);
});
