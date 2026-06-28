const crypto = require("node:crypto");
const orchestrator = require("./nexus-live-source-orchestrator.js");

const DEFAULT_SAFE_FOLLOW_UPS = Object.freeze([
  "Ask for more detail",
  "Compare sources",
  "Narrow this by location",
  "Show safe next steps"
]);

const BLOCKED_ACTIONS = Object.freeze([
  "call",
  "message",
  "payment",
  "purchase",
  "booking",
  "application submission",
  "provider contact",
  "location sharing",
  "camera or microphone activation",
  "medical or pharmacy execution",
  "emergency dispatch",
  "backend write"
]);

const UNSAFE_ANSWER_PATTERNS = Object.freeze([
  /\b(action completed|completed that action|called|messaged|paid|purchased|booked|scheduled|submitted|dispatched|shared your location)\b/i
]);

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function stableResponseId(prompt) {
  return `assistant-runtime-${crypto.createHash("sha256").update(String(prompt || "")).digest("hex").slice(0, 16)}`;
}

function uniqueTextList(values) {
  return Object.freeze(Array.from(new Set((Array.isArray(values) ? values : [])
    .filter(value => typeof value === "string")
    .map(value => value.trim())
    .filter(Boolean))));
}

function normalizeCitations(citations) {
  return Object.freeze((Array.isArray(citations) ? citations : []).map(citation => Object.freeze({
    sourceName: hasText(citation.sourceName) ? citation.sourceName : "Source unavailable",
    sourceUrl: hasText(citation.sourceUrl) ? citation.sourceUrl : "source-url-unavailable",
    evidenceStatus: hasText(citation.evidenceStatus) ? citation.evidenceStatus : "source-unavailable",
    freshnessStatus: hasText(citation.freshnessStatus) ? citation.freshnessStatus : "unknown"
  })));
}

function inferFreshnessStatus(orchestrationResult, citations) {
  if (citations.length > 0 && hasText(citations[0].freshnessStatus)) return citations[0].freshnessStatus;
  const firstResult = orchestrationResult.results && orchestrationResult.results[0];
  if (firstResult && hasText(firstResult.freshnessStatus)) return firstResult.freshnessStatus;
  return orchestrationResult.trustAssessment && orchestrationResult.trustAssessment.staleResultWarning ? "stale" : "unknown";
}

function buildAnswer(orchestrationResult) {
  if (orchestrationResult.allowed !== true) {
    return "I can help with information and safe next steps, but I cannot execute that request or contact anyone.";
  }
  if (orchestrationResult.providerStatus === "missing_config") {
    return `I found the right read-only provider lane (${orchestrationResult.selectedProvider}), but it is not connected yet. I can still explain what source would be needed.`;
  }
  if (hasText(orchestrationResult.userFacingSummary)) {
    return `Here is what I found: ${orchestrationResult.userFacingSummary}`;
  }
  return "I could not find a safe source-backed result for that request yet.";
}

function buildAssistantRuntimeResponse(userPrompt, context = {}, env = process.env) {
  const orchestrationResult = orchestrator.buildLiveSourceOrchestrationResult(userPrompt, context, env);
  const citations = normalizeCitations(orchestrationResult.citations);
  const sourceLabels = uniqueTextList(citations.map(citation => citation.sourceName));
  const answer = buildAnswer(orchestrationResult);

  return Object.freeze({
    responseId: stableResponseId(userPrompt),
    userPrompt: String(userPrompt || ""),
    intent: orchestrationResult.intent,
    selectedProvider: orchestrationResult.selectedProvider,
    providerStatus: orchestrationResult.providerStatus,
    answer,
    summary: orchestrationResult.userFacingSummary || answer,
    citations,
    sourceLabels,
    retrievedAt: orchestrationResult.retrievedAt,
    freshnessStatus: inferFreshnessStatus(orchestrationResult, citations),
    confidence: orchestrationResult.confidence || "low",
    trustTier: orchestrationResult.trustAssessment ? orchestrationResult.trustAssessment.sourceTrustTier : "unavailable",
    safeFollowUps: uniqueTextList(orchestrationResult.suggestedFollowUps && orchestrationResult.suggestedFollowUps.length > 0
      ? orchestrationResult.suggestedFollowUps
      : DEFAULT_SAFE_FOLLOW_UPS),
    blockedActions: BLOCKED_ACTIONS,
    safetyPosture: orchestrationResult.safetyPosture,
    sourceResultCount: Array.isArray(orchestrationResult.results) ? orchestrationResult.results.length : 0,
    auditEvent: orchestrationResult.auditEvent,
    allowed: orchestrationResult.allowed === true,
    blockedReason: orchestrationResult.blockedReason || "",
    noExecutionAuthorized: true,
    noLocationPermissionRequested: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true
  });
}

function isSafeAssistantRuntimeResponse(response) {
  if (!response || typeof response !== "object" || Array.isArray(response)) return false;
  if (!hasText(response.responseId) || !hasText(response.userPrompt) || !hasText(response.intent)) return false;
  if (!hasText(response.answer) || !hasText(response.summary)) return false;
  if (!Array.isArray(response.citations) || !Array.isArray(response.sourceLabels) || !Array.isArray(response.safeFollowUps)) return false;
  if (!Array.isArray(response.blockedActions) || response.blockedActions.length < 6) return false;
  if (response.noExecutionAuthorized !== true) return false;
  if (response.noLocationPermissionRequested !== true) return false;
  if (response.noProviderContactAuthorized !== true) return false;
  if (response.noBackendWritePerformed !== true) return false;
  if (!response.safetyPosture || response.safetyPosture.readOnly !== true || response.safetyPosture.previewOnly !== true) return false;
  if (UNSAFE_ANSWER_PATTERNS.some(pattern => pattern.test(response.answer))) return false;
  return true;
}

module.exports = Object.freeze({
  DEFAULT_SAFE_FOLLOW_UPS,
  BLOCKED_ACTIONS,
  buildAssistantRuntimeResponse,
  isSafeAssistantRuntimeResponse
});
