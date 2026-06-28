(function initNexusConfirmationEvidenceRiskMapping(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./nexus-confirmation-contract.js"));
    return;
  }

  root.NexusConfirmationEvidenceRiskMapping = factory(root.NexusConfirmationContract);
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusConfirmationEvidenceRiskMapping(contract) {
  "use strict";

  const REQUIRED_ACCOUNTABILITY_FIELDS = Object.freeze([
    "evidenceRequirement",
    "sourcePacketRequirement",
    "riskDisclosure",
    "limitations",
    "blockedExecutionChannels"
  ]);

  function hasNonEmptyText(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function isNotSourceBackedRequirement(value) {
    return hasNonEmptyText(value) && value.toLowerCase().includes("not source-backed");
  }

  function sourcePacketLooksRequired(value) {
    return hasNonEmptyText(value) && (
      value.toLowerCase().includes("required") ||
      value.toLowerCase().includes("source packet")
    );
  }

  function validateAccountabilityFields(confirmation) {
    const failures = [];

    for (const field of REQUIRED_ACCOUNTABILITY_FIELDS) {
      if (!Object.prototype.hasOwnProperty.call(confirmation, field)) {
        failures.push(`missing accountability field: ${field}`);
      }
    }

    if (!hasNonEmptyText(confirmation.evidenceRequirement)) {
      failures.push("evidenceRequirement must be non-empty text");
    }

    if (!hasNonEmptyText(confirmation.sourcePacketRequirement)) {
      failures.push("sourcePacketRequirement must be non-empty text");
    }

    if (!hasNonEmptyText(confirmation.riskDisclosure)) {
      failures.push("riskDisclosure must be non-empty text");
    }

    if (!hasNonEmptyText(confirmation.limitations)) {
      failures.push("limitations must be non-empty text");
    }

    return failures;
  }

  function mapConfirmationEvidenceRisk(confirmation) {
    const contractValidation = contract && typeof contract.validateApprovalIntentConfirmation === "function"
      ? contract.validateApprovalIntentConfirmation(confirmation)
      : { ok: false, failures: ["confirmation contract unavailable"] };
    const failures = Array.from(contractValidation.failures || []);

    if (!confirmation || typeof confirmation !== "object" || Array.isArray(confirmation)) {
      return {
        confirmationId: "",
        relatedStagedActionId: "",
        confirmationType: "",
        riskTier: "unknown",
        evidenceRequired: false,
        sourcePacketRequired: false,
        sourceBacked: false,
        limitationsDisclosed: false,
        riskDisclosurePresent: false,
        approvalIntentOnly: false,
        requiresFinalExecutionGate: false,
        executionAuthority: true,
        providerHandoffAllowed: false,
        pendingActionCreated: false,
        backendWriteAllowed: false,
        blockedExecutionChannels: [],
        safe: false,
        failures: ["confirmation must be an object"]
      };
    }

    failures.push(...validateAccountabilityFields(confirmation));

    const sourceBacked = !isNotSourceBackedRequirement(confirmation.sourcePacketRequirement);
    const sourcePacketRequired = sourceBacked
      ? sourcePacketLooksRequired(confirmation.sourcePacketRequirement)
      : hasNonEmptyText(confirmation.limitations);

    if (!sourcePacketRequired) {
      failures.push("source-backed confirmations must require source packet references; not-source-backed confirmations must disclose limitations");
    }

    if (confirmation.executionAuthority !== false) {
      failures.push("executionAuthority must remain false");
    }

    const providerHandoffAllowed = false;
    const pendingActionCreated = false;
    const backendWriteAllowed = false;

    return {
      confirmationId: confirmation.confirmationId || "",
      relatedStagedActionId: confirmation.relatedStagedActionId || "",
      confirmationType: confirmation.confirmationType || "",
      riskTier: confirmation.riskTier || "unknown",
      evidenceRequired: hasNonEmptyText(confirmation.evidenceRequirement),
      sourcePacketRequired,
      sourceBacked,
      limitationsDisclosed: hasNonEmptyText(confirmation.limitations),
      riskDisclosurePresent: hasNonEmptyText(confirmation.riskDisclosure),
      approvalIntentOnly: confirmation.approvalIntentOnly === true,
      requiresFinalExecutionGate: confirmation.requiresFinalExecutionGate === true,
      executionAuthority: confirmation.executionAuthority === false ? false : true,
      providerHandoffAllowed,
      pendingActionCreated,
      backendWriteAllowed,
      blockedExecutionChannels: Array.isArray(confirmation.blockedExecutionChannels)
        ? confirmation.blockedExecutionChannels.slice()
        : [],
      safe: failures.length === 0 &&
        confirmation.approvalIntentOnly === true &&
        confirmation.requiresFinalExecutionGate === true &&
        confirmation.executionAuthority === false &&
        providerHandoffAllowed === false &&
        pendingActionCreated === false &&
        backendWriteAllowed === false,
      failures
    };
  }

  function validateConfirmationEvidenceRisk(confirmation) {
    const mapped = mapConfirmationEvidenceRisk(confirmation);
    return {
      ok: mapped.safe,
      failures: mapped.failures,
      mapped
    };
  }

  return Object.freeze({
    REQUIRED_ACCOUNTABILITY_FIELDS,
    mapConfirmationEvidenceRisk,
    validateConfirmationEvidenceRisk
  });
});
