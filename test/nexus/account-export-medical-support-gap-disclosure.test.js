"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (telehealth/account-erasure audit, same sweep as
// telehealth-export-erasure.test.js): db.profile.nexusPharmacyIntakes and its
// siblings (nexusMedicalSupportIntakes, nexusChronicDiseaseReadings,
// nexusRpmDeviceReadings, nexusRtmActivityEntries, nexusMobileClinicIntakes,
// nexusPatientSupportIntakes, nexusSavedPharmacies -- all written via
// server/providers/medicalBridgeUtils.js's saveRecord) genuinely carry no
// owner field of any kind, the same honest "no owner field exists" gap as
// HEALTH_PROFILE_ARRAY_KEYS/orders -- but unlike those, it was never
// disclosed via knownUnownedProfileGaps, so a real user who submitted a
// pharmacist question or a chronic-disease/RPM/RTM reading and then erased
// their account was told the erasure was complete with no caveat at all.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-account-export-medical-support-gap-db.json");

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
  seeded.profile.nexusPharmacyIntakes = [{ id: "pharmacy-intake-seed-1", questionTopic: "medication safety question preparation", createdAt: new Date().toISOString() }];
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

test("account export honestly discloses that locally-saved pharmacy/medical-support preparation records are not included, instead of implying completeness", async () => {
  const loginRes = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" }) });
  assert.equal(loginRes.status, 200);
  const cookie = loginRes.headers.get("set-cookie").split(";")[0];

  const exportRes = await fetch(`${base}/api/account/export`, { method: "POST", headers: { "content-type": "application/json", cookie } });
  const exportBody = await exportRes.json();
  assert.equal(exportRes.status, 200, JSON.stringify(exportBody));
  // Records saved through the medical bridge providers now carry their owner and are exported/erased with their person; this record was
  // seeded WITHOUT one (as every record saved before ownership was recorded), so it still cannot be attributed and must still be disclosed.
  assert.ok(exportBody.knownGaps.some(gap => /saved before per-account ownership was recorded/i.test(gap)),
    "the export must honestly disclose records it cannot attribute to an account, not imply completeness");
});
