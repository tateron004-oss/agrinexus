const UNSAFE_ANSWER_PATTERNS = Object.freeze([
  /\b(action completed|completed that action|called|messaged|paid|purchased|booked|scheduled|submitted|dispatched|shared your location)\b/i,
  /\bI (called|messaged|paid|purchased|booked|scheduled|submitted|dispatched)\b/i
]);

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function compactText(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function formatRetrievedAt(value) {
  if (!hasText(value)) return "unknown";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return compactText(value);
  return parsed.toISOString();
}

function getPrimarySource(orchestrationResult) {
  const citations = Array.isArray(orchestrationResult && orchestrationResult.citations) ? orchestrationResult.citations : [];
  if (citations[0] && hasText(citations[0].sourceName)) return citations[0];
  const results = Array.isArray(orchestrationResult && orchestrationResult.results) ? orchestrationResult.results : [];
  if (results[0] && hasText(results[0].sourceName)) {
    return {
      sourceName: results[0].sourceName,
      sourceUrl: results[0].sourceUrl,
      evidenceStatus: results[0].evidenceStatus,
      freshnessStatus: results[0].freshnessStatus
    };
  }
  return null;
}

function buildBlockedAnswer(orchestrationResult) {
  const reason = hasText(orchestrationResult && orchestrationResult.blockedReason)
    ? ` Reason: ${compactText(orchestrationResult.blockedReason).replace(/_/g, " ")}.`
    : "";
  return `I can help with information and safe next steps, but I cannot execute that request or contact anyone.${reason} No action has been taken.`;
}

function buildMissingProviderAnswer(orchestrationResult) {
  const provider = hasText(orchestrationResult && orchestrationResult.selectedProvider)
    ? orchestrationResult.selectedProvider
    : "the requested source";
  return `I found the right read-only source lane for ${provider}, but it is not connected yet. I can explain what source is needed, and I will not claim live data until that provider is configured. No action has been taken.`;
}

function buildSourceBackedAnswer(orchestrationResult) {
  const summary = hasText(orchestrationResult && orchestrationResult.userFacingSummary)
    ? compactText(orchestrationResult.userFacingSummary)
    : "I found a read-only source result, but the source did not provide a detailed summary.";
  const source = getPrimarySource(orchestrationResult);
  const sourceName = source && hasText(source.sourceName) ? source.sourceName : "source unavailable";
  const sourceUrl = source && hasText(source.sourceUrl) ? source.sourceUrl : "source URL unavailable";
  const retrievedAt = formatRetrievedAt(orchestrationResult && orchestrationResult.retrievedAt);
  const confidence = hasText(orchestrationResult && orchestrationResult.confidence) ? orchestrationResult.confidence : "unknown";
  const freshness = source && hasText(source.freshnessStatus)
    ? source.freshnessStatus
    : hasText(orchestrationResult && orchestrationResult.trustAssessment && orchestrationResult.trustAssessment.freshnessStatus)
      ? orchestrationResult.trustAssessment.freshnessStatus
      : "unknown";
  const caveat = freshness === "stale" || freshness === "unavailable" || confidence === "low"
    ? " Please verify before using this for an operational decision."
    : "";

  return `Here's what I found: ${summary} Source: ${sourceName} (${sourceUrl}). Retrieved: ${retrievedAt}. Confidence: ${confidence}. Freshness: ${freshness}.${caveat} I can help you compare sources, narrow this down, or explain the result.`;
}

function composeAssistantAnswer(orchestrationResult) {
  if (!orchestrationResult || typeof orchestrationResult !== "object") {
    return "I could not prepare a safe source-backed answer yet. No action has been taken.";
  }
  if (orchestrationResult.allowed !== true) {
    return buildBlockedAnswer(orchestrationResult);
  }
  if (orchestrationResult.providerStatus === "missing_config" || orchestrationResult.providerStatus === "fixture_only") {
    return buildMissingProviderAnswer(orchestrationResult);
  }
  return buildSourceBackedAnswer(orchestrationResult);
}

function isSafeComposedAssistantAnswer(answer) {
  if (!hasText(answer)) return false;
  if (UNSAFE_ANSWER_PATTERNS.some(pattern => pattern.test(answer))) return false;
  if (/\{[\s\S]*\}/.test(answer)) return false;
  return true;
}

module.exports = Object.freeze({
  UNSAFE_ANSWER_PATTERNS,
  composeAssistantAnswer,
  isSafeComposedAssistantAnswer
});
