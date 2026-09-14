const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4548;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-marketplace-browse-vs-create-db.json");

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

async function callMarketplace(command, extra = {}) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_marketplace_logistics", arguments: { command, ...extra } })
  });
  return res.json();
}

test("'List what is available for maize seeds.' browses the catalog instead of being submitted as a new listing", async () => {
  const result = await callMarketplace("List what is available for maize seeds.");
  assert.equal(result.status, "completed");
  assert.match(result.response, /sample listing/i);
  assert.doesNotMatch(result.response, /listing saved/i);
});

test("'Show me what is listed for sale on AgriTrade.' also browses instead of creating", async () => {
  const result = await callMarketplace("Show me what is listed for sale on AgriTrade.");
  assert.equal(result.status, "completed");
  assert.match(result.response, /sample listing/i);
});

test("a genuine 'list my X for sale' request still creates a real listing, unaffected by the browse-phrasing fix", async () => {
  const result = await callMarketplace("List my maize seeds for sale.", { crop: "Maize seeds", quantity: "20kg", confirmed: true });
  assert.equal(result.status, "completed");
  assert.match(result.response, /listing saved/i);
});

test("'sell' as the create trigger is unaffected by the browse-phrasing fix", async () => {
  const result = await callMarketplace("Sell some tomatoes.", { crop: "Tomatoes", confirmed: true });
  assert.equal(result.status, "completed");
  assert.match(result.response, /listing saved/i);
});
