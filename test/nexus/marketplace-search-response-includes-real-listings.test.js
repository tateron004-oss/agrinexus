"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4609;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-marketplace-search-response-db.json");

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

// Found live: marketplaceBridgeProvider.search() genuinely builds real
// listing cards (title, price, location), but the spoken/written response
// only ever carried the count-only summary ("Loaded N listing(s)...") --
// unlike its sibling tool handlers (provider search, mobile clinic, patient
// support), which all format real names into the response themselves. A
// real listing's actual title never reached the user.
test("browsing the marketplace for seeds names the real starter listing, not just a count", async () => {
  const result = await callMarketplace("Show me what is listed for sale for seeds.");
  assert.equal(result.status, "completed");
  assert.match(result.response, /Maize seed starter lot/, "the real listing title should appear in the response");
  assert.ok(Array.isArray(result.providerData?.cards) && result.providerData.cards.length > 0);
});
