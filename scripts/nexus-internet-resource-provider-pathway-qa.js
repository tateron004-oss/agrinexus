const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const sw = read("public/sw.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

const checks = [];
function check(name, condition) {
  checks.push({ name, condition: Boolean(condition) });
}
function hasAll(source, needles) {
  return needles.every(needle => source.includes(needle));
}

check("internet-resource UI exists", hasAll(app, [
  "data-testid=\"nexus-knowledge-rail\"",
  "Ask Nexus for current, source-backed information",
  "data-testid=\"nexus-internet-resource-history\"",
  "My Nexus Questions"
]));

check("global Ask Nexus flow routes source-sensitive questions", hasAll(app, [
  "runNexusKnowledgeQuery",
  "nexusKnowledgeCategoryForCommand",
  "What causes yellow leaves on maize?",
  "What is the latest advice for high blood pressure?"
]));

check("retrieval disabled state is honest and zero-citation", hasAll(server, [
  "Live internet retrieval is not configured yet. Nexus can still use built-in guidance and prepare a question for review.",
  "disabled",
  "citations: []",
  "noFakeCitations"
]) && app.includes("No citations are shown because live retrieval is not configured or did not return citable sources."));

check("retrieval readiness includes provider status without secrets", hasAll(server, [
  "nexusKnowledgeProviderStatus",
  "enabled",
  "configured",
  "missingEnv",
  "providerState",
  "providerEnvName"
]) && !server.includes("TWILIO_AUTH_TOKEN:") && !app.includes("API_KEY="));

check("provider offer appears after answers", hasAll(server, [
  "nexusProviderPathwayOffer",
  "providerOffer = nexusProviderPathwayOffer",
  "provider_pathway_available",
  "provider_pathway_not_configured"
]) && hasAll(app, [
  "data-testid=\"nexus-provider-support-offer\"",
  "Need provider support?",
  "data-testid=\"nexus-request-provider-support\"",
  "Provider pathway not configured yet; Nexus can save this locally."
]));

check("provider pathway APIs exist", hasAll(server, [
  "/api/nexus/provider-pathways",
  "/api/nexus/provider-pathways/status",
  "/api/nexus/provider-pathways/request",
  "nexusProviderPathwayConsentMatch",
  "nexusProviderPathwayRouteMatch",
  "/api/nexus/provider-pathways/logs"
]));

check("provider request requires consent before routing", hasAll(server, [
  "awaiting_consent",
  "blocked_missing_consent",
  "consentStatus !== \"confirmed\"",
  "Consent required before routing.",
  "No active configured provider exists; request remains local."
]));

check("no routed/sent claim unless configured provider exists", hasAll(server, [
  "providerConfigured",
  "routed_to_configured_provider",
  "No live provider was contacted",
  "noSentClaim",
  "noLiveProviderClaimUnlessConfigured"
]));

check("provider/admin queue shows internet-resource fields", hasAll(app, [
  "data-testid=\"nexus-review-internet-fields\"",
  "Original question",
  "Answer mode",
  "Source category",
  "Provider pathway",
  "Routing status",
  "No citations are attached unless live retrieval returned citable sources."
]));

check("user question history exists", hasAll(app, [
  "renderNexusInternetResourceHistoryPanel",
  "data-testid=\"nexus-internet-history-latest\"",
  "data-testid=\"nexus-provider-pathway-history\"",
  "Saved answers, citations, provider pathway requests"
]));

check("saved answer can link to record/review request", hasAll(server, [
  "record.knowledgeResearch",
  "providerPathwayRequestId",
  "providerPathwayStatus",
  "queueResult.queueItem.providerTypeRequested"
]) && hasAll(app, [
  "data-nexus-knowledge-action=\"save-result\"",
  "data-nexus-knowledge-action=\"queue-result\"",
  "data-nexus-knowledge-action=\"request-provider-support\""
]));

check("health safety copy exists", hasAll(server, [
  "Education and tracking support only. Nexus does not diagnose, prescribe, change medication, or replace clinician review.",
  "If symptoms may be urgent, contact local emergency services or a qualified clinician immediately.",
  "noPrescribing",
  "noDoseChanges"
]));

check("agriculture follow-up asks crop/location when needed", hasAll(server, [
  "crop and region",
  "General guidance must be checked against local crop, soil, weather, and field conditions.",
  "Nexus does not perform a local field diagnosis."
]));

check("standard user first screen remains icon-first", [
  "Agriculture Help",
  "Health & Chronic Care",
  "Telehealth Intake",
  "Mobile Clinic",
  "Pharmacy Support",
  "Learning & Literacy",
  "Jobs & Workforce",
  "AgriTrade Marketplace",
  "Maps / Field Visit",
  "Music / Media",
  "Reminders",
  "Offline Queue"
].every(label => app.includes(label)) && !app.includes("workflow tab wall"));

check("false live claims remain blocked", !/\b(Nexus|we|I)\s+(sent|called|processed|dispatched|fulfilled|connected you to a live provider|completed payment|placed a call)\b/i.test(app + server));

check("service worker/cache bumped", server.includes("nexus-behavior-465") && app.includes("nexus-behavior-465") && sw.includes("agrinexus-pwa-v410"));
check("package alias exists", pkg.scripts["qa:nexus-internet-resource-provider-pathway"] === "node scripts/nexus-internet-resource-provider-pathway-qa.js");
check("qa-suite safe wiring exists", qaSuite.includes("scripts/nexus-internet-resource-provider-pathway-qa.js"));

const failures = checks.filter(item => !item.condition);
if (failures.length) {
  console.error("nexus-internet-resource-provider-pathway QA failed:");
  failures.forEach(item => console.error(`- ${item.name}`));
  process.exit(1);
}

console.log("nexus-internet-resource-provider-pathway QA passed");
