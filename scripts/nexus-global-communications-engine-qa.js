const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const doc = read("docs/NEXUS_GLOBAL_COMMUNICATIONS_ENGINE.md");
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
  `global live knowledge QA should pass before communications QA\n${liveKnowledge.stdout}\n${liveKnowledge.stderr}`
);

[
  "nexusGlobalCommunicationsIntent",
  "nexusGlobalCommunicationsPacketType",
  "nexusGlobalCommunicationsChannelStatus",
  "nexusGlobalCommunicationsDraftPreview",
  "buildNexusGlobalCommunicationsPacket",
  "nexusGlobalCommunicationsEngine",
  "/api/nexus/global-communications/engine",
  "nexusLiveKnowledgeAllModesQuery",
  "email_preparation_packet",
  "sms_preparation_packet",
  "whatsapp_preparation_packet",
  "phone_call_preparation_packet",
  "telegram_preparation_packet",
  "communication_confirmation_packet",
  "communication_outcome_packet",
  "NEXUS_MESSAGES_ENABLED",
  "NEXUS_WHATSAPP_ENABLED",
  "NEXUS_CALLS_ENABLED",
  "NEXUS_EMAIL_ENABLED",
  "NEXUS_TELEGRAM_ENABLED",
  "global_communications_packet_prepared",
  "noSilentSend",
  "noSilentCall",
  "noProviderHandoffAuthorized",
  "noExternalNavigationAuthorized",
  "outcomeRecording"
].forEach(token => includes(server, token, `server should include ${token}`));

[
  "renderNexusGlobalCommunicationsPacket",
  "/api/nexus/global-communications/engine",
  "nexus-global-communications-packet-card",
  "nexus-communications-packet-type",
  "nexus-communications-channel",
  "nexus-communications-draft-preview",
  "nexus-communications-channel-status",
  "nexus-communications-missing-config",
  "nexus-communications-confirmation-gate",
  "nexus-communications-queue-status",
  "nexus-communications-outcome-recording",
  "nexus-communications-source-context",
  "nexus-communications-live-knowledge-status",
  "nexus-communications-citation-count",
  "nexus-communications-no-execution",
  "email_preparation_packet",
  "sms_preparation_packet",
  "whatsapp_preparation_packet",
  "phone_call_preparation_packet",
  "telegram_preparation_packet",
  "communication_confirmation_packet",
  "communication_outcome_packet"
].forEach(token => includes(app, token, `app should include ${token}`));

[
  "Nexus Global Communications Engine",
  "Email, SMS, WhatsApp, Phone, and Telegram",
  "draft previews",
  "credential readiness",
  "confirmation requirements",
  "audit requirements",
  "outcome recording",
  "missing variable names",
  "never exposes API keys",
  "must not send SMS",
  "start phone calls",
  "explicit final approval"
].forEach(token => includes(doc, token, `doc should include ${token}`));

[
  "silent send allowed",
  "silent call allowed",
  "secret value:",
  "auth token value:",
  "api key value:",
  "message was sent automatically",
  "call was started automatically",
  "whatsapp was sent automatically",
  "telegram was sent automatically",
  "email was sent automatically"
].forEach(phrase => {
  excludes(server, phrase, `server should not contain unsafe phrase: ${phrase}`);
  excludes(app, phrase, `app should not contain unsafe phrase: ${phrase}`);
  excludes(doc, phrase, `doc should not contain unsafe phrase: ${phrase}`);
});

assert.strictEqual(
  packageJson.scripts["qa:nexus-global-communications-engine"],
  "node scripts/nexus-global-communications-engine-qa.js",
  "package script should expose global communications QA"
);
includes(qaSuite, "scripts/nexus-global-communications-engine-qa.js", "qa suite should include global communications QA");

console.log("nexus-global-communications-engine QA passed");
