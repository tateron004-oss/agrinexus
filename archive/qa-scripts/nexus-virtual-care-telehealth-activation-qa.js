const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const telehealthProviderSource = read("server/telehealth/provider.js");
const telehealthDailySource = read("server/telehealth/providers/daily.js");
const telehealthZoomSource = read("server/telehealth/providers/zoom.js");
const telehealthExternalSource = read("server/telehealth/providers/external-url.js");
const telehealthSources = telehealthProviderSource + telehealthDailySource + telehealthZoomSource + telehealthExternalSource;
const envExample = read(".env.example");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");
const telehealth = require("../server/telehealth/provider.js");

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.includes(token), `${label} must not include ${token}`);
}

[
  "nexusTelehealthProvider",
  "/api/nexus/telehealth/status",
  "/api/nexus/telehealth/create-encounter",
  "/api/nexus/telehealth/create-video-room",
  "/api/nexus/telehealth/notify",
  "/api/nexus/telehealth/follow-up",
  "virtual_care_telehealth_status_answered",
  "nexusTelehealthEncounters",
  "nexusTelehealthFollowUps",
  "nexusTelehealthVideoAttempts",
  "noDiagnosis",
  "noPrescribing",
  "noEmergencyDispatch"
].forEach(token => includes(server, token, `server ${token}`));

[
  "NEXUS_TELEHEALTH_PROVIDER=local",
  "NEXUS_TELEHEALTH_PROVIDER_NAME=",
  "NEXUS_TELEHEALTH_INTAKE_URL=",
  "DAILY_API_KEY=",
  "DAILY_ROOM_DOMAIN=",
  "ZOOM_ACCOUNT_ID=",
  "ZOOM_CLIENT_ID=",
  "ZOOM_CLIENT_SECRET="
].forEach(token => includes(envExample, token, `.env.example ${token}`));

[
  "data-testid=\"nexus-virtual-care-telehealth-panel\"",
  "data-testid=\"nexus-virtual-care-condition\"",
  "data-testid=\"nexus-virtual-care-symptoms\"",
  "data-testid=\"nexus-virtual-care-reading-type\"",
  "data-testid=\"nexus-virtual-care-reading-value\"",
  "data-testid=\"nexus-virtual-care-consent-prepare\"",
  "data-testid=\"nexus-virtual-care-consent-share\"",
  "data-testid=\"nexus-virtual-care-confirmed\"",
  "data-nexus-virtual-care-action=\"prepare-encounter\"",
  "data-nexus-virtual-care-action=\"create-video\"",
  "data-nexus-virtual-care-action=\"queue-review\"",
  "data-nexus-virtual-care-action=\"email-packet\"",
  "data-nexus-virtual-care-action=\"notify-patient\"",
  "data-nexus-virtual-care-action=\"follow-up\"",
  "/api/nexus/telehealth/status",
  "/api/nexus/telehealth/create-encounter",
  "/api/nexus/telehealth/create-video-room",
  "/api/nexus/telehealth/notify",
  "/api/nexus/telehealth/follow-up",
  "handleNexusVirtualCareTelehealthClick",
  "isNexusVirtualCareTelehealthCommand",
  "runNexusVirtualCareTelehealthCommand"
].forEach(token => includes(app, token, `app ${token}`));

[
  "Nexus does not diagnose.",
  "Nexus does not prescribe or change medications.",
  "No diagnosis, prescribing, appointment acceptance, urgent response routing, or provider submission",
  "Video room creation requires explicit confirmation and sharing consent."
].forEach(token => {
  includes(server + app + telehealthSources, token, `safe copy ${token}`);
});

[
  "diagnosed",
  "prescribed",
  "appointment is booked",
  "provider accepted",
  "emergency dispatch started",
  "DAILY_API_KEY:",
  "ZOOM_CLIENT_SECRET:",
  "telehealth secret"
].forEach(token => {
  excludes(telehealthSources, token, `telehealth unsafe token ${token}`);
});

[
  "No diagnosis, prescribing, appointment acceptance, urgent response routing, or provider submission",
  "No diagnosis, prescribing, appointment acceptance",
  "Consent to share when provider is configured",
  "I reviewed and confirm this step"
].forEach(token => includes(app, token, `app safety copy ${token}`));

let status = telehealth.status({ NEXUS_TELEHEALTH_PROVIDER: "daily" });
assert.strictEqual(status.selectedProvider, "daily", "daily provider should be detected");
assert(status.missingEnv.includes("DAILY_API_KEY"), "daily missing status should report DAILY_API_KEY");
assert(status.missingEnv.includes("DAILY_ROOM_DOMAIN"), "daily missing status should report DAILY_ROOM_DOMAIN");

status = telehealth.status({
  NEXUS_TELEHEALTH_PROVIDER: "daily",
  DAILY_API_KEY: "test_daily_key",
  DAILY_ROOM_DOMAIN: "nexus.daily.co"
});
assert.strictEqual(status.configured, true, "daily should configure when required env exists");

status = telehealth.status({ NEXUS_TELEHEALTH_PROVIDER: "external_url" });
assert.strictEqual(status.selectedProvider, "external_url", "external_url should be detected");
assert(status.missingEnv.includes("NEXUS_TELEHEALTH_INTAKE_URL"), "external_url should require intake URL");

status = telehealth.status({
  NEXUS_TELEHEALTH_PROVIDER: "zoom",
  ZOOM_ACCOUNT_ID: "acct",
  ZOOM_CLIENT_ID: "client",
  ZOOM_CLIENT_SECRET: "secret"
});
assert.strictEqual(status.configured, true, "zoom credential shape should be detected");
assert.strictEqual(status.provider.videoCreationAllowed, false, "zoom execution should remain gated");

(async () => {
  const db = {};
  let result = await telehealth.createEncounter(db, {
    conditionArea: "diabetes",
    symptoms: "high morning glucose",
    consentToPreparePacket: true,
    confirmed: false
  }, { name: "QA" }, { NEXUS_TELEHEALTH_PROVIDER: "local" });
  assert.strictEqual(result.status, "blocked-confirmation-required", "encounter should block without confirmation");
  assert.strictEqual(db.nexusTelehealthEncounters.length, 0, "blocked encounter should not create a packet");

  result = await telehealth.createEncounter(db, {
    conditionArea: "hypertension",
    symptoms: "blood pressure review",
    readings: [{ type: "blood pressure", value: "138/86" }],
    consentToPreparePacket: true,
    consentToShare: false,
    confirmed: true
  }, { name: "QA" }, { NEXUS_TELEHEALTH_PROVIDER: "local" });
  assert.strictEqual(result.encounterCreated, true, "confirmed packet should create local encounter");
  assert.strictEqual(result.encounter.providerSubmissionStatus, "not_submitted", "encounter should not submit externally by default");
  assert(result.packet.summary.join(" ").includes("hypertension"), "packet should include condition area");
  assert.strictEqual(db.nexusPilotReviewQueue.length, 1, "encounter should queue review item");

  const video = await telehealth.createVideoRoom(db, {
    encounterId: result.encounter.id,
    confirmed: true,
    consentToShare: true
  }, { name: "QA" }, { NEXUS_TELEHEALTH_PROVIDER: "local" });
  assert.strictEqual(video.video.status, "local_queue_only", "local provider should not fake video room creation");
  assert.strictEqual(video.video.roomCreated, false, "local provider should not create video room");

  const urgent = await telehealth.createEncounter(db, {
    conditionArea: "diabetes",
    symptoms: "chest pain",
    redFlags: ["Chest pain"],
    consentToPreparePacket: true,
    consentToShare: true,
    confirmed: true
  }, { name: "QA" }, { NEXUS_TELEHEALTH_PROVIDER: "daily", DAILY_API_KEY: "test_daily_key", DAILY_ROOM_DOMAIN: "nexus.daily.co" });
  assert.strictEqual(urgent.status, "emergency-guidance", "red flags should trigger emergency guidance");
  assert.strictEqual(urgent.encounter.noEmergencyDispatch, true, "red flags should not dispatch emergency services");

  assert.strictEqual(
    packageJson.scripts["qa:nexus-virtual-care-telehealth-activation"],
    "node scripts/nexus-virtual-care-telehealth-activation-qa.js",
    "package alias should run virtual care telehealth QA"
  );
  includes(qaSuite, "scripts/nexus-virtual-care-telehealth-activation-qa.js", "qa suite should include virtual care telehealth QA");
  console.log("nexus-virtual-care-telehealth-activation QA passed");
})().catch(error => {
  console.error(error);
  process.exit(1);
});
