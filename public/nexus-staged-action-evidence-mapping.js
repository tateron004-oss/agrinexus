(function initNexusStagedActionEvidenceMapping(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./nexus-staged-action-contract.js"));
    return;
  }

  root.NexusStagedActionEvidenceMapping = factory(root.NexusStagedActionContract);
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusStagedActionEvidenceMapping(contract) {
  "use strict";

  const sourceBackedPromptFamilies = Object.freeze([
    "agriculture-training",
    "irrigation-learning",
    "farm-jobs",
    "agritrade-browse"
  ]);

  function hasText(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function isSourceBacked(action) {
    if (!action || !hasText(action.createdFromPromptFamily)) return false;
    return sourceBackedPromptFamilies.includes(action.createdFromPromptFamily);
  }

  function buildStagedActionEvidenceAccountability(action) {
    const sourceBacked = isSourceBacked(action);
    const hasEvidenceRequirement = hasText(action && action.evidenceRequirement);
    const hasSourcePacketRequirement = hasText(action && action.sourcePacketRequirement);
    const hasLimitations = hasText(action && action.limitations);
    const hasSafeUseNotes = hasText(action && action.safeUseNotes);
    const isReviewOnlySafe = Boolean(contract && contract.isSafeReviewOnlyStagedAction(action));
    const executionAuthority = Boolean(action && action.executionAuthority);
    const providerHandoffAllowed = false;
    const pendingActionAllowed = false;
    const backendWriteAllowed = false;
    const sourcePacketReady = sourceBacked
      ? hasSourcePacketRequirement && !/not source-backed/i.test(action.sourcePacketRequirement)
      : hasSourcePacketRequirement && /not source-backed|safety boundary|limitation/i.test(action.sourcePacketRequirement);
    const limitationsReady = sourceBacked
      ? hasLimitations
      : hasLimitations && /review-only|blocked|cannot|no /i.test(action.limitations);
    const readyForVisibleReview = Boolean(
      isReviewOnlySafe &&
      hasEvidenceRequirement &&
      sourcePacketReady &&
      limitationsReady &&
      hasSafeUseNotes &&
      executionAuthority === false &&
      providerHandoffAllowed === false &&
      pendingActionAllowed === false &&
      backendWriteAllowed === false
    );

    return {
      sourceBacked,
      hasEvidenceRequirement,
      hasSourcePacketRequirement,
      hasLimitations,
      hasSafeUseNotes,
      executionAuthority,
      providerHandoffAllowed,
      pendingActionAllowed,
      backendWriteAllowed,
      isReviewOnlySafe,
      readyForVisibleReview
    };
  }

  function validateStagedActionEvidenceAccountability(action) {
    const mapping = buildStagedActionEvidenceAccountability(action);
    const failures = [];

    if (!mapping.isReviewOnlySafe) failures.push("staged action must satisfy inert D2 review-only contract");
    if (!mapping.hasEvidenceRequirement) failures.push("evidenceRequirement is required");
    if (!mapping.hasSourcePacketRequirement) failures.push("sourcePacketRequirement is required");
    if (!mapping.hasLimitations) failures.push("limitations are required");
    if (!mapping.hasSafeUseNotes) failures.push("safeUseNotes are required");
    if (mapping.executionAuthority !== false) failures.push("executionAuthority must be false");
    if (mapping.providerHandoffAllowed !== false) failures.push("provider handoff must remain false");
    if (mapping.pendingActionAllowed !== false) failures.push("pending action must remain false");
    if (mapping.backendWriteAllowed !== false) failures.push("backend write must remain false");
    if (!mapping.readyForVisibleReview) failures.push("staged action is not ready for visible review");

    return {
      ok: failures.length === 0,
      mapping,
      failures
    };
  }

  return Object.freeze({
    buildStagedActionEvidenceAccountability,
    validateStagedActionEvidenceAccountability
  });
});
