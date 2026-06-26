(function nexusCommunityServicePublicSourceContractsFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusCommunityServicePublicSourceContracts = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusCommunityServicePublicSourceContractsModule() {
  const DISABLED_FLAGS = Object.freeze({
    fetchEnabled: false,
    referralSubmissionEnabled: false,
    agencyContactEnabled: false,
    caseworkerContactEnabled: false,
    eligibilityApprovalEnabled: false,
    accountCreationEnabled: false,
    applicationSubmissionEnabled: false,
    appointmentSchedulingEnabled: false,
    profileSharingEnabled: false,
    locationSharingEnabled: false,
    paymentEnabled: false,
    emergencyDispatchEnabled: false,
    executionEnabled: false
  });

  const commonForbiddenClaims = Object.freeze([
    "eligibility approved",
    "referral submitted",
    "agency contacted",
    "caseworker contacted",
    "personal data shared",
    "account created",
    "appointment scheduled",
    "payment processed",
    "emergency dispatched",
    "benefit guaranteed"
  ]);

  const sourceSeeds = [
    ["community.ngo.directory", "NGO and community service directory source", "public NGO directory, community resource directory, or social-service source", "ngo_community_directory", ["organization", "service", "region", "eligibility", "lastVerifiedAt"]],
    ["community.government.services", "Government service agency directory source", "public government agency, ministry, county, or municipal service directory", "government_service_directory", ["agency", "program", "region", "serviceWindow", "lastVerifiedAt"]],
    ["community.food_shelter.household", "Food, shelter, and household support resource source", "public food bank, shelter, household assistance, or social-service directory", "food_shelter_household", ["resourceName", "serviceType", "eligibility", "region", "lastVerifiedAt"]],
    ["community.family.child_support", "Maternal, child, and family support resource source", "public family support, maternal health access, child services, or caregiver-support directory", "family_child_support", ["program", "targetGroup", "services", "region", "lastVerifiedAt"]],
    ["community.disability.accessibility", "Disability and accessibility support resource source", "public disability services, accessibility support, or assistive resource directory", "disability_accessibility", ["resourceName", "supportType", "accessibilityInfo", "region", "lastVerifiedAt"]],
    ["community.legal.civil_support", "Legal aid and civil-support resource source", "public legal aid, civil support, rights information, or government service directory", "legal_civil_support", ["organization", "supportType", "jurisdiction", "lastVerifiedAt"]],
    ["community.digital_access", "Rural connectivity and digital access resource source", "public connectivity, device access, digital literacy, or community technology resource", "digital_access", ["resourceName", "serviceType", "coverageArea", "lastVerifiedAt"]],
    ["community.language.translation", "Language and translation support resource source", "public language access, interpretation, translation, or multilingual support directory", "language_translation", ["serviceName", "languages", "coverageArea", "lastVerifiedAt"]]
  ];

  const COMMUNITY_SERVICE_PUBLIC_SOURCE_CONTRACTS = Object.freeze(sourceSeeds.map(([sourceId, displayName, sourceOwnerType, communitySourceCategory, expectedDataFields]) => Object.freeze({
    sourceId,
    domain: "community resources",
    displayName,
    sourceOwnerType,
    communitySourceCategory,
    supportedCommunityQuestions: ["find resources", "understand eligibility", "prepare questions", "review next steps", "language access"],
    expectedDataFields,
    verificationRequirements: ["source owner named", "public terms reviewed", "region or jurisdiction covered", "freshness rule configured"],
    freshnessRequirements: {
      freshnessField: "lastVerifiedAt",
      staleAfter: "30 days unless source category requires shorter review",
      displayRequirement: "Show source and freshness before presenting community-resource details."
    },
    eligibilityDisclosureRequirements: ["show eligibility source", "do not guarantee eligibility", "state when user should verify with agency or provider"],
    privacyRequirements: ["do not request private details for public viewing", "consent required before sharing personal context", "minimum necessary data for future referral"],
    languageLocalizationRequirements: ["English baseline", "Spanish", "French", "Arabic", "Portuguese", "Swahili", "local language review where available"],
    allowedResponseStates: ["general_guidance", "source_backed_guidance", "provider_directory_result", "prepared_action_preview", "unavailable_source_fallback"],
    forbiddenClaims: commonForbiddenClaims.slice(),
    permissionRequirements: ["none for public guidance", "user approval before referral, agency contact, account creation, appointment request, location sharing, or personal-data sharing"],
    auditRequirements: ["community-source-used", "freshness-disclosed", "eligibility-boundary-shown", "privacy-boundary-shown", "referral-action-blocked"],
    futureRoadmapPhase: "23-community-service-public-sources",
    ...DISABLED_FLAGS
  })));

  function getCommunityServicePublicSourceContracts() {
    return COMMUNITY_SERVICE_PUBLIC_SOURCE_CONTRACTS.slice();
  }

  return Object.freeze({
    DISABLED_FLAGS,
    COMMUNITY_SERVICE_PUBLIC_SOURCE_CONTRACTS,
    getCommunityServicePublicSourceContracts
  });
});
