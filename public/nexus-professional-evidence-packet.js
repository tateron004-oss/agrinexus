(function nexusProfessionalEvidencePacketModule(globalScope) {
  "use strict";

  const SCHEMA_VERSION = "nexus.professionalEvidencePacket.v1";
  const SOURCE_STATUS = Object.freeze({
    NOT_SOURCE_BACKED: "not-source-backed",
    SOURCE_BACKED: "source-backed",
    UNVERIFIED: "unverified-source"
  });
  const NO_EXECUTION_DISCLOSURE = Object.freeze([
    "No action has been taken.",
    "No live provider has been contacted.",
    "No message, call, appointment, payment, transaction, location share, camera, medical, pharmacy, or emergency action has started.",
    "No storage write, backend write, network lookup, or external handoff was performed by this evidence packet."
  ]);
  const SIDE_EFFECT_FIELDS = Object.freeze({
    executionAllowed: false,
    providerHandoffAllowed: false,
    permissionRequestAllowed: false,
    liveLookupAllowed: false,
    storageWriteAllowed: false,
    backendWriteAllowed: false,
    networkAllowed: false,
    callAllowed: false,
    messageAllowed: false,
    paymentAllowed: false,
    marketplaceTransactionAllowed: false,
    locationSharingAllowed: false,
    cameraAllowed: false,
    medicalActionAllowed: false,
    pharmacyActionAllowed: false,
    emergencyDispatchAllowed: false
  });
  const SENSITIVE_FIELD_PATTERN = /(secret|credential|token|password|payment|card|healthDetail|medicalRecord|preciseLocation|rawMedia|contactDetail|phone|email|address)/i;

  function text(value, fallback = "") {
    const normalized = String(value || "").replace(/\s+/g, " ").trim();
    return normalized || fallback;
  }

  function list(value, fallback = []) {
    const source = Array.isArray(value) ? value : fallback;
    return source.map(item => text(item)).filter(Boolean).slice(0, 10);
  }

  function isVerifiedSource(source) {
    return !!source
      && typeof source === "object"
      && source.enabled === true
      && source.verificationStatus === "verified"
      && text(source.name)
      && text(source.sourceType)
      && text(source.contractId)
      && text(source.freshnessLabel)
      && text(source.confidenceLabel);
  }

  function hasSensitiveKeys(input) {
    if (!input || typeof input !== "object") return false;
    return Object.keys(input).some(key => SENSITIVE_FIELD_PATTERN.test(key));
  }

  function normalizeSources(sources) {
    const sourceList = Array.isArray(sources) ? sources : [];
    const verified = sourceList.filter(isVerifiedSource);
    if (verified.length) {
      return Object.freeze({
        status: SOURCE_STATUS.SOURCE_BACKED,
        sourceBacked: true,
        sources: Object.freeze(verified.map(source => Object.freeze({
          name: text(source.name),
          sourceType: text(source.sourceType),
          contractId: text(source.contractId),
          freshnessLabel: text(source.freshnessLabel),
          confidenceLabel: text(source.confidenceLabel),
          verificationStatus: "verified"
        }))),
        freshnessLabel: verified.map(source => text(source.freshnessLabel)).join("; "),
        confidenceLabel: verified.map(source => text(source.confidenceLabel)).join("; "),
        disclosure: "A verified source contract was provided. Verify against local conditions before acting."
      });
    }
    if (sourceList.length) {
      return Object.freeze({
        status: SOURCE_STATUS.UNVERIFIED,
        sourceBacked: false,
        sources: Object.freeze([]),
        freshnessLabel: "Unavailable - source could not be verified",
        confidenceLabel: "Unavailable - source could not be verified",
        disclosure: "A source-like record was present, but required verification metadata was missing."
      });
    }
    return Object.freeze({
      status: SOURCE_STATUS.NOT_SOURCE_BACKED,
      sourceBacked: false,
      sources: Object.freeze([]),
      freshnessLabel: "Unavailable - no verified source lookup was performed",
      confidenceLabel: "Limited - general Nexus guidance only",
      disclosure: "This preview is not source-backed because no verified source contract or live source lookup is connected."
    });
  }

  function buildEvidencePacket(request = {}) {
    const input = request && typeof request === "object" ? request : {};
    const sourceSummary = normalizeSources(input.sources);
    const mode = text(input.mode, "general").toLowerCase();
    const modeRequirements = input.modeRequirements && typeof input.modeRequirements === "object" ? input.modeRequirements : {};
    const sourceClaims = list(input.sourceSupportedClaims, []);
    const inferences = list(input.nexusInferences, ["Nexus inferred a safe review-only response from the prompt."]);
    const limitations = list(input.limitations, modeRequirements.limitations || []);
    const blockedClaims = list(input.blockedClaims, modeRequirements.blockedClaims || []);
    const redactionBlocked = hasSensitiveKeys(input);

    return Object.freeze({
      schemaVersion: SCHEMA_VERSION,
      packetType: "professional-evidence-accountability",
      mode,
      modeLabel: text(input.modeLabel || modeRequirements.label, "General Nexus guidance"),
      sourceStatus: redactionBlocked ? SOURCE_STATUS.UNVERIFIED : sourceSummary.status,
      sourceBacked: redactionBlocked ? false : sourceSummary.sourceBacked,
      sources: redactionBlocked ? Object.freeze([]) : sourceSummary.sources,
      sourceSupportedClaims: Object.freeze(sourceClaims),
      nexusInferences: Object.freeze(inferences),
      limitations: Object.freeze(limitations),
      blockedClaims: Object.freeze(blockedClaims),
      requiredEvidenceFields: Object.freeze(list(modeRequirements.requiredEvidenceFields, ["source status", "freshness", "confidence", "execution boundary"])),
      freshnessLabel: redactionBlocked ? "Unavailable - sensitive field blocked" : sourceSummary.freshnessLabel,
      confidenceLabel: redactionBlocked ? "Unavailable - sensitive field blocked" : sourceSummary.confidenceLabel,
      disclosure: redactionBlocked
        ? "Evidence packet blocked sensitive field names and remains general guidance only."
        : sourceSummary.disclosure,
      redactionPolicy: "summary-only-no-secrets",
      sensitiveFieldBlocked: redactionBlocked,
      noExecutionDisclosure: Object.freeze(NO_EXECUTION_DISCLOSURE.slice()),
      ...SIDE_EFFECT_FIELDS
    });
  }

  function assertEvidencePacketSafe(packet) {
    if (!packet || typeof packet !== "object") return false;
    if (packet.schemaVersion !== SCHEMA_VERSION) return false;
    if (![SOURCE_STATUS.NOT_SOURCE_BACKED, SOURCE_STATUS.SOURCE_BACKED, SOURCE_STATUS.UNVERIFIED].includes(packet.sourceStatus)) return false;
    if (!Array.isArray(packet.noExecutionDisclosure) || !packet.noExecutionDisclosure.some(item => /No action has been taken/i.test(item))) return false;
    if (!Array.isArray(packet.limitations) || !Array.isArray(packet.blockedClaims)) return false;
    const blocked = Object.keys(SIDE_EFFECT_FIELDS).some(key => packet[key] !== false);
    if (blocked) return false;
    if (packet.sourceBacked === true && (!Array.isArray(packet.sources) || packet.sources.length < 1)) return false;
    const disclosure = String(packet.disclosure || "");
    if (packet.sourceBacked === false && /source-backed/i.test(disclosure) && !/not source-backed/i.test(disclosure) && packet.sourceStatus !== SOURCE_STATUS.UNVERIFIED) return false;
    return true;
  }

  const api = Object.freeze({
    SCHEMA_VERSION,
    SOURCE_STATUS,
    buildEvidencePacket,
    assertEvidencePacketSafe
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }

  if (globalScope) {
    globalScope.NexusProfessionalEvidencePacket = api;
  }
})(typeof window !== "undefined" ? window : globalThis);
