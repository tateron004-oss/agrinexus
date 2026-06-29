const crypto = require("node:crypto");
const runtime = require("./nexus-assistant-runtime-entrypoint.js");
const sourceResultContract = require("../public/nexus-live-source-result-contract.js");

const N100_REAL_PROVIDER_PROMPTS = Object.freeze([
  "What is the weather in Stockton, CA?",
  "Should I irrigate this week?",
  "What current crop disease updates should farmers know?",
  "Find agriculture training resources.",
  "Find farm jobs near Stockton, CA.",
  "What current agriculture news should farmers know?",
  "Find agriculture training videos.",
  "Browse AgriTrade options.",
  "Track this shipment TEST123.",
  "Find nearby agriculture training in Stockton, CA."
]);

const HIGH_RISK_TERMS = Object.freeze([
  /\b(call|message|whatsapp|telegram|sms|email)\b/i,
  /\b(book|schedule|dispatch|emergency)\b/i,
  /\b(buy|purchase|pay|payment|checkout)\b/i,
  /\b(upload|diagnose|prescribe|refill)\b/i,
  /\b(use my location|share my location|open camera|use my camera)\b/i
]);

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function nowIso() {
  return new Date().toISOString();
}

function stableId(prefix, value) {
  return `${prefix}-${crypto.createHash("sha256").update(String(value || "")).digest("hex").slice(0, 12)}`;
}

function classifyN100RealProviderPrompt(prompt) {
  const text = String(prompt || "").toLowerCase();
  if (HIGH_RISK_TERMS.some(pattern => pattern.test(text))) return "blocked-high-risk";
  if (/\b(weather|forecast|rain|storm|temperature)\b/.test(text)) return "weather";
  if (/\birrigat|water\b/.test(text)) return "irrigation-support";
  if (/\bdisease|pest|crop issue|crop issues\b/.test(text)) return "crop-disease-updates";
  if (/\bjob|jobs|hiring|employment|career\b/.test(text)) return "jobs-workforce";
  if (/\bnews|current agriculture\b/.test(text)) return "agriculture-news";
  if (/\bvideo|videos|media\b/.test(text)) return "training-media";
  if (/\bagritrade|marketplace|browse\b/.test(text)) return "marketplace-browse";
  if (/\btrack|shipment|delivery\b/.test(text)) return "shipment-tracking";
  if (/\btraining|education|course|nearby agriculture training\b/.test(text)) return "training-resources";
  if (/\bagriculture|farm|farmer\b/.test(text)) return "agriculture-context";
  return "general-source-question";
}

function buildN100ProviderEnv(fetchImpl, overrides = {}) {
  return Object.freeze(Object.assign({
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED: "true",
    NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED: "true",
    NEXUS_WEATHER_PROVIDER_ENABLED: "true",
    NEXUS_WEATHER_OPEN_METEO_PROVIDER_ENABLED: "true",
    NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED: "true",
    NEXUS_AGRICULTURE_CONTEXT_PUBLIC_PROVIDER_ENABLED: "true",
    NEXUS_NEWS_SECURITY_PROVIDER_ENABLED: "true",
    NEXUS_NEWS_SECURITY_PUBLIC_PROVIDER_ENABLED: "true",
    NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "true",
    NEXUS_JOB_SEARCH_PUBLIC_PROVIDER_ENABLED: "true",
    NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED: "true",
    NEXUS_MUSIC_MEDIA_PUBLIC_PROVIDER_ENABLED: "true",
    NEXUS_SHIPMENT_TRACKING_PROVIDER_ENABLED: "false",
    NEXUS_WEATHER_FETCH_IMPL: fetchImpl,
    NEXUS_AGRICULTURE_CONTEXT_FETCH_IMPL: fetchImpl,
    NEXUS_NEWS_SECURITY_FETCH_IMPL: fetchImpl,
    NEXUS_JOB_SEARCH_FETCH_IMPL: fetchImpl,
    NEXUS_MUSIC_MEDIA_FETCH_IMPL: fetchImpl
  }, overrides));
}

function buildInternalSourceResult({ category, sourceName, sourceUrl, query, summary, confidence = "medium" }) {
  return sourceResultContract.normalizeSourceResult({
    sourceResultId: stableId("n100-source", `${category}:${query}`),
    requestType: "agriculture-context",
    providerName: "n100-real-provider-data-core",
    providerMode: "fixture",
    sourceName,
    sourceCategory: category,
    sourceUrl,
    query,
    resultSummary: summary,
    rawResultAvailable: false,
    freshnessStatus: "recent",
    confidenceLevel: confidence,
    limitationNotes: "Prototype source path is read-only. Nexus cannot execute purchases, provider contact, dispatch, payment, or location sharing from this answer.",
    evidenceStatus: "fixture-backed",
    sourceStatus: "source-query-ready"
  });
}

function sourceResultToCitation(sourceResult) {
  return Object.freeze({
    sourceName: sourceResult.sourceName,
    sourceUrl: sourceResult.sourceUrl,
    evidenceStatus: sourceResult.evidenceStatus,
    freshnessStatus: sourceResult.freshnessStatus
  });
}

function buildSafetyPosture() {
  return Object.freeze({
    readOnly: true,
    previewOnly: true,
    sourceBackedWhenAvailable: true,
    noExecutionAuthorized: true,
    noLocationPermissionRequested: true,
    noBrowserGeolocation: true,
    noProviderContactAuthorized: true,
    noDispatchAuthorized: true,
    noBackendWritePerformed: true,
    providerHandoffAllowed: false,
    marketplaceExecutionAllowed: false,
    medicalOrPharmacyExecutionAllowed: false
  });
}

function buildAuditEvent(prompt, category) {
  return Object.freeze({
    auditEventType: "n100-real-provider-data-core-read-only-answer",
    promptHash: stableId("prompt", prompt),
    category,
    actionTaken: "read-only-source-answer",
    executionAuthority: false,
    createdAt: nowIso()
  });
}

function normalizeRuntimeResponse(prompt, category, response) {
  const citations = Array.isArray(response.citations) ? response.citations : [];
  return Object.freeze({
    schemaVersion: "nexus.n100.realProviderDataCore.v1",
    prompt,
    category,
    selectedProvider: response.selectedProvider || null,
    providerStatus: response.providerStatus || "unknown",
    answer: response.answer || response.summary || "Source response unavailable.",
    sourceResults: [],
    citations: Object.freeze(citations),
    sourceLabels: Object.freeze(Array.isArray(response.sourceLabels) ? response.sourceLabels : []),
    retrievedAt: response.retrievedAt || nowIso(),
    freshnessStatus: response.freshnessStatus || "unknown",
    confidence: response.confidence || "low",
    trustTier: response.trustTier || "unavailable",
    safeFollowUps: Object.freeze(Array.isArray(response.safeFollowUps) ? response.safeFollowUps : []),
    safetyPosture: buildSafetyPosture(),
    auditEvent: buildAuditEvent(prompt, category),
    providerError: response.providerStatus === "error" ? "provider-error-normalized" : "",
    skippedMissingConfig: response.providerStatus === "provider_not_configured",
    noExecutionAuthorized: true,
    noLocationPermissionRequested: true,
    noDispatchAuthorized: true,
    providerHandoffAllowed: false,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true
  });
}

function buildSourceResultResponse(prompt, category, sourceResult) {
  const citation = sourceResultToCitation(sourceResult);
  return Object.freeze({
    schemaVersion: "nexus.n100.realProviderDataCore.v1",
    prompt,
    category,
    selectedProvider: sourceResult.providerName,
    providerStatus: sourceResult.sourceStatus === "source-result-available" ? "ready" : "source_query_ready",
    answer: sourceResult.resultSummary,
    sourceResults: Object.freeze([sourceResult]),
    citations: Object.freeze([citation]),
    sourceLabels: Object.freeze([sourceResult.sourceName]),
    retrievedAt: sourceResult.retrievedAt,
    freshnessStatus: sourceResult.freshnessStatus,
    confidence: sourceResult.confidenceLevel,
    trustTier: sourceResult.evidenceStatus,
    safeFollowUps: Object.freeze(["Compare sources", "Narrow by location", "Ask for next safe step"]),
    safetyPosture: buildSafetyPosture(),
    auditEvent: buildAuditEvent(prompt, category),
    providerError: "",
    skippedMissingConfig: false,
    noExecutionAuthorized: true,
    noLocationPermissionRequested: true,
    noDispatchAuthorized: true,
    providerHandoffAllowed: false,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true
  });
}

function buildBlockedResponse(prompt, category) {
  return Object.freeze({
    schemaVersion: "nexus.n100.realProviderDataCore.v1",
    prompt,
    category,
    selectedProvider: null,
    providerStatus: "blocked_by_policy",
    answer: "I can prepare source-backed information, but I cannot execute calls, messages, payments, dispatch, provider contact, medical, pharmacy, marketplace, camera, or location actions from this lane.",
    sourceResults: Object.freeze([]),
    citations: Object.freeze([]),
    sourceLabels: Object.freeze([]),
    retrievedAt: nowIso(),
    freshnessStatus: "unavailable",
    confidence: "low",
    trustTier: "policy-blocked",
    safeFollowUps: Object.freeze(["Ask for information only", "Cancel"]),
    safetyPosture: buildSafetyPosture(),
    auditEvent: buildAuditEvent(prompt, category),
    providerError: "",
    skippedMissingConfig: false,
    noExecutionAuthorized: true,
    noLocationPermissionRequested: true,
    noDispatchAuthorized: true,
    providerHandoffAllowed: false,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true
  });
}

function fallbackPromptForCategory(prompt, category) {
  if (category === "irrigation-support") return "What is the weather in Stockton, CA?";
  if (category === "crop-disease-updates") return "What current crop disease updates should farmers know?";
  if (category === "training-resources") return "Find agriculture training resources.";
  if (category === "agriculture-news") return "What current agriculture news should farmers know?";
  if (category === "training-media") return "Find agriculture training videos.";
  if (category === "marketplace-browse") return "Browse AgriTrade marketplace options.";
  if (category === "jobs-workforce") return "Find farm jobs near Stockton, CA.";
  return prompt;
}

function buildFixtureOnlyAnswer(prompt, category) {
  if (category === "shipment-tracking") {
    return buildSourceResultResponse(prompt, category, buildInternalSourceResult({
      category: "shipment-tracking",
      sourceName: "Shipment provider readiness contract",
      sourceUrl: "provider-required:shipment-tracking",
      query: prompt,
      summary: "Shipment tracking requires a configured read-only carrier/provider connector. Nexus did not contact a carrier, open a provider, or create a delivery action.",
      confidence: "low"
    }));
  }
  if (category === "marketplace-browse") {
    return buildSourceResultResponse(prompt, category, buildInternalSourceResult({
      category: "marketplace-browse",
      sourceName: "AgriTrade browse-only module",
      sourceUrl: "internal:agritrade-browse-only",
      query: prompt,
      summary: "AgriTrade can be represented as a browse-only marketplace domain. Nexus did not buy, sell, contact a seller, process payment, or create an account action.",
      confidence: "medium"
    }));
  }
  return buildSourceResultResponse(prompt, category, buildInternalSourceResult({
    category: "source-readiness",
    sourceName: "Nexus source readiness contract",
    sourceUrl: "internal:n100-source-ready",
    query: prompt,
    summary: "Nexus can prepare a read-only source-backed answer for this category when a configured public or partner source is available.",
    confidence: "medium"
  }));
}

async function answerN100RealProviderQuestion(prompt, context = {}, env = process.env) {
  const normalizedPrompt = String(prompt || "").trim();
  const category = classifyN100RealProviderPrompt(normalizedPrompt);
  if (!hasText(normalizedPrompt)) return buildBlockedResponse(normalizedPrompt, "unsupported");
  if (category === "blocked-high-risk") return buildBlockedResponse(normalizedPrompt, category);
  if (category === "shipment-tracking" || category === "marketplace-browse") return buildFixtureOnlyAnswer(normalizedPrompt, category);

  const providerPrompt = fallbackPromptForCategory(normalizedPrompt, category);
  const response = await runtime.buildAssistantRuntimeResponseAsync(providerPrompt, context, env);
  return normalizeRuntimeResponse(normalizedPrompt, category, response);
}

function isSafeN100RealProviderAnswer(answer) {
  return Boolean(answer)
    && answer.schemaVersion === "nexus.n100.realProviderDataCore.v1"
    && answer.noExecutionAuthorized === true
    && answer.noLocationPermissionRequested === true
    && answer.noDispatchAuthorized === true
    && answer.providerHandoffAllowed === false
    && answer.noProviderContactAuthorized === true
    && answer.noBackendWritePerformed === true
    && answer.safetyPosture
    && answer.safetyPosture.readOnly === true
    && answer.safetyPosture.noBrowserGeolocation === true;
}

module.exports = Object.freeze({
  N100_REAL_PROVIDER_PROMPTS,
  classifyN100RealProviderPrompt,
  buildN100ProviderEnv,
  answerN100RealProviderQuestion,
  isSafeN100RealProviderAnswer
});
