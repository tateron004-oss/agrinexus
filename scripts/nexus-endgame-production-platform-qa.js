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
function check(name, condition, detail) {
  checks.push({ name, condition: Boolean(condition), detail });
}

function hasAll(source, needles) {
  return needles.every(needle => source.includes(needle));
}

check("provider organization model exists", hasAll(server, [
  "NEXUS_PROVIDER_ORGANIZATION_TYPES",
  "organizationName",
  "organizationType",
  "acceptedRecordTypes",
  "routingRules",
  "safetyLimitations"
]));

check("provider reviewer model exists", hasAll(server, [
  "NEXUS_PROVIDER_REVIEWER_ROLES",
  "providerOrganizationId",
  "provider_reviewer",
  "pharmacist_reviewer",
  "mobile_clinic_reviewer"
]));

check("provider APIs exist", hasAll(server, [
  "/api/nexus/providers",
  "/api/nexus/providers/status",
  "nexusProviderMatch",
  "nexusProviderReviewersMatch",
  "nexusProviderReviewerMatch"
]));

check("routing engine APIs exist", hasAll(server, [
  "/api/nexus/routing/evaluate",
  "/api/nexus/routing/route-record",
  "/api/nexus/routing/rules",
  "/api/nexus/routing/logs",
  "blocked_missing_provider",
  "blocked_missing_consent",
  "blocked_missing_integration"
]));

check("provider response APIs exist", hasAll(server, [
  "nexusRecordResponsesMatch",
  "nexusResponseMatch",
  "nexusResponsePublishMatch",
  "/api/nexus/my-responses",
  "visibleToUser"
]));

check("case lifecycle APIs exist", hasAll(server, [
  "/api/nexus/cases",
  "nexusCaseMatch",
  "nexusCaseLinkRecordMatch",
  "nexusCaseStatusMatch",
  "nexusCaseTimelineMatch",
  "NEXUS_CASE_STATUSES"
]));

check("integration adapter APIs exist", hasAll(server, [
  "NEXUS_INTEGRATION_ADAPTER_TYPES",
  "/api/nexus/integrations",
  "nexusIntegrationStatusMatch",
  "nexusIntegrationPrepareMatch",
  "nexusIntegrationAttemptMatch",
  "nexusIntegrationLogsMatch"
]));

check("communication and notification APIs exist", hasAll(server, [
  "NEXUS_COMMUNICATION_CHANNELS",
  "/api/nexus/communications",
  "/api/nexus/communications/prepare",
  "nexusCommunicationAttemptMatch",
  "/api/nexus/notifications",
  "nexusNotificationReadMatch"
]));

check("outcome APIs exist", hasAll(server, [
  "/api/nexus/outcomes",
  "nexusCaseOutcomesMatch",
  "provider_declined",
  "needs_follow_up"
]));

check("analytics and readiness APIs exist", hasAll(server, [
  "/api/nexus/analytics/summary",
  "/api/nexus/launch-readiness",
  "/api/nexus/launch-blockers",
  "/api/nexus/languages/status",
  "/api/nexus/profile/language",
  "/api/nexus/endgame/status"
]));

check("legal safety pages and privacy rails remain", hasAll(server, [
  "NEXUS_LEGAL_SAFETY_PAGES",
  "/api/nexus/legal-safety-pages",
  "/api/nexus/privacy/export-request",
  "/api/nexus/privacy/delete-request",
  "draft_pending_legal_review"
]));

check("production readiness includes endgame structure", hasAll(server, [
  "endgameProductionPlatform: nexusEndgameStatus",
  "providerNetwork",
  "routingEngine",
  "responseLoop",
  "caseLifecycle",
  "launchReadiness"
]));

check("layered internet intelligence remains", hasAll(server, [
  "/api/nexus/knowledge/query",
  "/api/nexus/knowledge/classify",
  "/api/nexus/knowledge/source-policy",
  "noFakeCitations"
]) && hasAll(app, [
  "data-testid=\"nexus-knowledge-rail\"",
  "data-testid=\"nexus-knowledge-answer-card\"",
  "data-testid=\"nexus-live-knowledge-readiness\""
]));

check("standard user icon launcher remains intact", [
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
  "Offline Queue",
  "icon: \"🌱\"",
  "icon: \"🩺\"",
  "icon: \"🎵\""
].every(label => app.includes(label)));

check("endgame UI panels exist without first-screen tab regression", hasAll(app, [
  "data-testid=\"nexus-provider-network-status\"",
  "data-testid=\"nexus-routing-engine-status\"",
  "data-testid=\"nexus-case-lifecycle-status\"",
  "data-testid=\"nexus-provider-response-loop-status\"",
  "data-testid=\"nexus-communications-center-status\"",
  "data-testid=\"nexus-launch-readiness-status\"",
  "data-testid=\"nexus-launch-blockers\"",
  "data-testid=\"nexus-high-risk-gates-status\""
]) && !app.includes("developer/audit clutter appears on Standard User first screen"));

check("launch blockers honestly list missing requirements", hasAll(server, [
  "Real authentication not configured",
  "External database not configured",
  "Provider agreements missing",
  "Healthcare compliance review required",
  "Payment provider disabled",
  "Messaging provider disabled",
  "Live retrieval disabled",
  "Legal terms not finalized"
]));

check("false live claims are guarded", hasAll(server, [
  "No live provider is claimed unless",
  "No live provider contact",
  "No diagnosis",
  "No prescribing",
  "No payment",
  "No emergency dispatch",
  "No silent send occurred",
  "No sent claim was made",
  "noLiveTransactionClaim: true",
  "noEmergencyDispatchClaim: true"
]));

check("high-risk gates exist", hasAll(server, [
  "nexusEmergencyHighRiskGates",
  "emergency_dispatch",
  "diagnosis",
  "prescribing",
  "medication_dose_change",
  "payment",
  "live_provider_send",
  "live_pharmacy_fulfillment",
  "camera_location",
  "marketplace_transaction"
]));

check("payment marketplace gates are honest", hasAll(server, [
  "nexusMarketplacePaymentGates",
  "blocked_until_marketplace_provider_and_payment_review",
  "paymentDisabledBlocker",
  "buyerSellerDisclaimer"
]));

check("upload readiness is gated", hasAll(server, [
  "/api/nexus/upload/readiness",
  "disabledUploadUiState",
  "acceptedFileTypes",
  "noUnsafeArbitraryUpload"
]));

check("AI answer governance exists", hasAll(server, [
  "/api/nexus/ai-answer-governance",
  "sourceBackedVsBuiltInLabelReady",
  "citationRequirementForRetrievedAnswers",
  "answer_reported"
]));

check("multilingual status avoids full certification claim", hasAll(server, [
  "NEXUS_LANGUAGE_REGISTRY",
  "partial/local language support",
  "noFullCertificationClaim"
]));

check("service worker/cache bumped", server.includes("nexus-behavior-377")
  && app.includes("nexus-behavior-377")
  && sw.includes("agrinexus-pwa-v351"));

check("package alias exists", pkg.scripts["qa:nexus-endgame-production-platform"] === "node scripts/nexus-endgame-production-platform-qa.js");
check("qa-suite safe wiring exists", qaSuite.includes("scripts/nexus-endgame-production-platform-qa.js"));

const failures = checks.filter(item => !item.condition);
if (failures.length) {
  console.error("nexus-endgame-production-platform QA failed:");
  failures.forEach(item => console.error(`- ${item.name}${item.detail ? `: ${item.detail}` : ""}`));
  process.exit(1);
}

console.log("nexus-endgame-production-platform QA passed");
