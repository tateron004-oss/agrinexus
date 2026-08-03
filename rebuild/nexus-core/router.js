"use strict";

const {
  WORKFLOW_RULES: ROUTES,
  extractIntentAndParameters,
  extractParameters
} = require("./intent-parameter-extractor");
const {
  hasReferentialCue,
  isContextualFollowUp,
  mergeContextParameters,
  normalizeContextualUtterance
} = require("./conversation-context");
const {
  describeVisualReference,
  isVisualFollowUp
} = require("./visual-context");

const EXPLICIT_WORKSPACE_NAMES = Object.freeze([
  ["mobile-clinic", /\bmobile clinic\b/i], ["telehealth", /\btelehealth(?: intake)?\b/i],
  ["agriculture", /\bagriculture help\b/i], ["health", /\bhealth (?:and|&) chronic care\b|\bchronic care\b/i],
  ["pharmacy", /\bpharmacy support\b/i], ["learning", /\blearning (?:and|&) literacy\b/i],
  ["workforce", /\bjobs? (?:and|&) workforce\b/i], ["marketplace", /\bagritrade marketplace\b/i],
  ["reminders", /\breminders?\b/i], ["offline", /\boffline queue\b/i]
]);

function explicitlySelectsWorkspace(utterance, workflow) {
  if (!workflow || !/\b(open|show|display|reopen|return to|go to|begin|start)\b/i.test(utterance)) return false;
  return EXPLICIT_WORKSPACE_NAMES.some(([candidate, pattern]) => candidate === workflow && pattern.test(utterance));
}

function routeCommand(command, connectionState, context = null) {
  if (connectionState !== "connected") {
    return Object.freeze({
      accepted: false,
      code: "realtime-not-connected",
      workspace: null
    });
  }
  const resolution = extractIntentAndParameters(command);
  const visualFollowUp = isVisualFollowUp(resolution.utterance, context);
  const explicitWorkspaceSelection = explicitlySelectsWorkspace(resolution.utterance, resolution.workflow);
  const contextual = (visualFollowUp || isContextualFollowUp(resolution.utterance, context))
    && (
      !resolution.workflow
      || resolution.workflow === context.activeWorkspace
      || (!explicitWorkspaceSelection && hasReferentialCue(resolution.utterance))
    );
  const match = contextual
    ? context.activeWorkspace
    : resolution.workflow || (isInternetAnswerQuestion(resolution.utterance) ? "live-knowledge" : null);
  const contextualUtterance = contextual
    ? normalizeContextualUtterance(resolution.utterance)
    : resolution.utterance;
  const extracted = contextual ? extractParameters(match, contextualUtterance) : resolution.parameters;
  const parameters = contextual
    ? mergeContextParameters(context.parameters, extracted)
    : resolution.parameters;
  return Object.freeze({
    accepted: Boolean(match),
    code: match ? "workspace-route-resolved" : "conversation",
    workspace: match,
    command: resolution.original,
    utterance: resolution.utterance,
    parameters,
    contextual,
    visualFollowUp,
    visualContext: contextual ? context.visual || null : null,
    visualReference: visualFollowUp ? describeVisualReference(resolution.utterance, context.visual) : null,
    previousTransactionId: contextual ? context.transactionId || null : null
  });
}

function isInternetAnswerQuestion(command) {
  const text = String(command || "").trim();
  if (!text || /^(?:hello|hi|hey|good (?:morning|afternoon|evening)|thanks?|thank you)\b/i.test(text)) {
    return false;
  }
  return /^(?:how|what|why|when|where|who|which)\b/i.test(text)
    || /^(?:tell me about|explain|show me how|teach me how|walk me through)\b/i.test(text);
}

module.exports = { ROUTES, explicitlySelectsWorkspace, isInternetAnswerQuestion, routeCommand };
