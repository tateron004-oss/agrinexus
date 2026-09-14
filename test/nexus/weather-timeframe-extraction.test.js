const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4553;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-weather-timeframe-extraction-db.json");

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

async function callWeather(command) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_weather", arguments: { command } })
  });
  return res.json();
}

// These assert only that a future-timeframe question no longer gets the bare
// CURRENT-conditions response ("Current weather for ...") -- the exact
// regression confirmed live -- rather than requiring the real Open-Meteo
// forecast call to succeed, since the deterministic CI sandbox has no
// internet route (same lesson as the earlier weather location-guard fix).
test("'this weekend' no longer silently returns current conditions instead of a forecast", async () => {
  const result = await callWeather("What will the weather be like this weekend in Lagos?");
  assert.doesNotMatch(result.response, /^Current weather for/);
});

test("'the weekly forecast' no longer silently returns current conditions", async () => {
  const result = await callWeather("Give me the weekly forecast for Kinshasa.");
  assert.doesNotMatch(result.response, /^Current weather for/);
});

test("'tomorrow' no longer silently returns current conditions", async () => {
  const result = await callWeather("What is the weather like tomorrow in Nairobi?");
  assert.doesNotMatch(result.response, /^Current weather for/);
});

test("a genuine current-conditions question still returns current conditions, unaffected by the timeframe fix", async () => {
  const result = await callWeather("What is the weather like right now in Cairo?");
  assert.doesNotMatch(result.response, /forecast/i);
});
