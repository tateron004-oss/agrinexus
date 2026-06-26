(function nexusSprintC17SourceBackedAgricultureSurfaceCopyModel(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(
      require("./nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js"),
      require("./nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js")
    );
  } else {
    root.NexusSprintC17SourceBackedAgricultureSurfaceCopyModel = factory(
      root.NexusSprintC15SourceBackedAgricultureVisibleSurfaceReadinessContract,
      root.NexusSprintC8SourceBackedAgricultureVisiblePreviewMapper
    );
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusSprintC17SourceBackedAgricultureSurfaceCopyModelModule(surfaceReadiness, previewMapper) {
  "use strict";

  const COPY_MODEL_VERSION = "nexus.sprintC17.sourceBackedAgricultureSurfaceCopyModel.v1";

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

  function buildCopyLine(label, value) {
    return Object.freeze({
      label,
      value: typeof value === "string" ? value : "",
      displayText: `${label}: ${typeof value === "string" ? value : ""}`
    });
  }

  function buildSourceBackedAgricultureSurfaceCopyModel(prompt, flagInput) {
    const readiness = surfaceReadiness && typeof surfaceReadiness.buildSourceBackedAgricultureVisibleSurfaceReadinessModel === "function"
      ? surfaceReadiness.buildSourceBackedAgricultureVisibleSurfaceReadinessModel(prompt, flagInput)
      : { surfaceReady: false, reason: "surface_readiness_unavailable" };

    const preview = previewMapper && typeof previewMapper.buildFixtureVisiblePreviewModel === "function"
      ? previewMapper.buildFixtureVisiblePreviewModel(prompt)
      : { mappable: false, reason: "preview_mapper_unavailable" };

    if (!readiness.surfaceReady || !preview.mappable) {
      return Object.freeze({
        copyModelVersion: COPY_MODEL_VERSION,
        prompt: typeof prompt === "string" ? prompt : "",
        copyReady: false,
        reason: readiness.reason || preview.reason || "surface_not_ready",
        title: "",
        sections: [],
        reviewOnlyControls: [],
        noActionDisclosure: "No action has been taken.",
        ...FALSE_AUTHORITY
      });
    }

    const evidenceLines = Object.freeze([
      buildCopyLine("Source", preview.sourceName),
      buildCopyLine("Type", preview.sourceType),
      buildCopyLine("Source contract", preview.contractId),
      buildCopyLine("Verification", preview.verificationStatus),
      buildCopyLine("Freshness", preview.freshnessLabel),
      buildCopyLine("Confidence", preview.confidenceLabel)
    ]);

    const sections = Object.freeze([
      Object.freeze({
        id: "evidence-verification",
        heading: "Evidence & Verification",
        lines: evidenceLines
      }),
      Object.freeze({
        id: "source-supported-claims",
        heading: "What this source supports",
        items: Array.isArray(preview.sourceSupportedClaims) ? preview.sourceSupportedClaims.slice() : []
      }),
      Object.freeze({
        id: "nexus-inferences",
        heading: "What Nexus inferred",
        items: Array.isArray(preview.nexusInferences) ? preview.nexusInferences.slice() : []
      }),
      Object.freeze({
        id: "local-applicability",
        heading: "Local applicability",
        text: preview.localApplicabilityWarning
      }),
      Object.freeze({
        id: "not-claimed",
        heading: "What Nexus is not claiming",
        items: Array.isArray(preview.claimsNexusIsNotMaking) ? preview.claimsNexusIsNotMaking.slice() : []
      }),
      Object.freeze({
        id: "no-action",
        heading: "Action status",
        text: preview.noActionDisclosure
      })
    ]);

    return Object.freeze({
      copyModelVersion: COPY_MODEL_VERSION,
      prompt: typeof prompt === "string" ? prompt : "",
      copyReady: true,
      reason: "fixture_copy_model_ready_for_future_review",
      title: "Agriculture Source Review",
      summary: "Review source-backed agriculture guidance before deciding what to do next.",
      sections,
      reviewOnlyControls: Object.freeze([
        Object.freeze({
          label: "Review source details",
          disabled: true,
          executionAllowed: false,
          clickHandlerAllowed: false
        }),
        Object.freeze({
          label: "Not now",
          disabled: true,
          executionAllowed: false,
          clickHandlerAllowed: false
        })
      ]),
      noActionDisclosure: preview.noActionDisclosure,
      ...FALSE_AUTHORITY
    });
  }

  return Object.freeze({
    COPY_MODEL_VERSION,
    FALSE_AUTHORITY,
    buildSourceBackedAgricultureSurfaceCopyModel
  });
});
