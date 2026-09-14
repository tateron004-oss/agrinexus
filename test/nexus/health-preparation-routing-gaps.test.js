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

async function callHealthTool(command) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_health_preparation", arguments: { command } })
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
