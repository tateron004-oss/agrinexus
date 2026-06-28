(function initNexusAppointmentServiceRequestPreview(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(
      require("./nexus-appointment-service-risk-evidence-mapping.js"),
      require("./nexus-appointment-service-preview-flag-guard.js")
    );
    return;
  }

  root.NexusAppointmentServiceRequestPreview = factory(
    root.NexusAppointmentServiceRiskEvidenceMapping,
    root.NexusAppointmentServicePreviewFlagGuard
  );
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusAppointmentServiceRequestPreview(mapper, flagGuard) {
  "use strict";

  function hiddenAppointmentServicePreview(reason) {
    return Object.freeze({
      visible: false,
      reason,
      executionAllowed: false,
      executionAuthority: false,
      providerDispatchAllowed: false,
      bookingAllowed: false,
      providerHandoffAllowed: false,
      communicationAllowed: false,
      externalNavigationAllowed: false,
      nativeBridgeAllowed: false,
      networkAllowed: false,
      storageWriteAllowed: false,
      backendWriteAllowed: false,
      controls: Object.freeze([]),
      links: Object.freeze([]),
      eventHandlers: Object.freeze([])
    });
  }

  function buildAppointmentServiceRequestPreview(input, options) {
    const mapped = mapper.mapAppointmentServiceRiskEvidence(input || {});
    const allowed = flagGuard.isAppointmentServicePreviewAllowed(mapped.request, options);

    if (!allowed.previewAllowed) {
      return hiddenAppointmentServicePreview(mapped.request.riskTier === "restricted" ? "restricted-risk" : "flag-or-context-disabled");
    }

    return Object.freeze({
      visible: true,
      title: "Review appointment or service request",
      providerDisplayName: mapped.request.providerDisplayName,
      requestedServiceCategory: mapped.request.requestedServiceCategory,
      requestedTimeWindow: mapped.request.requestedTimeWindow,
      userProvidedTimePreference: mapped.request.userProvidedTimePreference,
      serviceLocationRequirement: mapped.request.serviceLocationRequirement,
      requestDraft: mapped.request.requestDraft,
      riskTier: mapped.request.riskTier,
      evidenceRequirement: mapped.request.evidenceRequirement,
      sourcePacketRequirement: mapped.request.sourcePacketRequirement,
      providerConfirmationRequired: true,
      userApprovalRequired: true,
      finalExecutionGateRequired: true,
      safeUseNotes: mapped.request.safeUseNotes,
      limitations: mapped.request.limitations,
      executionAllowed: false,
      executionAuthority: false,
      providerDispatchAllowed: false,
      bookingAllowed: false,
      providerHandoffAllowed: false,
      communicationAllowed: false,
      externalNavigationAllowed: false,
      nativeBridgeAllowed: false,
      networkAllowed: false,
      storageWriteAllowed: false,
      backendWriteAllowed: false,
      controls: Object.freeze([]),
      links: Object.freeze([]),
      eventHandlers: Object.freeze([]),
      mapping: mapped.mapping
    });
  }

  return Object.freeze({
    hiddenAppointmentServicePreview,
    buildAppointmentServiceRequestPreview
  });
});
