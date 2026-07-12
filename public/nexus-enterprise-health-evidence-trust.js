(function initNexusEnterpriseHealthEvidenceTrust(globalScope) {
  "use strict";

  const SERVICE_ID = "nexus_enterprise_health_evidence_trust";
  const SERVICE_VERSION = "nexus-enterprise-health-evidence-trust.v1";

  const EVIDENCE_TIERS = Object.freeze([
    { tier: "1A", label: "Controlling jurisdictional authority", authorityWeight: 100, clinicalUse: "Controlling local/national authority when applicable." },
    { tier: "1B", label: "International public-health authority", authorityWeight: 92, clinicalUse: "Global public-health guidance that must be adapted to local rules." },
    { tier: "2", label: "Formal clinical-practice guideline", authorityWeight: 88, clinicalUse: "Transparent guideline development and recommendation grading." },
    { tier: "3", label: "Systematic evidence synthesis", authorityWeight: 78, clinicalUse: "Systematic reviews, meta-analyses, evidence reports, or HTA." },
    { tier: "4", label: "Peer-reviewed primary evidence", authorityWeight: 62, clinicalUse: "Primary research that cannot automatically override stronger synthesis." },
    { tier: "5", label: "Professional implementation resource", authorityWeight: 50, clinicalUse: "Implementation tools and consensus resources, labeled as such." },
    { tier: "6", label: "Patient/caregiver education", authorityWeight: 38, clinicalUse: "Plain-language education, not clinical decision authority." },
    { tier: "7", label: "Provider/service directory", authorityWeight: 28, clinicalUse: "Directory presence only; not proof of availability, suitability, or quality." }
  ]);

  const SOURCE_VERIFICATION_STATES = Object.freeze([
    "verified_current",
    "verified_current_with_local_adaptation",
    "verified_but_aging",
    "review_due",
    "pending_professional_review",
    "superseded",
    "withdrawn",
    "unavailable",
    "redirected",
    "redirect_changed",
    "jurisdiction_mismatch",
    "population_mismatch",
    "license_restricted",
    "translation_unverified",
    "content_changed",
    "provider_verification_expired",
    "provider_status_unknown"
  ]);

  const BLOCKED_SOURCE_STATES = Object.freeze([
    "superseded",
    "withdrawn",
    "unavailable",
    "redirect_changed",
    "jurisdiction_mismatch",
    "population_mismatch",
    "license_restricted",
    "content_changed",
    "provider_verification_expired"
  ]);

  const FEEDBACK_TYPES = Object.freeze([
    "incorrect_citation",
    "outdated_source",
    "superseded_source",
    "withdrawn_source",
    "wrong_population",
    "wrong_jurisdiction",
    "unsafe_interpretation",
    "unsupported_conclusion",
    "translation_concern",
    "licensing_concern",
    "provider_data_error",
    "social_service_data_error",
    "model_concern",
    "calculator_concern",
    "medication_concern",
    "laboratory_concern"
  ]);

  const RECOGNIZED_SOURCE_RECORDS = Object.freeze([
    source("who", "World Health Organization", "1B", "international", ["public_health", "chronic_care", "mental_health", "maternal_child", "infectious_disease"], "https://www.who.int/"),
    source("cdc", "Centers for Disease Control and Prevention", "1A", "US", ["public_health", "diabetes", "hypertension", "infectious_disease", "emergency"], "https://www.cdc.gov/"),
    source("nih", "National Institutes of Health", "1A", "US", ["chronic_care", "medication", "patient_education", "research"], "https://www.nih.gov/"),
    source("fda", "U.S. Food and Drug Administration", "1A", "US", ["medication", "devices", "diagnostics", "regulatory"], "https://www.fda.gov/"),
    source("cms", "Centers for Medicare & Medicaid Services", "1A", "US", ["coverage", "provider_directory", "quality", "rpm", "rtm"], "https://www.cms.gov/"),
    source("ahrq", "Agency for Healthcare Research and Quality", "3", "US", ["evidence_synthesis", "quality", "patient_safety"], "https://www.ahrq.gov/"),
    source("nice", "National Institute for Health and Care Excellence", "1A", "UK", ["guidelines", "medication", "public_health"], "https://www.nice.org.uk/"),
    source("nhs", "National Health Service", "1A", "UK", ["patient_education", "service_navigation"], "https://www.nhs.uk/"),
    source("ema", "European Medicines Agency", "1A", "EU", ["medication", "regulatory"], "https://www.ema.europa.eu/"),
    source("cochrane", "Cochrane", "3", "international", ["systematic_review", "evidence_synthesis"], "https://www.cochrane.org/"),
    source("samhsa", "Substance Abuse and Mental Health Services Administration", "1A", "US", ["mental_health", "substance_use", "provider_directory"], "https://www.samhsa.gov/"),
    source("npi", "National Plan and Provider Enumeration System", "7", "US", ["provider_directory"], "https://npiregistry.cms.hhs.gov/")
  ]);

  const SOURCE_CONFLICT_RULES = Object.freeze([
    {
      conflictId: "jurisdiction-guidance-conflict",
      trigger: "same domain with different controlling jurisdictions",
      action: "preserve sources separately; apply configured controlling local authority; show uncertainty and require professional review when local authority is absent"
    },
    {
      conflictId: "population-guidance-conflict",
      trigger: "guidance applies to different age, pregnancy, comorbidity, or care-setting populations",
      action: "block unsupported generalization; show population limitation; require professional review"
    },
    {
      conflictId: "evidence-quality-conflict",
      trigger: "primary study conflicts with formal guideline or systematic evidence synthesis",
      action: "prefer stronger evidence hierarchy; disclose disagreement; avoid false consensus"
    }
  ]);

  const DOMAIN_EVIDENCE_MAPS = Object.freeze({
    diabetes: domain("diabetes", ["cdc", "nih", "cms", "who"], ["patient education", "RPM/RTM organization", "provider-ready summaries"], ["diagnosis", "insulin adjustment", "medication prescribing"]),
    hypertension: domain("hypertension", ["cdc", "nih", "cms", "who"], ["BP tracking", "education", "provider-ready summaries"], ["diagnosis", "medication changes", "emergency triage replacement"]),
    obesity: domain("obesity", ["cdc", "nih", "who"], ["education", "goal planning", "provider discussion prompts"], ["diagnosis", "prescribing weight-loss medication"]),
    rpm_rtm: domain("rpm_rtm", ["cms", "fda", "nih"], ["manual readings", "device/source provenance", "provider review packets"], ["device-level medical monitoring claims", "automated clinical alerts"]),
    mental_health: domain("mental_health", ["who", "samhsa", "nih"], ["supportive dialogue", "crisis override", "provider/resource readiness"], ["diagnosis", "therapy replacement", "emergency dispatch"]),
    medication: domain("medication", ["fda", "ema", "nih", "nice"], ["medication education", "question preparation", "pharmacy workflow preparation"], ["prescribing", "dose change", "refill approval"]),
    laboratory: domain("laboratory", ["nih", "cdc", "fda"], ["lab organization", "unit capture", "provider questions"], ["diagnostic certainty", "universal reference interval"]),
    telehealth: domain("telehealth", ["cms", "cdc", "who"], ["intake preparation", "visit readiness", "summary preparation"], ["appointment guarantee", "provider acceptance claim"]),
    pharmacy: domain("pharmacy", ["fda", "ema", "cms"], ["pharmacy preparation", "medication list organization"], ["fulfillment guarantee", "prescription/refill approval"]),
    social_care: domain("social_care", ["cms", "cdc", "who"], ["eligibility uncertainty", "resource preparation", "consent gates"], ["guaranteed eligibility", "sharing health data without consent"])
  });

  const PREDICTIVE_MODEL_REGISTRY = Object.freeze({
    chronic_trend_review: model("chronic_trend_review", "Descriptive chronic-care trend review", ["adult self-reported/manual readings"], ["diabetes", "hypertension", "obesity", "rpm_rtm"], "local_ruleset", false),
    mental_health_crisis_override: model("mental_health_crisis_override", "Crisis/emergency language override", ["all users; direct emergency language"], ["mental_health"], "rule_override", false),
    cardiovascular_risk_score: model("cardiovascular_risk_score", "Cardiovascular risk-score placeholder", ["requires validated calculator selection and complete inputs"], ["hypertension", "diabetes"], "blocked_until_calculator_governed", false),
    medication_safety_review: model("medication_safety_review", "Medication evidence safety review", ["requires authoritative drug source and clinician/pharmacist review"], ["medication", "pharmacy"], "evidence_review", false)
  });

  const UNSAFE_CLAIM_PATTERNS = [
    /\bclinically proven for every population\b/i,
    /\bapproved worldwide\b/i,
    /\baccepted by all doctors\b/i,
    /\bdiagnosed you\b/i,
    /\bI diagnosed\b/i,
    /\bprescribed\b/i,
    /\bmedication changed\b/i,
    /\bprovider accepted\b/i,
    /\bemergency dispatched\b/i,
    /\bguaranteed eligibility\b/i
  ];

  const COMMAND_PATTERNS = [
    /\b(health evidence|medical evidence|evidence inspector|professional evidence|source trust|trusted source)\b/i,
    /\b(guideline|clinical guideline|recommendation strength|evidence tier|source authority|jurisdiction)\b/i,
    /\b(predictive health governance|model governance|risk model|risk score|calculator registry|validation population)\b/i,
    /\b(medication evidence|lab evidence|laboratory evidence|diabetes evidence|hypertension evidence|obesity evidence|rpm evidence|rtm evidence)\b/i,
    /\b(show the source|who published this|is this source current|when was this verified|why is this source blocked|show the professional version|conflicting guidelines|conflicting sources)\b/i
  ];

  function source(sourceId, name, tier, jurisdiction, domains, canonicalUrl) {
    const trustedDomain = safeHostname(canonicalUrl);
    return Object.freeze({
      sourceId,
      name,
      evidenceTier: tier,
      jurisdiction,
      domains,
      canonicalUrl,
      trustedDomains: trustedDomain ? [trustedDomain] : [],
      sourceTitle: `${name} canonical source record`,
      publicationYearOrVersion: "version verification required",
      verificationState: "pending_professional_review",
      versionStatus: "monitoring_required",
      lastVerifiedAt: null,
      nextScheduledReviewAt: null,
      licensingStatus: "review_required",
      conflictOfInterestStatus: "not_applicable_or_unknown",
      governanceApproval: "required_before_clinical_activation"
    });
  }

  function domain(domainId, sourceIds, supportedUses, prohibitedUses) {
    return Object.freeze({
      domainId,
      sourceIds,
      supportedUses,
      prohibitedUses,
      professionalBoundary: "Nexus prepares education, organization, and review packets. Qualified professionals retain clinical authority.",
      emergencyOverrideRequired: true,
      evidenceMapStatus: "seeded_governance_map",
      activationStatus: "source_ready_review_required"
    });
  }

  function model(modelId, name, intendedPopulation, domains, validationStatus, executionEnabled) {
    return Object.freeze({
      modelId,
      name,
      intendedPopulation,
      domains,
      validationStatus,
      executionEnabled,
      requiresHumanReview: true,
      regulatoryAssessment: "required_before_clinical_use",
      outputBoundary: "explainable support only; not diagnosis, treatment, triage, or professional judgment replacement"
    });
  }

  function normalizeText(value = "") {
    return String(value || "").toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").trim();
  }

  function safeHostname(value = "") {
    try {
      return new URL(String(value || "")).hostname.replace(/^www\./, "");
    } catch (_error) {
      return "";
    }
  }

  function shouldHandle(input = "") {
    const text = normalizeText(input);
    return Boolean(text && COMMAND_PATTERNS.some(pattern => pattern.test(text)));
  }

  function inferDomain(input = "") {
    const text = normalizeText(input);
    if (/\b(diabetes|glucose|a1c|blood sugar)\b/.test(text)) return "diabetes";
    if (/\b(hypertension|blood pressure|bp)\b/.test(text)) return "hypertension";
    if (/\b(obesity|weight|bmi)\b/.test(text)) return "obesity";
    if (/\b(rpm|rtm|remote patient|remote therapeutic|reading|device)\b/.test(text)) return "rpm_rtm";
    if (/\b(mental|behavioral|behavioural|depression|anxiety|crisis|suicide)\b/.test(text)) return "mental_health";
    if (/\b(medicine|medication|drug|pharmacy|refill|prescription)\b/.test(text)) return "medication";
    if (/\b(lab|laboratory|diagnostic|test result|reference range)\b/.test(text)) return "laboratory";
    if (/\b(telehealth|virtual care|video visit|provider bridge)\b/.test(text)) return "telehealth";
    if (/\b(social care|food|housing|transportation|benefits)\b/.test(text)) return "social_care";
    return "chronic_care";
  }

  function sourceById(sourceId) {
    return RECOGNIZED_SOURCE_RECORDS.find(item => item.sourceId === sourceId) || null;
  }

  function inspect(input = "", context = {}) {
    const domainId = context.domain || inferDomain(input);
    const evidenceMap = DOMAIN_EVIDENCE_MAPS[domainId] || DOMAIN_EVIDENCE_MAPS.diabetes;
    const sources = evidenceMap.sourceIds.map(sourceById).filter(Boolean);
    const models = Object.values(PREDICTIVE_MODEL_REGISTRY).filter(item => item.domains.includes(domainId) || (domainId === "chronic_care" && item.domains.some(domain => ["diabetes", "hypertension", "obesity"].includes(domain))));
    const sourceReceipts = sources.map(sourceRecord => ({
      sourceId: sourceRecord.sourceId,
      name: sourceRecord.name,
      canonicalUrl: sourceRecord.canonicalUrl,
      evidenceTier: sourceRecord.evidenceTier,
      tierLabel: tierLabel(sourceRecord.evidenceTier),
      jurisdiction: sourceRecord.jurisdiction,
      versionStatus: sourceRecord.versionStatus,
      governanceApproval: sourceRecord.governanceApproval,
      citationReady: false,
      verification: verifySource(sourceRecord.sourceId, context.verification || {}),
      reasonCitationNotFinal: "Live version/date verification and governance approval are required before clinical citation activation."
    }));
    const role = normalizeInspectorRole(context.role || (/professional version/i.test(String(input || "")) ? "professional" : "standard_user"));
    return {
      ok: true,
      serviceId: SERVICE_ID,
      serviceVersion: SERVICE_VERSION,
      packetType: "enterprise_health_evidence_trust_packet",
      inspectedText: String(input || "").slice(0, 500),
      domainId,
      evidenceMap,
      evidenceHierarchy: EVIDENCE_TIERS,
      sourceReceipts,
      conflictReview: buildConflictReview(domainId, sourceReceipts),
      inspectorView: buildInspectorView(role, domainId, sourceReceipts, evidenceMap, models),
      predictiveModels: models,
      professionalInspector: {
        available: true,
        canRecordDisagreement: true,
        humanAuthorityProtected: true,
        boardClaim: "No clinical governance board endorsement is claimed until real members and review records exist."
      },
      safety: commonSafety(),
      auditReceipt: audit("health_evidence_inspection_prepared", domainId),
      userVisibleStatus: `Nexus prepared an enterprise health evidence trust packet for ${domainId.replace(/_/g, " ")}. It shows source tiers, jurisdiction limits, model governance, and professional review requirements without making a diagnosis or clinical claim.`
    };
  }

  function normalizeInspectorRole(role = "standard_user") {
    const value = normalizeText(role).replace(/[-\s]+/g, "_");
    return value === "professional" || value === "clinician" || value === "administrator" ? "professional" : "standard_user";
  }

  function buildInspectorView(role, domainId, sourceReceipts, evidenceMap, models) {
    const first = sourceReceipts[0] || {};
    if (role === "professional") {
      return {
        role: "professional",
        fields: {
          completeCitation: `${first.name || "Source"} (${first.versionStatus || "version pending"}). ${first.canonicalUrl || "canonical URL pending"}`,
          evidenceTier: first.evidenceTier || "unmapped",
          recommendationScope: evidenceMap.supportedUses || [],
          recommendationStrength: "not extracted until guideline/version review is complete",
          evidenceCertainty: "not graded until source-specific appraisal is complete",
          intendedPopulation: "must be confirmed per source and model",
          exclusions: evidenceMap.prohibitedUses || [],
          jurisdiction: first.jurisdiction || "requires jurisdiction match",
          careSetting: "requires care-setting match",
          sourceVersion: first.versionStatus || "monitoring required",
          publicationDate: first.publicationYearOrVersion || "verification required",
          revisionDate: "verification required",
          funding: "not extracted",
          conflictsOfInterest: "not extracted",
          localAdaptation: "required when local authority differs",
          licensing: "review required",
          modelOrRuleUsingSource: models.map(item => item.modelId),
          sourceVerificationReceipt: first.verification?.verificationReceiptId || "",
          sourceConflicts: buildConflictReview(domainId, sourceReceipts),
          professionalReviewRequirements: ["source version", "jurisdiction", "population", "recommendation strength", "clinical applicability"],
          citationExportReady: false,
          canonicalSourceAction: "open_canonical_source_after_review"
        }
      };
    }
    return {
      role: "standard_user",
      fields: {
        sourceOrganization: first.name || "Source pending",
        sourceTitle: first.sourceTitle || `${first.name || "Source"} canonical source record`,
        publicationYearOrVersion: first.publicationYearOrVersion || "version verification required",
        jurisdiction: first.jurisdiction || "requires jurisdiction match",
        lastVerifiedDate: first.verification?.lastVerifiedAt || "not yet live-verified",
        whyItApplies: `${domainId.replace(/_/g, " ")} source map includes this organization as an initial authority candidate.`,
        keyLimitation: first.reasonCitationNotFinal || "Professional review is required before clinical activation.",
        professionalReviewNotice: "A qualified professional must review clinical interpretation and local applicability.",
        inspectSourceAction: "inspect_source"
      }
    };
  }

  function verifySource(sourceIdOrUrl = "", options = {}) {
    const sourceRecord = sourceById(sourceIdOrUrl) || RECOGNIZED_SOURCE_RECORDS.find(item => item.canonicalUrl === sourceIdOrUrl) || null;
    const canonicalUrl = sourceRecord?.canonicalUrl || String(sourceIdOrUrl || "");
    const canonicalHostname = safeHostname(canonicalUrl);
    const trustedDomains = sourceRecord?.trustedDomains || (canonicalHostname ? [canonicalHostname] : []);
    const observedUrl = String(options.observedUrl || options.finalUrl || canonicalUrl || "");
    const observedHostname = safeHostname(observedUrl);
    const redirectDetected = Boolean(options.redirectDetected || (observedUrl && canonicalUrl && observedUrl !== canonicalUrl));
    const redirectDestinationTrusted = !observedHostname || trustedDomains.includes(observedHostname);
    let verificationState = sourceRecord?.verificationState || "pending_professional_review";
    const blockers = [];
    const warnings = [];

    if (!canonicalUrl || !canonicalHostname) {
      verificationState = "unavailable";
      blockers.push("canonical_url_invalid");
    }
    if (observedHostname && !redirectDestinationTrusted) {
      verificationState = "redirect_changed";
      blockers.push("redirect_destination_untrusted");
    } else if (redirectDetected) {
      verificationState = "redirected";
      warnings.push("redirect_detected");
    }
    if (options.httpStatus && Number(options.httpStatus) >= 400) {
      verificationState = "unavailable";
      blockers.push("source_unavailable");
    }
    if (options.withdrawn === true) {
      verificationState = "withdrawn";
      blockers.push("withdrawn_source");
    }
    if (options.supersededBy) {
      verificationState = "superseded";
      blockers.push("superseded_source");
    }
    if (options.contentChanged === true) {
      verificationState = "content_changed";
      blockers.push("content_changed_requires_review");
    }
    if (options.jurisdiction && sourceRecord?.jurisdiction && !["international", sourceRecord.jurisdiction].includes(options.jurisdiction)) {
      verificationState = "jurisdiction_mismatch";
      blockers.push("jurisdiction_mismatch");
    }
    if (!blockers.length && options.liveChecked === true && !redirectDetected) {
      verificationState = options.localAdaptation ? "verified_current_with_local_adaptation" : "verified_current";
    }
    const blocked = BLOCKED_SOURCE_STATES.includes(verificationState);
    return {
      verificationReceiptId: `${SERVICE_ID}-source-verification-${sourceRecord?.sourceId || "custom"}-${Date.now()}`,
      sourceId: sourceRecord?.sourceId || "",
      canonicalUrl,
      canonicalHostname,
      trustedDomains,
      observedUrl,
      observedHostname,
      redirectDetected,
      redirectDestinationTrusted,
      verificationState,
      allowedForClinicalUse: !blocked && verificationState.startsWith("verified_current"),
      blocked,
      blockers,
      warnings,
      lastVerifiedAt: options.liveChecked ? new Date().toISOString() : sourceRecord?.lastVerifiedAt,
      nextScheduledReviewAt: sourceRecord?.nextScheduledReviewAt,
      professionalReviewRequired: verificationState !== "verified_current",
      offlineVerificationState: options.liveChecked ? "live_checked" : "offline_registry_only",
      noSilentUse: blocked
    };
  }

  function buildConflictReview(domainId, sourceReceipts = []) {
    const jurisdictions = Array.from(new Set(sourceReceipts.map(item => item.jurisdiction).filter(Boolean)));
    const tiers = Array.from(new Set(sourceReceipts.map(item => item.evidenceTier).filter(Boolean)));
    return {
      domainId,
      hasPotentialConflict: jurisdictions.length > 1 || tiers.length > 1,
      jurisdictionDifferences: jurisdictions,
      evidenceTierDifferences: tiers,
      rules: SOURCE_CONFLICT_RULES,
      selectedSourceId: "",
      selectionReason: "No clinical source selected automatically; professional review and jurisdiction configuration are required.",
      falseConsensusAvoided: true
    };
  }

  function buildFeedbackRecord(input = {}) {
    const feedbackType = FEEDBACK_TYPES.includes(input.feedbackType) ? input.feedbackType : "unsupported_conclusion";
    return {
      feedbackId: `${SERVICE_ID}-feedback-${Date.now()}`,
      feedbackType,
      sourceId: String(input.sourceId || "").slice(0, 80),
      domainId: String(input.domainId || "health").slice(0, 80),
      note: String(input.note || "").slice(0, 600),
      status: "queued_for_governance_review",
      professionalReviewed: false,
      reviewerClaim: "No qualified professional review is claimed until a reviewer records it.",
      createdAt: new Date().toISOString(),
      safety: commonSafety()
    };
  }

  function predictiveGovernance(input = "", context = {}) {
    const domainId = context.domain || inferDomain(input);
    const models = Object.values(PREDICTIVE_MODEL_REGISTRY).filter(item => item.domains.includes(domainId) || (domainId === "chronic_care" && item.domains.some(domain => ["diabetes", "hypertension", "obesity", "rpm_rtm"].includes(domain))));
    return {
      ok: true,
      serviceId: SERVICE_ID,
      serviceVersion: SERVICE_VERSION,
      packetType: "predictive_health_governance_packet",
      domainId,
      models,
      allowedNow: "descriptive_review_only",
      blockedUntil: [
        "validated intended population",
        "complete required inputs",
        "source and formula version verification",
        "bias/performance review",
        "human professional review gate",
        "regulatory classification assessment"
      ],
      emergencyOverride: "Direct emergency language overrides routine prediction and routes to urgent human support guidance.",
      safety: commonSafety(),
      auditReceipt: audit("predictive_health_governance_prepared", domainId),
      userVisibleStatus: `Nexus can organize ${domainId.replace(/_/g, " ")} trends for review, but predictive outputs remain descriptive until the model, population, source, and professional-review gates are satisfied.`
    };
  }

  function status(env = {}) {
    const enabled = env.NEXUS_ENTERPRISE_HEALTH_EVIDENCE_ENABLED !== "false";
    return {
      ok: true,
      serviceId: SERVICE_ID,
      serviceVersion: SERVICE_VERSION,
      enabled,
      recognizedSourceCount: RECOGNIZED_SOURCE_RECORDS.length,
      evidenceTierCount: EVIDENCE_TIERS.length,
      sourceVerificationStateCount: SOURCE_VERIFICATION_STATES.length,
      domainMapCount: Object.keys(DOMAIN_EVIDENCE_MAPS).length,
      predictiveModelCount: Object.keys(PREDICTIVE_MODEL_REGISTRY).length,
      executionEnabled: false,
      clinicalAuthorityClaimed: false,
      missingConfig: [],
      activeCapabilities: ["source inspection", "evidence tiering", "source verification contracts", "role-aware evidence inspector", "conflict review", "domain evidence maps", "predictive governance receipts", "professional inspector contract"],
      blockedCapabilities: ["clinical diagnosis", "prescribing", "medication change", "provider submission", "emergency dispatch", "unvalidated prediction", "fake citation"],
      noSecretsExposed: true,
      safety: commonSafety()
    };
  }

  function tierLabel(tier) {
    return (EVIDENCE_TIERS.find(item => item.tier === tier) || {}).label || "Unmapped evidence tier";
  }

  function commonSafety() {
    return {
      noDiagnosis: true,
      noPrescribing: true,
      noMedicationChange: true,
      noProviderContacted: true,
      noEmergencyDispatch: true,
      noFakeCitation: true,
      noFakeGuidelineApproval: true,
      noFakeModelValidation: true,
      noClinicalAuthorityClaimed: true,
      professionalReviewRequired: true
    };
  }

  function audit(eventType, domainId) {
    return {
      receiptId: `${SERVICE_ID}-${eventType}-${Date.now()}`,
      eventType,
      domainId,
      createdAt: new Date().toISOString(),
      didNot: [
        "Nexus did not diagnose.",
        "Nexus did not prescribe or change medication.",
        "Nexus did not contact a provider.",
        "Nexus did not dispatch emergency services.",
        "Nexus did not create a fake citation or fake model-validation claim."
      ]
    };
  }

  function hasUnsafeClaim(text = "") {
    return UNSAFE_CLAIM_PATTERNS.some(pattern => pattern.test(String(text || "")));
  }

  const api = Object.freeze({
    SERVICE_ID,
    SERVICE_VERSION,
    EVIDENCE_TIERS,
    SOURCE_VERIFICATION_STATES,
    BLOCKED_SOURCE_STATES,
    FEEDBACK_TYPES,
    RECOGNIZED_SOURCE_RECORDS,
    SOURCE_CONFLICT_RULES,
    DOMAIN_EVIDENCE_MAPS,
    PREDICTIVE_MODEL_REGISTRY,
    shouldHandle,
    inferDomain,
    inspect,
    verifySource,
    buildConflictReview,
    buildFeedbackRecord,
    predictiveGovernance,
    status,
    hasUnsafeClaim
  });

  if (typeof module !== "undefined" && module.exports) module.exports = api;
  globalScope.NexusEnterpriseHealthEvidenceTrust = api;
})(typeof window !== "undefined" ? window : globalThis);
