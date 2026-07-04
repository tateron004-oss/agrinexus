const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const app = read("public/app.js");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.includes(token), `${label} must not include ${token}`);
}

[
  "const NEXUS_CAPABILITIES = Object.freeze",
  "function resolveNexusCapability(input = \"\", options = {})",
  "function openNexusCapability(capabilityId, options = {})",
  "function renderActiveNexusWorkspace(state = nexusActiveWorkflowState)",
  "function launchCapabilityFromClick(eventOrElement)",
  "function launchCapabilityFromAskNexus(input = \"\")",
  "function launchCapabilityFromVoice(transcript = \"\")",
  "function renderNexusActiveWorkflowWorkspace()",
  "data-nexus-workspace=\"true\"",
  "data-testid=\"nexus-workflow-launch-status\"",
  "Opened in active workspace"
].forEach(token => includes(app, token, `agentic launcher contract ${token}`));

[
  "ask-nexus",
  "live-knowledge",
  "virtual-care",
  "telehealth",
  "chronic-disease",
  "diabetes",
  "hypertension",
  "obesity",
  "rpm",
  "rtm",
  "pharmacy",
  "mobile-clinic",
  "agriculture",
  "farm-visit",
  "drone-mission",
  "agritrade",
  "logistics",
  "workforce",
  "jobs",
  "learning",
  "training",
  "maps",
  "communications",
  "music-media",
  "offline",
  "admin-review",
  "provider-review",
  "payment-gate",
  "booking-gate",
  "dispatch-gate"
].forEach(token => includes(app, token, `capability registry ${token}`));

[
  "source-backed answer",
  "research agriculture topic",
  "research healthcare topic",
  "research workforce topic",
  "research marketplace",
  "video visit",
  "daily video room gate",
  "pharmacy referral",
  "refill coordination",
  "mobile clinic request",
  "community health outreach",
  "agronomy expert case",
  "crop issue triage",
  "tomato blight",
  "cold chain",
  "training enrollment",
  "email provider status",
  "send sms",
  "send whatsapp",
  "offline queue",
  "case timeline",
  "process payment",
  "appointment request",
  "prepare dispatch request"
].forEach(token => includes(app.toLowerCase(), token, `natural-language capability alias ${token}`));

[
  "return capability ? openNexusCapability(capability.id",
  "launchCapabilityFromVoice(standardUserVoiceCommand)",
  "resolveNexusCapability(command, { modeId })",
  "openNexusCapability(clickedCapability.id",
  "openNexusCapability(runtimeIntent.capabilityId",
  "runNexusKnowledgeQuery(command",
  "/api/nexus/live-knowledge/query",
  "data-testid=\"nexus-knowledge-citations\"",
  "data-testid=\"nexus-live-knowledge-provider-used\""
].forEach(token => includes(app, token, `shared launch wiring ${token}`));

[
  "title: \"Payment Gate\"",
  "title: \"Booking Gate\"",
  "title: \"Dispatch Gate\"",
  "title: \"Logistics Request\"",
  "Nexus does not process payments",
  "Nexus does not reserve appointments",
  "Nexus does not dispatch",
  "Nexus does not book transport"
].forEach(token => includes(app, token, `visible gate and disabled reason ${token}`));

[
  "/api/health",
  "/api/nexus/production/status",
  "/api/nexus/live-knowledge/query",
  "noSecretValuesReturned"
].forEach(token => includes(server, token, `production server route ${token}`));

[
  "payment processed successfully",
  "appointment accepted by provider",
  "refill approved by pharmacy",
  "emergency dispatched successfully",
  "provider accepted this request",
  "message sent successfully without confirmation"
].forEach(token => {
  excludes(app, token, `app fake execution claim ${token}`);
  excludes(server, token, `server fake execution claim ${token}`);
});

[
  "TWILIO_AUTH_TOKEN=",
  "TAVILY_API_KEY=",
  "BRAVE_SEARCH_API_KEY=",
  "EXA_API_KEY=",
  "SMTP_PASS="
].forEach(token => {
  excludes(app, token, `frontend secret exposure ${token}`);
  excludes(server, token, `server response secret exposure ${token}`);
});

assert.strictEqual(
  packageJson.scripts["qa:nexus-agentic-all-modes-launch"],
  "node scripts/nexus-agentic-all-modes-launch-qa.js",
  "package alias should run agentic all-modes launch QA"
);
includes(qaSuite, "scripts/nexus-agentic-all-modes-launch-qa.js", "qa-suite should include agentic all-modes launch QA");

console.log("nexus-agentic-all-modes-launch QA passed");
