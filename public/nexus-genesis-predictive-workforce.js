(function nexusGenesisPredictiveWorkforceFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusGenesisPredictiveWorkforce = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusGenesisPredictiveWorkforceModule() {
  const SERVICE_ID = "predictive_workforce_career_intelligence";
  const SCHEMA_VERSION = "nexus.genesis.predictive-workforce.v1";

  const EXECUTION_DEFAULTS = Object.freeze({
    applicationSubmissionEnabled: false,
    employerContactEnabled: false,
    interviewSchedulingEnabled: false,
    trainingEnrollmentEnabled: false,
    transportationDispatchEnabled: false,
    resumeSharingEnabled: false,
    profileSharingEnabled: false,
    paymentEnabled: false,
    hiringDecisionAuthority: false,
    rejectionDecisionAuthority: false,
    noFakeApplication: true,
    noFakeInterview: true,
    noFakeEmployerContact: true,
    healthDataSeparatedFromEmployerWorkflows: true,
    explicitConsentRequired: true,
    humanHiringAuthorityPreserved: true
  });

  const PROTECTED_ATTRIBUTE_EXCLUSIONS = Object.freeze([
    "race",
    "ethnicity",
    "religion",
    "sex",
    "pregnancy",
    "sexual_orientation",
    "gender_identity",
    "disability",
    "medical_history",
    "mental_health_records",
    "genetic_information",
    "political_views",
    "family_status",
    "protected_age",
    "unrelated_criminal_history",
    "unrelated_financial_history",
    "unrelated_social_service_use"
  ]);

  const WORKFORCE_SOURCE_REGISTRY = Object.freeze([
    source("dol.onet", "O*NET / U.S. Department of Labor", 1, "official occupational data", "https://www.onetonline.org/", ["skills", "tasks", "occupations", "work_context"]),
    source("dol.careeronestop", "CareerOneStop", 1, "official labor and training resource", "https://www.careeronestop.org/", ["jobs", "training", "certifications", "apprenticeships"]),
    source("dol.apprenticeship", "Apprenticeship.gov", 1, "official apprenticeship source", "https://www.apprenticeship.gov/", ["apprenticeship", "sponsor", "occupation", "eligibility"]),
    source("bls.ooh", "Bureau of Labor Statistics Occupational Outlook Handbook", 1, "official labor-market source", "https://www.bls.gov/ooh/", ["wages", "outlook", "education", "occupation"]),
    source("state.workforce.agency", "State workforce agency or labor ministry", 1, "official jurisdictional workforce source", "official-state-or-ministry-source", ["program", "eligibility", "location", "last_verified"]),
    source("licensing.board", "Official licensing board", 1, "official credential authority", "official-licensing-board", ["license", "requirements", "jurisdiction", "renewal"]),
    source("employer.career.page", "Official employer career page", 2, "employer-confirmed listing source", "employer-official-careers-url", ["role", "requirements", "pay", "schedule", "closing_date"]),
    source("training.provider.verified", "Verified training provider", 3, "verified education or certification source", "verified-training-provider", ["course", "credential", "cost", "schedule", "language"]),
    source("workforce.research", "Recognized labor-market research", 4, "research and labor-market analysis", "recognized-labor-market-research", ["region", "demand", "skill_gap", "methodology"]),
    source("career.counseling.resource", "Professional career counseling resource", 5, "implementation support resource", "professional-career-resource", ["resume", "interview", "application", "coaching"]),
    source("public.job.board", "Public job board listing", 6, "third-party job listing", "public-job-board", ["role", "employer", "posted_date", "application_url"])
  ]);

  const EMPLOYER_TRUST_REGISTRY = Object.freeze([
    employer("employer.solar-field-services", "Solar Field Services Cooperative", "solar and electrical field services", "example-solar-field-services.test", "employer_confirmed_required", ["entry_level", "field_work", "apprenticeship_ready"]),
    employer("employer.community-health-support", "Community Health Support Partner", "community health workforce", "example-community-health-support.test", "partner_verification_required", ["training_required", "human_review_required"]),
    employer("employer.agriculture-logistics", "Agriculture Logistics Network", "agriculture logistics", "example-ag-logistics.test", "employer_confirmed_required", ["transportation_sensitive", "schedule_review_required"])
  ]);

  const MODEL_REGISTRY = Object.freeze([
    model("workforce-readiness-rules-v1", "Workforce readiness rule engine", "deterministic rules", "Advisory readiness and missing-data detection", "approved_for_advisory_use"),
    model("job-fit-ranker-v1", "Explainable job fit ranker", "deterministic scorecard", "Transparent opportunity fit and gap explanation", "awaiting_fairness_review"),
    model("barrier-completion-detector-v1", "Barrier and completion detector", "deterministic rules", "Identify possible support-service needs from user-approved facts", "approved_with_human_review"),
    model("program-intelligence-aggregator-v1", "De-identified workforce program intelligence", "aggregate monitoring", "Program demand and outcome monitoring without re-identification", "not_production_authorized")
  ]);

  const CAPABILITY_CLASSIFICATIONS = Object.freeze({
    career_discovery: "implemented_locally",
    skills_inventory: "implemented_locally",
    job_readiness_assessment: "implemented_locally",
    job_matching: "implemented_locally",
    skills_gap_analysis: "implemented_locally",
    credential_analysis: "implemented_locally",
    training_recommendation: "implemented_locally",
    career_pathway_generation: "implemented_locally",
    resume_preparation: "implemented_locally",
    application_support: "implemented_locally",
    interview_preparation: "implemented_locally",
    barrier_prediction: "implemented_locally",
    support_service_navigation: "implemented_locally",
    application_tracking: "implemented_locally",
    employer_communication: "credential_blocked",
    application_submission: "credential_blocked",
    interview_scheduling: "credential_blocked",
    training_enrollment_request: "credential_blocked",
    transportation_request: "credential_blocked",
    professional_workforce_workspace: "implemented_locally",
    employer_trust_registry: "implemented_locally",
    workforce_source_verification: "implemented_locally",
    fairness_monitoring: "awaiting_fairness_review",
    legal_review_for_sensitive_populations: "awaiting_legal_review",
    workforce_program_intelligence: "experimental",
    production_authorization: "not_production_authorized"
  });

  const COMMAND_PATTERNS = Object.freeze([
    /\b(help me find a job|jobs? am i qualified|better career|what can i do with my experience|find entry-level|find remote work|find work|career pathway|career switch|job readiness|what am i missing|skills am i missing)\b/i,
    /\b(resume|cv|cover letter|help me apply|application|track my applications?|interview|mock interview|prepare for an interview|follow up)\b/i,
    /\b(apprenticeships?|internships?|training|certification|credential|jobs with training|union apprenticeship|veteran-friendly|no degree)\b/i,
    /\b(transportation(?: to work)?|child\s*care|childcare|housing|food support|work tools|digital access|language access|barrier|blocking me)\b/i,
    /\b(workforce capability status|workforce production limitations|employment capability status|career capability status|what is production authorized)\b/i,
    /\b(delete my employment data|do not remember this|do not share this with employers|export my career records|correct my work history|stop using my information for job matching)\b/i
  ]);

  function source(sourceId, name, tier, category, canonicalUrl, fields) {
    return Object.freeze({
      sourceId,
      name,
      tier,
      category,
      canonicalUrl,
      expectedFields: Object.freeze(fields),
      verificationState: canonicalUrl.startsWith("http") ? "official_source" : "verification_required",
      freshnessRequirement: "Show last verified date before claiming a listing, program, credential, or employer requirement is current.",
      noFakeAvailabilityClaim: true
    });
  }

  function employer(employerId, publicName, industry, officialDomain, verificationState, warnings) {
    return Object.freeze({
      employerId,
      publicName,
      industry,
      officialDomain,
      officialCareersUrl: `https://${officialDomain}/careers`,
      verificationState,
      trustWarnings: Object.freeze(warnings),
      recruiterVerificationRequired: true,
      applicationMethod: "official employer or verified provider only",
      communicationReadiness: "credential_blocked_until_provider_and_consent",
      trustReceiptRequired: true
    });
  }

  function model(modelId, name, modelType, intendedUse, approvalState) {
    return Object.freeze({
      modelId,
      name,
      modelType,
      intendedUse,
      prohibitedUse: "Do not make hiring, rejection, promotion, termination, eligibility, benefit, licensing, or accommodation decisions.",
      targetPopulation: "job seekers and workforce-support users with user-approved employment context",
      excludedInputs: PROTECTED_ATTRIBUTE_EXCLUSIONS,
      evaluationMethod: "deterministic fixture QA, fairness review gates, professional override monitoring",
      subgroupPerformance: "awaiting governed fairness review before production ranking",
      humanReviewRequirement: "required for employer-facing decisions or sensitive-user contexts",
      version: "1.0.0",
      owner: "Nexus workforce governance",
      approvalState,
      monitoringPlan: ["match_quality", "false_positive_fit", "false_negative_fit", "subgroup_performance", "user_complaints", "counselor_overrides"],
      rollbackPlan: "disable model ID and fall back to advisory checklist",
      retirementCriteria: "source drift, unfair impact, stale validation, legal restriction, or safety incident"
    });
  }

  function normalizeText(value) {
    return String(value || "").trim().replace(/\s+/g, " ");
  }

  function tokenSet(value) {
    return new Set(normalizeText(value).toLowerCase().split(/[^a-z0-9+#.-]+/).filter(Boolean));
  }

  function stableId(prefix, value) {
    let hash = 0;
    const text = String(value || "");
    for (let index = 0; index < text.length; index += 1) {
      hash = ((hash << 5) - hash + text.charCodeAt(index)) | 0;
    }
    return `${prefix}-${Math.abs(hash).toString(36).slice(0, 10)}`;
  }

  function inferIntent(command = "") {
    const lower = normalizeText(command).toLowerCase();
    if (/\b(delete|do not remember|do not share|export|correct|stop using)\b/.test(lower)) return "employment_privacy_control";
    if (/\b(capability status|production limitations|production authorized)\b/.test(lower)) return "capability_status";
    if (/\b(interview|mock interview)\b/.test(lower)) return "interview_preparation";
    if (/\b(resume|cv|cover letter|apply|application)\b/.test(lower)) return "application_preparation";
    if (/\b(transportation|childcare|housing|food|tools|internet|phone|language|barrier|blocking)\b/.test(lower)) return "barrier_support";
    if (/\b(training|certification|credential|apprenticeship|internship|course)\b/.test(lower)) return "training_pathway";
    if (/\b(why did|qualified|fit|missing|skills|job readiness|what jobs|find jobs|career)\b/.test(lower)) return "job_fit_analysis";
    return "career_discovery";
  }

  function extractProfile(command = "", context = {}) {
    const text = `${command} ${JSON.stringify(context || {})}`.toLowerCase();
    const skills = [];
    [
      "customer service",
      "solar",
      "electrical",
      "construction",
      "farm",
      "agriculture",
      "healthcare",
      "caregiving",
      "driving",
      "warehouse",
      "computer",
      "phone",
      "sales",
      "logistics",
      "maintenance",
      "english",
      "spanish",
      "swahili"
    ].forEach(skill => {
      if (text.includes(skill)) skills.push(skill);
    });
    const targetRole = /\b(ev charging technician|solar installer|farm worker|community health worker|warehouse associate|medical assistant|driver|customer support|it support|caregiver|electrician apprentice)\b/i.exec(command)?.[0]
      || context.targetRole
      || (/\bremote\b/i.test(command) ? "remote support role" : "entry-level job");
    return {
      targetRole: normalizeText(targetRole),
      skills: Array.from(new Set(skills)),
      certifications: Array.isArray(context.certifications) ? context.certifications : [],
      education: normalizeText(context.education || ""),
      location: normalizeText(context.location || (/\bnear me\b/i.test(command) ? "location required" : "")),
      preferences: {
        remote: /\bremote\b/i.test(command),
        noDegree: /\b(no degree|without a degree|does not require a degree)\b/i.test(command),
        secondShift: /\b(second shift|evening)\b/i.test(command),
        apprenticeship: /\b(apprentice|apprenticeship)\b/i.test(command)
      },
      barriers: detectBarriers(command)
    };
  }

  function detectBarriers(command = "") {
    const lower = normalizeText(command).toLowerCase();
    const barriers = [];
    [
      ["transportation", /\b(no transportation|bus route|transportation|ride|car)\b/],
      ["childcare", /\b(childcare|child care|kids|children|single parent)\b/],
      ["resume_missing", /\b(no resume|do not have a resume|resume missing)\b/],
      ["digital_access", /\b(no internet|phone only|computer|digital access)\b/],
      ["language_access", /\b(language|translate|spanish|french|swahili|arabic|portuguese)\b/],
      ["credential_fee", /\b(certification fee|license fee|training cost|tuition)\b/],
      ["schedule_conflict", /\b(schedule conflict|shift|caregiver)\b/],
      ["identification_documents", /\b(id|identification|documents|work authorization)\b/]
    ].forEach(([id, pattern]) => {
      if (pattern.test(lower)) barriers.push(id);
    });
    return barriers;
  }

  function sampleOpportunities(profile = {}) {
    return [
      {
        jobId: "job.evse-entry-technician",
        title: "Entry-Level EV Charging Technician",
        employerId: "employer.solar-field-services",
        sourceId: "employer.career.page",
        requirements: ["electrical safety", "basic tools", "valid schedule availability"],
        preferred: ["OSHA-10", "EVITP interest", "solar or construction experience"],
        training: ["OSHA-10", "EV charging safety fundamentals"],
        location: "regional field route",
        payRangeVerified: false,
        listingState: "verification_pending"
      },
      {
        jobId: "job.community-health-worker",
        title: "Community Health Worker Trainee",
        employerId: "employer.community-health-support",
        sourceId: "training.provider.verified",
        requirements: ["communication", "reliable follow-up", "training completion"],
        preferred: ["bilingual support", "caregiving", "community outreach"],
        training: ["CHW basics", "privacy and referral boundaries"],
        location: "community based",
        payRangeVerified: false,
        listingState: "verification_pending"
      },
      {
        jobId: "job.ag-logistics-coordinator",
        title: "Agriculture Logistics Assistant",
        employerId: "employer.agriculture-logistics",
        sourceId: "public.job.board",
        requirements: ["phone communication", "basic computer", "schedule tracking"],
        preferred: ["agriculture", "driving", "warehouse"],
        training: ["logistics basics", "cold-chain awareness"],
        location: "market hub",
        payRangeVerified: false,
        listingState: "third_party_source"
      }
    ].map(job => ({ ...job, fit: scoreOpportunity(profile, job) }));
  }

  function scoreOpportunity(profile = {}, job = {}) {
    const profileTokens = tokenSet([profile.targetRole, ...(profile.skills || []), ...(profile.certifications || [])].join(" "));
    const required = job.requirements || [];
    const preferred = job.preferred || [];
    const matched = required.concat(preferred).filter(item => {
      const parts = tokenSet(item);
      return Array.from(parts).some(part => profileTokens.has(part) || profileTokens.has(part.replace(/ing$/, "")));
    });
    const missing = required.filter(item => !matched.includes(item));
    const uncertain = preferred.filter(item => !matched.includes(item));
    const raw = matched.length * 2 - missing.length;
    const category = raw >= 4 ? "ready_now" : raw >= 1 ? "mostly_ready" : missing.length ? "missing_key_requirement" : "insufficient_information";
    return {
      category,
      matchedQualifications: matched,
      missingRequirements: missing,
      uncertainRequirements: uncertain,
      scoreLabel: category,
      scoreUsedForFinalDecision: false
    };
  }

  function buildCareerPathway(profile = {}, topJob = {}) {
    const role = topJob.title || profile.targetRole || "target role";
    const missing = topJob.fit?.missingRequirements || [];
    return [
      `Confirm target role: ${role}.`,
      missing.length ? `Close missing requirements: ${missing.join(", ")}.` : "Document matched skills and experience.",
      "Prepare or update resume using only user-provided facts.",
      "Compare verified training or apprenticeship options.",
      "Review application packet before any external submission.",
      "Set a follow-up reminder after user-approved application activity."
    ];
  }

  function buildWorkforcePredictionReceipt({ command, intent, profile, topJob, opportunities, context }) {
    const now = new Date().toISOString();
    return {
      receiptId: stableId("workforce-receipt", `${command}:${now}`),
      predictionId: stableId("workforce-prediction", `${command}:${profile.targetRole}`),
      schemaVersion: SCHEMA_VERSION,
      userConsentState: context?.consentState || "session_only_or_not_provided",
      createdAt: now,
      purpose: intent,
      predictionLevel: intent === "barrier_support" ? 3 : intent === "capability_status" ? 4 : 2,
      targetJobOrPathway: topJob?.title || profile.targetRole || "career pathway",
      sourceJobId: topJob?.jobId || "",
      employerId: topJob?.employerId || "",
      employerVerificationState: EMPLOYER_TRUST_REGISTRY.find(item => item.employerId === topJob?.employerId)?.verificationState || "not_selected",
      jobVerificationState: topJob?.listingState || "not_verified_current",
      modelOrRuleId: "job-fit-ranker-v1",
      modelVersion: "1.0.0",
      inputsUsed: ["user command", "user-approved context", "local opportunity fixtures", "verified-source registry"],
      excludedData: PROTECTED_ATTRIBUTE_EXCLUSIONS,
      missingInformation: topJob?.fit?.missingRequirements || [],
      matchedQualifications: topJob?.fit?.matchedQualifications || [],
      missingRequirements: topJob?.fit?.missingRequirements || [],
      estimatedFitCategory: topJob?.fit?.category || "insufficient_information",
      uncertainty: topJob?.listingState === "verified_current" ? "moderate" : "source freshness or employer confirmation required",
      sourceRecords: [topJob?.sourceId || "workforce-source-registry"].filter(Boolean),
      recommendedNextStep: "Review the fit explanation, fill missing information, and use verified sources before any employer-facing action.",
      professionalReviewRequirement: "required for employer-facing use, sensitive populations, or disputed prediction",
      userResponse: "not recorded",
      applicationAction: "not_submitted",
      employerAction: "not_contacted",
      executionResult: "no_external_execution",
      auditHistory: ["workforce_packet_created", "protected_attributes_excluded", "no_fake_execution_asserted"]
    };
  }

  function buildPredictiveWorkforcePacket(command = "", context = {}) {
    const intent = inferIntent(command);
    if (intent === "capability_status") return buildWorkforceCapabilityStatusPacket(command, context);
    const profile = extractProfile(command, context);
    const opportunities = sampleOpportunities(profile);
    const sorted = opportunities.slice().sort((a, b) => {
      const order = { ready_now: 4, mostly_ready: 3, missing_key_requirement: 2, insufficient_information: 1 };
      return (order[b.fit.category] || 0) - (order[a.fit.category] || 0);
    });
    const topJob = sorted[0];
    const receipt = buildWorkforcePredictionReceipt({ command, intent, profile, topJob, opportunities: sorted, context });
    const pathway = buildCareerPathway(profile, topJob);
    return Object.freeze({
      packetType: "genesis_predictive_workforce_career_packet",
      capabilityId: SERVICE_ID,
      schemaVersion: SCHEMA_VERSION,
      command: normalizeText(command),
      intent,
      state: intent,
      userVisibleStatus: `Nexus prepared a predictive workforce packet for ${profile.targetRole || "your work goal"}. It explains fit, gaps, sources, barriers, and next steps without applying, contacting employers, scheduling interviews, or sharing data.`,
      profile,
      opportunities: sorted,
      topRecommendation: topJob,
      careerPathway: pathway,
      barrierSignals: profile.barriers.map(id => ({
        barrierId: id,
        status: "possible_user_reported_barrier",
        supportNavigation: "verified workforce or social-service source required before referral",
        eligibilityGuaranteed: false
      })),
      trainingRecommendations: Array.from(new Set(sorted.flatMap(job => job.training || []))).map(name => ({
        name,
        verificationState: "verified_training_source_required",
        enrollmentEnabled: false,
        providerContactEnabled: false
      })),
      explanation: {
        whyMatched: topJob ? `${topJob.title} matched because Nexus found overlap with ${topJob.fit.matchedQualifications.join(", ") || "the stated career goal"} and identified missing requirements for review.` : "More information is needed before matching.",
        matchedQualifications: topJob?.fit?.matchedQualifications || [],
        missingRequirements: topJob?.fit?.missingRequirements || [],
        uncertainRequirements: topJob?.fit?.uncertainRequirements || [],
        dataExcluded: PROTECTED_ATTRIBUTE_EXCLUSIONS,
        notConcluding: [
          "Nexus is not deciding whether an employer will hire the user.",
          "Nexus is not ranking the user for rejection.",
          "Nexus is not claiming a listing is open without current source verification."
        ]
      },
      fairness: {
        protectedAttributeUseForFit: false,
        protectedAttributesExcluded: PROTECTED_ATTRIBUTE_EXCLUSIONS,
        humanReviewRequiredForEmployerFacingUse: true,
        finalHiringAuthority: "human employer or authorized workforce professional only"
      },
      privacy: {
        memoryDefault: "session_only",
        employerSharingDefault: false,
        healthDataSharedWithEmployers: false,
        correctionExportDeletionSupported: true,
        consentRequiredBeforeSharing: true
      },
      sourceRegistry: WORKFORCE_SOURCE_REGISTRY,
      employerTrustRegistry: EMPLOYER_TRUST_REGISTRY,
      modelRegistry: MODEL_REGISTRY,
      receipt,
      safety: EXECUTION_DEFAULTS,
      ...EXECUTION_DEFAULTS
    });
  }

  function buildWorkforceCapabilityStatusPacket(command = "", context = {}) {
    const counts = Object.values(CAPABILITY_CLASSIFICATIONS).reduce((acc, status) => {
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {});
    return Object.freeze({
      packetType: "genesis_predictive_workforce_capability_status_packet",
      capabilityId: SERVICE_ID,
      schemaVersion: SCHEMA_VERSION,
      command: normalizeText(command),
      userVisibleStatus: `Nexus classified ${Object.keys(CAPABILITY_CLASSIFICATIONS).length} workforce capabilities. Local career guidance, job-fit explanation, skills-gap review, training pathway planning, barrier support, receipts, privacy controls, and professional-review packets are implemented locally. Employer contact, application submission, interview scheduling, training enrollment, transportation requests, and production authorization remain blocked until credentials, consent, confirmation, legal/fairness review, and audit gates are satisfied.`,
      capabilityClassifications: CAPABILITY_CLASSIFICATIONS,
      classificationCounts: counts,
      sourceRegistryCount: WORKFORCE_SOURCE_REGISTRY.length,
      employerTrustRegistryCount: EMPLOYER_TRUST_REGISTRY.length,
      modelRegistryCount: MODEL_REGISTRY.length,
      allCapabilitiesClassified: true,
      canReportCapabilityStatus: true,
      canSubmitApplication: false,
      canContactEmployer: false,
      canScheduleInterview: false,
      canShareProfile: false,
      canUseHealthDataForEmployment: false,
      canClaimProductionReady: false,
      productionAuthorized: false,
      safety: EXECUTION_DEFAULTS,
      ...EXECUTION_DEFAULTS
    });
  }

  function registries() {
    return Object.freeze({
      packetType: "genesis_predictive_workforce_registry_packet",
      capabilityId: SERVICE_ID,
      schemaVersion: SCHEMA_VERSION,
      userVisibleStatus: "Nexus prepared the workforce source, employer trust, and model governance registries. Execution remains disabled until the relevant credentials, consent, confirmation, legal/fairness review, and audit gates are satisfied.",
      sources: WORKFORCE_SOURCE_REGISTRY,
      employers: EMPLOYER_TRUST_REGISTRY,
      models: MODEL_REGISTRY,
      capabilityClassifications: CAPABILITY_CLASSIFICATIONS,
      safety: EXECUTION_DEFAULTS,
      ...EXECUTION_DEFAULTS
    });
  }

  function shouldHandle(command = "") {
    return COMMAND_PATTERNS.some(pattern => pattern.test(command));
  }

  function status() {
    return Object.freeze({
      ok: true,
      capabilityId: SERVICE_ID,
      schemaVersion: SCHEMA_VERSION,
      sourceCount: WORKFORCE_SOURCE_REGISTRY.length,
      employerCount: EMPLOYER_TRUST_REGISTRY.length,
      modelCount: MODEL_REGISTRY.length,
      capabilityCount: Object.keys(CAPABILITY_CLASSIFICATIONS).length,
      allCapabilitiesClassified: true,
      productionAuthorized: false,
      noFakeExecution: true,
      healthDataSeparatedFromEmployerWorkflows: true
    });
  }

  return Object.freeze({
    SERVICE_ID,
    SCHEMA_VERSION,
    EXECUTION_DEFAULTS,
    PROTECTED_ATTRIBUTE_EXCLUSIONS,
    WORKFORCE_SOURCE_REGISTRY,
    EMPLOYER_TRUST_REGISTRY,
    MODEL_REGISTRY,
    CAPABILITY_CLASSIFICATIONS,
    shouldHandle,
    inferIntent,
    detectBarriers,
    extractProfile,
    sampleOpportunities,
    scoreOpportunity,
    buildPredictiveWorkforcePacket,
    buildWorkforceCapabilityStatusPacket,
    buildWorkforcePredictionReceipt,
    registries,
    status
  });
});
