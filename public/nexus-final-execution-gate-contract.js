(function initNexusFinalExecutionGateContract(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
    return;
  }

  root.NexusFinalExecutionGateContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusFinalExecutionGateContract() {
  "use strict";

  const REQUIRED_FINAL_GATE_FIELDS = Object.freeze([
    "gateId",
    "actionId",
    "actionType",
    "riskTier",
    "targetSummary",
    "userApprovalId",
    "approvalIntentOnly",
    "finalGateRequired",
    "finalGateSatisfied",
    "executionAuthority",
    "permissionState",
    "consentState",
    "auditState",
    "providerState",
    "reversalOrCancelPath",
    "blockedExecutionChannels",
    "evidenceSummary",
    "limitations"
  ]);

  const REQUIRED_BLOCKED_EXECUTION_CHANNELS = Object.freeze([
    "provider",
    "call",
    "message",
    "payment",
    "location",
    "camera",
    "medical",
    "pharmacy",
    "emergency",
    "marketplace-transaction",
    "backend-write",
    "pending-action"
  ]);

  const SATISFIED_STATES = Object.freeze(["satisfied", "ready", "available"]);

  function isPlainObject(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
  }

  function hasText(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function includesEvery(values, requiredValues) {
    if (!Array.isArray(values)) return false;
    return requiredValues.every(value => values.includes(value));
  }

  function stateIsSatisfied(value) {
    return SATISFIED_STATES.includes(String(value || "").trim().toLowerCase());
  }

  function validateFinalExecutionGate(gate) {
    const failures = [];
    if (!isPlainObject(gate)) return { ok: false, executionAllowed: false, failures: ["gate must be an object"] };

    for (const field of REQUIRED_FINAL_GATE_FIELDS) {
      if (!Object.prototype.hasOwnProperty.call(gate, field)) failures.push(`missing required field: ${field}`);
    }

    ["gateId", "actionId", "actionType", "riskTier", "targetSummary", "userApprovalId", "evidenceSummary", "limitations"].forEach(field => {
      if (Object.prototype.hasOwnProperty.call(gate, field) && !hasText(gate[field])) {
        failures.push(`field must be non-empty text: ${field}`);
      }
    });

    if (gate.approvalIntentOnly !== true) failures.push("approvalIntentOnly must remain true before execution");
    if (gate.finalGateRequired !== true) failures.push("finalGateRequired must be true");
    if (gate.executionAuthority !== false) failures.push("executionAuthority must be false in this inert contract");
    if (gate.finalGateSatisfied !== true) failures.push("finalGateSatisfied must be true before any future execution lane");
    if (!stateIsSatisfied(gate.permissionState)) failures.push("permissionState must be satisfied");
    if (!stateIsSatisfied(gate.consentState)) failures.push("consentState must be satisfied");
    if (!stateIsSatisfied(gate.auditState)) failures.push("auditState must be ready");
    if (!stateIsSatisfied(gate.providerState)) failures.push("providerState must be available");
    if (!hasText(gate.reversalOrCancelPath)) failures.push("reversalOrCancelPath must be visible");
    if (!includesEvery(gate.blockedExecutionChannels, REQUIRED_BLOCKED_EXECUTION_CHANNELS)) {
      failures.push("blockedExecutionChannels must include every required blocked channel");
    }

    return {
      ok: failures.length === 0,
      executionAllowed: false,
      failures
    };
  }

  function createFinalExecutionGate(input) {
    const gate = Object.assign({}, input, {
      approvalIntentOnly: true,
      finalGateRequired: true,
      executionAuthority: false,
      blockedExecutionChannels: Array.from(new Set([
        ...REQUIRED_BLOCKED_EXECUTION_CHANNELS,
        ...Array.isArray(input && input.blockedExecutionChannels) ? input.blockedExecutionChannels : []
      ]))
    });
    if (typeof gate.finalGateSatisfied !== "boolean") gate.finalGateSatisfied = false;
    return {
      gate,
      validation: validateFinalExecutionGate(gate)
    };
  }

  return Object.freeze({
    REQUIRED_FINAL_GATE_FIELDS,
    REQUIRED_BLOCKED_EXECUTION_CHANNELS,
    validateFinalExecutionGate,
    createFinalExecutionGate
  });
});
