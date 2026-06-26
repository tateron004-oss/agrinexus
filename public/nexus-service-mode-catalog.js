(function nexusServiceModeCatalogFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusServiceModeCatalog = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusServiceModeCatalogModule() {
  const SUPPORTED_LANGUAGES = Object.freeze(["English", "Spanish", "French", "Arabic", "Portuguese", "Swahili"]);

  const modeSeeds = [
    ["core_assistant", "Core Assistant Mode", ["farmers", "families", "workers", "patients", "field agents"], ["voice guidance", "source-backed answers", "safe next steps"], "low", "available-now"],
    ["farmer", "Farmer Mode", ["farmers", "cooperatives", "field agents"], ["farm help", "crop support", "market access"], "controlled", "source-ready"],
    ["agriculture_advisory", "Agriculture Advisory Mode", ["farmers", "extension workers"], ["extension guidance", "field advisory", "resource routing"], "controlled", "source-ready"],
    ["crop_issue", "Crop Issue Mode", ["farmers", "agronomists"], ["crop issue triage", "pest/disease source routing"], "controlled", "source-ready"],
    ["irrigation", "Irrigation Mode", ["farmers", "water teams"], ["irrigation education", "water resource guidance"], "controlled", "source-ready"],
    ["agritrade_marketplace", "AgriTrade Marketplace Mode", ["farmers", "buyers", "cooperatives"], ["marketplace review", "buyer/seller preparation"], "high", "partner-required"],
    ["market_price", "Market Price Mode", ["farmers", "buyers", "cooperatives"], ["price source answers", "market trend review"], "controlled", "source-ready"],
    ["logistics", "Logistics Mode", ["farmers", "logistics partners"], ["route/resource review", "future logistics handoff"], "high", "partner-required"],
    ["workforce", "Workforce Mode", ["workers", "employers", "training partners"], ["job pathways", "program guidance"], "controlled", "source-ready"],
    ["education_training", "Education/Training Mode", ["learners", "workers", "farmers"], ["learning guidance", "training resources"], "low", "available-now"],
    ["rural_health", "Rural Health Mode", ["patients", "families", "health workers"], ["health access guidance", "care navigation"], "high", "partner-required"],
    ["telehealth", "Telehealth Mode", ["patients", "providers"], ["telehealth preparation", "future provider handoff"], "high", "partner-required"],
    ["pharmacy", "Pharmacy Mode", ["patients", "pharmacies"], ["pharmacy support", "refill preparation"], "restricted", "compliance-required"],
    ["mobile_clinic", "Mobile Clinic Mode", ["patients", "clinic operators"], ["schedule lookup", "future request preparation"], "high", "partner-required"],
    ["transportation_to_care", "Transportation-to-Care Mode", ["patients", "families", "transport partners"], ["transport resources", "future booking preparation"], "high", "partner-required"],
    ["community_services", "Community Services Mode", ["families", "community organizations"], ["community resource guidance", "future referral preparation"], "controlled", "source-ready"],
    ["provider", "Provider Mode", ["providers", "clinic teams"], ["provider workflow review", "future provider dashboard"], "high", "partner-required"],
    ["field_agent", "Field Agent Mode", ["field agents", "community workers"], ["field support", "offline collection planning"], "high", "partner-required"],
    ["admin", "Admin Mode", ["admins", "operators"], ["review queues", "connector oversight"], "high", "available-now"],
    ["location_access", "Location Access Mode", ["users", "providers"], ["nearby matching", "future location sharing"], "sensitive", "compliance-required"],
    ["payment", "Payment Mode", ["buyers", "sellers", "sponsors"], ["payment review", "future payment provider handoff"], "restricted", "compliance-required"],
    ["medical_records_fhir", "Medical Records/FHIR Mode", ["patients", "providers"], ["record access preparation", "future FHIR integration"], "restricted", "compliance-required"],
    ["emergency_boundary_partner", "Emergency Boundary/Partner Mode", ["families", "responders"], ["emergency guidance", "future emergency handoff"], "restricted", "compliance-required"],
    ["offline_low_bandwidth", "Offline/Low-Bandwidth Mode", ["rural users", "field agents"], ["low bandwidth guidance", "sync-ready workflows"], "controlled", "future"],
    ["multilingual_voice", "Multilingual Voice Mode", ["multilingual users"], ["push-to-talk voice", "language switching"], "controlled", "available-now"],
    ["action_approval", "Action Approval Mode", ["all users"], ["approval review", "confirmation gates"], "high", "available-now"],
    ["audit_compliance", "Audit/Compliance Mode", ["admins", "compliance teams"], ["audit contracts", "future evidence logs"], "high", "source-ready"],
    ["trust_fraud_prevention", "Trust/Fraud Prevention Mode", ["users", "admins", "partners"], ["risk detection", "fraud review preparation"], "high", "future"]
  ];

  function isHighRisk(riskTier) {
    return ["high", "restricted", "sensitive"].includes(riskTier);
  }

  const SERVICE_MODE_CATALOG = Object.freeze(modeSeeds.map(([modeId, displayName, userGroupsServed, supportedServices, riskTier, currentStatus]) => Object.freeze({
    modeId,
    displayName,
    userGroupsServed,
    supportedServices,
    sourceRequirements: currentStatus === "available-now" ? ["local platform source", "verified public source when shown"] : ["verified source required before live use"],
    connectorRequirements: currentStatus === "available-now" ? ["no live regulated connector active"] : ["approved connector required before real-world action"],
    actionCapabilities: supportedServices.map(service => `prepare ${service}`),
    riskTier,
    languagesSupportedReady: SUPPORTED_LANGUAGES,
    onlineOfflinePosture: modeId === "offline_low_bandwidth" ? "offline-first planned; current runtime remains online/local-safe" : "online-ready with offline fallback planned",
    currentStatus,
    executionEnabled: false,
    requiresApproval: isHighRisk(riskTier),
    requiresConsent: isHighRisk(riskTier),
    requiresAudit: true,
    goLiveRequirements: ["verified source", "configured connector", "permission gate", "approval gate", "audit trail"]
  })));

  function getNexusServiceModeCatalog() {
    return SERVICE_MODE_CATALOG.slice();
  }

  return Object.freeze({
    SUPPORTED_LANGUAGES,
    SERVICE_MODE_CATALOG,
    getNexusServiceModeCatalog
  });
});
