(function nexusSprintC15SourceBackedAgricultureVisibleSurfaceReadinessContract(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js"));
  } else {
    root.NexusSprintC15SourceBackedAgricultureVisibleSurfaceReadinessContract = factory(
      root.NexusSprintC13SourceBackedAgricultureEligibilityHandoffContract
    );
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusSprintC15SourceBackedAgricultureVisibleSurfaceReadinessContractModule(handoffContract) {
  "use strict";

  const SURFACE_CONTRACT_VERSION = "nexus.sprintC15.sourceBackedAgricultureVisibleSurfaceReadinessContract.v1";

  const FALSE_AUTHORITY = Object.freeze({
    runtimeWiringAllowed: false,
    renderDomAllowed: false,
    visibleRuntimeSurfaceAllowed: false,
    clickHandlerAllowed: false,
    formSubmissionAllowed: false,
    navigationAllowed: false,
    routeAutoOpenAllowed: false,
    modalAutoOpenAllowed: false,
    permissionPromptAllowed: false,
    executionAllowed: false,
    sideEffectsAllowed: false,
    providerHandoffAllowed: false,
    communicationsAllowed: false,
    marketplaceTransactionAllowed: false,
    paymentAllowed: false,
    networkLookupAllowed: false,
    storageReadAllowed: false,
    storageWriteAllowed: false,
    backendWriteAllowed: false,
    pendingActionCreationAllowed: false,
    locationRequestAllowed: false,
    cameraRequestAllowed: false,
    medicalActionAllowed: false,
    pharmacyActionAllowed: false,
    emergencyDispatchAllowed: false
  });

  const REQUIRED_VISIBLE_FIELDS = Object.freeze([
    "title",
    "evidenceTitle",
    "sourceStatus",
    "sourceName",
    "sourceType",
    "contractId",
    "verificationStatus",
    "freshnessLabel",
    "confidenceLabel",
    "localApplicabilityWarning",
    "noActionDisclosure"
  ]);

  function buildSourceBackedAgricultureVisibleSurfaceReadinessModel(prompt, flagInput) {
    const handoff = handoffContract && typeof handoffContract.buildSourceBackedAgricultureEligibilityHandoff === "function"
      ? handoffContract.buildSourceBackedAgricultureEligibilityHandoff(prompt, flagInput)
      : { handoffEligible: false, reason: "handoff_contract_unavailable" };

    if (!handoff.handoffEligible) {
      return Object.freeze({
        surfaceContractVersion: SURFACE_CONTRACT_VERSION,
        prompt: typeof prompt === "string" ? prompt : "",
        surfaceReady: false,
        reason: handoff.reason || "handoff_not_eligible",
        handoffEligible: false,
        requiredVisibleFields: [],
        reviewOnlyControls: [],
        noActionDisclosure: "No action has been taken.",
        ...FALSE_AUTHORITY
      });
    }

    return Object.freeze({
      surfaceContractVersion: SURFACE_CONTRACT_VERSION,
      prompt: handoff.prompt,
      surfaceReady: true,
      reason: "metadata_surface_ready_for_future_review",
      handoffEligible: true,
      title: "Agriculture Source Review",
      evidenceTitle: "Evidence & Verification",
      sourceStatus: handoff.sourceStatus,
      sourceNameRequired: true,
      sourceTypeRequired: true,
      contractIdRequired: true,
      verificationStatusRequired: true,
      freshnessLabelRequired: true,
      confidenceLabelRequired: true,
      localApplicabilityWarningRequired: true,
      noActionDisclosureRequired: true,
      requiredVisibleFields: REQUIRED_VISIBLE_FIELDS.slice(),
      reviewOnlyControls: Object.freeze([
        Object.freeze({
          label: "Review source details",
          disabled: true,
          executionAllowed: false,
          clickHandlerAllowed: false
        })
      ]),
      requiredDisclosures: Object.freeze([
        "No action has been taken.",
        "Verify this guidance against local conditions before acting.",
        "This surface must not claim diagnosis, transaction, provider contact, payment, location sharing, camera use, medical action, pharmacy action, or emergency dispatch."
      ]),
      noActionDisclosure: handoff.noActionDisclosure || "No action has been taken.",
      ...FALSE_AUTHORITY
    });
  }

  return Object.freeze({
    SURFACE_CONTRACT_VERSION,
    FALSE_AUTHORITY,
    REQUIRED_VISIBLE_FIELDS: REQUIRED_VISIBLE_FIELDS.slice(),
    buildSourceBackedAgricultureVisibleSurfaceReadinessModel
  });
});
