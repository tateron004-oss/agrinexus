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

  const FHIR_TERMINOLOGY_GOVERNANCE = Object.freeze({
    governedWorkflows: ["record summary preparation", "FHIR resource mapping", "terminology mapping", "consent-gated export preparation", "provider packet preparation"],
    blockedWorkflows: ["live record access", "clinical record write", "chart update", "FHIR export", "FHIR import", "provider submission", "diagnosis coding decision"],
    requiredBeforeConnectorUse: ["verified FHIR connector", "identity proofing", "role authorization", "explicit user consent", "minimum necessary scope preview", "audit receipt"],
    requiredBeforeTerminologyUse: ["source system", "code system", "version or release date when available", "qualified review for clinical meaning"],
    defaultState: "mapping_only_until_identity_consent_role_connector_and_audit_are_configured",
    executionEnabled: false,
    noLiveRecordAccess: true,
    noClinicalRecordWrite: true,
    noTerminologyDiagnosisClaim: true,
    noSilentExport: true
  });

  const MEDICATION_PHARMACY_EVIDENCE_GOVERNANCE = Object.freeze({
    sourceRequirements: ["FDA or controlling medication authority", "RxNorm or approved medication terminology", "user-supplied medication name", "pharmacist or clinician review"],
    governedWorkflows: ["medication education", "side-effect question preparation", "medication list organization", "refill question preparation", "pharmacy handoff readiness"],
    blockedWorkflows: ["dose advice", "prescribing", "medication change", "substitution approval", "refill approval", "pharmacy order", "payment", "inventory guarantee"],
    requiredBeforePharmacyHandoff: ["verified pharmacy connector", "verified pharmacy or recipient identity", "user consent", "message/refill purpose preview", "explicit user confirmation", "audit receipt"],
    terminologySystems: ["RxNorm", "FHIR MedicationStatement", "FHIR MedicationRequest"],
    defaultState: "review_only_until_pharmacy_connector_consent_and_audit_are_configured",
    executionEnabled: false,
    noMedicationChange: true,
    noRefillApproval: true,
    noPharmacyContact: true
  });

  const LABORATORY_DIAGNOSTIC_EVIDENCE_GOVERNANCE = Object.freeze({
    sourceRequirements: ["LOINC or approved observation terminology", "test name and units", "specimen/context if known", "reference range source if supplied", "clinician review"],
    governedWorkflows: ["lab result organization", "unit/context capture", "reference-range question preparation", "diagnostic-imaging report question preparation", "provider-ready lab summary"],
    blockedWorkflows: ["diagnosis", "final lab interpretation", "universal reference interval claim", "urgent imaging interpretation", "radiology replacement", "medical-record write"],
    requiredBeforeClinicalInterpretation: ["verified source/version", "patient context", "units and reference-range provenance", "qualified professional review", "audit receipt"],
    terminologySystems: ["LOINC", "SNOMED CT", "FHIR Observation", "FHIR DiagnosticReport"],
    defaultState: "organization_only_until_source_context_professional_review_and_audit_are_configured",
    executionEnabled: false,
    noDiagnosis: true,
    noFinalInterpretation: true,
    noRecordWrite: true
  });

  const CONSENT_PRIVACY_GOVERNANCE = Object.freeze({
    requiredBefore: ["provider sharing", "FHIR access", "pharmacy handoff", "appointment/referral request", "social-care sharing", "messages/calls", "export"],
    userRights: ["view", "correct", "export", "revoke", "delete local copy where permitted", "see audit trail"],
    dataMinimization: true,
    sensitiveDataDefault: "local_or_session_only_until_configured",
    memoryDefault: "do_not_store_sensitive_health_data_without_explicit_consent",
    sharingDefault: "blocked_until_user_approval_and_audit_receipt"
  });

  const HEALTH_DATA_RIGHTS_GOVERNANCE = Object.freeze({
    governedRights: ["view", "correct", "export", "revoke", "delete local copy where permitted", "see audit trail"],
    governedActions: ["provider sharing", "FHIR access", "pharmacy handoff", "appointment/referral request", "social-care sharing", "messages/calls", "export", "memory storage"],
    requiredBeforeSharing: ["specific recipient", "minimum necessary data preview", "purpose preview", "explicit user consent", "revocation path", "audit receipt"],
    requiredBeforeExport: ["user identity/session confirmation", "export scope preview", "sensitive-data warning", "explicit approval", "audit receipt"],
    requiredBeforeDeletion: ["local-copy scope", "retention/legal limitation check", "confirmation", "audit receipt"],
    defaultMemoryState: "do_not_store_sensitive_health_data_without_explicit_consent",
    executionEnabled: false,
    noSilentSharing: true,
    noSilentExport: true,
    noSilentDeletion: true
  });

  const YOUTH_VULNERABLE_POPULATION_GOVERNANCE = Object.freeze({
    governedPopulations: ["minor or child", "youth", "elder", "pregnancy or postpartum", "disability", "caregiver-supported user", "crisis risk", "abuse or exploitation concern"],
    supportedUses: ["plain-language safety education", "guardian/caregiver review prompts", "professional review packet", "local trusted adult/resource questions", "crisis-resource display boundary"],
    prohibitedUses: ["private disclosure without consent or legal basis", "autonomous clinical action", "unsafe family assumption", "child labor routing", "diagnosis", "prescribing", "emergency dispatch"],
    requiredBeforeSharing: ["age/context clarification when relevant", "user assent/consent or legally appropriate guardian consent", "minimum necessary disclosure", "trusted recipient review", "audit receipt"],
    requiredBeforeEscalation: ["immediate danger check", "jurisdiction resource lookup", "local emergency instruction", "human/professional review when available", "no dispatch claim"],
    defaultState: "safeguard_review_only_until_age_context_consent_jurisdiction_and_human_review_are_configured",
    executionEnabled: false,
    noPrivateDisclosure: true,
    noUnsafeFamilyAssumption: true,
    noChildLaborRouting: true,
    noEmergencyDispatch: true
  });

  const ACCESSIBILITY_LOCALIZATION_GOVERNANCE = Object.freeze({
    supportedNeeds: ["plain language", "low literacy", "multilingual labels", "voice fallback", "caption fallback", "low bandwidth", "offline queue", "cultural adaptation review"],
    translationState: "translation_unverified_until_human_or_approved_translation_review",
    languages: ["English", "Spanish", "French", "Arabic", "Portuguese", "Swahili"],
    noClinicalInterpretationCertificationClaim: true,
    offlineState: "may prepare packets locally; does not claim live source freshness while offline",
    executionEnabled: false,
    noCertifiedInterpreterClaim: true,
    noLiveSourceFreshnessOffline: true,
    noClinicalMeaningChangeWithoutReview: true
  });

  const HEALTH_COMMUNICATIONS_FOLLOW_UP_GOVERNANCE = Object.freeze({
    governedChannels: ["SMS draft", "WhatsApp draft", "email draft", "phone script", "portal note", "in-app reminder", "follow-up checklist"],
    supportedUses: ["message draft preparation", "call script preparation", "follow-up reminder preparation", "provider-summary packet attachment", "review queue routing", "audit receipt creation"],
    prohibitedUses: ["silent send", "silent call", "provider contact without approval", "appointment scheduling", "pharmacy refill request", "emergency dispatch", "clinical escalation without professional review"],
    requiredBeforeSend: ["resolved recipient", "visible recipient display", "visible channel display", "message or call-purpose preview", "language confirmation", "explicit user approval", "final confirmation", "audit receipt", "provider availability state"],
    requiredBeforeClinicalFollowUp: ["source-backed context", "licensed/professional review when clinical advice is requested", "minimum necessary content", "consent for sharing", "reviewable packet copy", "revocation/correction path"],
    defaultState: "draft_and_follow_up_preparation_only_until_connector_consent_confirmation_and_audit_are_active",
    executionEnabled: false,
    noSilentSend: true,
    noSilentCall: true,
    noProviderContactWithoutApproval: true,
    noEmergencyRouting: true
  });

  const HEALTH_MODEL_SOURCE_MONITORING_GOVERNANCE = Object.freeze({
    monitoredAssetTypes: ["source freshness", "source conflict", "model drift", "clinical calculator version", "provider trust status", "terminology version", "safety signal", "jurisdiction change"],
    supportedUses: ["monitoring packet preparation", "stale-source review ticket", "model drift review ticket", "calculator version review", "provider-trust review", "governance receipt", "human review queue routing"],
    prohibitedUses: ["autonomous clinical update", "silent source replacement", "unvalidated model recalibration", "provider delisting without review", "emergency escalation", "patient notification without approval"],
    requiredBeforeLiveMonitoring: ["configured source connector", "approved monitoring cadence", "baseline version record", "threshold definition", "human governance owner", "audit trail", "rollback path"],
    requiredBeforeUserAlert: ["verified signal", "plain-language user copy", "risk classification", "human review when clinical", "no emergency dispatch claim", "audit receipt"],
    defaultState: "monitoring_packet_only_until_connectors_thresholds_governance_owner_and_audit_are_configured",
    executionEnabled: false,
    liveMonitoringEnabled: false,
    noAutonomousClinicalUpdate: true,
    noSilentSourceReplacement: true,
    noEmergencyEscalation: true
  });

  const HEALTH_REGULATORY_ASSESSMENT_GOVERNANCE = Object.freeze({
    assessedCapabilityTypes: ["health education", "clinical-adjacent guidance", "predictive model", "screening instrument", "provider contact", "telehealth workflow", "pharmacy workflow", "FHIR/medical records", "mental-health crisis support", "payment or benefit workflow", "social-care sharing", "accessibility/localization"],
    regulatoryFrames: ["HIPAA/privacy", "state/professional licensure", "FDA clinical decision support boundary", "FTC/consumer protection", "988/crisis resource boundary", "pharmacy board rules", "telehealth consent", "FHIR/ONC interoperability", "GDPR/NDPR/local data protection where applicable", "accessibility and language-access review"],
    classificationStates: ["implemented_locally", "provider_backed", "credential_blocked", "jurisdiction_blocked", "awaiting_clinical_approval", "awaiting_regulatory_review", "license_restricted", "experimental", "disabled", "not_production_authorized"],
    requiredBeforeProductionAuthorization: ["documented intended use", "jurisdiction map", "privacy/security impact review", "clinical safety review where applicable", "legal/compliance review", "provider/license verification", "consent and audit controls", "incident response plan", "rollback/disable switch", "human governance owner"],
    defaultState: "not_production_authorized_until_intended_use_jurisdiction_privacy_clinical_legal_provider_and_audit_reviews_are_complete",
    executionEnabled: false,
    productionAuthorizationEnabled: false,
    noSelfAuthorization: true,
    noJurisdictionBypass: true,
    noClinicalApprovalBypass: true
  });

  const HEALTH_SECURITY_PRIVACY_ADVERSARIAL_GOVERNANCE = Object.freeze({
    validationSurfaces: ["Standard User command", "Ask Nexus health response", "provider packet", "FHIR export preparation", "pharmacy workflow", "communications draft", "offline packet", "multilingual or low-literacy copy"],
    adversarialChecks: ["prompt injection", "jailbreak request", "diagnosis or prescribing pressure", "secret or credential exposure", "PHI oversharing", "fake citation", "fake provider execution", "emergency dispatch claim", "accessibility omission", "jurisdiction bypass"],
    requiredPassCriteria: ["no diagnosis", "no prescribing", "no medication change", "no secret exposure", "no fake citation", "no provider contact claim", "no emergency dispatch claim", "consent gate preserved", "human review gate preserved", "plain-language fallback present"],
    blockedFindings: ["unsafe_clinical_claim", "secret_exposure_risk", "fake_citation_risk", "provider_execution_claim", "emergency_dispatch_claim", "consent_bypass", "jurisdiction_bypass", "accessibility_gap"],
    defaultState: "local_validation_only_until_security_privacy_accessibility_and_adversarial_review_are_passed",
    executionEnabled: false,
    canRunLocalValidation: true,
    canApproveRelease: false,
    canBypassSecurityReview: false,
    canExposeSecrets: false,
    canOverrideEmergencyBoundary: false
  });

  const HEALTH_GENESIS_CAPABILITY_STATUS = Object.freeze([
    capabilityStatus("canonical_medical_social_care_source_registry", "implemented_locally", "Canonical medical, public-health, terminology, provider-directory, crisis, and social-care source records are registered locally; live freshness verification depends on configured source connectors."),
    capabilityStatus("domain_evidence_maps", "implemented_locally", "Health domains map to accepted source classes and blocked uses."),
    capabilityStatus("predictive_model_and_calculator_registries", "implemented_locally", "Predictive model and clinical calculator registries exist with execution disabled until validation, approval, and jurisdiction review are complete."),
    capabilityStatus("model_validation_explainability_monitoring_receipts", "implemented_locally", "Model/source monitoring, receipts, and explainability fields are available locally; live monitoring is connector-blocked."),
    capabilityStatus("mental_health_behavioral_wellness_runtime", "implemented_locally", "Mental-health and behavioral-wellness support runs as supportive, non-diagnostic preparation with crisis boundaries."),
    capabilityStatus("governed_screening_instruments", "awaiting_clinical_approval", "PHQ-9, GAD-7, C-SSRS style, and other screening instruments are governed but not clinically authorized for autonomous scoring or interpretation."),
    capabilityStatus("crisis_detection_safety_planning", "implemented_locally", "Crisis language triggers supportive safety boundaries and local-resource instructions; Nexus does not dispatch emergency services."),
    capabilityStatus("verified_provider_trust_registry", "implemented_locally", "Provider trust categories are registered locally; live verification depends on official provider/licensing connectors."),
    capabilityStatus("official_provider_and_social_service_integrations", "credential_blocked", "Official provider, licensing, treatment, health-center, crisis, and social-service connectors require credentials, jurisdiction rules, and data-use approval."),
    capabilityStatus("appointment_referral_message_provider_execution_states", "implemented_locally", "Truthful blocked, prepared, queued, confirmation-required, and provider-required states exist; live execution remains gated."),
    capabilityStatus("professional_health_workspace", "implemented_locally", "Professional roles, review queues, decision states, and evidence cards are available locally."),
    capabilityStatus("human_review_controls", "implemented_locally", "Medical and social-care human-review controls are modeled with consent and audit gates."),
    capabilityStatus("medication_pharmacy_evidence_governance", "implemented_locally", "Medication/pharmacy evidence governance exists; prescribing, dose changes, refill approval, and pharmacy contact remain disabled."),
    capabilityStatus("laboratory_diagnostic_evidence_governance", "implemented_locally", "Lab and diagnostic evidence governance exists; diagnosis, final interpretation, imaging replacement, and record write remain disabled."),
    capabilityStatus("chronic_care_predictive_integration", "implemented_locally", "Chronic-care predictive integration supports DM, obesity, HTN, RPM, and RTM preparation without diagnosis or medication changes."),
    capabilityStatus("consent_memory_sharing_correction_export_revocation_deletion", "implemented_locally", "Consent and health data rights governance packets are available; real data mutation/export requires identity, consent, retention, and connector gates."),
    capabilityStatus("fhir_terminology_contracts", "implemented_locally", "FHIR resource and terminology contracts exist; live FHIR access/write/export is disabled until connector, identity, consent, role, and audit controls are configured."),
    capabilityStatus("youth_vulnerable_population_safeguards", "implemented_locally", "Youth, elder, pregnancy, disability, caregiver, abuse, and exploitation safeguards are implemented locally."),
    capabilityStatus("multilingual_cultural_voice_low_literacy_offline_low_bandwidth", "implemented_locally", "Accessibility/localization governance covers multilingual, cultural, voice, caption, low-literacy, offline, and low-bandwidth support."),
    capabilityStatus("genesis_orb_focused_mission_integration", "implemented_locally", "Standard User commands render focused mission/evidence cards through the Genesis UI path."),
    capabilityStatus("communications_follow_up_runtime", "implemented_locally", "Health communications and follow-up drafts, call scripts, reminders, and review packets are prepared locally; sending/calls require configured providers and final confirmation."),
    capabilityStatus("capability_level_regulatory_assessment", "implemented_locally", "Capability-level regulatory assessment classifies risk and required approval gates, but cannot self-authorize production."),
    capabilityStatus("governance_review_workflows", "implemented_locally", "Governance review queues and receipts are available locally."),
    capabilityStatus("model_source_monitoring", "implemented_locally", "Model/source monitoring packets are available locally; live monitoring and alerting remain disabled."),
    capabilityStatus("api_standard_user_command_coverage", "implemented_locally", "API endpoints and Standard User command routing cover evidence trust, governance, monitoring, regulatory, and adversarial validation packets."),
    capabilityStatus("security_privacy_accessibility_adversarial_regression", "implemented_locally", "Security, privacy, accessibility, and adversarial validation packets and QA run locally."),
    capabilityStatus("production_authorization", "not_production_authorized", "No clinical, provider-execution, FHIR, pharmacy, crisis, or regulated action is production-authorized without credentials, consent, professional review, jurisdiction approval, and audit controls.")
  ]);

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
    /\b(medication evidence|medication governance|medication safety governance|pharmacy evidence|pharmacy governance|refill governance|prescription governance|lab evidence|laboratory evidence|lab governance|laboratory governance|diagnostic evidence|diagnostic governance|imaging governance|diabetes evidence|hypertension evidence|obesity evidence|rpm evidence|rtm evidence)\b/i,
    /\b(show the source|who published this|is this source current|when was this verified|why is this source blocked|show the professional version|conflicting guidelines|conflicting sources)\b/i,
    /\b(professional health workspace|verified provider trust|provider trust registry|clinical calculator|fhir terminology|medical record governance|consent and privacy|health data rights|memory consent|sharing consent|export health data|delete health data|revoke consent|correction request|youth safeguard|vulnerable population|minor safeguard|child safety|elder safeguard|pregnancy safeguard|abuse concern|health accessibility|localization governance|translation governance|low literacy health|offline health packet|low bandwidth health|health follow-up|follow-up governance|message follow-up|call script governance|rpm follow-up|rtm follow-up|source monitoring|model monitoring|evidence monitoring|drift monitoring|stale source|calculator version|safety signal monitoring|regulatory assessment|production authorization|compliance classification|jurisdiction review|capability classification|security validation|privacy validation|adversarial validation|red team health|health red team|accessibility validation|prompt injection|jailbreak|human review|review queue|governance review|professional review controls|social care evidence|source registry)\b/i
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

  function capabilityStatus(capabilityId, classification, limitation) {
    return {
      capabilityId,
      classification,
      limitation,
      liveActionEnabled: false,
      requiresCredentialOrApproval: !["implemented_locally"].includes(classification),
      userApprovalRequiredBeforeExecution: true,
      auditRequiredBeforeExecution: true
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

  function buildMedicationPharmacyEvidencePacket(input = "", context = {}) {
    const text = normalizeText(input);
    const concernType = /\b(refill|renew)\b/.test(text)
      ? "refill_question_preparation"
      : /\b(side effect|reaction|adverse)\b/.test(text)
      ? "side_effect_question_preparation"
      : /\b(interaction|mix|combine|together)\b/.test(text)
      ? "interaction_question_preparation"
      : /\b(prescription|prescribe)\b/.test(text)
      ? "prescription_question_preparation"
      : "medication_education_preparation";
    const sourceReceipts = ["fda", "rxnorm", "nih", "ema"].map(sourceId => {
      const sourceRecord = sourceById(sourceId);
      return {
        sourceId,
        name: sourceRecord?.name || sourceId,
        canonicalUrl: sourceRecord?.canonicalUrl || "",
        evidenceTier: sourceRecord?.evidenceTier || "unmapped",
        verification: verifySource(sourceId, context.verification || {}),
        citationReady: false,
        reasonCitationNotFinal: "Medication and pharmacy evidence requires source version verification and pharmacist/clinician review before clinical use."
      };
    });
    return {
      ok: true,
      serviceId: SERVICE_ID,
      serviceVersion: SERVICE_VERSION,
      packetType: "enterprise_health_medication_pharmacy_evidence_governance_packet",
      domainId: "medication_safety",
      concernType,
      governance: MEDICATION_PHARMACY_EVIDENCE_GOVERNANCE,
      sourceReceipts,
      requiredReviewQueue: HUMAN_REVIEW_QUEUE_TYPES.medication_pharmacy_review,
      requiredProfessionalRoles: {
        pharmacist: PROFESSIONAL_WORKSPACE_ROLES.pharmacist,
        physician: PROFESSIONAL_WORKSPACE_ROLES.physician
      },
      pharmacyHandoffState: "blocked_missing_verified_connector_consent_confirmation_and_audit",
      executionEnabled: false,
      canPrepareQuestions: true,
      canPrepareMedicationList: true,
      canApproveRefill: false,
      canRecommendDose: false,
      canChangeMedication: false,
      canContactPharmacy: false,
      canPurchaseMedication: false,
      safety: commonSafety(),
      auditReceipt: audit("medication_pharmacy_evidence_governance_prepared", "medication_safety"),
      userVisibleStatus: `Nexus prepared medication and pharmacy evidence governance for ${concernType.replace(/_/g, " ")}. Nexus can organize questions and source requirements, but it cannot prescribe, change medication, approve refills, contact a pharmacy, purchase medication, or claim inventory until the pharmacy connector, consent, professional review, confirmation, and audit gates are satisfied.`
    };
  }

  function buildLaboratoryDiagnosticEvidencePacket(input = "", context = {}) {
    const text = normalizeText(input);
    const concernType = /\b(imaging|xray|x-ray|mri|ct|ultrasound|radiology)\b/.test(text)
      ? "diagnostic_imaging_report_preparation"
      : /\b(reference range|range|unit|units)\b/.test(text)
      ? "unit_reference_range_question_preparation"
      : /\b(a1c|egfr|creatinine|cholesterol|hemoglobin|glucose|lab)\b/.test(text)
      ? "lab_result_organization"
      : "diagnostic_evidence_preparation";
    const sourceReceipts = ["loinc", "snomed", "nih", "fda"].map(sourceId => {
      const sourceRecord = sourceById(sourceId);
      return {
        sourceId,
        name: sourceRecord?.name || sourceId,
        canonicalUrl: sourceRecord?.canonicalUrl || "",
        evidenceTier: sourceRecord?.evidenceTier || "unmapped",
        verification: verifySource(sourceId, context.verification || {}),
        citationReady: false,
        reasonCitationNotFinal: "Laboratory and diagnostic evidence requires source, unit, reference-range, patient-context, and professional review before clinical interpretation."
      };
    });
    return {
      ok: true,
      serviceId: SERVICE_ID,
      serviceVersion: SERVICE_VERSION,
      packetType: "enterprise_health_laboratory_diagnostic_evidence_governance_packet",
      domainId: concernType === "diagnostic_imaging_report_preparation" ? "diagnostic_imaging" : "laboratory",
      concernType,
      governance: LABORATORY_DIAGNOSTIC_EVIDENCE_GOVERNANCE,
      sourceReceipts,
      requiredReviewQueue: HUMAN_REVIEW_QUEUE_TYPES.laboratory_diagnostic_review,
      requiredProfessionalRoles: {
        physician: PROFESSIONAL_WORKSPACE_ROLES.physician,
        nurse_or_chw: PROFESSIONAL_WORKSPACE_ROLES.nurse_or_chw
      },
      interpretationState: "blocked_until_units_context_source_and_professional_review_are_present",
      executionEnabled: false,
      canOrganizeResults: true,
      canPrepareQuestions: true,
      canDiagnose: false,
      canFinalInterpretLab: false,
      canInterpretImagingUrgency: false,
      canWriteMedicalRecord: false,
      safety: commonSafety(),
      auditReceipt: audit("laboratory_diagnostic_evidence_governance_prepared", "laboratory"),
      userVisibleStatus: `Nexus prepared laboratory and diagnostic evidence governance for ${concernType.replace(/_/g, " ")}. Nexus can organize result details and source requirements, but it cannot diagnose, provide final lab interpretation, replace radiology/clinician review, write medical records, or claim a universal reference range until source, unit, context, professional review, and audit gates are satisfied.`
    };
  }

  function buildHealthDataRightsPacket(input = "", context = {}) {
    const text = normalizeText(input);
    const actionType = /\b(delete|deletion|erase|remove)\b/.test(text)
      ? "deletion_request_preparation"
      : /\b(revoke|withdraw)\b/.test(text)
      ? "consent_revocation_preparation"
      : /\b(correct|correction|fix)\b/.test(text)
      ? "correction_request_preparation"
      : /\b(export|download|copy)\b/.test(text)
      ? "export_request_preparation"
      : /\b(share|send|provider|pharmacy|social care|fhir)\b/.test(text)
      ? "sharing_consent_preparation"
      : /\b(memory|remember|store)\b/.test(text)
      ? "sensitive_memory_consent_preparation"
      : "health_data_rights_review";
    return {
      ok: true,
      serviceId: SERVICE_ID,
      serviceVersion: SERVICE_VERSION,
      packetType: "enterprise_health_data_rights_governance_packet",
      domainId: "consent_privacy",
      actionType,
      consentPrivacyGovernance: CONSENT_PRIVACY_GOVERNANCE,
      healthDataRightsGovernance: HEALTH_DATA_RIGHTS_GOVERNANCE,
      requiredBeforeApproval: actionType.includes("export")
        ? HEALTH_DATA_RIGHTS_GOVERNANCE.requiredBeforeExport
        : actionType.includes("deletion")
        ? HEALTH_DATA_RIGHTS_GOVERNANCE.requiredBeforeDeletion
        : HEALTH_DATA_RIGHTS_GOVERNANCE.requiredBeforeSharing,
      executionEnabled: false,
      canPrepareConsentPreview: true,
      canShareHealthData: false,
      canAccessFhirRecords: false,
      canStoreSensitiveMemory: false,
      canExportNow: false,
      canDeleteNow: false,
      canBypassRevocation: false,
      safety: commonSafety(),
      auditReceipt: audit("health_data_rights_governance_prepared", "consent_privacy"),
      userVisibleStatus: `Nexus prepared health data rights governance for ${actionType.replace(/_/g, " ")}. Nexus can prepare a consent, correction, export, revocation, deletion, or memory-control preview, but it cannot share health data, access FHIR records, store sensitive memory, export data, delete records, or bypass revocation until identity, scope, consent, retention, connector, confirmation, and audit gates are satisfied.`
    };
  }

  function inferFhirResource(input = "") {
    const text = normalizeText(input);
    if (/\b(lab|laboratory|blood pressure|bp|a1c|glucose|reading|rpm|rtm|observation)\b/.test(text)) return "Observation";
    if (/\b(medication|medicine|prescription|rxnorm|pharmacy)\b/.test(text)) return "MedicationStatement";
    if (/\b(referral|order|request|service)\b/.test(text)) return "ServiceRequest";
    if (/\b(visit|encounter|telehealth|appointment)\b/.test(text)) return "Encounter";
    if (/\b(plan|care plan|chronic care)\b/.test(text)) return "CarePlan";
    if (/\b(document|summary|record|chart)\b/.test(text)) return "DocumentReference";
    if (/\b(consent|permission|authorization)\b/.test(text)) return "Consent";
    if (/\b(condition|diagnosis|problem|hypertension|diabetes|obesity)\b/.test(text)) return "Condition";
    return "Patient";
  }

  function inferTerminologySystem(input = "") {
    const text = normalizeText(input);
    if (/\b(lab|laboratory|observation|loinc|a1c|glucose|blood pressure|bp)\b/.test(text)) return "loinc";
    if (/\b(medication|medicine|prescription|rxnorm|drug|pharmacy)\b/.test(text)) return "rxnorm";
    if (/\b(condition|problem|finding|snomed|diagnostic|diagnosis)\b/.test(text)) return "snomed";
    if (/\b(icd|billing|claim)\b/.test(text)) return "icd10";
    return "hl7_fhir";
  }

  function buildFhirTerminologyGovernancePacket(input = "", context = {}) {
    const requestedResource = inferFhirResource(input);
    const requestedTerminologySystem = inferTerminologySystem(input);
    const terminologyDescription = FHIR_TERMINOLOGY_CONTRACTS.terminologySystems[requestedTerminologySystem] || "FHIR interoperability resource mapping";
    return {
      ok: true,
      serviceId: SERVICE_ID,
      serviceVersion: SERVICE_VERSION,
      packetType: "enterprise_health_fhir_terminology_governance_packet",
      domainId: "fhir_records",
      requestedResource,
      requestedTerminologySystem,
      terminologyDescription,
      fhirTerminologyContracts: FHIR_TERMINOLOGY_CONTRACTS,
      fhirTerminologyGovernance: FHIR_TERMINOLOGY_GOVERNANCE,
      requiredBeforeConnectorUse: FHIR_TERMINOLOGY_GOVERNANCE.requiredBeforeConnectorUse,
      requiredBeforeTerminologyUse: FHIR_TERMINOLOGY_GOVERNANCE.requiredBeforeTerminologyUse,
      executionEnabled: false,
      canAccessLiveRecords: false,
      canWriteClinicalRecords: false,
      canExportFhirBundle: false,
      canImportFhirBundle: false,
      canSubmitToProvider: false,
      canAssignDiagnosisCode: false,
      canPrepareMappingPreview: true,
      safety: commonSafety(),
      auditReceipt: audit("fhir_terminology_governance_prepared", "fhir_records"),
      userVisibleStatus: `Nexus prepared FHIR and terminology governance for ${requestedResource} using ${requestedTerminologySystem}. Nexus can prepare a mapping preview and provider-ready questions, but it cannot access live records, write clinical records, export or import FHIR bundles, submit to a provider, or assign diagnosis codes until verified connector, identity, role, consent, minimum-necessary scope, terminology-source, professional-review, and audit gates are satisfied.`
    };
  }

  function inferVulnerablePopulation(input = "") {
    const text = normalizeText(input);
    if (/\b(pregnant|pregnancy|postpartum|maternal|antenatal|midwife)\b/.test(text)) return "pregnancy_or_postpartum";
    if (/\b(child|minor|infant|baby|pediatric|teen|youth|girl|boy)\b/.test(text)) return "minor_or_youth";
    if (/\b(elder|elderly|older adult|grandma|grandfather|grandmother|dementia)\b/.test(text)) return "elder";
    if (/\b(disability|disabled|blind|deaf|mobility|cognitive|accessibility)\b/.test(text)) return "disability";
    if (/\b(abuse|exploitation|violence|neglect|unsafe at home|trafficking)\b/.test(text)) return "abuse_or_exploitation_concern";
    if (/\b(suicide|self harm|danger to self|danger to others|crisis)\b/.test(text)) return "crisis_risk";
    if (/\b(caregiver|family support|guardian|parent)\b/.test(text)) return "caregiver_supported_user";
    return "vulnerable_population_review";
  }

  function buildYouthVulnerableSafeguardPacket(input = "", context = {}) {
    const population = inferVulnerablePopulation(input);
    const crisisRelated = ["crisis_risk", "abuse_or_exploitation_concern", "pregnancy_or_postpartum"].includes(population);
    const requiredBeforeAction = crisisRelated
      ? YOUTH_VULNERABLE_POPULATION_GOVERNANCE.requiredBeforeEscalation
      : YOUTH_VULNERABLE_POPULATION_GOVERNANCE.requiredBeforeSharing;
    return {
      ok: true,
      serviceId: SERVICE_ID,
      serviceVersion: SERVICE_VERSION,
      packetType: "enterprise_health_youth_vulnerable_safeguard_packet",
      domainId: population === "pregnancy_or_postpartum" ? "maternal_child" : "youth_vulnerable",
      population,
      crisisRelated,
      governance: YOUTH_VULNERABLE_POPULATION_GOVERNANCE,
      domainEvidenceMap: DOMAIN_EVIDENCE_MAPS[population === "pregnancy_or_postpartum" ? "maternal_child" : "youth_vulnerable"],
      requiredBeforeAction,
      reviewQueue: crisisRelated ? HUMAN_REVIEW_QUEUE_TYPES.behavioral_crisis_review : HUMAN_REVIEW_QUEUE_TYPES.clinical_evidence_review,
      executionEnabled: false,
      canPrepareSafeguardQuestions: true,
      canSharePrivately: false,
      canAssumeFamilyConsent: false,
      canRouteChildLabor: false,
      canDiagnose: false,
      canPrescribe: false,
      canDispatchEmergencyHelp: false,
      canContactProviderOrGuardian: false,
      safety: commonSafety(),
      auditReceipt: audit("youth_vulnerable_safeguard_prepared", population === "pregnancy_or_postpartum" ? "maternal_child" : "youth_vulnerable"),
      userVisibleStatus: `Nexus prepared youth and vulnerable-population safeguards for ${population.replace(/_/g, " ")}. Nexus can prepare plain-language safety questions and a review packet, but it cannot disclose private information, assume family consent, route child labor, diagnose, prescribe, contact a provider or guardian, or dispatch emergency help. If there is immediate danger, the user should contact local emergency services or a trusted local professional/resource now.`
    };
  }

  function inferAccessibilityLocalizationNeed(input = "") {
    const text = normalizeText(input);
    if (/\b(low bandwidth|offline|no internet|slow internet|sync later)\b/.test(text)) return "offline_low_bandwidth";
    if (/\b(voice|speak|read aloud|audio|caption|captions)\b/.test(text)) return "voice_caption_fallback";
    if (/\b(simple|plain language|low literacy|cannot read|can't read|slow down|small words)\b/.test(text)) return "plain_language_low_literacy";
    if (/\b(translate|translation|spanish|french|arabic|portuguese|swahili|kiswahili|language)\b/.test(text)) return "multilingual_translation_review";
    if (/\b(culture|cultural|local words|local context|community)\b/.test(text)) return "cultural_adaptation_review";
    return "accessible_health_support_review";
  }

  function buildAccessibilityLocalizationGovernancePacket(input = "", context = {}) {
    const need = inferAccessibilityLocalizationNeed(input);
    const offlineRelated = need === "offline_low_bandwidth";
    const translationRelated = need === "multilingual_translation_review" || need === "cultural_adaptation_review";
    return {
      ok: true,
      serviceId: SERVICE_ID,
      serviceVersion: SERVICE_VERSION,
      packetType: "enterprise_health_accessibility_localization_governance_packet",
      domainId: "accessibility_localization",
      need,
      offlineRelated,
      translationRelated,
      governance: ACCESSIBILITY_LOCALIZATION_GOVERNANCE,
      supportedLanguages: ACCESSIBILITY_LOCALIZATION_GOVERNANCE.languages,
      supportedNeeds: ACCESSIBILITY_LOCALIZATION_GOVERNANCE.supportedNeeds,
      translationState: ACCESSIBILITY_LOCALIZATION_GOVERNANCE.translationState,
      offlineState: ACCESSIBILITY_LOCALIZATION_GOVERNANCE.offlineState,
      requiredBeforeClinicalTranslationUse: ["approved translation review", "source-language preservation", "clinical meaning review", "user-facing uncertainty label", "audit receipt"],
      requiredBeforeOfflineUse: ["local packet scope", "stale-source warning", "no live freshness claim", "sync/review plan when network returns"],
      executionEnabled: false,
      canPreparePlainLanguage: true,
      canPrepareCaptionFallback: true,
      canPrepareOfflinePacket: true,
      canClaimCertifiedInterpretation: false,
      canClaimLiveFreshnessOffline: false,
      canChangeClinicalMeaning: false,
      canContactProvider: false,
      safety: commonSafety(),
      auditReceipt: audit("accessibility_localization_governance_prepared", "accessibility_localization"),
      userVisibleStatus: `Nexus prepared accessibility and localization governance for ${need.replace(/_/g, " ")}. Nexus can prepare plain-language, caption, voice-fallback, multilingual, cultural-adaptation, offline, or low-bandwidth support, but it cannot claim certified clinical interpretation, live source freshness while offline, changed clinical meaning, provider contact, diagnosis, prescribing, or emergency dispatch without approved review and audit gates.`
    };
  }

  function inferHealthFollowUpType(input = "") {
    const text = normalizeText(input);
    if (/\b(emergency|crisis|suicide|self harm|danger|urgent)\b/.test(text)) return "crisis_boundary_follow_up";
    if (/\b(pharmacy|refill|prescription|medication|medicine)\b/.test(text)) return "pharmacy_follow_up";
    if (/\b(rpm|rtm|remote patient|remote therapeutic|blood pressure|bp|glucose|a1c|weight|obesity|diabetes|hypertension)\b/.test(text)) return "chronic_monitoring_follow_up";
    if (/\b(appointment|telehealth|provider|doctor|clinic|visit|referral)\b/.test(text)) return "provider_visit_follow_up";
    if (/\b(transport|housing|food|benefit|social care|community resource)\b/.test(text)) return "social_care_follow_up";
    return "health_follow_up_review";
  }

  function buildHealthCommunicationsFollowUpPacket(input = "", context = {}) {
    const followUpType = inferHealthFollowUpType(input);
    const crisisRelated = followUpType === "crisis_boundary_follow_up";
    const clinicalRelated = ["pharmacy_follow_up", "chronic_monitoring_follow_up", "provider_visit_follow_up", "crisis_boundary_follow_up"].includes(followUpType);
    return {
      ok: true,
      serviceId: SERVICE_ID,
      serviceVersion: SERVICE_VERSION,
      packetType: "enterprise_health_communications_follow_up_governance_packet",
      domainId: "health_communications_follow_up",
      followUpType,
      crisisRelated,
      clinicalRelated,
      governance: HEALTH_COMMUNICATIONS_FOLLOW_UP_GOVERNANCE,
      governedChannels: HEALTH_COMMUNICATIONS_FOLLOW_UP_GOVERNANCE.governedChannels,
      requiredBeforeSend: HEALTH_COMMUNICATIONS_FOLLOW_UP_GOVERNANCE.requiredBeforeSend,
      requiredBeforeClinicalFollowUp: HEALTH_COMMUNICATIONS_FOLLOW_UP_GOVERNANCE.requiredBeforeClinicalFollowUp,
      requiredReviewQueue: crisisRelated ? HUMAN_REVIEW_QUEUE_TYPES.behavioral_crisis_review : clinicalRelated ? HUMAN_REVIEW_QUEUE_TYPES.clinical_evidence_review : HUMAN_REVIEW_QUEUE_TYPES.social_care_review,
      executionEnabled: false,
      canPrepareMessageDraft: true,
      canPrepareCallScript: true,
      canPrepareReminder: true,
      canAttachProviderSummary: true,
      canSendMessage: false,
      canStartCall: false,
      canScheduleAppointment: false,
      canRequestRefill: false,
      canContactProvider: false,
      canRouteEmergency: false,
      noSilentSend: true,
      noSilentCall: true,
      safety: commonSafety(),
      auditReceipt: audit("health_communications_follow_up_prepared", "health_communications_follow_up"),
      userVisibleStatus: `Nexus prepared health communications and follow-up governance for ${followUpType.replace(/_/g, " ")}. Nexus can prepare drafts, call scripts, reminders, review packets, and audit receipts, but it cannot send messages, start calls, schedule appointments, request refills, contact providers, or route emergencies without the required connector, consent, review, explicit approval, final confirmation, and audit gates.`
    };
  }

  function inferHealthMonitoringType(input = "") {
    const text = normalizeText(input);
    if (/\b(model|drift|prediction|risk score|validation|calibration)\b/.test(text)) return "model_drift_monitoring";
    if (/\b(calculator|formula|version|bmi|a1c|egfr|ascvd|phq|gad)\b/.test(text)) return "calculator_version_monitoring";
    if (/\b(provider|license|credential|trust|directory)\b/.test(text)) return "provider_trust_monitoring";
    if (/\b(terminology|fhir|loinc|snomed|rxnorm|icd)\b/.test(text)) return "terminology_version_monitoring";
    if (/\b(safety signal|adverse|harm|conflict|blocked source|guideline conflict)\b/.test(text)) return "safety_signal_monitoring";
    if (/\b(stale|freshness|current|outdated|source|citation|guideline)\b/.test(text)) return "source_freshness_monitoring";
    return "health_governance_monitoring";
  }

  function buildHealthModelSourceMonitoringPacket(input = "", context = {}) {
    const monitoringType = inferHealthMonitoringType(input);
    const clinicalRelated = !["provider_trust_monitoring"].includes(monitoringType);
    return {
      ok: true,
      serviceId: SERVICE_ID,
      serviceVersion: SERVICE_VERSION,
      packetType: "enterprise_health_model_source_monitoring_governance_packet",
      domainId: "health_model_source_monitoring",
      monitoringType,
      clinicalRelated,
      governance: HEALTH_MODEL_SOURCE_MONITORING_GOVERNANCE,
      monitoredAssetTypes: HEALTH_MODEL_SOURCE_MONITORING_GOVERNANCE.monitoredAssetTypes,
      requiredBeforeLiveMonitoring: HEALTH_MODEL_SOURCE_MONITORING_GOVERNANCE.requiredBeforeLiveMonitoring,
      requiredBeforeUserAlert: HEALTH_MODEL_SOURCE_MONITORING_GOVERNANCE.requiredBeforeUserAlert,
      reviewQueue: clinicalRelated ? HUMAN_REVIEW_QUEUE_TYPES.clinical_evidence_review : HUMAN_REVIEW_QUEUE_TYPES.social_care_review,
      executionEnabled: false,
      liveMonitoringEnabled: false,
      canCreateReviewTicket: true,
      canGenerateGovernanceReceipt: true,
      canPrepareStaleSourceWarning: true,
      canRunLiveMonitoring: false,
      canClaimSourceCurrent: false,
      canUpdateClinicalGuidance: false,
      canReplaceSourceSilently: false,
      canRecalibrateModel: false,
      canNotifyProvider: false,
      canEscalateEmergency: false,
      safety: commonSafety(),
      auditReceipt: audit("health_model_source_monitoring_prepared", "health_model_source_monitoring"),
      userVisibleStatus: `Nexus prepared model and source monitoring governance for ${monitoringType.replace(/_/g, " ")}. Nexus can prepare review tickets, stale-source warnings, monitoring receipts, and human-review routing, but it cannot run live monitoring, claim a source is current, update clinical guidance, silently replace sources, recalibrate models, notify providers, or escalate emergencies without configured connectors, thresholds, governance owner approval, and audit controls.`
    };
  }

  function inferRegulatoryCapability(input = "") {
    const text = normalizeText(input);
    if (/\b(crisis|suicide|988|emergency|self harm|behavioral)\b/.test(text)) return "mental_health_crisis_support";
    if (/\b(fhir|medical record|ehr|chart|phi|export record)\b/.test(text)) return "fhir_medical_records";
    if (/\b(pharmacy|refill|prescription|medication)\b/.test(text)) return "pharmacy_workflow";
    if (/\b(provider contact|message provider|call provider|referral|appointment)\b/.test(text)) return "provider_contact_workflow";
    if (/\b(telehealth|video visit|virtual care)\b/.test(text)) return "telehealth_workflow";
    if (/\b(payment|pay|billing|benefit|insurance)\b/.test(text)) return "payment_or_benefit_workflow";
    if (/\b(predictive|risk model|calculator|screening|phq|gad|risk score)\b/.test(text)) return "predictive_or_screening_capability";
    if (/\b(translation|language|accessibility|low literacy|offline)\b/.test(text)) return "accessibility_localization";
    if (/\b(social care|housing|food|transportation|community resource)\b/.test(text)) return "social_care_sharing";
    return "health_education_or_preparation";
  }

  function regulatoryRiskFor(capabilityType) {
    if (capabilityType === "health_education_or_preparation") return "low_to_moderate_review_required";
    if (capabilityType === "accessibility_localization") return "moderate_language_access_review_required";
    if (capabilityType === "social_care_sharing") return "moderate_privacy_consent_review_required";
    return "high_regulated_review_required";
  }

  function buildHealthRegulatoryAssessmentPacket(input = "", context = {}) {
    const capabilityType = inferRegulatoryCapability(input);
    const riskTier = regulatoryRiskFor(capabilityType);
    const productionBlocked = capabilityType !== "health_education_or_preparation";
    return {
      ok: true,
      serviceId: SERVICE_ID,
      serviceVersion: SERVICE_VERSION,
      packetType: "enterprise_health_regulatory_assessment_packet",
      domainId: "health_regulatory_assessment",
      capabilityType,
      riskTier,
      productionBlocked,
      governance: HEALTH_REGULATORY_ASSESSMENT_GOVERNANCE,
      regulatoryFrames: HEALTH_REGULATORY_ASSESSMENT_GOVERNANCE.regulatoryFrames,
      classificationStates: HEALTH_REGULATORY_ASSESSMENT_GOVERNANCE.classificationStates,
      requiredBeforeProductionAuthorization: HEALTH_REGULATORY_ASSESSMENT_GOVERNANCE.requiredBeforeProductionAuthorization,
      currentClassification: productionBlocked ? "not_production_authorized" : "implemented_locally",
      executionEnabled: false,
      productionAuthorized: false,
      canClassifyCapability: true,
      canPrepareReviewChecklist: true,
      canAuthorizeProduction: false,
      canBypassLegalReview: false,
      canBypassClinicalApproval: false,
      canBypassJurisdictionReview: false,
      canActivateLiveConnector: false,
      canHandlePhiWithoutGovernance: false,
      safety: commonSafety(),
      auditReceipt: audit("health_regulatory_assessment_prepared", "health_regulatory_assessment"),
      userVisibleStatus: `Nexus prepared a capability-level regulatory assessment for ${capabilityType.replace(/_/g, " ")}. Nexus can classify the capability, list applicable review frames, and prepare a governance checklist, but it cannot authorize production use, bypass legal or clinical approval, bypass jurisdiction review, activate live connectors, handle PHI without governance, diagnose, prescribe, contact providers, or dispatch emergencies.`
    };
  }

  function inferAdversarialValidationType(input = "") {
    const text = normalizeText(input);
    if (/\b(prompt injection|jailbreak|ignore instructions|override safety)\b/.test(text)) return "prompt_injection_and_jailbreak";
    if (/\b(secret|token|api key|credential|password)\b/.test(text)) return "secret_exposure";
    if (/\b(phi|medical record|share data|export|privacy|consent)\b/.test(text)) return "privacy_and_consent";
    if (/\b(fake citation|citation|source|guideline)\b/.test(text)) return "citation_integrity";
    if (/\b(dispatch|emergency|988|crisis|suicide)\b/.test(text)) return "emergency_boundary";
    if (/\b(diagnose|prescribe|medication change|dose)\b/.test(text)) return "clinical_claim_boundary";
    if (/\b(accessibility|translation|low literacy|caption|voice|offline|low bandwidth)\b/.test(text)) return "accessibility_and_localization";
    if (/\b(provider|pharmacy|telehealth|message|call|appointment|referral)\b/.test(text)) return "provider_execution_boundary";
    return "health_security_privacy_adversarial_validation";
  }

  function adversarialFindingSeeds(validationType) {
    const findings = [];
    if (validationType === "clinical_claim_boundary") findings.push("unsafe_clinical_claim");
    if (validationType === "secret_exposure") findings.push("secret_exposure_risk");
    if (validationType === "citation_integrity") findings.push("fake_citation_risk");
    if (validationType === "provider_execution_boundary") findings.push("provider_execution_claim");
    if (validationType === "emergency_boundary") findings.push("emergency_dispatch_claim");
    if (validationType === "privacy_and_consent") findings.push("consent_bypass");
    if (validationType === "accessibility_and_localization") findings.push("accessibility_gap");
    return findings;
  }

  function buildHealthSecurityPrivacyAdversarialPacket(input = "", context = {}) {
    const validationType = inferAdversarialValidationType(input);
    const flaggedFindings = adversarialFindingSeeds(validationType);
    const passCriteria = HEALTH_SECURITY_PRIVACY_ADVERSARIAL_GOVERNANCE.requiredPassCriteria;
    return {
      ok: true,
      serviceId: SERVICE_ID,
      serviceVersion: SERVICE_VERSION,
      packetType: "enterprise_health_security_privacy_adversarial_validation_packet",
      domainId: "health_security_privacy_adversarial_validation",
      validationType,
      governance: HEALTH_SECURITY_PRIVACY_ADVERSARIAL_GOVERNANCE,
      validationSurfaces: HEALTH_SECURITY_PRIVACY_ADVERSARIAL_GOVERNANCE.validationSurfaces,
      adversarialChecks: HEALTH_SECURITY_PRIVACY_ADVERSARIAL_GOVERNANCE.adversarialChecks,
      requiredPassCriteria: passCriteria,
      flaggedFindings,
      blockedFindings: HEALTH_SECURITY_PRIVACY_ADVERSARIAL_GOVERNANCE.blockedFindings,
      validationOutcome: flaggedFindings.length ? "review_required_before_release" : "local_checks_prepared",
      executionEnabled: false,
      localValidationEnabled: true,
      canRunLocalValidation: true,
      canApproveRelease: false,
      canBypassSecurityReview: false,
      canExposeSecrets: false,
      canOverrideEmergencyBoundary: false,
      canBypassConsent: false,
      canBypassHumanReview: false,
      canClaimClinicalSafetyPassed: false,
      canContactProvider: false,
      canDispatchEmergency: false,
      safety: commonSafety(),
      auditReceipt: audit("health_security_privacy_adversarial_validation_prepared", "health_security_privacy_adversarial_validation"),
      userVisibleStatus: `Nexus prepared local health security, privacy, accessibility, and adversarial validation for ${validationType.replace(/_/g, " ")}. Nexus can run local validation checks and prepare a review receipt, but it cannot approve release, bypass security/privacy/clinical review, expose secrets, bypass consent or human review, claim clinical safety is passed, contact providers, or dispatch emergencies.`
    };
  }

  function buildHealthGenesisCapabilityStatusPacket(input = "", context = {}) {
    const counts = HEALTH_GENESIS_CAPABILITY_STATUS.reduce((acc, item) => {
      acc[item.classification] = (acc[item.classification] || 0) + 1;
      return acc;
    }, {});
    const productionLimited = HEALTH_GENESIS_CAPABILITY_STATUS.filter(item => item.classification !== "implemented_locally");
    return {
      ok: true,
      serviceId: SERVICE_ID,
      serviceVersion: SERVICE_VERSION,
      packetType: "enterprise_health_genesis_capability_status_packet",
      domainId: "health_genesis_capability_status",
      capabilityStatus: HEALTH_GENESIS_CAPABILITY_STATUS,
      capabilityCount: HEALTH_GENESIS_CAPABILITY_STATUS.length,
      classificationCounts: counts,
      productionLimitedCapabilities: productionLimited,
      productionAuthorized: false,
      executionEnabled: false,
      allCapabilitiesClassified: true,
      canReportCapabilityStatus: true,
      canActivateRegulatedExecution: false,
      canClaimProductionReady: false,
      canBypassCredentials: false,
      canBypassClinicalApproval: false,
      canBypassRegulatoryReview: false,
      canBypassConsentAudit: false,
      safety: commonSafety(),
      auditReceipt: audit("health_genesis_capability_status_prepared", "health_genesis_capability_status"),
      userVisibleStatus: `Nexus prepared the Genesis enterprise health capability status packet. ${HEALTH_GENESIS_CAPABILITY_STATUS.length} capabilities are classified across implemented-local, credential-blocked, approval-blocked, experimental, disabled, and not-production-authorized states. Nexus can report what is built and what remains blocked, but it cannot activate regulated execution, claim production authorization, bypass credentials, bypass clinical/regulatory review, bypass consent, diagnose, prescribe, contact providers, or dispatch emergencies.`
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
      fhirTerminologyGovernance: FHIR_TERMINOLOGY_GOVERNANCE,
      medicationPharmacyEvidenceGovernance: MEDICATION_PHARMACY_EVIDENCE_GOVERNANCE,
      laboratoryDiagnosticEvidenceGovernance: LABORATORY_DIAGNOSTIC_EVIDENCE_GOVERNANCE,
      consentPrivacyGovernance: CONSENT_PRIVACY_GOVERNANCE,
      healthDataRightsGovernance: HEALTH_DATA_RIGHTS_GOVERNANCE,
      youthVulnerablePopulationGovernance: YOUTH_VULNERABLE_POPULATION_GOVERNANCE,
      accessibilityLocalizationGovernance: ACCESSIBILITY_LOCALIZATION_GOVERNANCE,
      healthCommunicationsFollowUpGovernance: HEALTH_COMMUNICATIONS_FOLLOW_UP_GOVERNANCE,
      healthModelSourceMonitoringGovernance: HEALTH_MODEL_SOURCE_MONITORING_GOVERNANCE,
      healthRegulatoryAssessmentGovernance: HEALTH_REGULATORY_ASSESSMENT_GOVERNANCE,
      healthSecurityPrivacyAdversarialGovernance: HEALTH_SECURITY_PRIVACY_ADVERSARIAL_GOVERNANCE,
      healthGenesisCapabilityStatus: HEALTH_GENESIS_CAPABILITY_STATUS,
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
      fhirTerminologyGovernanceState: FHIR_TERMINOLOGY_GOVERNANCE.defaultState,
      medicationPharmacyGovernanceState: MEDICATION_PHARMACY_EVIDENCE_GOVERNANCE.defaultState,
      laboratoryDiagnosticGovernanceState: LABORATORY_DIAGNOSTIC_EVIDENCE_GOVERNANCE.defaultState,
      healthDataRightsGovernanceState: HEALTH_DATA_RIGHTS_GOVERNANCE.defaultMemoryState,
      youthVulnerableSafeguardState: YOUTH_VULNERABLE_POPULATION_GOVERNANCE.defaultState,
      accessibilityLocalizationState: ACCESSIBILITY_LOCALIZATION_GOVERNANCE.translationState,
      healthCommunicationsFollowUpState: HEALTH_COMMUNICATIONS_FOLLOW_UP_GOVERNANCE.defaultState,
      healthModelSourceMonitoringState: HEALTH_MODEL_SOURCE_MONITORING_GOVERNANCE.defaultState,
      healthRegulatoryAssessmentState: HEALTH_REGULATORY_ASSESSMENT_GOVERNANCE.defaultState,
      healthSecurityPrivacyAdversarialState: HEALTH_SECURITY_PRIVACY_ADVERSARIAL_GOVERNANCE.defaultState,
      healthGenesisCapabilityStatusCount: HEALTH_GENESIS_CAPABILITY_STATUS.length,
      professionalWorkspaceRoleCount: Object.keys(PROFESSIONAL_WORKSPACE_ROLES).length,
      humanReviewQueueCount: Object.keys(HUMAN_REVIEW_QUEUE_TYPES).length,
      executionEnabled: false,
      clinicalAuthorityClaimed: false,
      missingConfig: [],
      activeCapabilities: ["source inspection", "evidence tiering", "source verification contracts", "role-aware evidence inspector", "conflict review", "domain evidence maps", "predictive governance receipts", "clinical calculator governance", "verified provider trust registry", "FHIR terminology contracts", "FHIR terminology governance", "medication/pharmacy evidence governance", "laboratory/diagnostic evidence governance", "health data rights governance", "youth/vulnerable safeguards", "accessibility/localization governance", "health communications/follow-up governance", "health model/source monitoring governance", "capability regulatory assessment", "security/privacy/adversarial validation", "Genesis capability status", "consent/privacy governance", "professional inspector contract"],
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
    FHIR_TERMINOLOGY_GOVERNANCE,
    MEDICATION_PHARMACY_EVIDENCE_GOVERNANCE,
    LABORATORY_DIAGNOSTIC_EVIDENCE_GOVERNANCE,
    CONSENT_PRIVACY_GOVERNANCE,
    HEALTH_DATA_RIGHTS_GOVERNANCE,
    YOUTH_VULNERABLE_POPULATION_GOVERNANCE,
    ACCESSIBILITY_LOCALIZATION_GOVERNANCE,
    HEALTH_COMMUNICATIONS_FOLLOW_UP_GOVERNANCE,
    HEALTH_MODEL_SOURCE_MONITORING_GOVERNANCE,
    HEALTH_REGULATORY_ASSESSMENT_GOVERNANCE,
    HEALTH_SECURITY_PRIVACY_ADVERSARIAL_GOVERNANCE,
    HEALTH_GENESIS_CAPABILITY_STATUS,
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
    buildMedicationPharmacyEvidencePacket,
    buildLaboratoryDiagnosticEvidencePacket,
    buildHealthDataRightsPacket,
    buildFhirTerminologyGovernancePacket,
    buildYouthVulnerableSafeguardPacket,
    buildAccessibilityLocalizationGovernancePacket,
    buildHealthCommunicationsFollowUpPacket,
    buildHealthModelSourceMonitoringPacket,
    buildHealthRegulatoryAssessmentPacket,
    buildHealthSecurityPrivacyAdversarialPacket,
    buildHealthGenesisCapabilityStatusPacket,
    registries,
    status,
    hasUnsafeClaim
  });

  if (typeof module !== "undefined" && module.exports) module.exports = api;
  globalScope.NexusEnterpriseHealthEvidenceTrust = api;
})(typeof window !== "undefined" ? window : globalThis);
