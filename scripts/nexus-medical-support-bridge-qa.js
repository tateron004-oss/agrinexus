const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const read = relative => fs.readFileSync(path.join(root, relative), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const envExample = read(".env.example");
const provider = require(path.join(root, "server/providers/medicalSupportBridgeProvider.js"));

[
  "server/providers/medicalSupportBridgeProvider.js",
  "server/providers/medicalBridgeUtils.js"
].forEach(file => assert(fs.existsSync(path.join(root, file)), `${file} must exist`));

[
  "/api/nexus/tools/medical-support/status",
  "/api/nexus/tools/medical-support/intake",
  "/api/nexus/tools/medical-support/summary",
  "/api/nexus/tools/medical-support/provider-report",
  "/api/nexus/tools/medical-support/reminder",
  "/api/nexus/tools/medical-support/offline",
  "medicalSupportBridge: require(\"./medicalSupportBridgeProvider\")",
  "medical-support-bridge"
].forEach(text => assert((server + read("server/providers/index.js")).includes(text), `server/index must include ${text}`));

[
  "Medical Support Intake",
  "data-nexus-medical-support-provider-layer",
  "id: \"medical-support\"",
  "No diagnosis, prescription, booking, payment, provider contact, dispatch, camera, microphone, or location sharing"
].forEach(text => assert(app.includes(text), `app must include ${text}`));

[
  "NEXUS_MEDICAL_SUPPORT_BRIDGE_ENABLED=true",
  "NEXUS_PATIENT_SUPPORT_BRIDGE_ENABLED=true"
].forEach(text => assert(envExample.includes(text), `.env.example must include ${text}`));

const db = { profile: {} };
let result = provider.intake({ supportType: "health_access", concern: "prepare visit questions" }, db);
assert.equal(result.body.status, "confirmation_required");
result = provider.intake({ confirmed: true, supportType: "health_access", concern: "prepare visit questions", questions: "What should I ask?" }, db);
assert.equal(result.body.status, "completed");
assert.equal(result.body.data.intake.providerContacted, false);
assert.equal(result.body.data.intake.appointmentBooked, false);
result = provider.summary({ supportType: "pharmacy_question", concern: "prepare safe questions" }, db);
assert.equal(result.body.status, "prepared");
result = provider.providerReport({ concern: "prepare provider review", questions: "What should I ask?" }, db);
assert.equal(result.body.status, "prepared");
result = provider.intake({ confirmed: true, concern: "diagnose and prescribe medication" }, db);
assert.equal(result.body.status, "blocked");

console.log("Nexus medical support bridge QA passed.");
