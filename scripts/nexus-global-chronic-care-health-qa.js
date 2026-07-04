const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const doc = read("docs/NEXUS_GLOBAL_CHRONIC_CARE_HEALTH_ENGINE.md");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(haystack, needle, message) {
  assert(haystack.includes(needle), message || `Expected to find ${needle}`);
}

function excludes(haystack, needle, message) {
  assert(!haystack.toLowerCase().includes(needle.toLowerCase()), message || `Did not expect to find ${needle}`);
}

const liveKnowledge = spawnSync(process.execPath, ["scripts/nexus-global-live-knowledge-qa.js"], {
  cwd: root,
  encoding: "utf8"
});
assert.strictEqual(
  liveKnowledge.status,
  0,
  `global live knowledge QA should pass before chronic-care health QA\n${liveKnowledge.stdout}\n${liveKnowledge.stderr}`
);

[
  "nexusGlobalChronicCareHealthIntent",
  "nexusGlobalChronicCareHealthPacketType",
  "buildNexusGlobalChronicCareHealthPacket",
  "nexusGlobalChronicCareHealthEngine",
  "/api/nexus/global-chronic-care-health/engine",
  "nexusLiveKnowledgeAllModesQuery",
  "chronic_disease_education_packet",
  "diabetes_support_packet",
  "hypertension_support_packet",
  "obesity_support_packet",
  "rpm_support_packet",
  "rtm_support_packet",
  "chw_support_packet",
  "provider_review_packet",
  "Remote Patient Monitoring",
  "Remote Therapeutic Monitoring",
  "community health worker",
  "urgent warning symptoms",
  "noDiagnosisProvided",
  "noPrescriptionProvided",
  "noMedicationChangeAuthorized",
  "noProviderSubmissionAuthorized",
  "noEmergencyDispatchAuthorized",
  "noLiveRpmRtmClaim",
  "requiresProviderReview",
  "requiresConsentBeforeProviderSubmission",
  "requiresConfirmationForProviderSubmission",
  "global_chronic_care_health_packet_prepared"
].forEach(token => includes(server, token, `server should include ${token}`));

[
  "renderNexusGlobalChronicCareHealthPacket",
  "NEXUS_CHRONIC_CARE_HEALTH_SECTIONS",
  "renderNexusChronicCareHealthSections",
  "/api/nexus/global-chronic-care-health/engine",
  "nexus-chronic-care-health-sections",
  "data-chronic-care-health-section",
  "nexus-chronic-care-health-section-${escapeHtml(section.id)}",
  "diabetes-support",
  "hypertension-support",
  "obesity-support",
  "rpm-support",
  "rtm-support",
  "chw-support",
  "Provider Review Summary",
  "nexus-global-chronic-care-health-packet-card",
  "nexus-chronic-care-health-packet-type",
  "nexus-chronic-care-health-education-focus",
  "nexus-chronic-care-health-source-backed-education",
  "nexus-chronic-care-health-intake-questions",
  "nexus-chronic-care-health-rpm-rtm-context",
  "nexus-chronic-care-health-provider-summary",
  "nexus-chronic-care-health-urgent-warnings",
  "nexus-chronic-care-health-live-knowledge-status",
  "nexus-chronic-care-health-citation-count",
  "nexus-chronic-care-health-export-ready",
  "nexus-chronic-care-health-no-execution",
  "Prepare diabetes packet",
  "Prepare hypertension packet",
  "Prepare obesity support",
  "Explain RPM/RTM",
  "Prepare CHW packet",
  "chronic_disease_education_packet",
  "diabetes_support_packet",
  "hypertension_support_packet",
  "obesity_support_packet",
  "rpm_support_packet",
  "rtm_support_packet",
  "chw_support_packet",
  "provider_review_packet"
].forEach(token => includes(app, token, `app should include ${token}`));

[
  "Global Chronic Care Health Engine",
  "Chronic disease education",
  "Diabetes support",
  "Hypertension support",
  "Obesity support",
  "RPM support",
  "RTM support",
  "Community health worker support",
  "Provider review packets",
  "Chronic Care Education",
  "RPM Manual Readings",
  "RTM Therapy Updates",
  "does not fabricate citations",
  "Diagnose",
  "Prescribe",
  "Recommend medication changes",
  "Claim live device monitoring unless a verified connector is configured",
  "explicit user approval",
  "confirmation",
  "audit controls"
].forEach(token => includes(doc, token, `doc should include ${token}`));

[
  "diagnosed you",
  "prescribed you",
  "changed your medication",
  "submitted your records automatically",
  "contacted your doctor automatically",
  "dispatched emergency help automatically",
  "live device monitoring is active",
  "generated fake citation",
  "secret token",
  "api key value"
].forEach(phrase => {
  excludes(server, phrase, `server should not contain unsafe phrase: ${phrase}`);
  excludes(app, phrase, `app should not contain unsafe phrase: ${phrase}`);
  excludes(doc, phrase, `doc should not contain unsafe phrase: ${phrase}`);
});

assert.strictEqual(
  packageJson.scripts["qa:nexus-global-chronic-care-health"],
  "node scripts/nexus-global-chronic-care-health-qa.js",
  "package script should expose global chronic-care health QA"
);
includes(qaSuite, "scripts/nexus-global-chronic-care-health-qa.js", "qa suite should include global chronic-care health QA");

console.log("nexus-global-chronic-care-health QA passed");
