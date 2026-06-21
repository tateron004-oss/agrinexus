const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.TELEHEALTH_DEMO_BOUNDARY_QA_PORT || 4521);
const base = `http://127.0.0.1:${port}`;
const sourceDb = path.join(root, "db.json");
const tempDb = path.join(root, "tmp-telehealth-demo-boundary-qa-db.json");
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

async function waitForServer() {
  for (let index = 0; index < 80; index += 1) {
    try {
      const response = await fetch(`${base}/api/healthz`);
      if (response.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("Telehealth demo boundary QA server did not become reachable");
}

async function request(pathname, options = {}) {
  const response = await fetch(`${base}${pathname}`, {
    method: options.method || "GET",
    headers: { "content-type": "application/json", cookie: options.cookie || "" },
    body: options.body ? JSON.stringify(options.body) : undefined
  });
  const setCookie = response.headers.get("set-cookie");
  const json = await response.json().catch(() => ({}));
  return { status: response.status, ok: response.ok, json, cookie: setCookie ? setCookie.split(";")[0] : options.cookie || "" };
}

async function login(email, password) {
  const response = await request("/api/login", { method: "POST", body: { email, password } });
  assert.equal(response.status, 200, `${email} should log in`);
  return response.cookie;
}

async function post(pathname, cookie, body, expectedStatus, message) {
  const response = await request(pathname, { method: "POST", cookie, body });
  assert.equal(response.status, expectedStatus, message);
  return response.json;
}

function assertDefaultProvenance(record, label) {
  assert.equal(record.demoRecord, true, `${label} should be marked as a demo/default record`);
  assert.equal(record.source, "default-workflow", `${label} should use default-workflow source`);
  assert(Array.isArray(record.defaultFields), `${label} should include defaultFields`);
  assert(record.defaultFields.length > 0, `${label} should list at least one default field`);
}

function assertSimulationProvenance(record, label) {
  assert.equal(record.simulation, true, `${label} should be marked as simulation`);
  assert.equal(record.demoRecord, true, `${label} should be marked as demoRecord`);
  assert.equal(record.source, "demo-simulation", `${label} should use demo-simulation source`);
  assert(Array.isArray(record.defaultFields), `${label} should include defaultFields`);
}

(async () => {
  fs.copyFileSync(sourceDb, tempDb);
  const tempData = JSON.parse(fs.readFileSync(tempDb, "utf8"));
  tempData.profile = tempData.profile || {};
  tempData.profile.healthIntakes = [];
  tempData.profile.videoSessions = [];
  fs.writeFileSync(tempDb, JSON.stringify(tempData, null, 2));
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDb },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitForServer();

    const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
    const investorCookie = await login("investor@agrinexus.org", "Investor2026!");

    const video = await post("/api/video/session", adminCookie, {
      type: "telehealth-video",
      module: "Healthcare"
    }, 200, "default healthcare video session should return 200");
    assertDefaultProvenance(video.videoSessionResult, "Default healthcare video session");
    assertDefaultProvenance(video.profile.healthIntakes[0], "Healthcare video fallback intake");

    const simulation = await post("/api/health/intake-simulation", adminCookie, {}, 200, "guided intake simulation should return 200");
    for (const [label, record] of Object.entries(simulation.intakeSimulationResult)) {
      assertSimulationProvenance(record, `Guided simulation ${label}`);
    }

    const defaultIntake = await post("/api/health/action", adminCookie, { type: "intake" }, 200, "default intake should return 200");
    assertDefaultProvenance(defaultIntake.profile.healthIntakes[0], "Default health intake");
    assert(defaultIntake.profile.healthIntakes[0].defaultFields.includes("patientName"), "Default intake should identify patientName as defaulted");

    const explicitIntake = await post("/api/health/action", adminCookie, {
      type: "intake",
      patientName: "Phase2D Explicit Patient",
      needSummary: "Phase2D explicit patient needs a provider callback for a unique concern",
      contactMethod: "Phase2D secure direct callback",
      caregiverName: "Phase2D Named Care Partner"
    }, 200, "explicit intake should return 200");
    assert.notEqual(explicitIntake.profile.healthIntakes[0].demoRecord, true, "Explicit non-default intake should not be marked demoRecord");

    const rural = await post("/api/health/rural-network", adminCookie, { type: "symptom-guide" }, 200, "default rural health workflow should return 200");
    assertDefaultProvenance(rural.ruralHealthResult.record, "Default rural health workflow");

    const advanced = await post("/api/health/advanced", adminCookie, { type: "appointment" }, 200, "default advanced health workflow should return 200");
    assertDefaultProvenance(advanced.healthAdvancedResult.record, "Default advanced health workflow");

    const investorState = await request("/api/state", { cookie: investorCookie });
    assert.equal(investorState.status, 200, "Investor state should load");
    const serializedInvestorProfile = JSON.stringify(investorState.json.profile || {});
    assert(serializedInvestorProfile.includes("demoRecord"), "Investor projection should preserve demoRecord markers");
    assert(serializedInvestorProfile.includes("defaultFields"), "Investor projection should preserve defaultFields markers");
    assert(serializedInvestorProfile.includes("source"), "Investor projection should preserve source markers");
    assert(!serializedInvestorProfile.includes("Phase2D Explicit Patient"), "Investor projection should redact explicit patient names");
    assert(!serializedInvestorProfile.includes("Phase2D secure direct callback"), "Investor projection should redact explicit contact details");

    console.log("Telehealth demo boundary QA passed");
  } finally {
    server.kill();
    await wait(250);
    if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  }
})().catch(error => {
  if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  console.error(error);
  process.exit(1);
});
