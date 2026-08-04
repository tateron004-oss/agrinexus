"use strict";

const CONTEXTUAL_CUES = /\b(?:again|also|instead|next|previous|same|that|those|them|their|there|it|all of|whole of|go back|take me back|zoom|add|set|change|correct|update|replace|make it|show me|open it|use that|use the|what about|how about|and then|now|tell me more|continue)\b/i;
const REFERENTIAL_CUES = /\b(?:again|instead|previous|same|that|those|them|their|there|it|add|set|correct|what about|how about|use that|use the same)\b/i;

function cloneParameters(value = {}) {
  return Object.freeze({ ...value });
}

function createConversationContext() {
  return Object.freeze({
    activeWorkspace: null,
    parameters: Object.freeze({}),
    visual: null,
    utterance: null,
    transactionId: null,
    turn: 0
  });
}

function isContextualFollowUp(utterance, context) {
  if (!context || !context.activeWorkspace) return false;
  const text = String(utterance || "").trim();
  if (!text) return false;
  if (CONTEXTUAL_CUES.test(text)) return true;
  if (/^(?:why|when|where|who|which|how|what)\b/i.test(text)) return true;
  if (context.activeWorkspace === "maps") {
    return /^(?:to\s+)?(?:see|view|show|display|find|locate|move|zoom)\b/i.test(text);
  }
  return false;
}

function hasReferentialCue(utterance) {
  return REFERENTIAL_CUES.test(String(utterance || ""));
}

function normalizeContextualUtterance(utterance) {
  return String(utterance || "")
    .trim()
    .replace(/^(?:and\s+then|and|then|now|next)\b[\s,;:.-]*/i, "")
    .replace(/^(?:what|how)\s+about\b[\s,;:.-]*/i, "")
    .replace(/^(?:change|update|replace|make)\s+(?:it|that)\s+(?:to|with|as)?\s*/i, "")
    .replace(/^use\s+(?:that|this|the\s+same)\s*(?:but|with|for)?\s*/i, "")
    .trim();
}

function mergeContextParameters(previous = {}, current = {}) {
  const merged = { ...previous };
  for (const [key, value] of Object.entries(current)) {
    if (
      key === "action"
      && ["open", "research", "support", "search-jobs"].includes(value)
      && previous.action
      && previous.action !== value
    ) continue;
    if (value !== null && value !== undefined && value !== "") merged[key] = value;
  }
  return Object.freeze(merged);
}

function rememberCompletedTurn(context, resolution) {
  return Object.freeze({
    activeWorkspace: resolution.workspace,
    parameters: cloneParameters(resolution.parameters),
    visual: resolution.acknowledgement && resolution.acknowledgement.visualContext || null,
    utterance: resolution.utterance,
    transactionId: resolution.transactionId || null,
    turn: Number(context && context.turn || 0) + 1
  });
}

function clearConversationContext() {
  return createConversationContext();
}

module.exports = {
  clearConversationContext,
  createConversationContext,
  hasReferentialCue,
  isContextualFollowUp,
  mergeContextParameters,
  normalizeContextualUtterance,
  rememberCompletedTurn
};
