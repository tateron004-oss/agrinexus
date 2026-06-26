(function nexusSprintC13SourceBackedAgricultureEligibilityHandoffContract(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(
      require("./nexus-sprint-c6-source-backed-agriculture-packet-harness.js"),
      require("./nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"),
      require("./nexus-sprint-c12-source-backed-agriculture-flag-resolver-contract.js")
    );
  } else {
    root.NexusSprintC13SourceBackedAgricultureEligibilityHandoffContract = factory(
      root.NexusSprintC6SourceBackedAgriculturePacketHarness,
      root.NexusSprintC8SourceBackedAgricultureVisiblePreviewMapper,
      root.NexusSprintC12SourceBackedAgricultureFlagResolverContract
    );
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusSprintC13SourceBackedAgricultureEligibilityHandoffContractModule(packetHarness, mapper, flagResolver) {
  "use strict";

  const HANDOFF_VERSION = "nexus.sprintC13.sourceBackedAgricultureEligibilityHandoffContract.v1";

  const FALSE_AUTHORITY = Object.freeze({
    runtimeWiringAllowed: false,
    loadMapperInRuntimeAllowed: false,
    renderVisibleCardAllowed: false,
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
    permissionPromptAllowed: false,
    routeAutoOpenAllowed: false,
    modalAutoOpenAllowed: false,
    pendingActionCreationAllowed: false,
    locationRequestAllowed: false,
    cameraRequestAllowed: false,
    medicalActionAllowed: false,
    pharmacyActionAllowed: false,
    emergencyDispatchAllowed: false
  });

  function buildSourceBackedAgricultureEligibilityHandoff(prompt, flagInput) {
    const flag = flagResolver && typeof flagResolver.resolveSourceBackedAgricultureRuntimeMappingFlag === "function"
      ? flagResolver.resolveSourceBackedAgricultureRuntimeMappingFlag(flagInput)
      : { enabled: false, disabled: true };

    const packet = packetHarness && typeof packetHarness.buildFixtureSourceBackedAgriculturePacket === "function"
      ? packetHarness.buildFixtureSourceBackedAgriculturePacket(prompt)
      : null;

    const previewModel = mapper && typeof mapper.mapPacketToVisiblePreviewModel === "function"
      ? mapper.mapPacketToVisiblePreviewModel(packet)
      : { visiblePreviewAllowed: false, mappable: false };

    const flagAllowsFixture = flag.enabled === true;
    const packetEligible = Boolean(packet && packet.eligible === true && packet.sourceBacked === true);
    const mapperAllowsPreview = Boolean(previewModel && previewModel.visiblePreviewAllowed === true && previewModel.renderDomAllowed === false);
    const handoffEligible = flagAllowsFixture && packetEligible && mapperAllowsPreview;

    return Object.freeze({
      handoffVersion: HANDOFF_VERSION,
      prompt: typeof prompt === "string" ? prompt : "",
      flagEnabled: flagAllowsFixture,
      packetEligible,
      mapperAllowsPreview,
      handoffEligible,
      reason: handoffEligible ? "fixture_handoff_ready_for_future_review" : "not_eligible_or_flag_disabled",
      sourceStatus: packet && packet.sourceStatus ? packet.sourceStatus : "not-source-backed",
      previewTitle: previewModel && previewModel.visiblePreviewAllowed ? previewModel.title : "",
      noActionDisclosure: "No action has been taken.",
      ...FALSE_AUTHORITY
    });
  }

  return Object.freeze({
    HANDOFF_VERSION,
    FALSE_AUTHORITY,
    buildSourceBackedAgricultureEligibilityHandoff
  });
});
