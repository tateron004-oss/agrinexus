"use strict";

const {
  WORKFLOW_RULES: ROUTES,
  extractIntentAndParameters
} = require("./intent-parameter-extractor");

function routeCommand(command, connectionState) {
  if (connectionState !== "connected") {
    return Object.freeze({
      accepted: false,
      code: "realtime-not-connected",
      workspace: null
    });
  }
  const resolution = extractIntentAndParameters(command);
  const match = resolution.workflow;
  return Object.freeze({
    accepted: Boolean(match),
    code: match ? "workspace-route-resolved" : "conversation",
    workspace: match,
    command: resolution.original,
    utterance: resolution.utterance,
    parameters: resolution.parameters
  });
}

module.exports = { ROUTES, routeCommand };
