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
  const contextual = (visualFollowUp || isContextualFollowUp(resolution.utterance, context))
    && (
      !resolution.workflow
      || resolution.workflow === context.activeWorkspace
      || hasReferentialCue(resolution.utterance)
    );
  const match = contextual ? context.activeWorkspace : resolution.workflow;
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

module.exports = { ROUTES, routeCommand };
