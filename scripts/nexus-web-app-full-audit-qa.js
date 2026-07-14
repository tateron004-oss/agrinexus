const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const index = read("public/index.html");
const css = read("public/styles.css");
const sw = read("public/sw.js");
const envExample = read(".env.example");
const renderYaml = read("render.yaml");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

const checks = [];
function check(name, condition) {
  checks.push({ name, condition: Boolean(condition) });
}

function hasAll(source, tokens) {
  return tokens.every(token => source.includes(token));
}

function hasNone(source, patterns) {
  return patterns.every(pattern => !pattern.test(source));
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

const modeCommands = [
  "Nexus, open agriculture help.",
  "Nexus, start a telehealth intake.",
  "Nexus, record my blood pressure.",
  "Nexus, prepare mobile clinic support.",
  "Nexus, prepare pharmacy support.",
  "Help me find agriculture training.",
  "Nexus, find farm jobs.",
  "Nexus, open AgriTrade.",
  "Help me plan a field visit route.",
  "Nexus, play music.",
  "Create a reminder.",
  "Show offline queue status."
];

const knowledgeEnv = [
  "NEXUS_LIVE_KNOWLEDGE_ENABLED",
  "NEXUS_LIVE_KNOWLEDGE_PROVIDER",
  "NEXUS_LIVE_KNOWLEDGE_API_KEY",
  "NEXUS_LIVE_KNOWLEDGE_PROVIDER_ENDPOINT",
  "NEXUS_LIVE_KNOWLEDGE_MAX_RESULTS",
  "NEXUS_LIVE_KNOWLEDGE_TIMEOUT_MS",
  "NEXUS_LIVE_KNOWLEDGE_SAFE_MODE",
  "OPENAI_WEB_SEARCH_ENABLED",
  "TAVILY_API_KEY",
  "BRAVE_SEARCH_API_KEY",
  "EXA_API_KEY"
];

const providerNames = [
  "tavily",
  "brave",
  "exa",
  "openai-web-search",
  "provider-endpoint"
];

check("clean live knowledge environment documentation exists", hasAll(envExample, [
  "Supported NEXUS_LIVE_KNOWLEDGE_PROVIDER values:",
  "tavily                 requires TAVILY_API_KEY",
  "brave                  requires BRAVE_SEARCH_API_KEY",
  "exa                    requires EXA_API_KEY",
  "openai-web-search      requires OPENAI_WEB_SEARCH_ENABLED=true and OPENAI_API_KEY",
  "provider-endpoint      requires NEXUS_LIVE_KNOWLEDGE_PROVIDER_ENDPOINT",
  "NEXUS_LIVE_KNOWLEDGE_API_KEY=",
  "NEXUS_LIVE_KNOWLEDGE_ENABLED=false",
  "NEXUS_LIVE_KNOWLEDGE_MAX_RESULTS=5",
  "NEXUS_LIVE_KNOWLEDGE_TIMEOUT_MS=9000",
  "NEXUS_LIVE_KNOWLEDGE_SAFE_MODE=true"
]));

check("Render includes canonical live knowledge environment variables", knowledgeEnv.every(token => renderYaml.includes(`key: ${token}`)));

check("retrieval status and readiness endpoints exist", hasAll(server, [
  "/api/nexus/knowledge/status",
  "/api/nexus/knowledge/readiness",
  "function nexusKnowledgeProviderStatus",
  "function nexusLiveKnowledgeApiKeyForProvider",
  "function nexusKnowledgeProviderErrorMessage",
  "function nexusKnowledgeReadiness",
  "missingEnv",
  "supportedProviders",
  "providerState",
  "unsupported_provider",
  "NEXUS_LIVE_KNOWLEDGE_PROVIDER must be one of"
]));

check("supported providers and required env names are source-level explicit", providerNames.every(provider => server.includes(provider))
  && hasAll(server, [
    'requiredEnv: ["TAVILY_API_KEY"]',
    'requiredEnv: ["BRAVE_SEARCH_API_KEY"]',
    'requiredEnv: ["EXA_API_KEY"]',
    'requiredEnv: ["OPENAI_WEB_SEARCH_ENABLED", "OPENAI_API_KEY"]',
    'requiredEnv: ["NEXUS_LIVE_KNOWLEDGE_PROVIDER_ENDPOINT"]',
    'fallbackEnv: ["NEXUS_LIVE_KNOWLEDGE_API_KEY"]',
    'unsupportedProvider ? "blocked"',
    'unsupportedProvider ? "unsupported_provider"'
  ]));

check("disabled retrieval is honest and citation-free", hasAll(server, [
  "NEXUS_KNOWLEDGE_DISABLED_MESSAGE",
  "Live internet retrieval is not configured yet. Nexus can still use built-in guidance and prepare a question for review.",
  "buildNexusKnowledgeDisabledResult",
  "citations: []",
  "No fake citations"
]) && app.includes("No citations are shown because live retrieval is not configured or did not return citable sources."));

check("retrieved source path requires normalized citations", hasAll(server, [
  "normalizeNexusKnowledgeCitations",
  "sourceBacked: true",
  "retrieved_source",
  "providerResult.citations"
]));

check("global Ask Nexus and mode Ask with sources are wired", hasAll(app, [
  'request("/api/nexus/intelligence/ask"',
  "runNexusKnowledgeQuery(command",
  'data-testid="nexus-knowledge-rail"',
  'data-testid="nexus-knowledge-question-input"',
  'data-testid="nexus-knowledge-ask"',
  'data-testid="nexus-mode-ask-with-sources"',
  'data-testid="nexus-mode-knowledge-prompt"'
]));

check("all 12 Standard User mode labels and command routes remain present", modeLabels.every(label => app.includes(label))
  && modeCommands.every(command => app.includes(command)));

check("classification covers all 12 modes plus provider/admin", hasAll(server, [
  "function nexusKnowledgeCategoryForQuestion",
  "agriculture",
  "chronicCare",
  "telehealth",
  "mobileClinic",
  "pharmacy",
  "learning",
  "jobs",
  "marketplace",
  "maps",
  "music_media",
  "reminders",
  "offline",
  "providerAdmin"
]));

check("save, attach, history, and review summary contracts exist", hasAll(server, [
  "/api/nexus/knowledge/save-result",
  "/api/nexus/knowledge/attach-to-record",
  "/api/nexus/knowledge/prepare-review-summary",
  "/api/nexus/knowledge/history",
  "nexusKnowledgeSavedResults",
  "nexusKnowledgeReviewSummaries"
]) && hasAll(app, [
  'data-testid="nexus-knowledge-save-result"',
  'data-testid="nexus-knowledge-save-target"',
  "Save or attach as",
  'data-testid="nexus-internet-resource-history"',
  "My Nexus Questions"
]));

check("provider/advisor pathway remains preparation-only and consent-gated", hasAll(server, [
  "nexusProviderPathwayOffer",
  "Need provider support?",
  "Provider pathway not configured yet; Nexus can save this locally.",
  "No live provider was contacted",
  "Consent required before routing.",
  "blocked_missing_consent",
  "required_before_review_queue"
]) && hasAll(app, [
  'data-testid="nexus-provider-support-offer"',
  'data-testid="nexus-request-provider-support"',
  "Prepared locally / not sent",
  "No live provider, payment, dispatch, message, call, location sharing, prescribing, diagnosis, or emergency action"
]));

check("Provider/Admin review queue exposes internet-resource context", hasAll(app, [
  'data-testid="nexus-review-internet-fields"',
  "Original question",
  "Answer mode",
  "Source category",
  "Provider pathway",
  "Consent",
  "Routing status",
  "No citations are attached unless live retrieval returned citable sources."
]));

check("offline queue and reminder flows are honest", hasAll(server, [
  "offlineOption",
  "Save to offline queue",
  "noSyncClaimUnlessConfigured",
  "reminderSuggestions",
  "noSmsOrPush"
]) && hasAll(app, [
  'data-testid="nexus-knowledge-save-offline"',
  "Saved to the local offline queue record path. No external sync occurred.",
  "Create reminder"
]));

check("language is consistent for Standard User source-backed UX", hasAll(app + server, [
  "Ask Nexus",
  "Ask with sources",
  "Live internet retrieval",
  "Built-in guidance",
  "Prepared locally / not sent",
  "Provider/Admin review queue",
  "Internet Resource status"
]));

check("Standard User first screen remains conversation-first, not tab-heavy", hasAll(app, [
  'data-nexus-os-standard-startup="true-conversation"',
  'data-nexus-true-conversational-root="true"',
  "Hello. I'm Nexus.",
  "Enable voice once, press Talk, or type your request.",
  'data-standard-user-startup-visible="false" hidden aria-hidden="true"'
]) && hasAll(css, [
  "body.user-mode .nexus-mode-launcher",
  "body.user-mode .nexus-mode-launcher strong",
  "body.user-mode .nexus-mode-launcher small"
]));

check("production readiness panels include Internet Resource status", hasAll(server + app, [
  "Internet Resource status",
  "liveKnowledgeReadiness",
  "nexusKnowledgeReadiness"
]));

check("service worker and cache versions are consistent", (() => {
  const appBuild = app.match(/AGRINEXUS_BUILD_VERSION\s*=\s*"([^"]+)"/)?.[1];
  const appCache = app.match(/AGRINEXUS_PWA_CACHE_VERSION\s*=\s*"([^"]+)"/)?.[1];
  const serverBuild = server.match(/AGRINEXUS_WEB_BUILD_VERSION\s*=\s*"([^"]+)"/)?.[1];
  const serverCache = server.match(/AGRINEXUS_PWA_CACHE_VERSION\s*=\s*"([^"]+)"/)?.[1];
  const swBuild = sw.match(/BUILD_VERSION\s*=\s*"([^"]+)"/)?.[1];
  const swCache = sw.match(/CACHE_NAME\s*=\s*"([^"]+)"/)?.[1];
  return Boolean(appBuild && appCache && appBuild === serverBuild && appBuild === swBuild && appCache === serverCache && appCache === swCache);
})());

check("key browser selectors and accessibility hooks exist", hasAll(app, [
  'translateText("Talk to Nexus")',
  'translateText("Send to Nexus")',
  'translateText("Learn what Nexus can do")',
  'data-nexus-mode-shortcut',
  'data-nexus-core-feature',
  'data-testid="nexus-live-knowledge-readiness"',
  'data-testid="nexus-knowledge-rail"'
]));

check("no secret values are exposed in tracked source", hasNone(server + app + index + envExample + renderYaml, [
  /sk-(?!plan-|action-)[A-Za-z0-9_-]{20,}/,
  /tvly-[A-Za-z0-9_-]{20,}/,
  /TWILIO_AUTH_TOKEN\s*[:=]\s*['"][^'"]+['"]/i,
  /STRIPE_SECRET_KEY\s*[:=]\s*['"][^'"]+['"]/i,
  /OPENAI_API_KEY\s*[:=]\s*['"][^'"]+['"]/i
]));

check("unsafe or false claims are absent from runtime source", hasNone(server + app + index, [
  /(?<!no )live provider connected/i,
  /live pharmacy fulfillment/i,
  /emergency dispatch is active/i,
  /payment (was )?processed/i,
  /marketplace transaction completed/i,
  /SMS was sent successfully/i,
  /WhatsApp was sent successfully/i,
  /HIPAA compliant/i,
  /GDPR compliant/i,
  /diagnosed you/i,
  /medication dose changed/i
]));

check("existing adjacent QA scripts remain wired", [
  "scripts/nexus-internet-resource-assistant-platform-qa.js",
  "scripts/nexus-layered-internet-intelligence-qa.js",
  "scripts/nexus-live-knowledge-retrieval-qa.js",
  "scripts/nexus-production-platform-rails-qa.js",
  "scripts/nexus-pilot-platform-foundation-qa.js",
  "scripts/nexus-safety-trust-boundary-hardening-qa.js"
].every(script => qaSuite.includes(script)));

check("package alias and safe-suite wiring exist", packageJson.scripts["qa:nexus-web-app-full-audit"] === "node scripts/nexus-web-app-full-audit-qa.js"
  && qaSuite.includes("scripts/nexus-web-app-full-audit-qa.js"));

const failures = checks.filter(item => !item.condition);
if (failures.length) {
  console.error("nexus-web-app-full-audit QA failed:");
  failures.forEach(item => console.error(`- ${item.name}`));
  process.exit(1);
}

console.log("nexus-web-app-full-audit QA passed");
