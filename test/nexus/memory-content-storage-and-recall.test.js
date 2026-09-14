const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4550;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-memory-content-storage-and-recall-db.json");

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

async function callMemory(command, extra = {}) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_memory", arguments: { command, ...extra } })
  });
  return res.json();
}

test("a saved memory record actually stores its content in payload.value, not silently discarded", async () => {
  const created = await callMemory("Remember that my farm is in Kisumu.", { confirmed: true });
  assert.equal(created.status, "memory-created");
  assert.equal(created.memory.record.payload.value, "Remember that my farm is in Kisumu.");
});

test("recall with different wording than the original save still finds the real record", async () => {
  await callMemory("Remember that my truck is a red Toyota Hilux.", { confirmed: true });
  const result = await callMemory("What do you remember about my truck?");
  assert.equal(result.status, "completed");
  assert.match(result.response, /found 1 Nexus memory record/i);
});

test("recall by a single literal keyword the record actually contains still finds it", async () => {
  await callMemory("Remember that my cooperative is called Green Valley Farmers.", { confirmed: true });
  const result = await callMemory("Do you know anything about Green Valley?");
  assert.match(result.response, /found \d+ Nexus memory record/i);
});

test("a single unambiguous delete match is actually deleted, and confirmed gone from a later recall", async () => {
  await callMemory("Remember that my well pump needs servicing every spring.", { confirmed: true });
  const deleted = await callMemory("Forget what you know about my well pump.", { confirmed: true });
  assert.equal(deleted.status, "memory-deleted");

  const after = await callMemory("Do you know anything about my well pump?");
  assert.match(after.response, /did not find/i);
});

test("deleting something that was never saved is honestly reported as not found, not fabricated as a success", async () => {
  const result = await callMemory("Forget what you know about a topic that was never mentioned before.", { confirmed: true });
  assert.equal(result.status, "memory-review-prepared");
  assert.match(result.response, /did not find a matching/i);
});
