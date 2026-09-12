const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.TELEHEALTH_PRIVACY_ROLE_QA_PORT || 4509);
const base = `http://127.0.0.1:${port}`;
const sourceDb = path.join(root, "db.json");
const tempDb = path.join(root, "tmp-telehealth-privacy-role-qa-db.json");
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
  throw new Error("Telehealth privacy role QA server did not become reachable");
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
  assert(response.cookie.includes("agrinexus_sid="), `${email} should receive a session cookie`);
  return response.cookie;
}

async function post(pathname, cookie, body, expectedStatus, message) {
  const response = await request(pathname, { method: "POST", cookie, body });
  assert.equal(response.status, expectedStatus, message);
  return response.json;
}

function assertInvestorHealthRecordRedacted(record, label) {
  assert.equal(record.redacted, true, `${label} should be marked redacted`);
  const forbidden = [
    "patientName",
    "symptoms",
    "temperatureC",
    "pulse",
    "note",
    "careNote",
    "contactMethod",
    "caregiverName",
    "patientPoint",
    "locationText",
    "possibleExplanations",
    "redFlags",
    "reason",
    "destination",
    "videoNote",
    "allergies",
    "conditions",
    "medications",
    "contents"
  ];
  for (const field of forbidden) {
    assert.equal(record[field], undefined, `${label} should not expose ${field}`);
  }
}

(async () => {
  fs.copyFileSync(sourceDb, tempDb);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDb },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitForServer();

    const unauthHealth = await request("/api/health/action", { method: "POST", body: { type: "intake" } });
    assert.equal(unauthHealth.status, 401, "unauthenticated health action should remain 401");

    const unauthVideo = await request("/api/video/session", { method: "POST", body: { type: "telehealth-video", module: "Healthcare" } });
    assert.equal(unauthVideo.status, 401, "unauthenticated video session should remain 401");

    const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
    const userCookie = await login("user@agrinexus.org", "User2026!");
    const investorCookie = await login("investor@agrinexus.org", "Investor2026!");

    const adminHealth = await post("/api/health/action", adminCookie, {
      type: "intake",
      patientName: "Phase2SensitivePatient Admin",
      needSummary: "Phase2SecretSymptom fever and private care detail",
      caregiverName: "Phase2Caregiver Admin",
      contactMethod: "phase2-private-phone-admin"
    }, 200, "Admin valid health action should return 200");
    assert.equal(adminHealth.profile.healthIntakes[0].patientName, "Phase2SensitivePatient Admin", "Admin should retain detailed health state");

    await post("/api/health/action", userCookie, {
      type: "intake",
      patientName: "Phase2SensitivePatient User",
      needSummary: "Phase2SecretSymptom user health detail",
      caregiverName: "Phase2Caregiver User",
      contactMethod: "phase2-private-phone-user"
    }, 200, "Standard User valid health action should return 200");

    await post("/api/health/rural-network", adminCookie, {
      type: "symptom-guide",
      patientName: "Phase2SensitivePatient Rural",
      symptoms: "Phase2SecretSymptom rural symptom detail",
      contactMethod: "phase2-private-phone-rural",
      patientLocation: "Phase2PrivateVillage"
    }, 200, "Admin rural health action should return 200");

    await post("/api/health/advanced", adminCookie, {
      type: "note",
      note: "Phase2SecretNote care-team note with private clinical detail"
    }, 200, "Admin advanced note should return 200");

    await post("/api/video/session", adminCookie, {
      type: "telehealth-video",
      module: "Healthcare",
      patientName: "Phase2SensitivePatient Video",
      videoNote: "Phase2PrivateVideo visible concern"
    }, 200, "Admin healthcare video session should return 200");

    await post("/api/video/session", userCookie, {
      type: "telehealth-video",
      module: "Healthcare",
      patientName: "Phase2SensitivePatient User Video"
    }, 200, "Standard User healthcare video session should return 200");

    await post("/api/health/action", investorCookie, {
      type: "intake",
      patientName: "Phase2SensitivePatient Investor"
    }, 403, "Investor health action should return 403");

    await post("/api/health/advanced", investorCookie, {
      type: "note",
      note: "Investor should not write this note"
    }, 403, "Investor advanced health action should return 403");

    await post("/api/health/rural-network", investorCookie, {
      type: "symptom-guide",
      symptoms: "Investor should not write this symptom"
    }, 403, "Investor rural health action should return 403");

    await post("/api/video/session", investorCookie, {
      type: "telehealth-video",
      module: "Healthcare",
      patientName: "Investor should not create healthcare video"
    }, 403, "Investor healthcare video session should return 403");

    const investorTradeVideo = await post("/api/video/session", investorCookie, {
      type: "trade",
      module: "AgriTrade",
      subject: "Investor trade video proof"
    }, 200, "Investor trade video session should preserve existing trade behavior");
    assert.equal(investorTradeVideo.videoSessionResult.type, "buyer-crop-video", "Investor trade video should remain a buyer-crop-video session");

    const investorState = await request("/api/state", { cookie: investorCookie });
    assert.equal(investorState.status, 200, "Investor state should load");
    const profile = investorState.json.profile || {};
    const requiredArrays = [
      "healthIntakes",
      "telehealthVitals",
      "telehealthReferrals",
      "telehealthFollowUps",
      "ruralSymptomGuides",
      "telehealthAppointments",
      "patientHistoryRecords",
      "careTeamNotes",
      "videoSessions"
    ];
    for (const key of requiredArrays) {
      assert(Array.isArray(profile[key]), `Investor profile should preserve ${key} array`);
    }
    assertInvestorHealthRecordRedacted(profile.healthIntakes[0], "Investor health intake");
    assertInvestorHealthRecordRedacted(profile.ruralSymptomGuides[0], "Investor rural symptom guide");
    assertInvestorHealthRecordRedacted(profile.careTeamNotes[0], "Investor care team note");
    const investorHealthVideo = profile.videoSessions.find(item => item.type === "telehealth-video");
    assert(investorHealthVideo, "Investor state should preserve healthcare video summary");
    assertInvestorHealthRecordRedacted(investorHealthVideo, "Investor healthcare video");

    const serializedInvestorProfile = JSON.stringify(profile);
    for (const token of [
      "Phase2SensitivePatient",
      "Phase2SecretSymptom",
      "Phase2Caregiver",
      "phase2-private-phone",
      "Phase2PrivateVillage",
      "Phase2SecretNote",
      "Phase2PrivateVideo"
    ]) {
      assert(!serializedInvestorProfile.includes(token), `Investor profile should not expose ${token}`);
    }
    assert(serializedInvestorProfile.includes("redacted"), "Investor profile should include redaction markers for health proof records");

    console.log("Telehealth privacy role QA passed");
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
