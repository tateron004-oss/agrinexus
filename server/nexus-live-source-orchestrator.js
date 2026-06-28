const crypto = require("node:crypto");
const dialogue = require("../public/nexus-assistant-dialogue-engine-contract.js");
const sourceResultContract = require("../public/nexus-live-source-result-contract.js");
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

const DEFAULT_PROVIDER_TIMEOUT_MS = 7000;
const MIN_PROVIDER_TIMEOUT_MS = 250;
const MAX_PROVIDER_TIMEOUT_MS = 12000;
const RELIABILITY_CACHE_POLICY = Object.freeze({
  enabled: false,
  mode: "no-cache",
  reason: "Assistant runtime must not cache secrets, sensitive user-private data, or provider payloads in AR8."
});

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizeQuery(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function stableRequestId(input) {
  return `live-source-${crypto.createHash("sha256").update(String(input || "")).digest("hex").slice(0, 16)}`;
}

function resolveProviderTimeoutMs(env = process.env) {
  const parsed = Number(env.NEXUS_ASSISTANT_PROVIDER_TIMEOUT_MS || DEFAULT_PROVIDER_TIMEOUT_MS);
  if (!Number.isFinite(parsed)) return DEFAULT_PROVIDER_TIMEOUT_MS;
  return Math.min(MAX_PROVIDER_TIMEOUT_MS, Math.max(MIN_PROVIDER_TIMEOUT_MS, Math.round(parsed)));
}

function reliabilityPosture(overrides = {}) {
  return Object.freeze({
    providerTimeoutMs: Number.isFinite(overrides.providerTimeoutMs) ? overrides.providerTimeoutMs : DEFAULT_PROVIDER_TIMEOUT_MS,
    providerTimedOut: overrides.providerTimedOut === true,
    providerErrorNormalized: overrides.providerErrorNormalized === true,
    safeUnavailableState: overrides.safeUnavailableState === true,
    retryAllowed: false,
    rateLimitSafe: true,
    cachePolicy: RELIABILITY_CACHE_POLICY,
    noSecretsCached: true,
    noSensitiveUserDataCached: true,
    noExecutionFallback: true
  });
}

function normalizeProviderFailure(providerId, failureType, env = process.env) {
  const timeoutMs = resolveProviderTimeoutMs(env);
  const errorType = failureType === "provider-timeout" ? "source-error" : failureType || "source-error";
  const sourceResult = failureType === "provider-timeout"
    ? sourceResultContract.buildProviderErrorResult(providerId, "provider-timeout")
    : sourceResultContract.buildProviderErrorResult(providerId, errorType);
  return Object.freeze({
    sourceResult,
    reliability: reliabilityPosture({
      providerTimeoutMs: timeoutMs,
      providerTimedOut: failureType === "provider-timeout",
      providerErrorNormalized: true,
      safeUnavailableState: true
    })
  });
}

async function withProviderTimeout(providerPromise, providerId, env = process.env) {
  const timeoutMs = resolveProviderTimeoutMs(env);
  let timeoutId = null;
  try {
    return await Promise.race([
      Promise.resolve(providerPromise).then(sourceResult => Object.freeze({
        sourceResult,
        reliability: reliabilityPosture({ providerTimeoutMs: timeoutMs })
      })),
      new Promise(resolve => {
        timeoutId = setTimeout(() => resolve(normalizeProviderFailure(providerId, "provider-timeout", env)), timeoutMs);
      })
    ]);
  } catch (error) {
    return normalizeProviderFailure(providerId, "source-error", env);
  } finally {
    if (timeoutId) clearTimeout(timeoutId);
  }
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
  try {
    if (providerId === "weather") return weather.getWeatherSourceResult(request, env);
    if (providerId === "agriculture-context") return agriculture.getAgricultureContextSourceResult(request, env);
    if (providerId === "news-security") return newsSecurity.getNewsSecuritySourceResult(request, env);
    if (providerId === "job-search") return jobs.getJobSearchSourceResult(request, env);
    if (providerId === "shipment-tracking") return shipment.getShipmentTrackingSourceResult(request, env);
    if (providerId === "music-media") return musicMedia.getMusicMediaSourceResult(request, env);
    return sourceResultContract.buildProviderUnavailableResult(providerId, "provider not registered for read-only retrieval");
  } catch (error) {
    return normalizeProviderFailure(providerId, "source-error", env).sourceResult;
  }
}

async function getProviderSourceResultAsync(providerId, request, env) {
  const providerPromise = providerId === "weather" && typeof weather.getWeatherSourceResultAsync === "function"
    ? weather.getWeatherSourceResultAsync(request, env)
    : Promise.resolve(getProviderSourceResult(providerId, request, env));
  return withProviderTimeout(providerPromise, providerId, env);
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

function buildProviderOrchestrationResult({ input, normalizedQuery, classification, providerId, provider, providerRequest, sourceResult, reliability }) {
  const requestId = stableRequestId(normalizedQuery);
  const safeSource = sourceResultContract.isSafeReadOnlySourceResult(sourceResult);
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
    noBackendWritePerformed: true,
    providerRequest,
    reliability: reliability || reliabilityPosture({ providerTimeoutMs: DEFAULT_PROVIDER_TIMEOUT_MS, safeUnavailableState: allowed !== true })
  });
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

  const providerRequest = buildProviderRequest(providerId, normalizedQuery, classification, context);
  const sourceResult = getProviderSourceResult(providerId, providerRequest, env);

  return buildProviderOrchestrationResult({
    input,
    normalizedQuery,
    classification,
    providerId,
    provider,
    providerRequest,
    sourceResult,
    reliability: reliabilityPosture({ providerTimeoutMs: resolveProviderTimeoutMs(env), safeUnavailableState: sourceResult?.sourceStatus !== "source-result-available" })
  });
}

async function buildLiveSourceOrchestrationResultAsync(input, context = {}, env = process.env) {
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

  const providerRequest = buildProviderRequest(providerId, normalizedQuery, classification, context);
  const providerResponse = await getProviderSourceResultAsync(providerId, providerRequest, env);
  const sourceResult = providerResponse && providerResponse.sourceResult ? providerResponse.sourceResult : providerResponse;
  const reliability = providerResponse && providerResponse.reliability ? providerResponse.reliability : reliabilityPosture({ providerTimeoutMs: resolveProviderTimeoutMs(env) });

  return buildProviderOrchestrationResult({ input, normalizedQuery, classification, providerId, provider, providerRequest, sourceResult, reliability });
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
  DEFAULT_PROVIDER_TIMEOUT_MS,
  RELIABILITY_CACHE_POLICY,
  resolveProviderTimeoutMs,
  reliabilityPosture,
  normalizeProviderFailure,
  withProviderTimeout,
  buildLiveSourceOrchestrationResult,
  buildLiveSourceOrchestrationResultAsync,
  getProviderSourceResultAsync,
  isSafeLiveSourceOrchestrationResult
});
