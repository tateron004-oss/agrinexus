const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const doc = read("docs/NEXUS_GLOBAL_PROVIDER_ACCESS_BRIDGE.md");
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
  `global live knowledge QA should pass before provider-access QA\n${liveKnowledge.stdout}\n${liveKnowledge.stderr}`
);

[
  "nexusGlobalProviderAccessIntent",
  "nexusGlobalProviderAccessPacketType",
  "nexusGlobalProviderAccessCredentialStatus",
  "buildNexusGlobalProviderAccessPacket",
  "nexusGlobalProviderAccessBridge",
  "/api/nexus/global-provider-access/bridge",
  "nexusLiveKnowledgeAllModesQuery",
  "telehealth_prep_packet",
  "provider_bridge_packet",
  "pharmacy_support_packet",
  "mobile_clinic_access_packet",
  "clinic_visit_prep_packet",
  "credential_gated",
  "reviewQueueTarget",
  "reviewQueueReady",
  "noTelehealthLaunchAuthorized",
  "noPharmacyExecutionAuthorized",
  "noMobileClinicDispatchClaim",
  "noProviderContactAuthorized",
  "requiresConfirmationForProviderAccess",
  "auditRequiredBeforeLiveAction",
  "global_provider_access_packet_prepared"
].forEach(token => includes(server, token, `server should include ${token}`));

[
  "renderNexusGlobalProviderAccessPacket",
  "NEXUS_PROVIDER_ACCESS_SECTIONS",
  "renderNexusProviderAccessSections",
  "\"chronic-care\", \"clinical-support\", \"telehealth-intake\"",
  "/api/nexus/global-provider-access/bridge",
  "nexus-provider-access-sections",
  "data-provider-access-section",
  "nexus-provider-access-section-${escapeHtml(section.id)}",
  "telehealth-prep",
  "provider-bridge",
  "pharmacy-support",
  "mobile-clinic",
  "clinic-visit",
  "credential-status",
  "review-queue",
  "nexus-global-provider-access-packet-card",
  "nexus-provider-access-packet-type",
  "nexus-provider-access-service",
  "nexus-provider-access-checklist",
  "nexus-provider-access-source-backed",
  "nexus-provider-access-credential-status",
  "nexus-provider-access-review-queue",
  "nexus-provider-access-bridge-summary",
  "nexus-provider-access-live-knowledge-status",
  "nexus-provider-access-citation-count",
  "nexus-provider-access-export-ready",
  "nexus-provider-access-no-execution",
  "telehealth_prep_packet",
  "provider_bridge_packet",
  "pharmacy_support_packet",
  "mobile_clinic_access_packet",
  "clinic_visit_prep_packet"
].forEach(token => includes(app, token, `app should include ${token}`));

[
  "Global Provider Access Bridge",
  "Telehealth preparation",
  "Provider bridge packets",
  "Pharmacy support",
  "Mobile clinic access",
  "Clinic visit preparation",
  "Credential-Gated Status",
  "Telehealth Preparation",
  "Provider Bridge Packet",
  "Mobile Clinic Access",
  "Review Queue",
  "Launch telehealth",
  "Contact providers",
  "Request pharmacy refills",
  "Claim mobile clinic dispatch",
  "verified credentials",
  "explicit user approval",
  "final confirmation",
  "audit logging"
].forEach(token => includes(doc, token, `doc should include ${token}`));

[
  "telehealth launched",
  "video visit launched",
  "provider contacted automatically",
  "pharmacy refill requested automatically",
  "prescription transferred automatically",
  "mobile clinic dispatched",
  "records submitted automatically",
  "secret token",
  "api key value"
].forEach(phrase => {
  excludes(server, phrase, `server should not contain unsafe phrase: ${phrase}`);
  excludes(app, phrase, `app should not contain unsafe phrase: ${phrase}`);
  excludes(doc, phrase, `doc should not contain unsafe phrase: ${phrase}`);
});

assert.strictEqual(
  packageJson.scripts["qa:nexus-global-provider-access"],
  "node scripts/nexus-global-provider-access-qa.js",
  "package script should expose global provider-access QA"
);
includes(qaSuite, "scripts/nexus-global-provider-access-qa.js", "qa suite should include global provider-access QA");

console.log("nexus-global-provider-access QA passed");
