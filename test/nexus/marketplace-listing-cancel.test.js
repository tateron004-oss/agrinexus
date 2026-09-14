const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4546;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-marketplace-listing-cancel-db.json");

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

test("a real listing can be canceled by title, and disappears from the real-listing count afterward", async () => {
  const created = await callMarketplace("List 50kg of maize seeds for sale.", { crop: "Maize seeds", quantity: "50kg", confirmed: true });
  assert.equal(created.status, "completed");

  const browsed = await callMarketplace("What is listed on AgriTrade?");
  assert.equal(browsed.data?.realListingCount ?? 1, 1);

  const canceled = await callMarketplace("Cancel my listing for maize seeds.", { confirmed: true });
  assert.equal(canceled.status, "completed");
  assert.match(canceled.response, /Removed the saved AgriTrade listing/i);

  const after = await callMarketplace("What is listed on AgriTrade?");
  assert.match(after.response, /no saved AgriTrade listings yet/i);
});

test("canceling without confirmation does not remove the listing", async () => {
  await callMarketplace("List 20 bags of fertilizer for sale.", { crop: "Fertilizer", confirmed: true });
  const attempt = await callMarketplace("Cancel my listing for fertilizer.");
  assert.notEqual(attempt.status, "completed");

  const after = await callMarketplace("What is listed on AgriTrade?");
  assert.doesNotMatch(after.response, /no saved AgriTrade listings yet/i, "the listing must still exist since cancellation was never confirmed");
});

test("canceling a listing that doesn't exist is honestly rejected, not fabricated as a success", async () => {
  const result = await callMarketplace("Cancel my listing for something that was never posted.", { confirmed: true });
  assert.equal(result.status, "blocked");
});

test("browsing and creating listings are unaffected by the new cancel branch", async () => {
  const browse = await callMarketplace("What is listed on AgriTrade?");
  assert.equal(browse.status, "completed");
  const create = await callMarketplace("List some tomatoes for sale.", { crop: "Tomatoes", confirmed: true });
  assert.equal(create.status, "completed");
});
