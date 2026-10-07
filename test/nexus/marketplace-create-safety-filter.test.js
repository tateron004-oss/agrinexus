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
const tempDbPath = path.join(root, "tmp-marketplace-create-safety-filter-db.json");

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

// Found live (marketplace/real-estate audit): natural-language listing
// creation ("list my X for sale...") used to call the legacy
// nexusRealProviders.marketplace.createListing, which has no content-safety
// check at all -- unlike marketplaceBridge's own createListing (the one
// exposed at the REST endpoint POST /api/nexus/tools/marketplace/listing),
// which blocks payment/health/credential content. Both read/write the same
// db.profile.marketplaceListings array and are echoed verbatim in future
// browse responses, so a listing created through voice/typed dispatch could
// carry sensitive content the identical request would be refused for via
// the REST endpoint.
test("a marketplace listing created via natural-language dispatch is refused when it contains sensitive content, matching the REST endpoint's own safety check", async () => {
  const result = await callMarketplace("List my maize seeds for sale, my bank account number is 1234567890.", { crop: "Maize seeds", confirmed: true });
  assert.equal(result.status, "blocked", "a listing carrying financial content must be blocked, not silently saved");
  assert.match(result.response, /payment, checkout, private financial, health, credential, or secret content/i);
});

test("a genuine, clean marketplace listing created via natural-language dispatch still succeeds, unaffected by the safety fix", async () => {
  const result = await callMarketplace("List my maize seeds for sale.", { crop: "Maize seeds", quantity: "20kg", confirmed: true });
  assert.equal(result.status, "completed");
  assert.match(result.response, /listing saved/i);
});
