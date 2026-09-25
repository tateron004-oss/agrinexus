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

test("a comma-formatted thousands number is parsed as one number, not split at the comma", async () => {
  const result = await callCalc("What is 1,000 plus 500?");
  assert.match(result.response, /1000 \+ 500 = 1500\b/);
});

test("a multi-comma large number is fully de-commafied", async () => {
  const result = await callCalc("What is 1,000,000 minus 250,000?");
  assert.match(result.response, /1000000 - 250000 = 750000\b/);
});

test("an unrelated number elsewhere in the same sentence does not block a real single operation, unaffected by the chain-detection fix", async () => {
  const result = await callCalc("Calculate 12 * 7 and summarize the numbers 3, 9, 12.");
  assert.equal(result.analysis?.calculation?.value, 84, "the chain guard must only look at text directly touching the matched expression, not the whole sentence");
});

test("a chained expression (word form) declines a confident partial answer instead of silently dropping the extra term", async () => {
  const result = await callCalc("What is 10 minus 3 minus 2?");
  assert.doesNotMatch(result.response, /10 - 3 = 7/);
  assert.match(result.response, /Sum: 15; average: 5/);
});

test("a chained expression (symbol form) also declines, unaffected by word-vs-symbol phrasing", async () => {
  const result = await callCalc("What is 10 - 3 - 2?");
  assert.doesNotMatch(result.response, /10 - 3 = 7/);
  assert.match(result.response, /Sum: 15; average: 5/);
});

// Found live: this tool's own success message and receipt used to describe
// two capabilities that don't exist anywhere in this codebase -- "a
// configured execution provider" and "a configured dataset reference" --
// even though the actual implementation only ever does single-operator
// arithmetic and a flat number extraction, with no table/CSV parsing and no
// code analysis or execution of any kind.
test("a request with no numbers at all is honestly refused, without inventing a 'configured dataset reference' capability", async () => {
  const result = await callCalc("Please review this table and tell me if the totals check out.");
  assert.doesNotMatch(result.response, /configured dataset reference/i);
  assert.doesNotMatch(result.response, /configured execution provider/i);
  assert.match(result.response, /cannot parse tables or analyze code/i);
});
