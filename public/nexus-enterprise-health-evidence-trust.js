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
    source("npi", "National Plan and Provider Enumeration System", "7", "US", ["provider_directory"], "https://npiregistry.cms.hhs.gov/"),
    source("uspstf", "U.S. Preventive Services Task Force", "2", "US", ["screening", "preventive_care", "maternal_child"], "https://www.uspreventiveservicestaskforce.org/"),
    source("ada", "American Diabetes Association Standards of Care", "2", "US", ["diabetes", "cardiometabolic", "clinical_practice_guideline"], "https://diabetes.org/"),
    source("aha", "American Heart Association", "2", "US", ["hypertension", "cardiovascular", "patient_education"], "https://www.heart.org/"),
    source("acog", "American College of Obstetricians and Gynecologists", "2", "US", ["maternal_child", "pregnancy", "screening"], "https://www.acog.org/"),
    source("aap", "American Academy of Pediatrics", "2", "US", ["pediatrics", "youth", "vulnerable_population"], "https://www.aap.org/"),
    source("apa", "American Psychiatric Association", "2", "US", ["mental_health", "behavioral_wellness", "screening"], "https://www.psychiatry.org/"),
    source("kdigo", "KDIGO", "2", "international", ["kidney", "diabetes", "hypertension"], "https://kdigo.org/"),
    source("gold", "Global Initiative for Chronic Obstructive Lung Disease", "2", "international", ["respiratory", "copd", "chronic_care"], "https://goldcopd.org/"),
    source("gina", "Global Initiative for Asthma", "2", "international", ["asthma", "respiratory", "chronic_care"], "https://ginasthma.org/"),
    source("988", "988 Suicide & Crisis Lifeline", "7", "US", ["crisis", "mental_health", "safety_planning"], "https://988lifeline.org/"),
    source("findhelp", "Findhelp Social Care Network", "7", "US", ["social_care", "food", "housing", "transportation"], "https://www.findhelp.org/"),
    source("hrsa", "Health Resources and Services Administration", "7", "US", ["health_center", "mobile_clinic", "provider_directory"], "https://www.hrsa.gov/"),
    source("loinc", "LOINC", "5", "international", ["laboratory", "clinical_terminology", "fhir"], "https://loinc.org/"),
    source("snomed", "SNOMED International", "5", "international", ["clinical_terminology", "fhir", "diagnostics"], "https://www.snomed.org/"),
    source("rxnorm", "RxNorm", "5", "US", ["medication", "pharmacy", "clinical_terminology"], "https://www.nlm.nih.gov/research/umls/rxnorm/"),
    source("hl7", "HL7 International", "5", "international", ["fhir", "interoperability", "clinical_terminology"], "https://www.hl7.org/fhir/")
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
    chronic_care: domain("chronic_care", ["cdc", "nih", "cms", "who", "ada", "aha"], ["education", "manual tracking", "provider-ready summaries", "RPM/RTM readiness"], ["diagnosis", "treatment plan", "medication change", "automated clinical monitoring"]),
    diabetes: domain("diabetes", ["cdc", "nih", "cms", "who"], ["patient education", "RPM/RTM organization", "provider-ready summaries"], ["diagnosis", "insulin adjustment", "medication prescribing"]),
    hypertension: domain("hypertension", ["cdc", "nih", "cms", "who"], ["BP tracking", "education", "provider-ready summaries"], ["diagnosis", "medication changes", "emergency triage replacement"]),
    obesity: domain("obesity", ["cdc", "nih", "who"], ["education", "goal planning", "provider discussion prompts"], ["diagnosis", "prescribing weight-loss medication"]),
    cardiometabolic: domain("cardiometabolic", ["cdc", "nih", "ada", "aha", "cms"], ["risk-factor education", "care-team summary", "lifestyle barrier organization"], ["risk diagnosis", "statin/medication recommendation", "treatment intensity selection"]),
    kidney: domain("kidney", ["nih", "kdigo", "cdc", "loinc"], ["kidney-risk education", "lab-name organization", "provider questions"], ["eGFR diagnosis", "CKD staging as final advice", "medication safety decision"]),
    respiratory: domain("respiratory", ["gold", "gina", "nih", "who"], ["asthma/COPD education", "trigger tracking", "clinic questions"], ["inhaler prescription", "oxygen therapy decision", "emergency replacement"]),
    rpm_rtm: domain("rpm_rtm", ["cms", "fda", "nih"], ["manual readings", "device/source provenance", "provider review packets"], ["device-level medical monitoring claims", "automated clinical alerts"]),
    mental_health: domain("mental_health", ["who", "samhsa", "nih"], ["supportive dialogue", "crisis override", "provider/resource readiness"], ["diagnosis", "therapy replacement", "emergency dispatch"]),
    behavioral_wellness: domain("behavioral_wellness", ["who", "samhsa", "apa", "nih"], ["supportive coping plan", "screening consent gate", "provider questions"], ["diagnosis", "therapy replacement", "medication recommendation"]),
    crisis_safety: domain("crisis_safety", ["988", "samhsa", "who"], ["crisis recognition", "safety planning prompts", "trusted-person guidance"], ["emergency dispatch claim", "risk prediction as final triage", "silent third-party contact"]),
    medication: domain("medication", ["fda", "ema", "nih", "nice"], ["medication education", "question preparation", "pharmacy workflow preparation"], ["prescribing", "dose change", "refill approval"]),
    medication_safety: domain("medication_safety", ["fda", "rxnorm", "nih", "ema"], ["drug-name normalization", "side-effect question prep", "pharmacist review packet"], ["interaction certainty", "dose advice", "substitution approval"]),
    laboratory: domain("laboratory", ["nih", "cdc", "fda"], ["lab organization", "unit capture", "provider questions"], ["diagnostic certainty", "universal reference interval"]),
    diagnostic_imaging: domain("diagnostic_imaging", ["fda", "nih", "ahrq"], ["imaging report organization", "questions for clinician", "source provenance"], ["image diagnosis", "urgent interpretation", "radiology replacement"]),
    screening: domain("screening", ["uspstf", "cdc", "who", "acog", "aap"], ["screening education", "eligibility questions", "provider-ready checklist"], ["screening order", "eligibility guarantee", "result interpretation"]),
    maternal_child: domain("maternal_child", ["who", "cdc", "acog", "aap"], ["danger-sign education", "antenatal/pediatric visit prep", "family support plan"], ["diagnosis", "treatment instruction", "emergency dispatch"]),
    youth_vulnerable: domain("youth_vulnerable", ["aap", "who", "samhsa", "cdc"], ["extra consent review", "guardian/safeguarding prompts", "plain-language support"], ["private disclosure without consent", "autonomous clinical action", "unsafe family assumption"]),
    telehealth: domain("telehealth", ["cms", "cdc", "who"], ["intake preparation", "visit readiness", "summary preparation"], ["appointment guarantee", "provider acceptance claim"]),
    mobile_clinic: domain("mobile_clinic", ["hrsa", "cms", "cdc", "who"], ["mobile clinic request prep", "vitals/screening education", "review queue"], ["dispatch", "arrival guarantee", "clinical acceptance claim"]),
    pharmacy: domain("pharmacy", ["fda", "ema", "cms"], ["pharmacy preparation", "medication list organization"], ["fulfillment guarantee", "prescription/refill approval"]),
    provider_directory: domain("provider_directory", ["npi", "cms", "hrsa", "samhsa"], ["provider identity display", "directory source provenance", "contact prep"], ["provider quality claim", "availability guarantee", "silent provider contact"]),
    health_center: domain("health_center", ["hrsa", "cms", "cdc"], ["health-center lookup prep", "eligibility questions", "contact packet"], ["appointment booking", "eligibility guarantee", "provider acceptance claim"]),
    fhir_records: domain("fhir_records", ["hl7", "loinc", "snomed", "rxnorm"], ["FHIR packet preparation", "terminology mapping", "consent-gated export"], ["record access", "record write", "clinical documentation without provider approval"]),
    social_care: domain("social_care", ["cms", "cdc", "who", "findhelp"], ["eligibility uncertainty", "resource preparation", "consent gates"], ["guaranteed eligibility", "sharing health data without consent"]),
    transportation_to_care: domain("transportation_to_care", ["cms", "findhelp", "hrsa"], ["transportation needs prep", "resource list", "consent-gated handoff packet"], ["dispatch", "ride booking", "payment"])
  });

  const PREDICTIVE_MODEL_REGISTRY = Object.freeze({
    chronic_trend_review: model("chronic_trend_review", "Descriptive chronic-care trend review", ["adult self-reported/manual readings"], ["diabetes", "hypertension", "obesity", "rpm_rtm"], "local_ruleset", false),
    mental_health_crisis_override: model("mental_health_crisis_override", "Crisis/emergency language override", ["all users; direct emergency language"], ["mental_health"], "rule_override", false),
    cardiovascular_risk_score: model("cardiovascular_risk_score", "Cardiovascular risk-score placeholder", ["requires validated calculator selection and complete inputs"], ["hypertension", "diabetes"], "blocked_until_calculator_governed", false),
    medication_safety_review: model("medication_safety_review", "Medication evidence safety review", ["requires authoritative drug source and clinician/pharmacist review"], ["medication", "pharmacy"], "evidence_review", false),
    social_care_eligibility_readiness: model("social_care_eligibility_readiness", "Social-care eligibility readiness review", ["requires user consent and local program rules"], ["social_care", "transportation_to_care"], "human_review_required", false),
    youth_vulnerable_safeguard_router: model("youth_vulnerable_safeguard_router", "Youth and vulnerable-population safeguard router", ["children, elders, pregnancy, disability, crisis, abuse, exploitation"], ["youth_vulnerable", "maternal_child", "crisis_safety"], "safeguard_override", false),
    fhir_record_readiness_review: model("fhir_record_readiness_review", "FHIR record readiness review", ["requires identity, consent, role, and configured FHIR connector"], ["fhir_records", "telehealth", "provider_directory"], "connector_blocked", false)
  });

  const CLINICAL_CALCULATOR_REGISTRY = Object.freeze({
    bmi: calculator("bmi", "Body Mass Index", ["height", "weight"], ["obesity", "cardiometabolic"], "education_only", false),
    bp_category: calculator("bp_category", "Blood pressure category support", ["systolic", "diastolic", "measurement_context"], ["hypertension"], "review_only", false),
    a1c_context: calculator("a1c_context", "A1C context support", ["a1c_value", "date", "lab_source"], ["diabetes"], "review_only", false),
    egfr_context: calculator("egfr_context", "eGFR context support", ["eGFR_value", "date", "lab_source", "age_optional"], ["kidney"], "review_only", false),
    ascvd_risk: calculator("ascvd_risk", "ASCVD risk estimator readiness", ["age", "sex", "race_or_applicable_model_context", "cholesterol", "bp", "diabetes", "smoking", "treatment_context"], ["cardiometabolic", "hypertension", "diabetes"], "blocked_until_formula_and_population_validated", false),
    phq9: calculator("phq9", "PHQ-9 screening instrument governance", ["user_consent", "all_item_answers", "crisis_override_check"], ["mental_health", "behavioral_wellness"], "consent_and_professional_review_required", false),
    gad7: calculator("gad7", "GAD-7 screening instrument governance", ["user_consent", "all_item_answers", "functional_impact_context"], ["mental_health", "behavioral_wellness"], "consent_and_professional_review_required", false),
    cssrs: calculator("cssrs", "C-SSRS style suicide-risk screening governance", ["trained_workflow", "jurisdiction_resources", "immediate_safety_check"], ["crisis_safety", "mental_health"], "crisis_override_required", false),
    pregnancy_danger_signs: calculator("pregnancy_danger_signs", "Pregnancy danger-sign checklist", ["symptoms", "gestational_context_if_known", "local_urgent_care_context"], ["maternal_child"], "urgent_review_boundary", false)
  });

  const VERIFIED_PROVIDER_TRUST_REGISTRY = Object.freeze({
    physician_clinic: providerTrust("physician_clinic", "Physician or clinic", ["license verification", "NPI or local registry", "specialty/scope", "active status", "sanction check"], ["schedule", "message", "clinical review"], "provider_confirmation_required"),
    telehealth_provider: providerTrust("telehealth_provider", "Telehealth provider", ["telehealth credential", "jurisdiction coverage", "platform status", "consent workflow"], ["video visit", "intake review", "provider note"], "telehealth_connector_required"),
    pharmacy: providerTrust("pharmacy", "Pharmacy", ["license verification", "pharmacy location", "pharmacist review route", "prescription authority"], ["refill request", "medication question", "inventory check"], "pharmacy_connector_required"),
    mobile_clinic_operator: providerTrust("mobile_clinic_operator", "Mobile clinic operator", ["operator identity", "service scope", "schedule source", "coverage geography"], ["mobile visit request", "screening event", "community outreach"], "operator_confirmation_required"),
    crisis_resource: providerTrust("crisis_resource", "Crisis resource", ["jurisdiction resource source", "availability review", "language/accessibility review"], ["display resource", "safety planning"], "never_claim_dispatch"),
    social_service_org: providerTrust("social_service_org", "Social-service organization", ["program owner", "eligibility source", "service area", "freshness review"], ["resource packet", "eligibility question prep"], "consent_required_before_sharing")
  });

  const FHIR_TERMINOLOGY_CONTRACTS = Object.freeze({
    fhirResources: ["Patient", "Observation", "Condition", "MedicationStatement", "MedicationRequest", "ServiceRequest", "Encounter", "CarePlan", "DocumentReference", "Consent", "Provenance"],
    terminologySystems: {
      loinc: "laboratory and observation codes",
      snomed: "clinical findings and problems",
      rxnorm: "medication normalization",
      icd10: "billing/diagnosis code context only when supplied by a qualified source"
    },
    defaultState: "disabled_until_identity_consent_role_and_connector_are_configured",
    noClinicalWrite: true,
    noRecordAccessWithoutConsent: true,
    auditRequired: true
  });

  const CONSENT_PRIVACY_GOVERNANCE = Object.freeze({
    requiredBefore: ["provider sharing", "FHIR access", "pharmacy handoff", "appointment/referral request", "social-care sharing", "messages/calls", "export"],
    userRights: ["view", "correct", "export", "revoke", "delete local copy where permitted", "see audit trail"],
    dataMinimization: true,
    sensitiveDataDefault: "local_or_session_only_until_configured",
    memoryDefault: "do_not_store_sensitive_health_data_without_explicit_consent",
    sharingDefault: "blocked_until_user_approval_and_audit_receipt"
  });

  const ACCESSIBILITY_LOCALIZATION_GOVERNANCE = Object.freeze({
    supportedNeeds: ["plain language", "low literacy", "multilingual labels", "voice fallback", "caption fallback", "low bandwidth", "offline queue", "cultural adaptation review"],
    translationState: "translation_unverified_until_human_or_approved_translation_review",
    languages: ["English", "Spanish", "French", "Arabic", "Portuguese", "Swahili"],
    noClinicalInterpretationCertificationClaim: true,
    offlineState: "may prepare packets locally; does not claim live source freshness while offline"
  });

  const PROFESSIONAL_WORKSPACE_ROLES = Object.freeze({
    physician: reviewRole("physician", ["clinical interpretation", "diagnosis/treatment decisions", "care plan review"], ["diagnosis", "prescribing", "referral approval", "clinical calculator interpretation"]),
    pharmacist: reviewRole("pharmacist", ["medication evidence", "pharmacy workflow review", "interaction concern triage"], ["dose advice", "substitution approval", "refill approval"]),
    behavioral_health_professional: reviewRole("behavioral_health_professional", ["screening review", "safety-plan review", "resource appropriateness"], ["diagnosis", "therapy replacement", "crisis dispatch"]),
    nurse_or_chw: reviewRole("nurse_or_chw", ["intake review", "education reinforcement", "follow-up preparation"], ["independent diagnosis", "medication changes", "unapproved clinical triage"]),
    social_care_reviewer: reviewRole("social_care_reviewer", ["resource review", "eligibility evidence organization", "consent check"], ["eligibility guarantee", "benefit approval", "sharing without consent"]),
    governance_admin: reviewRole("governance_admin", ["source governance", "audit review", "configuration readiness"], ["clinical override", "provider contact without user approval"])
  });

  const HUMAN_REVIEW_QUEUE_TYPES = Object.freeze({
    clinical_evidence_review: reviewQueue("clinical_evidence_review", ["source freshness", "jurisdiction", "population", "clinical applicability"], ["physician", "governance_admin"]),
    medication_pharmacy_review: reviewQueue("medication_pharmacy_review", ["drug source", "medication list", "pharmacy handoff boundary"], ["pharmacist", "physician"]),
    laboratory_diagnostic_review: reviewQueue("laboratory_diagnostic_review", ["test source", "unit/context", "reference range limits"], ["physician", "nurse_or_chw"]),
    behavioral_crisis_review: reviewQueue("behavioral_crisis_review", ["screening governance", "crisis language", "safety plan boundary"], ["behavioral_health_professional", "governance_admin"]),
    social_care_review: reviewQueue("social_care_review", ["resource freshness", "eligibility uncertainty", "consent before sharing"], ["social_care_reviewer", "governance_admin"]),
    fhir_record_review: reviewQueue("fhir_record_review", ["identity", "role", "consent", "provenance", "connector status"], ["physician", "governance_admin"])
  });

  const REVIEW_DECISION_STATES = Object.freeze([
    "queued_for_review",
    "needs_more_information",
    "approved_for_user_education",
    "approved_for_provider_packet",
    "blocked_source_or_jurisdiction",
    "blocked_missing_consent",
    "blocked_missing_connector",
    "requires_escalation_to_licensed_professional",
    "rejected_unsafe_or_unsupported"
  ]);

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
    /\b(show the source|who published this|is this source current|when was this verified|why is this source blocked|show the professional version|conflicting guidelines|conflicting sources)\b/i,
    /\b(professional health workspace|verified provider trust|provider trust registry|clinical calculator|fhir terminology|medical record governance|consent and privacy|human review|review queue|governance review|professional review controls|vulnerable population|social care evidence|source registry)\b/i
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

  function calculator(calculatorId, name, requiredInputs, domains, validationStatus, executionEnabled) {
    return Object.freeze({
      calculatorId,
      name,
      requiredInputs,
      domains,
      validationStatus,
      executionEnabled,
      outputBoundary: "decision-support preparation only; no diagnosis, prescribing, treatment selection, or emergency triage",
      missingInputBehavior: "ask_for_missing_information_or_block",
      professionalReviewRequired: true,
      auditRequired: true
    });
  }

  function providerTrust(providerType, label, verificationRequirements, actionCapabilities, executionState) {
    return Object.freeze({
      providerType,
      label,
      verificationRequirements,
      actionCapabilities,
      executionState,
      liveExecutionEnabled: false,
      userApprovalRequired: true,
      providerConfirmationRequired: true,
      auditRequired: true,
      noSilentHandoff: true,
      noCredentialClaimWithoutConnector: true
    });
  }

  function reviewRole(roleId, reviewAuthority, prohibitedAuthority) {
    return Object.freeze({
      roleId,
      reviewAuthority,
      prohibitedAuthority,
      identityRequired: true,
      licenseOrTrainingVerificationRequired: true,
      auditRequired: true,
      cannotBypassUserConsent: true
    });
  }

  function reviewQueue(queueId, requiredChecks, allowedRoles) {
    return Object.freeze({
      queueId,
      requiredChecks,
      allowedRoles,
      defaultState: "queued_for_review",
      auditRequired: true,
      userVisibleOutcomeRequired: true,
      liveExecutionEnabled: false,
      noSilentApproval: true
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
    if (/\b(crisis|suicide|self harm|harm myself|safety plan|988)\b/.test(text)) return "crisis_safety";
    if (/\b(mental|behavioral|behavioural|depression|anxiety|wellness|phq|gad)\b/.test(text)) return "mental_health";
    if (/\b(medicine|medication|drug|pharmacy|refill|prescription)\b/.test(text)) return "medication";
    if (/\b(kidney|egfr|renal)\b/.test(text)) return "kidney";
    if (/\b(asthma|copd|respiratory|inhaler|breathing)\b/.test(text)) return "respiratory";
    if (/\b(screening|preventive|mammogram|colon|vaccination)\b/.test(text)) return "screening";
    if (/\b(child|pediatric|youth|minor|infant|pregnancy|maternal|baby)\b/.test(text)) return "maternal_child";
    if (/\b(lab|laboratory|diagnostic|test result|reference range)\b/.test(text)) return "laboratory";
    if (/\b(telehealth|virtual care|video visit|provider bridge)\b/.test(text)) return "telehealth";
    if (/\b(fhir|medical record|health record|ehr|chart)\b/.test(text)) return "fhir_records";
    if (/\b(provider directory|doctor near|clinic directory|health center)\b/.test(text)) return "provider_directory";
    if (/\b(mobile clinic|rural clinic|community outreach)\b/.test(text)) return "mobile_clinic";
    if (/\b(transportation to care|ride to care|medical transport)\b/.test(text)) return "transportation_to_care";
    if (/\b(social care|food|housing|transportation|benefits|social service)\b/.test(text)) return "social_care";
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
    const calculators = Object.values(CLINICAL_CALCULATOR_REGISTRY).filter(item => item.domains.includes(domainId) || (domainId === "chronic_care" && item.domains.some(domain => ["diabetes", "hypertension", "obesity", "cardiometabolic"].includes(domain))));
    return {
      ok: true,
      serviceId: SERVICE_ID,
      serviceVersion: SERVICE_VERSION,
      packetType: "predictive_health_governance_packet",
      domainId,
      models,
      calculators,
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

  function inferReviewQueue(domainId, input = "") {
    const text = normalizeText(input);
    if (/\b(medication|pharmacy|prescription|refill|drug)\b/.test(text) || ["medication", "medication_safety", "pharmacy"].includes(domainId)) return "medication_pharmacy_review";
    if (/\b(lab|laboratory|diagnostic|imaging|test result)\b/.test(text) || ["laboratory", "diagnostic_imaging"].includes(domainId)) return "laboratory_diagnostic_review";
    if (/\b(mental|behavioral|crisis|safety plan|screening|phq|gad)\b/.test(text) || ["mental_health", "behavioral_wellness", "crisis_safety"].includes(domainId)) return "behavioral_crisis_review";
    if (/\b(social care|food|housing|transportation|benefits)\b/.test(text) || ["social_care", "transportation_to_care"].includes(domainId)) return "social_care_review";
    if (/\b(fhir|medical record|health record|ehr|chart)\b/.test(text) || domainId === "fhir_records") return "fhir_record_review";
    return "clinical_evidence_review";
  }

  function buildHumanReviewPacket(input = "", context = {}) {
    const domainId = context.domain || inferDomain(input);
    const roleId = PROFESSIONAL_WORKSPACE_ROLES[context.role] ? context.role : "governance_admin";
    const queueId = inferReviewQueue(domainId, input);
    const queue = HUMAN_REVIEW_QUEUE_TYPES[queueId];
    return {
      ok: true,
      serviceId: SERVICE_ID,
      serviceVersion: SERVICE_VERSION,
      packetType: "enterprise_health_human_review_control_packet",
      domainId,
      requestedRole: roleId,
      professionalWorkspaceRoles: PROFESSIONAL_WORKSPACE_ROLES,
      reviewQueueTypes: HUMAN_REVIEW_QUEUE_TYPES,
      selectedQueue: queue,
      reviewDecisionStates: REVIEW_DECISION_STATES,
      requiredBeforeApproval: [
        "verified reviewer identity",
        "license/training scope check",
        "source freshness and jurisdiction review",
        "user consent for sharing or export",
        "audit receipt",
        "clear user-visible outcome"
      ],
      executionEnabled: false,
      canApproveEducationPacket: true,
      canApproveProviderSubmission: false,
      canApproveMedicationChange: false,
      canApproveEmergencyDispatch: false,
      canBypassConsent: false,
      safety: commonSafety(),
      auditReceipt: audit("enterprise_health_human_review_controls_prepared", domainId),
      userVisibleStatus: `Nexus prepared the ${queueId.replace(/_/g, " ")} controls for ${domainId.replace(/_/g, " ")}. Review can organize evidence and user-facing outcomes, but provider submission, diagnosis, prescribing, medical-record access, and emergency dispatch remain disabled until consent, role, connector, and audit gates are satisfied.`
    };
  }

  function registries() {
    const readinessClassifications = {
      sources: "implemented_locally_pending_live_verification",
      domains: "implemented_locally",
      predictiveModels: "implemented_locally_execution_disabled",
      calculators: "implemented_locally_execution_disabled",
      providerTrust: "implemented_locally_provider_or_credential_blocked",
      fhirTerminology: "implemented_locally_connector_disabled",
      consentPrivacy: "implemented_locally_required_before_sharing",
      accessibilityLocalization: "implemented_locally_translation_review_required"
    };
    return {
      ok: true,
      serviceId: SERVICE_ID,
      serviceVersion: SERVICE_VERSION,
      registryPacketType: "enterprise_health_governance_registry_packet",
      evidenceHierarchy: EVIDENCE_TIERS,
      recognizedSources: RECOGNIZED_SOURCE_RECORDS,
      domainEvidenceMaps: DOMAIN_EVIDENCE_MAPS,
      predictiveModelRegistry: PREDICTIVE_MODEL_REGISTRY,
      clinicalCalculatorRegistry: CLINICAL_CALCULATOR_REGISTRY,
      verifiedProviderTrustRegistry: VERIFIED_PROVIDER_TRUST_REGISTRY,
      fhirTerminologyContracts: FHIR_TERMINOLOGY_CONTRACTS,
      consentPrivacyGovernance: CONSENT_PRIVACY_GOVERNANCE,
      accessibilityLocalizationGovernance: ACCESSIBILITY_LOCALIZATION_GOVERNANCE,
      professionalWorkspaceRoles: PROFESSIONAL_WORKSPACE_ROLES,
      humanReviewQueueTypes: HUMAN_REVIEW_QUEUE_TYPES,
      reviewDecisionStates: REVIEW_DECISION_STATES,
      sourceVerificationStates: SOURCE_VERIFICATION_STATES,
      blockedSourceStates: BLOCKED_SOURCE_STATES,
      readinessClassifications,
      executionEnabled: false,
      noDiagnosis: true,
      noPrescribing: true,
      noProviderContacted: true,
      noRecordAccessed: true,
      noEmergencyDispatch: true,
      noSecretsExposed: true,
      auditReceipt: audit("enterprise_health_governance_registries_prepared", "all_health_domains")
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
      clinicalCalculatorCount: Object.keys(CLINICAL_CALCULATOR_REGISTRY).length,
      verifiedProviderTrustCategoryCount: Object.keys(VERIFIED_PROVIDER_TRUST_REGISTRY).length,
      fhirTerminologyResourceCount: FHIR_TERMINOLOGY_CONTRACTS.fhirResources.length,
      professionalWorkspaceRoleCount: Object.keys(PROFESSIONAL_WORKSPACE_ROLES).length,
      humanReviewQueueCount: Object.keys(HUMAN_REVIEW_QUEUE_TYPES).length,
      executionEnabled: false,
      clinicalAuthorityClaimed: false,
      missingConfig: [],
      activeCapabilities: ["source inspection", "evidence tiering", "source verification contracts", "role-aware evidence inspector", "conflict review", "domain evidence maps", "predictive governance receipts", "clinical calculator governance", "verified provider trust registry", "FHIR terminology contracts", "consent/privacy governance", "professional inspector contract"],
      blockedCapabilities: ["clinical diagnosis", "prescribing", "medication change", "provider submission", "emergency dispatch", "FHIR record access", "clinical calculator execution", "unvalidated prediction", "fake citation"],
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
    CLINICAL_CALCULATOR_REGISTRY,
    VERIFIED_PROVIDER_TRUST_REGISTRY,
    FHIR_TERMINOLOGY_CONTRACTS,
    CONSENT_PRIVACY_GOVERNANCE,
    ACCESSIBILITY_LOCALIZATION_GOVERNANCE,
    PROFESSIONAL_WORKSPACE_ROLES,
    HUMAN_REVIEW_QUEUE_TYPES,
    REVIEW_DECISION_STATES,
    shouldHandle,
    inferDomain,
    inferReviewQueue,
    inspect,
    verifySource,
    buildConflictReview,
    buildFeedbackRecord,
    predictiveGovernance,
    buildHumanReviewPacket,
    registries,
    status,
    hasUnsafeClaim
  });

  if (typeof module !== "undefined" && module.exports) module.exports = api;
  globalScope.NexusEnterpriseHealthEvidenceTrust = api;
})(typeof window !== "undefined" ? window : globalThis);
