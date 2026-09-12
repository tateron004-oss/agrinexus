const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const { spawn } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.includes(token), `${label} must not include ${token}`);
}

[
  "NEXUS_PROVIDER_COORDINATION_LANES",
  "nexusProviderCoordinationStatus",
  "createNexusProviderCoordinationPacket",
  "sendNexusProviderCoordinationPacket",
  "buildNexusPharmacyReferralPacket",
  "buildNexusMobileClinicRequestPacket",
  "NEXUS_PHARMACY_PROVIDER_MODE",
  "NEXUS_PHARMACY_REFERRAL_EMAIL",
  "NEXUS_PHARMACY_SMS_TO",
  "NEXUS_PHARMACY_WHATSAPP_TO",
  "NEXUS_MOBILE_CLINIC_PROVIDER_MODE",
  "NEXUS_MOBILE_CLINIC_REFERRAL_EMAIL",
  "NEXUS_MOBILE_CLINIC_SMS_TO",
  "NEXUS_MOBILE_CLINIC_WHATSAPP_TO",
  "/api/nexus/pharmacy/status",
  "/api/nexus/pharmacy/create-referral",
  "/api/nexus/pharmacy/send-referral",
  "/api/nexus/mobile-clinic/status",
  "/api/nexus/mobile-clinic/create-request",
  "/api/nexus/mobile-clinic/send-request",
  "blocked-consent-required",
  "blocked-confirmation-required",
  "provider-unconfigured",
  "emergency-guidance",
  "No prescription",
  "No dispatch"
].forEach(token => includes(server, token, `server ${token}`));

[
  "data-testid=\"nexus-pharmacy-activation-panel\"",
  "data-testid=\"nexus-pharmacy-need\"",
  "data-testid=\"nexus-pharmacy-consent-prepare\"",
  "data-testid=\"nexus-pharmacy-consent-share\"",
  "data-testid=\"nexus-pharmacy-confirmed\"",
  "data-testid=\"nexus-pharmacy-prepare-packet\"",
  "data-testid=\"nexus-pharmacy-send-referral\"",
  "data-testid=\"nexus-mobile-clinic-activation-panel\"",
  "data-testid=\"nexus-mobile-clinic-need\"",
  "data-nexus-mobile-clinic-red-flag",
  "data-testid=\"nexus-mobile-clinic-consent-prepare\"",
  "data-testid=\"nexus-mobile-clinic-consent-share\"",
  "data-testid=\"nexus-mobile-clinic-confirmed\"",
  "data-testid=\"nexus-mobile-clinic-prepare-request\"",
  "data-testid=\"nexus-mobile-clinic-send-request\"",
  "handleNexusProviderCoordinationClick",
  "/api/nexus/pharmacy/status",
  "/api/nexus/mobile-clinic/status"
].forEach(token => includes(app, token, `app ${token}`));

[
  "diagnosed the patient",
  "prescribed medication",
  "refill approved",
  "pharmacy accepted",
  "mobile clinic dispatched",
  "appointment accepted",
  "emergency dispatch started",
  "TWILIO_AUTH_TOKEN:",
  "SMTP_PASS:"
].forEach(token => {
  excludes(server, token, `server unsafe ${token}`);
  excludes(app, token, `app unsafe ${token}`);
});

assert(server.includes("nexusEmailSendPacket"), "pharmacy/mobile clinic send should integrate the Email provider lane");
assert(server.includes("nexusCommunicationsSendMessage"), "pharmacy/mobile clinic send should integrate SMS/WhatsApp provider lanes");
assert(server.includes("nexusTelehealthProvider.status"), "telehealth lane should remain intact");
assert(server.includes("nexusLiveKnowledgeAllModesQuery"), "Live Knowledge lane should remain intact");
assert(server.includes("queueNexusProviderCoordinationFallback"), "local queue fallback should exist");
assert(server.includes("pharmacy_provider_status_answered"), "Ask Nexus should detect pharmacy commands");
assert(server.includes("mobile_clinic_provider_status_answered"), "Ask Nexus should detect mobile clinic commands");
assert.strictEqual(packageJson.scripts["qa:nexus-pharmacy-mobile-clinic-activation"], "node scripts/nexus-pharmacy-mobile-clinic-activation-qa.js", "package alias should run pharmacy/mobile clinic activation QA");
includes(qaSuite, "scripts/nexus-pharmacy-mobile-clinic-activation-qa.js", "qa-suite should include pharmacy/mobile clinic activation QA");

async function waitForServer(port, timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/api/healthz`);
      if (response.ok) return;
    } catch {
      await new Promise(resolve => setTimeout(resolve, 250));
    }
  }
  throw new Error("server did not start for pharmacy/mobile clinic QA");
}

async function request(port, pathname, body) {
  const response = await fetch(`http://127.0.0.1:${port}${pathname}`, {
    method: body ? "POST" : "GET",
    headers: body ? { "content-type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined
  });
  const json = await response.json();
  assert(response.ok, `${pathname} should return ok HTTP status: ${JSON.stringify(json)}`);
  return json;
}

async function runRouteChecks() {
  const port = 4528;
  const tempDb = path.join(root, "tmp-nexus-pharmacy-mobile-clinic-activation-qa-db.json");
  if (fs.existsSync(tempDb)) fs.rmSync(tempDb, { force: true });
  const child = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      AGRINEXUS_DB_PATH: tempDb,
      NEXUS_PHARMACY_PROVIDER_MODE: "email",
      NEXUS_MOBILE_CLINIC_PROVIDER_MODE: "sms"
    },
    stdio: ["ignore", "pipe", "pipe"]
  });
  try {
    await waitForServer(port);
    const pharmacyStatus = await request(port, "/api/nexus/pharmacy/status");
    assert(pharmacyStatus.missingEnv.includes("NEXUS_PHARMACY_REFERRAL_EMAIL"), "pharmacy status should report missing destination env by name only");
    assert(!JSON.stringify(pharmacyStatus).includes("SMTP_PASS="), "pharmacy status must not expose secrets");

    const pharmacyNoConfirm = await request(port, "/api/nexus/pharmacy/create-referral", {
      consentToPreparePacket: true,
      confirmed: false,
      concern: "Medication review question"
    });
    assert.strictEqual(pharmacyNoConfirm.status, "blocked-confirmation-required", "pharmacy preparation should require confirmation");

    const pharmacyNoConsent = await request(port, "/api/nexus/pharmacy/create-referral", {
      consentToPreparePacket: false,
      confirmed: true,
      concern: "Medication review question"
    });
    assert.strictEqual(pharmacyNoConsent.status, "blocked-consent-required", "pharmacy preparation should require consent");

    const pharmacyPrepared = await request(port, "/api/nexus/pharmacy/create-referral", {
      consentToPreparePacket: true,
      confirmed: true,
      conditionArea: "diabetes",
      pharmacyNeed: "refill-coordination",
      concern: "Needs pharmacist review for refill questions",
      medications: ["metformin"],
      allergies: ["penicillin"],
      readings: [{ type: "blood_glucose", value: "142 mg/dL" }]
    });
    assert.strictEqual(pharmacyPrepared.status, "packet-prepared", "pharmacy packet should prepare locally");
    assert(pharmacyPrepared.referralId.startsWith("NX-RX-"), "pharmacy referral id should use NX-RX");
    assert.strictEqual(pharmacyPrepared.queue.created, true, "pharmacy packet should create local review queue item");
    assert(pharmacyPrepared.packet.disclaimers.some(item => /does not diagnose|approve refills|prescribe/i.test(item)), "pharmacy packet should carry safety disclaimers");

    const pharmacySendNoConsent = await request(port, "/api/nexus/pharmacy/send-referral", {
      consentToPreparePacket: true,
      consentToShare: false,
      confirmed: true,
      concern: "Send pharmacy review"
    });
    assert.strictEqual(pharmacySendNoConsent.status, "blocked-consent-required", "pharmacy external send should require share consent");

    const mobileStatus = await request(port, "/api/nexus/mobile-clinic/status");
    assert(mobileStatus.missingEnv.includes("NEXUS_MOBILE_CLINIC_SMS_TO"), "mobile clinic status should report missing SMS destination env by name only");

    const mobileNoConfirm = await request(port, "/api/nexus/mobile-clinic/create-request", {
      consentToPreparePacket: true,
      confirmed: false,
      concern: "Vitals check"
    });
    assert.strictEqual(mobileNoConfirm.status, "blocked-confirmation-required", "mobile clinic preparation should require confirmation");

    const mobileNoConsent = await request(port, "/api/nexus/mobile-clinic/create-request", {
      consentToPreparePacket: false,
      confirmed: true,
      concern: "Vitals check"
    });
    assert.strictEqual(mobileNoConsent.status, "blocked-consent-required", "mobile clinic preparation should require consent");

    const mobileEmergency = await request(port, "/api/nexus/mobile-clinic/create-request", {
      consentToPreparePacket: true,
      confirmed: true,
      visitNeed: "hypertension-follow-up",
      concern: "Very high BP and chest pain",
      redFlags: ["chest_pain"],
      urgency: "emergency_possible"
    });
    assert.strictEqual(mobileEmergency.status, "emergency-guidance", "red flags should trigger emergency guidance");
    assert(/does not dispatch/i.test(mobileEmergency.emergencyGuidance), "emergency guidance must not claim dispatch");

    const mobileSendNoConsent = await request(port, "/api/nexus/mobile-clinic/send-request", {
      consentToPreparePacket: true,
      consentToShare: false,
      confirmed: true,
      concern: "Send mobile clinic request"
    });
    assert.strictEqual(mobileSendNoConsent.status, "blocked-consent-required", "mobile clinic external send should require share consent");

    const askPharmacy = await request(port, "/api/nexus/intelligence/ask", { question: "What is blocking pharmacy referrals?" });
    assert.strictEqual(askPharmacy.intelligence.router, "nexus-pharmacy-mobile-clinic-activation", "Ask Nexus should route pharmacy commands");
    assert(/Missing:/i.test(askPharmacy.result.answer), "pharmacy Ask Nexus answer should explain missing config");

    const askMobile = await request(port, "/api/nexus/intelligence/ask", { question: "Prepare a mobile clinic request." });
    assert.strictEqual(askMobile.intelligence.router, "nexus-pharmacy-mobile-clinic-activation", "Ask Nexus should route mobile clinic commands");
    assert(/does not dispatch|red flags/i.test(JSON.stringify(askMobile.result)), "mobile clinic Ask Nexus answer should keep safety boundary");
  } finally {
    child.kill();
    await new Promise(resolve => child.once("exit", resolve));
    if (fs.existsSync(tempDb)) fs.rmSync(tempDb, { force: true });
  }
}

runRouteChecks()
  .then(() => console.log("nexus-pharmacy-mobile-clinic-activation QA passed"))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
