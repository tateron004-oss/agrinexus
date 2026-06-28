const crypto = require("node:crypto");

const ALLOWED_REFINEMENTS = Object.freeze([
  "refine results",
  "filter results",
  "explain result",
  "compare sources",
  "more detail",
  "safe next steps"
]);

const BLOCKED_FOLLOW_UP_PATTERNS = Object.freeze([
  /\bapply\b/i,
  /\bcall\b/i,
  /\bmessage\b/i,
  /\btext\b/i,
  /\bwhatsapp\b/i,
  /\bbuy\b/i,
  /\bpay\b/i,
  /\bbook\b/i,
  /\bschedule\b/i,
  /\bdispatch\b/i,
  /\bsend\s+(my\s+)?location\b/i,
  /\bsubmit\b/i,
  /\bcreate\s+account\b/i,
  /\bupload\s+resume\b/i
]);

const FOLLOW_UP_PATTERNS = Object.freeze([
  { type: "refine results", pattern: /\b(only show|filter|narrow|refine|entry[- ]level|nearby|remote|part[- ]time|full[- ]time)\b/i },
  { type: "explain result", pattern: /\b(explain|what does that mean|why|tell me more about that)\b/i },
  { type: "compare sources", pattern: /\b(compare|another source|source details|citations?)\b/i },
  { type: "more detail", pattern: /\b(more detail|details|tell me more)\b/i },
  { type: "safe next steps", pattern: /\b(next steps|what should I do|safer next steps|checklist)\b/i }
]);

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function compactText(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function stableId(prefix, value) {
  return `${prefix}-${crypto.createHash("sha256").update(String(value || "")).digest("hex").slice(0, 16)}`;
}

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60 * 1000).toISOString();
}

function normalizeCitations(citations) {
  return Object.freeze((Array.isArray(citations) ? citations : []).map(citation => Object.freeze({
    sourceName: hasText(citation.sourceName) ? citation.sourceName : "Source unavailable",
    sourceUrl: hasText(citation.sourceUrl) ? citation.sourceUrl : "source-url-unavailable",
    evidenceStatus: hasText(citation.evidenceStatus) ? citation.evidenceStatus : "source-unavailable",
    freshnessStatus: hasText(citation.freshnessStatus) ? citation.freshnessStatus : "unknown"
  })));
}

function buildAssistantFollowUpContext(response, now = new Date()) {
  const citations = normalizeCitations(response && response.citations);
  return Object.freeze({
    contextId: stableId("assistant-context", `${response && response.responseId}-${now.toISOString()}`),
    lastIntent: hasText(response && response.intent) ? response.intent : "unknown",
    lastProvider: hasText(response && response.selectedProvider) ? response.selectedProvider : "none",
    lastQuery: hasText(response && response.userPrompt) ? compactText(response.userPrompt) : "",
    lastResultsSummary: hasText(response && response.summary) ? compactText(response.summary) : "",
    lastCitations: citations,
    lastRetrievedAt: hasText(response && response.retrievedAt) ? response.retrievedAt : now.toISOString(),
    allowedRefinements: ALLOWED_REFINEMENTS,
    blockedActions: Array.isArray(response && response.blockedActions) ? Object.freeze(response.blockedActions.slice()) : Object.freeze([]),
    expiresAt: addMinutes(now, 30),
    sessionOnly: true,
    noPersistence: true,
    noExecutionAuthorized: true,
    noBackendWritePerformed: true
  });
}

function isExpired(context, now = new Date()) {
  if (!context || !hasText(context.expiresAt)) return true;
  const expiresAt = new Date(context.expiresAt);
  return Number.isNaN(expiresAt.getTime()) || expiresAt.getTime() <= now.getTime();
}

function classifyAssistantFollowUp(input, context, now = new Date()) {
  const prompt = compactText(input);
  if (!hasText(prompt)) {
    return Object.freeze({ isFollowUp: false, followUpType: "missing-prompt", blocked: false, reason: "empty_prompt" });
  }
  if (!context || isExpired(context, now) || !hasText(context.lastResultsSummary)) {
    return Object.freeze({ isFollowUp: false, followUpType: "missing-context", blocked: false, reason: "missing_or_expired_context" });
  }
  const blocked = BLOCKED_FOLLOW_UP_PATTERNS.some(pattern => pattern.test(prompt));
  if (blocked) {
    return Object.freeze({ isFollowUp: true, followUpType: "blocked-action", blocked: true, reason: "follow_up_execution_blocked" });
  }
  const match = FOLLOW_UP_PATTERNS.find(entry => entry.pattern.test(prompt));
  if (!match) {
    return Object.freeze({ isFollowUp: false, followUpType: "not-follow-up", blocked: false, reason: "not_a_supported_follow_up" });
  }
  return Object.freeze({ isFollowUp: true, followUpType: match.type, blocked: false, reason: "" });
}

function buildFollowUpAnswer(input, context, classification) {
  if (!classification || classification.blocked === true) {
    return "I can help prepare information, but I cannot execute that follow-up action. No action has been taken.";
  }
  const sourceNames = context.lastCitations.map(citation => citation.sourceName).filter(Boolean);
  const sourceText = sourceNames.length > 0 ? ` Source context: ${Array.from(new Set(sourceNames)).join(", ")}.` : "";
  return `Based on the previous ${context.lastProvider} result, I can ${classification.followUpType} for "${context.lastQuery}". ${context.lastResultsSummary}${sourceText} This is still read-only; I can refine, explain, compare sources, or suggest safe next steps.`;
}

function isSafeAssistantFollowUpContext(context) {
  if (!context || typeof context !== "object" || Array.isArray(context)) return false;
  if (context.sessionOnly !== true || context.noPersistence !== true) return false;
  if (context.noExecutionAuthorized !== true || context.noBackendWritePerformed !== true) return false;
  if (!Array.isArray(context.allowedRefinements) || !Array.isArray(context.blockedActions)) return false;
  if (!hasText(context.expiresAt)) return false;
  return true;
}

module.exports = Object.freeze({
  ALLOWED_REFINEMENTS,
  BLOCKED_FOLLOW_UP_PATTERNS,
  FOLLOW_UP_PATTERNS,
  buildAssistantFollowUpContext,
  classifyAssistantFollowUp,
  buildFollowUpAnswer,
  isSafeAssistantFollowUpContext
});
