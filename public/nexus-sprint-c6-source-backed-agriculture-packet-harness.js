(function nexusSprintC6SourceBackedAgriculturePacketHarness(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./nexus-agriculture-source-registry.js"));
  } else {
    root.NexusSprintC6SourceBackedAgriculturePacketHarness = factory(root.NexusAgricultureSourceRegistry);
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusSprintC6SourceBackedAgriculturePacketHarnessModule(sourceRegistry) {
  "use strict";

  const HARNESS_VERSION = "nexus.sprintC6.sourceBackedAgriculturePacketHarness.v1";
  const SAFE_CONFIDENCE_LABEL = "Source-backed \u2014 verify against local conditions before acting";

  const NO_EXECUTION_AUTHORITY = Object.freeze({
    executionAllowed: false,
    sideEffectsAllowed: false,
    providerHandoffAllowed: false,
    communicationsAllowed: false,
    callAllowed: false,
    messageAllowed: false,
    marketplaceTransactionAllowed: false,
    paymentAllowed: false,
    locationRequestAllowed: false,
    locationSharingAllowed: false,
    cameraRequestAllowed: false,
    microphoneActivationAllowed: false,
    medicalActionAllowed: false,
    pharmacyActionAllowed: false,
    emergencyDispatchAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkLookupAllowed: false,
    pendingActionCreationAllowed: false,
    routeAutoOpenAllowed: false,
    modalAutoOpenAllowed: false
  });

  const FIXTURE_SOURCE = Object.freeze({
    enabled: true,
    verificationStatus: "verified",
    name: "Verified Extension Fixture",
    sourceType: "extension",
    contractId: "ag-c6-extension-fixture-001",
    freshnessLabel: "Fixture reviewed 2026-06-26",
    confidenceLabel: SAFE_CONFIDENCE_LABEL,
    sourceOwner: "Public agriculture extension fixture",
    sourceOwnerType: "public",
    supportedRegions: Object.freeze(["test-fixture-region"]),
    supportedLanguages: Object.freeze(["en"]),
    supportedPromptFamilies: Object.freeze([
      "crop symptom observation",
      "irrigation learning",
      "agriculture training",
      "safe first-check prompts"
    ]),
    sourceSupportedClaims: Object.freeze([
      "Review visible crop stress patterns before acting.",
      "Check irrigation and soil moisture before changing inputs.",
      "Escalate severe, spreading, or unclear issues to qualified local agriculture support."
    ]),
    limitations: Object.freeze([
      "Fixture-only source packet.",
      "No live lookup was performed.",
      "Local conditions must be verified before acting."
    ]),
    forbiddenClaims: Object.freeze([
      "diagnosis completed",
      "chemical dose recommended",
      "provider contacted",
      "marketplace action started",
      "payment started",
      "location shared"
    ])
  });

  const SAFE_PROMPT_FAMILIES = Object.freeze([
    "crop symptom observation",
    "irrigation learning",
    "agriculture training",
    "safe first-check prompts"
  ]);

  const EXCLUDED_PROMPT_PATTERN = /\b(call|message|text|sms|whatsapp|telegram|email|contact|buy|sell|pay|payment|checkout|order|location|gps|near me|camera|photo|upload|diagnose|doctor|clinic|hospital|telehealth|pharmacy|prescription|emergency|dispatch|appointment|schedule|spray|dose|dosage|apply pesticide|guarantee)\b/i;

  function text(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function inferPromptFamily(prompt) {
    const value = text(prompt).toLowerCase();
    if (!value) return null;
    if (/\b(irrigation|water|watering)\b/.test(value)) {
      return "irrigation learning";
    }
    if (/\b(training|course|learn|teach)\b/.test(value) && /\b(agriculture|farm|farmer|crop|field|irrigation)\b/.test(value)) {
      return "agriculture training";
    }
    if (/\b(crop|crops|leaf|leaves|yellow|spots?|pests?|insects?|maize|corn|field)\b/.test(value)) {
      return "crop symptom observation";
    }
    if (/\b(soil|mulch|compost|planting|farm|farmer)\b/.test(value)) {
      return "safe first-check prompts";
    }
    return null;
  }

  function normalizeFixtureSource(sourceRecord) {
    if (sourceRegistry && typeof sourceRegistry.normalizeAgricultureSourceRecord === "function") {
      return sourceRegistry.normalizeAgricultureSourceRecord(sourceRecord);
    }
    if (!sourceRecord || sourceRecord.enabled !== true || sourceRecord.verificationStatus !== "verified") {
      return Object.freeze({
        status: "unverified source unavailable",
        sourceName: "Source could not be verified",
        sourceType: "unverified",
        contractId: null,
        freshnessLabel: "Unavailable - source could not be verified",
        confidenceLabel: "Unavailable - source could not be verified",
        verificationStatus: "unverified",
        disclosure: "The fixture source could not be verified."
      });
    }
    return Object.freeze({
      status: "source-backed guidance",
      sourceName: sourceRecord.name,
      sourceType: sourceRecord.sourceType,
      contractId: sourceRecord.contractId,
      freshnessLabel: sourceRecord.freshnessLabel,
      confidenceLabel: sourceRecord.confidenceLabel,
      verificationStatus: "verified",
      disclosure: "This fixture packet is source-backed by a verified agriculture source contract."
    });
  }

  function buildFixtureSourceBackedAgriculturePacket(prompt, options = {}) {
    const normalizedPrompt = text(prompt);
    const promptFamily = inferPromptFamily(normalizedPrompt);
    if (!promptFamily || EXCLUDED_PROMPT_PATTERN.test(normalizedPrompt)) {
      return Object.freeze({
        schemaVersion: HARNESS_VERSION,
        eligible: false,
        reason: promptFamily ? "excluded_high_risk_or_execution_prompt" : "no_supported_agriculture_prompt_family",
        prompt: normalizedPrompt,
        promptFamily,
        sourceStatus: "not-source-backed",
        sourceBacked: false,
        sourceName: "No verified source packet applied",
        evidenceTitle: "Evidence & Verification",
        noActionDisclosure: "No action has been taken.",
        ...NO_EXECUTION_AUTHORITY
      });
    }

    const sourceRecord = options.sourceRecord || FIXTURE_SOURCE;
    const normalizedSource = normalizeFixtureSource(sourceRecord);
    const sourceBacked = normalizedSource.status === "source-backed guidance";

    return Object.freeze({
      schemaVersion: HARNESS_VERSION,
      eligible: sourceBacked,
      reason: sourceBacked ? "verified_fixture_source_packet" : "source_fixture_unverified",
      prompt: normalizedPrompt,
      promptFamily,
      sourceBacked,
      sourceStatus: sourceBacked ? "source-backed" : "not-source-backed",
      evidenceTitle: "Evidence & Verification",
      sourceName: normalizedSource.sourceName,
      sourceType: normalizedSource.sourceType,
      contractId: normalizedSource.contractId,
      verificationStatus: normalizedSource.verificationStatus,
      freshnessLabel: normalizedSource.freshnessLabel,
      confidenceLabel: normalizedSource.confidenceLabel,
      sourceSupportedClaims: sourceBacked ? Array.from(FIXTURE_SOURCE.sourceSupportedClaims) : [],
      nexusInferences: [
        "Nexus inferred a low-risk agriculture support prompt.",
        "Nexus selected a fixture-only verified agriculture source packet.",
        "Nexus did not perform live lookup or external verification during this harness run."
      ],
      localApplicabilityWarning: "Verify this guidance against local crop variety, soil, weather, regulation, product labels, and qualified local support before acting.",
      limitations: Array.from(FIXTURE_SOURCE.limitations),
      claimsNexusIsNotMaking: Array.from(FIXTURE_SOURCE.forbiddenClaims),
      noActionDisclosure: "No action has been taken.",
      ...NO_EXECUTION_AUTHORITY
    });
  }

  return Object.freeze({
    HARNESS_VERSION,
    SAFE_PROMPT_FAMILIES: Array.from(SAFE_PROMPT_FAMILIES),
    FIXTURE_SOURCE,
    NO_EXECUTION_AUTHORITY,
    inferPromptFamily,
    buildFixtureSourceBackedAgriculturePacket
  });
});
