"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (follow-up server-side provider sweep, same bug shape as the two
// blocks above it in knownUnownedProfileGaps): db.profile.nexusDroneMissionRequests
// (droneMissionBridgeProvider.requestRecord -- a DIFFERENT array than djiProvider's
// already-disclosed droneMissionRequests, easy to mistake for already covered),
// db.profile.nexusRpmIntakes/nexusRtmIntakes/nexusFitnessTrainingPlans/
// nexusSavedMobileClinics/nexusChronicDiseaseIntakes/nexusTelehealthBridgeIntakes/
// nexusTelehealthBridgeSessions (all via medicalBridgeUtils.saveRecord, same
// no-owner-field convention as their already-disclosed sibling arrays), and
// db.profile.nexusWorkflowPlans (a plain object literal, no owner field at all)
// were all missing from knownUnownedProfileGaps() -- a real user who used any of
// these features then erased their account was told erasure was complete with
// no caveat.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-account-export-second-provider-collections-gap-db.json");

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
  seeded.profile.nexusDroneMissionRequests = [{ id: "drone-bridge-request-seed-1", title: "North field review", createdAt: new Date().toISOString() }];
  seeded.profile.nexusWorkflowPlans = [{ id: "workflow-plan-seed-1", title: "Harvest coordination plan", createdAt: new Date().toISOString() }];
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

test("account export honestly discloses that drone-bridge mission requests and workflow plans (and their siblings) are not included, instead of implying completeness", async () => {
  const loginRes = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" }) });
  assert.equal(loginRes.status, 200);
  const cookie = loginRes.headers.get("set-cookie").split(";")[0];

  const exportRes = await fetch(`${base}/api/account/export`, { method: "POST", headers: { "content-type": "application/json", cookie } });
  const exportBody = await exportRes.json();
  assert.equal(exportRes.status, 200, JSON.stringify(exportBody));
  assert.ok(exportBody.knownGaps.some(gap => /drone-bridge mission requests|workflow plans/i.test(gap)),
    "the export must honestly disclose the unowned drone-bridge/workflow-plan records gap, not imply completeness");
});
