(function initNexusMentalHealthBehavioralWellness(globalScope) {
  "use strict";

  const CAPABILITY_ID = "mental_health_behavioral_wellness";
  const MODEL_VERSION = "nexus-mental-health-state-machine.v1";

  const TRUSTED_EVIDENCE_COLLECTIONS = Object.freeze([
    {
      collectionId: "clinical_guidance",
      label: "Clinical guidance",
      evidenceTier: "tier_1_authoritative",
      examples: ["WHO mental health guidance", "WHO mhGAP", "SAMHSA evidence resources"],
      useBoundary: "Education, navigation, and professional-review support only; not diagnosis or treatment authority."
    },
    {
      collectionId: "screening_instruments",
      label: "Screening and assessment instruments",
      evidenceTier: "governed_instrument",
      examples: ["PHQ-2/PHQ-9", "GAD-2/GAD-7", "WHO-5", "AUDIT-C"],
      useBoundary: "Requires consent, version control, validated language, and non-diagnostic labeling."
    },
    {
      collectionId: "crisis_safety",
      label: "Crisis and safeguarding resources",
      evidenceTier: "tier_1_crisis_protocol",
      examples: ["Official crisis resources", "Safety-planning guidance", "Safeguarding resources"],
      useBoundary: "Immediate danger overrides routine workflows; Nexus does not dispatch unless a configured approved provider performs it."
    },
    {
      collectionId: "verified_providers",
      label: "Verified providers and social services",
      evidenceTier: "verified_directory",
      examples: ["Government treatment locators", "licensing boards", "official provider directories"],
      useBoundary: "Provider listings require verification status, freshness, and no claim of availability unless confirmed."
    },
    {
      collectionId: "patient_family_education",
      label: "Patient, family, and caregiver education",
      evidenceTier: "education",
      examples: ["Caregiver wellbeing", "stigma reduction", "telehealth preparation"],
      useBoundary: "Plain-language education only; personalized clinical decisions remain with qualified professionals."
    },
    {
      collectionId: "workforce_development",
      label: "Workforce development",
      evidenceTier: "training_governance",
      examples: ["Psychological first aid", "trauma-informed care", "Nexus responsible use"],
      useBoundary: "Training completion does not imply licensure or independent clinical authority."
    }
  ]);

  const VERIFIED_PROVIDER_SOURCES = Object.freeze([
    {
      sourceId: "samhsa-treatment-locator-contract",
      providerType: "behavioral_health_treatment_locator",
      status: "connector_ready_missing_credentials",
      verificationStatus: "public_source_contract_defined",
      requiredConfiguration: ["NEXUS_MENTAL_HEALTH_PROVIDER_SEARCH_ENABLED", "SAMHSA_PROVIDER_LOCATOR_ENDPOINT"],
      executionEnabled: false
    },
    {
      sourceId: "official-licensing-board-contract",
      providerType: "professional_license_verification",
      status: "jurisdiction_required",
      verificationStatus: "requires_jurisdiction_source",
      requiredConfiguration: ["NEXUS_PROVIDER_LICENSE_SOURCE_URL"],
      executionEnabled: false
    },
    {
      sourceId: "local-crisis-resource-contract",
      providerType: "crisis_and_safeguarding_resource",
      status: "configuration_required",
      verificationStatus: "requires_admin_approved_local_resource",
      requiredConfiguration: ["NEXUS_CRISIS_RESOURCE_REGISTRY_ENABLED", "NEXUS_CRISIS_RESOURCE_SOURCE_URL"],
      executionEnabled: false
    }
  ]);

  const GOVERNED_SCREENING_INSTRUMENTS = Object.freeze({
    phq9: screeningInstrument("phq9", "PHQ-9 depression screening governance", ["depression", "low_mood"], 9, ["user_consent", "validated_language", "crisis_item_review", "professional_review_for_concern"]),
    gad7: screeningInstrument("gad7", "GAD-7 anxiety screening governance", ["anxiety", "worry"], 7, ["user_consent", "validated_language", "professional_review_for_concern"]),
    who5: screeningInstrument("who5", "WHO-5 wellbeing screening governance", ["wellbeing", "quality_of_life"], 5, ["user_consent", "validated_language", "non_diagnostic_label"]),
    auditc: screeningInstrument("auditc", "AUDIT-C alcohol-use screening governance", ["alcohol", "substance_use"], 3, ["user_consent", "validated_language", "substance_use_resource_boundary"]),
    pcl5: screeningInstrument("pcl5", "PCL-5 trauma symptom screening governance", ["trauma", "ptsd"], 20, ["user_consent", "validated_language", "trauma_informed_support", "professional_review_for_concern"]),
    cssrs: screeningInstrument("cssrs", "C-SSRS style suicide safety screening governance", ["suicide_safety", "crisis"], "trained_workflow", ["trained_workflow", "jurisdiction_resource_review", "immediate_safety_override"])
  });

  const JURISDICTION_ESCALATION_REGISTRY = Object.freeze({
    us: jurisdictionEscalation("us", "United States", ["988 Suicide & Crisis Lifeline", "local emergency services", "SAMHSA treatment locator"], ["988", "911"], "requires current local resource verification before any live handoff"),
    kenya: jurisdictionEscalation("kenya", "Kenya", ["local emergency services", "local approved crisis or safeguarding resource"], ["local emergency number required"], "configuration required before local crisis resource display"),
    nigeria: jurisdictionEscalation("nigeria", "Nigeria", ["local emergency services", "local approved crisis or safeguarding resource"], ["local emergency number required"], "configuration required before local crisis resource display"),
    generic: jurisdictionEscalation("generic", "User jurisdiction not verified", ["local emergency services", "trusted local crisis/safeguarding resource", "nearest safe emergency location"], ["ask for city/region if safe"], "do not claim jurisdiction-specific resource without configured source")
  });

  const SAFETY_PLAN_STEPS = Object.freeze([
    "Move away from immediate means of harm when possible.",
    "Move toward a safer place or another person.",
    "Contact local emergency or crisis support if there is immediate danger.",
    "Tell one trusted person what is happening if safe to do so.",
    "Write down what happened, what changed, and what support is needed for a professional review.",
    "Keep Nexus in support mode only; Nexus does not declare safety, dispatch help, or contact anyone automatically."
  ]);

  const STATE_DEFINITIONS = Object.freeze({
    ordinary_conversation: "Ordinary conversation with no mental-health support signal.",
    general_wellness: "General wellbeing support and education.",
    emotional_support: "Supportive conversation for stress, anxiety, low mood, loneliness, burnout, or coping.",
    self_guided_coping: "Self-guided coping tool support such as grounding or breathing, without treatment claims.",
    grief_support: "Supportive grief or bereavement conversation.",
    sleep_support: "Sleep hygiene and preparation support without medical diagnosis.",
    caregiver_support: "Caregiver burden and family-support navigation.",
    substance_use_concern: "Substance-use concern with education and provider-navigation boundaries.",
    optional_screening: "Optional screening can be offered only with consent and non-diagnostic labeling.",
    intake: "Structured intake or provider-preparation state.",
    care_preparation: "Provider-ready summary, questions, or appointment preparation.",
    provider_search: "Verified provider/social-service discovery with credential and location boundaries.",
    professional_resource_lookup: "Professional evidence/source lookup.",
    follow_up: "User-approved follow-up/check-in support.",
    longitudinal_trend_review: "Descriptive trend review, never diagnostic prediction.",
    social_service_need: "Housing, food, transportation, safety, or financial stress navigation.",
    elevated_concern: "Higher-acuity concern requiring cautious support and human review.",
    urgent_concern: "Urgent concern requiring immediate human support direction.",
    immediate_danger: "Direct self-harm, suicide plan, violence, severe disorientation, or immediate danger signal.",
    abuse_or_safeguarding_concern: "Abuse, neglect, domestic violence, child/vulnerable-adult safeguarding concern.",
    medical_emergency: "Medical emergency or overdose concern.",
    unclear_or_insufficient_information: "Ambiguous input that needs one gentle clarifying question.",
    provider_blocked: "Provider action requested but connector/verification/approval is missing.",
    consent_blocked: "User consent is missing for screening, memory, sharing, provider search, or communication.",
    location_required: "Location is needed for nearby provider search but has not been provided or approved.",
    professional_review_required: "Human professional review is required before interpretation or action."
  });

  const CRISIS_PATTERNS = [
    /\b(kill myself|end my life|suicide|suicidal|hurt(?:ing)? myself|harm(?:ing)? myself|self[-\s]?harm)\b/i,
    /\b(plan to (die|end|kill)|have a plan).*\b(myself|life|suicide)\b/i,
    /\b(hurt someone|kill someone|harm someone|violent thoughts)\b/i,
    /\b(i do not feel safe|not safe right now|immediate danger)\b/i,
    /\b(overdose|severe intoxication|withdrawal seizure)\b/i
  ];

  const SAFEGUARDING_PATTERNS = [
    /\b(someone is hurting me|being abused|domestic violence|unsafe at home|child abuse|neglect|exploitation)\b/i,
    /\b(my child|my mother|older adult|vulnerable adult).*\b(abused|neglected|unsafe|hurt)\b/i
  ];

  const MENTAL_HEALTH_PATTERNS = [
    /\b(overwhelmed|need to talk|not feel like myself|anxious|anxiety|panic|stressed|stress|burned out|burnt out)\b/i,
    /\b(depressed|low mood|sad|hopeless|alone|lonely|grief|lost someone|bereavement|cannot sleep|insomnia)\b/i,
    /\b(coping|cope|calm down|grounding|breathing|counseling|counselling|therapist|therapy|psychiatrist|psychologist|social worker|provider)\b/i,
    /\b(drinking more|substance use|addiction|withdrawal|caregiver|worried about my child|mother seems depressed)\b/i,
    /\b(phq|gad|screening|well[-\s]?being|wellbeing|safety plan|mental health|behavioral health|behavioural health)\b/i,
    /\b(do not remember this|don't remember this|show me what you remember|delete.*mental health|stop.*check[-\s]?ins)\b/i
  ];

  function normalizeText(input) {
    return String(input || "").toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").trim();
  }

  function shouldHandle(input = "") {
    const text = normalizeText(input);
    if (!text) return false;
    return CRISIS_PATTERNS.some(pattern => pattern.test(text))
      || SAFEGUARDING_PATTERNS.some(pattern => pattern.test(text))
      || MENTAL_HEALTH_PATTERNS.some(pattern => pattern.test(text));
  }

  function detectRequestedAction(text = "") {
    const normalized = normalizeText(text);
    if (/\b(find|look for|near me|provider|therapist|psychiatrist|counselor|counsellor)\b/.test(normalized)) return "provider_search";
    if (/\b(screen|phq|gad|assessment|questionnaire)\b/.test(normalized)) return "optional_screening";
    if (/\b(appointment|prepare|questions|summary|intake)\b/.test(normalized)) return "care_preparation";
    if (/\b(do not remember|don't remember|session only|delete|show me what you remember|stop.*check)\b/.test(normalized)) return "privacy_control";
    if (/\b(calm down|breathing|grounding|cope|coping)\b/.test(normalized)) return "coping_tool";
    return "supportive_dialogue";
  }

  function screeningInstrument(instrumentId, label, domains, itemCount, governanceRequirements) {
    return Object.freeze({
      instrumentId,
      label,
      domains,
      itemCount,
      governanceRequirements,
      executionEnabled: false,
      scoringEnabled: false,
      outputBoundary: "non-diagnostic preparation only; no diagnosis, severity label, treatment recommendation, or emergency triage replacement",
      consentRequired: true,
      professionalReviewRequiredForConcern: true,
      crisisOverrideRequired: true,
      auditRequired: true
    });
  }

  function jurisdictionEscalation(jurisdictionId, label, resourceTypes, displayRules, verificationStatus) {
    return Object.freeze({
      jurisdictionId,
      label,
      resourceTypes,
      displayRules,
      verificationStatus,
      liveHandoffEnabled: false,
      emergencyDispatchEnabled: false,
      providerContactEnabled: false,
      userApprovalRequiredBeforeSharing: true,
      auditRequired: true
    });
  }

  function inferScreeningInstrument(input = "") {
    const text = normalizeText(input);
    if (/\b(phq|phq-9|depression screen)\b/.test(text)) return "phq9";
    if (/\b(gad|gad-7|anxiety screen)\b/.test(text)) return "gad7";
    if (/\b(who-5|who5|wellbeing screen|well-being screen)\b/.test(text)) return "who5";
    if (/\b(audit-c|auditc|alcohol screen)\b/.test(text)) return "auditc";
    if (/\b(pcl-5|pcl5|trauma screen|ptsd screen)\b/.test(text)) return "pcl5";
    if (/\b(c-ssrs|cssrs|suicide screen|safety screen)\b/.test(text)) return "cssrs";
    return /\b(screen|screening|assessment|questionnaire)\b/.test(text) ? "phq9" : null;
  }

  function inferJurisdiction(input = "", context = {}) {
    const explicit = normalizeText(context.jurisdiction || context.country || "");
    const text = `${normalizeText(input)} ${explicit}`.trim();
    if (/\b(united states|usa|u\.s\.|us|california|stockton|new york|texas)\b/.test(text)) return "us";
    if (/\b(kenya|nairobi|mombasa|kisumu)\b/.test(text)) return "kenya";
    if (/\b(nigeria|lagos|abuja|kano)\b/.test(text)) return "nigeria";
    return "generic";
  }

  function buildScreeningGovernance(input = "", context = {}) {
    const instrumentId = inferScreeningInstrument(input) || "phq9";
    const instrument = GOVERNED_SCREENING_INSTRUMENTS[instrumentId];
    const consentGranted = context.screeningConsent === true || /\b(i consent|yes.*screen|start screening|i agree)\b/i.test(String(input || ""));
    return {
      ok: true,
      packetType: "governed_mental_health_screening_packet",
      instrumentId,
      instrument,
      consentGranted,
      canDisplayQuestions: consentGranted,
      canScore: false,
      canDiagnose: false,
      canRecommendTreatment: false,
      professionalReviewRequired: true,
      blockedUntil: consentGranted
        ? ["approved instrument text", "validated language", "professional review path", "audit receipt before interpretation"]
        : ["explicit user consent", "non-diagnostic explanation", "validated language", "professional review path"],
      safety: {
        noDiagnosis: true,
        noSeverityLabel: true,
        noTreatmentRecommendation: true,
        noEmergencyDispatch: true,
        noProviderContacted: true,
        crisisOverrideRequired: true
      }
    };
  }

  function buildJurisdictionEscalation(input = "", context = {}) {
    const jurisdictionId = inferJurisdiction(input, context);
    const escalation = JURISDICTION_ESCALATION_REGISTRY[jurisdictionId] || JURISDICTION_ESCALATION_REGISTRY.generic;
    return {
      ok: true,
      packetType: "jurisdiction_aware_crisis_escalation_packet",
      jurisdictionId,
      escalation,
      jurisdictionVerified: jurisdictionId !== "generic" && escalation.verificationStatus !== "configuration required before local crisis resource display",
      liveHandoffEnabled: false,
      emergencyDispatchEnabled: false,
      providerContactEnabled: false,
      blockedUntil: [
        "approved jurisdiction resource source",
        "current local crisis/safeguarding registry",
        "user consent before sharing",
        "audit receipt",
        "configured provider or emergency partner for any live handoff"
      ],
      safety: {
        noEmergencyDispatch: true,
        noProviderContacted: true,
        noSilentHandoff: true,
        noSafetyCertification: true
      }
    };
  }

  function buildSafetyPlan(input = "", context = {}) {
    return {
      ok: true,
      packetType: "mental_health_safety_plan_packet",
      generatedAt: new Date().toISOString(),
      jurisdictionEscalation: buildJurisdictionEscalation(input, context),
      steps: SAFETY_PLAN_STEPS,
      userVisibleBoundary: "This is a support plan, not a safety certification. If there is immediate danger, contact local emergency or crisis support now.",
      canShare: false,
      noEmergencyDispatch: true,
      noProviderContacted: true,
      auditRequiredBeforeSharing: true
    };
  }

  function classifyState(input = "", context = {}) {
    const text = normalizeText(input);
    const action = detectRequestedAction(text);
    const matchedSignals = [];

    if (CRISIS_PATTERNS.some(pattern => pattern.test(text))) {
      matchedSignals.push("direct_crisis_or_immediate_danger_language");
      return {
        capabilityId: CAPABILITY_ID,
        state: "immediate_danger",
        riskTier: "crisis",
        action,
        matchedSignals,
        confidence: 0.98,
        crisisOverride: true,
        professionalReviewRequired: true,
        providerExecutionAllowed: false
      };
    }

    if (SAFEGUARDING_PATTERNS.some(pattern => pattern.test(text))) {
      matchedSignals.push("safeguarding_or_abuse_language");
      return {
        capabilityId: CAPABILITY_ID,
        state: "abuse_or_safeguarding_concern",
        riskTier: "urgent",
        action,
        matchedSignals,
        confidence: 0.94,
        crisisOverride: true,
        professionalReviewRequired: true,
        providerExecutionAllowed: false
      };
    }

    if (/\b(overdose|chest pain|can't breathe|cannot breathe|medical emergency)\b/i.test(text)) {
      matchedSignals.push("medical_emergency_language");
      return {
        capabilityId: CAPABILITY_ID,
        state: "medical_emergency",
        riskTier: "emergency",
        action,
        matchedSignals,
        confidence: 0.96,
        crisisOverride: true,
        professionalReviewRequired: true,
        providerExecutionAllowed: false
      };
    }

    let state = "emotional_support";
    let riskTier = "support";
    if (/\b(grief|lost someone|bereavement)\b/.test(text)) state = "grief_support";
    else if (/\b(cannot sleep|can't sleep|insomnia|not slept)\b/.test(text)) state = "sleep_support";
    else if (/\b(caregiver|worried about my child|mother seems depressed|family)\b/.test(text)) state = "caregiver_support";
    else if (/\b(drinking more|substance use|addiction|withdrawal)\b/.test(text)) {
      state = "substance_use_concern";
      riskTier = "elevated";
    } else if (action === "coping_tool") state = "self_guided_coping";
    else if (action === "provider_search") state = context.locationProvided ? "provider_search" : "location_required";
    else if (action === "optional_screening") state = context.screeningConsent === true ? "optional_screening" : "consent_blocked";
    else if (action === "care_preparation") state = "care_preparation";
    else if (action === "privacy_control") state = "consent_blocked";
    else if (!shouldHandle(text)) state = "ordinary_conversation";

    if (/\b(weeks|months|not functioning|cannot take care|hear things|not slept in days|manic|psychosis)\b/.test(text)) {
      riskTier = "elevated";
      if (state === "emotional_support") state = "elevated_concern";
    }

    return {
      capabilityId: CAPABILITY_ID,
      state,
      riskTier,
      action,
      matchedSignals,
      confidence: state === "ordinary_conversation" ? 0.2 : 0.78,
      crisisOverride: false,
      professionalReviewRequired: ["elevated", "urgent", "crisis", "emergency"].includes(riskTier),
      providerExecutionAllowed: false
    };
  }

  function responseForState(classification = {}) {
    if (classification.state === "immediate_danger") {
      return "I'm really glad you told me. If you may hurt yourself or someone else, contact local emergency services now or go to the nearest safe emergency location. If you can, move away from anything you could use to hurt yourself and reach a trusted person immediately. I can stay with you in support mode, but I cannot declare you safe or dispatch help from here.";
    }
    if (classification.state === "abuse_or_safeguarding_concern") {
      return "I'm sorry this is happening. If you are in immediate danger, contact local emergency services or a trusted local crisis/safeguarding resource now. Nexus can help organize what happened and prepare questions for a qualified professional, but it will not contact anyone without your review and approval.";
    }
    if (classification.state === "medical_emergency") {
      return "This may need urgent medical help. Please contact local emergency services or go to the nearest emergency care location now. Nexus can provide support text, but it cannot dispatch or replace emergency care.";
    }
    if (classification.state === "location_required") {
      return "I can help look for verified behavioral-health or social-care resources, but I need a city, region, or approved location text first. I will not request browser location permission or contact a provider automatically.";
    }
    if (classification.state === "consent_blocked" && classification.action === "optional_screening") {
      return "I can offer an optional non-diagnostic screening only if you consent. Screening is not a diagnosis, and concerning answers may need professional review.";
    }
    if (classification.action === "privacy_control") {
      return "Mental-health information is sensitive. I can keep this session-only, show what is remembered, prepare an export, or help delete approved mental-health records where the app supports deletion. I will not share this with another module or provider without explicit consent.";
    }
    if (classification.action === "coping_tool") {
      return "Let's slow this down. Try one minute of grounding: name 5 things you can see, 4 you can feel, 3 you can hear, 2 you can smell, and 1 steady breath. If you feel unsafe, seek immediate local help.";
    }
    if (classification.state === "sleep_support") {
      return "Sleep trouble can wear a person down. I can help organize sleep patterns, stressors, and questions for a clinician. I will not diagnose, prescribe, or suggest changing medication.";
    }
    if (classification.state === "substance_use_concern") {
      return "Thank you for saying that plainly. I can help you prepare for a substance-use conversation and find verified support resources when configured. If there is overdose risk, severe withdrawal, or immediate danger, seek emergency help now.";
    }
    if (classification.state === "care_preparation") {
      return "I can prepare a provider-ready summary with what you are feeling, what changed, safety concerns, questions, and support needs. Nothing will be sent without your review and approval.";
    }
    return "I'm here with you. I can listen, help you name what is happening, suggest a simple coping step, or prepare questions for a qualified professional. I cannot diagnose, prescribe, or replace a clinician.";
  }

  function buildSupportPacket(input = "", context = {}) {
    const classification = classifyState(input, context);
    const now = new Date().toISOString();
    const screeningGovernance = classification.action === "optional_screening" ? buildScreeningGovernance(input, context) : null;
    const jurisdictionEscalation = classification.crisisOverride || classification.state === "abuse_or_safeguarding_concern" ? buildJurisdictionEscalation(input, context) : null;
    const safetyPlan = classification.crisisOverride ? buildSafetyPlan(input, context) : null;
    const immediateActions = [];
    if (classification.crisisOverride) {
      immediateActions.push("Seek local emergency or crisis support now if there is immediate danger.");
      immediateActions.push("Move toward a safer place and contact a trusted person if possible.");
    } else {
      immediateActions.push("Continue supportive conversation.");
      immediateActions.push("Optionally prepare a provider-ready summary.");
    }
    if (classification.action === "provider_search") immediateActions.push("Provide city/region text before any provider lookup.");
    if (classification.action === "optional_screening") immediateActions.push("Ask for informed consent before screening.");

    return {
      ok: true,
      capabilityId: CAPABILITY_ID,
      schemaVersion: "nexus-mental-health-support-packet.v1",
      modelVersion: MODEL_VERSION,
      command: String(input || ""),
      generatedAt: now,
      classification,
      userVisibleStatus: responseForState(classification),
      supportOptions: [
        "supportive_dialogue",
        "coping_tool",
        "provider_ready_summary",
        "verified_provider_search_when_configured",
        "optional_non_diagnostic_screening_with_consent",
        "privacy_control"
      ],
      immediateActions,
      evidenceCollections: TRUSTED_EVIDENCE_COLLECTIONS,
      providerSources: VERIFIED_PROVIDER_SOURCES,
      screeningGovernance,
      jurisdictionEscalation,
      safetyPlan,
      sourceReceipts: TRUSTED_EVIDENCE_COLLECTIONS.map(collection => ({
        collectionId: collection.collectionId,
        evidenceTier: collection.evidenceTier,
        currentStatus: "governed_metadata_seeded",
        lastVerifiedDate: "requires_source_ingestion",
        clinicalLimitations: collection.useBoundary
      })),
      safety: {
        noDiagnosis: true,
        noScreeningScoreWithoutGovernance: true,
        noPrescribing: true,
        noMedicationChange: true,
        noProviderContacted: true,
        noEmergencyDispatch: true,
        noAppointmentBooked: true,
        noSensitiveMemorySavedByDefault: true,
        humanClinicalAuthorityRequired: true,
        crisisOverrideBeatsPrediction: true,
        predictionDiagnosticAuthority: false
      },
      privacy: {
        sensitivity: "high",
        defaultMemoryMode: "session_only",
        shareRequiresExplicitConsent: true,
        deleteAndCorrectionControlsRequired: true,
        crossModuleLeakageAllowed: false
      },
      prediction: {
        available: true,
        mode: "descriptive_support_trend_only",
        modelVersion: MODEL_VERSION,
        confidence: classification.confidence,
        insufficientHistoryBlocksForecast: true,
        protectedCharacteristicsExcluded: true,
        explanation: "This first engine classifies support state from the current text and explains why structured help or crisis override is needed. It does not diagnose or forecast clinical outcomes."
      },
      receipt: {
        receiptId: `nexus-mh-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        action: "mental_health_behavioral_wellness_support_prepared",
        executionResult: "local_support_packet_only",
        providerExecutionResult: "not_attempted"
      }
    };
  }

  function status(env = {}) {
    const providerSearchEnabled = env.NEXUS_MENTAL_HEALTH_PROVIDER_SEARCH_ENABLED === "true";
    const crisisRegistryEnabled = env.NEXUS_CRISIS_RESOURCE_REGISTRY_ENABLED === "true";
    const missingProviderConfig = providerSearchEnabled && !env.SAMHSA_PROVIDER_LOCATOR_ENDPOINT
      ? ["SAMHSA_PROVIDER_LOCATOR_ENDPOINT"]
      : [];
    const missingCrisisConfig = crisisRegistryEnabled && !env.NEXUS_CRISIS_RESOURCE_SOURCE_URL
      ? ["NEXUS_CRISIS_RESOURCE_SOURCE_URL"]
      : [];
    return {
      ok: true,
      capabilityId: CAPABILITY_ID,
      modelVersion: MODEL_VERSION,
      enabled: true,
      providerSearchEnabled,
      crisisRegistryEnabled,
      missingConfig: [...missingProviderConfig, ...missingCrisisConfig],
      liveProviderExecutionEnabled: false,
      defaultMemoryMode: "session_only",
      evidenceCollections: TRUSTED_EVIDENCE_COLLECTIONS.length,
      providerSources: VERIFIED_PROVIDER_SOURCES.length,
      governedScreeningInstruments: Object.keys(GOVERNED_SCREENING_INSTRUMENTS).length,
      jurisdictionEscalationProfiles: Object.keys(JURISDICTION_ESCALATION_REGISTRY).length,
      safetyPlanSteps: SAFETY_PLAN_STEPS.length,
      safety: {
        noSecretsExposed: true,
        noDiagnosis: true,
        noPrescribing: true,
        noFakeProviderContact: true,
        crisisOverrideEnabled: true
      }
    };
  }

  const api = {
    CAPABILITY_ID,
    MODEL_VERSION,
    STATE_DEFINITIONS,
    TRUSTED_EVIDENCE_COLLECTIONS,
    VERIFIED_PROVIDER_SOURCES,
    GOVERNED_SCREENING_INSTRUMENTS,
    JURISDICTION_ESCALATION_REGISTRY,
    SAFETY_PLAN_STEPS,
    shouldHandle,
    classifyState,
    buildScreeningGovernance,
    buildJurisdictionEscalation,
    buildSafetyPlan,
    buildSupportPacket,
    status
  };

  if (typeof module !== "undefined" && module.exports) module.exports = api;
  globalScope.NexusMentalHealthBehavioralWellness = api;
})(typeof globalThis !== "undefined" ? globalThis : window);
