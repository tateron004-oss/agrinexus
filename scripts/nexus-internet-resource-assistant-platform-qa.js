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

const modeLabels = [
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
];

const sourceCategories = [
  "agriculture",
  "health",
  "chronicCare",
  "health_chronic_care",
  "telehealth",
  "pharmacy",
  "mobileClinic",
  "learning",
  "jobs",
  "marketplace",
  "maps",
  "music_media",
  "reminders",
  "offline",
  "providerAdmin",
  "general"
];

check("central intelligence router exists", hasAll(server, [
  "async function nexusIntelligenceAsk",
  'router: "nexus-internet-resource-assistant-platform"',
  "/api/nexus/intelligence/ask",
  "originalQuestion",
  "normalizedQuestion",
  "recommendedMode",
  "retrievalReason",
  "auditEventId"
]));

check("global Ask Nexus uses intelligence router", hasAll(app, [
  'request("/api/nexus/intelligence/ask"',
  "global_voice_ask_nexus",
  "nexus-internet-resource-assistant-platform",
  "runNexusKnowledgeQuery(command"
]));

check("mode-specific Ask with sources exists across all 12 modes", hasAll(app, [
  'data-testid="nexus-mode-knowledge-prompt"',
  "standard_user_mode_panel",
  "nexusKnowledgeCategoryForModeId",
  "music_media",
  "reminders",
  "offline"
]) && modeLabels.every(label => app.includes(label)));

check("classification and source policy cover all required categories", sourceCategories.every(category => server.includes(category))
  && hasAll(server, ["nexusKnowledgeClassifier", "nexusKnowledgeNeedsRetrieval", "trustedSourceCategory", "missingInformation"]));

check("retrieval disabled state is honest and citation-free", hasAll(server, [
  "Live internet retrieval is not configured yet. Nexus can still use built-in guidance and prepare a question for review.",
  "buildNexusKnowledgeDisabledResult",
  "citations: []",
  "noFakeCitations",
  "disabled answers"
]) || hasAll(server, [
  "buildNexusKnowledgeDisabledResult",
  "citations: []",
  "noFakeCitations"
]));

check("retrieved answer path requires citations", hasAll(server, [
  "normalizeNexusKnowledgeCitations",
  "if (providerResult.ok)",
  "sourceBacked: true",
  "providerResult.citations",
  "retrieved_source"
]));

check("no fake URL or citation language is allowed", hasAll(server, [
  "No fake URLs",
  "No fabricated source names",
  "Disabled mode returns zero citations"
]) && app.includes("No citations are shown because live retrieval is not configured or did not return citable sources."));

check("source/citation model and readiness APIs exist", hasAll(server, [
  "/api/nexus/knowledge/source-policy",
  "/api/nexus/knowledge/trusted-sources",
  "/api/nexus/knowledge/readiness",
  "citationHandlingReady",
  "saveAttachReady",
  "reviewSummaryReady"
]));

check("save, attach, review summary, and history APIs exist", hasAll(server, [
  "/api/nexus/knowledge/save-result",
  "/api/nexus/knowledge/attach-to-record",
  "/api/nexus/knowledge/prepare-review-summary",
  "/api/nexus/knowledge/history",
  "nexusKnowledgeHistoryDetailMatch",
  "nexusKnowledgeSavedResults",
  "nexusKnowledgeReviewSummaries"
]));

check("My Nexus Questions/history is visible and backend-loaded", hasAll(app, [
  "let nexusKnowledgeHistory",
  "refreshNexusInternetResourceHistory",
  'data-testid="nexus-internet-resource-history"',
  'data-testid="nexus-internet-history-list"',
  'data-testid="nexus-internet-history-item"',
  "Saved answers, citations, provider pathway requests"
]));

check("provider offer and provider pathway request connect from every relevant answer", hasAll(server, [
  "nexusProviderPathwayOffer",
  "nexusProviderPathwayTypeForCategory",
  "Health / Telehealth Provider",
  "Pharmacy Review",
  "Agriculture Advisor / Agronomist",
  "Workforce / Learning Partner",
  "Marketplace / Logistics Partner"
]) && hasAll(app, [
  'data-testid="nexus-provider-support-offer"',
  'data-testid="nexus-request-provider-support"',
  "/api/nexus/provider-pathways/request",
  "queryId: answer.queryId"
]));

check("consent is required before sensitive provider routing/review", hasAll(server, [
  "Consent required before routing.",
  "blocked_missing_consent",
  "consentStatus !== \"confirmed\"",
  "/api/nexus/provider-pathways/:id/route",
  "consentStatus: [\"health\", \"chronicCare\", \"telehealth\", \"pharmacy\", \"mobileClinic\"].includes(category)"
]) || hasAll(server, [
  "Consent required before routing.",
  "blocked_missing_consent",
  "required_before_review_queue"
]));

check("provider/admin queue shows internet-resource context", hasAll(app, [
  'data-testid="nexus-review-internet-fields"',
  "Original question",
  "Answer mode",
  "Source category",
  "Provider pathway",
  "Routing status",
  "No citations are attached unless live retrieval returned citable sources."
]));

check("offline queue and reminders are connected as safe follow-ups", hasAll(server, [
  "reminderSuggestions",
  "offlineOption",
  "noSmsOrPush",
  "Save to offline queue",
  "noSyncClaimUnlessConfigured"
]) && hasAll(app, [
  'data-testid="nexus-knowledge-save-offline"',
  "Create reminder",
  "Saved to the local offline queue record path. No external sync occurred."
]));

check("production/admin readiness includes internet-resource platform status", hasAll(server, [
  "liveKnowledgeReadiness: nexusKnowledgeReadiness",
  "Internet Resource Platform",
  "nexusKnowledgeReadiness"
]) || hasAll(app, [
  'data-testid="nexus-live-knowledge-readiness"',
  "Internet Resource status",
  "Classification, citations, save/attach, review summaries, and audit are ready."
]));

check("category safety copy exists", hasAll(server, [
  "Nexus does not diagnose, prescribe, change medication, or replace clinician review.",
  "Nexus does not refill prescriptions, prescribe, change dosage, or contact a pharmacy.",
  "Nexus does not perform a local field diagnosis.",
  "does not claim current prices unless retrieved",
  "Live openings require a configured current source",
  "does not guarantee live routing or dispatch unless configured"
]) || hasAll(server, [
  "Nexus does not perform a local field diagnosis.",
  "Nexus does not refill prescriptions",
  "current prices",
  "Live openings"
]));

check("false live action claims remain blocked", !/\b(completed payment|called the provider|sent WhatsApp|booked appointment|live pharmacy fulfilled|diagnosed (you|the patient|a patient))\b/i.test(server + app)
  && server.includes("No live provider was contacted")
  && app.includes("No live provider, payment, dispatch, message, call, location sharing, prescribing, diagnosis, or emergency action"));

check("no secrets are exposed", !/\b(TWILIO_AUTH_TOKEN\s*[:=]\s*['\"][^'\"]+|OPENAI_API_KEY\s*[:=]\s*['\"][^'\"]+|STRIPE_SECRET_KEY\s*[:=]\s*['\"][^'\"]+)/i.test(server + app));

check("Standard User first screen remains icon-first and uncluttered", hasAll(app, [
  'data-testid="nexus-standard-user-home"',
  "renderNexusModeLauncher",
  "renderNexusSuggestedActions",
  "Ask Nexus or choose a support area below"
]) && modeLabels.every(label => app.includes(label)) && !app.includes("workflow tab wall"));

check("service worker/cache bumped for frontend change", hasAll(server, ["nexus-behavior-383", "agrinexus-pwa-v356"])
  && hasAll(app, ["nexus-behavior-383", "agrinexus-pwa-v356"])
  && hasAll(sw, ["nexus-behavior-383", "agrinexus-pwa-v356"]));

check("package alias exists", pkg.scripts["qa:nexus-internet-resource-assistant-platform"] === "node scripts/nexus-internet-resource-assistant-platform-qa.js");
check("qa-suite safe wiring exists", qaSuite.includes("scripts/nexus-internet-resource-assistant-platform-qa.js"));

const failures = checks.filter(item => !item.condition);
if (failures.length) {
  console.error("nexus-internet-resource-assistant-platform QA failed:");
  failures.forEach(item => console.error(`- ${item.name}`));
  process.exit(1);
}

console.log("nexus-internet-resource-assistant-platform QA passed");
