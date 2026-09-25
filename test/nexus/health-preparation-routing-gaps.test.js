const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4522;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-health-preparation-routing-gaps-db.json");

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

async function callHealthTool(command, extra = {}) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    // confirmed: true by default -- these tests are about routing/extraction
    // correctness, not the (separately tested) confirmation gate itself.
    body: JSON.stringify({ name: "nexus_health_preparation", arguments: { command, confirmed: true, ...extra } })
  });
  return res.json();
}

test("a medication question without the word 'pharmacy' still reaches the real pharmacist question draft, not the generic fallback menu", async () => {
  const result = await callHealthTool("What should I know about storing insulin safely?");
  assert.equal(result.status, "health-preparation-ready");
  assert.ok(Array.isArray(result.pharmacyQuestions) && result.pharmacyQuestions.length > 0, "expected the real pharmacy question draft to fire");
  assert.match(result.response, /pharmacist/i);
});

test("'prepare questions for my clinic visit' reaches the real patient-support/health-literacy catalog, not the generic fallback menu", async () => {
  const result = await callHealthTool("I need help preparing questions for my next clinic visit.");
  assert.equal(result.status, "health-preparation-ready");
  assert.ok(Array.isArray(result.patientSupportResources) && result.patientSupportResources.length > 0, "expected the real patient-support catalog to fire");
  assert.ok(result.patientSupportResources.some(item => item.id === "ps-health-literacy"));
});

test("the existing narrow CHW/transportation phrasing still filters to just that resource, unaffected by the broader visit-prep gate", async () => {
  const result = await callHealthTool("I need a community health worker to follow up with me.");
  assert.equal(result.patientSupportResources.length, 1);
  assert.equal(result.patientSupportResources[0].id, "ps-chw");
});

test("a real 'pharmacy' phrasing still works exactly as before", async () => {
  const result = await callHealthTool("I have a pharmacy question about my medication.");
  assert.ok(Array.isArray(result.pharmacyQuestions) && result.pharmacyQuestions.length > 0);
});

test("an unrelated health question still falls through honestly instead of being swept into pharmacy or patient-support", async () => {
  const result = await callHealthTool("My blood pressure is 150 over 95.");
  assert.equal(result.status, "health-reading-saved");
  assert.equal(result.pharmacyQuestions, undefined);
  assert.equal(result.patientSupportResources, undefined);
});

// Found live: pharmacyBridge.search() genuinely searches real (OSM-backed,
// falling back to a local catalog) pharmacy locations, but "find a pharmacy
// near me" always got the static safe-questions draft instead, no matter
// how explicitly a real location search was asked for.
// "Nakuru" (not "Nairobi") deliberately, matching this suite's own existing
// convention (see location-extraction-routing-gaps.test.js's mobile-clinic
// test): it's a real local-catalog city here, so this test passes whether
// the live OSM lookup succeeds or a network failure falls back to the
// catalog -- CI runs with no outbound internet access at all, only loopback.
test("'find a pharmacy in Nakuru' reaches the real pharmacy location search, not the static question draft", async () => {
  const result = await callHealthTool("Find a pharmacy in Nakuru.");
  assert.ok(Array.isArray(result.pharmacyLocations) && result.pharmacyLocations.length > 0, "expected the real pharmacy location search to fire");
  assert.equal(result.pharmacyQuestions, undefined, "a location search must not also produce the unrelated question draft");
});

test("a plain safety question with no location intent still gets the question draft, not a location search", async () => {
  const result = await callHealthTool("What should I ask my pharmacist about drug interactions?");
  assert.ok(Array.isArray(result.pharmacyQuestions) && result.pharmacyQuestions.length > 0);
  assert.equal(result.pharmacyLocations, undefined);
});

// Found live: a real saved BP/glucose reading had no natural-language
// read-back path at all -- "what's my blood pressure trend?" fell through
// to the generic fallback despite the reading genuinely being saved moments
// earlier in the very same account.
test("a real saved chronic-care reading can be read back by asking for the trend/history", async () => {
  const saveResult = await callHealthTool("My blood pressure is 150 over 95.");
  assert.equal(saveResult.status, "health-reading-saved");
  const historyResult = await callHealthTool("What's my blood pressure trend?");
  assert.ok(Array.isArray(historyResult.chronicCareReadings) && historyResult.chronicCareReadings.length > 0, "expected the real saved reading to be read back");
  assert.match(historyResult.response, /150\/95|150\s*\/\s*95/, "the real saved value should appear in the response");
});
