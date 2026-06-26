(function nexusWorkforcePublicSourceContractsFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusWorkforcePublicSourceContracts = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusWorkforcePublicSourceContractsModule() {
  const DISABLED_FLAGS = Object.freeze({
    fetchEnabled: false,
    liveJobFeedEnabled: false,
    applicationSubmissionEnabled: false,
    referralSubmissionEnabled: false,
    employerContactEnabled: false,
    profileSharingEnabled: false,
    resumeSharingEnabled: false,
    certificateIssuingEnabled: false,
    interviewSchedulingEnabled: false,
    paymentEnabled: false,
    executionEnabled: false
  });

  const commonForbiddenClaims = Object.freeze([
    "job is live without source freshness",
    "application submitted",
    "employer contacted",
    "profile shared",
    "resume shared",
    "interview scheduled",
    "certificate issued",
    "payment processed",
    "hiring guaranteed",
    "placement guaranteed"
  ]);

  const sourceSeeds = [
    ["workforce.program.directory", "Public workforce program directory source", "public workforce board, ministry labor source, or workforce agency", "program_directory", ["program", "eligibility", "region", "sourceUpdatedAt"]],
    ["workforce.training.catalog", "Public training and course catalog source", "public training provider, education agency, or course catalog", "training_catalog", ["course", "level", "language", "schedule", "sourceUpdatedAt"]],
    ["workforce.job.board", "Public job board source metadata", "public job board, employer listing page, or labor-market source", "job_board", ["role", "employer", "location", "postedAt", "sourceUpdatedAt"]],
    ["workforce.apprenticeship.certification", "Apprenticeship and certification source", "public apprenticeship agency, certification body, or training authority", "apprenticeship_certification", ["credential", "issuer", "requirements", "sourceUpdatedAt"]],
    ["workforce.skills.framework", "Career pathway and skills framework source", "public skills framework, occupational standard, or workforce curriculum source", "skills_framework", ["occupation", "skill", "level", "frameworkVersion"]],
    ["workforce.employer.public_opportunities", "Employer public opportunity page source", "employer public opportunity page or partner-published listing", "employer_public_opportunities", ["employer", "opportunity", "requirements", "postedAt"]],
    ["workforce.community.programs", "Youth, women, and community workforce program source", "public community workforce program, NGO, or government support source", "community_workforce_program", ["program", "targetGroup", "eligibility", "region"]],
    ["workforce.agriculture.training", "Agriculture workforce training source", "public agriculture training, extension, or vocational program source", "agriculture_workforce_training", ["training", "cropOrTrade", "region", "language", "sourceUpdatedAt"]]
  ];

  const WORKFORCE_PUBLIC_SOURCE_CONTRACTS = Object.freeze(sourceSeeds.map(([sourceId, displayName, sourceOwnerType, workforceSourceCategory, expectedDataFields]) => Object.freeze({
    sourceId,
    domain: "workforce/jobs",
    displayName,
    sourceOwnerType,
    workforceSourceCategory,
    supportedWorkerQuestions: ["training options", "job readiness", "career pathways", "eligibility review", "documents to prepare"],
    expectedDataFields,
    verificationRequirements: ["source owner named", "public terms reviewed", "program region covered", "freshness rule configured"],
    freshnessRequirements: {
      freshnessField: expectedDataFields.includes("postedAt") ? "postedAt" : "sourceUpdatedAt",
      staleAfter: "source-specific; live availability must not be claimed without configured freshness",
      displayRequirement: "Show source and freshness before presenting source-backed job or training guidance."
    },
    eligibilityDisclosureRequirements: ["show eligibility source", "do not guarantee acceptance", "state when user should verify with provider/employer"],
    languageLocalizationRequirements: ["English baseline", "Spanish", "French", "Arabic", "Portuguese", "Swahili", "local language review where available"],
    allowedResponseStates: ["general_guidance", "source_backed_guidance", "prepared_action_preview", "unavailable_source_fallback"],
    forbiddenClaims: commonForbiddenClaims.slice(),
    permissionRequirements: ["none for public guidance", "user approval before application, referral, employer contact, profile sharing, or interview scheduling"],
    auditRequirements: ["workforce-source-used", "freshness-disclosed", "eligibility-boundary-shown", "application-action-blocked"],
    futureRoadmapPhase: "22-workforce-public-sources",
    ...DISABLED_FLAGS
  })));

  function getWorkforcePublicSourceContracts() {
    return WORKFORCE_PUBLIC_SOURCE_CONTRACTS.slice();
  }

  return Object.freeze({
    DISABLED_FLAGS,
    WORKFORCE_PUBLIC_SOURCE_CONTRACTS,
    getWorkforcePublicSourceContracts
  });
});
