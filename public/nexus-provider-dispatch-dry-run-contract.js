(function initNexusProviderDispatchDryRunContract(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
    return;
  }

  root.NexusProviderDispatchDryRunContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusProviderDispatchDryRunContract() {
  "use strict";

  const REQUIRED_DRY_RUN_FIELDS = Object.freeze([
    "dryRunId",
    "providerType",
    "providerDisplayName",
    "actionType",
    "targetSummary",
    "purposeSummary",
    "riskTier",
    "finalGateId",
    "finalGateSatisfied",
    "permissionState",
    "consentState",
    "auditState",
    "providerAvailabilityState",
    "userApprovalState",
    "dryRunOnly",
    "executionAuthority",
    "dispatchAllowed",
    "networkAllowed",
    "storageWriteAllowed",
    "backendWriteAllowed",
    "reversalOrCancelPath",
    "blockedDispatchChannels",
    "limitations"
  ]);

  const BLOCKED_DISPATCH_CHANNELS = Object.freeze([
    "provider-dispatch",
    "call",
    "message",
    "WhatsApp",
    "Telegram",
    "SMS",
    "email",
    "payment",
    "location",
    "camera",
    "medical",
    "pharmacy",
    "emergency",
    "marketplace-transaction",
    "backend-write",
    "storage-write",
    "network-call",
    "pending-action"
  ]);

  const READY_STATES = Object.freeze(["satisfied", "ready", "available", "approved"]);

  function isPlainObject(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
  }

  function hasText(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function stateIsReady(value) {
    return READY_STATES.includes(String(value || "").trim().toLowerCase());
  }

  function includesEvery(values, requiredValues) {
    if (!Array.isArray(values)) return false;
    return requiredValues.every(value => values.includes(value));
  }

  function validateProviderDispatchDryRun(dryRun) {
    const failures = [];
    if (!isPlainObject(dryRun)) {
      return { ok: false, dispatchAllowed: false, executionAllowed: false, failures: ["dry run must be an object"] };
    }

    for (const field of REQUIRED_DRY_RUN_FIELDS) {
      if (!Object.prototype.hasOwnProperty.call(dryRun, field)) failures.push(`missing required field: ${field}`);
    }

    [
      "dryRunId",
      "providerType",
      "providerDisplayName",
      "actionType",
      "targetSummary",
      "purposeSummary",
      "riskTier",
      "finalGateId",
      "reversalOrCancelPath",
      "limitations"
    ].forEach(field => {
      if (Object.prototype.hasOwnProperty.call(dryRun, field) && !hasText(dryRun[field])) {
        failures.push(`field must be non-empty text: ${field}`);
      }
    });

    if (dryRun.dryRunOnly !== true) failures.push("dryRunOnly must be true");
    if (dryRun.executionAuthority !== false) failures.push("executionAuthority must be false");
    if (dryRun.dispatchAllowed !== false) failures.push("dispatchAllowed must be false");
    if (dryRun.networkAllowed !== false) failures.push("networkAllowed must be false");
    if (dryRun.storageWriteAllowed !== false) failures.push("storageWriteAllowed must be false");
    if (dryRun.backendWriteAllowed !== false) failures.push("backendWriteAllowed must be false");
    if (dryRun.finalGateSatisfied !== true) failures.push("finalGateSatisfied must be true before any future live lane");
    if (!stateIsReady(dryRun.permissionState)) failures.push("permissionState must be satisfied");
    if (!stateIsReady(dryRun.consentState)) failures.push("consentState must be satisfied");
    if (!stateIsReady(dryRun.auditState)) failures.push("auditState must be ready");
    if (!stateIsReady(dryRun.providerAvailabilityState)) failures.push("providerAvailabilityState must be available");
    if (!stateIsReady(dryRun.userApprovalState)) failures.push("userApprovalState must be approved");
    if (!includesEvery(dryRun.blockedDispatchChannels, BLOCKED_DISPATCH_CHANNELS)) {
      failures.push("blockedDispatchChannels must include every required blocked channel");
    }

    return {
      ok: failures.length === 0,
      dispatchAllowed: false,
      executionAllowed: false,
      failures
    };
  }

  function createProviderDispatchDryRun(input) {
    const dryRun = Object.assign({}, input, {
      dryRunOnly: true,
      executionAuthority: false,
      dispatchAllowed: false,
      networkAllowed: false,
      storageWriteAllowed: false,
      backendWriteAllowed: false,
      blockedDispatchChannels: Array.from(new Set([
        ...BLOCKED_DISPATCH_CHANNELS,
        ...Array.isArray(input && input.blockedDispatchChannels) ? input.blockedDispatchChannels : []
      ]))
    });
    if (typeof dryRun.finalGateSatisfied !== "boolean") dryRun.finalGateSatisfied = false;
    return {
      dryRun,
      validation: validateProviderDispatchDryRun(dryRun)
    };
  }

  return Object.freeze({
    REQUIRED_DRY_RUN_FIELDS,
    BLOCKED_DISPATCH_CHANNELS,
    validateProviderDispatchDryRun,
    createProviderDispatchDryRun
  });
});
