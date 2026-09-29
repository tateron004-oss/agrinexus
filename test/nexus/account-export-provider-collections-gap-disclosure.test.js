"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (server-side provider sweep): db.profile.marketplaceListings
// (marketplaceBridgeProvider.createListing), offlineQueue
// (offlineSyncProvider.queueItem), droneMissionRequests
// (djiProvider.missionRequest), and nexusSavedProviders/nexusProviderNotes
// (providerContactBridgeProvider's saveProvider/saveProviderNote) all carry
// no owner field of any kind -- the same honest "no owner field exists" gap
// already disclosed for the pharmacy/chronic-disease/remote-monitoring
// records (see account-export-medical-support-gap-disclosure.test.js), but
// these five collections were never added to that disclosure list, so a real
// user who saved a marketplace listing, queued an offline item, requested a
// drone mission, or saved a provider contact/note, then erased their
// account, was told the erasure was complete with no caveat at all.
const root = path.resolve(__dirname, "..", "..");
const port = 4725;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-account-export-provider-collections-gap-db.json");

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

test.before(async () => {
  const seeded = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  seeded.profile.marketplaceListings = [{ id: "marketplace-listing-seed-1", title: "Maize seeds", category: "seeds", createdAt: new Date().toISOString() }];
  seeded.profile.offlineQueue = [{ id: "offline-seed-1", type: "note", content: "field visit reminder", status: "queued", createdAt: new Date().toISOString() }];
  fs.writeFileSync(tempDbPath, JSON.stringify(seeded));
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

test("account export honestly discloses that locally-saved marketplace listings, offline queue items, drone mission requests, and saved provider contacts/notes are not included, instead of implying completeness", async () => {
  const loginRes = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" }) });
  assert.equal(loginRes.status, 200);
  const cookie = loginRes.headers.get("set-cookie").split(";")[0];

  const exportRes = await fetch(`${base}/api/account/export`, { method: "POST", headers: { "content-type": "application/json", cookie } });
  const exportBody = await exportRes.json();
  assert.equal(exportRes.status, 200, JSON.stringify(exportBody));
  assert.ok(exportBody.knownGaps.some(gap => /marketplace listings|offline queue|drone mission|provider contacts/i.test(gap)),
    "the export must honestly disclose the unowned marketplace/offline-queue/drone/provider-contact records gap, not imply completeness");
});
