const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.TELEHEALTH_ENCOUNTER_LIFECYCLE_QA_PORT || 4522);
const base = `http://127.0.0.1:${port}`;
const sourceDb = path.join(root, "db.json");
const tempDb = path.join(root, "tmp-telehealth-encounter-lifecycle-qa-db.json");
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
  throw new Error("Telehealth encounter lifecycle QA server did not become reachable");
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

function encounterById(profile, encounterId) {
  return (profile.telehealthEncounters || []).find(encounter => encounter.encounterId === encounterId);
}

function latestRecord(profile, key) {
  return (profile[key] || [])[0];
}

function assertEncounterLink(record, encounterId, label) {
  assert(record, `${label} should exist`);
  assert.equal(record.encounterId, encounterId, `${label} should link to the active encounter`);
}

(async () => {
  fs.copyFileSync(sourceDb, tempDb);
  const tempData = JSON.parse(fs.readFileSync(tempDb, "utf8"));
  tempData.profile = tempData.profile || {};
  for (const key of [
    "telehealthEncounters",
    "healthIntakes",
    "telehealthConsents",
    "telehealthVitals",
    "telehealthReferrals",
    "telehealthFollowUps",
    "telehealthAppointments",
    "telehealthProviderAssignments",
    "patientHistoryRecords",
    "telehealthPrescriptionPackets",
    "telehealthEmergencyEscalations",
    "careTeamNotes",
    "telehealthOutcomeReviews",
    "videoSessions"
  ]) {
    tempData.profile[key] = [];
  }
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

    const intakeState = await post("/api/health/action", adminCookie, {
      type: "intake",
      patientName: "Phase3A Encounter Patient",
      needSummary: "Phase3A unified encounter lifecycle verification",
      contactMethod: "Phase3A secure callback"
    }, 200, "health intake should return 200");
    const intake = latestRecord(intakeState.profile, "healthIntakes");
    assert(intake.encounterId, "intake should receive an encounterId");
    const encounterId = intake.encounterId;
    let encounter = encounterById(intakeState.profile, encounterId);
    assert(encounter, "intake should create a telehealth encounter");
    assert.equal(encounter.intakeId, intake.id, "encounter should reference intake id");
    assert.equal(encounter.lifecycleState, "intake-started", "encounter should start at intake-started");

    const consentState = await post("/api/health/action", adminCookie, { type: "consent" }, 200, "consent should return 200");
    assertEncounterLink(latestRecord(consentState.profile, "telehealthConsents"), encounterId, "consent");
    encounter = encounterById(consentState.profile, encounterId);
    assert.equal(encounter.lifecycleState, "consent-recorded", "consent should advance lifecycle");
    assert.equal(encounter.consentCount, 1, "encounter should count consent");

    const vitalsState = await post("/api/health/action", adminCookie, { type: "vitals" }, 200, "vitals should return 200");
    assertEncounterLink(latestRecord(vitalsState.profile, "telehealthVitals"), encounterId, "vitals");
    encounter = encounterById(vitalsState.profile, encounterId);
    assert.equal(encounter.lifecycleState, "vitals-captured", "vitals should advance lifecycle");
    assert.equal(encounter.vitalsCount, 1, "encounter should count vitals");

    const appointmentState = await post("/api/health/advanced", adminCookie, { type: "appointment" }, 200, "appointment should return 200");
    assertEncounterLink(appointmentState.healthAdvancedResult.record, encounterId, "appointment");
    encounter = encounterById(appointmentState.profile, encounterId);
    assert.equal(encounter.lifecycleState, "appointment-scheduled", "appointment should advance lifecycle");
    assert.equal(encounter.appointmentId, appointmentState.healthAdvancedResult.record.id, "encounter should reference appointment");

    const providerState = await post("/api/health/advanced", adminCookie, {
      type: "provider",
      providerName: "Phase3A Provider"
    }, 200, "provider assignment should return 200");
    assertEncounterLink(providerState.healthAdvancedResult.record, encounterId, "provider assignment");
    encounter = encounterById(providerState.profile, encounterId);
    assert.equal(encounter.lifecycleState, "provider-assigned", "provider should advance lifecycle");
    assert.equal(encounter.providerAssignmentId, providerState.healthAdvancedResult.record.id, "encounter should reference provider assignment");

    const videoState = await post("/api/video/session", adminCookie, {
      type: "telehealth-video",
      module: "Healthcare"
    }, 200, "healthcare video session should return 200");
    assertEncounterLink(videoState.videoSessionResult, encounterId, "healthcare video session");
    encounter = encounterById(videoState.profile, encounterId);
    assert.equal(encounter.lifecycleState, "video-ready", "video should advance lifecycle");
    assert.equal(encounter.videoSessionId, videoState.videoSessionResult.id, "encounter should reference video session");

    const noteState = await post("/api/health/advanced", adminCookie, {
      type: "note",
      note: "Phase3A private clinical note"
    }, 200, "care-team note should return 200");
    assertEncounterLink(noteState.healthAdvancedResult.record, encounterId, "care-team note");
    encounter = encounterById(noteState.profile, encounterId);
    assert.equal(encounter.lifecycleState, "note-recorded", "note should advance lifecycle");
    assert.equal(encounter.noteCount, 1, "encounter should count notes");

    const outcomeState = await post("/api/health/advanced", adminCookie, { type: "outcome" }, 200, "outcome should return 200");
    assertEncounterLink(outcomeState.healthAdvancedResult.record, encounterId, "outcome review");
    encounter = encounterById(outcomeState.profile, encounterId);
    assert.equal(encounter.lifecycleState, "outcome-recorded", "outcome should advance lifecycle");
    assert.equal(encounter.outcomeCount, 1, "encounter should count outcomes");

    const emergencyState = await post("/api/health/advanced", adminCookie, { type: "emergency" }, 200, "emergency should return 200");
    assertEncounterLink(emergencyState.healthAdvancedResult.record, encounterId, "emergency escalation");
    encounter = encounterById(emergencyState.profile, encounterId);
    assert.equal(encounter.lifecycleState, "escalated", "emergency should advance lifecycle");
    assert.equal(encounter.emergencyEscalationCount, 1, "encounter should count emergency escalations");

    const simulationState = await post("/api/health/intake-simulation", adminCookie, {}, 200, "guided simulation should return 200");
    const simulationEncounter = encounterById(simulationState.profile, simulationState.intakeSimulationResult.intake.encounterId);
    assert(simulationEncounter, "simulation should create an encounter");
    assert.equal(simulationEncounter.demoRecord, true, "simulation encounter should keep demo marker");
    assert.equal(simulationEncounter.simulation, true, "simulation encounter should keep simulation marker");
    assert.equal(simulationEncounter.source, "demo-simulation", "simulation encounter should keep demo source");
    assert.equal(simulationEncounter.consentCount, 1, "simulation encounter should count consent");
    assert.equal(simulationEncounter.vitalsCount, 1, "simulation encounter should count vitals");
    assert.equal(simulationEncounter.referralCount, 1, "simulation encounter should count referrals");
    assert.equal(simulationEncounter.followUpCount, 1, "simulation encounter should count follow-ups");

    const investorState = await request("/api/state", { cookie: investorCookie });
    assert.equal(investorState.status, 200, "Investor state should load");
    const investorEncounters = investorState.json.profile.telehealthEncounters || [];
    assert(investorEncounters.length >= 2, "Investor projection should include safe encounter summaries");
    const projectedEncounter = investorEncounters.find(item => item.encounterId === encounterId);
    assert(projectedEncounter, "Investor should see the encounter summary");
    assert.equal(projectedEncounter.redacted, true, "Investor encounter should be marked redacted");
    assert.equal(projectedEncounter.noteCount, 1, "Investor should see safe linked counts");
    assert.equal(projectedEncounter.linkedRecordCounts.notes, 1, "Investor should see linked record count summary");
    const serializedInvestorProfile = JSON.stringify(investorState.json.profile || {});
    assert(!serializedInvestorProfile.includes("Phase3A Encounter Patient"), "Investor projection should redact patient names");
    assert(!serializedInvestorProfile.includes("Phase3A private clinical note"), "Investor projection should redact note contents");

    console.log("Telehealth encounter lifecycle QA passed");
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
