const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4531;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-calculator-natural-language-db.json");

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

async function callCalc(command) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_data_code_analysis", arguments: { command } })
  });
  return res.json();
}

test("natural-language division is actually computed, not reduced to a generic sum/average", async () => {
  const result = await callCalc("What is 15 divided by 3?");
  assert.match(result.response, /15 \/ 3 = 5\b/);
});

test("natural-language multiplication, addition, and subtraction all compute correctly", async () => {
  assert.match((await callCalc("What is 15 times 3?")).response, /15 \* 3 = 45\b/);
  assert.match((await callCalc("What is 20 minus 7?")).response, /20 - 7 = 13\b/);
  assert.match((await callCalc("What is 4 plus 6?")).response, /4 \+ 6 = 10\b/);
});

test("division by zero, reached only via natural language, gets an honest 'undefined' answer instead of a fabricated one or a generic sum", async () => {
  const result = await callCalc("What is 10 divided by 0?");
  assert.match(result.response, /division by zero is undefined/i);
  assert.doesNotMatch(result.response, /Sum:/i);
});

test("symbolic arithmetic (10/2) still works exactly as before", async () => {
  const result = await callCalc("10/2");
  assert.match(result.response, /10 \/ 2 = 5\b/);
});

test("a list of numbers with no binary operator still correctly falls back to sum/average, unaffected by the new word-operator normalization", async () => {
  const result = await callCalc("What is the average of 12, 18, and 24?");
  assert.match(result.response, /Sum: 54; average: 18/);
});
