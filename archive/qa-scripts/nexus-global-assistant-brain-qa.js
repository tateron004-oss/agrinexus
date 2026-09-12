const fs = require("fs");
const path = require("path");
const assert = require("assert");

const root = path.resolve(__dirname, "..");
const read = relative => fs.readFileSync(path.join(root, relative), "utf8");

const app = read("public/app.js");
const css = read("public/styles.css");
const doc = read("docs/NEXUS_GLOBAL_ASSISTANT_BRAIN.md");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(source, token, label = token) {
  assert(source.includes(token), `Missing ${label}`);
}

[
  "NEXUS_GLOBAL_ASSISTANT_BRAIN_DOMAINS",
  "nexusGlobalAssistantBrainDomainForCommand",
  "nexusGlobalAssistantBrainRiskForCommand",
  "buildNexusGlobalAssistantBrainPlan",
  "shouldNexusGlobalAssistantBrainHandle",
  "buildNexusGlobalAssistantBrainResult",
  "renderNexusGlobalAssistantBrainPlan",
  "nexus-global-assistant-brain.v1",
  "nexus_global_assistant_brain_plan_prepared",
  "data-nexus-global-assistant-brain-plan",
  "globalAssistantBrainPlan",
  "route to Live Knowledge when configured",
  "review_queue_or_offline_queue_only",
  "user_confirmation_gate_required_before_any_future_execution",
  "noDeadEndResponse",
  "noExecutionAuthorized: true",
  "providerHandoffAuthorized: false",
  "data-execution-authority=\"false\""
].forEach(token => includes(app, token, `app token ${token}`));

[
  "diabetes intake",
  "review my blood pressure",
  "crop disease",
  "plan a farm visit",
  "prepare a whatsapp",
  "workforce training",
  "telehealth questions",
  "vendor options",
  "mobile clinic visit packet",
  "queue this action"
].forEach(token => includes(app.toLowerCase(), token, `command coverage ${token}`));

[
  "chronic_disease_education_packet",
  "agriculture_support_packet",
  "route_planning_packet",
  "communications_preparation_packet",
  "workforce_training_packet",
  "provider_access_packet",
  "pharmacy_review_packet",
  "marketplace_vendor_research_packet",
  "queued_action_packet"
].forEach(token => includes(app, token, `packet coverage ${token}`));

[
  "nexus-global-assistant-brain-plan",
  "rgba(34, 211, 238"
].forEach(token => includes(css, token, `css token ${token}`));

[
  "Nexus Global Assistant Brain",
  "understand the user's goal",
  "classify the domain and risk tier",
  "select a workflow, packet builder, and mode dispatcher",
  "route to Live Knowledge",
  "preserve follow-up state",
  "no-execution assistant brain plan",
  "High-risk actions remain preparation-only",
  "fake citations",
  "followUpState.nextPrompt"
].forEach(token => includes(doc, token, `doc token ${token}`));

[
  "calls, messages, WhatsApp",
  "payments",
  "pharmacy workflows",
  "location sharing",
  "camera",
  "emergency routing",
  "backend writes"
].forEach(token => includes(doc, token, `safety doc token ${token}`));

[
  "execute live provider",
  "send automatically",
  "provider handoff authorized: true",
  "noExecutionAuthorized: false",
  "providerHandoffAuthorized: true",
  "dispatch emergency help automatically",
  "fake citations are allowed"
].forEach(forbidden => {
  assert(!app.toLowerCase().includes(forbidden.toLowerCase()), `Unsafe app phrase found: ${forbidden}`);
  assert(!doc.toLowerCase().includes(forbidden.toLowerCase()), `Unsafe doc phrase found: ${forbidden}`);
});

assert.strictEqual(
  packageJson.scripts["qa:nexus-global-assistant-brain"],
  "node scripts/nexus-global-assistant-brain-qa.js",
  "package alias missing"
);
includes(qaSuite, "scripts/nexus-global-assistant-brain-qa.js", "qa-suite wiring");

console.log("nexus-global-assistant-brain QA passed");
