(function nexusSprintC8SourceBackedAgricultureVisiblePreviewMapper(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./nexus-sprint-c6-source-backed-agriculture-packet-harness.js"));
  } else {
    root.NexusSprintC8SourceBackedAgricultureVisiblePreviewMapper = factory(root.NexusSprintC6SourceBackedAgriculturePacketHarness);
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusSprintC8SourceBackedAgricultureVisiblePreviewMapperModule(packetHarness) {
  "use strict";

  const MAPPER_VERSION = "nexus.sprintC8.sourceBackedAgricultureVisiblePreviewMapper.v1";

  const REQUIRED_FALSE_FLAGS = Object.freeze([
    "executionAllowed",
    "sideEffectsAllowed",
    "providerHandoffAllowed",
    "communicationsAllowed",
    "callAllowed",
    "messageAllowed",
    "marketplaceTransactionAllowed",
    "paymentAllowed",
    "locationRequestAllowed",
    "locationSharingAllowed",
    "cameraRequestAllowed",
    "microphoneActivationAllowed",
    "medicalActionAllowed",
    "pharmacyActionAllowed",
    "emergencyDispatchAllowed",
    "backendWriteAllowed",
    "storageWriteAllowed",
    "networkLookupAllowed",
    "pendingActionCreationAllowed",
    "routeAutoOpenAllowed",
    "modalAutoOpenAllowed"
  ]);

  function hasText(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function allAuthorityFlagsFalse(packet) {
    return REQUIRED_FALSE_FLAGS.every(flag => packet && packet[flag] === false);
  }

  function isMappableSourceBackedAgriculturePacket(packet) {
    if (!packet || typeof packet !== "object") return false;
    if (packet.eligible !== true || packet.sourceBacked !== true || packet.sourceStatus !== "source-backed") return false;
    if (packet.evidenceTitle !== "Evidence & Verification") return false;
    if (!hasText(packet.sourceName) || !hasText(packet.sourceType) || !hasText(packet.contractId)) return false;
    if (packet.verificationStatus !== "verified") return false;
    if (!hasText(packet.freshnessLabel) || !hasText(packet.confidenceLabel)) return false;
    if (!Array.isArray(packet.sourceSupportedClaims) || packet.sourceSupportedClaims.length < 1) return false;
    if (!Array.isArray(packet.nexusInferences) || packet.nexusInferences.length < 1) return false;
    if (!hasText(packet.localApplicabilityWarning)) return false;
    if (!Array.isArray(packet.claimsNexusIsNotMaking) || packet.claimsNexusIsNotMaking.length < 1) return false;
    if (packet.noActionDisclosure !== "No action has been taken.") return false;
    return allAuthorityFlagsFalse(packet);
  }

  function mapPacketToVisiblePreviewModel(packet) {
    if (!isMappableSourceBackedAgriculturePacket(packet)) {
      return Object.freeze({
        schemaVersion: MAPPER_VERSION,
        mappable: false,
        reason: "packet_not_source_backed_or_not_safe",
        visiblePreviewAllowed: false,
        renderDomAllowed: false,
        executionAllowed: false,
        noActionDisclosure: "No action has been taken."
      });
    }

    return Object.freeze({
      schemaVersion: MAPPER_VERSION,
      mappable: true,
      visiblePreviewAllowed: true,
      renderDomAllowed: false,
      renderTargetRequired: false,
      title: "Agriculture Source Review",
      evidenceTitle: packet.evidenceTitle,
      sourceStatus: packet.sourceStatus,
      sourceName: packet.sourceName,
      sourceType: packet.sourceType,
      contractId: packet.contractId,
      verificationStatus: packet.verificationStatus,
      freshnessLabel: packet.freshnessLabel,
      confidenceLabel: packet.confidenceLabel,
      sourceSupportedClaims: packet.sourceSupportedClaims.slice(),
      nexusInferences: packet.nexusInferences.slice(),
      localApplicabilityWarning: packet.localApplicabilityWarning,
      limitations: Array.isArray(packet.limitations) ? packet.limitations.slice() : [],
      claimsNexusIsNotMaking: packet.claimsNexusIsNotMaking.slice(),
      reviewOnlyControls: Object.freeze([
        Object.freeze({ label: "Review source details", disabled: true, executionAllowed: false })
      ]),
      noActionDisclosure: packet.noActionDisclosure,
      ...Object.fromEntries(REQUIRED_FALSE_FLAGS.map(flag => [flag, false]))
    });
  }

  function buildFixtureVisiblePreviewModel(prompt) {
    const packet = packetHarness && typeof packetHarness.buildFixtureSourceBackedAgriculturePacket === "function"
      ? packetHarness.buildFixtureSourceBackedAgriculturePacket(prompt)
      : null;
    return mapPacketToVisiblePreviewModel(packet);
  }

  return Object.freeze({
    MAPPER_VERSION,
    REQUIRED_FALSE_FLAGS: REQUIRED_FALSE_FLAGS.slice(),
    isMappableSourceBackedAgriculturePacket,
    mapPacketToVisiblePreviewModel,
    buildFixtureVisiblePreviewModel
  });
});
