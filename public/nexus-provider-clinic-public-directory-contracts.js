(function nexusProviderClinicPublicDirectoryContractsFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusProviderClinicPublicDirectoryContracts = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusProviderClinicPublicDirectoryContractsModule() {
  const DISABLED_FLAGS = Object.freeze({
    fetchEnabled: false,
    liveAvailabilityEnabled: false,
    providerContactEnabled: false,
    appointmentSchedulingEnabled: false,
    telehealthRoomEnabled: false,
    cameraPermissionEnabled: false,
    microphonePermissionEnabled: false,
    medicalRecordAccessEnabled: false,
    prescriptionRefillEnabled: false,
    pharmacyExecutionEnabled: false,
    emergencyDispatchEnabled: false,
    locationSharingEnabled: false,
    paymentEnabled: false,
    executionEnabled: false
  });

  const commonForbiddenClaims = Object.freeze([
    "provider is live without verified source",
    "provider contacted",
    "appointment scheduled",
    "telehealth room opened",
    "medical advice or diagnosis",
    "medical records accessed",
    "prescription or refill submitted",
    "emergency help dispatched",
    "precise location shared",
    "payment processed"
  ]);

  const directorySeeds = [
    ["provider.clinic.public_directory", "Clinic public directory source", "public clinic directory, ministry health listing, or approved health access directory", "clinic", ["clinicName", "services", "region", "hours", "lastVerifiedAt"]],
    ["provider.hospital.public_directory", "Hospital public directory source", "public hospital directory or health ministry listing", "hospital", ["hospitalName", "services", "region", "emergencyDepartmentFlag", "lastVerifiedAt"]],
    ["provider.telehealth.access_point", "Telehealth access point directory source", "public telehealth access listing or partner-published entry point", "telehealth_access_point", ["serviceName", "accessMethod", "coverageRegion", "sourceUpdatedAt"]],
    ["provider.mobile_clinic.public_schedule", "Mobile clinic public schedule directory source", "public outreach schedule, mobile clinic operator listing, or NGO source", "mobile_clinic", ["operatorName", "route", "serviceWindow", "scheduleUpdatedAt"]],
    ["provider.pharmacy.public_directory", "Pharmacy public directory source", "public pharmacy directory, regulator listing, or approved medicine access directory", "pharmacy", ["pharmacyName", "services", "region", "lastVerifiedAt"]],
    ["provider.public_health.office", "Public health office directory source", "public health office, ministry health desk, or regional public agency", "public_health_office", ["officeName", "programs", "region", "lastVerifiedAt"]],
    ["provider.community_health_worker.program", "Community health worker program directory source", "public community health program or approved NGO listing", "community_health_worker", ["programName", "services", "coverageArea", "lastVerifiedAt"]],
    ["provider.transportation_to_care.access", "Transportation-to-care access directory source", "public transportation resource or approved care-access directory", "transportation_to_care", ["serviceName", "coverageArea", "eligibility", "lastVerifiedAt"]]
  ];

  const PROVIDER_CLINIC_PUBLIC_DIRECTORY_CONTRACTS = Object.freeze(directorySeeds.map(([directoryId, displayName, sourceOwnerType, directoryCategory, expectedDirectoryFields]) => Object.freeze({
    directoryId,
    domain: "healthcare access",
    displayName,
    sourceOwnerType,
    directoryCategory,
    expectedDirectoryFields,
    verificationRequirements: ["source owner named", "directory terms reviewed", "region covered", "last verified field configured"],
    freshnessRequirements: {
      freshnessField: expectedDirectoryFields.includes("scheduleUpdatedAt") ? "scheduleUpdatedAt" : "lastVerifiedAt",
      staleAfter: "30 days for static directory data; source-specific for schedules or availability",
      displayRequirement: "Show source and freshness before presenting provider directory details."
    },
    providerAvailabilityRules: ["do not claim live availability unless source provides current availability", "show unavailable_source_fallback when source is missing or stale"],
    contactBoundaryRules: ["directory display is not provider contact", "contact requires explicit approval and a verified connector", "scheduling requires provider confirmation where applicable"],
    privacyRequirements: ["do not show or share patient details", "consent required before health context sharing", "minimum necessary data for future handoff"],
    permissionRequirements: ["none for public directory viewing", "user approval before contact, scheduling, referral, location sharing, or telehealth handoff"],
    auditRequirements: ["provider-directory-source-used", "freshness-disclosed", "provider-contact-blocked", "scheduling-blocked", "health-privacy-boundary-shown"],
    allowedResponseStates: ["provider_directory_result", "source_backed_guidance", "unavailable_source_fallback", "permission_required"],
    forbiddenClaims: commonForbiddenClaims.slice(),
    futureRoadmapPhase: "21-provider-clinic-public-sources",
    ...DISABLED_FLAGS
  })));

  function getProviderClinicPublicDirectoryContracts() {
    return PROVIDER_CLINIC_PUBLIC_DIRECTORY_CONTRACTS.slice();
  }

  return Object.freeze({
    DISABLED_FLAGS,
    PROVIDER_CLINIC_PUBLIC_DIRECTORY_CONTRACTS,
    getProviderClinicPublicDirectoryContracts
  });
});
