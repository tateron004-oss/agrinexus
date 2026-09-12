const fs = require("fs");
const path = require("path");
const assert = require("assert");

const root = path.resolve(__dirname, "..");
const read = relative => fs.readFileSync(path.join(root, relative), "utf8");
const exists = relative => fs.existsSync(path.join(root, relative));

const app = read("public/app.js");
const server = read("server.js");
const css = read("public/styles.css");
const qaSuite = read("scripts/qa-suite.js");
const packageJson = JSON.parse(read("package.json"));
const closeout = read("docs/NEXUS_GLOBAL_PLATFORM_BUILDOUT_CLOSEOUT.md");

function includes(source, token, label = token) {
  assert(source.includes(token), `Missing ${label}`);
}

const requiredDocs = [
  "docs/NEXUS_GLOBAL_LIVE_KNOWLEDGE_LAYER.md",
  "docs/NEXUS_GLOBAL_AGRICULTURE_INTELLIGENCE.md",
  "docs/NEXUS_GLOBAL_TRAINING_WORKFORCE_ENGINE.md",
  "docs/NEXUS_GLOBAL_CHRONIC_CARE_HEALTH_ENGINE.md",
  "docs/NEXUS_GLOBAL_PROVIDER_ACCESS_BRIDGE.md",
  "docs/NEXUS_GLOBAL_COMMUNICATIONS_ENGINE.md",
  "docs/NEXUS_GLOBAL_MARKETPLACE_LOGISTICS_ENGINE.md",
  "docs/NEXUS_GLOBAL_ACTIVATION_CENTER.md",
  "docs/NEXUS_GLOBAL_REVIEW_QUEUE_AUDIT_SYSTEM.md",
  "docs/NEXUS_GLOBAL_OFFLINE_LOW_BANDWIDTH_ACCESS.md",
  "docs/NEXUS_GLOBAL_ASSISTANT_BRAIN.md",
  "docs/NEXUS_GLOBAL_PLATFORM_BUILDOUT_CLOSEOUT.md"
];

const requiredQa = [
  "scripts/nexus-global-live-knowledge-qa.js",
  "scripts/nexus-global-agriculture-intelligence-qa.js",
  "scripts/nexus-global-training-workforce-qa.js",
  "scripts/nexus-global-chronic-care-health-qa.js",
  "scripts/nexus-global-provider-access-qa.js",
  "scripts/nexus-global-communications-engine-qa.js",
  "scripts/nexus-global-marketplace-logistics-qa.js",
  "scripts/nexus-global-activation-center-qa.js",
  "scripts/nexus-global-review-queue-audit-qa.js",
  "scripts/nexus-global-offline-access-qa.js",
  "scripts/nexus-global-assistant-brain-qa.js",
  "scripts/nexus-global-platform-final-qa.js"
];

requiredDocs.forEach(file => assert(exists(file), `Missing closeout/global doc ${file}`));
requiredQa.forEach(file => assert(exists(file), `Missing global QA ${file}`));

requiredQa.forEach(file => includes(qaSuite, file, `qa-suite wiring ${file}`));

[
  "qa:nexus-global-live-knowledge",
  "qa:nexus-global-agriculture-intelligence",
  "qa:nexus-global-training-workforce",
  "qa:nexus-global-chronic-care-health",
  "qa:nexus-global-provider-access",
  "qa:nexus-global-communications-engine",
  "qa:nexus-global-marketplace-logistics",
  "qa:nexus-global-activation-center",
  "qa:nexus-global-review-queue-audit",
  "qa:nexus-global-offline-access",
  "qa:nexus-global-assistant-brain"
].forEach(alias => assert(packageJson.scripts[alias], `Missing package alias ${alias}`));

[
  "/api/nexus/live-knowledge/status",
  "/api/nexus/live-knowledge/query",
  "/api/nexus/global-agriculture/intelligence",
  "/api/nexus/global-training-workforce/engine",
  "/api/nexus/global-chronic-care-health/engine",
  "/api/nexus/global-provider-access/bridge",
  "/api/nexus/global-communications/engine",
  "/api/nexus/global-marketplace-logistics/engine"
].forEach(token => includes(server, token, `server endpoint ${token}`));

[
  "data-nexus-knowledge-rail",
  "nexus_global_agriculture_intelligence",
  "nexus-global-training-workforce",
  "nexus_global_chronic_care_health_engine",
  "nexus_global_provider_access_bridge",
  "nexus_global_communications_engine",
  "nexus_global_marketplace_logistics_engine",
  "data-testid=\"nexus-global-activation-center-summary\"",
  "data-testid=\"nexus-global-review-queue-audit-system\"",
  "data-testid=\"nexus-global-offline-access-layer\"",
  "data-nexus-global-assistant-brain-plan"
].forEach(token => includes(app, token, `app UI/runtime token ${token}`));

[
  "live_knowledge_research_packet",
  "agriculture_support_packet",
  "training_support_packet",
  "chronic_disease_education_packet",
  "provider_access_packet",
  "sms_preparation_packet",
  "marketplace_vendor_research_packet",
  "queued_action_packet",
  "review_queue_packet",
  "offline_access_packet",
  "nexus_global_assistant_brain_plan"
].forEach(token => includes(app, token, `packet token ${token}`));

[
  "nexus-global-offline-access-panel",
  "nexus-global-assistant-brain-plan",
  "nexus-global-review-audit",
  "nexus-global-activation"
].forEach(token => includes(css, token, `css token ${token}`));

[
  "Standard User path opens",
  "Activation Center opens and renders 32 lanes",
  "No unsafe live external action occurs",
  "Live or regulated real-world execution remains credential, provider, consent, confirmation, audit, and outcome gated"
].forEach(token => includes(closeout, token, `closeout token ${token}`));

[
  "diagnosis completed",
  "prescription sent",
  "i dispatched emergency",
  "payment completed",
  "message sent automatically",
  "provider contacted automatically",
  "secret value:",
  "api key value:"
].forEach(forbidden => {
  assert(!app.toLowerCase().includes(forbidden.toLowerCase()), `Unsafe app phrase found: ${forbidden}`);
  assert(!closeout.toLowerCase().includes(forbidden.toLowerCase()), `Unsafe closeout phrase found: ${forbidden}`);
});

console.log("nexus-global-platform-final QA passed");
