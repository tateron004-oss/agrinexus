const crypto = require("node:crypto");
const dialogue = require("../public/nexus-assistant-dialogue-engine-contract.js");
const { isSafeReadOnlySourceResult } = require("../public/nexus-live-source-result-contract.js");
const registry = require("../public/nexus-live-provider-capability-registry.js");
const liveSourceAudit = require("../public/nexus-live-source-audit-logging-contract.js");
const trustPolicy = require("../public/nexus-live-source-trust-freshness-policy.js");
const weather = require("./nexus-weather-source-provider.js");
const agriculture = require("./nexus-agriculture-context-source-provider.js");
const newsSecurity = require("./nexus-news-security-source-provider.js");
const shipment = require("./nexus-shipment-tracking-source-provider.js");
const jobs = require("./nexus-job-search-source-provider.js");
const musicMedia = require("./nexus-music-media-source-provider.js");

const HIGH_RISK_BLOCKED_INTENTS = Object.freeze([
  "calls-messaging-intent",
  "appointment-service-request",
  "payment-mobile-money-intent",
  "location-dispatch-intent",
  "camera-image-intent",
  "emergency-intent",
  "medical-pharmacy-intent",
  "marketplace-request"
]);

const INTENT_TO_PROVIDER = Object.freeze({
  weather: "weather",
  "agriculture-context": "agriculture-context",
  "agriculture-help": "agriculture-context",
  "current-events-news": "news-security",
  "conflict-security": "news-security",
  "job-search": "job-search",
  "job-application-preparation": "job-search",
  "resume-cover-letter-preparation": "job-search",
  "shipment-tracking": "shipment-tracking",
  "music-media": "music-media"
});

const EXECUTION_PHRASE_PATTERNS = Object.freeze([
  /\bsubmit\b/i,
  /\bapply\s+(for|to|now)\b/i,
  /\bsend\b/i,
  /\bbook\b/i,
  /\bschedule\b/i,
  /\bbuy\b/i,
  /\bpay\b/i,
  /\bcall\b/i,
  /\bmessage\b/i,
  /\bdispatch\b/i
]);

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizeQuery(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function stableRequestId(input) {
  return `live-source-${crypto.createHash("sha256").update(String(input || "")).digest("hex").slice(0, 16)}`;
}

function buildSafetyPosture() {
  return Object.freeze({
    readOnly: true,
    previewOnly: true,
    noExecutionAuthorized: true,
    noLocationPermissionRequested: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true,
    noDispatchAuthorized: true,
    standardUserRuntimeActivated: false
  });
}

function buildAuditEvent({ requestId, intent, providerId, providerStatus, allowed, blockedReason, riskTier, confidence, sourceCount, citationCount }) {
  return liveSourceAudit.buildLiveSourceRetrievalAuditEvent({
    requestId,
    providerId,
    intent,
    riskTier,
    allowed,
    blockedReason,
    providerStatus,
    retrievedAt: new Date().toISOString(),
    sourceCount,
    citationCount,
    confidence
  });
}

function buildBlockedResult(input, classification, reason) {
  const requestId = stableRequestId(input);
  const intent = classification.intentType;
  const riskTier = HIGH_RISK_BLOCKED_INTENTS.includes(intent) ? "high" : "medium";
  const safetyPosture = buildSafetyPosture();
  const auditEvent = buildAuditEvent({
    requestId,
    intent,
    providerId: "none",
    providerStatus: "blocked_by_policy",
    allowed: false,
    blockedReason: reason,
    riskTier,
    confidence: "low",
    sourceCount: 0,
    citationCount: 0
  });
  const trustAssessment = trustPolicy.assessLiveSourceTrust({
    domain: intent,
    sourceResult: null,
    citations: [],
    confidence: "low",
    retrievedAt: auditEvent.retrievedAt
  });
  return Object.freeze({
    requestId,
    intent,
    normalizedQuery: normalizeQuery(input),
    selectedProvider: null,
    providerStatus: "blocked_by_policy",
    allowed: false,
    blockedReason: reason,
    riskTier,
    retrievedAt: auditEvent.retrievedAt,
    results: [],
    citations: [],
    confidence: "low",
    auditEvent,
    trustAssessment,
    safetyPosture,
    userFacingSummary: "I can explain safe next steps, but I cannot execute that action or contact anyone.",
    suggestedFollowUps: ["Ask a follow-up question", "Explain this result"],
    noExecutionAuthorized: true,
    noLocationPermissionRequested: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true
  });
}

function buildProviderRequest(providerId, input, classification, context) {
  if (providerId === "weather") {
    return { locationText: classification.location || (context && context.lastLocation) || "", timeframe: /tomorrow/i.test(input) ? "tomorrow" : "current" };
  }
  if (providerId === "agriculture-context") {
    return { topic: input, locationText: classification.location || "" };
  }
  if (providerId === "news-security") {
    return { regionOrTopic: classification.location || input };
  }
  if (providerId === "job-search") {
    return { query: input, locationText: classification.location || "" };
  }
  if (providerId === "shipment-tracking") {
    return { query: input };
  }
  if (providerId === "music-media") {
    return { mediaRequest: input, providerPreference: /spotify/i.test(input) ? "Spotify" : "" };
  }
  return {};
}

function getProviderSourceResult(providerId, request, env) {
  if (providerId === "weather") return weather.getWeatherSourceResult(request, env);
  if (providerId === "agriculture-context") return agriculture.getAgricultureContextSourceResult(request, env);
  if (providerId === "news-security") return newsSecurity.getNewsSecuritySourceResult(request, env);
  if (providerId === "job-search") return jobs.getJobSearchSourceResult(request, env);
  if (providerId === "shipment-tracking") return shipment.getShipmentTrackingSourceResult(request, env);
  if (providerId === "music-media") return musicMedia.getMusicMediaSourceResult(request, env);
  return null;
}

function inferProviderStatus(sourceResult, provider) {
  if (!sourceResult) return "blocked_by_policy";
  if (sourceResult.sourceStatus === "provider-not-configured") return "missing_config";
  if (sourceResult.sourceStatus === "provider-required") return "missing_config";
  if (sourceResult.sourceStatus === "source-error") return "provider_error";
  if (sourceResult.providerMode === "fixture") return "fixture_only";
  if (sourceResult.sourceStatus === "source-result-available") return "ready";
  return provider ? provider.providerStatus : "disabled";
}

function buildLiveSourceOrchestrationResult(input, context = {}, env = process.env) {
  const normalizedQuery = normalizeQuery(input);
  const classification = dialogue.classifyAssistantDialogueIntent(normalizedQuery, context);

  if (!hasText(normalizedQuery)) return buildBlockedResult(input, classification, "empty_query");
  if (EXECUTION_PHRASE_PATTERNS.some(pattern => pattern.test(normalizedQuery))) {
    return buildBlockedResult(input, classification, "execution_phrase_blocked");
  }
  if (HIGH_RISK_BLOCKED_INTENTS.includes(classification.intentType)) {
    return buildBlockedResult(input, classification, "execution_or_high_risk_intent_blocked");
  }

  const providerId = INTENT_TO_PROVIDER[classification.intentType] || null;
  if (!providerId) return buildBlockedResult(input, classification, "no_read_only_provider_for_intent");

  const provider = registry.getLiveProviderCapability(providerId);
  if (!provider) return buildBlockedResult(input, classification, "provider_not_registered");

  const requestId = stableRequestId(normalizedQuery);
  const providerRequest = buildProviderRequest(providerId, normalizedQuery, classification, context);
  const sourceResult = getProviderSourceResult(providerId, providerRequest, env);
  const safeSource = isSafeReadOnlySourceResult(sourceResult);
  const providerStatus = inferProviderStatus(sourceResult, provider);
  const allowed = safeSource && provider.forbidsExecution && provider.forbidsProviderContact && provider.forbidsBackendWrites;
  const blockedReason = allowed ? "" : "source_result_failed_safety_contract";
  const citations = sourceResult && sourceResult.sourceName ? [Object.freeze({
    sourceName: sourceResult.sourceName,
    sourceUrl: sourceResult.sourceUrl,
    evidenceStatus: sourceResult.evidenceStatus,
    freshnessStatus: sourceResult.freshnessStatus
  })] : [];
  const results = sourceResult ? [sourceResult] : [];
  const confidence = sourceResult ? sourceResult.confidenceLevel : "low";
  const safetyPosture = buildSafetyPosture();
  const auditEvent = buildAuditEvent({
    requestId,
    intent: classification.intentType,
    providerId,
    providerStatus,
    allowed,
    blockedReason,
    riskTier: provider.riskTier,
    confidence,
    sourceCount: results.length,
    citationCount: citations.length
  });
  const trustAssessment = trustPolicy.assessLiveSourceTrust({
    domain: providerId,
    sourceResult,
    citations,
    confidence,
    retrievedAt: auditEvent.retrievedAt
  });

  return Object.freeze({
    requestId,
    intent: classification.intentType,
    normalizedQuery,
    selectedProvider: providerId,
    providerStatus,
    allowed,
    blockedReason,
    riskTier: provider.riskTier,
    retrievedAt: auditEvent.retrievedAt,
    results,
    citations,
    confidence,
    auditEvent,
    trustAssessment,
    safetyPosture,
    userFacingSummary: sourceResult ? sourceResult.resultSummary : "No read-only source result is available.",
    suggestedFollowUps: ["Ask a follow-up question", "Compare sources", "Explain this result", "Review source details"],
    noExecutionAuthorized: true,
    noLocationPermissionRequested: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true
  });
}

function isSafeLiveSourceOrchestrationResult(result) {
  if (!result || typeof result !== "object" || Array.isArray(result)) return false;
  if (result.noExecutionAuthorized !== true) return false;
  if (result.noLocationPermissionRequested !== true) return false;
  if (result.noProviderContactAuthorized !== true) return false;
  if (result.noBackendWritePerformed !== true) return false;
  if (!result.safetyPosture || result.safetyPosture.readOnly !== true || result.safetyPosture.previewOnly !== true) return false;
  if (!result.auditEvent || result.auditEvent.redactionStatus !== "no-secrets-or-sensitive-payloads") return false;
  return true;
}

module.exports = Object.freeze({
  HIGH_RISK_BLOCKED_INTENTS,
  INTENT_TO_PROVIDER,
  EXECUTION_PHRASE_PATTERNS,
  buildLiveSourceOrchestrationResult,
  isSafeLiveSourceOrchestrationResult
});
