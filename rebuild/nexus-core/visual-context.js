"use strict";

const VISUAL_REFERENCE_CUES = /\b(?:this|that|these|those|their|it|one|ones|item|result|card|list|map|marker|route|image|picture|link|source|website|screen|page|view|chart|reading|document|section|course|job|listing|reminder|queue|track|first|second|third|fourth|fifth|last|previous|next)\b/i;
const VISUAL_QUESTION_CUES = /^(?:what|why|where|which|who|how|can|could|would|does|do|is|are)\b/i;
const VISUAL_ACTION_CUES = /\b(?:show|tell|open|close|create|put|add|close|reopen|expand|collapse|zoom|move|pan|return|back|next|previous|compare|explain|read|select|choose|use|change|update|replace|remove|print|share|save|play|pause)\b/i;

function compactText(value, limit = 180) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, limit);
}

function freezeArray(values = []) {
  return Object.freeze(values.filter(Boolean).map((value) => compactText(value)).filter(Boolean).slice(0, 12));
}

function createVisualContext({
  workspace = null,
  outcomeKind = null,
  surfaceId = null,
  summary = null,
  items = [],
  selectedItem = null,
  viewport = null,
  sourceIds = [],
  availableActions = []
} = {}) {
  return Object.freeze({
    workspace,
    outcomeKind,
    surfaceId,
    summary: compactText(summary) || null,
    items: freezeArray(items),
    selectedItem: compactText(selectedItem) || null,
    viewport: viewport && typeof viewport === "object" ? Object.freeze({ ...viewport }) : null,
    sourceIds: freezeArray(sourceIds),
    availableActions: freezeArray(availableActions)
  });
}

function isVisualFollowUp(utterance, context) {
  if (!context || !context.visual || !context.visual.surfaceId) return false;
  const text = compactText(utterance);
  if (!text) return false;
  return VISUAL_REFERENCE_CUES.test(text)
    && (VISUAL_QUESTION_CUES.test(text) || VISUAL_ACTION_CUES.test(text));
}

function describeVisualReference(utterance, visual) {
  if (!visual) return null;
  const text = compactText(utterance);
  const ordinal = /\b(first|second|third|fourth|fifth|last|previous)\b/i.exec(text)?.[1]?.toLowerCase() || null;
  const action = VISUAL_ACTION_CUES.exec(text)?.[1]?.toLowerCase()
    || (VISUAL_QUESTION_CUES.test(text) ? "explain" : "inspect");
  return Object.freeze({
    action,
    ordinal,
    surfaceId: visual.surfaceId,
    outcomeKind: visual.outcomeKind,
    selectedItem: visual.selectedItem,
    visibleItems: visual.items
  });
}

module.exports = {
  createVisualContext,
  describeVisualReference,
  isVisualFollowUp
};
