"use strict";

const WORKFLOW_CONTRACTS = Object.freeze({
  maps: Object.freeze({
    required(parameters) {
      return parameters.action === "route"
        ? ["origin", "destination"]
        : ["place"];
    },
    outcomes: ["map", "map-fallback"]
  }),
  reminders: Object.freeze({ required: () => ["task"], outcomes: ["application"] }),
  marketplace: Object.freeze({
    required: (parameters) => ["sell", "buy"].includes(parameters.action)
      ? ["quantity", "unit", "product"]
      : [],
    outcomes: ["application"]
  }),
  health: Object.freeze({
    required: () => [],
    outcomes: ["application", "provider-card"]
  }),
  "live-knowledge": Object.freeze({
    required: (parameters) => parameters.action === "weather" ? ["location"] : [],
    outcomes: ["evidence", "weather", "pilot-dashboard", "source-directory"]
  }),
  agriculture: Object.freeze({ required: () => [], outcomes: ["application", "agriculture-images"] }),
  workforce: Object.freeze({ required: () => [], outcomes: ["application", "resume"] }),
  music: Object.freeze({ required: () => ["query"], outcomes: ["music"] }),
  telehealth: Object.freeze({ required: () => [], outcomes: ["application"] }),
  "mobile-clinic": Object.freeze({ required: () => [], outcomes: ["application"] }),
  pharmacy: Object.freeze({ required: () => [], outcomes: ["application"] }),
  learning: Object.freeze({ required: () => [], outcomes: ["application"] }),
  offline: Object.freeze({ required: () => [], outcomes: ["application"] })
});

function present(value) {
  if (value === null || value === undefined || value === "") return false;
  if (typeof value === "object") return Object.keys(value).length > 0;
  return true;
}

function validateResolution(resolution) {
  const contract = WORKFLOW_CONTRACTS[resolution.workspace];
  if (!contract) return Object.freeze({ valid: false, code: "unknown-workflow", missing: [] });
  const parameters = resolution.parameters || {};
  const missing = contract.required(parameters).filter((key) => !present(parameters[key]));
  return Object.freeze({
    valid: missing.length === 0,
    code: missing.length ? "missing-required-parameters" : "validated",
    missing
  });
}

function verifyAcknowledgement(resolution, acknowledgement) {
  const contract = WORKFLOW_CONTRACTS[resolution.workspace];
  const outcomeKind = String(acknowledgement && acknowledgement.outcomeKind || "");
  const validOutcome = Boolean(contract && contract.outcomes.includes(outcomeKind));
  const verified = Boolean(
    acknowledgement
    && acknowledgement.visible === true
    && acknowledgement.populated === true
    && acknowledgement.outcomeVerified === true
    && validOutcome
  );
  return Object.freeze({
    verified,
    code: verified ? "visible-outcome-verified" : "visible-outcome-unverified",
    outcomeKind: outcomeKind || null,
    recovery: acknowledgement && acknowledgement.recovery || null
  });
}

class NexusRequestTransaction {
  constructor({ execute, onStage = () => {} } = {}) {
    if (typeof execute !== "function") throw new Error("A workflow executor is required.");
    this.execute = execute;
    this.onStage = onStage;
  }

  async run(resolution) {
    const transactionId = `nexus-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const validation = validateResolution(resolution);
    this.onStage("request.validated", { transactionId, workspace: resolution.workspace, ...validation });
    if (!validation.valid) {
      const error = new Error(`Nexus needs ${validation.missing.join(" and ")} before opening ${resolution.workspace}.`);
      error.code = validation.code;
      error.transactionId = transactionId;
      throw error;
    }
    this.onStage("request.executing", { transactionId, workspace: resolution.workspace });
    const acknowledgement = await this.execute({ ...resolution, transactionId });
    const outcome = verifyAcknowledgement(resolution, acknowledgement);
    this.onStage("request.outcome", { transactionId, workspace: resolution.workspace, ...outcome });
    if (!outcome.verified) {
      const error = new Error(`Nexus could not verify the requested ${resolution.workspace} result.`);
      error.code = outcome.code;
      error.transactionId = transactionId;
      error.recovery = outcome.recovery;
      throw error;
    }
    return Object.freeze({ ...resolution, transactionId, acknowledgement, outcome });
  }
}

module.exports = {
  WORKFLOW_CONTRACTS,
  validateResolution,
  verifyAcknowledgement,
  NexusRequestTransaction
};
